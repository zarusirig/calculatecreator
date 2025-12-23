# Entity SEO and Internal Linking Strategy

## Purpose

Defines the entity relationship architecture and internal linking strategy to maximize topical authority, entity salience, and PageRank distribution across the TikTok Creator Calculator platform.

## Owner

**Primary:** SEO Strategist
**Collaborators:** Content Lead, Tech Lead (for implementation)

## Strategic Disciplines

- **Systems Analysis** — Entity graph architecture, link flow optimization
- **Pattern Recognition** — SERP entity patterns, competitor link structures
- **Structured Problem-Solving** — Link equity distribution, crawl budget optimization

---

## Entity SEO Principles (Koray's Framework)

### 1. Entity Definition & Disambiguation

Every primary entity must be:
- **Clearly defined** in first paragraph of hub page
- **Disambiguated** from similar entities (e.g., "TikTok Creator Fund" vs "TikTok Partner Program")
- **Contextualized** within broader creator economy ecosystem
- **Linked** to related entities with clear relationship descriptors

### 2. Entity Salience Optimization

**Goal:** Make Google recognize our pages as the authoritative source for target entities

**Methods:**
- **Repetition:** Primary entity mentioned 15–30 times per hub page
- **Prominence:** Entity in title, H1, first 100 words, URL
- **Co-occurrence:** Related entities mentioned together to build semantic relationships
- **Schema markup:** Structured data defining entities and relationships
- **External validation:** Citations from authoritative sources

### 3. Semantic Completeness

Cover all aspects of an entity:
- Definition
- How it works
- Requirements/eligibility
- Variations/types
- Related entities
- Historical context
- Future evolution
- User experiences
- Common questions

---

## Entity Hierarchy & Relationships

### Tier 1: Core Platform Entity

```
TikTok (Organization)
│
├─ Properties: Social media platform, video-sharing app, ByteDance product
├─ Related to: Creator economy, social media marketing, short-form video
└─ Authority sources: TikTok.com, TikTok Newsroom, TikTok for Business
```

### Tier 2: Monetization Entities

```
TikTok Monetization (Concept)
│
├── TikTok Creator Fund (Program)
│   ├── RPM (Metric)
│   ├── Creator Fund payments (Financial concept)
│   └── Creator Fund eligibility (Requirement)
│
├── TikTok Brand Deals (Commercial activity)
│   ├── TikTok Creator Marketplace (Platform)
│   ├── Influencer rates (Pricing)
│   └── Sponsored content (Content type)
│
├── TikTok LIVE (Feature)
│   ├── TikTok gifts (Virtual currency)
│   ├── TikTok diamonds (Virtual currency)
│   └── LIVE subscriptions (Membership)
│
├── TikTok Shop (E-commerce platform)
│   ├── TikTok affiliate program (Program)
│   ├── Product showcase (Feature)
│   └── LIVE shopping (Feature)
│
└── TikTok Series (Feature)
    └── Paywalled content (Content type)
```

### Tier 3: Performance Entities

```
TikTok Metrics (Category)
│
├── Engagement rate (Metric)
│   ├── Likes (Action)
│   ├── Comments (Action)
│   ├── Shares (Action)
│   └── Saves (Action)
│
├── Follower count (Metric)
├── Video views (Metric)
├── Watch time (Metric)
├── CPM (Metric)
└── Conversion rate (Metric)
```

### Tier 4: Strategy Entities

```
TikTok Growth Strategy (Concept)
│
├── TikTok algorithm (System)
│   ├── For You Page (Feature)
│   └── Content recommendation (Process)
│
├── Content strategy (Approach)
│   ├── Niche selection (Decision)
│   ├── Posting schedule (Tactic)
│   └── Trend participation (Tactic)
│
└── Audience building (Process)
    ├── Follower growth (Outcome)
    └── Community engagement (Activity)
```

---

## Entity Co-Occurrence Strategy

### Hub Page Entity Distribution

**Example: "TikTok Creator Fund" Hub Page**

| Entity | Mentions | Placement |
|--------|----------|-----------|
| TikTok Creator Fund (primary) | 25–35 | Title, H1, H2s, throughout body |
| TikTok monetization | 10–15 | Introduction, comparison sections |
| RPM (Revenue Per Mille) | 8–12 | Calculation sections, examples |
| Creator Fund earnings | 8–12 | Throughout, especially results |
| Video views | 6–10 | Formula explanations |
| Engagement rate | 5–8 | Factors affecting earnings |
| TikTok algorithm | 4–6 | How earnings are determined |
| Creator Fund eligibility | 5–8 | Requirements section |
| Creator Fund payments | 4–6 | Payment schedule section |

