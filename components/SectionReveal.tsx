"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal one-shot reveal: fades/translates content in when it scrolls into view.
 * Respects prefers-reduced-motion (handled in globals.css — the .reveal class
 * collapses to no transform/opacity change under reduced motion).
 */
export function SectionReveal({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn("reveal", className)} data-shown={shown}>
      {children}
    </Tag>
  );
}
