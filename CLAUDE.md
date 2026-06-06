# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Next.js dev server (Turbopack-less; http://localhost:3000)
npm run build      # Production build
npm run start      # Serve the production build
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit — run this before committing; build does not gate on type errors the same way
npm run format     # Prettier (with prettier-plugin-tailwindcss class sorting)
```

There is no test runner configured yet.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS **v4** (CSS-first, no `tailwind.config`) · next-themes. Import alias `@/*` maps to the repo root (e.g. `@/lib/utils`, `@/content/site`).

This is an early-stage marketing site. The scaffold (chrome, design system, layout) exists; most pages (`/product`, `/security`, `/pricing`, `/about`, `/demo`) and the `/api/demo` route handler referenced in `next.config.ts` are **not built yet** — `app/page.tsx` is a placeholder. Assets like `/og-default.png` are also not present.

## Core architecture

**Content lives in `content/site.ts`, not in components.** It is the single source of truth for company info, navigation, the demo CTA, footer link groups, and SEO/structured-data strings. Edit copy there; components consume it. The `nav` and `footer` arrays drive the rendered `Header`/`Footer` — add a page by adding its entry here.

**SEO is centralized in `lib/metadata.ts`.** `rootMetadata` sets the title template, and `buildMetadata({ title, description, path })` produces per-page `Metadata` with consistent OpenGraph/Twitter cards. New pages should `export const metadata = buildMetadata(...)` rather than hand-rolling metadata objects.

**Brand disambiguation is a hard product constraint.** "Tekton" (the company — private on-premise AI) must never ship as a bare title because it collides with the CNCF Tekton CI/CD project. The title template in `rootMetadata`, the `description` strings in `content/site.ts`, and the JSON-LD `Organization` schema in `app/layout.tsx` all exist to disambiguate. Preserve this when editing copy or titles.

**`SITE_URL`** comes from `NEXT_PUBLIC_SITE_URL` (set in deployment env), falling back to a placeholder domain. It feeds canonical URLs, OG tags, and `metadataBase`.

## Design system

Defined entirely in `app/globals.css` (Tailwind v4 `@theme inline` + CSS custom properties) — there is no JS config file. Key conventions:

- **Use semantic token utilities, not raw colors.** `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-accent`, `text-accent-text`, `border-border`, etc. These are CSS variables mapped into the Tailwind theme. Never use Tailwind palette colors like `bg-green-700` directly.
- **`accent-text` vs `accent-foreground`:** `accent-foreground` is text *on* an accent background; `accent-text` is accent-colored text on a normal background (it shifts lighter in dark mode for AA contrast). They are not interchangeable.
- **Dark mode is a designed palette, not an inversion.** Class-based (`.dark` on `<html>`, toggled by next-themes). Both palettes are hand-tuned in `:root` and `.dark`. Adding a color means adding it to *both* blocks and to the `@theme inline` map.
- **`--radius-base`** (0.5rem) is the standard corner radius — use `rounded-[var(--radius-base)]`.
- Fonts: Geist Sans (body, `--font-sans`) and Newsreader (serif accents only, `--font-serif`), wired up in `app/layout.tsx`.
- Accessibility is load-bearing: skip link, `:focus-visible` ring, `prefers-reduced-motion` handling (the `.reveal` animation collapses to nothing under reduced motion). Keep focus-ring and reduced-motion behavior intact.

## Component conventions

- `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for all conditional/merged class names.
- Variant-based components use `class-variance-authority` — see `components/ui/button.tsx` as the canonical pattern (export both the component and its `*Variants` so links can borrow button styles via `buttonVariants(...)`).
- `components/ui/` = primitives; `components/layout/` = page chrome (`Header`, `Footer`, `Container`); top-level `components/` = site-specific pieces.
- `"use client"` only where needed (`Header`, `ThemeProvider`, `ThemeToggle`, `SectionReveal`); prefer server components by default.
