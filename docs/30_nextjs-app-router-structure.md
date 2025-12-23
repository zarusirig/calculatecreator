# Next.js App Router Structure

## Purpose

Defines the file structure, routing patterns, metadata strategy, and SSR implementation for the TikTok Creator Calculator platform using Next.js 14+ App Router.

## Owner

**Primary:** Tech Lead
**Collaborators:** Frontend Developers, DevOps Engineer

## Strategic Disciplines

- **Systems Analysis** — Application architecture, component hierarchy, data flow
- **Structured Problem-Solving** — Performance optimization, build patterns
- **Mental Agility** — Adapting to Next.js evolution, modern React patterns

---

## Tech Stack Summary

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 14+ | React framework with App Router |
| **Runtime** | React | 18+ | UI library |
| **Styling** | Tailwind CSS | 3+ | Utility-first CSS |
| **Deployment** | Firebase Hosting + Functions | Latest | CDN + SSR |
| **Language** | TypeScript | 5+ | Type safety |
| **Analytics** | GA4 | Latest | User tracking |

---

## Project File Structure

```
/tiktok-calculator-platform
├── .github/
│   └── workflows/
│       └── deploy.yml                 # CI/CD pipeline
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-image.png               # Default OG image
│   │   └── icons/                     # Calculator icons, etc.
│   ├── fonts/                         # Self-hosted fonts (if any)
│   └── robots.txt                     # SEO crawl directives
│
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Homepage
│   │   ├── not-found.tsx              # 404 page
│   │   ├── error.tsx                  # Error boundary
│   │   │
│   │   ├── calculators/
│   │   │   ├── page.tsx               # /calculators (index)
│   │   │   ├── layout.tsx             # Shared calculator layout
│   │   │   │
│   │   │   ├── tiktok-creator-fund/
│   │   │   │   ├── page.tsx
│   │   │   │   └── metadata.ts        # Page-specific metadata
│   │   │   │
│   │   │   ├── tiktok-engagement-rate/
│   │   │   │   ├── page.tsx
│   │   │   │   └── metadata.ts
│   │   │   │
│   │   │   └── [...other calculators]
│   │   │
│   │   ├── guides/
│   │   │   ├── page.tsx               # /guides (index)
│   │   │   ├── layout.tsx
│   │   │   │
│   │   │   ├── tiktok-creator-fund/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── how-to-make-money-on-tiktok/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── [...other guides]
│   │   │
│   │   ├── compare/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── tiktok-vs-youtube-earnings/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── [...other comparisons]
│   │   │
│   │   ├── data/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── tiktok-rpm-by-niche/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── [...other data pages]
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   ├── methodology/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/                       # API routes (if needed)
│   │       └── calculate/
│   │           └── route.ts           # POST /api/calculate
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   │
│   │   ├── calculator/
│   │   │   ├── CalculatorCard.tsx     # Main calculator container
│   │   │   ├── InputField.tsx         # Reusable input
│   │   │   ├── Slider.tsx             # Reusable slider
│   │   │   ├── SelectDropdown.tsx
│   │   │   ├── ResultsDisplay.tsx
│   │   │   └── MethodologySection.tsx
│   │   │
│   │   ├── content/
│   │   │   ├── GuideLayout.tsx        # Guide page wrapper
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── RelatedCalculators.tsx
│   │   │   └── RelatedGuides.tsx
│   │   │
│   │   ├── ui/                        # Shared UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── InfoCallout.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   │
│   │   └── analytics/
│   │       ├── GAProvider.tsx         # GA4 wrapper
│   │       └── TrackingEvents.tsx
│   │
│   ├── lib/
│   │   ├── calculators/
│   │   │   ├── creatorFund.ts         # Creator Fund logic
│   │   │   ├── engagementRate.ts
│   │   │   ├── brandDealRate.ts
│   │   │   └── [...other calculators]
│   │   │
│   │   ├── config/
│   │   │   ├── calculators.config.ts  # Calculator metadata
│   │   │   ├── niches.config.ts       # Niche data (CPM, RPM)
│   │   │   └── site.config.ts         # Global site config
│   │   │
│   │   ├── utils/
│   │   │   ├── formatting.ts          # Currency, number formatting
│   │   │   ├── validation.ts          # Input validation
│   │   │   └── seo.ts                 # SEO helper functions
│   │   │
│   │   └── analytics/
│   │       └── ga4.ts                 # GA4 tracking functions
│   │
│   ├── types/
│   │   ├── calculator.ts              # Calculator types
│   │   ├── content.ts                 # Content types
│   │   └── index.ts                   # Exports
│   │
│   └── styles/
│       └── globals.css                # Global styles, Tailwind imports
│
├── .env.local                         # Local environment variables
├── .env.production                    # Production env vars (Firebase)
├── next.config.js                     # Next.js configuration
├── tailwind.config.js                 # Tailwind configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json
└── README.md
```

