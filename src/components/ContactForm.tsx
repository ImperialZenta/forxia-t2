"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { services, audiences, audienceLabels } from "@/lib/services";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      serviceInterest: String(formData.get("serviceInterest") ?? "") || undefined,
      message: String(formData.get("message") ?? ""),
      companyUrl: String(formData.get("companyUrl") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="card border-brand-200 bg-brand-50" role="status">
        <h3 className="text-lg font-semibold text-brand-900">Message sent</h3>
        <p className="mt-2 text-sm text-brand-800">
          Thanks for reaching out. I&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="companyUrl">Company website</label>
        <input
          id="companyUrl"
          name="companyUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
            placeholder="Your name"
          />
        </Field>

        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field label="Service interest" htmlFor="serviceInterest">
        <select
          id="serviceInterest"
          name="serviceInterest"
          defaultValue={preselectedService}
          className="input"
        >
          <option value="">Select a service (optional)</option>
          {audiences.map((audience) => {
            const items = services.filter((service) => service.audience === audience);

            if (items.length === 0) {
              return null;
            }

            return (
              <optgroup key={audience} label={audienceLabels[audience]}>
                {items.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </optgroup>
            );
          })}
          <option value="Other">Other</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input resize-y"
          placeholder="Tell me about your goals and timeline…"
        />
      </Field>

      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label}
        {required ? <span className="text-gold-600"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
