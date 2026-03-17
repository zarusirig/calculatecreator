import type { Metadata } from 'next';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'TikTok Creator Business Guides | Taxes, Contracts, and Operations',
  description:
    'Browse creator business guides on taxes, contracts, compliance, pricing, and financial planning for a more durable creator business.',
  alternates: { canonical: 'https://tiktokcalculator.net/guides/business/' },
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
