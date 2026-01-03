import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Engagement Rate Calculator | Free & Accurate (2025)',
  description: 'Calculate your TikTok engagement rate in seconds. Compare to industry benchmarks (5%+ is excellent). Free engagement calculator with detailed analytics for creators and brands.',
  keywords: ['tiktok engagement rate calculator', 'tiktok engagement calculator', 'engagement rate calculator', 'tiktok metrics calculator', 'calculate tiktok engagement', 'tiktok analytics calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/engagement-rate/',
  },
  openGraph: {
    title: 'TikTok Engagement Rate Calculator | Free & Accurate (2025)',
    description: 'Calculate your TikTok engagement rate and compare to industry benchmarks. Free tool for creators.',
    url: 'https://calculatecreator.com/calculators/engagement-rate',
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
