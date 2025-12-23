Perfect, thanks for locking the stack – that changes a few assumptions.

We’ll keep the **6 disciplines** framing, but now every spec assumes:

* **Hosting:** Firebase Hosting (+ Functions for SSR)
* **App:** Next.js App Router, React, SSR
* **Styling:** Tailwind CSS
* **Analytics:** GA4
* **Config, not DB:** All formulas, copy blocks, feature flags in code / JSON, no database

Below is an updated **.md spec map by team/role**, so each person knows which docs they own and what to put in them.

---

## 1) Product Lead – “Strategic Spine”

### `README.md`

*Already suggested, but tuned to stack.*

* One-line product pitch & problem statement
* Tech stack section (Firebase Hosting + Functions, Next.js App Router SSR, Tailwind, GA4, config-driven calculators, no DB)
* Links to all other key specs
* v1 vs v2 scope and success metrics

---

### `01_product-vision_2025-2027.md`  *(Visioning + Pattern Recognition)*

* Who we serve (personas) & why this must be 10–20x better than calculatecreator
* Differentiators: entity-first topical coverage, fresher data, better UX, scenario-based answers, Koray-style semantic structure
* v1 “minimum remarkable product”:

  * X core calculators
  * Y pillar guides
  * Glossary & FAQ depth
* v2/v3 evolution (multi-platform, personalised dashboards – even if later)

---

### `02_personas-and-jobs-to-be-done.md`  *(Pattern Recognition)*

* 3–5 core personas
* Jobs-to-be-done mapped to **calculator clusters** & **content clusters**
* What each persona is trying to do on mobile vs desktop
* Success criteria per persona (e.g. “Gets a realistic RPM range in under 30s on first visit”)

---

## 2) SEO / Topical Architect – “Koray Brain”

### `10_topical-map_tiktok-creator-economy.md`  *(Pattern Recognition + Systems Analysis)*

* Core entity & all related entities (Creator Fund, Creativity Program, RPM, CPM, TikTok Shop, LIVE Gifts, etc.)
* Topical clusters & hierarchy (hubs, calculators, glossary, guides)
* Which entities are “must own” in phase 1
* Mapping each cluster to **page types**: `/hub`, `/calculator`, `/glossary/[term]`, `/blog/[slug]`

---

### `11_entity-seo-and-internal-linking-strategy.md`  *(Systems Analysis)*

* Rules for URL patterns and canonicals:

  * Category paths + short SEO paths (`/tiktok-money-calculator`)
* Internal link graph rules:

  * Every calculator links to: hub, 2 related calculators, 1–2 guides, 2–3 glossary nodes
* Schema usage per template (FAQ, Article, Breadcrumb, WebSite, Author)
* Strategy to keep titles/meta updated for “2025 / 2026” without manual chaos

---

### `12_content-roadmap_and-refresh-cadence.md`  *(Mental Agility)*

* Launch content set: list of calculators, guides, glossary entries, FAQs with priorities
* Refresh schedule (monthly for calculators, quarterly for pillars, event-driven for TikTok updates)
* “When TikTok changes X, we change Y docs” mapping

---

## 3) UX / Design Lead – “Systems + Vision + Mental Agility”

### `20_design-system-and-ui-principles.md`

* Tailwind design tokens (colors, spacing, typography, border-radius, shadows)
* Components inventory: layout shell, nav, footer, hero, card, FAQ accordion, input types, result blocks, tables, badges, toasts
* Light/dark mode rules & how config flows into Tailwind classes
* Accessibility requirements (contrast, focus states, keyboard navigation)

---

### `21_calculator-page-ux-spec.md`  *(Structured Problem-Solving)*

* Standard layout for any calculator:

  * Above-the-fold: title + subtitle + quick explainer + form
  * Results block (default “no results yet”, success states, error states)
  * Related tools, glossary, FAQ below the fold
* Form UX: validation, helper text, mobile layout rules, slider vs numeric input guidelines
* Microcopy patterns (what “estimates”, “ranges”, “per 1k views” etc. should look like)
* How to visually surface uncertainty (ranges, badges like “Based on 2025 averages”)

---

### `22_navigation-and-site-structure.md`

* Global nav spec: main items, hover behaviors, category mega-menu
* Mobile nav spec (drawer, sticky CTA to “Find a calculator”)
* Footer information architecture & quick links
* Breadcrumb patterns per template

---

## 4) Frontend / Next.js Engineer – “Structured Problem-Solving + Pattern Recognition”

### `30_nextjs-app-router-structure.md`

* App directory tree (pseudo-code):

  * `app/(public)/` – homepage, blog index, glossary, faq
  * `app/(calculators)/[slug]/page.tsx` – generic calculator template
  * `app/blog/[slug]/page.tsx` – MDX or markdown + meta
  * `app/glossary/[slug]/page.tsx`
* Where we use **SSR vs SSG** vs ISR on Firebase:

  * Calculators SSR via Firebase Functions (for fresh formulas & geo-based defaults)
  * Guides & glossary SSG/ISR
* How config files are loaded (static import of JSON/TS modules, no DB)

---

### `31_calculator-ui-component-spec.md`

