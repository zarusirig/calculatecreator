# Prompt 01: Codebase Analysis & Architecture Mapping

## Objective
Understand the codebase structure before making any changes. Map out how content is organized and identify the best approach for enriching calculator pages.

## Prompt

```
Analyze this Next.js codebase for calculatecreator.com. I need to enrich 36 thin calculator pages from ~150 words to 800+ words each for AdSense approval.

Please investigate and report:

## 1. Project Structure
- Framework version (Next.js 13/14, App Router vs Pages?)
- Styling approach (Tailwind, CSS Modules, styled-components?)
- State management if any

## 2. Calculator Page Architecture
- Where do calculator pages live? (e.g., /app/calculators/[slug]/page.tsx)
- Are they dynamic routes or static?
- What components make up a calculator page?

## 3. Content Storage
- Is content hardcoded in components?
- Is it in MDX/Markdown files?
- JSON/YAML data files?
- CMS integration?

## 4. Guide Page Comparison
- How are guide pages structured differently?
- Why do they have more content?
- Can we reuse their patterns for calculators?

## 5. Shared Components
- List reusable components (headers, sections, CTAs)
- Identify any content wrapper components
- Find the author/attribution component if it exists

## 6. Recommended Approach
Based on your analysis, what's the best way to add 600+ words of content to each calculator page while:
- Preserving existing calculator functionality
- Maintaining consistent styling
- Keeping the codebase maintainable
- Not breaking anything

Please provide specific file paths and code examples from the actual codebase.
```

## Expected Output
- Clear architecture diagram or description
- File paths for key components
- Recommended content injection approach
- Any potential gotchas or constraints

## Next Step
Once you understand the architecture, proceed to Prompt 02 (FAQ Page).

## Time Estimate
15-30 minutes
