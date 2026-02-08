# CalculateCreator Design System

> Authoritative reference for all design tokens, typography, colors, spacing, and component patterns used across the CalculateCreator site. All values are sourced directly from `tailwind.config.js` and `src/app/layout.tsx`.

---

## Typography

### Font Families

Three font families are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS custom properties on the `<html>` element.

| Token           | Font               | CSS Variable      | Tailwind Class  | Purpose                                  | Weights Loaded      |
| --------------- | ------------------ | ----------------- | --------------- | ---------------------------------------- | -------------------- |
| **Display**     | Bricolage Grotesque | `--font-display` | `font-display`  | Bold, impactful headings                 | 400, 600, 700, 800  |
| **Body / Sans** | IBM Plex Sans       | `--font-body`    | `font-body` / `font-sans` | Technical but readable body text | 400, 500, 600, 700  |
| **Mono**        | JetBrains Mono      | `--font-mono`    | `font-mono`     | Calculator numbers and data              | 400, 500, 600, 700  |

All fonts use `display: 'swap'` for optimal loading performance. The `<body>` element applies `font-sans` (IBM Plex Sans) as the default.

**Fallback stacks:**
- `font-display` / `font-body` / `font-sans`: `system-ui, sans-serif`
- `font-mono`: `ui-monospace, monospace`

---

### Font Size Scale

15 semantic font-size tokens are defined. Each token bundles `font-size`, `line-height`, `letter-spacing`, and `font-weight` into a single Tailwind utility (e.g., `text-display-xl`).

#### Display Sizes (Headings -- Hero / Section Titles)

| Token          | Size   | Line Height | Letter Spacing | Font Weight | Use Case                        |
| -------------- | ------ | ----------- | -------------- | ----------- | ------------------------------- |
| `display-xl`   | 72px   | 90px        | -0.02em        | 700 (Bold)  | Hero headlines, landing pages   |
| `display-lg`   | 60px   | 72px        | -0.02em        | 700 (Bold)  | Major section headers           |
| `display-md`   | 48px   | 60px        | -0.02em        | 700 (Bold)  | Page titles                     |
| `display-sm`   | 36px   | 44px        | -0.01em        | 700 (Bold)  | Sub-section headers             |

#### Heading Sizes (Content Hierarchy)

| Token          | Size   | Line Height | Letter Spacing | Font Weight      | Use Case                        |
| -------------- | ------ | ----------- | -------------- | ---------------- | ------------------------------- |
| `heading-xl`   | 30px   | 38px        | -0.01em        | 600 (SemiBold)   | H2 content headings             |
| `heading-lg`   | 24px   | 32px        | --             | 600 (SemiBold)   | H3 content headings             |
| `heading-md`   | 20px   | 28px        | --             | 600 (SemiBold)   | H4 content headings             |
| `heading-sm`   | 18px   | 26px        | --             | 600 (SemiBold)   | H5 / card titles                |

#### Body Sizes (Prose / Content)

| Token      | Size   | Line Height | Letter Spacing | Font Weight     | Use Case                        |
| ---------- | ------ | ----------- | -------------- | --------------- | ------------------------------- |
| `body-lg`  | 18px   | 28px        | --             | 400 (Regular)   | Lead paragraphs, intros         |
| `body-md`  | 16px   | 24px        | --             | 400 (Regular)   | Default body text               |
| `body-sm`  | 14px   | 20px        | --             | 400 (Regular)   | Secondary text, captions        |

#### Label Sizes (UI Chrome / Metadata)

| Token       | Size   | Line Height | Letter Spacing | Font Weight     | Use Case                        |
| ----------- | ------ | ----------- | -------------- | --------------- | ------------------------------- |
| `label-lg`  | 14px   | 20px        | --             | 500 (Medium)    | Form labels, buttons            |
| `label-md`  | 12px   | 18px        | --             | 500 (Medium)    | Badges, tags, metadata          |
| `label-sm`  | 11px   | 16px        | --             | 500 (Medium)    | Fine print, disclaimers         |

**Usage example:**
```html
<h1 class="font-display text-display-xl">Hero Headline</h1>
<p class="font-body text-body-md">Body paragraph text.</p>
<span class="font-mono text-label-md">$1,234.56</span>
```

