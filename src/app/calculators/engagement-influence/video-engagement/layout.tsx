import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Performance Calculator 2026 | CalculateCreator',
  description: 'Predict TikTok video views and engagement before posting. Analyze performance factors to optimize content for maximum reach and virality.',
  keywords: ['video performance calculator', 'tiktok views predictor', 'video success calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/video-performance/',
  },
  openGraph: {
    title: 'Video Performance Calculator 2026',
    description: 'Predict TikTok video performance before posting.',
    url: 'https://calculatecreator.com/calculators/video-performance',
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
