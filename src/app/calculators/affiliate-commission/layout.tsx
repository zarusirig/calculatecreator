import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Affiliate Commission Calculator",
  description: "Use this TikTok affiliate commission calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['tiktok affiliate calculator', 'shop affiliate earnings', 'commission calculator', 'affiliate income'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/affiliate-commission/',
  },
  openGraph: {
    title: 'Affiliate Commission Calculator 2026',
    description: 'Calculate TikTok Shop affiliate earnings and commission potential.',
    url: 'https://tiktokcalculator.net/calculators/affiliate-commission/',
    type: 'website',
  },
};

export default function AffiliateCommissionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
