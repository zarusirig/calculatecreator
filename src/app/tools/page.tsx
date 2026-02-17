import type { Metadata } from 'next';
import { ToolsDirectoryPage } from '@/components/tools/ToolsDirectoryPage';

export const metadata: Metadata = {
  title: "TikTok Tools Calculator and Earnings Tool Guide 2026",
  description: "Use this TikTok tools calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/',
  },
};

export default function ToolsPage() {
  return (
    <ToolsDirectoryPage
      title="Tools"
      description="Find the right TikTok calculator by goal, metric, and monetization method. Inputs are clear, assumptions are visible, and outputs stay consistent."
    />
  );
}
