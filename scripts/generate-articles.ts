#!/usr/bin/env npx tsx
/**
 * Batch MDX Article Generator from CSV
 *
 * Usage:
 *   npx tsx scripts/generate-articles.ts --csv articles-month2-batch1.csv --mode scaffold
 *   npx tsx scripts/generate-articles.ts --csv articles-month2-batch1.csv --mode full
 *
 * CSV columns (same schema as articles-phase1.csv):
 *   title, slug, section, category, primaryKeyword, secondaryKeywords,
 *   parentArticle, parentCalculator, articleType, priorityScore, wordCount,
 *   macroContext, microContext
 */

import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ArticleType =
  | "informative"
  | "commercial"
  | "transactional"
  | "comparison"
  | "data";

interface CsvRow {
  title: string;
  slug: string;
  section: "core" | "outer";
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  parentArticle: string;
  parentCalculator: string;
  articleType: ArticleType;
  priorityScore: string;
  wordCount: string;
  macroContext: string;
  microContext: string;
}

interface ArticleFrontmatter {
  title: string;
  metaDescription: string;
  slug: string;
  section: "core" | "outer";
  category: string;
  macroContext: string;
  microContext: string[];
  centralEntity: "TikTok";
  primaryKeyword: string;
  secondaryKeywords: string[];
  parentArticle: string;
  childArticles: string[];
  relatedArticles: string[];
  siblingArticles: string[];
  parentCalculator?: string;
  headingVector: string[];
  articleType: ArticleType;
  priorityScore: number;
  wordCount: number;
  publishDate: string;
  author: string;
  showCalculatorCTA: boolean;
  calculatorCTAType?: string;
}

interface HeadingNode {
  level: number; // 2 or 3
  text: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const REQUIRED_CSV_FIELDS: (keyof CsvRow)[] = [
  "title",
  "slug",
  "section",
  "category",
  "primaryKeyword",
  "parentArticle",
  "articleType",
  "priorityScore",
  "wordCount",
  "macroContext",
];

const VALID_ARTICLE_TYPES: ArticleType[] = [
  "informative",
  "commercial",
  "transactional",
  "comparison",
  "data",
];

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content");

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs(): { csvPath: string; mode: "scaffold" | "full" } {
  const args = process.argv.slice(2);
  let csvFile = "";
  let mode: "scaffold" | "full" = "scaffold";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--csv" && args[i + 1]) {
      csvFile = args[i + 1];
      i++;
    } else if (args[i] === "--mode" && args[i + 1]) {
      const m = args[i + 1];
      if (m !== "scaffold" && m !== "full") {
        console.error(`Error: --mode must be "scaffold" or "full". Got "${m}".`);
        process.exit(1);
      }
      mode = m;
      i++;
    }
  }

  if (!csvFile) {
    console.error("Error: --csv <file> is required.");
    console.error(
      "Usage: npx tsx scripts/generate-articles.ts --csv <file.csv> --mode scaffold|full"
    );
    process.exit(1);
  }

  // Resolve CSV path relative to project root
  const csvPath = path.isAbsolute(csvFile)
    ? csvFile
    : path.resolve(PROJECT_ROOT, csvFile);

  if (!fs.existsSync(csvPath)) {
    console.error(`Error: CSV file not found: ${csvPath}`);
    process.exit(1);
  }

  return { csvPath, mode };
}

// ---------------------------------------------------------------------------
// CSV parsing (no external library)
// ---------------------------------------------------------------------------

/**
 * Parse a single CSV line respecting double-quoted fields.
 * Handles commas inside quoted fields and escaped double quotes ("").
 */
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  let i = 0;

  while (i < line.length) {
    const ch = line[i];

    if (inQuotes) {
      if (ch === '"') {
        // Check for escaped quote ""
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i += 2;
          continue;
        }
        // End of quoted field
        inQuotes = false;
        i++;
        continue;
      }
      current += ch;
      i++;
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
      } else if (ch === ",") {
        fields.push(current.trim());
        current = "";
        i++;
      } else {
        current += ch;
        i++;
      }
    }
  }

  // Push last field
  fields.push(current.trim());
  return fields;
}

