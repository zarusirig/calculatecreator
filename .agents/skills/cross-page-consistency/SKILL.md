---
name: cross-page-consistency
description: "Audit the entire semantic content network for internal consistency ensuring no page contradicts another. Use this skill whenever the user needs cross-page fact checking, content consistency auditing, contradiction detection, site-wide coherence verification, or distributional semantics pattern analysis. Trigger for any consistency audit, fact checking, or content network verification request."
---

# Cross-Page Consistency

name: cross-page-consistency
description: Use when users mention cross-page audit, content consistency, fact checking, network consistency, contradiction detection, site-wide coherence, or distributional semantics audit.

---

## Purpose

Cross-page consistency is the discipline of ensuring that every page in a semantic content network operates as part of a unified, coherent whole. No page should contradict another. The factual claims, terminology, entity descriptions, and contextual framing should be consistent across the entire site. This skill teaches agents how to audit a semantic content network for internal consistency, identify conflicting facts, analyze distributional semantics patterns across pages, and verify that the site functions as a single authoritative document rather than a collection of disconnected articles.

---

## Core Concepts

### The Coherent Document Test

The foundational test for cross-page consistency is simple: if you converted every page on your site into a single PDF document, arranged in logical order, would it read as one coherent publication? Would a reader encounter contradictions, conflicting definitions, inconsistent terminology, or jarring shifts in perspective?

If the answer is yes -- if contradictions or inconsistencies would be apparent in the combined document -- then the semantic content network has cross-page consistency problems that search engines can detect.

Search engines effectively perform this same test algorithmically. They crawl and index every page, build an internal representation of the site's collective knowledge, and evaluate whether the site's claims are internally consistent. A site that contradicts itself is a site that cannot be fully trusted.

### Conflicting Fact Identification

The most damaging form of cross-page inconsistency is direct factual contradiction. Common sources of conflicting facts:

**Different authors, different research:** When multiple authors write about overlapping topics, they may cite different sources or interpret data differently. Author A writes that a process takes "3-5 business days" while Author B writes "up to 7 days" on a related page.

**Content written at different times:** Facts change. An article written in January may state a statistic that is updated by March. If the January article is not updated, it contradicts the March article.

**Scope ambiguity:** One page discusses a topic in a specific context (e.g., "in the United States") while another discusses it globally, leading to different but technically non-contradictory numbers that appear contradictory without the context qualifier.

**Terminology drift:** One page defines a term one way while another page uses the same term with a subtly different meaning.

Identification process:
1. Extract all factual claims from every page (using EAV knowledge base methodology).
2. Group claims by entity and attribute.
3. Compare values across pages for the same entity-attribute pairs.
4. Flag any discrepancies for review.
5. Resolve each discrepancy by determining the correct value and updating all affected pages.

### Distributional Semantics Pattern Analysis

Distributional semantics -- the principle that words derive meaning from the company they keep -- applies across pages, not just within them. Search engines analyze how terms are used across your entire site to build a model of your site's semantic understanding.

Cross-page distributional analysis checks:

**Term co-occurrence consistency:** If your site establishes that "Entity A" frequently co-occurs with "Term X" and "Term Y," this pattern should be consistent across all pages that discuss Entity A. A page that discusses Entity A with completely different co-occurring terms creates a distributional anomaly.

**Contextual framing alignment:** The way an entity is framed (positively, negatively, neutrally) should be consistent unless there is explicit reason for different framing (e.g., a pros-and-cons article). If one page frames an entity positively and another frames it negatively without clear contextual justification, the site sends mixed signals.

**Semantic field consistency:** Related terms should appear in consistent semantic fields across pages. If your site establishes a particular vocabulary for discussing a topic, that vocabulary should be maintained throughout.

### Cross-Page Term Distribution Verification

Verify that important terms are distributed appropriately across the content network:

- **Core entity terms** should appear across many pages, with the highest density on the primary page for that entity and lower but present density on related pages.
- **Attribute terms** should appear most densely on the pages that directly address those attributes, with supporting mentions on related pages.
- **No orphaned terminology:** A specialized term introduced on one page should be referenced or contextualized on at least one other page. Orphaned terms suggest incomplete topical coverage.
- **No term overconcentration:** If a critical term only appears on a single page when it should logically appear across multiple related pages, the content network has distribution gaps.

### Contextual Domain Alignment

Every page on the site should clearly belong to the same contextual domain. The audit checks:

- **Topic coherence:** Does every page contribute to the site's core topical authority? Pages that drift into unrelated topics dilute the domain signal.
- **Expertise level consistency:** The site should maintain a consistent level of expertise across pages. A mix of deeply technical articles and superficial overview pieces without clear audience segmentation creates inconsistency.
- **Voice and authority consistency:** The site should speak with a consistent voice of authority. Sudden shifts between authoritative claims and hedging language undermine trust.
- **Source quality consistency:** If some pages cite peer-reviewed research while others cite social media posts, the inconsistency in source quality degrades the overall trust signal.

