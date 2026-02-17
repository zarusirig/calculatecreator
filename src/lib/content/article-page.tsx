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
  let title = rawTitle.replace(/\s+\|\s*CalculateCreator$/i, '').replace(/\s+/g, ' ').trim();
  const keyword = primaryKeyword.replace(/\s+/g, ' ').trim();

  if (!title) title = keyword || 'TikTok Creator Guide';
  if (keyword && !title.toLowerCase().includes(keyword.toLowerCase()) && title.length < 50) {
    title = `${keyword} - ${title}`;
  }
  if (!/\btiktok\b/i.test(title) && /\btiktok\b/i.test(keyword)) {
    title = `TikTok ${title}`;
  }

  if (title.length > 60) {
    title = trimToWordBoundary(title, 60);
  }

  if (title.length < 30) {
    const expansion = keyword && !title.toLowerCase().includes(keyword.toLowerCase())
      ? ` - ${keyword}`
      : ' - TikTok Creator Guide';
    title = trimToWordBoundary(`${title}${expansion}`, 60);
  }

  return title;
}

function normalizeSeoDescription(rawDescription: string, primaryKeyword: string): string {
  const keyword = primaryKeyword.replace(/\s+/g, ' ').trim();
  let description = rawDescription.replace(/\s+/g, ' ').trim();

  if (!description) {
    description = keyword
      ? `Learn ${keyword} with practical data, benchmarks, and optimization strategies for TikTok creators.`
      : 'Get practical TikTok creator benchmarks, earnings context, and optimization guidance.';
  }

  if (keyword && !description.toLowerCase().includes(keyword.toLowerCase())) {
    description = `${keyword}: ${description}`;
  }
  if (!/\btiktok\b/i.test(description)) {
    description = `TikTok creators: ${description}`;
  }

  if (description.length > 155) {
    description = trimToWordBoundary(description, 155);
  }

  if (description.length < 130) {
    const extension = ' Includes benchmarks, monetization context, and actionable next steps.';
    description = trimToWordBoundary(`${description}${extension}`, 155);
  }

  return description;
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
