import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Engagement Calculator",
  description: "Use this TikTok engagement calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['tiktok engagement rate calculator', 'tiktok engagement calculator', 'engagement rate calculator', 'tiktok metrics calculator', 'calculate tiktok engagement', 'tiktok analytics calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/engagement-rate/',
  },
  openGraph: {
    title: 'TikTok Engagement Rate Calculator | Free & Accurate 2026',
    description: 'Calculate your TikTok engagement rate and compare to industry benchmarks. Free tool for creators.',
    url: 'https://calculatecreator.com/calculators/engagement-rate/',
    type: 'website',
  },
};

export default function EngagementRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