### Natural Language Inferring Across Pages

Search engines do not evaluate pages in isolation. They make inferences by combining information across pages:

- If Page A states "X is a type of Y" and Page B states "all Y have property Z," then the search engine infers "X has property Z." If Page C contradicts this inference, the site has a consistency problem even though no two pages directly contradict each other.
- These transitive inferences mean that consistency must be verified not just between page pairs but across chains of logical relationships spanning multiple pages.
- The audit should trace logical inference chains across the content network and verify that no chain produces a contradiction.

---

## Audit Process

### Step 1: Full Content Extraction
Extract all factual claims, entity mentions, term usage, and contextual framing from every page in the semantic content network.

### Step 2: Fact Comparison
Compare all factual claims sharing the same entity-attribute pairs across pages. Flag discrepancies.

### Step 3: Distributional Analysis
Map term co-occurrence patterns across pages. Identify anomalies where a page's term distribution diverges significantly from the site's established patterns.

### Step 4: Term Distribution Map
Create a matrix showing which key terms appear on which pages. Identify orphaned terms, overconcentrated terms, and distribution gaps.

### Step 5: Domain Alignment Review
Evaluate each page for topic coherence, expertise level, voice consistency, and source quality alignment with the rest of the site.

### Step 6: Inference Chain Verification
Trace logical inference chains across multiple pages. Verify that no chain produces a contradiction through transitive reasoning.

### Step 7: Resolution and Remediation
For each identified inconsistency:
- Determine the correct or preferred version
- Update all affected pages to align with the canonical fact/framing
- Update the EAV knowledge base to reflect the resolved value
- Re-verify that the resolution does not create new inconsistencies

---

## Implementation Guidance

When advising on cross-page consistency:

1. **Start with the EAV knowledge base.** If one exists, use it as the foundation for the consistency audit. If one does not exist, the consistency audit process will naturally produce one.

2. **Prioritize high-traffic pages.** Begin the audit with pages that receive the most traffic or target the most competitive keywords. Inconsistencies on these pages have the highest impact.

3. **Focus on core entities first.** Check consistency for the site's primary entities before moving to secondary and tertiary entities.

4. **Automate where possible.** For large sites, manual comparison of every fact across every page is impractical. Use extraction tools to build the comparison dataset, then focus human review on flagged discrepancies.

5. **Integrate with the production pipeline.** Cross-page consistency should not be a one-time audit but an ongoing checkpoint in the content production workflow. Every new article should be checked against the knowledge base before publication.

6. **Apply the PDF test regularly.** Periodically export the site's content and read through it as a unified document. This holistic review catches inconsistencies that granular fact-comparison might miss.

---

## Advanced Cross-Page Consistency Concepts

### Central Entity Site-wide Presence
The central entity must appear in EVERY subsection of the semantic content network — whether in main content and macro-context, or supplementary content and micro-context. This is non-negotiable. Audit every page to verify the central entity is present, either explicitly or through synonym value expressions. Inconsistent central entity presence weakens the entire topical authority signal.

### Central Search Intent Alignment
Verify all pages reflect the central search intent (source context + central entity). The central search intent should be processed heavily in core section pages and reflected in outer section pages. Check that the intent's primary predicates appear consistently across all content, in headings, anchor texts, and body content.

### Site-wide N-gram Consistency
Macro semantics requires consistent site-wide patterns. Audit for: most used nouns, adjectives, and predicates across all pages. Are they consistent with the Source Context? Do heading vectors follow consistent construction patterns? Do first paragraph words establish contextual relevance immediately? Inconsistency in macro semantic patterns weakens the content network's coherence signal.

### Contextual Bridge Validation
Verify that contextual bridges (both hypertext links and linkless aligned information) between topical map nodes are consistent and bidirectional. A bridge from Page A mentioning concepts from Page B should be mirrored by Page B referencing concepts from Page A. Broken or one-directional bridges create weak spots in the semantic content network.

### Propagation Consistency
Relevance and quality propagate through connected pages. Inconsistent quality creates propagation breaks — a high-quality page linking to a low-quality page weakens both. Audit the propagation chain: every connected pair of pages should maintain similar quality standards. Non-quality pages in the chain harm all connected quality pages.

---

## Key Principles Summary

- The entire site should read as one coherent document when combined
- No two pages should make contradictory factual claims
- Distributional semantics patterns must be consistent across all pages
- Key terms should be distributed proportionally across the content network
- Every page must align with the site's contextual domain in topic, expertise, voice, and sources
- Search engines make transitive inferences across pages -- consistency must hold across inference chains, not just between page pairs
- Cross-page consistency should be an ongoing process integrated into content production, not a one-time audit
- The EAV knowledge base is the primary tool for maintaining cross-page consistency at scale
