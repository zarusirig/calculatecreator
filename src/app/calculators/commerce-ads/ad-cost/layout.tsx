import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Ad Cost Calculator 2026",
  description: "Use this TikTok ad cost calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  keywords: ['tiktok ad cost', 'advertising cost calculator', 'tiktok ads budget'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-ad-cost/',
  },
  openGraph: {
    title: 'TikTok Ad Cost Calculator 2026',
    description: 'Calculate TikTok advertising costs for your campaigns.',
    url: 'https://calculatecreator.com/calculators/tiktok-ad-cost/',
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
