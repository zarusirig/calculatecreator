import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Conversion Rate Calculator",
  description: "Use this TikTok conversion rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['conversion rate calculator', 'tiktok conversion', 'traffic conversion', 'conversion optimization'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/conversion-rate/',
  },
  openGraph: {
    title: 'Conversion Rate Calculator 2026',
    description: 'Calculate traffic conversion rate from TikTok to sales.',
    url: 'https://tiktokcalculator.net/calculators/conversion-rate/',
    type: 'website',
  },
};

export default function ConversionRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
