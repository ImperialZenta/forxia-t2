import type { Metadata } from "next";
import Image from "next/image";
import { CredentialBadges } from "@/components/CredentialBadges";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.founder.name} and who ${siteConfig.name} helps.`,
};

const careerPositions = [
  "Senior Manager, Agile Delivery Practice",
  "Founder & Agile Coach, Forxia Coaching and Consulting",
  "Principal Agile Coach — enterprise programs, quality & DevOps transformation",
  "Product Manager, Business Analyst & Project Leader",
  "Problem Management Engineer & Systems Analyst",
];

const credentials = [
  "30+ years leading delivery, analysis, product, and transformation work",
  "BSc, Computer Science — Software Design",
  "Certificate, Organizational Coaching & Leadership",
  "Certificate, Applied Business Analysis",
  "Professional Certified Coach (PCC)",
  "Mentor Coach Specialization (MCS) — PCC level",
  "Certified Enterprise Coach (CEC) & Certified Team Coach (CTC)",
  "Certified SAFe Program Consultant & Professional Scrum Master",
  "Certified Leadership Agility 360 Coach",
];

const whoIHelp = [
  {
    title: "Directors",
    description:
      "Leading a portfolio, program, or function through a delivery or operating-model shift—and need an experienced partner to align teams, clarify priorities, and keep momentum.",
  },
  {
    title: "Vice Presidents",
    description:
      "Scaling change across multiple teams or departments, where executive sponsorship, cross-functional alignment, and measurable progress matter as much as the playbook.",
  },
  {
    title: "Senior leadership teams",
    description:
      "Building internal coaching capability, improving team health at scale, and embedding agile and systemic practices beyond software delivery alone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Hi, I'm ${siteConfig.founder.name}`}
        description={`${siteConfig.founder.title} at ${siteConfig.name}. I work with directors and vice presidents who need sharper delivery, stronger alignment, and practical ways to move complex initiatives forward.`}
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
                  My career spans more than three decades—from systems and problem
                  management engineering through product management, business analysis,
                  and senior agile leadership. That path gives me a rare combination:
                  technical fluency, product and process discipline, and the coaching
                  presence to work credibly with leaders who operate at scale.
                </p>
                <p>
                  I have served as a senior manager of an agile delivery practice,
                  principal agile coach, scrum master, product owner, and business
                  analyst—often where strategy, program execution, and people systems
                  intersect. Since 2011 I have led Forxia Coaching and Consulting,
                  partnering with leaders and teams on systemic coaching, facilitation,
                  training, and delivery improvement.
                </p>
                <p>
                  Directors and vice presidents come to me when they need more than
                  a framework slide deck: program-level facilitation, honest assessment
                  of team and organizational health, help standing up internal coaching
                  capability, and support extending agile practices into functions
                  well beyond technology. My work is direct, collaborative, and
                  anchored in outcomes you can track.
                </p>
              </div>

              <div className="card mt-10">
                <h3 className="text-lg font-semibold text-navy-900">
                  Positions & credentials
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Selected roles and qualifications—focused on the work, not the logo
                  on the business card.
                </p>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                      Career positions
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {careerPositions.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-navy-700">
                          <span className="text-gold-600" aria-hidden="true">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                      Education & certifications
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {credentials.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-navy-700">
                          <span className="text-gold-600" aria-hidden="true">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <CredentialBadges />
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
              I partner with senior leaders who own delivery results—not just
              presentations about them. Whether you need a focused consultation or
              sustained advisory support, the goal is the same: clarity, alignment,
              and forward motion.
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
