# Frontend Design & UI/UX Consistency Audit
**Project:** CalculateCreator (Next.js 14 · Tailwind 3 · TypeScript · Firebase Hosting)  
**Date:** 2026-07-09  
**Method:** 9 parallel dimension reviewers + 1 synthesis agent, each grounded in `file:line` evidence (10 agents, 222 tool calls).  
**Overall design-consistency score:** **47 / 100**

> CalculateCreator has genuine design-system foundations — a well-adopted 13-step type scale (4,557 token uses), one consistent nav/footer shell across all 135 pages, centralized lucide iconography, and a mobile-first responsive baseline (44px touch targets, overflow-x-auto tables). But the system is fractured underneath by a single root cause: the "design system" is largely aspirational, not the code that actually renders. The worst symptom is a split-brain color source-of-truth — Tailwind `primary` is purple `#6D28D9` (460 `primary-600` uses) while globals `--primary` is coral `#ff6b57`, so `<Button variant="primary">` renders coral while `<Badge tone="active">` and prose links render purple on the same screen. Layered on top is pervasive dead/duplicate code (a 543-line parallel Header/Footer shell, an entire 11-component `blocks/` layer, HeroBlock, ToolPageTemplate, IntroSection/EducationalContent, plus Input-vs-InputField and Breadcrumbs-vs-Breadcrumb forks) — all with zero importers — making the documented architecture misleading. Accessibility has Level A/B holes (no skip-link, zero live regions for calculator results, InputField/SelectField omit aria-invalid/describedby across 66 usages, reduced-motion entirely unhandled). Calculator UX drifts (11/41 widgets bypass ResultsDisplay, zero use format.ts, a fake 500ms delay). Verified overall score: 47/100 — the site works and looks coherent today, but it is not re-themable, not consistently operable, and the dead-code surface is an active drift hazard.

---

## Design-System Verdict

The design system is a strong skeleton that never finished wiring up: token infrastructure, a type scale, a single nav/footer shell, centralized icons, and shared section primitives all exist and partially work, but the layer that would make them a real system — one color source-of-truth, a living primitive library with no dead/duplicate code, centralized prose config, and a shared calculator-result contract — is either split-brain (purple-vs-coral primary across 206 files), forked (Input/InputField, Breadcrumbs/Breadcrumb), or entirely dead (Header-updated/Footer-updated, all of blocks/, HeroBlock, ToolPageTemplate, IntroSection/EducationalContent). The result is a site that looks coherent on the surface but is not re-themable, not consistently operable (Level A a11y gaps), and carries an active drift hazard in every unused '-updated'/block/template file. The recommended next step is a two-week consolidation sprint: (1) P0 — unify the color tokens onto the coral palette and sweep the surviving purple classes, run the accessibility Level A pass, and delete all confirmed-dead code; (2) P1 — converge the calculator result/format layer, centralize prose config, and standardize the semantic tone vocabulary. That sequence converts the aspirational architecture into the actual rendered code and lifts the score from ~47 toward a defensible 70+.

---

## Dimension Scorecard

