import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campaign ROI Calculator (2025) | CalculateCreator',
  description: 'Calculate marketing campaign ROI and ROAS on TikTok. Measure profitability, track ad spend efficiency & optimize campaign performance.',
  keywords: ['campaign roi calculator', 'tiktok roi', 'marketing roi', 'roas calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/campaign-roi/',
  },
  openGraph: {
    title: 'Campaign ROI Calculator (2025)',
    description: 'Calculate marketing campaign ROI and ROAS on TikTok.',
    url: 'https://calculatecreator.com/calculators/campaign-roi',
    type: 'website',
  },
};

export default function CampaignROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
