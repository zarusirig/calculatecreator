import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audience Overlap Calculator | Cross-Platform Analytics',
  description: 'Calculate audience overlap between platforms and accounts. Understand your cross-platform reach and identify unique vs. shared followers.',
  keywords: ['audience overlap', 'cross-platform analytics', 'follower overlap', 'audience analysis'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/audience-overlap/',
  },
  openGraph: {
    title: 'Audience Overlap Calculator',
    description: 'Analyze audience overlap across platforms and accounts.',
    url: 'https://calculatecreator.com/calculators/audience-overlap/',
    type: 'website',
  },
};

export default function AudienceOverlapCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
