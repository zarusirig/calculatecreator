import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: "TikTok Growth Guide and Creator Strategy Guide 2026",
  description: "Read this TikTok growth guide for creator earnings context, engagement benchmarks, monetization requirements, and practical optimization steps.",
  alternates: { canonical: 'https://calculatecreator.com/guides/growth/' },
};

export default function GrowthHubPage() {
  const articles = getArticlesBySection('guides/growth');
  return (
    <HubListingPage
      title="TikTok Growth & Algorithm Guides"
      description="Data-backed strategies to grow your TikTok following. Understand the algorithm, optimize your content, and build a sustainable audience."
      section="guides/growth"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
      calculatorLink={{ label: "Track your engagement rate", href: "/calculators/engagement-rate/" }}
    />
  );
}
