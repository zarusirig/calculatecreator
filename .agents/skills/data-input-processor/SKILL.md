---
name: data-input-processor
description: "Parse and structure external data inputs for the Semantic SEO skill pipeline — keyword exports (CSV/XLSX from Ahrefs, SEMrush, Google Keyword Planner, Moz, Ubersuggest, Mangools), Deep Research reports (ChatGPT, Gemini, Perplexity, Claude), and competitor analysis data. Use this skill FIRST when the user provides keyword files, research reports, or competitor data before running any other Semantic SEO skill. This skill normalizes all data into a standardized format that feeds directly into Skills 1-32."
---

# Data Input Processor (Skill 33)

This skill is the **data ingestion gateway** for the entire Semantic SEO pipeline. It parses raw external data — keyword exports, AI deep research reports, competitor analysis files — and structures them into standardized formats that every downstream skill can consume.

**Run this skill BEFORE any other skill when you have external data to feed in.**

## Why This Skill Exists

Without real data, skills work from Claude's general knowledge. With real data, skills work from YOUR niche's actual search landscape — real query volumes, real competitor structures, real SERP compositions, real entity relationships. The difference in output quality is massive.

## Supported Input Types

### 1. Keyword Tool Exports

#### Ahrefs Exports
- **Keyword Explorer CSV/XLSX**: Columns typically include `Keyword`, `Volume`, `KD`, `CPC`, `Clicks`, `CPS`, `Parent Topic`, `SERP Features`
- **Site Explorer Organic Keywords**: `Keyword`, `Volume`, `Position`, `URL`, `Traffic`, `Traffic %`
- **Content Gap**: `Keyword`, `Volume`, `KD`, competitor columns showing positions
- **Batch Analysis**: domain-level metrics

**Parsing instructions:**
```
1. Read CSV/XLSX file
2. Identify column headers (Ahrefs uses specific naming)
3. Extract: keyword, search_volume, keyword_difficulty, cpc, clicks, parent_topic, serp_features
4. Group by Parent Topic for initial clustering
5. Flag keywords with SERP features (Featured Snippets, PAA, Image Pack, etc.)
6. Sort by Volume descending within each cluster
```

#### SEMrush Exports
- **Keyword Magic Tool**: `Keyword`, `Volume`, `Trend`, `KD%`, `CPC`, `Com.`, `Results`, `Intent`, `SF`
- **Organic Research**: `Keyword`, `Position`, `Volume`, `URL`, `Traffic`, `Traffic Cost`
- **Keyword Gap**: `Keyword`, `Volume`, competitor position columns, `Missing`, `Weak`, `Strong`

**Parsing instructions:**
```
1. Read CSV/XLSX file
2. Map SEMrush intent codes: I=Informational, N=Navigational, C=Commercial, T=Transactional
3. Extract: keyword, search_volume, difficulty, cpc, intent_type, serp_features, trend
4. Group by intent type for initial classification
5. Map "Missing" keywords as high-priority gaps
6. Sort by Volume within intent groups
```

#### Google Keyword Planner Exports
- **Keyword Ideas CSV**: `Keyword`, `Avg. monthly searches`, `Competition`, `Top of page bid (low)`, `Top of page bid (high)`
- Competition values: Low, Medium, High

**Parsing instructions:**
```
1. Read CSV file
2. Extract: keyword, search_volume (avg monthly), competition_level, cpc_low, cpc_high
3. Note: GKP volumes are ranges — use midpoint for sorting
4. No intent classification provided — will be inferred by downstream skills
5. Group by semantic similarity (first 2-3 words)
```

#### Moz / Ubersuggest / Mangools Exports
- Similar column structures with tool-specific naming
- Normalize to the standard schema (see Output Format below)

### 2. Deep Research Reports

#### ChatGPT Deep Research
- Format: Long-form markdown or text output
- Contains: Analysis, findings, citations, structured arguments
- May include: Tables, lists, referenced URLs

