import type { Metadata } from 'next';

// Default layout for localized calculators; individual pages override via metadata files.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/tiktok-money/',
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
};

export default function LocaleCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
