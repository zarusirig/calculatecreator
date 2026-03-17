import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Sponsorship Roi Calculator",
  description: "Use this TikTok sponsorship roi calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['sponsorship roi calculator', 'brand deal roi', 'partnership calculator'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/sponsorship-roi/',
  },
  openGraph: {
    title: 'Sponsorship ROI Calculator 2026',
    description: 'Calculate ROI for brand sponsorships and partnerships.',
    url: 'https://tiktokcalculator.net/calculators/sponsorship-roi/',
    type: 'website',
  },
};

export default function SponsorshipROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
