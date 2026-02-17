import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ── Types ────────────────────────────────────────────────────────────────────

interface ArticleFrontmatter {
  slug: string;
  category: string;
  parentArticle: string;
  childArticles: string[];
  relatedArticles: string[];
  siblingArticles: string[];
  parentCalculator: string;
  priorityScore: number;
}

interface ArticleEntry {
  filePath: string;
  fullPath: string; // /{category}/{slug}
  frontmatter: ArticleFrontmatter;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const CONTENT_DIR = path.resolve(process.cwd(), "content");

/**
 * Recursively find all .mdx files under a directory.
 */
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

/**
 * Parse an MDX file and return a normalised ArticleEntry.
 */
function parseArticle(filePath: string): ArticleEntry {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);

  const fm: ArticleFrontmatter = {
    slug: (data.slug as string) ?? "",
    category: (data.category as string) ?? "",
    parentArticle: (data.parentArticle as string) ?? "",
    childArticles: Array.isArray(data.childArticles) ? data.childArticles : [],
    relatedArticles: Array.isArray(data.relatedArticles)
      ? data.relatedArticles
      : [],
    siblingArticles: Array.isArray(data.siblingArticles)
      ? data.siblingArticles
      : [],
    parentCalculator: (data.parentCalculator as string) ?? "",
    priorityScore: (data.priorityScore as number) ?? 0,
  };

  const fullPath = `/${fm.category}/${fm.slug}`;

  return { filePath, fullPath, frontmatter: fm };
}

/**
 * Determine whether a path looks like a calculator page (not an article).
 *
 * Calculator pages are top-level or mid-level hub paths that correspond to
 * actual calculator tool pages on the site rather than MDX articles.
 * Heuristic: any path that does NOT resolve to a known article is either
 * a calculator page or a broken link. We consider it a calculator page if
 * the path starts with /calculators/ and has at most the hub-depth segments
 * that match existing parentCalculator values OR existing category values.
 */
