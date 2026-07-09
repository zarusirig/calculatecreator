import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Content Value Calculator",
  description: "Use this TikTok content value calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['content value calculator', 'post value', 'tiktok content worth'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/content-value/',
  },
  openGraph: {
    images: [{ url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Content Value Calculator 2026',
    description: 'Calculate the monetary value of your TikTok content.',
    url: 'https://ttcalculator.net/calculators/content-value/',
    type: 'website',
  },
};

export default function ContentValueCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
