import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { ArticleFrontmatter } from '@/lib/content/types';
import { getRelatedArticleLinks } from '@/lib/content';
import { AdPlacement } from '@/components/ads/AdPlacement';
import { Calculator, Clock, Calendar, ArrowRight, ChevronRight } from 'lucide-react';

interface ArticleLayoutProps {
  frontmatter: ArticleFrontmatter;
  readTime: number;
  section: string;
  children: React.ReactNode;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function buildBreadcrumbItems(section: string, frontmatter: ArticleFrontmatter) {
  const segments = section.split('/');
  const items: { label: string; href: string }[] = [];

  // Build breadcrumb from section path
  // e.g., 'calculators/tiktok-money' → [{Calculators, /calculators/}, {TikTok Money, /calculators/tiktok-money/}]
  let path = '';
  for (const segment of segments) {
    path += `/${segment}`;
    const label = segment
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({ label, href: `${path}/` });
  }

  // Add current article
  items.push({
    label: frontmatter.title,
    href: `/${section}/${frontmatter.slug}/`,
  });

  return items;
}

function buildSchemaItems(section: string, frontmatter: ArticleFrontmatter) {
  const segments = section.split('/');
  const items: { name: string; url: string }[] = [
    { name: 'Home', url: 'https://calculatecreator.com' },
  ];

  let path = '';
  for (const segment of segments) {
    path += `/${segment}`;
    const name = segment
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({ name, url: `https://calculatecreator.com${path}/` });
  }

  items.push({
    name: frontmatter.title,
    url: `https://calculatecreator.com/${section}/${frontmatter.slug}/`,
  });

  return items;
}

function RelatedContentNav({ frontmatter }: { frontmatter: ArticleFrontmatter }) {
  const links = getRelatedArticleLinks(frontmatter);
  const hasLinks = links.parent || links.siblings.length > 0 || links.related.length > 0 || links.children.length > 0;

  if (!hasLinks) return null;

  return (
    <nav className="mt-12 p-6 bg-white border border-neutral-200 rounded-xl" aria-label="Related content">
      <h3 className="text-heading-lg font-bold text-neutral-900 mb-4">
        Related Content
      </h3>
      <div className="space-y-3">
        {links.parent && (
          <Link
            href={`/${links.parent.frontmatter.category}/${links.parent.frontmatter.slug}/`}
            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group"
          >
            <ChevronRight size={16} className="text-primary-500 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-body-md text-neutral-700 group-hover:text-primary-600">
              {links.parent.frontmatter.title}
            </span>
          </Link>
        )}
        {links.siblings.map((article) => (
          <Link
            key={article!.frontmatter.slug}
            href={`/${article!.frontmatter.category}/${article!.frontmatter.slug}/`}
            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group"
          >
            <ChevronRight size={16} className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-body-md text-neutral-700 group-hover:text-primary-600">
              {article!.frontmatter.title}
            </span>
          </Link>
        ))}
        {links.children.map((article) => (
          <Link
            key={article!.frontmatter.slug}
            href={`/${article!.frontmatter.category}/${article!.frontmatter.slug}/`}
            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group"
          >
            <ChevronRight size={16} className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-body-md text-neutral-700 group-hover:text-primary-600">
              {article!.frontmatter.title}
            </span>
          </Link>
        ))}
        {links.related.map((article) => (
          <Link
            key={article!.frontmatter.slug}
            href={`/${article!.frontmatter.category}/${article!.frontmatter.slug}/`}
            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group"
          >
            <ChevronRight size={16} className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-body-md text-neutral-700 group-hover:text-primary-600">
              {article!.frontmatter.title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function ArticleLayout({
  frontmatter,
  readTime,
  section,
  children,
}: ArticleLayoutProps) {
  const canonicalUrl = `https://calculatecreator.com/${section}/${frontmatter.slug}/`;
  const breadcrumbItems = buildBreadcrumbItems(section, frontmatter);
  const schemaItems = buildSchemaItems(section, frontmatter);

  return (
    <>
      {/* Structured Data */}
      <ArticleSchema
        headline={frontmatter.title}
        description={frontmatter.metaDescription}
        url={canonicalUrl}
        datePublished={frontmatter.publishDate}
        dateModified={frontmatter.updatedDate || frontmatter.publishDate}
        keywords={[frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords]}
      />
      <BreadcrumbSchema items={schemaItems} />

      <div className="min-h-screen bg-neutral-50 py-8 md:py-12">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumbs */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Article Header */}
          <header className="mb-8 md:mb-12">
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-body-lg text-neutral-600 mb-4">
              {frontmatter.metaDescription}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-body-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {readTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {formatDate(frontmatter.publishDate)}
              </span>
              {frontmatter.updatedDate && (
                <span className="text-neutral-400">
                  Updated {formatDate(frontmatter.updatedDate)}
                </span>
              )}
              <span className="text-neutral-400">By {frontmatter.author}</span>
            </div>
          </header>

          {/* Calculator CTA (top) */}
          {frontmatter.showCalculatorCTA && frontmatter.parentCalculator && (
            <div className="mb-8 p-4 md:p-6 bg-primary-50 border border-primary-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Calculator size={20} className="text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-body-md font-medium text-neutral-900">
                    Calculate your exact earnings
                  </p>
                  <p className="text-body-sm text-neutral-600">
                    Use our free calculator to get personalized estimates based on your metrics.
                  </p>
                </div>
                <Link
                  href={`${frontmatter.parentCalculator}/`}
                  className="flex-shrink-0 btn-primary px-4 py-2 rounded-lg text-body-sm font-medium"
                >
                  Open Calculator <ArrowRight size={16} className="ml-1 inline" />
                </Link>
              </div>
            </div>
          )}

          {/* Article Content (MDX rendered via prose) */}
          <article className="prose prose-lg max-w-none
            prose-headings:font-display prose-headings:text-neutral-900 prose-headings:font-bold
            prose-h2:text-display-sm prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-heading-lg prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary-600 prose-a:underline hover:prose-a:text-primary-700
            prose-strong:text-neutral-900
            prose-li:text-neutral-700
            prose-table:border-collapse prose-th:bg-neutral-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-neutral-200
          ">
            {children}
          </article>
          <AdPlacement placement="mid-article" />

          {/* Calculator CTA (bottom) */}
          {frontmatter.showCalculatorCTA && frontmatter.parentCalculator && (
            <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                <Calculator size={24} className="text-primary-600" />
              </div>
              <h3 className="text-heading-lg font-bold text-neutral-900 mb-2">
                Ready to calculate your TikTok earnings?
              </h3>
              <p className="text-body-md text-neutral-600 mb-4 max-w-lg mx-auto">
                Get personalized earnings estimates based on your follower count, views, and niche.
              </p>
              <Link
                href={`${frontmatter.parentCalculator}/`}
                className="btn-primary px-6 py-3 rounded-lg text-body-md font-medium inline-flex items-center gap-2"
              >
                Use the Calculator <ArrowRight size={18} />
              </Link>
            </div>
          )}

          {/* Related Content */}
          <RelatedContentNav frontmatter={frontmatter} />
        </div>
      </div>
    </>
  );
}
