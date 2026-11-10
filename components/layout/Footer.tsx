import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/Wordmark";
import { SocialIcon } from "@/components/SocialIcon";

const linkClass =
  "text-muted-foreground hover:text-foreground focus-visible:outline-ring rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
        {/* Brand: lockup, tagline, email, social accounts. */}
        <div>
          <Wordmark />
          <p className="text-muted-foreground mt-4 max-w-xs text-sm">
            {site.tagline}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-foreground focus-visible:outline-ring mt-6 inline-block rounded-sm text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {site.email}
          </a>
          <ul className="mt-5 -ml-2.5 flex gap-1" aria-label="Social accounts">
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  rel="me noopener"
                  aria-label={`Tekton Software on ${social.label}`}
                  title={social.label}
                  className="text-foreground focus-visible:outline-ring inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-base)] transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <SocialIcon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns. */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3"
        >
          {site.footer.columns.map((column) => (
            <div key={column.heading}>
              <h2 className="section-label">{column.heading}</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <Container className="border-border text-muted-foreground border-t py-6 text-sm">
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
