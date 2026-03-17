---
name: micro-semantics
description: Passage-level optimization, micro-semantics, passage ranking, answer format selection, context sharpening, section-level SEO, passage indexing, candidate answer scoring, context deepening, macro context filtering
version: 1.0
dependencies:
  - question-generation
  - algorithmic-authorship
  - contextual-vector-optimizer
inputs:
  - content_sections: "Individual sections of content with their headings and body text"
  - heading_queries: "Target queries for each section (representative and variation questions)"
  - macro_context: "The overarching topic and macro context of the full article"
  - instruction_codes: "Per-section formatting instructions from the content brief"
outputs:
  - optimized_passages: "Passages refined for passage-level ranking with correct format, sharpened context, and appropriate depth"
  - format_assignments: "Confirmed format for each passage (table, list, paragraph, definitive answer)"
  - scoring_assessment: "Evaluation of each passage's likelihood of being selected as a candidate answer"
---

# Micro-Semantics

## Purpose

Search engines do not evaluate entire articles as monolithic units. They evaluate individual passages — sections, paragraphs, and even sentences — independently. A single article may contain 15 sections, but for any given query, only one passage is evaluated as the candidate answer. That passage must be the best possible answer to the query, formatted correctly, contextually sharp, and sufficiently deep.

Micro-semantics is the discipline of optimizing content at the passage level. It ensures that every section of an article functions as a standalone candidate answer for its target queries while remaining coherent within the document's macro context. Where the contextual vector optimizer works at the document level (heading sequence and flow), micro-semantics works at the section level (individual passage quality).

## Core Concepts

### Passage-Level Ranking

Search engines index and rank individual passages, not just pages. When a user searches for "How much does a German visa cost?", the search engine does not evaluate the entire visa requirements article — it identifies the specific passage within that article (or any article) that best answers the cost question.

This means:
- A great article with one weak passage loses ranking for that passage's query
- A mediocre article with one outstanding passage can rank for that passage's query
- Each passage competes independently against passages from every other page on the web
- The passage's quality is evaluated in context (the surrounding document matters) but the passage itself must be independently strong

### Correct Format for Each Query Type

Different query types demand different content formats. Using the wrong format reduces the passage's candidate answer score regardless of how accurate the information is.

**Table format** is required for comparisons across multiple entities or attributes. When the query asks "How do German visa types compare?" or "What is the difference between Schengen and national visas?", the answer must be a table. Tables allow search engines to parse structured comparisons with aligned attribute-value pairs across rows and columns.

Table format rules:
- Use HTML `<table>` markup, not markdown tables (markdown tables may not render correctly for all search engine parsers)
- Column headers must be entity names or attribute names
- Row headers must be the compared attributes or entity names (whichever is not in columns)
- Every cell must contain a specific value, not vague language
- Tables must have at least 3 rows and 2 columns to justify the table format

**List format** is required for types, categories, steps, or collections. When the query asks "What are the types of German visas?" or "What documents are needed for a visa application?", the answer must be a list.

List format rules:
- Ordered lists (`<ol>`) for sequences, steps, or ranked items
- Unordered lists (`<ul>`) for types, categories, or unranked collections
- Each list item must be parallel in grammatical structure
- Minimum 3 items per list
- List items should be concise (one line each unless elaboration is genuinely necessary)

**Paragraph format** is required for definitions, explanations, and narrative answers. When the query asks "What is a Schengen visa?" or "Why does Germany require a visa?", the answer must be a well-constructed paragraph.

Paragraph format rules:
- First sentence directly answers the question (answer non-delay)
- Supporting sentences add context, qualifiers, or examples
- Maximum 4-5 sentences for web-optimized paragraphs
- No paragraph should exceed 100 words for readability and passage extraction

**Definitive answer format** is required for PAA (People Also Ask) responses and comprehensive single-question answers. The format demands a single authoritative statement followed by full qualification.

Definitive answer format rules:
- One opening sentence that fully resolves the query
- Subsequent sentences add every relevant qualifier, exception, and context
- Length: 50-200 words depending on the complexity of the qualifiers
- No hedging, no uncertainty, no "it depends" without immediately specifying what it depends on

### Context Sharpening

Context sharpening makes each passage laser-focused on its heading's topic. Every word in the passage must contribute to answering the heading's question. Words, phrases, or sentences that address a different question — even a closely related one — dilute the passage's relevance and must be removed or relocated.

**Before sharpening:**
"The German tourist visa costs 80 EUR for adults. Germany is a popular destination for tourists from around the world, with millions visiting annually. Children under 12 pay a reduced fee of 40 EUR. The visa fee must be paid at the time of application submission."

The second sentence is about tourism popularity, not visa cost. It dilutes the passage's focus.

**After sharpening:**
"The German tourist visa costs 80 EUR for adults and 40 EUR for children under 12. The fee is payable at the time of application submission. Additional service fees of 20 EUR may apply when submitting through a visa application center rather than directly at the embassy."

