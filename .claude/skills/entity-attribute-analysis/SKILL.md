---
name: entity-attribute-analysis
description: "Analyze and classify entity attributes using Koray's three-tier system (Root/Rare/Unique) and three-criteria scoring (Prominence/Popularity/Relevance). Use this skill whenever the user needs to identify what attributes matter for their entities, filter attributes by source context, prioritize content creation, or determine which entity properties deserve dedicated articles vs. subsections. This skill is essential after defining Source Context and before building topical maps."
---

# Entity & Attribute Analysis

Every entity in your semantic content network has attributes — properties that describe it. Not all attributes are equal. This skill systematically identifies, classifies, and scores attributes to determine what content to create and in what priority.

## Why Attribute Analysis Matters

Creating content for irrelevant attributes wastes resources and dilutes topical authority. A German visa consultancy writing about Germany's football league is spending money on content that doesn't serve their Source Context. Attribute analysis ensures every piece of content earns its place.

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, enhance attribute discovery with live data:

1. **Before starting analysis**, run `entity_research` mode on your central entity:
   ```bash
   python web-research-engine/scripts/web_research.py --mode entity_research --query "[central entity] attributes characteristics types" --output /tmp/entity_data.json
   ```
2. Cross-reference the AI-discovered attributes with the live research results to validate Prominence scores
3. Use `search` mode to verify Popularity — search each attribute + entity combination and note whether results appear
4. Any attributes found in live research but missing from your analysis should be evaluated and added if they pass the three-criteria filter

## Step 1: Identify All Attributes of the Central Entity

For your central entity and its key sub-entities, list ALL possible attributes. Think about:

- **Physical properties:** size, location, population, area, coordinates
- **Temporal properties:** history, founding date, seasons, schedules
- **Relational properties:** neighbors, parent entities, child entities, competitors
- **Functional properties:** purpose, uses, processes, requirements
- **Cultural properties:** language, religion, customs, arts, food
- **Economic properties:** costs, currency, GDP, industries, employment
- **Administrative properties:** government, laws, regulations, systems
- **Unique identifiers:** symbols, codes, flags, anthems, landmarks

Use multiple sources: knowledge bases (Wikipedia, Wikidata), query research, competitor analysis, and domain expertise.

## Step 2: Classify Each Attribute (Root / Rare / Unique)

### Root Attributes
Appear in ALL instances of the entity's class. If the entity is a "country," root attributes exist for every country on Earth.

**Test:** Does EVERY [entity type] have this attribute?
**Examples for countries:** population, capital, area, language, currency, government type, location, climate

### Rare Attributes
Appear in SOME but not all instances. They help differentiate groups within the class.

**Test:** Do SOME but not all [entity types] have this attribute?
**Examples for countries:** nuclear plants, deserts, tropical forests, volcanoes, specific industries, historical empires

### Unique Attributes
Appear ONLY in this specific entity. They are the definitive qualifiers — essentially synonyms for the entity itself.

**Test:** Is this attribute exclusively associated with THIS entity?
**Examples:** Eiffel Tower (Paris), Colosseum (Rome), Great Wall (China), Statue of Liberty (New York)

**Priority Rule:** For building RELEVANCE, process in this order:
1. Unique attributes first (highest relevance — they ARE the entity)
2. Rare attributes second (they QUALIFY the entity)
3. Root attributes third (they provide ACCURACY and COMPREHENSIVENESS)

## Step 3: Score Each Attribute on Three Criteria

### Criterion 1: Prominence
**Question:** Can you define the entity WITHOUT this attribute?

- If removing this attribute makes the entity unrecognizable → HIGH prominence
- If removing it still leaves the entity identifiable → LOW prominence

**Example:** Removing "population" from Germany means there's no country → HIGH prominence
**Example:** Removing "football league" still leaves Germany as a country → LOW prominence

### Criterion 2: Popularity
**Question:** How much search demand exists for this attribute?

- Check search volumes for [entity] + [attribute] queries
- Check "People Also Ask" boxes and related searches
- High search volume = HIGH popularity, regardless of prominence

**Example:** "Germany football league" has high search volume → HIGH popularity
**Example:** "Germany internet extension" has low search volume → LOW popularity

### Criterion 3: Relevance (to Source Context)
**Question:** Does this attribute serve YOUR specific Source Context?

