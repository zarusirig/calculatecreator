import type { Metadata } from 'next';
import { generateInternationalCalculatorSchemas } from '@/lib/seo/international-calculator-schema';
import { calculatorConfigs } from '@/lib/seo/international-calculator-configs';

const config = calculatorConfigs.de;

export const metadata: Metadata = {
  title: 'TikTok Rechner: Einnahmen 2026 | Deutschland',
  description: 'Kostenloser TikTok-Rechner für Creator Fund, Markendeals und LIVE-Geschenke. Berechnen Sie Ihre Einnahmen in Euro für den deutschen Markt.',
  keywords: ['tiktok rechner', 'tiktok einnahmen berechnen', 'tiktok geld verdienen', 'creator fund deutschland', 'tiktok monetarisierung'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/de/',
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
    title: 'TikTok Rechner: Einnahmen berechnen 2026',
    description: 'Berechnen Sie Ihr Verdienstpotenzial auf TikTok. Creator Fund, Markendeals und LIVE Geschenke für den deutschen Markt.',
    url: 'https://calculatecreator.com/calculator/de/',
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