function isLikelyCalculatorPage(
  targetPath: string,
  knownArticlePaths: Set<string>,
  calculatorPages: Set<string>,
  categoryPaths: Set<string>
): boolean {
  if (knownArticlePaths.has(targetPath)) return false; // it's an article

  // Known parentCalculator values are explicitly calculator pages
  if (calculatorPages.has(targetPath)) return true;

  // Category hub paths (e.g. /guides/monetization, /calculators/coins) are
  // hub/index pages, not articles
  if (categoryPaths.has(targetPath)) return true;

  // Paths with only 2 segments like /calculators/tiktok-money are calculator
  // tool pages
  const segments = targetPath.split("/").filter(Boolean);
  if (segments[0] === "calculators" && segments.length <= 2) return true;

  // Paths that match /guides/<hub> are hub index pages
  if (segments[0] === "guides" && segments.length <= 2) return true;

  // Paths that look like category-level hubs for deeper calculators
  // e.g. /calculators/earnings-revenue/live-earnings
  if (segments[0] === "calculators" && segments.length <= 3) {
    const asCategory = segments.join("/");
    if (categoryPaths.has("/" + asCategory) || categoryPaths.has(asCategory))
      return true;
  }

  return false;
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  // 1. Discover and parse all articles
  const mdxFiles = findMdxFiles(CONTENT_DIR);
  const articles: ArticleEntry[] = mdxFiles.map(parseArticle);

  // Build lookup structures
  const articleByPath = new Map<string, ArticleEntry>();
  const knownArticlePaths = new Set<string>();
  const calculatorPages = new Set<string>();
  const categoryPaths = new Set<string>();

  for (const article of articles) {
    articleByPath.set(article.fullPath, article);
    knownArticlePaths.add(article.fullPath);

    if (article.frontmatter.parentCalculator) {
      calculatorPages.add(article.frontmatter.parentCalculator);
    }

    const catPath = "/" + article.frontmatter.category;
    categoryPaths.add(catPath);
  }

  // ── Section 1: Orphan Articles ──────────────────────────────────────────

  const orphans: ArticleEntry[] = articles.filter(
    (a) => !a.frontmatter.parentArticle
  );

  // ── Section 2: Dead-End Articles ────────────────────────────────────────

  const deadEnds: ArticleEntry[] = articles.filter((a) => {
    const hasChildren = a.frontmatter.childArticles.length > 0;
    const hasRelated = a.frontmatter.relatedArticles.length > 0;
    return !hasChildren && !hasRelated;
  });

  // ── Section 3: Missing Bidirectional Links ──────────────────────────────

  interface BidiIssue {
    from: string;
    to: string;
    type: string;
    detail: string;
  }
  const bidiIssues: BidiIssue[] = [];

  for (const article of articles) {
    const fm = article.frontmatter;

    // Child -> Parent check
    for (const childPath of fm.childArticles) {
      const child = articleByPath.get(childPath);
      if (child && child.frontmatter.parentArticle !== article.fullPath) {
        bidiIssues.push({
          from: article.fullPath,
          to: childPath,
          type: "child/parent",
          detail: `${article.fullPath} lists child ${childPath}\n    BUT ${childPath} does not list ${article.fullPath} as parentArticle`,
        });
      }
    }

    // Related <-> Related check
    for (const relatedPath of fm.relatedArticles) {
      const related = articleByPath.get(relatedPath);
      if (
        related &&
        !related.frontmatter.relatedArticles.includes(article.fullPath)
      ) {
        bidiIssues.push({
          from: article.fullPath,
          to: relatedPath,
          type: "related",
          detail: `${article.fullPath} lists related ${relatedPath}\n    BUT reverse not found`,
        });
      }
    }

    // Sibling <-> Sibling check
    for (const siblingPath of fm.siblingArticles) {
      const sibling = articleByPath.get(siblingPath);
      if (
        sibling &&
        !sibling.frontmatter.siblingArticles.includes(article.fullPath)
      ) {
        bidiIssues.push({
          from: article.fullPath,
          to: siblingPath,
          type: "sibling",
          detail: `${article.fullPath} lists sibling ${siblingPath}\n    BUT reverse not found`,
        });
      }
    }
  }

  // ── Section 4: Broken Link Targets ──────────────────────────────────────

  interface BrokenLink {
    article: string;
    target: string;
  }
  const brokenLinks: BrokenLink[] = [];

  for (const article of articles) {
    const fm = article.frontmatter;
    const allRefs: string[] = [
      ...(fm.parentArticle ? [fm.parentArticle] : []),
      ...fm.childArticles,
      ...fm.relatedArticles,
      ...fm.siblingArticles,
    ];

    for (const ref of allRefs) {
      if (knownArticlePaths.has(ref)) continue; // exists as article
      if (
        isLikelyCalculatorPage(
          ref,
          knownArticlePaths,
          calculatorPages,
          categoryPaths
        )
      )
        continue;
      brokenLinks.push({ article: article.fullPath, target: ref });
    }
  }

  // ── Section 5: Calculator Coverage ──────────────────────────────────────

  const calcCoverage = new Map<string, number>();
  for (const article of articles) {
    const pc = article.frontmatter.parentCalculator;
    if (pc) {
      calcCoverage.set(pc, (calcCoverage.get(pc) ?? 0) + 1);
    }
  }

  // ── Section 6: Hub Coverage ─────────────────────────────────────────────

  const hubCoverage = new Map<string, number>();
  for (const article of articles) {
    const cat = article.frontmatter.category;
    if (cat.startsWith("guides/")) {
      // Extract hub subdirectory: e.g. "guides/monetization" or
      // "guides/growth/sub" -> "guides/growth"
      const parts = cat.split("/");
      const hub = parts.slice(0, 2).join("/");
      hubCoverage.set(hub, (hubCoverage.get(hub) ?? 0) + 1);
    }
  }

  // ── Section 7: Link Density Stats ───────────────────────────────────────

  interface DensityEntry {
    path: string;
    count: number;
  }
  const densities: DensityEntry[] = articles.map((a) => {
    const fm = a.frontmatter;
    let count = 0;
    if (fm.parentArticle) count += 1;
    count += fm.childArticles.length;
    count += fm.relatedArticles.length;
    count += fm.siblingArticles.length;
    return { path: a.fullPath, count };
  });

  const totalDensity = densities.reduce((sum, d) => sum + d.count, 0);
  const avgDensity =
    densities.length > 0 ? totalDensity / densities.length : 0;
  const maxEntry = densities.reduce(
    (best, d) => (d.count > best.count ? d : best),
    densities[0] ?? { path: "(none)", count: 0 }
  );
  const minEntry = densities.reduce(
    (best, d) => (d.count < best.count ? d : best),
    densities[0] ?? { path: "(none)", count: 0 }
  );

  // ── Output ──────────────────────────────────────────────────────────────

  const lines: string[] = [];
  const log = (s: string = "") => lines.push(s);

  log("=== LINK GRAPH AUDIT REPORT ===");
  log();
  log(`Total MDX articles: ${articles.length}`);

  // Orphans
  log();
  log(`ORPHAN ARTICLES (no parent): ${orphans.length}`);
  if (orphans.length === 0) {
    log("  (none)");
  } else {
    for (const a of orphans) {
      log(`  - ${a.fullPath} (no parentArticle set)`);
    }
  }

  // Dead ends
  log();
  log(`DEAD-END ARTICLES (no outgoing links): ${deadEnds.length}`);
  if (deadEnds.length === 0) {
    log("  (none)");
  } else {
    for (const a of deadEnds) {
      log(`  - ${a.fullPath}`);
    }
  }

  // Bidirectional
  log();
  log(`MISSING BIDIRECTIONAL LINKS: ${bidiIssues.length}`);
  if (bidiIssues.length === 0) {
    log("  (none)");
  } else {
    for (const issue of bidiIssues) {
      log(`  - ${issue.detail}`);
    }
  }

  // Broken targets
  log();
  log(`BROKEN LINK TARGETS: ${brokenLinks.length}`);
  if (brokenLinks.length === 0) {
    log("  (none)");
  } else {
    for (const bl of brokenLinks) {
      log(`  - ${bl.article} references ${bl.target} (NOT FOUND)`);
    }
  }

  // Calculator coverage
  log();
  log("CALCULATOR COVERAGE:");
  const sortedCalcs = [...calcCoverage.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  if (sortedCalcs.length === 0) {
    log("  (no parentCalculator values found)");
  } else {
    for (const [calc, count] of sortedCalcs) {
      const status = count >= 3 ? "OK" : `WARN (target: 3+)`;
      log(`  ${calc}: ${count} article${count !== 1 ? "s" : ""} ${status}`);
    }
  }

  // Hub coverage
  log();
  log("HUB COVERAGE:");
  const sortedHubs = [...hubCoverage.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  if (sortedHubs.length === 0) {
    log("  (no guides/ hubs found)");
  } else {
    for (const [hub, count] of sortedHubs) {
      const status = count >= 5 ? "OK" : `WARN (target: 5+)`;
      log(`  ${hub}: ${count} article${count !== 1 ? "s" : ""} ${status}`);
    }
  }

  // Link density
  log();
  log("LINK DENSITY:");
  log(`  Average links per article: ${avgDensity.toFixed(1)}`);
  log(`  Max: ${maxEntry.count} (${maxEntry.path})`);
  const minWarn = minEntry.count <= 2 ? " WARN" : "";
  log(`  Min: ${minEntry.count} (${minEntry.path})${minWarn}`);

  log();
  log("=== END OF REPORT ===");

  // Print everything
  console.log(lines.join("\n"));
}

main();
