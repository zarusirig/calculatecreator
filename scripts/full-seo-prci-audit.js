const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'out');
const REPORT_DIR = path.join(ROOT, 'reports');
const OUTPUT_JSON = path.join(REPORT_DIR, 'full-seo-prci-audit.json');
const OUTPUT_CSV = path.join(REPORT_DIR, 'full-seo-prci-audit.csv');

const LINKING_REPORT_PATH = path.join(ROOT, 'linking-audit-report.json');
const THIN_REPORT_PATH = path.join(ROOT, 'thin-pages-report.json');
const CONTENT_REPORT_PATH = path.join(ROOT, 'reports', 'content-quality-audit.json');

const OWN_HOSTS = new Set(['calculatecreator.com', 'www.calculatecreator.com']);
const STOPWORDS = new Set([
  'the',
  'and',
  'for',
  'with',
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
  'page',
  'calculator',
  'calculators',
  'tool',
  'tools',
]);

const DOMAIN_CONTEXT_TERMS = [
  'tiktok',
  'creator',
  'creators',
  'monetization',
  'earn',
  'earnings',
  'income',
  'rpm',
  'cpm',
  'engagement',
  'followers',
  'brand deal',
  'sponsorship',
  'creator fund',
  'creator rewards',
  'shop affiliate',
  'live gifts',
  'coins',
  'diamonds',
  'views',
];

const GENERIC_HEADINGS = new Set([
  'faq',
  'faqs',
  'conclusion',
  'summary',
  'takeaways',
  'next steps',
  'related',
  'related guides',
  'related calculators',
  'continue reading',
  'references',
  'sources',
]);

function walkIndexHtml(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkIndexHtml(fullPath, files);
    } else if (entry.name === 'index.html') {
      files.push(fullPath);
    }
  }
  return files;
}

function decodeHtmlEntities(input) {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function stripTags(input) {
  return decodeHtmlEntities(
    input
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ')
      .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function normalizeWhitespace(input) {
  return (input || '').replace(/\s+/g, ' ').trim();
}

function toLower(input) {
  return normalizeWhitespace(input).toLowerCase();
}

function words(input) {
  return toLower(input)
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function wordCount(input) {
  return words(input).length;
}

function routeFromHtmlPath(filePath) {
  const relative = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/, '')}/`;
}

function normalizeRoute(input) {
  if (!input) return null;
  let value = String(input).trim();
  if (!value) return null;

  try {
    if (value.startsWith('http://') || value.startsWith('https://')) {
      const parsed = new URL(value);
      if (!OWN_HOSTS.has(parsed.hostname)) return null;
      value = parsed.pathname || '/';
    }
  } catch (_err) {
    return null;
  }

  value = value.split('#')[0].split('?')[0];
  if (!value.startsWith('/')) return null;
  if (!value.endsWith('/') && !/\.[a-z0-9]+$/i.test(value)) value += '/';
  return value;
}

function extractTagContent(html, tagName) {
  const re = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = html.match(re);
  return match ? stripTags(match[1]) : '';
}

function extractMetaByName(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `<meta\\s+[^>]*(?:name|property)=["']${escaped}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    'i'
  );
  const match = html.match(re);
  return match ? decodeHtmlEntities(match[1]).trim() : '';
}

function extractCanonical(html) {
  const re = /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i;
  const match = html.match(re);
  return match ? match[1].trim() : '';
}

function canonicalScore(route, canonical) {
  if (!canonical) return { score: 2, status: 'missing' };
  const normalized = normalizeRoute(canonical);
  if (!normalized) return { score: 0, status: 'invalid-host-or-url' };
  if (normalized === route) return { score: 10, status: 'self' };
  if (normalized.replace(/\/$/, '') === route.replace(/\/$/, '')) {
    return { score: 6, status: 'trailing-slash-mismatch' };
  }
  return { score: 0, status: `points-to-${normalized}` };
}

function extractRobotsDirectives(html) {
  const robots = extractMetaByName(html, 'robots');
  if (!robots) return [];
  return robots
    .toLowerCase()
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
}

function hasNotFoundArtifact(html) {
  return /id="__next_error__"/.test(html) || /NEXT_NOT_FOUND/.test(html);
}

function hasConflictingRobots(html) {
  const metaTags = [...html.matchAll(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/gi)];
  if (metaTags.length <= 1) return false;
  const normalized = metaTags.map((m) => (m[1] || '').toLowerCase().replace(/\s+/g, ''));
  const hasNoindex = normalized.some((v) => v.includes('noindex'));
  const hasIndex = normalized.some((v) => /\bindex\b/.test(v) && !v.includes('noindex'));
  return hasNoindex && hasIndex;
}

function extractHeadings(html) {
  const out = [];
  const re = /<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    out.push({
      level: Number(match[1]),
      text: normalizeWhitespace(stripTags(match[2])),
    });
  }
  return out;
}

function extractMainHtml(html) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1];

  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function extractTextSections(html) {
  const mainHtml = extractMainHtml(html);
  const mainText = stripTags(mainHtml);
  const wholeText = stripTags(html);
  return { mainText, wholeText };
}

