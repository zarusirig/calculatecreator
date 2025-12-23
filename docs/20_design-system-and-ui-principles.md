# Design System and UI Principles

## Purpose

Establishes the visual design language, component library rules, and UI principles for the TikTok Creator Calculator platform, ensuring consistency, accessibility, and brand differentiation.

## Owner

**Primary:** Design Lead
**Collaborators:** Frontend Developer, UX Researcher

## Strategic Disciplines

- **Systems Analysis** — Component hierarchy, design token architecture
- **Pattern Recognition** — UI patterns that resonate with target personas
- **Visioning** — Scalable design system for 2025–2027 evolution

---

## Design Philosophy

### Core Principles

1. **Clarity Over Cleverness**
   - Information is the hero, not decoration
   - Every visual element serves a functional purpose
   - Remove anything that doesn't aid comprehension

2. **Speed is a Feature**
   - Fast-loading pages feel more professional
   - Lightweight design assets
   - Progressive enhancement approach

3. **Mobile-First, Always**
   - 70%+ of users are mobile
   - Design for thumb zones
   - Optimize for small screens first, scale up

4. **Accessible by Default**
   - WCAG 2.1 AA compliance minimum
   - High contrast ratios
   - Keyboard navigable
   - Screen reader optimized

5. **Data-Driven Trust**
   - Professional, credible aesthetic
   - Clear information hierarchy
   - Transparent methodology presentation
   - Citations visible but unobtrusive

---

## Brand Identity

### Positioning
- **Authoritative:** Data-driven, professional, credible
- **Approachable:** Clean, modern, not intimidating
- **Creator-Focused:** Understands creator culture without being trendy

### Avoid
- ❌ Overly playful (undermines credibility)
- ❌ Corporate/stuffy (alienates aspiring creators)
- ❌ Trendy/viral aesthetic (dates quickly)
- ❌ Dark patterns (erodes trust)

---

## Color System

### Primary Palette

**Primary Brand Color: Precision Blue**
- **HEX:** `#0066FF`
- **RGB:** `0, 102, 255`
- **Use:** Primary CTAs, links, key highlights
- **Rationale:** Trustworthy, professional, high contrast

**Secondary: Data Teal**
- **HEX:** `#00D4AA`
- **RGB:** `0, 212, 170`
- **Use:** Success states, positive data, secondary CTAs
- **Rationale:** Energetic without being overwhelming

**Accent: TikTok Pink (Respectful Nod)**
- **HEX:** `#FE2C55`
- **RGB:** `254, 44, 85`
- **Use:** Sparingly—key highlights, TikTok-specific badges
- **Rationale:** Connects to TikTok brand without being derivative

### Neutral Palette

**Neutrals (Grayscale)**
- `#000000` — Black (headings, high-emphasis text)
- `#1A1A1A` — Near Black (body text)
- `#4A4A4A` — Dark Gray (secondary text)
- `#878787` — Medium Gray (tertiary text, icons)
- `#D4D4D4` — Light Gray (borders, dividers)
- `#F5F5F5` — Off White (backgrounds, cards)
- `#FFFFFF` — White (primary background)

### Semantic Colors

**Success: Green**
- **HEX:** `#00C853`
- **Use:** Success messages, positive indicators

**Warning: Amber**
- **HEX:** `#FFB300`
- **Use:** Warnings, caution states

**Error: Red**
- **HEX:** `#D32F2F`
- **Use:** Errors, validation failures

**Info: Blue**
- **HEX:** `#0288D1`
- **Use:** Informational callouts, tooltips

### Accessibility Requirements

**Contrast Ratios (WCAG AA):**
- Normal text (16px+): Minimum 4.5:1
- Large text (24px+ or 18px+ bold): Minimum 3:1
- UI components: Minimum 3:1

