import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPM/CPV Calculator (2025) | CalculateCreator',
  description: 'Calculate Cost Per Mille (CPM) and Cost Per View (CPV) for TikTok ads. Optimize ad spend and track campaign cost efficiency in real-time.',
  keywords: ['tiktok cpm calculator', 'cpv calculator', 'ad cost calculator', 'tiktok advertising'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/cpm-cpv/',
  },
  openGraph: {
    title: 'CPM/CPV Calculator (2025)',
    description: 'Calculate Cost Per Mille and Cost Per View for TikTok ads.',
    url: 'https://calculatecreator.com/calculators/cpm-cpv',
    type: 'website',
  },
};

export default function CPMCPVCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
