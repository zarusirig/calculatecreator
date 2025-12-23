# Calculator Config Spec

## Purpose

Defines the JSON/TypeScript configuration schema for all calculators, ensuring consistent structure, easy updates, and config-driven calculator generation.

## Owner

**Primary:** Senior Developer
**Collaborators:** Product Manager, Content Lead

## Strategic Disciplines

- **Systems Analysis** — Config architecture, data modeling
- **Structured Problem-Solving** — Schema design, validation
- **Mental Agility** — Update-friendly structure for formula changes

---

## Config-Driven Philosophy

**Goal:** Enable non-developers to update calculator parameters without code changes

**Benefits:**
1. **Rapid Updates:** Change RPM rates, niche multipliers without deploying code
2. **Consistency:** All calculators follow same structure
3. **Scalability:** Add new calculators by creating new config
4. **Testability:** Config is data, easy to test
5. **Documentation:** Config serves as calculator spec

---

## Calculator Config Schema

### TypeScript Interface

```ts
// types/calculator.ts

export interface CalculatorConfig {
  // Metadata
  id: string
  name: string
  slug: string
  description: string
  category: 'earnings' | 'performance' | 'growth'

  // SEO
  seo: {
    title: string
    metaDescription: string
    ogImage: string
  }

  // UI
  ui: {
    inputsTitle: string
    resultsTitle: string
    icon: string
  }

  // Inputs
  inputs: InputFieldConfig[]

  // Calculation
  calculation: {
    function: string // Function name in lib/calculators
    constants: Record<string, any> // RPM ranges, multipliers, etc.
  }

  // Results Display
  results: {
    primary: ResultConfig
    secondary?: ResultConfig[]
    interpretation: InterpretationConfig[]
  }

  // Content
  content: {
    methodologyId: string // References methodology in content config
    faqIds: string[] // References FAQs
    relatedCalculators: string[] // Calculator IDs
  }

  // Updates
  meta: {
    lastUpdated: string // ISO date
    dataVersion: string // "2025-Q1"
    nextReview: string // ISO date
  }
}

export interface InputFieldConfig {
  id: string
  label: string
  type: 'number' | 'slider' | 'select' | 'checkbox'
  required: boolean
  defaultValue?: any

  // Validation
  validation?: {
    min?: number
    max?: number
    step?: number
  }

  // Options (for select/checkbox)
  options?: {
    label: string
    value: string | number
  }[]

  // UI
  helperText?: string
  tooltip?: string
  unit?: string // "$", "%", "K"
  placeholder?: string
}

export interface ResultConfig {
  label: string
  valueKey: string // Key in calculation result object
  format: 'currency' | 'number' | 'percentage' | 'custom'
  formatOptions?: {
    decimals?: number
    prefix?: string
    suffix?: string
  }
}

export interface InterpretationConfig {
  condition: {
    field: string // Result field to check
    operator: '>' | '<' | '>=' | '<=' | '==' | 'between'
    value: number | [number, number]
  }
  type: 'success' | 'warning' | 'info'
  message: string
}
```

---

## Example: Creator Fund Calculator Config

