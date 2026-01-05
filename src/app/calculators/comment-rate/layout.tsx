import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment Rate Calculator | TikTok Engagement Metrics',
  description: 'Calculate your TikTok comment rate to measure audience interaction. Track engagement quality and compare against benchmarks.',
  keywords: ['comment rate', 'tiktok comments', 'engagement metrics', 'comment ratio calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/comment-rate/',
  },
  openGraph: {
    title: 'Comment Rate Calculator',
    description: 'Calculate and optimize your TikTok comment rate.',
    url: 'https://calculatecreator.com/calculators/comment-rate/',
    type: 'website',
  },
};

export default function CommentRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
