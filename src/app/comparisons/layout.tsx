import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'TikTok Platform Comparisons for Creator Earnings',
  },
};

export default function ComparisonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
