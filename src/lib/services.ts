export type PaymentType = "stripe" | "contact" | "none";
export type Audience = "organization" | "team" | "individual";
export type Modality = "consulting" | "coaching" | "learning";

export interface Service {
  id: string;
  name: string;
  description: string;
  audience: Audience;
  modality: Modality;
  /** Display price — all amounts in Canadian dollars (CAD) */
  price: string;
  priceAmount?: number;
  priceLabel?: string;
  /** Quiet disclaimer under the price, e.g. tax and travel */
  priceNote?: string;
  payment: PaymentType;
  features: string[];
  highlighted?: boolean;
}

export const modalities: Modality[] = ["consulting", "coaching", "learning"];

export const modalityLabels: Record<Modality, string> = {
  consulting: "Consulting",
  coaching: "Coaching",
  learning: "Learning",
};

export const audiences: Audience[] = ["organization", "team", "individual"];

export const audienceLabels: Record<Audience, string> = {
  organization: "Organizations",
  team: "Teams",
  individual: "Individuals",
};

export const audienceDescriptions: Record<Audience, string> = {
  organization:
    "Diagnostics and delivery immersion for organizations that need clearer value delivery.",
  team: "Coaching and facilitation so teams deliver value with less coordination drag.",
  individual:
    "1:1 coaching, a coaching program session, Leadership Agility 360, Scrum Master and Product Owner training, and consultation for senior professionals.",
};

export const audiencePageCopy: Record<
  Audience,
  { title: string; description: string }
> = {
  organization: {
    title: "Services for organizations",
    description:
      "Diagnostics and delivery immersion for directors, vice presidents, and leadership teams navigating complex change.",
  },
  team: {
    title: "Services for teams",
    description:
      "Support for scrum teams, product trios, and cross-functional squads that need clearer flow, stronger collaboration, and better delivery.",
  },
  individual: {
    title: "Services for individuals",
    description:
      "1:1 coaching, a coaching program session, Leadership Agility 360, Scrum Master and Product Owner training, and consultation for leaders investing in their own growth and impact.",
  },
};

/**
 * All services. Prices in CAD.
 * - payment: "stripe" → Pay now (requires STRIPE_PRICE_* env vars + STRIPE_SECRET_KEY)
 * - payment: "contact" → Get in touch via contact form (custom quote)
 */
