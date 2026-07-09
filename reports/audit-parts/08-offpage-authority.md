# Off-Page / Authority / Search-Visibility Audit — tiktokcalculator.net

Data source: Ahrefs Site Explorer (third-party index), pulled 2026-07-09.
**GSC gap:** the connected Ahrefs workspace has NO verified project for tiktokcalculator.net (its projects belong to an unrelated agency, whitehatagency.com.au). So there is **no first-party Google Search Console data** (real impressions/clicks/coverage/CTR). All figures below are Ahrefs' third-party estimates and should be validated against GSC once access is available.

## Headline metrics (2026-07-09)
| Metric | Value | Read |
|---|---|---|
| Domain Rating (DR) | **0.0** | No measurable link authority |
| Ahrefs Rank | ~98,367,202 | Bottom of the index |
| Organic keywords | **0** | Ranks for nothing in Ahrefs' top-100 index |
| Organic traffic (est.) | **0** | No organic visibility |
| Backlinks (live) | 604 | — |
| Referring domains (live) | 314 | High count, but see quality below |
| Paid keywords / traffic | 0 / 0 | No paid search |

**Reframing for the whole audit:** this is NOT a "traffic dropped / recover rankings" situation. The site is **effectively invisible in organic search** and must earn its first visibility. The anomaly — 314 referring domains but DR 0 and zero traffic — is explained by the link profile being spam/artificial rather than editorial.

## Verified OK
- No paid-search spend leaking budget (0 paid keywords).
- The domain resolves and is crawlable by Ahrefs (604 live backlinks discovered), so it is not blocking crawlers wholesale.

---

### [OFF-1] Backlink profile is spam/PBN-dominated — likely purchased cheap-SEO packages
- Severity: **Critical**
- Impact: Association with link schemes violates Google's link-spam policy. At best these links are ignored (wasted); at worst they contribute to algorithmic distrust that suppresses the whole site. This is the most plausible single explanation for DR 0 + 0 organic traffic despite 314 refdomains and 300+ pages of content.
- Evidence: Of the top 35 referring domains by DR, the large majority are flagged `is_spam: true` and are transparently link-selling/PBN domains registered in clusters right as the site launched (first_seen mostly 2026-03-xx to 2026-06-xx):
  - `itxoft-proven-seo-strategies.site`, `itxoft-cost-effective-seo-services.site`, `itxoft-affordable-seo-solutions.site`, `itxoft-trusted-seo-solutions.site`, `itxoft-organic-seo-growth.site`, `itxoft-seo-for-higher-rankings.site`, `itxoft-seo-for-modern-business.site`, `itxoft-results-focused-seo.site`, `itxoft-professional-seo-services.site`, `itxoft-reliable-seo-services.site` (10+ sibling spam domains)
  - `fiverr-quality-seo-at-affordable-rates.site`, `fiverr-seo-for-small-businesses.site`, `fiverr-seo-for-business-growth.site`, `fiverr-cost-effective-seo.site`, `fiverr-affordable-seo-services.site`
  - `.agency`/`.shop` link farms: `rankio.agency`, `linkspro.agency`, `seogrow.agency`, `rankgrowth.agency`, `linkrankpro.shop`, `rankxlinks.shop`, `ranklinkerpro.shop`, `seorankflow.shop`, `buyseobacklinks.shop`, `authoritybacklinks.shop`, `pbnseolinks.shop`
- Fix: (1) Export the full referring-domains list from Ahrefs/GSC. (2) Build and submit a **disavow file** covering the spam/PBN domains (all `is_spam:true` + the `*-seo.site`, `*.agency`, `*.shop` clusters). (3) STOP buying any Fiverr/PBN link packages. (4) If a Google manual action exists, file reconsideration after disavow. (5) Pursue legitimate links instead (see OFF-3).
- Effort: M

