# Calculator UI Component Spec

## Purpose

Defines the React component architecture, props interfaces, state management patterns, and reusable component library for all calculator implementations.

## Owner

**Primary:** Tech Lead
**Collaborators:** Frontend Developers, Design Lead

## Strategic Disciplines

- **Systems Analysis** — Component hierarchy, data flow, reusability patterns
- **Structured Problem-Solving** — State management, performance optimization
- **Pattern Recognition** — React best practices, DRY principles

---

## Component Architecture

### Component Hierarchy

```
CalculatorCard (Client Component)
├── InputSection
│   ├── InputField (reusable)
│   ├── Slider (reusable)
│   ├── SelectDropdown (reusable)
│   └── CalculateButton
│
└── ResultsSection
    ├── PrimaryResult
    ├── SecondaryMetrics
    ├── InterpretationBox
    └── NextSteps
```

---

## Core Components

### 1. CalculatorCard (Container)

**Purpose:** Main calculator wrapper, manages state and calculation logic

**File:** `src/components/calculator/CalculatorCard.tsx`

**Props:**
```tsx
interface CalculatorCardProps {
  type: 'creator-fund' | 'engagement-rate' | 'brand-deal-rate' | string
  config?: CalculatorConfig // Optional: override default config
}
```

**State:**
```tsx
interface CalculatorState {
  inputs: Record<string, any>
  results: CalculatorResult | null
  loading: boolean
  errors: Record<string, string>
}
```

**Implementation:**
```tsx
'use client'

import { useState } from 'react'
import { calculatorConfig } from '@/lib/config/calculators.config'
import { calculateCreatorFund } from '@/lib/calculators/creatorFund'
import InputField from './InputField'
import ResultsDisplay from './ResultsDisplay'
import { trackCalculation } from '@/lib/analytics/ga4'

export default function CalculatorCard({ type }: CalculatorCardProps) {
  const config = calculatorConfig[type]

  const [inputs, setInputs] = useState<Record<string, any>>({})
  const [results, setResults] = useState<CalculatorResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (id: string, value: any) => {
    setInputs(prev => ({ ...prev, [id]: value }))
    // Clear error for this field
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {}

    config.inputs.forEach(field => {
      const value = inputs[field.id]

      if (field.required && !value) {
        newErrors[field.id] = 'This field is required'
      }

      if (field.type === 'number' && field.min !== undefined && value < field.min) {
        newErrors[field.id] = `Minimum value is ${field.min}`
      }

      if (field.type === 'number' && field.max !== undefined && value > field.max) {
        newErrors[field.id] = `Maximum value is ${field.max}`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = async () => {
    if (!validateInputs()) return

    setLoading(true)

    // Simulate async calculation (in case we add API call later)
    await new Promise(resolve => setTimeout(resolve, 300))

    try {
      // Call calculator function based on type
      const calculatorFunctions = {
        'creator-fund': calculateCreatorFund,
        'engagement-rate': calculateEngagementRate,
        'brand-deal-rate': calculateBrandDealRate,
      }

      const calculate = calculatorFunctions[type]
      const result = calculate(inputs)

      setResults(result)

      // Track in GA4
      trackCalculation(type, inputs, result)

      // Scroll to results (mobile)
      if (window.innerWidth < 768) {
        setTimeout(() => {
          document.getElementById('results')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }, 100)
      }
    } catch (error) {
      console.error('Calculation error:', error)
      setErrors({ general: 'Calculation failed. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {config.inputsTitle || 'Enter Your Details'}
          </h2>

          {config.inputs.map(field => (
            <InputField
              key={field.id}
              {...field}
              value={inputs[field.id] || ''}
              onChange={(value) => handleInputChange(field.id, value)}
              error={errors[field.id]}
            />
          ))}

          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800">
              {errors.general}
            </div>
          )}

          <button
            onClick={handleCalculate}
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-lg font-semibold rounded-lg transition-colors duration-200"
          >
            {loading ? 'Calculating...' : 'Calculate My Earnings'}
          </button>
        </div>

        {/* Results Section */}
        <div id="results">
          <ResultsDisplay
            results={results}
            loading={loading}
            calculatorType={type}
          />
        </div>
      </div>
    </div>
  )
}
```

---

### 2. InputField (Reusable)

**Purpose:** Polymorphic input component (text, number, slider, select)

**File:** `src/components/calculator/InputField.tsx`

