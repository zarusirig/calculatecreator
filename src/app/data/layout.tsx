import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'TikTok Creator Data and Benchmark Insights',
  },
};

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
