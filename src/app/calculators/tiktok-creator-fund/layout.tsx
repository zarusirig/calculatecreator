import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creator Fund Calculator (2026) | CalculateCreator',
  description: 'Estimate TikTok Creator Fund earnings based on views, niche & engagement. Free calculator with real RPM rates ($0.02-$0.04/1K views).',
  keywords: ['tiktok creator fund calculator', 'creator fund earnings', 'tiktok rpm calculator', 'creator fund payment'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-creator-fund/',
  },
  openGraph: {
    title: 'Creator Fund Calculator (2026)',
    description: 'Estimate TikTok Creator Fund earnings based on views, niche & engagement. Free calculator with real RPM rates.',
    url: 'https://calculatecreator.com/calculators/tiktok-creator-fund',
    type: 'website',
  },
};

export default function CreatorFundCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
