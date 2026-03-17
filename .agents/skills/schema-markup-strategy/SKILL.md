---
name: schema-markup-strategy
description: "Generate JSON-LD structured data markup for each content type in the semantic content network. Use this skill whenever the user needs schema markup, JSON-LD, structured data, rich snippets, schema.org implementation, FAQ schema, product schema, article schema, or breadcrumb schema. Trigger for any structured data or schema markup request."
---

# Schema Markup Strategy

## Skill Metadata

- **name**: schema-markup-strategy
- **description**: Generates and customizes JSON-LD structured data for 8 core schema types (Organization, Website, Article, Breadcrumb, FAQ, HowTo, Product, Video), tailored per page type based on macro context and entity relationships. Schema serves as the machine-readable fact layer that complements the implicit semantic signals embedded in content. Activated when the user mentions schema markup, JSON-LD, structured data, rich snippets, schema.org, FAQ schema, product schema, article schema, or breadcrumb schema.

---

## Purpose

Schema markup provides a machine-readable layer of structured data that explicitly tells search engines what a page is about, what entities it describes, and how those entities relate to each other and the broader site. While well-written content provides implicit semantic signals that search engines must interpret, schema markup provides explicit signals that require no interpretation. It is the bridge between human-readable content and machine-readable knowledge. When schema markup aligns with the ontology, entity relationships, and content structure of a page, it creates a reinforcing loop where implicit and explicit signals confirm each other, significantly increasing the likelihood of rich results, Knowledge Panel inclusion, and accurate entity association.

---

## Core Concepts

### JSON-LD as the Implementation Format

JSON-LD (JavaScript Object Notation for Linked Data) is the preferred format for implementing schema markup. It is embedded in the `<head>` or `<body>` of an HTML page as a `<script type="application/ld+json">` block. Unlike Microdata or RDFa, JSON-LD is completely separate from the visible HTML content, making it easier to maintain, update, and customize without altering the page's markup structure.

**Advantages of JSON-LD**:

- Clean separation of structured data from presentation markup.
- Easy to generate programmatically from templates and databases.
- Supports nesting and cross-referencing between schema types.
- Google's explicitly recommended format for structured data.

### The 8 Core Schema Types

Each schema type serves a specific purpose in the semantic SEO architecture. The appropriate types are selected based on the page's role in the site, its content type, and the entities it describes.

#### 1. Organization Schema

**Applied to**: The homepage or a dedicated about page. Typically site-wide via a single global definition.

**Purpose**: Establishes the entity identity of the organization or brand behind the website. Anchors the site to a Knowledge Graph entity.

**Key properties**:

- `@type`: Organization (or more specific subtypes like LocalBusiness, Corporation)
- `name`: The official organization name
- `url`: The homepage URL
- `logo`: URL to the organization's logo image
- `sameAs`: Array of official social profile URLs and authoritative references (Wikipedia, Wikidata, LinkedIn, etc.)
- `description`: A concise description of the organization
- `contactPoint`: Customer service or support contact information
- `founder`, `foundingDate`, `numberOfEmployees`: Additional entity attributes

**Customization based on macro context**: If the site represents a personal brand, use `Person` instead of `Organization`. If it represents a local business, use `LocalBusiness` with `address`, `geo`, `openingHours`, and `areaServed` properties.

#### 2. WebSite Schema

**Applied to**: The homepage. Defined once for the entire site.

**Purpose**: Tells search engines that this URL represents a website entity, enabling sitelinks search box and site-level identity signals.

**Key properties**:

- `@type`: WebSite
- `name`: The site's name
- `url`: The homepage URL
- `potentialAction`: SearchAction definition for sitelinks search box
- `publisher`: Reference to the Organization schema

#### 3. Article Schema

**Applied to**: Every blog post, guide, editorial piece, or informational content page.

**Purpose**: Identifies the content as a structured article, enabling article-specific rich results (headline, date, author, image in search results).

**Key properties**:

