import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Follower Conversion Calculator",
  description: "Use this TikTok follower conversion calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['follower conversion calculator', 'view to follower rate', 'conversion rate'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/follower-conversion/',
  },
  openGraph: {
    title: 'Follower Conversion Calculator 2026',
    description: 'Calculate view-to-follower conversion rate.',
    url: 'https://calculatecreator.com/calculators/follower-conversion/',
    type: 'website',
  },
};

export default function FollowerConversionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
