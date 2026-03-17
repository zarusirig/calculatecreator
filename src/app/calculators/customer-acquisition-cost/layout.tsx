import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Customer Acquisition Cost Calculator and Earnings",
  description: "Use this TikTok customer acquisition cost calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and",
  keywords: ['cac calculator', 'customer acquisition cost', 'tiktok cac', 'marketing roi'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/customer-acquisition-cost/',
  },
  openGraph: {
    title: 'CAC Calculator 2026',
    description: 'Calculate Customer Acquisition Cost for TikTok marketing.',
    url: 'https://tiktokcalculator.net/calculators/customer-acquisition-cost/',
    type: 'website',
  },
};

export default function CustomerAcquisitionCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
