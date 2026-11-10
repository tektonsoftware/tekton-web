import * as React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";

/** Renders a simple policy page (Privacy, Terms, Security) from a content object. */
export function LegalPage({
  doc,
}: {
  doc: {
    eyebrow: string;
    heading: string;
    lastUpdated: string;
    intro: string;
    sections: readonly { id?: string; title: string; body: string }[];
  };
}) {
  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        headline={doc.heading}
        subhead={doc.intro}
      />
      {/* Same max-w-3xl column as PageHero, so hero and body share an edge. */}
      <Section containerClassName="max-w-3xl">
        <div>
          <p className="text-muted-foreground text-sm">{doc.lastUpdated}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <section
                key={section.title}
                id={section.id}
                className="scroll-mt-20"
              >
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {linkify(section.body)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

// Email addresses and https:// URLs; a URL never ends in sentence punctuation.
const LINKABLE =
  /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|https:\/\/[^\s,;()]*[^\s,;().:])/g;

/** Turns email addresses and https:// URLs in plain policy text into links. */
function linkify(text: string): React.ReactNode[] {
  return text.split(LINKABLE).map((part, i) => {
    // split() with a capture group puts the matches at odd indexes.
    if (i % 2 === 0) return part;
    const isEmail = !part.startsWith("https://");
    return (
      <a
        key={i}
        href={isEmail ? `mailto:${part}` : part}
        className="text-foreground focus-visible:outline-ring rounded-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {isEmail ? part : part.replace(/^https:\/\//, "")}
      </a>
    );
  });
}