- `@type`: Article (or NewsArticle, BlogPosting, TechArticle, ScholarlyArticle depending on content type)
- `headline`: The article's H1 heading (must match exactly)
- `description`: A concise summary of the article
- `image`: The primary image URL
- `author`: Reference to a Person or Organization entity
- `publisher`: Reference to the Organization entity
- `datePublished`: ISO 8601 date of original publication
- `dateModified`: ISO 8601 date of most recent update
- `mainEntityOfPage`: The canonical URL of the page
- `about`: Array of Thing entities that the article is about (link to the ontology's entities)
- `mentions`: Array of Thing entities mentioned in the article

**Customization based on entity relationships**: The `about` property should reference the primary entity the article covers. If the article's primary entity has a Wikidata QID, include a `sameAs` link to the Wikidata URI within the `about` entity definition. The `mentions` property should list secondary entities discussed in the article.

#### 4. BreadcrumbList Schema

**Applied to**: Every page except the homepage.

**Purpose**: Defines the hierarchical navigation path from the homepage to the current page, reinforcing the site's information architecture in search results.

**Key properties**:

- `@type`: BreadcrumbList
- `itemListElement`: Ordered array of ListItem objects, each with:
  - `position`: Numeric position in the breadcrumb trail (1 = homepage)
  - `name`: The display name for that level
  - `item`: The URL for that level

**Customization based on macro context**: The breadcrumb path should mirror the silo structure. A page in the "Brewing Methods" silo under the "Pour-Over" hub should have a breadcrumb like: Home > Brewing Methods > Pour-Over > [Current Page]. This reinforces the topical hierarchy for search engines.

#### 5. FAQ Schema

**Applied to**: Pages that contain question-and-answer content, either as the primary format or as a supplementary FAQ section.

**Purpose**: Enables FAQ rich results in search, where questions and answers appear directly in the SERP. Also signals that the page addresses specific query intents.

**Key properties**:

- `@type`: FAQPage
- `mainEntity`: Array of Question objects, each with:
  - `@type`: Question
  - `name`: The question text (should match the heading or question text on the page exactly)
  - `acceptedAnswer`:
    - `@type`: Answer
    - `text`: The answer text (should match the on-page answer content)

**Customization based on query network**: FAQ questions should align with the query network analysis. Each question in the schema should correspond to a real search query that the page targets. The answer text should contain the target entity and its key attributes.

#### 6. HowTo Schema

**Applied to**: Pages that provide step-by-step instructions for completing a task or process.

**Purpose**: Enables HowTo rich results with step-by-step display in search. Signals procedural content structure.

**Key properties**:

- `@type`: HowTo
- `name`: The title of the how-to guide
- `description`: Brief overview of what the guide teaches
- `totalTime`: ISO 8601 duration for completing the process
- `estimatedCost`: Cost estimate if applicable
- `supply`: Array of materials needed
- `tool`: Array of tools required
- `step`: Ordered array of HowToStep objects, each with:
  - `@type`: HowToStep
  - `name`: Step title
  - `text`: Step instructions
  - `image`: Step image URL (if applicable)

**Customization based on entity relationships**: If the how-to involves specific entities from the ontology (tools, materials, processes), reference them explicitly in the `tool`, `supply`, and step `text` fields using their canonical names.

#### 7. Product Schema

**Applied to**: Product pages, product review pages, and product comparison pages.

**Purpose**: Enables product rich results with price, availability, rating, and review information in search.

**Key properties**:

- `@type`: Product
- `name`: Product name
- `description`: Product description
- `image`: Product image URLs
- `brand`: Brand entity reference
- `sku`, `gtin`, `mpn`: Product identifiers
- `offers`:
  - `@type`: Offer
  - `price`: Numeric price
  - `priceCurrency`: Currency code
  - `availability`: Stock status (InStock, OutOfStock, etc.)
  - `url`: Purchase URL
- `aggregateRating`: Average rating and review count
- `review`: Individual review objects

**Customization based on entity relationships**: The product's `brand` should reference the Organization schema if the product belongs to the site's own brand. The `category` property should align with the silo structure. If the product is an entity in the ontology, its attributes from the E-A-V table should be reflected in the `additionalProperty` field.

#### 8. Video Schema

**Applied to**: Pages that contain embedded video content.

**Purpose**: Enables video rich results with thumbnail, duration, and description in search. Can also enable video carousel inclusion.

**Key properties**:

- `@type`: VideoObject
- `name`: Video title
- `description`: Video description
- `thumbnailUrl`: Thumbnail image URL
- `uploadDate`: ISO 8601 publication date
- `duration`: ISO 8601 duration
- `contentUrl`: Direct video file URL (if available)
- `embedUrl`: Embed URL (YouTube, Vimeo, etc.)
- `publisher`: Organization entity reference

### Customization Per Page Type Based on Macro Context

Schema markup should not be applied uniformly across a site. Each page type has a specific role in the semantic architecture, and its schema should reflect that role:

- **Homepage**: Organization + WebSite schemas.
- **Silo pillar page**: Article + BreadcrumbList. The `about` property should reference the silo's primary entity.
- **Hub/grouper page**: Article + BreadcrumbList. May include FAQ if the hub answers common questions about the topic cluster.
- **Spoke/supporting page**: Article + BreadcrumbList + FAQ (if applicable) + HowTo (if procedural). The `about` and `mentions` properties should link to entities from the ontology.
- **Product page**: Product + BreadcrumbList.
- **Video page**: VideoObject + Article + BreadcrumbList.

### Schema as Machine-Readable Fact Layer

Schema markup functions as the explicit, machine-readable complement to the implicit semantic signals in content. The relationship between the two layers:

- **Content provides implicit signals**: Heading hierarchy, keyword proximity, entity mentions, definitional sentences, and distributional semantics all create implicit topical signals that search engines must interpret.
- **Schema provides explicit signals**: Structured data directly states what the page is about, who authored it, what entities it covers, and how it fits into the site's hierarchy.
- **Alignment creates confirmation**: When schema markup confirms what the content already implies, the combined signal is stronger than either alone. If the content discusses "espresso extraction techniques" and the schema's `about` property references the "Espresso" entity with a Wikidata sameAs link, the page's topical relevance for espresso-related queries is reinforced from two independent signal sources.
- **Misalignment creates confusion**: If the schema markup contradicts the content (e.g., the content is about pour-over coffee but the schema's `about` says "Espresso"), search engines may discount both signals. Always ensure schema and content are aligned.

---

## Implementation Process

1. **Audit page types**: Categorize every page on the site by type (homepage, pillar, hub, spoke, product, video, etc.).
2. **Assign schema types**: Based on the page type mapping above, determine which schema types apply to each page.
3. **Generate base templates**: Create JSON-LD templates for each schema type with placeholder values that can be populated per page.
4. **Populate entity references**: For Article schema, populate the `about` and `mentions` properties using entities from the ontology. Include Wikidata sameAs links where available.
5. **Align with content**: Verify that every schema property value matches the corresponding content on the page. The `headline` must match the H1. FAQ questions must match on-page questions. HowTo steps must match on-page steps.
6. **Validate with testing tools**: Use Google's Rich Results Test and Schema Markup Validator to check for errors and warnings in every schema implementation.
7. **Deploy and monitor**: After implementation, monitor Google Search Console's Enhancements reports for schema-related errors, warnings, and valid items. Track rich result appearances.
8. **Update with content changes**: When content is reconfigured (headings changed, entities added or removed), update the corresponding schema markup to maintain alignment.

---

## Advanced Schema Concepts

### Schema and Entity Identity Reinforcement
Schema markup is a direct channel for communicating entity identity to search engines. Use structured data to explicitly declare entity types, attributes, and relationships that align with your Source Context. This reinforces the entity identity you're building through content. Ensure schema entity references are consistent with your ontology.

### Schema for Brand SERP Optimization
Implement schema types that trigger Brand SERP features: Organization, LocalBusiness, Product, Review, FAQ, HowTo, Article. Brand SERP elements (Knowledge Panel, PAA, reviews, job listings) require consistent structured data across authoritative sources. Schema is the fastest way to influence what appears in your Brand SERP.

### Schema and Initial Ranking Signals
Search engines use structured data as a signal for initial ranking assessment. Properly marked-up pages signal higher content quality and organization. Schema helps search engines evaluate your site sections — different markup patterns for different sections help assign appropriate initial ranking scores per section.

### Breadcrumb Schema Integration
Breadcrumb structured data strengthens the internal hierarchy signal for search engines. It helps assign correct crawl priority and indexing speed per section. Ensure breadcrumb schema matches your information architecture and contextual hierarchy.

---

## Key Principles

- JSON-LD is the preferred format for all schema markup implementation.
- Each page type requires a specific combination of schema types based on its role in the site architecture.
- Schema markup must align with on-page content. The headline, entities, questions, and steps in schema must match what the page actually says.
- The `about` and `mentions` properties in Article schema are critical for entity association and should reference ontology entities with Wikidata sameAs links.
- Schema is the explicit fact layer that confirms the implicit semantic signals in content. Alignment between the two creates the strongest possible topical signal.
- Validate every schema implementation with testing tools before deployment.
