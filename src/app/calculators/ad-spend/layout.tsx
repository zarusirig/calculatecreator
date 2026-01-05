import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Ad Spend Calculator | Budget Planning for Campaigns',
  description: 'Calculate recommended ad spend budget for your TikTok campaigns based on target results and expected costs. Plan daily, weekly, and monthly budgets.',
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
