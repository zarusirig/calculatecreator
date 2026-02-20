import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Milestone Tracker Calculator",
  description: "Use this TikTok milestone tracker calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['milestone tracker', 'follower goals', 'growth tracker', 'tiktok milestones'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/milestone-tracker/',
  },
  openGraph: {
    title: 'Follower Milestone Tracker',
    description: 'Track progress toward your follower growth milestones.',
    url: 'https://calculatecreator.com/calculators/milestone-tracker/',
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
