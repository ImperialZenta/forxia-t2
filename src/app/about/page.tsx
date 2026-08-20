import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.founder.name} and who ${siteConfig.name} helps.`,
};

const credentials = [
  "15+ years in strategy, operations, and leadership advisory",
  "Former executive roles at high-growth startups and Fortune 500 companies",
  "MBA, certified in change management (Prosci)",
  "Trusted by founders, COOs, and executive teams across SaaS, professional services, and healthcare",
];

const whoIHelp = [
  {
    title: "Founders & CEOs",
    description:
      "Scaling past product-market fit, preparing for fundraising, or navigating first-time executive team builds.",
  },
  {
    title: "Operations leaders",
    description:
      "Optimizing processes, improving cross-functional alignment, and building systems that scale without chaos.",
  },
  {
    title: "Executive teams",
    description:
      "Facilitating strategic planning, OKR cycles, and high-stakes decisions where alignment matters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Hi, I'm ${siteConfig.founder.name}`}
        description={`${siteConfig.founder.title} at ${siteConfig.name}. I help leaders cut through complexity and build strategies their teams can actually execute.`}
        primaryCta={{ label: "Work with me", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            <div className="shrink-0">
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-gold-400/70 shadow-lg sm:h-60 sm:w-60">
                <Image
                  src="/andrew-portrait.png"
                  alt={`Portrait of ${siteConfig.founder.name}`}
                  fill
                  sizes="(max-width: 640px) 208px, 240px"
                  className="object-cover object-[center_18%]"
                  priority
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="heading-section text-center lg:text-left">Background</h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  I started my career in management consulting before moving into
                  operating roles—leading strategy, product, and operations at companies
                  from early-stage startups to established enterprises. That dual
                  perspective means I understand both the boardroom and the day-to-day
                  realities of execution.
                </p>
                <p>
                  Today, I work independently with a select group of clients who value
                  direct access to senior expertise, honest feedback, and practical
                  frameworks—not bloated teams or recycled playbooks.
                </p>
                <p>
                  My approach is collaborative and outcomes-focused. We define success
                  upfront, move quickly, and measure progress against clear milestones.
                </p>
              </div>

              <div className="card mt-10">
                <h3 className="text-lg font-semibold text-navy-900">Credentials</h3>
                <ul className="mt-4 space-y-3">
                  {credentials.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-navy-700">
                      <span className="text-gold-600" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="heading-section">Who I help</h2>
            <p className="text-lead mt-4">
              I partner with leaders who are ready to invest in clarity—whether
              that means a focused assessment or ongoing strategic support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whoIHelp.map((item) => (
              <article key={item.title} className="card">
                <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
