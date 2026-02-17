import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Live Earnings Calculator and Earnings Tool Guide",
  description: "Use this TikTok live earnings calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['tiktok live gifts calculator', 'tiktok diamonds', 'live stream earnings', 'gift conversion'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/live-gifts/',
  },
  openGraph: {
    title: 'LIVE Gifts Calculator 2026',
    description: 'Calculate TikTok LIVE earnings from gifts and diamonds.',
    url: 'https://calculatecreator.com/calculators/live-gifts/',
    type: 'website',
  },
};

export default function LiveGiftsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
