---
name: ontology-construction
description: "Build a formal ontology using RDF-style triples (Subject-Predicate-Object-Context) defining all semantic relationships across the content network. Use this skill whenever the user needs ontology building, RDF triples, knowledge graph construction, entity relationships, E-A-V model setup, semantic relationships, fact extraction, or structured knowledge organization. Trigger for any ontology, knowledge base, or entity relationship mapping request."
---

# Ontology Construction

## Skill Metadata

- **name**: ontology-construction
- **description**: Builds structured knowledge representations using RDF-style triples (Subject-Predicate-Object-Context), 10 core relationship types, Knowledge Graph anchoring with Wikidata QID validation, E-A-V data modeling, Knowledge-Based Trust principles, and fact extraction patterns. Targets 100+ triples per topic to establish authoritative structured knowledge. Activated when the user mentions ontology, RDF triples, knowledge graph, entity relationships, semantic relationships, E-A-V model, knowledge base, fact extraction, or structured knowledge.

---

## Purpose

Ontology construction is the process of building a formal, structured representation of the entities, relationships, and facts within a topic domain. In semantic SEO, an ontology serves as the factual foundation that search engines can extract, validate, and use to assess a site's authority. Google's Knowledge Graph operates on structured relationships between entities, and pages that explicitly express these relationships through content patterns aligned with ontological structures are more likely to be recognized as authoritative, trustworthy sources. The goal is to construct a machine-interpretable knowledge layer that complements the natural language content on every page.

---

## Core Concepts

### RDF-Style Triples: Subject-Predicate-Object-Context

The fundamental unit of an ontology is the triple, a structured statement that expresses a relationship between two entities. In semantic SEO, we extend the standard RDF triple (Subject-Predicate-Object) with a fourth element (Context) to specify the conditions or scope under which the relationship holds.

**Structure**: `Subject → Predicate → Object [Context]`

**Examples**:

- `French Press → IS-A → Brewing Method [Coffee Preparation]`
- `Arabica → REQUIRES → Altitude Above 600m [Growing Conditions]`
- `Espresso Machine → USES → Pressurized Water [Extraction Process]`
- `Cold Brew → PRECEDES → Filtration [Brewing Sequence]`
- `Caffeine Content → MEASURED-BY → Milligrams Per Cup [Nutritional Analysis]`

**The Context element** disambiguates relationships that could have different meanings in different domains. "Java" as a subject could relate to coffee, programming, or geography. The context field specifies which domain applies, preventing misinterpretation.

**Triple quality requirements**:

- Every triple must express a verifiable fact, not an opinion or subjective claim.
- The Subject and Object must be clearly defined entities or attributes.
- The Predicate must use one of the 10 standardized relationship types.
- The Context must specify the domain or condition scope.

### 10 Relationship Types

Standardizing relationship types ensures consistency across the ontology and makes it possible to generate content patterns systematically. The 10 core types cover the vast majority of relationships encountered in any topic domain:

1. **IS-A** (Taxonomy / Classification): Defines what an entity is. Establishes hierarchical class membership.
   - `Cappuccino → IS-A → Espresso-Based Drink [Coffee Classification]`
   - `Chemex → IS-A → Pour-Over Brewer [Equipment Taxonomy]`

2. **HAS-A** (Composition / Properties): Defines what an entity contains or possesses as a component or attribute.
   - `Espresso → HAS-A → Crema Layer [Physical Properties]`
   - `Coffee Cherry → HAS-A → Two Seeds [Botanical Structure]`

3. **USES** (Instrumentality / Method): Defines what tools, resources, or methods an entity employs.
   - `AeroPress → USES → Air Pressure [Extraction Mechanism]`
   - `Wet Processing → USES → Fermentation Tanks [Coffee Processing]`

4. **ENABLES** (Facilitation / Outcome): Defines what an entity makes possible or produces as a result.
   - `Fine Grind Size → ENABLES → Espresso Extraction [Brewing Parameters]`
   - `Direct Trade → ENABLES → Higher Farmer Income [Supply Chain]`

5. **REQUIRES** (Dependency / Prerequisite): Defines what an entity needs in order to function or exist.
   - `Latte Art → REQUIRES → Microfoam Milk [Barista Skills]`
   - `Specialty Coffee Certification → REQUIRES → Score Above 80 [Quality Standards]`

6. **COMPETES-WITH** (Opposition / Alternative): Defines entities that serve similar functions and are alternatives to each other.
   - `French Press → COMPETES-WITH → AeroPress [Home Brewing]`
   - `Arabica → COMPETES-WITH → Robusta [Coffee Species]`

7. **PART-OF** (Meronymy / Membership): Defines that an entity is a component or member of a larger entity.
   - `Portafilter → PART-OF → Espresso Machine [Equipment Components]`
   - `Roasting → PART-OF → Coffee Production Chain [Process Stages]`