```ts
// lib/config/calculators/creatorFund.config.ts

import { CalculatorConfig } from '@/types/calculator'

export const creatorFundConfig: CalculatorConfig = {
  // Metadata
  id: 'creator-fund',
  name: 'TikTok Creator Fund Calculator',
  slug: 'tiktok-creator-fund',
  description: 'Estimate your monthly earnings from the TikTok Creator Fund',
  category: 'earnings',

  // SEO
  seo: {
    title: 'TikTok Creator Fund Calculator - Estimate Your Earnings',
    metaDescription: 'Calculate your TikTok Creator Fund earnings based on views, engagement, and niche. Free tool with transparent methodology.',
    ogImage: '/images/og-creator-fund.png',
  },

  // UI
  ui: {
    inputsTitle: 'Enter Your TikTok Stats',
    resultsTitle: 'Your Estimated Earnings',
    icon: '/icons/creator-fund.svg',
  },

  // Inputs
  inputs: [
    {
      id: 'followers',
      label: 'Follower Count',
      type: 'number',
      required: true,
      validation: {
        min: 10000,
        max: 10000000,
      },
      helperText: 'Your total TikTok followers (minimum 10,000 for Creator Fund)',
      placeholder: 'e.g., 50000',
      unit: '',
    },
    {
      id: 'monthlyViews',
      label: 'Monthly Video Views',
      type: 'number',
      required: true,
      validation: {
        min: 100000,
        max: 100000000,
      },
      helperText: 'Total views on your videos in the last 30 days',
      placeholder: 'e.g., 2000000',
      unit: '',
    },
    {
      id: 'engagementRate',
      label: 'Engagement Rate',
      type: 'slider',
      required: true,
      defaultValue: 5.0,
      validation: {
        min: 0,
        max: 20,
        step: 0.1,
      },
      helperText: 'Average percentage of likes, comments, shares per video',
      tooltip: 'Engagement Rate = (Likes + Comments + Shares) / Followers × 100',
      unit: '%',
    },
    {
      id: 'niche',
      label: 'Content Niche',
      type: 'select',
      required: true,
      options: [
        { label: 'Lifestyle', value: 'lifestyle' },
        { label: 'Beauty & Fashion', value: 'beauty' },
        { label: 'Fitness & Health', value: 'fitness' },
        { label: 'Finance & Business', value: 'finance' },
        { label: 'Gaming', value: 'gaming' },
        { label: 'Food & Cooking', value: 'food' },
        { label: 'Comedy & Entertainment', value: 'comedy' },
        { label: 'Education', value: 'education' },
      ],
      helperText: 'Your primary content category',
    },
  ],

  // Calculation
  calculation: {
    function: 'calculateCreatorFund',
    constants: {
      baseRPM: { min: 0.02, max: 0.04 }, // Per 1,000 views
      engagementMultipliers: {
        low: { threshold: 2, multiplier: 0.8 }, // <2%
        medium: { threshold: 5, multiplier: 1.0 }, // 2-5%
        high: { threshold: 10, multiplier: 1.3 }, // 5-10%
        veryHigh: { threshold: 20, multiplier: 1.6 }, // >10%
      },
      nicheMultipliers: {
        lifestyle: 1.0,
        beauty: 1.2,
        fitness: 1.1,
        finance: 1.5,
        gaming: 0.95,
        food: 1.1,
        comedy: 0.9,
        education: 1.3,
      },
    },
  },

  // Results Display
  results: {
    primary: {
      label: 'Estimated Monthly Earnings',
      valueKey: 'monthlyEarnings',
      format: 'currency',
      formatOptions: {
        decimals: 0,
        prefix: '$',
      },
    },
    secondary: [
      {
        label: 'Estimated RPM',
        valueKey: 'rpm',
        format: 'currency',
        formatOptions: {
          decimals: 3,
          prefix: '$',
        },
      },
      {
        label: 'Per 1K Views',
        valueKey: 'per1kViews',
        format: 'currency',
        formatOptions: {
          decimals: 2,
          prefix: '$',
        },
      },
    ],
    interpretation: [
      {
        condition: {
          field: 'rpm',
          operator: '<',
          value: 0.025,
        },
        type: 'warning',
        message: 'Your RPM is below average. Focus on increasing engagement and watch time to boost earnings.',
      },
      {
        condition: {
          field: 'rpm',
          operator: 'between',
          value: [0.025, 0.04],
        },
        type: 'info',
        message: 'Your RPM is in the typical range for Creator Fund. Consider brand deals for higher earnings.',
      },
      {
        condition: {
          field: 'rpm',
          operator: '>',
          value: 0.04,
        },
        type: 'success',
        message: 'Excellent! Your RPM is above average. Keep creating high-engagement content.',
      },
    ],
  },

  // Content
  content: {
    methodologyId: 'creator-fund-methodology',
    faqIds: [
      'creator-fund-how-much-per-view',
      'creator-fund-payment-schedule',
      'creator-fund-eligibility',
    ],
    relatedCalculators: [
      'engagement-rate',
      'brand-deal-rate',
      'live-gifts',
    ],
  },

  // Meta
  meta: {
    lastUpdated: '2025-11-13',
    dataVersion: '2025-Q1',
    nextReview: '2026-02-01',
  },
}
```

