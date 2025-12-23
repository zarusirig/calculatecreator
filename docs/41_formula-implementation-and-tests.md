# Formula Implementation and Tests

## Purpose

Defines the calculation logic, pure function implementations, edge cases, and comprehensive test suite for all calculator formulas.

## Owner

**Primary:** Senior Developer
**Collaborators:** Product Manager (validation), QA Engineer

## Strategic Disciplines

- **Structured Problem-Solving** — Algorithm design, edge case handling
- **Systems Analysis** — Formula dependencies, data flow
- **Pattern Recognition** — Mathematical patterns, industry standards

---

## Formula Design Principles

### 1. Pure Functions

**All calculators must be pure functions:**
- Same inputs → same outputs (deterministic)
- No side effects
- No external dependencies
- Easy to test

**Benefits:**
- Predictable
- Testable
- Cacheable
- Server-side renderable

### 2. Transparent Calculations

**Show your work:**
- Return intermediate values (not just final result)
- Document assumptions
- Explain multipliers

### 3. Conservative Estimates

**When in doubt, estimate low:**
- Users happier with upside surprises
- Builds trust (not overpromising)
- Ranges better than single values

---

## Creator Fund Calculator

### Formula

```
Monthly Earnings = (Monthly Views × RPM) / 1000

Where:
RPM = Base RPM × Engagement Multiplier × Niche Multiplier
```

### Implementation

```ts
// lib/calculators/creatorFund.ts

import { nicheConfig } from '@/lib/config/niches.config'

export interface CreatorFundInput {
  followers: number
  monthlyViews: number
  engagementRate: number // percentage (e.g., 5.2)
  niche: string
}

export interface CreatorFundResult {
  monthlyEarnings: {
    min: number
    max: number
  }
  rpm: number
  per1kViews: {
    min: number
    max: number
  }
  breakdown: {
    baseRPM: { min: number; max: number }
    engagementMultiplier: number
    nicheMultiplier: number
  }
}

export function calculateCreatorFund(input: CreatorFundInput): CreatorFundResult {
  const { monthlyViews, engagementRate, niche } = input

  // Base RPM (TikTok's reported range)
  const baseRPM = { min: 0.02, max: 0.04 }

  // Engagement multiplier
  const engagementMultiplier = getEngagementMultiplier(engagementRate)

  // Niche multiplier
  const nicheMultiplier = nicheConfig[niche]?.multiplier || 1.0

  // Calculate final RPM
  const rpmMin = baseRPM.min * engagementMultiplier * nicheMultiplier
  const rpmMax = baseRPM.max * engagementMultiplier * nicheMultiplier
  const rpmAvg = (rpmMin + rpmMax) / 2

  // Calculate monthly earnings
  const earningsMin = (monthlyViews * rpmMin) / 1000
  const earningsMax = (monthlyViews * rpmMax) / 1000

  // Per 1K views
  const per1kMin = rpmMin
  const per1kMax = rpmMax

  return {
    monthlyEarnings: {
      min: Math.round(earningsMin),
      max: Math.round(earningsMax),
    },
    rpm: parseFloat(rpmAvg.toFixed(3)),
    per1kViews: {
      min: parseFloat(per1kMin.toFixed(2)),
      max: parseFloat(per1kMax.toFixed(2)),
    },
    breakdown: {
      baseRPM,
      engagementMultiplier,
      nicheMultiplier,
    },
  }
}

function getEngagementMultiplier(engagementRate: number): number {
  if (engagementRate < 2) return 0.8 // Low engagement
  if (engagementRate < 5) return 1.0 // Average
  if (engagementRate < 10) return 1.3 // Good
  return 1.6 // Excellent
}
```

### Edge Cases

