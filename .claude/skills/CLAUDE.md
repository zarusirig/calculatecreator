# Semantic SEO Project Instructions

This project uses 33 custom skills based on Koray Tugberk Gubur's Semantic SEO framework to build websites that rank through topical authority.

## Skill Execution Order

Always follow this stage order. Do not skip stages unless the user explicitly asks to.

### Stage 0 — Data Loading (if user provides files)
When the user provides keyword CSVs, XLSX files, deep research reports (markdown/text), or competitor data, ALWAYS run `data-input-processor` FIRST before any other skill. This normalizes external data into three reports (Keyword Intelligence, Research Intelligence, Combined Strategy Brief) that feed into all downstream skills.

### Stage 1 — Foundation
Run `source-context` and `brand-identity-voice` together. These define WHAT the site covers and HOW it sounds. Every other skill depends on these outputs.

### Stage 2 — Entity Analysis
Run in this order: `entity-attribute-analysis` → `query-network-analysis` → `lexical-relationship-mapping`. Feed outputs forward.

### Stage 3 — Topical Map
Run: `raw-topical-map` → `topical-map-processing` → `information-architecture`.

### Stage 4 — Content Briefs
Run: `root-document-brief` → `question-generation` → `content-brief-generation` → `content-brief-scaling`.

### Stage 5 — Linking
Run: `internal-linking-architecture` → `anchor-text-strategy`.

### Stage 6 — Knowledge Layer
Run: `ontology-construction` → `schema-markup-strategy`.

### Stage 7 — Content Writing (per article)
Run: `contextual-border-design` → `algorithmic-authorship` → `contextual-vector-optimizer` → `micro-semantics` → `distributional-semantics`.

### Stage 8 — Launch Planning
Run: `audience-journey-mapping` → `serp-analysis` → `publication-momentum` → `production-management`.

### Stage 9 — Audit & Optimize (ongoing)
Run: `content-relevance-auditor` → `content-reconfiguration` → `competitive-gap-analysis` → `eav-knowledge-base` → `cross-page-consistency`.

### Stage 10 — Website Conversion (optional)
Run: `website-converter` for existing sites.

## Key Rules

- The `web-research-engine` skill provides real-time web data to any skill. It requires an OpenAI API key set as OPENAI_API_KEY environment variable.
- Always save skill outputs as files in the `outputs/` directory so they persist between sessions.
- When the user says "continue" or "next stage", move to the next stage in the sequence above.
- When the user provides a niche without specifying a stage, start from Stage 0 (if they have data files) or Stage 1 (if they don't).
- Each stage's output is required input for the next stage. Never skip ahead without the prerequisite outputs.

## Critical Framework Concepts

- Topical Authority = Topical Coverage × Historical Data (Historical Data = user engagement quality, NOT time)
- Relevance (IR Score) and Responsiveness (Information Extraction) are separate — optimize both
- Core Section (main attribute of central entity) must be built BEFORE Outer Section (minor attributes)
- Main Content = macro-context. Supplementary Content = micro-contexts with bridges. Contextual Border = transition between them.
- Quality Threshold replaces keyword difficulty
- Content refresh every 3-6 months even if ranking
- Vastness-Depth-Momentum: if one pillar is weak, compensate with the others
