import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Follower Conversion Calculator (2025) | CalculateCreator',
  description: 'Calculate view-to-follower conversion rate. Track how effectively your content converts viewers into followers and grow faster.',
  keywords: ['follower conversion calculator', 'view to follower rate', 'conversion rate'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/follower-conversion',
  },
  openGraph: {
    title: 'Follower Conversion Calculator (2025)',
    description: 'Calculate view-to-follower conversion rate.',
    url: 'https://calculatecreator.com/calculators/follower-conversion',
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
