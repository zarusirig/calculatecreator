#!/usr/bin/env npx tsx
/**
 * batch-refresh.ts
 *
 * Runs refresh-article audit on all MDX articles and produces a priority-sorted report.
 *
 * Usage:
 *   npx tsx scripts/batch-refresh.ts
 *   npx tsx scripts/batch-refresh.ts --section calculators
 *   npx tsx scripts/batch-refresh.ts --min-age 60
 *   npx tsx scripts/batch-refresh.ts --priority-min 80
 *   npx tsx scripts/batch-refresh.ts --fix   (auto-fix dates)
 *   npx tsx scripts/batch-refresh.ts --csv   (output refresh-queue.csv)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content");
const TODAY = new Date().toISOString().split("T")[0];

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

interface ArticleSummary {
  filePath: string;
  slug: string;
  category: string;
  priorityScore: number;
  ageDays: number;
  wordCount: number;
  targetWordCount: number;
  internalLinks: number;
  criticalCount: number;
  recommendedCount: number;
  issues: Issue[];
}

// ---------------------------------------------------------------------------
// Helpers (same as refresh-article.ts)
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
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#|*_`>-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

// ---------------------------------------------------------------------------
// Audit a single file (lightweight version)
// ---------------------------------------------------------------------------

function auditFile(
  filePath: string,
  allSlugs: Set<string>
): ArticleSummary {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content: body } = matter(raw);

  const slug = frontmatter.slug || path.basename(filePath, ".mdx");
  const category = frontmatter.category || "";
  const priorityScore = frontmatter.priorityScore || 0;
  const targetWordCount = frontmatter.wordCount || 0;
  const articleType = frontmatter.articleType || "informative";
  const publishDate = frontmatter.publishDate || "";
  const updatedDate = frontmatter.updatedDate || null;
  const ageDays = publishDate ? daysBetween(publishDate, TODAY) : 0;

  const issues: Issue[] = [];
  const wordCount = countWords(body);

  // Date checks
  if (ageDays > 90 && !updatedDate) {
    issues.push({ severity: "critical", category: "DATE", message: `${ageDays} days old, no updatedDate` });
  } else if (ageDays > 60 && !updatedDate) {
    issues.push({ severity: "recommended", category: "DATE", message: `${ageDays} days old` });
  }

  // Stale year references
  const yearMatches = body.match(/\b20(2[0-4])\b/g);
  if (yearMatches) {
    issues.push({ severity: "critical", category: "DATE", message: `Stale year reference(s): ${[...new Set(yearMatches)].join(", ")}` });
  }

  // Word count
  if (targetWordCount > 0) {
    const ratio = wordCount / targetWordCount;
    if (ratio < 0.5) {
      issues.push({ severity: "critical", category: "WORDS", message: `${wordCount} words (${Math.round(ratio * 100)}% of ${targetWordCount})` });
    } else if (ratio < 0.8) {
      issues.push({ severity: "recommended", category: "WORDS", message: `${wordCount} words (${Math.round(ratio * 100)}% of ${targetWordCount})` });
    }
  } else if (wordCount < 300) {
    issues.push({ severity: "critical", category: "WORDS", message: `${wordCount} words — stub/placeholder` });
  }

  // Headings
  const h2Count = (body.match(/^## [^#]/gm) || []).length;
  if (h2Count === 0) {
    issues.push({ severity: "critical", category: "HEADING", message: "No H2 headings" });
  }

  // Internal links
  const linkRegex = /\[([^\]]*)\]\(\/[^)]+\)/g;
  const linkMatches = body.match(linkRegex);
  const internalLinks = linkMatches ? linkMatches.length : 0;
  if (internalLinks === 0) {
    issues.push({ severity: "critical", category: "LINK", message: "No internal links" });
  } else if (internalLinks < 2) {
    issues.push({ severity: "recommended", category: "LINK", message: `Only ${internalLinks} internal link(s)` });
  }

  // FAQ
  const faqCount = (body.match(/^###\s+.+\?$/gm) || []).length;
  if (faqCount === 0) {
    issues.push({ severity: "recommended", category: "FAQ", message: "No FAQ section" });
  }

  // Tables for data articles
  if (articleType === "data") {
    const tableLines = (body.match(/^\|.+\|$/gm) || []).length;
    if (tableLines < 2) {
      issues.push({ severity: "critical", category: "CONTENT", message: "Data article missing tables" });
    }
  }

  const criticalCount = issues.filter((i) => i.severity === "critical").length;
  const recommendedCount = issues.filter((i) => i.severity === "recommended").length;

  return {
    filePath,
    slug,
    category,
    priorityScore,
    ageDays,
    wordCount,
    targetWordCount,
    internalLinks,
    criticalCount,
    recommendedCount,
    issues,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const sectionFilter = args.find((a) => a.startsWith("--section="))?.split("=")[1] ||
  (args.includes("--section") ? args[args.indexOf("--section") + 1] : null);
const minAge = parseInt(
  args.find((a) => a.startsWith("--min-age="))?.split("=")[1] ||
    (args.includes("--min-age") ? args[args.indexOf("--min-age") + 1] : "0") ||
    "0"
);
const priorityMin = parseInt(
  args.find((a) => a.startsWith("--priority-min="))?.split("=")[1] ||
    (args.includes("--priority-min") ? args[args.indexOf("--priority-min") + 1] : "0") ||
    "0"
);
const outputCsv = args.includes("--csv");

// Build slug index
const allFiles = findMdxFiles(CONTENT_DIR);
const allSlugs = new Set<string>();
for (const f of allFiles) {
  const raw = fs.readFileSync(f, "utf-8");
  const { data } = matter(raw);
  if (data.slug && data.category) {
    allSlugs.add(`/${data.category}/${data.slug}`);
  }
}

// Audit all files
const results: ArticleSummary[] = [];

for (const f of allFiles) {
  const summary = auditFile(f, allSlugs);

  // Apply filters
  if (sectionFilter && !summary.category.startsWith(sectionFilter)) continue;
  if (minAge > 0 && summary.ageDays < minAge) continue;
  if (priorityMin > 0 && summary.priorityScore < priorityMin) continue;

  results.push(summary);
}

// Sort by refresh priority: criticals first, then by priority score descending
results.sort((a, b) => {
  if (a.criticalCount !== b.criticalCount) return b.criticalCount - a.criticalCount;
  if (a.recommendedCount !== b.recommendedCount) return b.recommendedCount - a.recommendedCount;
  return b.priorityScore - a.priorityScore;
});

// Print summary
const totalCritical = results.reduce((s, r) => s + r.criticalCount, 0);
const totalRecommended = results.reduce((s, r) => s + r.recommendedCount, 0);
const needsRefresh = results.filter((r) => r.criticalCount > 0 || r.recommendedCount > 0).length;

console.log(`\n${"=".repeat(70)}`);
console.log(`  BATCH REFRESH REPORT`);
console.log(`${"=".repeat(70)}`);
console.log(`\n  Total articles scanned: ${results.length}`);
console.log(`  Articles needing refresh: ${needsRefresh}`);
console.log(`  Critical issues: ${totalCritical}`);
console.log(`  Recommended improvements: ${totalRecommended}`);

if (sectionFilter) console.log(`  Filter: section = ${sectionFilter}`);
if (minAge > 0) console.log(`  Filter: min age = ${minAge} days`);
if (priorityMin > 0) console.log(`  Filter: min priority = ${priorityMin}`);

// Print top 30 needing refresh
const topN = results.filter((r) => r.criticalCount > 0 || r.recommendedCount > 0).slice(0, 30);
if (topN.length > 0) {
  console.log(`\n  TOP ${topN.length} ARTICLES NEEDING REFRESH:\n`);
  console.log(
    `  ${"Slug".padEnd(50)} ${"Cat".padEnd(10)} ${"Age".padStart(4)} ${"🔴".padStart(3)} ${"🟡".padStart(3)} ${"Pri".padStart(4)} ${"Words".padStart(6)}`
  );
  console.log(`  ${"-".repeat(50)} ${"-".repeat(10)} ${"-".repeat(4)} ${"-".repeat(3)} ${"-".repeat(3)} ${"-".repeat(4)} ${"-".repeat(6)}`);
  for (const r of topN) {
    console.log(
      `  ${r.slug.padEnd(50)} ${r.category.substring(0, 10).padEnd(10)} ${String(r.ageDays).padStart(4)} ${String(r.criticalCount).padStart(3)} ${String(r.recommendedCount).padStart(3)} ${String(r.priorityScore).padStart(4)} ${String(r.wordCount).padStart(6)}`
    );
  }
}

// Output CSV if requested
if (outputCsv) {
  const csvPath = path.join(PROJECT_ROOT, "refresh-queue.csv");
  const csvLines = [
    "slug,category,age_days,critical_count,recommended_count,priority_score,word_count,target_word_count,internal_links",
  ];
  for (const r of results) {
    csvLines.push(
      `${r.slug},${r.category},${r.ageDays},${r.criticalCount},${r.recommendedCount},${r.priorityScore},${r.wordCount},${r.targetWordCount},${r.internalLinks}`
    );
  }
  fs.writeFileSync(csvPath, csvLines.join("\n"), "utf-8");
  console.log(`\n  CSV written to: ${csvPath}`);
}

console.log(`\n${"=".repeat(70)}\n`);
