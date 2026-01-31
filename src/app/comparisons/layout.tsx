import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CalculateCreator',
    default: 'TikTok Platform Comparisons | CalculateCreator',
  },
};

export default function ComparisonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
