/**
 * Homepage Image Generation Script using FAL.ai
 *
 * Generates brand-consistent images for the CalculateCreator homepage.
 *
 * Usage:
 *   FAL_KEY=your_api_key node scripts/generate-home-images.mjs
 *   FAL_KEY=your_api_key node scripts/generate-home-images.mjs --force
 *   FAL_KEY=your_api_key node scripts/generate-home-images.mjs --image hero
 *
 * Environment:
 *   FAL_KEY - Your FAL.ai API key (required)
 */

import { fal } from "@fal-ai/client";
import fs from "node:fs";
import path from "node:path";

// ============================================================================
// CONFIGURATION
// ============================================================================

const OUTPUT_DIR = path.join(process.cwd(), "public", "home");
const MAX_RETRIES = 2;

// Brand Design Tokens (from tailwind.config.js)
const BRAND = {
  primary: "#9333EA",    // Purple
  secondary: "#06B6D4",  // Cyan
  accent: "#FE2C55",     // Hot pink (sparingly)
  bgLight: "#FAFAFA",    // Light background
  textDark: "#171717",   // Dark text
};

// Global style block embedded in all prompts
const GLOBAL_STYLE = `
Flat vector clean UI illustration style, modern minimal tech aesthetic, high whitespace, crisp edges.
Color palette: primary purple ${BRAND.primary}, secondary cyan ${BRAND.secondary}, accent hot pink ${BRAND.accent} used very sparingly as small highlight accents only, neutral white ${BRAND.bgLight} background, dark ${BRAND.textDark} elements.
Rounded 16-24px shapes throughout, soft drop shadows, subtle neon glow effects on key elements, smooth gradients allowed.
Professional quality, consistent stroke weights, clean geometric shapes.
`.trim();

// Global negative prompt
const NEGATIVE_PROMPT = `
text, letters, words, numbers, readable text, logos, watermarks, signatures, labels, captions, typography,
messy clutter, noisy backgrounds, busy patterns, excessive detail, complex micro-details,
photorealistic faces, hands, fingers, human figures, people, portraits,
3D render, photorealism, photography, stock photo, realistic,
blurry, low quality, pixelated, artifacts, noise, grain,
dark moody colors, brown dominant, orange dominant, yellow dominant, dull colors
`.trim();

// ============================================================================
// IMAGE SPECIFICATIONS
// ============================================================================

