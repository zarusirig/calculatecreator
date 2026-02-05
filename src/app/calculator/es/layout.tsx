import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.es;

export const metadata: Metadata = {
  title: 'Calculadora TikTok: Ganancias 2026 | España',
  description: 'Calculadora gratuita de TikTok para Fondo de Creadores, colaboraciones de marca y regalos LIVE. Calcula tus ingresos potenciales en mercados hispanohablantes.',
  keywords: ['calculadora de tiktok', 'ganancias tiktok', 'dinero tiktok', 'fondo de creadores', 'monetización tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/es/',
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
    title: 'Calculadora de TikTok: Calcula tus Ganancias 2026',
    description: 'Calcula tu potencial de ganancias en TikTok. Fondo de Creadores, acuerdos con marcas y regalos en LIVE.',
    url: 'https://calculatecreator.com/calculator/es/',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function ESCalculatorLayout({
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
