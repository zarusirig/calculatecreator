# Domain Migration Design — `tiktokcalculator.net` → `ttcalculator.net`

**Date:** 2026-07-09
**Status:** Approved design, pending implementation plan
**Owner:** zarusirig

## 1. Context & Current State

- Next.js 14 site (static export, `output: 'export'` → `out/`), hosted on **Firebase Hosting**, project `tiktokcalculator-9619d`.
- **Current live domain:** `tiktokcalculator.net` (single Firebase Hosting site, `firebase.json` `hosting` is a single object with `public: "out"`).
- Brand name is already **"TT Calculator"** — fits `ttcalculator.net` cleanly; no rename needed.
- An earlier domain, `calculatecreator.com`, is fully retired. It survives only in non-deployed audit/docs files (`.seo/`, `docs/`, `outputs/`, `reports/`, prompt dirs) and is **out of scope**.
- The domain string is centralized in `src/lib/constants/site-config.ts` (`SITE_CONFIG` + `siteUrl()`), but is **also hardcoded** in ~818 spots across `src/` (730 `.tsx`, 90 `.ts`), `scripts/generate-sitemap.js`, and `public/robots.txt`. `public/sitemap.xml` (351) is generated from the sitemap script.
- MDX/content files do **not** hardcode the domain (0 occurrences). PWA manifest (`public/site.webmanifest`, `start_url: "/"`) and service worker (`public/sw.js`) use relative URLs — no changes needed.
- DNS/registrar for `ttcalculator.net`: **Namecheap** (domain registered, DNS access available).

## 2. Goals & Non-Goals

**Goals**
- Serve the production site on `ttcalculator.net` (apex) as the canonical domain.
- Permanently **301-redirect** every `tiktokcalculator.net` URL to the matching `ttcalculator.net` URL, preserving path (SEO equity).
- Replace all production references to the old domain (canonical tags, OG/Twitter meta, JSON-LD schema, hreflang/locale alternates, robots, sitemap, contact emails).
- Zero downtime on the new domain during cutover.

**Non-Goals**
- No brand rename, logo change, or copy rewrite (brand stays "TT Calculator").
- No cleanup of `calculatecreator.com` in non-deployed docs/audit files.
- No change to the compiled internal audit tool `scripts/.compiled/audit-content-quality.js` (contains brand-stripping regex, not deployed).
- No Firebase project migration — reuse `tiktokcalculator-9619d`.

## 3. Locked Decisions

