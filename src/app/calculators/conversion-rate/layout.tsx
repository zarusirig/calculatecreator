import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Conversion Rate Calculator and Earnings Tool",
  description: "Use this TikTok conversion rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['conversion rate calculator', 'tiktok conversion', 'traffic conversion', 'conversion optimization'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/conversion-rate/',
  },
  openGraph: {
    title: 'Conversion Rate Calculator 2026',
    description: 'Calculate traffic conversion rate from TikTok to sales.',
    url: 'https://calculatecreator.com/calculators/conversion-rate/',
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
