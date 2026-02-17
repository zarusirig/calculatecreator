import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Audience Overlap Calculator and Earnings Tool",
  description: "Use this TikTok audience overlap calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['audience overlap', 'cross-platform analytics', 'follower overlap', 'audience analysis'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/audience-overlap/',
  },
  openGraph: {
    title: 'Audience Overlap Calculator',
    description: 'Analyze audience overlap across platforms and accounts.',
    url: 'https://calculatecreator.com/calculators/audience-overlap/',
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
