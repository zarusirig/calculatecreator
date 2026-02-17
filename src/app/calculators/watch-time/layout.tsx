import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Watch Time Calculator and Earnings Tool Guide",
  description: "Use this TikTok watch time calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['watch time calculator', 'tiktok completion rate', 'average watch time'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/watch-time/',
  },
  openGraph: {
    title: 'Watch Time Calculator 2026',
    description: 'Calculate average watch time and video completion rate.',
    url: 'https://calculatecreator.com/calculators/watch-time/',
    type: 'website',
  },
};

export default function WatchTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
