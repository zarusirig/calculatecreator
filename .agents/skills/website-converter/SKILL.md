---
name: website-converter
description: "Reverse-engineer existing websites into semantic content networks identifying gaps, inconsistencies, and optimization opportunities against Koray's framework. Use this skill whenever the user needs a website audit, site conversion to semantic SEO, topical map gap analysis, site restructuring plan, or wants to apply the full Semantic SEO framework to an existing site. Trigger for any existing website optimization, SEO migration, or semantic audit request."
---

# Website Converter

name: website-converter
description: Use when users mention website audit, site conversion, semantic audit, existing site optimization, topical map gap analysis, site restructuring, semantic SEO migration, website optimization, or content network conversion.

---

## Purpose

The Website Converter skill applies the full Semantic SEO framework as an audit and conversion lens to an existing website. Rather than building a semantic content network from scratch, this skill reverse-engineers an existing site to identify gaps, deficiencies, and opportunities, then produces a prioritized remediation plan to transform the site into a fully optimized semantic content network. This is the skill for taking what already exists and systematically upgrading it to meet the standards of every other skill in the framework.

---

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, automate much of the site audit process:

1. **Run `competitor_scan`** on the existing website itself to extract current content structure:
   ```bash
   python web-research-engine/scripts/web_research.py --mode competitor_scan --query "site:[your-domain.com] [main topic]" --domains your-domain.com --output /tmp/current_site.json
   ```
2. **Run `keyword_ideas`** for the desired source context to discover what the ideal topical map should cover:
   ```bash
   python web-research-engine/scripts/web_research.py --mode keyword_ideas --query "[desired central entity]" --country [target-country] --output /tmp/ideal_coverage.json
   ```
3. **Run `competitor_scan`** on 2-3 top competitors in the desired niche:
   ```bash
   python web-research-engine/scripts/web_research.py --mode competitor_scan --query "[niche topic]" --domains competitor1.com competitor2.com --output /tmp/competitor_benchmark.json
   ```
4. The gap analysis becomes data-driven: current site content vs. ideal coverage vs. competitor benchmark — the differences reveal exactly what needs to be added, restructured, or removed

## Core Concepts

### Reverse-Engineering Into a Semantic Content Network

The conversion process begins by mapping the existing site against the ideal semantic content network structure. This involves:

1. **Inventory all existing pages:** Catalog every URL, its primary topic, word count, publication date, and current ranking performance.
2. **Map to a topical map structure:** Attempt to fit existing pages into the hub-and-spoke topical map format. Identify which pages serve as hubs, which serve as spokes, and which do not fit into any logical topical structure.
3. **Identify orphan pages:** Pages that do not connect logically to any hub or topical cluster. These are candidates for either integration into the network or removal.
4. **Assess structural hierarchy:** Does the site have a clear information architecture (root documents, hub pages, supporting articles), or is it a flat collection of unrelated pages?
5. **Evaluate internal linking:** Map the existing internal link structure. Does it support topical clusters, or are links random and unhelpful?

The output of this phase is a clear picture of what the site currently is versus what a proper semantic content network would look like.

### Gap Analysis: Current vs Ideal Topical Map

The gap analysis compares the existing content inventory against a comprehensive topical map built using the framework's topical map construction process:

**Step 1: Build the ideal topical map.** Using the site's core topic, construct the complete topical map that a site targeting full topical authority would need. This includes all entities, attributes, contextual vectors, and supporting topics.

**Step 2: Map existing content to the ideal.** For each node in the ideal topical map, check whether an existing page covers that topic. Mark each node as:
- **Covered:** An existing page adequately addresses this topic.
- **Partially covered:** An existing page touches on this topic but lacks depth, required entities, or proper structure.
- **Missing:** No existing page addresses this topic at all.

**Step 3: Quantify the gap.** Calculate the percentage of the ideal topical map that is covered, partially covered, and missing. This gives a clear metric for how far the site is from topical authority.

**Step 4: Prioritize the gaps.** Not all gaps are equally important. Prioritize based on:
- Search volume potential of missing topics
- Importance to the topical authority hierarchy (hub pages before spoke pages)
- Competitive positioning (gaps where competitors have coverage but you do not)
- Revenue impact (gaps that affect commercial or transactional queries)

### Missing Entity-Attribute Coverage

Beyond topic-level gaps, the audit examines entity-attribute coverage:

- **Which entities are discussed on the site?** Compare against the full entity inventory from the topical map.
- **Which attributes of those entities are covered?** An entity may be mentioned but with incomplete attribute coverage. For example, a page about a product might cover features and price but lack coverage of use cases, comparisons, or maintenance.
- **Which entity-attribute combinations are missing entirely?** These represent content opportunities that can be filled with new articles or expansions of existing articles.

