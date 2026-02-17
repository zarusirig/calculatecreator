import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'TikTok Creator Guides and Monetization Strategies',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