function parseCsv(content: string): CsvRow[] {
  const lines = content
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0);

  if (lines.length < 2) {
    console.error("Error: CSV must contain a header row and at least one data row.");
    process.exit(1);
  }

  const headerFields = parseCsvLine(lines[0]);
  const headerMap = new Map<string, number>();
  headerFields.forEach((h, idx) => {
    headerMap.set(h.trim().toLowerCase(), idx);
  });

  // Map expected column names to their index
  const colMap: Record<string, number> = {};
  const expectedCols = [
    "title",
    "slug",
    "section",
    "category",
    "primarykeyword",
    "secondarykeywords",
    "parentarticle",
    "parentcalculator",
    "articletype",
    "priorityscore",
    "wordcount",
    "macrocontext",
    "microcontext",
  ];

  // Normalise header names (case-insensitive, no camelCase issues)
  const normalise = (s: string) => s.toLowerCase().replace(/[^a-z]/g, "");

  for (const col of expectedCols) {
    let found = false;
    for (const [hdr, idx] of headerMap.entries()) {
      if (normalise(hdr) === normalise(col)) {
        colMap[col] = idx;
        found = true;
        break;
      }
    }
    if (!found) {
      // secondarykeywords, parentcalculator, microcontext are optional-ish
      if (
        col === "secondarykeywords" ||
        col === "parentcalculator" ||
        col === "microcontext"
      ) {
        colMap[col] = -1; // sentinel: column missing
      } else {
        console.error(
          `Error: Required CSV column "${col}" not found in header: ${headerFields.join(", ")}`
        );
        process.exit(1);
      }
    }
  }

  const rows: CsvRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i]);
    const get = (col: string): string => {
      const idx = colMap[col];
      if (idx === undefined || idx === -1) return "";
      return (fields[idx] ?? "").trim();
    };

    rows.push({
      title: get("title"),
      slug: get("slug"),
      section: get("section") as "core" | "outer",
      category: get("category"),
      primaryKeyword: get("primarykeyword"),
      secondaryKeywords: get("secondarykeywords"),
      parentArticle: get("parentarticle"),
      parentCalculator: get("parentcalculator"),
      articleType: get("articletype") as ArticleType,
      priorityScore: get("priorityscore"),
      wordCount: get("wordcount"),
      macroContext: get("macrocontext"),
      microContext: get("microcontext"),
    });
  }

  return rows;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

function validateRow(row: CsvRow, rowIndex: number): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const field of REQUIRED_CSV_FIELDS) {
    if (!row[field] || row[field].toString().trim() === "") {
      errors.push(`Row ${rowIndex}: Missing required field "${field}".`);
    }
  }

  if (row.articleType && !VALID_ARTICLE_TYPES.includes(row.articleType)) {
    errors.push(
      `Row ${rowIndex}: Invalid articleType "${row.articleType}". Must be one of: ${VALID_ARTICLE_TYPES.join(", ")}.`
    );
  }

  if (row.section && row.section !== "core" && row.section !== "outer") {
    errors.push(
      `Row ${rowIndex}: Invalid section "${row.section}". Must be "core" or "outer".`
    );
  }

  const priority = Number(row.priorityScore);
  if (row.priorityScore && (isNaN(priority) || priority < 0 || priority > 100)) {
    warnings.push(
      `Row ${rowIndex}: priorityScore "${row.priorityScore}" looks unusual (expected 0-100).`
    );
  }

  const wc = Number(row.wordCount);
  if (row.wordCount && (isNaN(wc) || wc < 100)) {
    warnings.push(
      `Row ${rowIndex}: wordCount "${row.wordCount}" looks unusually low.`
    );
  }

  return { valid: errors.length === 0, errors, warnings };
}

// ---------------------------------------------------------------------------
// Slug conflict detection
// ---------------------------------------------------------------------------

function findExistingMdxFiles(): Set<string> {
  const slugPaths = new Set<string>();

  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        // Store relative path from content dir without extension
        const rel = path.relative(CONTENT_DIR, full).replace(/\.mdx$/, "");
        slugPaths.add(rel);
      }
    }
  }

  walk(CONTENT_DIR);
  return slugPaths;
}

