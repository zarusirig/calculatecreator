import Link from 'next/link';
import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Clock, ArrowRight } from 'lucide-react';
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
  const breadcrumbItems = [
    { label: parentLabel, href: parentPath },
    { label: title, href: `/${section}/` },
  ];

  return (
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
      </div>
    </div>
  );
}