- Does it connect to your monetization model?
- Does it serve your central search intent?
- Would your target audience care about this?

**Example for visa consultancy:** "Germany population" → HIGH relevance (connects to living, culture, demographics, visa decisions)
**Example for visa consultancy:** "Germany football league" → LOW relevance (irrelevant to immigration)

## Step 4: Apply the Decision Framework

Score each attribute as HIGH or LOW on all three criteria, then decide:

| Prominence | Popularity | Relevance | Decision |
|-----------|-----------|-----------|----------|
| HIGH | HIGH | HIGH | **Priority content** — Root article, deep coverage, high in site architecture |
| HIGH | HIGH | LOW | **Include but minimal** — Brief mention, no dedicated article |
| HIGH | LOW | HIGH | **Important supporting content** — Dedicated section within related article |
| LOW | HIGH | HIGH | **Outer section content** — Authority building, may deserve own article |
| LOW | HIGH | LOW | **Skip entirely** — Popular but irrelevant to your source context |
| LOW | LOW | HIGH | **Include as supplementary** — Micro context within related articles |
| HIGH | LOW | LOW | **Skip** — Prominent but neither searched nor relevant |
| LOW | LOW | LOW | **Skip entirely** — No value |

## Step 5: Generate the Attribute Inventory

### Output Template:

```
# Entity Attribute Analysis: [Entity Name]
## Source Context: [Source Context Summary]

### Priority Tier 1 (Root Articles — Deepest Coverage)
| Attribute | Type | Prominence | Popularity | Relevance | Content Decision |
|-----------|------|-----------|-----------|-----------|-----------------|
| [attr] | Root/Rare/Unique | H/L | H/L | H/L | [Decision] |

### Priority Tier 2 (Supporting Articles)
[Same table format]

### Priority Tier 3 (Supplementary Sections)
[Same table format]

### Filtered Out (Not Relevant to Source Context)
| Attribute | Reason for Exclusion |
|-----------|---------------------|
| [attr] | [Why it doesn't serve source context] |
```

## Advanced Attribute Analysis Concepts

### Entity Identity and Document Statistics
Entities are living things inside knowledge bases with changing attribute-value pairs. Document statistics (how many times an attribute is mentioned, from how many sources) shape the entity's identity in search engines' eyes. A phrase mentioned 99 times from 46 sources as "horse, animal" but only 5 times from 2 sources as "brand name" gets resolved as the animal. Prioritize attributes that align your entity identity with your Source Context.

### Semantic Distance Between Attributes
The semantic distance between attributes and attribute-context pairs helps search engines rank attributes by importance. Two measurement methods: (1) count of associations and angles between entities by type, (2) repetitiveness of connection declarations. Map these distances when scoring attributes to understand which ones define the entity most strongly.

### Topical Coverage Depth Requirement
Topical coverage cannot be increased by stuffing entities or attributes. The depth must reach granular levels. Example: Electric Scooter → battery → operating temperature, safety features, voltage, capacity, cycle life → durability against vibration, water, shock → chemical compositions (LiFePO4, NCA, NMC) → voltage types (operating, regulator, charging, peak, nominal). Each level must be DEFINED and CONNECTED, not just mentioned.

### Quality Threshold Assessment
Replace "keyword difficulty" with Quality Threshold analysis. For each attribute cluster, identify the most and least quality sources currently ranking. The gap between them defines the quality threshold you must exceed. Consider: relevance threshold (term weight patterns), predictive ranking (how concept groups might be ranked), and propagation of relevance/quality through connected content.

## Data Input Integration (Skill 33)

When Skill 33 has been run, the **Research Intelligence Report** provides a pre-mapped entity-attribute inventory with mention frequencies and source diversity scores. Use this as your starting point instead of generating attributes from scratch. Cross-reference with the **Keyword Intelligence Report** to validate which attributes have actual search demand. Attributes that appear in research but have zero search demand go to the Outer Section. Attributes with both research depth and search demand are Core Section priorities.

## Connecting to Other Skills

- **Input from:** Source Context (Skill 1) — determines Relevance scoring
- **Output to:** Raw Topical Map (Skill 5) — attributes become topical map nodes
- **Output to:** Question Generation (Skill 11) — attribute types determine question types
- **Output to:** Content Briefs (Skill 8) — attribute priority determines heading order
