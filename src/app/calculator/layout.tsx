import type { Metadata } from 'next';

// Default layout for localized calculators; individual pages override via metadata files.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-money/',
  },
};

export default function LocaleCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

