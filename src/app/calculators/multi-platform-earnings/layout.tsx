import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Earnings Comparison (2025) | CalculateCreator',
  description: 'Compare earnings across TikTok, YouTube & Instagram. See which platform pays more for your audience size and optimize your content strategy.',
  keywords: ['multi platform calculator', 'platform comparison', 'cross platform earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/multi-platform-earnings',
  },
  openGraph: {
    title: 'Platform Earnings Comparison (2025)',
    description: 'Compare earnings across TikTok, YouTube & Instagram.',
    url: 'https://calculatecreator.com/calculators/multi-platform-earnings',
    type: 'website',
  },
};

export default function MultiPlatformEarningsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