function extractInternalLinks(html) {
  const links = new Set();
  const re = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const normalized = normalizeRoute(match[1]);
    if (normalized) links.add(normalized);
  }
  return links;
}

function getSentences(text) {
  return normalizeWhitespace(text)
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function isTripleSentence(sentence) {
  const wc = wordCount(sentence);
  if (wc < 6) return false;
  const hasFactToken =
    /\d|\$|%|average|minimum|maximum|benchmark|rate|ranges?|requires?|eligib|launched|compared|versus|vs\.?|per\s+1,?000|formula|conversion/i.test(
      sentence
    );
  const hasPredicate =
    /\b(is|are|means|equals|pays|earns|ranges?|includes?|requires?|costs?|converts?|keeps?|depends|affects?)\b/i.test(
      sentence
    );
  return hasFactToken && hasPredicate;
}

function tripleDensityScore(text) {
  const sentences = getSentences(text);
  if (sentences.length === 0) {
    return { score: 0, tripleDensityPct: 0, tripleSentences: 0, totalSentences: 0 };
  }
  const tripleSentences = sentences.filter(isTripleSentence).length;
  const density = (tripleSentences / sentences.length) * 100;
  let score = 1;
  if (density >= 80) score = 10;
  else if (density >= 60) score = 8;
  else if (density >= 40) score = 5.5;
  else if (density >= 20) score = 3;

  return {
    score,
    tripleDensityPct: Number(density.toFixed(2)),
    tripleSentences,
    totalSentences: sentences.length,
  };
}

function inferPageType(route) {
  if (route.startsWith('/calculators/') || route.startsWith('/tools/')) return 'calculator';
  if (route.startsWith('/guides/')) return 'guide';
  if (route.startsWith('/data/')) return 'data';
  if (route.startsWith('/blog/') || route.startsWith('/news/')) return 'blog';
  if (route.startsWith('/comparisons/')) return 'comparison';
  if (route.startsWith('/authors/')) return 'author';
  if (
    route === '/calculators/' ||
    route === '/guides/' ||
    route === '/data/' ||
    route === '/blog/' ||
    route === '/news/' ||
    route === '/comparisons/' ||
    route === '/reference/' ||
    route === '/niches/' ||
    route === '/region/'
  ) {
    return 'hub';
  }
  if (
    route === '/about/' ||
    route === '/contact/' ||
    route === '/privacy/' ||
    route === '/terms/' ||
    route.startsWith('/compliance/') ||
    route === '/editorial-policy/' ||
    route === '/sources-policy/' ||
    route === '/corrections-policy/'
  ) {
    return 'trust';
  }
  if (route === '/search/' || route === '/bookmarks/') return 'utility';
  return 'other';
}

function slugTokens(route) {
  return route
    .split('/')
    .filter(Boolean)
    .flatMap((segment) => segment.split('-'))
    .map((token) => token.toLowerCase())
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));
}

function uniqueTokens(items) {
  return [...new Set(items.filter(Boolean))];
}

function inferEntity(route, title, h1) {
  const normalized = toLower(`${route} ${title} ${h1}`);
  const routeText = toLower(route);

  if (/rpm/.test(normalized)) {
    return { key: 'rpm', label: 'TikTok RPM', tokens: ['tiktok', 'rpm', 'rate', 'earnings'] };
  }
  if (/creator rewards|creator fund/.test(normalized)) {
    return {
      key: 'creator_rewards',
      label: 'TikTok Creator Rewards Program',
      tokens: ['tiktok', 'creator', 'rewards', 'creator', 'fund', 'earnings'],
    };
  }
  if (/engagement rate|engagement/.test(normalized) && /rate|calculator|benchmark/.test(normalized)) {
    return {
      key: 'engagement_rate',
      label: 'TikTok Engagement Rate',
      tokens: ['tiktok', 'engagement', 'rate', 'likes', 'comments', 'shares'],
    };
  }
  if (/diamond/.test(normalized)) {
    return {
      key: 'diamond',
      label: 'TikTok Diamond',
      tokens: ['tiktok', 'diamond', 'coins', 'live', 'gifts', 'usd'],
    };
  }
  if (/moon-phase|moon/.test(routeText)) {
    return { key: 'moon_phase', label: 'Moon Phase', tokens: ['moon', 'phase'] };
  }

  const fromSlug = slugTokens(route).slice(0, 4);
  const label = fromSlug.length ? fromSlug.join(' ') : (h1 || title || 'general page');
  const tokens = uniqueTokens([...fromSlug, ...words(h1).slice(0, 4), ...words(title).slice(0, 4)]);
  return { key: 'generic', label, tokens: tokens.length ? tokens : ['tiktok', 'creator'] };
}

function findPatternHit(combined, patterns) {
  return patterns.some((re) => re.test(combined));
}

