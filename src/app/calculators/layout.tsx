import type { Metadata } from 'next';
import { generateHubPageSchemas, hubPageConfigs } from '@/lib/seo/hub-page-schema';

const config = hubPageConfigs.calculators;

export const metadata: Metadata = {
  title: "TikTok Calculators Calculator",
  description: "Use this TikTok calculators calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: [
    'creator calculator',
    'earnings calculator',
    'engagement calculator',
    'benchmark tools',
    'creator analytics',
  ],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/',
  },
  openGraph: {
    title: 'Calculators | TT Calculator',
    description: 'Estimate and benchmark creator metrics with clear workflows and transparent assumptions.',
    url: 'https://tiktokcalculator.net/calculators/',
    type: 'website',
  },
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Note: Schemas are now only applied in the main /calculators/page.tsx
  // to avoid duplicate schemas on child calculator pages
  // Each child page has its own specific schemas (CalculatorSchema, FAQSchema, etc.)
  return <>{children}</>;
}
