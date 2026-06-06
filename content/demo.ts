/**
 * Demo page copy and form definition. The form fields are data-driven from
 * `fields` below so you can reorder/relabel without touching the component.
 *
 * Field `name` values are the keys POSTed to /api/demo — keep them stable.
 */

export const demoMeta = {
  title: "Book a Demo",
  description:
    "Book a 15-minute demo of Tekton — private, on-premise AI with verified citations. We'll show you verified, source-cited answers running entirely offline.",
};

export const demo = {
  hero: {
    eyebrow: "Book a demo",
    headline: "Fifteen minutes. Your data's shape, not ours.",
    subhead:
      "Tell us a little about your firm and what you'd want to ask. We'll walk you through verified, source-cited answers running entirely offline — no slides, no commitment.",
  },

  // intent: Scheduling embed placeholder. Swap for a real Cal.com / Calendly embed.
  // TODO: paste the Cal.com or Calendly embed and remove the placeholder note.
  scheduler: {
    eyebrow: "Prefer to pick a time now?",
    heading: "Grab a slot directly.",
    note: "Scheduling embed goes here (Cal.com / Calendly). Until it's wired up, use the form below and we'll reach out to confirm a time.",
  },

  form: {
    eyebrow: "Or send us the details",
    heading: "Request a demo.",
    submitLabel: "Request demo",
    successTitle: "Request received.",
    successBody:
      "Thanks — we've got your details and will reach out to confirm a time. Nothing you sent leaves our hands.",
    errorBody:
      "Something went wrong sending that. Please try again, or email us directly.",
    // intent: Form fields. `kind` selects the input type the component renders.
    fields: [
      {
        name: "name",
        label: "Name",
        kind: "text",
        required: true,
        autoComplete: "name",
      },
      {
        name: "company",
        label: "Company",
        kind: "text",
        required: true,
        autoComplete: "organization",
      },
      {
        name: "role",
        label: "Your role",
        kind: "text",
        required: true,
        placeholder: "e.g. Managing Partner, Head of Security",
      },
      {
        name: "companySize",
        label: "Company size",
        kind: "select",
        required: true,
        options: ["1–10", "11–50", "51–200", "201–500", "500+"],
      },
      {
        name: "dataUse",
        label: "What data would you want to use it on?",
        kind: "textarea",
        required: false,
        placeholder:
          "A sentence is plenty — the kinds of documents your team works with.",
      },
      {
        name: "contactTime",
        label: "Preferred contact time",
        kind: "text",
        required: false,
        placeholder: "e.g. weekday mornings, Pacific time",
      },
    ],
  },

  // intent: Quiet reassurance under the form — consistent with the whole pitch.
  privacyNote:
    "We use what you send only to schedule and prepare your demo. No newsletters, no sharing.",
} as const;
