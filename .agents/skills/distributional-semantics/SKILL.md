---
name: distributional-semantics
description: Word proximity optimization, distributional semantics, phrase optimization, word order in sentences, semantic word placement, co-occurrence patterns, term proximity, vocabulary optimization, lemmatization, synonym integration, cross-page distributional patterns
version: 1.0
dependencies:
  - algorithmic-authorship
  - micro-semantics
  - contextual-vector-optimizer
inputs:
  - content_draft: "Written content ready for distributional optimization"
  - target_queries: "Queries with their component terms for proximity analysis"
  - entity_vocabulary: "Full vocabulary set for the topic including synonyms, lemma variations, and technical terms"
  - site_pages: "Other pages on the site for cross-page pattern analysis"
outputs:
  - optimized_content: "Content with distributional patterns applied across word proximity, lemmatization, synonym placement, and phrase sequences"
  - cross_page_recommendations: "Word combination patterns that must appear on multiple pages"
  - vocabulary_distribution_map: "Map of where each term and variation appears across the content"
---

# Distributional Semantics

## Purpose

Distributional semantics governs how words are placed in relation to each other within content. Search engines evaluate not just which words appear on a page but how close those words are to each other, in what order they appear, and whether the expected co-occurrence patterns for a topic are present. Two pages can contain the exact same set of words but rank differently because the distributional patterns — proximity, order, and co-occurrence — differ.

The compounding effect of distributional optimization is significant. A single improvement in word proximity might produce only a 0.1% relevance increase for one query. But across an article with hundreds of entity-attribute-value relationships and a site with thousands of queries, that 0.1% improvement multiplied across billions of evaluated facts creates a massive cumulative advantage. Distributional semantics is about systematic, fine-grained optimization that scales.

## Core Concepts

### Word Proximity Optimization

Word proximity measures how close related terms appear to each other in the text. Search engines use proximity as a relevance signal: when a query contains the terms "German visa cost," a page where "German," "visa," and "cost" appear within the same sentence scores higher than a page where "German" appears in paragraph 1, "visa" in paragraph 3, and "cost" in paragraph 7.

**Proximity levels (from strongest to weakest signal):**

1. **Same phrase**: "German visa cost" — all terms appear as a contiguous phrase. This is the strongest proximity signal and matches exact-match queries directly.

2. **Same sentence**: "The German tourist visa costs 80 EUR." — all target terms appear within one sentence but not as a contiguous phrase. This is a strong proximity signal and covers most query variations.

3. **Same paragraph**: Target terms appear in the same paragraph but different sentences. This is a moderate proximity signal and is acceptable for long-tail query matching.

4. **Same section**: Target terms appear under the same heading but in different paragraphs. This is a weak proximity signal but still indicates topical relatedness.

5. **Same page, different sections**: Target terms appear on the same page but in unrelated sections. This provides minimal proximity signal and may not establish relevance for queries combining those terms.

**Optimization rules:**
- For primary target queries, all query terms must appear within the same sentence at least once in the content
- For secondary target queries, all query terms must appear within the same paragraph
- For long-tail queries, same-section proximity is the minimum acceptable level
- The first occurrence of all query terms together should be as early in the content as possible (preferably within the first section)

### Predicate-First Heading Structures

In list headings and section headings that describe actions or processes, the verb (predicate) should come first. This optimizes for how search engines parse headings and how users scan content.

**Noun-first (weaker):**
- Types of German Visas
- Requirements for Visa Application
- Cost of Schengen Visa

**Predicate-first (stronger):**
- Apply for a German Visa
- Submit Visa Documents
- Pay the Visa Fee
- Compare Visa Types

Predicate-first headings work best for:
- Process steps (how-to content)
- Action-oriented queries ("how to apply," "where to submit")
- List items that describe things to do

Noun-first headings remain appropriate for:
- Category pages (types, lists of entities)
- Definitional content ("What is X" becomes the noun X as heading)
- Comparison content where the entities being compared are more important than the comparison action

The key principle: when the action is more important than the noun, lead with the verb. When the entity is more important than the action, lead with the noun.

### Noun Distribution After Predicates

When headings or list items begin with predicates, the nouns that follow must be distributed strategically. Each predicate should be followed by the most specific noun possible, and nouns should not repeat across parallel list items.

