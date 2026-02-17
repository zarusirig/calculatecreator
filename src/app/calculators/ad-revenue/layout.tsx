import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Ad Revenue Calculator and Earnings Tool Guide",
  description: "Use this TikTok ad revenue calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
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
