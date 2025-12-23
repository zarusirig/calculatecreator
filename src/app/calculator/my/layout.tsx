import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator TikTok: Pendapatan 2025 | Malaysia',
  description: 'Kalkulator TikTok percuma untuk Dana Pencipta, tawaran jenama dan hadiah LIVE. Kirakan potensi pendapatan anda dalam Ringgit Malaysia.',
  keywords: ['kalkulator tiktok', 'pendapatan tiktok', 'wang tiktok', 'dana pencipta', 'monetisasi tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/my',
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
    title: 'Kalkulator TikTok: Kira Pendapatan Anda (2025)',
    description: 'Kirakan potensi pendapatan anda di TikTok. Dana Pencipta, tawaran jenama, dan hadiah LIVE.',
    url: 'https://calculatecreator.com/calculator/my',
    locale: 'ms_MY',
    type: 'website',
  },
};

export default function MYCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
