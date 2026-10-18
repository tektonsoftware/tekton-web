import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand lockup — the Tekton tau mark + wordmark, linking home.
 *
 * Monochrome in the site's ink color (`currentColor` from `text-foreground`),
 * so it reads black on beige and beige on charcoal. Wordmark is set in
 * Inter 800 (see app/layout).
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tekton — home"
      className={cn(
        "text-foreground focus-visible:outline-ring inline-flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
    >
      <svg
        viewBox="0 0 240 260"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-auto shrink-0"
      >
        <rect x="0" y="0" width="240" height="40" fill="currentColor" />
        <polygon points="55,80 110,112 110,260 55,226" fill="currentColor" />
        <polygon points="185,80 130,112 130,260 185,226" fill="currentColor" />
      </svg>
      <span
        className="text-2xl font-extrabold tracking-[-0.04em]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Tekton
      </span>
    </Link>
  );
}
