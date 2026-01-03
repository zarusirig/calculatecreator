import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversion Rate Calculator (2025) | CalculateCreator',
  description: 'Calculate traffic conversion rate from TikTok to sales. Track customer acquisition effectiveness and measure marketing campaign success.',
  keywords: ['conversion rate calculator', 'tiktok conversion', 'traffic conversion', 'conversion optimization'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/conversion-rate/',
  },
  openGraph: {
    title: 'Conversion Rate Calculator (2025)',
    description: 'Calculate traffic conversion rate from TikTok to sales.',
    url: 'https://calculatecreator.com/calculators/conversion-rate',
    type: 'website',
  },
};

export default function ConversionRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