function attributePatternSet(entityKey) {
  const map = {
    rpm: [
      [/revenue per 1,?000|rpm\s*=/i],
      [/\$0?\.\d+|\$\d+(\.\d+)?\s*(to|-)\s*\$?\d+|per 1,?000 views/i],
      [/niche|finance|entertainment|beauty|gaming|education/i],
      [/country|us|uk|germany|france|japan|korea|brazil|india|canada|australia/i],
      [/factor|depends|affect|influenc|video length|season|audience/i],
      [/rpm.*cpm|cpm.*rpm|advertiser-side|creator-side/i],
      [/trend|histor|increased?|decreased?|202[3-9]/i],
      [/increase|improv|maximi[sz]e|target|higher-cpm|strategy/i],
    ],
    creator_rewards: [
      [/creator rewards|creator fund|replacement|launched/i],
      [/10,?000\s+followers|minimum followers|followers required/i],
      [/100,?000\s+views|last 30 days|minimum views/i],
      [/1\s*minute|60 second|min(imum)? video length/i],
      [/us|uk|germany|france|japan|south korea|brazil|availability/i],
      [/\$0?\.\d+|\$\d+(\.\d+)?\s*per 1,?000/i],
      [/monthly|payment schedule|withdrawal|min(imum)?\s*\$?50/i],
      [/comparison|vs|higher than|creator fund/i],
    ],
    engagement_rate: [
      [/\(likes?\s*\+\s*comments?\s*\+\s*shares?\)\s*\/\s*views|engagement rate formula/i],
      [/5-?9%|5\s*%\s*to\s*9\s*%|under 10k|<10k/i],
      [/3-?6%|10k-?100k|10,?000-?100,?000/i],
      [/2-?4%|100k-?1m|100,?000-?1,?000,?000/i],
      [/1-?3%|>1m|above 1m/i],
      [/>5%|good engagement|strong engagement/i],
      [/niche|benchmark|comedy|entertainment|industry/i],
      [/brand deals?|cpe|sponsorship/i],
    ],
    diamond: [
      [/virtual currency|diamonds?|live gifts?/i],
      [/\$0\.?005|conversion rate|diamond.*usd/i],
      [/earned|viewers send gifts|live stream/i],
      [/tiktok.*50%|platform cut|keeps approximately/i],
      [/minimum withdrawal|\$20|cash out/i],
      [/1,?000\s*diamonds?\s*=\s*\$?5/i],
      [/coins?.*diamonds?|relationship to coins/i],
    ],
    generic: [
      [/\b(is|means|defined as|refers to)\b/i],
      [/\b(how it works|formula|calculation|process)\b/i],
      [/\d|%|\$/i],
      [/\b(factors?|depends|affects|influences)\b/i],
      [/\b(benchmark|average|range|typical)\b/i],
      [/\b(how to|steps|improve|increase|optimi[sz]e)\b/i],
      [/\b(vs|compared|comparison)\b/i],
    ],
  };
  return map[entityKey] || map.generic;
}

function module2Score(entityKey, mainText, headings) {
  const combined = `${mainText}\n${headings.map((h) => h.text).join('\n')}`.toLowerCase();
  const patterns = attributePatternSet(entityKey);
  const matched = patterns.filter((patternGroup) => findPatternHit(combined, patternGroup)).length;
  const coveragePct = patterns.length ? (matched / patterns.length) * 100 : 0;
  return {
    score: Number(((patterns.length ? (matched / patterns.length) * 10 : 0)).toFixed(2)),
    attributeCoveragePct: Number(coveragePct.toFixed(2)),
    matchedAttributes: matched,
    totalAttributes: patterns.length,
  };
}

function computeInboundScores(inboundCount) {
  if (inboundCount >= 20) return 10;
  if (inboundCount >= 10) return 7;
  if (inboundCount >= 5) return 5;
  if (inboundCount >= 2) return 2;
  return 0;
}

function computeDepthScore(depth) {
  if (depth === undefined || depth === null) return 0;
  if (depth <= 1) return 10;
  if (depth === 2) return 8;
  if (depth === 3) return 6;
  if (depth === 4) return 3;
  return 1;
}

function requiredSchemaTypes(pageType, route) {
  if (pageType === 'calculator') return ['WebApplication', 'SoftwareApplication', 'Calculator'];
  if (pageType === 'guide') return ['Article', 'HowTo'];
  if (pageType === 'data') return ['Dataset'];
  if (pageType === 'comparison') return ['Article'];
  if (pageType === 'author') return ['Person', 'ProfilePage'];
  if (pageType === 'blog') return ['NewsArticle', 'BlogPosting', 'Article'];
  if (route === '/') return ['WebSite', 'Organization'];
  return [];
}

function extractJsonLdBlocks(html) {
  const scripts = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    scripts.push(match[1].trim());
  }
  return scripts;
}

function parseSchemas(html) {
  const blocks = extractJsonLdBlocks(html);
  const parsed = [];
  let invalid = 0;
  for (const block of blocks) {
    if (!block) continue;
    try {
      const json = JSON.parse(block);
      if (Array.isArray(json)) parsed.push(...json);
      else parsed.push(json);
    } catch (_err) {
      invalid += 1;
    }
  }
  return { schemas: parsed, invalidCount: invalid, totalBlocks: blocks.length };
}

function collectSchemaTypes(schemas) {
  const types = new Set();
  const visit = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }
    const t = node['@type'];
    if (typeof t === 'string') types.add(t);
    if (Array.isArray(t)) t.forEach((x) => typeof x === 'string' && types.add(x));
    for (const value of Object.values(node)) visit(value);
  };
  visit(schemas);
  return [...types];
}

