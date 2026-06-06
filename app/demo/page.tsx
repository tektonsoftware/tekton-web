import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { demo, demoMeta } from "@/content/demo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { DemoForm } from "@/components/sections/DemoForm";

export const metadata: Metadata = buildMetadata({
  title: demoMeta.title,
  description: demoMeta.description,
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow={demo.hero.eyebrow}
        headline={demo.hero.headline}
        subhead={demo.hero.subhead}
      />

      <Section bordered>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* SCHEDULER — Cal.com / Calendly embed placeholder (see TODO.md). */}
          <div>
            <SectionLabel>{demo.scheduler.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {demo.scheduler.heading}
            </h2>
            {/* TODO: paste Cal.com / Calendly embed; remove this placeholder. */}
            <div className="border-border bg-muted text-muted-foreground mt-6 flex min-h-64 items-center justify-center rounded-[var(--radius-base)] border border-dashed p-8 text-center text-sm">
              {demo.scheduler.note}
            </div>
          </div>

          {/* FORM — posts to /api/demo (console.log only for now). */}
          <div>
            <SectionLabel>{demo.form.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {demo.form.heading}
            </h2>
            <div className="mt-6">
              <DemoForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
