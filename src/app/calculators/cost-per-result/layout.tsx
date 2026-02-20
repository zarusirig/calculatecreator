import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Cost Per Result Calculator",
  description: "Use this TikTok cost per result calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['cost per result', 'cpr calculator', 'ad performance', 'advertising metrics', 'campaign cost'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/cost-per-result/',
  },
  openGraph: {
    title: 'Cost Per Result Calculator',
    description: 'Calculate and optimize your advertising cost per result.',
    url: 'https://calculatecreator.com/calculators/cost-per-result/',
    type: 'website',
  },
};

export default function CostPerResultCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
