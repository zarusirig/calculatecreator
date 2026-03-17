---
name: content-reconfiguration
description: "Analyze ranking performance data and reconfigure existing content to increase relevance for target queries and decrease relevance for wrong queries. Use this skill whenever the user needs content updating, ranking optimization, Search Console analysis, position improvement, query targeting changes, or ongoing SEO optimization. Trigger for any content reconfiguration, ranking improvement, or content updating request."
---

# Content Reconfiguration

## Skill Metadata

- **name**: content-reconfiguration
- **description**: Analyzes Search Console data (impressions, clicks, queries) to identify new, lost, and shared query signals, then generates reconfiguration plans including sections to add, remove, or reorder, internal links to change, word sequences to adjust, queries to target or de-target, and cross-entity ranking signal management. Covers the ongoing optimization loop and bulk reconfiguration across template-based content. Activated when the user mentions content reconfiguration, ranking optimization, search console analysis, content updating, query targeting, position improvement, ongoing SEO optimization, or content configuration.

---

## Purpose

Content reconfiguration is the ongoing, data-driven process of adjusting published content based on actual search performance data. No content brief, regardless of how thorough its semantic analysis, can perfectly predict how search engines will interpret and rank a page. After publication, Search Console data reveals the truth: which queries the page actually ranks for, which queries it was expected to rank for but does not, which queries are being cannibalized by other pages, and which new query opportunities have emerged. Content reconfiguration closes the gap between planned intent and measured reality, creating a continuous optimization loop that compounds topical authority over time.

---

## Core Concepts

### Analyzing Search Console Data

Search Console provides three critical data points for every page:

- **Impressions**: The number of times the page appeared in search results for a given query. High impressions with low clicks indicate the page ranks but does not attract clicks (title/snippet issue or wrong intent match).
- **Clicks**: The number of times users clicked through to the page from search results. This is the ultimate validation that the page serves the query intent.
- **Queries**: The actual search terms that triggered the page's appearance in results. This is the most valuable data for reconfiguration because it reveals how search engines actually interpret the page's topical focus.

**Additional data points**:

- **Average position**: The mean ranking position for each query. Pages ranking in positions 4-15 are prime reconfiguration candidates because small improvements can push them to high-click positions (1-3).
- **Click-through rate (CTR)**: Clicks divided by impressions. Low CTR at high positions suggests a title/meta description misalignment with query intent.

### Identifying New, Lost, and Shared Query Signals

When analyzing Search Console data over time, three patterns emerge that drive reconfiguration decisions:

**New query signals**: Queries that the page has started ranking for that were not in the original content brief. These represent:

- Opportunities to expand the page's content to better serve these queries.
- Validation that the page's semantic signals are being interpreted more broadly than planned.
- Potential new sections, headings, or entity mentions to add.

**Lost query signals**: Queries that the page previously ranked for but no longer does. These represent:

- Content that may have been diluted by recent edits or new competing pages.
- Entities or synonym variants that may have been removed or de-emphasized.
- Sections that may need to be restored, expanded, or strengthened.

**Shared query signals**: Queries where multiple pages from the same site rank simultaneously. These represent:

- Cannibalization risk: two pages competing for the same query, diluting signals.
- Consolidation opportunity: merge the content from two pages into one stronger page.
- Differentiation need: adjust one or both pages so each targets a distinct subset of the shared queries.

### Sections to Add, Remove, or Reorder

Based on the query analysis, the reconfiguration plan specifies structural changes to the article:

**Sections to add**: When new query signals indicate demand for a subtopic the page does not cover, add a new section with an appropriate H2 or H3 heading. The new section should:

- Target the identified query with a heading that contains the query's core phrase.
- Include the relevant entities and synonym variants.
- Be placed in the heading hierarchy at the position that makes semantic sense (related subtopics should be adjacent).

**Sections to remove**: When a section targets a query that the page should not rank for (because another page is the better target), the section may need to be removed or significantly reduced. This prevents cannibalization and redirects search engine attention to the correct page. Removed sections should be:

- Migrated to the more appropriate page if the content is valuable.
- Replaced with a brief mention and an internal link to the correct page.

**Sections to reorder**: The position of sections on a page affects their weight (top sections carry more authority). If a section that targets a high-value query is buried at the bottom of the article, moving it higher can improve ranking signals. Reordering decisions should be based on:

- Query value (search volume, conversion potential).
- Current ranking position (sections for queries at positions 4-10 benefit most from higher placement).
- Semantic flow (sections must still read logically after reordering).

