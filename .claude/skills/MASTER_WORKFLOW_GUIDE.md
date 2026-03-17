# Semantic SEO Skills — Master Workflow Guide
## How to Build a Complete Website on Any Niche Using These 33 Skills in Claude Code

This guide walks you through the exact steps to go from "I have a niche idea" to a fully structured, semantically optimized website using Koray Tugberk Gubur's framework. Each step tells you which skill to invoke and what to provide.

---

## BEFORE YOU START

### Installing the Skills in Claude Code

1. Copy the entire `semantic-seo-skills/` folder into your Claude Code skills directory
2. Each subfolder is a standalone skill with its own `SKILL.md`
3. Claude Code will auto-detect skills from the `SKILL.md` frontmatter descriptions

### What You Need to Begin

- Your **niche/business idea** (even a rough concept works)
- Optional but highly recommended: **Keyword exports** (CSV/XLSX from Ahrefs, SEMrush, Google Keyword Planner, Moz, Ubersuggest)
- Optional but highly recommended: **Deep Research reports** (from ChatGPT, Gemini, Perplexity, or Claude)
- Optional: Competitor URLs, existing content, Search Console data
- Optional: An existing website to convert (use Skill 30)

### Loading Your Data (Skill 33) — Do This First If You Have Data

If you have keyword exports, deep research reports, or competitor data, **run Skill 33 (Data Input Processor) before anything else**. It normalizes all your external data into three standardized reports that feed directly into Skills 1-28:

```
Process my data files:
- [list your keyword CSVs/XLSX files]
- [list your deep research reports]
- [list your competitor URLs or crawl exports]

Generate the Keyword Intelligence Report, Research Intelligence Report, and Combined Strategy Brief.
```

**Supported inputs:**
| Data Type | Formats | What It Provides |
|-----------|---------|-----------------|
| Keyword exports | CSV, XLSX from Ahrefs, SEMrush, GKP, Moz, Ubersuggest, Mangools | Real search volumes, difficulty, intent, SERP features, content gaps |
| Deep Research | MD, TXT, DOCX from ChatGPT, Gemini, Perplexity, Claude | Entity maps, attribute inventories, fact databases, competitor insights |
| Competitor data | URL lists, Screaming Frog/Sitebulb exports | Competitor content structure, topical map reverse-engineering |
| Search Console | CSV exports | Actual historical performance data (most valuable input possible) |

**Why this matters:** Without Skill 33, all downstream skills work from Claude's general knowledge. With Skill 33, they work from YOUR niche's actual search landscape — real volumes, real competitors, real entity relationships. The difference in output quality is massive.

### Setting Up Real-Time Web Research (Skill 32)

The Web Research Engine gives all skills access to live web data — real SERP results, actual PAA questions, verified facts, competitor content structures, and keyword opportunities. Setup takes 2 minutes:

```bash
pip install openai --break-system-packages
export OPENAI_API_KEY="your-openai-api-key-here"
```

**Cost:** ~$0.50-1.00 to research an entire niche (50 keyword queries + 10 SERP analyses + 5 competitor scans). Uses `gpt-5-nano` for simple lookups and `gpt-4.1-mini` for analytical modes.

**8 research modes available:**
| Mode | What It Does | Cost/Query | Used By Skills |
|------|-------------|-----------|----------------|
| `search` | Quick factual lookup | ~$0.001 | Any skill |
| `serp_analysis` | Who's ranking, what formats win | ~$0.008 | 6, 20, 22, 28 |
| `competitor_scan` | Extract competitor content structure | ~$0.008 | 5, 22, 30 |
| `fact_check` | Verify stats against trusted sources | ~$0.008 | 12, 25, 26 |
| `paa_discovery` | Real PAA questions & related queries | ~$0.008 | 3, 11, 28 |
| `entity_research` | Entity attributes & relationships | ~$0.008 | 2, 18 |
| `keyword_ideas` | Keyword opportunities & content gaps | ~$0.008 | 3, 5, 22 |
| `deep_research` | Multi-source comprehensive research | ~$0.10 | 1, 2 |

