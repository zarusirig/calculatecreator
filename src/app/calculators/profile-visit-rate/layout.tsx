import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Profile Visit Rate Calculator and Earnings Tool",
  description: "Use this TikTok profile visit rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['profile visit rate', 'profile views calculator', 'visitor rate'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/profile-visit-rate/',
  },
  openGraph: {
    title: 'Profile Visit Calculator 2026',
    description: 'Calculate profile visit rate from video views.',
    url: 'https://calculatecreator.com/calculators/profile-visit-rate/',
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
