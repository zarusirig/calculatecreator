import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type PageType = 'calculator' | 'guide' | 'data' | 'blog' | 'hub-listing' | 'trust-page' | 'other';
type SourceType = 'mdx' | 'app-page' | 'unknown';

interface HeadingItem {
  level: 1 | 2 | 3 | 4;
  text: string;
}

interface PageReport {
  route: string;
  sourcePath?: string;
  sourceType: SourceType;
  pageType: PageType;

  title: string;
  titleLength: number;
  metaDescription: string;
  metaDescriptionLength: number;
  canonical: string;
  h1: string;
  h1Count: number;
  h1MatchesTitle: boolean;
  ogTitle: string;
  ogDescription: string;

  headings: HeadingItem[];
  skippedHeadingLevels: boolean;
  unrelatedH2s: string[];
  totalHeadingCount: number;

  wordCount: number;
  firstParagraphWordCount: number;
  hasTikTokInFirstParagraph: boolean;
  primaryKeyword: string;
  primaryKeywordInFirst150Words: boolean;
  internalLinks: number;
  externalLinks: number;
  hasFAQ: boolean;
  hasSchema: boolean;
  schemaTypes: string[];
  hasBreadcrumbs: boolean;
  hasCalculatorCTA: boolean;

  criticalIssues: string[];
  warningIssues: string[];
  status: 'critical' | 'warning' | 'good';
}

interface Summary {
  totalPages: number;
  criticalPages: number;
  warningPages: number;
  goodPages: number;
}

const PROJECT_ROOT = process.cwd();
const OUT_DIR = path.join(PROJECT_ROOT, 'out');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'content');
const APP_DIR = path.join(PROJECT_ROOT, 'src', 'app');
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports');
const JSON_OUTPUT = path.join(REPORTS_DIR, 'content-quality-audit.json');
const CSV_OUTPUT = path.join(REPORTS_DIR, 'content-quality-audit.csv');

const OWN_HOSTS = new Set(['calculatecreator.com', 'www.calculatecreator.com']);
const DOMAIN_CONTEXT_TOKENS = new Set([
  'tiktok',
  'creator',
  'creators',
  'earnings',
  'earning',
  'income',
  'money',
  'calculator',
  'calculate',
  'engagement',
  'views',
  'followers',
  'monetization',
  'monetize',
  'creatorfund',
  'creator',
  'fund',
  'rewards',
  'brand',
  'deals',
  'shop',
  'live',
  'gifts',
  'rpm',
  'cpm',
  'niche',
  'rates',
  'benchmarks',
  'growth',
]);

const STOPWORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'your',
  'from',
  'into',
  'that',
  'this',
  'what',
  'how',
  'why',
  'when',
  'where',
  'about',
  'guide',
  'free',
  'best',
  'top',
  'vs',
  'on',
  'to',
  'of',
  'in',
  'by',
  'is',
  'it',
  'a',
  'an',
]);

const PAGE_TYPE_PRIORITY: Record<PageType, number> = {
  calculator: 1,
  guide: 2,
  data: 3,
  blog: 4,
  'hub-listing': 5,
  'trust-page': 6,
  other: 7,
};

function walk(dir: string, files: string[] = []): string[] {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;/g, "'");
}

