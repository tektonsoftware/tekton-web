/**
 * Security page copy — the page that closes deals. Written for a CISO / security
 * reviewer: specific, calm, no marketing inflation. Claims here should be ones the
 * founder can defend in a technical review.
 *
 * If a claim becomes untrue or a status changes, edit it HERE.
 */

export const securityMeta = {
  title: "Security",
  description:
    "Tekton runs on-premise: nothing leaves your network. Encryption at rest and in transit, Active Directory / Entra authentication, full audit logging, and a documented architecture review.",
};

export const security = {
  hero: {
    eyebrow: "Security",
    headline: "Built for professionals who cannot afford to leak.",
    subhead:
      "Tekton's security model is simple to state: your data stays on your network, every action is logged, and the architecture has a documented review you can evaluate. The details below are written for the person who has to approve it.",
    // intent: The artifact a reviewer takes into an internal meeting.
    onePager: {
      label: "Download security one-pager (PDF)",
      href: "/security-one-pager.pdf",
    },
  },

  // intent: Plain-language architecture overview before the diagram.
  architecture: {
    eyebrow: "Architecture",
    heading: "One appliance, inside your perimeter.",
    body: "Tekton runs as a single appliance on your local network. Documents are ingested and indexed on the device, model inference runs on the device, and answers are served to your team over your LAN. There is no cloud component in the data path and no outbound dependency required to operate.",
  },

  // intent: The single most important visual — nothing crosses the LAN boundary.
  dataFlow: {
    eyebrow: "Data flow",
    heading: "Nothing leaves the LAN.",
    body: "Your documents enter the appliance from internal sources, are indexed locally, and are queried locally. The boundary below is your network edge — no document, prompt, embedding, or answer crosses it.",
  },

  // intent: The control checklist a reviewer scans. Keep each item concrete.
  controls: {
    eyebrow: "Controls",
    heading: "What's in place.",
    items: [
      {
        title: "Encryption at rest and in transit",
        body: "The document index and stored data are encrypted on the appliance. Traffic between your clients and the appliance is encrypted over your network.",
      },
      {
        title: "Directory-based authentication",
        body: "Users sign in through Active Directory or Microsoft Entra ID. Access follows your existing identity and group structure.",
      },
      {
        title: "Role-based access control",
        body: "Permissions are scoped by role and respect the access boundaries of the source documents. People see only what they're entitled to.",
      },
      {
        title: "Complete audit logging",
        body: "Every query, document access, and administrative action is recorded in tamper-evident logs you can export and review.",
      },
      {
        title: "Incident response posture",
        body: "Because the system is self-contained and on your network, the blast radius of any incident is bounded by your own perimeter. Logs support after-the-fact review and containment.",
      },
      {
        title: "No outbound data path",
        body: "The appliance operates without an internet connection. There is no telemetry, no model-training feedback loop, and no remote access required to run it.",
      },
    ],
  },

  // intent: SOC 2 status — stated honestly as in-progress. Update as it advances.
  compliance: {
    eyebrow: "Compliance",
    heading: "SOC 2 in progress.",
    body: "Tekton is actively pursuing SOC 2. The control framework above maps to the relevant Trust Services Criteria, and the program is underway. We'll share current status and scope with prospective customers under NDA.",
    // TODO: update with audit window / report availability as SOC 2 progresses.
    status: "In progress",
  },

  // intent: Accountability — a documented review you can actually evaluate is the
  // trust anchor here. (Founder-credential framing temporarily removed.)
  founder: {
    eyebrow: "Accountability",
    heading: "A named owner behind the architecture.",
    body: "Tekton's architecture is designed and owned by a security and DevOps engineer, with a documented review available to evaluate under NDA — a real document, not a badge on a page.",
  },
} as const;
