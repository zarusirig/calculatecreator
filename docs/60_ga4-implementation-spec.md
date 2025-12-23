# GA4 Implementation Spec

## Purpose

Defines the Google Analytics 4 event taxonomy, custom dimensions, dataLayer specification, and tracking implementation for comprehensive user behavior and conversion tracking.

## Owner

**Primary:** Analytics Engineer
**Collaborators:** Frontend Developer, Product Manager

## Strategic Disciplines

- **Systems Analysis** — Event taxonomy, data architecture
- **Structured Problem-Solving** — Tracking implementation, debugging
- **Pattern Recognition** — User behavior patterns, conversion funnels

---

## GA4 Setup

### Create GA4 Property

1. Go to Google Analytics Admin
2. Create new GA4 Property
3. Note Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to environment variables

### Install gtag.js

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Event Taxonomy

### Automatic Events (Built-in)

GA4 automatically tracks:
- `page_view` — Page views
- `scroll` — 90% scroll depth
- `click` — Outbound link clicks
- `file_download` — File downloads
- `first_visit` — New user visits
- `session_start` — Session starts

### Custom Events

#### 1. Calculator Interactions

**Event: `calculator_interaction`**

```tsx
gtag('event', 'calculator_interaction', {
  calculator_name: 'tiktok_creator_fund', // Required
  action: 'input_change' | 'calculate' | 'result_displayed', // Required
  input_field: 'followers', // Optional: which field changed
  input_value: 50000, // Optional: value entered
  event_category: 'calculator',
  event_label: calculator_name,
})
```

**When to fire:**
- User changes input value (debounced 2 seconds)
- User clicks "Calculate" button
- Results are successfully displayed

**Example Implementation:**
```tsx
// components/calculator/CalculatorCard.tsx
import { trackEvent } from '@/lib/analytics/ga4'

const handleCalculate = () => {
  trackEvent('calculator_interaction', {
    calculator_name: type,
    action: 'calculate',
    follower_count: inputs.followers,
    engagement_rate: inputs.engagementRate,
  })

  // ... perform calculation

  trackEvent('calculator_interaction', {
    calculator_name: type,
    action: 'result_displayed',
    result_min: results.min,
    result_max: results.max,
  })
}
```

#### 2. Navigation Events

**Event: `navigation_click`**

```tsx
gtag('event', 'navigation_click', {
  location: 'header' | 'footer' | 'breadcrumb' | 'related_content', // Required
  link_text: 'Brand Deal Calculator', // Required
  link_url: '/calculators/brand-deal-rate/', // Required
  event_category: 'navigation',
})
```

#### 3. Content Engagement

**Event: `content_engagement`**

```tsx
gtag('event', 'content_engagement', {
  content_type: 'guide' | 'calculator' | 'data', // Required
  content_title: 'TikTok Creator Fund Guide', // Required
  action: 'toc_click' | 'faq_expand' | 'methodology_view', // Required
  event_category: 'engagement',
})
```

**When to fire:**
- User clicks table of contents link
- User expands FAQ accordion
- User scrolls to methodology section

#### 4. Conversions

**Event: `conversion`**

```tsx
gtag('event', 'conversion', {
  conversion_type: 'calculator_used' | 'guide_read' | 'related_click', // Required
  calculator_name: 'tiktok_creator_fund', // If applicable
  event_category: 'conversion',
})
```

**Conversion Goals:**
- Calculator used (calculation performed)
- Guide read (>50% scroll depth)
- Related calculator clicked
- External link clicked (brand, source citation)

---

## Custom Dimensions

### User-Scoped Dimensions

| Dimension | Scope | Values | Purpose |
|-----------|-------|--------|---------|
| `user_type` | User | `new`, `returning` | Segment by user type |

### Event-Scoped Dimensions

| Dimension | Scope | Values | Purpose |
|-----------|-------|--------|---------|
| `calculator_name` | Event | `creator_fund`, `engagement_rate`, etc. | Track which calculator |
| `calculator_action` | Event | `calculate`, `result_displayed` | Track user actions |
| `content_type` | Event | `guide`, `calculator`, `data` | Content categorization |
| `navigation_location` | Event | `header`, `footer`, `related` | Navigation source |

### Configure in GA4

1. Go to Admin > Custom Definitions
2. Create custom dimension
3. Select scope (User or Event)
4. Enter dimension name (exact match to event parameter)

---

## Core Web Vitals Tracking

```tsx
// lib/analytics/webVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export function reportWebVitals() {
  getCLS(sendToGA4)
  getFID(sendToGA4)
  getFCP(sendToGA4)
  getLCP(sendToGA4)
  getTTFB(sendToGA4)
}

function sendToGA4(metric) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
  }
}
```

```tsx
// app/layout.tsx
'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/analytics/webVitals'

export default function RootLayout({ children }) {
  useEffect(() => {
    reportWebVitals()
  }, [])

  return <>{children}</>
}
```

