---
name: topical-map-processing
description: "Transform raw topical maps into processed title tags, meta descriptions, and URL structures using Koray Tugberk Gubur's title tag writing methodologies. Use this skill whenever the user needs to create title tags, meta descriptions, URL structures, or wants to verbalize their topical map into search-engine-readable signals. Trigger for any request involving SEO titles, meta tags, description writing, or URL planning for a semantic content network."
---

# Topical Map Processing (Titles, Descriptions & URLs)

Processing transforms raw entity-attribute pairs into the three elements search engines first encounter: title tags, meta descriptions, and URLs. These are the verbalized version of your strategy — where raw notes become signals.

## Title Tag Writing Methodologies

Koray uses four primary patterns for turning entity-attribute pairs into title tags:

### Pattern 1: Conjunctive Words ("and")
Connects two concepts to create conditional synonym relationships.

**Formula:** [Concept A] and [Concept B] of [Entity]
**Example:** "Costs and Conditions of Living in Germany"
**Effect:** "Costs" and "Conditions" become contextual synonyms, each pulling its own query network while linking them

**When to use:** When two attributes naturally complement each other and both have search demand

### Pattern 2: Entity-Attribute Direct Pairs
Directly names the entity and its attribute.

**Formula:** [Attribute] of [Entity] or [Entity] [Attribute]
**Example:** "Population of Germany" or "German Climate"
**Effect:** Clear, unambiguous signal about page content

**When to use:** When the attribute is prominent and has strong standalone search demand

### Pattern 3: Entity Sets with Plural Nouns
Uses plural forms to imply a collection of instances.

**Formula:** [Entity Type (plural)] in [Context]
**Example:** "Countries in Europe" or "Cities in Germany"
**Effect:** Signals that the page covers multiple instances of a type, creating a grouper/hub page

**When to use:** For hub pages that aggregate multiple entities of the same type

### Pattern 4: Hypernym-Hyponym Structures
Uses a general term followed by specific examples.

**Formula:** [Hypernym]: [Hyponym1], [Hyponym2], [Hyponym3]
**Example:** "German Celebrities: Poets, Authors, Actors, and Musicians"
**Effect:** Covers both the general category and specific instances, maximizing query coverage

**When to use:** When a topic has well-known subcategories that users search for individually

## Title Tag Aggregation Principle

Search engines aggregate ALL title tags across your site to understand overall topicality. Certain strategic words repeat deliberately in Core Section titles to reinforce the central entity and central search intent.

**Core Section titles:** Repeat central entity terms and monetization-related vocabulary
**Outer Section titles:** Introduce broader vocabulary while maintaining connection to central entity

## Meta Description Writing Method

Descriptions serve as article summaries and reflect the document's flow order.

### Rules:
1. **Repeat the title with variations** — Start by echoing the title in slightly different words
2. **Expand with context terms** — Add topical entries and contextual terms in order of appearance in the article
3. **Macro context FIRST** — The main topic appears at the beginning
4. **Micro context LAST** — The secondary/supplementary topic appears at the end
5. **Mirror document flow** — The order of elements in the description matches the order of content in the article
6. **Include the central search intent predicates** — Verbs from the site-wide n-grams

### Description Formula:
```
[Title variation/echo]. [Main topic expansion with key terms]. [Supporting detail]. [Micro context mention at end].
```

**Example:**
Title: "What to Know About German Climate"
Description: "Learn about Germany's climate zones, temperatures, and seasonal patterns. Discover regional weather differences across German states. Essential weather preparation for your German visa application."

Note how "visa" (the micro context/monetization topic) appears at the END.

### Interchangeable Linking Rule:
If Article A has "visa" as micro context in its description, then the Visa article has "climate" as its micro context. They link to each other reciprocally.

## URL Structure Design

### Rules:
1. **Keep URLs short** — 1-2 words per segment (single words preferred)
2. **Never repeat words** — If "germany" is in the domain/subfolder, don't use it in the slug
3. **Core Section = flatter** — Fewer directory levels (e.g., /visa-types/work-visa/)
4. **Outer Section = can be deeper** — More levels OK (e.g., /europe/germany/culture/religion/)
5. **Match topical map hierarchy** — URL structure mirrors the content architecture
6. **Shorter URLs are canonical preferred** — Search engines prefer shorter URLs as canonical versions

### URL Pattern:
```
Core: domain.com/[core-topic]/[specific-page]
Outer: domain.com/[contextual-domain]/[entity]/[attribute]
```

## Creating Patterns for Search Engine Communication

The most effective way to communicate with search engines is to create CONSISTENT PATTERNS and follow them repeatedly. When the search engine detects a pattern in your URL structure, title format, and description format, it can process your entire site more efficiently.

**Pattern example:**
- All country articles follow: "What to Know About [Country] [Attribute]"
- All country URLs follow: /countries/[country]/[attribute]
- All country descriptions follow the same structure

This consistency enables bulk content configuration (Skill 10) and reduces Cost of Retrieval.

## Output Template

```
# Processed Topical Map: [Website]

## Title Tag Pattern Library
### Core Section Patterns
| Pattern Type | Template | Example |
|-------------|----------|---------|
| Conjunctive | [A] and [B] of [Entity] | Costs and Conditions of German Visas |
| Direct | [Attribute] of [Entity] | Types of German Work Visas |
| Entity Set | [Plural] in [Context] | Visa Requirements in European Countries |
| Hypernym-Hyponym | [General]: [Specific1], [Specific2] | German Visa Types: Work, Student, Family |

### Outer Section Patterns
[Same format]

## Full Title Tag List
| # | Raw Entity-Attribute | Title Tag | Pattern Used |
|---|---------------------|-----------|-------------|
| 1 | [pair] | [title] | [pattern] |

## Full Description List
| # | Title | Description | Macro Context | Micro Context |
|---|-------|-------------|---------------|---------------|

## URL Structure
| # | Title | URL | Depth |
|---|-------|-----|-------|
```

## Advanced Processing Principles

### Main Content vs Supplementary Content Assignment
During topical map processing, classify each content section as Main or Supplementary. Main Content processes macro-context — the specific context-terms, topical entries, and main entities. It provides the main context-flow and coverage including article summary. It does NOT touch sub-contexts. Supplementary Content processes micro-contexts and sub-topics with internal links to side-topics. Supplementary is always connected to macro-context but bridges to OTHER macro-contexts.

### Contextual Border Placement
Each processed topical map node needs a Contextual Border — the transition point between main content (macro-context) and supplementary content (micro-contexts). The border provides a grouper question that deepens the main context while connecting to side-topics. This is where H2 = Short Form QA (grouper question) and H3 = conditions/qualifiers as connected questions.

### Quality Threshold Integration
When processing the topical map, assign quality thresholds per node based on SERP analysis. Replace keyword difficulty with: (1) Relevance threshold — minimum IR score needed, (2) Quality threshold — content depth/accuracy needed, (3) Predictive ranking — how this node might rank given the source's current authority.

## Connecting to Other Skills
- **Input from:** Raw Topical Map (Skill 5), Lexical Relations (Skill 4)
- **Output to:** Content Briefs (Skill 8), Information Architecture (Skill 7)
