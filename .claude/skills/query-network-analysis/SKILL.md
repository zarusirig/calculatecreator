---
name: query-network-analysis
description: "Extract, cluster, and classify search queries across six dimensions for any topic, then map semantic distances between query groups. Use this skill whenever the user needs query research, search intent analysis, keyword clustering, query path mapping, canonical query identification, or wants to understand how users search for their topic. Essential for building topical maps and content briefs."
---

# Query Network Analysis & Clustering

Topical maps are built FROM query networks, not from encyclopedic knowledge. This skill extracts real user queries, classifies them across six dimensions, identifies canonical queries, maps query paths (how users search in sequences), and calculates semantic distances between query clusters.

## Why Query Networks (Not Keywords)

Traditional keyword research finds individual terms. Query network analysis finds the RELATIONSHIPS between queries — how they cluster, how users move from one to another, and which query represents an entire group (the canonical query). Search engines process queries as networks, and your content must mirror this structure.

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, replace guesswork with live query data:

1. **Run `paa_discovery`** for each major topic cluster to get real People Also Ask questions:
   ```bash
   python web-research-engine/scripts/web_research.py --mode paa_discovery --query "[topic]" --country [target-country] --output /tmp/paa_data.json
   ```
2. **Run `keyword_ideas`** to discover long-tail keywords and trending subtopics:
   ```bash
   python web-research-engine/scripts/web_research.py --mode keyword_ideas --query "[central entity]" --country [target-country] --output /tmp/keyword_data.json
   ```
3. Merge the PAA questions into your query clusters as real canonical questions
4. Use the keyword intent classifications to validate your own intent assignments
5. Add any discovered query paths to your query path mapping
6. For batch processing across all topic clusters, create a queries.json file and use `--mode batch`

Live PAA data is the single highest-value input for this skill — it replaces hypothetical questions with real questions users are actually asking.

## Step 1: Raw Query Extraction

For the target entity/topic, gather queries from:
- Google Search Console (existing data)
- Google Autocomplete suggestions
- People Also Ask boxes
- Related Searches
- Competitor ranking queries (via SEO tools)
- Query variations (synonyms, reformulations)
- Long-tail expansions

Aim for 200-500+ raw queries per major entity.

## Step 2: Multi-Dimensional Query Classification

Classify every query across these 6 dimensions:

### Dimension 1: Primary Intent
- **Informational:** "what is [X]", "how does [X] work"
- **Navigational:** "[brand name] login", "[specific page]"
- **Commercial Investigation:** "best [X]", "[X] vs [Y]", "[X] reviews"
- **Transactional:** "buy [X]", "[X] pricing", "sign up for [X]"
- **Local:** "[X] near me", "[X] in [city]"

### Dimension 2: Specificity Level
- **Broad:** "content marketing" (high-level concept)
- **Medium:** "content marketing strategy for SaaS" (qualified)
- **Narrow:** "content marketing calendar template for B2B SaaS startups" (highly specific)

### Dimension 3: Temporal Dimension
- **Evergreen:** "what is photosynthesis" (always relevant)
- **Trending:** "AI writing tools 2024" (time-sensitive)
- **Seasonal:** "best winter hiking gear" (cyclical)
- **Event-driven:** "[conference name] schedule" (tied to events)

### Dimension 4: Sophistication Level
- **Novice:** "what is SEO" (basic understanding)
- **Intermediate:** "how to build topical authority" (working knowledge)
- **Advanced:** "semantic content network contextual vectors" (expert-level)
- **Professional:** "information retrieval cost optimization for semantic search" (industry insider)

### Dimension 5: Problem-Solution Stage
- **Problem Awareness:** "why is my website not ranking" (knows the problem)
- **Solution Awareness:** "how to improve SEO rankings" (knows solutions exist)
- **Solution Evaluation:** "semantic SEO vs traditional SEO" (comparing options)
- **Decision:** "best semantic SEO course" (ready to choose)
- **Retention:** "semantic SEO advanced techniques" (already using, wants more)

### Dimension 6: Format Preference
- **Definition:** "what is [X]" → paragraph answer
- **List:** "types of [X]" → bulleted/numbered list
- **Comparison:** "[X] vs [Y]" → table
- **How-to:** "how to [X]" → step-by-step
- **Data:** "[X] statistics" → numbers/charts

## Step 3: Query Clustering

Group queries into clusters based on:
1. **Shared entity-attribute pairs** (same entity + same attribute = same cluster)
2. **Shared intent** (same primary intent = related cluster)
3. **Lexical overlap** (shared key terms = potentially same cluster)
4. **Semantic similarity** (different words but same meaning = same cluster)

