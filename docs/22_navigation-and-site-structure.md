# Navigation and Site Structure

## Purpose

Defines the information architecture, navigation patterns, URL structure, and site hierarchy for the TikTok Creator Calculator platform.

## Owner

**Primary:** Design Lead
**Collaborators:** SEO Strategist, Frontend Developer, UX Researcher

## Strategic Disciplines

- **Systems Analysis** — Site hierarchy, information architecture, navigation flow
- **Pattern Recognition** — User mental models, navigation conventions
- **Structured Problem-Solving** — Wayfinding, discoverability, conversion paths

---

## Site Structure Overview

### Information Architecture (Sitemap)

```
Home
│
├── Calculators
│   ├── TikTok Creator Fund Calculator
│   ├── TikTok Engagement Rate Calculator
│   ├── TikTok Brand Deal Rate Calculator
│   ├── TikTok LIVE Gifts Calculator
│   ├── TikTok Shop Commission Calculator
│   ├── TikTok RPM Calculator
│   ├── TikTok Follower Growth Calculator
│   └── [15+ calculators by V2]
│
├── Guides
│   ├── How to Make Money on TikTok (Hub)
│   ├── TikTok Creator Fund Guide (Hub)
│   ├── TikTok Brand Deals Guide (Hub)
│   ├── TikTok LIVE Monetization Guide (Hub)
│   ├── TikTok Shop for Creators (Hub)
│   ├── TikTok Engagement Rate Guide
│   ├── TikTok Growth Strategies
│   └── [50+ guides by V2]
│
├── Compare
│   ├── TikTok vs YouTube Earnings
│   ├── TikTok vs Instagram Reels
│   ├── Creator Fund vs Brand Deals
│   └── [8+ comparisons by V2]
│
├── Data
│   ├── TikTok RPM by Niche
│   ├── Brand Deal Rates 2025
│   ├── Average Engagement Rates
│   └── [10+ data pages by V2]
│
├── About
│   ├── About Us
│   ├── Methodology
│   └── Contact
│
└── Resources
    ├── Blog (future)
    └── Creator Tools (future)
```

---

## URL Structure

### Pattern Rationale

**Format:** `/{category}/{page-slug}/`

**Benefits:**
- SEO-friendly (descriptive keywords in URL)
- Scalable (easy to add new categories)
- Logical (users understand hierarchy)
- Clean (no query parameters, no file extensions)

### URL Examples

**Calculators:**
- `/calculators/tiktok-creator-fund/`
- `/calculators/tiktok-engagement-rate/`
- `/calculators/brand-deal-rate/`

**Guides:**
- `/guides/tiktok-creator-fund/`
- `/guides/tiktok-brand-deals/`
- `/guides/how-to-make-money-on-tiktok/`

**Comparison:**
- `/compare/tiktok-vs-youtube-earnings/`
- `/compare/creator-fund-vs-brand-deals/`

**Data:**
- `/data/tiktok-rpm-by-niche/`
- `/data/brand-deal-rates-2025/`

**Utility:**
- `/about/`
- `/about/methodology/`
- `/contact/`

### URL Guidelines

✅ **Do:**
- Use lowercase
- Use hyphens for word separation
- Keep under 60 characters when possible
- Include target keyword
- End with trailing slash

❌ **Don't:**
- Use underscores
- Use spaces or special characters
- Use dates unless necessary (e.g., data pages)
- Use file extensions (.html, .php)
- Use query parameters for main navigation

---

## Primary Navigation (Header)

### Desktop Navigation

**Layout:** Horizontal menu bar, left-aligned logo, right-aligned CTA

```
┌─────────────────────────────────────────────────────────┐
│ [Logo]  Calculators▾  Guides▾  Compare  Data  [CTA]    │
└─────────────────────────────────────────────────────────┘
```

**Components:**
1. **Logo** (Left)
   - Links to homepage
   - Text: "TikTok Creator Calculator" or "TTCC" (compact)
   - Icon optional (calculator symbol)

2. **Main Menu Items** (Center-Left)
   - Calculators (dropdown)
   - Guides (dropdown)
   - Compare (link)
   - Data (link)

3. **CTA Button** (Right)
   - "Start Calculating" or "Free Calculator"
   - Links to most popular calculator (Creator Fund)
   - Primary button style

**Dropdown Menus:**

**Calculators Dropdown:**
```
Earnings Calculators
├── Creator Fund Calculator
├── Brand Deal Rate Calculator
├── LIVE Gifts Calculator
└── Shop Commission Calculator

Performance Calculators
├── Engagement Rate Calculator
├── RPM Calculator
└── Follower Growth Calculator

→ View All Calculators
```

**Guides Dropdown:**
```
Getting Started
├── How to Make Money on TikTok
└── TikTok Monetization Requirements

By Type
├── Creator Fund Guide
├── Brand Deals Guide
├── LIVE Monetization Guide
└── TikTok Shop Guide

Growth & Strategy
├── TikTok Growth Strategies
└── Engagement Rate Guide

→ View All Guides
```

### Mobile Navigation

**Hamburger Menu** (Icon: Three horizontal lines, 24×24px)

