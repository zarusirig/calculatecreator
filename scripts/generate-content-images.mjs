/**
 * Content Featured Images Generation Script using FAL.ai
 *
 * Generates brand-consistent featured images for /guides/ and /news/ sections.
 *
 * Usage:
 *   FAL_KEY=your_api_key node scripts/generate-content-images.mjs
 *   FAL_KEY=your_api_key node scripts/generate-content-images.mjs --force
 *   FAL_KEY=your_api_key node scripts/generate-content-images.mjs --type guides
 *   FAL_KEY=your_api_key node scripts/generate-content-images.mjs --type news
 */

import { fal } from "@fal-ai/client";
import fs from "node:fs";
import path from "node:path";

// ============================================================================
// CONFIGURATION
// ============================================================================

const MAX_RETRIES = 2;

// Brand Design Tokens
const BRAND = {
  primary: "#9333EA",
  secondary: "#06B6D4",
  accent: "#FE2C55",
  bgLight: "#FAFAFA",
  textDark: "#171717",
};

// Global style block
const GLOBAL_STYLE = `
Flat vector clean UI illustration style, modern minimal tech aesthetic, high whitespace, crisp edges.
Color palette: primary purple ${BRAND.primary}, secondary cyan ${BRAND.secondary}, accent hot pink ${BRAND.accent} used very sparingly as small highlight accents only, neutral white ${BRAND.bgLight} background, dark ${BRAND.textDark} elements.
Rounded 16-24px shapes throughout, soft drop shadows, subtle neon glow effects on key elements, smooth gradients allowed.
Professional quality, consistent stroke weights, clean geometric shapes.
`.trim();

const NEGATIVE_PROMPT = `
text, letters, words, numbers, readable text, logos, watermarks, signatures, labels, captions, typography,
messy clutter, noisy backgrounds, busy patterns, excessive detail, complex micro-details,
photorealistic faces, hands, fingers, human figures, people, portraits,
3D render, photorealism, photography, stock photo, realistic,
blurry, low quality, pixelated, artifacts, noise, grain,
dark moody colors, brown dominant, orange dominant, yellow dominant, dull colors
`.trim();

// ============================================================================
// GUIDES CATEGORY IMAGES
// ============================================================================

