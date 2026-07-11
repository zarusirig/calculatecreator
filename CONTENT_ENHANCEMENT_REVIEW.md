# Content Trust Enhancement — Review & Resume Notes

**Run:** multi-agent Firecrawl research + E-E-A-T enhancement of all 250 content pages
**Status:** ✅ COMPLETE (2026-07-11). 85/85 agents finished, 0 errors. `next build` passes (exit 0), frontmatter 250/250 clean, internal links clean.
**Workflow run ID:** `wf_d706526e-fc8`

## Final results
- 13/13 research fact-packs built (Firecrawl spend ~8–9 credits total, well under budget).
- **All 250 content files enhanced** (+12,632 / −12,233 lines). ~189 unique page-edits reported across the run; a handful of already-strong pages were audited and intentionally left unchanged (see agent "skipped" notes).
- 28 cross-page numeric conflicts found by the consistency phase, **24 auto-fixed**; 4 left for human judgment (they are the code-drift / legal-fact items below).
- Verification passed: frontmatter (0 problems), internal-link format (0 changes needed), production `next build` (exit 0). Independently re-confirmed.
- Nothing outside `content/` touched except `public/sitemap.xml` (pre-existing). All changes uncommitted for your review.

## Build-blocking items — RESOLVED by the run
1. ~~Corrupted `content/data/brand-deal-rates-by-niche.mdx`~~ → rewritten clean; JSX artifacts gone; tiers match canon.
2. ~~3 `.md` files missing frontmatter~~ → repair agent added minimal frontmatter (matching repo convention).
3. ~~Over-long metaDescriptions~~ → normalized during enhancement.
4. ~~`tiktok-pay-per-1-million-views.mdx` self-contradiction~~ → reconciled by the consistency phase.

## Still needs human decision (site values kept; NOT changed by the run)

## Internal code drift (affects live calculators — human decision)
`src/lib/constants/calculator-constants.ts` is STALE vs `creator-data.ts` (the documented source of truth per audit notes INC-001/INC-003/F-001). Confirm which file the live calculators import; retire the stale one or migrate:
- Creator Fund RPM max: `0.04` (stale) vs `0.05` (canon)
- Coin price: `$0.0105` vs `$0.0106` in-app
- Max coin purchase: `16,500` vs `6,607` coins ($69.99)
- Follower tiers: mid `50K–500K`/macro `500K–1M` (stale) vs mid `50K–200K`/macro `200K–1M` (canon)

## Facts to verify before next refresh (site values kept; flagged only)
- **Taxes guide** (`guides/business/tiktok-creator-taxes-guide.mdx`): states $600 1099-K threshold, but July 2025 OBBBA reverted to $20,000/200 transactions (1099-K) and $2,000 1099-NEC from 2026. Legal accuracy — review.
- **FTC guide** (`guides/business/ftc-disclosure-tiktok.mdx`): meta says "$600,000 per violation"; per-violation statutory penalty is ~$53,088 (2025). Large figures are total settlements.
- **TikTok MAU** inconsistent across site: 1.92B (`tiktok-vs-youtube-shorts-2026.mdx`) vs 1.8B (`tiktok-vs-lemon8-creators.mdx`); web ~1.9B. Pick one canonical value, add to `creator-data.ts`.
- **Creator Rewards RPM** site canon $0.50–$2.00/1K; multiple 2026 competitors report $0.40–$1.20/1.50. Site's $2.00 top end may need an "up to" qualifier.
- **YouTube Shorts scale stats** ("90B daily views", 2.14% engagement) look stale for 2026.
- **Instagram Reels max length**: site says 90s; Instagram extended to ~3 min in 2025 — verify.
- **Community-guidelines strikes**: TikTok publishes no fixed strike-count-to-ban; only "90-day expiry" and "threshold varies" are officially supported.
- **Brand-deal tier boundaries/rates** are conservative vs competitors (site canon wins by design); harmonize prose examples with `FOLLOWER_TIERS`.

## How to resume (after 4:55pm Asia/Kathmandu, in this local session)
The workflow is cache-aware: the 87 done pages + 13 fact-packs replay instantly; only the ~47 failed agents (remaining enhancements + all consistency + verify) re-run.

Resume with:
`Workflow({scriptPath: ".../content-trust-enhancement-wf_d706526e-fc8.js", resumeFromRunId: "wf_d706526e-fc8", args: <same worklist>})`

(Full script path and args are in the session's workflow scripts dir. Just tell Claude "resume the content enhancement run" and it will relaunch from the cached run.)
