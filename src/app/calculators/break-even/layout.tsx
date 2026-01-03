import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Break-Even Calculator (2025) | CalculateCreator',
  description: 'Calculate break-even point for TikTok content investments. Determine how many sales needed to cover ad spend and production costs.',
  keywords: ['break-even calculator', 'tiktok break even', 'roi calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/break-even/',
  },
  openGraph: {
    title: 'Break-Even Calculator (2025)',
    description: 'Calculate break-even point for TikTok investments.',
    url: 'https://calculatecreator.com/calculators/break-even',
    type: 'website',
  },
};

export default function BreakEvenCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
