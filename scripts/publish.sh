#!/bin/bash
# Full publish pipeline for CalculateCreator content
# Usage: ./scripts/publish.sh [optional: csv file]

set -e

echo "=== CalculateCreator Content Pipeline ==="
echo ""

# Step 1: Generate articles from CSV if provided
if [ -n "$1" ]; then
  echo "Generating articles from $1..."
  npx tsx scripts/generate-articles.ts --csv "$1" --mode scaffold
  echo ""
fi

# Step 2: Ensure all routes exist for new content
echo "Checking routes..."
npx tsx scripts/ensure-routes.ts
echo ""

# Step 3: Run link graph audit
echo "Auditing internal links..."
npx tsx scripts/audit-links.ts
echo ""

# Step 4: Generate sitemap
echo "Generating sitemap..."
node scripts/generate-sitemap.js
echo ""

# Step 5: Build
echo "Building..."
npm run build
echo ""

# Step 6: Count pages
PAGE_COUNT=$(find out -name "index.html" 2>/dev/null | wc -l | tr -d ' ')
echo "Build complete: $PAGE_COUNT pages"

# Step 7: Count MDX articles
MDX_COUNT=$(find content -name "*.mdx" 2>/dev/null | wc -l | tr -d ' ')
echo "Total MDX articles: $MDX_COUNT"

# Step 8: Sitemap URL count
SITEMAP_COUNT=$(grep -c "<url>" public/sitemap.xml 2>/dev/null || echo "0")
echo "Sitemap URLs: $SITEMAP_COUNT"

echo ""
echo "=== Pipeline Complete ==="
