import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RPM Calculator 2026 | CalculateCreator',
  description: 'Calculate TikTok Revenue Per Mille (RPM). Track earnings per 1,000 views to optimize content strategy and maximize Creator Fund income.',
  keywords: ['tiktok rpm calculator', 'revenue per mille', 'tiktok rpm rate', 'views to earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/rpm/',
  },
  openGraph: {
    title: 'RPM Calculator 2026',
    description: 'Calculate Revenue Per Mille to track earnings per 1,000 views.',
    url: 'https://calculatecreator.com/calculators/rpm/',
    type: 'website',
  },
};

export default function RPMCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