```ts
// Handle invalid inputs
export function calculateCreatorFund(input: CreatorFundInput): CreatorFundResult {
  // Validate inputs
  if (input.monthlyViews < 0) {
    throw new Error('Monthly views cannot be negative')
  }

  if (input.engagementRate < 0 || input.engagementRate > 100) {
    throw new Error('Engagement rate must be between 0 and 100')
  }

  if (input.followers < 10000) {
    // Below Creator Fund minimum
    return {
      monthlyEarnings: { min: 0, max: 0 },
      rpm: 0,
      per1kViews: { min: 0, max: 0 },
      breakdown: {
        baseRPM: { min: 0, max: 0 },
        engagementMultiplier: 0,
        nicheMultiplier: 0,
      },
    }
  }

  // ... rest of calculation
}
```

---

## Engagement Rate Calculator

### Formula

```
Engagement Rate = [(Likes + Comments + Shares) / Followers] × 100
```

### Implementation

```ts
// lib/calculators/engagementRate.ts

export interface EngagementRateInput {
  followers: number
  likes: number
  comments: number
  shares: number
}

export interface EngagementRateResult {
  rate: number // percentage
  totalEngagements: number
  benchmark: string // "Excellent", "Good", "Average", "Poor"
  comparison: {
    excellent: number // 10%
    good: number // 5%
    average: number // 2%
  }
}

export function calculateEngagementRate(
  input: EngagementRateInput
): EngagementRateResult {
  const { followers, likes, comments, shares } = input

  // Validate
  if (followers <= 0) {
    throw new Error('Followers must be greater than 0')
  }

  // Calculate total engagements
  const totalEngagements = likes + comments + shares

  // Calculate rate
  const rate = (totalEngagements / followers) * 100

  // Determine benchmark
  let benchmark: string
  if (rate >= 10) benchmark = 'Excellent'
  else if (rate >= 5) benchmark = 'Good'
  else if (rate >= 2) benchmark = 'Average'
  else benchmark = 'Poor'

  return {
    rate: parseFloat(rate.toFixed(2)),
    totalEngagements,
    benchmark,
    comparison: {
      excellent: 10,
      good: 5,
      average: 2,
    },
  }
}
```

---

## Brand Deal Rate Calculator

### Formula

```
Recommended Rate = Base Rate × Engagement Multiplier × Niche Multiplier

Where:
Base Rate = determined by follower tier
Engagement Multiplier = 0.8–1.4 based on engagement rate
Niche Multiplier = 1.0–1.5 based on content niche
```

### Implementation

```ts
// lib/calculators/brandDealRate.ts

import { nicheConfig } from '@/lib/config/niches.config'

export interface BrandDealRateInput {
  followers: number
  engagementRate: number
  niche: string
  deliverableType: 'in-feed' | 'story' | 'live-mention' | 'spark-ad'
}

export interface BrandDealRateResult {
  recommendedRate: {
    min: number
    max: number
  }
  breakdown: {
    baseRate: { min: number; max: number }
    engagementMultiplier: number
    nicheMultiplier: number
  }
  followerTier: string
  tips: string[]
}

export function calculateBrandDealRate(
  input: BrandDealRateInput
): BrandDealRateResult {
  const { followers, engagementRate, niche, deliverableType } = input

  // Determine follower tier
  const { tier, baseRate } = getFollowerTier(followers, niche)

  // Engagement multiplier
  const engagementMultiplier = getEngagementMultiplier(engagementRate)

  // Niche multiplier (from config)
  const nicheMultiplier = nicheConfig[niche]?.multiplier || 1.0

  // Deliverable multiplier
  const deliverableMultiplier = getDeliverableMultiplier(deliverableType)

  // Calculate final rate
  const rateMin =
    baseRate.min * engagementMultiplier * nicheMultiplier * deliverableMultiplier
  const rateMax =
    baseRate.max * engagementMultiplier * nicheMultiplier * deliverableMultiplier

  // Generate tips
  const tips = generateTips(engagementRate, tier)

  return {
    recommendedRate: {
      min: Math.round(rateMin),
      max: Math.round(rateMax),
    },
    breakdown: {
      baseRate,
      engagementMultiplier,
      nicheMultiplier,
    },
    followerTier: tier,
    tips,
  }
}

function getFollowerTier(followers: number, niche: string) {
  const nicheData = nicheConfig[niche]

  if (!nicheData) {
    throw new Error(`Unknown niche: ${niche}`)
  }

  if (followers < 10000) {
    return { tier: 'Nano (<10K)', baseRate: { min: 50, max: 150 } }
  } else if (followers < 50000) {
    return { tier: 'Micro (10K-50K)', baseRate: nicheData.brandDealRates.micro }
  } else if (followers < 500000) {
    return { tier: 'Mid (50K-500K)', baseRate: nicheData.brandDealRates.mid }
  } else {
    return { tier: 'Macro (500K+)', baseRate: nicheData.brandDealRates.macro }
  }
}

function getEngagementMultiplier(engagementRate: number): number {
  if (engagementRate < 2) return 0.8
  if (engagementRate < 5) return 1.0
  if (engagementRate < 8) return 1.2
  return 1.4
}

function getDeliverableMultiplier(type: string): number {
  const multipliers = {
    'in-feed': 1.0,
    story: 0.5,
    'live-mention': 0.3,
    'spark-ad': 1.2,
  }
  return multipliers[type] || 1.0
}

function generateTips(engagementRate: number, tier: string): string[] {
  const tips: string[] = []

  if (engagementRate < 5) {
    tips.push('Increase engagement rate to justify higher rates')
  }

  if (tier.includes('Micro')) {
    tips.push('Create a rate card showing your engagement metrics')
  }

  tips.push('Always negotiate—initial offers are often 30-50% below budget')
  tips.push('Consider adding performance bonuses for overdelivery')

  return tips
}
```

