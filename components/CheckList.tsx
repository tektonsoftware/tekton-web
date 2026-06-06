import * as React from "react";
import { cn } from "@/lib/utils";

/** A list of items each prefixed by a check (capabilities, inclusions). */
export function CheckList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <CheckIcon />
          <span className="text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** A list of items each prefixed by a minus (explicit exclusions). */
export function ExcludeList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-muted-foreground"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-accent-text"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
