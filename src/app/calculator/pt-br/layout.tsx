import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs['pt-br'];

export const metadata: Metadata = {
  title: "Calculadora TikTok — Calcule Seus Ganhos 2026",
  description: "Calcule seus ganhos no TikTok. Fundo de Criadores, acordos com marcas e presentes ao vivo para o mercado brasileiro.",
  keywords: ['calculadora do tiktok', 'ganhos tiktok', 'dinheiro tiktok', 'fundo de criadores', 'monetização tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/pt-br/',
    languages: {
      'en': 'https://calculatecreator.com/region/',
      'de': 'https://calculatecreator.com/calculator/de/',
      'es': 'https://calculatecreator.com/calculator/es/',
      'fr': 'https://calculatecreator.com/calculator/fr/',
      'it': 'https://calculatecreator.com/calculator/it/',
      'pt-BR': 'https://calculatecreator.com/calculator/pt-br/',
      'ms': 'https://calculatecreator.com/calculator/my/',
    },
  },
  openGraph: {
    title: 'Calculadora TikTok: Calcule Seus Ganhos 2026',
    description: 'Calcule seus ganhos no TikTok. Fundo de Criadores, acordos com marcas e presentes ao vivo para o mercado brasileiro.',
    url: 'https://calculatecreator.com/calculator/pt-br/',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function PTBRCalculatorLayout({
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
