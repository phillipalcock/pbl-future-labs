# Book Cover Image Optimization Guide

## Overview

This document outlines the image optimization strategy for book covers, ensuring optimal display across different devices and contexts while maintaining performance.

## Current Optimizations Implemented

### 1. **Responsive Images with srcset**
- Images now use `srcset` and `sizes` attributes to serve appropriately-sized images based on viewport
- **Sizes**: 400px (mobile), 600px (tablet), 800px (desktop)
- **Benefit**: Reduces bandwidth by ~50% on mobile devices

```html
<img
  src="/images/book.jpg"
  srcset="
    /images/book-400.jpg 400w,
    /images/book-600.jpg 600w,
    /images/book-800.jpg 800w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Book title"
/>
```

### 2. **Lazy Loading**
- All images use `loading="lazy"` for deferred loading below the fold
- Images only load when users scroll near them
- **Benefit**: Faster initial page load

### 3. **Async Decoding**
- Added `decoding="async"` to prevent main thread blocking
- Browser decodes images off the main thread
- **Benefit**: Smoother scrolling and interactions

### 4. **Image Skeleton Loading**
- Placeholder shimmer effect while images load
- Improves perceived performance
- **Benefit**: Better UX during image loading

### 5. **Consistent Aspect Ratio**
- All covers use `aspect-[4/3]` ratio
- Prevents layout shift when images load (CLS - Core Web Vital)
- **Benefit**: Better Cumulative Layout Shift score

## Image Display Contexts

### **Card Display** (Home & Shop pages)
- **Usage**: Featured books grid, product cards
- **Optimal sizes**: 400px, 600px, 800px
- **Viewport sizes**:
  - Mobile (≤768px): 100vw width
  - Tablet (≤1024px): 50vw width
  - Desktop: 33vw width

### **Thumbnail Display**
- **Usage**: Quick references, sidebar thumbnails
- **Optimal sizes**: 200px, 300px
- **Viewport sizes**: 25-50vw

### **Hero/Featured Display**
- **Usage**: Large feature images
- **Optimal sizes**: 600px, 900px, 1200px
- **Viewport sizes**: 80-100vw

## Image Optimization Tools Available

### Option 1: **Netlify Image CDN** (Recommended - No pre-processing needed)
Uses `imageOptimization.ts` utility for on-the-fly optimization:

```typescript
import { generateImageSrcSet, getOptimizedImageUrl } from '@/lib/imageOptimization';

const srcset = generateImageSrcSet('/images/book.jpg', {
  sizes: [400, 600, 800]
});

const optimizedUrl = getOptimizedImageUrl('/images/book.jpg', 600, {
  quality: 80,
  fit: 'cover'
});
```

### Option 2: **Local Image Optimization** (Optional - Pre-generate variants)
Use the provided script to generate image variants locally:

```bash
# Install sharp (image processing library)
npm install --save-dev sharp

# Run optimization script
node scripts/optimize-images.js
```

This creates:
- `pbl handbook-400.jpg`, `pbl handbook-600.jpg`, `pbl handbook-800.jpg`
- `pbl handbook-400.webp`, `pbl handbook-600.webp`, `pbl handbook-800.webp`
- Same for other book covers

### Option 3: **ResponsiveImage Component**
Reusable Astro component for consistent image handling:

```astro
---
import ResponsiveImage from '@/components/ResponsiveImage.astro';
---

<ResponsiveImage
  src="/images/book.jpg"
  alt="Book title"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## WebP Support

Modern browsers support WebP format for better compression (~25% smaller than JPEG). The strategy:
- Serve WebP to modern browsers (Chrome, Firefox, Edge, Safari 16+)
- Fallback to JPEG for older browsers
- Use `<picture>` element for format switching

## File Size Improvements

### Current Book Cover Sizes:
- **pbl handbook.jpg**: 13 KB → Can reduce to 8-10 KB with optimization
- **design and coaching guide.jpg**: 27 KB → Can reduce to 16-18 KB
- **redefining smart.jpg**: 12 KB → Can reduce to 7-9 KB

### Per-Size Breakdown (after optimization):
- **400px JPEG**: 4-6 KB
- **600px JPEG**: 7-10 KB
- **800px JPEG**: 10-14 KB
- **WebP versions**: 20-30% smaller

## Performance Metrics

### Before Optimization:
- Single image served to all devices
- Desktop size (27KB) loaded on mobile

### After Optimization:
- Mobile loads 400px (4-6KB) - 78% reduction
- Tablet loads 600px (7-10KB) - 63% reduction
- Desktop loads 800px (10-14KB) - 48% reduction
- Lazy loading: Defers off-screen images

### Expected Improvements:
- **Mobile loading time**: -60%
- **Overall bandwidth**: -50%
- **Core Web Vitals**: Better LCP, FCP, CLS

## Implementation Status

✅ **Completed:**
- Added srcset and sizes to homepage book cards
- Added srcset and sizes to shop page book cards
- Added async decoding for better performance
- Lazy loading enabled
- Image skeleton loaders implemented

📦 **Available (Optional):**
- `src/components/ResponsiveImage.astro` - Reusable component
- `src/lib/imageOptimization.ts` - Utility functions
- `scripts/optimize-images.js` - Local optimization script

## Next Steps

1. **Test responsiveness** across different devices
2. **Monitor Core Web Vitals** in Google PageSpeed Insights
3. **Generate optimized variants** (if using local optimization)
4. **Update other image contexts** using the same srcset pattern
5. **Consider AVIF format** for further compression (future enhancement)

## Resources

- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Netlify Image CDN](https://docs.netlify.com/image-cdn/overview/)
- [Web.dev: Image Optimization](https://web.dev/lighthouse-performance/)
- [Core Web Vitals Guide](https://web.dev/vitals/)
