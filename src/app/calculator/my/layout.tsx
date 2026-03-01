import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.my;

export const metadata: Metadata = {
  title: "Kalkulator TikTok — Kira Pendapatan 2026",
  description: "Kira pendapatan TikTok anda. Dana Pencipta, tawaran jenama, dan hadiah langsung untuk pasaran Malaysia.",
  keywords: ['kalkulator tiktok', 'pendapatan tiktok', 'wang tiktok', 'dana pencipta', 'monetisasi tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/my/',
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
    title: 'Kalkulator TikTok: Kira Pendapatan Anda 2026',
    description: 'Kira pendapatan TikTok anda. Dana Pencipta, tawaran jenama, dan hadiah langsung untuk pasaran Malaysia.',
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