---

## Example: Engagement Rate Calculator Config

```ts
// lib/config/calculators/engagementRate.config.ts

export const engagementRateConfig: CalculatorConfig = {
  id: 'engagement-rate',
  name: 'TikTok Engagement Rate Calculator',
  slug: 'tiktok-engagement-rate',
  description: 'Calculate your TikTok engagement rate and compare to your niche average',
  category: 'performance',

  seo: {
    title: 'TikTok Engagement Rate Calculator - Free Tool',
    metaDescription: 'Calculate your TikTok engagement rate in seconds. See how you compare to industry benchmarks.',
    ogImage: '/images/og-engagement.png',
  },

  ui: {
    inputsTitle: 'Enter Your Metrics',
    resultsTitle: 'Your Engagement Rate',
    icon: '/icons/engagement.svg',
  },

  inputs: [
    {
      id: 'followers',
      label: 'Total Followers',
      type: 'number',
      required: true,
      validation: { min: 1 },
      placeholder: 'e.g., 50000',
    },
    {
      id: 'likes',
      label: 'Average Likes per Video',
      type: 'number',
      required: true,
      validation: { min: 0 },
      placeholder: 'e.g., 2500',
    },
    {
      id: 'comments',
      label: 'Average Comments per Video',
      type: 'number',
      required: true,
      validation: { min: 0 },
      placeholder: 'e.g., 150',
    },
    {
      id: 'shares',
      label: 'Average Shares per Video',
      type: 'number',
      required: true,
      validation: { min: 0 },
      placeholder: 'e.g., 80',
    },
  ],

  calculation: {
    function: 'calculateEngagementRate',
    constants: {
      benchmarks: {
        excellent: 10,
        good: 5,
        average: 2,
        poor: 1,
      },
    },
  },

  results: {
    primary: {
      label: 'Your Engagement Rate',
      valueKey: 'rate',
      format: 'percentage',
      formatOptions: { decimals: 2, suffix: '%' },
    },
    secondary: [
      {
        label: 'Total Engagements',
        valueKey: 'totalEngagements',
        format: 'number',
      },
      {
        label: 'Benchmark',
        valueKey: 'benchmark',
        format: 'custom',
      },
    ],
    interpretation: [
      {
        condition: { field: 'rate', operator: '>', value: 10 },
        type: 'success',
        message: 'Excellent! Your engagement rate is well above average.',
      },
      {
        condition: { field: 'rate', operator: 'between', value: [5, 10] },
        type: 'success',
        message: 'Great engagement rate! You\'re performing better than most creators.',
      },
      {
        condition: { field: 'rate', operator: 'between', value: [2, 5] },
        type: 'info',
        message: 'Your engagement rate is average. Focus on creating more interactive content.',
      },
      {
        condition: { field: 'rate', operator: '<', value: 2 },
        type: 'warning',
        message: 'Your engagement rate is below average. Consider strategies to increase interaction.',
      },
    ],
  },

  content: {
    methodologyId: 'engagement-rate-methodology',
    faqIds: ['engagement-rate-formula', 'good-engagement-rate'],
    relatedCalculators: ['creator-fund', 'brand-deal-rate'],
  },

  meta: {
    lastUpdated: '2025-11-13',
    dataVersion: '2025-Q1',
    nextReview: '2026-02-01',
  },
}
```

---

## Centralized Config Export

```ts
// lib/config/calculators.config.ts

import { creatorFundConfig } from './calculators/creatorFund.config'
import { engagementRateConfig } from './calculators/engagementRate.config'
import { brandDealRateConfig } from './calculators/brandDealRate.config'
// ... import all calculator configs

export const calculatorConfig = {
  'creator-fund': creatorFundConfig,
  'engagement-rate': engagementRateConfig,
  'brand-deal-rate': brandDealRateConfig,
  // ... map all calculators
}

export type CalculatorType = keyof typeof calculatorConfig

// Helper function
export function getCalculatorConfig(id: CalculatorType) {
  return calculatorConfig[id]
}
```

---

## Usage in Components

