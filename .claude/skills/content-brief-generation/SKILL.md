---
name: content-brief-generation
description: "Generate comprehensive content briefs using Koray Tugberk Gubur's 4-column system: Contextual Vector, Contextual Hierarchy, Contextual Structure, and Contextual Connections. Use this skill whenever the user needs a content brief, article blueprint, SEO brief, heading order planning, content planning document, or wants to define the full structure of an article before writing. Trigger for any request involving content briefs, heading structure, section planning, internal link mapping within articles, or detailed article outlines for a semantic content network."
---

# Content Brief Generation (The 4-Column System)

A content brief is the complete blueprint for a single article. It defines not just WHAT to write, but the ORDER of information, the WEIGHT of each section, the FORMAT of each section, and the CONNECTIONS each section makes to other articles. Koray's system uses four columns that together fully specify a document before a single word of body copy is written.

## Brand Identity Integration

Before generating any content brief, check if a Brand Identity Document exists from Skill 31 (brand-identity-voice). If it does, incorporate these elements into every brief:

- Add a **"Tone"** field to the brief header with the tone descriptor for this content type (from the Voice & Tone Guide)
- Include **Power Words** from the brand vocabulary in the required terms alongside SEO terms
- Apply **Forbidden Words** as a negative filter — flag any heading or structure instruction that would require a forbidden word
- Insert **CTA placement** into the Contextual Structure column at the position specified by the CTA Map (typically after the heaviest coverage section and at the article end)
- Note the **reading level** constraint so the Contextual Structure instructions match the brand's grade target
- Reference the **Brand Voice Cheat Sheet** in the brief header so authors have it alongside SEO instructions

The brand guidelines operate as a layer ON TOP of the semantic structure — they don't replace any SEO element, they flavor it.

## The 4-Column System

Every content brief is a table with four columns. Each row represents one section (heading) of the article. Together the columns answer: What order? What weight? What format? What links?

### Column 1: Contextual Vector (The Ordered Heading Sequence)

The contextual vector is the ordered list of headings from first to last. This sequence forms a "straight line" through the topic — each section logically bridges to the next, creating a coherent narrative flow from the opening heading to the final heading.

**The Straight Line Principle:**
If you read ONLY the headings in order (ignoring body text), they must tell a coherent, logical story. There should be no jarring jumps, no out-of-place topics, no sections that break the narrative thread.

**How to test the straight line:**
1. List all headings in order
2. Read them aloud as a sequence
3. Ask: does each heading naturally follow from the previous one?
4. Ask: would a reader expect this topic to come next?

**Bridging rule:** Each section must share at least one concept with the section immediately before it and the section immediately after it. This shared concept is the bridge.

**Example of a valid straight line:**
1. What Is a German Work Visa?
2. Types of German Work Visas
3. Requirements for Each Visa Type
4. Documents Needed for Application
5. Application Process Step by Step
6. Processing Times and Fees
7. Common Rejection Reasons
8. What to Do After Approval

Each heading flows naturally into the next. "Types" leads to "Requirements for each type." "Documents needed" leads to "Application process." The vector has no breaks.

**Macro-to-Micro flow:** The contextual vector typically moves from broad/general (macro context) at the top to narrow/specific (micro context) at the bottom. The main topic dominates the first 60-70% of headings. The supplementary/contextual topic appears in the final 30-40%.

### Column 2: Contextual Hierarchy (Heading Levels H1-H4)

The hierarchy assigns a heading level to each section, determining its weight and prominence in the document.

**H1:** The article title. One per document. Contains the primary entity-attribute pair and ideally the central search intent predicates.

**H2:** Major sections. These are the primary divisions of the article. Each H2 represents a significant subtopic. Typically 4-8 H2s per article.

**H3:** Subsections within an H2. These break down a major section into components. Not every H2 needs H3s — only use them when the H2 topic genuinely has distinct parts.

**H4:** Sub-subsections. Rare. Used only when an H3 itself has distinct components that need individual treatment. Overuse of H4 signals the article may need splitting into multiple articles.

