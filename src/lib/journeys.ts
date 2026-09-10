export interface Journey {
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
  explainerTitle: string;
  explainerBody: string;
  relatedServicesHref?: string;
  /** Single letter shown inside the hexagon placeholder */
  initial: string;
}

export const journeys: Journey[] = [
  {
    slug: "organizations",
    title: "Organization journeys",
    initial: "O",
    description:
      "Diagnostics and short engagements for leadership teams that need clearer delivery and ways of working.",
    ctaLabel: "Learn more",
    explainerTitle: "Organization journeys",
    explainerBody:
      "Placeholder explainer for how Forxia partners with directors, vice presidents, and leadership teams on diagnostics and delivery immersion. Full journey content coming soon.",
    relatedServicesHref: "/services/organizations",
  },
  {
    slug: "teams",
    title: "Team journeys",
    initial: "T",
    description:
      "Coaching and facilitation for squads that need clearer flow, stronger collaboration, and better delivery.",
    ctaLabel: "Explore path",
    explainerTitle: "Team journeys",
    explainerBody:
      "Placeholder explainer for how Forxia supports scrum teams, product trios, and cross-functional squads through team coaching, topology analysis, and facilitated learning. Full journey content coming soon.",
    relatedServicesHref: "/services/teams",
  },
  {
    slug: "individuals",
    title: "Individual journeys",
    initial: "I",
    description:
      "1:1 coaching, Leadership Agility 360, Scrum Master and Product Owner training, and consultation for senior professionals investing in their growth.",
    ctaLabel: "Learn more",
    explainerTitle: "Individual journeys",
    explainerBody:
      "Placeholder explainer for individual leaders seeking 1:1 coaching, a Leadership Agility 360, Scrum Master or Product Owner training, and consultation. Full journey content coming soon.",
    relatedServicesHref: "/services/individuals",
  },
  {
    slug: "coaching-programs",
    title: "Coaching programs",
    initial: "C",
    description:
      "Structured coaching offerings across leader and team contexts, designed to build capability that lasts.",
    ctaLabel: "Get started",
    explainerTitle: "Coaching programs",
    explainerBody:
      "Placeholder explainer for structured coaching across 1:1 work, Leadership Agility 360, and team coaching. Full journey content coming soon.",
    relatedServicesHref: "/services",
  },
];

export function getJourneyBySlug(slug: string): Journey | undefined {
  return journeys.find((journey) => journey.slug === slug);
}

export function getJourneyHref(slug: string): string {
  return `/journeys/${slug}`;
}
