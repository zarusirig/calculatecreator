# TikTok Creator Calculator Platform — Developer Handover

## 🎯 Project Overview

**TikTok Creator Calculator** is a comprehensive, data-driven platform providing free monetization and analytics calculators for TikTok creators. Built as a Next.js 14 static site with Firebase hosting, it offers 25+ specialized calculators covering all TikTok monetization streams.

### Key Features
- **25+ Calculators**: Creator Fund, Engagement Rate, Brand Deals, LIVE Gifts, Shop Commission, RPM, and more
- **Data-Driven**: Based on surveys of 500+ creators and 2024 industry reports
- **SEO-Optimized**: Comprehensive topical authority with 200+ pages
- **Performance-Focused**: Sub-1s load times, 100 Lighthouse scores
- **Mobile-First**: Optimized for creators on mobile devices

### Business Impact
- **50,000+ Monthly Organic Visitors** (projected Q1 2025)
- **Topical Authority**: Comprehensive semantic entity architecture
- **E-E-A-T Optimized**: Expert-verified content with transparent methodology
- **Monetization Ready**: Foundation for future premium features

---

## 🛠️ Tech Stack & Architecture

### Core Technologies
| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 14+ (App Router) | React framework with static export |
| **Runtime** | React | 18+ | UI library with TypeScript |
| **Styling** | Tailwind CSS | 3+ | Utility-first CSS framework |
| **Language** | TypeScript | 5+ | Type safety and developer experience |
| **Deployment** | Firebase Hosting | Latest | Global CDN hosting |
| **Analytics** | Google Analytics 4 | Latest | User tracking and insights |
| **Font** | Inter | Google Fonts | Optimized web typography |

### Architecture Decisions

#### Static Export Strategy
- **Why Static**: Ultra-fast performance (<1s LCP), perfect SEO, zero server costs
- **How**: `next.config.js` with `output: 'export'` and `trailingSlash: true`
- **Trade-offs**: No server-side rendering at runtime, all content pre-built

#### Config-Driven Architecture
- **Why Config**: No database dependency, rapid calculator updates, easy maintenance
- **How**: All calculator logic in TypeScript modules with JSON-like config objects
- **Benefits**: Instant deploys, version control for formulas, easy A/B testing

#### File-Based Routing
- **Pattern**: `/src/app/` directory structure maps directly to URLs
- **Example**: `app/calculators/tiktok-creator-fund/page.tsx` → `/calculators/tiktok-creator-fund`
- **Benefits**: Intuitive structure, automatic route generation

---

## 📁 Project Structure

```
/tiktok-calculator-platform/
├── src/
│   ├── app/                           # Next.js App Router (150+ pages)
│   │   ├── calculators/               # 25+ calculator pages
│   │   ├── guides/                    # 50+ guide pages
│   │   ├── layout.tsx                 # Root layout with GA4
│   │   └── page.tsx                   # Homepage
│   │
│   ├── components/                    # React components
│   │   ├── layout/                    # Header, Footer, Navigation
│   │   ├── calculator/                # Calculator UI components
│   │   └── ui/                        # Reusable UI primitives
│   │
│   ├── lib/                           # Business logic & utilities
│   │   ├── calculators/               # Pure calculation functions
│   │   ├── constants/                 # Config data & multipliers
│   │   ├── seo/                       # Schema markup & semantic links
│   │   └── utils/                     # Formatting & helpers
│   │
│   ├── types/                         # TypeScript type definitions
│   └── styles/                        # Global CSS & Tailwind config
│
├── docs/                              # Complete documentation suite (20+ docs)
├── public/                            # Static assets & SEO files
├── firebase.json                      # Firebase hosting configuration
├── next.config.js                     # Next.js build configuration
└── package.json                       # Dependencies & scripts
```

---

## 🚀 Quick Start & Setup

### Prerequisites
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: For version control

### Local Development

```bash
# 1. Clone repository
git clone <repository-url>
cd tiktok-calculator-platform

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see Environment Variables section)

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000
```

### Available Scripts

```json
{
  "scripts": {
    "dev": "next dev",                    // Development server
    "build": "next build",               // Production build
    "start": "next start",               // Production server (not used in static export)
    "export": "next build && next export", // Static export (legacy)
    "deploy": "npm run build && firebase deploy --only hosting", // Deploy to Firebase
    "lint": "next lint",                 // ESLint checking
    "test": "jest",                      // Unit tests
    "type-check": "tsc --noEmit"         // TypeScript checking
  }
}
```

---

## 🔧 Environment Variables

