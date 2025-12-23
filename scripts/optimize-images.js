const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
// NOTE: All image directories are pre-optimized. Do not process automatically.
// - /public/home/   - Homepage images (FAL.ai generated, pre-optimized)
// - /public/guides/ - Guide featured images (FAL.ai generated, pre-optimized)
// - /public/news/   - News featured images (FAL.ai generated, pre-optimized)
// - /public/images/ - Logo/brand assets (don't need responsive variants)
const IMAGE_DIRS = [];
const WIDTHS = [640, 1024, 1600, 1920]; // Responsive breakpoints
const FORMATS = ['webp', 'avif']; // Target formats
const QUALITY = {
  webp: 80,
  avif: 50, // AVIF can use lower quality for same visual quality
};

// Helper to recursively find all PNG and JPG files
function findAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAllImages(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Process a single image
async function processImage(inputPath) {
  const parsed = path.parse(inputPath);
  const baseName = parsed.name;
  const ext = parsed.ext.toLowerCase();
  
  // Skip if already processed (check for webp version)
  if (fs.existsSync(path.join(parsed.dir, `${baseName}-640.webp`))) {
    console.log(`Skipping ${baseName}, already optimized`);
    return;
  }
  
  console.log(`Processing ${baseName}`);
  
  try {
    // Get image metadata to calculate aspect ratios
    const metadata = await sharp(inputPath).metadata();
    const aspectRatio = metadata.width / metadata.height;
    
    // Generate responsive variants for each format and width
    for (const format of FORMATS) {
      for (const width of WIDTHS) {
        const height = Math.round(width / aspectRatio);
        const outputPath = path.join(parsed.dir, `${baseName}-${width}.${format}`);
        
        await sharp(inputPath)
          .resize(width, height, { fit: 'cover', position: 'center' })
          .toFormat(format, { quality: QUALITY[format] })
          .toFile(outputPath);
          
        console.log(`  Created: ${path.basename(outputPath)} (${width}x${height})`);
      }
    }
    
    // Create a small thumbnail for blur placeholder
    const thumbnailPath = path.join(parsed.dir, `${baseName}-tiny.jpg`);
    await sharp(inputPath)
      .resize(40, null, { fit: 'inside' })
      .jpeg({ quality: 30, blur: 0.5 })
      .toFile(thumbnailPath);
      
  } catch (error) {
    console.error(`Error processing ${baseName}:`, error.message);
  }
}

// Main function
async function main() {
  try {
    // Check if Sharp is installed
    if (!fs.existsSync(path.join(__dirname, '../node_modules/sharp'))) {
      console.error('Sharp not found. Please install it with: npm install sharp');
      process.exit(1);
    }

    console.log('Finding all images to optimize...');
    let imageFiles = [];

    for (const dir of IMAGE_DIRS) {
      if (fs.existsSync(dir)) {
        const files = findAllImages(dir);
        imageFiles = imageFiles.concat(files);
        console.log(`Found ${files.length} images in ${dir}`);
      }
    }

    console.log(`Total: ${imageFiles.length} images to process`);

    // Process each image
    for (const imageFile of imageFiles) {
      await processImage(imageFile);
    }

    console.log('Image optimization complete!');
    console.log('Generated responsive variants in WebP and AVIF formats');
    console.log('Run this script during your build process or as a pre-commit hook');

  } catch (error) {
    console.error('Script failed:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { processImage, findAllImages };