const IMAGE_SPECS = [
  {
    id: "hero",
    filename: "hero-dashboard.png",
    width: 1920,
    height: 1080,
    altText: "TikTok Creator Analytics Dashboard",
    description: "Abstract analytics dashboard for hero background",
    prompt: `
${GLOBAL_STYLE}

Subject: Abstract creator analytics dashboard visualization with floating UI elements in space.

Main Elements:
- Multiple floating UI cards showing abstract chart patterns and bar graphs trending upward
- Circular progress indicators with purple-cyan gradients
- Central large dashboard panel with simplified analytics interface
- Abstract notification badges and metric displays
- Floating coins and diamond shapes representing earnings

Composition:
- Leave generous negative space on the left side (40%) for headline text overlay
- Main dashboard elements clustered center-right
- Elements floating at different depths creating parallax feel

Visual Style:
- Subtle purple-to-cyan gradient glow behind main elements
- Small hot pink accent dots sparingly on interactive elements
- Floating rounded rectangles and circles as decorative background elements
- Clean white to very light gray gradient background
- Subtle grid pattern barely visible in background

Perspective: Slight 3D isometric tilt for depth, soft shadows under floating elements.
Mood: Energetic, confident, professional, aspirational, tech-forward.
    `.trim(),
  },
  {
    id: "trust-badge",
    filename: "trust-badge-icon.png",
    width: 128,
    height: 128,
    altText: "Trusted by creators badge",
    description: "Small trust/verification badge icon",
    prompt: `
${GLOBAL_STYLE}

Subject: Simple trust verification badge icon, single centered element on pure white background.

Main Elements:
- Shield shape or circular badge with checkmark inside
- Subtle sparkle or star accents around badge
- Clean geometric design optimized for small display sizes

Composition:
- Perfectly centered in frame
- Badge fills approximately 70% of canvas
- Pure white or transparent background suitable for any overlay

Visual Style:
- Primary purple ${BRAND.primary} as main badge color
- Cyan ${BRAND.secondary} subtle accent glow or border
- Single small pink sparkle accent
- Bold simple shapes recognizable at 20x20px

Design: Icon/badge style, minimal, bold strokes, immediately recognizable as trust symbol.
Mood: Trustworthy, verified, professional, credible.
    `.trim(),
  },
  {
    id: "calculator",
    filename: "calculator-interface.png",
    width: 1200,
    height: 750,
    altText: "TikTok Money Calculator Interface",
    description: "Calculator UI mockup showcase",
    prompt: `
${GLOBAL_STYLE}

Subject: Modern calculator application interface mockup displayed in floating browser window frame.

Main Elements:
- Clean UI showing abstract input fields with slider controls (no readable text)
- Large result display area with currency/money visualization using abstract shapes
- Category selector tabs across top
- Prominent calculate button with purple gradient
- Side panel showing abstract bar chart with results
- Floating metric cards around main interface

Composition:
- Centered interface card with generous padding and rounded corners
- Subtle decorative elements floating around edges for depth
- Main calculator window is focal point

Visual Style:
- Purple gradient on primary calculate button
- Cyan accents on secondary UI elements and charts
- Pink sparingly on notification dots or highlights
- Input fields with rounded corners, clean placeholder lines
- Soft shadow under main card, lighter shadows on floating elements

Background: Light neutral gradient with subtle dot grid pattern.
Mood: Professional, data-driven, user-friendly, modern SaaS aesthetic.
    `.trim(),
  },
  {
    id: "monetization",
    filename: "monetization-guide.png",
    width: 1200,
    height: 900,
    altText: "TikTok Monetization Strategy Guide",
    description: "Monetization and growth visual for guides section",
    prompt: `
${GLOBAL_STYLE}

Subject: Abstract visualization of creator monetization journey showing growth and multiple revenue streams.

Main Elements:
- Ascending steps or curved pathway made of rounded platform shapes
- Each platform has abstract icon: gift box (LIVE), shopping bag (Shop), handshake (deals), coin stack (fund)
- Upward trending arrow or growth chart integrated into composition
- Floating abstract currency symbols as geometric shapes (circles, hexagons)
- Sparkle effects at achievement points along the path

Composition:
- Bottom-left to top-right diagonal flow showing upward progression
- Central pathway clearly visible
- Decorative floating elements around edges
- Top destination shows abstract trophy or success symbol

Visual Style:
- Purple gradient on main pathway platforms
- Cyan highlights on milestone markers and icons
- Pink accents on celebration sparkles and achievement stars
- White to light purple-tinted gradient background at top corner
- Soft glows behind key elements

Style: Infographic-inspired but purely illustrative, no text labels or numbers.
Mood: Aspirational, growth-oriented, opportunity-rich, journey of success.
    `.trim(),
  },
  {
    id: "data-viz",
    filename: "data-charts.png",
    width: 1200,
    height: 675,
    altText: "TikTok Industry Data & Benchmarks",
    description: "Charts and graphs visualization for data section",
    prompt: `
${GLOBAL_STYLE}

Subject: Abstract data visualization dashboard with multiple chart types showing analytics.

Main Elements:
- Large area/line chart with smooth gradient fill trending upward (left side, 60% width)
- Circular donut charts showing abstract proportions
- Horizontal bar charts comparing abstract categories
- Small metric cards with abstract KPI number displays
- All charts use placeholder abstract data patterns (no real numbers)

Composition:
- Grid layout: main large chart on left, smaller charts stacked on right
- Clean consistent spacing between chart elements
- Each chart in its own rounded card container
- Subtle connecting lines or flow between charts

Visual Style:
- Charts use purple as primary data color with gradient fills
- Cyan as secondary/comparison data series
- Pink sparingly for highlight data points or alerts
- Rounded chart elements and soft grid lines
- Clean white card backgrounds with subtle shadows

Background: Clean white with very subtle gray borders on chart containers.
Mood: Data-driven, analytical, professional, trustworthy, insightful.
    `.trim(),
  },
  {
    id: "success",
    filename: "creator-success.png",
    width: 1200,
    height: 675,
    altText: "TikTok Creator Success Story",
    description: "Success and achievement visual for niche earnings section",
    prompt: `
${GLOBAL_STYLE}

Subject: Abstract celebration of creator success and achievement across content niches.

Main Elements:
- Central trophy or award badge with radiating glow
- Surrounding floating category icons (all highly abstracted/geometric): sparkle (beauty), dumbbell (fitness), gamepad (gaming), camera (vlog), chart (finance)
- Rising confetti particles and celebration effects
- Upward arrows and growth indicator shapes
- Achievement unlock badges floating around

Composition:
- Central focal point with trophy/award
- Radiating elements around center
- Balanced left-right symmetry
- Celebration particles filling background

Visual Style:
- Gold/amber accent combined with purple for trophy/achievement
- Cyan for category niche icons
- Pink confetti particles and sparkle accents
- Glowing aura effects behind central trophy
- Light gradient background with subtle radial burst from center

Mood: Celebratory, successful, diverse opportunities, achievable goals, inspiring.
    `.trim(),
  },
  {
    id: "eeat",
    filename: "eeat-badge.png",
    width: 400,
    height: 400,
    altText: "E-E-A-T Authority Badge",
    description: "Trust and expertise authority badge",
    prompt: `
${GLOBAL_STYLE}

Subject: Professional authority and trust badge/seal design representing expertise and credibility.

Main Elements:
- Central shield or circular seal with layered design
- Four subtle quadrant elements or corner accents representing E-E-A-T pillars as abstract geometric icons
- Laurel wreath or circular border frame
- Central checkmark or star verification symbol
- Subtle ribbon or banner element at bottom

Composition:
- Perfectly centered badge design
- Symmetrical layout
- Clear and recognizable at both 400px and 96px display sizes
- Works as standalone emblem

Visual Style:
- Purple as primary badge/shield color with subtle gradient
- Cyan accents on secondary border and decorative elements
- Clean geometric iconography for four corner elements
- Subtle metallic sheen effect
- Pure white or transparent background

Design: Official badge/seal/emblem style, premium quality feel, authoritative.
Mood: Authoritative, trustworthy, professional, credible, established.
    `.trim(),
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getArg(key, defaultValue = undefined) {
  const index = process.argv.indexOf(`--${key}`);
  return index === -1 ? defaultValue : process.argv[index + 1];
}

function hasFlag(flag) {
  return process.argv.includes(`--${flag}`);
}

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status} ${url}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(filepath, buffer);
}