### [OFF-2] Toxic / spam anchor-text profile
- Severity: **Critical**
- Impact: The anchor text pointing at the domain is dominated by spam sales-pitch phrases and off-topic (casino/crypto) terms — a strong link-scheme fingerprint and brand-safety problem.
- Evidence: Top anchors by referring domains:
  - 210 refdomains / 336 links: *"Boost Rankings & Massive Traffic | High DR & High Traffic SEO Backlinks for Casino, Crypto For Competitive Niches … for tiktokcalculator.net"*
  - 166 refdomains: *"Back when I launched tiktokcalculator.net, I was overwhelmed by SEO options … Enter SEOExpress.org! …"*
  - Others: *"Fiverr backlinks boosted tiktokcalculator.net domain authority📈"*, *"When I relied on Fiverr, tiktokcalculator.net saw amazing results 🚀"*, *"thanks to the efforts of linkspro.agency, tiktokcalculator.net achieved remarkable growth…"*, *"Advance tiktokcalculator.net with Premium Dofollow Backlinks + Guest Post Packages…"*
  - Legitimate branded/naked anchors (`tiktokcalculator.net`, `tiktokcalculator`) exist but are a minority (47 + 18 refdomains).
- Fix: Same disavow action as OFF-1 removes most toxic anchors. Going forward, earn descriptive editorial/branded anchors from real creator-economy / marketing publications.
- Effort: M (covered by OFF-1 disavow)

### [OFF-3] Essentially zero genuine editorial backlinks
- Severity: **High**
- Impact: Even setting spam aside, there is no authoritative editorial link equity, so the site has nothing to rank on in competitive creator-monetization SERPs.
- Evidence: The few non-spam referring domains in the top set are auto-generated stat-scraper/aggregator sites, not editorial links: `siteprice.org` (DR71, "site value" scraper), `sitelike.org` (DR66, "similar sites" scraper), plus free-host aggregates like `blogspot.com` (49 links from a single blog). No niche-relevant publications, tools directories, or creator-economy media.
- Fix: Launch a legitimate link-earning program: (a) get listed in reputable creator-tool directories, (b) original data studies (e.g., "TikTok creator earnings benchmarks 2026") that journalists cite — the site already has data assets in `content/data/` to package as linkable research, (c) HARO/expert-quote outreach, (d) partnerships with creator-economy newsletters.
- Effort: L (ongoing)

### [OFF-4] Zero organic keyword footprint — indexation/visibility must be verified in GSC
- Severity: **High**
- Impact: 0 organic keywords in Ahrefs means either the site is too new/low-authority to rank, is not (fully) indexed, or is being algorithmically suppressed. Cannot distinguish these without first-party data.
- Evidence: `site-explorer-metrics` returns org_keywords=0, org_traffic=0 for mode=subdomains on 2026-07-09, despite 333 sitemap URLs.
- Fix: (1) Verify the property in Google Search Console and check Coverage/Pages report (indexed vs excluded counts) and Manual Actions/Security Issues. (2) Run `site:tiktokcalculator.net` to gauge index size. (3) Cross-reference with the indexation findings in the technical audit (Part 03). (4) Re-pull Ahrefs in 30–60 days to see if any keywords emerge after fixes.
- Effort: S (to diagnose)

### [OFF-5] No competitor benchmarking possible yet (context, not a defect)
- Severity: Low
- Impact: With 0 organic keywords, Ahrefs cannot compute organic competitors, so competitive gap analysis must be done manually from target keywords rather than from overlap data.
- Evidence: organic_competitors requires organic presence; the site has none.
- Fix: Manually define the competitor set (e.g., other TikTok money/earnings calculators and creator-economy resources) and do a keyword-gap analysis against them via Keywords Explorer once priorities are set.
- Effort: M

---

## Summary counts
- Critical: 2 (OFF-1 spam link profile, OFF-2 toxic anchors)
- High: 2 (OFF-3 no editorial links, OFF-4 zero organic footprint)
- Low: 1 (OFF-5 competitor benchmarking blocked)

## Top-line recommendation
Authority is the site's binding constraint. Content volume is not the problem (300+ pages exist); the problem is (a) a spam-dominated link profile that needs disavowing and a hard stop on paid links, and (b) no legitimate authority signals. Pair the on-site fixes from the other audit parts with a clean-link-earning program, and verify indexation reality in GSC immediately.
