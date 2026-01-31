import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CalculateCreator',
    default: 'TikTok News & Updates | CalculateCreator',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