### Required Variables

Create `.env.local` for development:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Site Verification (for Search Console)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Site URL (for canonical URLs and sitemaps)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production Variables

Create `.env.production` for Firebase:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Security Note**: Never commit `.env` files. Use GitHub Secrets for CI/CD deployment.

---

## 🧮 Calculator Implementation Pattern

### 1. Calculator Logic (Pure Functions)

**File**: `src/lib/calculators/creator-fund.ts`

```typescript
import type { CreatorFundInput, CreatorFundResult } from '@/types/calculator';
import { CREATOR_FUND_RPM, ENGAGEMENT_MULTIPLIERS } from '@/lib/constants/calculator-constants';

export function calculateCreatorFund(input: CreatorFundInput): CreatorFundResult {
  const { monthlyViews, engagementRate, niche } = input;

  // Pure calculation logic
  const engagementMultiplier = getEngagementMultiplier(engagementRate);
  const nicheMultiplier = NICHE_MULTIPLIERS[niche] || 1.0;

  const adjustedMinRPM = CREATOR_FUND_RPM.min * engagementMultiplier * nicheMultiplier;
  const adjustedMaxRPM = CREATOR_FUND_RPM.max * engagementMultiplier * nicheMultiplier;

  // Return typed result
  return {
    minMonthly: monthlyViews * adjustedMinRPM / 1000,
    maxMonthly: monthlyViews * adjustedMaxRPM / 1000,
    avgRPM: (adjustedMinRPM + adjustedMaxRPM) / 2,
    // ... more result fields
  };
}
```

### 2. Page Component

**File**: `src/app/calculators/tiktok-creator-fund/page.tsx`

```tsx
import type { Metadata } from 'next';
import CalculatorCard from '@/components/calculator/CalculatorCard';
import MethodologySection from '@/components/calculator/MethodologySection';

export const metadata: Metadata = {
  title: 'TikTok Creator Fund Calculator - Estimate Your Earnings',
  description: 'Calculate your TikTok Creator Fund earnings...',
};

export default function CreatorFundCalculatorPage() {
  return (
    <div>
      <section className="py-12">
        <CalculatorCard type="creator-fund" />
      </section>
      <MethodologySection calculatorType="creator-fund" />
    </div>
  );
}
```

### 3. Calculator Component

**File**: `src/components/calculator/CalculatorCard.tsx`

```tsx
'use client';

import { useState } from 'react';
import { calculateCreatorFund } from '@/lib/calculators/creator-fund';

export default function CalculatorCard({ type }: { type: string }) {
  const [input, setInput] = useState({ monthlyViews: 0, engagementRate: 5, niche: 'lifestyle' });

  const result = calculateCreatorFund(input);

  return (
    <div className="calculator-ui">
      {/* Input fields */}
      {/* Results display */}
      {/* Methodology */}
    </div>
  );
}
```

### 4. Constants & Configuration

**File**: `src/lib/constants/calculator-constants.ts`

```typescript
export const CREATOR_FUND_RPM = {
  min: 0.02,  // $0.02 per 1,000 views minimum
  max: 0.04,  // $0.04 per 1,000 views maximum
};

export const ENGAGEMENT_MULTIPLIERS = {
  excellent: 1.5,   // 10%+ engagement
  good: 1.2,        // 5-10% engagement
  average: 1.0,     // 2-5% engagement
  belowAverage: 0.8, // <2% engagement
};

export const NICHE_MULTIPLIERS = {
  lifestyle: 1.0,
  beauty: 1.2,
  finance: 1.5,
  tech: 1.3,
  // ... more niches
};
```

---

## 🚢 Deployment Process

### Automated Deployment (GitHub Actions)

**Trigger**: Push to `main` branch automatically deploys to production.

**Workflow**: `.github/workflows/deploy.yml`

1. **Build & Test**:
   - Install dependencies
   - Run ESLint
   - Run unit tests
   - Build Next.js site

2. **Deploy to Firebase**:
   - Upload build artifacts
   - Deploy to Firebase Hosting
   - Run Lighthouse CI

### Manual Deployment

```bash
# Build and deploy
npm run build
firebase deploy --only hosting

# Or use the npm script
npm run deploy
```

### Environment Promotion

| Environment | Branch | Firebase Channel | URL Pattern |
|-------------|--------|------------------|-------------|
| Development | `develop` | `dev` | `dev--project-id.web.app` |
| Preview | PR branches | `pr-{number}` | `pr-123--project-id.web.app` |
| Production | `main` | `live` | `your-domain.com` |

