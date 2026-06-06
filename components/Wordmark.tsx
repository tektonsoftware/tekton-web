import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Placeholder brand mark — a clean wordmark in the accent color.
 * No logo asset exists yet (see TODO.md). When one lands, swap this for an
 * next/image with explicit dimensions.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "rounded-sm text-lg font-semibold tracking-tight text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
      aria-label="Tekton — home"
    >
      Tekton
    </Link>
  );
}