Skills that support web research will automatically use it when available. If the OpenAI API key is not set, skills fall back to working without live data (as they did before).

---

## THE 11-STAGE WORKFLOW

### STAGE 0: LOAD YOUR DATA (if available)
**Time estimate: 30-60 minutes | Skill: 33**

If you have keyword exports, deep research reports, or competitor data, run Skill 33 first. It produces three outputs that supercharge every downstream skill:

**Invoke:** `data-input-processor`

**What to provide:** Any combination of keyword CSVs/XLSX, deep research markdown/text files, competitor URL lists, Search Console exports

**What you get back:**
- **Keyword Intelligence Report** — clustered queries with real volumes, difficulty, intent, SERP features, content gaps
- **Research Intelligence Report** — entity maps, attribute inventories, relationship triples, fact databases, discovered questions
- **Combined Strategy Brief** — market-validated niche focus, entity recommendations, topical map seed data, content priority queue

**Example prompt:**
> "Process these data files: ahrefs_keywords.csv, semrush_gap.xlsx, chatgpt_niche_research.md, gemini_competitor_analysis.md. Generate all three intelligence reports."

**This output feeds into:** Skills 1, 2, 3, 5, 11, 22, 25, 28, 31 (and indirectly all others)

If you DON'T have external data, skip Stage 0 — the skills still work from Claude's general knowledge and the Web Research Engine (Skill 32).

---

### STAGE 1: DEFINE YOUR FOUNDATION
**Time estimate: 2-3 hours | Skills: 1 + 31**

This stage runs TWO skills in parallel — Source Context defines *what* the site is about, Brand Identity defines *how* it sounds and converts. Both feed into every downstream skill.

#### Step 1A: Source Context
**Invoke:** `source-context`

**What to provide:**
- Your business/website idea
- How you plan to monetize
- Who your audience is
- What makes your perspective unique

**What you get back:**
- Central Entity definition
- Central Search Intent with predicates
- Site-wide n-grams
- Quality node strategy
- Context shifting rules

**Example prompt:**
> "I want to build a website about AI writing tools for content marketers. We monetize through affiliate links and our own SaaS tool reviews. Define my Source Context."

#### Step 1B: Brand Identity & Content Voice
**Invoke:** `brand-identity-voice`

**What to provide:**
- Your brand personality (or let the skill interview you)
- Business goals & KPIs
- Tone preferences and examples of writing you admire
- CTA strategy and conversion goals
- Competitor brands you want to differentiate from

**What you get back:**
- Complete Brand Identity Document with: mission, value propositions, competitive positioning, brand archetype, 3-word personality, voice & tone guide (reading level, formality, power words, forbidden words, branded terms), tone variation by content type, CTA strategy map per funnel stage, social proof templates, content formatting rules
- Brand Voice Cheat Sheet (one-page quick reference for authors/AI)
- Voice Calibration Test (3 example paragraphs to confirm the voice feels right)
- Integration map showing exactly how brand identity flows into Skills 8, 9, 10, 12, 13, 14, 27, 28

**Example prompt:**
> "Define our brand identity. We're the 'data-driven contrarian' in the AI tools space — we test everything ourselves and aren't afraid to say a popular tool is bad. Think Wirecutter meets The Verge. Our tone is confident, slightly irreverent, and deeply technical. We never use words like 'game-changer' or 'revolutionary'. Our primary CTA is free trial signups."

**This output feeds into:** Every content-producing skill (8, 9, 10, 12, 13, 14, 27, 28 and all writing)

---

### STAGE 2: ANALYZE YOUR ENTITIES
**Time estimate: 2-4 hours | Skills: 2, 3, 4**

