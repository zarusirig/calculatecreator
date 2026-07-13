# AI-Generated Page Images — Design

**Date:** 2026-07-13 · **Status:** Approved (sample image reviewed by Suraj)

## Goal

Replace the ~30 shared generic category images with realistic, per-page hero images on
high-value pages so pages look editorially produced (image quality is a page-quality
signal for Google, and per-page OG images improve social/SERP presentation).

## Scope — priority tiers

| Tier | Pages | Count | Treatment |
|---|---|---|---|
| 1 | Calculator pages (`src/app/calculators/**`) | 64 | Unique hero |
| 1 | News articles (`src/app/news/*`) | 19 | Unique hero |
| 1 | Blog posts (`content/blog/*.mdx`) | 41 | Unique hero |
| 1 | Top guides by `priorityScore` (`content/guides/**.mdx`) | 25 | Unique hero |
| 2 | All remaining pages | ~350 | Keep existing shared category images (refresh later if desired) |

Total: ~149 unique images. Model: OpenAI `gpt-image-1`, 1536×1024, quality `medium`
(≈ $0.06–0.07/image, ≈ $10–12 total). Key in `.env.local` (gitignored) as `OPENAI_API_KEY`.

## Style contract (baked into every prompt)

- Photorealistic editorial photography; commercial stock quality; 35mm look.
- **No people, no faces, no hands.**
- **No readable text anywhere** — screens show only blurred charts / abstract UI shapes
  (verified failure mode: model rendered "Earrings Calculator" on a laptop screen).
- Neutral bright palette with subtle cyan + pink accent lighting (TikTok brand echo).
- Scene varies by topic (props/settings rotated to avoid a same-y set): creator desk,
  ring-light studio corner, phone-on-tripod, coins/cash for money topics, analytics
  screens for metrics topics, shipping/parcel props for Shop topics, etc.

## Architecture

```
scripts/build-image-manifest.mjs   →  scripts/image-manifest.json
scripts/generate-page-images.mjs   →  public/featured/<slug>.png
scripts/optimize-images.js (build) →  <slug>-{640,1024,1600,1920}.{webp,avif}
template wiring                    →  hero <picture> + og:image + ImageObject schema
```

1. **Manifest builder** scans the four tier-1 sources, derives for each page:
   `slug`, `title`, `outFile` (descriptive kebab-case filename), `prompt`
   (style contract + topic scene), `alt` (descriptive, keyword-bearing, honest).
   Output is a reviewable JSON checked into the repo.
2. **Generator** reads the manifest, **skips entries whose PNG already exists**
   (idempotent/resumable), concurrency 3, retries with backoff, `--limit N` and
   `--only <slug>` flags, prints running cost.
3. **Optimizer**: add `public/featured` to `IMAGE_DIRS` so the existing build step
   produces responsive variants; it already skips processed images.
4. **Wiring**
   - `src/lib/content/article-page.tsx`: render hero `<picture>` (eager, explicit
     width/height to avoid CLS) when frontmatter `featuredImage` is set; use it for
     `og:image`/Twitter instead of the sitewide default; add `ImageObject` to the
     Article schema. Blog/guide MDX frontmatter gets `featuredImage` + `imageAlt`
     added by script.
   - News article pages: replace shared `news-*.webp` srcSets with per-article sets.
   - Calculator pages: add hero image via their shared layout/component; per-page
     `og:image`.

## Rollout

1. 10-image sample across tiers → user reviews contact sheet.
2. Full batch (~149).
3. Wire templates, rebuild, visual spot-check, deploy (deploy currently blocked on
   Firebase account access — separate thread).

## Non-goals (YAGNI)

- No inline/body images (hero only, v1).
- No regeneration of tier-2 shared category images in v1.
- No image sitemap changes in v1 (schema ImageObject covers indexing hints).
