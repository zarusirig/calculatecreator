import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.it;

export const metadata: Metadata = {
  title: 'Calcolatore TikTok: Guadagni 2026 | Italia',
  description: 'Calcolatore TikTok gratuito per Creator Fund, collaborazioni con brand e regali LIVE. Calcola i tuoi guadagni potenziali in euro per l\'Italia.',
  keywords: ['calcolatore tiktok', 'guadagni tiktok', 'soldi tiktok', 'creator fund', 'monetizzazione tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/it/',
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
    title: 'Calcolatore TikTok: Calcola i Tuoi Guadagni 2026',
    description: 'Calcola il tuo potenziale di guadagno su TikTok. Creator Fund, collaborazioni con brand e regali LIVE.',
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
