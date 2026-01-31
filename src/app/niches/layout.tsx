import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CalculateCreator',
    default: 'TikTok Niche Earnings Guides | CalculateCreator',
  },
};

export default function NichesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
