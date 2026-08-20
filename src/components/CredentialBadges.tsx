import Image from "next/image";

const certificationBadges = [
  {
    name: "Professional Certified Coach (PCC)",
    issuer: "International Coaching Federation",
    image: "/credentials/icf-pcc.png",
    verifyUrl:
      "https://coachingfederation.org/credentialing/icf-credentials/find-a-coach/",
  },
  {
    name: "Certified Team Coach (CTC)",
    issuer: "Scrum Alliance",
    image: "/credentials/scrum-alliance-ctc.png",
    verifyUrl: "https://www.scrumalliance.org/get-certified/agile-coaching",
  },
  {
    name: "Certified Enterprise Coach (CEC)",
    issuer: "Scrum Alliance",
    image: "/credentials/scrum-alliance-cec.png",
    verifyUrl: "https://www.scrumalliance.org/get-certified/agile-coaching",
  },
] as const;

export function CredentialBadges() {
  return (
    <div className="mt-8 border-t border-navy-200 pt-8">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-700">
        Credential badges
      </h4>
      <p className="mt-2 text-sm text-navy-600">
        Official marks for active coaching certifications.
      </p>
      <ul className="mt-6 grid gap-8 sm:grid-cols-3">
        {certificationBadges.map((badge) => (
          <li key={badge.name} className="flex flex-col items-center text-center">
            <a
              href={badge.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full max-w-[180px] rounded-xl p-2 transition-colors hover:bg-brand-50"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[140px]">
                <Image
                  src={badge.image}
                  alt={`${badge.name} badge`}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-navy-900 group-hover:text-brand-700">
                {badge.name}
              </p>
              <p className="mt-1 text-xs text-navy-500">{badge.issuer}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
