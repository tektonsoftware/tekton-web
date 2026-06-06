/**
 * Pricing copy. Three public tiers. Prices are PLACEHOLDERS — see TODO.md.
 * Edit prices, inclusions, and exclusions here. The component renders this verbatim.
 *
 * `priceTodo: true` makes the page mark the figure as provisional so you don't ship
 * a number you haven't confirmed.
 */

export const pricingMeta = {
  title: "Pricing",
  description:
    "Three tiers of Tekton, sized by firm: Small, Mid, and Department. Up-front for the appliance plus a monthly platform fee. Deployment, training, model updates, and support included in every tier.",
};

export const pricing = {
  intro: {
    eyebrow: "Pricing",
    heading: "Priced as a product, not a project.",
    body: "Each tier is an appliance sized to your firm, an up-front cost for the hardware and deployment, and a monthly fee for the platform and support. No usage metering, no per-seat surprises.",
  },

  // intent: Three tiers, increasing in scale. "highlighted" gives the middle tier
  // the visual default-choice treatment common in B2B pricing.
  // TODO: confirm all prices before launch — these are provisional.
  tiers: [
    {
      name: "Small",
      // intent: Entry appliance for a small firm.
      tagline: "For a small firm getting started with private AI.",
      upfront: "$18,000",
      monthly: "$1,500/mo",
      priceTodo: true,
      cta: { label: "Book a demo", href: "/demo" },
      includes: [
        "Tekton Core — small appliance SKU",
        "Tekton Connect — standard connector set",
        "Tekton Verify — verified-citation engine",
        "Tekton Shield — RBAC and audit logging",
        "On-site or guided deployment",
        "Team training session",
      ],
      excludes: [
        "High-availability / redundant appliance",
        "Custom connectors beyond the standard set",
        "Dedicated support engineer",
      ],
    },
    {
      name: "Mid",
      // intent: The default recommendation for most buyers.
      tagline: "For a growing firm with more sources and more users.",
      upfront: "$32,000",
      monthly: "$2,800/mo",
      priceTodo: true,
      highlighted: true,
      cta: { label: "Book a demo", href: "/demo" },
      includes: [
        "Everything in Small, plus:",
        "Tekton Core — mid appliance SKU (higher capacity)",
        "Expanded connector set",
        "Priority support SLA",
        "Quarterly architecture check-in",
      ],
      excludes: [
        "High-availability / redundant appliance",
        "Multi-site deployment",
      ],
    },
    {
      name: "Department",
      // intent: Largest public tier; bigger capacity and support commitment.
      tagline: "For a department-scale deployment with demanding uptime.",
      upfront: "$60,000",
      monthly: "$4,000/mo",
      priceTodo: true,
      cta: { label: "Book a demo", href: "/demo" },
      includes: [
        "Everything in Mid, plus:",
        "Tekton Core — department appliance SKU (highest capacity)",
        "High-availability configuration option",
        "Full connector catalog + custom connector scoping",
        "Dedicated support engineer and named SLA",
      ],
      excludes: ["Multi-region failover (contact us)"],
    },
  ],

  // intent: Reassurance strip — what you never have to negotiate for.
  everyTier: {
    eyebrow: "In every tier",
    heading: "What's included no matter the size.",
    items: [
      {
        title: "Deployment",
        body: "We install and configure the appliance on your network — you don't assemble anything.",
      },
      {
        title: "Training",
        body: "A hands-on session so your team is productive on day one, not month three.",
      },
      {
        title: "Quarterly model updates",
        body: "Reviewed model and software updates delivered on a predictable cadence.",
      },
      {
        title: "Support SLA",
        body: "A defined response commitment — escalating with tier — for when you need us.",
      },
    ],
  },

  // intent: Honest footnote — the prices are provisional and custom scope exists.
  footnote:
    "Prices shown are provisional and subject to change before launch. Need something between or beyond these tiers? Book a demo and we'll scope it.",
} as const;
