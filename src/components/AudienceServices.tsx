import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import {
  modalities,
  modalityLabels,
  getServicesByAudienceAndModality,
  type Audience,
} from "@/lib/services";

interface AudienceServicesProps {
  audience: Audience;
}

export function AudienceServices({ audience }: AudienceServicesProps) {
  return (
    <div className="space-y-16">
      {modalities.map((modality) => {
        const items = getServicesByAudienceAndModality(audience, modality);

        if (items.length === 0) {
          return null;
        }

        return (
          <section key={modality} aria-labelledby={`${audience}-${modality}-heading`}>
            <h2
              id={`${audience}-${modality}-heading`}
              className="text-2xl font-bold text-navy-900"
            >
              {modalityLabels[modality]}
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function ServicesBreadcrumb({
  audienceLabel,
}: {
  audienceLabel?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/services" className="hover:text-brand-700">
            Services
          </Link>
        </li>
        {audienceLabel ? (
          <>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-navy-800">{audienceLabel}</li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}
