import * as React from "react";
import { cn } from "@/lib/utils";

/** Tracked small-caps label that introduces a section (e.g. "HOW IT WORKS"). */
export function SectionLabel({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("section-label", className)} {...props}>
      {children}
    </p>
  );
}
