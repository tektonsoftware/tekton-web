import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { product, productMeta } from "@/content/product";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionReveal } from "@/components/SectionReveal";
import { CheckList } from "@/components/CheckList";
import { Figure } from "@/components/diagrams/Figure";
import { PillarDiagram } from "@/components/diagrams/PillarDiagram";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: productMeta.title,
  description: productMeta.description,
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow={product.intro.eyebrow}
        headline={product.intro.heading}
        subhead={product.intro.body}
      />

      {/* One section per pillar; diagram alternates side for rhythm. */}
      {product.pillars.map((pillar, i) => {
        const reversed = i % 2 === 1;
        return (
          <Section
            key={pillar.id}
            id={pillar.id}
            surface={reversed ? "muted" : "default"}
            bordered
            className="scroll-mt-20"
          >
            <SectionReveal>
              <div
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div>
                  <SectionLabel>{pillar.name}</SectionLabel>
                  {pillar.featured && (
                    <span className="ml-3 inline-flex rounded-full border border-accent px-2.5 py-0.5 align-middle text-xs font-medium text-accent-text">
                      Headline feature
                    </span>
                  )}
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {pillar.claim}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                  <CheckList className="mt-8" items={pillar.capabilities} />
                </div>

                <Figure
                  className={reversed ? "bg-card" : "bg-card"}
                  caption="Schematic — illustrative, not to scale."
                >
                  <PillarDiagram variant={pillar.diagram} />
                </Figure>
              </div>
            </SectionReveal>
          </Section>
        );
      })}
    </>
  );
}
