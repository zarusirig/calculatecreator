import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'TikTok News and Creator Monetization Updates',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
