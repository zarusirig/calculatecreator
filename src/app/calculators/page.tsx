import type { Metadata } from 'next';
import { ToolsDirectoryPage } from '@/components/tools/ToolsDirectoryPage';

export const metadata: Metadata = {
  title: "TikTok Calculators Calculator",
  description: "Use this TikTok calculators calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/',
  },
};

export default function CalculatorsPage() {
  return (
    <ToolsDirectoryPage
      title="Calculators"
      description="Browse TikTok calculators for creator earnings, engagement rate, monetization planning, and growth analysis. You can also use the same directory at /tools."
    />
  );
}
