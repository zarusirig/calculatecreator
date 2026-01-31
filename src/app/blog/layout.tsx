import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CalculateCreator',
    default: 'TikTok Creator Blog | CalculateCreator',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
