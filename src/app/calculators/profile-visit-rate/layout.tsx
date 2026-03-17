import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Profile Visit Rate Calculator",
  description: "Use this TikTok profile visit rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['profile visit rate', 'profile views calculator', 'visitor rate'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/profile-visit-rate/',
  },
  openGraph: {
    title: 'Profile Visit Calculator 2026',
    description: 'Calculate profile visit rate from video views.',
    url: 'https://tiktokcalculator.net/calculators/profile-visit-rate/',
    type: 'website',
  },
};

export default function ProfileVisitRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