**Poor noun distribution:**
- Apply for the visa
- Submit the visa documents
- Pay the visa fee
- Check the visa status

"Visa" repeats four times as the primary noun. While technically correct, the repetition fails to distribute the full noun vocabulary for the topic.

**Better noun distribution:**
- Apply for a Schengen tourist visa
- Submit passport and financial documents
- Pay the embassy processing fee
- Check application status online

Each item now introduces different nouns (Schengen, tourist, passport, financial, embassy, processing, application), distributing the vocabulary across the list. This gives algorithms more noun-entity signals to index and creates relevance for a wider range of related queries.

### Proximity-Based Ordering of Related Concepts

When multiple related concepts must appear in a passage, their order should reflect their semantic proximity to each other. Concepts that are most closely related should appear adjacent, with less related concepts further apart.

**Unordered (random placement):**
"Germany requires travel insurance for visa applicants. The Schengen Area includes 27 European countries. Insurance must cover a minimum of 30,000 EUR. Visa applicants from non-EU countries must apply at their local embassy."

**Proximity-ordered:**
"Germany requires travel insurance for visa applicants, covering a minimum of 30,000 EUR in medical expenses. Visa applicants from non-EU countries must apply at their local German embassy. The Schengen Area, which Germany belongs to, includes 27 European countries that share a common visa policy."

In the proximity-ordered version: "insurance" and "30,000 EUR" (the coverage amount) are in the same sentence. "Visa applicants" and "embassy" (where they apply) are in the same sentence. "Schengen Area" and "27 European countries" (its composition) are in the same sentence. Each concept pair that belongs together appears together.

### Synonym Phrase Integration Across Pages

The same concept should not always be expressed with identical phrasing across every page on the site. Synonym phrase integration distributes different phrasings of the same concept across different pages, ensuring the site captures query variations.

**Single-phrasing problem:**
- Page 1: "German visa requirements"
- Page 2: "German visa requirements"
- Page 3: "German visa requirements"

Every page uses the exact same phrase. The site captures only queries using this exact phrasing.

**Synonym phrase distribution:**
- Page 1: "German visa requirements" (primary phrasing)
- Page 2: "Germany entry permit conditions" (synonym variation 1)
- Page 3: "visa eligibility criteria for Germany" (synonym variation 2)
- Page 4: "prerequisites for German travel authorization" (synonym variation 3)

Each page captures a different query phrasing while all pages collectively cover the full range of ways users might search for this concept.

Integration rules:
- The primary page for a topic uses the most common phrasing
- Supporting pages use synonym variations
- Each synonym phrasing should appear as a natural part of the content, not forced
- The internal link anchor text from the synonym page should use the primary phrasing (pointing back to the main page)

### Lemmatization Variations

Lemmatization means using different grammatical forms of the same word root. Search engines perform lemmatization during indexing, mapping "applying," "applied," "applies," and "application" back to the root "apply." However, content that uses multiple lemma forms provides stronger signals than content using only one form.

**Single form (weak):**
"Apply for a German visa. Apply at the German embassy. Apply with the required documents."

**Distributed lemma forms (strong):**
"Apply for a German visa at the German embassy. The application requires specific documents and processing fees. Applicants who have applied previously may use an expedited process. The applying officer reviews submissions within 15 business days."

Forms used: apply, application, applicants, applied, applying. Each form appears naturally in context. The algorithm recognizes all forms as related to the same root, and the variety signals comprehensive coverage of the concept.

Lemmatization rules:
- Use at least 3 different forms of key root words throughout the content
- Distribute forms across different sections (do not cluster all variations in one paragraph)
- Each form must appear in a grammatically natural context — do not force awkward constructions
- Prioritize forms that match query variations (users search for "visa application" and "apply for visa" and "visa applicants")

### Conditional Synonym Placement Strategy

Not every synonym is interchangeable in every context. Conditional synonym placement means choosing which synonym to use based on the surrounding context.

**Context-dependent synonym selection:**
- "Cost" is appropriate when discussing what the applicant pays: "The visa cost is 80 EUR."
- "Fee" is appropriate when discussing what the institution charges: "The embassy charges a processing fee."
- "Price" is appropriate when discussing market value or comparisons: "The price of a German visa is lower than a US visa."
- "Expense" is appropriate when discussing the applicant's total financial outlay: "Total visa expenses include the fee, insurance, and travel costs."