Each cluster should map to one potential article or content piece.

## Step 4: Canonical Query Identification

For each cluster, identify the CANONICAL QUERY — the single query that best represents the entire group.

Rules for selecting canonical queries:
1. The shortest correct formulation wins
2. Must be grammatically proper
3. Must unambiguously represent the cluster's intent
4. Must not trigger entity disambiguation issues (e.g., "what is friendship" could mean the movie — use "what is the definition of friendship" instead)

**Example:**
Cluster: "what is friendship", "friendship meaning", "define friendship", "what does friendship mean", "friendship definition"
→ Canonical Query: "What is the definition of friendship?" (shortest that avoids disambiguation)

## Step 5: Query Path Mapping

Map how users search in SEQUENCES (query paths):
- Query A → Query B → Query C (user's search journey)
- Earlier queries contextualize later ones (search engines use this)
- Your topical map should anticipate these paths

**Example path:** "turkey recipe" → "how long to cook turkey" → "turkey carving" → "leftover turkey recipes"

Each path represents a user journey that your content network should support.

## Step 6: Semantic Distance Calculation

Calculate the semantic distance between query clusters:
- **Close:** Clusters sharing entities, attributes, AND intent (same article or adjacent articles)
- **Medium:** Clusters sharing entities but different attributes (related articles, internal links)
- **Far:** Clusters sharing only broad topic relevance (different sections of topical map)

## Step 7: Generate Synthetic Search Queries

For entities from the same type (e.g., all countries), generate synthetic queries based on patterns found:
- If "Germany population" is a real query, "France population" is a synthetic query (valid even without search volume)
- Synthetic queries help fill content templates and maintain consistency across the content network

## Advanced Query Network Concepts

### Represented vs Representative Queries
Search engines do NOT give full weight to the exact terms in the search bar. Relevance is distributed based on "representative queries" — the most authoritative interpretation of a search term. Example: "board vision" and "vision board" give different results despite similar meaning because they have different representative queries with different contextual connections. Always identify the representative query for each cluster, not just the most popular literal search term.

### Query Semantics and Probability Distribution
For single-word queries like "cancer," the search engine distributes probabilities across all possible interpretations based on query variations, search behaviors, and search demand. Your content must be relevant to ALL possible interpretations (for relevance) and satisfy ALL possible needs (for responsiveness). This dual requirement means query clusters must account for probability distributions, not just primary intent.

### Query Paths and Session Satisfaction
Query paths represent complete search sessions. Search engines evaluate session satisfaction — did the user's full query sequence get resolved? Map query paths not just as content planning tools but as session satisfaction chains. Each touchpoint generates historical data (positive, negative, or neutral). Non-quality sessions demote your rankings after approximately 6 months.

### Seasonal and Trending Query Triggers
Seasonal events can trigger re-ranking. Map seasonal query spikes for your topic and plan content publication BEFORE the seasonal event to capture re-ranking opportunities. A well-timed content network published before a seasonal event can generate massive historical data when the event triggers increased search demand.

## Output Template

```
# Query Network Analysis: [Topic/Entity]
## Source Context: [Summary]

### Query Clusters
#### Cluster 1: [Name]
- Canonical Query: [query]
- Query Count: [N]
- Primary Intent: [type]
- Sophistication: [level]
- Stage: [problem-solution stage]
- Format: [preferred]
- Sample Queries: [list top 5-10]

### Query Paths (User Journeys)
- Path 1: [Query A] → [Query B] → [Query C]
- Path 2: [Query A] → [Query D] → [Query E]

### Semantic Distance Map
| Cluster | Closest Clusters | Medium Distance | Far Distance |
|---------|-----------------|-----------------|--------------|
| [name] | [clusters] | [clusters] | [clusters] |

### Synthetic Queries Generated
[List of synthetic queries for template scaling]

### Statistics
- Total Raw Queries: [N]
- Total Clusters: [N]
- Canonical Queries: [N]
- Query Paths Identified: [N]
```

## Data Input Integration (Skill 33)

When Skill 33 has been run, the **Keyword Intelligence Report** provides real query clusters with actual search volumes, difficulty scores, intent classifications, and SERP feature data. Use these pre-clustered queries as your query network foundation instead of generating synthetic queries. The canonical query per cluster from Skill 33 approximates the representative query. Validate and refine the clusters, but don't discard the volume and difficulty data — it grounds your query network in market reality.