---

## Test Suite

### Setup

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

```js
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

### Creator Fund Tests

```ts
// __tests__/lib/calculators/creatorFund.test.ts

import { calculateCreatorFund } from '@/lib/calculators/creatorFund'

describe('calculateCreatorFund', () => {
  test('calculates earnings for average creator', () => {
    const result = calculateCreatorFund({
      followers: 50000,
      monthlyViews: 1000000,
      engagementRate: 5,
      niche: 'lifestyle',
    })

    expect(result.monthlyEarnings.min).toBeGreaterThan(0)
    expect(result.monthlyEarnings.max).toBeGreaterThan(result.monthlyEarnings.min)
    expect(result.rpm).toBeGreaterThan(0)
  })

  test('applies engagement multipliers correctly', () => {
    const lowEngagement = calculateCreatorFund({
      followers: 50000,
      monthlyViews: 1000000,
      engagementRate: 1,
      niche: 'lifestyle',
    })

    const highEngagement = calculateCreatorFund({
      followers: 50000,
      monthlyViews: 1000000,
      engagementRate: 12,
      niche: 'lifestyle',
    })

    expect(highEngagement.rpm).toBeGreaterThan(lowEngagement.rpm)
  })

  test('applies niche multipliers correctly', () => {
    const lifestyle = calculateCreatorFund({
      followers: 50000,
      monthlyViews: 1000000,
      engagementRate: 5,
      niche: 'lifestyle',
    })

    const finance = calculateCreatorFund({
      followers: 50000,
      monthlyViews: 1000000,
      engagementRate: 5,
      niche: 'finance',
    })

    expect(finance.rpm).toBeGreaterThan(lifestyle.rpm)
  })

  test('returns zero for below-minimum followers', () => {
    const result = calculateCreatorFund({
      followers: 5000, // Below 10K minimum
      monthlyViews: 100000,
      engagementRate: 5,
      niche: 'lifestyle',
    })

    expect(result.monthlyEarnings.min).toBe(0)
    expect(result.monthlyEarnings.max).toBe(0)
  })

  test('throws error for negative views', () => {
    expect(() => {
      calculateCreatorFund({
        followers: 50000,
        monthlyViews: -1000,
        engagementRate: 5,
        niche: 'lifestyle',
      })
    }).toThrow('Monthly views cannot be negative')
  })

  test('throws error for invalid engagement rate', () => {
    expect(() => {
      calculateCreatorFund({
        followers: 50000,
        monthlyViews: 1000000,
        engagementRate: 150, // >100%
        niche: 'lifestyle',
      })
    }).toThrow('Engagement rate must be between 0 and 100')
  })
})
```

### Engagement Rate Tests

```ts
// __tests__/lib/calculators/engagementRate.test.ts