All four words are synonyms for the same general concept (money paid), but each fits best in a specific context. Using the right synonym in the right context creates stronger semantic signals than using one synonym everywhere.

Conditional placement rules:
- Map each synonym to the contexts where it is most natural
- Use the most common synonym as the default
- Switch to context-specific synonyms when the surrounding text provides a clear context
- Never use a synonym that creates ambiguity or changes meaning in context

### Cross-Page Distributional Patterns

Certain word combinations must appear on multiple pages across the site to establish sitewide topical authority. These are not exact duplicate phrases but rather concept combinations that the search engine expects to find across a topically coherent site.

**Example cross-page pattern for a German visa site:**
- "German" + "visa" + "requirements" must appear on at least 5 pages
- "Schengen" + "visa" + "countries" must appear on at least 3 pages
- "embassy" + "application" + "documents" must appear on at least 4 pages

These co-occurrence patterns signal to the algorithm that the entire site is authoritative on the topic, not just a single page. A site where only one page mentions "Schengen visa countries" appears less authoritative than a site where this combination naturally appears across multiple relevant pages.

Cross-page rules:
- Identify the 10-20 most important word combinations for the site's macro topic
- Ensure each combination appears naturally on at least 3 pages
- The combinations should appear in contextually appropriate sections, not forced mentions
- Track which pages contain which combinations using a distribution map
- Pages that should contain a combination but do not are candidates for content enrichment

### Phrase Sequence Optimization

The order of words within a phrase affects relevance. "German visa requirements" and "requirements for German visa" contain the same words but in different sequences. Search engines give slightly higher relevance scores to phrases where the word order matches the most common query phrasing.

**Optimization process:**
1. Identify the target query's most common phrasing (using search volume data or autocomplete)
2. Use that exact word order as the primary phrase in the content
3. Include at least one alternative word order to capture variation queries
4. Place the primary word order in the highest-prominence positions (heading, first sentence, bold text)

**Example:**
Primary query phrasing: "German visa requirements" (highest search volume)
Alternative phrasing: "requirements for a German visa" (lower search volume variation)

The heading uses "German Visa Requirements" (primary word order). The body text includes both: "German visa requirements include a valid passport..." and "The requirements for a German visa vary by applicant nationality..."

### The Cumulative Advantage

Each individual distributional optimization creates a small relevance improvement. The power of distributional semantics comes from applying these optimizations systematically across every passage, section, page, and site.

Consider the math:
- Word proximity optimization: +0.1% relevance per query
- Lemmatization variation: +0.05% per key term
- Synonym distribution: +0.1% per concept across pages
- Phrase sequence matching: +0.1% per target query
- Cross-page patterns: +0.2% sitewide authority signal

Individually, these are negligible. But an article targeting 50 queries with 20 key terms across 15 sections, multiplied across 100 pages on a site, creates thousands of micro-optimizations. The cumulative effect separates sites that rank from sites that do not.

## Process

### Step 1: Map Target Term Proximity Requirements

For each target query:
1. List the component terms
2. Identify which terms must appear in the same phrase, sentence, paragraph, or section
3. Map these requirements onto the content structure

### Step 2: Audit Current Proximity

Review the content draft:
1. Find the first co-occurrence of each target query's terms
2. Measure the proximity level (phrase, sentence, paragraph, section)
3. Flag any query whose terms do not meet the required proximity level

### Step 3: Apply Predicate-First Structures

Review all headings and list items:
1. Identify action-oriented headings that should lead with verbs
2. Restructure to predicate-first where appropriate
3. Distribute nouns after predicates to maximize vocabulary coverage

### Step 4: Distribute Lemma Variations

For each key root word:
1. List all grammatically valid forms
2. Check which forms currently appear in the content
3. Replace repeated forms with unused variations where grammatically natural
4. Ensure at least 3 forms per key root word

### Step 5: Place Synonyms Conditionally

For each concept with multiple synonyms:
1. Map each synonym to its optimal context
2. Review current usage — is the same synonym used everywhere?
3. Replace with context-appropriate synonyms where applicable
4. Verify no synonym creates ambiguity in its placement context

### Step 6: Optimize Phrase Sequences