8. **PRECEDES** (Sequence / Temporal Order): Defines that one entity comes before another in a process, timeline, or sequence.
   - `Green Bean Sorting → PRECEDES → Roasting [Production Sequence]`
   - `Blooming → PRECEDES → Main Pour [Pour-Over Process]`

9. **LOCATED-IN** (Spatial / Geographic): Defines the geographic or spatial position of an entity.
   - `Yirgacheffe → LOCATED-IN → Ethiopia [Coffee Origins]`
   - `Coffea Arabica → LOCATED-IN → Bean Belt Region [Agricultural Geography]`

10. **MEASURED-BY** (Quantification / Metrics): Defines how an entity is evaluated, scored, or quantified.
    - `Roast Level → MEASURED-BY → Agtron Scale [Roasting Standards]`
    - `Extraction Yield → MEASURED-BY → TDS Percentage [Brewing Science]`

### Target 100+ Triples

A comprehensive ontology for a topic domain should contain at least 100 triples. This threshold ensures sufficient coverage of:

- All major entities in the domain (typically 20-40 entities).
- Multiple relationship types per entity (each entity should participate in 3-5+ triples).
- Cross-entity connections that reveal the structure of the domain.
- Edge cases and nuanced relationships that distinguish expert-level knowledge.

**Scaling approach**:

- Start with the 10-15 most important entities in the domain.
- For each entity, generate triples using all 10 relationship types (not every type will apply to every entity, but attempting all 10 forces thorough coverage).
- Expand to secondary and tertiary entities as the core ontology takes shape.
- Review for gaps: are there entities that only appear as Objects but never as Subjects? These may need their own dedicated triples.

### Knowledge Graph Anchoring

Knowledge Graph anchoring is the process of mapping your ontology's entities to their counterparts in established knowledge bases, primarily Google's Knowledge Graph and Wikidata. When your content describes entities that align with known Knowledge Graph entries, search engines can confidently match your content to the correct entity.

**Anchoring methods**:

- Explicitly reference entities using their commonly recognized names and descriptions.
- Include definitional sentences that match the entity's Knowledge Graph description.
- Use structured data (Schema.org markup) to link content to known entity types.
- Reference authoritative sources that are themselves anchored in the Knowledge Graph (Wikipedia, Wikidata, established industry organizations).

### Wikidata QID Validation

Wikidata assigns a unique identifier (QID) to every entity in its database. Validating your ontology's entities against Wikidata QIDs ensures that:

- The entities you describe are recognized in the broader knowledge ecosystem.
- You are using the correct canonical name and description for each entity.
- Your entity relationships align with established ontological structures.

**Validation process**:

1. For each entity in your ontology, search Wikidata for the corresponding entry.
2. Record the QID (e.g., Q13228 for "Espresso," Q8486 for "Coffee").
3. Compare your entity's attributes and relationships against Wikidata's property statements.
4. Identify discrepancies: if your ontology claims a relationship that contradicts Wikidata, verify the claim with primary sources.
5. Use QIDs to inform schema markup (some schema types support sameAs links to Wikidata URIs).

**When no QID exists**: If an entity in your domain does not have a Wikidata entry, this typically means it is a niche or emerging concept. Document this gap and consider whether the entity is specific enough to warrant its own page or whether it should be treated as an attribute of a broader entity.

### E-A-V Data Model (Entity-Attribute-Value)

The Entity-Attribute-Value model provides a complementary structure to RDF triples for representing factual data about entities. While triples express relationships between entities, E-A-V entries express properties of individual entities.

**Structure**: `Entity | Attribute | Value`

**Examples**:

| Entity | Attribute | Value |
|---|---|---|
| Arabica Coffee | Caffeine Content | 1.2% by weight |
| Arabica Coffee | Optimal Growing Altitude | 600-2000 meters |
| Arabica Coffee | Chromosome Count | 44 |
| Espresso | Typical Serving Size | 25-30 ml |
| Espresso | Extraction Time | 25-30 seconds |
| Espresso | Pressure Required | 9 bars |

**How E-A-V supports SEO**: Google extracts factual claims from content and stores them in structured formats. When your content explicitly states entity attributes and their values in clear, extractable patterns, search engines can confidently add these facts to their knowledge representation of the entity. Pages that consistently provide accurate E-A-V data build Knowledge-Based Trust.

**E-A-V content patterns**: Structure sentences so that the entity, attribute, and value are clearly identifiable:

- "Arabica coffee contains approximately 1.2% caffeine by weight." (Entity: Arabica coffee, Attribute: caffeine content, Value: 1.2% by weight)
- "A standard espresso shot is extracted in 25-30 seconds." (Entity: espresso, Attribute: extraction time, Value: 25-30 seconds)

### Knowledge-Based Trust

Knowledge-Based Trust (KBT) is a concept from Google's research on evaluating source credibility. Rather than relying solely on link-based signals to determine trustworthiness, KBT works by:

1. **Extracting factual claims** from web pages using natural language processing.
2. **Comparing extracted facts** against known facts in established knowledge bases (Knowledge Graph, Wikidata, authoritative databases).
3. **Scoring the source** based on the accuracy of its claims. Sources that consistently state correct facts receive higher trust scores. Sources that contain factual errors receive lower scores.