---

## Routing Strategy

### File-Based Routing (App Router)

**Pattern:** Each folder in `app/` represents a URL segment

**Examples:**
- `app/page.tsx` → `/`
- `app/calculators/page.tsx` → `/calculators`
- `app/calculators/tiktok-creator-fund/page.tsx` → `/calculators/tiktok-creator-fund`

### Dynamic Routes (Future Feature)

**Pattern:** `[param]` folders for dynamic segments

**Example:** Blog post by slug (V2 feature)
```
app/blog/[slug]/page.tsx → /blog/tiktok-creator-fund-explained
```

**Implementation:**
```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Blog post: {params.slug}</div>
}
```

### Catch-All Routes (If Needed)

**Pattern:** `[...param]` for catch-all routes

**Use Case:** Nested guide categories (future)

---

## Page Component Structure

### Standard Page Component

```tsx
// app/calculators/tiktok-creator-fund/page.tsx
import type { Metadata } from 'next'
import CalculatorCard from '@/components/calculator/CalculatorCard'
import MethodologySection from '@/components/calculator/MethodologySection'
import FAQAccordion from '@/components/content/FAQAccordion'
import RelatedCalculators from '@/components/content/RelatedCalculators'

// Metadata (SSR)
export const metadata: Metadata = {
  title: 'TikTok Creator Fund Calculator - Estimate Your Earnings',
  description: 'Calculate your TikTok Creator Fund earnings based on views, engagement, and niche. Free tool with transparent methodology.',
  openGraph: {
    title: 'TikTok Creator Fund Calculator',
    description: 'Estimate your monthly Creator Fund earnings',
    url: 'https://[domain].com/calculators/tiktok-creator-fund',
    images: ['/images/og-creator-fund.png'],
  },
}

export default function CreatorFundCalculatorPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TikTok Creator Fund Calculator
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Estimate your monthly earnings from the TikTok Creator Fund
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <CalculatorCard type="creator-fund" />
        </div>
      </section>

      {/* Methodology */}
      <MethodologySection calculatorType="creator-fund" />

      {/* FAQ */}
      <FAQAccordion calculatorType="creator-fund" />

      {/* Related */}
      <RelatedCalculators current="creator-fund" />
    </div>
  )
}
```

---

## Layout Components

### Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GAProvider from '@/components/analytics/GAProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://[domain].com'),
  title: {
    default: 'TikTok Creator Calculator - Earnings & Monetization Tools',
    template: '%s | TikTok Creator Calculator',
  },
  description: 'Free calculators and guides for TikTok creators. Estimate earnings, engagement rates, brand deal rates, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://[domain].com',
    siteName: 'TikTok Creator Calculator',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <GAProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </GAProvider>
      </body>
    </html>
  )
}
```

### Category Layout (Shared Calculator Layout)

```tsx
// app/calculators/layout.tsx
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  )
}
```

---

## Metadata Strategy

### Static Metadata

**Used when:** Metadata is known at build time

```tsx
export const metadata: Metadata = {
  title: 'TikTok Creator Fund Calculator',
  description: 'Calculate your TikTok Creator Fund earnings',
}
```

### Dynamic Metadata (Future: If using CMS)

**Used when:** Metadata comes from external source

```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
  }
}
```

### Metadata Best Practices

1. **Title:**
   - Include target keyword
   - 50–60 characters
   - Format: `[Primary Keyword] - [Benefit] | [Brand]`

2. **Description:**
   - Compelling call-to-action
   - 150–160 characters
   - Include target keyword naturally

3. **Open Graph:**
   - Always include OG image (1200×630px)
   - Use descriptive titles (can differ from `<title>`)
   - Include URL (canonical)

4. **Structured Data:**
   - Add JSON-LD in page component (see schema examples below)

---

## Structured Data (Schema Markup)

### WebApplication Schema (Calculator Pages)

```tsx
// In page component
const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'TikTok Creator Fund Calculator',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: 'Calculate TikTok Creator Fund earnings',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Page content */}
    </>
  )
}
```

### Article Schema (Guide Pages)

```tsx
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TikTok Creator Fund: Complete Guide',
  author: {
    '@type': 'Organization',
    name: 'TikTok Creator Calculator',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
}
```

### FAQ Schema

```tsx
const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does TikTok pay per 1,000 views?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TikTok Creator Fund pays $0.02–$0.04 per 1,000 views...',
      },
    },
  ],
}
```

---

## Server vs Client Components

### Server Components (Default)

**Use for:**
- Static content
- SEO-critical pages
- Data fetching (if using external API in future)
- Layouts and page shells

**Benefits:**
- Zero JavaScript sent to client
- Better SEO (fully rendered HTML)
- Faster initial load

**Example:**
```tsx
// app/guides/tiktok-creator-fund/page.tsx (Server Component)
export default function GuideagePage() {
  return <div>Static content...</div>
}
```

### Client Components

**Use for:**
- Interactive elements (calculators, forms)
- Browser-only APIs (localStorage, geolocation)
- State management (useState, useContext)
- Event handlers (onClick, onChange)

**Directive:** `'use client'` at top of file

**Example:**
```tsx
// components/calculator/CalculatorCard.tsx
'use client'

import { useState } from 'react'

export default function CalculatorCard() {
  const [followers, setFollowers] = useState(0)

  return <div>Interactive calculator...</div>
}
```

### Hybrid Pattern (Server + Client)

**Strategy:** Server component wraps client components

```tsx
// app/calculators/tiktok-creator-fund/page.tsx (Server)
import CalculatorCard from '@/components/calculator/CalculatorCard' // Client

export default function Page() {
  return (
    <div>
      <h1>TikTok Creator Fund Calculator</h1> {/* Server-rendered */}
      <CalculatorCard /> {/* Client-side interactive */}
    </div>
  )
}
```

---

## Data Fetching Patterns

### Config-Driven Data (No Database)

**Strategy:** All data in TypeScript config files

```ts
// lib/config/calculators.config.ts
export const calculatorConfig = {
  creatorFund: {
    name: 'TikTok Creator Fund Calculator',
    slug: 'tiktok-creator-fund',
    description: 'Estimate your Creator Fund earnings',
    baseRPM: { min: 0.02, max: 0.04 },
    niches: {
      lifestyle: { multiplier: 1.0 },
      beauty: { multiplier: 1.2 },
      finance: { multiplier: 1.5 },
    },
  },
  // ... other calculators
}
```

**Usage:**
```tsx
import { calculatorConfig } from '@/lib/config/calculators.config'

const config = calculatorConfig.creatorFund
```

### Future: External API (If Needed)

**Example:** Fetch real-time TikTok data (hypothetical)

```tsx
// Server Component
async function getData() {
  const res = await fetch('https://api.example.com/rates', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.rpm}</div>
}
```

---

## Performance Optimization

### Image Optimization

**Use Next.js `<Image>` component:**

```tsx
import Image from 'next/image'

<Image
  src="/images/calculator-icon.png"
  alt="Calculator icon"
  width={48}
  height={48}
  loading="lazy" // Lazy load below-the-fold images
/>
```

**Benefits:**
- Automatic WebP conversion
- Responsive images (srcset)
- Lazy loading
- No cumulative layout shift (width/height specified)

### Font Optimization

**Use `next/font` for Google Fonts:**

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent FOIT
})
```

**Benefits:**
- Self-hosted (no external request)
- Automatic font subsetting
- Font display: swap (prevents invisible text)

### Code Splitting

**Automatic:** Next.js splits by route

