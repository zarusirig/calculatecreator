import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CalculateCreator',
    default: 'TikTok Creator Data & Insights | CalculateCreator',
  },
};

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
