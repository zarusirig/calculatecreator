import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LTV Calculator 2026 | CalculateCreator',
  description: 'Calculate Customer Lifetime Value from TikTok traffic. Understand total customer worth to optimize acquisition costs and maximize profit margins.',
  keywords: ['ltv calculator', 'customer lifetime value', 'customer value', 'retention metrics'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/lifetime-value/',
  },
  openGraph: {
    title: 'LTV Calculator 2026',
    description: 'Calculate Customer Lifetime Value from TikTok traffic.',
    url: 'https://calculatecreator.com/calculators/lifetime-value/',
    type: 'website',
  },
};

export default function LifetimeValueCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
