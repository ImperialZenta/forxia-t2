/**
 * Site-wide content and settings.
 * Edit this file to update business name, tagline, contact info, and nav.
 */
export const siteConfig = {
  name: "Forxia Coaching and Consulting",
  tagline: "Strategic clarity for ambitious leaders",
  description:
    "Management consulting that turns complex challenges into actionable growth strategies for founders, executives, and growing teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  },

  founder: {
    name: "Andrew",
    title: "Principal Consultant",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