**Parsing instructions:**
```
1. Read the full text content
2. Extract ENTITIES: every noun phrase that represents a concept, brand, product, or topic
3. Extract ATTRIBUTES: every descriptor, qualifier, or property mentioned
4. Extract RELATIONSHIPS: how entities connect (X is-a Y, X has Y, X causes Y)
5. Extract FACTS: specific claims with data points, statistics, percentages
6. Extract QUESTIONS: any questions mentioned or implied
7. Extract COMPETITORS: any brands, websites, or sources mentioned
8. Extract SERP INSIGHTS: any mentions of what ranks, what Google shows
9. Preserve SOURCE URLS: any cited links for fact-checking
```

#### Gemini Deep Research
- Format: Structured report with sections, often with inline citations
- Contains: Multi-source synthesis, comparative analysis
- May include: Confidence indicators, source quality notes

**Parsing instructions:**
```
Same as ChatGPT, plus:
- Extract CONFIDENCE LEVELS if Gemini provides them
- Note CONFLICTING SOURCES where Gemini flags disagreement
- Map MULTI-SOURCE CLAIMS (facts confirmed by 3+ sources get higher weight)
```

#### Perplexity Research
- Format: Concise answers with numbered citations
- Contains: Direct answers, follow-up suggestions, source links
- Typically more citation-dense than ChatGPT

**Parsing instructions:**
```
Same as ChatGPT, plus:
- Map EVERY citation to its claim
- Extract FOLLOW-UP QUESTIONS Perplexity suggests (these are PAA-adjacent)
- Note SOURCE DIVERSITY (how many unique domains cited)
```

#### Claude Research
- Format: Thorough analysis, often with structured reasoning
- Contains: Nuanced analysis, multiple perspectives, caveats

**Parsing instructions:**
```
Same as ChatGPT, plus:
- Extract CAVEATS and LIMITATIONS mentioned
- Note ALTERNATIVE PERSPECTIVES provided
- Map REASONING CHAINS (if X then Y because Z)
```

### 3. Competitor Analysis Data

#### Manual Competitor URL Lists
- Format: Simple list of URLs or domains
- Processing: Feed into Skill 22 (Competitive Gap Analysis) and Skill 32 (Web Research Engine)

#### Competitor Content Exports
- Format: Screaming Frog exports, Sitebulb crawl data, or manual page lists
- Columns may include: URL, Title, H1, Word Count, Internal Links, External Links, Status Code

**Parsing instructions:**
```
1. Read CSV/XLSX
2. Extract: url, title, h1, word_count, internal_links, external_links, status_code
3. Group by URL path segments to identify site sections
4. Calculate content depth per section
5. Identify their topical map structure from URL patterns
6. Flag thin content (low word count), orphan pages (low internal links)
```

## Step-by-Step Processing Workflow

### Phase 1: Ingest and Normalize

For each uploaded file:

1. **Detect file type** (CSV, XLSX, MD, TXT, DOCX, JSON)
2. **Detect source tool** from column headers or content patterns
3. **Parse into rows/records** using appropriate reader
4. **Normalize column names** to standard schema:

```
STANDARD KEYWORD SCHEMA:
| Field | Type | Source Mapping |
|-------|------|---------------|
| keyword | string | All tools |
| search_volume | integer | Volume, Avg. monthly searches |
| difficulty | integer | KD, KD%, Keyword Difficulty |
| cpc | float | CPC, Top of page bid |
| intent | string | Intent (SEMrush), inferred otherwise |
| serp_features | list | SF, SERP Features |
| parent_topic | string | Parent Topic (Ahrefs) |
| clicks | integer | Clicks (Ahrefs) |
| trend | string | Trend (SEMrush) |
| competition | string | Competition (GKP) |
| position | integer | Position (if tracking existing site) |
| url | string | URL (if tracking existing site) |
| source_tool | string | Which tool the data came from |
```

```
STANDARD RESEARCH SCHEMA:
| Field | Type | Description |
|-------|------|-------------|
| entities | list[dict] | {name, type, attributes, frequency} |
| relationships | list[dict] | {subject, predicate, object, source} |
| facts | list[dict] | {claim, data_point, sources, confidence} |
| questions | list[string] | Questions found or implied |
| competitors | list[dict] | {name, url, context} |
| serp_insights | list[dict] | {query, finding, source} |
| source_urls | list[string] | All cited URLs |
```

### Phase 2: Cluster and Classify

**For keyword data:**

