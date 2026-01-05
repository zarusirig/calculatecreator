import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cost Per Result Calculator | TikTok & Social Media Ad Performance',
  description: 'Calculate your cost per result (CPR) for any advertising campaign. Track performance, optimize spend, and improve ROI with accurate CPR calculations.',
  keywords: ['cost per result', 'cpr calculator', 'ad performance', 'advertising metrics', 'campaign cost'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/cost-per-result/',
  },
  openGraph: {
    title: 'Cost Per Result Calculator',
    description: 'Calculate and optimize your advertising cost per result.',
    url: 'https://calculatecreator.com/calculators/cost-per-result/',
    type: 'website',
  },
};

export default function CostPerResultCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