**Weight principle:** Higher heading levels carry more semantic weight. The H1 is the strongest signal. H2s define the primary topical coverage. H3s add granularity. The search engine uses heading hierarchy to understand which concepts are primary vs. supporting.

**Nesting rule:** Never skip levels. An H4 must be inside an H3, which must be inside an H2. An H3 cannot appear directly under H1 without an H2 parent.

### Column 3: Contextual Structure (Format Specifications)

The contextual structure column specifies the FORMAT of each section's content. This is where you define whether a section should be a paragraph, a table, a list, an image, or a combination.

**Format types and when to use them:**

- **Paragraph:** For explanatory content, definitions, narratives, and contextual descriptions. Use when the information is best expressed as flowing prose.
- **Unordered list (bullet points):** For collections of items where order does not matter. Requirements, features, characteristics.
- **Ordered list (numbered):** For sequences, steps, rankings, or processes where order matters.
- **Table:** For comparisons, specifications, structured data with multiple attributes per item. Specify column names and approximate row count.
- **Definition list:** For glossary-style entries, term-definition pairs.
- **Image/diagram:** Specify the subject, type (photo, diagram, chart, infographic), and alt text requirements.
- **Statistics block:** For data-heavy sections. Specify the type of statistics needed (percentages, counts, comparisons, trends).

**Specification depth:** For each section, the structure column should include:
- Primary format (paragraph, table, list, etc.)
- If table: column names, approximate row count
- If list: approximate item count
- If image: subject description, alt text guidance
- If statistics: what data points are needed
- Word count estimate for the section
- Any specific data sources or reference requirements

**Example structure specifications:**
```
H2: Types of German Work Visas
Format: Table
Columns: Visa Type | Eligibility | Duration | Key Requirements
Rows: ~6 (one per visa type)
Followed by: 1 paragraph summarizing which type is most common
Word count: ~300
```

### Column 4: Contextual Connections (Internal Links)

The contextual connections column defines every internal link that should appear in each section: the anchor text, the target URL, and the bidirectional confirmation that the target article links back.

**For each link, specify:**
1. **Anchor text:** The exact clickable text (or a close variant). Anchor text must be semantically relevant to the target page.
2. **Link target:** The specific article/URL being linked to.
3. **Bidirectional confirmation:** Whether the target article also links back to this one. Mark with a checkmark or "confirmed" / "pending."
4. **Link placement note:** Where in the section the link naturally fits (beginning, middle, end, or within a specific sentence context).

