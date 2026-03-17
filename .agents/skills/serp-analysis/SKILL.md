---
name: serp-analysis
description: "Analyze SERPs and generate content format recommendations optimized for featured snippets, PAA boxes, and other SERP features. Use this skill whenever the user needs SERP analysis, featured snippet targeting, People Also Ask optimization, search result format recommendations, or answer optimization strategies. Trigger for any SERP analysis, snippet targeting, or search result optimization request."
---

# SERP Analysis

name: serp-analysis
description: Use when users mention SERP analysis, featured snippet, People Also Ask, search results analysis, SERP features, answer optimization, snippet targeting, or search result optimization.

---

## Purpose

SERP analysis is the practice of examining live search engine results pages to understand what format, structure, and content characteristics search engines prefer for specific queries. This skill teaches agents how to analyze SERPs to guide content creation, target featured snippets and People Also Ask boxes, optimize answer formats, and align content with the implicit expectations encoded in search results. The analysis directly informs author guidance, content brief specifications, and on-page optimization decisions.

---

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, replace manual SERP checking with automated analysis:

1. **Run `serp_analysis`** for every target query in your content briefs:
   ```bash
   python web-research-engine/scripts/web_research.py --mode serp_analysis --query "[target query]" --country [target-country] --output /tmp/serp_analysis.json
   ```
2. The output tells you: what content format dominates (list/guide/comparison), whether a featured snippet exists and in what format, what PAA questions appear, and what SERP features are present
3. **Run `paa_discovery`** to get a complete list of PAA questions for featured snippet targeting:
   ```bash
   python web-research-engine/scripts/web_research.py --mode paa_discovery --query "[target query]" --country [target-country] --output /tmp/paa_targets.json
   ```
4. Map the discovered PAA questions directly into your content brief's question generation
5. Match your content format to what's winning the featured snippet — if tables dominate, your Contextual Structure should specify tables

For batch SERP analysis across all your target keywords, create a queries.json with all keywords set to `serp_analysis` mode and run in batch.

## Core Concepts

### SERP Screenshot Analysis for Author Guidance

Before writing any article, the SERP for the target query should be analyzed through screenshots. This analysis reveals:

- **What content format ranks:** Are the top results lists, tables, long-form guides, short answers, or video content? The format that dominates the SERP is the format the search engine considers most appropriate for that query.
- **What depth is expected:** Are top results 500-word quick answers or 3,000-word comprehensive guides? Match the depth expectation.
- **What entities appear:** Which entities, brands, or concepts appear consistently across top results? These are required elements for competitive content.
- **What SERP features are present:** Featured snippets, PAA boxes, knowledge panels, image packs, video carousels -- each feature signals a content opportunity.
- **What is missing:** Gaps in current results represent opportunities. If no result adequately answers the query, the opportunity is to be the first.

This analysis should be included in content briefs as author guidance -- explicit instructions on format, depth, required entities, and structural requirements based on what the SERP reveals.

### Format Recommendations Per Query

Different query types demand different content formats. The SERP analysis reveals which format to use:

**List format:**
- Triggered by queries containing "best," "top," "ways to," "types of," "examples of"
- SERP typically shows numbered or bulleted lists in featured snippets
- Content should use clear, numbered/bulleted list structure with descriptive list items
- Each list item should be substantive enough to stand alone but concise enough to scan

**Table format:**
- Triggered by comparison queries, specification queries, data-heavy queries
- SERP may show table featured snippets or results with inline tables
- Content should use HTML tables with clear headers, consistent data formatting
- Tables are especially effective for "vs" queries and "compared to" queries

**Paragraph format:**
- Triggered by definitional queries, explanatory queries, "what is" and "why" queries
- SERP shows paragraph-style featured snippets
- Content should provide a clear, concise paragraph answer near the top of the page, followed by deeper explanation
- The target paragraph should be 40-60 words for optimal snippet extraction

**Definitive answer format:**
- Triggered by factual queries with a single correct answer (dates, names, quantities, yes/no)
- SERP shows direct answer boxes or short featured snippets
- Content should state the definitive answer immediately, then provide context
- The answer should appear in the first sentence of the relevant section

### Featured Snippet Targeting

Featured snippets occupy "Position 0" -- above all organic results. To target them:

