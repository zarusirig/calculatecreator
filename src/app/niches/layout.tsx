import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'TikTok Niche Earnings Guides and Benchmarks',
  },
};

export default function NichesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
