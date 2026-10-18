import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site, home } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/sections/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionReveal } from "@/components/SectionReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  // Absolute title — disambiguates Tekton on the home page, where the layout's
  // title template does not apply.
  title: "Tekton — Independent Software Company",
  titleAbsolute: true,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO — bold sans headline left, serif statement right. */}
      <section className="py-20 sm:py-28 lg:py-36">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <h1 className="text-5xl leading-[1.02] font-bold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {home.hero.headline.map((part) => (
              <span key={part.text} className={cn("mark" in part && "mark")}>
                {part.text}
              </span>
            ))}
          </h1>
          <div>
            <p className="font-serif text-xl leading-snug sm:text-2xl">
              {home.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={site.cta.href}
                className={buttonVariants({ size: "lg" })}
              >
                {site.cta.label}
              </Link>
              <Link
                href="/#products"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                See our products
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* PRODUCTS — a ruled list, one row per product. */}
      <Section id="products" bordered className="scroll-mt-16">
        <SectionReveal>
          <SectionLabel>{home.products.eyebrow}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            {home.products.heading}
          </h2>
          <ul className="border-foreground mt-12 border-t">
            {home.products.items.map((product) => (
              <li
                key={product.name}
                className="border-border grid gap-3 border-b py-8 sm:grid-cols-[1fr_1.5fr_8rem] sm:items-baseline sm:gap-8"
              >
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-serif text-lg leading-snug">
                  {product.summary}
                </p>
                <span className="border-foreground w-fit rounded-[var(--radius-base)] border px-2.5 py-1 text-xs font-medium tracking-wide uppercase sm:justify-self-end">
                  {product.status}
                </span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Section>

      {/* APPROACH — three principles on a slightly deeper band. */}
      <Section id="approach" surface="muted" bordered className="scroll-mt-16">
        <SectionReveal>
          <SectionLabel>{home.approach.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {home.approach.heading}
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {home.approach.items.map((item, i) => (
              <li key={item.title} className="border-foreground border-t pt-5">
                <span className="text-muted-foreground text-sm font-medium tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 font-serif text-lg leading-snug">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </SectionReveal>
      </Section>

      {/* CONTACT — the one conversion path: email. */}
      <Section id="contact" bordered className="scroll-mt-16">
        <SectionReveal className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>{home.contact.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-5xl font-bold tracking-[-0.03em] sm:text-7xl">
              {home.contact.heading}
            </h2>
          </div>
          <div>
            <p className="font-serif text-xl leading-snug">
              {home.contact.body}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mark focus-visible:outline-ring mt-6 inline-block rounded-sm text-xl font-semibold break-all focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-2xl"
            >
              {site.email}
            </a>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}
