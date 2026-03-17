---
name: algorithmic-authorship
description: Content writing rules, authorship instructions, featured snippet optimization, PAA formatting, writing guidelines, SEO content writing, factual modality, answer formatting, algorithmic content production, instruction codes
version: 1.0
dependencies:
  - question-generation
  - micro-semantics
  - content-brief-generation
inputs:
  - content_brief: "Complete content brief with heading questions, entities, attributes, values"
  - instruction_codes: "Per-section formatting instructions (FS, PAA, Listing, Anchor Text, Definitive Answer)"
  - target_queries: "Queries each section must satisfy"
outputs:
  - production_content: "Fully written content following all algorithmic authorship rules"
  - annotated_draft: "Draft with instruction code annotations for editorial review"
---

# Algorithmic Authorship

## Purpose

Algorithmic authorship is a system of 200+ writing rules that govern how every sentence, paragraph, and section of SEO content is constructed. These rules are not stylistic preferences — they are derived from how search engine algorithms parse, evaluate, and rank text. Every rule exists because it affects how algorithms interpret relevance, confidence, specificity, and authority.

The rules transform a content brief (what to write) into production-ready content (how to write it). A perfect content brief with poor execution produces poor rankings. Algorithmic authorship ensures the execution matches the strategic intent.

## Brand Identity Integration

When a Brand Identity Document exists (from Skill 31), apply these additional constraints alongside the 200+ algorithmic authorship rules:

- **Reading Level**: All FS answers (under 40 words) and PAA answers (single definitive sentence) must still meet the brand's grade level target. If the brand targets Grade 7, use simpler vocabulary even in technical definitions.
- **Power Words**: When choosing which word to bold in an answer (Rule: bold the answer, not the term), prefer Power Words from the brand vocabulary where semantically equivalent.
- **Forbidden Words Filter**: Run every output through the Forbidden Words list. Replace any forbidden word with the closest acceptable synonym that maintains SEO relevance.
- **Sentence Style**: Match the brand's formality level (1-9 scale) when constructing sentence templates. A formality-3 brand uses shorter sentences and contractions; a formality-7 brand uses conversational transitions like "Here's the thing" or "So basically."
- **CTA Sentences**: When the Contextual Structure calls for a CTA placement, use the CTA Copy Template from the Brand Identity Document, not generic CTAs. Fill in the template variables with entity-specific and context-specific values.
- **Perspective Consistency**: Use the brand's designated pronouns (I/We/You) consistently. If the brand uses "we," never switch to "one should" or passive voice unless the algorithmic rule specifically requires it for featured snippet format.

These brand rules never override core SEO authorship rules (factual modality, answer non-delay, etc.) — they operate within them. Think of it as: the SEO rules determine WHAT to say and in what structure; the brand rules determine HOW it sounds.

## Real-Time Web Research Integration

When the web-research-engine skill (Skill 32) is available, enhance content accuracy:

1. **Fact-check all statistics before publishing** — run `fact_check` mode for every numerical claim, date, or specific fact in the article:
   ```bash
   python web-research-engine/scripts/web_research.py --mode fact_check --query "[specific claim to verify]" --output /tmp/fact_check.json
   ```
2. Only use facts with "High" confidence level (multiple official sources agree)
3. For "Medium" confidence facts, include attribution ("According to [source]...")
4. For "Low" confidence facts, either find a better source or remove the claim
5. Use `search` mode for quick lookups when writing — current prices, latest statistics, recent events

Factual accuracy is the foundation of Knowledge-Based Trust. One wrong statistic can undermine the entire page's credibility with search engines that verify facts against knowledge bases.

## Instruction Codes

Every section in a content brief carries one or more instruction codes that dictate the format and structure of the answer. These codes tell the writer exactly how to construct the passage.

### FS (Featured Snippet)

The Featured Snippet instruction targets the position-zero box in search results.

**Rule: Answer in fewer than 40 words or 320 characters.**

The answer must be a complete, self-contained response that a search engine can extract and display directly. It must not require any surrounding context to make sense. The 40-word limit is strict — featured snippets that exceed this length are truncated or not selected at all.

