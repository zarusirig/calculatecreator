import Link from 'next/link';
import { ToolsDirectoryClient } from '@/components/tools/ToolsDirectoryClient';
import { toolDirectoryItems } from '@/lib/content/site-data';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CollectionSchema } from '@/components/seo/CollectionSchema';

interface ToolsDirectoryPageProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  breadcrumbLabel?: string;
  initialFilters?: {
    platform?: string;
    goal?: string;
    metric?: string;
  };
}

export function ToolsDirectoryPage({
  title = 'Creator Tools Directory',
  description = 'Search, filter, and compare calculators by platform, goal, and metric.',
  canonicalPath = '/calculators/',
  breadcrumbLabel = 'Calculators',
  initialFilters,
}: ToolsDirectoryPageProps) {
  const normalizedCanonicalPath = canonicalPath.endsWith('/') ? canonicalPath : `${canonicalPath}/`;
  const canonicalUrl = `https://tiktokcalculator.net${normalizedCanonicalPath}`;
  const isToolsAliasPage = normalizedCanonicalPath === '/tools/';
  const schemaItems = toolDirectoryItems.map((tool) => ({
    name: tool.title,
    description: tool.description,
    url: `https://tiktokcalculator.net${tool.href}`,
    category: tool.goal,
  }));

  return (
    <>
      <CollectionSchema
        title={title}
        description={description}
        url={canonicalUrl}
        items={schemaItems}
        collectionType="Calculators"
      />

      <div className="pb-16 pt-10">
        <Container>
          <Breadcrumbs
            className="mb-5"
            items={[
              { label: 'Home', href: '/' },
              { label: breadcrumbLabel },
            ]}
          />

          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-display-sm font-bold text-neutral-900 md:text-display-md">{title}</h1>
              <p className="mt-3 text-body-md text-neutral-600">{description}</p>
            </div>
            <Link href="/methodology/" className="btn btn-secondary btn-md">
              Methodology
            </Link>
          </div>

          <div id="popular" className="mb-6">
            <p className="text-sm text-neutral-600">
              One dominant intent: find the right calculator quickly, then run a clear estimate.
            </p>
          </div>

          <ToolsDirectoryClient tools={toolDirectoryItems} initialFilters={initialFilters} />

          <section className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="card p-6">
              <h2 className="text-heading-md font-semibold text-neutral-900">How to pick the right calculator</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
                <li>Start with your primary decision: earnings estimate, engagement benchmark, or pricing model.</li>
                <li>Filter by platform and metric so your inputs match the workflow you are evaluating.</li>
                <li>Use the methodology link on each tool before relying on one result for business planning.</li>
                <li>Run at least two scenarios, including a conservative case, to avoid overconfidence.</li>
              </ol>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                Calculator outputs on TT Calculator are directional. They help you compare options
                quickly, but they are not legal, tax, or financial guarantees.
              </p>
            </article>

            <article className="card p-6">
              <h2 className="text-heading-md font-semibold text-neutral-900">Coverage and update policy</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                This directory includes legacy calculator templates and newer UX blocks while internal
                links remain stable. We keep long-standing
                <code className="mx-1 rounded bg-neutral-100 px-1 py-0.5 text-xs">/calculators/</code>
                URLs as canonical.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Assumptions and benchmark context are reviewed regularly. If a calculator appears
                stale or unclear, use{' '}
                <Link href="/contact/" className="link">
                  Contact
                </Link>{' '}
                to report the issue and include the exact page URL so we can triage quickly.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                For broader context, pair tools with the{' '}
                <Link href="/benchmarks/" className="link">
                  Benchmarks hub
                </Link>{' '}
                and relevant guides before making high-impact creator-business decisions.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                If you prefer deeper metric definitions before running a tool, review the{' '}
                <Link href="/glossary/" className="link">
                  glossary
                </Link>{' '}
                and the{' '}
                <Link href="/faq/" className="link">
                  FAQ
                </Link>{' '}
                to understand terminology, limits, and interpretation standards used across this
                directory.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                This directory is intentionally structured for fast comparison, repeat use, and clear
                links to methodology on every major decision path.
              </p>
            </article>
          </section>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related Resources</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Use these hubs when you need benchmark context, strategic playbooks, and methodology details.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/guides/" className="btn btn-secondary btn-sm">
                Creator Guides
              </Link>
              <Link href="/data/" className="btn btn-secondary btn-sm">
                Data & Insights
              </Link>
              <Link href="/benchmarks/" className="btn btn-secondary btn-sm">
                Benchmarks
              </Link>
              <Link href="/comparisons/" className="btn btn-secondary btn-sm">
                Platform Comparisons
              </Link>
              <Link href="/reference/" className="btn btn-secondary btn-sm">
                Reference Tables
              </Link>
              <Link href="/blog/" className="btn btn-secondary btn-sm">
                Blog
              </Link>
              <Link href="/methodology/" className="btn btn-secondary btn-sm">
                Methodology
              </Link>
              <Link href="/calculators/fun-niche/" className="btn btn-secondary btn-sm">
                Fun & Niche Tools
              </Link>
              <Link href="/calculators/fun-niche/moon-phase/" className="btn btn-secondary btn-sm">
                Moon Phase Calculator
              </Link>
              {isToolsAliasPage ? (
                <Link href="/tools/rpm/" className="btn btn-secondary btn-sm">
                  Legacy RPM Tool
                </Link>
              ) : null}
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
