import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/lib/packages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Consulting packages and services from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Packages designed for clarity and results"
        description="Fixed-price engagements in Canadian dollars (CAD), plus custom work quoted via the contact form. Pay securely online for listed packages."
        primaryCta={{ label: "Send a request", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="container-page">
          <p className="mb-8 text-sm font-medium text-navy-600">
            All prices are in Canadian dollars (CAD).
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-brand-100 bg-brand-50/50 p-8">
            <h2 className="text-xl font-semibold text-navy-900">Payment & billing</h2>
            <ul className="mt-4 space-y-2 text-sm text-navy-600">
              <li>
                <strong className="text-navy-800">Pay now</strong> — Secure CAD checkout
                powered by Stripe (credit/debit cards).
              </li>
              <li>
                <strong className="text-navy-800">Get in touch</strong> — Custom scopes
                and enterprise work: submit a request via the contact form.
              </li>
              <li>
                <strong className="text-navy-800">Consultation call</strong> — Book a
                30-minute general consultation (CA $150) with Pay now above.
              </li>
            </ul>
            <p className="mt-4 text-sm text-navy-500">
              PayPal can be added later if needed—see README for setup notes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
