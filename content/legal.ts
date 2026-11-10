/**
 * Policy page copy: Privacy, Terms and Security.
 *
 * Every factual statement here must match what the site actually does. Check
 * the code before changing a claim (cookies, trackers, third-party requests,
 * hosting, email). Section bodies are plain text; LegalPage turns email
 * addresses and https:// URLs into links.
 *
 * Drafted from SigDek's policies; not yet reviewed by a lawyer (see TODO.md).
 * `lastUpdated` is a static string: bump it by hand when you edit the text.
 */

import { SITE_URL, site } from "@/content/site";

const LAST_UPDATED = "Last updated November 10, 2026";

export const privacyMeta = {
  title: "Privacy",
  description:
    "What tektonsoftware.com collects, and how Tekton Software LLC uses it.",
};

export const termsMeta = {
  title: "Terms",
  description:
    "The terms for using tektonsoftware.com, the website of Tekton Software LLC.",
};

export const securityMeta = {
  title: "Security",
  description:
    "How to report a security problem in the Tekton Software website or one of its products.",
};

export const privacy = {
  eyebrow: "Privacy",
  heading: "Privacy policy",
  lastUpdated: LAST_UPDATED,
  intro:
    'This policy covers tektonsoftware.com, the website of Tekton Software LLC ("we"). It explains what the site collects and what we do with it.',
  sections: [
    {
      title: "What this website collects",
      body: "Nothing on its own. The site has no forms or accounts, sets no cookies, and runs no advertising or analytics trackers. Its fonts and images are served from this site, so your browser makes no requests to any other website to show it.",
    },
    {
      title: "Your theme choice",
      body: "If you switch between light and dark mode, your browser stores that choice in its local storage so the site remembers it. It stays in your browser and is never sent to us.",
    },
    {
      title: "Hosting",
      body: "The site is hosted by Vercel, which processes request details, such as your IP address and browser user agent, to serve and protect the site.",
    },
    {
      title: "Email you send us",
      body: "If you email us, we receive your address and whatever you include. We use it only to reply, and it's stored with our email provider, Google Workspace.",
    },
    {
      title: "What we don't do",
      body: "We don't sell personal information or use it for advertising. We disclose it only if the law requires it.",
    },
    {
      title: "Your choices",
      body: `You can ask us to access or delete email you've sent us by writing to ${site.email}, and we'll respond within 30 days. Depending on where you live, you may have further rights under laws such as the GDPR or California's CCPA.`,
    },
    {
      title: "Our products",
      body: "This policy covers this website only. Where one of our products has its own privacy policy, that policy covers the product.",
    },
    {
      title: "Changes",
      body: "We'll post any changes on this page and update the date above.",
    },
  ],
} as const;

export const terms = {
  eyebrow: "Terms",
  heading: "Website terms of use",
  lastUpdated: LAST_UPDATED,
  intro:
    'These terms cover your use of tektonsoftware.com, the website of Tekton Software LLC ("we"). By using the site, you agree to them.',
  sections: [
    {
      title: "Using this site",
      body: `You're welcome to read and share this site. Please don't disrupt it, try to reach parts of it we haven't made public, or use it for anything unlawful. Security research that follows our policy at ${SITE_URL}/security is welcome.`,
    },
    {
      title: "Information on this site",
      body: "What you read here is general information about Tekton Software and its products. It can change without notice, and it isn't an offer or a promise of any result. It's provided \"as is\", without warranties of any kind, to the extent the law allows.",
    },
    {
      title: "Liability",
      body: "To the extent the law allows, we aren't liable for damages arising from your use of this website.",
    },
    {
      title: "Our products",
      body: "These terms cover this website only. Where one of our products has its own terms, those govern its use.",
    },
    {
      title: "Other websites",
      body: "Links to other sites, including our social media accounts, are there for convenience. Those sites have their own terms and policies.",
    },
    {
      title: "Names and content",
      body: "The Tekton Software name, the TK mark and the content of this site belong to Tekton Software LLC. Please ask before reusing them.",
    },
    {
      title: "Changes",
      body: "We'll post any changes on this page and update the date above.",
    },
    {
      title: "Contact",
      body: `Questions about these terms go to ${site.email}.`,
    },
  ],
} as const;

export const security = {
  eyebrow: "Security",
  heading: "Reporting security issues",
  lastUpdated: LAST_UPDATED,
  intro:
    "How to report a security problem in this website or in one of our products.",
  sections: [
    {
      // Linked from /.well-known/security.txt (Policy field). Keep the id.
      id: "report",
      title: "Reporting a vulnerability",
      body: `Email ${site.email} with what you found and how to reproduce it. We'll acknowledge your report within two business days and keep you updated until it's fixed. Please give us a reasonable time to fix an issue before disclosing it, and don't access other people's data or degrade our services while testing. We won't pursue good-faith research that follows these terms.`,
    },
    {
      title: "Our products",
      body: "Reports about any of our products are welcome at the same address. Where a product's website lists its own security contact, you can use that instead.",
    },
    {
      title: "Machine-readable contact",
      body: `This contact is also published in the standard security.txt format at ${SITE_URL}/.well-known/security.txt.`,
    },
  ],
} as const;
