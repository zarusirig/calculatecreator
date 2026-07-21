import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Tax Calculator 2026",
  description: "Use this TikTok tax calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  keywords: ['creator tax calculator', 'influencer taxes', 'tiktok income tax'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/tax/',
  },
  openGraph: {
    images: [{ url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Creator Tax Calculator 2026',
    description: 'Estimate tax obligations on TikTok creator income.',
    url: 'https://ttcalculator.net/calculators/tax/',
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