// ---------------------------------------------------------------------------
// Check parent article paths exist
// ---------------------------------------------------------------------------

function parentArticleExists(parentArticle: string): boolean {
  if (!parentArticle) return true; // nothing to check

  // parentArticle is like "/calculators/tiktok-money"
  // Could be a directory (page.tsx / route) or an MDX file
  const cleaned = parentArticle.replace(/^\//, "");

  // Check if there's an MDX file
  const mdxPath = path.join(CONTENT_DIR, cleaned + ".mdx");
  if (fs.existsSync(mdxPath)) return true;

  // Check if there's a directory (calculator pages etc.)
  const dirPath = path.join(CONTENT_DIR, cleaned);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) return true;

  // Check in src/app for page routes
  const appDir = path.join(PROJECT_ROOT, "src", "app");
  const routePath = path.join(appDir, cleaned);
  if (fs.existsSync(routePath)) return true;

  // Check for page.tsx in the route
  const pagePath = path.join(routePath, "page.tsx");
  if (fs.existsSync(pagePath)) return true;

  return false;
}

// ---------------------------------------------------------------------------
// Heading generation by articleType
// ---------------------------------------------------------------------------

/**
 * Derive a clean, noun-phrase topic label from the article title.
 * Used for data/commercial/comparison heading templates where we embed
 * the topic in headings like "Key Findings", "Overview", etc.
 * Strips trailing date qualifiers ("in 2026"), em-dash suffixes, and
 * leading question prefixes.
 */
function deriveTopicPhrase(title: string): string {
  let t = title
    .replace(/\s*—\s*.+$/, "")         // strip em-dash suffix
    .replace(/\s+in\s+\d{4}$/i, "")    // strip trailing year
    .trim();

  // Strip leading question/instructional prefixes iteratively
  // so "How Much Can You Earn from" → "TikTok Shop Affiliate"
  const prefixes = [
    /^how much (?:does|do|can|is)\s+/i,
    /^how (?:to|the)\s+/i,
    /^what (?:is|are)\s+/i,
    /^why (?:does|do|is|are)\s+/i,
    /^you (?:earn|make|get|need|pay)\s+(?:from|on|with|for)?\s*/i,
    /^(?:earn|make|get|need|pay)\s+(?:from|on|with|for)?\s*/i,
  ];
  let changed = true;
  while (changed) {
    changed = false;
    for (const re of prefixes) {
      const before = t;
      t = t.replace(re, "");
      if (t !== before) changed = true;
    }
  }

  return capitaliseFirst(t.trim());
}