Every sentence now addresses cost. The passage is sharper.

Sharpening process:
1. Read the heading question
2. For each sentence in the passage, ask: "Does this sentence directly answer or qualify the heading's question?"
3. If no, either remove the sentence or move it to the section where it belongs
4. If yes, check whether the sentence could be more specific to the heading's question
5. Replace vague references with specific ones that tie back to the heading topic

### Context Deepening

Context deepening is the opposite of sharpening — it adds detail rather than removing noise. A passage can be perfectly sharp (every sentence is on-topic) but insufficiently deep (it does not fully answer the question).

**Shallow passage:**
"The German tourist visa costs 80 EUR."

**Deepened passage:**
"The German tourist visa costs 80 EUR for adult applicants and 40 EUR for children under 12. The fee applies to single-entry and multiple-entry tourist visas equally. Applicants submitting through a visa application center pay an additional service fee of 20 EUR. The fee is non-refundable regardless of whether the visa is approved or denied. Payment methods accepted include bank transfer, credit card, and cash at embassy locations."

The deepened passage answers not just "how much?" but also "for whom?", "for which visa types?", "are there additional fees?", "is it refundable?", and "how do you pay?" — all sub-questions a thorough answer to the cost question would address.

Deepening process:
1. Identify all sub-questions implied by the heading's question
2. Check whether the passage addresses each sub-question
3. For each unaddressed sub-question, add a sentence that provides the answer
4. Verify that added sentences maintain context sharpness (they must relate to the heading topic)
5. Stop deepening when all implied sub-questions are answered — do not add tangential information

### Macro Context Filtering

Every passage exists within the macro context of the full article. Macro context filtering ensures that a passage only mentions concepts justified by the article's overarching topic.

**Example of a macro context violation:**
Article macro context: German visa requirements
Section heading: How much does a German visa cost?
Passage text: "The German visa costs 80 EUR. The cost of living in Germany is approximately 1,200 EUR per month for a single person, including rent in most cities."

The cost-of-living sentence violates macro context. The article is about visa requirements, not living expenses. Even though the sentence is factually correct and topically adjacent (both involve costs in Germany), it does not belong because the macro context does not justify discussing cost of living.

Macro context filtering rules:
- Every concept mentioned in a passage must be traceable to the article's macro context
- "Topically adjacent" is not sufficient — the concept must be a legitimate subtopic of the macro context
- When in doubt, ask: "Would an article exclusively about [macro context] naturally include this information?"
- If the answer is no, remove the information or link to a different article where it does belong

### Representative vs. Variation Question Handling

Each section has one representative question (the heading) and potentially multiple variation questions (alternative phrasings or closely related questions assigned to this section during question generation).

**Representative question**: Addressed directly in the first sentence. The passage opens by answering this question.

**Variation questions**: Addressed within the passage body. They do not get their own subheadings (unless the section is large enough to warrant H3 divisions) but their answers must be present in the passage.

Handling rules:
- The representative question's answer appears first (answer non-delay)
- Each variation question's answer should be identifiable — a reader asking that variation question should find their answer within the passage
- Do not create separate paragraphs for each variation question unless they require substantially different answers
- Variation questions that require different formats (one needs a list, another needs a paragraph) indicate the section should be split into subsections

### Content Language Types

Passages use two types of content language, and the choice depends on the query type and information structure.

**Structured language**: Tables, lists, and formatted data. Used when information has clear categories, steps, types, or comparison dimensions. Structured language is parsed more efficiently by algorithms because the relationships between data points are explicit in the formatting.

When to use structured language:
- The passage compares 2+ entities across shared attributes (table)
- The passage enumerates types, steps, items, or features (list)
- The passage presents data with clear category-value relationships
- The query contains words like "types," "steps," "compare," "list," "differences"

**Prose language**: Paragraphs and narrative text. Used when information requires explanation, context, causation, or definition. Prose language is necessary when the relationships between concepts are complex and cannot be reduced to a table or list structure.

When to use prose language:
- The passage defines or explains a concept
- The passage describes a process that requires context (not just steps)
- The passage provides analysis, reasoning, or interpretation
- The query contains words like "what is," "why," "how does," "explain"

Many passages combine both — a prose introduction followed by a structured list or table. This is acceptable when the prose provides necessary context that the structured element alone cannot convey.

### Candidate Answer Passage Scoring

Search engines score passages as candidate answers using multiple signals. Understanding these signals allows optimization of each passage.

**Relevance signals:**
- Does the passage contain the query's key terms?
- Are the key terms in prominent positions (first sentence, bold, heading)?
- Does the passage's topic (as determined by the heading) match the query's topic?

**Completeness signals:**
- Does the passage answer the full question, not just part of it?
- Are common follow-up sub-questions also addressed?
- Does the passage provide sufficient specificity (numbers, names, dates)?

