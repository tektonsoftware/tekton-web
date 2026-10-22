/**
 * Global site config — the single source of truth for company info, navigation,
 * the contact call-to-action, home-page copy, and SEO/structured-data strings.
 *
 * The site is a single page (app/page.tsx). Edit copy here, not in components.
 */

// intent: Public-facing site URL. Used for canonical URLs, sitemap, OG tags.
// Override with NEXT_PUBLIC_SITE_URL in Vercel if the production domain changes
// (e.g. to a www. or apex variant).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tektonsoftware.com"
).replace(/\/$/, "");

export const site = {
  // intent: The company name. Always paired with disambiguating context in
  // <title> tags — never shipped as bare "Tekton" (CNCF trademark overlap).
  name: "Tekton",
  legalName: "Tekton",

  // intent: One-line elevator description, reused in meta + JSON-LD.
  // "Software company" + location disambiguates from the CNCF Tekton CI/CD project.
  description:
    "Tekton is an independent software company based in Las Vegas, Nevada, building a family of focused products for businesses.",

  // intent: Short tagline for the footer / OG card.
  tagline: "Focused software for serious work.",

  founderLocation: "Las Vegas, Nevada",

  // intent: Public contact address — the site's one conversion path.
  email: "contact@tektonsoftware.com",

  // intent: Primary action — scrolls to the contact section.
  cta: {
    label: "Get in touch",
    href: "/#contact",
  },

  // intent: In-page navigation. Each href is an anchor on the home page.
  nav: [
    { label: "What we do", href: "/#what-we-do" },
    { label: "Approach", href: "/#approach" },
    { label: "Contact", href: "/#contact" },
  ],

  footer: {
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },

  // intent: Used in JSON-LD Organization schema. No social accounts yet.
  // TODO: add sameAs URLs (LinkedIn, etc.) when accounts exist.
  sameAs: [] as string[],
} as const;

/** Home page copy, top to bottom. */
export const home = {
  hero: {
    // Each segment renders in order; `mark: true` segments get the underline.
    headline: [
      { text: "Focused " },
      { text: "software", mark: true },
      { text: " for the work businesses " },
      { text: "depend on", mark: true },
    ],
    body: "Tekton is an independent software company. We build a small family of products, and each one is designed to do one job exceptionally well.",
  },

  whatWeDo: {
    eyebrow: "What we do",
    heading: "One company. Several sharp tools.",
    // intent: The kinds of products Tekton builds — deliberately general, no
    // product names. Adjust as the product line takes shape.
    items: [
      {
        title: "Business software",
        body: "Tools for the everyday operations of small and growing businesses, built around how the work actually gets done.",
      },
      {
        title: "Web applications",
        body: "Fast, dependable software that runs in the browser, so there's nothing to install and it works wherever your team does.",
      },
      {
        title: "Automation",
        body: "Products that take repetitive work off people's plates and handle it quietly and reliably in the background.",
      },
    ],
  },

  approach: {
    eyebrow: "Approach",
    heading: "How we build.",
    items: [
      {
        title: "Narrow by design",
        body: "Every product has one clear job. We'd rather ship one tool that works than a platform that sort of does everything.",
      },
      {
        title: "Built to last",
        body: "Plain architecture, careful engineering, and no dependencies we can't stand behind. Software you can run for years.",
      },
      {
        title: "Yours to control",
        body: "Your data stays where you put it. Our products don't treat customer information as something to collect.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Let's talk.",
    body: "Questions about a product, a partnership, or something else entirely? Write to us and a person will reply.",
  },
} as const;
