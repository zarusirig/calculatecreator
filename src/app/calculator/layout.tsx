import type { Metadata } from 'next';

// Default layout for localized calculators; individual pages override via metadata files.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/tiktok-money/',
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
};

export default function LocaleCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
