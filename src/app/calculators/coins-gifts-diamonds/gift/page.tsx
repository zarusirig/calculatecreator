import type { Metadata } from 'next';
import { GiftCalculator } from './GiftCalculator';

export const metadata: Metadata = {
  title: 'TikTok Gift Value Calculator: Convert LIVE Gifts to USD (2026)',
  description: 'Calculate the real value of TikTok LIVE gifts in coins, diamonds, and USD. Understand how much creators earn from each gift type sent during LIVE streams.',
  keywords: ['tiktok gift calculator', 'LIVE gift value', 'gift to money converter', 'TikTok LIVE earnings', 'diamond earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins-gifts-diamonds/gift/',
  },
};

export default function GiftCalculatorPage() {
  return <GiftCalculator />;
}