Run these three skills in sequence (or parallel if you're experienced):

#### Step 2A: Entity & Attribute Analysis
**Invoke:** `entity-attribute-analysis`

**What to provide:** Your Source Context document + central entity

**What you get back:** Complete attribute inventory scored on Prominence/Popularity/Relevance, classified as Root/Rare/Unique, with priority tiers and filtered-out list

**Example prompt:**
> "Using my Source Context for AI writing tools, analyze all attributes of 'Content Creation' as my central entity. Score each on Prominence, Popularity, and Relevance."

#### Step 2B: Query Network Analysis
**Invoke:** `query-network-analysis`

**What to provide:** Your central entity + Source Context + target market

**What you get back:** Clustered query networks, canonical queries, query paths, semantic distance map, synthetic queries

**Example prompt:**
> "Analyze the query network for AI writing tools and content creation. Cluster all queries across 6 dimensions and identify canonical queries."

#### Step 2C: Lexical Relationship Mapping
**Invoke:** `lexical-relationship-mapping`

**What to provide:** Your entity list from Stage 2A + Source Context

**What you get back:** Full WordNet-style analysis with 10 relationship types, phrase taxonomy, conditional synonyms, distributional patterns

**Example prompt:**
> "Map all lexical relationships for my key entities: AI writing tools, content optimization, SEO content, article generation. Include conditional synonym pairs."

---

### STAGE 3: BUILD YOUR TOPICAL MAP
**Time estimate: 4-8 hours | Skills: 5, 6, 7**

#### Step 3A: Raw Topical Map
**Invoke:** `raw-topical-map`

**What to provide:** Source Context + Entity Attribute Analysis + Query Networks

**What you get back:** Complete hierarchical topical map with Core/Outer sections, Root/Seed/Node designations, topical borders, cross-section connections, article count estimates

**Example prompt:**
> "Generate a complete raw topical map for my AI writing tools site. Use the entity attributes and query networks from Stage 2. Organize into Core (monetization) and Outer (authority) sections."

#### Step 3B: Process the Topical Map
**Invoke:** `topical-map-processing`

**What to provide:** Raw topical map + Lexical relationships

**What you get back:** Title tags (using 4 patterns), meta descriptions, URL structures for every page

**Example prompt:**
> "Process my raw topical map into title tags, descriptions, and URLs. Use all four title tag patterns where appropriate."

#### Step 3C: Design Information Architecture
**Invoke:** `information-architecture`

**What to provide:** Processed topical map

**What you get back:** Complete URL hierarchy with Root/Seed/Node layers, crawl paths, breadcrumbs, hub-and-silo hybrid structure

**Example prompt:**
> "Design the full URL architecture for my site using the Root-Seed-Node system. Optimize crawl paths so all content is within 3 clicks of the homepage."

---

### STAGE 4: CREATE CONTENT BRIEFS
**Time estimate: 8-20 hours (depends on scale) | Skills: 8, 9, 10, 11**

#### Step 4A: Build the Root Document Brief FIRST
**Invoke:** `root-document-brief`

**What to provide:** Topical map + Source Context + all attribute priorities

**What you get back:** The most important content brief in your network — H1 reflecting Central Search Intent, attribute priority ordering, quality cascading strategy, homepage connection

**Example prompt:**
> "Create the Root Document brief for my AI writing tools site. This is the most important page. The H1 must contain my Central Search Intent predicates."

#### Step 4B: Generate Questions for Content Briefs
**Invoke:** `question-generation`

**What to provide:** Entity attributes (Root/Rare/Unique) + query networks

**What you get back:** Ranked question sets with canonical questions, variation questions, question type classifications, contextual bridges between headings

**Example prompt:**
> "Generate and rank questions for all Tier 1 content briefs. Use the four question types and apply canonicalization rules."

#### Step 4C: Generate Individual Content Briefs
**Invoke:** `content-brief-generation`

**What to provide:** Topical map node + Source Context + questions + internal link targets

**What you get back:** Full 4-column content brief (Contextual Vector, Hierarchy, Structure, Connections) with macro/micro borders, format specs, link placements

**Example prompt:**
> "Create a full 4-column content brief for 'Best AI Writing Tools for Blog Posts'. Include heading order, hierarchy, format per section, and all internal links."

#### Step 4D: Scale Briefs Across Entity Types
**Invoke:** `content-brief-scaling`

**What to provide:** One completed content brief + list of similar entities

**What you get back:** Template-based briefs for all entities of the same type, with entity-specific variations, synthetic queries, and bulk optimization markers

**Example prompt:**
> "Scale my 'Best AI Writing Tools for Blog Posts' brief across all content types: email copy, social media posts, product descriptions, landing pages. Minimize differences for bulk optimization."

---

### STAGE 5: DESIGN THE LINKING SYSTEM
**Time estimate: 2-4 hours | Skills: 16, 17**

#### Step 5A: Internal Linking Architecture
**Invoke:** `internal-linking-architecture`

**What to provide:** Topical map + content briefs + URL structure

**What you get back:** Complete linking blueprint with hub-and-spoke connections, silo chains, link placement strategy per brief, heading-level weighting, grouper pages

**Example prompt:**
> "Design the full internal linking architecture. Map every link from every content brief with placement rules, heading-level weights, and bidirectional confirmations."

#### Step 5B: Anchor Text Strategy
**Invoke:** `anchor-text-strategy`

**What to provide:** Content briefs + linking architecture + target page titles

**What you get back:** Anchor text assignments for every link, annotation text placements, conditional synonym bridges, pending link registry

**Example prompt:**
> "Generate anchor text for every internal link in my content briefs. Ensure each anchor matches the target page H1 and no anchor is used more than 3 times."

---

### STAGE 6: BUILD THE KNOWLEDGE LAYER
**Time estimate: 2-4 hours | Skills: 18, 19**

#### Step 6A: Ontology Construction
**Invoke:** `ontology-construction`

**What to provide:** Topical map + entity attribute analysis + Source Context

**What you get back:** 100+ RDF triples using 10 relationship types, Knowledge Graph anchoring, Wikidata validation

**Example prompt:**
> "Build the formal ontology for my content network. Generate 100+ RDF triples with all 10 relationship types. Validate against Wikidata where possible."

#### Step 6B: Schema Markup Strategy
**Invoke:** `schema-markup-strategy`

**What to provide:** Content briefs + page types + entity info

**What you get back:** JSON-LD templates for every page type (Organization, Article, FAQ, HowTo, Product, etc.)

**Example prompt:**
> "Generate schema markup templates for all page types in my site. Customize per content type based on macro context."

---

### STAGE 7: WRITE THE CONTENT
**Time estimate: Ongoing | Skills: 12, 13, 14, 15, 29**

For each content brief, apply these skills:

#### Step 7A: Set Content Borders
**Invoke:** `contextual-border-design`

**What to provide:** Content brief + macro context + micro contexts

**What you get back:** Exact boundary between main and supplementary content, antonym strategy, link weight distribution

#### Step 7B: Write Using Algorithmic Authorship Rules
**Invoke:** `algorithmic-authorship`

**What to provide:** Content brief + target queries

**What you get back:** Content following 200+ authorship rules (factual modality, answer non-delay, bold the answer, word order optimization, etc.)

**Example prompt:**
> "Write the article for 'Best AI Writing Tools for Blog Posts' following all algorithmic authorship rules. Apply FS format for featured snippet targets, PAA format for People Also Ask targets."

#### Step 7C: Optimize the Contextual Vector
**Invoke:** `contextual-vector-optimizer`

**What to provide:** Draft article headings

**What you get back:** Optimized heading flow (straight line), extractive/abstractive summary validation, broken vector repairs

#### Step 7D: Optimize Micro-Semantics
**Invoke:** `micro-semantics`

**What to provide:** Draft article content

**What you get back:** Passage-optimized content with correct format per query, context sharpening, candidate answer scoring

#### Step 7E: Optimize Word Proximity
**Invoke:** `distributional-semantics`

**What to provide:** Draft article content + target term lists

**What you get back:** Word proximity optimization, predicate-first headings, lemmatization variations, cross-page pattern alignment

---

### STAGE 8: PLAN THE LAUNCH
**Time estimate: 1-2 hours | Skills: 23, 24, 27, 28**

#### Step 8A: Map Audience Journeys
**Invoke:** `audience-journey-mapping`

**What to provide:** Topical map + Source Context + query networks

**What you get back:** 4 audience segments, 5 journey stages, 8-12 journey paths with linking, content type alignment

#### Step 8B: Analyze SERPs for Targeting
**Invoke:** `serp-analysis`

**What to provide:** Target queries + current SERP data

**What you get back:** Format recommendations per query, featured snippet targeting, PAA optimization

#### Step 8C: Plan Publication Momentum
**Invoke:** `publication-momentum`

**What to provide:** Topical map size + resources + current content

**What you get back:** 12-month phased rollout, patternless frequency schedule, algorithm timing strategy, crawl rate optimization

#### Step 8D: Set Up Production Management
**Invoke:** `production-management`

**What to provide:** Topical map + author assignments + publication schedule

**What you get back:** Color-coded production dashboard, author tracking, brief-to-article correlation system

---

### STAGE 9: AUDIT & OPTIMIZE (Ongoing)
**Time estimate: Ongoing | Skills: 20, 21, 22, 25, 26**

#### After Publishing — Audit Content
**Invoke:** `content-relevance-auditor`

**What to provide:** Published article + original content brief

**What you get back:** Compliance report (heading match, typography, synonym expansion, word proximity, summary validation)

#### After Ranking Data — Reconfigure
**Invoke:** `content-reconfiguration`

**What to provide:** Search Console data + content briefs + published articles

**What you get back:** Reconfiguration instructions (sections to change, links to adjust, queries to target/de-target)

#### Ongoing — Competitive Monitoring
**Invoke:** `competitive-gap-analysis`

**What to provide:** Competitor URLs + your topical map

**What you get back:** Gap analysis with opportunity scoring, prioritized content targets

#### Build the Knowledge Base
**Invoke:** `eav-knowledge-base`

**What to provide:** Published content network

**What you get back:** Structured E-A-V database with cross-page consistency, Knowledge Graph alignment

#### Verify Network Consistency
**Invoke:** `cross-page-consistency`

**What to provide:** All published pages

**What you get back:** Consistency report (conflicting facts, distributional patterns, coherence check)

---

### STAGE 10: CONVERT EXISTING SITES (Optional)
**Time estimate: 4-8 hours | Skill: 30**

**Invoke:** `website-converter`

**What to provide:** Existing website URL + desired Source Context

**What you get back:** Gap analysis (current vs ideal topical map), broken vectors, linking deficiencies, Cost of Retrieval audit, prioritized remediation plan

**Example prompt:**
> "Audit my existing site example.com against Koray's Semantic SEO framework. Identify all gaps and create a prioritized remediation plan."

---

## QUICK REFERENCE: SKILL DEPENDENCY CHAIN

```
          [33] Data Input Processor (keyword exports, deep research, competitor data)
              ↓ (Keyword Intelligence + Research Intelligence + Strategy Brief)
          [32] Web Research Engine (available to ALL skills below for live data)
              ↓
STAGE 1:  [1] Source Context  +  [31] Brand Identity & Voice
              ↓                        ↓ (feeds into all content skills)
STAGE 2:  [2] Entity Attributes  ←→  [3] Query Networks  ←→  [4] Lexical Relations
              ↓                           ↓                        ↓
STAGE 3:  [5] Raw Topical Map  →  [6] Processed Map  →  [7] URL Architecture
              ↓                        ↓
STAGE 4:  [9] Root Brief  →  [11] Questions  →  [8] Content Briefs  →  [10] Scaling
              ↓                                       ↓
STAGE 5:  [16] Internal Linking  →  [17] Anchor Text Strategy
              ↓
STAGE 6:  [18] Ontology/Triples  →  [19] Schema Markup
              ↓
STAGE 7:  [29] Borders → [12] Authorship → [13] Vector → [14] Micro → [15] Distributional
              ↓
STAGE 8:  [27] Journeys  →  [28] SERP  →  [23] Momentum  →  [24] Production
              ↓
STAGE 9:  [20] Audit  →  [21] Reconfigure  →  [22] Competitive Gap
              ↓
          [25] Knowledge Base  →  [26] Cross-Page Consistency
              ↓
STAGE 10: [30] Website Converter (optional, for existing sites)
```

---

## SAMPLE SESSION: Starting a New Niche Site

Here's what a typical Claude Code session looks like:

```
You: I want to build a semantic SEO site about indoor gardening for apartment dwellers.
     We'll monetize through affiliate links to grow lights, planters, and soil.

Claude: [Invokes source-context skill]
        → Defines Central Entity: "Indoor Gardening"
        → Central Search Intent: "grow, cultivate, maintain plants indoors"
        → Produces Source Context document

You: Great, now analyze my entities and build the query networks.

Claude: [Invokes entity-attribute-analysis]
        → Identifies 47 attributes, classifies Root/Rare/Unique, scores all three criteria
        → Filters to 31 relevant attributes

        [Invokes query-network-analysis]
        → Extracts 380 queries, creates 24 clusters, identifies 24 canonical queries
        → Maps 8 query paths

        [Invokes lexical-relationship-mapping]
        → Maps all 10 relationship types for key entities
        → Generates 45 conditional synonym pairs

You: Build me the full topical map.

Claude: [Invokes raw-topical-map]
        → Core Section: 45 articles (grow lights, planters, soil, nutrients, pest control)
        → Outer Section: 120 articles (plant species, room types, seasons, air quality)
        → Total: 165 articles planned

        [Invokes topical-map-processing]
        → 165 title tags, descriptions, and URLs generated

        [Invokes information-architecture]
        → Full Root-Seed-Node hierarchy with crawl paths

You: Create content briefs starting with the root document.

Claude: [Invokes root-document-brief]
        → H1: "Everything You Need to Know About Growing Plants Indoors"
        → Full 4-column brief with attribute priority ordering

        [Invokes question-generation]
        → 200+ ranked questions across all Tier 1 briefs

        [Invokes content-brief-generation]
        → Individual briefs for top 20 articles

You: Write the first article.

Claude: [Invokes contextual-border-design → algorithmic-authorship →
         contextual-vector-optimizer → micro-semantics → distributional-semantics]
        → Complete, optimized article following all 200+ authorship rules
```

---

## ADVANCED STRATEGIC FRAMEWORK (v2.0 Update)

All 32 skills have been upgraded with advanced concepts from Koray Tugberk Gubur's Semantic SEO Course and Advanced Concepts documentation. Here are the critical strategic principles that now power every skill:

### The Topical Authority Formula
**Topical Authority = Topical Coverage × Historical Data**

This is the foundational equation. Understanding it correctly is the difference between success and failure:

- **Historical Data is NOT time.** It is the quality of user engagement — mouse-over, impression, click patterns, session quality. A 2-year site with 10 million quality sessions beats a 10-year site with 1 session.
- **Bad historical data from 6 months ago causes current ranking loss.** Your present rankings reflect engagement quality from half a year ago.
- **Negative, neutral, and positive historical data types exist.** Low-quality sessions actively harm you.

### The Relevance vs Responsiveness Distinction
Every content skill now optimizes for BOTH independently:

- **Relevance** = Information Retrieval Score (BM25, TF-IDF, co-occurrence, term weight). Makes content findable.
- **Responsiveness** = Information Extraction (direct answers, passage indexing). Makes content satisfying.
- They are NOT the same. A highly relevant page can fail at responsiveness. A highly responsive page can fail at relevance.

### Quality Threshold Replaces Keyword Difficulty
Traditional keyword difficulty is replaced with three thresholds:

1. **Relevance Threshold** — minimum IR score pattern needed to rank
2. **Quality Threshold** — content depth/accuracy that separates ranking from non-ranking pages
3. **Predictive Ranking** — how concept groups might be ranked given shifting semantic distances

### Core Section vs Outer Section Strategy
Every topical map now has explicit core/outer section planning:

- **Core Section** — densified around the MAIN attribute of the central entity (from Source Context). Build this FIRST.
- **Outer Section** — covers MINOR attributes, propagates trust and quality signals back to core.
- Production priority: Core root docs → Core supporting → Core supplementary → Outer root docs → Outer supporting.

### Main Content vs Supplementary Content
Every content brief now enforces the macro/micro content split:

- **Main Content** — processes macro-context only. Provides main context-flow and coverage. Does NOT touch sub-contexts.
- **Supplementary Content** — processes micro-contexts, provides contextual bridges to other topical map nodes.
- **Contextual Border** — the transition zone between them. Uses grouper questions (H2 = Short Form QA).

### The Five Contextual Dimensions
Skills 8, 12, 13, 14, 15, and 29 now track these five dimensions:

1. **Contextual Coverage** — proportion of sections for each context (too much dilutes, too little weakens)
2. **Contextual Flow** — order of contextual vectors (order changes relevance)
3. **Contextual Hierarchy** — weight via typography, visuals, coverage
4. **Contextual Border** — transition between main and supplementary content
5. **Contextual Bridge** — hypertext or linkless connections between topical map nodes

### Initial Ranking and Re-ranking Awareness
Skills 20, 21, 22, 23, 28, and 30 now account for:

- Different site sections get different initial ranking scores
- Seasonal events trigger re-ranking opportunities
- Content refresh every 3-6 months prevents historical data decay
- Faster topical map completion = better initial ranking for new content
- Crawl targets: 99% 200 OK status, <100ms average response time

### Entity Identity Management
Skills 2, 18, 25, 26, and 31 now track entity identity:

- Entities are living things in knowledge bases — identity changes with new associations
- Document statistics (mention count, source diversity) shape identity
- Semantic distance between entities is measured by association angles and connection repetitiveness
- Brand SERP optimization is part of entity identity management

### Vastness-Depth-Momentum
Skills 5, 10, 23, and 24 now explicitly balance three pillars:

- If you can't go **wide**, go deeper and faster
- If you can't go **deep**, go wider and faster
- If you can't go **fast**, go wider and deeper
- Missing one pillar = compensate with the other two

---

## TIPS FOR BEST RESULTS

1. **Always start with Skill 1 (Source Context) AND Skill 31 (Brand Identity).** Source Context defines *what* to write; Brand Identity defines *how* it sounds. Both feed everything downstream.
2. **Don't skip stages.** Each stage builds on the previous. Skipping creates gaps.
3. **Run Stage 2 skills together.** Entity analysis, query networks, and lexical mapping inform each other.
4. **Build the Root Document brief before any other brief.** It sets the quality ceiling for the entire network.
5. **Scale briefs before writing.** Creating templates first is faster than creating individual briefs.
6. **Audit after every batch of published content.** Don't wait until everything is live.
7. **Reconfigure based on data.** The first version is never the final version. Use Search Console data to improve.
8. **Maintain cross-page consistency.** As you publish more content, contradictions creep in. Audit regularly.
9. **For existing sites, start with Skill 30.** It gives you a gap analysis before you start building.
10. **The framework is niche-agnostic.** These same 32 skills work for any topic — from plumbing to quantum physics.
11. **Brand voice must be consistent across ALL content.** If you update the Brand Identity Document, re-audit existing content with Skill 20 to check for voice drift.
12. **Set up the Web Research Engine (Skill 32) before starting.** It costs pennies per query and makes every data-dependent skill dramatically more accurate. Skills 2, 3, 5, 12, 20, 22, 28, and 30 all benefit from live data.
13. **Load your external data with Skill 33 first.** If you have keyword exports from Ahrefs/SEMrush/GKP or deep research reports from ChatGPT/Gemini/Perplexity, running Skill 33 before anything else grounds the entire pipeline in real market data instead of assumptions. This is the single biggest quality multiplier.
14. **Combine multiple data sources.** One keyword tool + one deep research report + one competitor URL list gives you three angles on the same niche. Skill 33 merges and cross-references all of them automatically.
15. **Search Console data is gold.** If you have an existing site with Google Search Console access, export your performance data and feed it into Skill 33. Actual historical impressions, clicks, and positions are the highest-value input possible — they reveal how search engines ALREADY see your content.
