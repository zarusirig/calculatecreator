import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Ad Spend Calculator and Earnings Tool Guide",
  description: "Use this TikTok ad spend calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['tiktok ad budget', 'ad spend calculator', 'tiktok budget planning', 'campaign budget'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/ad-spend/',
  },
  openGraph: {
    title: 'TikTok Ad Spend Calculator',
    description: 'Plan your TikTok advertising budget with accurate spend calculations.',
    url: 'https://calculatecreator.com/calculators/ad-spend/',
    type: 'website',
  },
};

export default function AdSpendCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
