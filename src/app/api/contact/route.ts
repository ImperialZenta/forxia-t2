import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.errors[0]?.message ?? "Invalid form data";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    const { name, email, serviceInterest, message } = parsed.data;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!toEmail) {
      console.error("CONTACT_EMAIL is not configured");
      return NextResponse.json(
        { error: "Contact form is not available right now. Please try again later." },
        { status: 503 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Contact form is not available right now. Please try again later." },
        { status: 503 }
      );
    }

    const resend = new Resend(resendKey);
    const fromEmail =
      process.env.EMAIL_FROM ?? `${siteConfig.name} <onboarding@resend.dev>`;

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${serviceInterest ? `<p><strong>Service interest:</strong> ${escapeHtml(serviceInterest)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[${siteConfig.name}] Message from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