### Internal Links to Change

Content reconfiguration often requires adjusting internal links:

- **Add links**: If a new section is added, it likely needs internal links to and from related pages.
- **Remove links**: If a section is removed, its internal links are lost. Ensure those links are added elsewhere if the connections are still valuable.
- **Change anchor text**: If a heading is modified during reconfiguration, internal links from other pages pointing to this page may need updated anchor text to maintain alignment.
- **Redirect link equity**: If a page is being de-targeted for certain queries, internal links that previously sent equity for those queries should be redirected to the page that will now target them.

### Word Sequences to Adjust

Sometimes the reconfiguration does not require structural changes but rather fine-tuning of word sequences within existing sections:

- **Insert missing query phrases**: If Search Console shows the page receives impressions for a query but the exact phrase does not appear in the content, adding it to the relevant section can improve ranking.
- **Adjust synonym balance**: If the page over-indexes on one synonym variant and under-indexes on others, redistribute the synonym usage.
- **Strengthen proximity signals**: If two related terms that should co-occur closely are separated by many words, restructure sentences to bring them into closer proximity.
- **Update entity mentions**: If the ontology has been updated with new entity attributes or relationships, update the content to reflect the current state of knowledge.

### Queries to Target and De-Target

Reconfiguration requires explicit decisions about query ownership:

**Target**: Add or strengthen signals for queries that:

- Show high impressions but low average position (the page is close to ranking well).
- Align with the page's primary entity and topic.
- Have sufficient search volume to justify the effort.
- Are not being cannibalized by another page on the site.

**De-target**: Reduce or eliminate signals for queries that:

- Are better served by another page on the site (cannibalization resolution).
- Do not align with the page's primary entity or topic.
- Attract the wrong user intent (high impressions, zero clicks, poor engagement).
- Dilute the page's topical focus and reduce its authority for its primary queries.

**De-targeting methods**:

- Remove sections that explicitly target the de-targeted query.
- Replace detailed coverage with a brief mention and a link to the correct page.
- Adjust headings to remove the de-targeted query's key phrases.
- Reduce the frequency of the de-targeted query's core terms.

### Cross-Entity Ranking Signal Management

One of the most complex reconfiguration challenges occurs when a page about Entity A starts ranking for queries that belong to Entity B's page. This happens when:

- The page about Entity A mentions Entity B extensively enough that search engines associate the page with Entity B's queries.
- The page about Entity B is weaker (fewer internal links, thinner content, newer publication date).
- The query network for Entity B overlaps with Entity A's query network at certain synonym or phrase intersections.

**Resolution strategies**:

- **Strengthen Entity B's page**: Add content, internal links, and schema to make Entity B's page the undisputed authority for its queries.
- **Reduce Entity B mentions on Entity A's page**: Shorten the discussion of Entity B to a brief mention with a link, rather than extensive coverage.
- **Clarify entity boundaries**: Add more specific headings and definitional sentences to both pages that clearly delineate where Entity A's topic ends and Entity B's topic begins.
- **Use internal linking to direct signals**: Add prominent internal links from Entity A's page to Entity B's page, signaling that Entity B's page is the authoritative source for Entity B's queries.

### The Ongoing Optimization Loop

Content reconfiguration is not a one-time task. It is a recurring cycle:

1. **Publish**: Launch the page with the original content brief's specifications.
2. **Wait for data**: Allow 2-4 weeks for Search Console to accumulate meaningful data.
3. **Analyze**: Review impressions, clicks, queries, positions, and CTR.
4. **Plan reconfiguration**: Based on the data, generate specific changes (sections, links, word sequences, targeting decisions).
5. **Execute reconfiguration**: Implement the changes on the page.
6. **Wait for re-indexing**: Allow 1-2 weeks for search engines to recrawl and reprocess the page.
7. **Re-analyze**: Check whether the changes improved performance. Identify new signals.
8. **Repeat**: Continue the cycle, with each iteration making the page more precisely aligned with actual search demand.

**Frequency guidelines**:

- New pages: First reconfiguration at 4 weeks post-publication, then monthly for the first 6 months.
- Established pages: Quarterly reconfiguration review, with immediate reconfiguration if significant ranking drops or cannibalization is detected.
- Seasonal content: Reconfigure 4-6 weeks before the seasonal peak to ensure changes are indexed in time.

### Bulk Reconfiguration Across Template-Based Content