function countMeaningfulProps(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) return 0;
  return Object.keys(node).filter((k) => !['@context', '@type', '@id'].includes(k)).length;
}

function hasPropertyAnywhere(node, key) {
  if (!node || typeof node !== 'object') return false;
  if (Array.isArray(node)) return node.some((item) => hasPropertyAnywhere(item, key));
  if (Object.prototype.hasOwnProperty.call(node, key)) return true;
  return Object.values(node).some((value) => hasPropertyAnywhere(value, key));
}

function hasAnyType(schemaTypes, required) {
  if (!required.length) return true;
  const typeSet = new Set(schemaTypes.map((t) => t.toLowerCase()));
  return required.some((type) => typeSet.has(type.toLowerCase()));
}

function module4Score(pageType, route, schemaInfo) {
  const { schemas, invalidCount, totalBlocks } = schemaInfo;
  const schemaTypes = collectSchemaTypes(schemas);
  const requiredTypes = requiredSchemaTypes(pageType, route);

  const hasRequiredType = hasAnyType(schemaTypes, requiredTypes);
  const hasValidSchema = totalBlocks > 0 && invalidCount === 0 && schemas.length > 0;
  const hasFiveProps = schemas.some((node) => countMeaningfulProps(node) >= 5);
  const hasAuthorAndDates =
    hasPropertyAnywhere(schemas, 'author') &&
    (hasPropertyAnywhere(schemas, 'datePublished') || hasPropertyAnywhere(schemas, 'dateModified'));
  const calculatorHasDescAndCategory =
    pageType !== 'calculator' ||
    (hasPropertyAnywhere(schemas, 'description') && hasPropertyAnywhere(schemas, 'applicationCategory'));
  const dataHasKeywordsAbout =
    pageType !== 'data' || (hasPropertyAnywhere(schemas, 'keywords') && hasPropertyAnywhere(schemas, 'about'));

  const checks = [
    hasRequiredType,
    hasValidSchema,
    hasFiveProps,
    hasAuthorAndDates,
    calculatorHasDescAndCategory,
    dataHasKeywordsAbout,
  ];
  const yesCount = checks.filter(Boolean).length;
  const raw = yesCount * 2;
  const score = Math.min(10, Number((raw / 1.2).toFixed(2)));

  return {
    score,
    yesCount,
    schemaTypes,
    requiredTypes,
    invalidSchemaBlocks: invalidCount,
    totalSchemaBlocks: totalBlocks,
    checks: {
      hasRequiredType,
      hasValidSchema,
      hasFiveProps,
      hasAuthorAndDates,
      calculatorHasDescAndCategory,
      dataHasKeywordsAbout,
    },
  };
}

