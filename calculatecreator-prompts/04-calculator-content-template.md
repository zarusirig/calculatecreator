# Prompt 04: Calculator Page Content Template

## Objective
Create a standardized content structure/template that can be used across all 36 calculator pages. This ensures consistency and makes the batch enrichment process faster.

## Priority
🟠 **HIGH** - This template enables efficient batch processing of all calculators.

## Prompt

```
Create a standardized content template/structure for enriching calculator pages. This template will be used across all 36 calculators to ensure consistency.

## Analyze Current Calculator Structure
First, examine these calculator pages to understand current patterns:
- /calculators/engagement-rate (best current example, ~600 words)
- /calculators/tiktok-money (thin example, ~150 words)
- /calculators/watch-time (thin example, ~200 words)

Identify:
- Current component structure
- How content sections are organized
- Styling patterns used
- Where to inject new content

## Create Content Section Components

### 1. CalculatorMethodology Component
```tsx
interface MethodologyProps {
  title: string;  // e.g., "How We Calculate Your Engagement Rate"
  formula?: string;  // e.g., "(Likes + Comments + Shares) / Followers × 100"
  explanation: string;  // 100-150 words explaining the calculation
  dataSource?: string;  // Where data comes from
  limitations?: string[];  // Any caveats
}
```

### 2. CalculatorBenchmarks Component
```tsx
interface BenchmarkProps {
  metric: string;  // e.g., "Engagement Rate"
  benchmarks: {
    label: string;  // "Excellent", "Good", "Average", "Below Average"
    range: string;  // "8%+", "5-8%", "3-5%", "<3%"
    color: string;  // Visual indicator color
    description?: string;  // Brief context
  }[];
}
```

### 3. WhyItMatters Component
```tsx
interface WhyItMattersProps {
  title: string;  // e.g., "Why Engagement Rate Matters"
  points: {
    icon?: string;
    heading: string;
    description: string;  // 30-50 words each
    linkTo?: string;  // Related calculator or guide
  }[];
}
```

### 4. HowToImprove Component
```tsx
interface HowToImproveProps {
  metric: string;
  tips: {
    title: string;
    description: string;  // 20-40 words
    icon?: string;
  }[];
  relatedGuide?: {
    title: string;
    url: string;
  };
}
```

### 5. RealExample Component
```tsx
interface RealExampleProps {
  scenario: string;  // "Let's say you have 50,000 followers..."
  inputs: { label: string; value: string }[];
  calculation: string;
  result: string;
  interpretation: string;  // What this means for the creator
}
```

### 6. RelatedCalculators Component
```tsx
interface RelatedCalculatorsProps {
  calculators: {
    name: string;
    slug: string;
    description: string;  // One sentence
    icon?: string;
  }[];
}
```

### 7. CalculatorFAQ Component
```tsx
interface CalculatorFAQProps {
  questions: {
    question: string;
    answer: string;  // 30-50 words
  }[];
  includeSchema?: boolean;  // Add FAQ schema markup
}
```

## Complete Calculator Page Template
Create a wrapper that combines all sections:

```tsx
interface CalculatorPageContentProps {
  calculatorName: string;
  calculatorSlug: string;
  introduction: string;  // 50-100 words
  methodology: MethodologyProps;
  benchmarks: BenchmarkProps;
  whyItMatters: WhyItMattersProps;
  howToImprove: HowToImproveProps;
  realExample: RealExampleProps;
  relatedCalculators: RelatedCalculatorsProps;
  faq: CalculatorFAQProps;
  author: AuthorAttributionProps;
}
```

## Styling Requirements
- Use existing Tailwind classes / design system
- Consistent spacing between sections
- Clear visual hierarchy with headings
- Mobile responsive
- Smooth scroll anchors for each section (optional)

## Content Injection Pattern
Show how to add these new sections to existing calculator pages WITHOUT breaking:
- The calculator tool itself
- Existing functionality
- Current styling

## Output Files Needed
1. Component files for each section
2. TypeScript interfaces/types
3. Example usage showing how to compose a full page
4. A "thin" calculator page transformed into the new structure

Please implement these components matching existing site patterns.
```

## Expected Output
- 7+ reusable content section components
- TypeScript interfaces for all props
- Example of a transformed calculator page
- Documentation on usage

## Validation Checklist
- [ ] All 7 section components created
- [ ] TypeScript interfaces defined
- [ ] Matches existing styling
- [ ] Mobile responsive
- [ ] Example transformation complete
- [ ] Doesn't break calculator functionality

## Time Estimate
45-60 minutes

## Next Step
Now you're ready for batch calculator enrichment (Prompts 05-10)
