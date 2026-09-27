import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  AudienceServices,
  ServicesBreadcrumb,
} from "@/components/AudienceServices";
import { JourneyExplorer } from "@/components/JourneyExplorer";
import { audienceLabels, audiencePageCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services for teams",
  description: audiencePageCopy.team.description,
};

export default function TeamServicesPage() {
  const copy = audiencePageCopy.team;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={copy.title}
        description={copy.description}
        primaryCta={{ label: "Send a request", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
      />

      <section className="section-padding">
        <div className="container-page">
          <ServicesBreadcrumb audienceLabel={audienceLabels.team} />
          <AudienceServices audience="team" />
          <JourneyExplorer />
        </div>
      </section>
    </>
  );
}
