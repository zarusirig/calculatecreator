"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const gray_matter_1 = __importDefault(require("gray-matter"));
const ROOT = process.cwd();
const APP_DIR = path_1.default.join(ROOT, 'src', 'app');
const CONTENT_DIR = path_1.default.join(ROOT, 'content');
const OUT_DIR = path_1.default.join(ROOT, 'out');
const OUTPUT_PATH = path_1.default.join(ROOT, 'thin-pages-report.json');
function walk(dir, results = []) {
    if (!fs_1.default.existsSync(dir))
        return results;
    for (const entry of fs_1.default.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path_1.default.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(fullPath, results);
        }
        else {
            results.push(fullPath);
        }
    }
    return results;
}
function normalizeRouteFromAppFile(filePath) {
    const relative = filePath.replace(APP_DIR, '').replace(/\\/g, '/');
    const withoutPage = relative.replace(/\/page\.tsx$/, '');
    const segments = withoutPage
        .split('/')
        .filter(Boolean)
        .filter((segment) => !segment.startsWith('(') && !segment.endsWith(')'));
    if (segments.length === 0)
        return '/';
    return `/${segments.join('/')}/`;
}
function normalizeRouteFromMdx(filePath) {
    const relative = filePath.replace(CONTENT_DIR, '').replace(/\\/g, '/').replace(/\.mdx$/, '');
    return `${relative.startsWith('/') ? '' : '/'}${relative}/`;
}
function stripHtmlToText(html) {
    return html
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-zA-Z0-9#]+;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function stripMdxToText(raw) {
    const parsed = (0, gray_matter_1.default)(raw);
    return parsed.content
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/!\[[^\]]*\]\([^\)]*\)/g, ' ')
        .replace(/\[[^\]]*\]\([^\)]*\)/g, ' ')
        .replace(/^#+\s+/gm, '')
        .replace(/[>*_~\-|]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function stripTsxToText(raw) {
    const withoutComments = raw
        .replace(/\/\*[\s\S]*?\*\//g, ' ')
        .replace(/(^|\s)\/\/.*$/gm, ' ');
    const stringLiterals = Array.from(withoutComments.matchAll(/`([^`]+)`|'([^']+)'|"([^"]+)"/g))
        .map((m) => m[1] || m[2] || m[3] || '')
        .join(' ');
    const jsxText = Array.from(withoutComments.matchAll(/>([^<{][^<]*)</g))
        .map((m) => m[1] || '')
        .join(' ');
    return `${stringLiterals} ${jsxText}`.replace(/\s+/g, ' ').trim();
}
function wordCount(text) {
    if (!text)
        return 0;
    return text.split(/\s+/).filter(Boolean).length;
}
function getHtmlForRoute(route) {
    const outPath = route === '/' ? path_1.default.join(OUT_DIR, 'index.html') : path_1.default.join(OUT_DIR, route, 'index.html');
    if (!fs_1.default.existsSync(outPath))
        return null;
    return fs_1.default.readFileSync(outPath, 'utf8');
}
function introQuality(text) {
    const firstWords = text.split(/\s+/).slice(0, 120).join(' ');
    return firstWords.length > 450;
}
function tokenSet(text) {
    return new Set(text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((w) => w.length > 3)
        .slice(0, 1000));
}
function jaccardSimilarity(a, b) {
    if (!a.size || !b.size)
        return 0;
    let intersection = 0;
    for (const w of a) {
        if (b.has(w))
            intersection += 1;
    }
    const union = a.size + b.size - intersection;
    return union === 0 ? 0 : intersection / union;
}
function shouldAuditRoute(route) {
    return (route.startsWith('/calculators/') ||
        route.startsWith('/tools/') ||
        route.startsWith('/guides/') ||
        route.startsWith('/data/') ||
        route.startsWith('/blog/') ||
        route.startsWith('/benchmarks/') ||
        route.startsWith('/methodology/') ||
        route.startsWith('/search/') ||
        route.startsWith('/bookmarks/') ||
        route.startsWith('/faq/') ||
        route.startsWith('/glossary/') ||
        route.startsWith('/about/') ||
        route.startsWith('/contact/') ||
        route.startsWith('/privacy/') ||
        route.startsWith('/terms/') ||
        route.startsWith('/editorial-policy/') ||
        route.startsWith('/compliance/'));
}
function riskLevel(record, sharedSimilarity) {
    const route = record.route;
    const isToolDetail = (route.startsWith('/calculators/') || route.startsWith('/tools/')) &&
        route !== '/calculators/' &&
        route !== '/tools/';
    const isUtility = route === '/search/' || route === '/bookmarks/';
    const isDirectory = route === '/calculators/' ||
        route === '/tools/' ||
        route === '/guides/' ||
        route === '/data/' ||
        route === '/blog/' ||
        route === '/benchmarks/';
    if (isUtility && !record.hasNoindex)
        return 'high';
    if (isUtility && record.hasNoindex)
        return 'medium';
    if (isDirectory && record.wordCount < 500)
        return 'medium';
    if (isDirectory && sharedSimilarity >= 0.8)
        return 'medium';
    if (record.wordCount < 300)
        return 'high';
    if (sharedSimilarity >= 0.8)
        return 'high';
    if (isToolDetail && record.wordCount < 500)
        return 'high';
    if (record.wordCount < 500)
        return 'medium';
    if (isToolDetail && !record.hasFAQ)
        return 'medium';
    if (!record.hasUniqueIntro)
        return 'medium';
    return 'low';
}
function buildReport() {
    const appPages = walk(APP_DIR)
        .filter((f) => f.endsWith('/page.tsx'))
        .filter((f) => !f.includes('/['));
    const mdxPages = walk(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
    const preliminary = [];
    for (const filePath of appPages) {
        const route = normalizeRouteFromAppFile(filePath);
        if (!shouldAuditRoute(route))
            continue;
        const html = getHtmlForRoute(route);
        const sourceRaw = fs_1.default.readFileSync(filePath, 'utf8');
        const textBody = html ? stripHtmlToText(html) : stripTsxToText(sourceRaw);
        const hasNoindex = /name=["']robots["'][^>]*noindex/i.test(sourceRaw) ||
            Boolean(html && /name="robots"[^>]*noindex/i.test(html));
        const hasSchema = /application\/ld\+json|FAQPageSchema|WebPageSchema|Organization|DefinedTermSet|BreadcrumbList/.test(sourceRaw) ||
            Boolean(html && /application\/ld\+json/.test(html));
        const hasFAQ = /FAQ|faq/i.test(sourceRaw) || Boolean(html && /FAQPage/.test(html));
        preliminary.push({
            path: path_1.default.relative(ROOT, filePath),
            route,
            sourceType: 'app-page',
            wordCount: wordCount(textBody),
            hasUniqueIntro: introQuality(textBody),
            hasFAQ,
            hasSchema,
            hasNoindex,
            notes: [],
            textBody,
        });
    }
    for (const filePath of mdxPages) {
        const route = normalizeRouteFromMdx(filePath);
        if (!shouldAuditRoute(route))
            continue;
        const raw = fs_1.default.readFileSync(filePath, 'utf8');
        const textBody = stripMdxToText(raw);
        preliminary.push({
            path: path_1.default.relative(ROOT, filePath),
            route,
            sourceType: 'mdx',
            wordCount: wordCount(textBody),
            hasUniqueIntro: introQuality(textBody),
            hasFAQ: /\bFAQ\b|\bQ&A\b|\?/.test(textBody),
            hasSchema: /schema|json-ld|FAQPage|ArticleSchema/i.test(raw),
            hasNoindex: false,
            notes: [],
            textBody,
        });
    }
    const tokenSets = preliminary.map((record) => tokenSet(record.textBody));
    const report = preliminary.map((record, index) => {
        let maxSimilarity = 0;
        for (let i = 0; i < preliminary.length; i += 1) {
            if (i === index)
                continue;
            const similarity = jaccardSimilarity(tokenSets[index], tokenSets[i]);
            if (similarity > maxSimilarity)
                maxSimilarity = similarity;
        }
        const notes = [];
        if (record.wordCount < 500)
            notes.push('Below 500 words');
        if (!record.hasUniqueIntro)
            notes.push('Weak intro signal');
        if (!record.hasFAQ && (record.route.startsWith('/tools/') || record.route.startsWith('/calculators/'))) {
            notes.push('Tool page without strong FAQ signal');
        }
        if (!record.hasSchema)
            notes.push('No schema signal detected');
        if (record.route === '/methodology/' && record.wordCount < 500) {
            notes.push('Methodology may be thin');
        }
        if (record.route === '/search/' || record.route === '/bookmarks/') {
            notes.push('Utility page - should be noindex');
        }
        const outputRecord = {
            path: record.path,
            route: record.route,
            sourceType: record.sourceType,
            wordCount: record.wordCount,
            hasUniqueIntro: record.hasUniqueIntro,
            hasFAQ: record.hasFAQ,
            hasSchema: record.hasSchema,
            hasNoindex: record.hasNoindex,
            notes,
        };
        return {
            ...outputRecord,
            sharedSimilarity: Number(maxSimilarity.toFixed(2)),
            risk: riskLevel(outputRecord, maxSimilarity),
        };
    });
    report.sort((a, b) => {
        const riskOrder = { high: 0, medium: 1, low: 2 };
        if (riskOrder[a.risk] !== riskOrder[b.risk]) {
            return riskOrder[a.risk] - riskOrder[b.risk];
        }
        return a.wordCount - b.wordCount;
    });
    return report;
}
const report = buildReport();
fs_1.default.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2));
const summary = report.reduce((acc, item) => {
    acc[item.risk] += 1;
    return acc;
}, { high: 0, medium: 0, low: 0 });
console.log(`Report written: ${OUTPUT_PATH}`);
console.log(`High risk: ${summary.high}, Medium risk: ${summary.medium}, Low risk: ${summary.low}`);
console.log('Top 20 high-risk routes:');
for (const row of report.filter((r) => r.risk === 'high').slice(0, 20)) {
    console.log(`- ${row.route} (${row.wordCount} words) [${row.notes.join('; ')}]`);
}
