/**
 * Global site config — the single source of truth for company info, navigation,
 * the contact call-to-action, home-page copy, and SEO/structured-data strings.
 *
 * The home page (app/page.tsx) is one page of anchored sections; policy page
 * copy is in content/legal.ts. Edit copy here, not in components.
 */

// intent: Public-facing site URL. Used for canonical URLs, sitemap, OG tags.
// Vercel serves the site on www and redirects the apex domain to it, so the
// default is the www host. Override with NEXT_PUBLIC_SITE_URL if that changes.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tektonsoftware.com"
).replace(/\/$/, "");

export const site = {
  // intent: The company name. Always paired with disambiguating context in
  // <title> tags — never shipped as bare "Tekton" (CNCF trademark overlap).
  name: "Tekton",
  // intent: The registered company, shown in the footer copyright, the legal
  // pages and the JSON-LD Organization schema.
  legalName: "Tekton Software LLC",

  // intent: One-line elevator description, reused in meta + JSON-LD.
  // "Software company" disambiguates from the CNCF Tekton CI/CD project.
  // Deliberately no city or state: the company's location is not published.
  description:
    "Tekton is an independent software company building a family of focused products for businesses.",

  // intent: Short tagline for the footer / OG card.
  tagline: "Focused software for serious work.",

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

  // intent: Footer link columns. External links (products) open in the same tab.
  footer: {
    columns: [
      {
        heading: "Products",
        links: [{ label: "SigDek", href: "https://sigdek.com" }],
      },
      {
        heading: "Company",
        links: [
          { label: "What we do", href: "/#what-we-do" },
          { label: "Approach", href: "/#approach" },
          { label: "Contact", href: "/#contact" },
          { label: "Security", href: "/security" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
  },

  // intent: Official social accounts. Rendered as one-color icons in the
  // footer and listed in the JSON-LD Organization schema (sameAs). `icon`
  // keys map to paths in components/SocialIcon.tsx.
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/tektonsoftware",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/tektonsoftware/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tekton.software/",
      icon: "instagram",
    },
    { label: "X", href: "https://x.com/tektonsoftware", icon: "x" },
  ],
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
