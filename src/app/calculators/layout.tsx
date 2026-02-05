import type { Metadata } from 'next';
import { generateHubPageSchemas, hubPageConfigs } from '@/lib/seo/hub-page-schema';

const config = hubPageConfigs.calculators;

export const metadata: Metadata = {
  title: 'TikTok Calculators: 28 Free Tools for Creators 2026',
  description: 'Complete suite of TikTok calculators for earnings, engagement, growth, ROI & taxes. Free, data-driven tools used by 500,000+ creators worldwide.',
  keywords: ['tiktok calculator', 'tiktok earnings calculator', 'tiktok money calculator', 'creator fund calculator', 'engagement rate calculator', 'brand deal calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/',
  },
  openGraph: {
    title: 'TikTok Calculators: 28 Free Tools for Creators',
    description: 'Complete suite of TikTok calculators for earnings, engagement, growth, ROI & taxes. Free, data-driven tools used by 500,000+ creators.',
    url: 'https://calculatecreator.com/calculators/',
    type: 'website',
  },
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = generateHubPageSchemas(config);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      {schemas.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPageSchema) }}
      />
      {children}
    </>
  );
}
