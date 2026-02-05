import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.my;

export const metadata: Metadata = {
  title: 'Kalkulator TikTok: Pendapatan 2026 | Malaysia',
  description: 'Kalkulator TikTok percuma untuk Dana Pencipta, tawaran jenama dan hadiah LIVE. Kirakan potensi pendapatan anda dalam Ringgit Malaysia.',
  keywords: ['kalkulator tiktok', 'pendapatan tiktok', 'wang tiktok', 'dana pencipta', 'monetisasi tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/my/',
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
    title: 'Kalkulator TikTok: Kira Pendapatan Anda 2026',
    description: 'Kirakan potensi pendapatan anda di TikTok. Dana Pencipta, tawaran jenama, dan hadiah LIVE.',
    url: 'https://calculatecreator.com/calculator/my/',
    locale: 'ms_MY',
    type: 'website',
  },
};

export default function MYCalculatorLayout({
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
