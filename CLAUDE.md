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

This is Tekton Software's company site, live at https://www.tektonsoftware.com. Every push to `main` deploys to production, so pushing to `main` needs explicit approval. Routes: `/` (one-page home: hero, What we do, Approach, Contact), `/security` (vulnerability disclosure), `/privacy`, `/terms`, plus `/.well-known/security.txt` from `public/`. Every route is static.

The pages from the earlier AI-appliance site (`/product`, `/pricing`, `/about`, `/demo`, `/security-one-pager.pdf`) were removed on 10 November 2026 and permanently redirect to `/` (see `next.config.ts`). Don't bring back their claims.

## Core architecture

**Content lives in `content/`, not in components.** `content/site.ts` is the single source of truth for company info (`legalName` is "Tekton Software LLC"), navigation, the contact CTA, footer columns, social accounts and the home-page copy. `content/legal.ts` holds the Privacy, Terms and Security page copy; every factual claim there (no cookies, no trackers, no third-party requests, a hosting provider, Google Workspace email) must stay true to the code. Components consume these; `site.socials` also feeds JSON-LD `sameAs`.

**SEO is centralized in `lib/metadata.ts`.** `rootMetadata` sets the title template, and `buildMetadata({ title, description, path })` produces per-page `Metadata` with consistent OpenGraph/Twitter cards. New pages should `export const metadata = buildMetadata(...)` rather than hand-rolling metadata objects.

**Brand disambiguation is a hard product constraint.** "Tekton" (the company, Tekton Software) must never ship as a bare title because it collides with the CNCF Tekton CI/CD project. The title template in `rootMetadata`, the `description` strings in `content/site.ts`, and the JSON-LD `Organization` schema in `app/layout.tsx` all exist to disambiguate. Preserve this when editing copy or titles.

**`SITE_URL`** comes from `NEXT_PUBLIC_SITE_URL`, falling back to `https://www.tektonsoftware.com` (the host serves www and redirects the apex to it). It feeds canonical URLs, the sitemap, OG tags and `metadataBase`. `public/.well-known/security.txt` hard-codes the www URLs; keep it in step.

**Security headers** (CSP, nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy, COOP) are set in `next.config.ts` for production builds only, because the dev server needs `eval`. The CSP allows inline scripts (Next.js static pages and next-themes inline theirs). Anything that loads from another origin will be blocked: update the CSP and the privacy policy together. No location (city or state) appears anywhere on the site.

## Design system

Defined entirely in `app/globals.css` (Tailwind v4 `@theme inline` + CSS custom properties) — there is no JS config file. Key conventions:

- **Use semantic token utilities, not raw colors.** `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-accent`, `text-accent-text`, `border-border`, etc. These are CSS variables mapped into the Tailwind theme. Never use Tailwind palette colors like `bg-green-700` directly.
- **`accent-text` vs `accent-foreground`:** `accent-foreground` is text _on_ an accent background; `accent-text` is accent-colored text on a normal background (it shifts lighter in dark mode for AA contrast). They are not interchangeable.
- **Dark mode is a designed palette, not an inversion.** Class-based (`.dark` on `<html>`, toggled by next-themes). Both palettes are hand-tuned in `:root` and `.dark`. Adding a color means adding it to _both_ blocks and to the `@theme inline` map.
- **`--radius-base`** (0.25rem) is the standard corner radius — use `rounded-[var(--radius-base)]`.
- Fonts: Geist Sans (body, `--font-sans`) and Newsreader (serif accents only, `--font-serif`), wired up in `app/layout.tsx`.
- Accessibility is load-bearing: skip link, `:focus-visible` ring, `prefers-reduced-motion` handling (the `.reveal` animation collapses to nothing under reduced motion). Keep focus-ring and reduced-motion behavior intact.

## Component conventions

- `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for all conditional/merged class names.
- Variant-based components use `class-variance-authority` — see `components/ui/button.tsx` as the canonical pattern (export both the component and its `*Variants` so links can borrow button styles via `buttonVariants(...)`).
- `components/ui/` = primitives; `components/layout/` = page chrome (`Header`, `Footer`, `Container`); top-level `components/` = site-specific pieces.
- Social icons: `components/SocialIcon.tsx` (Simple Icons paths, CC0), filled with `currentColor` so they take the ink color in both themes.
- `"use client"` only where needed (`Header`, `ThemeProvider`, `ThemeToggle`, `SectionReveal`); prefer server components by default.
