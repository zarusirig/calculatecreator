import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Ad Cost Calculator (2025) | CalculateCreator',
  description: 'Calculate TikTok advertising costs for your campaigns. Estimate budget requirements for different ad formats and targeting options.',
  keywords: ['tiktok ad cost', 'advertising cost calculator', 'tiktok ads budget'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-ad-cost/',
  },
  openGraph: {
    title: 'TikTok Ad Cost Calculator (2025)',
    description: 'Calculate TikTok advertising costs for your campaigns.',
    url: 'https://calculatecreator.com/calculators/tiktok-ad-cost',
    type: 'website',
  },
};

export default function TikTokAdCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
