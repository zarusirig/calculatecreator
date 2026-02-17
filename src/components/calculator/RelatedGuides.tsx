import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { getArticlesByCalculator } from '@/lib/content';

interface RelatedGuidesProps {
  calculatorPath: string;
}

export function RelatedGuides({ calculatorPath }: RelatedGuidesProps) {
  const articles = getArticlesByCalculator(calculatorPath);

  if (articles.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-display-sm font-bold text-neutral-900 mb-2">
        Related Guides & Articles
      </h2>
      <p className="text-body-md text-neutral-600 mb-6">
        Learn more about this topic with our in-depth guides.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.frontmatter.slug}
            href={`/${article.frontmatter.category}/${article.frontmatter.slug}/`}
            className="group flex flex-col p-5 bg-white border border-neutral-200 rounded-xl hover:border-primary-300 hover:shadow-card-hover transition-all"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <BookOpen size={20} />
              </div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors leading-snug">
                {article.frontmatter.title}
              </h3>
            </div>
            <p className="text-body-sm text-neutral-600 mb-3 line-clamp-2">
              {article.frontmatter.metaDescription}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-3 text-body-sm text-neutral-500">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime} min read
                </span>
                <span className="capitalize text-primary-600 bg-primary-50 px-2 py-0.5 rounded text-label-sm">
                  {article.frontmatter.articleType}
                </span>
              </div>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
