import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Posting Time Calculator and Earnings Tool Guide",
  description: "Use this TikTok posting time calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['best posting time', 'tiktok posting schedule', 'optimal post time'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/posting-time/',
  },
  openGraph: {
    title: 'Best Posting Time Calculator 2026',
    description: 'Find optimal posting times for your TikTok audience.',
    url: 'https://calculatecreator.com/calculators/posting-time/',
    type: 'website',
  },
};

export default function PostingTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
