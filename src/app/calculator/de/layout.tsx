import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.de;

export const metadata: Metadata = {
  title: "TikTok Rechner — Einnahmen berechnen 2026",
  description: "Berechnen Sie Ihr Verdienstpotenzial auf TikTok. Creator Fund, Markendeals und LIVE Geschenke für den deutschen Markt.",
  keywords: ['tiktok rechner', 'tiktok einnahmen berechnen', 'tiktok geld verdienen', 'creator fund deutschland', 'tiktok monetarisierung'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculator/de/',
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
    title: 'TikTok Rechner: Einnahmen berechnen 2026',
    description: 'Berechnen Sie Ihr Verdienstpotenzial auf TikTok. Creator Fund, Markendeals und LIVE Geschenke für den deutschen Markt.',
    url: 'https://tiktokcalculator.net/calculator/de/',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function DECalculatorLayout({
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
