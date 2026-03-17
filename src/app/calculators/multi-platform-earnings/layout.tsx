import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Multi Platform Earnings Calculator",
  description: "Use this TikTok multi platform earnings calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['multi platform calculator', 'platform comparison', 'cross platform earnings'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/multi-platform-earnings/',
  },
  openGraph: {
    title: 'Platform Earnings Comparison 2026',
    description: 'Compare earnings across TikTok, YouTube & Instagram.',
    url: 'https://tiktokcalculator.net/calculators/multi-platform-earnings/',
    type: 'website',
  },
};

export default function MultiPlatformEarningsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
