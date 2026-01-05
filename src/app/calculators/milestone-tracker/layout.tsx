import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Follower Milestone Tracker | TikTok Growth Progress',
  description: 'Track your progress toward follower milestones. Calculate estimated time to reach your next growth goal based on current growth rate.',
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