**Bidirectional linking rule:** Every internal link should ideally be reciprocal. If Article A links to Article B, then Article B should link back to Article A. The anchor text in each direction will differ (each article uses anchor text relevant to the OTHER article's topic).

**Color coding convention:**
- **Red text** = The target article has NOT yet been written, OR the reciprocal link has NOT yet been placed. Red items are action items that need resolution.
- **Black/normal text** = The target article exists AND the reciprocal link is confirmed.

This color coding creates a visual dashboard of the content network's completion status.

## The Macro-Micro Context Border

Every article has a border point where the MAIN topic (macro context) ends and the SUPPLEMENTARY topic (micro context) begins.

**Identifying the border:**
- The macro context covers the primary entity-attribute pair from the title
- The micro context introduces the secondary/contextual topic that connects this article to the broader network
- The border typically falls around the 60-70% mark of the article

**Why the border matters:**
- It determines where the article's primary relevance ends
- It signals to the search engine what this page is MAINLY about vs. what it connects to
- It guides internal linking density (more links to core topics in the macro section, more links to contextual topics in the micro section)

**Marking the border:** In the content brief, draw a clear line between the last macro-context heading and the first micro-context heading. Label it "CONTEXT BORDER."

## The Extractive/Abstractive Summary Test

After completing the content brief, perform this quality check:

1. **Extract** the first sentence (or key sentence) from each section's planned content
2. **Read** these extracted sentences in order
3. **Ask:** Do they form a coherent summary of the article?

If YES: The contextual vector is sound. The straight line holds.
If NO: The heading order needs adjustment. Sections are out of sequence or missing bridging concepts.

This test ensures that the article will produce a strong extractive summary (which search engines use for featured snippets and passage ranking).

## Italic Formatting Conventions for Directional Hints

Within content briefs, use italic text to provide directional hints to authors — guidance about tone, approach, or emphasis that is NOT part of the actual content.

**Examples of italic directional hints:**
- *Emphasize that this is the most common visa type*
- *Tone: reassuring, address common anxieties*
- *Bridge to the next section by mentioning processing times*
- *This section should feel like a practical checklist, not academic prose*
- *Connect back to the central search intent here*

Italic hints are instructions for the writer. They never appear in the published article. They guide the author toward the correct contextual vector without dictating exact wording.

## Output Template

```
# Content Brief: [Article Title]

## Article Metadata
- **Target URL:** [url]
- **Page Type:** Root / Seed / Node
- **Parent Page:** [title + url]
- **Central Search Intent Alignment:** [how this article serves the CSI]
- **Macro Context:** [primary topic]
- **Micro Context:** [secondary/supplementary topic]

## 4-Column Content Brief

| # | Contextual Vector (Heading) | Contextual Hierarchy | Contextual Structure | Contextual Connections |
|---|---------------------------|---------------------|---------------------|----------------------|
| 1 | [H1 Title] | H1 | [format spec] | — |
| 2 | [First H2] | H2 | [format spec] | [Link 1: anchor → target (confirmed/pending)] |
| 3 | [H3 under first H2] | H3 | [format spec] | [Link 2: anchor → target (confirmed/pending)] |
| 4 | [Second H2] | H2 | [format spec] | — |
| — | **--- CONTEXT BORDER ---** | — | — | — |
| 5 | [Micro context H2] | H2 | [format spec] | [Link 3: anchor → target (confirmed/pending)] |
| 6 | [Final H2] | H2 | [format spec] | [Link 4: anchor → target (confirmed/pending)] |

## Straight Line Validation
[List headings in order — confirm logical flow]

## Extractive Summary Test
[One key sentence per section, read in order — confirm coherence]

## Link Status Dashboard
| Target Article | Anchor Text (This → Target) | Anchor Text (Target → This) | Status |
|---------------|----------------------------|----------------------------|--------|
| [article] | [anchor] | [anchor] | Confirmed / RED: Pending |

## Author Directions
[Italic directional hints compiled in order of sections]
```

## Advanced Content Brief Principles

### Relevance vs Responsiveness in Brief Design
Design content briefs with BOTH goals: (1) Relevance — optimize term weight, co-occurrence patterns, BM25/TF-IDF alignment for IR score. (2) Responsiveness — include direct answers, query-question-answer pairings for Information Extraction. A highly relevant document that doesn't directly answer questions will lose to a less relevant but more responsive one for featured snippets and passage indexing.

### Contextual Vector Integrity
The contextual vector must flow unbroken through the content brief. Contextual coverage (proportion of sections for each context) must not dilute the macro-context. If a context is heavily processed, it dilutes other sections' prominence. If processed too lightly but connected to query interpretations, it decreases relevance. Balance is critical.

### Historical Data Generation Focus
Every content brief should be designed to generate POSITIVE historical data — content that encourages quality user engagement (deep reading, clicking internal links, completing session goals). Non-quality engagement from 6 months ago causes current ranking loss. Design briefs that anticipate user behavior patterns and guide them toward quality sessions.

### H2 and H3 Strategy
H2 = Grouper Question (Short Form Question Answering). H3 = Conditions and qualifiers as connected questions. Word count in the question does NOT determine whether it's long-form or short-form QA. The structural role of the heading determines its type. Design heading hierarchy to match this pattern.

## Connecting to Other Skills
- **Input from:** Processed Topical Map (Skill 6), Information Architecture (Skill 7), Lexical Relations (Skill 4)
- **Output to:** Root Document Brief (Skill 9), Content Brief Scaling (Skill 10), Algorithmic Authorship (Skill 11)