const GUIDES_IMAGES = [
  {
    id: "monetization",
    filename: "guide-monetization.png",
    width: 1200,
    height: 630,
    altText: "TikTok Monetization Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of creator monetization and earnings growth.
Elements: Central dollar sign or coin stack with upward trending arrow, floating revenue stream icons (gift box, shopping bag, handshake, coins), growth chart in background.
Composition: Centered focal point, balanced layout, clean negative space on left for potential text overlay.
Mood: Prosperous, professional, growth-oriented, aspirational.
Colors: Purple gradient on main elements, cyan highlights, pink accents on sparkles.
Background: Light gradient, subtle grid pattern.
    `.trim(),
  },
  {
    id: "creator-fund",
    filename: "guide-creator-fund.png",
    width: 1200,
    height: 630,
    altText: "TikTok Creator Fund Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of Creator Fund earnings and view-to-revenue conversion.
Elements: Central fund/treasury icon with flowing coins, view counter symbols, RPM indicator display, streaming data visualization.
Composition: Center-right focus, flowing elements from left to right suggesting conversion flow.
Mood: Financial, rewarding, data-driven, professional.
Colors: Purple as primary fund color, cyan for data elements, subtle gold accents.
Background: Clean white with subtle purple gradient corner.
    `.trim(),
  },
  {
    id: "brand-deals",
    filename: "guide-brand-deals.png",
    width: 1200,
    height: 630,
    altText: "TikTok Brand Deals Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of creator-brand partnerships and sponsorships.
Elements: Handshake icon at center, floating brand badge shapes, contract/document icons, professional briefcase, connection lines between elements.
Composition: Central handshake focal point with radiating partnership elements.
Mood: Professional, trustworthy, partnership-oriented, successful.
Colors: Purple for creator elements, cyan for brand elements, pink accent on deal highlights.
Background: Light professional gradient.
    `.trim(),
  },
  {
    id: "live-streaming",
    filename: "guide-live-streaming.png",
    width: 1200,
    height: 630,
    altText: "TikTok LIVE Streaming Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of live streaming and gift monetization.
Elements: Central play/live button icon, floating gift icons (hearts, stars, diamonds), streaming waves/signals, viewer count display, engagement indicators.
Composition: Dynamic centered composition with floating gifts around central live icon.
Mood: Energetic, interactive, engaging, rewarding.
Colors: Purple for live elements, cyan for viewer interactions, pink for gifts.
Background: Subtle radial gradient suggesting broadcast.
    `.trim(),
  },
  {
    id: "tiktok-shop",
    filename: "guide-tiktok-shop.png",
    width: 1200,
    height: 630,
    altText: "TikTok Shop Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of TikTok Shop and e-commerce affiliate earnings.
Elements: Central shopping bag icon with cart, floating product boxes, commission percentage symbols, sale tags, affiliate link icons.
Composition: Shopping-focused center with floating commerce elements around.
Mood: Commercial, opportunity-rich, active, sales-driven.
Colors: Purple for shop branding, cyan for products, pink for sale highlights.
Background: Clean retail-inspired gradient.
    `.trim(),
  },
  {
    id: "algorithm",
    filename: "guide-algorithm.png",
    width: 1200,
    height: 630,
    altText: "TikTok Algorithm Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of algorithm mechanics and content distribution.
Elements: Central neural network or flow chart pattern, recommendation arrows, engagement metrics bubbles, content feed visualization, sorting/ranking indicators.
Composition: Network-style layout with interconnected nodes and flow paths.
Mood: Technical, intelligent, systematic, data-driven.
Colors: Purple for main algorithm nodes, cyan for connections, pink for priority indicators.
Background: Subtle tech grid pattern.
    `.trim(),
  },
  {
    id: "content-strategy",
    filename: "guide-content-strategy.png",
    width: 1200,
    height: 630,
    altText: "TikTok Content Strategy Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of content planning and creative strategy.
Elements: Central calendar/planner icon, floating video frame icons, trending arrow, clock for timing, creative tools (camera, lightbulb), engagement metrics.
Composition: Strategic planning layout with calendar at center surrounded by content elements.
Mood: Creative, organized, strategic, growth-focused.
Colors: Purple for planning elements, cyan for content icons, pink for trending highlights.
Background: Creative gradient with subtle pattern.
    `.trim(),
  },
  {
    id: "analytics",
    filename: "guide-analytics.png",
    width: 1200,
    height: 630,
    altText: "TikTok Analytics Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of analytics dashboard and performance metrics.
Elements: Central dashboard display, bar charts, line graphs trending up, pie charts, metric cards, KPI indicators.
Composition: Dashboard-style grid layout with multiple chart types.
Mood: Data-driven, insightful, professional, analytical.
Colors: Purple for primary metrics, cyan for secondary data, pink for highlights.
Background: Clean analytical gradient.
    `.trim(),
  },
  {
    id: "growth",
    filename: "guide-growth.png",
    width: 1200,
    height: 630,
    altText: "TikTok Growth Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of follower growth and audience building.
Elements: Central growth chart with steep upward curve, follower/user icons multiplying, milestone flags, rocket or arrow shooting up.
Composition: Dynamic upward-moving composition suggesting rapid growth.
Mood: Exciting, aspirational, achievement-oriented, momentum.
Colors: Purple for growth elements, cyan for milestones, pink for celebration accents.
Background: Energetic upward gradient.
    `.trim(),
  },
  {
    id: "tools",
    filename: "guide-tools.png",
    width: 1200,
    height: 630,
    altText: "TikTok Creator Tools Guide",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of creator tools and calculators.
Elements: Central calculator or tool icon, floating utility icons (gear, wrench, calculator, chart), measurement tools, optimization indicators.
Composition: Toolbox-style arrangement with central tool and supporting utilities.
Mood: Practical, helpful, utility-focused, empowering.
Colors: Purple for main tools, cyan for secondary utilities, pink for active indicators.
Background: Clean utility gradient.
    `.trim(),
  },
];

// ============================================================================
// NEWS CATEGORY IMAGES
// ============================================================================

