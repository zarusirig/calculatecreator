import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ad Revenue Calculator 2026 | CalculateCreator',
  description: 'Estimate TikTok ad revenue potential from video views. Calculate earnings from TikTok\'s advertising programs and monetization features.',
  keywords: ['tiktok ad revenue', 'ad earnings calculator', 'tiktok ads calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/ad-revenue/',
  },
  openGraph: {
    title: 'Ad Revenue Calculator 2026',
    description: 'Estimate TikTok ad revenue potential from video views.',
    url: 'https://calculatecreator.com/calculators/ad-revenue/',
    type: 'website',
  },
};

export default function AdRevenueCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
