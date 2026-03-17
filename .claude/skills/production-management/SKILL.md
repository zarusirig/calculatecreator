---
name: production-management
description: "Manage content production pipelines across multiple authors using color-coded status tracking and lean management principles. Use this skill whenever the user needs editorial workflow, author management, content status tracking, team coordination, content pipeline management, or production efficiency optimization. Trigger for any content production, team management, or editorial calendar request."
---

# Production Management

name: production-management
description: Use when users mention production management, content workflow, author management, editorial calendar, content status tracking, team coordination, content pipeline, or project management.

---

## Purpose

Managing a Semantic SEO content operation at scale requires a rigorous production management system. When a campaign involves 300-800+ articles across multiple authors, the margin for error is zero. Without a structured workflow, articles get lost, briefs go unassigned, published content contradicts other pages, and the entire semantic content network degrades. This skill teaches agents how to advise on production tracking systems, status management, author coordination, and lean management principles applied to content operations.

---

## Core Concepts

### Color-Coded Status System

The foundation of production management is a visual, color-coded status system applied to every article in the content pipeline. Each color represents a distinct stage in the article lifecycle:

- **Black -- Not Ready:** The topic has been identified and placed on the topical map, but no brief has been created. The article exists only as a planned entry. No action can be taken on it yet.

- **Orange -- Brief Ready:** The content brief has been completed and is ready for assignment to an author. The brief includes all semantic requirements (entities, attributes, contextual vectors, heading structures, internal linking targets). The article is waiting for an available author.

- **Yellow -- Being Written:** The article has been assigned to an author and is currently in production. The author is actively working from the brief. This status persists from assignment through first draft completion and any revision cycles.

- **Blue -- Written, Not Published:** The article has been completed by the author, reviewed against the brief, and approved for publication, but has not yet been published to the live site. This status exists because publishing timing is governed by the Publication Momentum skill -- articles must be released according to the patternless publishing schedule, not immediately upon completion.

- **Green -- Published:** The article is live on the website. It has been published, indexed (or submitted for indexation), and is now part of the active semantic content network.

This five-color system must be applied consistently across the entire article inventory. Every article in the campaign must have exactly one color status at all times.

### Author Assignment Tracking

Each article must have a clearly assigned author tracked in the production system. The tracking should include:

- **Author name/ID** assigned to each article
- **Assignment date** (when the brief was handed to the author)
- **Expected delivery date** (based on article complexity and author capacity)
- **Actual delivery date** (for performance tracking)
- **Revision count** (how many rounds of revision were needed)

Author assignment should balance workload across the team. No single author should be responsible for more than 30-40% of total output unless the team is very small. Distributing work across multiple authors also creates natural variation in writing style, which contributes to the organic, non-automated appearance of the content.

### Brief-to-Article Correlation Tracking

Every published article must be traceable back to its original content brief. This correlation serves multiple purposes:

- **Quality verification:** Compare the published article against its brief to ensure all required entities, attributes, headings, and internal links were included.
- **Gap identification:** If an article deviates significantly from its brief, identify whether the deviation was justified (author found better information) or problematic (author missed requirements).
- **Brief quality improvement:** Track which briefs produce the best articles and which produce articles requiring heavy revision. Use this data to improve brief quality over time.
- **Audit trail:** When conducting cross-page consistency checks, the brief-to-article correlation allows rapid identification of where conflicting information was introduced.

The tracking system should maintain a direct link between each brief document and its corresponding published article, along with a compliance score (percentage of brief requirements met in the final article).

### Managing 300-800+ Articles

At the scale of a full Semantic SEO campaign, the production system must handle hundreds of articles simultaneously. Key management principles:

**Batch processing:** Group articles into manageable batches of 20-40 for assignment, review, and publication. Never try to manage all 500+ articles as a single undifferentiated pool.

**Pipeline visibility:** At any given time, the production manager should be able to see exactly how many articles are in each status (Black, Orange, Yellow, Blue, Green) with a single glance at the tracking system.

**Bottleneck identification:** Monitor where articles accumulate. If 100 articles are Yellow (being written) but only 5 are Blue (written, awaiting publication), the bottleneck is author capacity. If 80 articles are Blue but only 10 are Green, the bottleneck is in the publishing schedule or review process.

**Velocity tracking:** Measure articles moving through each status transition per week:
- Orange to Yellow (briefs assigned)
- Yellow to Blue (articles completed)
- Blue to Green (articles published)

These velocity metrics reveal whether the campaign is on track for its 12-month rollout timeline.

### Lean Management Principles

Apply lean manufacturing principles to content production:

**Eliminate waste:** Every step in the process that does not directly contribute to producing a published, high-quality article is waste. Remove unnecessary approval layers, redundant review cycles, and bureaucratic handoffs.

