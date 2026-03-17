---
name: eav-knowledge-base
description: "Build structured Entity-Attribute-Value knowledge bases from content networks for Knowledge Graph alignment and AI content generation. Use this skill whenever the user needs a knowledge base, E-A-V model, entity attribute value database, fact repository, Knowledge Graph alignment, structured knowledge management, or machine-readable fact organization. Trigger for any knowledge base, fact database, or entity data structuring request."
---

# EAV Knowledge Base

name: eav-knowledge-base
description: Use when users mention knowledge base, E-A-V model, entity attribute value, fact database, knowledge graph alignment, structured data, machine-readable facts, or knowledge management.

---

## Purpose

The Entity-Attribute-Value (EAV) knowledge base is a structured repository of every factual claim made across a semantic content network. It serves as the single source of truth for all content, ensuring cross-page consistency, enabling Knowledge Graph alignment verification, and providing a machine-readable dataset that can be used for language model fine-tuning. This skill teaches agents how to construct, maintain, and leverage an EAV knowledge base as the factual backbone of a Semantic SEO campaign.

---

## Core Concepts

### Entity-Attribute-Value Model

The EAV model structures all knowledge as triples -- three-part statements that capture a single fact:

- **Entity:** The subject or thing being described (a noun, concept, product, person, place, or topic)
- **Attribute:** A property or characteristic of that entity (a descriptor, measurement, relationship, or quality)
- **Value:** The specific data point assigned to that attribute for that entity (a number, name, description, or reference to another entity)

Examples of EAV triples:
| Entity | Attribute | Value |
|--------|-----------|-------|
| Berlin | population | 3.7 million |
| Berlin | country | Germany |
| Berlin | founded | 1237 |
| Vitamin D | primary source | sunlight |
| Vitamin D | recommended daily intake | 600 IU |
| Vitamin D | deficiency risk factor | limited sun exposure |

Every factual statement in every article across the entire semantic content network should be expressible as one or more EAV triples. If a fact cannot be structured this way, it is either an opinion (which should be clearly framed as such) or it needs decomposition into simpler claims.

### Cross-Page Consistency

The primary operational purpose of the EAV knowledge base is ensuring that no two pages in the semantic content network make conflicting factual claims. When a site has 300-800+ articles, the probability of contradictory facts appearing across different pages is extremely high without a centralized knowledge base.

Examples of cross-page inconsistency problems:
- Page A states "Vitamin D recommended intake is 600 IU" while Page B states "the recommended daily dose of Vitamin D is 800 IU"
- Page A says a company was "founded in 2010" while Page B says "established in 2011"
- Page A describes a process as having "5 steps" while Page B references "the 4-step process"

Each of these contradictions degrades the site's Knowledge-Based Trust score. Search engines that detect conflicting facts across pages within the same domain will reduce their confidence in the site as a reliable source.

The EAV knowledge base prevents this by serving as the canonical reference. Before any article is published, its factual claims are extracted, converted to EAV triples, and checked against the existing knowledge base. Conflicts are identified and resolved before publication.

### Knowledge Graph Alignment Verification

Search engines maintain their own Knowledge Graphs -- vast databases of entities, attributes, and relationships. When your content aligns with the search engine's Knowledge Graph, it reinforces trust. When your content contradicts the Knowledge Graph (without clear justification), it creates friction.

The EAV knowledge base enables systematic alignment verification:

1. **Extract triples from your content:** Convert every factual claim into Entity-Attribute-Value format.
2. **Cross-reference with known Knowledge Graph data:** Compare your triples against publicly available Knowledge Graph data (Wikidata, Google Knowledge Panels, schema.org definitions).
3. **Identify alignment gaps:** Where your facts differ from the Knowledge Graph, determine whether your source is more current/accurate or whether your content needs correction.
4. **Document justified deviations:** When your content intentionally differs from the Knowledge Graph (e.g., more recent data), document the justification in the knowledge base.

### Exportable Dataset for Fine-Tuning

The EAV knowledge base, once constructed, becomes a valuable structured dataset that can be exported for multiple purposes:

- **Language model fine-tuning:** The triples can be formatted as training data for fine-tuning language models on your specific domain knowledge. This creates AI assistants that are factually aligned with your content.
- **Content generation templates:** EAV triples provide the factual backbone for generating new content that is guaranteed to be consistent with existing pages.
- **Chatbot knowledge bases:** The structured facts can power domain-specific chatbots or FAQ systems.
- **API data sources:** The triples can be served through APIs for applications that need access to your domain knowledge.

Export formats should include:
- JSON-LD (for semantic web compatibility)
- CSV/TSV (for spreadsheet analysis)
- RDF/Turtle (for Knowledge Graph tools)
- JSONL (for language model training)

### The Future Methodology

The EAV knowledge base represents the future of content operations. The workflow cycle is:

1. **Build the knowledge base:** Extract and structure all domain knowledge as EAV triples.
2. **Generate content from the KB:** Use the knowledge base as the factual source for all content creation, whether human-written or AI-assisted.
3. **Human review:** Subject matter experts review generated content for accuracy, nuance, and completeness.
4. **Improve the KB:** Insights from human review feed back into the knowledge base -- new facts added, errors corrected, relationships refined.
5. **Repeat:** Each cycle improves both the knowledge base and the content quality.

This creates a flywheel where content quality and knowledge base accuracy reinforce each other continuously. Over time, the knowledge base becomes the most valuable asset in the content operation -- more valuable than any individual article, because it enables the reliable generation of unlimited future content.

### Machine-Readable Triples for Knowledge-Based Trust

Search engines increasingly evaluate content using Knowledge-Based Trust (KBT) -- a framework that assesses the factual accuracy of a web source by comparing its claims against known facts. The EAV knowledge base directly supports KBT scoring by:

