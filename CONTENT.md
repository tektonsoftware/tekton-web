# Content map

Every piece of marketing copy lives in **`content/*.ts`** as typed objects — nothing
is hardcoded in components. Edit copy there and the change flows to the page. Each
file has `// intent:` comments explaining what each prominent block is for.

This file is the index: what copy exists, where it's defined, and where it renders.

| What                                                                                                            | Defined in                                                          | Rendered by                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Company name, tagline, nav, footer links, primary CTA, footer CTA, founder location, JSON-LD fields, `SITE_URL` | [content/site.ts](content/site.ts)                                  | [Header](components/layout/Header.tsx), [Footer](components/layout/Footer.tsx), [layout](app/layout.tsx), every CTA |
| Page `<title>` / meta description templates                                                                     | [lib/metadata.ts](lib/metadata.ts) + each `*Meta` in `content/*.ts` | per-page `metadata` exports                                                                                         |
| **Home** — hero, three-up (Core/Verify/Shield), how-it-works steps, trust strip                                 | [content/home.ts](content/home.ts)                                  | [app/page.tsx](app/page.tsx)                                                                                        |
| **Product** — intro + four pillar sections (claim, body, capabilities)                                          | [content/product.ts](content/product.ts)                            | [app/product/page.tsx](app/product/page.tsx)                                                                        |
| **Security** — hero + one-pager link, architecture, data-flow, controls grid, SOC 2 status, founder note        | [content/security.ts](content/security.ts)                          | [app/security/page.tsx](app/security/page.tsx)                                                                      |
| **Pricing** — intro, three tiers (prices, includes, excludes), every-tier strip, footnote                       | [content/pricing.ts](content/pricing.ts)                            | [app/pricing/page.tsx](app/pricing/page.tsx)                                                                        |
| **About** — hero, founder bio, "why offline" thesis                                                             | [content/about.ts](content/about.ts)                                | [app/about/page.tsx](app/about/page.tsx)                                                                            |
| **Demo** — hero, scheduler placeholder text, form fields/labels, success/error copy, privacy note               | [content/demo.ts](content/demo.ts)                                  | [app/demo/page.tsx](app/demo/page.tsx), [DemoForm](components/sections/DemoForm.tsx)                                |
| **404** copy                                                                                                    | inline                                                              | [app/not-found.tsx](app/not-found.tsx)                                                                              |
| OG / Twitter card text                                                                                          | inline                                                              | [app/opengraph-image.tsx](app/opengraph-image.tsx)                                                                  |

## Editing notes

- **Product/pillar names are fixed**: Tekton Core, Tekton Connect, Tekton Verify,
  Tekton Shield. Used verbatim — don't rename in copy.
- **Positioning guardrail**: keep the message broad ("businesses with sensitive
  data"). Do not name any specific profession or regulated vertical. A list of
  disallowed words is enforced — see [TODO.md](TODO.md) / the project brief.
- **No filler** ("revolutionary", "cutting-edge", "AI-powered", "next-generation")
  and **no emoji** in copy.
- Prices in `content/pricing.ts` are provisional and flagged `priceTodo: true`;
  the page renders a "TODO — provisional pricing" tag while that's set.
- Demo form field `name` values are the keys POSTed to `/api/demo` — keep them
  stable if you relabel fields.
