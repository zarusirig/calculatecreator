import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Cost Calculator 2026 | CalculateCreator',
  description: 'Calculate video production costs and content ROI. Track equipment, time & overhead expenses to price services and maximize profit.',
  keywords: ['production cost calculator', 'content cost', 'video production roi'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/production-cost/',
  },
  openGraph: {
    title: 'Production Cost Calculator 2026',
    description: 'Calculate video production costs and content ROI.',
    url: 'https://calculatecreator.com/calculators/production-cost/',
    type: 'website',
  },
};

export default function ProductionCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
