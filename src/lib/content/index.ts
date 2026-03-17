import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { ArticleFrontmatter, ArticleData } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function normalizeInternalPath(route?: string): string {
  if (!route) return '';
  const withLeadingSlash = route.startsWith('/') ? route : `/${route}`;
  const trimmed = withLeadingSlash.replace(/\/+$/, '');
  return trimmed || '/';
}

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

function sanitizeGuideContent(rawContent: string): string {
  const lines = rawContent.replace(/\r\n/g, '\n').split('\n');
  const firstSectionHeadingIndex = lines.findIndex(line => line.trim().startsWith('## '));
  const artifactScanLimit = firstSectionHeadingIndex === -1
    ? Math.min(lines.length, 120)
    : firstSectionHeadingIndex;

  const isBareMarkdownLink = (line: string) => /^\[(.+)\]\(([^)]+)\)$/.test(line.trim());
  const isTableRow = (line: string) => /^\|.+\|$/.test(line.trim());
  const isTableSeparator = (line: string) => /^\|\s*:?-{3,}:?(?:\s*\|\s*:?-{3,}:?)+\s*\|?$/.test(line.trim());
  const isHeading = (line: string) => /^#{1,6}\s+/.test(line.trim());
  const isStepNumber = (line: string) => /^\d{1,2}$/.test(line.trim());

  const isShortIntroArtifact = (line: string) => {
    if (!line) return false;
    if (line.startsWith('![') || line.startsWith('[') || line.startsWith('|')) return false;
    if (/^[-*]\s+/.test(line)) return false;
    if (line.length > 70) return false;
    if (/[.!?]$/.test(line)) return false;
    if (/^\d+\.\s+/.test(line)) return false;
    if (/^\d+\s*[x×-]\s*/i.test(line)) return true;
    if (/^[\d$€£¥,.%+\-KkMmxX ]+$/.test(line)) return true;
    if (/^[A-Za-z][A-Za-z/&+,\- ]{0,40}$/.test(line)) return true;
    return false;
  };

  const hasCorruptedPreamble = lines
    .slice(0, artifactScanLimit)
    .some((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return false;
      if (/^#\s+/.test(trimmed)) return true;
      if (/^(Updated|Last updated):/i.test(trimmed)) return true;
      if (/^[📅⏱️]\s*/u.test(trimmed) && /(Updated|Last updated|min read)/i.test(trimmed)) return true;
      if (/^\d+\s*min read$/i.test(trimmed)) return true;
      if (/^TikTok creators:\s*/.test(trimmed)) return true;
      if (/^\s{10,}\S/.test(line) && index < artifactScanLimit) return true;
      if (isShortIntroArtifact(trimmed)) return true;
      return false;
    });

  const cleanedLines: string[] = [];
  let inFencedCodeBlock = false;

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const inPreamble = firstSectionHeadingIndex !== -1 && index < firstSectionHeadingIndex;
    let line = rawLine.replace(/\s+$/, '');
    const rawTrimmed = line.trim();

    if (/^(```|~~~)/.test(rawTrimmed)) {
      inFencedCodeBlock = !inFencedCodeBlock;
      cleanedLines.push(rawTrimmed);
      continue;
    }

    if (!inFencedCodeBlock) {
      line = line.replace(/^\s+/, '');
      line = line.replace(/^TikTok creators:\s*/, '');
    }

    const trimmed = line.trim();

    if (!trimmed) {
      cleanedLines.push('');
      continue;
    }

    if (!inFencedCodeBlock) {
      if (trimmed === ')}') continue;

      if (inPreamble && hasCorruptedPreamble) {
        if (/^!\[.+\]\([^)]+\)$/.test(trimmed)) {
          cleanedLines.push(trimmed);
        }
        continue;
      }

      if (inPreamble) {
        if (/^#\s+/.test(trimmed)) continue;
        if (/^(Updated|Last updated):/i.test(trimmed)) continue;
        if (/^[📅⏱️]\s*/u.test(trimmed) && /(Updated|Last updated|min read)/i.test(trimmed)) continue;
        if (/^\d+\s*min read$/i.test(trimmed)) continue;
        if (isShortIntroArtifact(trimmed)) continue;
      }
    }

    cleanedLines.push(line);
  }

  const withoutEmptyTables: string[] = [];

  for (let index = 0; index < cleanedLines.length; index += 1) {
    const line = cleanedLines[index];
    const trimmed = line.trim();

    if (isTableRow(trimmed) && index + 1 < cleanedLines.length && isTableSeparator(cleanedLines[index + 1])) {
      let nextContentIndex = index + 2;
      while (nextContentIndex < cleanedLines.length && !cleanedLines[nextContentIndex].trim()) {
        nextContentIndex += 1;
      }

      if (nextContentIndex >= cleanedLines.length || !isTableRow(cleanedLines[nextContentIndex])) {
        index = nextContentIndex - 1;
        continue;
      }
    }

    withoutEmptyTables.push(line);
  }

  const normalizedStepLines: string[] = [];

  for (let index = 0; index < withoutEmptyTables.length; index += 1) {
    const line = withoutEmptyTables[index];
    const trimmed = line.trim();

    if (!isStepNumber(trimmed)) {
      normalizedStepLines.push(line);
      continue;
    }

    let titleIndex = index + 1;
    while (titleIndex < withoutEmptyTables.length && !withoutEmptyTables[titleIndex].trim()) {
      titleIndex += 1;
    }

    let descriptionIndex = titleIndex + 1;
    while (descriptionIndex < withoutEmptyTables.length && !withoutEmptyTables[descriptionIndex].trim()) {
      descriptionIndex += 1;
    }

    const title = withoutEmptyTables[titleIndex]?.trim() ?? '';
    const descriptionLines: string[] = [];
    let cursor = descriptionIndex;

    while (cursor < withoutEmptyTables.length) {
      const descriptionLine = withoutEmptyTables[cursor].trim();
      if (!descriptionLine) break;
      if (isHeading(descriptionLine) || isTableRow(descriptionLine) || isStepNumber(descriptionLine)) break;
      if (isBareMarkdownLink(descriptionLine)) break;
      descriptionLines.push(descriptionLine);
      cursor += 1;
    }

    const looksLikeStepTitle = Boolean(title)
      && title.length <= 70
      && !isHeading(title)
      && !isBareMarkdownLink(title)
      && !isTableRow(title)
      && !/^[\d$€£¥,.%+\-xX ]+$/.test(title);

    if (!looksLikeStepTitle || descriptionLines.length === 0) {
      normalizedStepLines.push(line);
      continue;
    }

    normalizedStepLines.push(`${trimmed}. **${title}:** ${descriptionLines.join(' ')}`);
    index = cursor - 1;
  }

  const normalizedChecklistLines: string[] = [];

  for (let index = 0; index < normalizedStepLines.length; index += 1) {
    const line = normalizedStepLines[index];
    const trimmed = line.trim();

    if (!/^[-*]?\s*[✓✔✅]$/.test(trimmed)) {
      normalizedChecklistLines.push(line);
      continue;
    }

    let nextContentIndex = index + 1;
    while (nextContentIndex < normalizedStepLines.length && !normalizedStepLines[nextContentIndex].trim()) {
      nextContentIndex += 1;
    }

    const nextLine = nextContentIndex < normalizedStepLines.length
      ? normalizedStepLines[nextContentIndex].trim()
      : '';

    if (!nextLine || /^[-*]\s+/.test(nextLine) || isHeading(nextLine) || isTableRow(nextLine)) {
      continue;
    }

    normalizedChecklistLines.push(`- ${nextLine}`);
    index = nextContentIndex;
  }

  const normalizedLinkLines: string[] = [];

  for (let index = 0; index < normalizedChecklistLines.length; index += 1) {
    const line = normalizedChecklistLines[index];
    const trimmed = line.trim();

    if (!isBareMarkdownLink(trimmed)) {
      normalizedLinkLines.push(line);
      continue;
    }

    let previousContentIndex = index - 1;
    while (previousContentIndex >= 0 && !normalizedChecklistLines[previousContentIndex].trim()) {
      previousContentIndex -= 1;
    }

    let nextContentIndex = index + 1;
    while (nextContentIndex < normalizedChecklistLines.length && !normalizedChecklistLines[nextContentIndex].trim()) {
      nextContentIndex += 1;
    }

    const previousLine = previousContentIndex >= 0 ? normalizedChecklistLines[previousContentIndex].trim() : '';
    const nextLine = nextContentIndex < normalizedChecklistLines.length ? normalizedChecklistLines[nextContentIndex].trim() : '';
    const inRelatedLinksBlock = /^#{2,3}\s+Related (Content|Resources|Tools(?:\s*&\s*Guides)?)\s*$/i.test(previousLine);
    const isLinkRun = isBareMarkdownLink(previousLine) || isBareMarkdownLink(nextLine);

    normalizedLinkLines.push(inRelatedLinksBlock || isLinkRun ? `- ${trimmed}` : line);
  }

  return normalizedLinkLines
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
  const contentRoot = relativePath.split(path.sep)[0];
  const normalizedContent = contentRoot === 'blog'
    ? sanitizeBlogContent(content)
    : contentRoot === 'guides'
      ? sanitizeGuideContent(content)
      : content;
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
  // Single-segment [articleSlug] routes must only include files directly in this directory.
  // Nested files belong to catch-all routes and should not be emitted here.
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.mdx'))
    .map(entry => path.basename(entry.name, '.mdx'));
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
  const normalizedCalculatorPath = normalizeInternalPath(calculatorPath);
  return getAllArticles().filter(
    article => normalizeInternalPath(article.frontmatter.parentCalculator) === normalizedCalculatorPath
  );
}

/**
 * Get related article data for internal linking
 */
export function getRelatedArticleLinks(frontmatter: ArticleFrontmatter) {
  const allArticles = getAllArticles();
  const normalizeArticlePath = (articlePath: string) => normalizeInternalPath(articlePath);

  const findByPath = (articlePath: string) => {
    const normalizedArticlePath = normalizeArticlePath(articlePath);
    return allArticles.find(a => {
      const fullPath = normalizeArticlePath(`/${a.frontmatter.category}/${a.frontmatter.slug}`);
      const shortPath = normalizeArticlePath(`/${a.frontmatter.slug}`);
      return fullPath === normalizedArticlePath || shortPath === normalizedArticlePath;
    });
  };

  return {
    parent: frontmatter.parentArticle ? findByPath(frontmatter.parentArticle) : null,
    children: frontmatter.childArticles?.map(findByPath).filter(Boolean) || [],
    siblings: frontmatter.siblingArticles?.map(findByPath).filter(Boolean) || [],
    related: frontmatter.relatedArticles?.map(findByPath).filter(Boolean) || [],
  };
}
