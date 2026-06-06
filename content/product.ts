/**
 * Product page copy — one section per pillar (Core, Connect, Verify, Shield).
 * Each pillar: a claim (the promise), capabilities (concrete, checkable), and a
 * `diagram` key that selects which schematic the page renders.
 *
 * Product names are fixed and used verbatim. Do not rename pillars here.
 */

export const productMeta = {
  title: "Product",
  description:
    "Tekton Core, Connect, Verify, and Shield — an on-premise AI appliance, local ingestion connectors, a verified-citation engine, and a compliance layer. All running inside your network.",
};

export const product = {
  intro: {
    eyebrow: "The product",
    heading: "Four parts, one private system.",
    body: "Tekton is sold as a defined product, not a consulting engagement. You get an appliance, the connectors to fill it, an engine that proves its answers, and the controls to govern the whole thing — installed and running on your own network.",
  },

  pillars: [
    {
      id: "core",
      name: "Tekton Core",
      // intent: Core's claim — it's real hardware that runs offline.
      claim: "The appliance that runs your AI without an internet connection.",
      body: "Tekton Core is the hardware and base software stack. It arrives configured for your firm's size and installs inside your network. Once it's on, it does not need — and is not given — a path to the outside world.",
      diagram: "appliance",
      featured: false,
      capabilities: [
        "Self-contained appliance, sized by firm (see Pricing for SKUs)",
        "Runs entirely offline — no outbound connection required to operate",
        "Local model inference; prompts and documents never leave the box",
        "Hardware-encrypted storage for the document index",
        "Maintained through scheduled, reviewed on-site or air-gapped updates",
      ],
    },
    {
      id: "connect",
      name: "Tekton Connect",
      // intent: Connect's claim — meets you where your documents already live.
      claim: "Pre-built connectors for the sources your documents already live in.",
      body: "Tekton Connect ingests from the systems your team already uses. Indexing runs on the appliance, so the originals stay where they are and the index stays on your network.",
      diagram: "connect",
      featured: false,
      capabilities: [
        "Connectors for common file shares, document stores, and email archives",
        "Local indexing — content is processed on the appliance, not in a cloud",
        "Incremental sync keeps the index current as documents change",
        "Permission-aware ingestion that respects existing access boundaries",
        "Original files are never moved, copied off-network, or altered",
      ],
    },
    {
      id: "verify",
      name: "Tekton Verify",
      // intent: The headline pillar. The whole pitch is here: answers you can trust
      // because they are grounded and the citation is checked, not just shown.
      claim:
        "Every answer is grounded in your documents and cites a verified source.",
      body: "Most AI tools can produce a citation. Tekton Verify checks it. Before an answer reaches you, the engine confirms the cited passage actually supports the claim — and shows you exactly where it came from so you can see for yourself.",
      diagram: "verify",
      featured: true,
      capabilities: [
        "Answers grounded only in your ingested documents — no outside knowledge",
        "Every claim links to the exact source paragraph it relied on",
        "Citations are verified: the passage is checked to support the claim",
        "Answers that cannot be grounded are withheld, not guessed",
        "One-click jump from any answer to the source in context",
      ],
    },
    {
      id: "shield",
      name: "Tekton Shield",
      // intent: Shield's claim — the governance story a CISO needs to hear.
      claim: "The compliance and audit layer that lets your reviewers sign off.",
      body: "Tekton Shield is the governance surface around the system: who can see what, what happened, and a record of it all. The architecture is reviewed and signed by a CISSP, and SOC 2 work is underway.",
      diagram: "shield",
      featured: false,
      capabilities: [
        "Role-based access control, integrated with your directory",
        "Complete, tamper-evident audit logs of every query and document touch",
        "Authentication via Active Directory / Microsoft Entra ID",
        "CISSP-signed architecture review available under NDA",
        "SOC 2 program in progress (see the Security page for current status)",
      ],
    },
  ],
} as const;
