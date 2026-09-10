import Link from "next/link";
import { journeys, getJourneyHref } from "@/lib/journeys";

export function JourneyExplorer() {
  return (
    <section
      aria-labelledby="explore-journeys-heading"
      className="mt-16 border-t border-navy-200 pt-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
          Explore journeys
        </p>
        <h2 id="explore-journeys-heading" className="heading-section mt-3">
          Find the path that fits
        </h2>
        <p className="text-lead mt-4">
          Learn how Forxia supports organizations, teams, individuals, and structured
          coaching programs.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {journeys.map((journey) => (
          <article key={journey.slug} className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-36 w-32 items-center justify-center">
              <div
                className="hexagon flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100 via-brand-50 to-gold-100 shadow-sm ring-1 ring-brand-200/60"
                aria-hidden="true"
              >
                <span className="text-3xl font-bold text-brand-700">{journey.initial}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-brand-800">{journey.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
              {journey.description}
            </p>

            <Link
              href={getJourneyHref(journey.slug)}
              className="mt-6 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-navy-950 transition hover:bg-gold-400"
            >
              {journey.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
