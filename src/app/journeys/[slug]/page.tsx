import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JourneyExplorer } from "@/components/JourneyExplorer";
import { getJourneyBySlug, journeys } from "@/lib/journeys";

interface JourneyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);

  if (!journey) {
    return { title: "Journey not found" };
  }

  return {
    title: journey.explainerTitle,
    description: journey.description,
  };
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);

  if (!journey) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Journeys"
        title={journey.explainerTitle}
        description={journey.explainerBody}
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={
          journey.relatedServicesHref
            ? { label: "View related services", href: journey.relatedServicesHref }
            : undefined
        }
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <p className="text-lead text-navy-600">
              This page is a placeholder for the full {journey.title.toLowerCase()}{" "}
              explainer. Content for outcomes, approach, and typical engagements will
              be added here.
            </p>
            <p className="mt-4 text-sm text-navy-500">
              In the meantime, browse related services or send a message through the
              contact form.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {journey.relatedServicesHref ? (
                <Link href={journey.relatedServicesHref} className="btn-primary">
                  View related services
                </Link>
              ) : null}
              <Link href="/contact" className="btn-secondary">
                Get in touch
              </Link>
              <Link href="/services" className="btn-ghost">
                All services
              </Link>
            </div>
          </div>

          <JourneyExplorer />
        </div>
      </section>
    </>
  );
}
