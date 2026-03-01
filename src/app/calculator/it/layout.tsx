import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.it;

export const metadata: Metadata = {
  title: "Calcolatore TikTok — Calcola i Guadagni 2026",
  description: "Calcola i tuoi guadagni su TikTok. Fondo Creatori, accordi con i brand e regali in diretta per il mercato italiano.",
  keywords: ['calcolatore tiktok', 'guadagni tiktok', 'soldi tiktok', 'creator fund', 'monetizzazione tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/it/',
    languages: {
      'en': 'https://calculatecreator.com/calculators/tiktok-money/',
      'de': 'https://calculatecreator.com/calculator/de/',
      'es': 'https://calculatecreator.com/calculator/es/',
      'fr': 'https://calculatecreator.com/calculator/fr/',
      'it': 'https://calculatecreator.com/calculator/it/',
      'pt-BR': 'https://calculatecreator.com/calculator/pt-br/',
      'ms': 'https://calculatecreator.com/calculator/my/',
      'x-default': 'https://calculatecreator.com/calculators/tiktok-money/',
    },
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Calcolatore TikTok: Calcola i Tuoi Guadagni 2026',
    description: 'Calcola i tuoi guadagni su TikTok. Fondo Creatori, accordi con i brand e regali in diretta per il mercato italiano.',
    url: 'https://calculatecreator.com/calculator/it/',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function ITCalculatorLayout({
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