---

## Colors

### Primary Palette (Purple -- TikTok-inspired)

Bold purple-magenta. Used for primary actions, links, and brand emphasis.

| Token           | Hex       | Tailwind Class       | Preview |
| --------------- | --------- | -------------------- | ------- |
| `primary-50`    | `#FAF5FF` | `bg-primary-50`      | Lightest wash / backgrounds |
| `primary-100`   | `#F3E8FF` | `bg-primary-100`     | Hover backgrounds |
| `primary-200`   | `#E9D5FF` | `bg-primary-200`     | Light borders |
| `primary-300`   | `#D8B4FE` | `bg-primary-300`     | Decorative accents |
| `primary-400`   | `#C084FC` | `bg-primary-400`     | Hover states on dark |
| `primary-500`   | `#9333EA` | `bg-primary-500`     | **DEFAULT** -- Primary buttons, links |
| `primary-600`   | `#7C3AED` | `bg-primary-600`     | Hover on primary actions |
| `primary-700`   | `#6D28D9` | `bg-primary-700`     | Active / pressed states |
| `primary-800`   | `#5B21B6` | `bg-primary-800`     | Dark backgrounds |
| `primary-900`   | `#4C1D95` | `bg-primary-900`     | Darkest -- headings on light bg |

`primary` (without a number) resolves to `#9333EA` (same as `primary-500`).

---

### Secondary Palette (Electric Cyan)

Used for secondary actions, informational highlights, and data visualization.

| Token             | Hex       | Tailwind Class         |
| ----------------- | --------- | ---------------------- |
| `secondary-50`    | `#ECFEFF` | `bg-secondary-50`     |
| `secondary-100`   | `#CFFAFE` | `bg-secondary-100`    |
| `secondary-200`   | `#A5F3FC` | `bg-secondary-200`    |
| `secondary-300`   | `#67E8F9` | `bg-secondary-300`    |
| `secondary-400`   | `#22D3EE` | `bg-secondary-400`    |
| `secondary-500`   | `#06B6D4` | `bg-secondary-500`    |
| `secondary-600`   | `#0891B2` | `bg-secondary-600`    |
| `secondary-700`   | `#0E7490` | `bg-secondary-700`    |
| `secondary-800`   | `#155E75` | `bg-secondary-800`    |
| `secondary-900`   | `#164E63` | `bg-secondary-900`    |

`secondary` (without a number) resolves to `#06B6D4` (same as `secondary-500`).

---

### Accent Palette (Hot Pink -- TikTok Vibes)

Used for attention-grabbing CTAs, notifications, and promotional elements.

| Token          | Hex       | Tailwind Class       |
| -------------- | --------- | -------------------- |
| `accent-50`    | `#FFE8ED` | `bg-accent-50`      |
| `accent-100`   | `#FFD1DB` | `bg-accent-100`     |
| `accent-200`   | `#FFA3B7` | `bg-accent-200`     |
| `accent-300`   | `#FF7593` | `bg-accent-300`     |
| `accent-400`   | `#FF476F` | `bg-accent-400`     |
| `accent-500`   | `#FE2C55` | `bg-accent-500`     |
| `accent-600`   | `#EC0B43` | `bg-accent-600`     |
| `accent-700`   | `#C20836` | `bg-accent-700`     |
| `accent-800`   | `#98062B` | `bg-accent-800`     |
| `accent-900`   | `#6E0420` | `bg-accent-900`     |

`accent` (without a number) resolves to `#FE2C55` (same as `accent-500`).

---

### TikTok Brand Colors

Direct brand-color aliases for use in TikTok-specific branding contexts.

| Token            | Hex       | Tailwind Class          | Maps To            |
| ---------------- | --------- | ----------------------- | ------------------- |
| `tiktok-pink`    | `#FE2C55` | `text-tiktok-pink`     | Same as `accent-500` |
| `tiktok-cyan`    | `#06B6D4` | `text-tiktok-cyan`     | Same as `secondary-500` |
| `tiktok-purple`  | `#9333EA` | `text-tiktok-purple`   | Same as `primary-500` |

---

### Neutral Colors

Used for text, borders, backgrounds, and UI chrome.