function stripTags(input: string): string {
  return decodeHtmlEntities(
    input
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/\|\s*calculatecreator/gi, '')
    .replace(/calculatecreator/gi, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function words(text: string): string[] {
  return normalize(text).split(/\s+/).filter(Boolean);
}

function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function csvEscape(value: string | number | boolean): string {
  const v = String(value ?? '');
  if (/[",\n]/.test(v)) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

function routeFromOutHtml(htmlPath: string): string {
  const rel = path.relative(OUT_DIR, htmlPath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/\/index\.html$/, '')}/`;
}

function routeFromContentFile(contentPath: string): string {
  const rel = path.relative(CONTENT_DIR, contentPath).replace(/\\/g, '/');
  return `/${rel.replace(/\.(mdx|md)$/, '')}/`;
}

function routeFromAppPageFile(pagePath: string): string {
  const rel = path.relative(APP_DIR, pagePath).replace(/\\/g, '/');
  const noPage = rel.replace(/\/page\.tsx$/, '');
  const parts = noPage
    .split('/')
    .filter(Boolean)
    .filter((p) => !p.includes('['))
    .filter((p) => !(p.startsWith('(') && p.endsWith(')')));
  if (parts.length === 0) return '/';
  return `/${parts.join('/')}/`;
}

function inferPageType(route: string): PageType {
  if (
    route === '/guides/' ||
    route === '/data/' ||
    route === '/blog/' ||
    route === '/news/' ||
    route === '/calculators/' ||
    route === '/tools/' ||
    route === '/comparisons/' ||
    route === '/reference/' ||
    route === '/metrics/' ||
    route === '/niches/'
  ) {
    return 'hub-listing';
  }

  if (
    route === '/about/' ||
    route === '/contact/' ||
    route === '/privacy/' ||
    route === '/terms/' ||
    route === '/editorial-policy/' ||
    route.startsWith('/compliance/')
  ) {
    return 'trust-page';
  }

  if (
    route.startsWith('/calculators/') ||
    route.startsWith('/tools/') ||
    route.startsWith('/calculator/')
  ) {
    return 'calculator';
  }
  if (route.startsWith('/guides/')) return 'guide';
  if (
    route.startsWith('/data/') ||
    route.startsWith('/benchmarks/') ||
    route.startsWith('/reference/') ||
    route.startsWith('/metrics/')
  ) {
    return 'data';
  }
  if (route.startsWith('/blog/') || route.startsWith('/news/')) return 'blog';

  return 'other';
}

function attrValue(tag: string, attr: string): string {
  const regex = new RegExp(`${attr}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i');
  const match = tag.match(regex);
  return match ? decodeHtmlEntities(match[2].trim()) : '';
}

function extractMetaContent(html: string, key: string, by: 'name' | 'property'): string {
  const metaRegex = /<meta\b[^>]*>/gi;
  const tags = html.match(metaRegex) || [];
  for (const tag of tags) {
    const k = attrValue(tag, by);
    if (k.toLowerCase() === key.toLowerCase()) {
      return attrValue(tag, 'content');
    }
  }
  return '';
}

function extractLinkHref(html: string, rel: string): string {
  const linkRegex = /<link\b[^>]*>/gi;
  const tags = html.match(linkRegex) || [];
  for (const tag of tags) {
    const relValue = attrValue(tag, 'rel').toLowerCase();
    if (relValue === rel.toLowerCase()) {
      return attrValue(tag, 'href');
    }
  }
  return '';
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? decodeHtmlEntities(match[1].trim()) : '';
}

function extractMainHtml(html: string): string {
  const match = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  return match ? match[1] : html;
}

function extractFirstParagraph(mainHtml: string): string {
  const paragraphRegex = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  let match: RegExpExecArray | null;
  while ((match = paragraphRegex.exec(mainHtml)) !== null) {
    const text = stripTags(match[1]);
    if (text.length >= 20) {
      return text;
    }
  }
  return '';
}

function extractHeadings(mainHtml: string): HeadingItem[] {
  const headingRegex = /<(h[1-4])\b[^>]*>([\s\S]*?)<\/\1>/gi;
  const items: HeadingItem[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(mainHtml)) !== null) {
    const level = Number(match[1].slice(1)) as 1 | 2 | 3 | 4;
    const text = stripTags(match[2]);
    if (text) {
      items.push({ level, text });
    }
  }
  return items;
}

function headingHierarchySkipped(headings: HeadingItem[]): boolean {
  if (headings.length <= 1) return false;
  let prev = headings[0].level;
  for (let i = 1; i < headings.length; i += 1) {
    const curr = headings[i].level;
    if (curr > prev + 1) return true;
    prev = curr;
  }
  return false;
}

function h1MatchesTitle(h1: string, title: string): boolean {
  if (!h1 || !title) return false;
  const cleanTitle = title.split('|')[0].trim();
  const nH1 = normalize(h1);
  const nTitle = normalize(cleanTitle);
  if (!nH1 || !nTitle) return false;
  if (nH1 === nTitle) return true;
  if (nH1.includes(nTitle) || nTitle.includes(nH1)) return true;

  const h1Words = new Set(words(nH1));
  const titleWords = new Set(words(nTitle));
  let overlap = 0;
  for (const w of h1Words) {
    if (titleWords.has(w)) overlap += 1;
  }
  const ratio = overlap / Math.max(1, Math.min(h1Words.size, titleWords.size));
  return ratio >= 0.7;
}

function getContextTokens(title: string, h1: string, primaryKeyword: string): Set<string> {
  const tokenSet = new Set<string>();
  const source = `${title} ${h1} ${primaryKeyword}`;
  for (const token of words(source)) {
    if (token.length < 3) continue;
    if (STOPWORDS.has(token)) continue;
    tokenSet.add(token);
  }
  for (const t of DOMAIN_CONTEXT_TOKENS) tokenSet.add(t);
  return tokenSet;
}

function unrelatedH2s(headings: HeadingItem[], contextTokens: Set<string>): string[] {
  const h2s = headings.filter((h) => h.level === 2);
  const unrelated: string[] = [];

  for (const h2 of h2s) {
    const tokens = words(h2.text);
    const hasContext = tokens.some((t) => contextTokens.has(t));
    const genericAllowed = tokens.some((t) =>
      new Set([
        'faq',
        'frequently',
        'questions',
        'examples',
        'overview',
        'summary',
        'conclusion',
        'next',
        'steps',
        'resources',
        'related',
      ]).has(t)
    );
    if (!hasContext && !genericAllowed) {
      unrelated.push(h2.text);
    }
  }

  return unrelated;
}

function extractLinks(mainHtml: string): { internal: number; external: number; calculatorCta: boolean } {
  const linkRegex = /<a\b[^>]*href=(["'])([^"']+)\1[^>]*>([\s\S]*?)<\/a>/gi;
  let internal = 0;
  let external = 0;
  let calculatorCta = false;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(mainHtml)) !== null) {
    const href = decodeHtmlEntities(match[2].trim());
    const anchorText = stripTags(match[3]);

    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      continue;
    }

    let isInternal = false;
    if (href.startsWith('/') || href.startsWith('#')) {
      isInternal = true;
    } else if (/^https?:\/\//i.test(href)) {
      try {
        const url = new URL(href);
        isInternal = OWN_HOSTS.has(url.hostname.toLowerCase());
      } catch {
        isInternal = false;
      }
    }

    if (isInternal) internal += 1;
    else external += 1;

    const combined = `${href} ${anchorText}`.toLowerCase();
    if (
      /(\/calculators\/|\/tools\/)/.test(href) &&
      /(calculator|calculate|estimate|earnings|engagement|money|income|open)/.test(combined)
    ) {
      calculatorCta = true;
    }
  }

  return { internal, external, calculatorCta };
}

function extractJsonLdTypes(html: string): string[] {
  const scriptRegex = /<script\b[^>]*type=(["'])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi;
  const found = new Set<string>();

  function collectTypes(node: any): void {
    if (!node) return;
    if (Array.isArray(node)) {
      for (const item of node) collectTypes(item);
      return;
    }
    if (typeof node !== 'object') return;

    const atType = node['@type'];
    if (typeof atType === 'string') found.add(atType);
    if (Array.isArray(atType)) {
      for (const t of atType) {
        if (typeof t === 'string') found.add(t);
      }
    }

    for (const value of Object.values(node)) {
      if (typeof value === 'object') collectTypes(value);
    }
  }

  let match: RegExpExecArray | null;
  while ((match = scriptRegex.exec(html)) !== null) {
    const jsonRaw = decodeHtmlEntities(match[2].trim());
    if (!jsonRaw) continue;

    try {
      const parsed = JSON.parse(jsonRaw);
      collectTypes(parsed);
    } catch {
      // Ignore malformed JSON-LD blocks but continue scanning.
    }
  }

  return Array.from(found).sort();
}

function hasFaqSection(headings: HeadingItem[], schemaTypes: string[], mainHtml: string): boolean {
  if (schemaTypes.some((t) => t.toLowerCase() === 'faqpage')) return true;
  if (headings.some((h) => /frequently asked questions|\bfaq\b/i.test(h.text))) return true;
  if (/frequently asked questions|\bfaq\b/i.test(mainHtml)) return true;
  return false;
}

function hasBreadcrumbSignal(html: string, schemaTypes: string[], mainHtml: string): boolean {
  if (schemaTypes.some((t) => t.toLowerCase() === 'breadcrumblist')) return true;
  if (/aria-label=["'][^"']*breadcrumb/i.test(mainHtml)) return true;
  if (/itemtype=["']https:\/\/schema\.org\/BreadcrumbList["']/i.test(mainHtml)) return true;
  if (/\bbreadcrumbs?\b/i.test(html)) return true;
  return false;
}

function primaryKeywordFrontLoaded(title: string, primaryKeyword: string): boolean {
  if (!title || !primaryKeyword) return false;
  const nTitle = normalize(title.split('|')[0]);
  const nKeyword = normalize(primaryKeyword);
  if (!nTitle || !nKeyword) return false;

  if (nTitle.startsWith(nKeyword)) return true;

  const firstFive = nTitle.split(/\s+/).slice(0, 5).join(' ');
  if (firstFive.includes(nKeyword)) return true;

  const keywordLead = nKeyword.split(/\s+/)[0];
  const firstThreeWords = nTitle.split(/\s+/).slice(0, 3);
  return firstThreeWords.includes(keywordLead);
}

function resolvePrimaryKeyword(
  route: string,
  metaKeywords: string,
  mdxKeywords: Map<string, string>,
  title: string
): string {
  const fromMdx = mdxKeywords.get(route);
  if (fromMdx) return fromMdx;

  if (metaKeywords) {
    const first = metaKeywords.split(',')[0]?.trim();
    if (first) return first;
  }

  return title.split('|')[0].split('—')[0].split(':')[0].trim();
}

function pathHasTikTokExemption(route: string, pageType: PageType): boolean {
  if (pageType === 'trust-page') return true;
  return false;
}

type IssueInput = Omit<PageReport, 'criticalIssues' | 'warningIssues' | 'status'> & {
  routeTextFirst150: string;
};

function buildIssueFlags(report: IssueInput): {
  criticalIssues: string[];
  warningIssues: string[];
  status: 'critical' | 'warning' | 'good';
} {
  const criticalIssues: string[] = [];
  const warningIssues: string[] = [];

  const hasTikTokReq = !pathHasTikTokExemption(report.route, report.pageType);
  const first150Text = report.routeTextFirst150 || '';

  // Critical checks
  if (!report.title || report.titleLength < 30 || report.titleLength > 60) {
    criticalIssues.push('Title tag missing or not between 30-60 characters');
  }
  if (!report.metaDescription || report.metaDescriptionLength < 100 || report.metaDescriptionLength > 160) {
    criticalIssues.push('Meta description missing or not between 100-160 characters');
  }
  if (report.h1Count === 0) {
    criticalIssues.push('No H1 tag');
  }
  if (report.h1Count > 1) {
    criticalIssues.push('Multiple H1 tags');
  }
  if (report.wordCount < 300) {
    criticalIssues.push('Word count below 300 (thin page risk)');
  }
  if (report.internalLinks === 0) {
    criticalIssues.push('No internal links');
  }
  if (hasTikTokReq && !report.hasTikTokInFirstParagraph) {
    criticalIssues.push('"TikTok" missing in first paragraph');
  }

  // Warning checks
  if (!primaryKeywordFrontLoaded(report.title, report.primaryKeyword)) {
    warningIssues.push('Title does not front-load primary keyword');
  }

  const normKeyword = normalize(report.primaryKeyword);
  if (normKeyword && !normalize(report.metaDescription).includes(normKeyword)) {
    warningIssues.push('Meta description does not include primary keyword');
  }

  if (report.skippedHeadingLevels) {
    warningIssues.push('Heading hierarchy levels are skipped');
  }
  if (report.wordCount < 500) {
    warningIssues.push('Word count below 500');
  }
  if (report.internalLinks < 3) {
    warningIssues.push('Fewer than 3 internal links');
  }
  if (report.pageType === 'calculator' && !report.hasFAQ) {
    warningIssues.push('Calculator page missing FAQ section');
  }
  if (!report.hasSchema) {
    warningIssues.push('No schema markup detected');
  }
  if (!report.hasBreadcrumbs) {
    warningIssues.push('No breadcrumbs detected');
  }
  if (report.unrelatedH2s.length > 0) {
    warningIssues.push(`Potentially unrelated H2 headings (${report.unrelatedH2s.length})`);
  }

  if (hasTikTokReq && !normalize(first150Text).includes(normKeyword)) {
    warningIssues.push('Primary keyword missing in first 150 words');
  }

  const status: 'critical' | 'warning' | 'good' =
    criticalIssues.length > 0 ? 'critical' : warningIssues.length > 0 ? 'warning' : 'good';

  return { criticalIssues, warningIssues, status };
}

function mdxPrimaryKeywordMap(): Map<string, string> {
  const map = new Map<string, string>();
  const files = walk(CONTENT_DIR).filter((f) => /\.(mdx|md)$/.test(f));
  for (const file of files) {
    try {
      const raw = fs.readFileSync(file, 'utf8');
      const parsed = matter(raw);
      const route = routeFromContentFile(file);
      const keyword = typeof parsed.data.primaryKeyword === 'string' ? parsed.data.primaryKeyword.trim() : '';
      if (keyword) map.set(route, keyword);
    } catch {
      // Ignore malformed frontmatter files.
    }
  }
  return map;
}

function sourceMap(): Map<string, { sourceType: SourceType; sourcePath: string }> {
  const map = new Map<string, { sourceType: SourceType; sourcePath: string }>();

  const mdxFiles = walk(CONTENT_DIR).filter((f) => /\.(mdx|md)$/.test(f));
  for (const file of mdxFiles) {
    const route = routeFromContentFile(file);
    map.set(route, {
      sourceType: 'mdx',
      sourcePath: path.relative(PROJECT_ROOT, file),
    });
  }

  const appPages = walk(APP_DIR).filter((f) => f.endsWith('/page.tsx'));
  for (const file of appPages) {
    const route = routeFromAppPageFile(file);
    if (!map.has(route)) {
      map.set(route, {
        sourceType: 'app-page',
        sourcePath: path.relative(PROJECT_ROOT, file),
      });
    }
  }

  return map;
}

function buildReport(): { summary: Summary; pages: PageReport[]; priorityFixList: PageReport[] } {
  const keywordMap = mdxPrimaryKeywordMap();
  const srcMap = sourceMap();
  const validRoutes = new Set(srcMap.keys());

  const htmlFiles = walk(OUT_DIR)
    .filter((file) => file.endsWith('/index.html'))
    .filter((file) => !file.includes('/_next/'))
    .filter((file) => validRoutes.has(routeFromOutHtml(file)));

  const pages: PageReport[] = [];

  for (const htmlPath of htmlFiles) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const route = routeFromOutHtml(htmlPath);
    const pageType = inferPageType(route);
    const source = srcMap.get(route);

    const title = extractTitle(html);
    const metaDescription = extractMetaContent(html, 'description', 'name');
    const canonical = extractLinkHref(html, 'canonical');
    const ogTitle = extractMetaContent(html, 'og:title', 'property');
    const ogDescription = extractMetaContent(html, 'og:description', 'property');
    const metaKeywords = extractMetaContent(html, 'keywords', 'name');

    const mainHtml = extractMainHtml(html);
    const headings = extractHeadings(mainHtml);
    const h1s = headings.filter((h) => h.level === 1);
    const h1 = h1s[0]?.text ?? '';
    const skipped = headingHierarchySkipped(headings);

    const firstParagraph = extractFirstParagraph(mainHtml);
    const firstParagraphWordCount = countWords(firstParagraph);
    const hasTikTokInFirstParagraph = /\btiktok\b/i.test(firstParagraph);

    const visibleText = stripTags(mainHtml);
    const wordCountTotal = countWords(visibleText);
    const first150Words = visibleText.split(/\s+/).filter(Boolean).slice(0, 150).join(' ');

    const primaryKeyword = resolvePrimaryKeyword(route, metaKeywords, keywordMap, title);
    const primaryKeywordInFirst150Words =
      primaryKeyword.length > 0 && normalize(first150Words).includes(normalize(primaryKeyword));

    const links = extractLinks(mainHtml);
    const schemaTypes = extractJsonLdTypes(html);
    const hasSchema = schemaTypes.length > 0;

    const contextTokens = getContextTokens(title, h1, primaryKeyword);
    const unrelated = unrelatedH2s(headings, contextTokens);

    const reportDraft = {
      route,
      sourcePath: source?.sourcePath,
      sourceType: source?.sourceType ?? 'unknown',
      pageType,
      title,
      titleLength: title.length,
      metaDescription,
      metaDescriptionLength: metaDescription.length,
      canonical,
      h1,
      h1Count: h1s.length,
      h1MatchesTitle: h1MatchesTitle(h1, title),
      ogTitle,
      ogDescription,
      headings,
      skippedHeadingLevels: skipped,
      unrelatedH2s: unrelated,
      totalHeadingCount: headings.length,
      wordCount: wordCountTotal,
      firstParagraphWordCount,
      hasTikTokInFirstParagraph,
      primaryKeyword,
      primaryKeywordInFirst150Words,
      internalLinks: links.internal,
      externalLinks: links.external,
      hasFAQ: hasFaqSection(headings, schemaTypes, mainHtml),
      hasSchema,
      schemaTypes,
      hasBreadcrumbs: hasBreadcrumbSignal(html, schemaTypes, mainHtml),
      hasCalculatorCTA: links.calculatorCta,
      routeTextFirst150: first150Words,
    } as Omit<PageReport, 'criticalIssues' | 'warningIssues' | 'status'> & {
      routeTextFirst150: string;
    };

    const issueFlags = buildIssueFlags(reportDraft);

    pages.push({
      route: reportDraft.route,
      sourcePath: reportDraft.sourcePath,
      sourceType: reportDraft.sourceType,
      pageType: reportDraft.pageType,
      title: reportDraft.title,
      titleLength: reportDraft.titleLength,
      metaDescription: reportDraft.metaDescription,
      metaDescriptionLength: reportDraft.metaDescriptionLength,
      canonical: reportDraft.canonical,
      h1: reportDraft.h1,
      h1Count: reportDraft.h1Count,
      h1MatchesTitle: reportDraft.h1MatchesTitle,
      ogTitle: reportDraft.ogTitle,
      ogDescription: reportDraft.ogDescription,
      headings: reportDraft.headings,
      skippedHeadingLevels: reportDraft.skippedHeadingLevels,
      unrelatedH2s: reportDraft.unrelatedH2s,
      totalHeadingCount: reportDraft.totalHeadingCount,
      wordCount: reportDraft.wordCount,
      firstParagraphWordCount: reportDraft.firstParagraphWordCount,
      hasTikTokInFirstParagraph: reportDraft.hasTikTokInFirstParagraph,
      primaryKeyword: reportDraft.primaryKeyword,
      primaryKeywordInFirst150Words: reportDraft.primaryKeywordInFirst150Words,
      internalLinks: reportDraft.internalLinks,
      externalLinks: reportDraft.externalLinks,
      hasFAQ: reportDraft.hasFAQ,
      hasSchema: reportDraft.hasSchema,
      schemaTypes: reportDraft.schemaTypes,
      hasBreadcrumbs: reportDraft.hasBreadcrumbs,
      hasCalculatorCTA: reportDraft.hasCalculatorCTA,
      criticalIssues: issueFlags.criticalIssues,
      warningIssues: issueFlags.warningIssues,
      status: issueFlags.status,
    });
  }

  const summary: Summary = {
    totalPages: pages.length,
    criticalPages: pages.filter((p) => p.status === 'critical').length,
    warningPages: pages.filter((p) => p.status === 'warning').length,
    goodPages: pages.filter((p) => p.status === 'good').length,
  };

  const priorityFixList = [...pages].sort((a, b) => {
    if (a.criticalIssues.length !== b.criticalIssues.length) {
      return b.criticalIssues.length - a.criticalIssues.length;
    }
    if (PAGE_TYPE_PRIORITY[a.pageType] !== PAGE_TYPE_PRIORITY[b.pageType]) {
      return PAGE_TYPE_PRIORITY[a.pageType] - PAGE_TYPE_PRIORITY[b.pageType];
    }
    if (a.warningIssues.length !== b.warningIssues.length) {
      return b.warningIssues.length - a.warningIssues.length;
    }
    return a.route.localeCompare(b.route);
  });

  return { summary, pages, priorityFixList };
}

function writeOutputs(summary: Summary, pages: PageReport[], priorityFixList: PageReport[]): void {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  fs.writeFileSync(
    JSON_OUTPUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        summary,
        pages,
        priorityFixList: priorityFixList.map((p) => ({
          route: p.route,
          sourcePath: p.sourcePath,
          sourceType: p.sourceType,
          pageType: p.pageType,
          criticalIssueCount: p.criticalIssues.length,
          warningIssueCount: p.warningIssues.length,
          criticalIssues: p.criticalIssues,
          warningIssues: p.warningIssues,
        })),
      },
      null,
      2
    )
  );

  const csvHeaders = [
    'route',
    'sourcePath',
    'sourceType',
    'pageType',
    'status',
    'titleLength',
    'metaDescriptionLength',
    'h1Count',
    'h1MatchesTitle',
    'totalHeadingCount',
    'skippedHeadingLevels',
    'unrelatedH2Count',
    'wordCount',
    'firstParagraphWordCount',
    'hasTikTokInFirstParagraph',
    'primaryKeyword',
    'primaryKeywordInFirst150Words',
    'internalLinks',
    'externalLinks',
    'hasFAQ',
    'hasSchema',
    'schemaTypes',
    'hasBreadcrumbs',
    'hasCalculatorCTA',
    'criticalIssueCount',
    'warningIssueCount',
    'criticalIssues',
    'warningIssues',
  ];

  const csvLines = [csvHeaders.join(',')];
  for (const page of pages) {
    csvLines.push(
      [
        csvEscape(page.route),
        csvEscape(page.sourcePath || ''),
        csvEscape(page.sourceType),
        csvEscape(page.pageType),
        csvEscape(page.status),
        csvEscape(page.titleLength),
        csvEscape(page.metaDescriptionLength),
        csvEscape(page.h1Count),
        csvEscape(page.h1MatchesTitle),
        csvEscape(page.totalHeadingCount),
        csvEscape(page.skippedHeadingLevels),
        csvEscape(page.unrelatedH2s.length),
        csvEscape(page.wordCount),
        csvEscape(page.firstParagraphWordCount),
        csvEscape(page.hasTikTokInFirstParagraph),
        csvEscape(page.primaryKeyword),
        csvEscape(page.primaryKeywordInFirst150Words),
        csvEscape(page.internalLinks),
        csvEscape(page.externalLinks),
        csvEscape(page.hasFAQ),
        csvEscape(page.hasSchema),
        csvEscape(page.schemaTypes.join('|')),
        csvEscape(page.hasBreadcrumbs),
        csvEscape(page.hasCalculatorCTA),
        csvEscape(page.criticalIssues.length),
        csvEscape(page.warningIssues.length),
        csvEscape(page.criticalIssues.join(' | ')),
        csvEscape(page.warningIssues.join(' | ')),
      ].join(',')
    );
  }

  fs.writeFileSync(CSV_OUTPUT, csvLines.join('\n'));
}

function printSummary(summary: Summary, priorityFixList: PageReport[]): void {
  console.log('\n=== CONTENT QUALITY AUDIT SUMMARY ===');
  console.log(`Total pages: ${summary.totalPages}`);
  console.log(`Critical pages: ${summary.criticalPages}`);
  console.log(`Warning pages: ${summary.warningPages}`);
  console.log(`Good pages: ${summary.goodPages}`);

  console.log('\n=== TOP PRIORITY FIXES (Top 25) ===');
  const top = priorityFixList
    .filter((p) => p.criticalIssues.length > 0 || p.warningIssues.length > 0)
    .slice(0, 25);

  if (top.length === 0) {
    console.log('No fixes needed.');
    return;
  }

  for (const page of top) {
    const crit = page.criticalIssues.length;
    const warn = page.warningIssues.length;
    console.log(`- ${page.route} [${page.pageType}] 🔴${crit} 🟡${warn}`);
  }

  console.log(`\nJSON report: ${path.relative(PROJECT_ROOT, JSON_OUTPUT)}`);
  console.log(`CSV report: ${path.relative(PROJECT_ROOT, CSV_OUTPUT)}`);
}

function main(): void {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('Missing out/ directory. Run build/export before auditing.');
    process.exit(1);
  }

  const { summary, pages, priorityFixList } = buildReport();
  writeOutputs(summary, pages, priorityFixList);
  printSummary(summary, priorityFixList);
}

main();
