import type { Metadata } from 'next';

// Default layout for localized calculators; individual pages override via metadata files.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-money/',
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
};

export default function LocaleCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
