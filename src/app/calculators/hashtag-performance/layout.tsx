import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hashtag Performance Calculator (2026) | CalculateCreator',
  description: 'Analyze hashtag effectiveness and reach potential. Compare performance with and without specific tags to optimize discovery.',
  keywords: ['hashtag calculator', 'hashtag performance', 'tiktok hashtags'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/hashtag-performance/',
  },
  openGraph: {
    title: 'Hashtag Performance Calculator (2026)',
    description: 'Analyze hashtag effectiveness and reach potential.',
    url: 'https://calculatecreator.com/calculators/hashtag-performance',
    type: 'website',
  },
};

export default function HashtagPerformanceCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
