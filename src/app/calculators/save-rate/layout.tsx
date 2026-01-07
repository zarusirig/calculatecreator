import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Save Rate Calculator 2026 | CalculateCreator',
  description: 'Calculate video save rate to measure content value. High save rates (5%+) boost algorithm ranking and indicate quality content.',
  keywords: ['save rate calculator', 'tiktok saves', 'bookmark rate'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/save-rate/',
  },
  openGraph: {
    title: 'Save Rate Calculator 2026',
    description: 'Calculate video save rate to measure content value.',
    url: 'https://calculatecreator.com/calculators/save-rate',
    type: 'website',
  },
};

export default function SaveRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