function tokenizeForMatch(input) {
  return words(input).filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function headingRelatesToTokens(headingText, primaryTokens) {
  const h = toLower(headingText);
  return primaryTokens.some((token) => h.includes(token));
}

function countTokenHits(text, tokens) {
  const lc = toLower(text);
  let count = 0;
  for (const token of tokens) {
    const re = new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const matches = lc.match(re);
    if (matches) count += matches.length;
  }
  return count;
}

function module5Score(headings, mainText, primaryTokens) {
  const meaningfulHeadings = headings.filter((h) => h.level >= 1);
  const relatedHeadings = meaningfulHeadings.filter((h) => headingRelatesToTokens(h.text, primaryTokens));
  const coveragePct = meaningfulHeadings.length ? (relatedHeadings.length / meaningfulHeadings.length) * 100 : 0;
  const firstChunk = words(mainText).slice(0, 220).join(' ');
  const summaryMatch = primaryTokens.some((token) => firstChunk.includes(token));

  let score = 2;
  if (summaryMatch && coveragePct > 60) score = 10;
  else if (summaryMatch && coveragePct >= 40) score = 7;
  else if (summaryMatch && coveragePct < 40) score = 5;

  return {
    score,
    contextualCoveragePct: Number(coveragePct.toFixed(2)),
    summaryMatch,
    relatedHeadings: relatedHeadings.length,
    totalHeadings: meaningfulHeadings.length,
  };
}

function hasHeadingLevelSkip(headings) {
  let prev = 0;
  for (const h of headings) {
    if (!prev) {
      prev = h.level;
      continue;
    }
    if (h.level - prev > 1) return true;
    prev = h.level;
  }
  return false;
}

function module6Score(headings, mainText, primaryTokens) {
  const h1 = headings.find((h) => h.level === 1);
  const h2s = headings.filter((h) => h.level === 2);
  const allLowerHeadings = headings.filter((h) => h.level >= 2);

  const q1 = Boolean(h1 && headingRelatesToTokens(h1.text, primaryTokens));
  const q2 = h2s.slice(0, 2).some((h) =>
    /\b(what|how|overview|guide|basics|introduction|understanding)\b/i.test(h.text)
  ) || h2s.slice(0, 2).some((h) => headingRelatesToTokens(h.text, primaryTokens));
  const q3 = !hasHeadingLevelSkip(headings);

  const unrelated = allLowerHeadings.filter((h) => {
    const text = toLower(h.text);
    if (GENERIC_HEADINGS.has(text)) return false;
    if (/related|faq|summary|conclusion|sources|references/.test(text)) return false;
    return !headingRelatesToTokens(text, primaryTokens);
  });
  const q4Problem = unrelated.length > 0;

  const lastHeading = headings[headings.length - 1];
  const tailText = words(mainText).slice(-120).join(' ');
  const q5 =
    Boolean(lastHeading && headingRelatesToTokens(lastHeading.text, primaryTokens)) ||
    (/conclusion|summary|final|takeaway/i.test(lastHeading ? lastHeading.text : '') &&
      primaryTokens.some((t) => tailText.includes(t)));

  const per100Words = wordCount(mainText) ? (countTokenHits(mainText, primaryTokens) / wordCount(mainText)) * 100 : 0;
  const q6 = per100Words >= 0.9;

  let score = 0;
  score += q1 ? 1.67 : 0;
  score += q2 ? 1.67 : 0;
  score += q3 ? 1.67 : 0;
  score += q5 ? 1.67 : 0;
  score += q6 ? 1.67 : 0;
  score -= q4Problem ? 3 : 0;
  score = Math.max(0, Math.min(10, Number(score.toFixed(2))));

  return {
    score,
    checks: { q1, q2, q3, q4Problem, q5, q6 },
    unrelatedHeadingCount: unrelated.length,
  };
}

function module7Score(mainText, primaryTokens) {
  const sentenceList = getSentences(mainText);
  const firstSentence = sentenceList[0] || '';
  const first3 = sentenceList.slice(0, 3).join(' ');
  const first50 = words(mainText).slice(0, 50).join(' ');
  const first100 = words(mainText).slice(0, 100).join(' ');
  const first150 = words(mainText).slice(0, 150).join(' ');

  const hasEntityFirstSentence = primaryTokens.some((token) => toLower(firstSentence).includes(token));
  const hasAttributeFirst50 = /\b(rate|formula|earn|cost|benchmark|eligib|conversion|average|definition|means|is)\b/i.test(first50);
  const hasValueFirst100 = /\d|\$|%|per\s+1,?000/i.test(first100);
  const snippetReady =
    primaryTokens.some((token) => toLower(first3).includes(token)) &&
    /\d|\$|%|\b(is|means|equals|requires)\b/i.test(first3);
  const scoreA = (hasEntityFirstSentence ? 2.5 : 0) + (hasAttributeFirst50 ? 2.5 : 0) + (hasValueFirst100 ? 2.5 : 0) + (snippetReady ? 2.5 : 0);

  const qWhat = /\b(is|means|defined as|refers to)\b/i.test(mainText) && primaryTokens.some((t) => toLower(mainText).includes(t));
  const qHowMuch = /\$|%|\d/.test(mainText) && /\b(earn|cost|rate|rpm|cpm|pay|payout)\b/i.test(mainText);
  const qHowWork = /\b(how.*work|works by|formula|calculated|calculation|process)\b/i.test(mainText);
  const qFactors = /\b(factor|depends|affect|influenc)\b/i.test(mainText);
  const qAction = /\b(how to|increase|improve|maximi[sz]e|optimi[sz]e|reduce)\b/i.test(mainText);
  const scoreB = [qWhat, qHowMuch, qHowWork, qFactors, qAction].filter(Boolean).length * 2;

  const score = Number((((scoreA + scoreB) / 2)).toFixed(2));
  return {
    score,
    first150Score: scoreA,
    questionNetworkScore: scoreB,
    first150WordPreview: first150,
    checks: { hasEntityFirstSentence, hasAttributeFirst50, hasValueFirst100, snippetReady, qWhat, qHowMuch, qHowWork, qFactors, qAction },
  };
}

function prciAction(score) {
  if (score >= 85) {
    return {
      level: 'Very Low Retrieval Cost',
      action: 'Maintain and expand schema enhancements',
    };
  }
  if (score >= 70) {
    return {
      level: 'Low Retrieval Cost',
      action: 'Minor improvements in weakest 2-3 modules',
    };
  }
  if (score >= 55) {
    return {
      level: 'Medium Retrieval Cost',
      action: 'Priority rewrite: triple density + responsiveness',
    };
  }
  if (score >= 40) {
    return {
      level: 'High Retrieval Cost',
      action: 'Major rewrite across modules',
    };
  }
  if (score >= 25) {
    return {
      level: 'Very High Retrieval Cost',
      action: 'Full rewrite or consolidate into stronger page',
    };
  }
  return {
    level: 'Critical Retrieval Cost',
    action: 'Noindex immediately, then redirect/delete or rebuild',
  };
}

function classifyTopicalBorder(route, title, h1, mainText, noindex = false) {
  const combined = toLower(`${route} ${title} ${h1} ${mainText.slice(0, 1200)}`);
  const hasContext = DOMAIN_CONTEXT_TERMS.some((term) => combined.includes(term));

  if (route.startsWith('/calculators/fun-niche/moon-phase/')) {
    if (noindex) {
      return {
        status: 'outer',
        reason: 'Noindex entertainment tool kept outside core monetization border',
      };
    }
    return {
      status: 'violation',
      reason: 'Off-topic tool outside TikTok creator monetization border',
    };
  }

  if (/^\/calculator\/(es|fr|it|de|pt-br|my)\//.test(route)) {
    if (noindex) {
      return {
        status: 'outer',
        reason: 'Noindex localized variant outside core indexable border',
      };
    }
    return {
      status: 'violation',
      reason: 'Locale duplicate risk (thin localized variant)',
    };
  }

  if (
    route === '/about/' ||
    route === '/contact/' ||
    route === '/privacy/' ||
    route === '/terms/' ||
    route.startsWith('/compliance/') ||
    route === '/editorial-policy/' ||
    route === '/sources-policy/' ||
    route === '/corrections-policy/' ||
    route.startsWith('/authors/')
  ) {
    return { status: 'outer', reason: 'Trust or support section (outer topical ring)' };
  }

  if (hasContext) return { status: 'inside', reason: 'Core TikTok creator monetization context' };

  if (
    route.startsWith('/guides/') ||
    route.startsWith('/blog/') ||
    route.startsWith('/news/') ||
    route.startsWith('/data/') ||
    route.startsWith('/calculators/')
  ) {
    return {
      status: 'violation',
      reason: 'Core content URL without TikTok creator monetization context',
    };
  }

  return { status: 'outer', reason: 'Non-core utility or support page' };
}

function bfsDepth(graph, start = '/') {
  const depth = new Map();
  const queue = [[start, 0]];
  depth.set(start, 0);
  while (queue.length) {
    const [route, d] = queue.shift();
    const links = graph.get(route) || new Set();
    for (const link of links) {
      if (!depth.has(link)) {
        depth.set(link, d + 1);
        queue.push([link, d + 1]);
      }
    }
  }
  return depth;
}

function readJsonIfExists(filePath, fallback) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (_err) {
    return fallback;
  }
}

