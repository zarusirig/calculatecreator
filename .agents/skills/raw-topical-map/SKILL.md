---
name: raw-topical-map
description: "Generate a complete raw topical map with Core Section, Outer/Author Section, entity-attribute pairings, topical borders, and section hierarchy following Koray Tugberk Gubur's exact methodology. Use this skill whenever the user needs a topical map, content strategy, site architecture plan, content planning, or wants to organize their semantic content network. This is the central strategic skill — the topical map IS the strategy."
---

# Raw Topical Map Generation

The raw topical map is entity-attribute pairs organized into a hierarchical structure with Core and Outer sections. It is the strategic backbone of the entire semantic content network — every article, every internal link, every content brief derives from it.

## What is a Raw vs. Processed Topical Map?

- **Raw Topical Map:** Entity-attribute pairs organized by section and priority. Like architect's notes before blueprints.
- **Processed Topical Map:** The raw map verbalized into title tags, descriptions, URLs. Like the actual blueprints.

This skill creates the RAW map. Skill 6 (Topical Map Processing) turns it into the processed version.

## The Two Sections

### Core Section
- **Purpose:** Direct monetization. This is WHERE the money comes from.
- **Source:** Derived from Source Context + Central Entity's most relevant attributes
- **Depth:** DEEP. Go exhaustive on topics here.
- **Architecture:** Relatively FLAT (fewer clicks from homepage)
- **Content Type:** Primarily transactional and commercial investigation
- **Example:** For visa consultancy → visa types, application processes, requirements, costs, timelines

### Outer Section (Author Section)
- **Purpose:** Build topical authority and demonstrate expertise
- **Source:** Derived from the Central Entity's broader attributes
- **Depth:** WIDE but not as deep as Core
- **Architecture:** Can be DEEPER (more clicks from homepage is OK)
- **Content Type:** Primarily informational
- **Example:** For visa consultancy → German culture, climate, cities, religion, economy, history, geography

### How They Connect
Outer Section articles connect to Core Section articles through internal links. Example:
- "German Language Schools" (Outer) → links to → "Language Visa for Germany" (Core)
- "German Culture and Customs" (Outer) → links to → "Cultural Exchange Visa" (Core)

This creates a web where authority-building content feeds relevance to money-making content.

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, validate your topical map against live competition:

1. **Run `keyword_ideas`** for your central entity to discover any missing topic clusters:
   ```bash
   python web-research-engine/scripts/web_research.py --mode keyword_ideas --query "[central entity]" --country [target-country] --output /tmp/map_gaps.json
   ```
2. **Run `competitor_scan`** on 2-3 top competitor sites to extract their topical coverage:
   ```bash
   python web-research-engine/scripts/web_research.py --mode competitor_scan --query "[topic]" --domains competitor1.com competitor2.com --output /tmp/competitor_map.json
   ```
3. Compare your topical map's Core and Outer sections against competitor coverage — any topics they cover that you don't are potential gaps
4. Any trending subtopics from keyword_ideas that aren't in your map should be evaluated for inclusion
5. Competitor heading structures reveal their topical organization — use this to validate your own hierarchy

## Step 1: Determine Entity Hierarchy

From Entity Attribute Analysis (Skill 2), arrange entities hierarchically:

1. **Central Entity** (top level)
2. **Primary Sub-Entities** (main attributes that passed all 3 criteria)
3. **Secondary Sub-Entities** (attributes that passed 2 of 3 criteria)
4. **Tertiary Sub-Entities** (supporting attributes with niche relevance)

## Step 2: Define Topical Borders

Topical borders define WHERE one topic ends and another begins. They prevent content from bleeding into irrelevant territory.

**Rule:** If an attribute takes you too far from your Source Context, it becomes a border. You acknowledge it exists but don't cross into it.

**Example for visa consultancy:**
- Border: "German Football League" — acknowledge it exists, don't create content about it
- Not a border: "German Population" — deeply relevant, create extensive content

## Step 3: Organize Core Section

List all entity-attribute pairs for the Core Section:
- Order by relevance to monetization (most valuable at top)
- Each pair = potential article or content cluster
- Group related pairs into content clusters
- Identify the ROOT article (the single most important page — see Skill 9)

### Core Section Structure:
```
Core Section: [Monetization Topic]
├── Root Article: [The most important page]
├── Cluster 1: [Topic Group]
│   ├── Seed Article: [Main page for this cluster]
│   ├── Node: [Supporting article]
│   ├── Node: [Supporting article]
│   └── Node: [Supporting article]
├── Cluster 2: [Topic Group]
│   ├── Seed Article
│   ├── Node
│   └── Node
└── [Continue for all clusters]
```

## Step 4: Organize Outer Section

List all entity-attribute pairs for the Outer Section:
- Order by attribute priority (highest attribute relevance first)
- Group by contextual domains (geography, culture, economy, etc.)
- Plan connections back to Core Section

