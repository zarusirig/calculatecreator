import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Completion Rate Calculator 2026 | CalculateCreator',
  description: 'Calculate video completion rate to boost algorithm ranking. Videos with 80%+ completion get 3x more reach. Optimize your content length.',
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
