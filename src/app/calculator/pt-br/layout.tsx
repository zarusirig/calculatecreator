import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora TikTok: Ganhos 2025 | Brasil',
  description: 'Calculadora gratuita de TikTok para Fundo de Criadores, parcerias com marcas e presentes em LIVE. Calcule seus ganhos potenciais em reais para o Brasil.',
  keywords: ['calculadora do tiktok', 'ganhos tiktok', 'dinheiro tiktok', 'fundo de criadores', 'monetização tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculator/pt-br/',
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
    title: 'Calculadora do TikTok: Calcule Seus Ganhos (2025)',
    description: 'Calcule seu potencial de ganhos no TikTok. Fundo de Criadores, parcerias com marcas e presentes em LIVE.',
    url: 'https://calculatecreator.com/calculator/pt-br',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function PTBRCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
