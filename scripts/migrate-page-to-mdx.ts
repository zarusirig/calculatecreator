#!/usr/bin/env npx tsx
/**
 * migrate-page-to-mdx.ts
 *
 * Converts an existing Next.js page.tsx to MDX format (best-effort).
 * Anything it can't convert cleanly is flagged with <!-- MANUAL_REVIEW --> comments.
 *
 * Usage:
 *   npx tsx scripts/migrate-page-to-mdx.ts src/app/guides/tiktok-creator-fund/page.tsx
 *
 * Steps:
 *   1. Read the page.tsx file
 *   2. Extract metadata (title, description, keywords, canonical)
 *   3. Extract JSX content from the return statement
 *   4. Convert JSX to markdown
 *   5. Generate frontmatter
 *   6. Write MDX to content/{category}/{slug}.mdx
 *   7. Report results (does NOT delete original)
 */

import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content");
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Extract the metadata block from the page.tsx source.
 */
function extractMetadata(source: string): {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
} {
  const result = {
    title: "",
    description: "",
    keywords: [] as string[],
    canonical: "",
  };

  // Try to capture the metadata object — find `export const metadata: Metadata = {`
  // and grab everything until the matching closing `};`
  const metaMatch = source.match(
    /export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{([\s\S]*?)\n\};/
  );
  if (!metaMatch) return result;

  const metaBlock = metaMatch[1];

  // title
  const titleMatch = metaBlock.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) result.title = titleMatch[1];

  // description
  const descMatch = metaBlock.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) result.description = descMatch[1];

  // keywords array
  const kwMatch = metaBlock.match(/keywords:\s*\[([\s\S]*?)\]/);
  if (kwMatch) {
    const kwString = kwMatch[1];
    result.keywords = kwString
      .split(",")
      .map((kw) => kw.trim().replace(/^['"`]|['"`]$/g, ""))
      .filter((kw) => kw.length > 0);
  }

  // canonical
  const canonicalMatch = metaBlock.match(
    /canonical:\s*['"`](https?:\/\/[^'"`]+)['"`]/
  );
  if (canonicalMatch) result.canonical = canonicalMatch[1];

  return result;
}

/**
 * Derive slug and category from the file path or canonical URL.
 */
function deriveSlugAndCategory(
  filePath: string,
  canonical: string
): { slug: string; category: string; urlPath: string } {
  // Prefer canonical URL for deriving paths
  if (canonical) {
    try {
      const url = new URL(canonical);
      const pathParts = url.pathname
        .replace(/^\/|\/$/g, "")
        .split("/");
      const slug = pathParts[pathParts.length - 1];
      const category = pathParts.slice(0, -1).join("/");
      return { slug, category, urlPath: "/" + pathParts.join("/") };
    } catch {
      // fall through
    }
  }

  // Fallback: derive from file system path
  // e.g. src/app/guides/tiktok-creator-fund/page.tsx
  const relPath = path.relative(path.join(PROJECT_ROOT, "src/app"), filePath);
  const parts = relPath.replace(/\/page\.tsx$/, "").split("/");
  const slug = parts[parts.length - 1];
  const category = parts.slice(0, -1).join("/");
  return { slug, category, urlPath: "/" + parts.join("/") };
}

/**
 * Extract the JSX content from the return statement.
 * We look for the return ( ... ) block inside the default export function.
 */
function extractJSXContent(source: string): string {
  // Find the return statement — match `return (` and then capture until the
  // balancing `)` at the same indent level. We use a bracket counter approach.
  const returnIdx = source.indexOf("return (");
  if (returnIdx === -1) {
    // Try return (<
    const altIdx = source.indexOf("return(");
    if (altIdx === -1) return "";
    return extractBracketContent(source, altIdx + "return".length);
  }
  return extractBracketContent(source, returnIdx + "return ".length);
}

function extractBracketContent(source: string, startParen: number): string {
  let depth = 0;
  let start = -1;
  for (let i = startParen; i < source.length; i++) {
    if (source[i] === "(") {
      if (depth === 0) start = i + 1;
      depth++;
    } else if (source[i] === ")") {
      depth--;
      if (depth === 0) {
        return source.slice(start, i);
      }
    }
  }
  return source.slice(start);
}

// ---------------------------------------------------------------------------
// JSX → Markdown conversion
// ---------------------------------------------------------------------------

/**
 * Convert JSX/HTML-like content to markdown. This is best-effort.
 */
function convertJSXToMarkdown(jsx: string): { markdown: string; manualReviewItems: string[] } {
  const manualReviewItems: string[] = [];
  let md = jsx;

  // ---- Remove React fragments ----
  md = md.replace(/<>|<\/>|<React\.Fragment>|<\/React\.Fragment>/g, "");

  // ---- Strip comments ----
  md = md.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

  // ---- Handle FAQSection component ----
  const faqRegex = /<FAQSection[\s\S]*?\/>/g;
  const faqMatches = md.match(faqRegex);
  if (faqMatches) {
    for (const faqMatch of faqMatches) {
      // Try to extract FAQ items
      let faqMd = "\n## Frequently Asked Questions\n\n";
      const faqItemRegex = /question:\s*['"`]([^'"`]+)['"`][\s\S]*?answer:\s*['"`]([\s\S]*?)['"`]\s*[,}]/g;
      let faqItem;
      let faqCount = 0;
      while ((faqItem = faqItemRegex.exec(faqMatch)) !== null) {
        faqCount++;
        const question = faqItem[1].replace(/\\'/g, "'");
        const answer = faqItem[2].replace(/\\'/g, "'").replace(/\\n/g, "\n");
        faqMd += `### ${question}\n\n${answer}\n\n`;
      }
      if (faqCount > 0) {
        md = md.replace(faqMatch, faqMd);
      } else {
        manualReviewItems.push("FAQSection");
        md = md.replace(faqMatch, "\n<!-- MANUAL_REVIEW: FAQSection component -->\n");
      }
    }
  }

  // ---- Handle ArticleSchema and other SEO components — remove ----
  md = md.replace(/<ArticleSchema[\s\S]*?\/>/g, "");

  // ---- Handle PageAuthorByline and PageEEAT — remove (handled by MDX layout) ----
  md = md.replace(/<PageAuthorByline[\s\S]*?\/>/g, "");
  md = md.replace(/<PageEEAT[\s\S]*?\/>/g, "");

  // ---- Handle complex components: Card, custom components → MANUAL_REVIEW ----
  // First, try to extract content from Card components
  md = md.replace(/<Card[^>]*>([\s\S]*?)<\/Card>/g, (_match, inner) => {
    return inner;
  });

  // ---- Handle known interactive/complex components ----
  const complexComponents = [
    "Calculator",
    "InteractiveChart",
    "DataTable",
    "EmbedVideo",
    "Widget",
    "Chart",
    "Tabs",
    "TabPanel",
  ];
  for (const comp of complexComponents) {
    const selfClosingRegex = new RegExp(`<${comp}[^>]*\\/>`, "g");
    const openCloseRegex = new RegExp(
      `<${comp}[^>]*>[\\s\\S]*?<\\/${comp}>`,
      "g"
    );
    if (selfClosingRegex.test(md) || openCloseRegex.test(md)) {
      manualReviewItems.push(comp);
    }
    md = md.replace(selfClosingRegex, `\n<!-- MANUAL_REVIEW: ${comp} component -->\n`);
    md = md.replace(openCloseRegex, `\n<!-- MANUAL_REVIEW: ${comp} component -->\n`);
  }

  // ---- Handle Lucide icon components — strip them ----
  // e.g. <DollarSign className="w-5 h-5" /> → remove
  md = md.replace(/<[A-Z][a-zA-Z0-9]*\s+className="[^"]*"[^>]*\/>/g, "");

  // ---- Handle <Link href="url">text</Link> → [text](url) ----
  // Multi-line Link tags with inner content
  md = md.replace(
    /<Link\s+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/Link>/g,
    (_match, href, innerContent) => {
      // Clean inner content: strip nested JSX tags, trim
      let clean = innerContent
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();
      if (!clean) clean = href;
      return `[${clean}](${href})`;
    }
  );

  // ---- Handle <a href="url">text</a> → [text](url) ----
  md = md.replace(
    /<a\s+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/g,
    (_match, href, text) => {
      const clean = text.replace(/<[^>]+>/g, "").trim();
      return `[${clean}](${href})`;
    }
  );

  // ---- Handle headings ----
  // <h1 ...>text</h1> → # text
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, (_m, text) => {
    const clean = text.replace(/<[^>]+>/g, "").trim();
    return `# ${clean}`;
  });
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_m, text) => {
    const clean = text.replace(/<[^>]+>/g, "").trim();
    return `\n## ${clean}`;
  });
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_m, text) => {
    const clean = text.replace(/<[^>]+>/g, "").trim();
    return `\n### ${clean}`;
  });
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, (_m, text) => {
    const clean = text.replace(/<[^>]+>/g, "").trim();
    return `\n#### ${clean}`;
  });

  // ---- Handle <strong>text</strong> → **text** ----
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, "**$1**");

  // ---- Handle <em>text</em> → *text* ----
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/g, "*$1*");

  // ---- Handle lists ----
  // <li>• text</li> or <li>text</li> → - text
  md = md.replace(/<li[^>]*>\s*•?\s*([\s\S]*?)<\/li>/g, (_m, text) => {
    const clean = text.replace(/<[^>]+>/g, "").trim();
    return `- ${clean}`;
  });
  // Remove <ul>, </ul>, <ol>, </ol> wrapper tags
  md = md.replace(/<\/?ul[^>]*>/g, "");
  md = md.replace(/<\/?ol[^>]*>/g, "");

  // ---- Handle <p>text</p> → text\n ----
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (_m, text) => {
    return `${text.trim()}\n`;
  });

  // ---- Handle <br /> and <br> ----
  md = md.replace(/<br\s*\/?>/g, "\n");

  // ---- Handle <table> — convert to markdown table ----
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/g;
  let tableMatch;
  while ((tableMatch = tableRegex.exec(md)) !== null) {
    const tableHtml = tableMatch[0];
    const tableMd = convertTableToMarkdown(tableMatch[1]);
    if (tableMd) {
      md = md.replace(tableHtml, "\n" + tableMd + "\n");
    } else {
      manualReviewItems.push("table");
      md = md.replace(tableHtml, "\n<!-- MANUAL_REVIEW: complex table -->\n");
    }
  }

  // ---- Handle <section> tags — just strip them ----
  md = md.replace(/<\/?section[^>]*>/g, "");

  // ---- Handle remaining <div> wrappers — strip ----
  md = md.replace(/<\/?div[^>]*>/g, "");

  // ---- Handle <nav> (breadcrumbs) — remove entirely ----
  md = md.replace(/<nav[^>]*>[\s\S]*?<\/nav>/g, "");

  // ---- Handle <span> tags — strip tags, keep content ----
  md = md.replace(/<\/?span[^>]*>/g, "");

  // ---- Handle <img> tags → ![alt](src) ----
  md = md.replace(
    /<img\s+[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*?)["'][^>]*\/?>/g,
    "![$2]($1)"
  );
  md = md.replace(
    /<img\s+[^>]*alt=["']([^"']*?)["'][^>]*src=["']([^"']+)["'][^>]*\/?>/g,
    "![$1]($2)"
  );

  // ---- Remove JSX expression wrappers {` ... `} ----
  md = md.replace(/\{`([^`]*)`\}/g, "$1");

  // ---- Remove remaining JSX expressions like {variable} ----
  // But be careful not to remove markdown bold ** ** etc.
  // Only strip simple {expression} patterns that look like JSX
  md = md.replace(/\{[a-zA-Z_][a-zA-Z0-9_.]*\}/g, (match) => {
    // Keep if it looks like a template variable we want to flag
    manualReviewItems.push(`JSX expression: ${match}`);
    return `<!-- MANUAL_REVIEW: ${match} -->`;
  });

  // ---- Handle JSX map expressions → MANUAL_REVIEW ----
  const mapRegex = /\{[\s\S]*?\.map\([\s\S]*?\)\}/g;
  const mapMatches = md.match(mapRegex);
  if (mapMatches) {
    for (const mapMatch of mapMatches) {
      manualReviewItems.push("JSX .map() expression");
      md = md.replace(mapMatch, "\n<!-- MANUAL_REVIEW: dynamic JSX .map() expression -->\n");
    }
  }

  // ---- Handle remaining self-closing custom components ----
  md = md.replace(/<([A-Z][a-zA-Z0-9]*)[^>]*\/>/g, (_m, comp) => {
    if (!manualReviewItems.includes(comp)) manualReviewItems.push(comp);
    return `\n<!-- MANUAL_REVIEW: ${comp} component -->\n`;
  });

  // ---- Handle remaining open/close custom components ----
  md = md.replace(
    /<([A-Z][a-zA-Z0-9]*)[^>]*>([\s\S]*?)<\/\1>/g,
    (_m, comp, inner) => {
      // Try to keep inner content
      const cleanInner = inner.replace(/<[^>]+>/g, "").trim();
      if (cleanInner) {
        return cleanInner;
      }
      if (!manualReviewItems.includes(comp)) manualReviewItems.push(comp);
      return `\n<!-- MANUAL_REVIEW: ${comp} component -->\n`;
    }
  );

  // ---- Strip any remaining HTML-like tags ----
  md = md.replace(/<\/?[a-z][a-z0-9]*[^>]*>/gi, "");

  // ---- Clean up whitespace ----
  // Remove excessive blank lines (3+ → 2)
  md = md.replace(/\n{4,}/g, "\n\n\n");
  // Trim leading/trailing whitespace per line
  md = md
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");
  // Trim overall
  md = md.trim();

  // Deduplicate manual review items
  const uniqueReview = [...new Set(manualReviewItems)];

  return { markdown: md, manualReviewItems: uniqueReview };
}

/**
 * Best-effort conversion of an HTML table to markdown table.
 */
function convertTableToMarkdown(tableInner: string): string | null {
  try {
    // Extract header row
    const theadMatch = tableInner.match(/<thead[^>]*>([\s\S]*?)<\/thead>/);
    const tbodyMatch = tableInner.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);

    if (!theadMatch || !tbodyMatch) return null;

    // Extract header cells
    const headerCells: string[] = [];
    const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/g;
    let thMatch;
    while ((thMatch = thRegex.exec(theadMatch[1])) !== null) {
      headerCells.push(thMatch[1].replace(/<[^>]+>/g, "").trim());
    }

    if (headerCells.length === 0) return null;

    // Build header row
    const headerRow = "| " + headerCells.join(" | ") + " |";
    const separatorRow =
      "| " + headerCells.map(() => "---").join(" | ") + " |";

    // Extract body rows
    const bodyRows: string[] = [];
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    let trMatch;
    while ((trMatch = trRegex.exec(tbodyMatch[1])) !== null) {
      const cells: string[] = [];
      const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
      let tdMatch;
      while ((tdMatch = tdRegex.exec(trMatch[1])) !== null) {
        cells.push(tdMatch[1].replace(/<[^>]+>/g, "").trim());
      }
      if (cells.length > 0) {
        bodyRows.push("| " + cells.join(" | ") + " |");
      }
    }

    return [headerRow, separatorRow, ...bodyRows].join("\n");
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Frontmatter generation
// ---------------------------------------------------------------------------

function generateFrontmatter(opts: {
  title: string;
  description: string;
  slug: string;
  category: string;
  keywords: string[];
  urlPath: string;
}): string {
  const { title, description, slug, category, keywords, urlPath } = opts;

  const primaryKeyword = keywords.length > 0 ? keywords[0] : "";
  const secondaryKeywords = keywords.length > 1 ? keywords.slice(1) : [];

  // Derive parentArticle from URL path (parent directory)
  const pathParts = urlPath.replace(/^\/|\/$/g, "").split("/");
  const parentArticle =
    pathParts.length > 1
      ? "/" + pathParts.slice(0, -1).join("/")
      : "";

  // Derive macroContext from title
  const macroContext = title
    .replace(/[:\-—–|]/g, " ")
    .replace(/\d{4}/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Derive centralEntity
  let centralEntity = "TikTok";
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("youtube")) centralEntity = "YouTube";
  else if (lowerTitle.includes("instagram")) centralEntity = "Instagram";

  const lines = [
    "---",
    `title: "${escapeYaml(title)}"`,
    `metaDescription: "${escapeYaml(description)}"`,
    `slug: "${slug}"`,
    `section: "core"`,
    `category: "${category}"`,
    `macroContext: "${escapeYaml(macroContext)}"`,
    `microContext: []`,
    `centralEntity: "${centralEntity}"`,
    `primaryKeyword: "${escapeYaml(primaryKeyword)}"`,
    `secondaryKeywords: [${secondaryKeywords.map((kw) => `"${escapeYaml(kw)}"`).join(", ")}]`,
    `parentArticle: "${parentArticle}"`,
    `childArticles: []`,
    `relatedArticles: []`,
    `siblingArticles: []`,
    `parentCalculator: ""`,
    `headingVector: []`,
    `articleType: "informative"`,
    `priorityScore: 70`,
    `wordCount: 0`,
    `publishDate: "${TODAY}"`,
    `author: "CalculateCreator Team"`,
    `showCalculatorCTA: false`,
    `calculatorCTAType: ""`,
    "---",
  ];

  return lines.join("\n");
}

function escapeYaml(str: string): string {
  return str.replace(/"/g, '\\"');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const inputArg = process.argv[2];

  if (!inputArg) {
    console.error("Usage: npx tsx scripts/migrate-page-to-mdx.ts <path/to/page.tsx>");
    console.error("Example: npx tsx scripts/migrate-page-to-mdx.ts src/app/guides/tiktok-creator-fund/page.tsx");
    process.exit(1);
  }

  const inputPath = path.isAbsolute(inputArg)
    ? inputArg
    : path.resolve(PROJECT_ROOT, inputArg);

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  console.log("=".repeat(70));
  console.log("  migrate-page-to-mdx");
  console.log("=".repeat(70));
  console.log();
  console.log(`Input: ${path.relative(PROJECT_ROOT, inputPath)}`);
  console.log();

  // 1. Read the source file
  const source = fs.readFileSync(inputPath, "utf-8");

  // 2. Extract metadata
  const metadata = extractMetadata(source);
  console.log("Extracted metadata:");
  console.log(`  title:       ${metadata.title || "(not found)"}`);
  console.log(`  description: ${metadata.description ? metadata.description.slice(0, 60) + "..." : "(not found)"}`);
  console.log(`  keywords:    ${metadata.keywords.length > 0 ? metadata.keywords.join(", ") : "(none)"}`);
  console.log(`  canonical:   ${metadata.canonical || "(not found)"}`);
  console.log();

  // 3. Derive slug and category
  const { slug, category, urlPath } = deriveSlugAndCategory(inputPath, metadata.canonical);
  console.log(`Derived paths:`);
  console.log(`  slug:     ${slug}`);
  console.log(`  category: ${category}`);
  console.log(`  urlPath:  ${urlPath}`);
  console.log();

  // 4. Extract JSX content
  const jsxContent = extractJSXContent(source);
  if (!jsxContent) {
    console.error("Warning: Could not extract JSX content from return statement.");
    console.error("The generated MDX will have an empty body. Manual review needed.");
  }

  // 5. Convert JSX to Markdown
  const { markdown, manualReviewItems } = convertJSXToMarkdown(jsxContent);

  // 6. Generate frontmatter
  const frontmatter = generateFrontmatter({
    title: metadata.title,
    description: metadata.description,
    slug,
    category,
    keywords: metadata.keywords,
    urlPath,
  });

  // 7. Assemble MDX
  const mdxContent = frontmatter + "\n\n" + markdown + "\n";

  // 8. Write file
  const outputDir = path.join(CONTENT_DIR, category);
  const outputPath = path.join(outputDir, `${slug}.mdx`);

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(outputPath, mdxContent, "utf-8");

  const relOutput = path.relative(PROJECT_ROOT, outputPath);
  console.log(`MDX file created: ${relOutput}`);
  console.log();

  // 9. Report
  if (manualReviewItems.length > 0) {
    console.log("Sections requiring manual review:");
    for (const item of manualReviewItems) {
      console.log(`  - ${item}`);
    }
    console.log();
    console.log(
      'Search for "<!-- MANUAL_REVIEW" in the generated file to find all flagged sections.'
    );
    console.log();
  } else {
    console.log("No sections flagged for manual review.");
    console.log();
  }

  console.log("IMPORTANT: The original page.tsx has NOT been deleted.");
  console.log(`  Original: ${path.relative(PROJECT_ROOT, inputPath)}`);
  console.log(`  MDX:      ${relOutput}`);
  console.log();
  console.log("Next steps:");
  console.log("  1. Review the generated MDX file");
  console.log("  2. Fill in empty frontmatter fields (relatedArticles, siblingArticles, etc.)");
  console.log("  3. Fix any <!-- MANUAL_REVIEW --> sections");
  console.log("  4. Run: npx tsx scripts/inject-content-links.ts " + relOutput);
  console.log("  5. Run: npx tsx scripts/fix-bidirectional-links.ts --dry-run");
  console.log();
}

main();
