import * as React from "react";
import { cn } from "@/lib/utils";

/** Accessible wrapper for schematic diagrams: bordered surface + optional caption. */
export function Figure({
  className,
  caption,
  children,
}: {
  className?: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className={cn(
        "border-border bg-muted/40 rounded-[var(--radius-base)] border p-6",
        className
      )}
    >
      {children}
      {caption && (
        <figcaption className="text-muted-foreground mt-4 text-center text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