For each target query:
1. Identify the primary word order (most common query phrasing)
2. Verify this word order appears in the content's high-prominence positions
3. Include at least one alternative word order in the body text
4. Ensure the primary word order appears in the heading if the heading targets that query

### Step 7: Check Cross-Page Patterns

At the site level:
1. List the critical word combinations for the site's macro topic
2. Audit which pages contain which combinations
3. Identify gaps — pages that should contain a combination but do not
4. Add the combination naturally to the appropriate section of the identified pages

## Output Format

```
DISTRIBUTIONAL SEMANTICS AUDIT
================================

PROXIMITY ANALYSIS:
Query: "German visa requirements"
  - "German" + "visa": same phrase in H1 -- PASS
  - "German" + "requirements": same sentence in section 1 -- PASS
  - "visa" + "requirements": same phrase in H1 -- PASS
  - First full co-occurrence: Sentence 1, Section 1 -- OPTIMAL

LEMMATIZATION DISTRIBUTION:
Root: "apply"
  - apply: Section 2, sentence 1
  - application: Section 3, heading
  - applicants: Section 4, sentence 2
  - applied: Section 5, sentence 3
  - applying: Section 2, sentence 4
  Forms used: 5/5 -- OPTIMAL

SYNONYM PLACEMENT:
Concept: "money paid for visa"
  - "cost": Section 3 (applicant context) -- CORRECT
  - "fee": Section 3 (embassy context) -- CORRECT
  - "price": Not used -- ADD to comparison section
  - "expense": Section 7 (total outlay context) -- CORRECT

CROSS-PAGE PATTERNS:
"Schengen" + "visa" + "countries":
  - Page 1 (visa types): Present
  - Page 2 (requirements): Present
  - Page 3 (country list): Present
  - Page 4 (FAQ): Missing -- ADD
  Coverage: 3/4 pages -- NEEDS IMPROVEMENT

PHRASE SEQUENCE:
Query: "German visa requirements"
  - Primary order in heading: YES
  - Primary order in first sentence: YES
  - Alternative order in body: YES ("requirements for a German visa" in section 2)
  -- OPTIMAL
```

## Advanced Distributional Semantics Concepts

### Site-wide Macro Semantic Patterns
Macro semantics involves overall semantic characteristics of the entire content network. Analyze: site-wide N-grams, most used nouns/adjectives/predicates, most common question formats, types of targeted queries (what-, how-, superlative-starting), heading vector construction patterns, first words of paragraphs. These patterns must be consistent with Source Context and Central Search Intent.

### Contextual Term Weight Distribution
Context terms must match the query context. If a search engine interprets "movie 20" as "best 20 movies" or "movies for 20 year olds" or "Movies from the 20s," the document must distribute probabilities across interpretations and arrange contextual flow from macro to micro contexts. Contextual term weight determines which interpretation the document is most relevant for.

### Semantic Distance Calculation Enhancement
Beyond word proximity, calculate semantic distance using: (1) count of associations and angles between entity pairs by type, (2) repetitiveness of subject-object contextual connections with different predicates and semantic role labels. The number of repeated declarations for specific connections determines semantic distance strength. Use this to optimize co-occurrence patterns.

### Propagation of Relevance Across Documents
Relevance propagates between connected web pages. A document's distributional semantic profile affects and is affected by all documents linking to and from it. Optimize distributional patterns not just per-document but across the entire content network. Consistency in semantic patterns strengthens propagation; inconsistency weakens it.

## Common Errors

1. **Keyword stuffing disguised as proximity optimization**: Forcing all query terms into the same sentence repeatedly. Each proximity pairing should occur naturally and only once or twice — repetition signals spam, not relevance.
2. **Ignoring lemmatization**: Using "visa application" on every page without variation ("apply for a visa," "applicants," "the applying process"). This misses query variations and reduces vocabulary signal.
3. **Same synonym everywhere**: Using "cost" in every context when "fee," "price," and "expense" are more appropriate in specific contexts.
4. **Reversed phrase sequences in headings**: Using "Requirements for German Visa" as a heading when query data shows "German Visa Requirements" is the dominant search phrasing.
5. **Cross-page gaps**: One page on the site covers a concept comprehensively while all other pages never mention it, failing to establish sitewide distributional patterns.
6. **Forced proximity**: Rewriting sentences to unnatural constructions just to place words closer together, resulting in awkward text that harms readability and user signals.
