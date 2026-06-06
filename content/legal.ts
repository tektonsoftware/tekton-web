/**
 * Legal page copy — Privacy and Terms.
 *
 * These are MINIMAL placeholders so the footer links don't 404 at launch. They
 * are NOT legal advice and have not been reviewed by counsel. Replace the body
 * sections with reviewed text before relying on them. See TODO.md.
 *
 * `lastUpdated` is a static string — bump it by hand when you edit the text.
 */

export const privacyMeta = {
  title: "Privacy",
  description:
    "How Tekton handles information collected through this marketing website. Tekton's product runs on-premise and does not send customer data off the customer's network.",
};

export const termsMeta = {
  title: "Terms",
  description:
    "Terms governing use of the Tekton marketing website. Product terms are provided separately as part of a signed agreement.",
};

// TODO: have counsel review and replace this placeholder legal copy.
const PLACEHOLDER_NOTE =
  "This is a preliminary version provided for transparency and has not yet been reviewed by legal counsel. It will be updated before launch.";

export const privacy = {
  eyebrow: "Privacy",
  heading: "Privacy notice",
  lastUpdated: "Last updated June 2026",
  intro:
    "This notice explains what information this website collects and how it is used. It covers the marketing website only — the Tekton product runs on your premises and is governed by your signed agreement.",
  placeholderNote: PLACEHOLDER_NOTE,
  sections: [
    {
      title: "What the product does with your data",
      body: "The Tekton appliance runs entirely on your network. Documents you ingest, the resulting index, prompts, and answers stay on the appliance. We do not receive, collect, or transmit your ingested content. There is no telemetry and no model-training feedback loop.",
    },
    {
      title: "What this website collects",
      body: "If you submit the demo request form, we receive the details you enter — such as your name, company, role, company size, an optional description of your data, and a preferred contact time — so we can schedule and prepare your demo. We use this only for that purpose.",
    },
    {
      title: "How we use it",
      body: "We use the information you send to respond to your request and arrange a demo. We do not sell it, and we do not add you to marketing lists without your consent.",
    },
    {
      title: "Hosting and logs",
      body: "This site is hosted on Vercel, which may process standard request metadata (such as IP address and user agent) to serve and secure the site. Demo submissions are processed by our server function to deliver them to us.",
    },
    {
      title: "Contact",
      body: "Questions about this notice or a request to access or delete information you've sent can be made by booking a demo or contacting us directly.",
    },
  ],
} as const;

export const terms = {
  eyebrow: "Terms",
  heading: "Website terms of use",
  lastUpdated: "Last updated June 2026",
  intro:
    "These terms govern your use of this marketing website. They do not govern use of the Tekton product, which is provided under a separate signed agreement.",
  placeholderNote: PLACEHOLDER_NOTE,
  sections: [
    {
      title: "Use of this site",
      body: "You may use this website to learn about Tekton and request a demo. Please don't attempt to disrupt the site, access it in unauthorized ways, or use it unlawfully.",
    },
    {
      title: "No warranty on content",
      body: "Information on this site, including product descriptions, capabilities, and pricing, is provided for general information and may change. Pricing shown is provisional. Nothing here is a binding offer or a guarantee of any specific outcome.",
    },
    {
      title: "Product terms are separate",
      body: "Any purchase, deployment, or use of the Tekton product is governed by a separate written agreement. Those terms — not these — control the product relationship.",
    },
    {
      title: "Intellectual property",
      body: "The Tekton name, wording, and content on this site are owned by Tekton. Please don't reproduce them without permission.",
    },
    {
      title: "Contact",
      body: "Questions about these terms can be directed to us by booking a demo or contacting us directly.",
    },
  ],
} as const;
