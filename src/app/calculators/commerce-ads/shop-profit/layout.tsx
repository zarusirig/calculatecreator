import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TikTok Shop Profit Calculator and Earnings Tool Guide",
  description: "Use this TikTok shop profit calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['tiktok shop calculator', 'tiktok affiliate commission', 'shop earnings', 'product commission'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/commerce-ads/shop-profit/',
  },
  openGraph: {
    title: 'Shop Commission Calculator 2026',
    description: 'Calculate TikTok Shop affiliate earnings and commissions.',
    url: 'https://calculatecreator.com/calculators/commerce-ads/shop-profit/',
    type: 'website',
  },
};

export default function ShopCommissionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