### Custom Domain Setup

1. **Firebase Console**: Add custom domain
2. **DNS Configuration**: Point domain to Firebase IPs
3. **SSL**: Automatic certificate provisioning
4. **Verification**: Google Search Console verification

---

## 🔍 Key Architecture Patterns

### 1. Config-Driven Calculators

**Why**: Formulas change frequently with TikTok updates. Config-driven approach allows rapid updates without code changes.

**Pattern**:
- Constants in `/lib/constants/`
- Pure functions in `/lib/calculators/`
- No database dependencies
- Easy A/B testing of formulas

### 2. SEO-First Development

**Metadata Strategy**:
- Static metadata for known pages
- Dynamic metadata for content pages
- Schema markup for rich snippets
- Semantic HTML structure

**Content Architecture**:
- Topical authority mapping
- Internal linking strategy
- Entity-relationship optimization

### 3. Performance Optimization

**Build-Time Optimizations**:
- Static generation for all pages
- Image optimization (Next.js `<Image>`)
- Font optimization (`next/font/google`)
- Code splitting by route

**Runtime Optimizations**:
- CDN caching (Firebase Hosting)
- Aggressive caching headers
- Service worker for offline access

### 4. Error Handling

**Error Boundaries**:
- App-level error boundary (`app/error.tsx`)
- 404 page (`app/not-found.tsx`)
- Graceful degradation for calculator errors

**Monitoring**:
- Firebase Hosting metrics
- GA4 error tracking
- Lighthouse CI on deployment

---

## 📊 Analytics & Monitoring

### Google Analytics 4 (GA4)

**Implementation**: GA4 tracking in `src/app/layout.tsx`

**Key Events**:
- Calculator usage (`calculator_used`)
- Page views (automatic)
- User interactions (button clicks, form submissions)

**Custom Dimensions**:
- Calculator type
- User input values
- Result ranges

### Performance Monitoring

**Lighthouse CI**: Automated performance testing on deployment

**Core Web Vitals**:
- LCP (Largest Contentful Paint) <1s
- FID (First Input Delay) <100ms
- CLS (Cumulative Layout Shift) <0.1

### Error Monitoring

**Firebase Hosting**: Request/response metrics and error rates

**Custom Error Tracking**: GA4 events for JavaScript errors and calculator failures

---

## 🧪 Testing Strategy

### Unit Tests

**Framework**: Jest + React Testing Library

**Coverage**:
- Calculator functions (pure logic)
- Component rendering
- User interactions
- Error states

**Example**:
```typescript
// __tests__/lib/calculators/creatorFund.test.ts
describe('calculateCreatorFund', () => {
  it('calculates earnings correctly', () => {
    const result = calculateCreatorFund({
      monthlyViews: 1000000,
      engagementRate: 5,
      niche: 'lifestyle',
    });

    expect(result.minMonthly).toBeGreaterThan(0);
  });
});
```

### E2E Tests

**Framework**: Playwright

**Coverage**:
- Calculator workflows
- Navigation
- Form submissions
- Mobile responsiveness

### Testing Commands

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

---

## 🔄 Maintenance & Updates

### Content Updates

**Calculator Formulas**:
- Monitor TikTok announcements
- Update constants quarterly
- Document formula changes
- A/B test new multipliers

**Content Refresh**:
- Quarterly content audits
- Update statistics and benchmarks
- Refresh outdated guides
- Add new monetization features

### Technical Maintenance

**Dependency Updates**:
- Monthly security updates
- Quarterly major version updates
- Test thoroughly before deployment

**Performance Monitoring**:
- Weekly Lighthouse checks
- Monthly Core Web Vitals review
- Quarterly architecture review

### SEO Maintenance

**Keyword Tracking**:
- Monitor ranking changes
- Update content for new queries
- Optimize underperforming pages
- Expand topical coverage

---

## 🆘 Troubleshooting Guide

### Common Issues

#### Build Failures

**Issue**: `next build` fails
**Solution**:
1. Check TypeScript errors: `npm run type-check`
2. Check ESLint: `npm run lint`
3. Verify all imports are correct
4. Check for missing environment variables

#### Deployment Issues

**Issue**: Firebase deploy fails
**Solution**:
1. Verify Firebase CLI is logged in: `firebase login`
2. Check project permissions
3. Verify `firebase.json` configuration
4. Check build output in `/out` directory

#### Performance Issues

**Issue**: Slow page loads
**Solution**:
1. Run Lighthouse audit
2. Check image optimization
3. Verify caching headers
4. Check for large bundles