1. **Intent Classification** (if not provided by tool):
   - Informational: starts with what, how, why, who, when, guide, tutorial, learn
   - Commercial Investigation: starts with best, top, review, compare, vs, alternative
   - Transactional: starts with buy, price, cheap, deal, discount, order, download
   - Navigational: contains brand names, specific product names

2. **Topical Clustering:**
   - Group by Parent Topic (if Ahrefs)
   - Group by first 2-3 shared words
   - Group by semantic similarity (shared entities)
   - Identify CANONICAL query per cluster (highest volume + broadest intent)

3. **Priority Scoring:**
   - High Priority: High volume + Low difficulty + Commercial/Transactional intent
   - Medium Priority: Medium volume + Any difficulty + Informational intent
   - Low Priority: Low volume OR very high difficulty
   - Strategic: Low volume but critical for topical coverage depth

4. **SERP Feature Opportunity Mapping:**
   - Featured Snippet targets: informational queries where FS exists but current holder is weak
   - PAA targets: queries showing PAA with gaps in current answers
   - Image Pack: queries where visual content ranks
   - Video: queries where video carousel appears

**For research data:**

1. **Entity Extraction and Typing:**
   - Classify each entity: Person, Organization, Product, Concept, Location, Event
   - Score by mention frequency across all research inputs
   - Map to potential Central Entity candidates

2. **Attribute Mapping:**
   - For each entity, collect all attributes mentioned
   - Score attributes on: frequency, diversity of sources, specificity
   - Classify as Root (core defining), Rare (unique differentiator), or Common

3. **Relationship Graphing:**
   - Map subject-predicate-object triples
   - Calculate semantic distance between entity pairs
   - Identify cluster centers (entities with most connections)

4. **Fact Database:**
   - Compile all factual claims with source citations
   - Flag conflicting facts across sources
   - Score confidence: 3+ sources = high, 2 sources = medium, 1 source = low

### Phase 3: Generate Skill-Ready Outputs

Produce these standardized output documents:

#### Output 1: Keyword Intelligence Report
```markdown
# Keyword Intelligence Report — [Niche]
Generated from: [list of source files and tools]
Total keywords analyzed: [count]
Total clusters identified: [count]

## Cluster Summary
| Cluster | Canonical Query | Keywords | Avg Volume | Avg KD | Primary Intent |
|---------|----------------|----------|-----------|--------|----------------|
| ... | ... | ... | ... | ... | ... |

## Top 20 Priority Keywords
[sorted by priority score]

## SERP Feature Opportunities
### Featured Snippet Targets: [list]
### PAA Targets: [list]
### Image Pack Opportunities: [list]

## Content Gap Keywords
[keywords competitors rank for but you don't — from gap analysis if available]

## Topical Coverage Assessment
[which topic areas have deep keyword coverage vs sparse coverage]
```

#### Output 2: Research Intelligence Report
```markdown
# Research Intelligence Report — [Niche]
Generated from: [list of research sources]

## Entity Map
| Entity | Type | Mention Frequency | Key Attributes | Connections |
|--------|------|------------------|----------------|-------------|
| ... | ... | ... | ... | ... |

## Central Entity Candidates
[top 3 entities by connection density with rationale]

## Attribute Inventory
[all attributes grouped by entity, scored by frequency and source diversity]

## Relationship Triples
[subject-predicate-object list sorted by confidence]

## Fact Database
[verified facts with confidence scores and sources]

## Questions Discovered
[all questions from research, deduplicated and clustered]

## Competitor Intelligence
[competitors mentioned, their strengths, their content strategies]
```

#### Output 3: Combined Strategy Brief
```markdown
# Combined Data Strategy Brief — [Niche]

## What the Data Tells Us
[synthesis of keyword data + research findings]

## Recommended Source Context Inputs
[based on data, what should Skill 1 focus on]

## Recommended Entity Focus
[which entities have the best keyword coverage + research depth]

## Topical Map Seed Data
[clusters that should become core vs outer sections]

## Content Priority Queue
[which content to create first based on opportunity scoring]

## Competitive Positioning
[where the data shows gaps competitors haven't filled]
```

## How Outputs Feed Into Downstream Skills