**Implications for ontology construction**:

- Every factual claim in your content must be accurate and verifiable. A single incorrect fact can reduce trust scores.
- Align your E-A-V values with the consensus values in authoritative sources. If Wikidata says Arabica coffee has 44 chromosomes, your content should state 44, not 42.
- Provide specific, quantified facts rather than vague claims. "Espresso requires approximately 9 bars of pressure" is extractable and verifiable. "Espresso requires high pressure" is not.
- Cover facts that are well-established in knowledge bases. This gives search engines more data points to validate your source against.

### Fact Extraction Patterns

Search engines use specific patterns to extract facts from content. Structuring your sentences to match these patterns increases the likelihood that your facts will be successfully extracted and attributed to the correct entities.

**Common extractable patterns**:

- **Definitional**: "[Entity] is [definition]." Example: "A cortado is an espresso-based drink made with equal parts espresso and warm milk."
- **Attributive**: "[Entity] has/contains [attribute] of [value]." Example: "Robusta coffee has a caffeine content of approximately 2.7% by weight."
- **Relational**: "[Entity A] is [relationship] [Entity B]." Example: "The Chemex is a type of pour-over brewer designed by Peter Schlumbohm."
- **Comparative**: "[Entity A] has [more/less] [attribute] than [Entity B]." Example: "Robusta contains nearly twice the caffeine of Arabica."
- **Temporal**: "[Entity] was [created/discovered/established] in [date/period]." Example: "The AeroPress was invented in 2005 by Alan Adler."
- **Causal**: "[Entity/Process A] causes/produces/results in [Entity/Process B]." Example: "Maillard reactions during roasting produce the brown color and complex flavors in coffee beans."

---

## Implementation Process

1. **Define the domain scope**: Identify the boundaries of the topic domain the ontology will cover. List all major entities.
2. **Generate initial triples**: For each major entity, create triples using as many of the 10 relationship types as applicable. Target 5-8 triples per entity.
3. **Build the E-A-V table**: For each entity, list all known attributes and their verified values. Use authoritative sources for validation.
4. **Validate against Wikidata**: Look up every entity's QID. Compare your triples and E-A-V entries against Wikidata property statements.
5. **Reach the 100-triple threshold**: Expand to secondary entities and deeper relationships until the ontology contains at least 100 triples.
6. **Map to content**: Assign each triple and E-A-V entry to a specific page in the content architecture. Each page should express 5-15 triples through its content.
7. **Write extractable sentences**: Use fact extraction patterns to structure key claims so they are machine-readable.
8. **Cross-reference for consistency**: Ensure that no two pages make contradictory claims about the same entity-attribute pair. The E-A-V table serves as the single source of truth.
9. **Update continuously**: As the domain evolves and new entities or relationships emerge, add new triples and E-A-V entries to the ontology and propagate them to the relevant content.

---

## Advanced Ontology Concepts

### Entity Identity Resolution in Ontologies
Entity Identity Resolution is distinct from Named Entity Recognition. Resolution determines the entity's type, attributes, and values — effectively its identity in knowledge bases. Your ontology must define entity identities consistent with your Source Context. If an entity phrase has multiple possible identities (e.g., "Apple" as fruit vs brand), your ontology's attribute-value pairs must resolve it toward your context.

### Semantic Distance in Ontology Design
Calculate semantic distance between entities via: (1) number and types of associations between entities, (2) repetitiveness of subject-object declarations with different predicates. Shorter semantic distance = stronger ontological relationship. Design your ontology so entities within the core section have shorter distances to the central entity than outer section entities.

### Document Statistics and Ontology Alignment
Search engines use document statistics (mention counts, source diversity, declaration patterns) to build their own ontologies. Your content ontology should align with — and ideally improve upon — what search engines have already inferred. Where you want to shift an entity's identity (e.g., associate your brand with quality), you must generate sufficient document statistics to overcome existing ontological inertia.

### Knowledge Domain Boundaries
Ontologies must respect knowledge domain boundaries. Processing "LiFePO4" directly connected to "Electric Scooter" without intermediate nodes (battery → battery materials → LiFePO4) creates a weak association that search engines can't verify through their inverted indexes. Build ontological paths through established knowledge domain nodes.

---

## Key Principles

- RDF-style triples with Context (Subject-Predicate-Object-Context) are the fundamental building blocks of a semantic ontology.
- The 10 standardized relationship types ensure consistent, comprehensive coverage of entity connections.
- 100+ triples is the minimum threshold for a domain ontology that demonstrates genuine authority.
- Wikidata QID validation anchors your ontology in the global knowledge ecosystem.
- E-A-V data provides the factual specificity that enables Knowledge-Based Trust scoring.
- Every factual claim must be accurate, specific, and structured in extractable sentence patterns.
- Knowledge-Based Trust rewards sources that consistently state verifiable facts aligned with established knowledge bases.
