import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Wordmark />
          <p className="text-muted-foreground mt-3 max-w-xs text-sm">
            {site.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href={`mailto:${site.email}`}
            className="text-foreground focus-visible:outline-ring rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {site.email}
          </a>
          <ul className="flex gap-4">
            {site.footer.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground focus-visible:outline-ring rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="border-border text-muted-foreground flex flex-col gap-2 border-t py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {COPYRIGHT_YEAR} {site.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

// Static copyright year — avoids a hydration mismatch and keeps the page static.
// Bump as needed; intentionally not new Date() (server/client drift + non-determinism).
const COPYRIGHT_YEAR = 2026;