| Token          | Hex       | Tailwind Class       | Typical Use                  |
| -------------- | --------- | -------------------- | ---------------------------- |
| `neutral-50`   | `#FAFAFA` | `bg-neutral-50`     | Page background              |
| `neutral-100`  | `#F5F5F5` | `bg-neutral-100`    | Card backgrounds             |
| `neutral-200`  | `#E5E5E5` | `border-neutral-200` | Borders, dividers            |
| `neutral-300`  | `#D4D4D4` | `border-neutral-300` | Disabled borders             |
| `neutral-400`  | `#A3A3A3` | `text-neutral-400`   | Placeholder text             |
| `neutral-500`  | `#737373` | `text-neutral-500`   | Secondary text               |
| `neutral-600`  | `#525252` | `text-neutral-600`   | Body text                    |
| `neutral-700`  | `#404040` | `text-neutral-700`   | Emphasized body text         |
| `neutral-800`  | `#262626` | `text-neutral-800`   | Headings                     |
| `neutral-900`  | `#171717` | `text-neutral-900`   | High-contrast text           |

---

### Semantic Colors

Used for feedback states across the UI. Each has `light`, `DEFAULT`, and `dark` variants.

| Category    | Light (bg) | DEFAULT (icon/text) | Dark (text on light) |
| ----------- | ---------- | ------------------- | -------------------- |
| **Success** | `#D1FAE5`  | `#10B981`           | `#065F46`            |
| **Warning** | `#FEF3C7`  | `#F59E0B`           | `#92400E`            |
| **Error**   | `#FEE2E2`  | `#EF4444`           | `#991B1B`            |
| **Info**    | `#DBEAFE`  | `#3B82F6`           | `#1E40AF`            |

**Pattern:** Use `bg-{semantic}-light` for alert backgrounds, `text-{semantic}` for icons, and `text-{semantic}-dark` for readable text on the light background.

```html
<div class="bg-success-light text-success-dark border border-success/20 rounded-lg p-4">
  <span class="text-success">&#10003;</span> Calculation complete!
</div>
```

---

## Spacing

### Standard Scale

Custom spacing values extending Tailwind's default spacing scale.

| Token  | Value    | Pixels | Tailwind Class          | Use Case                        |
| ------ | -------- | ------ | ----------------------- | ------------------------------- |
| `18`   | 4.5rem   | 72px   | `p-18`, `m-18`, `gap-18` | Large section padding           |
| `88`   | 22rem    | 352px  | `w-88`, `h-88`          | Sidebar / aside widths          |
| `128`  | 32rem    | 512px  | `w-128`, `max-w-128`    | Content column max-width        |

All other spacing values use Tailwind's default scale (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96).

### Ad-Specific Spacing

Purpose-built spacing tokens for Google AdSense ad units. These ensure consistent ad placement and content separation.

| Token        | Value  | Tailwind Class        | Purpose                                          |
| ------------ | ------ | --------------------- | ------------------------------------------------ |
| `ad-banner`  | 106px  | `h-ad-banner`         | 728x90 leaderboard ad + 16px padding (top + bottom) |
| `ad-rect`    | 266px  | `w-ad-rect`, `h-ad-rect` | 300x250 medium rectangle ad + 16px padding       |
| `ad-gutter`  | 24px   | `gap-ad-gutter`, `p-ad-gutter` | Gap between ad unit and adjacent content  |

**Usage example:**
```html
<div class="h-ad-banner flex items-center justify-center">
  <!-- 728x90 Leaderboard Ad -->
</div>
<div class="mt-ad-gutter">
  <!-- Content continues -->
</div>
```

---

## Border Radius

| Token   | Value | Tailwind Class  | Use Case                          |
| ------- | ----- | --------------- | --------------------------------- |
| `sm`    | 4px   | `rounded-sm`    | Badges, tags, small chips         |
| `md`    | 8px   | `rounded-md`    | Buttons, form inputs              |
| `lg`    | 12px  | `rounded-lg`    | Cards, content panels             |
| `xl`    | 16px  | `rounded-xl`    | Modal dialogs, featured cards     |
| `2xl`   | 24px  | `rounded-2xl`   | Hero sections, large containers   |

