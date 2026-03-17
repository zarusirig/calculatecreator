import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Lifetime Value Calculator",
  description: "Use this TikTok lifetime value calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['ltv calculator', 'customer lifetime value', 'customer value', 'retention metrics'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/lifetime-value/',
  },
  openGraph: {
    title: 'LTV Calculator 2026',
    description: 'Calculate Customer Lifetime Value from TikTok traffic.',
    url: 'https://tiktokcalculator.net/calculators/lifetime-value/',
    type: 'website',
  },
};

export default function LifetimeValueCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
