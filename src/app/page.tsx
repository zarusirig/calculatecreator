import type { Metadata } from 'next';
import { HeroBlock } from '@/components/blocks/HeroBlock';
import { ToolGridBlock } from '@/components/blocks/ToolGridBlock';
import { CategoryChipsBlock } from '@/components/blocks/CategoryChipsBlock';
import { HowItWorksBlock } from '@/components/blocks/HowItWorksBlock';
import { TrustBlock } from '@/components/blocks/TrustBlock';
import { DataSourcesBlock } from '@/components/blocks/DataSourcesBlock';
import { ExpertTeamBlock } from '@/components/blocks/ExpertTeamBlock';
import { GuideGridBlock } from '@/components/blocks/GuideGridBlock';
import { BenchmarksPreviewBlock } from '@/components/blocks/BenchmarksPreviewBlock';
import { FAQBlock } from '@/components/blocks/FAQBlock';
import { CTAStripBlock } from '@/components/blocks/CTAStripBlock';
import { Container } from '@/components/layout/Container';
import {
  benchmarkStats,
  featuredGuides,
  homeFaqs,
  toolDirectoryItems,
} from '@/lib/content/site-data';

export const metadata: Metadata = {
  title: "TikTok Creator Calculators — Earnings, Engagement & Growth Tools | CalculateCreator",
  description: "Free TikTok creator calculators for earnings estimates, engagement benchmarks, and growth projections. Transparent assumptions, expert-reviewed methodology, updated weekly.",
  alternates: {
    canonical: 'https://calculatecreator.com/',
  },
  openGraph: {
    title: 'TikTok Creator Calculators — Earnings, Engagement & Growth Tools | CalculateCreator',
    description:
      'Creator benchmarks made simple. Inputs, results, assumptions, and next actions in one flow.',
    url: 'https://calculatecreator.com/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div>
      <HeroBlock />

      <Container>
        <ToolGridBlock
          title="Popular calculators"
          description="Start with the most-used calculators for earnings, engagement, and benchmarking."
          tools={toolDirectoryItems.filter((tool) => tool.popular).slice(0, 6)}
        />
        <CategoryChipsBlock />
        <HowItWorksBlock />
        <TrustBlock />
        <DataSourcesBlock />
        <ExpertTeamBlock />
        <GuideGridBlock guides={featuredGuides} />
        <BenchmarksPreviewBlock stats={benchmarkStats} />
        <FAQBlock items={homeFaqs} />
        <CTAStripBlock />
      </Container>
    </div>
  );
}
