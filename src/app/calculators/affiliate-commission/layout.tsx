import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Commission Calculator 2026 | CalculateCreator',
  description: 'Calculate TikTok Shop affiliate earnings potential. Estimate commissions from product promotions with category-specific rates (5-20% average).',
  keywords: ['tiktok affiliate calculator', 'shop affiliate earnings', 'commission calculator', 'affiliate income'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/affiliate-commission/',
  },
  openGraph: {
    title: 'Affiliate Commission Calculator 2026',
    description: 'Calculate TikTok Shop affiliate earnings and commission potential.',
    url: 'https://calculatecreator.com/calculators/affiliate-commission/',
    type: 'website',
  },
};

export default function AffiliateCommissionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
