import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand lockup — the Tekton tau mark + wordmark, linking home.
 *
 * Theme-aware by construction: the beam and left column use `--accent-text`
 * (deep forest in light mode, sage in dark mode), so the lockup reads as the
 * forest/sage two-tone on light and resolves to all-sage on dark — matching the
 * provided brand assets in public/brand/alternatives. The right column is the
 * fixed brand sage in both modes. Wordmark is set in Inter 800 (see app/layout).
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tekton — home"
      className={cn(
        "focus-visible:outline-ring inline-flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
    >
      <svg
        viewBox="0 0 240 260"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-auto shrink-0"
      >
        <rect x="0" y="0" width="240" height="40" fill="var(--accent-text)" />
        <polygon points="55,80 110,112 110,260 55,226" fill="var(--accent-text)" />
        <polygon points="185,80 130,112 130,260 185,226" fill="#6cae8e" />
      </svg>
      <span
        className="text-accent-text text-2xl font-extrabold tracking-[-0.04em]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Tekton
      </span>
    </Link>
  );
}
