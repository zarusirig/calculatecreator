---
name: competitive-gap-analysis
description: "Systematically identify competitor ranking queries, score opportunities, and generate prioritized content plans to fill gaps. Use this skill whenever the user needs competitive analysis, query gap identification, competitor research, content gap analysis, opportunity scoring, or wants to outrank established competitors. Trigger for any competitive analysis or content gap request."
---

# Competitive Gap Analysis

## Skill Metadata

- **name**: competitive-gap-analysis
- **description**: Identifies competitor ranking queries, applies an opportunity scoring formula (search volume x relevance x difficulty inverse), generates prioritized content targets, categorizes opportunities as quick wins vs. long-term builders, identifies competitive differentiators, and outlines strategies for outranking established authorities through superior semantic structure rather than content volume. Activated when the user mentions competitive analysis, query gap, competitor research, content gap, opportunity scoring, competitor outranking, or competitive SEO analysis.

---

## Purpose

Competitive gap analysis identifies the queries and topics where competitors rank but your site does not, then prioritizes those opportunities based on their potential return. In semantic SEO, competitive gap analysis goes beyond simple keyword gap reports. It evaluates the structural and semantic reasons why competitors rank, identifies the specific weaknesses in their approach that can be exploited, and designs a targeted content strategy that achieves superior rankings with fewer pages by leveraging better semantic architecture, entity coverage, and topical coherence.

---

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, this skill becomes dramatically more powerful:

1. **Run `competitor_scan`** on each competitor to extract their actual content structure:
   ```bash
   python web-research-engine/scripts/web_research.py --mode competitor_scan --query "[your niche topic]" --domains competitor1.com competitor2.com competitor3.com --output /tmp/competitor_content.json
   ```
2. **Run `serp_analysis`** on your top 20 target keywords to see who actually ranks:
   ```bash
   python web-research-engine/scripts/web_research.py --mode serp_analysis --query "[target keyword]" --country [target-country] --output /tmp/serp_data.json
   ```
3. **Run `keyword_ideas`** to find opportunities competitors are missing:
   ```bash
   python web-research-engine/scripts/web_research.py --mode keyword_ideas --query "[niche topic]" --country [target-country] --output /tmp/opportunities.json
   ```
4. Cross-reference all three outputs: competitor content (what they cover), SERP data (what's winning), keyword opportunities (what's underserved) — the intersection reveals your highest-value content targets
5. For comprehensive analysis, batch all queries together for efficiency

## Core Concepts

### Identifying Competitor Ranking Queries

The first step is building a comprehensive map of the queries your competitors rank for within your topic domain. This requires:

**Competitor selection**: Identify 3-5 primary competitors. These are sites that:

- Rank for queries your site targets or should target.
- Cover the same or overlapping topic domains.
- Compete for the same audience and intent types.

Competitors are not limited to direct business competitors. They include any site that occupies search positions you want.

**Query extraction**: For each competitor, extract the full set of queries they rank for within the relevant topic domain. Categorize these queries by:

- **Queries both you and the competitor rank for**: These are battleground queries where reconfiguration and strengthening can improve your position.
- **Queries only the competitor ranks for**: These are gap queries representing content or semantic coverage you lack.
- **Queries only you rank for**: These are defensive queries where you have an advantage to protect.

**Entity and topic mapping**: Group competitor queries by entity and topic cluster. This reveals which entities and subtopics the competitor covers that you do not, and where their topical map is broader or deeper than yours.

### Opportunity Scoring Formula

Not all query gaps are worth pursuing. The opportunity scoring formula provides a quantitative framework for prioritization:

**Score = Search Volume x Relevance x Difficulty Inverse**

Where:

- **Search Volume**: The estimated monthly search volume for the query. Higher volume means more potential traffic. Normalize to a 0-1 scale where the highest volume query in the gap set = 1.

- **Relevance**: A score from 0 to 1 measuring how closely the query aligns with your site's core topic domain, target audience, and business objectives. A query with high volume but low relevance to your domain should score lower than a moderate-volume query with high relevance. Relevance factors include:
  - Does the query relate to entities in your existing ontology?
  - Does the query serve an intent that your audience has?
  - Would ranking for this query contribute to your site's topical authority in a meaningful way?
  - Is there a commercial or strategic value to ranking for this query?

- **Difficulty Inverse**: A score from 0 to 1 calculated as `1 - (Difficulty / 100)` where Difficulty is the estimated keyword difficulty (0-100 scale). High difficulty queries score lower, making easier opportunities rise to the top. Difficulty factors include:
  - Domain authority of current ranking pages.
  - Content depth and quality of current ranking pages.
  - Number of referring domains to current ranking pages.
  - Whether the query triggers featured snippets, Knowledge Panels, or other SERP features that reduce organic click potential.

**Example scoring**:

| Query | Volume (normalized) | Relevance | Difficulty Inverse | Score |
|---|---|---|---|---|
| "cold brew concentrate ratio" | 0.6 | 0.9 | 0.7 | 0.378 |
| "best coffee grinder 2024" | 1.0 | 0.5 | 0.3 | 0.150 |
| "pour over water temperature" | 0.4 | 1.0 | 0.8 | 0.320 |
| "coffee bean storage methods" | 0.3 | 0.8 | 0.9 | 0.216 |

In this example, "cold brew concentrate ratio" scores highest because it has good volume, high relevance, and moderate difficulty. "Best coffee grinder 2024" has the highest volume but scores lowest because of low relevance and high difficulty.

### Prioritized Content Targets

After scoring all gap queries, organize them into a prioritized content plan:

**Tier 1 (Score above 0.3)**: High-priority targets. These queries should be addressed in the next content cycle. Create dedicated pages or add substantial sections to existing pages.

**Tier 2 (Score 0.15-0.3)**: Medium-priority targets. Schedule these for the following content cycle. May be addressed through sections within broader articles rather than dedicated pages.

**Tier 3 (Score below 0.15)**: Low-priority targets. Address these opportunistically or as part of content expansion phases. Often best served as supporting mentions within other pages rather than standalone content.

**Cluster prioritization**: When multiple gap queries belong to the same topic cluster, prioritize the cluster as a unit. Creating a hub page with 4-5 spoke pages to cover an entire query cluster is often more effective than targeting individual queries in isolation.

### Quick Wins vs. Long-Term Builders

Gap opportunities fall into two strategic categories:

**Quick wins** are queries where:

- Your site already ranks in positions 6-20 for the query (you have existing signals that need strengthening, not building from scratch).
- The current top-ranking pages have thin content, poor structure, or weak semantic coverage.
- The query can be addressed by adding a section to an existing page rather than creating a new one.
- The difficulty is low and the current competitors are not authoritative brands.
- Implementation requires minimal new content (500-1,000 words of additions or adjustments).

**Quick win strategy**: Reconfigure existing pages to cover the query. Add a targeted section, optimize headings, insert entity mentions, and strengthen internal links. Results can appear within 2-6 weeks.

**Long-term builders** are queries where:

- Your site has no current ranking signals (the topic is entirely new to your content).
- The current top-ranking pages are from high-authority domains with extensive content.
- Ranking requires creating a complete topic cluster (hub + multiple spoke pages).
- The query targets a competitive space where authority must be built over months.
- The strategic value justifies the extended timeline (high commercial value, brand positioning, topical authority expansion).

**Long-term builder strategy**: Plan a full topic cluster with a hub page and 3-8 supporting pages. Build the ontology for the new topic area, generate content briefs, and publish the cluster systematically over 4-8 weeks. Expect meaningful ranking improvements in 3-6 months as topical authority accumulates.

### Competitive Differentiators

Beyond identifying which queries to target, competitive gap analysis should identify how to differentiate your content from what already ranks. Differentiation strategies include:

**Structural differentiation**: If competitors present information as flat, long-form articles, use a structured hub-and-spoke architecture with clear navigation between subtopics. Better structure improves user experience signals and provides clearer topical signals.

**Semantic differentiation**: If competitors cover the surface-level query but miss related entities, synonym variants, or supporting facts, your content can win by providing a more complete semantic coverage. This is where the ontology and E-A-V data become competitive weapons.

**Depth differentiation**: If competitors provide overview content, go deeper on the specific subtopics that matter most to searchers. Search Console data from your existing content can reveal which subtopics drive the most engagement.

**Freshness differentiation**: If competitor content is dated (published years ago, not updated), providing current, accurate information with recent examples and data creates a freshness advantage.

**Entity differentiation**: If competitors discuss the topic without explicitly defining and connecting entities, your content can win by providing clear entity definitions, relationships, and structured data that enable Knowledge Graph alignment.

**Format differentiation**: If competitors use only text, adding structured elements like tables, step-by-step instructions, comparison matrices, or visual aids can capture featured snippet positions and improve engagement signals.

### Outranking Established Authorities with Better Semantic Structure

The central insight of semantic SEO competitive strategy: you do not need more content than the competitor; you need better-structured content with stronger semantic signals.

A site with 50 well-structured, semantically optimized pages in a tight topic cluster can outrank a site with 500 loosely related pages on the same broad topic. Here is why:

**Topical authority concentration**: A focused site with deep coverage of a specific topic domain sends stronger topical authority signals than a broad site that covers many topics superficially. Search engines can clearly identify what the focused site is about and trust it as an authority for that domain.

**Internal linking density**: A focused site with 50 pages can create a dense, highly connected internal linking architecture where every page reinforces every other page. A broad site with 500 pages has diluted internal link equity spread across many unrelated topics.

**Entity and ontology completeness**: A focused site can build a comprehensive ontology with 100+ triples covering every entity and relationship in the domain. A broad site typically has shallow entity coverage across many domains.

**Semantic consistency**: A focused site can maintain perfect distributional semantics consistency across all pages, with entities always appearing in the correct semantic contexts. A broad site inevitably has inconsistencies where entities are described differently in different sections.