### Cross-Entity Linking Patterns

**When discussing TikTok Creator Fund, always link to:**
- TikTok monetization (parent concept)
- RPM calculator (related tool)
- Engagement rate calculator (related metric)
- TikTok brand deals (alternative monetization)
- Creator Fund calculator (primary tool)

**When discussing TikTok Brand Deals, always link to:**
- TikTok Creator Marketplace (platform)
- Engagement rate calculator (metric brands use)
- TikTok monetization (parent concept)
- Brand deal rate calculator (primary tool)
- Influencer marketing (broader concept)

---

## Internal Linking Architecture

### Hub-Spoke Model

```
[Hub: TikTok Monetization]
         ↓ (strong link)
    ┌────┴────┬─────────┬──────────┐
    ↓         ↓         ↓          ↓
[Creator   [Brand    [LIVE      [Shop
 Fund]     Deals]    Gifts]     Affiliate]
    ↓         ↓         ↓          ↓
 (spokes link back to hub + laterally to related spokes)
```

### Linking Rules

#### 1. Hub to Spoke Links
- **Frequency:** Hub links to every spoke at least once
- **Context:** Links appear in contextual paragraphs, not lists
- **Anchor text:** Descriptive, entity-focused (not "click here")
- **Placement:** Natural within content flow

**Example:**
> "The Creator Fund is just one monetization option. Many creators earn significantly more through [brand deals and sponsorships], especially once they understand how to [calculate their engagement rate] and set appropriate rates."

#### 2. Spoke to Hub Links
- **Frequency:** Every spoke links to hub in intro
- **Context:** Positioned as "part of broader topic"
- **Anchor text:** Hub entity name
- **Placement:** Early in content (first 200 words)

**Example:**
> "The TikTok Creator Fund is one of several [ways to make money on TikTok]. While it provides passive income based on video views, understanding all available [TikTok monetization options] helps creators maximize earnings."

#### 3. Lateral Spoke-to-Spoke Links
- **Frequency:** 3–5 lateral links per spoke page
- **Context:** Comparisons, alternatives, related concepts
- **Anchor text:** Related entity names
- **Placement:** Scattered throughout content

**Example (from Creator Fund page):**
> "Unlike the Creator Fund's passive model, [TikTok LIVE gifts] reward real-time interaction. Creators who excel at community engagement often earn more from [LIVE subscriptions] than from video views alone."

#### 4. Calculator to Content Links
- **Frequency:** Every calculator links to related guides
- **Context:** "Learn more" section below results
- **Anchor text:** Action-oriented + entity
- **Placement:** Immediately following calculator results

**Example (below calculator results):**
> **Learn More:**
> - [How to Increase Your Creator Fund Earnings]
> - [TikTok Creator Fund vs Brand Deals: Which Pays More?]
> - [Understanding Your TikTok RPM]

#### 5. Content to Calculator Links
- **Frequency:** 2–4 calculator links per content page
- **Context:** When numbers/calculations mentioned
- **Anchor text:** "Use our [Entity] calculator"
- **Placement:** Inline where relevant

**Example:**
> "Your potential earnings depend on your follower count, engagement rate, and niche. Use our [TikTok Creator Fund calculator] to estimate your monthly revenue."

---

## URL Structure for Entity Clarity

### Pattern: `/[entity-type]/[entity-name]/`

**Calculators:**
- `/calculators/tiktok-creator-fund/`
- `/calculators/tiktok-engagement-rate/`
- `/calculators/tiktok-brand-deal-rate/`
- `/calculators/tiktok-live-gifts/`

**Guides (Hub Pages):**
- `/guides/tiktok-creator-fund/`
- `/guides/tiktok-brand-deals/`
- `/guides/tiktok-live-monetization/`
- `/guides/tiktok-shop-affiliate/`

**Comparison Pages:**
- `/compare/tiktok-vs-youtube-earnings/`
- `/compare/creator-fund-vs-brand-deals/`

**Data/Reference:**
- `/data/tiktok-rpm-by-niche/`
- `/data/brand-deal-rates-2025/`

**Tools:**
- `/tools/engagement-rate-calculator/`
- `/tools/rpm-calculator/`

---

## Anchor Text Strategy

### Exact Match (Use Sparingly: 10–15% of links)
- "TikTok Creator Fund"
- "TikTok engagement rate calculator"
- "TikTok brand deal rates"

