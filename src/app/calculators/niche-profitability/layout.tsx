import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Niche Profitability Calculator and Earnings Tool",
  description: "Use this TikTok niche profitability calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['niche profitability', 'tiktok niche calculator', 'best niches'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/niche-profitability/',
  },
  openGraph: {
    title: 'Niche Profitability Calculator 2026',
    description: 'Compare earning potential across different TikTok niches.',
    url: 'https://calculatecreator.com/calculators/niche-profitability/',
    type: 'website',
  },
};

export default function NicheProfitabilityCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
