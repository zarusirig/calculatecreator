import type { Metadata } from 'next';
import { GiftCalculator } from './GiftCalculator';

export const metadata: Metadata = {
  title: "TikTok Gift Calculator and Earnings Tool Guide 2026",
  description: "Use this TikTok gift calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  keywords: ['tiktok gift calculator', 'LIVE gift value', 'gift to money converter', 'TikTok LIVE earnings', 'diamond earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins-gifts-diamonds/gift/',
  },
};

export default function GiftCalculatorPage() {
  return <GiftCalculator />;
}
