import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Posting Time Calculator (2026) | CalculateCreator',
  description: 'Find optimal posting times for your TikTok audience. Maximize engagement by scheduling content when followers are most active.',
  keywords: ['best posting time', 'tiktok posting schedule', 'optimal post time'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/posting-time/',
  },
  openGraph: {
    title: 'Best Posting Time Calculator (2026)',
    description: 'Find optimal posting times for your TikTok audience.',
    url: 'https://calculatecreator.com/calculators/posting-time',
    type: 'website',
  },
};

export default function PostingTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
