import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Production Cost Calculator",
  description: "Use this TikTok production cost calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['production cost calculator', 'content cost', 'video production roi'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/production-cost/',
  },
  openGraph: {
    title: 'Production Cost Calculator 2026',
    description: 'Calculate video production costs and content ROI.',
    url: 'https://tiktokcalculator.net/calculators/production-cost/',
    type: 'website',
  },
};

export default function ProductionCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
