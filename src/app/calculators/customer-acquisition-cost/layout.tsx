import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CAC Calculator 2026 | CalculateCreator',
  description: 'Calculate Customer Acquisition Cost for TikTok marketing. Track how much you spend to acquire each customer and improve ROI efficiency.',
  keywords: ['cac calculator', 'customer acquisition cost', 'tiktok cac', 'marketing roi'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/customer-acquisition-cost/',
  },
  openGraph: {
    title: 'CAC Calculator 2026',
    description: 'Calculate Customer Acquisition Cost for TikTok marketing.',
    url: 'https://calculatecreator.com/calculators/customer-acquisition-cost/',
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