**Props:**
```tsx
interface InputFieldProps {
  id: string
  label: string
  type: 'number' | 'text' | 'slider' | 'select'
  value: any
  onChange: (value: any) => void
  error?: string
  helperText?: string
  min?: number
  max?: number
  step?: number
  options?: { label: string; value: string }[]
  placeholder?: string
  required?: boolean
  tooltip?: string
}
```

**Implementation:**
```tsx
'use client'

import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function InputField({
  id,
  label,
  type,
  value,
  onChange,
  error,
  helperText,
  min,
  max,
  step = 1,
  options,
  placeholder,
  required,
  tooltip,
}: InputFieldProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const renderInput = () => {
    const baseClasses = `w-full px-4 py-3 text-lg border-2 rounded-lg transition-all duration-200 focus:outline-none ${
      error
        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
        : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
    }`

    switch (type) {
      case 'number':
        return (
          <input
            id={id}
            type="number"
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            className={baseClasses}
            aria-describedby={helperText ? `${id}-helper` : undefined}
            aria-invalid={!!error}
            required={required}
          />
        )

      case 'text':
        return (
          <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={baseClasses}
            aria-describedby={helperText ? `${id}-helper` : undefined}
            aria-invalid={!!error}
            required={required}
          />
        )

      case 'select':
        return (
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseClasses}
            aria-describedby={helperText ? `${id}-helper` : undefined}
            aria-invalid={!!error}
            required={required}
          >
            <option value="">Select...</option>
            {options?.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )

      case 'slider':
        return (
          <div>
            <input
              id={id}
              type="range"
              value={value}
              onChange={(e) => onChange(parseFloat(e.target.value))}
              min={min || 0}
              max={max || 100}
              step={step}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              aria-describedby={helperText ? `${id}-helper` : undefined}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              required={required}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>{min || 0}</span>
              <span className="font-semibold text-blue-600">{value}</span>
              <span>{max || 100}</span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-sm font-semibold text-gray-900"
      >
        {label}
        {required && <span className="text-red-500">*</span>}

        {tooltip && (
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="More information"
            >
              <InformationCircleIcon className="w-5 h-5" />
            </button>

            {showTooltip && (
              <div className="absolute z-10 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg -top-2 left-full ml-2">
                {tooltip}
                <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -left-1 top-4" />
              </div>
            )}
          </div>
        )}
      </label>

      {renderInput()}

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={`${id}-helper`} className="text-sm text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  )
}
```

---

### 3. ResultsDisplay

**Purpose:** Display calculation results with animation

**File:** `src/components/calculator/ResultsDisplay.tsx`

**Props:**
```tsx
interface ResultsDisplayProps {
  results: CalculatorResult | null
  loading: boolean
  calculatorType: string
}

interface CalculatorResult {
  primary: {
    label: string
    value: string
    range?: { min: string; max: string }
  }
  secondary?: {
    label: string
    value: string
  }[]
  interpretation?: {
    text: string
    type: 'success' | 'warning' | 'info'
  }
  nextSteps?: string[]
  relatedLinks?: {
    text: string
    url: string
  }[]
}
```

**Implementation:**
```tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export default function ResultsDisplay({
  results,
  loading,
  calculatorType,
}: ResultsDisplayProps) {
  if (loading) {
    return (
      <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    )
  }

  if (!results) {
    return (
      <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px] text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-gray-600">
          Enter your details and click Calculate to see your results
        </p>
      </div>
    )
  }

  const interpretationIcons = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
  }

  const interpretationColors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  }

  const Icon = results.interpretation ? interpretationIcons[results.interpretation.type] : null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="results"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200"
      >
        {/* Primary Result */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {results.primary.label}
          </h3>

          {results.primary.range ? (
            <>
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-5xl font-bold text-blue-600 mb-2"
              >
                {results.primary.range.min}–{results.primary.range.max}
              </motion.p>
            </>
          ) : (
            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-5xl font-bold text-blue-600 mb-2"
            >
              {results.primary.value}
            </motion.p>
          )}
        </div>

        {/* Secondary Metrics */}
        {results.secondary && results.secondary.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {results.secondary.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
              >
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-xl font-bold text-gray-900">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Interpretation */}
        {results.interpretation && (
          <div className={`rounded-lg p-4 border flex gap-3 mb-4 ${interpretationColors[results.interpretation.type]}`}>
            {Icon && <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />}
            <p className="text-sm">{results.interpretation.text}</p>
          </div>
        )}

        {/* Next Steps */}
        {results.nextSteps && results.nextSteps.length > 0 && (
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Want to earn more?
            </p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              {results.nextSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Links */}
        {results.relatedLinks && results.relatedLinks.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {results.relatedLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="text-sm text-blue-600 underline hover:text-blue-700"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
```

