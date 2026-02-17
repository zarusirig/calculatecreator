import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: "TikTok Monetization Guide and Creator Strategy Guide",
  description: "Read this TikTok monetization guide for creator earnings context, engagement benchmarks, monetization requirements, and practical optimization steps.",
  alternates: { canonical: 'https://calculatecreator.com/guides/monetization/' },
};

export default function MonetizationHubPage() {
  const articles = getArticlesBySection('guides/monetization');
  return (
    <HubListingPage
      title="TikTok Monetization Guides"
      description="Everything you need to know about making money on TikTok. From Creator Fund to brand deals to TikTok Shop — comprehensive guides backed by real earnings data."
      section="guides/monetization"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
      calculatorLink={{ label: "Calculate your TikTok earnings", href: "/calculators/tiktok-money/" }}
    />
  );
}
