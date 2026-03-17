import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.fr;

export const metadata: Metadata = {
  title: "Calculateur TikTok — Estimez Vos Revenus 2026",
  description: "Calculez vos revenus TikTok. Fonds Créateur, partenariats de marque et cadeaux en direct pour le marché francophone.",
  keywords: ['calculatrice tiktok', 'revenus tiktok', 'argent tiktok', 'fonds des créateurs', 'monétisation tiktok'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculator/fr/',
    languages: {
      'en': 'https://tiktokcalculator.net/calculators/tiktok-money/',
      'de': 'https://tiktokcalculator.net/calculator/de/',
      'es': 'https://tiktokcalculator.net/calculator/es/',
      'fr': 'https://tiktokcalculator.net/calculator/fr/',
      'it': 'https://tiktokcalculator.net/calculator/it/',
      'pt-BR': 'https://tiktokcalculator.net/calculator/pt-br/',
      'ms': 'https://tiktokcalculator.net/calculator/my/',
      'x-default': 'https://tiktokcalculator.net/calculators/tiktok-money/',
    },
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Calculateur TikTok: Estimez vos Revenus 2026',
    description: 'Calculez vos revenus TikTok. Fonds Créateur, partenariats de marque et cadeaux en direct pour le marché francophone.',
    url: 'https://tiktokcalculator.net/calculator/fr/',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function FRCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = generateInternationalCalculatorSchemas(config);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
      />
      {children}
    </>
  );
}