---

## Shadows

| Token         | Value                                                                          | Tailwind Class   | Use Case                          |
| ------------- | ------------------------------------------------------------------------------ | ---------------- | --------------------------------- |
| `sm`          | `0 1px 2px 0 rgba(0,0,0,0.05)`                                                | `shadow-sm`      | Subtle elevation, form inputs     |
| `md`          | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`            | `shadow-md`      | Buttons, dropdowns                |
| `lg`          | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`          | `shadow-lg`      | Cards, popovers                   |
| `xl`          | `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`        | `shadow-xl`      | Modals, featured sections         |
| `card`        | `0 4px 12px rgba(0,0,0,0.08)`                                                  | `shadow-card`    | Default card resting state        |
| `card-hover`  | `0 8px 24px rgba(0,0,0,0.12)`                                                  | `shadow-card-hover` | Card hover / focus state       |

**Card shadow pattern:**
```html
<div class="shadow-card hover:shadow-card-hover transition-shadow duration-300 rounded-lg p-6">
  <!-- Card content -->
</div>
```

---

## Animations

All animations are defined as Tailwind utilities via `animate-{name}`.

### Entrance Animations (One-shot)

| Token            | Duration | Easing        | Tailwind Class          | Description                                  |
| ---------------- | -------- | ------------- | ----------------------- | -------------------------------------------- |
| `fade-in`        | 0.6s     | ease-in-out   | `animate-fade-in`       | Opacity 0 to 1                               |
| `slide-up`       | 0.5s     | ease-out      | `animate-slide-up`      | Translate Y +30px to 0, with fade            |
| `slide-down`     | 0.5s     | ease-out      | `animate-slide-down`    | Translate Y -30px to 0, with fade            |
| `slide-in-right` | 0.5s     | ease-out      | `animate-slide-in-right`| Translate X +30px to 0, with fade            |
| `scale-in`       | 0.4s     | ease-out      | `animate-scale-in`      | Scale 0.9 to 1, with fade                   |
| `counter-up`     | 1.0s     | ease-out      | `animate-counter-up`    | Translate Y +10px to 0, with fade (for numbers) |

### Looping Animations (Infinite)

