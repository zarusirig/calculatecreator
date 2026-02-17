import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: "TikTok Business Guide and Creator Strategy Guide 2026",
  description: "Read this TikTok business guide for creator earnings context, engagement benchmarks, monetization requirements, and practical optimization steps.",
  alternates: { canonical: 'https://calculatecreator.com/guides/business/' },
};

export default function BusinessHubPage() {
  const articles = getArticlesBySection('guides/business');
  return (
    <HubListingPage
      title="TikTok Creator Business Guides"
      description="Run your TikTok creator career like a business. Taxes, contracts, legal requirements, and financial planning for sustainable income."
      section="guides/business"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
    />
  );
}
