/**
 * ensure-routes.ts
 *
 * Auto-creates Next.js route files for MDX content directories.
 *
 * Usage: npx tsx scripts/ensure-routes.ts
 *
 * Scans all content/ directories for .mdx files, reads the `category` field
 * from frontmatter, and creates missing route files using the factory pattern
 * from @/lib/content/article-page.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const APP_DIR = path.join(ROOT, 'src', 'app');

// ---------- Templates ----------

function calculatorRouteTemplate(contentDir: string): string {
  return `import { createArticlePageExports } from '@/lib/content/article-page';

const pageExports = createArticlePageExports('${contentDir}');

export const generateStaticParams = pageExports.generateStaticParams;
export const generateMetadata = pageExports.generateMetadata;
export default pageExports.default;
`;
}

function catchAllRouteTemplate(contentDir: string): string {
  return `import { createCatchAllArticlePageExports } from '@/lib/content/article-page';

const pageExports = createCatchAllArticlePageExports('${contentDir}');

export const generateStaticParams = pageExports.generateStaticParams;
export const generateMetadata = pageExports.generateMetadata;
export default pageExports.default;
`;
}

// ---------- Helpers ----------

/**
 * Recursively find all .mdx files under a directory.
 */
function findMdxFiles(dir: string): string[] {
  const results: string[] = [];

  if (!fs.existsSync(dir)) {
    return results;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * Read the `category` field from an MDX file's frontmatter.
 * Returns null if the field is missing or the file can't be parsed.
 */
function readCategory(filePath: string): string | null {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);
    return typeof data.category === 'string' ? data.category : null;
  } catch {
    return null;
  }
}

/**
 * Determine what kind of content type a category belongs to,
 * based on its top-level segment.
 */
function getContentType(category: string): 'calculators' | 'guides' | 'data' | 'blog' | 'other' {
  const topLevel = category.split('/')[0];
  if (topLevel === 'calculators') return 'calculators';
  if (topLevel === 'guides') return 'guides';
  if (topLevel === 'data') return 'data';
  if (topLevel === 'blog') return 'blog';
  return 'other';
}

// ---------- Main ----------

function main(): void {
  console.log('=== ensure-routes: scanning MDX content for missing routes ===\n');

  // Collect all unique category values from all MDX files under content/
  const mdxFiles = findMdxFiles(CONTENT_DIR);
  const categories = new Set<string>();

  for (const filePath of mdxFiles) {
    const category = readCategory(filePath);
    if (category) {
      categories.add(category);
    }
  }

  console.log(`Found ${mdxFiles.length} MDX file(s) across ${categories.size} unique category path(s).\n`);

  const created: string[] = [];
  const warnings: string[] = [];
  const skipped: string[] = [];

  for (const category of Array.from(categories).sort()) {
    const contentType = getContentType(category);

    // Skip blog — handled by existing blog route
    if (contentType === 'blog') {
      skipped.push(category);
      continue;
    }

    // For unknown content types, skip with a warning
    if (contentType === 'other') {
      warnings.push(`Unknown content type for category "${category}" — skipped.`);
      continue;
    }

    if (contentType === 'calculators') {
      // Route: src/app/calculators/{path}/[articleSlug]/page.tsx
      const segments = category.split('/'); // e.g. ['calculators', 'tiktok-money']
      const categoryPath = segments.slice(1).join('/'); // e.g. 'tiktok-money'

      // Check that the parent calculator page exists
      const parentPagePath = path.join(APP_DIR, ...segments, 'page.tsx');
      if (!fs.existsSync(parentPagePath)) {
        warnings.push(
          `Parent calculator page missing for "${category}" — expected ${path.relative(ROOT, parentPagePath)}. Skipping route creation.`
        );
        continue;
      }

      // Check if the article route already exists
      const routeDir = path.join(APP_DIR, ...segments, '[articleSlug]');
      const routeFile = path.join(routeDir, 'page.tsx');

      if (fs.existsSync(routeFile)) {
        // Already exists, nothing to do
        continue;
      }

      // Create the route
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(routeFile, calculatorRouteTemplate(category));
      created.push(path.relative(ROOT, routeFile));
    } else if (contentType === 'guides' || contentType === 'data') {
      // Route: src/app/{guides|data}/{hub}/[...slug]/page.tsx
      const segments = category.split('/'); // e.g. ['guides', 'monetization']
      const hub = segments[1]; // e.g. 'monetization'

      if (!hub) {
        warnings.push(`Category "${category}" has no hub segment — skipped.`);
        continue;
      }

      // The hub page should exist at src/app/{type}/{hub}/page.tsx
      const hubPagePath = path.join(APP_DIR, segments[0], hub, 'page.tsx');
      if (!fs.existsSync(hubPagePath)) {
        warnings.push(
          `Hub page missing for "${category}" — expected ${path.relative(ROOT, hubPagePath)}. Skipping route creation.`
        );
        continue;
      }

      // Check if the catch-all route already exists
      const routeDir = path.join(APP_DIR, segments[0], hub, '[...slug]');
      const routeFile = path.join(routeDir, 'page.tsx');

      if (fs.existsSync(routeFile)) {
        // Already exists, nothing to do
        continue;
      }

      // Create the route
      const contentDir = `${segments[0]}/${hub}`;
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(routeFile, catchAllRouteTemplate(contentDir));
      created.push(path.relative(ROOT, routeFile));
    }
  }

  // ---------- Report ----------

  if (created.length > 0) {
    console.log(`Created ${created.length} route file(s):`);
    for (const file of created) {
      console.log(`  + ${file}`);
    }
    console.log();
  } else {
    console.log('No new route files needed.\n');
  }

  if (skipped.length > 0) {
    console.log(`Skipped ${skipped.length} category path(s) (blog — handled separately):`);
    for (const s of skipped) {
      console.log(`  - ${s}`);
    }
    console.log();
  }

  if (warnings.length > 0) {
    console.log(`Warnings (${warnings.length}):`);
    for (const w of warnings) {
      console.log(`  ! ${w}`);
    }
    console.log();
  }

  console.log('=== ensure-routes: done ===');
}

main();
