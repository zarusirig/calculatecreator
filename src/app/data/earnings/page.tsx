import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: "TikTok Earnings Data and Benchmark Insights Guide 2026",
  description: "Review TikTok earnings data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  alternates: { canonical: 'https://tiktokcalculator.net/data/earnings/' },
};

export default function EarningsDataHubPage() {
  const articles = getArticlesBySection('data/earnings');
  return (
    <HubListingPage
      title="TikTok Earnings Data & Research"
      description="Original earnings data and research for TikTok creators. RPM rates, brand deal benchmarks, and income distribution data you won't find anywhere else."
      section="data/earnings"
      articles={articles}
      parentPath="/data/"
      parentLabel="Data & Insights"
      calculatorLink={{ label: "Calculate your earnings", href: "/calculators/tiktok-money/" }}
    />
  );
}
