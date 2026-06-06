import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { pricing, pricingMeta } from "@/content/pricing";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionReveal } from "@/components/SectionReveal";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { CheckList, ExcludeList } from "@/components/CheckList";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: pricingMeta.title,
  description: pricingMeta.description,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={pricing.intro.eyebrow}
        headline={pricing.intro.heading}
        subhead={pricing.intro.body}
      />

      {/* THREE TIERS. Prices are placeholders — priceTodo renders a "TODO" tag. */}
      <Section bordered>
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "flex h-full flex-col p-7",
                tier.highlighted && "border-accent ring-1 ring-accent"
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">
                  {tier.name}
                </h2>
                {tier.highlighted && (
                  <span className="inline-flex rounded-full border border-accent px-2.5 py-0.5 text-xs font-medium text-accent-text">
                    Most common
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>

              {/* Price block — provisional figures flagged for editing. */}
              <div className="mt-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-semibold tracking-tight">
                    {tier.upfront}
                  </span>
                  <span className="text-sm text-muted-foreground">up-front</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  + {tier.monthly}
                </div>
                {tier.priceTodo && (
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-accent-text">
                    {/* TODO: confirm pricing before launch */}
                    TODO — provisional pricing
                  </p>
                )}
              </div>

              <Link
                href={tier.cta.href}
                className={cn(
                  buttonVariants({
                    variant: tier.highlighted ? "primary" : "outline",
                  }),
                  "mt-6 w-full"
                )}
              >
                {tier.cta.label}
              </Link>

              <div className="mt-8">
                <SectionLabel className="text-muted-foreground">
                  Included
                </SectionLabel>
                <CheckList className="mt-4" items={tier.includes} />
              </div>

              {tier.excludes.length > 0 && (
                <div className="mt-7">
                  <SectionLabel className="text-muted-foreground">
                    Not included
                  </SectionLabel>
                  <ExcludeList className="mt-4" items={tier.excludes} />
                </div>
              )}
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          {pricing.footnote}
        </p>
      </Section>

      {/* EVERY-TIER STRIP — what you always get, regardless of size. */}
      <Section surface="muted" bordered>
        <SectionReveal>
          <div className="max-w-2xl">
            <SectionLabel>{pricing.everyTier.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {pricing.everyTier.heading}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.everyTier.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}
