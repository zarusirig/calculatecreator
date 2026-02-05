import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsorship ROI Calculator 2026 | CalculateCreator',
  description: 'Calculate return on investment for brand sponsorships. Measure partnership profitability and optimize your influencer marketing deals.',
  keywords: ['sponsorship roi calculator', 'brand deal roi', 'partnership calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/sponsorship-roi/',
  },
  openGraph: {
    title: 'Sponsorship ROI Calculator 2026',
    description: 'Calculate ROI for brand sponsorships and partnerships.',
    url: 'https://calculatecreator.com/calculators/sponsorship-roi/',
    type: 'website',
  },
};

export default function SponsorshipROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