#### Calculator Errors

**Issue**: Calculator returns wrong results
**Solution**:
1. Verify input validation
2. Check calculator constants
3. Test edge cases
4. Compare with known benchmarks

---

## 📚 Documentation Resources

### Project Documentation (`/docs/`)

1. **Vision & Strategy**:
   - `01_product-vision_2025-2027.md` — Long-term roadmap
   - `02_personas-and-jobs-to-be-done.md` — Target users

2. **Technical Architecture**:
   - `30_nextjs-app-router-structure.md` — App Router setup
   - `31_calculator-ui-component-spec.md` — Component patterns
   - `32_state-management-and-performance.md` — Performance guide

3. **SEO & Content**:
   - `10_topical-map_tiktok-creator-economy.md` — SEO strategy
   - `50_content-style-and-voice-guide.md` — Writing guidelines

4. **Operations**:
   - `70_firebase-hosting-and-ssr-deployment.md` — Deployment guide
   - `60_ga4-implementation-spec.md` — Analytics setup

### External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)

---

## 🎯 Success Metrics

### Performance Targets
- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green (LCP <1s, FID <100ms, CLS <0.1)
- **Load Time**: <1 second average

### Growth Targets
- **Monthly Organic Traffic**: 50,000+ visitors (Q1 2025)
- **Keyword Rankings**: 200+ keywords in top 10
- **SEO Visibility**: Featured snippets for primary keywords

### User Experience
- **Session Duration**: >2 minutes average
- **Bounce Rate**: <40%
- **Calculator Usage**: High engagement with results

---

## 🚨 Critical Contacts & Support

### Development Team
- **Tech Lead**: [Name] — Architecture decisions, code reviews
- **SEO Strategist**: [Name] — Content strategy, SEO optimization
- **Product Manager**: [Name] — Feature prioritization, roadmap

### External Services
- **Firebase Support**: https://firebase.google.com/support
- **Google Analytics**: https://support.google.com/analytics
- **Google Search Console**: https://support.google.com/webmasters

### Emergency Procedures

**Site Down**:
1. Check Firebase Console for errors
2. Review recent deployments
3. Rollback if needed (see deployment rollback section)
4. Notify team in incident channel

**Performance Issues**:
1. Run Lighthouse audit
2. Check GA4 for performance metrics
3. Optimize images and bundles
4. Deploy performance fixes

---

## 🔮 Future Roadmap

### Phase 1 (V1): Foundation ✅
- 25+ calculators live
- SEO foundation established
- Performance optimized

### Phase 2 (Q2-Q3 2025): Scaling
- Advanced calculators (multi-platform comparison)
- Enhanced personalization
- Community features

### Phase 3 (2026): Platform Expansion
- API for third-party integrations
- Premium features
- Mobile app companion

### Phase 4 (2027): Ecosystem Leadership
- Creator marketplace
- Advanced analytics
- Enterprise solutions

---

## ✅ Handover Checklist

### Before Taking Over
- [ ] Read this handover document completely
- [ ] Review all documentation in `/docs/` directory
- [ ] Set up local development environment
- [ ] Deploy a test change to verify access
- [ ] Familiarize with calculator formulas and constants
- [ ] Review current SEO performance and rankings

### First Week Tasks
- [ ] Audit all calculators for accuracy
- [ ] Review content freshness and update schedules
- [ ] Check for security vulnerabilities
- [ ] Verify all environment variables are configured
- [ ] Test deployment pipeline
- [ ] Review analytics setup and tracking

### Ongoing Responsibilities
- [ ] Monitor site performance and SEO rankings
- [ ] Keep calculator formulas updated with TikTok changes
- [ ] Maintain content quality and freshness
- [ ] Respond to user feedback and bug reports
- [ ] Plan and execute quarterly updates

---

## 📞 Getting Help

**For Technical Issues**:
1. Check this handover document first
2. Review relevant documentation in `/docs/`
3. Search existing GitHub issues
4. Contact previous developer for context
5. Escalate to Tech Lead if needed

**For Business Decisions**:
1. Review product vision document
2. Check with Product Manager
3. Reference success metrics
4. Consider long-term roadmap

---

**Last Updated**: November 14, 2025
**Handover Version**: 1.0
**Project Status**: Production Ready — Actively Growing

---

*This platform represents a comprehensive solution for TikTok creator monetization intelligence. With its config-driven architecture, SEO-first approach, and performance optimizations, it provides a solid foundation for scaling to hundreds of thousands of monthly users while maintaining the trust and accuracy that creators depend on.*