const NEWS_IMAGES = [
  {
    id: "regulatory",
    filename: "news-regulatory.png",
    width: 1200,
    height: 630,
    altText: "TikTok Regulatory News",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of regulatory and legal developments.
Elements: Central gavel or legal scale icon, document/policy papers, official seal/badge, global map elements, compliance checkmarks.
Composition: Official, authoritative centered layout.
Mood: Serious, authoritative, important, newsworthy.
Colors: Purple for authority elements, cyan for documents, muted professional tones.
Background: Formal gradient with subtle pattern.
    `.trim(),
  },
  {
    id: "features",
    filename: "news-features.png",
    width: 1200,
    height: 630,
    altText: "TikTok New Features",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of new product features and updates.
Elements: Central sparkle/new badge, floating feature icons (AI icon, edit tools, creative tools), update arrows, innovation indicators.
Composition: Exciting announcement-style layout with central new feature element.
Mood: Exciting, innovative, fresh, forward-looking.
Colors: Purple for main features, cyan for tech elements, pink for new/highlight indicators.
Background: Fresh innovative gradient.
    `.trim(),
  },
  {
    id: "shop-news",
    filename: "news-shop.png",
    width: 1200,
    height: 630,
    altText: "TikTok Shop News",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of TikTok Shop updates and commerce news.
Elements: Central shopping/commerce icon, growth charts, expansion arrows, global map dots, product category icons.
Composition: Commerce-focused with growth indicators.
Mood: Commercial growth, expansion, opportunity, business.
Colors: Purple for shop branding, cyan for growth, pink for sales highlights.
Background: Commercial gradient.
    `.trim(),
  },
  {
    id: "algorithm-news",
    filename: "news-algorithm.png",
    width: 1200,
    height: 630,
    altText: "TikTok Algorithm Updates",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of algorithm changes and updates.
Elements: Central gear/cog with update arrows, neural network patterns shifting, recommendation flow changes, update notification badge.
Composition: Technical update-style layout showing transition/change.
Mood: Technical, important, change-oriented, informative.
Colors: Purple for algorithm core, cyan for update elements, pink for change highlights.
Background: Tech update gradient.
    `.trim(),
  },
  {
    id: "monetization-news",
    filename: "news-monetization.png",
    width: 1200,
    height: 630,
    altText: "TikTok Monetization News",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of monetization program updates and earnings news.
Elements: Central dollar/earnings icon with news badge, program update indicators, comparison arrows, earnings chart changes.
Composition: News announcement style with monetization focus.
Mood: Important, financial, opportunity-focused, newsworthy.
Colors: Purple for monetization, cyan for updates, gold accents for earnings.
Background: Financial news gradient.
    `.trim(),
  },
  {
    id: "safety",
    filename: "news-safety.png",
    width: 1200,
    height: 630,
    altText: "TikTok Safety Updates",
    prompt: `
${GLOBAL_STYLE}
Subject: Abstract visualization of safety and privacy updates.
Elements: Central shield icon with checkmark, privacy lock, family/parent icons, protection indicators, safety badges.
Composition: Protective, secure-feeling centered layout.
Mood: Safe, trustworthy, protective, responsible.
Colors: Purple for protection elements, cyan for trust indicators, green accents for safety.
Background: Secure, calm gradient.
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

async function generateImage(spec) {
  console.log(`\n📸 Generating: ${spec.filename}`);
  console.log(`   Dimensions: ${spec.width}x${spec.height}`);

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

async function generateAndSaveImage(spec, outputDir, force) {
  const filepath = path.join(outputDir, spec.filename);

  if (!force && fs.existsSync(filepath)) {
    console.log(`⏭️  Skipping ${spec.filename} (exists)`);
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
  console.log("🎨 Content Featured Images Generator");
  console.log("=====================================\n");

  if (!process.env.FAL_KEY) {
    console.error("❌ Error: FAL_KEY environment variable is required");
    process.exit(1);
  }

  fal.config({ credentials: process.env.FAL_KEY });

  const force = hasFlag("force");
  const typeFilter = getArg("type"); // 'guides', 'news', or undefined for all

  // Setup output directories
  const guidesDir = path.join(process.cwd(), "public", "guides");
  const newsDir = path.join(process.cwd(), "public", "news");

  if (!fs.existsSync(guidesDir)) fs.mkdirSync(guidesDir, { recursive: true });
  if (!fs.existsSync(newsDir)) fs.mkdirSync(newsDir, { recursive: true });

  const results = [];

  // Generate guides images
  if (!typeFilter || typeFilter === "guides") {
    console.log("📚 Generating Guides Featured Images...");
    console.log(`   Output: ${guidesDir}`);

    for (const spec of GUIDES_IMAGES) {
      const result = await generateAndSaveImage(spec, guidesDir, force);
      results.push({ type: "guides", spec, ...result });
    }
  }

  // Generate news images
  if (!typeFilter || typeFilter === "news") {
    console.log("\n📰 Generating News Featured Images...");
    console.log(`   Output: ${newsDir}`);

    for (const spec of NEWS_IMAGES) {
      const result = await generateAndSaveImage(spec, newsDir, force);
      results.push({ type: "news", spec, ...result });
    }
  }

  // Summary
  console.log("\n=====================================");
  console.log("📊 Summary");
  console.log("=====================================\n");

  const successful = results.filter((r) => r.success && !r.skipped);
  const skipped = results.filter((r) => r.skipped);
  const failed = results.filter((r) => !r.success);

  console.log(`✅ Generated: ${successful.length}`);
  console.log(`⏭️  Skipped: ${skipped.length}`);
  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.length}`);
    failed.forEach((r) => console.log(`   - ${r.spec.filename}`));
  }

  // Save manifests
  const guidesManifest = {
    generated: new Date().toISOString(),
    images: GUIDES_IMAGES.map((img) => ({
      id: img.id,
      filename: img.filename,
      path: `/guides/${img.filename}`,
      altText: img.altText,
    })),
  };

  const newsManifest = {
    generated: new Date().toISOString(),
    images: NEWS_IMAGES.map((img) => ({
      id: img.id,
      filename: img.filename,
      path: `/news/${img.filename}`,
      altText: img.altText,
    })),
  };

  fs.writeFileSync(path.join(guidesDir, "manifest.json"), JSON.stringify(guidesManifest, null, 2));
  fs.writeFileSync(path.join(newsDir, "manifest.json"), JSON.stringify(newsManifest, null, 2));

  console.log("\n📋 Manifests saved");
  console.log("\n🔧 Next: Run optimization script, then update frontend");

  if (failed.length > 0) process.exit(1);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
