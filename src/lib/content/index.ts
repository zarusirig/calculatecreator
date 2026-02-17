import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { ArticleFrontmatter, ArticleData } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function sanitizeBlogContent(rawContent: string): string {
  const lines = rawContent.replace(/\r\n/g, '\n').split('\n');
  const firstSectionHeadingIndex = lines.findIndex(line => line.trim().startsWith('## '));
  const artifactScanLimit = firstSectionHeadingIndex === -1
    ? Math.min(lines.length, 80)
    : firstSectionHeadingIndex;
  const hasReadTimeArtifact = lines
    .slice(0, Math.min(lines.length, 80))
    .some(line => /readTime\s*=\s*"[^"]+"/i.test(line));

  const cleanedIntroLines = lines.map((line, index) => {
    if (!hasReadTimeArtifact || index >= artifactScanLimit) return line;
    const trimmed = line.trim();

    if (!trimmed) return line;
    if (/readTime\s*=\s*"[^"]+"/i.test(trimmed)) return '';
    if (trimmed === '/>' || trimmed === '|') return '';
    if (/^#\s+/.test(trimmed)) return '';
    if (/^published:/i.test(trimmed)) return '';
    if (/^updated:/i.test(trimmed)) return '';
    if (/^by\s+/i.test(trimmed)) return '';
    if (/^\d+\s*min read$/i.test(trimmed)) return '';

    return line;
  });

  const normalizedRelatedSectionLines: string[] = [];
  let inRelatedLinksSection = false;

  for (const line of cleanedIntroLines) {
    const trimmed = line.trim();

    if (/^#{2,3}\s+Related (Content|Resources)\s*$/i.test(trimmed)) {
      inRelatedLinksSection = true;
      normalizedRelatedSectionLines.push(line);
      continue;
    }

    if (inRelatedLinksSection) {
      if (!trimmed) {
        normalizedRelatedSectionLines.push('');
        continue;
      }

      if (/^#{1,6}\s+/.test(trimmed)) {
        inRelatedLinksSection = false;
        normalizedRelatedSectionLines.push(line);
        continue;
      }

      const markdownLinkMatch = trimmed.match(/^\[(.+)\]\(([^)]+)\)$/);
      if (markdownLinkMatch) {
        normalizedRelatedSectionLines.push(`- [${markdownLinkMatch[1]}](${markdownLinkMatch[2]})`);
        continue;
      }
    }

    normalizedRelatedSectionLines.push(line);
  }

  return normalizedRelatedSectionLines
    .join('\n')
    .replace(/^\s*\n+/, '')
    .replace(/\n{4,}/g, '\n\n\n');
}

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
  const relativePath = path.relative(CONTENT_DIR, filePath);
  const isBlogArticle = relativePath.split(path.sep)[0] === 'blog';
  const normalizedContent = isBlogArticle ? sanitizeBlogContent(content) : content;
  const readTime = Math.ceil(readingTime(normalizedContent).minutes);
  return {
    frontmatter: data as ArticleFrontmatter,
    content: normalizedContent,
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
