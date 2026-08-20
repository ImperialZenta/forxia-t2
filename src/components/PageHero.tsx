import Link from "next/link";
import { siteConfig } from "@/config/site";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-800/25 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="container-page relative section-padding">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="heading-display max-w-3xl text-white">{title}</h1>
        {description ? (
          <p className="text-lead mt-6 max-w-2xl text-navy-300">{description}</p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta ? (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="btn border border-gold-500/50 bg-transparent text-white hover:border-gold-400 hover:bg-white/5"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <PageHero
      eyebrow={siteConfig.name}
      title="Turn strategy into measurable growth"
      description={siteConfig.description}
      primaryCta={{ label: "Get in touch", href: "/contact" }}
      secondaryCta={{ label: "View services", href: "/services" }}
    />
  );
}