**Menu Structure:**
```
┌─────────────────────────┐
│ [Logo]          [☰]     │ [Sticky Header]
└─────────────────────────┘

[Menu Open - Full Screen Overlay]
┌─────────────────────────┐
│ [×] Close               │
├─────────────────────────┤
│ Home                    │
│ Calculators        [>]  │
│ Guides             [>]  │
│ Compare                 │
│ Data                    │
│ About                   │
├─────────────────────────┤
│ [Start Calculating]     │ [CTA Button]
└─────────────────────────┘
```

**Behavior:**
- Tap hamburger → Full-screen menu slides in from right
- Tap item with [>] → Expand to show submenu
- Tap [×] or backdrop → Close menu
- Smooth animations (300ms)

---

## Secondary Navigation

### Breadcrumbs

**Purpose:** Help users understand location, provide quick navigation up hierarchy

**Placement:** Top of page, below header, above H1

**Format:**
```
Home > Calculators > TikTok Creator Fund Calculator
```

**Styling:**
- Small text (14px)
- Gray color (#6B7280)
- Separators: ">" or "/"
- Current page: Bold, not linked
- Previous pages: Linked, hover underline

**Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### In-Page Navigation (Table of Contents)

**When to Use:** Pages 2,000+ words (comprehensive guides)

**Placement:**
- **Desktop:** Sticky sidebar (left or right)
- **Mobile:** Accordion at top of content

**Format:**
```
Table of Contents
├── Introduction
├── How Creator Fund Works
├── Eligibility Requirements
├── How Much You Can Earn
│   ├── Average Earnings by Tier
│   └── Factors Affecting Earnings
├── How to Join
└── FAQs
```

**Behavior:**
- Click → Smooth scroll to section
- Active section highlighted (blue)
- Sticky on scroll (desktop)

### Footer Navigation

**Structure:** Multi-column layout (desktop) / Stacked (mobile)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│ Calculators     Guides         Resources    Company   │
│ • Creator Fund  • Monetization • Blog       • About   │
│ • Brand Deals   • Growth       • Tools      • Contact │
│ • LIVE Gifts    • Engagement   • Data       • Privacy │
│ • Engagement    • Niches                    • Terms   │
│                                                        │
│ [Social Icons]                                         │
│                                                        │
│ © 2025 TikTok Creator Calculator                      │
│ Last Updated: Nov 13, 2025                            │
└────────────────────────────────────────────────────────┘
```

**Footer Sections:**
1. **Calculators** — Top 4–6 calculators
2. **Guides** — Top 4–6 guides
3. **Resources** — Blog, tools, data pages
4. **Company** — About, contact, legal
5. **Social** — Twitter, LinkedIn (if applicable)
6. **Copyright** — Year, brand name, last updated

---

## Navigation Patterns by Page Type

### Homepage Navigation Goals
1. **Discover calculators** (primary action)
2. **Explore guides** (secondary action)
3. **Understand value** (scroll to learn more)

**Homepage Layout:**
```
[Header/Nav]
[Hero: Value Prop + Primary CTA]
[Calculator Grid: 8 Featured Calculators]
[Guide Grid: 3 Pillar Guides]
[Social Proof / Stats]
[Secondary CTA]
[Footer]
```

### Calculator Page Navigation Goals
1. **Calculate** (primary action)
2. **Understand methodology** (build trust)
3. **Explore related calculators** (increase engagement)

**Calculator Page Exit Links:**
- Related calculators (3–6 cards)
- Related guides (2–3 links in results section)
- Homepage (breadcrumb, logo)

### Guide Page Navigation Goals
1. **Read content** (primary action)
2. **Use related calculator** (conversion)
3. **Explore related topics** (depth)

**Guide Page Exit Links:**
- Table of contents (internal navigation)
- Inline links to calculators (3–5 per page)
- Related guides (3–6 cards at bottom)
- Breadcrumb navigation

---

## Search Functionality

### V1: No On-Site Search
**Rationale:**
- Limited content at launch (20 pages)
- Navigation menus sufficient
- SEO is primary discovery mechanism

### V2: Add Search (Q3 2025)
**Trigger:** 50+ pages published

**Implementation:**
- Search icon in header (desktop + mobile)
- Instant search (as-you-type suggestions)
- Search results page (if needed)
- Powered by: Algolia or custom Next.js API route

**Search Features:**
- Calculator names
- Guide titles
- Keywords within content
- Fuzzy matching (typo tolerance)

---

## Mobile Navigation Considerations

### Thumb Zones
- **Easy to reach:** Bottom 40% of screen, center
- **Hard to reach:** Top corners, very top

**Implication:** Place primary navigation (hamburger) in top left or right (expected), but place sticky CTAs at bottom on long pages

### Sticky Elements
- **Header:** Always sticky (small, 56px height)
- **Calculate Button:** Sticky at bottom on calculator pages (mobile only)
- **Scroll-to-Top:** Appears after scrolling 2 viewports

### Mobile Menu Behavior
- Full-screen overlay (not slide-out drawer) for better focus
- Large tap targets (48×48px minimum)
- Clear close button (X icon, top right)
- No nested dropdowns >2 levels deep

---

## Accessibility in Navigation

### Keyboard Navigation
- **Tab:** Move through links sequentially
- **Shift+Tab:** Move backward
- **Enter:** Activate link/button
- **Escape:** Close dropdowns/modals
- **Arrow Keys:** Navigate within dropdowns

### Screen Readers
- **Skip Link:** "Skip to main content" at top of page
- **Landmark Roles:** `<nav>`, `<main>`, `<footer>`
- **ARIA Labels:** "Main navigation", "Breadcrumb", "Footer navigation"
- **Current Page:** `aria-current="page"` on active nav item

### Visual Indicators
- **Focus Visible:** Blue outline on keyboard focus
- **Active State:** Underline or background color on current page
- **Hover State:** Underline or color change on hover

---

## SEO Considerations

### Internal Linking from Navigation
- Navigation links pass PageRank
- Important pages should be <3 clicks from homepage
- Use descriptive anchor text (not "click here")

### Navigation Link Budget
- Keep main nav to 5–7 items (avoid overwhelming users)
- Dropdowns can have 8–12 items max
- Footer can be more comprehensive (20–30 links)

### Structured Data
- Use BreadcrumbList schema on all pages
- Use SiteNavigationElement schema for main nav (optional)

---

## Related Content Modules

### "Related Calculators" Card Grid

**Placement:** Bottom of calculator pages, above footer

**Logic:**
- Show 3–6 related calculators
- Algorithm: Same category (earnings, performance) → Most popular → Recently added

**Example: On Creator Fund Calculator**
- Engagement Rate Calculator (same context)
- RPM Calculator (related metric)
- Brand Deal Calculator (alternative monetization)

### "Read Next" Guide Links

**Placement:** Bottom of guide pages

**Logic:**
- Same topic cluster → Sequential learning path → Most popular

**Example: On Creator Fund Guide**
- How to Join Creator Fund (next step)
- How to Increase Creator Fund Earnings (optimization)
- Brand Deals Guide (alternative)

---

## 404 Error Page

**Purpose:** Help lost users find their way

**Components:**
1. **Message:** "Page Not Found" (clear, friendly)
2. **Explanation:** "The page you're looking for doesn't exist or has moved."
3. **Search Box:** (V2 feature)
4. **Top Pages:** Links to homepage, top 3 calculators, top 3 guides
5. **Contact:** Link to report broken link

**Tone:** Helpful, not blaming user

---

## Sitemap (XML)

**Purpose:** Help search engines discover all pages

**Generation:** Automatic via Next.js (sitemap.xml in public folder or API route)

**Inclusions:**
- All calculators
- All guides
- All comparison pages
- All data pages
- About pages

**Exclusions:**
- Admin pages
- Draft/staging content
- Duplicate content

**Update Frequency:**
- Regenerate on every deploy
- Submit to Google Search Console after major content adds

---

## Analytics for Navigation

### Track Navigation Interactions
1. **Main Nav Clicks:** Which menu items are most used?
2. **Dropdown Hovers:** Do users discover dropdown content?
3. **Breadcrumb Clicks:** Do users navigate up the hierarchy?
4. **Related Content Clicks:** Which related calculators drive engagement?
5. **Footer Link Clicks:** Are footer links used?

**GA4 Events:**
```js
gtag('event', 'navigation_click', {
  location: 'header', // header, footer, breadcrumb, related
  link_text: 'Brand Deal Calculator',
  link_url: '/calculators/brand-deal-rate/'
})
```

---

## A/B Testing Opportunities (Post-Launch)

1. **Main Nav Structure:** Calculators first vs Guides first
2. **CTA Button Text:** "Start Calculating" vs "Free Calculator" vs "Calculate Now"
3. **Related Content:** 3 items vs 6 items
4. **Breadcrumb Style:** ">>" vs "/" separator, with/without home icon
5. **Mobile Menu:** Hamburger top-left vs top-right

---

## Acceptance Criteria

✅ **Site Structure:** Complete sitemap with 3-level hierarchy defined
✅ **URL Patterns:** Consistent, SEO-friendly URL structure documented
✅ **Primary Nav:** Desktop and mobile navigation designs complete
✅ **Secondary Nav:** Breadcrumbs, TOC, footer navigation specified
✅ **Accessibility:** Keyboard navigation and screen reader support defined
✅ **SEO:** Internal linking strategy and structured data requirements documented
✅ **Mobile:** Thumb-zone optimized, sticky elements specified

---

## Handoff Checklist

- [ ] Design Lead has created navigation mockups (desktop + mobile)
- [ ] Developers understand URL routing structure (Next.js App Router)
- [ ] Dropdown menu behavior prototyped (hover vs click, mobile accordion)
- [ ] Breadcrumb component built with schema markup
- [ ] Footer sections finalized with link lists
- [ ] 404 page designed and developed
- [ ] Sitemap.xml generation automated
- [ ] Analytics events configured for navigation tracking

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
**Next Review:** 2025-Q2 (Post-Launch Navigation Analytics Review)
