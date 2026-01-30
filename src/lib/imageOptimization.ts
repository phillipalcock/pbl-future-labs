/**
 * Image Optimization Utilities
 *
 * Uses Netlify Image CDN for on-the-fly image optimization
 * No pre-processing required - optimization happens automatically
 */

interface ImageSrcSetOptions {
  sizes?: number[];
  densities?: number[];
  formats?: string[];
}

/**
 * Generate optimized image srcset using Netlify Image CDN
 * Converts regular paths to CDN-optimized URLs
 *
 * @example
 * const srcset = generateImageSrcSet('/images/book.jpg', {
 *   sizes: [400, 600, 800]
 * });
 * // Output: "/.netlify/images?url=/images/book.jpg&w=400 400w, ..."
 */
export function generateImageSrcSet(
  imagePath: string,
  options: ImageSrcSetOptions = {}
): string {
  const {
    sizes = [400, 600, 800],
    densities = [1, 2],
  } = options;

  // For Netlify Image CDN, use the /.netlify/images endpoint
  const srcset = sizes
    .map(size => {
      const url = `/.netlify/images?url=${encodeURIComponent(imagePath)}&w=${size}&q=80&fit=cover`;
      return `${url} ${size}w`;
    })
    .join(', ');

  return srcset;
}

/**
 * Generate optimized image URL with specific transformations
 * @example
 * const url = getOptimizedImageUrl('/images/book.jpg', 600);
 */
export function getOptimizedImageUrl(
  imagePath: string,
  width: number,
  options: {
    quality?: number;
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  } = {}
): string {
  const {
    quality = 80,
    format = 'auto',
    fit = 'cover'
  } = options;

  const params = new URLSearchParams({
    url: imagePath,
    w: width.toString(),
    q: quality.toString(),
    fit: fit,
  });

  if (format !== 'auto') {
    params.append('f', format);
  }

  return `/.netlify/images?${params.toString()}`;
}

/**
 * Generate a picture element with multiple format support
 * Returns markup string for picture element with srcset attributes
 */
export function generateResponsivePictureMarkup(
  imagePath: string,
  alt: string,
  options: {
    width?: number;
    height?: number;
    sizes?: string;
    class?: string;
    imageWidths?: number[];
  } = {}
): string {
  const {
    width = 400,
    height = 300,
    sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
    class: className = "object-cover",
    imageWidths = [400, 600, 800]
  } = options;

  const srcset = generateImageSrcSet(imagePath, { sizes: imageWidths });

  return `
    <picture>
      <img
        src="${getOptimizedImageUrl(imagePath, 400)}"
        srcset="${srcset}"
        sizes="${sizes}"
        alt="${alt}"
        width="${width}"
        height="${height}"
        loading="lazy"
        decoding="async"
        class="${className}"
      />
    </picture>
  `.trim();
}

/**
 * Responsive image display context sizes for different use cases
 */
export const IMAGE_DISPLAY_CONTEXTS = {
  thumbnail: {
    sizes: [200, 300],
    breakpoints: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  },
  card: {
    sizes: [400, 600, 800],
    breakpoints: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  },
  hero: {
    sizes: [600, 900, 1200],
    breakpoints: "(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
  },
  featured: {
    sizes: [500, 700, 1000],
    breakpoints: "(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
  }
};
