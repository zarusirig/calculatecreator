---
name: contextual-vector-optimizer
description: Contextual vector analysis, heading flow optimization, content flow optimization, heading order audit, contextual coverage alignment, article structure audit, section ordering, extractive and abstractive summary testing
version: 1.0
dependencies:
  - question-generation
  - content-brief-generation
  - micro-semantics
inputs:
  - heading_sequence: "Ordered list of content brief headings (representative questions)"
  - content_brief_columns: "All four columns — entities, attributes, values, queries"
  - target_queries: "Primary and secondary queries the article must rank for"
outputs:
  - optimized_vector: "Reordered heading sequence forming a coherent contextual line"
  - vector_audit_report: "Pass/fail results for extractive and abstractive summary tests"
  - section_adjustments: "Specific reorder, remove, or add recommendations"
---

# Contextual Vector Optimizer

## Purpose

The contextual vector is the ordered sequence of headings from the first heading to the last. It represents the article's topical trajectory — the path the content takes through its subject matter. A well-formed contextual vector reads as a straight line: every heading connects logically to the one before it and the one after it, with no jumps, disconnections, or reversals.

Search engines evaluate content not just at the passage level but at the document level. The contextual vector determines how the document as a whole is understood. A broken vector — one with topic jumps or disconnections — signals to the algorithm that the document lacks coherence, reducing its ability to rank for any single query because the macro context is fractured.

The contextual vector optimizer audits, tests, and repairs the heading sequence to ensure it forms a coherent topical line that aligns with target queries.

## Core Concepts

### The Contextual Vector as a Straight Line

Imagine plotting each heading on a topical axis. The first heading establishes the starting point. Each subsequent heading should move forward along that axis, covering new but connected ground. The line should never double back (revisiting a topic already covered), jump sideways (introducing an unrelated topic), or break (having no connection between consecutive headings).

A straight vector for "German Visa Requirements":
1. What are the types of German visas?
2. What are the requirements for a German tourist visa?
3. How much does a German visa cost?
4. How long does the German visa process take?
5. What documents are needed for a German visa application?
6. Where do you submit a German visa application?

Each heading advances the topic. The reader (and algorithm) can follow the progression: types, then requirements for the most common type, then cost, then timeline, then documents, then submission location. The flow is logical and linear.

A broken vector for the same topic:
1. What are the types of German visas?
2. What is the best time to visit Germany?
3. How much does a German visa cost?
4. What is the history of German immigration policy?
5. What documents are needed for a German visa application?

Heading 2 jumps to travel advice (unrelated to visa process). Heading 4 jumps to immigration history (related but disconnected from the practical visa process). The vector is broken.

### Heaviest Section Alignment

The "heaviest" section is the one with the most contextual coverage — the most entities, attributes, values, and query coverage. This section carries the most topical weight in the article.

**The heaviest section must align with the primary target queries.** If the article targets "German visa requirements" as its primary query, the heaviest section must be the one that directly addresses visa requirements — not the section about visa costs or processing time.

Misalignment between the heaviest section and the target queries creates a signal mismatch. The algorithm sees the document spending most of its depth on a subtopic rather than the main topic, which reduces the document's relevance score for the primary query.

### Macro Context Must Touch All Subsections

The macro context is the overarching topic that unifies all sections. For an article about "German visa requirements," the macro context is the German visa process. Every section must be interpretable through this macro context.

The macro context must "touch" all subsections, meaning:
- Every heading must be understandable as a subtopic of the macro context
- No heading should require a different macro context to make sense
- The connection between each heading and the macro context should be explicit, not implied

If a heading like "Best restaurants in Berlin" appears in an article about German visa requirements, the macro context does not touch that section. It belongs to a different macro context (Berlin tourism or dining). It must be removed or replaced with a heading that fits within the visa requirements macro context.

### Contextual Bridges Between Sections

Every section ending must create a bridge to the next heading. The bridge is a concept, entity, or attribute mentioned at the end of one section that the next section's heading directly addresses.