| Token             | Duration | Easing                          | Tailwind Class            | Description                                      |
| ----------------- | -------- | ------------------------------- | ------------------------- | ------------------------------------------------ |
| `pulse-slow`      | 3.0s     | cubic-bezier(0.4, 0, 0.6, 1)   | `animate-pulse-slow`      | Gentle opacity pulse (Tailwind's built-in pulse keyframes) |
| `gradient-shift`  | 8.0s     | ease                            | `animate-gradient-shift`  | Background-position cycles 0% to 100% and back   |
| `float`           | 6.0s     | ease-in-out                     | `animate-float`           | Translate Y 0 to -20px and back (hovering effect) |
| `glow-pulse`      | 2.0s     | ease-in-out                     | `animate-glow-pulse`      | Opacity 1 to 0.8 + scale 1 to 1.05 and back     |

### Keyframe Definitions

```css
/* fadeIn */
0%   { opacity: 0 }
100% { opacity: 1 }

/* slideUp */
0%   { transform: translateY(30px); opacity: 0 }
100% { transform: translateY(0);    opacity: 1 }

/* slideDown */
0%   { transform: translateY(-30px); opacity: 0 }
100% { transform: translateY(0);     opacity: 1 }

/* slideInRight */
0%   { transform: translateX(30px); opacity: 0 }
100% { transform: translateX(0);    opacity: 1 }

/* scaleIn */
0%   { transform: scale(0.9); opacity: 0 }
100% { transform: scale(1);   opacity: 1 }

/* gradientShift */
0%, 100% { background-position: 0% 50% }
50%      { background-position: 100% 50% }

/* float */
0%, 100% { transform: translateY(0px) }
50%      { transform: translateY(-20px) }

/* glowPulse */
0%, 100% { opacity: 1;   transform: scale(1) }
50%      { opacity: 0.8; transform: scale(1.05) }

/* counterUp */
0%   { opacity: 0; transform: translateY(10px) }
100% { opacity: 1; transform: translateY(0) }
```

---

## Breakpoints

Custom breakpoints extend Tailwind's default responsive system.

| Token | Width   | Origin           | Use Case                          |
| ----- | ------- | ---------------- | --------------------------------- |
| `xs`  | 475px   | Custom           | Small phones / narrow viewports   |
| `sm`  | 640px   | Tailwind default | Large phones                      |
| `md`  | 768px   | Tailwind default | Tablets (portrait)                |
| `lg`  | 1024px  | Tailwind default | Tablets (landscape) / small desktops |
| `xl`  | 1280px  | Tailwind default | Standard desktops                 |
| `2xl` | 1536px  | Tailwind default | Large desktops                    |
| `3xl` | 1600px  | Custom           | Ultra-wide layouts                |

**Usage:** All breakpoints are mobile-first (`min-width`).

```html
<div class="text-body-sm md:text-body-md xl:text-body-lg">
  Responsive text that grows with viewport width.
</div>
```

---

## Component Patterns

### Card

Primary container component for grouping related content.

**Token usage:** `rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300`

```html
<div class="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6">
  <h3 class="font-display text-heading-lg text-neutral-900">Card Title</h3>
  <p class="font-body text-body-md text-neutral-600 mt-2">Card description text.</p>
</div>
```

---

### Calculator Widget

Interactive client component (`'use client'`) with form inputs and a result display. This is the core interactive element of the site.

**Key design patterns:**
- Uses `font-mono` for numeric inputs and result values
- Primary color for action buttons (`bg-primary-500 hover:bg-primary-600`)
- Results displayed with large display-size text for impact
- Semantic colors for validation states (error, success)
- `animate-counter-up` on result values for a satisfying reveal

```html
<div class="rounded-xl shadow-card p-6 bg-white">
  <!-- Input Section -->
  <label class="font-body text-label-lg text-neutral-700">Follower Count</label>
  <input class="font-mono text-body-md rounded-md border-neutral-200 p-3" type="number" />

  <!-- Action -->
  <button class="bg-primary-500 hover:bg-primary-600 text-white font-body text-label-lg rounded-md px-6 py-3 transition-colors">
    Calculate
  </button>

  <!-- Result -->
  <div class="font-mono text-display-md text-primary-700 animate-counter-up">
    $1,234.56
  </div>
</div>
```

---

### ToolExplanationSection

Server-side rendered (SSR) component using the native `<details open>` element for expandable educational content. No JavaScript required for interactivity.

**Key design patterns:**
- Uses `<details open>` for progressive disclosure (open by default)
- `font-display` for the summary/title
- `font-body` with `text-body-md` for explanation content
- `bg-neutral-50` background to visually separate from main content

```html
<details open class="bg-neutral-50 rounded-lg p-6">
  <summary class="font-display text-heading-md text-neutral-900 cursor-pointer">
    How This Calculator Works
  </summary>
  <div class="mt-4 font-body text-body-md text-neutral-600 space-y-4">
    <p>Explanation of the calculation methodology...</p>
  </div>
</details>
```

---

### MethodologySection

Discloses calculation methodology with expandable sections. Builds trust and supports E-E-A-T signals.

**Key design patterns:**
- Collapsed by default (unlike ToolExplanationSection)
- Uses `<details>` without `open` attribute
- Includes structured data references where applicable
- Typically placed after calculator results

```html
<details class="border border-neutral-200 rounded-lg p-6">
  <summary class="font-display text-heading-sm text-neutral-800 cursor-pointer">
    Methodology & Data Sources
  </summary>
  <div class="mt-4 font-body text-body-sm text-neutral-600 space-y-3">
    <p>Our calculation uses the following formula...</p>
    <p>Data sourced from...</p>
  </div>
</details>
```

---

### FAQSection

Accordion-style FAQ with structured data (JSON-LD) support for rich results in search.

**Key design patterns:**
- Each question uses a `<details>` element for native accordion behavior
- Accompanied by `FAQPage` schema.org structured data
- `font-display` for questions, `font-body` for answers
- Semantic spacing between items

```html
<section>
  <!-- JSON-LD structured data for FAQPage -->
  <script type="application/ld+json">
    { "@context": "https://schema.org", "@type": "FAQPage", ... }
  </script>

  <h2 class="font-display text-heading-xl text-neutral-900 mb-6">
    Frequently Asked Questions
  </h2>

  <details class="border-b border-neutral-200 py-4">
    <summary class="font-display text-heading-sm text-neutral-800 cursor-pointer">
      How accurate is this calculator?
    </summary>
    <p class="mt-3 font-body text-body-md text-neutral-600">
      Answer text here...
    </p>
  </details>
</section>
```

---

### Breadcrumb

Navigation breadcrumb with `schema.org/BreadcrumbList` markup for SEO.

**Key design patterns:**
- Uses `label-md` sizing for compact navigation
- `text-neutral-500` for separators and inactive items
- `text-primary-500` for the current page link
- Accompanied by JSON-LD `BreadcrumbList` structured data
- All internal URLs include trailing slashes (per site convention)

```html
<nav aria-label="Breadcrumb" class="font-body text-label-md">
  <ol class="flex items-center gap-2">
    <li><a href="/" class="text-neutral-500 hover:text-primary-500">Home</a></li>
    <li class="text-neutral-400">/</li>
    <li><a href="/calculators/" class="text-neutral-500 hover:text-primary-500">Calculators</a></li>
    <li class="text-neutral-400">/</li>
    <li class="text-primary-600 font-medium">Money Calculator</li>
  </ol>
</nav>
```

---

### PageAuthorByline

Author attribution component. Displays the author name, optional avatar, and publication/update dates.

**Key design patterns:**
- `text-label-md` for metadata
- `text-neutral-500` for secondary information
- Supports `schema.org/Person` structured data

```html
<div class="flex items-center gap-3 font-body text-label-md text-neutral-500">
  <img src="/images/author.jpg" alt="Author" class="w-8 h-8 rounded-full" />
  <div>
    <span class="text-neutral-700 font-medium">Author Name</span>
    <span class="mx-1">&middot;</span>
    <time datetime="2025-01-15">Jan 15, 2025</time>
  </div>
</div>
```

---

### PageEEAT

E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) trust signals component. Displays credentials and trust indicators to satisfy Google's quality guidelines.

