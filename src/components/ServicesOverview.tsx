import Link from "next/link";
import {
  audiences,
  audienceDescriptions,
  audienceLabels,
  getAudienceHref,
} from "@/lib/services";

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Services
          </p>
          <h2 className="heading-section mt-3">Find the right support</h2>
          <p className="text-lead mt-4">
            Browse consulting, coaching, and learning by who you want to support:
            your organization, a team, or yourself.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <Link
              key={audience}
              href={getAudienceHref(audience)}
              className="card group flex flex-col transition hover:border-brand-200 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-navy-900 group-hover:text-brand-800">
                {audienceLabels[audience]}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                {audienceDescriptions[audience]}
              </p>
              <span className="mt-4 text-sm font-semibold text-gold-700 group-hover:text-gold-800">
                View services →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
          <Link href="/services" className="btn-secondary">
            Browse all services
          </Link>
        </div>
      </div>
    </section>
  );
}
