import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Follower Growth Calculator (2025) | CalculateCreator',
  description: 'Project future follower count based on current growth rate. See when you\'ll hit 10K, 100K & monetization milestones with data-driven forecasts.',
  keywords: ['follower growth calculator', 'tiktok growth projector', 'follower prediction'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/follower-growth/',
  },
  openGraph: {
    title: 'Follower Growth Calculator (2025)',
    description: 'Project future follower count and growth milestones.',
    url: 'https://calculatecreator.com/calculators/follower-growth',
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
