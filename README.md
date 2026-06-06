# Tekton — Private AI for Sensitive Data

Marketing website for Tekton: private, on-premise AI infrastructure for businesses
with sensitive data. Pre-launch. The site's job is to get a serious buyer to book a
15-minute demo.

> Not the CNCF Tekton CI/CD project. Titles and meta disambiguate accordingly.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind v4** (CSS-first `@theme` tokens in [app/globals.css](app/globals.css))
- shadcn-style UI primitives (native elements; no Radix runtime)
- **Geist** (sans) + **Newsreader** (serif) via `next/font`
- Light/dark via **next-themes** (designed dark palette, not inverted)
- All copy centralized in [`content/*.ts`](content/) — see [CONTENT.md](CONTENT.md)
- Deploy target: **Vercel**

Static everywhere except `POST /api/demo`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also verifies static rendering)
npm start          # serve the production build
npm run lint       # eslint (next core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
npm run format     # prettier
```

## Editing copy

Don't edit strings in components. All marketing copy lives in
[`content/*.ts`](content/) with `// intent:` comments explaining each block. The
copy-to-location map is in [CONTENT.md](CONTENT.md). Things still needing real
content or assets are in [TODO.md](TODO.md).

## Project layout

```
app/                 routes (home, product, security, pricing, about, demo),
                     api/demo route, sitemap, robots, OG/twitter/icon, 404, layout
components/          chrome (Header/Footer), ui/ primitives, sections/, diagrams/ (SVG)
content/             all copy + config (site, home, product, security, pricing, about, demo)
lib/                 utils (cn), metadata helpers
public/              security-one-pager.pdf (placeholder) + future assets
```

## Verify

```bash
npm run build && npm run lint && npm run typecheck
# Forbidden words (professions/verticals/regulations) must return nothing:
grep -rniE '\b(law|lawyer|attorney|doctor|physician|medical|hipaa|ria|accountant|cpa)\b' content app components
```

Then `npm start` and click through all routes in light + dark, mobile + desktop;
submit the demo form and confirm the payload logs (see the running server console).

## Deploy (Vercel)

1. Push to GitHub and **Import Project** in Vercel — Next.js is auto-detected, no
   `vercel.json` needed.
2. Add your domain under **Settings → Domains** and point DNS at Vercel (HTTPS is
   automatic).
3. (Optional) set `NEXT_PUBLIC_SITE_URL` if the canonical domain isn't
   `https://tektonsoftware.com`.
4. Every push to `main` ships to production; PRs get preview URLs.

> The demo form's `console.log` writes only to Vercel **function logs** — it does not
> email or store anything yet. See [TODO.md](TODO.md) to wire a real destination.
