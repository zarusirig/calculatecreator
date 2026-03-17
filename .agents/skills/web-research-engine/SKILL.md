---
name: web-research-engine
description: "Real-time web research engine powered by OpenAI's Web Search API. Provides live SERP analysis, competitor scanning, People Also Ask discovery, entity research, keyword ideas, fact-checking, and deep research capabilities at minimal cost. Use this skill whenever any other Semantic SEO skill needs real-time web data — such as live search results, current rankings, competitor content structures, trending topics, PAA questions, verified statistics, or keyword opportunities. This skill should be invoked BY other skills (not directly by the user) whenever they encounter a step that says 'use web-research-engine' or when the user asks for current/live/real-time data. Also trigger directly when the user asks to research a topic, check what's ranking, analyze competitors, or verify facts."
---

# Web Research Engine

This skill provides real-time web intelligence to the entire Semantic SEO skill system. It wraps OpenAI's Web Search API in 8 specialized research modes, each optimized for a specific step in the Semantic SEO workflow.

Think of it as the "eyes" of the skill system — while the other 31 skills know *how* to build semantic content networks, this skill knows *what's actually happening right now* on the web.

## Setup

### Prerequisites

1. An OpenAI API key (get one at platform.openai.com)
2. Python 3.8+ with the `openai` package installed

### Installation

```bash
pip install openai --break-system-packages
export OPENAI_API_KEY="your-key-here"
```

### Cost

This engine uses `gpt-5-nano` by default — OpenAI's cheapest model:
- **Simple lookups** (search, fact_check): ~$0.001-0.003 per query using `gpt-5-nano`
- **Analytical modes** (serp_analysis, competitor_scan, keyword_ideas): ~$0.005-0.01 per query using `gpt-4.1-mini`
- **Deep research**: ~$0.05-0.15 per query using `o4-mini` reasoning model
- **Batch of 50 queries**: ~$0.05-0.15 total

For perspective: researching an entire niche (50 keyword queries + 10 SERP analyses + 5 competitor scans + 20 PAA discoveries) costs roughly $0.50-1.00 total.

## The 8 Research Modes

### 1. `search` — Basic Web Search
The fastest, cheapest mode. Quick factual lookups with citations.

```bash
python scripts/web_research.py --mode search --query "average rent in Berlin 2026"
```

**Used by:** Any skill that needs a quick fact or current data point.

### 2. `serp_analysis` — SERP Analysis
Analyzes who's actually ranking for a target query right now. Returns top 10 results with titles, URLs, content formats, featured snippets, PAA questions, and SERP features.

```bash
python scripts/web_research.py --mode serp_analysis --query "best indoor gardening tools" --country US
```

**Returns:**
- Top 10 ranking pages with format analysis
- Featured snippet presence and format
- People Also Ask questions
- SERP features (knowledge panel, image pack, video, etc.)
- Content format patterns and gap opportunities

