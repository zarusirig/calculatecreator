import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Video Engagement Calculator and Earnings Tool",
  description: "Use this TikTok video engagement calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['video performance calculator', 'tiktok views predictor', 'video success calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/video-performance/',
  },
  openGraph: {
    title: 'Video Performance Calculator 2026',
    description: 'Predict TikTok video performance before posting.',
    url: 'https://calculatecreator.com/calculators/video-performance/',
    type: 'website',
  },
};

export default function VideoPerformanceCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