---

### 4. Slider Component (Enhanced)

**Purpose:** Custom slider with visual feedback

**File:** `src/components/calculator/Slider.tsx`

```tsx
'use client'

import { useState } from 'react'

interface SliderProps {
  id: string
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit?: string
  helperText?: string
}

export default function Slider({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
  helperText,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-gray-900">
          {label}
        </label>
        <span className="text-lg font-bold text-blue-600">
          {value}{unit}
        </span>
      </div>

      <div className="relative">
        <input
          id={id}
          type="range"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #0066FF ${percentage}%, #E5E7EB ${percentage}%)`,
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-600">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>

      {helperText && (
        <p className="text-sm text-gray-600">{helperText}</p>
      )}
    </div>
  )
}
```

---

## Supporting Components

### 5. MethodologySection

**File:** `src/components/calculator/MethodologySection.tsx`

```tsx
interface MethodologySectionProps {
  calculatorType: string
}

export default function MethodologySection({ calculatorType }: MethodologySectionProps) {
  const methodologies = {
    'creator-fund': {
      title: 'How We Calculate Creator Fund Earnings',
      formula: 'Monthly Earnings = (Monthly Views × RPM) / 1000',
      assumptions: [
        'Base RPM: $0.02–$0.04 per 1,000 views',
        'Engagement Multiplier: Higher engagement = higher RPM',
        'Niche Factor: Premium niches earn 1.2–1.5× more',
      ],
      sources: [
        'TikTok Creator Portal official documentation',
        'Survey of 500+ creators (Q4 2024)',
        'Industry reports from Influencer Marketing Hub',
      ],
    },
    // ... other calculators
  }

  const methodology = methodologies[calculatorType]

  if (!methodology) return null

  return (
    <section id="methodology" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {methodology.title}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Formula</h3>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              {methodology.formula}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Assumptions</h3>
            <ul className="space-y-2">
              {methodology.assumptions.map((assumption, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">{assumption}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Sources</h3>
            <ul className="space-y-2">
              {methodology.sources.map((source, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## State Management Patterns

### Local State (useState)

**Use for:** Calculator inputs, UI state

```tsx
const [followers, setFollowers] = useState<number>(0)
const [niche, setNiche] = useState<string>('')
```

### No Global State Needed (V1)

**Rationale:**
- No shared state across pages
- Each calculator is self-contained
- No user authentication
- No persistent data

**Future (V2):** If adding user accounts, consider:
- React Context for theme/preferences
- Zustand for client-side state
- TanStack Query for server state (if adding API)

---

## Performance Optimization

### Memoization

```tsx
import { useMemo } from 'react'

const expensiveCalculation = useMemo(() => {
  return heavyComputation(inputs)
}, [inputs])
```

### Debouncing (for live calculations)

```tsx
import { useEffect, useState } from 'react'

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

// Usage
const debouncedFollowers = useDebounce(followers, 500)
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
})
```

---

## Acceptance Criteria

✅ **Component Hierarchy:** Clear parent-child relationships defined
✅ **Reusable Components:** InputField, Slider, ResultsDisplay built for reuse
✅ **Props Interfaces:** All component props typed with TypeScript
✅ **State Management:** Local state patterns documented, no global state needed
✅ **Error Handling:** Input validation and error display implemented
✅ **Accessibility:** ARIA labels, keyboard navigation, screen reader support
✅ **Performance:** Memoization, debouncing, code splitting patterns documented
✅ **Animation:** Framer Motion for result reveals

---

## Handoff Checklist

- [ ] All components have TypeScript interfaces
- [ ] Reusable components in `/components/calculator/`
- [ ] Calculator logic separated into `/lib/calculators/`
- [ ] Config-driven architecture (see doc 40)
- [ ] Accessibility tested with keyboard and screen reader
- [ ] Performance tested (no unnecessary re-renders)
- [ ] Animation tested on low-end devices
- [ ] Error states designed and implemented

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Development
**Next Review:** 2025-Q2 (Post-Launch Component Refactoring)
