import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs['pt-br'];

export const metadata: Metadata = {
  title: "Calculadora TikTok — Calcule Seus Ganhos 2026",
  description: "Calcule seus ganhos no TikTok. Fundo de Criadores, acordos com marcas e presentes ao vivo para o mercado brasileiro.",
  keywords: ['calculadora do tiktok', 'ganhos tiktok', 'dinheiro tiktok', 'fundo de criadores', 'monetização tiktok'],
  alternates: {
    canonical: 'https://ttcalculator.net/calculator/pt-br/',
    languages: {
      'en': 'https://ttcalculator.net/calculators/tiktok-money/',
      'de': 'https://ttcalculator.net/calculator/de/',
      'es': 'https://ttcalculator.net/calculator/es/',
      'fr': 'https://ttcalculator.net/calculator/fr/',
      'it': 'https://ttcalculator.net/calculator/it/',
      'pt-BR': 'https://ttcalculator.net/calculator/pt-br/',
      'ms': 'https://ttcalculator.net/calculator/my/',
      'x-default': 'https://ttcalculator.net/calculators/tiktok-money/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Calculadora TikTok: Calcule Seus Ganhos 2026',
    description: 'Calcule seus ganhos no TikTok. Fundo de Criadores, acordos com marcas e presentes ao vivo para o mercado brasileiro.',
    url: 'https://ttcalculator.net/calculator/pt-br/',
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
