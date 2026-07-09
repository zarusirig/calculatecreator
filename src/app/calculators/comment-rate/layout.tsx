import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Comment Rate Calculator",
  description: "Use this TikTok comment rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['comment rate', 'tiktok comments', 'engagement metrics', 'comment ratio calculator'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/comment-rate/',
  },
  openGraph: {
    images: [{ url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Comment Rate Calculator',
    description: 'Calculate and optimize your TikTok comment rate.',
    url: 'https://ttcalculator.net/calculators/comment-rate/',
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