| Output | Feeds Into | What It Provides |
|--------|-----------|-----------------|
| Keyword Intelligence Report | Skill 1 (Source Context) | Market-validated niche focus |
| Keyword Intelligence Report | Skill 3 (Query Networks) | Real query clusters with volumes |
| Keyword Intelligence Report | Skill 5 (Raw Topical Map) | Data-backed core/outer section sizing |
| Keyword Intelligence Report | Skill 22 (Competitive Gap) | Actual gap data from tool exports |
| Keyword Intelligence Report | Skill 28 (SERP Analysis) | SERP feature targets |
| Research Intelligence Report | Skill 2 (Entity Attributes) | Pre-mapped entity-attribute inventory |
| Research Intelligence Report | Skill 18 (Ontology) | Relationship triples ready for RDF |
| Research Intelligence Report | Skill 25 (EAV Knowledge Base) | Structured fact database |
| Research Intelligence Report | Skill 11 (Question Generation) | Real questions from research |
| Combined Strategy Brief | Skill 1 (Source Context) | Complete foundation context |
| Combined Strategy Brief | Skill 5 (Raw Topical Map) | Seed data for map construction |
| Combined Strategy Brief | Skill 23 (Publication Momentum) | Priority queue for publishing |
| Combined Strategy Brief | Skill 31 (Brand Identity) | Competitive positioning data |

## Usage Examples

### Example 1: Full Data Load
```
I have these files to process:
- ahrefs_keywords.csv (Ahrefs keyword export)
- semrush_gap.xlsx (SEMrush keyword gap analysis)
- chatgpt_research.md (ChatGPT deep research on my niche)
- gemini_analysis.md (Gemini competitive analysis)
- competitors.txt (list of competitor URLs)

Process all of them into skill-ready outputs.
```

### Example 2: Keyword-Only Load
```
Process my keyword exports:
- keyword_planner.csv (Google Keyword Planner)
- ahrefs_organic.csv (Ahrefs organic keywords for my competitor)

Generate the Keyword Intelligence Report and Combined Strategy Brief.
```

### Example 3: Research-Only Load
```
Process my deep research files:
- market_research.md (Perplexity research on [niche])
- competitor_deep_dive.md (ChatGPT deep research on top competitors)

Generate the Research Intelligence Report.
```

### Example 4: Incremental Data Add
```
I already ran Skills 1-5. Now I have new keyword data from Ahrefs.
Process this new data and tell me what changes to my existing
topical map and content briefs.
```

## Important Principles

### Data Quality > Data Quantity
- 500 well-clustered keywords from one tool beat 5,000 random keywords from multiple tools
- One thorough deep research report beats five shallow ones
- Always identify and remove duplicate keywords across sources

### Tool Bias Awareness
- Ahrefs and SEMrush show different volumes for the same keyword — use relative rankings, not absolute numbers
- Google Keyword Planner rounds volumes into ranges — treat as directional, not precise
- Deep research from AI tools may contain hallucinated facts — flag low-confidence claims

### Represented vs Representative Query Alignment
- Keyword tools show REPRESENTED queries (what people type)
- Your skills need REPRESENTATIVE queries (what search engines interpret)
- The clustering step bridges this gap — canonical queries per cluster approximate representative queries

### Historical Context
- If you have Search Console data, it provides ACTUAL historical performance
- This is the most valuable input possible — real impressions, clicks, CTR, positions over time
- Feed Search Console exports into this skill as the highest-priority data source

## Connecting to Other Skills
- **Input from:** User-provided files (CSV, XLSX, MD, TXT, DOCX, JSON)
- **Output to:** Skill 1 (Source Context) — market-validated focus
- **Output to:** Skill 2 (Entity Attributes) — pre-mapped attribute inventory
- **Output to:** Skill 3 (Query Networks) — real query clusters
- **Output to:** Skill 5 (Raw Topical Map) — core/outer sizing data
- **Output to:** Skill 11 (Question Generation) — real questions from research
- **Output to:** Skill 18 (Ontology) — relationship triples
- **Output to:** Skill 22 (Competitive Gap) — actual gap data
- **Output to:** Skill 25 (EAV Knowledge Base) — structured facts
- **Output to:** Skill 28 (SERP Analysis) — SERP feature targets
- **Output to:** Skill 31 (Brand Identity) — competitive positioning