function generateHeadings(
  row: CsvRow,
  frontmatter: ArticleFrontmatter
): HeadingNode[] {
  const hasCalc = !!row.parentCalculator;
  const topic = deriveTopicPhrase(row.title);
  // macroContext is always a clean noun-phrase description of the topic,
  // ideal for embedding in template headings for informative articles
  const macroTopic = titleCase(row.macroContext);
  const microItems = frontmatter.microContext;

  switch (row.articleType) {
    case "informative": {
      const headings: HeadingNode[] = [
        { level: 2, text: `${macroTopic} Explained` },
        { level: 2, text: `How ${macroTopic} Works` },
      ];
      // Add H3 subtopics from microContext
      for (const mc of microItems.slice(0, 3)) {
        headings.push({ level: 3, text: capitaliseFirst(mc) });
      }
      headings.push({ level: 2, text: `${topic} Data and Numbers` });
      headings.push({ level: 2, text: "How to Improve Your Results" });
      if (hasCalc) {
        headings.push({ level: 2, text: `Calculate Your ${topic}` });
      }
      return headings;
    }

    case "data": {
      const headings: HeadingNode[] = [
        { level: 2, text: "Key Findings" },
        { level: 2, text: `${topic} — Primary Data` },
      ];
      for (const mc of microItems.slice(0, 2)) {
        headings.push({ level: 3, text: capitaliseFirst(mc) });
      }
      headings.push({ level: 2, text: `${topic} — Extended Data` });
      headings.push({ level: 2, text: "Methodology" });
      if (hasCalc) {
        headings.push({ level: 2, text: "Calculate Your Own Numbers" });
      }
      return headings;
    }

    case "comparison": {
      const headings: HeadingNode[] = [
        { level: 2, text: "Quick Comparison" },
        {
          level: 2,
          text: microItems[0]
            ? `${capitaliseFirst(microItems[0])} Deep Dive`
            : "Option A Deep Dive",
        },
        {
          level: 2,
          text: microItems[1]
            ? `${capitaliseFirst(microItems[1])} Deep Dive`
            : "Option B Deep Dive",
        },
        { level: 2, text: "Side-by-Side Analysis" },
        { level: 2, text: "Which Is Better" },
      ];
      if (hasCalc) {
        headings.push({ level: 2, text: "Use the Calculator to Compare" });
      }
      return headings;
    }

    case "commercial": {
      const headings: HeadingNode[] = [
        { level: 2, text: `${topic} Overview` },
        { level: 2, text: "Features and Benefits" },
        { level: 2, text: "Pricing" },
        { level: 2, text: "Getting Started" },
      ];
      if (hasCalc) {
        headings.push({ level: 2, text: "Calculate Your Potential" });
      }
      headings.push({ level: 2, text: "Frequently Asked Questions" });
      return headings;
    }

    case "transactional": {
      const headings: HeadingNode[] = [
        { level: 2, text: "Step-by-Step Guide" },
      ];
      // Generate step sub-headings from microContext
      for (const mc of microItems.slice(0, 4)) {
        headings.push({ level: 3, text: `Step: ${capitaliseFirst(mc)}` });
      }
      headings.push({ level: 2, text: "Requirements" });
      headings.push({ level: 2, text: "Common Issues and Troubleshooting" });
      if (hasCalc) {
        headings.push({ level: 2, text: "Calculate Your Results" });
      }
      return headings;
    }

    default:
      return [{ level: 2, text: topic }];
  }
}

