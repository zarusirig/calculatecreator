# State Management and Performance

## Purpose

Defines client-side state patterns, caching strategies, code splitting, and Core Web Vitals optimization techniques for the TikTok Creator Calculator platform.

## Owner

**Primary:** Tech Lead
**Collaborators:** Frontend Developers, DevOps Engineer

## Strategic Disciplines

- **Systems Analysis** — State architecture, performance bottlenecks
- **Structured Problem-Solving** — Optimization strategies, measurement
- **Mental Agility** — Adapting to performance constraints, browser changes

---

## State Management Strategy

### V1: Local State Only

**Philosophy:** Keep it simple—no global state management library needed

**Rationale:**
- No user authentication
- No persistent data across pages
- Each calculator is self-contained
- No shopping cart or complex workflows

**Implementation:** React `useState` and `useReducer`

### When to Use useState

**Use for:** Simple, independent state

```tsx
const [followers, setFollowers] = useState<number>(0)
const [results, setResults] = useState<CalculatorResult | null>(null)
```

### When to Use useReducer

**Use for:** Complex state with multiple related values

```tsx
interface State {
  inputs: Record<string, any>
  results: CalculatorResult | null
  loading: boolean
  errors: Record<string, string>
}

type Action =
  | { type: 'SET_INPUT'; payload: { id: string; value: any } }
  | { type: 'SET_RESULTS'; payload: CalculatorResult }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: { id: string; message: string } }
  | { type: 'CLEAR_ERROR'; payload: string }

function calculatorReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_INPUT':
      return {
        ...state,
        inputs: { ...state.inputs, [action.payload.id]: action.payload.value },
      }
    case 'SET_RESULTS':
      return { ...state, results: action.payload, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.payload.id]: action.payload.message },
      }
    case 'CLEAR_ERROR':
      const { [action.payload]: _, ...remainingErrors } = state.errors
      return { ...state, errors: remainingErrors }
    default:
      return state
  }
}

// Usage
const [state, dispatch] = useReducer(calculatorReducer, initialState)
```

---

## Caching Strategies

### Browser Cache (Static Assets)

**Next.js Automatic:**
- JS/CSS bundles cached with content hash
- Images cached via CDN (Firebase Hosting)

**Cache Headers:**
```
Cache-Control: public, max-age=31536000, immutable
```

### Service Worker (Future - V2)

**Use case:** Offline calculator functionality

```tsx
// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('calculator-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/calculators/tiktok-creator-fund',
        '/styles/main.css',
        '/scripts/calculator.js',
      ])
    })
  )
})
```

### LocalStorage (Future - V2)

**Use case:** Save calculator inputs for returning users

```tsx
const saveToLocalStorage = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

const loadFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
  return null
}

// Usage in calculator
useEffect(() => {
  const saved = loadFromLocalStorage('calculator-inputs')
  if (saved) setInputs(saved)
}, [])

useEffect(() => {
  saveToLocalStorage('calculator-inputs', inputs)
}, [inputs])
```

---

## Core Web Vitals Optimization

### Target Metrics

| Metric | Target | Excellent | Needs Improvement |
|--------|--------|-----------|-------------------|
| **LCP** (Largest Contentful Paint) | <1.5s | <2.5s | <4.0s |
| **FID** (First Input Delay) | <50ms | <100ms | <300ms |
| **CLS** (Cumulative Layout Shift) | <0.05 | <0.1 | <0.25 |
| **FCP** (First Contentful Paint) | <1.0s | <1.8s | <3.0s |
| **TTI** (Time to Interactive) | <2.0s | <3.8s | <7.3s |

### LCP Optimization

**1. Optimize Hero Images**
```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="TikTok Creator Calculator"
  width={1200}
  height={630}
  priority // Preload above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Low-quality placeholder
/>
```

**2. Preload Critical Resources**
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/styles/critical.css" as="style" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**3. Server-Side Rendering**
- Next.js App Router renders HTML on server
- Users see content immediately (no JavaScript required for initial view)

### FID Optimization

**1. Minimize JavaScript**
```bash
# Check bundle size
npm run build
# Analyze bundle
npx @next/bundle-analyzer
```

**2. Code Splitting**
```tsx
import dynamic from 'next/dynamic'

// Split heavy components
const AdvancedChart = dynamic(() => import('@/components/AdvancedChart'), {
  loading: () => <Skeleton />,
  ssr: false,
})
```

**3. Debounce Input Handlers**
```tsx
const debouncedCalculate = useMemo(
  () => debounce((inputs) => calculate(inputs), 300),
  []
)
```

### CLS Optimization

**1. Reserve Space for Images**
```tsx
// Always specify width and height
<Image src="/logo.png" width={200} height={50} alt="Logo" />
```

**2. Avoid Injecting Content Above Existing Content**
```tsx
// ❌ Bad: Pushes content down
{showBanner && <Banner />}
<MainContent />

// ✅ Good: Reserved space
<div className="min-h-[80px]">
  {showBanner && <Banner />}
</div>
<MainContent />
```

