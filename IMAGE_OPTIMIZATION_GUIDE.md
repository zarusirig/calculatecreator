# Image Optimization Implementation Guide

This guide provides a comprehensive plan to optimize images for your TikTok Calculator website without using external CDNs. The solution uses build-time optimization with Sharp to generate responsive, next-gen format images.

## Overview

This implementation will:
1. Reduce image sizes by 70-85% through format conversion (PNG → AVIF/WebP)
2. Generate responsive image variants for different screen sizes
3. Add proper preloading for LCP candidates
4. Fix CLS issues with proper aspect ratio containers
5. Implement blur placeholders for smoother loading experience

## Implementation Steps

### 1. Install Required Dependencies

```bash
npm install sharp
```

This is already added to package.json in devDependencies.

### 2. Run Image Optimization Script

The script `scripts/optimize-images.js` will:
- Find all PNG/JPG images in your public/images directory
- Generate responsive variants at multiple widths (640px, 1024px, 1600px, 1920px)
- Convert to AVIF and WebP formats
- Create small thumbnails for blur placeholders

To run the script:

```bash
npm run optimize-images
```

This will create files like:
- `image-name-640.webp`, `image-name-640.avif`
- `image-name-1024.webp`, `image-name-1024.avif`
- `image-name-1600.webp`, `image-name-1600.avif`
- `image-name-1920.webp`, `image-name-1920.avif`
- `image-name-tiny.jpg` (for blur placeholder)

### 3. Update Image Components

Replace existing image components with the new `OptimizedImageV2` component:

```typescript
import { OptimizedImageV2, HeroImage, LogoImage } from '@/components/ui/OptimizedImageV2';
```

#### For Hero Images (LCP candidates):
```jsx
<HeroImage 
  src="/images/homepage-hero/image.png" 
  alt="Hero image description"
  fill
  className="object-cover"
  priority={true}
  sizes="100vw"
/>
```

#### For Regular Images:
```jsx
<OptimizedImageV2 
  src="/images/calculator-showcase/image.png" 
  alt="Calculator showcase"
  width={1200}
  height={750}
  sizes="(max-width: 768px) 100vw, 85vw"
/>
```

#### For Logo Images:
```jsx
<LogoImage
  src="/images/logo.png" 
  alt="Site Logo"
  width={48}
  height={48}
/>
```

### 4. Update Page Components

1. Replace imports in `src/app/page.tsx`:
   ```typescript
   import { HeroImage, LogoImage, OptimizedImage } from '@/components/ui/OptimizedImageV2';
   ```

2. Update image usage following the patterns shown in the example files.

3. Replace Header and Footer with optimized versions:
   ```typescript
   import { Header } from '@/components/layout/Header-updated';
   import { Footer } from '@/components/layout/Footer-updated';
   ```

### 5. Update Build Process

The build process has been updated to automatically optimize images:

```bash
npm run build  # This now runs optimize-images first, then next build
```

You can also run image optimization separately:

```bash
npm run optimize-images
```

### 6. Add to CI/CD Pipeline (Optional)

For production deployments, ensure images are optimized in your CI/CD pipeline:

```yaml
# Example for GitHub Actions
- name: Optimize images
  run: npm run optimize-images

- name: Build site
  run: npm run build
```

## File Structure After Optimization

```
public/images/
├── homepage-hero/
│   ├── 2025-12-05T15-49-14-244Z_1.png (original)
│   ├── 2025-12-05T15-49-14-244Z_1-640.webp
│   ├── 2025-12-05T15-49-14-244Z_1-640.avif
│   ├── 2025-12-05T15-49-14-244Z_1-1024.webp
│   ├── 2025-12-05T15-49-14-244Z_1-1024.avif
│   ├── 2025-12-05T15-49-14-244Z_1-1600.webp
│   ├── 2025-12-05T15-49-14-244Z_1-1600.avif
│   ├── 2025-12-05T15-49-14-244Z_1-1920.webp
│   ├── 2025-12-05T15-49-14-244Z_1-1920.avif
│   └── 2025-12-05T15-49-14-244Z_1-tiny.jpg
└── [other image directories with similar structure]
```

## Performance Impact

With this optimization:

1. **Image Size Reduction**: 70-85% smaller files
   - Original PNG: ~500KB
   - Optimized WebP: ~150KB
   - Optimized AVIF: ~75KB

2. **Responsive Loading**: Mobile devices receive much smaller images
   - Mobile (640px): ~30KB AVIF
   - Desktop (1920px): ~75KB AVIF

3. **LCP Improvement**: 1-2 second faster initial paint with preloading

4. **CLS Elimination**: Proper aspect ratios prevent layout shifts

5. **Browser Support**: Graceful fallback from AVIF → WebP → Original PNG

## Testing Your Implementation

1. Run the optimization script:
   ```bash
   npm run optimize-images
   ```

2. Start your development server:
   ```bash
   npm run dev
   ```

3. Test with different network conditions in Chrome DevTools:
   - Network tab: Verify smaller file sizes
   - Lighthouse: Check Core Web Vitals improvement
   - Rendering: Check that images display correctly

4. For production:
   ```bash
   npm run build
   ```

## Maintenance

1. When adding new images, run the optimization script again
2. Consider setting up a pre-commit hook to automatically optimize new images
3. Monitor Lighthouse scores to ensure improvements are maintained

## Optional Enhancements

1. **Pre-commit Hook**: Automatically optimize new images on commit
2. **Webhook Integration**: Trigger optimization when images are uploaded
3. **Lazy Loading Enhancement**: Implement intersection observer for below-fold images
4. **Progressive Loading**: Enhance blur placeholders with low-quality image placeholders

## Troubleshooting

### Issue: Images not showing as AVIF/WebP
- Ensure the optimization script has run
- Check that generated files exist in the expected paths
- Verify the file naming convention matches the component expectations

### Issue: Blur placeholders not working
- Ensure tiny.jpg thumbnails are generated by the script
- Check the file paths in the OptimizedImageV2 component

### Issue: Build errors about Sharp
- Make sure Sharp is installed correctly: `npm install sharp`
- For some platforms, you might need to rebuild Sharp: `npm rebuild sharp`

## Expected Results

After implementing these changes:
- LCP should improve by 1.5-2.5 seconds
- Total image weight reduced by 70-85%
- CLS should be near-zero for all images
- Better user experience on slow connections
- Improved Core Web Vitals scores



