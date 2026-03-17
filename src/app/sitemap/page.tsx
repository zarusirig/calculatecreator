import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { getAllArticles } from '@/lib/content';
import path from 'path';

export const metadata: Metadata = {
  title: 'Site Map | TT Calculator',
  description:
    'Browse TT Calculator sections, calculators, guides, data pages, policy pages, and creator resources from one directory.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/sitemap/',
  },
};

const sitemapGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Calculators', href: '/calculators/' },
      { label: 'Tools (Alias)', href: '/tools/' },
      { label: 'Legacy RPM Tool', href: '/tools/rpm/' },
      { label: 'Benchmarks', href: '/benchmarks/' },
      { label: 'Methodology', href: '/methodology/' },
    ],
  },
  {
    title: 'Editorial',
    links: [
      { label: 'Guides', href: '/guides/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
      { label: 'Editorial Policy', href: '/editorial-policy/' },
      { label: 'Advertising Disclosure', href: '/compliance/advertising-disclosure/' },
      { label: 'Glossary', href: '/glossary/' },
    ],
  },
];

export default function HtmlSitemapPage() {
  const allArticles = getAllArticles();
  const contentDir = path.join(process.cwd(), 'content');
  const articlesBySection: Record<string, { title: string; href: string }[]> = {};

  for (const article of allArticles) {
    const rel = path.relative(contentDir, article.filePath);
    const section = rel.split(path.sep)[0];
    if (!articlesBySection[section]) {
      articlesBySection[section] = [];
    }
    articlesBySection[section].push({
      title: article.frontmatter.title,
      href: ('/' + rel.replace(/\\/g, '/').replace(/\.mdx$/, '') + '/').replace(/\/\/+/g, '/')
    });
  }

  const sections = Object.keys(articlesBySection).sort();

  return (
    <div className="pb-16 pt-10">
      <Container className="max-w-4xl">
        <Breadcrumb items={[{ label: 'Sitemap', href: '/sitemap/' }]} />
        <h1 className="text-display-sm font-bold text-neutral-900">HTML Sitemap</h1>
        <p className="mt-3 max-w-3xl text-body-md text-neutral-600">
          TikTok creators can use this sitemap to jump directly to earnings calculators, monetization
          guides, and benchmark datasets without relying on global navigation. Start with the path
          that matches your current goal: estimate income, improve engagement rate, compare platform
          options, or review policy and methodology pages.
        </p>
        <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">How to use this sitemap efficiently</h2>
        <p className="mt-3 text-body-md text-neutral-600">
          Use a simple three-step flow when planning weekly creator operations. First, open your
          primary calculator to estimate current TikTok earnings and monetization performance. Second,
          validate assumptions with the relevant guides and data sections. Third, review policy and
          glossary pages when definitions or compliance details affect your decisions.
        </p>
        <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-600 space-y-2">
          <li>Need a quick estimate? Start from Product links and open tools or benchmarks.</li>
          <li>Need strategy context? Use Editorial links to reach guides and FAQs.</li>
          <li>Need compliance clarity? Use Legal links before publishing sponsored content.</li>
        </ul>
        <p className="mt-3 text-body-md text-neutral-600">
          This structure helps reduce context switching when you are checking multiple inputs such as
          views, engagement, creator payouts, and brand deal assumptions in one workflow.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sitemapGroups.map((group) => (
            <section key={group.title} className="card p-6">
              <h2 className="text-heading-sm font-semibold text-neutral-900">{group.title}</h2>
              <ul className="mt-4 space-y-2">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-600 hover:text-primary-700">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <h2 className="mt-10 text-heading-md font-semibold text-neutral-900">
          High-priority creator paths
        </h2>
        <p className="mt-3 text-body-md text-neutral-600">
          For day-to-day execution, most creators cycle through a small set of pages: the calculator
          directory, the data hub, and the monetization guides. If you are building a repeatable
          operating cadence, save those pages first, then add topic-specific resources such as
          comparisons, niche earnings pages, and creator business references.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/calculators/" className="btn btn-secondary btn-sm">
            TikTok Calculators
          </Link>
          <Link href="/data/" className="btn btn-secondary btn-sm">
            Data Hub
          </Link>
          <Link href="/guides/monetization-calculator-hub/" className="btn btn-secondary btn-sm">
            Monetization Guide Hub
          </Link>
          <Link href="/methodology/" className="btn btn-secondary btn-sm">
            Methodology
          </Link>
        </div>
        <p className="mt-4 text-body-md text-neutral-600">
          If you manage a team, treat this sitemap as an onboarding map: analysts can start with data
          and methodology, content operators can start with guides and benchmarks, and partnership
          managers can focus on monetization and compliance sections. A shared navigation baseline
          keeps reporting and planning aligned across roles.
        </p>
        <p className="mt-3 text-body-md text-neutral-600">
          We update this sitemap whenever major navigation groups change so creators and collaborators
          can always reach the latest TikTok tools, earnings data, and strategy references from one
          index page.
        </p>

        <h2 className="mt-12 text-heading-md font-semibold text-neutral-900 border-b border-neutral-200 pb-3">
          Complete Article Directory
        </h2>
        <p className="mt-3 text-body-md text-neutral-600 mb-6">
          Find all our published guides, calculations, and data deep-dives organized by category below.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section} className="card p-6 bg-neutral-50/50">
              <h3 className="text-heading-sm font-semibold text-neutral-900 capitalize mb-4 pb-2 border-b border-neutral-200">
                {section} Articles
              </h3>
              <ul className="space-y-3">
                {articlesBySection[section].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-700 hover:text-primary-700 leading-snug block">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">Related Resources</h2>
          <p className="mt-3 text-body-sm text-neutral-700">
            Use these pages to move from navigation into active planning and recurring creator operations.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/search/" className="btn btn-secondary btn-sm">
              Search Hub
            </Link>
            <Link href="/bookmarks/" className="btn btn-secondary btn-sm">
              Saved Workflows
            </Link>
            <Link href="/methodology/" className="btn btn-secondary btn-sm">
              Methodology
            </Link>
              <Link href="/editorial-policy/" className="btn btn-secondary btn-sm">
                Editorial Policy
              </Link>
              <Link href="/metrics/tiktok-comments-to-likes-ratio/" className="btn btn-secondary btn-sm">
                Legacy Metrics URL
              </Link>
              <Link href="/guides/business/" className="btn btn-secondary btn-sm">
                Contract Template URL
              </Link>
            </div>
          </section>

      </Container>
    </div>
  );
}