function module3Score(depth, inboundCount, canonicalInfo) {
  const depthScore = computeDepthScore(depth);
  const inboundScore = computeInboundScores(inboundCount);
  const canonicalDetails = canonicalScore(canonicalInfo.route, canonicalInfo.canonical);
  const score = Number((((depthScore + inboundScore + canonicalDetails.score) / 3)).toFixed(2));

  return {
    score,
    depthScore,
    inboundScore,
    canonicalScore: canonicalDetails.score,
    canonicalStatus: canonicalDetails.status,
  };
}

function weightedPRCI(moduleScores) {
  return Number(
    (
      moduleScores.m1 * 1.5 +
      moduleScores.m2 * 2.0 +
      moduleScores.m3 * 1.5 +
      moduleScores.m4 * 1.0 +
      moduleScores.m5 * 1.5 +
      moduleScores.m6 * 1.0 +
      moduleScores.m7 * 1.5
    ).toFixed(2)
  );
}

function csvEscape(value) {
  const v = String(value ?? '');
  if (/[",\n]/.test(v)) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

function run() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`Missing build output directory: ${OUT_DIR}`);
    process.exit(1);
  }

  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }

  const linkingReport = readJsonIfExists(LINKING_REPORT_PATH, {});
  const thinReport = readJsonIfExists(THIN_REPORT_PATH, []);
  const contentReport = readJsonIfExists(CONTENT_REPORT_PATH, { pages: [] });

  const thinMap = new Map((thinReport || []).map((row) => [row.route, row]));
  const contentMap = new Map(((contentReport && contentReport.pages) || []).map((row) => [row.route, row]));
  const orphanSet = new Set((linkingReport.orphanPages || []).map((v) => (typeof v === 'string' ? v : v.url)));
  const deepMap = new Map((linkingReport.deepPages || []).map((v) => [v.url, v.depth]));
  const breadcrumbSet = new Set(linkingReport.noBreadcrumb || []);
  const relatedSet = new Set(linkingReport.noRelated || []);

  const htmlFiles = walkIndexHtml(OUT_DIR);
  const routeData = new Map();

  for (const filePath of htmlFiles) {
    const route = routeFromHtmlPath(filePath);
    if (route === '/404/') continue;
    const html = fs.readFileSync(filePath, 'utf8');
    const title = extractTagContent(html, 'title');
    const metaDescription = extractMetaByName(html, 'description');
    const canonical = extractCanonical(html);
    const robotsDirectives = extractRobotsDirectives(html);
    const headings = extractHeadings(html);
    const links = extractInternalLinks(html);
    const schemaInfo = parseSchemas(html);
    const sections = extractTextSections(html);
    const notFoundArtifact = hasNotFoundArtifact(html);
    const conflictingRobots = hasConflictingRobots(html);

    routeData.set(route, {
      route,
      htmlPath: filePath,
      html,
      title,
      metaDescription,
      canonical,
      robotsDirectives,
      headings,
      links,
      schemaInfo,
      mainText: sections.mainText,
      wholeText: sections.wholeText,
      notFoundArtifact,
      conflictingRobots,
    });
  }

  const graph = new Map();
  for (const [route, data] of routeData) {
    const validLinks = new Set([...data.links].filter((target) => routeData.has(target)));
    graph.set(route, validLinks);
  }

  const inboundCounts = new Map();
  for (const route of routeData.keys()) inboundCounts.set(route, 0);
  for (const links of graph.values()) {
    for (const target of links) inboundCounts.set(target, (inboundCounts.get(target) || 0) + 1);
  }

  const depths = bfsDepth(graph, '/');
  const pages = [];

  for (const [route, data] of routeData) {
    const pageType = inferPageType(route);
    const h1 = (data.headings.find((h) => h.level === 1) || {}).text || '';
    const entity = inferEntity(route, data.title, h1);
    const tokenPool = uniqueTokens([...entity.tokens, ...slugTokens(route)]).filter((t) => t.length > 2);
    const primaryTokens = tokenPool.length ? tokenPool : ['tiktok', 'creator'];

    const m1 = tripleDensityScore(data.mainText);
    const m2 = module2Score(entity.key, data.mainText, data.headings);
    const m3 = module3Score(depths.get(route), inboundCounts.get(route) || 0, { route, canonical: data.canonical });
    const m4 = module4Score(pageType, route, data.schemaInfo);
    const m5 = module5Score(data.headings, data.mainText, primaryTokens);
    const m6 = module6Score(data.headings, data.mainText, primaryTokens);
    const m7 = module7Score(data.mainText, primaryTokens);

    const moduleScores = {
      m1: Number(m1.score.toFixed(2)),
      m2: Number(m2.score.toFixed(2)),
      m3: Number(m3.score.toFixed(2)),
      m4: Number(m4.score.toFixed(2)),
      m5: Number(m5.score.toFixed(2)),
      m6: Number(m6.score.toFixed(2)),
      m7: Number(m7.score.toFixed(2)),
    };

    const prci = weightedPRCI(moduleScores);
    const action = prciAction(prci);
    const noindex = data.robotsDirectives.includes('noindex');
    const border = classifyTopicalBorder(route, data.title, h1, data.mainText, noindex);
    const depthValue = depths.has(route) ? depths.get(route) : 'unreachable';

    const issues = [];
    if (moduleScores.m1 < 5) issues.push('Low triple density');
    if (moduleScores.m2 < 6) issues.push('Weak attribute coverage');
    if (moduleScores.m3 < 6) issues.push('Crawl architecture weakness');
    if (moduleScores.m4 < 5) issues.push('Schema coverage insufficient');
    if (moduleScores.m5 < 7) issues.push('Contextual coverage weak');
    if (moduleScores.m6 < 6) issues.push('Contextual flow weak');
    if (moduleScores.m7 < 6) issues.push('Low information responsiveness');
    if (border.status === 'violation') issues.push('Topical border violation');
    if (orphanSet.has(route)) issues.push('Orphan page');
    if (breadcrumbSet.has(route)) issues.push('Missing breadcrumbs');
    if (relatedSet.has(route)) issues.push('Missing related section');
    if (!data.canonical) issues.push('Missing canonical');
    if (data.notFoundArtifact) issues.push('Build artifact: NEXT_NOT_FOUND page output');
    if (data.conflictingRobots) issues.push('Conflicting robots meta tags (index + noindex)');

    const thin = thinMap.get(route);
    const content = contentMap.get(route);

    pages.push({
      route,
      htmlPath: path.relative(ROOT, data.htmlPath),
      pageType,
      entity: entity.label,
      topicalBorder: border,
      title: data.title,
      metaDescription: data.metaDescription,
      wordCount: wordCount(data.mainText),
      noindex,
      crawlDepth: depthValue,
      inboundLinks: inboundCounts.get(route) || 0,
      moduleScores,
      prciScore: prci,
      retrievalCostLevel: action.level,
      recommendedAction: action.action,
      moduleDiagnostics: {
        m1,
        m2,
        m3,
        m4,
        m5,
        m6,
        m7,
      },
      integrationSignals: {
        notFoundArtifact: data.notFoundArtifact,
        conflictingRobotsMeta: data.conflictingRobots,
        thinRisk: thin ? thin.risk : null,
        thinNotes: thin ? thin.notes : [],
        contentStatus: content ? content.status : null,
        contentCriticalIssues: content ? content.criticalIssues || [] : [],
        contentWarnings: content ? content.warningIssues || [] : [],
        isOrphan: orphanSet.has(route),
        deepPage: deepMap.get(route) || null,
        missingBreadcrumb: breadcrumbSet.has(route),
        missingRelated: relatedSet.has(route),
      },
      issues,
    });
  }

  pages.sort((a, b) => a.prciScore - b.prciScore || a.route.localeCompare(b.route));

  const summary = {
    totalPages: pages.length,
    avgPRCI: Number((pages.reduce((sum, p) => sum + p.prciScore, 0) / Math.max(1, pages.length)).toFixed(2)),
    prciBands: {
      veryLow85Plus: pages.filter((p) => p.prciScore >= 85).length,
      low70To84: pages.filter((p) => p.prciScore >= 70 && p.prciScore < 85).length,
      medium55To69: pages.filter((p) => p.prciScore >= 55 && p.prciScore < 70).length,
      high40To54: pages.filter((p) => p.prciScore >= 40 && p.prciScore < 55).length,
      veryHigh25To39: pages.filter((p) => p.prciScore >= 25 && p.prciScore < 40).length,
      critical0To24: pages.filter((p) => p.prciScore < 25).length,
    },
    moduleAverages: {
      m1: Number((pages.reduce((sum, p) => sum + p.moduleScores.m1, 0) / Math.max(1, pages.length)).toFixed(2)),
      m2: Number((pages.reduce((sum, p) => sum + p.moduleScores.m2, 0) / Math.max(1, pages.length)).toFixed(2)),
      m3: Number((pages.reduce((sum, p) => sum + p.moduleScores.m3, 0) / Math.max(1, pages.length)).toFixed(2)),
      m4: Number((pages.reduce((sum, p) => sum + p.moduleScores.m4, 0) / Math.max(1, pages.length)).toFixed(2)),
      m5: Number((pages.reduce((sum, p) => sum + p.moduleScores.m5, 0) / Math.max(1, pages.length)).toFixed(2)),
      m6: Number((pages.reduce((sum, p) => sum + p.moduleScores.m6, 0) / Math.max(1, pages.length)).toFixed(2)),
      m7: Number((pages.reduce((sum, p) => sum + p.moduleScores.m7, 0) / Math.max(1, pages.length)).toFixed(2)),
    },
    topicalBorder: {
      inside: pages.filter((p) => p.topicalBorder.status === 'inside').length,
      outer: pages.filter((p) => p.topicalBorder.status === 'outer').length,
      violations: pages.filter((p) => p.topicalBorder.status === 'violation').length,
    },
    integration: {
      orphanPages: pages.filter((p) => p.integrationSignals.isOrphan).length,
      missingBreadcrumb: pages.filter((p) => p.integrationSignals.missingBreadcrumb).length,
      missingRelated: pages.filter((p) => p.integrationSignals.missingRelated).length,
      thinHighRisk: pages.filter((p) => p.integrationSignals.thinRisk === 'high').length,
      contentCritical: pages.filter((p) => p.integrationSignals.contentStatus === 'critical').length,
      notFoundArtifacts: pages.filter((p) => p.integrationSignals.notFoundArtifact).length,
      conflictingRobotsMeta: pages.filter((p) => p.integrationSignals.conflictingRobotsMeta).length,
    },
    top20ByPRCI: pages.slice(0, 20).map((p) => ({
      route: p.route,
      prciScore: p.prciScore,
      retrievalCostLevel: p.retrievalCostLevel,
      issues: p.issues.slice(0, 6),
    })),
  };

  const payload = {
    generatedAt: new Date().toISOString(),
    methodology:
      'Heuristic implementation of the 7-module PRCI framework from CalculateCreator_Full_SEO_Audit.docx, enriched with existing internal audit reports.',
    sourceReportsUsed: {
      linkingAudit: fs.existsSync(LINKING_REPORT_PATH),
      thinAudit: fs.existsSync(THIN_REPORT_PATH),
      contentQualityAudit: fs.existsSync(CONTENT_REPORT_PATH),
    },
    summary,
    pages,
  };

  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);

  const csvHeader = [
    'route',
    'pageType',
    'entity',
    'prciScore',
    'retrievalCostLevel',
    'recommendedAction',
    'borderStatus',
    'wordCount',
    'crawlDepth',
    'inboundLinks',
    'm1',
    'm2',
    'm3',
    'm4',
    'm5',
    'm6',
    'm7',
    'noindex',
    'schemaTypes',
    'thinRisk',
    'contentStatus',
    'isOrphan',
    'missingBreadcrumb',
    'missingRelated',
    'issues',
  ];

  const csvRows = pages.map((p) =>
    [
      p.route,
      p.pageType,
      p.entity,
      p.prciScore,
      p.retrievalCostLevel,
      p.recommendedAction,
      p.topicalBorder.status,
      p.wordCount,
      p.crawlDepth,
      p.inboundLinks,
      p.moduleScores.m1,
      p.moduleScores.m2,
      p.moduleScores.m3,
      p.moduleScores.m4,
      p.moduleScores.m5,
      p.moduleScores.m6,
      p.moduleScores.m7,
      p.noindex,
      p.moduleDiagnostics.m4.schemaTypes.join('|'),
      p.integrationSignals.thinRisk || '',
      p.integrationSignals.contentStatus || '',
      p.integrationSignals.isOrphan,
      p.integrationSignals.missingBreadcrumb,
      p.integrationSignals.missingRelated,
      p.issues.join(' | '),
    ]
      .map(csvEscape)
      .join(',')
  );

  fs.writeFileSync(OUTPUT_CSV, `${csvHeader.join(',')}\n${csvRows.join('\n')}\n`);

  console.log('Full PRCI SEO audit complete.');
  console.log(`Pages audited: ${summary.totalPages}`);
  console.log(`Average PRCI: ${summary.avgPRCI}`);
  console.log(`Topical border violations: ${summary.topicalBorder.violations}`);
  console.log(`Output JSON: ${path.relative(ROOT, OUTPUT_JSON)}`);
  console.log(`Output CSV: ${path.relative(ROOT, OUTPUT_CSV)}`);
}

run();
