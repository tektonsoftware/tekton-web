import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { home, homeMeta } from "@/content/home";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionReveal } from "@/components/SectionReveal";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { HowItWorksDiagram } from "@/components/diagrams/HowItWorksDiagram";
import { Figure } from "@/components/diagrams/Figure";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: homeMeta.title,
  description: homeMeta.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO — one value prop, one primary CTA. The whole pitch in three lines. */}
      <section className="border-b border-border py-20 sm:py-28 lg:py-32">
        <Container className="max-w-4xl">
          <SectionLabel>{home.hero.eyebrow}</SectionLabel>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {home.hero.subhead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={site.cta.href} className={buttonVariants({ size: "lg" })}>
              {site.cta.label}
            </Link>
            <Link
              href={home.hero.secondary.href}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {home.hero.secondary.label}
            </Link>
          </div>
        </Container>
      </section>

      {/* THREE-UP — Core / Verify / Shield. Verify is the featured (hero) pillar. */}
      <Section>
        <SectionReveal>
          <div className="max-w-2xl">
            <SectionLabel>{home.pillars.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {home.pillars.heading}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {home.pillars.items.map((pillar) => (
              <Card
                key={pillar.name}
                className={cn(
                  "flex flex-col p-7 transition-colors",
                  pillar.featured && "border-accent ring-1 ring-accent"
                )}
              >
                {pillar.featured && (
                  <span className="mb-3 inline-flex w-fit rounded-full border border-accent px-2.5 py-0.5 text-xs font-medium text-accent-text">
                    Headline feature
                  </span>
                )}
                <h3 className="text-lg font-semibold tracking-tight">
                  {pillar.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pillar.summary}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-5 inline-flex w-fit items-center gap-1 rounded-sm text-sm font-medium text-accent-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            ))}
          </div>
        </SectionReveal>
      </Section>

      {/* HOW IT WORKS — three physical steps + schematic. */}
      <Section surface="muted" bordered>
        <SectionReveal>
          <div className="max-w-2xl">
            <SectionLabel>{home.howItWorks.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {home.howItWorks.heading}
            </h2>
          </div>

          <Figure className="mt-12 bg-card">
            <HowItWorksDiagram />
          </Figure>

          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {home.howItWorks.steps.map((step, i) => (
              <li key={step.title}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent-text">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </SectionReveal>
      </Section>

      {/* TRUST STRIP — four scannable proof points. No logos yet. */}
      {/* TODO: real logos */}
      <Section className="py-12 sm:py-14">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {home.trust.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm font-medium"
            >
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-text"
              />
              {item.label}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
