import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Calendar ROI Calculator (2026) | CalculateCreator',
  description: 'Calculate ROI for content planning and scheduling. Measure how strategic posting improves engagement, reach and overall performance.',
  keywords: ['content calendar roi', 'posting strategy roi', 'content planning'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/content-calendar-roi/',
  },
  openGraph: {
    title: 'Content Calendar ROI Calculator (2026)',
    description: 'Calculate ROI for your TikTok content calendar.',
    url: 'https://calculatecreator.com/calculators/content-calendar-roi',
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
