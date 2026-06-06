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

      {/* FOUNDER — photo placeholder + bio. */}
      <Section bordered>
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
            <div>
              {/*
                Photo placeholder. No founder photo exists yet (see TODO.md).
                When one lands, replace this block with:
                  <Image src={founderPhoto} alt={about.founder.photoAlt}
                         width={280} height={350} className="rounded-[var(--radius-base)]" />
                Fixed aspect-ratio box keeps layout stable (no CLS) in the meantime.
              */}
              <div
                className="border-border bg-muted text-muted-foreground flex aspect-[4/5] w-full items-center justify-center rounded-[var(--radius-base)] border border-dashed text-sm"
                role="img"
                aria-label={about.founder.photoAlt}
              >
                Founder photo
              </div>
              <p className="mt-4 font-semibold tracking-tight">
                {about.founder.name}
              </p>
              <p className="text-accent-text text-sm">{about.founder.role}</p>
              <p className="text-muted-foreground mt-1 text-sm">
                {about.founder.location}
              </p>
            </div>

            <div>
              <SectionLabel>{about.founder.eyebrow}</SectionLabel>
              <div className="mt-4 space-y-5 text-lg leading-relaxed">
                {about.founder.bio.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </Section>

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
