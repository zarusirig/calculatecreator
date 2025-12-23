import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creator Tax Calculator (2025) | CalculateCreator',
  description: 'Estimate tax obligations on TikTok income. Calculate federal, state & self-employment taxes plus deductions for content creators.',
  keywords: ['creator tax calculator', 'influencer taxes', 'tiktok income tax'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/creator-tax',
  },
  openGraph: {
    title: 'Creator Tax Calculator (2025)',
    description: 'Estimate tax obligations on TikTok creator income.',
    url: 'https://calculatecreator.com/calculators/creator-tax',
    type: 'website',
  },
};

export default function CreatorTaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