**Used by:** Skill 28 (SERP Analysis), Skill 22 (Competitive Gap), Skill 6 (Topical Map Processing — to validate title tag patterns against what's winning)

### 3. `competitor_scan` — Competitor Content Analysis
Researches competitor content structure, headings, topics covered, and content gaps. Can be restricted to specific domains.

```bash
python scripts/web_research.py --mode competitor_scan --query "indoor gardening guide" --domains competitor1.com competitor2.com
```

**Returns:**
- Page titles and URLs
- Heading structures (H1/H2/H3)
- Main topics and entity-attribute coverage
- Content formats used
- Internal linking patterns
- Content gaps (what's missing)

**Used by:** Skill 30 (Website Converter), Skill 22 (Competitive Gap), Skill 5 (Raw Topical Map — to validate map coverage against competitors)

### 4. `fact_check` — Fact Verification
Verifies statistics, dates, claims against trusted sources. Restricts searches to authoritative domains by default (Wikipedia, World Bank, WHO, UN, etc.).

```bash
python scripts/web_research.py --mode fact_check --query "Germany population 2026"
```

**Returns:**
- Verified fact with specific numbers
- Source quality rating per source
- Consensus across sources
- Data recency
- Confidence level (high/medium/low)

**Used by:** Skill 12 (Algorithmic Authorship — verify facts while writing), Skill 25 (E-A-V Knowledge Base — validate entity attribute values), Skill 26 (Cross-Page Consistency — check facts against external sources)

### 5. `paa_discovery` — People Also Ask & Related Query Discovery
Discovers real PAA questions, related searches, autocomplete suggestions, and maps query paths. This is the most valuable mode for the Semantic SEO workflow.

```bash
python scripts/web_research.py --mode paa_discovery --query "how to grow tomatoes indoors" --country US
```

**Returns:**
- All PAA questions grouped by subtopic
- Related searches and autocomplete suggestions
- Question clusters with canonical questions identified
- Question types (definitional, boolean, comparative, grouping)
- 3-5 realistic query paths

**Used by:** Skill 3 (Query Network Analysis — real query data instead of guessing), Skill 11 (Question Generation — actual PAA questions to target), Skill 28 (SERP Analysis — PAA optimization targets)

### 6. `entity_research` — Entity & Attribute Discovery
Researches entities thoroughly — definitions, root/rare/unique attributes, related entities, key facts, and knowledge graph connections.

```bash
python scripts/web_research.py --mode entity_research --query "indoor gardening attributes characteristics types"
```

**Returns:**
- Precise entity definition
- Root attributes (appear in all instances)
- Rare attributes (some instances)
- Unique attributes (this entity only)
- Related entities (parent, sibling, child)
- Key facts with statistics
- Knowledge domain connections

**Used by:** Skill 2 (Entity & Attribute Analysis — validates and enriches attribute discovery with real data), Skill 18 (Ontology Construction — discovers entity relationships)

### 7. `keyword_ideas` — Keyword & Content Opportunity Discovery
Discovers keyword opportunities, search trends, content gaps, and seasonal patterns for a topic.

```bash
python scripts/web_research.py --mode keyword_ideas --query "indoor gardening" --country US
```

**Returns:**
- Primary keywords with intent classification and competition estimates
- 15-20 long-tail keywords grouped by intent
- Trending subtopics and emerging angles
- Content gaps (poorly covered opportunities)
- Seasonal patterns
- Related niches for cross-linking

**Used by:** Skill 3 (Query Network Analysis — real keyword data), Skill 22 (Competitive Gap — opportunity identification), Skill 5 (Raw Topical Map — validates map completeness)

### 8. `deep_research` — Comprehensive Multi-Source Research
Uses a reasoning model for thorough, multi-faceted research. Slower and more expensive but much more comprehensive. Use sparingly for high-value research.

```bash
python scripts/web_research.py --mode deep_research --query "complete landscape of semantic SEO tools and methodologies 2026"
```

**Returns:**
- Comprehensive overview with expert perspectives
- Key facts with full citation trail
- Recent developments (last 6-12 months)
- Controversies and debates
- Structured data tables
- Sources ranked by authority

**Used by:** Skill 1 (Source Context — deep research into a niche before defining strategy), Skill 2 (Entity Analysis — comprehensive attribute discovery for complex entities)

## Batch Processing

For large-scale research (e.g., researching all 50 keywords in a topical map), use batch mode:

```bash
# Create a queries file
cat > queries.json << 'EOF'
[
  {"query": "best indoor grow lights 2026", "mode": "serp_analysis"},
  {"query": "indoor gardening soil types", "mode": "paa_discovery"},
  {"query": "site:competitor.com indoor plants", "mode": "competitor_scan"},
  {"query": "average cost of grow lights", "mode": "fact_check"},
  {"query": "hydroponics vs soil gardening", "mode": "keyword_ideas"}
]
EOF

python scripts/web_research.py --mode batch --file queries.json --output results.json --country US
```

Batch mode processes queries sequentially with a configurable delay (default 1 second) to respect rate limits. Results are saved as a JSON array.

## How Other Skills Should Call This

When a Semantic SEO skill needs real-time data, it should invoke this script via bash:

```bash
# From within any skill's workflow
python /path/to/semantic-seo-skills/web-research-engine/scripts/web_research.py \
  --mode paa_discovery \
  --query "your search query" \
  --country US \
  --output /tmp/research_result.json \
  --format json
```

Then read the JSON output and incorporate it into the skill's workflow.

## Integration Map: Which Skills Use Which Modes

| Skill | Primary Modes | When to Use |
|-------|--------------|-------------|
| Skill 2: Entity Attributes | `entity_research`, `search` | Validating attribute discovery, finding real data |
| Skill 3: Query Networks | `paa_discovery`, `keyword_ideas` | Building query clusters from live search data |
| Skill 5: Raw Topical Map | `keyword_ideas`, `competitor_scan` | Validating map coverage, finding gaps |
| Skill 6: Processed Map | `serp_analysis` | Checking title tag patterns against what's winning |
| Skill 11: Questions | `paa_discovery` | Discovering real PAA questions to target |
| Skill 12: Authorship | `fact_check`, `search` | Verifying facts while writing content |
| Skill 20: Content Auditor | `serp_analysis`, `search` | Comparing published content against live results |
| Skill 21: Reconfiguration | `serp_analysis`, `keyword_ideas` | Finding new query opportunities |
| Skill 22: Competitive Gap | `competitor_scan`, `keyword_ideas`, `serp_analysis` | Full competitive intelligence |
| Skill 25: Knowledge Base | `fact_check`, `entity_research` | Verifying E-A-V data accuracy |
| Skill 26: Cross-Page Consistency | `fact_check` | Checking facts against external sources |
| Skill 28: SERP Analysis | `serp_analysis`, `paa_discovery` | Live SERP data for targeting |
| Skill 30: Website Converter | `competitor_scan`, `serp_analysis` | Auditing existing sites |

## Domain Filtering for Quality

For research that needs high-quality sources, use the `--domains` flag:

```bash
# Restrict to authoritative sources for fact-checking
python scripts/web_research.py --mode fact_check \
  --query "Germany GDP per capita 2026" \
  --domains worldbank.org statista.com oecd.org imf.org

# Restrict to specific competitors
python scripts/web_research.py --mode competitor_scan \
  --query "indoor gardening" \
  --domains competitor1.com competitor2.com competitor3.com
```

## Advanced Web Research Concepts

### Quality Threshold Research Mode
When using `serp_analysis` mode, additionally identify the quality threshold for each target query by comparing the most and least quality sources currently ranking. Note: content depth, information accuracy, visual content, web component presence, and structured data implementation patterns. The quality threshold defines the minimum quality your content must exceed.

### Representative Query Discovery
During `paa_discovery` mode, look beyond literal PAA questions to identify representative queries. Representative queries are the authoritative interpretations of search terms — they capture relevance for all represented query variations. A single well-targeted representative query covers more ranking potential than multiple literal queries.

### Entity Identity Research
During `entity_research` mode, capture document statistics that shape entity identity: how many sources mention the entity, with what attributes, from what authority level. Also map semantic distances between your target entity and related entities. This data feeds directly into the EAV Knowledge Base (Skill 25) and Ontology Construction (Skill 18).

### Seasonal Event Research
Use `search` mode to identify upcoming seasonal events and trending topics related to your niche. Publishing content networks before seasonal events captures re-ranking opportunities. Research historical seasonal patterns to predict optimal publication timing.

### Competitive Propagation Research
Use `competitor_scan` mode to analyze how competitors' content networks propagate relevance. Look for: internal linking patterns, contextual bridge density, content refresh frequency, and publication momentum patterns. Identify propagation weaknesses where your content network can outperform.

---

## Tips for Best Results

1. **Be specific in queries.** "Indoor gardening tools for apartments 2026" returns better data than "gardening tools."
2. **Use country codes.** SERPs vary dramatically by country. Always specify `--country` for SERP analysis and keyword research.
3. **Batch related queries together.** It's cheaper and faster to batch 20 queries than run them individually.
4. **Use `fact_check` for statistics.** It restricts to trusted domains automatically, preventing bad data from entering your content.
5. **Use `deep_research` sparingly.** It costs 10-30x more than simple search. Reserve it for initial niche research and complex topics.
6. **Cache results.** Save outputs to JSON files and reuse them. Search data from last week is usually still valid for topical map building.
7. **Combine modes.** For a complete competitor analysis, run `competitor_scan` + `serp_analysis` + `keyword_ideas` on the same topic. The combined output gives you a 360° view.
