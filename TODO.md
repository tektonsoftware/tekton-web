# TODO

Open items for tektonsoftware.com. File paths are clickable.

## Dated

- [ ] **Renew security.txt before 31 October 2027.** RFC 9116 wants `Expires`
      less than a year out. Bump it in
      [public/.well-known/security.txt](public/.well-known/security.txt) each year.

## Needs Jay

- [ ] **Lawyer review of Privacy and Terms.** The copy in
      [content/legal.ts](content/legal.ts) is drafted from SigDek's policies and
      hasn't been reviewed. The terms have no governing-law clause and no "a Nevada
      company", because the site names no location; revisit both once the lawyer
      answers question 5 in `_work/lawyer/email-draft.md`.
- [ ] **Security contact address (optional).** security.txt and `/security` use
      contact@tektonsoftware.com. To use a dedicated `security@tektonsoftware.com`,
      add the alias in Google Workspace, then change both files.
- [ ] **`NEXT_PUBLIC_SITE_URL` in Vercel.** Not needed while www is the primary
      domain (the code defaults to it). Set it only if the primary domain changes.

## Later

- [ ] **Products on the site.** The site names no product, footer included
      (Jay's decision, 10 November 2026). Revisit if that changes.
- [ ] **Hosting.** The site runs on Vercel; Tekton's standard stack is Cloudflare.
      No visitor-facing reason to move yet.
- [ ] **Bump `COPYRIGHT_YEAR`** in [components/layout/Footer.tsx](components/layout/Footer.tsx)
      each January.
