import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.fr;

export const metadata: Metadata = {
  title: 'Calculatrice TikTok: Revenus 2026 | France',
  description: 'Calculatrice TikTok gratuite pour Fonds des Créateurs, partenariats de marque et cadeaux LIVE. Calculez vos revenus potentiels en euros pour la France.',
  keywords: ['calculatrice tiktok', 'revenus tiktok', 'argent tiktok', 'fonds des créateurs', 'monétisation tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/fr/',
    languages: {
      'en': 'https://calculatecreator.com/region',
      'de': 'https://calculatecreator.com/calculator/de',
      'es': 'https://calculatecreator.com/calculator/es',
      'fr': 'https://calculatecreator.com/calculator/fr',
      'it': 'https://calculatecreator.com/calculator/it',
      'pt-BR': 'https://calculatecreator.com/calculator/pt-br',
      'ms': 'https://calculatecreator.com/calculator/my',
    },
  },
  openGraph: {
    title: 'Calculatrice TikTok: Calculez vos Revenus 2026',
    description: 'Calculez votre potentiel de revenus sur TikTok. Fonds des Créateurs, partenariats de marque et cadeaux LIVE.',
    url: 'https://calculatecreator.com/calculator/fr',
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
