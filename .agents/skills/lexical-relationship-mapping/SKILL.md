---
name: lexical-relationship-mapping
description: "Generate WordNet-style lexical analysis for entities in a topical map — including synonyms, hyponyms, hypernyms, meronyms, holonyms, troponyms, entailments, co-hyponyms, antonyms, conditional synonyms, and distributional semantics patterns. Use this skill whenever the user needs vocabulary expansion, heading synonym phrases, anchor text alternatives, word proximity optimization, or wants to map lexical relationships for SEO content. Essential for title tag writing, heading generation, and micro-semantic optimization."
---

# Lexical Relationship Mapping

This skill generates a complete lexical analysis for every entity in your semantic content network. Lexical relationships power title tag writing, heading generation, anchor text strategy, and micro-semantic optimization. The goal is to build a vocabulary system where every word serves a strategic purpose.

## Why Lexical Relationships Matter for SEO

Search engines use distributional semantics — they understand words by the company they keep. If your content uses the same narrow vocabulary repeatedly, you signal shallow understanding. Rich lexical variation signals deep topical expertise and creates more entry points for ranking.

Conditional synonyms are especially powerful: they connect different query networks. When "costs" and "conditions" appear together in "Costs and Conditions of Living in Germany," they become contextual synonyms — each one pulling in its own query network while linking them together.

## Step 1: For Each Entity, Map These 10 Relationship Types

### 1. Synonyms
Words with the same or nearly the same meaning in your context.
- **Example:** "country" ↔ "nation" ↔ "state" (in political context)
- **Usage:** Heading variations, title tag alternatives, vocabulary expansion

### 2. Hyponyms (More Specific)
Words that are a TYPE OF the entity.
- **Example:** "country" → Germany, France, Japan (these are types of countries)
- **Usage:** Entity sets with plural nouns in titles, listing content, grouper pages

### 3. Hypernyms (More General)
Words that the entity is a TYPE OF.
- **Example:** Germany → "country" → "political entity" → "geographic region"
- **Usage:** Category pages, breadcrumb naming, contextual domain identification

### 4. Meronyms (Parts Of)
Words for PARTS of the entity.
- **Example:** "Germany" → states, cities, regions, districts
- **Usage:** Structural breakdown content, navigational content

### 5. Holonyms (Whole That Contains)
Words for the WHOLE that contains the entity.
- **Example:** "Germany" → Europe, European Union, Schengen Area
- **Usage:** Contextual positioning, anchor text for parent pages

### 6. Troponyms (Manner Of)
Words that describe a specific manner of doing something (verb relationships).
- **Example:** "travel" → fly, drive, sail, hike, trek (ways of traveling)
- **Usage:** Content brief structure hints, verb diversity in headings

### 7. Entailments
Actions that NECESSARILY accompany another action.
- **Example:** "immigrate" entails "move," "relocate," "settle"
- **Usage:** Predicate expansion in content, implicit topic coverage

### 8. Co-Hyponyms
Siblings — entities that share the same hypernym.
- **Example:** Germany, France, Italy, Spain (all co-hyponyms under "European countries")
- **Usage:** Comparison content, "vs" articles, grouper pages, template scaling

### 9. Antonyms
Words with opposite meaning.
- **Example:** "safest cities" ↔ "most dangerous cities"
- **Usage:** Supplementary content strategy, micro context sections, expanding relevance through opposition

### 10. Conditional Synonyms
Words that BECOME synonymous only in a specific context (Koray's unique concept).
- **Example:** "costs" and "conditions" become contextual synonyms in "Costs and Conditions of Living in Germany"
- **Example:** "language" and "culture" become contextual synonyms when discussing immigration
- **Usage:** Title tag conjunctive phrases, connecting separate query networks, bridging topical domains

## Step 2: Build Phrase Taxonomy

From the lexical relationships, generate phrase variations:

### Synonym Phrases for Headings
- Original: "Population of Germany"
- Variations: "How Many People Live in Germany", "Germany's Demographic Profile", "Inhabitants of Germany"

### Conditional Synonym Phrases for Titles
- "Costs and Conditions of Living in Germany" (costs ↔ conditions become linked)
- "Language and Culture in Germany" (language ↔ culture become linked)

### Hypernym-Hyponym Title Structures
- "German Celebrities: Poets, Authors, Actors, and Musicians"
- "European Countries: Germany, France, Italy, and More"

### Entity Set Titles (Plural Nouns)
- "German Cities" (implies a set of individual city instances)
- "European Languages" (implies a set of language instances)

## Step 3: Distributional Semantics Patterns

Map which words TEND TO appear together and in what proximity:
- **High proximity pairs:** Words that should appear close together (within same sentence/paragraph)
- **Medium proximity pairs:** Words that should appear in same section
- **Low proximity pairs:** Words that should appear in same document but can be distant

These patterns inform content writing and word placement strategy.

## Output Template

```
# Lexical Relationship Map: [Entity]

## Core Relationships
| Relationship | Terms | Usage Context |
|-------------|-------|---------------|
| Synonyms | [list] | Heading variations |
| Hyponyms | [list] | Entity sets, listings |
| Hypernyms | [list] | Categories, breadcrumbs |
| Meronyms | [list] | Structural breakdowns |
| Holonyms | [list] | Parent page anchors |
| Troponyms | [list] | Verb diversity |
| Entailments | [list] | Implicit coverage |
| Co-Hyponyms | [list] | Comparisons, templates |
| Antonyms | [list] | Supplementary content |
| Conditional Synonyms | [pairs with context] | Title conjunctions |

## Phrase Taxonomy
### Synonym Phrases: [list with contexts]
### Conditional Synonym Phrases: [list]
### Hypernym-Hyponym Structures: [list]
### Entity Set Phrases: [list]

## Distributional Patterns
### High Proximity Pairs: [word pairs that must be close]
### Medium Proximity Pairs: [word pairs in same section]
### Cross-Document Patterns: [terms that should appear across multiple pages]
```

## Advanced Lexical Concepts

### Micro-Semantics and Sequence Modeling
Micro-semantics involves word-by-word optimization through sequence modeling (from NLP). Word order changes relevance distribution: "Teacher yelled students" makes "teacher" heavier; "Students yelled at by teacher" makes "students" heavier. Predicate selection matters — "yell" annotates different context from "shout" and changes all word sequence probabilities. Apply this when generating heading variations and phrase taxonomy.

### Contextual Relevance of Terms
Contextual relevance means the same word carries different meaning weight in different contexts. The noun "love" has sexual vs religious contexts. When mapping lexical relationships, annotate each term with its contextual relevance — which context activates which meaning. This prevents accidental context dilution in content.

### Words of Interest and Content Contextualization
Beyond standard lexical relationships, identify "Words of Interest" — terms that signal specific contexts to search engines. These are predicates, modifiers, and qualifiers that shift the contextual vector of a section. Map which Words of Interest activate which macro-context for your entity.

## Connecting to Other Skills
- **Input from:** Entity Attribute Analysis (Skill 2), Query Networks (Skill 3)
- **Output to:** Topical Map Processing (Skill 6) — powers title tag writing
- **Output to:** Content Briefs (Skill 8) — provides heading vocabulary
- **Output to:** Anchor Text Strategy (Skill 17) — provides linking vocabulary
- **Output to:** Distributional Semantics Optimizer (Skill 15) — provides proximity rules