### Partial Match (Primary: 40–50% of links)
- "how the Creator Fund works"
- "calculate your engagement rate"
- "typical brand deal rates for creators"
- "TikTok LIVE earnings potential"

### Branded (15–20% of links)
- "our Creator Fund calculator"
- "use our engagement calculator"
- "see our complete guide"

### Natural/Generic (20–30% of links)
- "learn more about this monetization option"
- "explore advanced strategies"
- "read the full guide"
- "see detailed breakdown"

### Question-Based (5–10% of links)
- "how much can you earn from TikTok?"
- "what's a good engagement rate?"
- "when should you negotiate higher rates?"

---

## Link Velocity & Distribution

### Priority Pages (Calculator + Core Hubs)

**Target Internal Links Pointing In:**
- Homepage: 0 inbound (it's the source)
- Calculator pages: 15–25 inbound links
- Hub pages: 20–35 inbound links
- Spoke pages: 8–15 inbound links
- Data/reference: 10–20 inbound links

### Link Building Schedule

**Phase 1 (Launch):**
- 8 calculators live
- 12 content pages live
- 100+ internal links total
- Avg 8–12 links per page

**Phase 2 (Q2 2025):**
- 15 calculators live
- 30 content pages live
- 300+ internal links total
- Avg 10–15 links per page

**Phase 3 (Q3-Q4 2025):**
- 20 calculators live
- 50 content pages live
- 600+ internal links total
- Avg 12–18 links per page

**Phase 4 (2026):**
- 25+ calculators
- 80+ content pages
- 1,200+ internal links
- Complete entity graph coverage

---

## Schema Markup for Entity Definition

### Organization Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TikTok Creator Calculator",
  "url": "https://[domain].com",
  "description": "Authoritative earnings calculators and guides for TikTok creators",
  "sameAs": [
    "https://twitter.com/[handle]",
    "https://www.linkedin.com/company/[handle]"
  ]
}
```

### Article Schema (Hub Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TikTok Creator Fund: Complete Guide",
  "about": {
    "@type": "Thing",
    "name": "TikTok Creator Fund",
    "description": "Monetization program by TikTok that pays creators based on video views"
  },
  "mentions": [
    {
      "@type": "Thing",
      "name": "Revenue Per Mille",
      "alternateName": "RPM"
    },
    {
      "@type": "Thing",
      "name": "TikTok engagement rate"
    }
  ],
  "author": {
    "@type": "Organization",
    "name": "TikTok Creator Calculator"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15"
}
```

### WebApplication Schema (Calculator Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "TikTok Creator Fund Calculator",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": "Calculate TikTok Creator Fund earnings based on views and engagement"
}
```

### FAQ Schema (All Pages with Q&A)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does TikTok pay per 1,000 views?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TikTok Creator Fund pays between $0.02–$0.04 per 1,000 views..."
      }
    }
  ]
}
```

### HowTo Schema (Tutorial Content)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate TikTok Engagement Rate",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Gather metrics",
      "text": "Collect likes, comments, shares, and follower count from TikTok analytics"
    }
  ]
}
```

---

## Breadcrumb Navigation for Entity Hierarchy

**Pattern:**
Home > [Category] > [Subcategory] > [Page]

**Examples:**
- Home > Calculators > TikTok Creator Fund Calculator
- Home > Guides > Monetization > TikTok Creator Fund Guide
- Home > Compare > TikTok vs YouTube Earnings
- Home > Data > RPM Rates by Niche

**Schema Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[domain].com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calculators",
      "item": "https://[domain].com/calculators"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "TikTok Creator Fund Calculator"
    }
  ]
}
```

---

## Contextual Link Placement Examples

### Example 1: Comparison Context
> "While the Creator Fund provides consistent passive income, [TikTok brand deals] typically pay 5–10× more per video. However, brand deals require higher follower counts and stronger [engagement rates]. Use our [brand deal calculator] to estimate what you could charge."

**Links:**
- TikTok brand deals → /guides/tiktok-brand-deals/
- engagement rates → /guides/tiktok-engagement-rate/
- brand deal calculator → /calculators/tiktok-brand-deal-rate/

### Example 2: Sequential Learning Context
> "Before joining the Creator Fund, ensure you meet the [eligibility requirements]: 10,000 followers, 100,000 video views in the last 30 days, and 18+ years old. Once eligible, understanding [how RPM is calculated] helps set realistic earning expectations."

