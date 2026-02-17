import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Tax Calculator and Earnings Tool Guide 2026",
  description: "Use this TikTok tax calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  keywords: ['creator tax calculator', 'influencer taxes', 'tiktok income tax'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/utility-tools/tax/',
  },
  openGraph: {
    title: 'Creator Tax Calculator 2026',
    description: 'Estimate tax obligations on TikTok creator income.',
    url: 'https://calculatecreator.com/calculators/utility-tools/tax/',
    type: 'website',
  },
};

export default function CreatorTaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
