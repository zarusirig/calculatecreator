import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Follower Growth Calculator",
  description: "Use this TikTok follower growth calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['follower growth calculator', 'tiktok growth projector', 'follower prediction'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/follower-growth/',
  },
  openGraph: {
    title: 'Follower Growth Calculator 2026',
    description: 'Project future follower count and growth milestones.',
    url: 'https://calculatecreator.com/calculators/follower-growth/',
    type: 'website',
  },
};

export default function FollowerGrowthCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
