import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Commission Calculator (2025) | CalculateCreator',
  description: 'Calculate TikTok Shop affiliate earnings. Estimate commissions from product sales with accurate commission rates by category (5-20%).',
  keywords: ['tiktok shop calculator', 'tiktok affiliate commission', 'shop earnings', 'product commission'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/shop-commission',
  },
  openGraph: {
    title: 'Shop Commission Calculator (2025)',
    description: 'Calculate TikTok Shop affiliate earnings and commissions.',
    url: 'https://calculatecreator.com/calculators/shop-commission',
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
