export type PaymentType = "stripe" | "contact" | "none";

export interface Package {
  id: string;
  name: string;
  description: string;
  /** Display price — all amounts in Canadian dollars (CAD) */
  price: string;
  priceAmount?: number;
  priceLabel?: string;
  payment: PaymentType;
  features: string[];
  highlighted?: boolean;
}

/**
 * Consulting packages and services. All prices in CAD.
 * - payment: "stripe" → Pay now (requires STRIPE_PRICE_* env vars + STRIPE_SECRET_KEY)
 * - payment: "contact" → Get in touch via contact form (custom quote)
 */
export const packages: Package[] = [
  {
    id: "general-consultation",
    name: "General 30 min Consultation Call",
    description:
      "A focused half-hour session to discuss your situation, answer questions, and identify practical next steps.",
    price: "CA $150",
    priceAmount: 15000,
    priceLabel: "one-time · 30 minutes",
    payment: "stripe",
    features: [
      "Video or phone call",
      "Confidential discussion",
      "Clear recommendations",
      "Optional follow-up proposal",
    ],
  },
  {
    id: "foundation-assessment",
    name: "Foundation Assessment",
    description:
      "A focused 2-week diagnostic of your operations, positioning, and growth bottlenecks—with a prioritized action plan you can execute immediately.",
    price: "CA $2,500",
    priceAmount: 250000,
    priceLabel: "one-time",
    payment: "stripe",
    features: [
      "Stakeholder interviews & data review",
      "Competitive landscape snapshot",
      "90-day prioritized roadmap",
      "60-minute strategy debrief",
    ],
  },
  {
    id: "growth-retainer",
    name: "Growth Consulting Retainer",
    description:
      "Ongoing strategic partnership for leaders who want consistent expert guidance without building an in-house strategy team.",
    price: "CA $4,500",
    priceAmount: 450000,
    priceLabel: "per month",
    payment: "stripe",
    highlighted: true,
    features: [
      "Bi-weekly strategy sessions",
      "Async Slack/email support",
      "Quarterly OKR planning",
      "Priority access for urgent decisions",
    ],
  },
  {
    id: "enterprise-strategy",
    name: "Enterprise Strategy",
    description:
      "Custom engagements for complex organizational change, M&A integration, or multi-stakeholder transformation programs.",
    price: "Contact for quote",
    payment: "contact",
    features: [
      "Scope tailored to your organization",
      "Executive workshop facilitation",
      "Cross-functional alignment",
      "Board-ready deliverables",
    ],
  },
];

export function getPackageById(id: string): Package | undefined {
  return packages.find((pkg) => pkg.id === id);
}

export function getStripePackages(): Package[] {
  return packages.filter((pkg) => pkg.payment === "stripe");
}
