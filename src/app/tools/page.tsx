import type { Metadata } from 'next';
import { ToolsDirectoryPage } from '@/components/tools/ToolsDirectoryPage';

export const metadata: Metadata = {
  title: "TikTok Creator Tools Directory 2026",
  description: "Use this TikTok tools calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  alternates: {
    canonical: 'https://tiktokcalculator.net/tools/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ToolsPage() {
  return (
    <ToolsDirectoryPage
      title="Tools"
      description="Find the right TikTok calculator by goal, metric, and monetization method. Inputs are clear, assumptions are visible, and outputs stay consistent."
      canonicalPath="/tools/"
      breadcrumbLabel="Tools"
    />
  );
}