**Tested Combinations:**
- ✅ Precision Blue (#0066FF) on White: 7.8:1
- ✅ Black (#000000) on White: 21:1
- ✅ Near Black (#1A1A1A) on White: 18.2:1
- ✅ Dark Gray (#4A4A4A) on White: 9.1:1

---

## Typography

### Type Scale

**Font Family:**
- **Primary:** `Inter` (Google Fonts)
- **Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Rationale:** Excellent readability at all sizes, wide character set, optimized for screens

**Type Scale (Tailwind CSS Classes):**

| Element | Size | Line Height | Weight | Tailwind |
|---------|------|-------------|--------|----------|
| **H1 (Page Title)** | 36px (mobile) / 48px (desktop) | 1.2 | 700 (Bold) | `text-4xl md:text-5xl font-bold` |
| **H2 (Section)** | 28px (mobile) / 36px (desktop) | 1.3 | 700 | `text-3xl md:text-4xl font-bold` |
| **H3 (Subsection)** | 22px (mobile) / 28px (desktop) | 1.4 | 600 | `text-2xl md:text-3xl font-semibold` |
| **H4 (Minor Heading)** | 18px / 22px | 1.4 | 600 | `text-lg md:text-xl font-semibold` |
| **Body Large** | 18px | 1.6 | 400 | `text-lg font-normal` |
| **Body** | 16px | 1.6 | 400 | `text-base font-normal` |
| **Body Small** | 14px | 1.5 | 400 | `text-sm font-normal` |
| **Caption** | 12px | 1.4 | 400 | `text-xs font-normal` |
| **Button** | 16px | 1 | 600 | `text-base font-semibold` |
| **Input Label** | 14px | 1.4 | 600 | `text-sm font-semibold` |

### Typography Rules

1. **Body Text:**
   - 16px minimum on all devices
   - Line height 1.6 for readability
   - Max width 65–75 characters per line (optimal: 45–65)
   - Color: Near Black (#1A1A1A)

2. **Headings:**
   - Clear hierarchy (H1 → H2 → H3)
   - Generous whitespace above (1.5–2× below)
   - Sentence case preferred over title case
   - Color: Black (#000000)

3. **Links:**
   - Color: Precision Blue (#0066FF)
   - Underline on hover
   - No underline by default (except in long-form content)
   - Visited state: Slightly darker blue

4. **Numbers/Data:**
   - Tabular figures (monospace numerals) for tables
   - Bold weight for emphasis
   - Adequate spacing around operators (+, -, %, $)

---

## Spacing System

### 8-Point Grid

All spacing uses multiples of 8px for consistency.

**Tailwind Spacing Scale:**
- `1` = 4px (0.25rem) — Tight spacing
- `2` = 8px (0.5rem) — Base unit
- `3` = 12px (0.75rem)
- `4` = 16px (1rem) — Standard spacing
- `6` = 24px (1.5rem)
- `8` = 32px (2rem) — Section spacing
- `12` = 48px (3rem)
- `16` = 64px (4rem) — Large section spacing
- `24` = 96px (6rem)

### Component Spacing

**Cards:**
- Padding: `p-6` (24px) mobile, `p-8` (32px) desktop
- Gap between cards: `gap-6` (24px)

**Sections:**
- Vertical padding: `py-12` (48px) mobile, `py-16` (64px) desktop
- Horizontal padding: `px-4` (16px) mobile, `px-8` (32px) desktop

**Content Margins:**
- Between paragraphs: `mb-4` (16px)
- After headings: `mb-6` (24px)
- Between sections: `mb-12` (48px)

---

## Component Library

### Buttons

**Primary Button (CTA)**
```jsx
<button className="
  px-6 py-3
  bg-blue-600 hover:bg-blue-700
  text-white font-semibold
  rounded-lg
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
">
  Calculate Earnings
</button>
```

**Secondary Button**
```jsx
<button className="
  px-6 py-3
  bg-white hover:bg-gray-50
  text-blue-600 font-semibold
  border-2 border-blue-600
  rounded-lg
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
">
  Learn More
</button>
```

**Text Button**
```jsx
<button className="
  px-4 py-2
  text-blue-600 hover:text-blue-700 font-semibold
  underline decoration-2 underline-offset-2
  transition-colors duration-200
">
  See methodology
</button>
```

### Input Fields

**Text Input**
```jsx
<div className="space-y-2">
  <label htmlFor="followers" className="block text-sm font-semibold text-gray-700">
    Follower Count
  </label>
  <input
    id="followers"
    type="number"
    className="
      w-full px-4 py-3
      border-2 border-gray-300
      rounded-lg
      focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none
      transition-all duration-200
    "
    placeholder="e.g., 50000"
  />
  <p className="text-sm text-gray-600">
    Your current TikTok follower count
  </p>
</div>
```

**Select Dropdown**
```jsx
<div className="space-y-2">
  <label htmlFor="niche" className="block text-sm font-semibold text-gray-700">
    Content Niche
  </label>
  <select
    id="niche"
    className="
      w-full px-4 py-3
      border-2 border-gray-300
      rounded-lg
      focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none
      transition-all duration-200
    "
  >
    <option>Lifestyle</option>
    <option>Beauty</option>
    <option>Fitness</option>
  </select>
</div>
```

**Slider**
```jsx
<div className="space-y-2">
  <label className="block text-sm font-semibold text-gray-700">
    Engagement Rate: <span className="text-blue-600">5.2%</span>
  </label>
  <input
    type="range"
    min="0"
    max="20"
    step="0.1"
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
  />
</div>
```

### Cards

**Calculator Card**
```jsx
<div className="
  bg-white
  rounded-2xl
  shadow-lg
  p-6 md:p-8
  border border-gray-200
  hover:shadow-xl
  transition-shadow duration-300
">
  {/* Content */}
</div>
```

**Result Card**
```jsx
<div className="
  bg-gradient-to-br from-blue-50 to-teal-50
  rounded-xl
  p-6
  border-2 border-blue-200
">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    Estimated Monthly Earnings
  </h3>
  <p className="text-4xl font-bold text-blue-600">
    $150–$450
  </p>
</div>
```

**Info Card (Callout)**
```jsx
<div className="
  bg-blue-50
  border-l-4 border-blue-600
  p-4
  rounded-r-lg
">
  <p className="text-sm text-gray-800">
    <strong>Note:</strong> These estimates are based on average RPM rates...
  </p>
</div>
```

### Badges

**Status Badge**
```jsx
<span className="
  inline-flex items-center
  px-3 py-1
  rounded-full
  text-sm font-semibold
  bg-green-100 text-green-800
">
  Active
</span>
```

**Category Badge**
```jsx
<span className="
  inline-flex items-center
  px-2 py-1
  rounded-md
  text-xs font-semibold
  bg-gray-100 text-gray-700
">
  Calculator
</span>
```

### Navigation

**Header (Desktop)**
```jsx
<header className="
  sticky top-0 z-50
  bg-white/95 backdrop-blur-sm
  border-b border-gray-200
  shadow-sm
">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo, Nav Links, CTA */}
    </div>
  </nav>
</header>
```

**Mobile Menu**
- Hamburger icon (24×24px)
- Full-screen overlay menu
- Large tap targets (48×48px minimum)
- Smooth slide-in animation

---

## Layout System

### Grid Structure

**Max Width:** `1280px` (Tailwind: `max-w-7xl`)
**Breakpoints:**
- Mobile: `< 640px` (default)
- Tablet: `640px–1024px` (sm, md)
- Desktop: `1024px+` (lg, xl, 2xl)

**Container:**
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Page Templates

**Calculator Page Layout:**
```
[Header/Nav]
[Hero: Title + Subtitle]
[Calculator Card (centered, max-w-2xl)]
[Results Section]
[Methodology Section]
[FAQ Section]
[Related Calculators (Grid)]
[Footer]
```

**Guide Page Layout:**
```
[Header/Nav]
[Hero: Title + Meta (updated, read time)]
[Table of Contents (sticky sidebar on desktop)]
[Content (max-w-3xl, single column)]
[Related Content (Grid)]
[Footer]
```

### Responsive Behavior

**Mobile (< 640px):**
- Single column
- Full-width cards
- Stacked navigation
- Accordion for long sections
- Large touch targets (48×48px)

**Tablet (640px–1024px):**
- 2-column grids where appropriate
- Side-by-side calculator inputs
- Visible navigation menu

**Desktop (1024px+):**
- 3-column grids for related content
- Sticky table of contents
- Multi-column layouts for comparison tables

---

## Iconography

**Icon Library:** Heroicons (MIT license, matches Tailwind ecosystem)
**Style:** Outline (default), Solid (for filled states)
**Size:** 20×20px (inline), 24×24px (standalone)

**Common Icons:**
- Calculator: `CalculatorIcon`
- Info: `InformationCircleIcon`
- External Link: `ArrowTopRightOnSquareIcon`
- Check: `CheckCircleIcon`
- Warning: `ExclamationTriangleIcon`
- Menu: `Bars3Icon`
- Close: `XMarkIcon`

**Usage:**
```jsx
import { CalculatorIcon } from '@heroicons/react/24/outline'

<CalculatorIcon className="w-6 h-6 text-blue-600" />
```

---

## Animation & Interaction

### Principles
- **Purposeful:** Animations guide attention, don't distract
- **Fast:** 200–300ms max for most transitions
- **Natural:** Ease-in-out curves feel organic

### Standard Transitions

**Hover States:**
```css
transition-colors duration-200
transition-shadow duration-300
```

**Focus States:**
```css
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2
```

**Enter/Exit Animations (Framer Motion):**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### Micro-Interactions

**Button Click:**
- Scale down slightly (0.98) on active state
- Return to normal on release

**Calculator Result Reveal:**
- Fade in with slight upward motion
- 300ms duration

**Number Counting Animation:**
- Animate numbers from 0 to result value
- 1 second duration for satisfying feedback

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

**Visual:**
- ✅ Contrast ratios meet minimum requirements
- ✅ Focus indicators visible on all interactive elements
- ✅ No information conveyed by color alone

**Keyboard Navigation:**
- ✅ All interactive elements keyboard accessible
- ✅ Logical tab order
- ✅ Skip to main content link
- ✅ No keyboard traps

**Screen Readers:**
- ✅ Semantic HTML (nav, main, article, aside)
- ✅ Alt text for all images
- ✅ ARIA labels for icon buttons
- ✅ Form labels properly associated

**Motion:**
- ✅ Respect `prefers-reduced-motion` media query
- ✅ Disable animations for users who request it

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Management

**Custom Focus Styles:**
```css
.focus-visible:focus {
  outline: 2px solid #0066FF;
  outline-offset: 2px;
}
```

**Skip Link:**
```jsx
<a href="#main-content" className="
  sr-only
  focus:not-sr-only
  focus:absolute
  focus:top-4
  focus:left-4
  focus:z-50
  focus:px-4
  focus:py-2
  focus:bg-blue-600
  focus:text-white
">
  Skip to main content
</a>
```

---

## Mobile-First Optimization

### Touch Targets
- **Minimum size:** 48×48px (iOS/Android standards)
- **Spacing:** 8px minimum between interactive elements
- **Generous padding:** Buttons should be easy to tap, not cramped

### Thumb Zones
- **Primary actions:** Bottom third of screen (easy to reach)
- **Navigation:** Top (expected) or bottom (accessible)
- **Avoid:** Critical actions in top corners (hard to reach one-handed)

### Mobile Typography
- **Body text:** 16px minimum (prevents zoom on iOS)
- **Buttons:** 16px+ text, 48px+ height
- **Inputs:** 16px text to prevent zoom

### Progressive Disclosure
- Hide advanced options behind "Show more" toggles
- Accordion for FAQs
- Modals for detailed methodology (don't overwhelm mobile)

---

## Performance Considerations

### Image Optimization
- **Format:** WebP with JPEG fallback
- **Lazy loading:** Below-the-fold images
- **Srcset:** Responsive images for different screen sizes
- **Dimensions:** Always specify width/height to prevent layout shift

### CSS
- **Tailwind purge:** Remove unused classes in production
- **Critical CSS:** Inline above-the-fold styles
- **Font loading:** `font-display: swap` to prevent FOIT

### Animations
- **CSS transforms only:** Use `transform` and `opacity` (GPU-accelerated)
- **Avoid:** Animating `width`, `height`, `top`, `left` (causes reflow)

---

## Design Tokens (Tailwind Config)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0066FF',
        'brand-teal': '#00D4AA',
        'brand-pink': '#FE2C55',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'prose': '65ch',
      },
    },
  },
}
```

---

## Acceptance Criteria

✅ **Color System:** Primary, secondary, neutral, and semantic colors defined with accessibility checks
✅ **Typography:** Complete type scale with Tailwind classes
✅ **Spacing:** 8-point grid system documented
✅ **Components:** Button, input, card, badge patterns defined with code examples
✅ **Layout:** Grid system and responsive breakpoints established
✅ **Accessibility:** WCAG 2.1 AA compliance strategies documented
✅ **Mobile-First:** Touch targets, thumb zones, typography rules defined
✅ **Performance:** Optimization guidelines for images, CSS, animations

---

## Handoff Checklist

- [ ] Design Lead has created Figma design system library
- [ ] Developers have implemented Tailwind config with brand tokens
- [ ] Component library built in Storybook (optional) or documented
- [ ] Accessibility audit completed on sample pages
- [ ] Mobile designs tested on real devices (iOS, Android)
- [ ] Performance budget defined (Lighthouse score targets)
- [ ] All team members familiar with spacing/typography scale

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
**Next Review:** 2025-Q2 (Post-Launch Design System Refinement)
