#!/usr/bin/env npx tsx
/**
 * fix-bidirectional-links.ts
 *
 * Reads all MDX files in content/, checks bidirectional link consistency,
 * and fixes missing reciprocal links.
 *
 * Usage: npx tsx scripts/fix-bidirectional-links.ts [--dry-run]
 *
 * Rules:
 *   - If A lists B in childArticles, but B doesn't list A as parentArticle → set B's parentArticle to A
 *   - If A lists B in relatedArticles, but B doesn't list A in relatedArticles → add A to B's relatedArticles
 *   - If A lists B in siblingArticles, but B doesn't list A in siblingArticles → add A to B's siblingArticles
 *
 * Safety: NEVER removes existing links. Only ADDS missing reciprocal links.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.resolve(__dirname, "..", "content");
const DRY_RUN = process.argv.includes("--dry-run");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ArticleEntry {
  /** Canonical path, e.g. "/calculators/tiktok-money/tiktok-pay-per-1000-views" */
  articlePath: string;
  /** Absolute file-system path */
  filePath: string;
  /** Parsed gray-matter data */
  data: Record<string, any>;
  /** Markdown content (body) */
  content: string;
}

interface Change {
  file: string;
  articlePath: string;
  field: string;
  action: string;
  value: string;
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

/** Derive the canonical article path from an MDX file path relative to content/ */
function deriveArticlePath(filePath: string): string {
  const rel = path.relative(CONTENT_DIR, filePath);
  // e.g. "calculators/tiktok-money/tiktok-pay-per-1000-views.mdx" → "/calculators/tiktok-money/tiktok-pay-per-1000-views"
  const withoutExt = rel.replace(/\.mdx$/, "");
  return "/" + withoutExt;
}

/** Normalize a link path for comparison (strip trailing slash, lowercase) */
function normalizePath(p: string): string {
  return p.replace(/\/+$/, "").toLowerCase();
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

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  console.log("=".repeat(70));
  console.log("  fix-bidirectional-links");
  console.log(`  Mode: ${DRY_RUN ? "DRY RUN (no files will be written)" : "LIVE (files will be updated)"}`);
  console.log("=".repeat(70));
  console.log();

  // 1. Build article map
  const mdxFiles = findMdxFiles(CONTENT_DIR);
  console.log(`Found ${mdxFiles.length} MDX files in ${CONTENT_DIR}\n`);

  const articleMap = new Map<string, ArticleEntry>();

  for (const filePath of mdxFiles) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const articlePath = deriveArticlePath(filePath);
    articleMap.set(normalizePath(articlePath), {
      articlePath,
      filePath,
      data,
      content,
    });
  }

  // 2. Collect all required changes
  const changes: Change[] = [];

  // Track which articles need which modifications so we batch them
  // Key: normalized target article path → list of mutations
  const mutations = new Map<
    string,
    {
      setParentArticle?: string;
      addRelated: string[];
      addSibling: string[];
    }
  >();

  function ensureMutation(normalizedPath: string) {
    if (!mutations.has(normalizedPath)) {
      mutations.set(normalizedPath, { addRelated: [], addSibling: [] });
    }
    return mutations.get(normalizedPath)!;
  }

