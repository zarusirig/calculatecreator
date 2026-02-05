import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Deal Calculator 2026 | CalculateCreator',
  description: 'Calculate what to charge brands for sponsored posts. Get accurate rates based on followers, engagement & niche. Maximize your sponsorship income.',
  keywords: ['brand deal calculator', 'influencer rate calculator', 'sponsored post pricing', 'tiktok sponsorship rates'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/brand-deal-rate/',
  },
  openGraph: {
    title: 'Brand Deal Calculator 2026',
    description: 'Calculate what to charge brands for sponsored TikTok posts.',
    url: 'https://calculatecreator.com/calculators/brand-deal-rate/',
    type: 'website',
  },
};

export default function BrandDealRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
