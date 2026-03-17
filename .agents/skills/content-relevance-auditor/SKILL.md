---
name: content-relevance-auditor
description: "Audit published articles against their content briefs checking heading accuracy, typography hierarchy, synonym expansion, word proximity, and distributional semantics consistency. Use this skill whenever the user needs content auditing, relevance checking, article review, content brief compliance, heading audit, semantic quality check, or responsiveness verification. Trigger for any content audit or quality review request."
---

# Content Relevance Auditor

## Skill Metadata

- **name**: content-relevance-auditor
- **description**: Audits published articles against their content briefs, checking heading accuracy, typography hierarchy compliance, synonym expansion analysis, definitional sentence patterns, word proximity optimization, three-example rule verification, distributional semantics consistency across the network, extractive/abstractive summary validation, and plan-vs-publish comparison. Activated when the user mentions content audit, relevance audit, article review, content brief compliance, heading audit, semantic audit, content quality check, or responsiveness audit.

---

## Purpose

The content relevance auditor ensures that published articles faithfully execute the semantic strategy defined in their content briefs. There is always a gap between what was planned and what was published. Writers may alter headings, omit key synonym variations, miss definitional patterns, or break the distributional semantics consistency that the content brief was designed to achieve. The auditor's role is to systematically identify these gaps and generate specific, actionable corrections. Without this audit step, the entire semantic SEO framework relies on assumption rather than verification, and cumulative drift across dozens or hundreds of articles can silently undermine the site's topical authority.

---

## Brand Identity Integration

When a Brand Identity Document exists, expand the audit checklist to include brand compliance:

- **Voice Consistency Check**: Does the published article match the brand's formality level, reading grade, and pronoun perspective? Score each on a 1-5 scale.
- **Power Words Presence**: Are the brand's Power Words appearing at expected frequency? Flag articles where zero Power Words appear.
- **Forbidden Words Violation**: Scan for any Forbidden Words that slipped through. This is a binary pass/fail check.
- **CTA Compliance**: Does the article contain CTAs at the positions specified in the content brief? Do the CTAs use the brand's CTA Copy Templates?
- **Tone Drift Detection**: Compare the article's tone against the expected tone for its content type (from the Tone by Content Type table). Flag sections where the voice shifts noticeably — e.g., suddenly becoming formal in a casual-brand article, or injecting humor in a serious-brand piece.
- **Brand Voice Score**: Calculate an overall Brand Voice Score (0-100) based on the above checks. Articles scoring below 70 should be flagged for voice revision alongside any SEO revisions.

---

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, expand audits with live competitive comparison:

1. **Run `serp_analysis`** for the article's target query to see current competition:
   ```bash
   python web-research-engine/scripts/web_research.py --mode serp_analysis --query "[article's target query]" --country [target-country] --output /tmp/current_serp.json
   ```
2. Compare your published article's format and depth against what's currently ranking in the top 5
3. **Run `fact_check`** on key statistics in the published article to verify they're still current:
   ```bash
   python web-research-engine/scripts/web_research.py --mode fact_check --query "[specific statistic from article]" --output /tmp/fact_verify.json
   ```
4. Flag any statistics that have changed since publication — these need immediate updates
5. Check if new PAA questions have appeared for the target query that the article doesn't address

## Core Concepts

### Audit Published Articles Against Content Briefs

Every published article should be compared line-by-line against its original content brief. The content brief specifies:

- The exact heading structure (H1, H2, H3, H4) with the precise wording.
- Target queries and the sections designed to address them.
- Entities to mention and where they should appear.
- Synonym variations to include.
- Internal links and their anchor text.
- Definitional sentences and factual claims.
- Word count targets per section.

**The audit process**:

1. Place the content brief and the published article side by side.
2. For each element in the brief, verify its presence and accuracy in the published article.
3. Flag every deviation: missing headings, altered heading wording, omitted entities, missing synonyms, absent internal links, changed factual claims.
4. Categorize deviations by severity: critical (heading changes that break query targeting), moderate (missing synonym that reduces semantic coverage), minor (word count slightly off target).
5. Generate a correction list with specific instructions for bringing the published article into alignment with the brief.

### Heading Accuracy

Headings are the most important structural element for semantic SEO. The content brief specifies exact heading text because each heading is designed to target a specific query or query cluster, contain specific entities, and use specific synonym variants. Any change to a heading can break these designed relationships.

**What to check**:

- **H1 exact match**: The published H1 must exactly match the brief's specified H1. Any deviation, even a single word change, can alter the primary query target.
- **H2 accuracy**: Each H2 should match the brief's specification. H2s define the page's primary subtopics and drive section-level query targeting.
- **H3/H4 accuracy**: Supporting headings should match the brief. While less critical than H2s, these headings still contribute to the semantic structure and heading-level link weighting.
- **Heading order**: The sequence of headings must match the brief. Reordering sections changes the topical flow and can affect which sections search engines prioritize.
- **No added/removed headings**: Writers should not add headings not in the brief or remove specified headings without approval. Each heading was placed for a strategic reason.

