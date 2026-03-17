import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Campaign Roi Calculator",
  description: "Use this TikTok campaign roi calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['campaign roi calculator', 'tiktok roi', 'marketing roi', 'roas calculator'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/campaign-roi/',
  },
  openGraph: {
    title: 'Campaign ROI Calculator 2026',
    description: 'Calculate marketing campaign ROI and ROAS on TikTok.',
    url: 'https://tiktokcalculator.net/calculators/campaign-roi/',
    type: 'website',
  },
};

export default function CampaignROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
