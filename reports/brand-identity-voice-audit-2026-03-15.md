# Brand Identity and Voice Audit

Date: 2026-03-15

## Scope

- Audited project-local brand guidance in `docs/50_content-style-and-voice-guide.md`.
- Audited brand-defining pages in `src/app/about/page.tsx`, `src/app/methodology/page.tsx`, and `src/app/editorial-policy/page.tsx`.
- Reviewed shared page templates and CTA components in `src/components`.
- Reviewed route inventory across `src/app` and the published content corpus under `content/`.
- Cross-checked against the existing site-wide audit in `reports/content-quality-audit.json`.

## Inferred Brand Standard

This section is inferred from the repo's own guidance and trust pages, not from a live stakeholder interview.

- Brand posture: professional, approachable, numbers-first, transparent, practical.
- Audience promise: help creators make better business decisions with understandable numbers.
- Voice boundary: confident but not salesy, educational but not bloated, encouraging but not hype-driven.
- Trust rule: directional estimates, explicit limitations, no guaranteed outcomes, no manipulative urgency.
- Vocabulary preference: creator-first language over generic influencer language unless the topic is specifically influencer marketing.
- CTA style: subtle, utility-led, and tied to next actions rather than exaggerated earnings claims.

## Corpus Snapshot

- `180` route files under `src/app`.
- `278` markdown/MDX content files under `content`.
- Existing quality audit reports `408` published pages, with `382` flagged as warnings in `reports/content-quality-audit.json`.
- `32` app route files use repeated machine-like metadata patterns such as "Platform Details" or "creator earnings context".
- `57` guide files contain suspicious formatting artifacts that break editorial trust before voice quality can even be assessed.
- `38` files use `influencer` directly in metadata, frontmatter keywords, or route-level keyword arrays.

## Findings

### 1. High severity: a large guide subset is structurally broken, which destroys brand trust

The most serious issue is not tone drift. It is that a meaningful portion of the guide corpus reads like broken export output or partially rendered generator artifacts.

- `content/guides/tiktok-shop-affiliate.mdx` contains orphaned numeric blocks, empty spacing runs, and loose label fragments instead of polished prose.
- `content/guides/how-to-get-brand-deals-complete.mdx` includes malformed table output and raw `)}` artifacts.
- Similar formatting signals appear across dozens of guide files, including image-prefix fragments such as `TikTok creators: ![...]`.

This directly conflicts with the brand's trust promise. A numbers-first editorial product cannot look mechanically assembled.

### 2. High severity: shared article CTAs contradict the site's own trust language

The site repeatedly states that outputs are directional estimates, not guarantees. A shared article CTA overrides that positioning by promising precision.

- `src/components/articles/ArticleLayout.tsx` uses "Calculate your exact earnings" and "Ready to calculate your TikTok earnings?" for article-level CTA blocks.
- `src/app/data/page.tsx` explicitly states that the data cannot "Predict your exact earnings".

This is a clear message conflict inside the same product. The trust pages are cautious; the shared CTA layer is not.

### 3. Medium severity: metadata across trust and hub pages sounds machine-generated

Many route-level metadata entries do not sound like CalculateCreator. They sound templated, SEO-stuffed, or partially generated.

- Repeated patterns include "CalculateCreator Platform Details", "creator earnings context", and "clear next-step recommendations".
- The affected pages include core trust pages such as `about`, `editorial-policy`, `advertising-disclosure`, `privacy`, `terms`, and multiple guide hubs.

These are high-visibility SERP surfaces. Even when the on-page body copy is solid, the search snippet voice is generic and weak.

### 4. Medium severity: several pages drift into hype or overconfident persuasion

The repo's own style guide says to avoid hype, vague claims, clickbait, and certainty language. That boundary is crossed in a subset of the corpus.

- `content/guides/how-to-get-brand-deals-complete.mdx` uses aggressive promise framing, dense persuasion, and oversized earning claims.
- `content/guides/how-to-make-first-1000-dollars.mdx` uses anti-guru rhetoric, "exact" framing, and strong financial promise language in a way that feels closer to conversion copy than analytical guidance.
- `src/components/calculators/campaign-roi/CalculatorWidget.tsx` uses "Outstanding ROI!" and "scale up!" which is stronger and more promotional than the documented brand voice.
- `src/app/blog/page.tsx` says the blog helps users understand "exactly how much you earn" and also shifts from creator-first language to "established influencer".

These pages are not full-on spammy, but they overstate certainty and push harder than the brand guidance allows.

### 5. Medium severity: creator-first vocabulary is not consistently enforced

The style guide prefers `creator` over `influencer` unless the page is explicitly about influencer marketing. That rule is not being enforced consistently.

- `38` files use `influencer` in titles, meta descriptions, frontmatter keywords, or route keywords.
- Some of these are justified, such as pages explicitly about influencer ROI or influencer contract language.
- Others are loose keyword drift that weakens brand consistency, especially on calculator and niche pages that otherwise position the product around creators.

This is less serious than the structural corruption and metadata issues, but it adds up site-wide.

## What Is Working

- The body copy in `src/app/about/page.tsx`, `src/app/methodology/page.tsx`, and `src/app/editorial-policy/page.tsx` is the clearest expression of the intended brand.
- Home page support copy in `src/lib/content/site-data.ts` is generally aligned with the desired voice: calm, clear, practical, and transparent.
- Several blog/data MDX files are materially stronger than the broken guide subset. `content/blog/q1-2026-creator-earnings-report.mdx` is a good example of the intended tone: specific, analytical, and useful without sounding inflated.

## Priority Fix Order

1. Triage the structurally broken guide files and either repair or temporarily remove them from publication.
2. Replace shared CTA language in article templates so all estimate language matches the methodology pages.
3. Rewrite route metadata for the 32 affected app pages with brand-native, human-readable titles and descriptions.
4. Standardize the vocabulary policy around `creator` vs `influencer` and enforce it in keywords, metadata, and template copy.
5. Tone down high-pressure result states and promotional microcopy in calculator widgets and high-conversion guides.

## Recommended Next Move

Build one repeatable voice QA pass with these checks:

- Ban certainty phrases around earnings unless they are explicitly qualified.
- Flag metadata using known synthetic patterns.
- Flag malformed MDX artifacts before publish.
- Flag `influencer` usage unless the page intent actually requires it.
- Flag CTA text that implies guaranteed outcomes or urgency not supported by the trust pages.
