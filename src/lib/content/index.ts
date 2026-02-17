import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { ArticleFrontmatter, ArticleData } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Recursively find all .mdx files in a directory
 */
function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Parse a single MDX file into ArticleData
 */
function parseArticle(filePath: string): ArticleData {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const readTime = Math.ceil(readingTime(content).minutes);
  return {
    frontmatter: data as ArticleFrontmatter,
    content,
    readTime,
    filePath,
  };
}

/**
 * Get all articles from a content section (calculators, guides, data, blog)
 */
export function getArticlesBySection(section: string): ArticleData[] {
  const dir = path.join(CONTENT_DIR, section);
  return getMdxFiles(dir)
    .map(parseArticle)
    .sort((a, b) => b.frontmatter.priorityScore - a.frontmatter.priorityScore);
}

/**
 * Get a single article by section + slug path
 * Example: getArticle('calculators/tiktok-money', 'tiktok-pay-per-1000-views')
 */
export function getArticle(section: string, slug: string): ArticleData | null {
  const filePath = path.join(CONTENT_DIR, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseArticle(filePath);
}

/**
 * Get ALL articles across all sections (for sitemap)
 */
export function getAllArticles(): ArticleData[] {
  const sections = ['calculators', 'guides', 'data', 'blog'];
  return sections.flatMap(getArticlesBySection);
}

/**
 * Get all article slugs within a specific subdirectory (for generateStaticParams)
 * Example: getArticleSlugsForDirectory('calculators/tiktok-money')
 * Returns: ['tiktok-pay-per-1000-views', 'tiktok-earnings-by-country']
 */
export function getArticleSlugsForDirectory(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return getMdxFiles(dir).map(filePath => {
    return path.basename(filePath, '.mdx');
  });
}

/**
 * Get all slug paths for a section (for generateStaticParams with catch-all routes)
 * Returns arrays like [['tiktok-money', 'tiktok-pay-per-1000-views']]
 */
export function getArticleSlugs(section: string): string[][] {
  const dir = path.join(CONTENT_DIR, section);
  return getMdxFiles(dir).map(filePath => {
    const relative = path.relative(dir, filePath).replace(/\.mdx$/, '');
    return relative.split(path.sep);
  });
}

/**
 * Get articles that link to a specific calculator
 */
export function getArticlesByCalculator(calculatorPath: string): ArticleData[] {
  return getAllArticles().filter(
    article => article.frontmatter.parentCalculator === calculatorPath
  );
}

/**
 * Get related article data for internal linking
 */
export function getRelatedArticleLinks(frontmatter: ArticleFrontmatter) {
  const allArticles = getAllArticles();
  const findByPath = (articlePath: string) => {
    return allArticles.find(a => {
      const fullPath = `/${a.frontmatter.category}/${a.frontmatter.slug}`;
      return fullPath === articlePath || `/${a.frontmatter.slug}` === articlePath;
    });
  };

  return {
    parent: frontmatter.parentArticle ? findByPath(frontmatter.parentArticle) : null,
    children: frontmatter.childArticles?.map(findByPath).filter(Boolean) || [],
    siblings: frontmatter.siblingArticles?.map(findByPath).filter(Boolean) || [],
    related: frontmatter.relatedArticles?.map(findByPath).filter(Boolean) || [],
  };
}