function capitaliseFirst(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Title-case a phrase, preserving known acronyms/proper nouns. */
function titleCase(s: string): string {
  if (!s) return s;
  const minorWords = new Set([
    "a", "an", "the", "and", "but", "or", "for", "nor",
    "in", "on", "at", "to", "by", "of", "with", "vs", "per",
  ]);
  const preserveUpper = new Set([
    "tiktok", "rpm", "cpm", "usd", "uk", "us", "faq",
  ]);
  const properForms: Record<string, string> = {
    tiktok: "TikTok",
    rpm: "RPM",
    cpm: "CPM",
    usd: "USD",
    uk: "UK",
    us: "US",
    faq: "FAQ",
  };

  return s
    .split(/\s+/)
    .map((word, idx) => {
      const lower = word.toLowerCase();
      if (properForms[lower]) return properForms[lower];
      if (idx === 0) return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      if (minorWords.has(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// ---------------------------------------------------------------------------
// Frontmatter generation
// ---------------------------------------------------------------------------

function buildFrontmatter(row: CsvRow): ArticleFrontmatter {
  const microContext = splitSemicolon(row.microContext);
  const secondaryKeywords = splitSemicolon(row.secondaryKeywords);
  const hasCalc = !!row.parentCalculator;
  const today = getTodayDate();

  // Auto-generate metaDescription
  let metaDesc = `${row.title}. ${capitaliseFirst(row.primaryKeyword)} with data, benchmarks, and expert analysis.`;
  if (metaDesc.length > 160) {
    metaDesc = metaDesc.slice(0, 157) + "...";
  }

  // Derive calculatorCTAType from parentCalculator path
  let calculatorCTAType: string | undefined;
  if (hasCalc) {
    const segments = row.parentCalculator.replace(/^\//, "").split("/");
    calculatorCTAType = segments[segments.length - 1];
  }

  const fm: ArticleFrontmatter = {
    title: row.title,
    metaDescription: metaDesc,
    slug: row.slug,
    section: row.section,
    category: row.category,
    macroContext: row.macroContext,
    microContext,
    centralEntity: "TikTok",
    primaryKeyword: row.primaryKeyword,
    secondaryKeywords,
    parentArticle: row.parentArticle,
    childArticles: [],
    relatedArticles: [],
    siblingArticles: [],
    parentCalculator: hasCalc ? row.parentCalculator : undefined,
    headingVector: [], // filled below
    articleType: row.articleType,
    priorityScore: Number(row.priorityScore) || 0,
    wordCount: Number(row.wordCount) || 2000,
    publishDate: today,
    author: "TT Calculator Team",
    showCalculatorCTA: hasCalc,
    calculatorCTAType: hasCalc ? calculatorCTAType : undefined,
  };

  // Generate headings and build headingVector
  const headings = generateHeadings(row, fm);
  fm.headingVector = headings.map((h) => `H${h.level}: ${h.text}`);

  return fm;
}

function splitSemicolon(value: string): string[] {
  if (!value) return [];
  return value
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function getTodayDate(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// ---------------------------------------------------------------------------
// YAML serialisation (no external library)
// ---------------------------------------------------------------------------

function yamlString(value: string): string {
  // Use double quotes if value contains special YAML chars
  if (
    value.includes(":") ||
    value.includes("#") ||
    value.includes('"') ||
    value.includes("'") ||
    value.includes("\n") ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes("[") ||
    value.includes("]") ||
    value.includes(",") ||
    value.includes("&") ||
    value.includes("*") ||
    value.includes("!") ||
    value.includes("|") ||
    value.includes(">") ||
    value.includes("%") ||
    value.includes("@") ||
    value.includes("`") ||
    value.startsWith(" ") ||
    value.endsWith(" ") ||
    /^\d/.test(value) ||
    value === "true" ||
    value === "false" ||
    value === "null" ||
    value === ""
  ) {
    // Escape internal double quotes and backslashes
    const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `"${escaped}"`;
  }
  return `"${value}"`;
}

function yamlStringArray(arr: string[]): string {
  if (arr.length === 0) return "[]";
  return (
    "\n" +
    arr.map((item) => `  - ${yamlString(item)}`).join("\n")
  );
}

function frontmatterToYaml(fm: ArticleFrontmatter): string {
  const lines: string[] = [];

  lines.push(`title: ${yamlString(fm.title)}`);
  lines.push(`metaDescription: ${yamlString(fm.metaDescription)}`);
  lines.push(`slug: ${yamlString(fm.slug)}`);
  lines.push(`section: ${yamlString(fm.section)}`);
  lines.push(`category: ${yamlString(fm.category)}`);
  lines.push(`macroContext: ${yamlString(fm.macroContext)}`);
  lines.push(`microContext: ${yamlStringArray(fm.microContext)}`);
  lines.push(`centralEntity: ${yamlString(fm.centralEntity)}`);
  lines.push(`primaryKeyword: ${yamlString(fm.primaryKeyword)}`);
  lines.push(`secondaryKeywords: ${yamlStringArray(fm.secondaryKeywords)}`);
  lines.push(`parentArticle: ${yamlString(fm.parentArticle)}`);
  lines.push(`childArticles: ${yamlStringArray(fm.childArticles)}`);
  lines.push(`relatedArticles: ${yamlStringArray(fm.relatedArticles)}`);
  lines.push(`siblingArticles: ${yamlStringArray(fm.siblingArticles)}`);
  if (fm.parentCalculator) {
    lines.push(`parentCalculator: ${yamlString(fm.parentCalculator)}`);
  }
  lines.push(`headingVector: ${yamlStringArray(fm.headingVector)}`);
  lines.push(`articleType: ${yamlString(fm.articleType)}`);
  lines.push(`priorityScore: ${fm.priorityScore}`);
  lines.push(`wordCount: ${fm.wordCount}`);
  lines.push(`publishDate: ${yamlString(fm.publishDate)}`);
  lines.push(`author: ${yamlString(fm.author)}`);
  lines.push(`showCalculatorCTA: ${fm.showCalculatorCTA}`);
  if (fm.calculatorCTAType) {
    lines.push(`calculatorCTAType: ${yamlString(fm.calculatorCTAType)}`);
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Content generation — Scaffold mode
// ---------------------------------------------------------------------------

function generateScaffoldContent(
  fm: ArticleFrontmatter,
  row: CsvRow
): string {
  const headings = generateHeadings(row, fm);
  const numSections = headings.filter((h) => h.level === 2).length;
  const wordsPerSection = Math.round(fm.wordCount / Math.max(numSections, 1));

  const bodyLines: string[] = [];

  for (const heading of headings) {
    const prefix = heading.level === 2 ? "##" : "###";
    bodyLines.push("");
    bodyLines.push(`${prefix} ${heading.text}`);
    bodyLines.push("");
    bodyLines.push(
      `[Content about ${heading.text.toLowerCase()} — covering ${fm.macroContext.toLowerCase()}. Target: ${wordsPerSection} words.]`
    );
  }

  return bodyLines.join("\n");
}

// ---------------------------------------------------------------------------
// Content generation — Full mode (Koray brief methodology)
// ---------------------------------------------------------------------------

function generateFullContent(
  fm: ArticleFrontmatter,
  row: CsvRow
): string {
  const headings = generateHeadings(row, fm);
  const numSections = headings.filter((h) => h.level === 2).length;
  const wordsPerSection = Math.round(fm.wordCount / Math.max(numSections, 1));

  // Calculate main vs supplementary content split
  const mainWordsPerSection = Math.round(wordsPerSection * 0.75);
  const suppWordsPerSection = Math.round(wordsPerSection * 0.25);

  const bodyLines: string[] = [];

  // Abstractive summary introduction (2-3 sentences)
  bodyLines.push("");
  bodyLines.push(
    `${fm.macroContext} is a critical topic for TikTok creators who want to understand their earning potential. This guide covers ${fm.primaryKeyword} with current data, actionable benchmarks, and analysis drawn from real creator earnings in ${new Date().getFullYear()}.`
  );

  let sectionIdx = 0;

  for (const heading of headings) {
    const prefix = heading.level === 2 ? "##" : "###";
    bodyLines.push("");
    bodyLines.push(`${prefix} ${heading.text}`);
    bodyLines.push("");

    if (sectionIdx === 0 && heading.level === 2) {
      // Definitive answer in first H2
      bodyLines.push(
        `[DEFINITIVE ANSWER: Provide the direct, factual answer to "${fm.primaryKeyword}" in the first 1-2 sentences. No hedging. State the number, range, or fact immediately.]`
      );
      bodyLines.push("");
      bodyLines.push(
        `[MAIN CONTENT (${mainWordsPerSection} words): Expand on the definitive answer with data, context, and evidence. Cover ${fm.macroContext.toLowerCase()}. Use direct, authoritative tone. No filler.]`
      );
      if (fm.microContext.length > 0) {
        bodyLines.push("");
        bodyLines.push(
          `[SUPPLEMENTARY (${suppWordsPerSection} words): Bridge to related topics — ${fm.microContext.join(", ")}.]`
        );
      }
    } else if (heading.level === 2) {
      // Determine if this is a main content section or supplementary
      const isSupplementary = sectionIdx >= Math.ceil(numSections * 0.7);
      if (isSupplementary && fm.microContext.length > 0) {
        const microTopic =
          fm.microContext[sectionIdx % fm.microContext.length];
        bodyLines.push(
          `[SUPPLEMENTARY CONTENT (${suppWordsPerSection} words): Cover "${microTopic}" as a bridge topic. Connect back to ${fm.macroContext.toLowerCase()}. Direct, authoritative tone.]`
        );
      } else {
        bodyLines.push(
          `[MAIN CONTENT (${mainWordsPerSection} words): Cover ${heading.text.toLowerCase()} in depth. Relate to ${fm.macroContext.toLowerCase()}. Include data points, examples, or benchmarks where relevant. Direct, authoritative tone.]`
        );
      }
    } else {
      // H3
      bodyLines.push(
        `[SUBSECTION (${Math.round(wordsPerSection / 3)} words): Detail "${heading.text.toLowerCase()}" with specific data or actionable information. Maintain authoritative tone.]`
      );
    }

    sectionIdx++;
  }

  return bodyLines.join("\n");
}

// ---------------------------------------------------------------------------
// MDX file assembly
// ---------------------------------------------------------------------------

function assembleMdx(
  fm: ArticleFrontmatter,
  row: CsvRow,
  mode: "scaffold" | "full"
): string {
  const yaml = frontmatterToYaml(fm);
  const body =
    mode === "scaffold"
      ? generateScaffoldContent(fm, row)
      : generateFullContent(fm, row);

  return `---\n${yaml}\n---\n${body}\n`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const { csvPath, mode } = parseArgs();

  console.log(`\n=== MDX Article Generator ===`);
  console.log(`CSV:  ${csvPath}`);
  console.log(`Mode: ${mode}`);
  console.log(`Date: ${getTodayDate()}`);
  console.log(`Content dir: ${CONTENT_DIR}\n`);

  // Parse CSV
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCsv(csvContent);
  console.log(`Parsed ${rows.length} rows from CSV.\n`);

  // Discover existing files for conflict detection
  const existingSlugs = findExistingMdxFiles();

  // Track results
  const created: string[] = [];
  const skipped: string[] = [];
  const allErrors: string[] = [];
  const allWarnings: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowNum = i + 2; // 1-indexed, +1 for header

    // Validate
    const validation = validateRow(row, rowNum);
    allErrors.push(...validation.errors);
    allWarnings.push(...validation.warnings);

    if (!validation.valid) {
      skipped.push(`Row ${rowNum} (${row.slug || "no-slug"}): validation errors`);
      continue;
    }

    // Check slug conflict
    const targetRelPath = `${row.category}/${row.slug}`;
    if (existingSlugs.has(targetRelPath)) {
      skipped.push(
        `${targetRelPath}.mdx: already exists, skipping`
      );
      continue;
    }

    // Check parentArticle exists
    if (row.parentArticle && !parentArticleExists(row.parentArticle)) {
      allWarnings.push(
        `Row ${rowNum}: parentArticle "${row.parentArticle}" path not found in content/ or src/app/.`
      );
    }

    // Build frontmatter and content
    const fm = buildFrontmatter(row);
    const mdxContent = assembleMdx(fm, row, mode);

    // Create directory if needed
    const targetDir = path.join(CONTENT_DIR, row.category);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`  Created directory: ${path.relative(PROJECT_ROOT, targetDir)}/`);
    }

    // Write file
    const targetFile = path.join(targetDir, `${row.slug}.mdx`);
    fs.writeFileSync(targetFile, mdxContent, "utf-8");
    created.push(path.relative(PROJECT_ROOT, targetFile));

    // Mark as existing to prevent duplicates within same batch
    existingSlugs.add(targetRelPath);
  }

  // ---------------------------------------------------------------------------
  // Report
  // ---------------------------------------------------------------------------
  console.log(`\n=== Generation Report ===\n`);

  if (created.length > 0) {
    console.log(`CREATED (${created.length}):`);
    for (const f of created) {
      console.log(`  + ${f}`);
    }
  }

  if (skipped.length > 0) {
    console.log(`\nSKIPPED (${skipped.length}):`);
    for (const s of skipped) {
      console.log(`  - ${s}`);
    }
  }

  if (allWarnings.length > 0) {
    console.log(`\nWARNINGS (${allWarnings.length}):`);
    for (const w of allWarnings) {
      console.log(`  ! ${w}`);
    }
  }

  if (allErrors.length > 0) {
    console.log(`\nERRORS (${allErrors.length}):`);
    for (const e of allErrors) {
      console.log(`  X ${e}`);
    }
  }

  console.log(
    `\nSummary: ${created.length} created, ${skipped.length} skipped, ${allWarnings.length} warnings, ${allErrors.length} errors.\n`
  );

  // Exit with error code if there were any errors
  if (allErrors.length > 0) {
    process.exit(1);
  }
}

main();