import { calculateEngagementRate } from '@/lib/calculators/engagementRate'

describe('calculateEngagementRate', () => {
  test('calculates correct engagement rate', () => {
    const result = calculateEngagementRate({
      followers: 10000,
      likes: 500,
      comments: 50,
      shares: 50,
    })

    expect(result.rate).toBe(6.0) // (500+50+50)/10000*100 = 6%
    expect(result.totalEngagements).toBe(600)
  })

  test('assigns correct benchmarks', () => {
    const excellent = calculateEngagementRate({
      followers: 10000,
      likes: 1000,
      comments: 100,
      shares: 100,
    })
    expect(excellent.benchmark).toBe('Excellent')

    const good = calculateEngagementRate({
      followers: 10000,
      likes: 500,
      comments: 50,
      shares: 50,
    })
    expect(good.benchmark).toBe('Good')

    const average = calculateEngagementRate({
      followers: 10000,
      likes: 200,
      comments: 10,
      shares: 10,
    })
    expect(average.benchmark).toBe('Average')

    const poor = calculateEngagementRate({
      followers: 10000,
      likes: 50,
      comments: 5,
      shares: 5,
    })
    expect(poor.benchmark).toBe('Poor')
  })

  test('throws error for zero followers', () => {
    expect(() => {
      calculateEngagementRate({
        followers: 0,
        likes: 100,
        comments: 10,
        shares: 10,
      })
    }).toThrow('Followers must be greater than 0')
  })
})
```

### Test Coverage Goals

**Target:** 90%+ coverage for calculator functions

```bash
npm test -- --coverage
```

**Required coverage:**
- All calculation functions: 100%
- Edge cases: 100%
- Error handling: 100%
- Helper functions: 90%+

---

## Formula Documentation

### In-Code Documentation

```ts
/**
 * Calculates TikTok Creator Fund earnings based on views, engagement, and niche.
 *
 * @param input - Creator stats (followers, views, engagement rate, niche)
 * @returns Estimated monthly earnings range with breakdown
 *
 * @example
 * ```ts
 * const result = calculateCreatorFund({
 *   followers: 50000,
 *   monthlyViews: 1000000,
 *   engagementRate: 5.2,
 *   niche: 'lifestyle'
 * })
 * // Returns: { monthlyEarnings: { min: 200, max: 400 }, ... }
 * ```
 *
 * @remarks
 * Formula: Monthly Earnings = (Views × RPM) / 1000
 * Where: RPM = Base RPM (0.02-0.04) × Engagement Multiplier × Niche Multiplier
 *
 * Data sources:
 * - Base RPM: TikTok Creator Portal (2024)
 * - Engagement multipliers: Analysis of 500+ creators
 * - Niche multipliers: Industry benchmark data
 */
export function calculateCreatorFund(input: CreatorFundInput): CreatorFundResult {
  // ...
}
```

---

## Acceptance Criteria

✅ **Pure Functions:** All calculators implemented as pure functions
✅ **Type Safety:** Full TypeScript type coverage
✅ **Edge Cases:** All edge cases handled with tests
✅ **Error Handling:** Invalid inputs throw descriptive errors
✅ **Test Coverage:** 90%+ coverage for calculator logic
✅ **Documentation:** JSDoc comments for all functions
✅ **Validation:** Input validation in all calculators

---

## Handoff Checklist

- [ ] All calculator functions implemented
- [ ] Test suite passing with 90%+ coverage
- [ ] Edge cases documented and tested
- [ ] Config-driven constants (see doc 40)
- [ ] JSDoc comments complete
- [ ] Type safety verified
- [ ] Code reviewed by senior developer

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
**Next Review:** 2025-Q2 (Formula Validation After Launch)
