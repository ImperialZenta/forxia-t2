import Link from "next/link";
import {
  audiences,
  audienceDescriptions,
  audienceLabels,
  getAudienceHref,
  type Audience,
} from "@/lib/services";

export function AudienceHub() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {audiences.map((audience) => (
        <AudienceCard key={audience} audience={audience} />
      ))}
    </div>
  );
}

function AudienceCard({ audience }: { audience: Audience }) {
  return (
    <Link
      href={getAudienceHref(audience)}
      className="card group flex flex-col transition hover:border-brand-200 hover:shadow-md"
    >
      <h2 className="text-xl font-semibold text-navy-900 group-hover:text-brand-800">
        {audienceLabels[audience]}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
        {audienceDescriptions[audience]}
      </p>
      <span className="mt-6 text-sm font-semibold text-gold-700 group-hover:text-gold-800">
        View services →
      </span>
    </Link>
  );
}