Construction pattern:
- Open with the direct answer in the first sentence
- Use the exact entity name (not a pronoun) as the subject
- Include the most critical qualifier or specificity marker
- Close within the word limit

Example: "The capital of Germany is Berlin. Berlin has served as the capital since 1990 following German reunification and is the largest city in Germany by population."

### PAA (People Also Ask)

The PAA instruction targets the expandable question boxes in search results.

**Rule: Single definitive sentence with no ambiguity.**

PAA answers must be one sentence that fully resolves the question. There is no room for hedging, multiple perspectives, or conditional language. The sentence must read as an absolute fact.

Construction pattern:
- One sentence only
- Subject-verb-object structure
- No subordinate clauses
- No conditional language ("if," "when," "depending on")
- The sentence must be extractable — it must make complete sense without the question being visible

Example: For "What currency does Germany use?" the PAA answer is: "Germany uses the Euro as its official currency since adopting it on January 1, 2002."

### Anchor Text

The Anchor Text instruction marks where an internal link should be placed and specifies the anchor text.

**Rule: The anchor text must match the target page's H1 or title.**

The annotation format indicates the exact phrase to hyperlink and the target page. The anchor text phrase must appear naturally within the sentence — it cannot be forced or awkward. If the anchor text does not fit naturally, the sentence must be rewritten so that it does.

Anchor text placement rules:
- Place the anchor text within the first mention of the concept that the target page covers
- The linked phrase must be a noun phrase or entity name, never a verb or generic phrase like "click here" or "learn more"
- One anchor text per target page per article — do not link to the same page multiple times
- The anchor text must match or closely mirror the H1 of the target page

### Listing

The Listing instruction produces HTML lists — ordered (`<ol>`) or unordered (`<ul>`).

**Three listing types:**

1. **Instruction listings**: Step-by-step procedures where order matters. Use ordered lists. Each item begins with an imperative verb. Items must be parallel in grammatical structure.

2. **Keyword listings**: Collections of items, types, or categories where order does not matter. Use unordered lists. Each item is a noun phrase. Items must be parallel in grammatical structure.

3. **Comparison listings**: Side-by-side evaluations. Use either a table or a structured list with consistent attribute-value pairs for each item compared.

Listing rules:
- Every list must have at least 3 items (see three-example rule below)
- List items must be grammatically parallel (all start with verbs, or all start with nouns — never mixed)
- Each list item should be one line unless the item genuinely requires elaboration
- Do not use lists for content that reads better as prose (definitions, narratives, explanations)

### Definitive Answer

The Definitive Answer instruction produces a long-form, comprehensive response.

**Rule: Include all qualifiers, signifiers, and concept connections.**

This is the opposite of the FS instruction. Where FS demands brevity, the Definitive Answer demands completeness. Every relevant qualification, exception, context, and connection must be stated. Nothing is left implicit.

Construction pattern:
- Open with the direct answer (answer non-delay rule still applies)
- Follow with all qualifiers and conditions
- Include signifiers that connect the concept to related entities
- Close with the broader context or implication
- Typical length: 100-300 words per definitive answer passage

## Key Writing Rules

### Rule 1: Factual Modality

**Be certain. State facts as facts.**

Prohibited modal constructions:
- "will" (implies future uncertainty) — replace with "is" or present tense
- "should" (implies recommendation, not fact) — replace with "is" or imperative
- "need to" (implies obligation, not fact) — replace with the direct statement
- "can be" (implies possibility, not actuality) — replace with "is"
- "might" / "may" (implies uncertainty) — replace with definitive statement
- "it is important to" (filler, not factual) — delete entirely

Correct modality: "Germany is a federal republic." Not: "Germany can be described as a federal republic."

Correct modality: "The visa costs 80 EUR." Not: "The visa will cost around 80 EUR."

Factual modality applies to all statements of fact. Opinion-based content (reviews, editorials) may use hedging language, but informational SEO content must not. Search engines evaluate confidence signals in text. Hedging language reduces the algorithm's confidence that the content provides a definitive answer.

