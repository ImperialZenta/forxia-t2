import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Payment successful",
  robots: { index: false },
};

export default function CheckoutSuccessPage() {
  return (
    <section className="section-padding">
      <div className="container-page max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-2xl text-brand-700 ring-2 ring-gold-300/50">
          ✓
        </div>
        <h1 className="heading-section mt-6">Thank you for your purchase</h1>
        <p className="text-lead mt-4">
          Your payment was successful. You&apos;ll receive a confirmation email from
          Stripe shortly, and {siteConfig.founder.name} will reach out to schedule your kickoff.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
