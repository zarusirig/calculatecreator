# Prompt 03: Author Attribution Component

## Objective
Create a reusable author attribution component to add E-E-A-T signals to all calculator pages. This component should match what's already used on guide pages.

## Priority
🟠 **HIGH** - E-E-A-T signals significantly impact AdSense approval and SEO.

## Prompt

```
Create a reusable AuthorAttribution component for calculator pages. Check if a similar component already exists on guide pages (like /guides/tiktok-creator-fund) and either:
1. Reuse/extend the existing component, OR
2. Create a new one that matches the existing style

## Component Requirements

### AuthorAttribution Component
Display:
- Author avatar/photo (or placeholder icon)
- Author name and title (e.g., "Michael Chen, Data Analyst")
- Brief expertise description (1-2 sentences)
- "Expert reviewed by [Name]" badge (optional prop)
- Link to the About/Team page
- Last updated date

### Props Interface
```typescript
interface AuthorAttributionProps {
  author: {
    name: string;
    title: string;
    expertise: string;
    avatar?: string;
  };
  reviewer?: {
    name: string;
    title: string;
  };
  lastUpdated: string;
  showTeamLink?: boolean;
}
```

### Default Authors (create as constants)
```typescript
const AUTHORS = {
  michaelChen: {
    name: "Michael Chen",
    title: "Data Analyst & Creator Economist",
    expertise: "Specializes in analyzing TikTok creator earnings data and platform algorithms.",
    avatar: "/team/michael-chen.jpg" // or placeholder
  },
  sarahJohnson: {
    name: "Sarah Johnson", 
    title: "Senior Creator Strategist",
    expertise: "Expert in TikTok monetization strategies and brand partnerships.",
    avatar: "/team/sarah-johnson.jpg"
  }
};

const REVIEWERS = {
  sarahJohnson: {
    name: "Sarah Johnson",
    title: "Senior Creator Strategist"
  }
};
```

### Visual Design
- Subtle background (light gray or brand color at 5% opacity)
- Clean, professional layout
- Mobile responsive (stack vertically on small screens)
- Match existing guide page author sections
- Include subtle border or shadow for visual separation

### Example Usage
```tsx
<AuthorAttribution 
  author={AUTHORS.michaelChen}
  reviewer={REVIEWERS.sarahJohnson}
  lastUpdated="2025-12-01"
  showTeamLink={true}
/>
```

## Implementation Steps
1. Check existing guide pages for author component patterns
2. Create or extend the component
3. Export from a shared components location
4. Create the AUTHORS and REVIEWERS constants
5. Test on one calculator page

## Placement on Calculator Pages
Place the AuthorAttribution component:
- At the bottom of the content, before related calculators
- After the FAQ section
- Similar to how guides display author info

Do NOT place it:
- Above the calculator tool
- In the header/hero area
- Multiple times on the same page

Please implement this component matching existing patterns and prepare it for use across all 36 calculator pages.
```

## Expected Output
- AuthorAttribution component file
- AUTHORS/REVIEWERS constants file
- TypeScript interfaces
- Example implementation on one calculator page

## Validation Checklist
- [ ] Component matches existing guide page styling
- [ ] Mobile responsive
- [ ] Props are flexible for different authors
- [ ] Links to About/Team page
- [ ] Includes last updated date
- [ ] Easy to implement across all calculators

## Time Estimate
20-30 minutes

## Next Step
Proceed to Prompt 04 (Calculator Content Template Component)
