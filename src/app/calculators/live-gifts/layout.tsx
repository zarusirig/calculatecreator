import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIVE Gifts Calculator (2025) | CalculateCreator',
  description: 'Calculate TikTok LIVE earnings from gifts and diamonds. Estimate income based on viewers, stream duration & gifting rates. Free LIVE calculator.',
  keywords: ['tiktok live gifts calculator', 'tiktok diamonds', 'live stream earnings', 'gift conversion'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/live-gifts',
  },
  openGraph: {
    title: 'LIVE Gifts Calculator (2025)',
    description: 'Calculate TikTok LIVE earnings from gifts and diamonds.',
    url: 'https://calculatecreator.com/calculators/live-gifts',
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
