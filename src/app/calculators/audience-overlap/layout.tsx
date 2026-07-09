import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Audience Overlap Calculator",
  description: "Use this TikTok audience overlap calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['audience overlap', 'cross-platform analytics', 'follower overlap', 'audience analysis'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/audience-overlap/',
  },
  openGraph: {
    images: [{ url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Audience Overlap Calculator',
    description: 'Analyze audience overlap across platforms and accounts.',
    url: 'https://ttcalculator.net/calculators/audience-overlap/',
    type: 'website',
  },
};

export default function AudienceOverlapCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
