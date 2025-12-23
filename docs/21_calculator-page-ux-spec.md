# Calculator Page UX Spec

## Purpose

Defines the user experience, layout, interaction patterns, and page structure for all calculator pages on the TikTok Creator Calculator platform.

## Owner

**Primary:** Design Lead
**Collaborators:** UX Researcher, Frontend Developer, Product Manager

## Strategic Disciplines

- **Pattern Recognition** — Successful calculator UX patterns, user behavior flows
- **Systems Analysis** — Page component hierarchy, interaction states
- **Structured Problem-Solving** — Optimizing for conversion (calculation → engagement → exploration)

---

## Calculator Page Objectives

1. **Speed:** User can calculate in <60 seconds from page load
2. **Clarity:** Inputs are self-explanatory, results are interpretable
3. **Trust:** Methodology is transparent, results feel credible
4. **Engagement:** User explores related content after calculating
5. **SEO:** Page ranks for target keyword (title, content, structure)

---

## Page Anatomy

### Standard Calculator Page Structure

```
┌─────────────────────────────────────┐
│ Header/Navigation                    │ [Sticky]
├─────────────────────────────────────┤
│ Hero Section                         │
│  - H1 Title                          │
│  - Subtitle/Value Proposition        │
│  - Breadcrumb                        │
├─────────────────────────────────────┤
│ Calculator Card                      │ [Primary Focus]
│  - Input Fields                      │
│  - Calculate Button                  │
│  - Results Display                   │
├─────────────────────────────────────┤
│ Methodology Section                  │
│  - "How We Calculate This"           │
│  - Formula Breakdown                 │
│  - Data Sources                      │
├─────────────────────────────────────┤
│ Contextual Content                   │
│  - "Understanding Your Results"      │
│  - Benchmarks/Comparisons            │
│  - Tips to Improve                   │
├─────────────────────────────────────┤
│ FAQ Section                          │
│  - Common Questions                  │
│  - People Also Ask Queries           │
├─────────────────────────────────────┤
│ Related Calculators                  │
│  - 3–6 Related Tools (Cards)         │
├─────────────────────────────────────┤
│ Footer                               │
└─────────────────────────────────────┘
```

---

## Section Specifications

### 1. Hero Section

**Purpose:** Set context, reassure user they're in the right place

