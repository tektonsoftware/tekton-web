"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/** Accessible light/dark toggle. Renders a stable placeholder until mounted to
 *  avoid hydration mismatch, and announces its action via aria-label. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      className={cn(
        "border-border text-foreground hover:bg-muted focus-visible:outline-ring inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-base)] border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
    >
      {/* Sun / moon, swapped on mount. Decorative — label carries the meaning. */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {mounted && isDark ? (
          <circle cx="12" cy="12" r="4" />
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
        {mounted && isDark && (
          <>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </>
        )}
      </svg>
    </button>
  );
}
