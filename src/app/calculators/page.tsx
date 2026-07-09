import type { Metadata } from 'next';
import Link from 'next/link';
import { ToolsDirectoryPage } from '@/components/tools/ToolsDirectoryPage';

export const metadata: Metadata = {
  title: "TikTok Calculators Directory for Creators",
  description: "Browse TikTok calculators for earnings, engagement, monetization planning, and growth analysis with transparent assumptions and practical creator benchmarks.",
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/',
  },
};

export default function CalculatorsPage() {
  return (
    <>
      <ToolsDirectoryPage
        title="Calculators"
        description="Browse TikTok calculators for creator earnings, engagement rate, monetization planning, and growth analysis."
        canonicalPath="/calculators/"
        breadcrumbLabel="Calculators"
      />
      <section className="container-custom max-w-5xl mx-auto pb-16">
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
          Calculator categories
        </h2>
        <p className="text-body-sm text-neutral-700 mb-4">
          Two specialized hubs group related tools for deeper planning: commerce and ad
          performance, and creator utility tooling for tax, payout, and eligibility checks.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/calculators/commerce-ads/"
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-neutral-900 mb-1">Commerce &amp; Ads Calculators</h3>
            <p className="text-body-sm text-neutral-700">
              Shop profit, ad cost, and ROAS tools for TikTok commerce and advertising performance.
            </p>
            <span className="mt-3 inline-block text-body-sm text-primary-600 font-medium">
              Explore commerce calculators &rarr;
            </span>
          </Link>
          <Link
            href="/calculators/utility-tools/"
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-neutral-900 mb-1">Creator Utility Tools</h3>
            <p className="text-body-sm text-neutral-700">
              Tax, payout, and eligibility checkers that support creator business operations.
            </p>
            <span className="mt-3 inline-block text-body-sm text-primary-600 font-medium">
              Explore utility tools &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
