import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Rpm Cpm Calculator and Earnings Tool Guide 2026",
  description: "Use this TikTok rpm cpm calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  keywords: ['tiktok rpm calculator', 'revenue per mille', 'tiktok rpm rate', 'views to earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/rpm/',
  },
  openGraph: {
    title: 'RPM Calculator 2026',
    description: 'Calculate Revenue Per Mille to track earnings per 1,000 views.',
    url: 'https://calculatecreator.com/calculators/rpm/',
    type: 'website',
  },
};

export default function RPMCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
