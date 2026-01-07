import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Niche Profitability Calculator 2026 | CalculateCreator',
  description: 'Compare earning potential across TikTok niches. Find the most profitable content categories with real RPM and brand deal data.',
  keywords: ['niche profitability', 'tiktok niche calculator', 'best niches'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/niche-profitability/',
  },
  openGraph: {
    title: 'Niche Profitability Calculator 2026',
    description: 'Compare earning potential across different TikTok niches.',
    url: 'https://calculatecreator.com/calculators/niche-profitability',
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
