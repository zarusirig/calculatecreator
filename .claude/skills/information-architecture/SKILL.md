---
name: information-architecture
description: "Design URL hierarchy using Koray's Root-Seed-Node three-layer system, combining hub (ontology) and silo (taxonomy) structures. Use this skill whenever the user needs site architecture, URL structure design, crawl path optimization, breadcrumb design, or wants to organize their website's information hierarchy. Trigger for any site structure, navigation planning, or URL hierarchy request."
---

# Information Architecture & URL Structure Design

Information architecture determines how search engines discover, crawl, and understand the relationships between your pages. Koray's system combines hub-and-spoke (ontological) and silo (taxonomical) structures with a three-layer hierarchy.

## The Three-Layer System

### Layer 1: Root Pages
- The MOST important pages, closest to the homepage
- Each major section/contextual domain has ONE root page
- Root pages connect to ALL seed pages in their section
- All seed pages connect BACK to their root page
- Root pages define the contextual vector for their entire section

### Layer 2: Seed Pages
- Mid-level pages that bridge Root and Node pages
- Each seed page covers a major topic cluster
- Connects upward to Root, downward to Nodes
- Receives PageRank from Root, distributes to Nodes

### Layer 3: Node Pages
- The most specific, detailed content pages
- Cover individual entity-attribute pairs
- Connect upward to their Seed page
- May connect laterally to other Nodes in same cluster

### Visual Structure:
```
Homepage
├── Root 1 (Core Section Root)
│   ├── Seed 1.1
│   │   ├── Node 1.1.1
│   │   ├── Node 1.1.2
│   │   └── Node 1.1.3
│   ├── Seed 1.2
│   │   ├── Node 1.2.1
│   │   └── Node 1.2.2
│   └── Seed 1.3
│       └── Node 1.3.1
├── Root 2 (Outer Section Root)
│   ├── Seed 2.1
│   │   ├── Node 2.1.1
│   │   └── Node 2.1.2
│   └── Seed 2.2
│       ├── Node 2.2.1
│       └── Node 2.2.2
```

## Hub vs. Silo Structures

### Hub Structure (Ontological)
- Connections based on MEANING relationships
- Pages link to semantically related pages regardless of category
- Like a web — connections go in many directions
- Represents how concepts ACTUALLY relate

### Silo Structure (Taxonomical)
- Connections based on CATEGORY hierarchy
- Pages link primarily within their silo/category
- Like a tree — connections go up and down
- Represents how content is ORGANIZED

### Koray's Approach: Hybrid
Use BOTH structures simultaneously:
- **Silo** for the primary URL hierarchy and breadcrumbs
- **Hub** for internal linking (cross-silo connections based on semantic relevance)

## URL Construction Rules

1. **Word non-repetition:** Never repeat the same word at different URL levels
   - Good: `domain.com/countries/germany/population`
   - Bad: `domain.com/german-countries/germany/german-population`

2. **Core Section = Flat Architecture**
   - Maximum 2 levels deep from domain root
   - Example: `domain.com/visa-types/work-visa`

3. **Outer Section = Deeper is OK**
   - Can be 3-4 levels deep
   - Example: `domain.com/europe/germany/culture/religion`

4. **Short segments preferred**
   - 1-2 words per segment
   - Search engines prefer shorter URLs for canonical selection

5. **Match breadcrumb trail**
   - URL path = breadcrumb path
   - Each segment is a clickable level

## Crawl Path Optimization

Design crawl paths so that:
1. **Highest value pages are closest to homepage** (fewest clicks)
2. **Quality nodes are encountered first** (encourage deeper crawling)
3. **Cross-section connections create loops** (crawlers revisit important pages)
4. **No orphan pages** (every page is reachable from at least one other page)
5. **Deepest content is reachable within 3 clicks** from homepage

## Output Template

```
# Information Architecture: [Website]

## Site Hierarchy (Root-Seed-Node)
[Full tree structure with page types labeled]

## URL Map
| Page | URL | Type | Depth | Parent |
|------|-----|------|-------|--------|

## Crawl Path Design
- Primary path: Homepage → [Root] → [Seed] → [Node]
- Cross-section paths: [list of hub connections]

## Breadcrumb Templates
- Core: Home > [Category] > [Topic]
- Outer: Home > [Domain] > [Entity] > [Attribute]
```

## Advanced Information Architecture Concepts

### Breadcrumb Navigation for Semantic SEO
Breadcrumbs distribute PageRank based on user logical paths and search intent. They decrease crawl cost and increase crawl efficiency. If your most-linked pages match your most-visited pages, internal linking signals are healthy. Use breadcrumbs to change indexing speed and crawling frequency for specific site sections.

### Click Path Optimization
Keep page depth under 4 levels. The click path from homepage to conversion must be optimized — shorter paths for commercial content. Analyze click paths to identify drop-off points. Different user profiles need different click paths (informational vs transactional visitors).

### Above the Fold Design Strategy
Above the fold directly affects ranking and is connected to UX, conversion rate, and page speed. If a page layout is designed only for informational queries, it can't satisfy transactional users. Design pages to satisfy multiple search intents, which creates more authoritative historical data. Include proper web components (forms, calculators, comparison tools) that signal the ability to complete real-world behaviors.

### Initial Ranking Score by Site Section
Search engines assign different initial ranking scores to different site sections. An eCommerce site might have high initial ranking for product pages but lower for blog content. Site sections can be determined by: author name, page layout, URL/breadcrumb structure, structured data, or content format. Design architecture to maximize initial ranking potential per section.

## Connecting to Other Skills
- **Input from:** Raw Topical Map (Skill 5), Processed Map (Skill 6)
- **Output to:** Internal Linking Architecture (Skill 16), Content Briefs (Skill 8)
