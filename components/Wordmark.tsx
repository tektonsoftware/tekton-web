import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * TK monogram path on a 244.65×100 grid. Shared by the lockup below and the
 * generated icons (app/icon.svg, app/opengraph-image.tsx) — keep them in sync.
 *
 * Construction: 26.8-unit stems, 21.2-unit crossbar with 60° undercut points,
 * and a 42° chevron K that nearly touches its stem.
 */
export const TK_VIEWBOX = "0 0 244.65 100";
export const TK_PATH =
  "M0,0 H117.5 L105.26,21.2 H12.24 Z M45.35,21.19 H72.15 V100 H45.35 Z M123.5,0 H150.3 V100 H123.5 Z M151.1,48.2 L204.63,0 H240.65 L187.12,48.2 L244.65,100 H208.63 Z";

/**
 * Brand lockup — TK monogram + stacked "TEKTON SOFTWARE" caps, linking home.
 *
 * Monochrome in the site's ink color (`currentColor` from `text-foreground`),
 * so it reads black on beige and beige on charcoal. Spelling out "Tekton
 * Software" keeps the brand disambiguated from the CNCF Tekton project.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tekton Software — home"
      className={cn(
        "text-foreground focus-visible:outline-ring inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
    >
      <svg
        viewBox={TK_VIEWBOX}
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        className="h-[22px] w-auto shrink-0"
      >
        <path d={TK_PATH} />
      </svg>
      <span
        aria-hidden="true"
        className="text-xs leading-tight font-semibold tracking-[0.22em] uppercase"
      >
        Tekton
        <br />
        Software
      </span>
    </Link>
  );
}
