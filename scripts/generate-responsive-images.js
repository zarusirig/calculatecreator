#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  // Source images directory
  sourceDir: path.join(__dirname, '../public/images'),
  // Output directory (same as source)
  outputDir: path.join(__dirname, '../public/images'),
  // Image widths to generate
  widths: [640, 1024, 1600, 1920],
  // Output formats to generate
  formats: ['avif', 'webp'],
  // Quality settings
  quality: {
    avif: 65,
    webp: 75,
    // Keep original quality for PNG/JPG fallbacks
    original: 90
  }
};

// Check if sharp is installed
function checkDependencies() {
  try {
    require('sharp');
    return true;
  } catch (e) {
    console.error('❌ sharp is not installed. Please install it with: npm install sharp');
    return false;
  }
}

// Find all PNG and JPG images in the source directory
function findImages(dir) {
  const images = [];
  
  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
        images.push(filePath);
      }
    }
  }
  
  traverse(dir);
  return images;
}

// Generate responsive images for a single source image
async function generateResponsiveImages(imagePath) {
  const sharp = require('sharp');
  const parsed = path.parse(imagePath);
  const relativePath = path.relative(config.sourceDir, imagePath);
  const dir = parsed.dir;
  
  console.log(`📸 Processing: ${relativePath}`);
  
  try {
    // Get image metadata
    const metadata = await sharp(imagePath).metadata();
    
    // Process each width
    for (const width of config.widths) {
      // Skip if width is larger than original image
      if (width > metadata.width) continue;
      
      // Calculate height to maintain aspect ratio
      const height = Math.round((metadata.height * width) / metadata.width);
      
      // Generate each format
      for (const format of config.formats) {
        const outputPath = path.join(
          config.outputDir,
          dir,
          `${parsed.name}-${width}.${format}`
        );
        
        // Create output directory if it doesn't exist
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Skip if file already exists and is newer than source
        if (fs.existsSync(outputPath)) {
          const sourceStat = fs.statSync(imagePath);
          const outputStat = fs.statSync(outputPath);
          if (outputStat.mtime > sourceStat.mtime) {
            console.log(`  ⏭️  Skipping ${path.basename(outputPath)} (already up to date)`);
            continue;
          }
        }
        
        // Process image
        let pipeline = sharp(imagePath).resize(width, height, { 
          fit: 'cover',
          position: 'center'
        });
        
        if (format === 'avif') {
          pipeline = pipeline.avif({ quality: config.quality.avif });
        } else if (format === 'webp') {
          pipeline = pipeline.webp({ quality: config.quality.webp });
        }
        
        await pipeline.toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        const savings = ((1 - stats.size / fs.statSync(imagePath).size) * 100).toFixed(1);
        console.log(`  ✅ Generated ${width}w ${format} (${(stats.size / 1024).toFixed(1)}KB, ${savings}% smaller)`);
      }
    }
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error processing ${relativePath}:`, error.message);
    return false;
  }
}

// Main execution function
async function main() {
  console.log('🚀 Starting responsive image generation...\n');
  
  // Check dependencies
  if (!checkDependencies()) {
    process.exit(1);
  }
  
  // Find all images
  const images = findImages(config.sourceDir);
  console.log(`📂 Found ${images.length} images to process\n`);
  
  // Process each image
  let successCount = 0;
  let failureCount = 0;
  
  for (const image of images) {
    const success = await generateResponsiveImages(image);
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }
  }
  
  // Report results
  console.log(`\n📊 Processed ${successCount + failureCount} images:`);
  console.log(`  ✅ Success: ${successCount}`);
  console.log(`  ❌ Failed: ${failureCount}`);
  
  if (failureCount > 0) {
    process.exit(1);
  } else {
    console.log('\n🎉 All responsive images generated successfully!');
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = { generateResponsiveImages, findImages, config };