import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticle, getArticleSlugsForDirectory, getArticleSlugs } from '@/lib/content';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
};

const DEFAULT_OG_IMAGE = 'https://calculatecreator.com/home/hero-dashboard-1600.webp';

function trimToWordBoundary(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(' ');
  if (lastSpace < 0) return clipped.trim();
  return clipped.slice(0, lastSpace).trim();
}

function normalizeSeoTitle(rawTitle: string, primaryKeyword: string): string {
  if (rawTitle && rawTitle.trim()) {
    const cleaned = rawTitle.replace(/\s+\|\s*CalculateCreator$/i, '').replace(/\s+/g, ' ').trim();
    return trimToWordBoundary(cleaned, 60);
  }

  const keyword = primaryKeyword ? primaryKeyword.replace(/\s+/g, ' ').trim() : '';
  return trimToWordBoundary(keyword || 'TikTok Creator Guide', 60);
}

function normalizeSeoDescription(rawDescription: string, primaryKeyword: string): string {
  if (rawDescription && rawDescription.trim()) {
    return trimToWordBoundary(rawDescription.trim(), 155);
  }

  const keyword = primaryKeyword ? primaryKeyword.replace(/\s+/g, ' ').trim() : '';
  let description = keyword
    ? `Learn about ${keyword} with practical data and optimization strategies.`
    : 'Practical TikTok creator data, earnings context, and optimization guidance.';

  return trimToWordBoundary(description, 155);
}

const mdxComponents = {
  // ArticleLayout already renders the single page H1 from frontmatter title.
  // Demote MDX body H1 nodes to H2 to avoid duplicate-H1 output.
  h1: (props: any) => <h2 {...props} />,
};

/**
 * Factory for single-segment [articleSlug] routes.
 * Used by calculator article pages (e.g., /calculators/tiktok-money/[articleSlug])
 */
export function createArticlePageExports(contentDir: string) {
  const section = contentDir;

  function generateStaticParams() {
    const slugs = getArticleSlugsForDirectory(section);
    return slugs.map(slug => ({ articleSlug: slug }));
  }

  function generateMetadata({
    params,
  }: {
    params: { articleSlug: string };
  }): Metadata {
    const article = getArticle(section, params.articleSlug);
    if (!article) return {};

    const { frontmatter } = article;
    const canonicalPath = `/${section}/${frontmatter.slug}`;
    const title = normalizeSeoTitle(frontmatter.title, frontmatter.primaryKeyword);
    const description = normalizeSeoDescription(frontmatter.metaDescription, frontmatter.primaryKeyword);

    return {
      title,
      description,
      keywords: [frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords],
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: frontmatter.publishDate,
        modifiedTime: frontmatter.updatedDate,
        url: `https://calculatecreator.com${canonicalPath}/`,
        siteName: 'CalculateCreator',
        images: [
          {
            url: DEFAULT_OG_IMAGE,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [DEFAULT_OG_IMAGE],
      },
      alternates: {
        canonical: `https://calculatecreator.com${canonicalPath}/`,
      },
    };
  }

  function ArticlePage({ params }: { params: { articleSlug: string } }) {
    const article = getArticle(section, params.articleSlug);

    if (!article) {
      notFound();
    }

    return (
      <ArticleLayout
        frontmatter={article.frontmatter}
        readTime={article.readTime}
        section={section}
      >
        <MDXRemote
          source={article.content}
          options={mdxOptions as any}
          components={mdxComponents}
        />
      </ArticleLayout>
    );
  }

  return {
    generateStaticParams,
    generateMetadata,
    default: ArticlePage,
  };
}

/**
 * Factory for catch-all [...slug] routes.
 * Used by guide/data hub pages (e.g., /guides/monetization/[...slug])
 */
export function createCatchAllArticlePageExports(contentDir: string) {
  const section = contentDir;

  function generateStaticParams() {
    const slugArrays = getArticleSlugs(section);
    return slugArrays.map(slugParts => ({ slug: slugParts }));
  }

  function generateMetadata({
    params,
  }: {
    params: { slug: string[] };
  }): Metadata {
    const slugPath = params.slug.join('/');
    const article = getArticle(section, slugPath);
    if (!article) return {};

    const { frontmatter } = article;
    const canonicalPath = `/${section}/${slugPath}`;
    const title = normalizeSeoTitle(frontmatter.title, frontmatter.primaryKeyword);
    const description = normalizeSeoDescription(frontmatter.metaDescription, frontmatter.primaryKeyword);

    return {
      title,
      description,
      keywords: [frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords],
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: frontmatter.publishDate,
        modifiedTime: frontmatter.updatedDate,
        url: `https://calculatecreator.com${canonicalPath}/`,
        siteName: 'CalculateCreator',
        images: [
          {
            url: DEFAULT_OG_IMAGE,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [DEFAULT_OG_IMAGE],
      },
      alternates: {
        canonical: `https://calculatecreator.com${canonicalPath}/`,
      },
    };
  }

  function ArticlePage({ params }: { params: { slug: string[] } }) {
    const slugPath = params.slug.join('/');
    const article = getArticle(section, slugPath);

    if (!article) {
      notFound();
    }

    return (
      <ArticleLayout
        frontmatter={article.frontmatter}
        readTime={article.readTime}
        section={section}
      >
        <MDXRemote
          source={article.content}
          options={mdxOptions as any}
          components={mdxComponents}
        />
      </ArticleLayout>
    );
  }

  return {
    generateStaticParams,
    generateMetadata,
    default: ArticlePage,
  };
}
