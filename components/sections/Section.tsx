import * as React from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/** A vertically padded page section with an optional muted/bordered surface. */
export function Section({
  className,
  containerClassName,
  surface = "default",
  bordered = false,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  containerClassName?: string;
  surface?: "default" | "muted";
  bordered?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        surface === "muted" && "bg-muted",
        bordered && "border-t border-border",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