**Format signals:**
- Does the passage use the correct format for the query type?
- Is the formatting valid and parseable (proper HTML, consistent structure)?
- Does the format allow easy extraction of the answer?

**Confidence signals:**
- Does the passage use factual modality (no hedging)?
- Is the answer stated definitively in the first sentence?
- Are bold elements highlighting the answer value (not the question)?

**Context signals:**
- Does the passage's macro context (the surrounding document) support its authority on this topic?
- Is the document's contextual vector aligned with the passage's topic?
- Does the passage avoid diluting its topic with off-context information?

A passage that scores well across all five signal categories has the highest probability of being selected as the candidate answer. A passage that scores well in four categories but fails in one (e.g., correct information but wrong format) can still lose to a less informative passage that uses the correct format.

## Process

### Step 1: Identify Query Type per Section

For each section heading, classify the dominant query type:
- Definition/explanation query -> paragraph format
- Comparison query -> table format
- Enumeration query (types, steps, items) -> list format
- Direct answer query -> definitive answer format
- Mixed query -> combination of formats with prose introduction

### Step 2: Apply Context Sharpening

For each passage:
1. Read the heading question
2. Evaluate every sentence against that question
3. Remove or relocate sentences that do not directly answer or qualify the heading question
4. Tighten remaining sentences to maximize relevance to the heading topic

### Step 3: Apply Context Deepening

For each passage after sharpening:
1. List all sub-questions implied by the heading question
2. Check coverage — does the passage address each sub-question?
3. Add sentences for uncovered sub-questions
4. Verify new sentences maintain sharpness

### Step 4: Apply Macro Context Filter

For each passage after deepening:
1. Check every concept mentioned against the article's macro context
2. Remove or relocate concepts not justified by the macro context
3. Verify that remaining content is traceable to the article's overarching topic

### Step 5: Format and Structure

For each passage:
1. Apply the correct format based on query type classification
2. Ensure the answer appears first (answer non-delay)
3. Apply bold to answer values
4. Validate structured elements (tables have proper headers, lists are parallel)

### Step 6: Score Assessment

For each passage, evaluate:
- Relevance: 1-5 (key terms present, prominent, topic-aligned)
- Completeness: 1-5 (full answer, sub-questions covered, specific)
- Format: 1-5 (correct format, parseable, extractable)
- Confidence: 1-5 (factual modality, definitive first sentence, bold answers)
- Context: 1-5 (macro context aligned, no dilution, vector support)

Passages scoring below 4 in any category require revision.

## Advanced Micro-Semantics Principles

### Sequence Modeling for Relevance
Micro-semantics is about changing word sequences for higher responsiveness and contextualization. Word order determines which entity/concept gets more contextual weight. Active vs passive voice redistributes relevance: "Search engines index pages" (emphasizes search engines) vs "Pages are indexed by search engines" (emphasizes pages). Choose sequences that weight the terms most important for your target query.

### Predicate Selection Strategy
Predicates (verbs) are critical context signals. "Analyze" vs "examine" vs "study" vs "investigate" each annotate slightly different contexts and activate different co-occurrence networks. Select predicates that align with your source context's central search intent predicates. Maintain predicate consistency across your content network.

### Visual Content Micro-Semantics
Images have micro-semantic properties. The subject entity is the most concrete/tangible object in visuals. Object entities interpret the context by changing interpretations — "a fish and a bear" vs "a lake and a bear" create different semantic signals. Optimize image alt text, filenames, and surrounding text to reinforce the intended micro-semantic context.

### First Words and Sentence Openings
The first words of paragraphs signal context to search engines. If paragraphs start with rhetoric instead of information, the document signals low responsiveness. If paragraphs start with the direct answer, then expand, the document signals high responsiveness. Design sentence openings to immediately establish contextual relevance.

### LLM-Generated Content Optimization
Since websites are increasingly built by downloading knowledge bases and verbalizing with LLMs, micro-semantic optimization of LLM output is critical. Small changes in word choice, sequence, and predicate selection create huge relevance and responsiveness differences. The skill of micro-semantic optimization IS the competitive advantage in the AI content era.

## Common Errors

1. **Format mismatch**: Using a paragraph to answer a comparison query that demands a table, or using a list for a definitional query that requires prose explanation.
2. **Sharp but shallow**: Removing all off-topic content but failing to add sufficient depth, resulting in a passage that is focused but incomplete.
3. **Deep but unfocused**: Adding extensive detail that drifts from the heading's question, resulting in a passage that is thorough but diluted.
4. **Macro context violation**: Including information that makes sense in isolation but does not belong in the article's macro context.
5. **Variation questions ignored**: Addressing only the representative question while leaving variation questions unanswered, losing potential ranking for those queries.
6. **Answer delayed by context**: Providing background information before the answer, violating the answer non-delay principle at the passage level.
7. **Incorrect bold placement**: Bolding entity names or question terms instead of the answer values within the passage.