- **Making facts extractable:** When content is written from a structured knowledge base, the factual claims are clear, unambiguous, and easily extractable by search engine parsers.
- **Ensuring consistency:** A single source of truth eliminates the contradictions that KBT algorithms penalize.
- **Supporting schema markup:** EAV triples map directly to schema.org properties, enabling rich structured data markup that explicitly communicates facts to search engines.
- **Building fact density:** Content generated from a comprehensive knowledge base naturally achieves high fact density -- many verifiable claims per page -- which is a positive KBT signal.

### Fact Extraction Patterns

When building the knowledge base from existing content or research, use the Subject-Predicate-Object extraction pattern:

**Subject** = the entity being discussed
**Predicate** = the relationship or attribute being described
**Object** = the value or related entity

Extraction process for each article:
1. Read each paragraph and identify every factual claim (statements that are verifiable, not opinions).
2. Convert each claim into one or more Subject-Predicate-Object triples.
3. Normalize entity names (ensure "Vitamin D," "vitamin D," and "Vit D" all resolve to the same canonical entity).
4. Normalize attribute names (ensure "founded," "established," and "created in" all resolve to the same canonical attribute where appropriate).
5. Validate values against authoritative sources.
6. Enter the validated triples into the knowledge base.

Common extraction patterns:
- **Definitional:** "[Entity] is [definition]" becomes Entity | definition | [value]
- **Quantitative:** "[Entity] has [measurement]" becomes Entity | [attribute] | [number + unit]
- **Relational:** "[Entity A] is related to [Entity B]" becomes Entity A | [relationship type] | Entity B
- **Temporal:** "[Entity] was [action] in [year]" becomes Entity | [action date] | [year]
- **Categorical:** "[Entity] is a type of [category]" becomes Entity | type | [category]

---

## Implementation Guidance

When advising on EAV knowledge base construction:

1. **Start with core entities:** Identify the primary entities in the topical map and create their attribute profiles first. These are the entities that appear across multiple articles.

2. **Extract from existing content:** If content already exists, perform a full extraction pass to populate the knowledge base with current claims. Flag any contradictions found during extraction.

3. **Establish canonical naming:** Create a glossary of canonical entity names and attribute names. All contributors must use these canonical forms when adding to the knowledge base.

4. **Build verification workflows:** Set up a process where new triples are verified against authoritative sources before being accepted into the knowledge base.

5. **Integrate with content briefs:** Content briefs should reference specific knowledge base entries, ensuring authors use the canonical facts rather than conducting independent (and potentially inconsistent) research.

6. **Schedule regular audits:** Quarterly reviews of the knowledge base to identify outdated values, missing entities, and alignment gaps with updated Knowledge Graph data.

7. **Plan export pipelines:** Determine which export formats are needed and build automated or semi-automated export processes.

---

## Advanced EAV Knowledge Base Concepts

### Entity Identity Management Through EAV
Entities are living things inside knowledge bases — their identity changes with different attribute-value associations. Your EAV knowledge base directly shapes how search engines resolve entity identity. The attribute-value pairs you document and process in content determine whether search engines classify your central entity the way you intend. Monitor how entity identity shifts as you add new attribute-value pairs.

### Document Statistics Shape Entity Priority
Document statistics represent entity values and definitions through linguistic statistics (statements, declarations, dense passages). An entity mentioned 99 times from 46 sources as "horse, animal" but only 5 times from 2 sources as "brand name" gets resolved as the animal. Your EAV knowledge base must track mention frequency and source diversity for each attribute-value pair to understand the entity's current identity state.

### Semantic Distance Integration
Map the semantic distance between entities in your knowledge base using two methods: (1) count of associations and angles between entity pairs by association type, (2) repetitiveness of subject-object contextual connections. The semantic distance between attributes and attribute-context pairs helps search engines rank which attributes are most important for defining the entity. Include semantic distance calculations in your EAV data structure.

### Topical Coverage Depth Validation
Use the EAV knowledge base to validate topical coverage depth. For each entity, trace the attribute chain to its deepest granularity. Example: Electric Scooter → battery (attribute) → battery types (sub-attribute) → chemical compositions (NCA, NMC, LiFePO4) → voltage types (operating, charging, peak, nominal). If your EAV data doesn't reach this depth, your content can't achieve proper topical coverage.

### Knowledge Domain Boundary Tracking
Track knowledge domain boundaries in your EAV structure. An entity processed outside its knowledge domain (e.g., LiFePO4 connected directly to Electric Scooter without battery → battery materials intermediate nodes) creates weak associations that search engines cannot verify through their inverted indexes. Ensure all entity connections pass through established knowledge domain nodes.

---

## Data Input Integration (Skill 33)

When Skill 33 has been run, the **Research Intelligence Report** provides a structured fact database with confidence scores and source citations. Import these directly into your EAV knowledge base as pre-validated entity-attribute-value triples. Facts with 3+ source confirmations get high confidence. Facts with single sources need verification. The relationship triples from Skill 33 map directly to your ontology structure in Skill 18.

## Key Principles Summary

- Structure all domain knowledge as Entity-Attribute-Value triples
- The knowledge base is the single source of truth for all content across the semantic network
- Cross-page consistency depends on centralized fact management
- Verify alignment with search engine Knowledge Graphs regularly
- The knowledge base is an exportable, reusable asset for fine-tuning, chatbots, and APIs
- Follow the build-generate-review-improve cycle for continuous quality improvement
- Machine-readable triples directly support Knowledge-Based Trust scoring
- Use Subject-Predicate-Object extraction patterns to systematically populate the knowledge base
- Normalize entity and attribute names to prevent duplication and inconsistency
