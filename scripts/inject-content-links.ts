#!/usr/bin/env npx tsx
/**
 * inject-content-links.ts
 *
 * Analyzes MDX articles to check whether links declared in frontmatter
 * (parentArticle, relatedArticles, siblingArticles, parentCalculator)
 * are actually present as markdown links in the content body.
 *
 * Usage:
 *   npx tsx scripts/inject-content-links.ts                           # all MDX files
 *   npx tsx scripts/inject-content-links.ts content/guides/foo.mdx    # single file
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface LinkCheck {
  field: string;
  targetPath: string;
  found: boolean;
  line: number | null; // 1-based line number where found, or null
}

interface ArticleReport {
  filePath: string;
  checks: LinkCheck[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Recursively find all .mdx files under a directory */
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

/** Ensure a value is an array of strings */
function asArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.filter((v): v is string => typeof v === "string");
  return [];
}

/** Ensure a value is a string or empty */
function asString(val: unknown): string {
  return typeof val === "string" ? val : "";
}

/**
 * Search the content body for a markdown link containing the given path.
 * A link is "found" if the content contains the path string (with or without trailing slash).
 * Returns the 1-based line number of the first match, or null if not found.
 *
 * We search for the path appearing inside a markdown link context, i.e.
 * either `](path)` or `](path/)` patterns, but also accept raw occurrences
 * of the path in the body since some MDX files use JSX components with href props.
 */
function findLinkInContent(
  contentLines: string[],
  targetPath: string
): { found: boolean; line: number | null } {
  // Normalize: strip trailing slash for matching
  const normalized = targetPath.replace(/\/+$/, "");

  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];
    // Check if the line contains the path (with or without trailing slash)
    if (line.includes(normalized) || line.includes(normalized + "/")) {
      return { found: true, line: i + 1 };
    }
  }

  return { found: false, line: null };
}

// ---------------------------------------------------------------------------
// Analyze a single file
// ---------------------------------------------------------------------------

function analyzeFile(filePath: string): ArticleReport {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentLines = content.split("\n");

  const checks: LinkCheck[] = [];

  // Helper to check a single link target for a given field name
  function checkLink(field: string, targetPath: string): void {
    if (!targetPath || targetPath.trim() === "") return;
    const result = findLinkInContent(contentLines, targetPath);
    checks.push({
      field,
      targetPath,
      found: result.found,
      line: result.line,
    });
  }

  // parentArticle (single string)
  const parentArticle = asString(data.parentArticle);
  if (parentArticle) {
    checkLink("parentArticle", parentArticle);
  }

  // parentCalculator (single string)
  const parentCalculator = asString(data.parentCalculator);
  if (parentCalculator) {
    checkLink("parentCalculator", parentCalculator);
  }

  // relatedArticles (array)
  for (const rel of asArray(data.relatedArticles)) {
    checkLink("relatedArticle", rel);
  }

  // siblingArticles (array)
  for (const sib of asArray(data.siblingArticles)) {
    checkLink("siblingArticle", sib);
  }

  // childArticles (array) — also worth checking
  for (const child of asArray(data.childArticles)) {
    checkLink("childArticle", child);
  }

  return { filePath, checks };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  // Determine which files to analyze
  const targetArg = process.argv[2];
  let filesToAnalyze: string[];

  if (targetArg && !targetArg.startsWith("--")) {
    // Single file provided
    const resolved = path.isAbsolute(targetArg)
      ? targetArg
      : path.resolve(PROJECT_ROOT, targetArg);

    if (!fs.existsSync(resolved)) {
      console.error(`Error: File not found: ${resolved}`);
      process.exit(1);
    }
    filesToAnalyze = [resolved];
  } else {
    // All MDX files
    filesToAnalyze = findMdxFiles(CONTENT_DIR);
  }

  console.log("=".repeat(70));
  console.log("  inject-content-links — Frontmatter Link Audit");
  console.log("=".repeat(70));
  console.log();

  let totalArticles = 0;
  let totalLinks = 0;
  let totalMissing = 0;
  let articlesWithMissing = 0;

  for (const filePath of filesToAnalyze) {
    const report = analyzeFile(filePath);

    // Skip files with no frontmatter links to check
    if (report.checks.length === 0) continue;

    totalArticles++;
    const relPath = path.relative(PROJECT_ROOT, filePath);
    const hasMissing = report.checks.some((c) => !c.found);

    console.log(`Analyzing: ${relPath}`);
    console.log();

    let fileMissing = 0;

    for (const check of report.checks) {
      totalLinks++;
      if (check.found) {
        console.log(
          `  OK      ${check.field.padEnd(20)} ${check.targetPath} — linked in content (line ${check.line})`
        );
      } else {
        totalMissing++;
        fileMissing++;
        console.log(
          `  MISSING ${check.field.padEnd(20)} ${check.targetPath} — NOT in content body`
        );
      }
    }

    if (fileMissing > 0) {
      articlesWithMissing++;
    }

    console.log();
  }

  // Summary
  console.log("=".repeat(70));
  console.log("  Summary");
  console.log("=".repeat(70));
  console.log();
  console.log(`  Articles analyzed:          ${totalArticles}`);
  console.log(`  Total links checked:        ${totalLinks}`);
  console.log(`  Links found in content:     ${totalLinks - totalMissing}`);
  console.log(`  Links MISSING from content: ${totalMissing}`);
  console.log(`  Articles with missing links: ${articlesWithMissing}`);
  console.log();

  if (totalMissing > 0) {
    console.log(
      "  Tip: Add markdown links to your content body for each MISSING link above."
    );
    console.log(
      '  Example: [Related Topic](/calculators/rpm) or see the [parent guide](/guides/monetization).'
    );
    console.log();
  }
}

main();
