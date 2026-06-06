/**
 * About page copy — short founder story and the "why offline" thesis.
 * Keep it human and credible; this page exists to put a real, accountable person
 * behind the security claims made elsewhere on the site.
 */

export const aboutMeta = {
  title: "About",
  description:
    "Tekton is built by a CISSP-credentialed security and DevOps engineer in Las Vegas, on one conviction: businesses with sensitive data shouldn't have to send it to someone else's cloud to use AI.",
};

export const about = {
  hero: {
    eyebrow: "About",
    headline: "Private AI, built by someone who has to defend it.",
    subhead:
      "Tekton is a focused product company in pre-launch, built around a single conviction about where sensitive data belongs.",
  },

  // intent: The founder narrative. Las Vegas / CISSP / DevOps angle. Real person,
  // no invented team. Photo is a placeholder (see TODO.md).
  founder: {
    eyebrow: "Founder",
    name: "Founder", // TODO: replace with the founder's name.
    role: "Founder · CISSP · Security & DevOps Engineer",
    location: "Las Vegas, Nevada",
    photoAlt: "Portrait of Tekton's founder", // TODO: add real founder photo.
    bio: [
      "Tekton is built by a CISSP-credentialed security and DevOps engineer based in Las Vegas, with a career spent keeping production systems and sensitive data safe.",
      "That background shapes the product. The people who handle other people's confidential information are held to a standard, and the tools they adopt should meet it — not quietly undercut it by shipping everything to a third-party model.",
      "Tekton is the result: a defined product, with an architecture one person is willing to put their name and credential behind.",
    ],
  },

  // intent: The thesis. Why offline is the point, not a limitation.
  thesis: {
    eyebrow: "Why offline",
    heading: "The safest place for your data is the place it already is.",
    body: [
      "The dominant way to use AI today is to send your data to someone else's servers. For most of the internet, that trade is fine. For a business with a duty to protect what its clients hand over, it is a standing liability — a copy of your most sensitive material, sitting somewhere you don't control, governed by terms you didn't write.",
      "Tekton takes the other path. The model comes to your data instead of your data going to the model. Everything runs on an appliance inside your network, and every answer is grounded in your own documents with a verified citation. You get the leverage of AI without giving up custody of the information that makes your business worth trusting.",
    ],
  },
} as const;
