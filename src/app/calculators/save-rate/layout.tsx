import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Save Rate Calculator and Earnings Tool Guide",
  description: "Use this TikTok save rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['save rate calculator', 'tiktok saves', 'bookmark rate'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/save-rate/',
  },
  openGraph: {
    title: 'Save Rate Calculator 2026',
    description: 'Calculate video save rate to measure content value.',
    url: 'https://calculatecreator.com/calculators/save-rate/',
    type: 'website',
  },
};

export default function SaveRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