### Rule 2: No Fluff

**Every sentence must add new information.**

If a sentence can be removed without losing any information, it must be removed. Common fluff patterns:

- "In this article, we will discuss..." — delete
- "It is worth noting that..." — delete, state the thing directly
- "As you can see..." — delete
- "Let's take a look at..." — delete
- Restating what was just said in different words — delete the restatement
- Transition sentences that contain no information — replace with transitions that introduce new facts

Test: After writing a sentence, ask "What new fact does the reader learn from this sentence that they did not know from the previous sentence?" If the answer is nothing, delete the sentence.

### Rule 3: Numeric Values

**Use numbers wherever possible.**

Vague: "Germany has a large population."
Specific: "Germany has a population of 84.4 million as of 2023."

Vague: "The process takes a long time."
Specific: "The process takes 15 business days."

Vague: "Berlin is one of the most visited cities in Europe."
Specific: "Berlin received 13.5 million overnight visitors in 2022, ranking 3rd among European cities."

Numbers provide specificity that algorithms can index and compare. They also increase the content's utility for featured snippet extraction, as numeric answers are highly structured.

### Rule 4: Verb Context Optimization

**Use strong, specific verbs.**

Weak: "Germany has a lot of forests."
Strong: "Forests cover 32% of Germany's total land area."

Weak: "The visa application is done online."
Strong: "Applicants submit the visa application through the federal online portal."

Weak: "There are many museums in Berlin."
Strong: "Berlin operates 175 museums across 5 museum districts."

Strong verbs carry semantic weight. They tell the algorithm what action or relationship exists between entities, making the content more parseable and the entity-attribute-value relationships more explicit.

### Rule 5: POS Tag Consistency

**Maintain grammatical patterns within parallel structures.**

When writing lists, headings, or any parallel structure, every item must follow the same part-of-speech pattern.

Inconsistent: "Benefits of living in Germany: Lower cost of living, Healthcare is excellent, Good public transport"
Consistent: "Benefits of living in Germany: Lower cost of living, Excellent healthcare system, Efficient public transport network"

POS consistency matters because algorithms use grammatical structure to parse meaning. Inconsistent patterns create parsing ambiguity.

### Rule 6: Condition Placement — Result First

**State the result before the condition.**

Wrong order: "If you apply from the United States, the German visa costs 80 EUR."
Correct order: "The German visa costs 80 EUR for applicants from the United States."

Wrong order: "When traveling during summer, Berlin temperatures reach 30 degrees Celsius."
Correct order: "Berlin temperatures reach 30 degrees Celsius during summer."

The result is what the reader searched for. The condition is a qualifier. Algorithms evaluate the first clause of a sentence more heavily for relevance matching. Placing the result first ensures the most relevant information is in the position algorithms weight most heavily.

### Rule 7: Anchor Text Matching

**The anchor text must match the target page's H1 or title.**

If the target page's H1 is "German Visa Requirements for US Citizens," the anchor text must be "German visa requirements for US citizens" or a close variant — not "visa info" or "learn more about visas" or "requirements."

Matching rules:
- Exact match is ideal
- Partial match (using the core noun phrase from the H1) is acceptable
- Generic anchor text ("click here," "read more," "this article") is never acceptable
- The anchor text must function as a noun phrase within the sentence

### Rule 8: Answer Non-Delay

**Give the answer first. Explain second.**

Wrong: "Germany is a country in central Europe with a rich history dating back to the Holy Roman Empire. Its diverse landscape includes the Bavarian Alps, the Black Forest, and the Rhine Valley. The capital of Germany is Berlin."

Correct: "The capital of Germany is Berlin. Berlin is located in northeastern Germany and has served as the capital since reunification in 1990. Germany's geographic diversity spans from the Bavarian Alps to the North Sea coast."

The answer to the heading's question must appear in the first sentence of the section. Everything after the first sentence is supporting context. Search engines extract candidate answers from the beginning of passages. Delaying the answer reduces the likelihood of the passage being selected.

