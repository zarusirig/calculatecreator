#!/usr/bin/env bash
# Stage 3: Next.js route surgery. Run from repo root.
set -euo pipefail
cd "$(dirname "$0")/../.."
A=src/app

echo "== 1. delete dead dynamic article routes =="
git rm -rq \
  "$A"/calculators/*/'[articleSlug]' \
  "$A"/calculators/commerce-ads/shop-profit/'[articleSlug]' \
  "$A"/calculators/earnings-revenue/live-earnings/'[articleSlug]' \
  "$A"/data/'[articleSlug]' \
  "$A"/data/earnings/'[...slug]' \
  "$A"/data/engagement/'[...slug]' \
  "$A"/data/platform-comparisons/'[...slug]' \
  "$A"/data/reference/'[...slug]' \
  "$A"/guides/'[articleSlug]' \
  "$A"/guides/business/'[...slug]' \
  "$A"/guides/growth/'[...slug]' \
  "$A"/guides/monetization/'[...slug]' \
  "$A"/guides/niches/'[...slug]'

echo "== 2. promote 5 bucket-nested tools to /calculators/<tool>/ =="
git mv "$A/calculators/earnings-revenue/live-earnings/page.tsx" "$A/calculators/live-earnings-tmp.tsx"
mkdir -p "$A/calculators/live-earnings" && git mv "$A/calculators/live-earnings-tmp.tsx" "$A/calculators/live-earnings/page.tsx"
git mv "$A/calculators/commerce-ads/shop-profit/page.tsx" "$A/calculators/shop-profit-tmp.tsx"
mkdir -p "$A/calculators/shop-profit" && git mv "$A/calculators/shop-profit-tmp.tsx" "$A/calculators/shop-profit/page.tsx"
for t in eligibility payout tax; do
  git mv "$A/calculators/utility-tools/$t/page.tsx" "$A/calculators/$t-tmp.tsx"
  mkdir -p "$A/calculators/$t" && git mv "$A/calculators/$t-tmp.tsx" "$A/calculators/$t/page.tsx"
done
# remove now-empty nested tool dirs (bucket hub page.tsx stays put)
rmdir "$A/calculators/earnings-revenue/live-earnings" "$A/calculators/commerce-ads/shop-profit" \
      "$A/calculators/utility-tools/eligibility" "$A/calculators/utility-tools/payout" "$A/calculators/utility-tools/tax"

echo "== 3. relocate 12 hub pages to /learn/<slug>/ =="
for h in business growth monetization niches best-shop-niches monetization-calculator-hub tiktok-ads-hub tiktok-growth-hub; do
  git mv "$A/guides/$h" "$A/learn/$h"
done
for h in earnings engagement platform-comparisons reference; do
  git mv "$A/data/$h" "$A/learn/$h"
done

echo "== 4. drop dissolved section indexes (firebase 301s /guides,/data -> /learn) =="
git rm -q "$A/guides/page.tsx" "$A/data/page.tsx"
rmdir "$A/guides" "$A/data"

echo "== done. new route layout: =="
find "$A/learn" "$A/calculators/live-earnings" "$A/calculators/shop-profit" "$A/calculators/eligibility" -name 'page.tsx' | sort
