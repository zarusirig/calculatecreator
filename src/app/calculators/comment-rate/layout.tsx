import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Comment Rate Calculator",
  description: "Use this TikTok comment rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['comment rate', 'tiktok comments', 'engagement metrics', 'comment ratio calculator'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/comment-rate/',
  },
  openGraph: {
    title: 'Comment Rate Calculator',
    description: 'Calculate and optimize your TikTok comment rate.',
    url: 'https://tiktokcalculator.net/calculators/comment-rate/',
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