* Shared React components:

  * `<CalculatorLayout>`
  * `<CalculatorForm>` with dynamic fields & validation
  * `<ResultPanel>` with slots for primary result, breakdown, disclaimers
  * `<RelatedLinks>`
  * `<FAQSection>`
* Tailwind class patterns for each component
* Example: full Money Calculator page wiring using config (link to `40_calculator-config-spec.md`)

---

### `32_state-management-and-performance.md`

* Strategy for state: simple React state and hooks instead of heavy libraries
* Input debouncing rules, when to recalc (on change vs on “Calculate” click)
* Lazy-loading heavier components, if any (charts later)
* Error handling & fallback UI (e.g., if config file missing)

---

## 5) “Calculator Logic” Engineer (or same FE dev) – “Systems Analysis”

### `40_calculator-config-spec.md`

* Canonical JSON/TS structure for all calculators, e.g.:

  ```ts
  type CalculatorConfig = {
    id: 'tiktok-money';
    category: 'earnings';
    title: string;
    subtitle: string;
    inputs: InputField[];
    formula: 'money_v1';          // points to formula implementation
    resultSchema: ResultSchema;
    disclaimers: string[];
    faqIds: string[];
    relatedCalculatorIds: string[];
  }
  ```
* Where configs live: `/config/calculators/*.ts` (version-controlled)
* How formulas are referenced (`/lib/formulas/*.ts`) and versioned (`money_v1`, `money_v2`)
* How region-specific parameters are stored (e.g. `rateTables/creatorFund.ts`)

---

### `41_formula-implementation-and-tests.md`

* Coding guidelines for formulas (pure functions, no side effects, typed inputs/outputs)
* Mapping from formula IDs to functions
* Unit test approach:

  * Golden datasets for each calculator
  * Edge cases (0 views, insane values, negative numbers)
* How to run tests (npm scripts) and add new calculators safely

---

## 6) Content Team (Writers, Editors) – “Pattern Recognition + Visioning”

### `50_content-style-and-voice-guide.md`

* Voice & tone
* Rules for explaining math in plain English + examples
* How to write FAQs that map 1:1 to real queries and entities
* Internal link guidelines for writers (where to point to calculators, glossary, other guides)

---

### `51_calculator-copy-templates.md`

* Template for **every** calculator page:

  * H1 formula
  * Subtitle pattern
  * Intro paragraph (what it is, who it’s for)
  * “How this calculator works” section structure
  * “What affects your result?” section (list of factors)
  * FAQ pattern (3–6 questions, tied to config IDs used on page)
* Provide 1 fully written example (TikTok Money Calculator) as master reference

---

### `52_pillar-guide-briefs.md`

* Brief templates for major guides, e.g.:

  * “TikTok RPM & CPM in 2025”
  * “Creator Fund vs Creativity Program vs LIVE Gifts”
  * “How Much TikTok Creators Really Make Per View”
* For each: target entities, primary queries, outline, calculators that must be linked, glossary terms to include

---

## 7) Analytics Lead – “Systems Analysis + Mental Agility”

### `60_ga4-implementation-spec.md`

* GA4 property & data stream details
* Event design for calculators:

  * `calculator_view`, `calculator_submit`, `calculator_result`, `calculator_error`
  * Parameters: `calculator_id`, `input_summary_bucket`, `device`, `country` (from client), etc.
* How events are sent in Next.js (client-side only, respect consent banner)
* Reporting views to track: per-calculator usage, step drop-off, organic vs other channel performance

---

### `61_kpi-dashboards-and-reporting-routines.md`

* Core KPIs (traffic, rankings, calculator runs, scroll depth on guides, returning users)
* Dashboard mockups (GA4 / Looker / Data Studio)
* Weekly & monthly reporting cadence and RACI (who reads what)

---

## 8) DevOps / Firebase Person – “Structured Problem-Solving + Political Savvy”

### `70_firebase-hosting-and-ssr-deployment.md`

* Project structure for Firebase Hosting + Functions with Next App Router
* Build pipeline:

  * `next build`
  * integration with `firebase.json` and `firebase deploy`
* Which routes are served via Functions (SSR) vs static hosting
* Caching rules & headers (for calculators vs content)
* Environment variables management (TikTok rate constants, GA4 ID, etc.)

---

### `71_env-config-and-secrets.md`

* List of required env vars (`NEXT_PUBLIC_GA4_ID`, API keys if any, etc.)
* Local dev `.env.local` pattern
* Secrets handling in Firebase (using `firebase functions:config:set` or similar, even if minimal)

---

## How to move forward

1. **Create these `.md` files** in your repo (you don’t have to fill them all at once).
2. Assign each one to the right team member/role.
3. Start with:

   * `README.md`
   * `10_topical-map_tiktok-creator-economy.md`
   * `20_design-system-and-ui-principles.md`
   * `30_nextjs-app-router-structure.md`
   * `40_calculator-config-spec.md`
   * `60_ga4-implementation-spec.md`
   * `70_firebase-hosting-and-ssr-deployment.md`

If you tell me which role you want to start with (e.g. SEO Lead or Frontend), I can fully draft one of their key `.md` files in ready-to-paste form next.
