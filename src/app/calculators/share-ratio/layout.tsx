import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Share Ratio Calculator (2026) | CalculateCreator',
  description: 'Calculate share-to-view ratio to measure viral potential. High share rates (3%+) signal strong algorithm performance and reach.',
  keywords: ['share ratio calculator', 'share to view', 'tiktok shares'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/share-ratio/',
  },
  openGraph: {
    title: 'Share Ratio Calculator (2026)',
    description: 'Calculate share-to-view ratio to measure viral potential.',
    url: 'https://calculatecreator.com/calculators/share-ratio',
    type: 'website',
  },
};

export default function ShareRatioCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