export const services: Service[] = [
  // Organizations — consulting (migrated packages)
  {
    id: "organizational-assessment",
    name: "Organizational Assessment",
    description:
      "A one-day interview set, staff survey, and half-day workshop, compiled into a report on the culture you have, the culture people want, and where assets and contradictions are getting in the way of the goals.",
    audience: "organization",
    modality: "consulting",
    price: "CA $18,000",
    priceLabel: "package",
    priceNote: "Plus tax. Travel extra if delivered on-site.",
    payment: "contact",
    features: [
      "One day of 45-minute interviews with selected staff",
      "Survey for colleagues not in the interviews",
      "Half-day workshop: Competing Values Framework, weighted SWOT, and a management exploration (up to 16 people)",
      "Written report: current vs. desired culture, assets and contradictions",
    ],
  },
  {
    id: "delivery-immersion",
    name: "Delivery Immersion Day",
    description:
      "A day inside a Scrum or Kanban team — watching how work actually moves, then a debrief with the people who can change it. A practical tune-up after certified training, or whenever delivery needs an outside eye.",
    audience: "organization",
    modality: "consulting",
    price: "CA $3,000",
    priceLabel: "per day",
    priceNote: "Plus tax. Travel extra if delivered on-site.",
    payment: "contact",
    features: [
      "Observe planning, stand-up, review, or the flow of work with one team",
      "Short conversations with the team and product owner",
      "End-of-day debrief with the sponsoring leader",
      "Written recap with recommended next actions",
    ],
  },
  // Teams — consulting
  {
    id: "team-topology-assessment",
    name: "Team Topology & Flow Assessment",
    description:
      "Analyze how your team interacts with others, where handoffs hurt flow, and what structure would serve delivery better.",
    audience: "team",
    modality: "consulting",
    price: "Contact for quote",
    payment: "contact",
    features: [
      "Team interaction mapping",
      "Dependency and handoff analysis",
      "Recommendations for team design",
      "Action plan with leadership debrief",
    ],
  },
  // Teams — coaching
  {
    id: "agile-team-coaching",
    name: "Agile Team Coaching",
    description:
      "Embedded coaching for teams to improve collaboration, delivery habits, and continuous improvement.",
    audience: "team",
    modality: "coaching",
    price: "Contact for quote",
    payment: "contact",
    features: [
      "Regular team coaching sessions",
      "Facilitation of retrospectives and planning",
      "Support for team health and psychological safety",
      "Practical experiments toward better flow",
    ],
  },
  // Teams — learning
  {
    id: "team-facilitation-workshops",
    name: "Team Facilitation & Working Agreements",
    description:
      "A full day with one team of up to 10 people: facilitation practice, working agreements, and how the team handles conflict and feedback. You leave with agreements the team wrote, not a slide deck.",
    audience: "team",
    modality: "learning",
    price: "CA $6,000",
    priceLabel: "package",
    priceNote: "Plus tax. Travel extra if delivered on-site.",
    payment: "contact",
    features: [
      "Short intake so the day matches how this team actually works",
      "One full day with one team, up to 10 people",
      "Facilitation practice, working agreements, and conflict/feedback exercises",
      "Written working agreements and a takeaway toolkit",
    ],
  },
  // Individuals — consulting (migrated package)
  {
    id: "general-consultation",
    name: "General 30 min Consultation Call",
    description:
      "A focused half-hour session to discuss your situation, answer questions, and identify practical next steps.",
    audience: "individual",
    modality: "consulting",
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
  // Individuals — coaching
  {
    id: "individual-coaching",
    name: "1:1 Coaching",
    description:
      "A confidential hour with an ICF Professional Certified Coach. One conversation usually runs three or four sessions. If the work needs a longer arc, or more than one person, we can shape a package or a reserved block.",
    audience: "individual",
    modality: "coaching",
    price: "CA $550",
    priceLabel: "per 60-minute session",
    priceNote: "Plus tax.",
    payment: "contact",
    features: [
      "Sixty-minute confidential session, by video or in person",
      "One conversation usually lasts three or four sessions",
      "A package if the work needs a longer arc or a defined set of sessions",
      "Organizations can reserve a block for one person or several",
    ],
  },
  {
    id: "coaching-program-session",
    name: "Coaching Program Session",
    description:
      "A one-time, confidential 60-minute session with an ICF Professional Certified Coach. For people already in a coaching program, or preparing to join one, who need to experience professional coaching as part of that program’s requirements.",
    audience: "individual",
    modality: "coaching",
    price: "CA $150",
    priceLabel: "one-time · 60 minutes",
    priceNote: "Plus tax.",
    payment: "contact",
    features: [
      "Sixty-minute confidential session, by video or in person",
      "ICF Professional Certified Coach",
      "One session only — not a coaching package",
      "For people in a program, or joining one, that requires this coaching",
      "When you get in touch, tell us the program and its coaching requirement",
    ],
  },
  {
    id: "leadership-agility-360",
    name: "Leadership Agility 360",
    description:
      "A certified Leadership Agility 360 for one leader: intake, the licensed instrument, setup and completion support, a two-hour debrief that narrows the feedback to six focus areas, and one coaching session to begin work on one of them.",
    audience: "individual",
    modality: "coaching",
    price: "CA $5,500",
    priceLabel: "package",
    priceNote: "Plus tax. Travel extra if delivered on-site.",
    payment: "contact",
    features: [
      "Intake: how the 360 works and who to invite",
      "Licensed Leadership Agility 360 included",
      "Setup, launch, and completion support over three weeks",
      "Two-hour debrief: make sense of the feedback and choose six focus areas",
      "One 60-minute coaching session to begin work on one focus area",
    ],
  },
  // Individuals — learning
  {
    id: "agile-scrum-master-training",
    name: "Agile Scrum Master Training",
    description:
      "A two-day live online class on the Scrum Master role: facilitation, team accountability, and how work actually moves. Applied practice, not a slide deck. Agile Coaches Alliance accreditation for Scrum Master skills on completion.",
    audience: "individual",
    modality: "learning",
    price: "CA $550",
    priceLabel: "per person · two-day online",
    priceNote: "Plus tax. Travel extra if delivered on-site.",
    payment: "contact",
    features: [
      "Two-day live online class",
      "Applied exercises on Scrum Master work",
      "Agile Coaches Alliance accreditation for Scrum Master skills on completion",
      "Organizations can book a private online or on-site class",
    ],
  },
  {
    id: "agile-product-owner-training",
    name: "Agile Product Owner Training",
    description:
      "A two-day live online class on product ownership: outcomes, stakeholders, and a backlog the team can use. Applied practice, not a slide deck. Agile Coaches Alliance accreditation for Product Owner skills on completion.",
    audience: "individual",
    modality: "learning",
    price: "CA $550",
    priceLabel: "per person · two-day online",
    priceNote: "Plus tax. Travel extra if delivered on-site.",
    payment: "contact",
    features: [
      "Two-day live online class",
      "Applied exercises on Product Owner work",
      "Agile Coaches Alliance accreditation for Product Owner skills on completion",
      "Organizations can book a private online or on-site class",
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServicesByAudience(audience: Audience): Service[] {
  return services.filter((service) => service.audience === audience);
}

export function getServicesByAudienceAndModality(
  audience: Audience,
  modality: Modality
): Service[] {
  return services.filter(
    (service) => service.audience === audience && service.modality === modality
  );
}

export function getStripeServices(): Service[] {
  return services.filter((service) => service.payment === "stripe");
}

export function getAudienceHref(audience: Audience): string {
  const paths: Record<Audience, string> = {
    organization: "/services/organizations",
    team: "/services/teams",
    individual: "/services/individuals",
  };
  return paths[audience];
}
