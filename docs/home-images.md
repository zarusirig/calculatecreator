# Homepage Image System Documentation

This document explains the homepage image system for CalculateCreator.com, including how to regenerate and modify images.

## Overview

All homepage images are generated using FAL.ai's Flux Pro model with carefully crafted prompts that maintain brand consistency. Images are stored locally in `public/home/` and committed to the repository.

## Image Inventory

| ID | Filename | Dimensions | Location in Code | Purpose |
|----|----------|------------|------------------|---------|
| `hero` | hero-dashboard.png | 1920×1080 | Hero background, CTA background | Abstract analytics dashboard |
| `trust-badge` | trust-badge-icon.png | 128×128 | Trust badge next to "50,000+ creators" | Small verification icon |
| `calculator` | calculator-interface.png | 1200×750 | Calculator showcase section | UI mockup |
| `monetization` | monetization-guide.png | 1200×900 | Guides section | Growth/monetization visual |
| `data-viz` | data-charts.png | 1200×675 | Data & benchmarks section | Charts visualization |
| `success` | creator-success.png | 1200×675 | Niche earnings section | Success/achievement visual |
| `eeat` | eeat-badge.png | 400×400 | FAQ section, Footer | Authority/trust badge |

## Brand Design Tokens

All images follow these design constraints:

```
Primary Color:   #9333EA (purple)
Secondary Color: #06B6D4 (cyan)
Accent Color:    #FE2C55 (hot pink - used sparingly)
Background:      #FAFAFA (light neutral)
Text Dark:       #171717
```

**Visual Style:**
- Flat vector / clean UI illustration
- Modern minimal tech aesthetic
- High whitespace
- Rounded shapes (16-24px radius)
- Soft shadows and subtle neon glows
- No text, logos, or watermarks
- No photorealistic elements

## Regenerating Images

### Prerequisites

1. FAL.ai API key (get one at [fal.ai](https://fal.ai))
2. Node.js 18+

### Commands

**Regenerate all images:**
```bash
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --force
```

**Regenerate a specific image:**
```bash
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image hero
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image trust-badge
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image calculator
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image monetization
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image data-viz
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image success
FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image eeat
```

**Skip existing images (default behavior):**
```bash
FAL_KEY=your_api_key node scripts/generate-home-images.mjs
```

### Output

- Images saved to: `public/home/`
- Manifest saved to: `public/home/manifest.json`

## Modifying Prompts

Prompts are defined in `scripts/generate-home-images.mjs` in the `IMAGE_SPECS` array. Each image spec contains:

```javascript
{
  id: "hero",                    // Unique identifier
  filename: "hero-dashboard.png", // Output filename
  width: 1920,                   // Image width
  height: 1080,                  // Image height
  altText: "...",                // Alt text for accessibility
  description: "...",            // Human-readable description
  prompt: `...`                  // FAL.ai prompt
}
```

### Prompt Structure

Each prompt includes:

1. **Global Style Block** - Brand consistency rules (automatically included)
2. **Subject** - What the image depicts
3. **Main Elements** - Specific objects and components
4. **Composition** - Layout and spatial arrangement
5. **Visual Style** - Color applications and effects
6. **Mood** - Emotional tone

### Negative Prompts

The script automatically applies negative prompts to prevent:
- Text, logos, watermarks
- Photorealistic elements
- Human figures, faces, hands
- Dark/moody colors
- Noisy backgrounds

## File Locations

```
public/
└── home/
    ├── manifest.json           # Image metadata
    ├── hero-dashboard.png      # Hero background
    ├── trust-badge-icon.png    # Trust badge icon
    ├── calculator-interface.png # Calculator UI mockup
    ├── monetization-guide.png  # Monetization visual
    ├── data-charts.png         # Data visualization
    ├── creator-success.png     # Success visual
    └── eeat-badge.png          # Authority badge

scripts/
└── generate-home-images.mjs    # Generation script

src/app/
└── page.tsx                    # Homepage (uses these images)
```

## Code Usage

Images are rendered using Next.js `<Image>` component:

```tsx
import Image from 'next/image';

// Standard image with dimensions
<Image
  src="/home/calculator-interface.png"
  alt="TikTok Money Calculator Interface"
  width={1200}
  height={750}
  className="w-full h-auto rounded-xl shadow-2xl"
/>

// Fill mode for backgrounds
<Image
  src="/home/hero-dashboard.png"
  alt="TikTok Creator Analytics Dashboard"
  fill
  className="object-cover"
  priority
  sizes="100vw"
/>
```

## Troubleshooting

### Images not showing

1. Verify images exist in `public/home/`
2. Check file paths in code match exactly
3. Clear Next.js cache: `rm -rf .next && npm run build`

### FAL.ai errors

1. Verify API key is valid
2. Check API rate limits
3. Try regenerating with `--force` flag

### Build errors

1. Ensure all images have proper `width` and `height` props
2. For `fill` mode images, parent must have `position: relative`
3. Run `npm run build` to verify

## Updating Images

When updating the design system or brand:

1. Modify the `BRAND` object in `generate-home-images.mjs`
2. Update the `GLOBAL_STYLE` template string
3. Regenerate all images: `FAL_KEY=... node scripts/generate-home-images.mjs --force`
4. Test locally: `npm run dev`
5. Build: `npm run build`
6. Commit changes to git

---

*Last updated: December 2025*
*Generated with FAL.ai Flux Pro v1.1*