### Rule 9: Bold the Answer, Not the Term

**Bold the information the reader came to find.**

Wrong: **What is the capital of Germany?** The capital is Berlin.
Correct: What is the capital of Germany? The capital is **Berlin**.

Wrong: **Population of Germany**: The population is 84.4 million.
Correct: Population of Germany: The population is **84.4 million**.

Bolding is a semantic signal. It tells algorithms which text is the answer. Bolding the question or the term wastes this signal on information the reader already knows (they typed the question). Bold the information that resolves the question.

### Rule 10: Word Order Equals Relevance Order

**Place the most important words first in every sentence.**

Less relevant first: "For travelers visiting during summer months, the weather in Berlin averages 25 degrees Celsius."
Most relevant first: "Berlin summer weather averages 25 degrees Celsius for visitors during June through August."

The first words in a sentence carry the most relevance weight in algorithmic parsing. Front-load sentences with the entity, attribute, or value that is most relevant to the target query.

### Rule 11: Three-Example Rule

**Always provide at least three examples.**

One example is an anecdote. Two examples are a coincidence. Three examples establish a pattern. Algorithms evaluate comprehensiveness by checking whether content provides sufficient instances to support a general claim.

Wrong: "Germany has many famous cities, such as Berlin."
Correct: "Germany has many famous cities, including Berlin, Munich, and Hamburg."

This applies to:
- Examples supporting a claim
- Items in a list
- Types within a category
- Steps in a process (minimum 3 steps to constitute a process)

### Rule 12: Scientific Term Distribution

**Use proper terminology from the relevant field.**

If the topic involves medicine, use medical terms. If the topic involves law, use legal terms. If the topic involves technology, use technical terms.

Colloquial: "The process where your body fights off sickness."
Scientific: "The immune response activates T-cells and B-cells to neutralize pathogens."

Proper terminology signals topical expertise to algorithms. It also increases the content's ability to match queries that use technical language, which are often higher-intent queries.

### Rule 13: Quotation Marks for Protected Context

**Use quotation marks to keep specific terms together as a unit.**

When a multi-word term must be interpreted as a single concept, quotation marks signal this to both readers and algorithms.

Example: The "Berlin Wall" divided East and West Berlin. Without quotes, algorithms might parse "Berlin" and "Wall" as separate concepts. With quotes, the phrase is treated as a single entity reference.

Use quotation marks for:
- Proper names that could be parsed as common words
- Technical terms being introduced for the first time
- Phrases where word order changes meaning
- Direct quotes from sources

Do not overuse quotation marks. They are for disambiguation, not emphasis.

### Rule 14: Subordinate Text Optimization

**Minimize dependent clauses.**

Dependent clauses add complexity without proportional information gain. They dilute the main clause's relevance signal.

Heavy subordination: "Germany, which is located in central Europe and is known for its engineering sector, which has been a global leader since the industrial revolution, has a GDP of 4.2 trillion USD."
Optimized: "Germany has a GDP of 4.2 trillion USD. Located in central Europe, Germany leads the global engineering sector since the industrial revolution."

Rules:
- Maximum one dependent clause per sentence
- If a dependent clause contains important information, promote it to its own sentence
- Relative clauses ("which," "that," "who") should be evaluated for promotion to independent sentences
- Appositives are acceptable if short (under 5 words)

## Additional Rule Categories

### Format Selection Rules
- Use paragraphs for definitions and explanations
- Use unordered lists for types, categories, and feature sets
- Use ordered lists for processes, rankings, and chronological sequences
- Use tables for comparisons across multiple attributes
- Use bold for answer values within paragraphs
- Never use a format just for visual variety — format must match information type

### Sentence Construction Rules
- Subject-verb-object is the default sentence structure
- Active voice over passive voice in all cases except when the object is more relevant than the subject
- One main idea per sentence
- Average sentence length: 15-20 words (shorter for FS/PAA, longer for definitive answers)
- No sentences over 35 words