Map entity-attribute coverage using a matrix: entities on one axis, attributes on the other, with each cell marked as covered, partial, or missing.

### Broken Contextual Vectors

Contextual vectors are the semantic connections between topics that create topical authority. The audit identifies broken or missing vectors:

- **Disconnected topics:** Pages that discuss related topics but never link to or reference each other.
- **Missing bridge content:** Two topic clusters that should be connected but lack a bridging page or section.
- **One-directional vectors:** Topic A links to and references Topic B, but Topic B never references Topic A. Contextual vectors should be bidirectional where the relationship is mutual.
- **Weak vectors:** Topics that are connected but only through a single, weak internal link rather than through substantive contextual overlap.

For each broken vector, the remediation plan should specify whether the fix requires a new page, additional content on existing pages, or internal linking changes.

### Internal Linking Deficiencies

The internal linking audit examines:

- **Link distribution:** Are links concentrated on a few pages while others have very few? Healthy internal linking distributes link equity across the network.
- **Anchor text quality:** Are internal link anchor texts descriptive and semantically relevant, or are they generic ("click here," "read more")?
- **Link depth:** How many clicks does it take to reach every page from the homepage? Pages buried more than 3-4 clicks deep may be undervalued by search engines.
- **Contextual relevance:** Are internal links placed in contextually relevant positions (within topically related content), or are they in navigation elements, footers, or unrelated sidebars?
- **Missing links:** Pages that should link to each other based on topical relationship but currently do not.
- **Excessive links:** Pages with so many internal links that individual link value is diluted. Focus on quality over quantity.

### Cost of Retrieval Audit

The Cost of Retrieval audit evaluates whether the site is wasting search engine crawl budget:

**Index pollution:**
- Pages that are indexed but provide no search value (thin pages, duplicate content, tag pages, empty category pages)
- Parameter-based URL variations that create duplicate content
- Old, outdated pages that are no longer relevant but remain indexed
- Pagination pages that dilute crawl budget without providing unique content

**Crowded source code:**
- Excessive JavaScript that slows rendering and parsing
- Bloated HTML with unnecessary divs, classes, and inline styles
- Large CSS files loaded on every page when most rules are unused
- Third-party scripts that increase page weight without adding user value

**Technical friction:**
- Slow server response times that increase the cost of each crawl
- Broken links that waste crawl budget on 404 responses
- Redirect chains that require multiple requests to reach the final destination
- Mixed content issues (HTTP/HTTPS) that create crawl complications

**Information redundancy:**
- Multiple pages covering the same topic with only slight variations
- Content that is repeated across many pages (boilerplate, disclaimers, repeated introductions)
- Pages that could be consolidated without losing any unique information
- Thin content pages that add no value beyond what is already covered elsewhere on the site

For each Cost of Retrieval issue identified, estimate the severity (how much crawl budget it wastes) and recommend a specific fix.

### Prioritized Remediation Plan

The audit produces a prioritized remediation plan organized into phases:

**Phase 1: Technical Fixes (Weeks 1-4)**
- Fix crawl budget waste: noindex low-value pages, fix broken links, resolve redirect chains
- Clean up source code: reduce JavaScript, optimize CSS, remove unnecessary third-party scripts
- Establish proper URL structure and canonicalization

**Phase 2: Structural Reorganization (Weeks 5-8)**
- Implement information architecture: define hub pages, establish topical clusters
- Fix internal linking: add missing links, improve anchor text, establish contextual vectors
- Consolidate redundant content: merge thin pages, redirect duplicates

**Phase 3: Content Gap Filling (Weeks 9-24)**
- Create new content for missing topical map nodes, prioritized by search volume and strategic importance
- Expand partially covered pages to full entity-attribute coverage
- Build bridge content to connect disconnected topic clusters

**Phase 4: Optimization and Refinement (Weeks 25-36)**
- Apply schema markup across the content network
- Optimize for featured snippets and PAA boxes based on SERP analysis
- Conduct cross-page consistency audit
- Implement audience journey paths through internal linking

**Phase 5: Ongoing Momentum (Weeks 37-52)**
- Maintain publication momentum with patternless publishing schedule
- Monitor ranking trajectories and adjust
- Quarterly content freshness audits and updates

### The Full Framework as an Audit Lens

The Website Converter applies every skill in the Semantic SEO framework as an audit criterion:

- **Topical Map:** Does the site have comprehensive topical coverage?
- **Entity-Attribute Analysis:** Are entities and their attributes fully covered?
- **Contextual Vectors:** Are semantic connections established between related topics?
- **Internal Linking Architecture:** Does the link structure support topical authority?
- **Content Briefs:** Were articles created from comprehensive, structured briefs?
- **Cross-Page Consistency:** Are facts consistent across all pages?
- **EAV Knowledge Base:** Is there a centralized fact repository?
- **Schema Markup:** Is structured data implemented correctly?
- **Publication Momentum:** Is the publishing cadence strategic?
- **Audience Journey Mapping:** Are visitor paths designed and supported?
- **SERP Analysis:** Is content optimized for current SERP features?
- **Contextual Border Design:** Is main vs supplementary content clearly delineated?

Each skill becomes a checklist item in the audit. The site is scored against each criterion, and deficiencies feed into the remediation plan.

### Topical Authority Formula Application

Apply the Topical Authority assessment framework to the existing site:

**Topical Authority = Vastness x Depth x Momentum**

- **Vastness score:** What percentage of the ideal topical map is covered? How many entities and entity-attribute combinations are addressed?
- **Depth score:** How thoroughly are covered topics treated? Are articles meeting depth requirements (word count, entity coverage, attribute completeness)?
- **Momentum score:** What is the publishing history? Is the site actively growing? Has publishing been consistent or sporadic?

The product of these three scores gives the current Topical Authority baseline. The remediation plan should include target scores for each dimension at 3, 6, and 12 months.

---

## Implementation Guidance

When advising on website conversion:

1. **Conduct the full inventory.** Catalog every page on the site with its URL, topic, word count, and performance data. This is the foundation for all subsequent analysis.

2. **Build the ideal topical map.** Before identifying gaps, define what the complete topical map should look like for the site's core topic.

3. **Perform the gap analysis.** Map existing content to the ideal topical map. Quantify coverage: covered, partially covered, missing.

4. **Audit Cost of Retrieval.** Identify all sources of crawl budget waste: index pollution, code bloat, technical friction, information redundancy.

5. **Evaluate internal linking.** Map the current link structure and compare it to the ideal structure based on the topical map and audience journey paths.

6. **Check cross-page consistency.** Extract factual claims and check for contradictions across pages.

7. **Produce the prioritized remediation plan.** Organize fixes into phased implementation: technical first, structural second, content third, optimization fourth, momentum fifth.

8. **Set Topical Authority baselines and targets.** Score the site on Vastness, Depth, and Momentum today, and set targets for improvement at quarterly intervals.

---

## Advanced Website Conversion Concepts

### Historical Data Preservation During Conversion
During website conversion, preserving existing URLs' historical data is critical. Historical data (user engagement quality over time) cannot be rebuilt quickly. Maintain URL structure where possible. If URLs must change, implement proper 301 redirects immediately. Any period without redirects generates gaps in historical data.

### Initial Ranking Score Audit Before Conversion
Assess the current site's initial ranking scores before conversion. Different site sections may have different initial ranking scores — some may be strong (fast new content ranking), others weak. Preserve and build on strong sections; redesign weak sections to improve initial ranking potential.

### Brand SERP Continuity
Ensure conversion doesn't break Brand SERP signals. Knowledge panel triggers, reviews, trust signals, and structured data must transfer cleanly. Any disruption to Brand SERP elements signals instability to search engines and can trigger negative re-evaluation.

### TrustRank Preservation
Maintain link equity and TrustRank inheritance chains during conversion. External backlinks pointing to changed URLs lose their TrustRank propagation without proper redirects. Internal linking architecture must be rebuilt to maintain the same trust propagation hierarchy. Prioritize preserving links to core section content.

### Crawl Efficiency Post-Conversion
After conversion, monitor crawl stats aggressively. Target: 99% 200 OK status codes, <100ms average response time. Any increase in 404s, 301 chains, or server errors degrades the source's initial ranking potential. Run crawl audits weekly for the first 3 months post-conversion.

---

## Key Principles Summary

- Reverse-engineer the existing site by mapping it against an ideal semantic content network structure
- Perform gap analysis comparing current content to a comprehensive topical map
- Identify missing entity-attribute coverage using a matrix approach
- Find and repair broken contextual vectors between topic clusters
- Audit internal linking for distribution, anchor text quality, depth, and contextual relevance
- Conduct a Cost of Retrieval audit: index pollution, crowded source code, technical friction, information redundancy
- Produce a prioritized, phased remediation plan (technical, structural, content, optimization, momentum)
- Apply every skill in the framework as an audit criterion
- Score the site using the Topical Authority formula (Vastness x Depth x Momentum) and set improvement targets
