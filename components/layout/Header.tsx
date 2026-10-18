"use client";

import * as React from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/Wordmark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);

  // Nav items are in-page anchors, so the route never changes — close the
  // mobile menu on link click instead of on navigation.
  const close = () => setOpen(false);

  return (
    <header className="border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Wordmark />

          <div className="flex items-center gap-2">
            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:bg-muted focus-visible:outline-ring rounded-[var(--radius-base)] px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <Link
              href={site.cta.href}
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden md:inline-flex"
              )}
            >
              {site.cta.label}
            </Link>
            <button
              type="button"
              className="border-border text-foreground focus-visible:outline-ring inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-base)] border focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-border border-t md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-foreground hover:bg-muted focus-visible:outline-ring rounded-[var(--radius-base)] px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.cta.href}
              onClick={close}
              className={cn(buttonVariants(), "mt-2 w-full")}
            >
              {site.cta.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