**Manual (if needed):** Dynamic imports

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // Skip SSR if not needed
})
```

### Static Generation

**All pages are statically generated at build time:**

```bash
npm run build
# Generates static HTML for all pages
```

**Result:** Ultra-fast page loads (<1s LCP)

---

## Environment Variables

### `.env.local` (Development)

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### `.env.production` (Firebase)

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://[domain].com
```

**Usage:**
```tsx
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
```

**Security:**
- Prefix with `NEXT_PUBLIC_` for client-side access
- Keep secrets (API keys) without prefix (server-only)

---

## Build & Export Configuration

### `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Firebase Hosting
  trailingSlash: true, // Match URL structure (/calculators/)
  images: {
    unoptimized: true, // Firebase Hosting doesn't support Next.js Image Optimization API
  },

  // Redirects (if needed)
  async redirects() {
    return [
      {
        source: '/old-calculator',
        destination: '/calculators/tiktok-creator-fund',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

**Note:** `output: 'export'` generates static HTML (no server-side runtime). For SSR, use Firebase Functions (see doc 70).

---

## TypeScript Types

### Calculator Types

```ts
// types/calculator.ts
export interface CalculatorInput {
  followers: number
  views: number
  engagementRate: number
  niche: string
}

export interface CalculatorResult {
  min: number
  max: number
  rpm: number
  interpretation: string
}

export interface CalculatorConfig {
  name: string
  slug: string
  description: string
  inputs: InputField[]
}

export interface InputField {
  id: string
  label: string
  type: 'number' | 'slider' | 'select'
  min?: number
  max?: number
  options?: { label: string; value: string }[]
  helperText?: string
}
```

---

## Error Handling

### Error Boundary (App-Level)

```tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
```

### 404 Page

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Page not found</p>
        <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Go home
        </a>
      </div>
    </div>
  )
}
```

---

## Testing Strategy

### Unit Tests (Jest + React Testing Library)

**Test:** Calculator logic (pure functions)

```ts
// __tests__/lib/calculators/creatorFund.test.ts
import { calculateCreatorFund } from '@/lib/calculators/creatorFund'

describe('calculateCreatorFund', () => {
  it('calculates earnings correctly', () => {
    const result = calculateCreatorFund({
      views: 1000000,
      engagementRate: 5,
      niche: 'lifestyle',
    })

    expect(result.min).toBeGreaterThan(0)
    expect(result.max).toBeGreaterThan(result.min)
  })
})
```

### Component Tests

```tsx
// __tests__/components/calculator/InputField.test.tsx
import { render, screen } from '@testing-library/react'
import InputField from '@/components/calculator/InputField'

describe('InputField', () => {
  it('renders label and input', () => {
    render(<InputField label="Followers" id="followers" type="number" />)
    expect(screen.getByLabelText('Followers')).toBeInTheDocument()
  })
})
```

### E2E Tests (Playwright)

```ts
// e2e/calculator.spec.ts
import { test, expect } from '@playwright/test'

test('calculator flow', async ({ page }) => {
  await page.goto('/calculators/tiktok-creator-fund')
  await page.fill('#followers', '50000')
  await page.click('button:has-text("Calculate")')
  await expect(page.locator('.results')).toBeVisible()
})
```

---

## Acceptance Criteria

✅ **File Structure:** Complete project structure with all folders defined
✅ **Routing:** App Router patterns documented with examples
✅ **Metadata:** Static metadata strategy for all page types
✅ **Components:** Server vs client component guidelines clear
✅ **Performance:** Image, font, code splitting optimizations documented
✅ **TypeScript:** Types defined for calculators, content, config
✅ **Build Config:** `next.config.js` configured for static export + Firebase
✅ **Error Handling:** Error boundaries and 404 page implemented

---

## Handoff Checklist

- [ ] Tech Lead has reviewed and approved file structure
- [ ] Developers understand App Router vs Pages Router differences
- [ ] TypeScript types created for all major entities
- [ ] next.config.js configured for Firebase deployment
- [ ] Tailwind CSS configured with design tokens
- [ ] Environment variables documented and added to Firebase
- [ ] Testing framework set up (Jest, Playwright)
- [ ] All team members familiar with server vs client component patterns

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Development
**Next Review:** 2025-Q2 (Post-Launch Architecture Review)
