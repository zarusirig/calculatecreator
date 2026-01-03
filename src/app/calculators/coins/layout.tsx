import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Coins Calculator | Convert Coins to USD (2025)',
  description: 'Convert TikTok coins to USD and diamonds with our free calculator. Accurate conversion rates for LIVE gifts, creator earnings, and gift values. Calculate coin-to-dollar conversions instantly.',
  keywords: ['tiktok coins calculator', 'tiktok coin calculator', 'coins to usd', 'tiktok coins to money', 'coin value calculator', 'tiktok currency converter'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins/',
  },
  openGraph: {
    title: 'TikTok Coins Calculator | Convert Coins to USD (2025)',
    description: 'Convert TikTok coins to USD and diamonds. Free calculator with accurate rates for creators and viewers.',
    url: 'https://calculatecreator.com/calculators/coins',
    type: 'website',
  },
};

export default function CoinsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
