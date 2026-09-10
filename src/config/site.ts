/**
 * Site-wide content and settings.
 * Edit this file to update business name, tagline, contact info, and nav.
 */
export const siteConfig = {
  name: "Forxia Coaching and Consulting",
  tagline:
    "Helping leaders cut the complexity so teams can actually deliver",
  taglines: [
    "Helping leaders cut the complexity so teams can actually deliver",
    "For people tired of coordinating work instead of getting it done",
    "Clarity, flow, and results — without another framework slide deck",
    "We help leaders get delivery moving, not just talking about it",
    "For teams that need less process theatre and more work that ships",
    "Cut the drag. Build the capability. Make delivery mean something again.",
  ],
  description:
    "Senior advisory for leadership teams stuck in coordination drag. We bust complexity, stand up product capability, and reshape how teams work together.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:8000",

  contact: {
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  },

  founder: {
    name: "Andrew",
    title: "Principal Consultant & Coach",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  /** Toggle unfinished sections without removing code. */
  features: {
    /** Learning journeys explorer + /journeys/* pages. Set true when content is ready. */
    journeys: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