### Typography Hierarchy (4px Size Decrease Per Level)

The visual typography of headings should follow a consistent size progression that reinforces the semantic hierarchy for both users and search engines:

- **H1**: Largest size (e.g., 36px)
- **H2**: 4px smaller than H1 (e.g., 32px)
- **H3**: 4px smaller than H2 (e.g., 28px)
- **H4**: 4px smaller than H3 (e.g., 24px)

**Why this matters**: Visual hierarchy signals content importance. Search engines use rendering information to understand content structure. When heading sizes do not decrease consistently, it creates ambiguity about the hierarchical relationship between sections.

**Audit checks**:

- Verify that the CSS or CMS template applies a consistent 4px size decrease per heading level.
- Check for overrides: writers or editors sometimes manually change heading sizes, breaking the hierarchy.
- Ensure no H3 appears visually larger than an H2, which would create a contradictory hierarchy signal.

### Synonym Expansion Analysis

The content brief specifies which synonym variants must appear in the article to cover the full semantic field of the target topic. The audit verifies:

- **Primary synonyms present**: Every synonym listed in the brief must appear at least once in the article.
- **Synonym placement**: Key synonyms should appear in headings (as specified in the brief), in the first paragraph of relevant sections, and distributed throughout the body text.
- **Synonym density**: No single synonym should dominate to the exclusion of its variants. If the brief specifies three synonyms for a concept, all three should appear with roughly balanced frequency.
- **Missing synonyms**: Flag any synonym from the brief that does not appear in the published article. Each missing synonym represents a gap in the semantic field coverage.
- **Unplanned synonyms**: Note any synonym variants the writer added that were not in the brief. These may be valuable additions or they may introduce unwanted semantic drift.

### Definitional Sentence Patterns

The content brief may specify definitional sentences, which are structured statements that define an entity or concept in a pattern that search engines can extract for featured snippets and Knowledge Graph entries.

**Standard patterns to verify**:

- "[Entity] is [definition]." Present and accurate.
- "[Entity] refers to [explanation]." Present and accurate.
- "[Entity] is defined as [definition]." Present and accurate.

**Audit checks**:

- Verify each specified definitional sentence appears in the article.
- Check that the definition is factually accurate and matches the ontology's E-A-V data.
- Ensure the definitional sentence appears early in the relevant section (ideally the first or second sentence after the heading).
- Verify the sentence structure is clean and extractable (not buried in a complex compound sentence).

### Word Proximity Optimization

Word proximity refers to the physical distance between related terms in the text. When two semantically related terms appear close together (within 2-5 words of each other), search engines interpret them as strongly associated. The content brief may specify critical term pairs that must appear in close proximity.

**Audit checks**:

- For each specified term pair, measure the word distance between them in the published article.
- Flag any term pair where the distance exceeds the brief's specified maximum (typically 5-10 words).
- Check that term pairs co-occur in the same sentence or adjacent sentences.
- Verify that the natural flow of the sentence is preserved. Proximity optimization should not create awkward or unnatural phrasing.

### Three-Example Rule Verification

The three-example rule states that when a concept is introduced, providing at least three specific examples establishes the pattern and demonstrates comprehensive coverage. Search engines use multiple examples to confirm that the content genuinely covers the topic rather than mentioning it superficially.

**Audit checks**:

- For each concept or entity introduced in the article, verify that at least three specific examples are provided.
- Check that examples are diverse (not three variations of the same thing).
- Verify examples are accurate and relevant to the concept.
- Flag sections where a concept is introduced with only one or two examples, or where examples are missing entirely.

### Distributional Semantics Consistency Across the Network

Distributional semantics means that words gain their meaning from the words that surround them. Across a network of related pages, the same entity should appear in consistent semantic contexts. If the entity "French Press" appears surrounded by terms like "immersion," "coarse grind," "steep time," and "plunger" on one page, it should appear in similar semantic contexts on other pages in the network.

**Audit checks**:

- Compare the semantic context of key entities across multiple published pages in the same topic cluster.
- Flag inconsistencies where an entity is described differently on different pages (e.g., one page says French Press uses medium grind while another says coarse grind).
- Verify that the entity's co-occurring terms are consistent with the ontology and E-A-V data.
- Ensure that cross-page consistency extends to synonym usage: if one page uses "steeping" and another uses "immersion" for the same process, both should be present on both pages to maintain synonym bridge consistency.

### Extractive/Abstractive Summary Validation