**Links:**
- eligibility requirements → /guides/tiktok-creator-fund/#eligibility
- how RPM is calculated → /guides/tiktok-rpm/

### Example 3: Alternative Strategy Context
> "If your Creator Fund earnings are disappointing, consider focusing on [TikTok LIVE]. Creators with strong community engagement often earn more from [LIVE gifts and subscriptions] than from video views. [Calculate your LIVE earning potential] to compare."

**Links:**
- TikTok LIVE → /guides/tiktok-live-monetization/
- LIVE gifts and subscriptions → /guides/tiktok-live-gifts/
- Calculate your LIVE earning potential → /calculators/tiktok-live-gifts/

---

## Internal Link Audit Process

### Monthly Checks
- [ ] Orphan page detection (pages with 0 inbound links)
- [ ] Broken internal links
- [ ] Link equity distribution (are priority pages receiving enough links?)
- [ ] Anchor text diversity (avoid over-optimization)

### Quarterly Reviews
- [ ] Entity co-occurrence analysis (are related entities properly linked?)
- [ ] Hub-spoke structure integrity (all spokes linked to hub?)
- [ ] New content integration (are new pages properly linked?)
- [ ] Competitor link structure analysis (what are we missing?)

### Tools
- Screaming Frog (crawl structure)
- Ahrefs Site Explorer (internal PageRank)
- Google Search Console (internal search performance)
- Custom scripts (entity co-occurrence tracking)

---

## Link Equity Flow Strategy

### PageRank Sculpting Approach

**Goal:** Flow link equity to high-priority pages (calculators and hub pages)

**Methods:**
1. **Homepage links:** Direct links from homepage to top 8 calculators and top 3 hub pages
2. **Navigation menu:** Persistent links to primary calculators and guides
3. **Footer links:** Category pages that aggregate related content
4. **Sidebar/Related:** Contextual suggestions on every page
5. **Content links:** Strategic inline links as described above

### Link Flow Diagram

```
Homepage (High Authority)
    ↓ (strong links)
[Top 8 Calculators] + [Top 3 Hub Pages]
    ↓ (medium links)
[Supporting Content Pages] + [Data Pages]
    ↓ (light links)
[Long-tail Content] + [Niche Guides]
```

**Rationale:**
- Calculators = transactional intent = conversion pages = need authority
- Hub pages = informational intent = ranking pages = need authority
- Supporting content = depth signals = need indexing but not max equity

---

## External Linking Strategy (for E-E-A-T)

### When to Link Externally

1. **Data Sources:** Always cite sources for statistics
   - Example: "According to TikTok's Creator Portal..."
   - Link to official TikTok pages

2. **Authority Signals:** Link to recognized creator economy publications
   - Example: "As reported by Social Media Today..."
   - Link to reputable industry sources

3. **Tool References:** Link to official TikTok help pages
   - Example: "Learn more about TikTok Creator Marketplace eligibility on TikTok's official guide"

4. **Related Concepts:** Link to Wikipedia or authoritative encyclopedic sources for entity disambiguation
   - Example: "Revenue Per Mille (RPM) is a standard advertising metric..."

### External Link Guidelines

- **Quality over quantity:** 2–5 authoritative external links per page
- **rel attributes:** Use `rel="nofollow"` only for untrusted sources
- **Target:** `target="_blank"` for external links to keep users on site
- **Context:** External links should add value, not distract
- **Authority:** Link only to domains with high E-E-A-T signals

---

## Acceptance Criteria

✅ **Entity Hierarchy Defined:** All Tier 1–4 entities mapped with relationships
✅ **Hub-Spoke Structure:** Clear architecture for all 10 topical clusters
✅ **Linking Rules:** Specific guidelines for hub-to-spoke, spoke-to-hub, lateral links
✅ **Anchor Text Strategy:** Distribution percentages and examples provided
✅ **Schema Markup:** Templates for all page types
✅ **URL Structure:** SEO-friendly patterns defined
✅ **Link Flow Optimization:** PageRank sculpting strategy documented
✅ **Audit Process:** Monthly/quarterly internal link maintenance plan

---

## Handoff Checklist

- [ ] Tech Lead understands URL structure requirements
- [ ] Developers have schema markup templates for each page type
- [ ] Content team has anchor text guidelines
- [ ] SEO team has access to link audit tools
- [ ] Designers understand breadcrumb navigation requirements
- [ ] All team members understand entity co-occurrence goals
- [ ] Link building integrated into content publication workflow

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
**Next Review:** 2025-Q2 (Post-Launch Link Equity Analysis)
