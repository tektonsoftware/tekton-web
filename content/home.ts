/**
 * Home page copy. Edit here — components render these strings verbatim.
 * Keep within the positioning: broad message ("businesses with sensitive data"),
 * never name a vertical. No filler adjectives, no emoji.
 */

export const homeMeta = {
  title: "Private AI for Sensitive Data",
  description:
    "Tekton is an on-premise AI appliance for businesses with sensitive data. Answers are grounded in your own documents and cite a verified source — and nothing ever leaves your network.",
};

export const home = {
  // intent: The single value prop. One idea: AI that stays inside your network and
  // proves every answer. The eyebrow names the audience without naming a vertical.
  hero: {
    eyebrow: "Private AI for businesses with sensitive data",
    headline: "Your Private Data. Your Private Network. Your Private AI.",
    subhead:
      "Tekton is an AI appliance that runs entirely on your premises. Every answer is grounded in your own documents and cites a verified source. Nothing you ingest ever leaves your network.",
    // Primary CTA comes from site.cta. Secondary points to the deal-closing page.
    secondary: { label: "See the security model", href: "/security" },
  },

  // intent: Three-up overview. Verify is the headline feature and sits center as the
  // hero pillar; Core and Shield frame it. Connect is introduced on the Product page.
  pillars: {
    eyebrow: "What you get",
    heading:
      "An appliance, a verified answer engine, and the controls to govern it.",
    items: [
      {
        name: "Tekton Core",
        // intent: The thing that physically shows up. Concrete, not abstract.
        summary:
          "The appliance and base software stack, sized to your firm. It arrives configured, installs on your network, and runs without an internet connection.",
        href: "/product#core",
        featured: false,
      },
      {
        name: "Tekton Verify",
        // intent: The headline. The differentiator is verification, not generation.
        summary:
          "The verified-citation engine. Every answer points to the exact source paragraph — and we check that the passage actually supports the claim before you ever see it.",
        href: "/product#verify",
        featured: true,
      },
      {
        name: "Tekton Shield",
        // intent: The reason a security reviewer signs off.
        summary:
          "The compliance and audit layer: role-based access, complete audit logs, and a documented architecture review. Built so your auditors have less to ask about.",
        href: "/product#shield",
        featured: false,
      },
    ],
  },

  // intent: Three-step "how it works". Deliberately physical and plain so a
  // non-technical buyer can follow it. Pairs with the line diagram.
  howItWorks: {
    eyebrow: "How it works",
    heading: "From delivery to verified answers, without leaving your network.",
    steps: [
      {
        title: "The appliance arrives",
        body: "We ship Tekton Core pre-configured and install it inside your network. No cloud account, no outbound connection required.",
      },
      {
        title: "Your data is ingested locally",
        body: "Tekton Connect pulls from the document sources you already use. Indexing happens on the appliance — your files never go anywhere.",
      },
      {
        title: "Your team queries with verified citations",
        body: "Ask in plain language. Every answer is grounded in your documents and cites the exact passage it relied on, checked before it reaches you.",
      },
    ],
  },

  // intent: Trust strip — four scannable proof points, no logos (we have none yet).
  trust: {
    items: [
      { label: "Security-led architecture" },
      { label: "Runs fully on-premise" },
      { label: "Every action audit-logged" },
      { label: "SOC 2 in progress" },
    ],
  },
} as const;
