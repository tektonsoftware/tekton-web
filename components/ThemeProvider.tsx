"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Class-based light/dark theming. next-themes injects a no-flash inline script. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
