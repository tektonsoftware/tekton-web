"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Class-based light/dark theming. next-themes injects a no-flash inline script.
 *
 * Light ("bright") is the default for first-time visitors — we do NOT follow the
 * OS preference (enableSystem={false}), so a visitor on a dark-mode OS still lands
 * on the light site. Choosing dark via the toggle persists in localStorage.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
