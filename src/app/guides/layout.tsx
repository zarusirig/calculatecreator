import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CalculateCreator',
    default: 'TikTok Creator Guides | CalculateCreator',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
