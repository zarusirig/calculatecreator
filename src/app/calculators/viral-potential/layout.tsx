import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viral Potential Calculator 2026 | CalculateCreator',
  description: 'Analyze your video\'s viral potential score. Calculate likelihood of hitting FYP based on engagement, shares, saves & completion metrics.',
  keywords: ['viral potential calculator', 'tiktok viral score', 'virality predictor'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/viral-potential/',
  },
  openGraph: {
    title: 'Viral Potential Calculator 2026',
    description: 'Analyze your video\'s potential to go viral on TikTok.',
    url: 'https://calculatecreator.com/calculators/viral-potential',
    type: 'website',
  },
};

export default function ViralPotentialCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
