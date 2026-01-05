import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatore TikTok: Guadagni 2026 | Italia',
  description: 'Calcolatore TikTok gratuito per Creator Fund, collaborazioni con brand e regali LIVE. Calcola i tuoi guadagni potenziali in euro per l\'Italia.',
  keywords: ['calcolatore tiktok', 'guadagni tiktok', 'soldi tiktok', 'creator fund', 'monetizzazione tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/it/',
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
    title: 'Calcolatore TikTok: Calcola i Tuoi Guadagni (2026)',
    description: 'Calcola il tuo potenziale di guadagno su TikTok. Creator Fund, collaborazioni con brand e regali LIVE.',
    url: 'https://calculatecreator.com/calculator/it',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function ITCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
