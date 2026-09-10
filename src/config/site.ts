/**
 * Site-wide content and settings.
 * Edit this file to update business name, tagline, contact info, and nav.
 */
export const siteConfig = {
  name: "Forxia Coaching and Consulting",
  tagline: "Coaching and consulting for directors and vice presidents",
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
} as const;

export type SiteConfig = typeof siteConfig;
