import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Content Calendar Roi Calculator",
  description: "Use this TikTok content calendar roi calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['content calendar roi', 'posting strategy roi', 'content planning'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/content-calendar-roi/',
  },
  openGraph: {
    title: 'Content Calendar ROI Calculator 2026',
    description: 'Calculate ROI for your TikTok content calendar.',
    url: 'https://tiktokcalculator.net/calculators/content-calendar-roi/',
    type: 'website',
  },
};

export default function ContentCalendarROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
