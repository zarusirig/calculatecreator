import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'TikTok Niche Guides | Earnings by Content Category',
  description:
    'Browse niche guides that compare TikTok earnings, monetization patterns, and business models across major content categories.',
  alternates: { canonical: 'https://tiktokcalculator.net/guides/niches/' },
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
