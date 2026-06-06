import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/Wordmark";
import { SectionLabel } from "@/components/SectionLabel";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className="border-border border-t"
      aria-labelledby="footer-cta-heading"
    >
      {/* Footer CTA — repeats the single demo ask. */}
      <div className="border-border bg-muted border-b">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2
              id="footer-cta-heading"
              className="font-serif text-2xl font-medium tracking-tight sm:text-3xl"
            >
              {site.footerCta.heading}
            </h2>
            <p className="text-muted-foreground mt-2">{site.footerCta.body}</p>
          </div>
          <Link
            href={site.cta.href}
            className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
          >
            {site.cta.label}
          </Link>
        </Container>
      </div>

      {/* Link columns */}
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Wordmark />
          <p className="text-muted-foreground mt-3 max-w-xs text-sm">
            {site.tagline}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-accent-text focus-visible:outline-ring mt-4 inline-block rounded-sm text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {site.email}
          </a>
        </div>

        <FooterColumn label="Product" links={site.footer.product} />
        <FooterColumn label="Company" links={site.footer.company} />
        <FooterColumn label="Legal" links={site.footer.legal} />
      </Container>

      <Container className="border-border text-muted-foreground flex flex-col gap-2 border-t py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {COPYRIGHT_YEAR} {site.legalName}. All rights reserved.
        </p>
        <p>{site.founderLocation}</p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <SectionLabel className="text-muted-foreground">{label}</SectionLabel>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-foreground focus-visible:outline-ring rounded-sm text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Static copyright year — avoids a hydration mismatch and keeps the page static.
// Bump as needed; intentionally not new Date() (server/client drift + non-determinism).
const COPYRIGHT_YEAR = 2026;
