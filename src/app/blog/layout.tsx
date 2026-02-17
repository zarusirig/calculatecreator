import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'TikTok Creator Blog and Earnings News',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
