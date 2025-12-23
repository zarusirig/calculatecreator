#!/usr/bin/env node

/**
 * Migration script to convert inline breadcrumb implementations to use the standardized Breadcrumb component
 * Run with: node scripts/migrate-breadcrumbs.js
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Files to process (exclude already migrated ones)
const excludePatterns = [
  'src/app/calculators/page.tsx',
  'src/app/guides/page.tsx',
  'src/app/data/page.tsx',
  'src/app/news/page.tsx',
  'src/components/layout/Breadcrumb.tsx'
];

async function migrateBreadcrumbs() {
  console.log('🔍 Finding files with inline breadcrumbs...');

  // Find all page files that might have inline breadcrumbs
  const pageFiles = await glob('src/app/**/*.tsx', {
    ignore: ['**/layout.tsx', '**/page.tsx.map', ...excludePatterns]
  });

  let migratedCount = 0;

  for (const filePath of pageFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      // Skip if already using the Breadcrumb component
      if (content.includes('import { Breadcrumb }') || content.includes('<Breadcrumb')) {
        continue;
      }

      // Look for inline breadcrumb patterns
      const breadcrumbPattern = /<nav className="[^"]*breadcrumb[^"]*">[\s\S]*?<\/nav>/;
      const inlineBreadcrumbMatch = content.match(breadcrumbPattern);

      if (inlineBreadcrumbMatch) {
        console.log(`📝 Migrating: ${filePath}`);

        // Extract breadcrumb items from inline HTML
        const breadcrumbHtml = inlineBreadcrumbMatch[0];
        const breadcrumbItems = extractBreadcrumbItems(breadcrumbHtml, filePath);

        if (breadcrumbItems.length > 0) {
          // Add import
          let newContent = content;
          if (!content.includes("import { Breadcrumb }")) {
            const importMatch = content.match(/import.*from ['"'][^'"]+['"'];?\n/g);
            if (importMatch && importMatch.length > 0) {
              const lastImport = importMatch[importMatch.length - 1];
              const insertIndex = content.indexOf(lastImport) + lastImport.length;
              newContent = content.slice(0, insertIndex) +
                "import { Breadcrumb } from '@/components/layout/Breadcrumb';\n" +
                content.slice(insertIndex);
            }
          }

          // Replace inline breadcrumb with component
          const breadcrumbComponent = generateBreadcrumbComponent(breadcrumbItems);
          newContent = newContent.replace(breadcrumbPattern, breadcrumbComponent);

          fs.writeFileSync(filePath, newContent);
          migratedCount++;
        }
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`✅ Migration complete! Migrated ${migratedCount} files.`);
}

function extractBreadcrumbItems(html, filePath) {
  const items = [];

  // Extract links and spans from breadcrumb HTML
  const linkRegex = /<Link[^>]+href="([^"]+)"[^>]*>([^<]+)<\/Link>/g;
  const spanRegex = /<span[^>]*className="[^"]*text-neutral-900[^"]*"[^>]*>([^<]+)<\/span>/g;

  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const [, href, label] = match;
    if (href !== '/' || items.length === 0) { // Skip first Home link if it exists
      items.push({ href, label: label.trim() });
    }
  }

  // Add the current page span if it exists
  const spanMatch = html.match(spanRegex);
  if (spanMatch) {
    const label = spanMatch[1].trim();
    const pageSlug = path.basename(filePath, '.tsx');
    const parentDir = path.basename(path.dirname(filePath));

    // Generate appropriate href based on file path
    let href;
    if (parentDir === 'calculators') {
      href = `/calculators/${pageSlug}`;
    } else if (parentDir === 'guides') {
      href = `/guides/${pageSlug}`;
    } else if (parentDir === 'data') {
      href = `/data/${pageSlug}`;
    } else if (parentDir === 'news') {
      href = `/news/${pageSlug}`;
    } else {
      href = `/${parentDir}/${pageSlug}`;
    }

    items.push({ href, label });
  }

  return items;
}

function generateBreadcrumbComponent(items) {
  const itemsCode = items.map(item =>
    `          { label: '${item.label}', href: '${item.href}' }`
  ).join(',\n');

  return `      <Breadcrumb
        items={[
${itemsCode}
        ]}
        includeHome={true}
      />`;
}

// Run the migration
if (require.main === module) {
  migrateBreadcrumbs().catch(console.error);
}

module.exports = { migrateBreadcrumbs, extractBreadcrumbItems, generateBreadcrumbComponent };




