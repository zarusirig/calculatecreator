import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Break Even Calculator and Earnings Tool Guide",
  description: "Use this TikTok break even calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['break-even calculator', 'tiktok break even', 'roi calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/break-even/',
  },
  openGraph: {
    title: 'Break-Even Calculator 2026',
    description: 'Calculate break-even point for TikTok investments.',
    url: 'https://calculatecreator.com/calculators/break-even/',
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
