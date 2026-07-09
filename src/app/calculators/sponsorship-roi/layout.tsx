import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Sponsorship Roi Calculator",
  description: "Use this TikTok sponsorship roi calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['sponsorship roi calculator', 'brand deal roi', 'partnership calculator'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/sponsorship-roi/',
  },
  openGraph: {
    images: [{ url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Sponsorship ROI Calculator 2026',
    description: 'Calculate ROI for brand sponsorships and partnerships.',
    url: 'https://ttcalculator.net/calculators/sponsorship-roi/',
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
