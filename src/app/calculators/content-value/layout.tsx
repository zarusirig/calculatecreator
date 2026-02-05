import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Value Calculator 2026 | CalculateCreator',
  description: 'Calculate the monetary value of your TikTok content. Determine post worth for licensing deals, content partnerships & brand negotiations.',
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
