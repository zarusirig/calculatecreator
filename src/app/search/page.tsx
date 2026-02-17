import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "TikTok Search for Creator Earnings and Growth Guide",
  description: "Explore TikTok search content with creator earnings context, engagement benchmarks, monetization guidance, and clear next-step recommendations.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SearchPage() {
  return (
    <div className="pb-16 pt-10">
      <Container className="max-w-3xl">
        <h1 className="text-display-sm font-bold text-neutral-900">Search</h1>
        <p className="mt-3 text-body-md text-neutral-600">
          TikTok creators can use this page as a structured search bridge while on-site search is
          being expanded. The quickest path to better results is to search by intent first: earnings
          estimate, engagement diagnosis, monetization method, or comparison research.
        </p>
        <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
          Search by creator intent
        </h2>
        <p className="mt-3 text-body-md text-neutral-600">
          If you need a fast estimate, begin with calculators. If you need decision support, open a
          guide or benchmark page and compare your numbers against current ranges. This split keeps
          you from using tactical pages when you actually need strategic context.
        </p>
        <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-600 space-y-2">
          <li>
            <strong>Earnings intent:</strong> start with TikTok money, RPM, Creator Fund, and LIVE
            gift calculators.
          </li>
          <li>
            <strong>Growth intent:</strong> review engagement rate, follower growth, and video
            performance resources.
          </li>
          <li>
            <strong>Monetization intent:</strong> check brand deals, TikTok Shop, and conversion
            planning tools.
          </li>
          <li>
            <strong>Research intent:</strong> use data hubs and comparisons for benchmark validation.
          </li>
        </ul>
        <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
          Recommended starting points
        </h2>
        <p className="mt-3 text-body-md text-neutral-600">
          These links cover the highest-frequency searches from creators planning monthly TikTok
          income and optimization tasks:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/tools/" className="btn btn-secondary btn-sm">
            All TikTok Calculators
          </Link>
          <Link href="/guides/" className="btn btn-secondary btn-sm">
            Creator Guides
          </Link>
          <Link href="/data/" className="btn btn-secondary btn-sm">
            Benchmarks and Data
          </Link>
          <Link href="/news/" className="btn btn-secondary btn-sm">
            TikTok News Updates
          </Link>
        </div>
        <p className="mt-4 text-body-md text-neutral-600">
          Once search indexing is fully enabled, this page will surface direct results by keyword,
          section, and calculator type. Until then, use the links above to avoid dead ends and reach
          relevant tools in one step.
        </p>
        <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
          Practical search phrases to use
        </h2>
        <p className="mt-3 text-body-md text-neutral-600">
          Try focused queries such as "TikTok earnings by views," "good engagement rate by niche,"
          "brand deal pricing benchmark," and "Creator Fund payout schedule." Specific intent terms
          reduce noise and route you to the right section faster than broad phrases like "TikTok money."
        </p>
        <p className="mt-3 text-body-md text-neutral-600">
          As search evolves, these same intent clusters will map to prioritized results and shortcut
          filters, helping creators move from question to calculator output with fewer steps.
        </p>
        <p className="mt-3 text-body-md text-neutral-600">
          For team workflows, keep a shared list of approved query patterns so reporting, strategy,
          and monetization teams pull consistent TikTok references from the same sections.
        </p>
        <p className="mt-3 text-body-md text-neutral-600">
          Consistency in search habits improves decision speed and reduces reporting errors over time.
        </p>
        <div className="mt-6">
          <Link href="/tools/" className="btn btn-primary btn-md">
            Open tools
          </Link>
        </div>
      </Container>
    </div>
  );
}
