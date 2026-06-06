import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { security, securityMeta } from "@/content/security";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionReveal } from "@/components/SectionReveal";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Figure } from "@/components/diagrams/Figure";
import { DataFlowDiagram } from "@/components/diagrams/DataFlowDiagram";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: securityMeta.title,
  description: securityMeta.description,
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow={security.hero.eyebrow}
        headline={security.hero.headline}
        subhead={security.hero.subhead}
      >
        {/* The artifact a reviewer carries into an internal meeting. */}
        <Link
          href={security.hero.onePager.href}
          className={buttonVariants({ variant: "outline" })}
          // Placeholder PDF until the real one-pager lands (see TODO.md).
        >
          <DownloadIcon />
          {security.hero.onePager.label}
        </Link>
      </PageHero>

      {/* ARCHITECTURE OVERVIEW + appliance-layers schematic */}
      <Section bordered>
        <SectionReveal>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>{security.architecture.eyebrow}</SectionLabel>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {security.architecture.heading}
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {security.architecture.body}
              </p>
            </div>
            <Figure className="bg-card">
              <ArchitectureDiagram />
            </Figure>
          </div>
        </SectionReveal>
      </Section>

      {/* DATA FLOW — the single most important visual: nothing leaves the LAN */}
      <Section surface="muted" bordered>
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{security.dataFlow.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {security.dataFlow.heading}
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {security.dataFlow.body}
            </p>
          </div>
          <Figure className="bg-card mx-auto mt-10 max-w-3xl">
            <DataFlowDiagram />
          </Figure>
        </SectionReveal>
      </Section>

      {/* CONTROLS — the reviewer's checklist */}
      <Section bordered>
        <SectionReveal>
          <div className="max-w-2xl">
            <SectionLabel>{security.controls.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {security.controls.heading}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {security.controls.items.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </SectionReveal>
      </Section>

      {/* COMPLIANCE + FOUNDER — stated honestly, with a named owner */}
      <Section surface="muted" bordered>
        <SectionReveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <div className="flex items-center gap-3">
                <SectionLabel>{security.compliance.eyebrow}</SectionLabel>
                <span className="border-accent text-accent-text inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium">
                  {security.compliance.status}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {security.compliance.heading}
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {security.compliance.body}
              </p>
            </Card>

            <Card className="flex flex-col p-8">
              <SectionLabel>{security.founder.eyebrow}</SectionLabel>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {security.founder.heading}
              </h2>
              <p className="text-muted-foreground mt-4 flex-1 leading-relaxed">
                {security.founder.body}
              </p>
              <Link
                href={security.founder.cta.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "mt-6 w-fit px-0 hover:bg-transparent hover:underline"
                )}
              >
                {security.founder.cta.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </Card>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
