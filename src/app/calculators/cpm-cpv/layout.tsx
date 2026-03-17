import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Cpm Cpv Calculator 2026",
  description: "Use this TikTok cpm cpv calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  keywords: ['tiktok cpm calculator', 'cpv calculator', 'ad cost calculator', 'tiktok advertising'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/cpm-cpv/',
  },
  openGraph: {
    title: 'CPM/CPV Calculator 2026',
    description: 'Calculate Cost Per Mille and Cost Per View for TikTok ads.',
    url: 'https://tiktokcalculator.net/calculators/cpm-cpv/',
    type: 'website',
  },
};

export default function CPMCPVCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