**Pull system, not push:** Authors pull new briefs when they complete current assignments, rather than having briefs pushed to them on a fixed schedule. This prevents work-in-progress buildup and ensures authors are never idle or overwhelmed.

**Single-piece flow where possible:** Ideally, an author works on one article at a time from brief to completion before pulling the next. This minimizes context-switching and improves quality.

**Visual management:** The color-coded status system IS the visual management system. It should be immediately readable without requiring reports or analysis.

**Continuous improvement:** After each batch of articles is published, conduct a brief retrospective. What went smoothly? Where were the delays? What can be improved for the next batch?

### Bulk Optimization Markers

When working at scale, individual article optimization is impractical. Instead, use bulk optimization markers to flag categories of articles for specific optimization passes:

- **Marker: Internal Link Pass** -- Flag articles that need internal linking updated after new content is published
- **Marker: Schema Update** -- Flag articles that need schema markup added or updated
- **Marker: Entity Refresh** -- Flag articles where entity information may be outdated
- **Marker: Consolidation Candidate** -- Flag thin or underperforming articles that should be merged with stronger pages

These markers allow optimization work to be batched and assigned efficiently rather than handling articles one at a time.

### Communication Minimization

A critical lean principle applied to content production is minimizing communication overhead between authors and SEOs. Every question an author asks the SEO team represents a failure in the brief. The goal is to make briefs so complete and self-explanatory that authors can work independently without needing clarification.

Strategies for communication minimization:
- **Comprehensive briefs:** Include all necessary context, entity requirements, heading structures, word count targets, internal linking instructions, and tone guidance directly in the brief.
- **Brief templates:** Standardize brief format so authors know exactly where to find each piece of information.
- **FAQ document:** Maintain a living FAQ for common author questions. When a new question arises, answer it once and add it to the FAQ rather than answering it individually each time.
- **Office hours model:** Instead of ad-hoc communication throughout the day, establish a single daily or twice-weekly window for author questions. This batches communication and prevents constant interruption.
- **Revision instructions in-line:** When revisions are needed, mark them directly in the document with specific, actionable instructions. Never send separate emails or messages describing revisions in abstract terms.

The target is zero back-and-forth on 80%+ of articles. If more than 20% of articles require author-SEO communication beyond the initial brief handoff, the briefs need improvement.

---

## Implementation Guidance

When advising on production management:

1. **Establish the tracking system:** Recommend a spreadsheet, project management tool, or database that supports the five-color status system with columns for author assignment, dates, brief links, and article URLs.

2. **Set up the pipeline view:** Create a dashboard or summary view showing article counts by status, velocity metrics, and bottleneck indicators.

3. **Define batch sizes:** Based on team capacity and the 12-month rollout plan, determine how many articles should be in each batch moving through the pipeline.

4. **Create brief templates:** Standardize the content brief format to minimize author questions and ensure consistency across all briefs.

5. **Establish the pull system:** Set up a process where authors pull new briefs from the Orange queue when they complete current work, rather than having work pushed to them.

6. **Schedule retrospectives:** Plan regular reviews (bi-weekly or monthly) to assess pipeline health, identify bottlenecks, and implement improvements.

---

## Advanced Production Management Concepts

### Vastness-Depth-Momentum Production Planning
Production planning must explicitly balance all three pillars. For each production cycle, define: (1) Vastness target — how many new topical map nodes to cover, (2) Depth target — how comprehensive each content brief should be, (3) Momentum target — publication frequency. Adjust based on which pillar is weakest relative to competitors.

### Core-First Production Prioritization
Always complete core section content before outer section content. Core builds primary topical authority; outer propagates trust. Production queue: core root documents → core supporting articles → core supplementary content → outer root documents → outer supporting articles.

### Content Refresh in Production Calendar
Build 3-6 month refresh cycles into the production calendar. Mark the publication date of each piece and schedule refresh reviews. Refreshes should be treated as production items with the same quality standards as new content. A refresh can be a re-ranking trigger when timed strategically.

### Quality Gate in Production Pipeline
Every content piece must pass a quality gate before publication. Non-quality content harms quality content across the network. Better to delay publication than to publish content below the quality threshold. Include: relevance check (term weight patterns), responsiveness check (direct answers present), contextual consistency check (aligns with source context).

---

## Key Principles Summary

- Use a five-color status system: Black (not ready), Orange (brief ready), Yellow (being written), Blue (written not published), Green (published)
- Track author assignments with dates, delivery timelines, and revision counts
- Maintain brief-to-article correlation for quality verification and audit trails
- Manage large-scale campaigns in batches of 20-40 articles
- Apply lean principles: eliminate waste, use pull systems, maintain visual management
- Use bulk optimization markers for efficient at-scale updates
- Minimize communication between authors and SEOs through comprehensive briefs
- Target zero back-and-forth on 80%+ of articles
