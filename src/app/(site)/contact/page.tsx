import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your goals"
        description="Share a bit about what you're working on and we'll take it from there."
      />

      <section className="section-padding">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-navy-900">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              Use the form to share your details and what you&apos;re looking for. I read
              every submission personally.
            </p>

            {siteConfig.contact.calendlyUrl ? (
              <div className="mt-6 card">
                <h3 className="font-semibold text-navy-900">Schedule directly</h3>
                <p className="mt-2 text-sm text-navy-600">
                  Pick a time that works for you.
                </p>
                <a
                  href={siteConfig.contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 inline-flex"
                >
                  Open Calendly
                </a>
              </div>
            ) : null}

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-navy-800">Best for</dt>
                <dd className="text-navy-600">
                  Custom quotes, enterprise strategy, and general inquiries
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<div className="card text-navy-600">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