Sites with hundreds or thousands of pages often use templates to generate content at scale (e.g., product pages, location pages, service pages). When Search Console data reveals a systemic pattern across template-based content, bulk reconfiguration is needed:

**Pattern identification**:

- If 80% of product pages have impressions for "how to use [product]" queries but no section addressing usage, this is a template-level gap.
- If location pages consistently rank for "[service] near [city]" but lack a section with local entity mentions, this is a template-level gap.

**Bulk reconfiguration process**:

1. Identify the systemic pattern from Search Console data aggregated across all pages of the template type.
2. Design the template modification (new section, heading, entity mention pattern, schema addition).
3. Test the modification on 5-10 pages first and monitor results for 2-3 weeks.
4. If results are positive, roll out the modification across all pages of that template type.
5. Monitor the aggregate performance post-rollout to confirm the improvement holds at scale.

**Risks of bulk reconfiguration**:

- Template changes affect many pages simultaneously. A mistake is amplified.
- Always test on a small sample before full rollout.
- Monitor for unintended cannibalization (a new section might create overlap between template pages and existing editorial content).

---

## Implementation Process

1. **Export Search Console data**: Pull query-level data for the target page or page group (impressions, clicks, average position, CTR) for the most recent 3-month period.
2. **Categorize queries**: Sort queries into new signals, lost signals, shared signals, and expected signals (queries the page was designed to rank for).
3. **Identify gaps**: Compare the query data against the original content brief's target queries. Flag queries the page should rank for but does not, and queries it ranks for but should not.
4. **Draft structural changes**: Specify sections to add, remove, or reorder. Define new headings with appropriate query targeting.
5. **Draft link changes**: Specify internal links to add, remove, or update. Update anchor text recommendations.
6. **Draft word sequence adjustments**: Specify phrase insertions, synonym rebalancing, and proximity improvements.
7. **Assign targeting decisions**: For each relevant query, explicitly state whether to target, de-target, or maintain current status.
8. **Address cross-entity issues**: If the page ranks for another entity's queries, specify the resolution strategy.
9. **Execute changes**: Implement all reconfiguration changes on the page.
10. **Update the content brief**: Modify the original content brief to reflect the reconfigured state, so future audits use the updated plan.
11. **Schedule re-analysis**: Set a follow-up date (2-4 weeks) to analyze the impact of the reconfiguration.

---

## Advanced Reconfiguration Concepts

### Content Configuration as Continuous Process
Content configuration (Koray's term) means changing and updating existing content according to changed semantic distances and similarities. Query semantics shift over time — what was relevant 6 months ago may not be relevant today. Reconfiguration is not just content updating; it's realigning your content network with the current state of query-document relationships.

### Re-ranking Trigger Strategy
Content changes trigger re-ranking evaluation by search engines. Time reconfigurations strategically: before seasonal events, after algorithm updates, and when competitor movements create opportunities. A content update combined with a trending topic creates a powerful re-ranking trigger.

### Content Refresh Cycle
Refresh content every 3-6 months even if currently ranking. Reasons: (1) maintaining positive historical data signals, (2) preventing staleness penalties, (3) adapting to shifted semantic distances, (4) accumulating fresh engagement signals. Set automated reminders for the entire content network's refresh schedule.

### Quality Threshold Re-assessment
During reconfiguration, re-assess quality thresholds for each target query cluster. Thresholds shift with algorithm updates and competitor improvements. A page that exceeded the threshold 6 months ago may now fall below it. Re-evaluate against current SERP to determine required improvements.

### Contextual Distance Recalibration
When reconfiguring, check if semantic distances between query clusters have changed. If clusters have moved closer together, consider merging content. If they've moved apart, consider splitting. Use Google's changing SERP features as signals — new featured snippets or PAA changes indicate shifted query relationships.

---

## Key Principles

- Content reconfiguration is driven by Search Console data, not assumptions or predictions.
- Every page will need reconfiguration after publication. The question is not whether but when and how much.
- New query signals are opportunities. Lost query signals are alerts. Shared query signals are conflicts to resolve.
- Cross-entity ranking signals must be managed proactively to prevent cannibalization and topical dilution.
- The optimization loop (publish, analyze, reconfigure, re-analyze) never ends. Each cycle sharpens the page's alignment with actual search demand.
- Bulk reconfiguration across template-based content requires testing on small samples before full rollout.
- The content brief must be updated after every reconfiguration to remain the accurate source of truth for future audits.
