import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Completion Rate Calculator",
  description: "Use this TikTok completion rate calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable",
  keywords: ['completion rate calculator', 'tiktok completion', 'watch through rate'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/completion-rate/',
  },
  openGraph: {
    title: 'Completion Rate Calculator 2026',
    description: 'Calculate video completion rate to boost algorithm ranking.',
    url: 'https://calculatecreator.com/calculators/completion-rate/',
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
