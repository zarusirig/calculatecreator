import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Share Ratio Calculator",
  description: "Use this TikTok share ratio calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['share ratio calculator', 'share to view', 'tiktok shares'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/share-ratio/',
  },
  openGraph: {
    title: 'Share Ratio Calculator 2026',
    description: 'Calculate share-to-view ratio to measure viral potential.',
    url: 'https://tiktokcalculator.net/calculators/share-ratio/',
    type: 'website',
  },
};

export default function ShareRatioCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
