---
name: question-generation
description: Question generation from entity attributes, question ranking, canonicalization, Q&A pairs, heading questions, content brief headings, representative questions, disambiguation, inclusive semantics
version: 1.0
dependencies:
  - entity-attribute-analysis
  - content-brief-generation
  - contextual-vector-optimizer
inputs:
  - entity_attributes: "EAV triples with root, rare, and unique attribute classifications"
  - target_queries: "Query network clusters to generate questions for"
  - content_brief_columns: "Existing content brief data (entities, attributes, values, queries)"
outputs:
  - generated_questions: "Ranked and canonicalized question set for content brief headings"
  - heading_sequence: "Ordered representative questions forming the article structure"
  - qa_pairs: "Explicit question-answer pairs ready for content production"
---

# Question Generation

## Purpose

Question generation transforms entity-attribute-value data into the actual questions that become content headings and drive article structure. The process determines what questions to ask, how to phrase them, how to rank competing phrasings, and how to order them so that every section flows into the next. The output is a sequence of representative questions (headings) with their supporting variation questions, forming the skeleton of a content brief.

Search engines parse content as a series of question-answer pairs. When content explicitly states the question and then provides the answer, the search engine does not need to infer what question the passage addresses. This reduces ambiguity and increases the probability of the passage being selected as the best candidate answer for a given query.

## Core Concepts

### Generating Questions from Entity Attributes

Every entity-attribute-value triple implies at least one question. The type of attribute determines the type of question that can be generated.

**Root attributes** produce foundational, high-volume questions. These are attributes shared across all or most instances of an entity type. For a country entity, root attributes like "capital," "population," and "currency" generate questions such as "What is the capital of Germany?" or "What is the population of Germany?" Root attribute questions tend to be definitional or boolean in nature.

**Rare attributes** produce differentiating questions. These attributes exist for some but not all instances of an entity type. For a country, a rare attribute like "visa-free travel agreements" generates questions such as "Which countries have visa-free agreements with Germany?" Rare attributes often produce grouping and comparative questions.

**Unique attributes** produce highly specific questions. These attributes belong to only one or very few instances. A unique attribute like "Berlin Wall history" for Germany produces questions that have no direct parallel for other countries. Unique attribute questions are often definitional but with narrow scope.

### Four Question Types

Every generated question falls into one of four fundamental types:

1. **Boolean Questions**: Answered with yes or no, plus a qualifying explanation. "Is Germany in the European Union?" Boolean questions are generated from attributes that have binary or categorical values. They are useful for featured snippets and direct answer boxes.

2. **Definitional Questions**: Request an explanation, definition, or description. "What is the Schengen Area?" Definitional questions emerge from attributes whose values require elaboration. They form the backbone of informational content and tend to target paragraph-format answers.

3. **Grouping Questions**: Ask for a list or set of items that share a characteristic. "Which countries are in the Schengen Area?" Grouping questions come from attributes that classify entities into categories. They naturally produce list-format answers (ordered or unordered HTML lists).

4. **Comparative Questions**: Ask how two or more entities differ along a shared attribute. "How does Germany's visa policy compare to France's?" Comparative questions emerge when the same attribute exists across multiple entities with different values. They produce table-format answers or structured comparison paragraphs.

### Question Ranking

Multiple phrasings can express the same underlying question. Question ranking selects the best phrasing.

**The shortest correct question wins.** Between "What is the capital city of the country of Germany?" and "What is the capital of Germany?" the second phrasing wins because it is shorter while remaining grammatically correct and unambiguous.

Ranking rules:
- Eliminate unnecessary words (articles, redundant nouns, filler phrases)
- Fix grammar as a subject matter expert would — the question should read as if written by someone knowledgeable about the topic
- Preserve all necessary specificity — shortening must not introduce ambiguity
- Maintain the question type (do not convert a comparative question into a definitional one through shortening)
- If two phrasings are equal in length, prefer the one using more common vocabulary

### Canonicalization

Canonicalization selects the single best question to represent an entire cluster of semantically equivalent questions.

A cluster might contain: "What is friendship?", "Define friendship", "What does friendship mean?", "Friendship definition", "What is the meaning of friendship?" Canonicalization picks one of these as the canonical representative. The canonical question becomes the heading; the others become variation questions addressed within the section body.

Canonicalization criteria (in order of priority):
1. The question must be unambiguous (see disambiguation below)
2. The question must be the shortest correct phrasing
3. The question must match the dominant search intent of the cluster
4. The question should use the most common grammatical form for its type

### Disambiguation

Some questions are ambiguous because the same words can refer to different entities or concepts.

"What is friendship?" could refer to:
- The abstract concept of friendship (definitional)
- The movie titled "Friendship" (entity-specific)
- The book titled "Friendship" (entity-specific)
- The TV show titled "Friendship" (entity-specific)

When the intent is the abstract concept, the canonical question must be disambiguated: **"What is the definition of friendship?"** This phrasing eliminates the possibility that the question is about a specific named entity.

Disambiguation strategies:
- Add the entity type: "What is the definition of friendship?" instead of "What is friendship?"
- Add a qualifying attribute: "What is the friendship movie release date?" instead of "What is the friendship release date?"
- Use the full entity name: "What is the Friendship 2010 film?" when multiple entities share the name
- Context from surrounding headings can disambiguate — if the article is clearly about the abstract concept, less explicit disambiguation may be acceptable, but the canonical question should still be unambiguous in isolation

## Process

### Step 1: Generate Raw Questions

For each entity-attribute-value triple in the content brief:
1. Identify the attribute type (root, rare, unique)
2. Generate all plausible question phrasings for each of the four question types that apply
3. Include both explicit questions ("What is X?") and implicit question forms ("X definition", "X vs Y")
4. Tag each question with its type (boolean, definitional, grouping, comparative)

