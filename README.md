# Tekton Software website

The company site for Tekton Software LLC, live at https://www.tektonsoftware.com.

> Not the CNCF Tekton CI/CD project. Titles and metadata say "Tekton Software" to
> keep the two apart.

## Stack

- **Next.js 15** (App Router) and **TypeScript**; every route is static
- **Tailwind v4** (CSS-first `@theme` tokens in [app/globals.css](app/globals.css))
- **Geist** (sans) and **Newsreader** (serif), self-hosted via `next/font`
- Light and dark themes via **next-themes** (a designed dark palette, not an inversion)
- All copy in [`content/*.ts`](content/); see [CONTENT.md](CONTENT.md)
- Hosted on **Vercel**

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build (security headers apply here, not in dev)
npm run lint       # eslint (next core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
npm run format     # prettier
```

## Project layout

```
app/        routes (/, /security, /privacy, /terms), sitemap, robots, icons,
            link-preview card, 404, layout (JSON-LD)
components/ chrome (Header, Footer), ui/ primitives, sections/, SocialIcon
content/    all copy and config (site.ts, legal.ts)
lib/        cn() and metadata helpers
public/     .well-known/security.txt
```

## Verify

```bash
npm run typecheck && npm run lint && npm run build
npm start
```

Then check `/`, `/security`, `/privacy` and `/terms` at 390 and 1280 px in light
and dark, and confirm the browser console shows no CSP errors. Old URLs
(`/product`, `/pricing`, `/about`, `/demo`) should return a 308 to `/`.

## Deploy

Every push to `main` deploys to production on Vercel; branches and pull requests
get preview URLs. Pushing to `main` needs Jay's go-ahead.
