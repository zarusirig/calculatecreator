import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Content Value Calculator and Earnings Tool Guide",
  description: "Use this TikTok content value calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['content value calculator', 'post value', 'tiktok content worth'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/content-value/',
  },
  openGraph: {
    title: 'Content Value Calculator 2026',
    description: 'Calculate the monetary value of your TikTok content.',
    url: 'https://calculatecreator.com/calculators/content-value/',
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