### Outer Section Structure:
```
Outer Section: [Authority Building Topics]
├── Contextual Domain 1: [e.g., Geography]
│   ├── Seed Article
│   ├── Node → connects to Core: [which Core article]
│   └── Node → connects to Core: [which Core article]
├── Contextual Domain 2: [e.g., Culture]
│   ├── Seed Article
│   ├── Node → connects to Core: [which Core article]
│   └── Node
└── [Continue for all domains]
```

## Step 5: Apply the Most Popular Entity Type Rule

When building the topical map, organize entities by their MOST POPULAR ENTITY TYPE in user behavior:

- Users search for countries by continent → organize countries under continents
- Users search for products by category → organize products under categories
- Users search for tools by function → organize tools under use cases

This is based on USER BEHAVIOR (how people actually search), not encyclopedic classification.

## Step 6: Calculate Article Counts

Estimate total articles needed:
- **Core Section:** Typically 30-40% of total articles
- **Outer Section:** Typically 60-70% of total articles
- **Total range:** Usually 100-800+ articles depending on niche

Content type distribution:
- ~70% Informational articles
- ~20% Commercial investigation articles
- ~10% Transactional articles

## Step 7: Generate the Raw Topical Map

### Output Template:

```
# Raw Topical Map: [Website Name]
## Source Context: [Summary]
## Central Entity: [Entity]
## Central Search Intent: [Intent]

### Metrics
- Total Articles Planned: [N]
- Core Section Articles: [N]
- Outer Section Articles: [N]
- Estimated Contextual Domains: [N]

### Core Section
[Full hierarchical listing of entity-attribute pairs with Root/Seed/Node designations]

### Outer Section
[Full hierarchical listing with contextual domain groupings and Core connection mappings]

### Topical Borders
[List of topics explicitly NOT covered and why]

### Cross-Section Connections
[Map of Outer → Core internal link paths]
```

## Key Principles

1. **Nothing is random.** Every entity-attribute pair is placed deliberately based on Source Context, attribute scoring, and query network data.
2. **Context shifting by Source Context.** The same entity at different depths depending on relevance.
3. **The Root article is the most important page.** Everything connects through it (see Skill 9).
4. **Entity proximity from USER BEHAVIOR, not encyclopedias.** Organize by how people search, not how academics classify.
5. **Core goes deep, Outer goes wide.** Core = expertise depth. Outer = authority breadth.

## Advanced Topical Map Principles

### Core Section vs Outer Section
The Core Section unifies source context with central search intent — it's densified around the MAIN attribute of the central entity (derived from source context). The Outer Section improves historical data by covering MINOR attributes. Core must be completed FIRST because it builds primary topical authority. Outer propagates trust and quality signals back to core through links and linkless connections.

### Topical Coverage Cannot Be Stuffed
Topical coverage is NOT measured by number of web pages or entity mentions. If you didn't DEFINE X, you didn't cover it. If you didn't CONNECT X to Y, you didn't cover it. If your definition misses certain aspects, you didn't cover it. If the macro-context doesn't match the query context, you didn't cover the entity with proper context. Coverage requires processing every macro and micro context for a knowledge domain.

### Contextual Consolidation Rules
Even if you process all battery materials for electric scooters, if you don't connect them BACK to battery-related attributes, you dilute context. Even if you connect them only to electric scooter batteries, you still dilute context. You must process: batteries → battery types → batteries for electric scooters → battery production → battery materials SEPARATELY. Then consolidate by comparing (electric scooter batteries vs electric bike batteries) and calculating distances (electric scooters to electric cars).

### Non-Quality Pages Harm Quality Pages
Non-quality pages in your topical map cause other quality pages to rank lower. Every node must earn its place. The quality of your entire topical map and semantic content network affects rankings for EVERY topic your source covers.

### Vastness-Depth-Momentum
If you can't create a wide source, go deeper and faster. If you can't go fast, go wider and deeper. Whichever pillar is missing, compensate with the other two. You can have a massive topical map with standard briefs, or a small topical map with extremely deep content briefs, or moderate size published at high frequency.

## Data Input Integration (Skill 33)

When Skill 33 has been run, use the **Combined Strategy Brief** to size your Core vs Outer sections based on actual keyword coverage data. Clusters with high search volume and commercial intent form Core Section nodes. Clusters with informational intent and moderate volume form Outer Section nodes. The **content gap keywords** from Skill 33 identify topical map nodes that competitors haven't filled — these are high-opportunity nodes. Use the priority queue from the Strategy Brief to determine which nodes to create first.

## Connecting to Other Skills
- **Input from:** Source Context (Skill 1), Entity Attributes (Skill 2), Query Networks (Skill 3), Lexical Relations (Skill 4)
- **Output to:** Topical Map Processing (Skill 6), Information Architecture (Skill 7), Content Briefs (Skill 8), Root Document Brief (Skill 9)
