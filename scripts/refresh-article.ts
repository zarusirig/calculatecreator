#!/usr/bin/env npx tsx
/**
 * refresh-article.ts
 *
 * Reads an existing MDX article and performs automated quality audit.
 *
 * Usage:
 *   npx tsx scripts/refresh-article.ts content/calculators/tiktok-money/tiktok-pay-per-1000-views.mdx
 *   npx tsx scripts/refresh-article.ts content/guides/growth/tiktok-algorithm-explained.mdx --fix
 *
 * --fix flag: auto-fix date updates and add missing updatedDate
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content");
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Severity = "critical" | "recommended" | "good";

interface Issue {
  severity: Severity;
  category: string;
  message: string;
  line?: number;
}

interface RefreshReport {
  filePath: string;
  slug: string;
  category: string;
  issues: Issue[];
  stats: {
    wordCount: number;
    targetWordCount: number;
    headingCount: number;
    h2Count: number;
    h3Count: number;
    internalLinkCount: number;
    faqCount: number;
    tableCount: number;
    ageDays: number;
    publishDate: string;
    updatedDate: string | null;
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function findMdxFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      results.push(fullPath);
    }
  }
  return results;
}

function daysBetween(dateStr: string, now: string): number {
  const d1 = new Date(dateStr);
  const d2 = new Date(now);
  return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

function countWords(text: string): number {
  return text
    .replace(/```[\s\S]*?```/g, "") // strip code blocks
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // strip link URLs
    .replace(/[#|*_`>-]/g, " ") // strip markdown syntax
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

// ---------------------------------------------------------------------------
// Audit functions
// ---------------------------------------------------------------------------

function auditDates(
  frontmatter: Record<string, any>,
  body: string,
  issues: Issue[]
): { ageDays: number; publishDate: string; updatedDate: string | null } {
  const publishDate = frontmatter.publishDate || "";
  const updatedDate = frontmatter.updatedDate || null;
  const ageDays = publishDate ? daysBetween(publishDate, TODAY) : 0;

  if (ageDays > 90 && !updatedDate) {
    issues.push({
      severity: "critical",
      category: "DATE",
      message: `Article is ${ageDays} days old with no updatedDate. Add updatedDate: "${TODAY}"`,
    });
  } else if (ageDays > 60 && !updatedDate) {
    issues.push({
      severity: "recommended",
      category: "DATE",
      message: `Article is ${ageDays} days old. Consider adding updatedDate for freshness signal.`,
    });
  }

  // Check for stale year references in body
  const yearRegex = /\b20(2[0-4])\b/g;
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const matches = lines[i].match(yearRegex);
    if (matches) {
      for (const m of matches) {
        issues.push({
          severity: "critical",
          category: "DATE",
          message: `Stale year reference "${m}" found — may need updating to 2026`,
          line: i + 1,
        });
      }
    }
  }

  // Check for temporal words that may be outdated
  const temporalPatterns = [
    /\brecently\b/i,
    /\bcurrently\b/i,
    /\bjust launched\b/i,
    /\bnew feature\b/i,
    /\bthis month\b/i,
    /\blast month\b/i,
    /\bthis week\b/i,
  ];
  if (ageDays > 60) {
    for (let i = 0; i < lines.length; i++) {
      for (const pat of temporalPatterns) {
        if (pat.test(lines[i])) {
          issues.push({
            severity: "recommended",
            category: "FRESHNESS",
            message: `Temporal word "${lines[i].match(pat)?.[0]}" may be outdated (article is ${ageDays} days old)`,
            line: i + 1,
          });
          break; // one per line
        }
      }
    }
  }

  return { ageDays, publishDate, updatedDate };
}

function auditWordCount(
  body: string,
  targetWordCount: number,
  issues: Issue[]
): number {
  const actual = countWords(body);

  if (targetWordCount > 0) {
    const ratio = actual / targetWordCount;
    if (ratio < 0.5) {
      issues.push({
        severity: "critical",
        category: "WORD_COUNT",
        message: `Word count ${actual} is only ${Math.round(ratio * 100)}% of target ${targetWordCount} — article is a stub/placeholder`,
      });
    } else if (ratio < 0.8) {
      issues.push({
        severity: "recommended",
        category: "WORD_COUNT",
        message: `Word count ${actual} is ${Math.round(ratio * 100)}% of target ${targetWordCount} — consider expanding`,
      });
    } else if (ratio > 1.5) {
      issues.push({
        severity: "recommended",
        category: "WORD_COUNT",
        message: `Word count ${actual} is ${Math.round(ratio * 100)}% of target ${targetWordCount} — consider splitting`,
      });
    }
  } else if (actual < 300) {
    issues.push({
      severity: "critical",
      category: "WORD_COUNT",
      message: `Word count ${actual} — article appears to be a stub or placeholder`,
    });
  }

  return actual;
}

function auditHeadings(
  body: string,
  title: string,
  issues: Issue[]
): { headingCount: number; h2Count: number; h3Count: number } {
  const lines = body.split("\n");
  let h1Count = 0;
  let h2Count = 0;
  let h3Count = 0;
  let lastLevel = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (/^# [^#]/.test(line)) {
      h1Count++;
      if (h1Count > 0) {
        issues.push({
          severity: "recommended",
          category: "HEADING",
          message: `H1 found in body text — layout already renders title as H1. Use ## instead.`,
          line: i + 1,
        });
      }
      lastLevel = 1;
    } else if (/^## [^#]/.test(line)) {
      h2Count++;
      lastLevel = 2;
    } else if (/^### [^#]/.test(line)) {
      h3Count++;
      if (lastLevel < 2) {
        issues.push({
          severity: "recommended",
          category: "HEADING",
          message: `H3 without preceding H2 — heading hierarchy skipped`,
          line: i + 1,
        });
      }
      lastLevel = 3;
    }
  }

  if (h2Count === 0) {
    issues.push({
      severity: "critical",
      category: "HEADING",
      message: `No H2 headings found — article needs section structure`,
    });
  } else if (h2Count === 1) {
    issues.push({
      severity: "recommended",
      category: "HEADING",
      message: `Only 1 H2 heading — consider adding more sections for depth`,
    });
  }

  return { headingCount: h1Count + h2Count + h3Count, h2Count, h3Count };
}

function auditLinks(
  body: string,
  frontmatter: Record<string, any>,
  allSlugs: Set<string>,
  issues: Issue[]
): number {
  // Find all markdown links in body
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  const bodyLinks = new Set<string>();
  let match;
  while ((match = linkRegex.exec(body)) !== null) {
    const href = match[2];
    if (href.startsWith("/")) {
      bodyLinks.add(href.replace(/\/$/, ""));
    }
  }

  // Check frontmatter links present in body
  const fmLinkFields = [
    "parentArticle",
    "parentCalculator",
    "relatedArticles",
    "siblingArticles",
    "childArticles",
  ];
  for (const field of fmLinkFields) {
    const val = frontmatter[field];
    if (!val) continue;
    const targets = Array.isArray(val) ? val : [val];
    for (const t of targets) {
      if (!t || t === "") continue;
      const normalized = t.replace(/\/$/, "");
      if (!bodyLinks.has(normalized) && !normalized.startsWith("/guides") && !normalized.startsWith("/data") && !normalized.startsWith("/calculators")) {
        // Only flag if it's a specific article path, not a hub
      }
    }
  }

  // Check for broken internal links
  for (const link of bodyLinks) {
    // Only check article-level links, not calculator/hub pages
    if (
      !allSlugs.has(link) &&
      !link.match(/^\/calculators\/[^/]+$/) && // calculator hub pages are OK
      !link.match(/^\/guides$/) &&
      !link.match(/^\/data$/) &&
      !link.match(/^\/blog$/)
    ) {
      // Could be a calculator hub or static page — just warn
      issues.push({
        severity: "recommended",
        category: "LINK",
        message: `Internal link "${link}" not found in MDX articles — verify it's a valid route`,
      });
    }
  }

  if (bodyLinks.size === 0) {
    issues.push({
      severity: "critical",
      category: "LINK",
      message: `No internal links found in body text — add 3-6 contextual links`,
    });
  } else if (bodyLinks.size < 2) {
    issues.push({
      severity: "recommended",
      category: "LINK",
      message: `Only ${bodyLinks.size} internal link(s) — target 3-6 for better interlinking`,
    });
  }

  return bodyLinks.size;
}

function auditContent(
  body: string,
  articleType: string,
  issues: Issue[]
): { faqCount: number; tableCount: number } {
  const faqRegex = /^###\s+.+\?$/gm;
  const faqMatches = body.match(faqRegex);
  const faqCount = faqMatches ? faqMatches.length : 0;

  const tableRegex = /^\|.+\|$/gm;
  const tableMatches = body.match(tableRegex);
  const tableCount = tableMatches ? Math.floor(tableMatches.length / 2) : 0; // rough estimate (header + separator = ~2 lines per table)

  if (faqCount === 0) {
    issues.push({
      severity: "recommended",
      category: "CONTENT",
      message: `No FAQ section found — add 3-5 FAQs for featured snippet potential`,
    });
  }

  if (articleType === "data" && tableCount === 0) {
    issues.push({
      severity: "critical",
      category: "CONTENT",
      message: `Data article has no tables — data articles should include comparative tables`,
    });
  }

  return { faqCount, tableCount };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function refreshArticle(
  filePath: string,
  allSlugs: Set<string>,
  fix: boolean
): RefreshReport {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content: body } = matter(raw);

  const slug = frontmatter.slug || path.basename(filePath, ".mdx");
  const category = frontmatter.category || "";
  const title = frontmatter.title || "";
  const targetWordCount = frontmatter.wordCount || 0;
  const articleType = frontmatter.articleType || "informative";

  const issues: Issue[] = [];

  // 1. Date audit
  const dateStats = auditDates(frontmatter, body, issues);

  // 2. Word count audit
  const wordCount = auditWordCount(body, targetWordCount, issues);

  // 3. Heading structure audit
  const headingStats = auditHeadings(body, title, issues);

  // 4. Link audit
  const internalLinkCount = auditLinks(body, frontmatter, allSlugs, issues);

  // 5. Content audit
  const contentStats = auditContent(body, articleType, issues);

  // --fix: auto-apply safe fixes
  if (fix) {
    let modified = false;
    let newRaw = raw;

    // Add updatedDate if missing and article is old
    if (dateStats.ageDays > 60 && !frontmatter.updatedDate) {
      const parsed = matter(newRaw);
      parsed.data.updatedDate = TODAY;
      newRaw = matter.stringify(parsed.content, parsed.data);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, newRaw, "utf-8");
      issues.push({
        severity: "good",
        category: "FIX",
        message: `Auto-fixed: added updatedDate "${TODAY}"`,
      });
    }
  }

  return {
    filePath,
    slug,
    category,
    issues,
    stats: {
      wordCount,
      targetWordCount,
      headingCount: headingStats.headingCount,
      h2Count: headingStats.h2Count,
      h3Count: headingStats.h3Count,
      internalLinkCount,
      faqCount: contentStats.faqCount,
      tableCount: contentStats.tableCount,
      ageDays: dateStats.ageDays,
      publishDate: dateStats.publishDate,
      updatedDate: dateStats.updatedDate,
    },
  };
}

function printReport(report: RefreshReport): void {
  const severityIcon: Record<Severity, string> = {
    critical: "🔴",
    recommended: "🟡",
    good: "🟢",
  };

  console.log(`\n${"=".repeat(70)}`);
  console.log(`  REFRESH REPORT: ${report.filePath}`);
  console.log(`${"=".repeat(70)}`);

  console.log(`\n  Slug: ${report.slug}`);
  console.log(`  Category: ${report.category}`);
  console.log(`  Published: ${report.stats.publishDate} (${report.stats.ageDays} days ago)`);
  if (report.stats.updatedDate) {
    console.log(`  Updated: ${report.stats.updatedDate}`);
  }

  console.log(`\n  STATS:`);
  console.log(`    Word count: ${report.stats.wordCount} / ${report.stats.targetWordCount || "N/A"} target`);
  console.log(`    Headings: ${report.stats.h2Count} H2, ${report.stats.h3Count} H3`);
  console.log(`    Internal links: ${report.stats.internalLinkCount}`);
  console.log(`    FAQ questions: ${report.stats.faqCount}`);
  console.log(`    Tables: ${report.stats.tableCount}`);

  const criticals = report.issues.filter((i) => i.severity === "critical");
  const recommended = report.issues.filter((i) => i.severity === "recommended");
  const good = report.issues.filter((i) => i.severity === "good");

  if (criticals.length > 0) {
    console.log(`\n  🔴 CRITICAL (${criticals.length}):`);
    for (const i of criticals) {
      console.log(`    [${i.category}] ${i.message}${i.line ? ` (line ${i.line})` : ""}`);
    }
  }

  if (recommended.length > 0) {
    console.log(`\n  🟡 RECOMMENDED (${recommended.length}):`);
    for (const i of recommended) {
      console.log(`    [${i.category}] ${i.message}${i.line ? ` (line ${i.line})` : ""}`);
    }
  }

  if (good.length > 0) {
    console.log(`\n  🟢 GOOD (${good.length}):`);
    for (const i of good) {
      console.log(`    [${i.category}] ${i.message}`);
    }
  }

  if (report.issues.length === 0) {
    console.log(`\n  🟢 No issues found — article is in good shape.`);
  }

  console.log("");
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const fix = args.includes("--fix");
const fileArg = args.find((a) => !a.startsWith("--"));

// Build slug index for link checking
const allFiles = findMdxFiles(CONTENT_DIR);
const allSlugs = new Set<string>();
for (const f of allFiles) {
  const raw = fs.readFileSync(f, "utf-8");
  const { data } = matter(raw);
  if (data.slug && data.category) {
    allSlugs.add(`/${data.category}/${data.slug}`);
  }
}

if (fileArg) {
  const filePath = path.resolve(fileArg);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  const report = refreshArticle(filePath, allSlugs, fix);
  printReport(report);

  const criticals = report.issues.filter((i) => i.severity === "critical").length;
  if (criticals > 0) {
    console.log(`⚠️  ${criticals} critical issue(s) found.`);
  }
} else {
  console.error("Usage: npx tsx scripts/refresh-article.ts <path-to-mdx> [--fix]");
  process.exit(1);
}
