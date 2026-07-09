import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Viral Potential Calculator",
  description: "Use this TikTok viral potential calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['viral potential calculator', 'tiktok viral score', 'virality predictor'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/viral-potential/',
  },
  openGraph: {
    images: [{ url: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Viral Potential Calculator 2026',
    description: 'Analyze your video\'s potential to go viral on TikTok.',
    url: 'https://tiktokcalculator.net/calculators/viral-potential/',
    type: 'website',
  },
};

export default function ViralPotentialCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
