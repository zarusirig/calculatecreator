import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Diamonds Calculator and Earnings Tool Guide",
  description: "Use this TikTok diamonds calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['tiktok diamond converter', 'tiktok diamond calculator', 'diamonds to usd', 'tiktok diamonds to money', 'diamond value calculator', 'convert tiktok diamonds'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/diamond-converter/',
  },
  openGraph: {
    title: 'TikTok Diamond Converter | Diamonds to USD Calculator 2026',
    description: 'Convert TikTok diamonds to real money. Free calculator with accurate conversion rates for creators.',
    url: 'https://calculatecreator.com/calculators/diamond-converter/',
    type: 'website',
  },
};

export default function DiamondConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
