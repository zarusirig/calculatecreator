import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Money Calculator | Calculate Your Earnings (2026)',
  description: 'Free TikTok money calculator: Estimate your total earnings from Creator Fund, brand deals, LIVE gifts & TikTok Shop. Get accurate income projections based on your followers and engagement rate.',
  keywords: ['tiktok money calculator', 'tiktok earnings calculator', 'how much money can you make on tiktok', 'tiktok income calculator', 'tiktok revenue calculator', 'tiktok earnings estimator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-money/',
  },
  openGraph: {
    title: 'TikTok Money Calculator | Calculate Your Earnings (2026)',
    description: 'Free TikTok money calculator: Estimate your total earnings from Creator Fund, brand deals, LIVE gifts & TikTok Shop.',
    url: 'https://calculatecreator.com/calculators/tiktok-money',
    type: 'website',
  },
};

export default function TikTokMoneyCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
