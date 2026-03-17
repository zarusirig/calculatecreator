import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Hashtag Performance Calculator",
  description: "Use this TikTok hashtag performance calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['hashtag calculator', 'hashtag performance', 'tiktok hashtags'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/hashtag-performance/',
  },
  openGraph: {
    title: 'Hashtag Performance Calculator 2026',
    description: 'Analyze hashtag effectiveness and reach potential.',
    url: 'https://tiktokcalculator.net/calculators/hashtag-performance/',
    type: 'website',
  },
};

export default function HashtagPerformanceCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
