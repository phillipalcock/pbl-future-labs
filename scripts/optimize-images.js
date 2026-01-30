#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script generates optimized image variants for responsive display:
 * - Multiple widths (400px, 600px, 800px) for different screen sizes
 * - WebP format for modern browsers (better compression)
 * - Preserves aspect ratio
 *
 * Install sharp: npm install --save-dev sharp
 * Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(process.cwd(), 'public/images');
const SIZES = [400, 600, 800];
const FORMATS = ['jpeg', 'webp'];

async function optimizeImage(imagePath) {
  const filename = path.basename(imagePath);
  const ext = path.extname(filename).toLowerCase();
  const basename = path.basename(filename, ext);

  // Skip if not a jpg/jpeg/png
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  console.log(`\n📸 Optimizing: ${filename}`);

  try {
    // Generate multiple sizes
    for (const size of SIZES) {
      // JPEG/JPG variant
      const jpegPath = path.join(IMAGE_DIR, `${basename}-${size}.jpg`);
      await sharp(imagePath)
        .resize(size, Math.round(size * 0.75), { // Maintain 4:3 aspect ratio
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 80, progressive: true })
        .toFile(jpegPath);

      console.log(`  ✓ ${size}px JPEG (${fs.statSync(jpegPath).size / 1024}KB)`);

      // WebP variant
      const webpPath = path.join(IMAGE_DIR, `${basename}-${size}.webp`);
      await sharp(imagePath)
        .resize(size, Math.round(size * 0.75), {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`  ✓ ${size}px WebP (${fs.statSync(webpPath).size / 1024}KB)`);
    }
  } catch (error) {
    console.error(`  ✗ Error optimizing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // Book cover images to optimize
  const bookCovers = [
    'pbl handbook.jpg',
    'design and coaching guide.jpg',
    'redefining smart.jpg'
  ];

  for (const cover of bookCovers) {
    const imagePath = path.join(IMAGE_DIR, cover);
    if (fs.existsSync(imagePath)) {
      await optimizeImage(imagePath);
    } else {
      console.log(`⚠️  File not found: ${cover}`);
    }
  }

  console.log('\n✨ Image optimization complete!\n');
  console.log('Generated variants:');
  console.log('  - 400px (thumbnail/mobile)');
  console.log('  - 600px (tablet)');
  console.log('  - 800px (desktop/high-res)');
  console.log('  - WebP + JPEG formats\n');
  console.log('Update image src paths to use "-{size}" suffix (e.g., "image-400.jpg")\n');
}

main();