### Paragraph Construction Rules
- One topic per paragraph
- First sentence states the paragraph's main point (topic sentence = answer)
- Supporting sentences add evidence, examples, or qualifiers
- Maximum 4-5 sentences per paragraph for web content
- No single-sentence paragraphs unless the sentence is a featured snippet answer

### Cross-Reference Rules
- When mentioning an entity covered by another page on the site, use anchor text to link
- When mentioning an attribute value that contradicts or qualifies another page's content, ensure consistency
- Never repeat the same full explanation on multiple pages — link to the authoritative page instead

## Application Workflow

1. **Read the instruction code** for the current section (FS, PAA, Listing, Anchor Text, Definitive Answer)
2. **Write the answer first** following the answer non-delay rule
3. **Apply factual modality** — remove all hedging and uncertainty language
4. **Apply the format** dictated by the instruction code
5. **Check word order** — ensure most relevant terms appear first in each sentence
6. **Check numeric specificity** — replace all vague quantifiers with exact numbers
7. **Check verb strength** — replace weak verbs with strong, specific verbs
8. **Apply bold formatting** to answer values, not question terms
9. **Check subordination** — promote heavy dependent clauses to independent sentences
10. **Verify the three-example rule** — every claim with examples must have at least three
11. **Place condition after result** in every conditional sentence
12. **Verify POS consistency** across all parallel structures
13. **Insert anchor texts** where instruction codes specify, matching target page H1s
14. **Run a fluff check** — attempt to delete each sentence; if no information is lost, delete it

## Advanced Authorship Principles

### Micro-Semantics in Content Writing
Apply sequence modeling principles: word order changes relevance distribution. "Teacher yelled students" makes "teacher" heavier; "Students yelled at by teacher" makes "students" heavier. Select predicates carefully — "yell" creates different context than "shout," changing all co-occurrence probabilities. Optimize every sentence for the intended contextual weight distribution.

### Main Content Writing Rules
Main content processes the macro-context only. It provides the main context-flow and complete coverage of the primary topic. It includes a summary/overview. It does NOT deep-dive into sub-contexts. Internal links in main content are restricted to macro-context connections. First paragraph words must establish the contextual vector immediately.

### Supplementary Content Writing Rules
Supplementary content processes micro-contexts and provides contextual bridges (hypertext links or aligned information without links) to other topical map nodes. It is ALWAYS connected to the macro-context of the web page but extends into adjacent macro-contexts. More internal links are appropriate in supplementary sections.

### Contextual Border Writing
The contextual border is where main content transitions to supplementary content. Write a grouper question (H2) that deepens the main context while opening connections to side-topics. This is the most strategically important section — it determines whether supplementary content strengthens or dilutes the page.

### Gibberish Score Avoidance
Avoid same/similar words without adding information. Using lemmas, stemming, or synonyms without providing new value is modern keyword stuffing. Every sentence must add new information, a new connection, or a new perspective. Long articles without real information get penalized as content farms.

### Relevance and Responsiveness Balance
Write for both: (1) Relevance — ensure proper term saturation, co-occurrence patterns, and contextual term weight. (2) Responsiveness — provide direct answers that can be extracted by passage indexing. The first sentence after each heading should directly answer the heading's implied question.

## Common Errors

1. **Hedging language surviving edit**: "Germany is arguably one of the largest economies" instead of "Germany is the 4th largest economy by GDP."
2. **Answer buried in the middle**: The actual answer appears in the third or fourth sentence instead of the first.
3. **Bolding the wrong element**: Bolding the question term instead of the answer value.
4. **Condition before result**: "If you are a US citizen, the visa costs 80 EUR" instead of "The visa costs 80 EUR for US citizens."
5. **Generic anchor text**: Using "here" or "this page" instead of the target page's H1 phrase.
6. **Inconsistent POS in lists**: Mixing verb-led and noun-led list items within the same list.
7. **Exceeding FS word limit**: Writing a 60-word featured snippet answer when the limit is 40 words.
8. **Single-example claims**: "Germany is known for its beer, such as Pilsner" — needs at least two more examples.
