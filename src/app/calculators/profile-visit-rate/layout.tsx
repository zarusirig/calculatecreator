import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile Visit Calculator 2026 | CalculateCreator',
  description: 'Calculate profile visit rate from video views. Track how well content drives profile traffic and converts casual viewers to followers.',
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
