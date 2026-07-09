import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Niche Profitability Calculator",
  description: "Use this TikTok niche profitability calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['niche profitability', 'tiktok niche calculator', 'best niches'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/niche-profitability/',
  },
  openGraph: {
    images: [{ url: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Niche Profitability Calculator 2026',
    description: 'Compare earning potential across different TikTok niches.',
    url: 'https://tiktokcalculator.net/calculators/niche-profitability/',
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