**Content brief precision**: A focused site can create detailed content briefs with precise heading structures, entity placements, and synonym distributions. A broad site publishing at volume often relies on general guidelines rather than page-specific semantic plans.

**Implementation strategy for outranking with fewer pages**:

1. Identify the competitor's top-performing pages in the target topic domain (the 10-20 pages that generate most of their rankings).
2. Analyze the semantic gaps in those pages: missing entities, incomplete synonym coverage, weak internal linking, absent structured data.
3. Build a topic cluster that covers the same queries with better semantic architecture: tighter headings, more complete entity coverage, stronger internal links, richer schema markup.
4. Ensure every page in your cluster is bidirectionally linked, semantically consistent, and aligned with the ontology.
5. Publish the cluster with proper momentum and allow 3-6 months for topical authority signals to accumulate.
6. Reconfigure based on Search Console data as rankings develop.

---

## Implementation Process

1. **Select competitors**: Identify 3-5 sites that rank for queries in your target domain.
2. **Extract competitor query data**: Build a comprehensive list of queries each competitor ranks for within the relevant topic space.
3. **Identify gaps**: Categorize queries as shared, competitor-only, or yours-only.
4. **Score opportunities**: Apply the opportunity scoring formula (Volume x Relevance x Difficulty Inverse) to every gap query.
5. **Prioritize into tiers**: Sort scored queries into Tier 1, 2, and 3 based on score thresholds.
6. **Categorize as quick wins or long-term builders**: For each Tier 1 and Tier 2 opportunity, determine whether it can be addressed through reconfiguration (quick win) or requires new content creation (long-term builder).
7. **Identify differentiators**: For each target query, analyze the current top-ranking pages and identify specific ways to differentiate through structure, semantics, depth, freshness, entities, or format.
8. **Design the content plan**: Map gap queries to specific pages (new or existing), assign content briefs, and schedule production.
9. **Execute with semantic precision**: Every new page or reconfigured page must follow the full semantic SEO framework: ontology-aligned content, proper heading structure, entity coverage, synonym distribution, internal linking, and schema markup.
10. **Monitor and iterate**: Track rankings for gap queries post-publication. Feed results back into the reconfiguration loop.

---

## Advanced Competitive Analysis Concepts

### Quality Threshold Competitive Analysis
Identify the most and least quality sources ranking for your target queries. The gap between them defines the quality threshold you must exceed. Analyze: content depth, information accuracy, term weight patterns, visual content quality, web component presence, and structured data implementation.

### Relevance Threshold Mapping
Map competitors' term weight and IR score patterns. Identify which co-occurrence patterns, term frequencies, and contextual alignments the top-ranking pages share. This reveals the relevance threshold — the minimum IR score pattern needed to compete.

### Initial Ranking Score Comparison
Compare how fast new content ranks across different competitors. Faster initial ranking = higher source authority and better initial ranking score. Track the time from publication to first ranking, and from first ranking to final position. This reveals each competitor's topical authority state.

### Brand SERP Competitive Analysis
Compare brand SERPs across competitors: Who has knowledge panels? What PAA questions appear for their brand? What trust signals are present? Brand SERP strength indicates entity identity maturity and overall source trust.

### Cost of Outranking Calculation
Calculate the cost of outranking each competitor: (1) Traffic value of their rankings, (2) Their share percentage of total query impressions, (3) Query overlap between their site and yours, (4) Depth of their topical coverage, (5) Quality of their historical data. This determines resource allocation per competitive segment.

### Propagation Analysis
Analyze how competitors' relevance and quality propagate through their content networks. Strong propagation = well-connected content with consistent contextual bridges. Weak propagation = isolated content with poor internal linking. Identify propagation weaknesses you can exploit.

---

## Data Input Integration (Skill 33)

When Skill 33 has been run, the **Keyword Intelligence Report** includes actual content gap data from tools like Ahrefs Content Gap and SEMrush Keyword Gap. These show exact keywords where competitors rank and you don't. Use this real gap data as the foundation for your competitive analysis instead of inferring gaps. The **Research Intelligence Report** adds qualitative competitive insights — competitor strengths, strategies, and content approaches discovered through deep research.

## Key Principles

- Competitive gap analysis is query-level, not page-level. Focus on the specific queries competitors rank for that you do not.
- The opportunity scoring formula (Volume x Relevance x Difficulty Inverse) prevents wasting resources on high-volume but low-relevance or high-difficulty queries.
- Quick wins (reconfiguring existing pages for gap queries at positions 6-20) deliver faster results than new content creation.
- Long-term builders (new topic clusters for entirely unaddressed query areas) are necessary for strategic growth but require patience.
- Superior semantic structure beats content volume. Fifty semantically optimized pages in a focused cluster can outrank five hundred loosely related pages.
- Every competitive advantage is temporary. The optimization loop ensures that gains are maintained and expanded as the competitive landscape shifts.
