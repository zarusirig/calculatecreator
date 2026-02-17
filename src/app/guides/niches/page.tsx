import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: "TikTok Niches Guide and Creator Strategy Guide 2026",
  description: "Read this TikTok niches guide for creator earnings context, engagement benchmarks, monetization requirements, and practical optimization steps.",
  alternates: { canonical: 'https://calculatecreator.com/guides/niches/' },
};

export default function NichesHubPage() {
  const articles = getArticlesBySection('guides/niches');
  return (
    <HubListingPage
      title="TikTok Niche Earnings Guides"
      description="Detailed earnings breakdowns and strategies for every major TikTok content niche. Find the most profitable niche for your content."
      section="guides/niches"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
      calculatorLink={{ label: "Calculate niche profitability", href: "/calculators/niche-profitability/" }}
    />
  );
}