  for (const [normalizedA, entryA] of articleMap) {
    const dataA = entryA.data;

    // --- childArticles → parentArticle ---
    const children = asArray(dataA.childArticles);
    for (const childPath of children) {
      const normalizedChild = normalizePath(childPath);
      const childEntry = articleMap.get(normalizedChild);
      if (!childEntry) {
        // Target article doesn't exist in content/ — skip
        continue;
      }
      const existingParent = normalizePath(asString(childEntry.data.parentArticle));
      if (existingParent !== normalizedA) {
        // B doesn't list A as parentArticle
        const mut = ensureMutation(normalizedChild);
        // Only set if not already being set by another parent (first wins to be safe)
        if (!mut.setParentArticle) {
          mut.setParentArticle = entryA.articlePath;
          changes.push({
            file: childEntry.filePath,
            articlePath: childEntry.articlePath,
            field: "parentArticle",
            action: "SET",
            value: entryA.articlePath,
          });
        }
      }
    }

    // --- relatedArticles → relatedArticles (reciprocal) ---
    const related = asArray(dataA.relatedArticles);
    for (const relPath of related) {
      const normalizedRel = normalizePath(relPath);
      const relEntry = articleMap.get(normalizedRel);
      if (!relEntry) continue;

      const relRelated = asArray(relEntry.data.relatedArticles).map(normalizePath);
      if (!relRelated.includes(normalizedA)) {
        const mut = ensureMutation(normalizedRel);
        // Avoid duplicates in our own mutation list
        if (!mut.addRelated.map(normalizePath).includes(normalizedA)) {
          mut.addRelated.push(entryA.articlePath);
          changes.push({
            file: relEntry.filePath,
            articlePath: relEntry.articlePath,
            field: "relatedArticles",
            action: "ADD",
            value: entryA.articlePath,
          });
        }
      }
    }

    // --- siblingArticles → siblingArticles (reciprocal) ---
    const siblings = asArray(dataA.siblingArticles);
    for (const sibPath of siblings) {
      const normalizedSib = normalizePath(sibPath);
      const sibEntry = articleMap.get(normalizedSib);
      if (!sibEntry) continue;

      const sibSiblings = asArray(sibEntry.data.siblingArticles).map(normalizePath);
      if (!sibSiblings.includes(normalizedA)) {
        const mut = ensureMutation(normalizedSib);
        if (!mut.addSibling.map(normalizePath).includes(normalizedA)) {
          mut.addSibling.push(entryA.articlePath);
          changes.push({
            file: sibEntry.filePath,
            articlePath: sibEntry.articlePath,
            field: "siblingArticles",
            action: "ADD",
            value: entryA.articlePath,
          });
        }
      }
    }
  }

  // 3. Report changes
  if (changes.length === 0) {
    console.log("All bidirectional links are consistent. No changes needed.\n");
    return;
  }

  console.log(`Found ${changes.length} missing reciprocal link(s):\n`);

  for (const c of changes) {
    const relFile = path.relative(CONTENT_DIR, c.file);
    console.log(`  ${c.action.padEnd(4)} ${c.field.padEnd(18)} on ${relFile}`);
    console.log(`       → ${c.value}`);
  }
  console.log();

  // 4. Apply changes (unless dry-run)
  if (DRY_RUN) {
    console.log("DRY RUN — no files were modified.\n");
    return;
  }

  let filesWritten = 0;

  for (const [normalizedTarget, mut] of mutations) {
    const entry = articleMap.get(normalizedTarget);
    if (!entry) continue;

    // Re-read the file fresh to avoid stale data issues
    const raw = fs.readFileSync(entry.filePath, "utf-8");
    const parsed = matter(raw);

    let modified = false;

    // Apply parentArticle
    if (mut.setParentArticle) {
      parsed.data.parentArticle = mut.setParentArticle;
      modified = true;
    }

    // Apply relatedArticles additions
    if (mut.addRelated.length > 0) {
      const existing = asArray(parsed.data.relatedArticles);
      for (const toAdd of mut.addRelated) {
        if (!existing.map(normalizePath).includes(normalizePath(toAdd))) {
          existing.push(toAdd);
        }
      }
      parsed.data.relatedArticles = existing;
      modified = true;
    }

    // Apply siblingArticles additions
    if (mut.addSibling.length > 0) {
      const existing = asArray(parsed.data.siblingArticles);
      for (const toAdd of mut.addSibling) {
        if (!existing.map(normalizePath).includes(normalizePath(toAdd))) {
          existing.push(toAdd);
        }
      }
      parsed.data.siblingArticles = existing;
      modified = true;
    }

    if (modified) {
      const output = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(entry.filePath, output, "utf-8");
      filesWritten++;
      const relFile = path.relative(CONTENT_DIR, entry.filePath);
      console.log(`  UPDATED: ${relFile}`);
    }
  }

  console.log();
  console.log(`Done. ${filesWritten} file(s) updated, ${changes.length} link(s) fixed.`);
  console.log();
}

main();
