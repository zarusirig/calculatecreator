import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Milestone Tracker Calculator",
  description: "Use this TikTok milestone tracker calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['milestone tracker', 'follower goals', 'growth tracker', 'tiktok milestones'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/milestone-tracker/',
  },
  openGraph: {
    images: [{ url: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Follower Milestone Tracker',
    description: 'Track progress toward your follower growth milestones.',
    url: 'https://tiktokcalculator.net/calculators/milestone-tracker/',
    type: 'website',
  },
};

export default function MilestoneTrackerCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