**Length constraint:** Featured snippet text is typically under 40 words or 320 characters. The target answer passage in your content must fit within this constraint while being complete and self-contained.

**Structure requirements:**
- For paragraph snippets: Write a clear, direct answer in one concise paragraph. Place it immediately after the heading that matches the query.
- For list snippets: Use an ordered or unordered list with clear, descriptive items. The heading above the list should closely match the query.
- For table snippets: Use a well-structured HTML table with clear column headers. Data should be formatted consistently.

**Placement:** The snippet-target passage should appear within the first 30% of the article, ideally directly under an H2 or H3 heading that mirrors the target query.

**Query-heading alignment:** The heading immediately above the target passage should closely match (or exactly match) the search query. This is the strongest signal for snippet extraction.

### PAA Box Optimization

People Also Ask boxes present related questions that expand to show answers. Optimizing for PAA:

**Answer format:** PAA answers are displayed as a single, definitive sentence or very short paragraph. The ideal PAA answer is one clear sentence that directly answers the question, followed by 1-2 supporting sentences.

**Question-answer proximity:** On the page, the question (as a heading) and its answer (as the immediately following text) must be in direct proximity. No introductory preamble between the heading-question and the answer.

**Definitive phrasing:** PAA answers should start with the answer, not build up to it. Begin with the fact, then explain.

Poor PAA targeting: "Many people wonder about this topic. There are several factors to consider. The answer is X."
Strong PAA targeting: "X is the answer because [reason]. This means [implication]."

**Coverage strategy:** Identify all PAA questions that appear for your target queries. Each PAA question should be addressed as a section (with an H2 or H3 heading matching the question) within a relevant article in the content network.

### Consensus Callout Patterns

When multiple search results agree on a particular point, this represents a consensus that the search engine has identified. Content that aligns with this consensus is more likely to be featured. When content diverges from consensus, it needs strong supporting evidence.

- **Identify consensus claims:** What facts, recommendations, or conclusions appear across 3+ top-ranking results? These are consensus positions.
- **Align with consensus by default:** Unless you have authoritative evidence to the contrary, your content should agree with consensus claims.
- **Callout divergence explicitly:** If your content deliberately diverges from consensus (because you have better data or a more current source), explicitly acknowledge the consensus and explain why your position differs. This demonstrates expertise rather than ignorance.

### Semantic Order in Answers

The order in which information is presented matters for search engine evaluation. Answers should follow a logical semantic progression:

1. **Direct answer first:** State the core answer immediately.
2. **Context second:** Provide the necessary context for understanding the answer.
3. **Evidence third:** Support the answer with data, examples, or citations.
4. **Nuance fourth:** Address edge cases, exceptions, or qualifications.
5. **Related information last:** Connect to related topics or next steps.

This order mirrors how search engines evaluate answer quality -- the most relevant information should be most prominent, with supporting detail flowing naturally afterward.

### Representative vs Implicit Questions

SERP analysis reveals two types of questions:

**Representative questions:** The explicit query the user typed. This is what appears in the search bar and what the page's primary heading should address directly.

**Implicit questions:** Questions that the user did not type but that the SERP reveals they likely have. These are visible through:
- PAA box questions
- Related searches at the bottom of the SERP
- Questions addressed in top-ranking content that go beyond the explicit query
- Knowledge panel information that provides context beyond the query

Both representative and implicit questions should be addressed in the content. The representative question gets the primary heading and featured snippet-targeted answer. Implicit questions get secondary headings and PAA-targeted answers.

### Answer Term Inclusion Strategy

SERP analysis reveals which specific terms appear consistently across top-ranking results for a query. These "answer terms" must be included in your content:

- **Identify answer terms:** Extract the terms that appear in 3+ of the top 5 results for the target query.
- **Include naturally:** These terms should appear in your content in natural, contextually appropriate positions -- not forced or keyword-stuffed.
- **Prioritize in answer passages:** Answer terms should appear with highest density in the specific paragraph or section targeting the featured snippet or PAA answer.
- **Check for missing terms:** If a term appears in all top results but is absent from your content, this is a significant gap that needs to be filled.

### First Word Sequence Optimization

The first 3-5 words of an answer are disproportionately important for snippet selection and relevance scoring. Optimize the opening word sequence:

- **Start with the answer, not the setup:** "Vitamin D helps..." rather than "When it comes to vitamins..."
- **Include the primary entity in the first 5 words:** The main subject of the query should appear at the very beginning of the answer.
- **Use active, definitive language:** "X is..." "X works by..." "The best X is..." rather than "It is commonly believed that..." or "Many experts suggest that..."
- **Match the query's language:** If the query asks "How does X work?" start the answer with "X works by..." not "The mechanism of X involves..."

---

## Implementation Guidance

When advising on SERP analysis:

1. **Capture SERP state:** For each target query, document the current SERP layout including organic results, featured snippets, PAA boxes, knowledge panels, and other features.

2. **Identify format requirements:** Based on the SERP, specify whether the content should use list, table, paragraph, or definitive answer format.

3. **Extract answer terms:** Compile the terms that appear consistently across top results and include them in the content brief.

4. **Map PAA questions:** List all PAA questions that appear and assign each to an article in the content network.

5. **Define snippet targets:** For each article, identify the specific heading and passage that should target the featured snippet, with the passage kept under 40 words/320 characters.

6. **Include SERP guidance in briefs:** Content briefs should contain explicit SERP analysis findings including format recommendation, answer terms, PAA questions to address, snippet target specifications, and first-word sequence guidance.

7. **Re-analyze periodically:** SERPs change as search engines update. Re-analyze target SERPs quarterly to ensure content remains aligned with current expectations.

---

## Advanced SERP Analysis Concepts

### Quality Threshold Assessment
Analyze both the most AND least quality sources on the SERP to determine the quality threshold for ranking. The gap between the best and worst ranking pages defines what search engines consider acceptable. Your content must exceed the quality of the weakest ranking competitor while approaching the quality of the strongest.

### Relevance Threshold Mapping
Assess the term weight patterns of top-ranking pages. Identify: common co-occurrence pairs, term saturation levels, contextual term distribution. This reveals the relevance threshold — the minimum IR score pattern needed to rank. Map these patterns and ensure your content matches or exceeds them.

### Predictive Ranking Analysis
Don't just analyze current SERPs — predict how rankings might change. Identify concept groups where semantic distances are shifting (new SERP features appearing, PAA questions changing, related searches evolving). These shifts signal upcoming re-ranking events where prepared content can capture positions.

### Three Ranking States
Recognize three ranking states for any document: positive (improving positions), negative (declining positions), and neutral (stable positions). Analyze which state each SERP competitor is in by tracking position changes over time. Target competitors in negative states — their declining positions create opportunities.

### SERP Features as Query Interpretation Signals
SERP features reveal how search engines interpret queries. Featured snippets signal informational short-form QA. Image packs signal visual information needs. Local packs signal location intent. PAA boxes reveal representative queries and related search paths. Use SERP feature composition to decode the query's full interpretation spectrum.

### Understanding SERP vs Imitating SERP
"Imitating the SERP won't always solve the problem, but understanding the REASON behind the SERP will." Analyze WHY each result ranks — what quality, relevance, and responsiveness signals does it provide? Simply matching the format of top results without matching their underlying signals produces surface-level content that won't sustain rankings.

---

## Data Input Integration (Skill 33)

When Skill 33 has been run, the **Keyword Intelligence Report** includes SERP feature data for every keyword — which queries trigger Featured Snippets, PAA boxes, Image Packs, Video Carousels, and Knowledge Panels. Use this pre-mapped SERP feature landscape to identify your highest-opportunity targets before conducting deeper individual SERP analysis. Focus your detailed analysis on queries where SERP features exist but current holders show quality threshold gaps.

## Key Principles Summary

- Analyze SERP screenshots before writing any article to inform format, depth, and structure
- Match content format to query type: lists, tables, paragraphs, or definitive answers
- Target featured snippets with passages under 40 words/320 characters placed under query-matching headings
- Optimize for PAA with single definitive sentences immediately following question headings
- Identify and align with consensus positions across top-ranking results
- Follow semantic order: answer first, context second, evidence third, nuance fourth
- Address both representative (explicit) and implicit questions revealed by the SERP
- Include answer terms that appear consistently across top results
- Optimize first word sequences to lead with the answer and primary entity
