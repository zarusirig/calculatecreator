import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Save Rate Calculator",
  description: "Use this TikTok save rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['save rate calculator', 'tiktok saves', 'bookmark rate'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/save-rate/',
  },
  openGraph: {
    images: [{ url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Save Rate Calculator 2026',
    description: 'Calculate video save rate to measure content value.',
    url: 'https://ttcalculator.net/calculators/save-rate/',
    type: 'website',
  },
};

export default function SaveRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
