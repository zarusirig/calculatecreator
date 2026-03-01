import type { Metadata } from 'next';
import { ToolsDirectoryPage } from '@/components/tools/ToolsDirectoryPage';

export const metadata: Metadata = {
  title: "TikTok Calculators Directory for Creators",
  description: "Browse TikTok calculators for earnings, engagement, monetization planning, and growth analysis with transparent assumptions and practical creator benchmarks.",
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/',
  },
};

export default function CalculatorsPage() {
  return (
    <ToolsDirectoryPage
      title="Calculators"
      description="Browse TikTok calculators for creator earnings, engagement rate, monetization planning, and growth analysis."
      canonicalPath="/calculators/"
      breadcrumbLabel="Calculators"
    />
  );
}
