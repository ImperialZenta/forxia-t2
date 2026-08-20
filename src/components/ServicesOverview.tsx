import Link from "next/link";
import { packages } from "@/lib/packages";

export function ServicesOverview() {
  const featured = packages.filter((pkg) => pkg.payment !== "none").slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Services
          </p>
          <h2 className="heading-section mt-3">Engagements built for impact</h2>
          <p className="text-lead mt-4">
            From rapid diagnostics to ongoing advisory—choose the level of support
            that matches where you are today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((pkg) => (
            <article key={pkg.id} className="card flex flex-col">
              <h3 className="text-xl font-semibold text-navy-900">{pkg.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                {pkg.description}
              </p>
              <p className="mt-4 text-lg font-bold text-gold-700">{pkg.price}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
          <Link href="/services" className="btn-secondary">
            See all packages
          </Link>
        </div>
      </div>
    </section>
  );
}