**Components:**
- **H1 Title:** Calculator name (matches page title tag)
- **Subtitle:** One-sentence value prop (what you'll learn/calculate)
- **Breadcrumb:** Home > Calculators > [Calculator Name]
- **Meta info:** Last updated date (builds trust)

**Example:**
```jsx
<section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
  <div className="max-w-4xl mx-auto px-4">
    {/* Breadcrumb */}
    <nav className="text-sm text-gray-600 mb-4">
      <a href="/" className="hover:text-blue-600">Home</a>
      <span className="mx-2">/</span>
      <a href="/calculators" className="hover:text-blue-600">Calculators</a>
      <span className="mx-2">/</span>
      <span className="text-gray-900">TikTok Creator Fund Calculator</span>
    </nav>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      TikTok Creator Fund Calculator
    </h1>

    {/* Subtitle */}
    <p className="text-lg md:text-xl text-gray-700 mb-2">
      Estimate your monthly earnings from the TikTok Creator Fund based on your views and engagement.
    </p>

    {/* Meta */}
    <p className="text-sm text-gray-600">
      Last updated: November 13, 2025 • Free tool, no signup required
    </p>
  </div>
</section>
```

**Mobile Behavior:**
- Stack all elements vertically
- Reduce title size (4xl → 3xl)
- Maintain readability (16px+ body text)

---

### 2. Calculator Card (Primary Interaction)

**Purpose:** Collect inputs, perform calculation, display results

**Layout: Two-Column (Desktop) / Stacked (Mobile)**

```
┌────────────────────────┬────────────────────────┐
│  Inputs (Left)         │  Results (Right)       │
│  - Field 1             │  - Earnings Estimate   │
│  - Field 2             │  - Range              │
│  - Field 3             │  - Interpretation     │
│  - Calculate Button    │  - Next Steps         │
└────────────────────────┴────────────────────────┘
```

**Input Section Specs:**

**Field Types:**
1. **Number Input** (e.g., follower count, views)
2. **Slider** (e.g., engagement rate %)
3. **Dropdown** (e.g., content niche)
4. **Checkbox** (e.g., account features)

**Field Anatomy:**
- **Label:** Bold, 14px, descriptive
- **Input:** Large (48px height minimum), clear borders
- **Helper Text:** Gray, 12–14px, below input
- **Tooltip:** Info icon (?) with hover/click explanation
- **Error State:** Red border + error message

**Example Input:**
```jsx
<div className="space-y-2">
  <label htmlFor="followers" className="flex items-center gap-2 text-sm font-semibold text-gray-900">
    Follower Count
    <button
      type="button"
      className="text-gray-400 hover:text-gray-600"
      aria-label="More information"
    >
      <InformationCircleIcon className="w-5 h-5" />
    </button>
  </label>

  <input
    id="followers"
    type="number"
    min="1000"
    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
    placeholder="e.g., 50000"
  />

  <p className="text-sm text-gray-600">
    Your total TikTok followers (minimum 10,000 for Creator Fund)
  </p>
</div>
```

**Calculate Button:**
- **Position:** Bottom of input section OR floating at bottom on mobile
- **Size:** Full-width on mobile, prominent on desktop
- **Style:** Primary button (brand blue, bold text)
- **Loading State:** Show spinner, disable button during calculation
- **Keyboard:** Trigger on Enter key press

```jsx
<button
  type="button"
  onClick={handleCalculate}
  disabled={loading}
  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
>
  {loading ? 'Calculating...' : 'Calculate My Earnings'}
</button>
```

**Results Section Specs:**

**Initial State (Before Calculation):**
- Placeholder content: "Enter your details and click Calculate"
- Light gray background
- Icon/illustration (optional)

**Results Display:**
```jsx
<div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200">
  {/* Primary Result */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Estimated Monthly Earnings
    </h3>
    <p className="text-5xl font-bold text-blue-600 mb-2">
      $150–$450
    </p>
    <p className="text-sm text-gray-700">
      Based on 2M monthly views and 5.2% engagement rate
    </p>
  </div>

  {/* Secondary Metrics */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div>
      <p className="text-sm text-gray-600">Estimated RPM</p>
      <p className="text-xl font-bold text-gray-900">$0.03</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Per 1K Views</p>
      <p className="text-xl font-bold text-gray-900">$0.08–$0.23</p>
    </div>
  </div>

  {/* Interpretation */}
  <div className="bg-white rounded-lg p-4 border border-blue-200">
    <p className="text-sm text-gray-800">
      <strong>Your earnings are above average</strong> for creators in your follower range.
      <a href="#methodology" className="text-blue-600 underline ml-1">
        See how we calculate this
      </a>
    </p>
  </div>

  {/* Next Steps */}
  <div className="mt-4 space-y-2">
    <p className="text-sm font-semibold text-gray-900">Want to earn more?</p>
    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
      <li>Increase engagement rate to 8%+ for higher RPM</li>
      <li>Consider <a href="/calculators/brand-deal-rate" className="text-blue-600 underline">brand deals</a> (5–10× more per video)</li>
      <li>Explore <a href="/guides/tiktok-live" className="text-blue-600 underline">TikTok LIVE</a> for additional income</li>
    </ul>
  </div>
</div>
```

**Result Animation:**
- Fade in with upward motion (300ms)
- Number counting animation (0 → final value, 1s)
- Smooth scroll to results on mobile

---

### 3. Methodology Section

**Purpose:** Build trust through transparency

**Components:**
- **Heading:** "How We Calculate This" or "Our Methodology"
- **Formula:** Clear mathematical representation
- **Assumptions:** Stated explicitly
- **Data Sources:** Cited with links
- **Update Frequency:** When formula was last reviewed

**Example:**
```jsx
<section id="methodology" className="py-12 bg-white">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      How We Calculate Creator Fund Earnings
    </h2>

    <div className="prose prose-lg">
      <h3>Formula</h3>
      <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
        Monthly Earnings = (Monthly Views × RPM) / 1000
        <br/>
        RPM = Base RPM × Engagement Multiplier × Niche Factor
      </div>

      <h3>Assumptions</h3>
      <ul>
        <li><strong>Base RPM:</strong> $0.02–$0.04 per 1,000 views (TikTok's reported range)</li>
        <li><strong>Engagement Multiplier:</strong> Higher engagement (likes, comments, shares) = higher RPM</li>
        <li><strong>Niche Factor:</strong> Finance/Business (1.5×), Beauty/Fashion (1.2×), Lifestyle (1.0×), Comedy (0.9×)</li>
      </ul>

      <h3>Data Sources</h3>
      <ul>
        <li>TikTok Creator Portal official documentation</li>
        <li>Survey of 500+ creators (2024 Q4)</li>
        <li>Industry reports from Influencer Marketing Hub, Social Media Today</li>
      </ul>

      <p className="text-sm text-gray-600">
        <strong>Last Updated:</strong> November 2025 |
        <strong> Next Review:</strong> February 2026
      </p>
    </div>
  </div>
</section>
```

---

### 4. Contextual Content

**Purpose:** Help user understand and act on results

**Sections:**
- **Understanding Your Results:** What the numbers mean
- **Benchmarks:** How you compare to others
- **Tips to Improve:** Actionable next steps
- **Common Mistakes:** What to avoid

**Example:**
```jsx
<section className="py-12 bg-gray-50">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Understanding Your Results
    </h2>

    <div className="space-y-8">
      {/* Benchmarks */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          How Do You Compare?
        </h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Follower Range</th>
              <th className="p-3 text-left">Avg Monthly Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">10K–50K</td>
              <td className="p-3">$50–$150</td>
            </tr>
            <tr className="border-b bg-blue-50">
              <td className="p-3 font-semibold">50K–100K (Your Range)</td>
              <td className="p-3 font-semibold">$150–$450</td>
            </tr>
            <tr>
              <td className="p-3">100K–500K</td>
              <td className="p-3">$500–$2,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          3 Ways to Increase Your Creator Fund Earnings
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          <li>
            <strong>Boost Engagement:</strong> Ask questions, use trending sounds, reply to comments—engagement drives higher RPM.
          </li>
          <li>
            <strong>Post Consistently:</strong> 1–2 videos/day maintains algorithmic favor and accumulates views.
          </li>
          <li>
            <strong>Optimize Watch Time:</strong> Longer videos (60s+) with high retention earn more than short clips.
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>
```

---

### 5. FAQ Section

**Purpose:** Answer common questions, target "People Also Ask" SERP features

**Structure:**
- Accordion format (expand/collapse)
- 6–10 questions
- Brief answers (100–200 words)
- Internal links where relevant

**Example:**
```jsx
<section className="py-12 bg-white">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      <details className="bg-gray-50 rounded-lg p-4 cursor-pointer">
        <summary className="font-semibold text-lg text-gray-900">
          How much does TikTok pay per 1,000 views?
        </summary>
        <p className="mt-3 text-gray-700">
          TikTok Creator Fund pays between $0.02–$0.04 per 1,000 views on average. However, this varies based on engagement rate, content niche, viewer location, and video watch time. High-engagement videos in premium niches (finance, business) can earn closer to $0.06–$0.08 per 1,000 views.
        </p>
      </details>

      {/* More FAQs... */}
    </div>
  </div>
</section>
```

**FAQ Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

---

### 6. Related Calculators

**Purpose:** Drive engagement to other tools, increase session duration

**Layout:** 3-column grid (desktop) / 1-column (mobile)

**Card Components:**
- Icon/image
- Calculator name
- One-sentence description
- "Calculate Now" button

**Example:**
```jsx
<section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">
      Related Calculators
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Calculator Card */}
      <a href="/calculators/engagement-rate" className="group">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <CalculatorIcon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
            Engagement Rate Calculator
          </h3>
          <p className="text-gray-700 mb-4">
            Calculate your TikTok engagement rate and see how you compare to your niche average.
          </p>
          <span className="text-blue-600 font-semibold">
            Calculate Now →
          </span>
        </div>
      </a>

      {/* More cards... */}
    </div>
  </div>
</section>
```

---

## Interaction States

### Input Field States

1. **Default:** Gray border, white background
2. **Focus:** Blue border, blue ring shadow, outline removed
3. **Filled:** Maintains focus styling when contains value
4. **Error:** Red border, red helper text, error icon
5. **Disabled:** Gray background, cursor not-allowed

### Button States

1. **Default:** Blue background, white text
2. **Hover:** Darker blue background
3. **Active (click):** Scale down slightly (0.98)
4. **Loading:** Gray background, spinner icon, disabled
5. **Disabled:** Gray background, gray text, cursor not-allowed

### Results States

1. **Empty (pre-calculation):** Placeholder text, gray background
2. **Loading:** Skeleton loader or spinner (200–500ms)
3. **Success:** Full results display with animation
4. **Error:** Error message with retry button

---

## Mobile-Specific Optimizations

### Input Handling
- **Number inputs:** Show numeric keyboard on mobile
- **Sliders:** Large touch target (48×48px thumb)
- **Dropdowns:** Use native `<select>` for better mobile UX

### Results Display
- **Auto-scroll:** Scroll to results after calculation (smooth behavior)
- **Sticky CTA:** "Recalculate" button sticks to bottom on scroll
- **Compact layout:** Stack all result metrics vertically

### Performance
- **Fast load:** <2s total page load
- **Input debouncing:** If auto-calculating, debounce 300ms
- **Lazy load:** Below-fold sections (FAQs, related calculators)

---

## Accessibility Requirements

### Keyboard Navigation
- Tab through all inputs in logical order
- Enter key triggers calculation
- Escape key closes modals/tooltips

### Screen Readers
- All inputs have associated labels (`<label for="...">`)
- Helper text linked with `aria-describedby`
- Results announced with `aria-live="polite"`
- Button states clear ("Calculate" vs "Calculating...")

### Visual
- High contrast (4.5:1 minimum)
- Focus indicators visible
- Error messages adjacent to inputs

---

## Performance Targets

- **LCP:** <1.5s (calculator card)
- **FID:** <100ms (button click to response)
- **CLS:** <0.1 (no layout shift on result reveal)
- **TTI:** <2.5s (page interactive)

---

## Analytics Tracking

### Events to Track
1. **Page View:** User lands on calculator page
2. **Input Interaction:** User fills any field
3. **Calculation Triggered:** "Calculate" button clicked
4. **Result Displayed:** Successful calculation
5. **Methodology Viewed:** User scrolls to/clicks methodology
6. **FAQ Expanded:** User expands FAQ item
7. **Related Calculator Clicked:** User navigates to another calculator
8. **External Link Clicked:** User clicks source citation

**GA4 Event Example:**
```js
gtag('event', 'calculator_interaction', {
  calculator_name: 'tiktok_creator_fund',
  action: 'calculate',
  follower_count: 50000,
  engagement_rate: 5.2,
  result_range: '150-450'
})
```

---

## A/B Testing Opportunities

### V1 Baseline
Launch with single version, establish baseline metrics

### Future Tests (Post-Launch)
1. **Button placement:** Bottom of inputs vs sticky floating
2. **Result reveal:** Immediate vs animated countdown
3. **Methodology position:** Above fold vs below results
4. **Related calculators:** Grid vs carousel
5. **Input types:** Sliders vs number inputs for engagement rate

---

## Acceptance Criteria

✅ **Page Structure:** All 6 sections defined with wireframes
✅ **Component Specs:** Input fields, buttons, results cards detailed
✅ **Interaction States:** All UI states documented (default, hover, focus, error, loading)
✅ **Mobile Optimization:** Responsive behavior and mobile-specific patterns defined
✅ **Accessibility:** WCAG 2.1 AA compliance requirements documented
✅ **Performance:** Targets established for Core Web Vitals
✅ **Analytics:** Event tracking plan defined

---

## Handoff Checklist

- [ ] Design Lead has created Figma mockups for desktop and mobile
- [ ] Developer understands input validation requirements
- [ ] All interaction states designed (hover, focus, error, loading)
- [ ] Analytics events configured in GA4
- [ ] Accessibility requirements reviewed by dev team
- [ ] Performance budgets set in CI/CD pipeline
- [ ] Content team has provided calculator copy (labels, helper text, results interpretation)

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Development
**Next Review:** 2025-Q2 (Post-Launch UX Analysis & A/B Testing)
