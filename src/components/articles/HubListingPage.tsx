import Link from 'next/link';
import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Clock, ArrowRight } from 'lucide-react';
import { CollectionSchema } from '@/components/seo/CollectionSchema';
import { DatasetSchema } from '@/components/seo/DatasetSchema';
import { ArticleData } from '@/lib/content/types';

interface HubListingPageProps {
  title: string;
  description: string;
  section: string;
  articles: ArticleData[];
  parentPath: string;
  parentLabel: string;
  calculatorLink?: { label: string; href: string };
  supplementaryContent?: ReactNode;
}

export function HubListingPage({
  title,
  description,
  section,
  articles,
  parentPath,
  parentLabel,
  calculatorLink,
  supplementaryContent,
}: HubListingPageProps) {
  const canonicalPath = `/${section}/`;
  const canonicalUrl = `https://tiktokcalculator.net${canonicalPath}`;
  const isDataHub = section.startsWith('data/');

  const breadcrumbItems = [
    { label: parentLabel, href: parentPath },
    { label: title, href: canonicalPath },
  ];

  const collectionItems = articles.map((article) => ({
    name: article.frontmatter.title,
    description: article.frontmatter.metaDescription,
    url: `https://tiktokcalculator.net/${article.frontmatter.category}/${article.frontmatter.slug}/`,
    category: article.frontmatter.articleType,
  }));

  const relatedLinks = [
    { label: parentLabel, href: parentPath },
    { label: 'Calculator Directory', href: '/calculators/' },
    { label: isDataHub ? 'Creator Guides' : 'Benchmarks & Data', href: isDataHub ? '/guides/' : '/data/' },
    ...(calculatorLink ? [{ label: calculatorLink.label, href: calculatorLink.href }] : []),
  ];

  return (
    <>
      <CollectionSchema
        title={title}
        description={description}
        url={canonicalUrl}
        items={collectionItems}
        collectionType={isDataHub ? 'Data' : 'Guides'}
      />
      {isDataHub ? (
        <DatasetSchema
          title={title}
          description={description}
          url={canonicalUrl}
          keywords={['tiktok creator data', 'creator benchmarks', 'tiktok analytics', section.replace(/\//g, ' ')]}
        />
      ) : null}
      <div className="min-h-screen bg-neutral-50 py-8 md:py-12">
        <div className="container-custom max-w-5xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-10">
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              {title}
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl">
              {description}
            </p>
            {calculatorLink && (
              <Link
                href={calculatorLink.href}
                className="inline-flex items-center gap-2 mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                {calculatorLink.label} <ArrowRight size={16} />
              </Link>
            )}
          </header>

          {articles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <Link
                  key={article.frontmatter.slug}
                  href={`/${article.frontmatter.category}/${article.frontmatter.slug}/`}
                  className="group block p-6 bg-white border border-neutral-200 rounded-xl hover:border-primary-300 hover:shadow-card-hover transition-all"
                >
                  <h2 className="text-heading-md font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                    {article.frontmatter.title}
                  </h2>
                  <p className="text-body-sm text-neutral-600 mb-3 line-clamp-2">
                    {article.frontmatter.metaDescription}
                  </p>
                  <div className="flex items-center gap-3 text-body-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime} min read
                    </span>
                    <span className="capitalize text-primary-600 bg-primary-50 px-2 py-0.5 rounded text-label-sm">
                      {article.frontmatter.articleType}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-neutral-500">
              <p className="text-body-lg">Articles coming soon.</p>
            </div>
          )}

          {supplementaryContent ? (
            <section className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
              {supplementaryContent}
            </section>
          ) : null}

          <section className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related Resources</h2>
            <p className="mt-3 text-body-md text-neutral-700">
              Use these companion sections to add context before you apply benchmark or strategy decisions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedLinks.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} className="btn btn-secondary btn-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