| # | Dimension | Score | Findings | Headline note |
|---|-----------|:----:|:------:|---------------|
| 1 | Design Tokens & Theme System | **4/10** `████░░░░░░` | 6 (C1 H2 M2 L1) | Verified split-brain: tailwind primary=#6D28D9 purple (460 primary-600 uses) vs globals --primary=#ff6b57 coral; type scale strong but color/shadow/keyframe/radius each have two divergent sources. |
| 2 | UI Primitives Library (src/components/ui/*) | **5/10** `█████░░░░░` | 10 (C1 H3 M3 L3) | Good token foundation + variant discipline; undermined by 4 dead primitives, Input/InputField (1-vs-47) and Breadcrumbs/Breadcrumb (2-vs-63) forks, naive cn() (verified, no tailwind-merge), three mismatched tone vocabularies. |
| 3 | Layout & Navigation Shell | **6/10** `██████░░░░` | 7 (H1 M4 L2) | Verified: single canonical Header/Footer across 135 pages, consistent 1280px width, good Breadcrumb schema hygiene; dragged by a 543-line dead parallel shell, underused Container (89 raw vs 20), duplicate nav items. |
| 4 | Calculator Widget System | **5/10** `█████░░░░░` | 8 (C2 H2 M2 L2) | Verified: clean calc/UI separation, uniform analytics, shared primitives; but 11/41 widgets bypass ResultsDisplay, 0 use format.ts, fake 500ms setTimeout in 42 files, dead IntroSection/EducationalContent/RegionSelector, sticky split 37/4. |
| 5 | Page Composition & Templates | **4/10** `████░░░░░░` | 9 (C2 H3 M3 L1) | Verified: all 11 blocks/* dead (0 imports), ToolPageTemplate unused (0 of 64 pages), 6 divergent hero treatments, 3 breadcrumb approaches (23 hand-rolled), /blog and /guides bypass HubListingPage. |
| 6 | Typography & Content/Prose Rendering | **4/10** `████░░░░░░` | 10 (C1 H3 M4 L2) | Verified: type scale exists but typography plugin has zero config; article serif headings vs calculator sans headings; guide/blog bare prose; homepage h1 bypasses tokens; two dead TableOfContents. |
| 7 | Color Usage & Visual Style | **4/10** `████░░░░░░` | 5 (C1 H2 M1 L1) | Verified: two contradictory primary definitions confirmed in config+globals; dead HeroBlock ships a third teal palette + undefined CSS classes; 34 files spray 14 untokenized gradient hue families. |
| 8 | Responsive Design & Mobile | **7/10** `███████░░░` | 7 (H1 M3 L3) | Verified: strong mobile-first baseline (44px hamburger, overflow-x-auto tables, overflow-hidden on rotated cards); weak spots are ~28px milestone chips, dead xs/3xl breakpoints, text-5xl mobile hero h1. |
| 9 | Accessibility & Interaction States | **4/10** `████░░░░░░` | 9 (C2 H3 M3 L1) | Verified: 0 aria-live/role=status, 0 aria-expanded, 0 prefers-reduced-motion, no skip-link; InputField/SelectField (66 usages) lack aria-invalid/describedby; text-neutral-400 in ~22 .tsx files (reviewer's 78 likely included neutral-300/.ts). |

---

## 🔴 Critical Issues (cross-cutting)

### 1. Split-brain color source-of-truth: 'primary' resolves to purple or coral depending on the primitive

**Impact:** The single semantic token 'primary' renders two different brand colors on the same page: <Button variant="primary"> is coral (via .btn-primary -> var(--primary)=#ff6b57) while <Badge tone="active"> and article prose links are purple (via bg-primary-100/text-primary-700=#6D28D9). The brand is visually inconsistent, the site cannot be re-themed from one place, and the migration (purple->coral) is half-finished with ~1020 surviving purple primary-* usages vs the coral chrome the live pages actually ship.

**Fix:** Pick one palette as the single source of truth. Recommended: align tailwind theme.extend.colors primary scale to the coral editorial system already in globals.css (--primary #ff6b57 with a matching 50-900 ramp), then sweep-replace the surviving purple primary-* classes across the ~206 files. Point both the component classes (.btn-primary) and the utility classes (bg-primary-*) at the same CSS variables. Delete the unused creator.*/tiktok.* palette literals and the dead purple hex from the config.

**Evidence:**
- `tailwind.config.js:10-11`
- `src/styles/globals.css:23`
- `src/styles/globals.css:121-125`
- `src/components/ui/Button.tsx:22`
- `src/components/ui/Badge.tsx:12`
- `src/components/articles/ArticleLayout.tsx:315`
- `src/components/blocks/HeroBlock.tsx:105`
- `src/components/blocks/HeroBlock.tsx:114`
- `src/components/blocks/HeroBlock.tsx:184`
- `src/components/layout/Header.tsx:55`
- `src/components/layout/Footer.tsx:141`

**Cross-referenced by:** Design Tokens & Theme System, UI Primitives Library, Typography & Content/Prose Rendering, Color Usage & Visual Style

### 2. The 'design system' is largely aspirational: massive dead/duplicate code with zero importers across 7 layers

**Impact:** A complete second nav/footer shell (543 lines), an entire 11-component blocks/ layer, HeroBlock, ToolPageTemplate, IntroSection/EducationalContent, Section, two TableOfContents, RegionSelector, and BlogPostTemplate are all unused — and three primitives are forked (Input/InputField 1-vs-47, OptimizedImage/V2 1-vs-1, Breadcrumbs/Breadcrumb 2-vs-63). Contributors cannot tell which pattern is canonical, the documented architecture is false, and the '-updated' suffix on the dead shell invites a future silent swap of the entire site brand.

**Fix:** Delete confirmed-dead code first: Header-updated.tsx, Footer-updated.tsx, all of src/components/blocks/, HeroBlock.tsx, src/components/tools/ToolPageTemplate.tsx, IntroSection.tsx, EducationalContent.tsx, shared/index.ts, both TableOfContents, RegionSelector, BlogPostTemplate, Section.tsx. Then consolidate the forks: designate InputField, OptimizedImageV2, and layout/Breadcrumb canonical; migrate their few stray consumers; delete the duplicates. Add a CI import-count check so a primitive cannot ship with 0 importers.

**Evidence:**
- `src/components/layout/Header-updated.tsx`
- `src/components/layout/Footer-updated.tsx`
- `src/components/blocks/HeroBlock.tsx`
- `src/components/blocks/CTAStripBlock.tsx`
- `src/components/tools/ToolPageTemplate.tsx:20-63`
- `src/components/calculators/shared/IntroSection.tsx`
- `src/components/calculators/shared/EducationalContent.tsx`
- `src/components/calculators/shared/index.ts:1-5`
- `src/components/ui/TableOfContents.tsx`
- `src/components/ui/GuideTableOfContents.tsx`
- `src/components/ui/ArticleFeaturedImage.tsx`
- `src/components/ui/RegionSelector.tsx`
- `src/components/ui/Input.tsx`
- `src/components/ui/InputField.tsx`
- `src/components/ui/OptimizedImage.tsx`
- `src/components/ui/OptimizedImageV2.tsx`
- `src/components/ui/Breadcrumbs.tsx`
- `src/components/layout/Breadcrumb.tsx`
- `src/components/layout/Section.tsx`
- `src/components/blog/BlogPostTemplate.tsx`

**Cross-referenced by:** Layout & Navigation Shell, Page Composition & Templates, UI Primitives Library, Calculator Widget System, Responsive Design & Mobile, Typography & Content/Prose Rendering, Color Usage & Visual Style

### 3. Accessibility Level A/B failures make the calculator partially inoperable for assistive-tech users

**Impact:** There is no skip-to-content link (WCAG 2.4.1), zero live regions anywhere so calculator results are never announced to screen readers, and the canonical field components used 66 times (InputField x47, SelectField x19) omit aria-invalid/aria-describedby while the a11y-correct Input they could copy from is dead code. prefers-reduced-motion is unhandled across 230 transitions/18 animations, and menu/dropdown toggles expose no aria-expanded (0 occurrences). This invalidates otherwise-good a11y foundations.

**Fix:** P0 a11y pass: add a skip-to-content link as the first focusable element in layout.tsx + id="main" on the content wrapper; wrap ResultsDisplay output in role="status" aria-live="polite" aria-atomic and set aria-busy on the calculate button; port aria-invalid+aria-describedby (with ${id}-helper/${id}-error ids) from Input.tsx into InputField.tsx and SelectField.tsx; add a global @media (prefers-reduced-motion: reduce) block neutralizing animation/transition; add aria-expanded/aria-controls to every menu/dropdown toggle.

**Evidence:**
- `src/app/layout.tsx`
- `src/components/calculator/ResultsDisplay.tsx:36`
- `src/components/calculator/ResultsDisplay.tsx:76-79`
- `src/components/ui/InputField.tsx:97-135`
- `src/components/ui/SelectField.tsx:40-75`
- `src/components/ui/InputField.tsx:60-87`
- `src/styles/globals.css:117`
- `src/styles/globals.css:127-130`
- `src/styles/globals.css:191-195`
- `src/components/layout/Header.tsx:104-112`
- `src/components/consent/CookieConsent.tsx:35-60`

**Cross-referenced by:** Accessibility & Interaction States

### 4. Calculator result rendering, formatting, and region handling all fork per-widget with no shared layer

**Impact:** 30 of 41 widgets use ResultsDisplay; 11 hand-roll bespoke gradient hero cards (verified: conversion-rate, cpm-cpv, posting-time, diamond-converter, ad-spend each import ResultsDisplay 0 times), producing visibly different result UIs between calculators a user toggles. The centralized format.ts helpers are imported by 0 widgets (22 call .toLocaleString() directly, 35 interpolate raw ${} ). A fake 500ms setTimeout (verified in 42 files) adds artificial latency to a synchronous calc, and formatCurrency hardcodes USD with the dead RegionSelector as the only region model.

**Fix:** Migrate the 11 non-conforming widgets to <ResultsDisplay> (extend it with 'list' and 'rating' subtypes rather than re-deriving heroes). Route all number/currency/percentage through format.ts and add a CI grep guard for .toLocaleString() and raw ${}% inside src/components/calculators. Remove the synthetic setTimeout and compute inline; add a shared loading skeleton + empty-state prompt. Decide on region/currency: wire RegionSelector into earnings widgets + parameterize formatCurrency, or delete the dead token and document USD-only.

**Evidence:**
- `src/components/calculators/conversion-rate/CalculatorWidget.tsx:116-124`
- `src/components/calculators/cpm-cpv/CalculatorWidget.tsx:98-123`
- `src/components/calculators/posting-time/CalculatorWidget.tsx:135-150`
- `src/components/calculators/diamond-converter/CalculatorWidget.tsx:63`
- `src/components/calculators/ad-spend/CalculatorWidget.tsx`
- `src/lib/utils/format.ts:9-28`
- `src/components/calculators/template/CalculatorWidget.template.tsx:101-119`
- `src/components/calculators/coins/CalculatorWidget.tsx:50`
- `src/components/calculators/engagement-rate/CalculatorWidget.tsx:60`
- `src/components/ui/RegionSelector.tsx`

**Cross-referenced by:** Calculator Widget System, UI Primitives Library, Design Tokens & Theme System

### 5. No centralized prose/typography config: article, calculator, guide, and blog surfaces render type differently

**Impact:** The @tailwindcss/typography plugin is enabled but has zero config, so every surface re-implements prose styling. Article MDX uses 16 prose-* modifiers (serif headings, purple links) while guides/blog use bare `prose prose-lg` (links fall back to default and are further stripped by the global a{color:inherit} reset, headings render sans not serif). An h2 in an article and an h2 in a calculator card differ in family, weight, and size, and the homepage hero h1 bypasses the token scale entirely.

**Fix:** Add a theme.extend.typography block (DEFAULT and/or a named prose-ttc modifier) defining cssText colors, heading fontFamily/weight, link color/underline, and lineHeight once. Migrate ArticleLayout's inline modifiers and the guide/blog bare wrappers onto that single class. Pick one heading system for all long-form content (apply font-display+font-bold to CalculatorContent to match articles, or drop it from ArticleLayout) and encode it in the centralized config. Replace HeroBlock.tsx:112 raw text-5xl with the text-display-* token scale.

**Evidence:**
- `tailwind.config.js:252-254`
- `src/components/articles/ArticleLayout.tsx:310-319`
- `src/app/guides/tiktok-growth-hub/page.tsx:138`
- `src/app/guides/tiktok-ads-hub/page.tsx:138`
- `src/app/blog/page.tsx:279`
- `src/components/calculator/CalculatorContent.tsx:32`
- `src/components/blocks/HeroBlock.tsx:112`
- `src/styles/globals.css:63-66`

**Cross-referenced by:** Typography & Content/Prose Rendering, Page Composition & Templates, Color Usage & Visual Style

---

## Remediation Roadmap (P0 → P3)

| Pri | Effort | Action | Expected impact |
|:---:|:---:|--------|-----------------|
| **P0** | L | Unify the color system: align tailwind primary scale to the coral editorial palette in globals.css, point component + utility classes at the same CSS vars, sweep the ~206 purple-primary files, and delete unused creator.*/tiktok.* literals. | Restores a single brand truth, makes Button/Badge/prose-links agree on the same page, and makes the site re-themable from one place. |
| **P0** | M | Accessibility Level A pass: skip-to-content link, aria-live on ResultsDisplay, aria-invalid/aria-describedby on InputField+SelectField, global prefers-reduced-motion block, aria-expanded/aria-controls on menu/dropdown toggles. | Makes the calculator operable for keyboard and screen-reader users; clears WCAG 2.4.1/3.3.1/4.1.3/2.3.3 conformance gaps. |
| **P0** | M | Delete all confirmed-dead code: Header-updated/Footer-updated, entire blocks/ layer, HeroBlock, ToolPageTemplate, IntroSection/EducationalContent/shared index, both TableOfContents, ArticleFeaturedImage, RegionSelector, Section, BlogPostTemplate; consolidate Input/InputField, OptimizedImage/V2, Breadcrumbs/Breadcrumb forks to one canonical each. | Removes the #1 drift hazard and the misleading '-updated' shell, clarifies which patterns are canonical, shrinks the library surface. |
| **P1** | M | Standardize the UI primitive contract: single SemanticTone union ('primary'|'success'|'warning'|'error'|'info'|'neutral') shared by Badge/Alert/Toast/ProgressBar; make Badge emit the existing .badge-* classes wired to success/warning/error tokens; add a ui/index.ts barrel export. | One semantic-color vocabulary and one token path across feedback primitives; discoverability and safer refactors. |
| **P1** | M | Converge the calculator widget layer: migrate the 11 non-conforming widgets to ResultsDisplay (extend with list/rating subtypes), route all formatting through format.ts with a CI grep guard, drop the fake 500ms setTimeout, add a shared loading skeleton + empty-state. | Uniform result UI and number formatting across all 41 calculators; honest, consistent loading/empty states. |
| **P1** | M | Centralize prose/typography: add theme.extend.typography config, apply one prose class across article/guide/blog, standardize heading family+size+weight, and fix the homepage h1 to use the display token scale. | Consistent typography rhythm and link styling across every content surface; token changes propagate everywhere. |
| **P2** | S | Replace cn() with clsx + tailwind-merge (twMerge(clsx(...))) so caller className overrides resolve deterministically. | Predictable override behavior across the 18 files using cn; existing call sites need no changes. |
| **P2** | M | Define 2-3 sanctioned gradient tokens (reuse .gradient-primary/.gradient-secondary) + hero-bg tokens, migrate the 34 pastel-gradient files, replace 34 hardcoded hex literals with tokens, and add a CI grep guard banning raw hex outside token-definition files. | Removes decorative rainbow clutter; single hero/section background convention; brand-color changes become a token edit. |
| **P2** | L | Collapse structural duplication: one elevation scale (point --shadow-* at tailwind boxShadow or vice-versa), one radius ramp (extend borderRadius with 'card'/'studio'), migrate 23 hand-rolled nav breadcrumbs onto layout/Breadcrumb, and port /blog + /guides onto HubListingPage. | One depth language, one radius ramp, one breadcrumb with schema everywhere, one listing-page composition for all hubs. |
| **P2** | M | Introduce a shared Hero/Header primitive (banner/centered-text/editorial variants) and a shared ListCard; standardize the calculator widget wrapper (sticky Card) and the breakpoint convention (adopt base->sm->lg or remove the dead xs/3xl screens). | Replaces 6 one-off hero treatments and inconsistent card grids with shared primitives; consistent calculator pin-on-scroll behavior. |
| **P3** | L | Migrate the 920 raw text-size utilities to nearest semantic tokens (label-sm/body-sm, body-lg/heading-sm) so line-height/weight metadata is centrally controlled. | Typography metrics stop drifting; long-tail cleanup, low individual payoff. |
| **P3** | S | Polish: add an icon-size scale (route lucide imports through Icon.tsx), standardize a single disabled-opacity token, unify body line-height to one variable, and decide on Container.tsx (delete it, since 89 files use raw container-custom vs 20). | Removes small interaction-state and rhythm inconsistencies; trims one more abstraction fork. |

---

## ⚡ Quick Wins (low effort, high impact)

- Add a skip-to-content link as the first focusable element in src/app/layout.tsx + id="main" on the content wrapper (WCAG 2.4.1).
- Add a global @media (prefers-reduced-motion: reduce) block to src/styles/globals.css neutralizing animation/transition durations.
- Wrap ResultsDisplay output in role="status" aria-live="polite" aria-atomic="true" so calculator results are announced to screen readers.
- Delete the dead parallel shell (Header-updated.tsx, Footer-updated.tsx) and src/components/blocks/HeroBlock.tsx + remove dangling hero-creator-glow/creator-card/cta-strip class references.
- Collapse the duplicate Header nav items that both link to /data/ (Benchmarks + Data) into one entry and remove the redundant 'Comparisons' Footer link.
- Delete src/components/ui/Breadcrumbs.tsx and migrate its 2 consumers (ToolPageTemplate, ToolsDirectoryPage) to layout/Breadcrumb so all breadcrumbs emit schema.org markup.
- Remove the placeholder 'Moon Phase Calculator' / 'Fun & Niche Tools' links from ToolsDirectoryPage's Related Resources strip.
- Add role="dialog" aria-label="Cookie and ad consent" (and aria-live="polite") to the CookieConsent banner container.
- Normalize all 'TikTok Creator Calculator' strings in layout.tsx metadata (alt text, OG/Twitter image) to the visible 'TT Calculator' brand.
- Raise .btn-sm min-height from 42px to 44px and bump milestone-tracker chip buttons from py-1 to py-2.5 / min-h-[44px] to meet WCAG 2.5.5.

---

## Per-Dimension Findings (with file:line evidence)

### Design Tokens & Theme System — Score 4/10

A real token infrastructure exists and the type scale is genuinely well-adopted (4,557 token uses vs 920 raw sizes), but the color system — the heart of any theme — is split into three contradictory truths that never reconcile. Tailwind's `theme.extend.colors` defines a purple/violet brand (primary=#6D28D9) consumed by 206 files, while globals.css `:root` defines a completely different coral/mint/cream editorial palette (--primary=#ff6b57) consumed only via the component layer (.btn/.card). The two sources assign different hex values to the SAME semantic names (primary, secondary, info), so `bg-primary-500` renders purple while `<Button variant="primary">` renders coral. A third, unused `creator.*` dark-navy/teal palette is defined in config but consumed only as hardcoded hex. Keyframes and box-shadows are also duplicated and divergent between the two files. Dark mode is entirely absent despite dark-palette tokens existing.

**Strengths:**
- Type scale is comprehensive and the de-facto source of truth: a 13-step display/heading/body/label scale (tailwind.config.js:148-163) is used 4,557 times across components vs only 920 raw text-xs/sm/lg uses — the strongest part of the system.
- Fonts are centralized cleanly: tailwind fontFamily references --font-display/--font-body/--font-mono (tailwind.config.js:142-147) which are defined on :root (globals.css:9-11) and imported once (globals.css:1) — no font drift.
- Spacing discipline is strong: only 3 arbitrary rounded-[Npx] values and effectively 0 arbitrary p-/w-/h-/gap-[Npx] or inline-style px in the component tree; z-index stays inside a tight z-10..z-50 band (only 2 arbitrary z-[60]/z-[70]).
- Semantic state colors (success/warning/error/info) are fully tokenized with light/DEFAULT/dark triples (tailwind.config.js:61-120) and used consistently (155 text-success, 68 bg-warning, 51 bg-error, 32 text-info).
- No arbitrary font-weight escapes ([NNN] or style fontWeight) — weight is always consumed via the type-scale token definitions or standard font-* utilities.

#### 🔴 CRITICAL — Color source-of-truth is split-brain: two contradictory brand palettes on the same semantic tokens

Tailwind's theme.extend.colors defines primary=#6D28D9 / 500=#8B5CF6 (purple-violet) and secondary=#475569 (slate), consumed by 206 files (639 text-primary, 138 bg-primary, 100 text-secondary, 164 border-primary instances). But globals.css :root redefines --primary=#ff6b57 (coral) and --secondary=#6dd3b4 (mint). The Button primitive maps variant="primary" -> the .btn-primary class, which uses var(--primary)=coral, while any component writing bg-primary-500 gets purple. So 'primary' renders two different colors depending on whether you use the component class or the utility — the semantic token has no single truth. This makes the brand visually inconsistent across the app and impossible to re-theme from one place.

- `tailwind.config.js:10-22 (primary DEFAULT '#6D28D9', 500 '#8B5CF6' — purple)`
- `tailwind.config.js:23-24 (secondary DEFAULT '#475569' slate)`
- `src/styles/globals.css:23 (--primary: #ff6b57 coral) and :26 (--secondary: #6dd3b4 mint)`
- `src/styles/globals.css:121-125 (.btn-primary background uses var(--primary) coral)`
- `src/components/ui/Button.tsx:22 (primary: 'btn-primary')`
- `206 files use (bg|text|border)-primary/secondary/accent tokens; only 3 files use var(--primary/secondary/...)`

**→ Fix:** Pick one brand palette as the single source of truth. Recommended: make Tailwind theme.extend.colors reference the CSS variables (e.g. primary: { DEFAULT: 'var(--primary)', 500: 'var(--primary)', ... }) so utility classes and component classes resolve to the same coral value, then sweep the 206 files to confirm visual parity. Delete the unused purple hex literals from the config.

#### 🟠 HIGH — Third color system (creator.* dark navy + teal) is defined but never consumed via tokens

The config ships a full `creator.*` dark theme (bg #0B1120, accent #00D4AA teal) and a `glass-dark` utility, but zero files use any `creator-` token class and there is no darkMode config (0 dark: variants in the entire src tree). The intended teal accent survives only as ~12 hardcoded `#00D4AA` / `#00B894` literals in HeroBlock, so the dark theme is effectively dead config that nonetheless invites copy-paste of raw hex.

- `tailwind.config.js:121-134 (creator.bg #0B1120, creator.accent #00D4AA)`
- `src/styles/globals.css:302-306 (.glass-dark defined)`
- `src/components/blocks/HeroBlock.tsx:105,106,107,114,184,201,216 (hardcoded #00D4AA / #00B894)`
- `0 files match (bg|text|border)-creator- ; 0 'dark:' variants across src; no darkMode key in tailwind.config.js`

**→ Fix:** Either commit to dark mode (set darkMode:'class', wire creator.* into a .dark strategy, replace the HeroBlock hex with creator-accent utilities) or delete the creator.* and glass-dark tokens to remove the dead third system.

#### 🟠 HIGH — Brand colors hardcoded as raw hex in Header, Footer, and homepage blocks instead of tokens

The coral brand gradient and accent backgrounds are written as literal #rrggbb / rgba() in the layout chrome and homepage, bypassing both the Tailwind scale and the CSS variables. This means a brand-color change requires a manual grep-and-replace hunt rather than a single token edit, and the values can (and do) drift from the canonical --primary.

- `src/components/layout/Header.tsx:55 (bg-[linear-gradient(135deg,#ff6b57,#ff9f7e)])`
- `src/components/layout/Footer.tsx:141 (same hardcoded #ff6b57/#ff9f7e gradient)`
- `src/components/home/HomepageRedesign.tsx:80 (bg-[rgba(109,211,180,0.18)] text-[#216c57])`
- `src/components/home/HomepageRedesign.tsx:89 (bg-[rgba(244,185,66,0.18)] text-[#8f6400])`
- `src/app/calculators/sponsorship-roi/page.tsx:198 (#10b981, #3b82f6, #f59e0b, #ef4444 inline)`
- `34 hardcoded hex + 20 arbitrary rgba() literals across src/**/*.tsx`

**→ Fix:** Replace every hardcoded brand/semantic hex with the corresponding token (var(--primary) or the success/warning/error/info token). Add a CI grep guard that fails on raw hex outside the token definition files.

#### 🟡 MEDIUM — Keyframes and box-shadows duplicated and divergent between config and CSS

Three keyframes (fadeIn, slideUp, gradientShift) are defined in BOTH tailwind.config.js keyframes and globals.css @keyframes, with conflicting values: slideUp translates 30px in the config but 16px in globals.css, so animate-slide-up (Tailwind) and .animate-slide-up (CSS utility) animate differently. Box-shadows are similarly split: config boxShadow uses rgba(15,23,42,...) while :root --shadow-* uses rgba(23,32,51,...); 57 components use the tailwind shadow-sm/md/lg utilities while .card/.studio-* component classes use var(--shadow-*), giving two slightly different shadow casts.

- `tailwind.config.js:209-211 (slideUp 'translateY(30px)')`
- `src/styles/globals.css:474-483 (slideUp 'translateY(16px)')`
- `tailwind.config.js:180-187 (boxShadow sm/md/lg/xl/card on rgba(15,23,42,...))`
- `src/styles/globals.css:32-34 (--shadow-sm/md/lg on rgba(23,32,51,...))`
- `57 utilities: shadow-lg x26, shadow-sm x17, shadow-md x12; component classes .card/.studio-card consume var(--shadow-*) at globals.css:187,328`

**→ Fix:** Define each keyframe and shadow in exactly one place. Keep them in tailwind.config.js and have globals.css reference the generated utilities, or move all animation/shadow tokens to :root and point the Tailwind theme at var(--...). Remove the duplicate globals.css @keyframes block.

#### 🟡 MEDIUM — radius scale silently diverges between Tailwind and the component layer

tailwind.config.js overrides borderRadius (sm=8px, md=10px, lg=12px, xl=16px, 2xl=20px), but the canonical component classes hardcode arbitrary radii that skip this scale: .card=rounded-[28px], .studio-card=rounded-[30px], .studio-note=rounded-[26px], and .input=rounded-2xl. There is no shared radius token, so cards, inputs, and buttons (rounded-full) follow unrelated curves with no governing ramp.

- `tailwind.config.js:172-179 (borderRadius sm..2xl, pill)`
- `src/styles/globals.css:184 (.card rounded-[28px])`
- `src/styles/globals.css:204 (.input rounded-2xl)`
- `src/styles/globals.css:324 (.studio-card rounded-[30px]) and :332 (.studio-note rounded-[26px])`
- `src/styles/globals.css:117 (.btn rounded-full)`

**→ Fix:** Extend the radius scale to include the editorial values (e.g. 'card': '28px', 'studio': '30px') and have the component classes consume them, so the radius ramp has one source.

#### 🔵 LOW — 920 raw text-size utilities bypass the adopted type scale's line-height/weight metadata

Although the custom type scale is well-adopted (4,557 uses), 920 uses of raw text-xs/sm/base/lg/xl/2xl.. remain (notably 563 text-sm, 124 text-lg, 116 text-xs). These raw sizes do not carry the lineHeight/letterSpacing/fontWeight that the token definitions pair with the size, so typography rhythm and vertical metrics drift wherever the raw utilities are used instead of body-sm/body-md/label-sm.

- `tailwind.config.js:148-163 (13-step scale pairs size with lineHeight+fontWeight)`
- `920 raw text-(xs|sm|base|lg|xl|2xl|...) uses vs 4,557 token uses`
- `Heaviest drift: text-sm x563, text-lg x124, text-xs x116`

**→ Fix:** Audit the 920 raw-size uses and migrate them to the nearest semantic token (text-sm -> label-sm/body-sm, text-lg -> body-lg/heading-sm) so line-height and weight are centrally controlled.

---

### UI Primitives Library (src/components/ui/*) — Score 5/10

The UI primitive library has a solid token foundation (Tailwind color scales for primary/neutral/success/warning/error/info in tailwind.config.js plus ~30 semantic component classes defined via @apply in globals.css @layer components) and good variant discipline in the core primitives (Button, Card, Loading, the two table components). Zero hardcoded hex colors appear in any ui/*.tsx file, and cn() is used consistently in the core set. However, the library carries significant unresolved duplication drift (Input vs InputField at 1-vs-47 usages, OptimizedImage vs OptimizedImageV2 at 1-vs-1, ui/Breadcrumbs vs layout/Breadcrumb at 2-vs-63), four entirely dead primitives with zero usages, inconsistent semantic-color prop naming (tone/type/color with three mismatched vocabularies), and a Badge that bypasses its own token classes — leaving globals.css badge-* rules as dead CSS. The naive cn() (plain join, no tailwind-merge) further weakens override determinism.

**Strengths:**
- Strong token foundation: tailwind.config.js defines primary/neutral/success/warning/error/info color scales (lines 10,49,61,76,91,106); globals.css @layer components defines ~30 semantic classes (.btn-*, .card, .card-hover, .input, .input-shell, .label, .helper-text, .error-text, .badge, .stat-card, .guide-card, .tool-card) consumed by the primitives.
- Zero hardcoded hex colors in any src/components/ui/*.tsx file — every primitive references design tokens or semantic classes rather than raw color literals.
- Good variant/size API discipline: Button exposes variant('primary'|'secondary'|'outline'|'ghost'|'link') x size('sm'|'md'|'lg') mapping cleanly to globals.css .btn-* classes (Button.tsx:5-32); Card exposes a padding scale ('none'|'sm'|'md'|'lg') + hover flag (Card.tsx:8-23); Loading exposes size x variant (Loading.tsx:5-9).
- Consistent table primitive styling: DataTable and ComparisonTable share identical wrapper/caption/header/zebra-stripe/footnote class strings (rounded-lg border border-neutral-200 shadow-sm, bg-primary-50 header, divide-y divide-neutral-100, hover:bg-primary-50/50) despite accepting different data shapes, giving a unified table look.
- Built-in accessibility: Input wires aria-invalid + aria-describedby (Input.tsx:31-32); Alert uses role="alert" (Alert.tsx:53); DataTable emits aria-sort on sortable headers (DataTable.tsx:100-106); Breadcrumbs uses aria-label (Breadcrumbs.tsx:16).

#### 🔴 CRITICAL — Four primitives are dead code with zero usages across src/

TableOfContents, GuideTableOfContents, ArticleFeaturedImage, and RegionSelector (+ RegionSelectorCompact) are imported by nothing. TableOfContents is worse than dead: its TOC items are hardcoded to one specific page ('Top 5 Strategies', 'Check Your Current Rate' at lines 20-22), so it was never a reusable primitive at all — it is orphaned page code masquerading as a library component. Maintaining four unused components inflates the library surface, invites accidental imports of divergent patterns, and signals the 'library' is really a junk drawer.

- `src/components/ui/TableOfContents.tsx:19-22 (hardcoded tocItems)`
- `src/components/ui/GuideTableOfContents.tsx:18 (0 importers found via grep)`
- `src/components/ui/ArticleFeaturedImage.tsx:42 (0 importers found via grep)`
- `src/components/ui/RegionSelector.tsx:13 and :72 (RegionSelector + RegionSelectorCompact, 0 importers found via grep)`
- `grep across src/**/*.tsx for the four import paths returned 0 files each`

**→ Fix:** Delete TableOfContents, GuideTableOfContents, ArticleFeaturedImage, and RegionSelector (or, if RegionSelector is intended for reuse, wire it into the calculator template now). If any are intentionally kept, mark them deprecated and add a usage so the dead-code signal disappears.

#### 🟠 HIGH — Unresolved Input vs InputField duplication — Input is de facto deprecated (1 vs 47 usages)

Two incompatible input primitives coexist. Input.tsx is a thin forwardRef wrapper over a native <input> extending React.InputHTMLAttributes (uncontrolled-friendly, accepts addon). InputField.tsx is a fully controlled component (value + onChange(value)) with tooltip/icon/unit/number-cleaning logic. InputField is the clear canonical choice — used by all 47 calculator widgets including the template — yet Input.tsx still ships in the library with one stray consumer (RpmToolExperience.tsx). New authors cannot tell which to use, and the two render error/helper text differently (Input uses a plain <p className="error-text">, InputField prepends an inline SVG).

- `src/components/ui/Input.tsx:4-9,11-14 (forwardRef + React.InputHTMLAttributes API)`
- `src/components/ui/InputField.tsx:6-23 (controlled value/onChange API, 'use client')`
- `Input importers: 1 (src/components/tools/RpmToolExperience.tsx)`
- `InputField importers: 47 (all src/components/calculators/*/CalculatorWidget.tsx + src/app/calculator/*/page.tsx + template)`
- `src/components/ui/Input.tsx:42-46 vs src/components/ui/InputField.tsx:124-135 (divergent error rendering)`

**→ Fix:** Designate InputField canonical, migrate RpmToolExperience.tsx to it (or fold forwardRef support into InputField), and delete Input.tsx. If a native uncontrolled input is genuinely needed, make InputField accept an `as`/uncontrolled mode instead of maintaining a second component.

#### 🟠 HIGH — Unresolved OptimizedImage vs OptimizedImageV2 duplication (1 vs 1 usage, near-identical bodies)

Two image primitives with overlapping responsibilities and almost identical picture/AVIF/WebP fallback bodies coexist. OptimizedImage.tsx additionally supports an external-CDN loader path (useCDN/cdnUrl) that no consumer exercises; OptimizedImageV2.tsx adds a blur-thumbnail path and exports HeroImage/LogoImage variants. They are used exactly once each (OptimizedImage in Footer-updated.tsx, OptimizedImageV2 in Header-updated.tsx) and share ~80% duplicated JSX including the same error-state fallback. Neither is established as canonical, so the codebase has two parallel sources of truth for a core concern.

- `src/components/ui/OptimizedImage.tsx:32-49 (props incl. useCDN/cdnUrl at :21-22) and :125-169 (picture body)`
- `src/components/ui/OptimizedImageV2.tsx:30-46 and :100-145 (near-identical picture body)`
- `src/components/ui/OptimizedImage.tsx:53-73 and OptimizedImageV2.tsx:49-70 (byte-for-byte identical error fallback SVG)`
- `OptimizedImage importers: 1 (src/components/layout/Footer-updated.tsx); OptimizedImageV2 importers: 1 (src/components/layout/Header-updated.tsx)`

**→ Fix:** Pick OptimizedImageV2 as canonical (it is the enhanced successor per its own docstring at :24-29), port the one CDN-loader consumer or drop the unused CDN path, delete OptimizedImage.tsx, and re-export under a single name.

#### 🟠 HIGH — Breadcrumb duplication: ui/Breadcrumbs (2 usages) vs layout/Breadcrumb (63 usages)

A parallel breadcrumb implementation lives in the ui/ folder while the canonical, far richer one lives in layout/. ui/Breadcrumbs is a 36-line presentational component. layout/Breadcrumb adds schema.org BreadcrumbList markup, GA4 navigation tracking, mobile truncation, an optional Home item, and light/dark variants — and is used 63 times vs 2. The ui/ version is a stripped duplicate that lacks the SEO/analytics features the project clearly relies on; the two diverge in props too (ui requires href optional; layout requires href mandatory and adds includeHome/maxItems/variant).

- `src/components/ui/Breadcrumbs.tsx:4-14 (item.href optional, presentational only)`
- `src/components/layout/Breadcrumb.tsx:3-18,29-35 (GA4 trackNavigation, schema.org itemScope/itemType, mobile truncation, variants)`
- `ui/Breadcrumbs importers: 2 (src/components/tools/ToolsDirectoryPage.tsx, ToolPageTemplate.tsx)`
- `layout/Breadcrumb importers: 63 files`

**→ Fix:** Migrate the two tools/ consumers to layout/Breadcrumb and delete src/components/ui/Breadcrumbs.tsx, or fold layout/Breadcrumb into ui/ as the single breadcrumb primitive and re-export from both paths.

#### 🟡 MEDIUM — Semantic-color prop is named three different ways with mismatched vocabularies

The same concept — choosing a semantic color/tone for a primitive — is exposed under three different prop names with three incompatible enums. Badge uses `tone` ('default'|'active'|'success'|'warning'|'danger'), Alert and Toast use `type` ('success'|'error'|'warning'|'info'), and ProgressBar uses `color` ('primary'|'success'|'warning'). The 'danger' vs 'error' split is especially error-prone: Badge has no 'error', Alert has no 'danger', and ProgressBar has neither 'error' nor 'danger'. There is no shared type, so consumers must memorize per-component vocabularies.

- `src/components/ui/Badge.tsx:6 tone?: 'default'|'active'|'success'|'warning'|'danger'`
- `src/components/ui/Alert.tsx:5 type?: 'success'|'error'|'warning'|'info' (and Toast at :104)`
- `src/components/ui/Loading.tsx:102 color?: 'primary'|'success'|'warning' (ProgressBar)`
- `No shared SemanticColor/Tone type exists in src/components/ui/ or src/lib/`

**→ Fix:** Standardize on a single prop name (e.g. `tone`) and a single exported `SemanticTone` union (e.g. 'primary'|'success'|'warning'|'error'|'info'|'neutral') shared across Badge/Alert/Toast/ProgressBar; map each primitive's supported subset off that one union.

#### 🟡 MEDIUM — Badge bypasses its own token system; globals.css badge-* rules are dead CSS

Badge.tsx applies the `.badge` base class but resolves tones with raw Tailwind palette utilities (bg-emerald-50, bg-amber-50, bg-red-50) rather than the semantic success/warning/error tokens that Alert.tsx correctly uses (bg-success-50/bg-error-50). Worse, globals.css defines dedicated .badge-primary/.badge-secondary/.badge-success/.badge-warning/.badge-error classes that the React component never emits — so that CSS block is entirely dead. The vocabularies also mismatch: the React component emits `active`/`danger` while the CSS defines `primary`/`secondary`/`error`, so even if someone tried to use the classes they would not line up. Additionally globals.css hardcodes hex/rgba in those badge rules (#216c57, rgba(53,151,122,0.12), #1b7e60), bypassing the success/warning tokens a second time.

- `src/components/ui/Badge.tsx:10-16 (tone map uses bg-emerald-50/bg-amber-50/bg-red-50/raw, not success/warning/error tokens)`
- `src/components/ui/Badge.tsx:19 cn('badge', toneClasses[tone], className) — only .badge base is applied, never .badge-* tone classes`
- `src/styles/globals.css:267-293 (.badge-primary/.badge-secondary/.badge-success/.badge-warning/.badge-error defined but never emitted by Badge.tsx)`
- `src/styles/globals.css:271-293 hardcoded #216c57 / rgba(53,151,122,0.12) / #1b7e60 / var(--danger) — bypassing success/warning tokens`
- `src/components/ui/Alert.tsx:21-42 (contrast: Alert DOES use bg-success-50/bg-error-50 tokens)`

**→ Fix:** Make Badge emit the existing .badge-{tone} classes (or switch those classes to @apply the success/warning/error tokens) so the React component and the CSS share one token path; align the tone vocabulary with Alert's (drop 'active'/'danger' in favor of primary/error); and replace the hardcoded hex in globals.css with var(--success)/var(--warning)/var(--error).

#### 🟡 MEDIUM — Naive cn() provides no Tailwind override resolution

The shared className merge utility is a plain `classes.filter(Boolean).join(' ')` with no tailwind-merge (package.json has neither tailwind-merge nor clsx). Primitives append the caller's className last (e.g. Card: cn('card', paddingStyles[padding], className)), so when a consumer overrides a base utility — say Card's default `p-8` with `p-4` — both classes ship to the DOM and the winner is determined by CSS source order, not by intent. Across 18 files that import cn, this makes overrides non-deterministic and undermines the 'primitive as controlled design-system contract' goal.

- `src/lib/utils/cn.ts:6-8 export function cn(...classes) { return classes.filter(Boolean).join(' '); }`
- `package.json: no tailwind-merge or clsx dependency (grep confirmed)`
- `src/components/ui/Card.tsx:28-33 cn('card', hover && 'card-hover', paddingStyles[padding], className) — className appended after p-8 with no conflict resolution`
- `18 files import cn from '@/lib/utils/cn'`

**→ Fix:** Replace the cn implementation with clsx + tailwind-merge (the standard `twMerge(clsx(...))` recipe) so later classes deterministically override earlier ones; existing call sites need no changes.

#### 🔵 LOW — Duplicated error-state markup across InputField and SelectField

The exact same inline error SVG (a 20x20 circle-with-i path 'M18 10a8 8 0 11-16 0...') and surrounding <p className="error-text flex items-center space-x-1"> wrapper is copy-pasted verbatim in InputField.tsx and SelectField.tsx. Input.tsx renders errors a third way (plain <p className="error-text"> with no icon). Three primitives, two error patterns — a maintenance and visual-consistency hazard.

- `src/components/ui/InputField.tsx:124-135 (error svg + p.error-text.flex)`
- `src/components/ui/SelectField.tsx:64-75 (identical error svg + p.error-text.flex)`
- `src/components/ui/Input.tsx:42-46 (plain p.error-text, no icon)`
- `grep 'M18 10a8 8 0 11-16 0' matched exactly InputField.tsx and SelectField.tsx`

**→ Fix:** Extract a shared <FieldError message={error} /> helper (and a shared FieldLabel) and use it in Input/InputField/SelectField so all field primitives render errors identically.

#### 🔵 LOW — 11 className constructions bypass the cn() merge utility

While the core primitives use cn(), four files build className with template-string interpolation instead (``...${className}``), which cannot accept conditional/falsy fragments the way cn() does and is inconsistent with the rest of the library. These overlap heavily with the dead/duplicate components (OptimizedImage, OptimizedImageV2, TableOfContents, GuideTableOfContents), so fixing them is cheap once those are resolved.

- `src/components/ui/OptimizedImage.tsx:55,96,163 (template literals)`
- `src/components/ui/OptimizedImageV2.tsx:52,138,189,209 (template literals)`
- `src/components/ui/TableOfContents.tsx:61,68,72 (template literals)`
- `src/components/ui/GuideTableOfContents.tsx:22 (template literal)`
- `grep 'className={`' across src/components/ui returned 11 matches`

**→ Fix:** Convert these 11 sites to cn() for a single consistent className strategy across the whole ui/ directory.

#### 🔵 LOW — No barrel export for the ui/ directory

There is no src/components/ui/index.ts barrel, so every consumer must know each primitive's exact filename and import path (e.g. '@/components/ui/InputField' vs '@/components/ui/Input'). This hurts discoverability, makes refactors/renames (such as consolidating the duplicate primitives above) touch many import sites, and lets the duplicate names (Input/InputField, OptimizedImage/V2, Breadcrumbs/Breadcrumb) all appear equally 'official' to a new author.

- `ls src/components/ui/index.* returned no matches (NO index.ts barrel)`
- `Imports observed as deep paths, e.g. '@/components/ui/InputField', '@/components/ui/OptimizedImageV2', '@/components/ui/Badge' across the 47+ consuming files`

**→ Fix:** Add src/components/ui/index.ts that re-exports only the canonical primitives (after dedup), so imports become '@/components/ui' and the dead/duplicate names can be hidden/removed in one place.

---

### Layout & Navigation Shell — Score 6/10

The live site genuinely renders ONE nav/footer shell: src/app/layout.tsx mounts Header.tsx + Footer.tsx, and all 46 nested layout.tsx files are passthroughs (no overrides), so all 135 pages share the same light "studio" theme with consistent "TT Calculator" branding and a matched max-w-7xl (1280px) content width (== the container-custom token in globals.css). That consistency is the dimension's main strength. However, severe drift is accumulating underneath: a complete DEAD parallel shell (Header-updated.tsx + Footer-updated.tsx, 543 lines, 0 imports) with conflicting brand/CTA/nav, a dead Section.tsx abstraction, an underused Container component (raw container-custom in 88 files), duplicate Breadcrumb implementations where 2 pages silently lose schema markup, and redundant/duplicate nav links in the live Header and Footer. The shell works today but the abstractions are half-applied and the dead code is a real future-drift hazard.

**Strengths:**
- Single canonical shell: src/app/layout.tsx:100 renders <Header/> and line 104 renders <Footer/>; verified all 46 nested layouts (calculators/*, calculator/{de,es,fr,it,my,pt-br}, blog, data, guides, news, etc.) are passthroughs with no Header/Footer overrides — so all 135 pages share one nav and one footer.
- Live shell is internally brand-consistent: both Header.tsx:59 ('TT Calculator') and Footer.tsx:145,178 ('TT Calculator') use the same wordmark and TT gradient badge (#ff6b57→#ff9f7e), unlike the dead dark shell which uses 'TikTok Creator Calculator' + a raster logo.
- Content width is consistent across shell and pages: Header.tsx:44 and Footer.tsx:78 use max-w-7xl, which is exactly what the container-custom token resolves to (src/styles/globals.css:108-109: mx-auto max-w-7xl px-4 sm:px-6 lg:px-8), so header, footer, and page containers all align at 1280px.
- The canonical Breadcrumb (src/components/layout/Breadcrumb.tsx:62-115) emits proper schema.org BreadcrumbList microdata with mobile truncation and light/dark variants — solid structured-data hygiene on the 63 pages that use it.
- Non-affiliation disclaimer is present in the canonical footer (Footer.tsx:182), satisfying the legal/brand requirement.

#### 🟠 HIGH — Dead parallel shell — Header-updated.tsx + Footer-updated.tsx (543 lines, 0 imports) is a major drift hazard

A complete second navigation/footer implementation exists with a totally different design language (dark bg-neutral-900 vs the live light cream theme), different brand ('TikTok Creator Calculator' + raster OptimizedImage logo vs live 'TT Calculator' + TT badge), different primary CTA ('Calculate Now' → /calculators/tiktok-creator-fund/ vs live 'Start with a number' → /calculators/tiktok-money/), and different nav structure (dropdown menus vs flat pill nav). Neither file is imported anywhere (grep confirms 0 importers), so it is dead code today — but the '-updated' suffix is actively misleading (it implies the newer/canonical version), so a future developer could wire it up and silently swap the entire site shell and brand. This is the single biggest consistency risk in the dimension.

- `src/components/layout/Header-updated.tsx:91 (bg-neutral-900, dark shell) vs src/components/layout/Header.tsx:45 (bg-[rgba(255,249,241,0.82)], light shell)`
- `src/components/layout/Header-updated.tsx:102 (logo '/images/tt-calculator-logo.png', brand 'Calculate Creator Logo') vs src/components/layout/Header.tsx:55-59 (TT badge + 'TT Calculator' wordmark)`
- `src/components/layout/Footer-updated.tsx:102 (bg-neutral-900) + :118 ('TikTok Creator Calculator') vs src/components/layout/Footer.tsx:77 (light gradient) + :145 ('TT Calculator')`
- `grep 'from @/components/layout/Header-updated' → 0 results; grep 'from @/components/layout/Footer-updated' → 0 results`
- `wc -l: Header-updated.tsx=318, Footer-updated.tsx=225, total 543 lines of dead parallel shell`

**→ Fix:** Delete Header-updated.tsx and Footer-updated.tsx (or, if the dark theme is the intended future direction, explicitly delete the light pair and rename the survivors to Header.tsx/Footer.tsx). Do not leave two shells with a misleading '-updated' suffix coexisting.

#### 🟡 MEDIUM — Section.tsx is dead code (0 imports); vertical-rhythm abstraction is unused

The Section component wraps children in section-padding + Container, but nothing imports it (grep returns 0). Instead, 12 files apply the section-padding utility class raw, so vertical rhythm depends on every author remembering the class name rather than using a shared primitive. The abstraction exists but provides no actual consistency guarantee because nothing routes through it.

- `grep "from '@/components/layout/Section'" src/ → 0 imports`
- `grep -rln section-padding → 12 files including src/components/blocks/{HowItWorksBlock,CTAStripBlock,ExpertTeamBlock,GuideGridBlock,FAQBlock,DataSourcesBlock,ToolGridBlock,BenchmarksPreviewBlock,CategoryChipsBlock,TrustBlock}.tsx and src/components/home/HomepageRedesign.tsx`
- `src/components/layout/Section.tsx:18,22 (defines section-padding + Container composition that nothing uses)`

**→ Fix:** Either delete Section.tsx, or migrate the 12 raw section-padding call sites to use <Section> so vertical spacing is enforced centrally. Picking one and doing it prevents the abstraction from rotting further.

#### 🟡 MEDIUM — Container component is underused — 88 files apply container-custom raw, only 20 import Container

There is no visual bug today because both paths resolve to the same max-w-7xl token (globals.css:108-109), so page content widths are consistent. But the Container abstraction is applied inconsistently: a future change to Container (e.g. adding a default gutter or changing width) would not propagate to the 88 files that bypass it, silently splitting the layout into two populations.

- `grep -rl "from '@/components/layout/Container'" → 20 files`
- `grep -rln container-custom → 88 files (raw class, bypassing Container)`
- `src/styles/globals.css:108-109 (.container-custom { @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8; })`

**→ Fix:** Standardize on one approach site-wide: either inline container-custom everywhere and delete Container.tsx, or migrate the 88 raw usages to <Container>. Given 88 vs 20, deleting Container.tsx is the lower-effort, lower-risk option.

#### 🟡 MEDIUM — Duplicate Breadcrumb implementations — 2 pages silently lose schema.org markup

Two breadcrumb components exist with different capability levels. The layout/Breadcrumb (used in 63 files) emits schema.org BreadcrumbList microdata, truncates on mobile, and supports light/dark variants. The ui/Breadcrumbs (used in only 2 files — ToolPageTemplate and ToolsDirectoryPage) is a minimal version with NO schema markup and NO mobile truncation. The 2 tool-directory pages therefore render breadcrumbs without structured data that all other pages emit, an inconsistent SEO/UX surface.

- `src/components/layout/Breadcrumb.tsx:62-66 (itemScope itemType='https://schema.org/BreadcrumbList') — 63 importers`
- `src/components/ui/Breadcrumbs.tsx:14-35 (plain nav, no itemScope/itemType, no mobile truncation) — 2 importers: src/components/tools/ToolPageTemplate.tsx:3, src/components/tools/ToolsDirectoryPage.tsx:5`

**→ Fix:** Delete src/components/ui/Breadcrumbs.tsx and migrate ToolPageTemplate.tsx + ToolsDirectoryPage.tsx to the layout/Breadcrumb component so all breadcrumbs emit consistent schema.org markup and share truncation behavior.

#### 🟡 MEDIUM — Header nav has redundant duplicate entries — two top-level items both link to /data/

The live Header navItems array contains both 'Benchmarks' (href /data/) and 'Data' (href /data/) — two distinct top-level navigation labels pointing to the exact same URL. This wastes nav real estate, confuses users about the information architecture, and a third item 'Comparisons' further overlaps the /data/ section. The same duplication pattern appears in the dead Header-updated.tsx News dropdown (all 6 items link to /news/), suggesting a systemic copy-paste of placeholder links.

- `src/components/layout/Header.tsx:12 ({ label: 'Benchmarks', href: '/data/' }) and :14 ({ label: 'Data', href: '/data/' }) — same href twice`
- `src/components/layout/Header.tsx:16 ({ label: 'Comparisons', href: '/data/platform-comparisons/' }) — overlaps the /data/ hub`
- `src/components/layout/Header-updated.tsx:47-53 (News dropdown: 6 items all href '/news/')`

**→ Fix:** Collapse the duplicate /data/ nav items into one 'Data & Insights' entry (matching the dead shell's better label) and drop the redundant 'Comparisons' top-level link since /data/platform-comparisons/ is reachable from the data hub.

#### 🔵 LOW — Footer Resources column has duplicate links to /data/platform-comparisons/

The canonical Footer's 'Resources' column lists both 'Platform Comparisons' and 'Comparisons', and both resolve to /data/platform-comparisons/. This is a redundant link pair that adds noise to the footer without aiding navigation.

- `src/components/layout/Footer.tsx:53 ({ label: 'Platform Comparisons', href: '/data/platform-comparisons/' }) and :54 ({ label: 'Comparisons', href: '/data/platform-comparisons/' }) — identical href`
- `grep -c '/data/platform-comparisons/' src/components/layout/Footer.tsx → 2`

**→ Fix:** Remove the duplicate 'Comparisons' entry from the Resources column (Footer.tsx:54).

#### 🔵 LOW — Brand string drift between live shell and layout metadata

The visible site shell consistently brands as 'TT Calculator' (Header wordmark, Footer wordmark, copyright line, disclaimer). But the root layout's OpenGraph image alt text and one copyright-style string still say 'TikTok Creator Calculator', and the OG/Twitter image URLs point at the tiktokcalculator.net domain. This is a minor but real brand-identity inconsistency between what users see and what crawlers/social scrapers read.

- `src/app/layout.tsx:48 (alt: 'TikTok Creator Calculator - Free Earnings & Analytics Tools') vs :12,24-26,39,42,54 ('TT Calculator')`
- `src/components/layout/Header.tsx:59 and src/components/layout/Footer.tsx:145,178 (visible brand = 'TT Calculator')`
- `src/app/layout.tsx:45,57 (OG/Twitter image url = https://tiktokcalculator.net/...)`

**→ Fix:** Normalize all brand strings in layout.tsx metadata (alt text, any 'TikTok Creator Calculator' references) to 'TT Calculator' so the visible brand and crawler-facing brand match.

---

### Calculator Widget System — Score 5/10

The 41-widget system rests on a genuinely solid skeleton: every widget splits calc logic into validate*Input/calculate* under @/lib/calculators with typed Input/Result types, shares the Card/Button/InputField/SelectField UI primitives, fires trackCalculation analytics uniformly, and reuses page-level FAQSection (63 pages) and RelatedCalculators (42 pages). But two large drift layers undermine consistency. First, the shared SSR component layer the template documents as the parent page's responsibility — IntroSection and EducationalContent — is 100% dead code: 0 of 64 calculator pages import either, and 47 pages hand-roll inline <h1> heroes instead. Second, results rendering forked into two patterns: 30 of 41 widgets delegate to ResultsDisplay (format-correct via format.ts), while 11 bypass it to render bespoke gradient hero cards with hand-rolled number/percentage formatting. Centralized formatters are used by 0 widgets directly and RegionSelector is dead code, so there is no real region/currency model despite USD being hardcoded. Net: consistent inputs/primitives, inconsistent results/hero/format/region layers.

**Strengths:**
- Clean separation of calculation logic from UI: all 41 widgets import validate*Input + calculate* from @/lib/calculators/<name> and typed Input/Result interfaces from @/types/calculator (e.g. coins/CalculatorWidget.tsx:8-9, rpm:8-9, engagement-rate:9-13), so business rules are testable and DRY.
- Consistent use of the UI primitive set — Card, Button, InputField, SelectField from @/components/ui — across every one of the 41 widgets, giving uniform form chrome.
- Universal analytics: trackCalculation(...) is fired in every widget on compute (coins:41-44, rpm:40, ad-revenue:48-52, viral-potential:49).
- Good page-level section reuse for cross-linking/SEO: FAQSection in 63 pages, RelatedCalculators in 42, RelatedGuides in 7 — a real shared layer above the widgets.
- InputField props are consistent across widgets (id/label/value/onChange/placeholder/helperText/error/min/required, plus optional tooltip/step/max), and percentage fields consistently carry step={0.1} and max={100} (viral-potential:80-83, brand-deal-rate:94-97).

#### 🔴 CRITICAL — Shared SSR component layer (IntroSection, EducationalContent) is 100% dead code

The template's own architecture comment (CalculatorWidget.template.tsx:62-67) states 'The parent SSR page handles: Page layout... Educational content (intro, benchmarks, tips...)'. Yet IntroSection and EducationalContent have ZERO importers across the entire src/ tree (grep for `import.*IntroSection` / `import.*EducationalContent` excluding the definition and barrel returns 0). 47 of 64 calculator pages hand-roll inline <h1> heroes instead. The documented shared layer simply does not exist in practice, so every calculator hero/educational block is bespoke markup with no guarantee of visual or semantic parity.

- `src/components/calculators/template/CalculatorWidget.template.tsx:62-67 (documents parent SSR page as owner of educational content)`
- `src/components/calculators/shared/IntroSection.tsx:39 (definition; 0 importers)`
- `src/components/calculators/shared/EducationalContent.tsx:105 (definition; 0 importers)`
- `src/components/calculators/shared/index.ts:1-5 (barrel re-export that nothing consumes)`
- `grep: 0 of 64 files in src/app/calculators import IntroSection or EducationalContent; 47 contain inline <h1`

**→ Fix:** Either (a) adopt IntroSection/EducationalContent on calculator pages by replacing inline heroes and benchmark/tip blocks, or (b) delete shared/IntroSection.tsx, EducationalContent.tsx, and index.ts and update the template's architecture comment so the codebase stops advertising a layer that does not exist. Pick one before adding the next widget.

#### 🔴 CRITICAL — Two divergent result-display patterns coexist (ResultsDisplay vs bespoke gradient hero)

30 of 41 widgets delegate results to <ResultsDisplay> (the canonical gradient Card with type/format/subtitle props and format.ts-backed rendering). 11 widgets bypass it entirely and hand-roll their own gradient hero cards plus their own rating color logic, producing visibly different result UIs between calculators that a user steps between. This is the single largest widget-level consistency defect.

- `src/components/calculator/ResultsDisplay.tsx:36 (canonical gradient Card, format-correct)`
- `src/components/calculators/conversion-rate/CalculatorWidget.tsx:116-124 (bespoke `bg-gradient-to-br from-primary-50 to-success-50` hero, no ResultsDisplay)`
- `src/components/calculators/cpm-cpv/CalculatorWidget.tsx:98-106 (same bespoke gradient hero, plus own rating color block at :119-123)`
- `src/components/calculators/posting-time/CalculatorWidget.tsx:135-150 (bespoke `from-primary-50 to-secondary-50` 'Best Posting Times' card)`
- `11 widgets do not import @/components/calculator/ResultsDisplay: ad-spend, affiliate-commission, audience-overlap, campaign-roi, conversion-rate, cost-per-result, cpm-cpv, customer-acquisition-cost, diamond-converter, lifetime-value, posting-time, tiktok-creator-fund`

**→ Fix:** Migrate the 11 non-conforming widgets to <ResultsDisplay> with type/format/subtitle props, extending ResultsDisplay (e.g. a 'list' type for posting-time's ranked times, a 'rating' type for cpm-cpv/conversion-rate's tier badge) rather than re-deriving the gradient hero per widget. Conformance estimate: 8 of the 8 named samples (coins, rpm, engagement-rate, live-gifts, brand-deal-rate, ad-revenue, creator-tax, viral-potential) conform; 3 additional sampled (conversion-rate, cpm-cpv, posting-time) drift. Overall 30 of 41 (73%) conform.

#### 🟠 HIGH — Centralized format.ts helpers used by 0 widgets; formatting is hand-rolled per widget

format.ts exports formatCurrency/formatPercentage/formatNumber/formatRange, but NO widget imports them — only ResultsDisplay uses them internally. 22 widgets call .toLocaleString() directly and 35 interpolate raw `${results.x}` template literals, yielding inconsistent decimal precision and no i18n path. Percentage formatting is especially splintered: 10 widgets hand-roll `${x}%` or `toFixed(n)%` instead of formatPercentage.

- `src/lib/utils/format.ts:9,21,28 (formatCurrency/formatPercentage/formatNumber defined)`
- `grep: 0 files under src/components/calculators import from '@/lib/utils/format'`
- `src/components/calculators/coins/CalculatorWidget.tsx:89 (results.diamonds.toLocaleString())`
- `src/components/calculators/brand-deal-rate/CalculatorWidget.tsx:139 (`${results.minRate.toLocaleString()} - ${results.maxRate.toLocaleString()}` — manual range, ignores formatRange)`
- `src/components/calculators/cpm-cpv/CalculatorWidget.tsx:101 (`${results.cpm.toFixed(2)}`) and :113 (`${results.cpv.toFixed(4)}` — inconsistent decimal places within one widget)`
- `src/components/calculators/ad-revenue/CalculatorWidget.tsx:122,135 (`${results.annualRevenue.toLocaleString()}` manual $ prefix)`
- `src/components/calculators/live-gifts/CalculatorWidget.tsx:115 (`${results.monthlyPotential.toLocaleString()}`)`

**→ Fix:** Route all number/currency/percentage rendering through format.ts (or through ResultsDisplay, which already does). Add a lint/grep check in CI that flags `.toLocaleString()` and raw `${...}%`/`${...}` currency interpolation inside src/components/calculators.

#### 🟠 HIGH — RegionSelector is dead code; no unified region/currency model (USD hardcoded)

RegionSelector has zero consumers (only its own definition file references it), yet region/currency is conceptually core to a creator-earnings product. Each widget reinvents region ad hoc — creator-tax as a 'state tax level' select, posting-time as an audienceRegion select, brand-deal-rate as a niche select — and formatCurrency hardcodes currency:'USD', so any non-USD display would require per-widget rework and there is no single switch to localize earnings.

- `src/components/ui/RegionSelector.tsx (0 importers across src/)`
- `src/lib/utils/format.ts:12 (currency: 'USD' hardcoded in formatCurrency)`
- `src/components/calculators/creator-tax/CalculatorWidget.tsx:63-69 (ad-hoc state-tax-level select stands in for region)`
- `src/components/calculators/posting-time/CalculatorWidget.tsx:70-75 (ad-hoc audienceRegion select)`
- `src/components/calculators/brand-deal-rate/CalculatorWidget.tsx:26-28 (niche select doubles as region/market proxy)`

**→ Fix:** Decide whether region/currency is a real product dimension. If yes, wire RegionSelector into the earnings widgets and parameterize formatCurrency with a region-derived currency code. If no, delete RegionSelector to stop advertising unused capability.

#### 🟡 MEDIUM — No loading/empty/error states beyond field errors and a fake 500ms delay

Every widget gates output with `{results && (...)}` (41/41) and uses an artificial `setTimeout(..., 500)` to flip isCalculating (42 files) even though calculation is synchronous. There is no skeleton/placeholder while 'calculating', no empty-state prompting the user to enter values, and no result-level error state — only InputField-level error text. The 500ms delay is pure theater that adds latency to every interaction identically.

- `src/components/calculators/template/CalculatorWidget.template.tsx:101-119 (setTimeout 500 + simulated delay)`
- `src/components/calculators/coins/CalculatorWidget.tsx:38 (setTimeout 500), :78 (`{results && (` gate, no empty state)`
- `src/components/calculators/rpm/CalculatorWidget.tsx:37 (setTimeout 500), :80 (results gate)`
- `grep: 41 widgets use `{results && (`; 42 contain setTimeout`

**→ Fix:** Drop the synthetic setTimeout (calculation is synchronous — compute inline on click), add a prompt empty-state before first compute, and define a shared loading skeleton (Loading component already exists in ui/) so 'calculating' is honest and consistent.

#### 🟡 MEDIUM — Widget Card layout drifts between sticky and non-sticky

37 widgets wrap the form in `<Card className="lg:sticky lg:top-24 h-fit">` so the calculator pins on scroll, but 4 use a plain `<Card>` with no className and therefore scroll away. Two calculators a user toggles between (e.g. plain coins/rpm vs sticky engagement-rate/brand-deal-rate) behave differently on long pages, which reads as inconsistency.

- `src/components/calculators/engagement-rate/CalculatorWidget.tsx:60 (`<Card className="lg:sticky lg:top-24 h-fit">`)`
- `src/components/calculators/brand-deal-rate/CalculatorWidget.tsx:68 (sticky Card)`
- `src/components/calculators/coins/CalculatorWidget.tsx:50 (plain `<Card>`, no sticky)`
- `src/components/calculators/rpm/CalculatorWidget.tsx:46 (plain `<Card>`, no sticky)`
- `grep: 37 sticky vs 4 plain Card across src/components/calculators`

**→ Fix:** Standardize the wrapper: either make the sticky Card part of a shared CalculatorShell/layout component used by all 41, or drop sticky everywhere. Do not leave a 37/4 split.

#### 🔵 LOW — Template export name and handler signature do not match actual widget conventions

The template exports `CalculatorWidget` (no prefix) but all 41 real widgets prefix the name (CoinsCalculatorWidget, RpmCalculatorWidget, ...), so copy-pasting the template yields the wrong name. The template's two-arg `(field, value)` handler is also not universal: coins uses a single-arg `(value)` handler. Separately, error-clearing behavior differs — some widgets surgically delete the cleared field (rpm), others blanket `setErrors({})` on calculate (ad-revenue, creator-tax).

- `src/components/calculators/template/CalculatorWidget.template.tsx:68 (`export function CalculatorWidget()`)`
- `src/components/calculators/coins/CalculatorWidget.tsx:19 (`CoinsCalculatorWidget`) and :25 (`handleInputChange = (value: any)`) single-arg`
- `src/components/calculators/rpm/CalculatorWidget.tsx:18 (`(field, value)`) two-arg; :20-26 surgical field error clear`
- `src/components/calculators/ad-revenue/CalculatorWidget.tsx:42 (`setErrors({})` blanket clear) and creator-tax/CalculatorWidget.tsx:47`

**→ Fix:** Update the template to match reality: prefix the export name, keep the two-arg handler, and pick one error-clearing strategy (recommend surgical field clear, since blanket clear hides unrelated errors).

#### 🔵 LOW — Widget h2 form-title wording and per-widget metric cards are ad-hoc

The form <h2> title is free-form per widget ('Convert Coins', 'Calculate Your RPM', 'Calculate LIVE Earnings', 'Calculate Your Rate', 'Find Your Best Posting Times'), with no constant or shared title builder. Likewise the secondary metric breakdowns below ResultsDisplay are bespoke per widget (grid-cols-2 in live-gifts, flex justify-between rows in creator-tax/ad-revenue, icon rows in engagement-rate) with no shared 'metric list' primitive, so each author reinvents the layout.

- `src/components/calculators/coins/CalculatorWidget.tsx:52 ('Convert Coins')`
- `src/components/calculators/rpm/CalculatorWidget.tsx:47 ('Calculate Your RPM')`
- `src/components/calculators/live-gifts/CalculatorWidget.tsx:52 ('Calculate LIVE Earnings')`
- `src/components/calculators/posting-time/CalculatorWidget.tsx:87 ('Find Your Best Posting Times')`
- `src/components/calculators/live-gifts/CalculatorWidget.tsx:109-118 (grid-cols-2 metric cards) vs creator-tax/CalculatorWidget.tsx:155-188 (flex justify-between rows) vs engagement-rate/CalculatorWidget.tsx:146-178 (icon rows)`

**→ Fix:** Introduce a shared MetricList/MetricRow primitive for secondary breakdowns (ResultsDisplay already has a 'breakdown' type at ResultsDisplay.tsx:92-108 that is largely unused) and a title helper, then adopt them so breakdown layout stops being reinvented per widget.

---

### Page Composition & Templates — Score 4/10

The codebase has a composable-architecture intent (blocks/, ToolPageTemplate, HubListingPage) but the two most prominent layers are dead code: all 11 `blocks/*` components have zero imports outside their own files, and `ToolPageTemplate` is used by 0 of 64 calculator detail pages. A shared `HubListingPage` template genuinely works for 8 data/guides sub-hubs, but the two flagship hubs (/blog, /guides) bypass it and hand-roll ~500-1370-line pages. Composition is fragmented into at least 6 distinct hero treatments, 3 competing breadcrumb approaches, 15+ uncoordinated gradient color combos, and per-page one-off CTA strips despite a dedicated CTAStripBlock existing. The net result is low template reuse for the highest-traffic surfaces with real consistency risk, while section-level primitives (MethodologySection, FAQSection, RelatedCalculators, schema components) are more consistently shared.

**Strengths:**
- HubListingPage is a genuine shared listing template, reused by 8 sub-hub pages (src/app/guides/{niches,business,growth,monetization}/page.tsx, src/app/data/{earnings,platform-comparisons,engagement,reference}/page.tsx) with a consistent card grid and schema wiring.
- ToolsDirectoryPage is reused by both /calculators and /tools, giving the calculator-directory surface a single canonical composition (src/app/calculators/page.tsx, src/app/tools/page.tsx).
- Calculator detail pages share a consistent set of section-level primitives even without a shared page template (MethodologySection, ToolExplanationSection, FAQSection, RelatedCalculators, RelatedGuides, InputsExplained, e.g. src/app/calculators/engagement-rate/page.tsx:6-13), so mid-page rhythm is broadly uniform across the 64 detail pages.
- Structured-data composition is consistent and template-driven: CollectionSchema/DatasetSchema in HubListingPage and ToolsDirectoryPage, and CalculatorSchema/FAQSchema/BreadcrumbSchema on detail pages centralize schema wiring rather than inlining it per page.

#### 🔴 CRITICAL — Entire blocks/ component layer is dead code (0 imports across 11 components)

All 11 block components in src/components/blocks/ (HeroBlock, CTAStripBlock, FAQBlock, ToolGridBlock, GuideGridBlock, TrustBlock, ExpertTeamBlock, DataSourcesBlock, HowItWorksBlock, BenchmarksPreviewBlock, CategoryChipsBlock) appear ONLY in their own definition files — grep across src/ returns zero consumers. The intended composable-blocks architecture for the homepage never landed; HomepageRedesign inlines every section instead. This is the single biggest composition drift: a whole documented layer of the design system that nothing renders.

- `grep -rl '@/components/blocks' src/ => (empty)`
- `Each of HeroBlock/CTAStripBlock/FAQBlock/ToolGridBlock/GuideGridBlock/TrustBlock/ExpertTeamBlock/DataSourcesBlock/HowItWorksBlock/BenchmarksPreviewBlock/CategoryChipsBlock appears in exactly 1 file (its own)`
- `src/components/home/HomepageRedesign.tsx:160-647 inlines hero, categories, benchmarks, popular tools, FAQ, and final CTA with no block imports`

**→ Fix:** Either delete src/components/blocks/ entirely (it misleads contributors into thinking blocks are the homepage's composition layer) or port HomepageRedesign to actually consume HeroBlock/CTAStripBlock/FAQBlock/ToolGridBlock so the blocks become the single source of truth. Do not leave 11 dead components coexisting with an inlined homepage.

#### 🔴 CRITICAL — ToolPageTemplate is unused — all 64 calculator detail pages hand-roll composition

A purpose-built ToolPageTemplate exists with a clean slot-based API (breadcrumbs, header, inputAndResult, howTo/examples/relatedTools/faqs/relatedGuides) but 0 of 64 calculator detail pages import it. Each detail page independently composes Breadcrumb, a centered hero with a circular icon badge, author byline, industry-insights grid, the widget, and related sections. This means every structural edit (spacing, header treatment, ad placement) must be repeated across 64 files rather than changed once in the template.

- `grep -rl 'ToolPageTemplate' src/app/ => 0 files`
- `find src/app/calculators -name page.tsx | wc -l => 64 detail pages`
- `src/components/tools/ToolPageTemplate.tsx:20-63 defines the slot template but it has no callers`
- `src/app/calculators/engagement-rate/page.tsx:104-136 hand-rolls its own hero (circular icon badge w-16 h-16 rounded-full bg-secondary-600, centered max-w-4xl) instead of using ToolPageTemplate's header (src/components/tools/ToolPageTemplate.tsx:38-50)`

**→ Fix:** Migrate at least the top-traffic calculator detail pages onto ToolPageTemplate, or delete ToolPageTemplate if the detail pages are intentionally bespoke. Leaving a second dead page-level template alongside the dead blocks/ layer compounds the confusion about which composition pattern is canonical.

#### 🟠 HIGH — At least 6 divergent hero/header treatments across page types with no shared Hero primitive

Page heroes are composed differently on every surface: (1) Homepage uses an editorial asymmetric grid (hero-editorial/paper-grid/studio-card, eyebrow, rotated quick-start card, CSS vars); (2) Calculator detail uses a centered max-w-4xl block with a circular icon badge on from-neutral-50 via-white to-secondary-50; (3) Blog hub uses a full-width saturated gradient banner (blue-600 via-purple-600 to-pink-500) with white text; (4) Guides hub uses a centered max-w-4xl text block on the same neutral gradient; (5) HubListingPage uses a plain left-aligned h1 on bg-neutral-50 with no banner; (6) ToolsDirectoryPage uses a left-aligned header inside Container with no banner. There is no shared Hero/Header component, so each treatment is a one-off.

- `src/components/home/HomepageRedesign.tsx:163-260 (editorial hero)`
- `src/app/calculators/engagement-rate/page.tsx:104-136 (centered icon-badge hero)`
- `src/app/blog/page.tsx:252-273 (saturated gradient banner hero)`
- `src/app/guides/page.tsx:742-761 (centered text hero)`
- `src/components/articles/HubListingPage.tsx:74-89 (plain left-aligned header, no banner)`
- `src/components/tools/ToolsDirectoryPage.tsx:57-65 (left-aligned header, no banner)`

**→ Fix:** Introduce a single Hero/Header primitive (variants: banner, centered-text, editorial) and adopt it across homepage, hubs, and detail pages. At minimum standardize the hub/detail hero to one of {centered-text, left-aligned} so the 4 non-homepage treatments collapse to one.

#### 🟠 HIGH — HubListingPage template bypassed by the two flagship hubs (/blog, /guides)

HubListingPage is the canonical shared listing template and works well for 8 sub-hubs, but the top-level /blog and /guides pages ignore it and hand-compose enormous bespoke pages (blog ~518 lines, guides ~1370 lines) with their own hero treatments, card grids, and FAQ sections. The result is that 'listing pages share a template' is only half-true: the secondary hubs conform, the primary ones do not, so visitors see different layouts depending on which hub they land on.

- `grep -rl 'HubListingPage' src/app => guides/{niches,business,growth,monetization}, data/{earnings,platform-comparisons,engagement,reference} (8 pages)`
- `src/app/blog/page.tsx:1-518 hand-rolls the entire blog hub (gradient hero at :252, inline Card grid at :302-349, inline FAQSection at :513) without HubListingPage`
- `src/app/guides/page.tsx:1-1371 hand-rolls the entire guides hub (picture-card grid hand-coded at :874-1109, roadmap at :1222-1307) without HubListingPage`

**→ Fix:** Port /blog and /guides onto HubListingPage (extending its supplementaryContent slot for the bespoke sections that must remain), so all listing pages share one composition. If the bespoke content is too rich for the current template, promote the repeated patterns (value-prop card, category grid, related-resources) into the template rather than re-implementing per hub.

#### 🟠 HIGH — Three competing breadcrumb approaches (2 components + 23 hand-rolled nav bars)

Breadcrumbs are implemented three ways: layout/Breadcrumb (canonical, 63 files), ui/Breadcrumbs (near-dead, 2 files), and 23 pages that hand-roll a <nav> with 'Home / X' markup using no component at all. The parallel Breadcrumbs-vs-Breadcrumb pair flagged in memory is real, and on top of it a quarter of the site sidesteps both. This produces inconsistent markup, spacing, and schema (hand-rolled ones skip BreadcrumbSchema wiring that the components handle).

- `grep -rl 'layout/Breadcrumb' src/ => 63 files`
- `grep -rl 'ui/Breadcrumbs' src/ => 2 files (src/components/tools/ToolPageTemplate.tsx:3, src/components/tools/ToolsDirectoryPage.tsx:5)`
- `grep -rl 'Home</Link>' src/app/ => 23 files hand-roll a <nav> breadcrumb, e.g. src/app/blog/page.tsx:241-249`

**→ Fix:** Collapse to one Breadcrumb component, delete the unused ui/Breadcrumbs, and migrate the 23 hand-rolled <nav> breadcrumbs onto it. Ensure the single component emits BreadcrumbSchema so the hand-rolled pages stop missing structured data.

#### 🟡 MEDIUM — CTAStripBlock exists but every page hand-rolls its own final CTA

A dedicated CTAStripBlock component is defined (quick-start CTA with consistent styling) but is never imported; instead each major page composes its own closing CTA with different markup and styling — Homepage a studio-card 'Final CTA' section, Blog a 'Need More Help?' card, Guides an 'Additional Resources' gradient card, ToolsDirectoryPage a 'Related Resources' button strip. The reusable CTA rhythm the block was meant to provide does not exist in practice.

- `src/components/blocks/CTAStripBlock.tsx:1-26 (defined, 0 importers — part of dead blocks/ layer)`
- `src/components/home/HomepageRedesign.tsx:610-638 (hand-rolled 'Final CTA' studio-card)`
- `src/app/blog/page.tsx:485-510 plus inline 'Need More Help' pattern elsewhere (Related Resources grid)`
- `src/app/guides/page.tsx:1343-1366 (hand-rolled 'Need More Help?' gradient CTA card)`

**→ Fix:** Adopt CTAStripBlock (or a single closing-CTA section component) as the canonical page-footer CTA and replace the per-page one-offs. If CTAStripBlock is kept, it must stop being dead code; if not, delete it and document the chosen CTA pattern.

#### 🟡 MEDIUM — Uncoordinated color/gradient drift: 81 files, 15+ distinct hero color combos, plus hardcoded hex

Composition relies on ad-hoc gradient backgrounds rather than a shared hero color token: 81 app files use bg-gradient-to-* banners spanning at least 15 distinct color combinations (from-neutral-50 x60, from-primary-50 to-secondary-50 x26, from-purple-50 to-pink-50 x21, from-green-50 to-emerald-50 x20, from-blue-50 to-indigo-50, from-amber-50 to-orange-50, etc.). The homepage additionally hardcodes hex values (#216c57, #8f6400) and uses a separate CSS-variable color system (--text/--info/--primary) from the Tailwind palette used elsewhere (blue-600/secondary-600/tiktok-pink). There is no single hero/section background convention.

- `grep -rhoE 'from-.../via-.../to-...' over src/app => 81 files, top combos: from-neutral-50 (60), from-primary-50 to-secondary-50 (26), from-purple-50 to-pink-50 (21), from-green-50 to-emerald-50 (20)`
- `src/components/home/HomepageRedesign.tsx:80 accent 'text-[#216c57]' and :89 'text-[#8f6400]' (hardcoded hex)`
- `src/app/blog/page.tsx:252 'from-blue-600 via-purple-600 to-pink-500' vs src/app/guides/page.tsx:742 'from-neutral-50 via-white to-secondary-50' vs src/app/calculators/engagement-rate/page.tsx:104 'from-neutral-50 via-white to-secondary-50'`

**→ Fix:** Define one or two hero/section background tokens (e.g. hero-bg-neutral, hero-bg-accent) in the design system, ban raw Tailwind palette gradients in page heroes, and replace the homepage's hardcoded hex with tokens. Standardize the hub/detail hero on a single background treatment.

#### 🟡 MEDIUM — Card-grid patterns differ across every surface (studio-note vs Card vs lowercase card)

Card grids are not composed from one shared card primitive. Homepage uses 'studio-note' cards with metric-pill tags and hover translate-y; HubListingPage uses raw 'group block p-6 bg-white border rounded-xl hover:border-primary-300 hover:shadow-card-hover'; Blog uses the Card component with hover:shadow-lg plus hardcoded bg-blue-100/text-blue-600 icon chips; Guides mixes lowercase 'card' and the Card component with per-card bg-gradient-to-br from-white to-{color}-50 and hardcoded border-l-4 colors; Calculator detail uses Card className='p-6'. Existing ToolCard and GuideCard primitives exist but are not the primary card used in these grids.

- `src/components/home/HomepageRedesign.tsx:436-462 (studio-note cards + metric-pill)`
- `src/components/articles/HubListingPage.tsx:91-116 (group block p-6 bg-white border rounded-xl hover:border-primary-300)`
- `src/app/blog/page.tsx:302-349 and :370-392 (Card + bg-blue-100/text-blue-600 hardcoded)`
- `src/app/guides/page.tsx:793-834 (lowercase 'card' + badge) and :874-1109 (Card with per-card from-white to-{color}-50 gradients)`
- `src/app/calculators/engagement-rate/page.tsx:147 (Card className='p-6')`
- `src/components/ui/ToolCard.tsx and GuideCard.tsx exist but are not used by these primary grids`

**→ Fix:** Standardize listing grids on the existing ToolCard/GuideCard primitives (or one shared ListCard), and remove the inline studio-note / group-block / raw Card variants from the major hubs and homepage.

#### 🔵 LOW — Placeholder/joke links shipped in the canonical calculators directory template

ToolsDirectoryPage (the template powering /calculators/ and /tools/) renders placeholder entries in its Related Resources strip — 'Fun & Niche Tools' and 'Moon Phase Calculator' both link to /calculators/, and a 'Legacy RPM Tool' link — which read as leftover scaffold content on a production page and undermine the otherwise clean directory composition.

- `src/components/tools/ToolsDirectoryPage.tsx:160 'Fun & Niche Tools' -> href /calculators/`
- `src/components/tools/ToolsDirectoryPage.tsx:163 'Moon Phase Calculator' -> href /calculators/`
- `src/components/tools/ToolsDirectoryPage.tsx:167 'Legacy RPM Tool' (conditional on isToolsAliasPage)`

**→ Fix:** Remove the placeholder links from ToolsDirectoryPage's Related Resources, or replace them with real categorized destinations. Keep the canonical directory template free of scaffold artifacts.

---

### Typography & Content/Prose Rendering — Score 4/10

A well-defined fontSize token scale (display/heading/body/label tiers) exists in tailwind.config.js and ArticleLayout's MDX prose is thoughtfully styled, but typography is applied inconsistently across the four content surfaces (articles, calculator content, guide hubs, blog). The @tailwindcss/typography plugin is enabled yet has zero centralized config (no theme.typography, no .prose overrides in globals.css), so every consumer re-implements prose styling inline or skips it entirely. Two divergent, apparently-dead TableOfContents components exist, and a critical color-system split (Tailwind primary=purple vs globals --primary=coral) makes in-prose links render a different color than buttons and UI links. Calculator content headings are sans+semibold while article prose headings are serif+bold, so identical h2 tags render differently depending on surface.

**Strengths:**
- A complete, hierarchical fontSize token scale is defined in tailwind.config.js:148-163 (display/heading/body/label tiers) with explicit lineHeight, letterSpacing, and fontWeight per step.
- ArticleLayout applies a detailed, intentional prose treatment covering h2, h3, p, a, strong, li, and table elements (ArticleLayout.tsx:310-319).
- Calculator body paragraphs consistently use text-body-md text-neutral-700 leading-relaxed (e.g. CalculatorContent.tsx:35-37, 85, 146), matching the article body token.
- Each calculator detail page emits exactly one h1 (verified: tiktok-creator-fund and earnings-revenue pages each have h1 count = 1), and the canonical calculator h1 in IntroSection uses the token scale (IntroSection.tsx:60).

#### 🔴 CRITICAL — Dual color systems make prose links render a different color than buttons/UI links

The site ships two unrelated primary palettes. tailwind.config.js defines primary DEFAULT=#6D28D9 (purple), while globals.css defines --primary=#ff6b57 (coral) and uses it for .btn-primary, .badge-primary, etc. ArticleLayout styles in-prose links with prose-a:text-primary-600, which resolves to PURPLE (#7C3AED), but the .link utility and .btn-primary resolve to coral/info-blue. A user reading an article sees purple underlined links, then coral buttons and blue UI links on the same screen — no single link color exists.

- `tailwind.config.js:11 (primary DEFAULT: '#6D28D9')`
- `src/styles/globals.css:23 (--primary: #ff6b57)`
- `src/components/articles/ArticleLayout.tsx:315 (prose-a:text-primary-600 prose-a:underline)`
- `src/styles/globals.css:121-125 (.btn-primary uses var(--primary))`
- `src/styles/globals.css:262-265 (.link uses var(--info) = #3b5bdb)`

**→ Fix:** Pick one primary palette as the source of truth. Easiest fix: add a theme.extend.typography config that maps prose-a color to var(--primary), and either retire the Tailwind `primary` scale in favor of CSS-var-based classes or realign tailwind.config.js primary DEFAULT to #ff6b57 so prose-a:text-primary-600 matches the button/link color.

#### 🟠 HIGH — Two duplicate, divergent TableOfContents components — both effectively dead code

ui/TableOfContents.tsx and ui/GuideTableOfContents.tsx solve the same problem with incompatible APIs and styling. The first hardcodes exactly two section IDs for one specific page ('Top 5 Strategies' / 'Check Your Current Rate'), renders the title as an <h3> (text-heading-sm) inside a neutral-50 box, and uses JS scrollTo buttons. The second takes an items prop, renders the title as an <h2> (text-display-sm font-bold) inside a primary-50 box, and uses anchor Links. Neither is imported anywhere in src (0 external usages for each), so they are dead, duplicated code whose divergence (h3 vs h2 title, color, interaction model) would leak into the UI the moment either is wired up.

- `src/components/ui/TableOfContents.tsx:19-22 (hardcoded tocItems), :62 (<h3 text-heading-sm>), :70-71 (button + scrollToSection)`
- `src/components/ui/GuideTableOfContents.tsx:23 (<h2 text-display-sm font-bold>), :27-29 (<Link href=\"#id\">)`
- `grep: 0 imports of ui/TableOfContents and 0 imports of GuideTableOfContents outside their own files`

**→ Fix:** Delete ui/TableOfContents.tsx (page-specific, hardcoded) and keep GuideTableOfContents as the single generic TOC, or merge both into one prop-driven component. Standardize the title heading level (h2 nav label) and container styling across all call sites.

#### 🟠 HIGH — Prose styling diverges sharply between article MDX and guide/blog hubs

ArticleLayout wraps content in 16 prose-* modifiers (serif headings via prose-headings:font-display, sized h2/h3, colored underlined links, neutral-700 paragraphs). The three guide hub pages and the blog listing page wrap content in a bare `prose prose-lg max-w-none text-neutral-700 space-y-4` with ZERO prose-a or prose-headings overrides. Result: links inside guide/blog prose fall back to the typography plugin default (and are further stripped by the global `a{color:inherit;text-decoration:none}` reset), and headings render in the default sans font instead of the Fraunces serif used in articles. The same `prose-lg` base produces visually different type on different pages.

- `src/components/articles/ArticleLayout.tsx:310-319 (full modifier stack including prose-headings:font-display, prose-a:text-primary-600)`
- `src/app/guides/tiktok-growth-hub/page.tsx:138 (prose prose-lg max-w-none text-neutral-700 space-y-4 — no modifiers)`
- `src/app/guides/tiktok-ads-hub/page.tsx:138 (same bare prose wrapper)`
- `src/app/blog/page.tsx:279 (same bare prose wrapper)`
- `grep prose-a override count = 0 in all three guide/blog files`

**→ Fix:** Centralize prose styling: add a theme.extend.typography config (or a shared .prose-ttc component class in globals.css) that sets heading font-family, link color/underline, and paragraph color once, and apply that single class everywhere prose is rendered instead of re-declaring modifiers inline.

#### 🟠 HIGH — Heading font-family and weight drift between article prose and calculator content

Article prose headings are Fraunces (font-display, serif) and font-bold; CalculatorContent headings inherit the body sans font (Manrope) and use font-semibold. An h2 in an article and an h2 in a calculator card therefore differ in family, weight, and size (article h2 = text-display-sm 30px; calculator h2 = text-heading-lg 24px). The serif display face is referenced by exactly one content component (ArticleLayout), so the editorial typography system is isolated to MDX articles and never reaches the calculator surface that drives most of the site.

- `src/components/articles/ArticleLayout.tsx:311 (prose-headings:font-display ... prose-headings:font-bold), :312 (prose-h2:text-display-sm)`
- `src/components/calculator/CalculatorContent.tsx:32 (<h2 className=\"text-heading-lg font-semibold ...\">), :81, :143, :226, :279 (same)`
- `grep: font-display appears in content components only within src/components/articles/ArticleLayout.tsx`

**→ Fix:** Decide on one heading system for all long-form content. Either apply font-display + font-bold to CalculatorContent h2/h3 to match articles, or drop prose-headings:font-display from ArticleLayout and standardize on the body sans face — then encode the choice in the centralized typography config so both surfaces inherit it.

#### 🟡 MEDIUM — @tailwindcss/typography is enabled but has no centralized config

The typography plugin is registered in tailwind.config.js plugins, but theme.extend has no typography key and globals.css contains no .prose overrides. There is therefore no shared prose 'skin' — every page that renders prose re-implements (or skips) heading/link/paragraph styling inline, which is the root cause of the article-vs-guide divergence above and makes future drift inevitable.

- `tailwind.config.js:252-254 (plugins: [require('@tailwindcss/typography')]) with no typography entry inside theme.extend (lines 8-250)`
- `src/styles/globals.css: grep for '.prose'/'typography' returns NONE FOUND`

**→ Fix:** Add a theme.extend.typography block (DEFAULT and/or a named modifier like prose-ttc) defining cssText colors, heading fontFamily/weight, link color, and lineHeight. Migrate ArticleLayout's inline modifiers and the guide/blog bare wrappers onto this single config.

#### 🟡 MEDIUM — Homepage h1 bypasses the type-token scale; other h1s use it

The canonical h1 in ArticleLayout and IntroSection uses design tokens (text-display-md md:text-display-lg), but the homepage hero h1 in HeroBlock uses raw Tailwind sizes (text-4xl md:text-5xl lg:text-[56px]) with an arbitrary magic pixel value. The most important heading on the site is the one that escapes the type system, so any future change to the display-* tokens will not propagate to the homepage.

- `src/components/blocks/HeroBlock.tsx:112 (<h1 className=\"font-display text-4xl font-bold ... lg:text-[56px] lg:leading-[1.1]\">)`
- `src/components/articles/ArticleLayout.tsx:251 (text-display-md md:text-display-lg)`
- `src/components/calculators/shared/IntroSection.tsx:60 (text-display-md md:text-display-lg)`

**→ Fix:** Replace HeroBlock.tsx:112 raw sizes with the text-display-* token scale (e.g. text-display-lg md:text-display-xl) so the homepage h1 participates in the same type system as other pages.

#### 🟡 MEDIUM — Heading-size drift within CalculatorContent and within a single guide hub page

Inside one file, CalculatorContent h2 is text-heading-lg (24px) for five components but text-heading-md (20px) for QuickFacts and RelatedResources, and two h3 elements carry no size class at all so they fall back to default browser sizing. Separately, the tiktok-growth-hub page renders 15 h2s at text-heading-lg and 1 at text-heading-md. Inconsistent h2 sizing within the same surface undermines the visual hierarchy the token scale is meant to enforce.

- `src/components/calculator/CalculatorContent.tsx:326 (QuickFacts <h2 text-heading-md>), :359 (RelatedResources <h2 text-heading-md>), :97 and :369 (<h3> with no size class)`
- `src/components/calculator/CalculatorContent.tsx:32,81,143,226,279 (text-heading-lg)`
- `src/app/guides/tiktok-growth-hub/page.tsx: 15 occurrences of text-heading-lg and 1 of text-heading-md (uniq -c)`

**→ Fix:** Standardize h2 on text-heading-lg and h3 on text-heading-md across CalculatorContent (fix QuickFacts/RelatedResources and add explicit sizes to the unclassed h3s), and audit the guide hub so every section h2 uses the same token.

#### 🟡 MEDIUM — BlogPostTemplate is dead code and would render unstyled prose if used

BlogPostTemplate is imported by zero files outside its own definition. Its content region wraps children in a plain <div className=\"container-custom max-w-4xl py-12 space-y-8\"> with no prose classes at all, and its h1 is white-on-gradient using a hardcoded non-brand palette (from-blue-600 via-purple-600 to-pink-500) that matches neither the Tailwind primary nor the globals --primary. If any blog post is ever routed through this template, its headings/paragraphs/links would inherit only the global base styles (and links would be invisible per the `a{color:inherit;text-decoration:none}` reset).

- `src/components/blog/BlogPostTemplate.tsx:60-62 (bare div, no prose classes)`
- `src/components/blog/BlogPostTemplate.tsx:43-45 (from-blue-600 via-purple-600 to-pink-500; h1 text-white text-display-lg)`
- `grep: BlogPostTemplate referenced only in its own file — 0 external imports`

**→ Fix:** Either delete BlogPostTemplate (since real blog/article rendering goes through ArticleLayout) or align it: wrap children in the same centralized prose class used elsewhere, and replace the hardcoded blue/purple/pink gradient with brand tokens.

#### 🔵 LOW — Global anchor reset strips link styling, leaving non-prose links invisible

globals.css sets `a { color: inherit; text-decoration: none; }`, so any <a> that is not inside a .prose block, does not carry the .link class, and does not set an explicit color renders as plain body text with no underline and no affordance. This forces every consumer to remember a class just to make a link look like a link, and is why guide/blog prose links (which rely on the prose plugin default that this reset can mask) end up under-styled.

- `src/styles/globals.css:63-66 (a { color: inherit; text-decoration: none; })`

**→ Fix:** Keep the reset but expose a single canonical inline-link style (e.g. apply .link styling to `a` within content regions, or set a sensible default color/underline on `a` and opt out only for navigation). Ensure the centralized prose config re-asserts link color and underline so prose links are unambiguous.

#### 🔵 LOW — Three different line-heights are used for 'body' text

Body text line-height is not uniform: globals.css sets body line-height:1.6 (and 1.5 on mobile); CalculatorContent and ArticleLayout use leading-relaxed (1.625); and the guide/blog prose-lg wrapper inherits the typography plugin's default prose line-height (1.75). These are close but distinct, so paragraph rhythm differs subtly between articles, calculator cards, and guide hubs.

- `src/styles/globals.css:52 (line-height: 1.6), :91 (mobile line-height: 1.5)`
- `src/components/calculator/CalculatorContent.tsx:37,85,146 (leading-relaxed = 1.625)`
- `src/components/articles/ArticleLayout.tsx:314 (prose-p:leading-relaxed)`
- `src/app/guides/tiktok-growth-hub/page.tsx:138 (prose prose-lg — default prose line-height 1.75)`

**→ Fix:** Standardize body line-height in one place (e.g. set --leading-body and use it in the base body rule and the centralized prose config) so articles, calculator content, and guide hubs share one rhythm.

---

### Color Usage & Visual Style — Score 4/10

The codebase runs at least three competing, unresolved color systems with no single source of truth. tailwind.config.js defines a purple/violet `primary` scale (`#6D28D9`), while globals.css defines a completely different coral `--primary` (`#ff6b57`) editorial system — and the two are not reconciled, so the literal word "primary" resolves to different colors depending on whether it is consumed via a Tailwind class or a CSS component class. The live Header/Footer/Homepage consistently use the new coral system, but ~1000+ surviving purple `primary-*` class usages and a dead dark-teal HeroBlock keep the palette fractured. On top of this, 34 files spray 14 distinct decorative pastel-gradient hues with zero connection to any brand token, producing visual clutter. Iconography (lucide-react via Icon.tsx) is the one genuinely consistent thread.

**Strengths:**
- Iconography is genuinely centralized and consistent: src/components/ui/Icon.tsx maps ~90 emoji identifiers to a single lucide-react icon set with a default size (24) and no strokeWidth override, so the lucide default stroke (2) is applied uniformly across the site.
- There is a clear, coherent intended brand system landing in globals.css: warm cream surfaces (#f6efe6), coral --primary (#ff6b57), mint --secondary (#6dd3b4), blue --info (#3b5bdb), plus purpose-built component classes (.btn-primary, .eyebrow, .studio-card, .studio-note, .metric-pill) that give the redesigned pages a distinctive editorial look.
- The live chrome (Header, Footer, HomepageRedesign) consistently uses the coral editorial system — e.g. Header.tsx logo uses bg-[linear-gradient(135deg,#ff6b57,#ff9f7e)] and .btn-primary throughout — so a user navigating the shell and homepage sees one coherent palette.
- tailwind.config.js defines a full semantic token set (primary/secondary/accent/neutral/success/warning/error/info scales) and a 6-step boxShadow scale, showing intent for a tokenized system even where it has drifted.

#### 🔴 CRITICAL — Two contradictory PRIMARY color definitions across the two source-of-truth files

tailwind.config.js sets primary.DEFAULT to purple #6D28D9 (with primary-600 #7C3AED), and this Tailwind scale is used ~1020 times (primary-600 alone: 460, plus primary-700/50/500/etc.). But src/styles/globals.css sets --primary to coral #ff6b57 and every CSS component class (.btn-primary, .badge-primary, .gradient-primary, .glow-purple) is built on that coral value. The consequence: <Button variant="primary"> renders CORAL (Button.tsx maps primary -> 'btn-primary' -> coral gradient), while <Badge tone="active"> renders PURPLE (Badge.tsx 'bg-primary-100 text-primary-700' = #F2EAFE/#6D28D9). The same token name yields two different brand colors depending on which primitive you reach for, so primary actions and primary-tinted labels on the same page are different hues. The dominant token by usage (purple, 1000+ uses) is NOT the color the live header/footer/homepage use (coral) — the migration is half-finished.

- `tailwind.config.js:11 `DEFAULT: '#6D28D9'` (purple primary)`
- `src/styles/globals.css:23 `--primary: #ff6b57;` (coral primary)`
- `src/styles/globals.css:121-124 `.btn-primary { background: linear-gradient(135deg, var(--primary), #ff8668); ... }` (coral)`
- `src/components/ui/Button.tsx:21-27 variantStyles maps primary -> 'btn-primary' (coral)`
- `src/components/ui/Badge.tsx:12 `active: 'bg-primary-100 text-primary-700'` (purple)`
- `grep aggregate: primary-600=460, primary-700=143, primary-50=128, primary-500=92, primary-200=76 (Tailwind purple scale)`

**→ Fix:** Pick ONE primary and make the two token sources agree. Recommended: align tailwind.config.js primary scale to the coral editorial system (DEFAULT #ff6b57, and a matching 50-900 ramp), since that is what the redesigned Header/Footer/HomepageRedesign and globals.css already ship. Then sweep-replace the surviving purple primary-* Tailwind classes. Until the token is unified, Button and Badge will keep disagreeing.

#### 🟠 HIGH — Dead HeroBlock ships a third color system + references undefined CSS classes

src/components/blocks/HeroBlock.tsx is NOT imported anywhere (the live homepage at src/app/page.tsx renders HomepageRedesign instead), yet it carries a fully bespoke dark-teal palette: 23 hardcoded hex values (#00D4AA, #00B894, #0B1120, #111827) on a near-black background with white text. Worse, it relies on classes `hero-creator-glow` (HeroBlock.tsx:92) and `creator-card` (HeroBlock.tsx:127) that are NOT defined in any stylesheet — the only CSS file in the repo is src/styles/globals.css, and grepping it returns no matches. So if this component is ever re-mounted it will render unstyled/black. Separately, CTAStripBlock.tsx:6 uses `cta-strip`, which is also undefined in globals.css. This is both dead/duplicate code (a known drift signal) and a third accent color (teal) competing with coral and purple.

- `src/components/blocks/HeroBlock.tsx:92 `className="hero-creator-glow relative overflow-hidden ..."``
- `src/components/blocks/HeroBlock.tsx:105 `border-[#00D4AA]/20 bg-[#00D4AA]/[0.06]``
- `src/components/blocks/HeroBlock.tsx:114 `bg-gradient-to-r from-[#00D4AA] to-[#00B894]``
- `grep: no import of HeroBlock anywhere under src/app or src/components`
- `src/app/page.tsx:33 renders <HomepageRedesign />, not HeroBlock`
- `grep `hero-creator-glow|creator-card` against src/styles/globals.css = NOT DEFINED`
- `src/components/blocks/CTAStripBlock.tsx:6 `cta-strip` also NOT DEFINED in globals.css`

**→ Fix:** Delete src/components/blocks/HeroBlock.tsx (and remove the dangling `cta-strip`/`hero-creator-glow`/`creator-card` references) once confirmed unused, or re-implement it against the coral editorial system if it is meant to return. Remove the unused `creator`/`tiktok` token palettes from tailwind.config.js (lines 121-140) so they cannot be cargo-culted back.

#### 🟠 HIGH — Uncontrolled decorative rainbow gradients across 34 files

Beyond the brand tokens, the site scatters 320 `bg-gradient-to-*` utilities spanning 14 distinct Tailwind hue families — from-blue-50, from-purple-50, from-pink-50, from-green-50, from-cyan-50, from-indigo-50, from-emerald-50, from-teal-50, from-orange-50, etc. (top stops: from-primary-50=38, from-blue-50=32, from-purple-50=30, to-pink-50=23, from-green-50=23). 34 files use these non-brand pastel gradients, typically as decorative card/section backgrounds. None of these hues map to any token in tailwind.config.js or globals.css, so there is no governing palette and sections accumulate visually competing pastel accents. This is the main source of perceived visual clutter and is orthogonal to both the purple and coral primary systems.

- `grep aggregate gradient stops: from-primary-50=38, from-blue-50=32, from-purple-50=30, to-pink-50=23, from-green-50=23, to-emerald-50=20, to-cyan-50=16, to-orange-50=12, from-indigo-50=12, from-amber-50=8, from-teal-50=6, via-teal-500=3, via-purple-500=3`
- `src/components/calculators/diamond-converter/CalculatorWidget.tsx:63 `bg-gradient-to-r from-purple-50 to-pink-50``
- `src/components/home/HomepageRedesign.tsx:525 `bg-[linear-gradient(135deg,rgba(255,107,87,0.12),rgba(255,255,255,0.7))]` (ad-hoc inline gradient)`
- `34 distinct files use non-primary hue-50 gradients (grep count)`

**→ Fix:** Define 2-3 sanctioned gradient utility classes in globals.css (e.g. a coral primary gradient and a mint secondary gradient, which already exist as .gradient-primary/.gradient-secondary but are unused) and migrate the 34 files onto them. Remove the 14 ad-hoc hue families; if a category needs a distinct accent, encode it as a token rather than a one-off pastel.

#### 🟡 MEDIUM — Two parallel shadow/elevation systems plus arbitrary shadows

tailwind.config.js defines a clean 6-step boxShadow scale (sm/md/lg/xl/card/card-hover, all rgba(15,23,42,…)). But globals.css defines a SEPARATE elevation system via CSS variables --shadow-sm/md/lg with different blur/opacity values (e.g. --shadow-lg: 0 30px 80px rgba(23,32,51,0.13) vs tailwind xl: 0 18px 42px rgba(15,23,42,0.14)), and .studio-note/.studio-card hardcode yet more shadow values (0 14px 35px rgba(23,32,51,0.08)). On top of that, 6 arbitrary `shadow-[...]` values are scattered, including live ones in Header.tsx (shadow-[0_18px_50px_rgba(23,32,51,0.12)]) and the dead HeroBlock (shadow-[0_0_20px_rgba(0,212,170,0.3)]). The depth language is therefore inconsistent: tailwind shadow-lg (26 uses) and var(--shadow-lg) produce different shadows, and there is no single elevation token consumers are expected to use.

- `tailwind.config.js:180-187 boxShadow sm/md/lg/xl/card/card-hover (rgba(15,23,42,…))`
- `src/styles/globals.css:32-34 `--shadow-sm: 0 10px 30px rgba(23,32,51,0.06)` / `--shadow-md: 0 18px 50px rgba(23,32,51,0.1)` / `--shadow-lg: 0 30px 80px rgba(23,32,51,0.13)``
- `src/styles/globals.css:335 `.studio-note { box-shadow: 0 14px 35px rgba(23,32,51,0.08) }` (hardcoded)`
- `src/components/layout/Header.tsx:46 `shadow-[0_18px_50px_rgba(23,32,51,0.12)]` and `shadow-[0_10px_30px_rgba(23,32,51,0.08)]` (arbitrary)`
- `grep shadow class counts: shadow-lg=26, shadow-sm=17, shadow-md=12, shadow-card-hover=2, plus 6 arbitrary shadow-[...] values`

**→ Fix:** Collapse to one elevation scale. Either point globals.css --shadow-* at the tailwind config values (so .card/.studio-card and shadow-lg agree) or move all elevation into globals.css and remove the tailwind boxShadow scale. Replace the 6 arbitrary shadow-[...] values with scale tokens.

#### 🔵 LOW — In-file primary-color collisions and ad-hoc icon sizes

Three files mix the purple Tailwind scale and the coral CSS-var system inside the SAME component, so a single block can show both primaries at once. The clearest is CTAStripBlock, which paints its eyebrow purple (text-primary-700, line 9) while its CTA button is coral (.btn btn-primary, line 19). Separately, while Icon.tsx centralizes lucide icons with a default size, most call sites bypass it and import lucide directly with ad-hoc sizes (h-3.5 w-3.5 for eyebrows, h-4 w-4 = 39 uses, h-5 w-5 = 27 uses, h-8/10/11/12 w-… for category tiles). There is no icon-size token scale, so icon proportions drift between sections.

- `src/components/blocks/CTAStripBlock.tsx:9 `text-primary-700` (purple eyebrow)`
- `src/components/blocks/CTAStripBlock.tsx:19 `className="btn btn-primary btn-lg"` (coral button, same component)`
- `src/components/articles/ArticleLayout.tsx and src/app/guides/page.tsx also mix primary-N with var(--primary)/btn-primary`
- `Icon size ad-hoc: grep h-4 w-4=39, h-5 w-5=27, h-3.5 w-3.5 (eyebrows), h-11 w-11, h-12 w-12 across src/components,src/app`
- `src/components/ui/Icon.tsx:256 default `size = 24` with no strokeWidth token`

**→ Fix:** Fix the 3 in-file collisions first (lowest cost, highest visibility). Introduce a small icon-size scale (e.g. text-icon-sm/md/lg utilities mapping to 14/16/20px) and route call sites through Icon.tsx or the scale instead of raw h-/w- per instance.

---

### Responsive Design & Mobile — Score 7/10

The site is built mobile-first on a sound foundation: primary buttons enforce a 44-50px min-height, the canonical Header ships a proper 44px hamburger + full-width mobile menu that closes on route change, every <table> is wrapped in overflow-x-auto, and the rotated hero card is contained by overflow-hidden. However, the breakpoint strategy is uneven (sm: is used only 31 times vs md: at 380, and the custom xs/3xl screens are effectively unused), interactive controls below the .btn system drop below the 44px touch minimum, and three dead/parallel layout components (Header-updated, Footer-updated, HeroBlock) mean responsive patterns are not maintained from a single source of truth. Grid collapse is generally correct on hub pages (1-col base -> md/lg) but ~15 places start at grid-cols-2 on mobile and the homepage hero h1 is text-5xl on the smallest viewports. Score: 7/10 — good baseline, inconsistent execution.

**Strengths:**
- Strong touch-target baseline: .btn/.btn-md/.btn-lg enforce min-height 46-50px and the mobile hamburger is h-11 w-11 (44px) — globals.css:116-180, Header.tsx:106.
- Mobile menu is well-built: scroll-aware sticky header, menu auto-closes on pathname change (Header.tsx:31-33), and each mobile nav link is px-4 py-3 (~44px tall) — Header.tsx:122-135.
- Overflow is handled consistently: every <table> in src/components and src/app is wrapped in overflow-x-auto (ComparisonTable.tsx:30, DataTable.tsx:81, InputsExplained.tsx:34); only 6 hardcoded w-[NNNpx] values exist site-wide and they are decorative.
- Rotated/staggered decorative cards are contained: HomepageRedesign hero section and Container both use overflow-hidden so the rotate-[-1.5deg] card cannot cause page-level horizontal scroll — HomepageRedesign.tsx:163-164, 201.
- Hub/listing grids collapse correctly mobile-first: guides page uses `grid md:grid-cols-3` (1-col base) and ToolsDirectoryPage uses `grid lg:grid-cols-2` — guides/page.tsx:769,843,874; ToolsDirectoryPage.tsx:75.
- Hero and section headings scale responsively across breakpoints (e.g. text-5xl md:text-6xl lg:text-[4.8rem]) rather than being fixed — HomepageRedesign.tsx:172,271.

#### 🟠 HIGH — Interactive milestone filter buttons have ~28px touch targets (below 44px WCAG min)

The 'Quick Select Milestone' chips are real onClick buttons but are sized px-3 py-1 text-sm, yielding roughly 28px of vertical touch area — well under the 44x44px WCAG 2.5.5 minimum. On mobile these are the primary way to pick a milestone, so the undersized target directly hurts usability and accessibility. Other interactive chip rows should be audited for the same py-0.5/py-1 pattern.

- `src/components/calculators/milestone-tracker/CalculatorWidget.tsx:103-111 (onClick button with `px-3 py-1 text-sm rounded-full`)`

**→ Fix:** Bump interactive chip buttons to at least py-2.5 (or min-h-[44px]) and add gap-2 between them; reserve py-0.5/py-1 for purely decorative badges. Sweep src/components and src/app for `onClick` elements using py-0.5/py-1.

#### 🟡 MEDIUM — Dead/parallel responsive layout code creates drift from the canonical mobile patterns

Header-updated.tsx (318 lines) is not imported anywhere, Footer-updated.tsx is superseded by Footer.tsx (layout.tsx imports Footer), and HeroBlock.tsx is superseded by HomepageRedesign.tsx (app/page.tsx imports HomepageRedesign). Because each parallel copy implements its own responsive classes, fixes to mobile nav/grid behavior in the canonical components do not propagate, so the responsive system is effectively forked.

- `src/app/layout.tsx:4-5,100,104 (imports Header and Footer — the canonical pair)`
- `src/app/page.tsx:3,28 (imports HomepageRedesign, not HeroBlock)`
- `grep: 'Header-updated' returns NO imports anywhere in src/`
- `src/components/layout/Header-updated.tsx (318 lines), src/components/layout/Footer-updated.tsx, src/components/blocks/HeroBlock.tsx are unreferenced parallel implementations`

**→ Fix:** Delete Header-updated.tsx, Footer-updated.tsx, and HeroBlock.tsx (or merge their improvements into the canonical components) so responsive behavior lives in exactly one Header/Footer/Hero.

#### 🟡 MEDIUM — Inconsistent breakpoint strategy: sm: barely used and custom xs/3xl screens are dead config

Breakpoint usage is heavily skewed to md: (380) and lg: (177), with sm: used only 31 times and xl: 6 times. Mobile-first 1-col -> md grids are fine, but the 640-768px band gets almost no intermediate sizing, so components jump straight from the mobile base to md. The custom 'xs' (475px) and '3xl' (1600px) screens are defined in tailwind.config.js but effectively unused, adding dead config that implies a strategy the codebase doesn't follow.

- `tailwind.config.js screens block defines 'xs': '475px' and '3xl': '1600px'`
- `Breakpoint counts: sm: 31, md: 380, lg: 177, xl: 6, 2xl: 0`
- `Hub grids jump base -> md with no sm step, e.g. src/app/guides/page.tsx:769,843,874 (`grid md:grid-cols-3`)`

**→ Fix:** Pick one documented convention (e.g. base -> sm -> lg) and apply it in the component templates; either use the xs/3xl screens or remove them from tailwind.config.js to avoid implying a non-existent strategy.

#### 🟡 MEDIUM — .btn-sm touch target is 42px, below the 44px baseline enforced elsewhere

The design system enforces 44px+ on .btn (46px), .btn-md (46px) and .btn-lg (50px), but .btn-sm is min-height 42px — the one size that falls below the WCAG 44px touch minimum. It is used for the desktop-only header CTAs today (so the mobile impact is currently low), but as a system primitive it invites sub-minimum touch targets wherever .btn-sm is reused on mobile.

- `src/styles/globals.css:178-180 (.btn-sm { min-height: 42px })`
- `src/styles/globals.css:116-118 (.btn min-height 46px), 173-175 (.btn-md 46px), 168-170 (.btn-lg 50px)`
- `src/components/layout/Header.tsx:89,96 (btn-sm used on desktop-only lg:flex CTAs)`

**→ Fix:** Raise .btn-sm min-height to 44px (or document it as desktop-only and add a lint rule preventing its use inside lg:hidden / mobile contexts).

#### 🔵 LOW — Homepage hero h1 is text-5xl (48px) on the smallest mobile viewports

The canonical homepage hero h1 starts at text-5xl then scales up at md/lg. For a long headline ('TikTok Calculator — Estimate Earnings, Engagement & Brand Deal Rates') on a 320-360px viewport this is large and forces aggressive wrapping; it does not overflow (max-w-3xl + overflow-hidden on the section) but reads heavy on small phones compared to HeroBlock's safer text-4xl base.

- `src/components/home/HomepageRedesign.tsx:172 (`text-5xl font-bold ... md:text-6xl lg:text-[4.8rem]`)`
- `src/components/blocks/HeroBlock.tsx:112 (parallel/dead hero uses the preferable `text-4xl ... md:text-5xl`)`
- `src/components/home/HomepageRedesign.tsx:163-164 (section + Container both overflow-hidden, so no horizontal scroll)`

**→ Fix:** Start the hero h1 at text-4xl on mobile and step to text-5xl at sm/md, matching the (now-dead) HeroBlock's safer scale.

#### 🔵 LOW — Duplicate nav items and 7-item menu crowd the mobile drawer and lg breakpoint

The nav array has both 'Benchmarks' -> /data/ and 'Data' -> /data/ (identical target), plus Comparisons -> /data/platform-comparisons/. Seven top-level items plus Contact plus the primary CTA make the lg nav tight and the mobile drawer long, increasing the chance of wrap/overflow at the lg breakpoint and diluting wayfinding.

- `src/components/layout/Header.tsx:10-18 (navItems: Tools, Benchmarks->/data/, Guides, Data->/data/, Blog, Comparisons, News)`
- `src/components/layout/Header.tsx:12 and :14 (Benchmarks and Data both href '/data/')`

**→ Fix:** Collapse Benchmarks/Data into one item, prune to ~5 top-level entries, and move Comparisons under the /data/ hub to reduce mobile-drawer length and lg-nav crowding.

#### 🔵 LOW — ~15 grids start at grid-cols-2 on mobile, including a 2->5 jump

Calculator result/stat grids commonly default to grid-cols-2 with gap-3 on mobile. At 320px that is ~140px per cell — acceptable for small stat tiles but cramped for anything with text. diamond-converter jumps from grid-cols-2 straight to md:grid-cols-5, producing very narrow cells in the 640-768px band. These are isolated micro-layout issues rather than overflow, but they are inconsistent with the 1-col-mobile convention used on hub pages.

- `src/components/calculators/diamond-converter/CalculatorWidget.tsx:67 (`grid grid-cols-2 md:grid-cols-5 gap-3`)`
- `src/components/calculators/milestone-tracker/CalculatorWidget.tsx:171, follower-growth:133, ad-spend:201, audience-overlap:198 (`grid grid-cols-2 gap-3`)`
- `src/components/calculator/CalculatorContent.tsx:327 (`grid grid-cols-2 md:grid-cols-4 gap-4`)`
- `15 total base grid-cols-2 occurrences across src/components and src/app`

**→ Fix:** Standardize result/stat grids via the calculator template: default to grid-cols-2 only for compact numeric tiles, otherwise grid-cols-1 sm:grid-cols-2; fix diamond-converter to step 2 -> 3/4 -> 5 rather than 2 -> 5.

---

### Accessibility & Interaction States — Score 4/10

The codebase has real a11y foundations — a single global `*:focus-visible` outline, 44px touch targets on mobile, native `<details>/<summary>` for the accordion, real `<button>` elements with aria-labels for the mobile menu toggle, and a consistent `isCalculating` + Button `isLoading` loading pattern across all 41 calculator widgets. However, several WCAG Level A/B violations undercut this: there is NO skip-to-content link, NO live regions anywhere (0 aria-live/role=status), so calculator results are never announced to screen readers; `prefers-reduced-motion` is completely unhandled despite 230 transitions and 18 animations; and the accessibility-correct `Input` (with aria-invalid + aria-describedby) is effectively dead (1 import) while the canonical field components used 66 times (`InputField`×47, `SelectField`×19) omit both attributes. Low-contrast `text-neutral-400` (~2.3:1) appears across 78 files. The result is inconsistent, partially-operable accessibility rather than a coherent system.

**Strengths:**
- Centralized, consistent focus-visible: a single global `*:focus-visible { outline: 2px solid var(--info); outline-offset: 2px; }` in globals.css:58-61 covers all native controls, plus explicit `.input:focus` and `.input-shell:focus-within` rings (globals.css:215-231)
- Touch-target sizing done right: `button, a, input, select, textarea { min-height: 44px }` on mobile (globals.css:80-87), satisfying WCAG 2.5.5/2.5.8
- Accordion uses native `<details>/<summary>` (Accordion.tsx:17-24), which is keyboard-operable and exposes correct roles without custom ARIA
- Mobile menu toggles are real `<button>`s with accessible names — Header-updated.tsx:198 `aria-label="Toggle menu"`, Header.tsx:107 dynamic `aria-label={isOpen ? 'Close menu' : 'Open menu'}`
- Loading state is consistent and correct: all 41/41 calculator widgets use `isCalculating`, and Button.tsx:43 sets `disabled={disabled || isLoading}` with a spinner (Button.tsx:46-72)
- Button interaction states are centralized via shared `.btn` classes — hover transforms, `disabled:opacity-60 disabled:cursor-not-allowed` (globals.css:117) — so state styling is consistent wherever `.btn` is used

#### 🔴 CRITICAL — No skip-to-content link anywhere (WCAG 2.4.1, Level A)

A grep for skip-link / skipToContent patterns returns nothing (only an unrelated `sr-only` search label in ToolGridBlock.tsx:27). Keyboard users must tab through the entire Header on every page before reaching main content. This is a foundational Level A failure that invalidates other a11y effort.

- `grep -rn 'skip|skipToContent|skip-link' src/ -> 0 matches (only ToolGridBlock.tsx:27 sr-only label, unrelated)`
- `src/app/layout.tsx contains no skip link before <Header>`

**→ Fix:** Add `<a href="#main" className="sr-only focus:not-sr-only ...">Skip to content</a>` as the first focusable element in the root layout, and add `id="main"` to the main content wrapper.

#### 🔴 CRITICAL — Calculator results are never announced — 0 live regions in the codebase

A dedicated search for aria-live / role="status" / aria-busy returns ZERO occurrences in any .tsx file. ResultsDisplay.tsx (used by 29/41 widgets) renders results with no role=status and no aria-live; the calculator template conditionally shows results (CalculatorWidget.template.tsx:170) with no announcement. For an interactive calculator product this is a core UX gap: sighted users see the number update, screen-reader users get nothing.

- `grep -rn 'aria-live|role="status"|aria-busy' src/ --include=*.tsx -> 0 files`
- `src/components/calculator/ResultsDisplay.tsx:36 (Card) and :76-79 (single result) have no aria-live/role`
- `0/41 widgets in src/components/calculators/*/CalculatorWidget.tsx contain aria-live`
- `Button.tsx:46-72 spinner has no aria-busy / aria-label during loading`

**→ Fix:** Wrap ResultsDisplay output in `<div role="status" aria-live="polite" aria-atomic="true">`, set `aria-busy={isCalculating}` on the form/Calculate button, and add an aria-live error region for calculation failures.

#### 🟠 HIGH — Canonical InputField & SelectField omit aria-invalid and aria-describedby (66 usages)

The a11y-correct `Input` (Input.tsx:31-32 sets aria-invalid + aria-describedby linking helper/error text by id) is effectively dead — imported only once. The components actually used in production — InputField (47 imports) and SelectField (19 imports) — render helper/error `<p>` tags with NO id and the input/select has NO aria-invalid or aria-describedby (InputField.tsx:97-115, :120-135; SelectField.tsx:40-58). Screen-reader users cannot tell a field is errored or hear the error text. This is the headline Input-vs-InputField drift signal and a WCAG 3.3.1/4.1.3 issue.

- `src/components/ui/Input.tsx:31-32 (correct: aria-invalid + aria-describedby) vs Input.tsx imported 1x`
- `src/components/ui/InputField.tsx:97-115 input has no aria-invalid/aria-describedby; :120,:125 helper/error <p> have no id`
- `src/components/ui/SelectField.tsx:40-58 select has no aria-invalid; :60,:64 helper/error <p> have no id`
- `grep: Input=1 import, InputField=47 imports, SelectField=19 imports`

**→ Fix:** Port the aria-invalid/aria-describedby pattern from Input.tsx into InputField.tsx and SelectField.tsx, or deprecate them in favor of Input.tsx. Add ids (`${id}-helper`, `${id}-error`) to the helper/error paragraphs.

#### 🟠 HIGH — InputField tooltip trigger is an icon-only button with no accessible name and no keyboard focus handler

The tooltip trigger (InputField.tsx:60-87) is a `<button type="button">` containing only an SVG; it has no aria-label / aria-labelledby, so assistive tech announces nothing meaningful. The tooltip content is shown via onMouseEnter/onMouseLeave/onClick but has no onFocus handler, no role="tooltip", no aria-expanded/aria-controls, and no id linkage — keyboard users who tab to and focus the button get no tooltip. Also `text-neutral-500` (InputField.tsx:62) is ~4.3:1 contrast, borderline for the icon.

- `src/components/ui/InputField.tsx:60-87: <button type="button"> with svg child, no aria-label; onMouseEnter/onMouseLeave/onClick only`
- `src/components/ui/InputField.tsx:81-85 tooltip <div> has no role="tooltip", no id, not linked via aria-describedby`

**→ Fix:** Add `aria-label="More information"` (or aria-describedby pointing to the tooltip id) to the button, add `onFocus`/`onBlur` to mirror hover, give the tooltip `role="tooltip"` and an id, and bump the icon to text-neutral-600.

#### 🟠 HIGH — prefers-reduced-motion is completely unhandled

There are 0 occurrences of prefers-reduced-motion / motion-reduce / motion-safe anywhere, yet the UI relies heavily on motion: 230 `transition` usages, 18 `animate-*` classes, hover transforms (`.btn-primary:hover { transform: translateY(-1px) }` globals.css:127-130, `.card-hover:hover` :191-195), the accordion chevron rotate (Accordion.tsx:23 `group-open:rotate-180`), the loading spinner (Button.tsx:49 `animate-spin`), and result/card entrances (`animate-slide-up` ResultsDisplay.tsx:36, `animate-slide-down` Header-updated.tsx:227, `animate-fade-in` InputField.tsx:81). Users who set reduced-motion get all of this motion, violating WCAG 2.3.3.

- `grep -rn 'prefers-reduced-motion|motion-reduce|motion-safe' src/ -> 0 matches`
- `src/styles/globals.css:117,127-130,191-195 transition/transform with no reduced-motion override`
- `src/components/calculator/ResultsDisplay.tsx:36 animate-slide-up; src/components/ui/Button.tsx:49 animate-spin`

**→ Fix:** Add a global `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration:0.01ms !important; transition-duration:0.01ms !important; } }` block, or convert key animations to Tailwind `motion-safe:` / `motion-reduce:` variants.

#### 🟡 MEDIUM — Disclosure/menu patterns lack aria-expanded and aria-controls (0 occurrences)

The mobile menu toggles and desktop dropdown buttons toggle visibility via React state but expose no expanded state to AT. grep finds 0 aria-expanded and 0 aria-controls across the codebase. Header-updated.tsx:195-222 mobile toggle has aria-label but not aria-expanded/aria-controls; its desktop dropdown buttons (Header-updated.tsx:121-146) and mobile submenu (Header-updated.tsx:233-263) appear to be custom and likely lack keyboard arrow/escape handling. Screen-reader users cannot determine whether a menu is open.

- `grep -rn 'aria-expanded|aria-controls' src/ --include=*.tsx -> 0 matches`
- `src/components/layout/Header-updated.tsx:195-198 toggle button (aria-label only); :121-146 desktop dropdown buttons; :233-263 mobile submenu buttons`
- `src/components/layout/Header.tsx:104-112 toggle (aria-label only, no aria-expanded)`

**→ Fix:** Add `aria-expanded={isOpen}` and `aria-controls={menuId}` to every toggle button and `id={menuId}` to the controlled container; ensure Escape closes and focus returns to the toggle.

#### 🟡 MEDIUM — Low-contrast gray text/icons widespread (text-neutral-400 in 78 files)

Tailwind `text-neutral-400` (#a3a3a3) is ~2.3:1 on the off-white surface — failing WCAG 1.4.11 non-text contrast (3:1) and 1.4.3 for any text. It appears 78 times across src, including decorative-but-meaningful controls: the input leading icon (InputField.tsx:93), the range separator in results (ResultsDisplay.tsx:55), breadcrumbs, and the footer. The `--muted` token (#6c7488, ~4.6:1) used for placeholder/helper/addon text (globals.css:212,240) is borderline-pass for normal text but risky on the translucent rgba surfaces.

- `grep -rn 'text-neutral-400|text-neutral-300' src/ --include=*.tsx -> 78 matches across src/components/ui/InputField.tsx, src/components/calculator/ResultsDisplay.tsx, src/components/ui/Breadcrumbs.tsx, src/components/layout/Footer-updated.tsx, etc.`
- `src/components/ui/InputField.tsx:93 leading icon text-neutral-400; :62 tooltip icon text-neutral-500`
- `src/components/calculator/ResultsDisplay.tsx:55 range separator text-neutral-400`
- `src/styles/globals.css:22 (--muted:#6c7488), :212 placeholder, :240 input-addon`

**→ Fix:** Raise meaningful icons/separators to text-neutral-500/600 (>=3:1), reserve neutral-400 for purely decorative elements, and verify --muted against the actual rgba surface in a contrast checker.

#### 🟡 MEDIUM — Cookie consent banner has no dialog/region role, accessible name, or live announcement

The consent banner (CookieConsent.tsx:35-60) is a plain `<div>` with no role="dialog"/"region", no aria-label/aria-labelledby, and no aria-live. It appears dynamically after hydration but screen-reader users are not informed it appeared, and there is no programmatic label tying the heading text to the banner. It is also not a true modal so focus-trap isn't strictly required, but absence of any role/name is a 4.1.2 / 4.1.3 concern.

- `src/components/consent/CookieConsent.tsx:35-60 banner <div> has no role/aria-label/aria-live; appears conditionally at :34`
- `src/components/consent/CookieConsent.tsx:64-71 floating "Cookie settings" button is fine (has text)`

**→ Fix:** Add `role="dialog" aria-modal="false" aria-label="Cookie and ad consent"` to the banner container (or role="region" + aria-labelledby pointing to the heading), and consider aria-live="polite" so its appearance is announced.

#### 🔵 LOW — Disabled/loading opacity is inconsistent across field components

Disabled state opacity differs by component: Button loading uses opacity-75 (Button.tsx:40), the shared `.btn` class uses disabled:opacity-60 (globals.css:117), while InputField and SelectField use opacity-50 (InputField.tsx:113, SelectField.tsx:49). This produces visibly different 'disabled' affordances across the same form, an interaction-state consistency drift.

- `src/components/ui/Button.tsx:40 isLoading && 'opacity-75 cursor-wait'`
- `src/styles/globals.css:117 .btn disabled:opacity-60`
- `src/components/ui/InputField.tsx:113 disabled ? 'opacity-50 cursor-not-allowed'; SelectField.tsx:49 opacity-50`

**→ Fix:** Standardize on a single disabled opacity token (e.g. opacity-60) shared by .btn, Button, InputField, and SelectField.

---

## Methodology

Audit produced by a structured multi-agent workflow: 9 dimension reviewers ran in parallel (tokens/theme, UI primitives, layout & nav, calculator widgets, page composition, typography & prose, color & visual, responsive & mobile, accessibility & interaction), each instructed to read real source via Read/Grep/Glob/Bash and cite concrete `file:line` evidence. A synthesis agent then deduplicated cross-dimension findings, weighted dimensions by user-facing impact, and produced the scorecard, critical issues, roadmap, and quick wins. 10 agents · 0 errors · 222 tool uses.
