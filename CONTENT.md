# Content map

All site copy lives in **`content/*.ts`** as typed objects. Edit copy there and the
change flows to the page. This file says where each piece is defined and rendered.

| What                                                                                               | Defined in                                                         | Rendered by                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Company name and legal name, tagline, email, nav, CTA, footer columns, social accounts, `SITE_URL` | [content/site.ts](content/site.ts)                                 | [Header](components/layout/Header.tsx), [Footer](components/layout/Footer.tsx), [layout](app/layout.tsx) (JSON-LD)                                                                        |
| **Home**: hero, What we do, Approach, Contact                                                      | [content/site.ts](content/site.ts) (`home`)                        | [app/page.tsx](app/page.tsx)                                                                                                                                                              |
| **Privacy, Terms, Security** pages                                                                 | [content/legal.ts](content/legal.ts)                               | [app/privacy/page.tsx](app/privacy/page.tsx), [app/terms/page.tsx](app/terms/page.tsx), [app/security/page.tsx](app/security/page.tsx) via [LegalPage](components/sections/LegalPage.tsx) |
| security.txt                                                                                       | [public/.well-known/security.txt](public/.well-known/security.txt) | served as-is                                                                                                                                                                              |
| Page `<title>` and meta description templates                                                      | [lib/metadata.ts](lib/metadata.ts)                                 | each page's `metadata` export                                                                                                                                                             |
| Link-preview card (OG and Twitter)                                                                 | inline                                                             | [app/opengraph-image.tsx](app/opengraph-image.tsx)                                                                                                                                        |
| **404**                                                                                            | inline                                                             | [app/not-found.tsx](app/not-found.tsx)                                                                                                                                                    |

## Editing notes

- Policy text is plain strings. [LegalPage](components/sections/LegalPage.tsx) turns
  email addresses and `https://` URLs into links.
- Every claim in [content/legal.ts](content/legal.ts) must match the code: no
  cookies, no trackers, no requests to other origins. If you add analytics, a form
  or a third-party script, update the privacy policy and the CSP in
  [next.config.ts](next.config.ts) in the same change.
- No location (city or state) anywhere on the site.
- No filler ("revolutionary", "cutting-edge", "AI-powered", "next-generation") and
  no emoji in copy.