// ============================================================================
// MAIN GENERATION FUNCTION
// ============================================================================

async function generateImage(spec) {
  console.log(`\n📸 Generating: ${spec.filename}`);
  console.log(`   Dimensions: ${spec.width}x${spec.height}`);
  console.log(`   Description: ${spec.description}`);

  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt: spec.prompt,
      image_size: {
        width: spec.width,
        height: spec.height,
      },
      num_images: 1,
      enable_safety_checker: true,
      output_format: "png",
      guidance_scale: 7.5,
      num_inference_steps: 28,
    },
  });

  const images = result.data?.images || [];
  if (images.length === 0) {
    throw new Error("No images returned from FAL.ai");
  }

  return images[0].url;
}

async function generateAndSaveImage(spec, force) {
  const filepath = path.join(OUTPUT_DIR, spec.filename);

  // Check if file exists and skip if not forcing
  if (!force && fs.existsSync(filepath)) {
    console.log(`⏭️  Skipping ${spec.filename} (exists, use --force to regenerate)`);
    return { success: true, skipped: true };
  }

  let lastError = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const imageUrl = await generateImage(spec);
      console.log(`   ✅ Generated, downloading...`);

      await downloadImage(imageUrl, filepath);

      const stats = fs.statSync(filepath);
      console.log(`   💾 Saved: ${filepath}`);
      console.log(`   📊 Size: ${(stats.size / 1024).toFixed(1)} KB`);

      return { success: true, skipped: false };
    } catch (error) {
      lastError = error;
      console.error(`   ❌ Attempt ${attempt}/${MAX_RETRIES} failed: ${error.message}`);

      if (attempt < MAX_RETRIES) {
        console.log(`   🔄 Retrying in 2s...`);
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
  }

  console.error(`   ❌ Failed after ${MAX_RETRIES} attempts`);
  return { success: false, skipped: false, error: lastError };
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  console.log("🎨 CalculateCreator Homepage Image Generator");
  console.log("============================================\n");

  // Validate FAL_KEY
  if (!process.env.FAL_KEY) {
    console.error("❌ Error: FAL_KEY environment variable is required");
    console.error("Usage: FAL_KEY=your_key node scripts/generate-home-images.mjs");
    process.exit(1);
  }

  fal.config({ credentials: process.env.FAL_KEY });

  // Parse arguments
  const force = hasFlag("force");
  const specificImage = getArg("image");

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created: ${OUTPUT_DIR}\n`);
  }

  // Filter images if specific one requested
  let imagesToGenerate = IMAGE_SPECS;
  if (specificImage) {
    imagesToGenerate = IMAGE_SPECS.filter((s) => s.id === specificImage);
    if (imagesToGenerate.length === 0) {
      console.error(`❌ Unknown image ID: "${specificImage}"`);
      console.error(`Available: ${IMAGE_SPECS.map((s) => s.id).join(", ")}`);
      process.exit(1);
    }
  }

  console.log(`🖼️  Images to generate: ${imagesToGenerate.length}`);
  if (force) console.log("⚠️  Force mode: regenerating all");

  // Generate images
  const results = [];
  for (const spec of imagesToGenerate) {
    const result = await generateAndSaveImage(spec, force);
    results.push({ spec, ...result });
  }

  // Summary
  console.log("\n============================================");
  console.log("📊 Summary");
  console.log("============================================\n");

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);
  const skipped = results.filter((r) => r.skipped);

  console.log(`✅ Successful: ${successful.length - skipped.length}`);
  console.log(`⏭️  Skipped: ${skipped.length}`);
  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.length}`);
    failed.forEach((r) => console.log(`   - ${r.spec.filename}`));
  }

  console.log(`\n📁 Output: ${OUTPUT_DIR}`);

  // Generate manifest for reference
  const manifest = {
    generated: new Date().toISOString(),
    images: results
      .filter((r) => r.success)
      .map((r) => ({
        id: r.spec.id,
        filename: r.spec.filename,
        path: `/home/${r.spec.filename}`,
        width: r.spec.width,
        height: r.spec.height,
        altText: r.spec.altText,
      })),
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("📋 Manifest saved: public/home/manifest.json");

  console.log("\n🔧 Next steps:");
  console.log("   1. Review images in public/home/");
  console.log("   2. Run: npm run build");
  console.log("   3. Test: npm run dev");

  if (failed.length > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