Content briefs may specify that the article should be written so that search engines can generate both extractive summaries (directly lifting sentences from the content) and abstractive summaries (synthesizing a new summary from the content's information).

**Audit checks**:

- **Extractive readiness**: Verify that the article contains at least 3-5 self-contained sentences that could be extracted verbatim as a snippet or summary. These sentences should be clear, factual, and comprehensive enough to stand alone.
- **Abstractive readiness**: Verify that the article's key facts are stated explicitly enough that an AI system could synthesize them into a coherent summary. This means checking that cause-effect relationships are explicit, that comparisons are clearly stated, and that conclusions are directly expressed rather than implied.
- **Introduction quality**: The article's introduction (first 100-150 words) should serve as a natural extractive summary of the entire article. It should contain the primary entity, the main claim or thesis, and the key supporting points.

### Compare What Was Planned vs. What Was Published

The final and most comprehensive audit step is a holistic comparison of the content brief's intent against the published article's execution:

**Plan-vs-publish checklist**:

| Element | Planned (Brief) | Published (Article) | Status |
|---|---|---|---|
| H1 text | Exact wording from brief | Actual H1 in article | Match / Deviation |
| H2 count and text | Each H2 specified | Each H2 present | Match / Missing / Altered |
| H3/H4 structure | Each sub-heading | Each sub-heading | Match / Missing / Altered |
| Word count per section | Target ranges | Actual counts | Within range / Over / Under |
| Primary synonyms | List from brief | Presence in article | Present / Missing |
| Definitional sentences | Specified patterns | Actual sentences | Present / Missing / Altered |
| Internal links | Target pages + anchors | Actual links + anchors | Present / Missing / Wrong anchor |
| Entity mentions | Required entities | Actual mentions | Present / Missing |
| Factual claims | E-A-V specifications | Actual claims | Accurate / Inaccurate |
| Examples per concept | Minimum 3 | Actual count | Sufficient / Insufficient |

---

## Implementation Process

1. **Retrieve the content brief**: Pull the original brief for the article being audited.
2. **Export the published article**: Get the live article content including HTML heading tags, link URLs, and anchor text.
3. **Run heading audit**: Compare every heading in the brief against the published article. Document all deviations.
4. **Run synonym audit**: Search the article text for every synonym specified in the brief. Flag missing synonyms and note unplanned additions.
5. **Run definitional pattern audit**: Search for each specified definitional sentence. Verify accuracy and placement.
6. **Run proximity audit**: For specified term pairs, measure word distances. Flag pairs that exceed maximum distance.
7. **Run three-example audit**: For each introduced concept, count examples. Flag any concept with fewer than three.
8. **Run cross-page consistency check**: Compare entity contexts across related published pages. Flag inconsistencies.
9. **Run summary validation**: Evaluate the introduction and key sentences for extractive and abstractive readiness.
10. **Generate the plan-vs-publish comparison table**: Produce a comprehensive deviation report with severity ratings and specific correction instructions.
11. **Deliver correction list**: Provide the writer or editor with a prioritized list of changes needed to bring the article into full compliance with the brief.

---

## Advanced Audit Concepts

### Relevance vs Responsiveness Audit Split
Audit BOTH dimensions separately: (1) Relevance audit — check term weight, co-occurrence patterns, BM25 alignment, contextual term matching. Is the document findable for its target queries? (2) Responsiveness audit — check direct answer quality, passage extraction potential, query-question-answer alignment. Does the document satisfy user needs? A page can be highly relevant but unresponsive (ranks but doesn't convert to clicks) or highly responsive but irrelevant (great content that doesn't rank).

### Historical Data Impact Assessment
Audit pages for historical data quality. Pages with high impressions but low CTR generate negative historical data. Pages with good CTR but high bounce rate generate negative session data. Both types of negative data harm rankings approximately 6 months later. Identify and fix pages creating negative historical data before the delayed penalty hits.

### Quality Threshold Compliance Check
For each audited page, compare against the quality threshold for its target queries: (1) Does it meet the relevance threshold? (2) Does it exceed the content depth/accuracy of the weakest ranking competitor? (3) Is it building positive propagation of relevance to connected pages? Pages below threshold should be improved or consolidated — they harm the entire content network.

### Non-Quality Page Identification
Identify non-quality pages that are harming quality pages' rankings. Signs: thin content, low engagement, high bounce, no internal links, disconnected from topical map structure. Either improve these pages substantially or remove/consolidate them. Every page must earn its place in the semantic content network.

### Content Refresh Cycle Audit
Flag content older than 3-6 months that hasn't been refreshed. Even ranking content needs periodic updates to maintain positive historical data signals. Content refresh triggers re-ranking evaluation — use strategically to improve positions, especially around seasonal events or algorithm updates.

---

## Key Principles

- Every published article must be audited against its content brief. Assumption is not verification.
- Heading accuracy is the highest-priority check because headings drive query targeting and semantic structure.
- Typography hierarchy must follow a consistent 4px size decrease per heading level.
- Every synonym specified in the brief must appear in the article. Missing synonyms create gaps in semantic field coverage.
- Definitional sentences must be present, accurate, and structured for extraction.
- Word proximity between related terms should be verified against brief specifications.
- The three-example rule ensures depth of coverage for every concept introduced.
- Distributional semantics consistency across the page network must be maintained, with entities appearing in consistent semantic contexts.
- The plan-vs-publish comparison table is the definitive audit deliverable, providing a clear, actionable gap analysis.