**3. Use CSS Aspect Ratio**
```css
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

---

## Code Splitting Strategies

### Route-Based Splitting (Automatic)

Next.js automatically splits code by route:
- `/` → `page.js`
- `/calculators/creator-fund` → `calculators/creator-fund/page.js`

### Component-Based Splitting

**When to split:**
- Component >50KB
- Component only needed for specific interactions
- Component uses heavy dependencies

**Example: Heavy charting library**
```tsx
const DynamicChart = dynamic(
  () => import('recharts').then((mod) => mod.LineChart),
  { loading: () => <div>Loading chart...</div>, ssr: false }
)
```

### Library Splitting

**Check impact:**
```bash
npx next-bundle-analyzer
```

**Split heavy libraries:**
```tsx
// Instead of importing entire library
import { format } from 'date-fns' // ❌ Imports all of date-fns

// Import specific functions
import format from 'date-fns/format' // ✅ Smaller bundle
```

---

## Image Optimization

### Next.js Image Component

```tsx
import Image from 'next/image'

<Image
  src="/images/calculator-icon.png"
  alt="Calculator"
  width={48}
  height={48}
  loading="lazy" // Lazy load below-the-fold
  quality={85} // Default 75, increase for hero images
  placeholder="blur" // Optional: blur-up effect
/>
```

### Image Formats

**Priority:**
1. **WebP:** Modern format, 25–35% smaller than JPEG
2. **AVIF:** Even smaller, but less browser support
3. **JPEG/PNG:** Fallback

**Next.js automatic:** Serves WebP to supporting browsers

### Image CDN (Firebase Hosting)

Firebase Hosting serves images via CDN with:
- Gzip/Brotli compression
- Cache headers
- Global edge locations

---

## Font Optimization

### Google Fonts via next/font

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevents FOIT (flash of invisible text)
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

**Benefits:**
- Self-hosted (no external request to fonts.googleapis.com)
- Automatic subsetting (only includes characters you need)
- Zero layout shift

---

## CSS Optimization

### Tailwind CSS Purging

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
}
```

**Result:** Only CSS classes used in your components are included in production build

### Critical CSS

Next.js automatically inlines critical CSS for above-the-fold content

### CSS-in-JS (Avoid for Performance)

**Avoid:** Emotion, Styled-Components (runtime CSS-in-JS)
**Use:** Tailwind CSS (build-time, zero runtime overhead)

---

## JavaScript Optimization

### Tree Shaking

**Automatic in Next.js production builds**

```tsx
// ✅ Good: Only imports specific function
import { format } from 'date-fns/format'

// ❌ Bad: Imports entire library
import * as dateFns from 'date-fns'
```

### Minification

**Automatic:** Next.js uses Terser to minify JavaScript

### Polyfills

**Automatic:** Next.js includes necessary polyfills for target browsers

**Configure target browsers:**
```json
// package.json
{
  "browserslist": [
    ">0.3%",
    "not dead",
    "not op_mini all"
  ]
}
```

---

## Runtime Performance

### React Profiler

```tsx
import { Profiler } from 'react'

<Profiler id="Calculator" onRender={onRenderCallback}>
  <CalculatorCard />
</Profiler>

function onRenderCallback(
  id, // "Calculator"
  phase, // "mount" or "update"
  actualDuration, // time spent rendering
  baseDuration, // estimated time without memoization
  startTime,
  commitTime,
  interactions
) {
  console.log(`${id} took ${actualDuration}ms`)
}
```

### Memoization

**useMemo:** Memoize expensive calculations

```tsx
const calculatedValue = useMemo(() => {
  return expensiveFunction(input)
}, [input])
```

**useCallback:** Memoize function references

```tsx
const handleChange = useCallback((value) => {
  setInput(value)
}, [])
```

**React.memo:** Prevent unnecessary re-renders

```tsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* Expensive rendering */}</div>
})
```

---

## Monitoring & Measurement

### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://staging.example.com/
            https://staging.example.com/calculators/tiktok-creator-fund
          uploadArtifacts: true
```

### Core Web Vitals in GA4

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

### Performance Budget

**Set thresholds:**
```json
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "first-contentful-paint": ["error", { "maxNumericValue": 1500 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 300 }]
      }
    }
  }
}
```

---

## Acceptance Criteria

✅ **State Strategy:** Local state patterns defined, no global state lib needed
✅ **Caching:** Browser cache, static assets, future localStorage plan
✅ **Core Web Vitals:** Target metrics defined with optimization strategies
✅ **Code Splitting:** Route and component splitting documented
✅ **Image Optimization:** Next.js Image component usage defined
✅ **Font Optimization:** next/font implementation specified
✅ **Monitoring:** Lighthouse CI and Web Vitals tracking configured

---

## Handoff Checklist

- [ ] Lighthouse CI integrated into deployment pipeline
- [ ] Web Vitals tracking added to GA4
- [ ] Performance budget defined and enforced
- [ ] Image optimization using Next.js Image component
- [ ] Font optimization using next/font
- [ ] Bundle analyzer run to identify heavy dependencies
- [ ] Core Web Vitals monitored in production

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
**Next Review:** 2025-Q2 (Performance Analysis Post-Launch)
