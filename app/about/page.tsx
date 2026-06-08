import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { about, aboutMeta } from "@/content/about";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = buildMetadata({
  title: aboutMeta.title,
  description: aboutMeta.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        headline={about.hero.headline}
        subhead={about.hero.subhead}
      />

      {/*
        FOUNDER section temporarily removed.
        The copy is preserved in content/about.ts (`about.founder`) and the full
        markup is in git history — restore this block when the founder section
        should reappear. See TODO.md.
      */}

      {/* THESIS — why offline. Editorial serif accent on the heading. */}
      <Section surface="muted" bordered>
        <SectionReveal>
          <div className="max-w-3xl">
            <SectionLabel>{about.thesis.eyebrow}</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {about.thesis.heading}
            </h2>
            <div className="text-muted-foreground mt-6 space-y-5 leading-relaxed">
              {about.thesis.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}