| Decision | Choice |
|---|---|
| Old-domain handling | Keep live, **301-redirect** to new (path-preserving) + Search Console Change of Address |
| Domain status | Registered on **Namecheap**, DNS access available |
| Scope | **Domain URLs only** — brand unchanged |
| Firebase redirect architecture | **Option 1: two-site setup** (Namecheap URL-redirect can't preserve paths; Cloudflare Bulk Redirect N/A) |
| Browser automation | Claude-in-Chrome used for Namecheap DNS + Firebase Console steps, with the user logged in and confirming each live change |

## 4. Part A — Code & Config Migration (in-repo)

1. Update `src/lib/constants/site-config.ts`: `url`, `logoUrl`, `ogImage`, `org.url` → `ttcalculator.net`.
2. Literal, exact replace of `tiktokcalculator.net` → `ttcalculator.net` across `src/`, `scripts/generate-sitemap.js`, `public/robots.txt`.
   - **Safety:** match the literal `tiktokcalculator.net` (with `.net`). The Firebase project id `tiktokcalculator-9619d` and its `*.firebaseapp.com` / `*.firebasestorage.app` hosts contain no `.net`, so they are never touched. Trailing-dot variants (`tiktokcalculator.net.`, 11×) are handled by the same replacement (dot preserved).
   - This also swaps the 7 contact emails (`contact@`, `business@`, `privacy@`, `press@`, `data@`, `bugs@`, `corrections@`) to `@ttcalculator.net`.
3. `public/sitemap.xml` regenerates automatically via `npm run build` (`generate-sitemap` → `SITE_URL`).
4. **Verification gate:** after replace + build, `grep -r "tiktokcalculator\.net"` across `src/ public/ scripts/` must return **zero** matches; build must exit 0.

## 5. Part B — Firebase Hosting Two-Site Architecture (the 301)

Firebase Hosting redirects are path-based, not host-based, so host-level 301 needs two sites.

- Convert `firebase.json` `hosting` from a single object to an **array of two targets**, and add target mappings to `.firebaserc`.
- **Target `app`** → existing site `tiktokcalculator-9619d`. Serves `out/`. Keeps all current redirects + headers. Custom domains: `ttcalculator.net` (canonical) + `www.ttcalculator.net` → apex.
- **Target `legacy`** → new hosting site (e.g. `tt-legacy-redirect`). Minimal `public` dir. Single catch-all rule: `301 "**" → "https://ttcalculator.net/:splat"`. Custom domains: `tiktokcalculator.net` + `www.tiktokcalculator.net`.
- CLI: `firebase hosting:sites:create tt-legacy-redirect`, `firebase target:apply hosting app tiktokcalculator-9619d`, `firebase target:apply hosting legacy tt-legacy-redirect`, `firebase deploy --only hosting`.

**Consideration:** the `tiktokcalculator.net` custom domain must be moved from the content site to the legacy site — this triggers a brief SSL re-provision **on the old domain only**. The new domain (`ttcalculator.net`) is added fresh with zero downtime.

## 6. Part C — Namecheap DNS (values provided at execution)

Firebase Console emits the exact records. Expected shape (Advanced DNS in Namecheap):
- Apex `ttcalculator.net`: two **A records** to Firebase IPs (`151.101.1.195`, `151.101.65.195` — confirm from Console at run time).
- `www`: **CNAME** to the Firebase-provided target (or A records if flattened).
- **TXT** verification record for domain ownership.
- Same pattern for `tiktokcalculator.net` pointed at the legacy redirect site.
- Custom-domain connection is done in the **Firebase Console** (CLI cannot add custom domains). Claude-in-Chrome drives both the Console and Namecheap Advanced DNS, user logged in, confirming each change.

## 7. Part D — Post-Migration SEO Checklist

- Submit `https://ttcalculator.net/sitemap.xml` in Google Search Console + Bing Webmaster.
- Add `ttcalculator.net` as a new GSC property; verify; file **Change of Address** from `tiktokcalculator.net`.
- Re-verify/update **AdSense** site to the new domain (`ads.txt` already served on new domain).
- Keep the old domain + redirect site live **≥12 months** (indefinitely preferred).
- Update owned external profiles/backlinks where practical.
- Set up email (MX/forwarding) on `ttcalculator.net` so swapped contact addresses don't bounce, **or** revert emails to a working mailbox.

## 8. Part E — Zero-Downtime Sequencing

1. Land Part A code changes on a branch; `npm run build` green; verification grep clean.
2. Connect `ttcalculator.net` (+ www) to the content site (Console + Namecheap DNS); wait for SSL active; confirm site loads.
3. Deploy. Interim: both domains serve content, canonical → new (acceptable, short).
4. Create legacy redirect site; move `tiktokcalculator.net` (+ www) to it; deploy. 301s go live.
5. File Change of Address; submit sitemaps.

## 9. Testing / Verification

- `npm run build` exits 0; `out/` regenerated.
- `grep -rn "tiktokcalculator\.net" src public scripts` → 0 matches.
- After DNS live: `curl -sI https://tiktokcalculator.net/guides/tiktok-coins/` returns `301` with `location: https://ttcalculator.net/guides/tiktok-coins/` (path preserved).
- `curl -sI https://ttcalculator.net/` returns `200`; HTML `<link rel="canonical">` and OG/JSON-LD point to `ttcalculator.net`.
- `https://ttcalculator.net/sitemap.xml` and `/robots.txt` reference only the new domain.
- `www.ttcalculator.net` → 301 → apex.

## 10. Rollback

- Code: revert the migration commit(s); redeploy content site.
- DNS/Firebase: repoint `tiktokcalculator.net` custom domain back to the content site; remove the legacy redirect site. Old domain resumes serving content directly.
- Because the old domain and its DNS are retained throughout, rollback is low-risk before Change of Address is filed.

## 11. Risks & Flags

- **Email bounce:** swapped `@ttcalculator.net` addresses require mail setup on the new domain (Part D).
- **SSL re-provision** on the old domain during the domain move (minutes–hours); mitigated by sequencing the new domain first.
- **AdSense** may require re-review on the new domain.
- **Interim duplicate content** (step 3) is brief and mitigated by canonical → new; fully resolved once 301s are live (step 4).
