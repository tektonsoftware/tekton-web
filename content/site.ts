/**
 * Global site config — the single source of truth for company info, navigation,
 * the demo call-to-action, and SEO/structured-data strings.
 *
 * Edit copy here, not in components. Every page imports from content/*.ts.
 */

// intent: Public-facing site URL. Used for canonical URLs, sitemap, OG tags.
// Override with NEXT_PUBLIC_SITE_URL in Vercel if the production domain changes
// (e.g. to a www. or apex variant).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tektonsoftware.com"
).replace(/\/$/, "");

export const site = {
  // intent: The product/company name. Always paired with disambiguating context in
  // <title> tags — never shipped as bare "Tekton" (CNCF trademark overlap).
  name: "Tekton",
  legalName: "Tekton",

  // intent: One-line elevator description, reused in meta + JSON-LD.
  // Disambiguates aggressively from the CNCF Tekton CI/CD project.
  description:
    "Tekton is private, on-premise AI infrastructure for businesses with sensitive data. Every answer is grounded in your documents and cites a verified source — and nothing ever leaves your network.",

  // intent: Short tagline for the wordmark area / OG.
  tagline: "Private AI for businesses with sensitive data.",

  founderLocation: "Las Vegas, Nevada",

  // intent: Primary conversion action — repeated verbatim across the site.
  cta: {
    label: "Book a 15-minute demo",
    href: "/demo",
  },

  // intent: Closing CTA block in the global footer — last chance to convert.
  // Restates the demo ask in plainer language than the hero.
  footerCta: {
    heading: "See it run on your own data.",
    body: "Fifteen minutes, no slides. We'll show you verified, source-cited answers from documents like yours — running entirely offline.",
  },

  // intent: Top navigation order. Demo lives as the primary button, not a nav link.
  nav: [
    { label: "Product", href: "/product" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],

  // intent: Footer link groups. Keep terse and scannable.
  footer: {
    product: [
      { label: "Product overview", href: "/product" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Book a demo", href: "/demo" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },

  // intent: Used in JSON-LD Organization schema. No social accounts yet.
  // TODO: add sameAs URLs (LinkedIn, etc.) when accounts exist.
  sameAs: [] as string[],
} as const;