```tsx
// components/calculator/CalculatorCard.tsx
import { getCalculatorConfig } from '@/lib/config/calculators.config'

export default function CalculatorCard({ type }: { type: CalculatorType }) {
  const config = getCalculatorConfig(type)

  return (
    <div>
      <h2>{config.ui.inputsTitle}</h2>

      {config.inputs.map(input => (
        <InputField key={input.id} {...input} />
      ))}

      <button onClick={() => calculate(config)}>
        Calculate
      </button>
    </div>
  )
}
```

---

## Niche Configuration

```ts
// lib/config/niches.config.ts

export interface NicheConfig {
  id: string
  name: string
  averageRPM: { min: number; max: number }
  averageEngagement: number // percentage
  multiplier: number // For Creator Fund calculations
  brandDealRates: {
    micro: { min: number; max: number } // 10K-50K followers
    mid: { min: number; max: number } // 50K-500K
    macro: { min: number; max: number } // 500K+
  }
}

export const nicheConfig: Record<string, NicheConfig> = {
  lifestyle: {
    id: 'lifestyle',
    name: 'Lifestyle',
    averageRPM: { min: 0.02, max: 0.04 },
    averageEngagement: 4.5,
    multiplier: 1.0,
    brandDealRates: {
      micro: { min: 100, max: 300 },
      mid: { min: 500, max: 2000 },
      macro: { min: 3000, max: 10000 },
    },
  },
  beauty: {
    id: 'beauty',
    name: 'Beauty & Fashion',
    averageRPM: { min: 0.025, max: 0.05 },
    averageEngagement: 6.2,
    multiplier: 1.2,
    brandDealRates: {
      micro: { min: 150, max: 400 },
      mid: { min: 800, max: 3000 },
      macro: { min: 5000, max: 15000 },
    },
  },
  finance: {
    id: 'finance',
    name: 'Finance & Business',
    averageRPM: { min: 0.04, max: 0.08 },
    averageEngagement: 3.8,
    multiplier: 1.5,
    brandDealRates: {
      micro: { min: 200, max: 600 },
      mid: { min: 1200, max: 5000 },
      macro: { min: 8000, max: 25000 },
    },
  },
  // ... other niches
}
```

---

## Config Validation

```ts
// lib/config/validate.ts

import { z } from 'zod'

const calculatorConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  category: z.enum(['earnings', 'performance', 'growth']),
  seo: z.object({
    title: z.string(),
    metaDescription: z.string(),
    ogImage: z.string(),
  }),
  inputs: z.array(z.object({
    id: z.string(),
    label: z.string(),
    type: z.enum(['number', 'slider', 'select', 'checkbox']),
    required: z.boolean(),
  })),
  // ... rest of schema
})

export function validateCalculatorConfig(config: any) {
  return calculatorConfigSchema.parse(config)
}

// Run at build time
import { calculatorConfig } from './calculators.config'

Object.values(calculatorConfig).forEach(config => {
  validateCalculatorConfig(config)
})
```

---

## Update Workflow

### When to Update Config

1. **TikTok announces Creator Fund rate changes** → Update `baseRPM` in constants
2. **New niche data available** → Update `nicheMultipliers`
3. **Engagement patterns shift** → Update `engagementMultipliers`
4. **New calculator needed** → Create new config file

### Update Process

1. Edit config file (e.g., `creatorFund.config.ts`)
2. Update `meta.lastUpdated` and `meta.dataVersion`
3. Commit changes
4. Deploy (triggers automatic rebuild)
5. Config changes take effect immediately (no code changes needed)

---

## Acceptance Criteria

✅ **Schema Defined:** Complete TypeScript interfaces for all config types
✅ **Examples:** 2+ fully configured calculator examples
✅ **Validation:** Zod schema for config validation
✅ **Niche Data:** Centralized niche configuration
✅ **Update Process:** Clear workflow for updating configs
✅ **Usage Documented:** How components consume config

---

## Handoff Checklist

- [ ] All calculator configs created
- [ ] Niche config created with all verticals
- [ ] Config validation implemented
- [ ] Type safety verified with TypeScript
- [ ] Config update process documented
- [ ] All constants (RPM, multipliers) sourced from research
- [ ] Content team trained on updating configs

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
**Next Review:** 2025-Q2 (Config Structure Review)
