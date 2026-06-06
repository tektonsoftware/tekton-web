import * as React from "react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/SectionLabel";

/** Standard top-of-page hero for interior pages: eyebrow, headline, lead, slot. */
export function PageHero({
  eyebrow,
  headline,
  subhead,
  children,
}: {
  eyebrow: string;
  headline: string;
  subhead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-border border-b py-16 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {headline}
        </h1>
        {subhead && (
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            {subhead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
