import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watch Time Calculator 2026 | CalculateCreator',
  description: 'Calculate average watch time and video completion rate. Optimize content length for better algorithm performance and increased reach.',
  keywords: ['watch time calculator', 'tiktok completion rate', 'average watch time'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/watch-time/',
  },
  openGraph: {
    title: 'Watch Time Calculator 2026',
    description: 'Calculate average watch time and video completion rate.',
    url: 'https://calculatecreator.com/calculators/watch-time/',
    type: 'website',
  },
};

export default function WatchTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
