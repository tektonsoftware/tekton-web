import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";

/** Renders a simple legal document (Privacy / Terms) from a content object. */
export function LegalPage({
  doc,
}: {
  doc: {
    eyebrow: string;
    heading: string;
    lastUpdated: string;
    intro: string;
    placeholderNote: string;
    sections: readonly { title: string; body: string }[];
  };
}) {
  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        headline={doc.heading}
        subhead={doc.intro}
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-sm">{doc.lastUpdated}</p>

          {/* Honest banner: placeholder until counsel reviews (see TODO.md). */}
          <p className="border-border bg-muted text-muted-foreground mt-4 rounded-[var(--radius-base)] border border-dashed p-4 text-sm">
            {doc.placeholderNote}
          </p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
