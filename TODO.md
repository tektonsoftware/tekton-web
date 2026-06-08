# TODO — before launch

Everything here needs your input or a real asset before the site goes live.
Grouped by priority. File paths are clickable.

## Blocking (don't launch without these)

- [ ] **Confirm pricing.** All three tiers are provisional and flagged
      `priceTodo: true`. Set the real numbers and remove the flags in
      [content/pricing.ts](content/pricing.ts). Current placeholders:
      Small $18K + $1,500/mo · Mid $32K + $2,800/mo · Department $60K + $4,000/mo.
- [ ] **Security one-pager PDF.** [public/security-one-pager.pdf](public/security-one-pager.pdf)
      is a generated placeholder. Replace with the real one-pager (same filename,
      or update the link in [content/security.ts](content/security.ts)).
- [ ] **Wire up the demo form destination.** [app/api/demo/route.ts](app/api/demo/route.ts)
      only `console.log`s to Vercel function logs right now — it does **not** email,
      store, or notify anyone. Connect it to an inbox / CRM / Slack.
- [ ] **Scheduler embed.** [app/demo/page.tsx](app/demo/page.tsx) has a placeholder
      where the Cal.com / Calendly embed goes. Paste the embed and remove the note
      (source text in [content/demo.ts](content/demo.ts)).
- [ ] **Founder section (temporarily removed).** The founder block on `/about` is
      currently not rendered (a restore marker sits in
      [app/about/page.tsx](app/about/page.tsx); copy is preserved in
      [content/about.ts](content/about.ts) `founder`, and the full markup is in git
      history). To bring it back: restore the block, set the real founder name, and
      replace the photo placeholder with a `next/image`. CISSP references were also
      removed site-wide — re-add the credential wording here and in
      [content/security.ts](content/security.ts) / [content/home.ts](content/home.ts)
      / [content/product.ts](content/product.ts) if/when you want it back.
- [ ] **Legal copy review.** `/privacy` and `/terms` now exist with **minimal
      placeholder copy that has NOT been reviewed by counsel**
      ([content/legal.ts](content/legal.ts), shown with an honest "not yet reviewed"
      banner). Replace the body text with reviewed language before launch and bump
      the `lastUpdated` date.

## Important (do soon)

- [ ] **Set `NEXT_PUBLIC_SITE_URL`** in Vercel project settings if the canonical
      domain differs from `https://tektonsoftware.com` (e.g. a `www.` variant). It
      drives canonical URLs, sitemap, robots, and OG tags ([content/site.ts](content/site.ts)).
- [ ] **Real logo / wordmark.** Currently a text wordmark in the accent color
      ([components/Wordmark.tsx](components/Wordmark.tsx)) and a generated "T" favicon
      ([app/icon.tsx](app/icon.tsx)). Swap when a logo exists.
- [ ] **Social proof.** Trust strip on the home page is marked
      `{/* TODO: real logos */}` ([app/page.tsx](app/page.tsx)). No fake logos were
      added — add real ones when you have permission.
- [ ] **Social accounts for JSON-LD.** `sameAs` is empty in
      [content/site.ts](content/site.ts). Add LinkedIn etc. when they exist.

## Nice to have

- [ ] **SOC 2 status detail.** Update the status text / add audit window as the
      program progresses ([content/security.ts](content/security.ts)).
- [ ] **Custom OG art.** OG/Twitter card is generated from text
      ([app/opengraph-image.tsx](app/opengraph-image.tsx)). Replace with designed art
      if desired.
- [ ] **Blog.** Intentionally skipped for now (no `/blog` route). Revisit if you want
      a content surface — the copy is already centralized, MDX can be added later.

## Notes

- Forbidden words (professions/verticals/regulations) and filler terms are absent
  site-wide; a grep is part of the verification step in [README.md](README.md). Keep
  it that way when editing copy.
