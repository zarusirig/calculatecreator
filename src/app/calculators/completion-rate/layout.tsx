import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Completion Rate Calculator",
  description: "Use this TikTok completion rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['completion rate calculator', 'tiktok completion', 'watch through rate'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/completion-rate/',
  },
  openGraph: {
    images: [{ url: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp', width: 1200, height: 630, alt: 'TT Calculator' }],
    title: 'Completion Rate Calculator 2026',
    description: 'Calculate video completion rate to boost algorithm ranking.',
    url: 'https://tiktokcalculator.net/calculators/completion-rate/',
    type: 'website',
  },
};

export default function CompletionRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
