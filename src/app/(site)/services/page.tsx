import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AudienceHub } from "@/components/AudienceHub";
import { JourneyExplorer } from "@/components/JourneyExplorer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Coaching, consulting, and learning services from ${siteConfig.name}. Browse by organizations, teams, or individuals.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Who are you looking to support?"
        description="Choose the path that fits your context. Each section groups consulting, coaching, and learning offerings for that audience."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="container-page">
          <AudienceHub />

          <div className="mt-12 text-center">
            <p className="text-sm text-navy-600">Not sure where to start?</p>
            <Link href="/contact" className="btn-secondary mt-4 inline-flex">
              Send a message
            </Link>
          </div>

          <JourneyExplorer />
        </div>
      </section>
    </>
  );
}