### Step 2: Rank and Filter

For each set of phrasings targeting the same underlying question:
1. Apply the shortest-correct-question rule
2. Eliminate grammatically incorrect phrasings
3. Eliminate ambiguous phrasings (apply disambiguation)
4. Rank remaining phrasings from shortest to longest
5. Select the top-ranked phrasing as the candidate canonical question

### Step 3: Canonicalize into Clusters

Group questions that would be answered by the same passage:
1. Identify semantically equivalent questions (same intent, same expected answer)
2. Select the canonical question for each cluster using the canonicalization criteria
3. Assign remaining questions as variation questions within the cluster
4. Verify that no two canonical questions would produce substantially overlapping answers

### Step 4: Sequence as Headings

Order the canonical questions to form the article's heading sequence:

**Representative questions become headings.** Each heading is the canonical question for its cluster. The heading signals to both readers and search engines what question the following section answers.

**Preceding questions fill the section.** Within each section, the variation questions from the cluster are addressed. They do not need their own subheadings but should be answered within the section body.

**Every section ending signals the next heading.** The final sentence or idea in each section must create a contextual bridge to the next heading. If the current section answers "What is the capital of Germany?" and the next heading is "What is the population of Berlin?", the bridge might mention Berlin in the context of it being the capital, naturally leading the reader to wonder about its population.

### Step 5: Apply Inclusive Semantics

The heading sequence must follow the inclusive semantics pattern:

1. Give the answer to the current heading's question
2. Within that answer, introduce the concept that the next question addresses
3. Ask and answer the next question
4. Move on — do not go too deep in any single section

This pattern ensures breadth of coverage. A common failure mode is spending too many paragraphs on one section while neglecting others. Each section should be comprehensive enough to answer its representative question and its variation questions, but not so exhaustive that it dominates the article at the expense of other sections.

### Step 6: Align with Internal Links

The first anchor text pointing to a page determines which question should be asked first on that page. If an internal link says "German visa requirements," then the first heading on the target page should address the question "What are the German visa requirements?" — not "What is Germany?" or "Where is Germany located?"

Internal link alignment rules:
- The anchor text of the first inbound link maps to the first heading
- Subsequent anchor texts from other pages should correspond to subsequent headings where possible
- If multiple pages link with different anchor texts, prioritize the anchor text from the most topically authoritative source page

## Why Explicit Q&A Format Matters

When content is structured as explicit question-answer pairs, the search engine's task is simplified. Instead of:

- Reading a passage
- Inferring what question it might answer
- Matching that inferred question to a user's query

The search engine can:

- Read the explicit question (heading)
- Read the answer (section body)
- Directly match the explicit question to the user's query

This reduces inference steps and increases confidence in the match. The content is essentially pre-parsed into the format the search engine needs. Every heading is a question. Every section is an answer. The search engine does not need to generate questions itself — the content has already done that work.

## Output Format

The question generation output feeds directly into the content brief as heading questions:

```
H2: [Representative Question - Canonical]
  - Variation: [Question phrasing 2]
  - Variation: [Question phrasing 3]
  - Bridge to next: [Contextual connection concept]

H2: [Representative Question - Canonical]
  - Variation: [Question phrasing 2]
  - Bridge to next: [Contextual connection concept]
```

Each representative question becomes an H2 (or appropriate heading level). Variation questions are addressed within the section text but do not become separate headings unless the section is large enough to warrant H3 subheadings.

## Advanced Question Generation Concepts

### Long-Form vs Short-Form Question Answering
Word count in the question does NOT determine whether it's long-form or short-form QA. The structural role determines the type. H2 = Grouper Question (Short Form QA) — it groups related sub-questions. H3 = Conditions and qualifiers as connected questions that elaborate on the grouper question. Design question hierarchies to match this pattern.

### Representative Query-Based Questions
Generate questions based on representative queries, not just literal search terms. Search engines distribute relevance based on representative queries — the authoritative interpretation of what users mean. A question targeting the representative query will capture relevance for all its represented query variations.

### Question Paths for Session Satisfaction
Design question sequences that mirror actual query paths (search sessions). Each question-answer pair should satisfy one step in the session and naturally lead to the next question. This creates positive historical data as users progress through your content without returning to the SERP.

### Responsiveness-First Question Design
Every question must have a DIRECT answer in the first sentence or paragraph of its section. This is responsiveness — Information Extraction. The search engine needs to extract a clear answer for passage indexing and featured snippets. After the direct answer, expand with context, examples, and connections (relevance building).

## Data Input Integration (Skill 33)

When Skill 33 has been run, the **Research Intelligence Report** contains real questions discovered from AI deep research and PAA data from keyword tools. Use these as seed questions instead of generating from scratch. Real questions from research have higher responsiveness potential because they reflect actual information needs. Cross-reference with keyword data to identify which questions have search demand. Prioritize questions that appear in both research reports AND keyword exports.

## Common Errors

1. **Ambiguous canonical questions**: Selecting "What is X?" when X could refer to multiple entities. Always disambiguate.
2. **Missing bridges**: Sections that end abruptly with no connection to the next heading. Every section ending must set up the next section.
3. **Over-depth in one section**: Spending 500 words on one heading and 50 on the next. Inclusive semantics requires balanced coverage.
4. **Question type mismatch**: Using a definitional question when the content will provide a list (should be a grouping question) or a comparison (should be a comparative question).
5. **Ignoring anchor text alignment**: Starting the article with a question that does not match the primary inbound anchor text.
6. **Redundant canonical questions**: Two headings that would produce nearly identical answers. These clusters should be merged.
