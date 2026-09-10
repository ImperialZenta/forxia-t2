import { NextResponse } from "next/server";
import { getServiceById } from "@/lib/services";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getStripePriceId } from "@/lib/stripe-prices";
import { checkoutSchema } from "@/lib/validations";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    if (!isStripeConfigured()) {
      return NextResponse.json(
        { error: "Online payments are not configured yet. Please contact us instead." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const parsed = checkoutSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid package" }, { status: 400 });
    }

    const { packageId } = parsed.data;
    const pkg = getServiceById(packageId);

    if (!pkg || pkg.payment !== "stripe") {
      return NextResponse.json({ error: "Package not available for checkout" }, { status: 400 });
    }

    const priceId = getStripePriceId(packageId);

    if (!priceId) {
      console.error(`Missing Stripe price ID for package: ${packageId}`);
      return NextResponse.json(
        { error: "This package is not ready for checkout yet. Please contact us." },
        { status: 503 }
      );
    }

    const stripe = getStripe();
    const baseUrl = siteConfig.url.replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: pkg.priceLabel === "per month" ? "subscription" : "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/services/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/services?canceled=1`,
      metadata: {
        packageId: pkg.id,
        packageName: pkg.name,
      },
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout API error:", err);
    return NextResponse.json(
      { error: "Unable to start checkout. Please try again or contact us." },
      { status: 500 }
    );
  }
}