**Key design patterns:**
- Positioned near author byline or at top of content
- Uses `bg-primary-50` or `bg-neutral-50` background for visual distinction
- `text-label-md` for trust signal text
- Icons or badges for credentials
- Links to methodology/data sources

```html
<div class="bg-primary-50 rounded-lg p-4 flex items-start gap-3">
  <span class="text-primary-500 text-heading-sm">&#9670;</span>
  <div class="font-body text-label-md text-neutral-700">
    <p class="font-medium">Reviewed by industry experts</p>
    <p class="text-neutral-500 mt-1">
      Methodology based on publicly available TikTok Creator Fund data.
      <a href="/methodology/" class="text-primary-500 hover:underline">Learn more</a>
    </p>
  </div>
</div>
```

---

## Quick Reference: Token Cheat Sheet

```
Fonts:      font-display | font-body (font-sans) | font-mono
Display:    text-display-xl (72) | -lg (60) | -md (48) | -sm (36)
Headings:   text-heading-xl (30) | -lg (24) | -md (20) | -sm (18)
Body:       text-body-lg (18) | -md (16) | -sm (14)
Labels:     text-label-lg (14) | -md (12) | -sm (11)
Primary:    primary-{50..900}     -- Purple (#9333EA)
Secondary:  secondary-{50..900}   -- Cyan (#06B6D4)
Accent:     accent-{50..900}      -- Hot Pink (#FE2C55)
Neutral:    neutral-{50..900}     -- Grayscale
Semantic:   success | warning | error | info  (-light | DEFAULT | -dark)
Radius:     rounded-sm (4) | -md (8) | -lg (12) | -xl (16) | -2xl (24)
Shadows:    shadow-sm | -md | -lg | -xl | -card | -card-hover
Animate:    animate-fade-in | -slide-up | -slide-down | -slide-in-right
            animate-scale-in | -counter-up | -pulse-slow | -gradient-shift
            animate-float | -glow-pulse
Screens:    xs (475) | sm (640) | md (768) | lg (1024) | xl (1280)
            2xl (1536) | 3xl (1600)
```