---

## Tracking Helper Functions

```ts
// lib/analytics/ga4.ts

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export function trackEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

export function trackCalculation(
  calculatorName: string,
  inputs: Record<string, any>,
  results: Record<string, any>
) {
  trackEvent('calculator_interaction', {
    calculator_name: calculatorName,
    action: 'calculate',
    ...inputs,
  })

  trackEvent('calculator_interaction', {
    calculator_name: calculatorName,
    action: 'result_displayed',
    ...results,
  })

  // Track as conversion
  trackEvent('conversion', {
    conversion_type: 'calculator_used',
    calculator_name: calculatorName,
  })
}

export function trackNavigation(
  location: string,
  linkText: string,
  linkUrl: string
) {
  trackEvent('navigation_click', {
    location,
    link_text: linkText,
    link_url: linkUrl,
  })
}

export function trackContentEngagement(
  contentType: string,
  contentTitle: string,
  action: string
) {
  trackEvent('content_engagement', {
    content_type: contentType,
    content_title: contentTitle,
    action,
  })
}
```

---

## Implementation Examples

### Calculator Page

```tsx
// app/calculators/tiktok-creator-fund/page.tsx
'use client'

import { trackCalculation } from '@/lib/analytics/ga4'

export default function CalculatorPage() {
  const handleCalculate = () => {
    const inputs = { followers, monthlyViews, engagementRate, niche }
    const results = calculate(inputs)

    // Track calculation
    trackCalculation('creator-fund', inputs, results)

    setResults(results)
  }

  return <CalculatorCard onCalculate={handleCalculate} />
}
```

### Navigation Link

```tsx
// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { trackNavigation } from '@/lib/analytics/ga4'

export default function Header() {
  return (
    <nav>
      <Link
        href="/calculators/brand-deal-rate"
        onClick={() =>
          trackNavigation('header', 'Brand Deal Calculator', '/calculators/brand-deal-rate')
        }
      >
        Brand Deal Calculator
      </Link>
    </nav>
  )
}
```

### FAQ Accordion

```tsx
// components/content/FAQAccordion.tsx
'use client'

import { trackContentEngagement } from '@/lib/analytics/ga4'

export default function FAQAccordion({ question, answer }) {
  const handleExpand = () => {
    trackContentEngagement('guide', 'TikTok Creator Fund Guide', 'faq_expand')
  }

  return (
    <details onClick={handleExpand}>
      <summary>{question}</summary>
      <div>{answer}</div>
    </details>
  )
}
```

---

## GA4 Reports to Create

### 1. Calculator Performance Report
**Dimensions:** Calculator Name, Date
**Metrics:** Calculations Performed, Unique Users, Avg Engagement Time
**Purpose:** Track which calculators are most used

### 2. Conversion Funnel
**Steps:**
1. Page View
2. Calculator Interaction (input change)
3. Calculation Performed
4. Result Displayed
5. Related Calculator Clicked

**Purpose:** Identify drop-off points

### 3. Content Engagement Report
**Dimensions:** Content Type, Content Title
**Metrics:** Page Views, Avg Time on Page, Scroll Depth, Engagement Rate
**Purpose:** Identify top-performing content

### 4. Navigation Analysis
**Dimensions:** Navigation Location, Link Text
**Metrics:** Click Count, Click-Through Rate
**Purpose:** Optimize navigation placement

---

## Testing & QA

### GA4 DebugView

1. Enable Google Analytics Debugger Chrome extension
2. Visit site in Chrome
3. Open GA4 > Admin > DebugView
4. Interact with site
5. Verify events appear in real-time

### Event Testing Checklist

- [ ] Calculator input change tracked
- [ ] Calculate button click tracked
- [ ] Result display tracked
- [ ] Navigation clicks tracked
- [ ] FAQ expansions tracked
- [ ] Methodology views tracked
- [ ] Core Web Vitals tracked
- [ ] Page views tracked
- [ ] Conversions tracked

---

## Acceptance Criteria

✅ **GA4 Property Created:** Measurement ID configured
✅ **Event Taxonomy Defined:** All custom events documented
✅ **Custom Dimensions:** User and event dimensions configured
✅ **Tracking Functions:** Helper functions implemented
✅ **Core Web Vitals:** Performance tracking enabled
✅ **Testing:** All events verified in DebugView
✅ **Reports:** Custom reports created in GA4

---

## Handoff Checklist

- [ ] GA4 property created and measurement ID shared
- [ ] Environment variable added to Firebase
- [ ] gtag.js installed in app layout
- [ ] Tracking helper functions implemented
- [ ] All custom events implemented
- [ ] Custom dimensions configured in GA4
- [ ] DebugView testing completed
- [ ] Custom reports created in GA4
- [ ] Team trained on accessing reports

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
