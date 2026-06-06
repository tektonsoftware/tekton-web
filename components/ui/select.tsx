import * as React from "react";
import { cn } from "@/lib/utils";

/** Native select — lighter and more accessible than a custom popover for forms. */
const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "border-input bg-card text-foreground focus-visible:outline-ring flex h-11 w-full appearance-none rounded-[var(--radius-base)] border px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      // chevron via background image so it works without an icon dependency
      "bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-9",
      "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23565a55%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')]",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export { Select };