Example bridge:
- Section: "What are the requirements for a German tourist visa?"
- Last sentence: "All required documents must be submitted along with the visa application fee."
- Next heading: "How much does a German visa cost?"

The word "fee" at the end of the requirements section bridges to the cost section. The reader's natural next question after learning about required documents and a fee is "How much does it cost?" The contextual vector flows.

Without bridges, sections feel like disconnected blocks. The algorithm cannot construct a coherent document-level understanding, and the contextual vector breaks.

## Testing the Contextual Vector

Two tests determine whether a contextual vector is coherent.

### Extractive Summary Test

**Process:**
1. Take the single most important sentence from each section (the key sentence, usually the first sentence that directly answers the heading's question)
2. Place these sentences in sequence, one after another, in heading order
3. Read the resulting paragraph

**Pass condition:** The extracted sentences form a coherent, readable paragraph that logically progresses from start to finish. A reader unfamiliar with the full article could read this paragraph and understand the topic's key points in a logical order.

**Fail condition:** The extracted sentences feel disjointed, jump between unrelated ideas, or contain non-sequiturs. If sentence 3 has no logical connection to sentence 2 or sentence 4, the vector is broken at that point.

Example pass:
"Germany offers five main visa types for international travelers. The tourist visa requires a valid passport, proof of accommodation, and travel insurance. The visa application fee is 80 EUR for adults and 40 EUR for children under 12. Processing takes 15 business days from the date of submission. Applicants must submit a completed application form, passport photos, and supporting financial documents. Applications are submitted at the German embassy or consulate in the applicant's country of residence."

Each sentence follows from the previous one. The paragraph reads as a coherent summary.

Example fail:
"Germany offers five main visa types for international travelers. Berlin is the most popular destination for tourists visiting Germany. The visa application fee is 80 EUR for adults. German immigration policy has evolved significantly since the 1990s. Applicants must submit a completed application form."

Sentence 2 (Berlin tourism) and sentence 4 (immigration history) break the flow. The extractive summary test fails.

### Abstractive Summary Test

**Process:**
1. Provide the full article to an AI summarization system (or summarize it yourself as if explaining the article to someone)
2. Read the generated summary
3. Compare it to your intended topic and target queries

**Pass condition:** The AI-generated summary matches the intended topic. If the article is about "German visa requirements," the summary should be about German visa requirements — not about Germany in general, not about Berlin, not about immigration history.

**Fail condition:** The summary drifts to a different topic, emphasizes the wrong subtopic, or fails to mention the primary target query's subject. This indicates that the contextual vector has led the document's overall meaning away from the intended target.

### When Both Tests Fail

If both the extractive and abstractive summary tests fail, the contextual vector is fundamentally broken. The heading sequence does not form a coherent document, and the article will struggle to rank for any query because the algorithm cannot determine what the document is about.

This requires structural intervention — not just editing sentences, but reordering, removing, or adding entire sections.

## Repair Process

### Step 1: Identify Break Points

Run the extractive summary test and mark every point where the flow breaks — where one extracted sentence does not logically follow the previous one. These are the break points in the vector.

### Step 2: Diagnose the Cause

Each break point has one of three causes:

1. **Wrong order**: The headings are correct but sequenced incorrectly. The cost section appears before the requirements section, but the bridge from requirements to cost is natural. Fix: reorder.

2. **Irrelevant section**: A heading does not belong in this article's macro context. The heading about Berlin restaurants does not fit in a visa requirements article. Fix: remove.

3. **Missing bridge section**: Two headings are both relevant but have no logical connection to each other. A section is missing between them that would serve as a bridge. Fix: add a new section.

### Step 3: Apply Fixes

**Reordering:** Move sections to positions where they connect naturally to their neighbors. Use the bridge test — can you write a natural final sentence for section N that leads into section N+1's heading? If yes, the order works.

**Removing:** Delete sections that belong to a different macro context. If the heading cannot be understood as a subtopic of the article's primary topic, it does not belong.

**Adding:** Insert bridge sections that connect two relevant but disconnected headings. The bridge section's heading should address the concept that links the two disconnected headings.

### Step 4: Re-test

After applying fixes, run both tests again. The extractive summary must now read as a coherent paragraph. The abstractive summary must match the intended topic. If either test still fails, repeat the repair process.

## Harmony Across Content Brief Columns

The contextual vector must maintain harmony across all four content brief columns:

1. **Entities column**: The entities mentioned should progress logically. The article should not jump from discussing entity A to entity C without connecting through entity B if B is the bridge.

2. **Attributes column**: Attributes should be grouped and sequenced. All cost-related attributes together, all time-related attributes together, all location-related attributes together.

3. **Values column**: Values should maintain internal consistency. If one section states a visa costs 80 EUR, a later section should not imply a different cost without explanation.

4. **Queries column**: The queries each section targets should progress from broad to specific, or from most important to least important, matching user search behavior.

When all four columns flow in harmony, the contextual vector is optimized. When one column creates a contradiction or disconnection, it breaks the vector even if the other three columns flow correctly.

## Output Format

The contextual vector optimizer produces:

```
CONTEXTUAL VECTOR AUDIT
========================
Extractive Summary Test: PASS / FAIL
Abstractive Summary Test: PASS / FAIL

Break Points Identified:
- Between H2.3 and H2.4: Topic jump from [topic A] to [topic B]
- H2.5: Does not fit macro context [macro context description]

Recommended Fixes:
1. REORDER: Move H2.4 to position after H2.6
2. REMOVE: H2.5 (belongs to different macro context)
3. ADD: New section between H2.3 and H2.4 bridging [concept A] to [concept B]

Optimized Heading Sequence:
H2.1: [heading] -> bridge: [bridge concept]
H2.2: [heading] -> bridge: [bridge concept]
H2.3: [heading] -> bridge: [bridge concept]
...

Heaviest Section: H2.X — aligns with primary query: [query] — CONFIRMED / MISALIGNED
```

## Advanced Contextual Vector Concepts

### Contextual Coverage Balance
Contextual coverage = the proportion of document sections dedicated to a specific context vs other contexts. If a context is heavily and vastly processed, it dilutes the prominence of other sections. If processed too lightly but connected to query interpretations, it decreases relevance. The optimizer must calculate optimal coverage ratios for each context within a document.

### Contextual Flow Optimization
The ORDER of contextual vectors determines relevance. Processing the same content in different order creates different click satisfaction scores. Heading formats, heading words, and heading hierarchies change context priority. Optimize flow to match the most probable query interpretation first, then cascade to secondary and tertiary interpretations.

### Contextual Hierarchy Signaling
Contextual hierarchy is represented through typography, visuals, and section coverage. Larger headings, more content, and higher placement = higher contextual weight. This hierarchy changes the weight of internal links for both relevance and PageRank distribution. Ensure hierarchy matches the importance of each context to your source context.

### Macro-Context to Query Context Matching
If the macro-context of the document doesn't match the query context, the entity inside the query is NOT covered with proper context — even if it's mentioned. Example: Processing "LiFePO4" directly with "Electric Scooter" in H1 dilutes context. Processing it in a separate document about battery materials, then connecting to the electric scooter context, is correct.

## Common Errors

1. **Optimizing sections in isolation**: Improving individual sections without checking how they connect to their neighbors. Every edit must be evaluated in the context of the full vector.
2. **Forcing bridges with filler**: Writing bridge sentences that contain no real information just to create a connection. Bridges must introduce genuine contextual links.
3. **Ignoring the heaviest section**: Allowing the longest or most detailed section to cover a secondary topic while the primary topic gets minimal coverage.
4. **Passing the extractive test but failing the abstractive test**: The sentences flow grammatically but the overall meaning drifts. Both tests must pass independently.
5. **Over-removal**: Deleting too many sections to fix the vector, resulting in thin content that lacks sufficient coverage. Removal should be the last resort after reordering fails.
