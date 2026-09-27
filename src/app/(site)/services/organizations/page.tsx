import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  AudienceServices,
  ServicesBreadcrumb,
} from "@/components/AudienceServices";
import { JourneyExplorer } from "@/components/JourneyExplorer";
import { audienceLabels, audiencePageCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services for organizations",
  description: audiencePageCopy.organization.description,
};

export default function OrganizationServicesPage() {
  const copy = audiencePageCopy.organization;

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
          <ServicesBreadcrumb audienceLabel={audienceLabels.organization} />
          <AudienceServices audience="organization" />
          <JourneyExplorer />
        </div>
      </section>
    </>
  );
}
