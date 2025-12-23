# KPI Dashboards and Reporting Routines

## Purpose

Defines key performance indicators, dashboard specifications, alert thresholds, and reporting routines to measure platform success and identify optimization opportunities.

## Owner

**Primary:** Product Manager
**Collaborators:** Analytics Engineer, Marketing Lead

## Strategic Disciplines

- **Systems Analysis** — Metrics interdependencies, leading vs lagging indicators
- **Structured Problem-Solving** — Data-driven decision making
- **Pattern Recognition** — Trends, anomalies, seasonal patterns

---

## Primary KPIs by Category

### Traffic & Acquisition

| KPI | Target (V1) | Excellent | Measurement |
|-----|-------------|-----------|-------------|
| **Monthly Organic Visitors** | 10K | 20K+ | GA4 Users (Organic) |
| **Organic Traffic Growth MoM** | 10% | 20%+ | GA4 Comparison |
| **Branded Search Traffic** | 5% of total | 10%+ | GA4 Source/Medium |
| **Direct Traffic** | 10% of total | 20%+ | GA4 Source/Medium |
| **Referring Domains** | 20 | 50+ | Ahrefs/Semrush |

### SEO Performance

| KPI | Target (V1) | Excellent | Measurement |
|-----|-------------|-----------|-------------|
| **Keywords Ranking Top 10** | 50 | 200+ | Ahrefs/Semrush |
| **Featured Snippets Owned** | 3 | 10+ | Google Search Console |
| **Avg Keyword Position** | 15 | <10 | Ahrefs |
| **Organic Impressions** | 100K/month | 500K+ | GSC |
| **Organic CTR** | 3% | 5%+ | GSC |

### Engagement

| KPI | Target (V1) | Excellent | Measurement |
|-----|-------------|-----------|-------------|
| **Avg Session Duration** | 2 min | 3+ min | GA4 Engagement Time |
| **Bounce Rate** | <40% | <30% | GA4 Bounce Rate |
| **Pages per Session** | 2.5 | 3.5+ | GA4 Pages/Session |
| **Scroll Depth (Avg)** | 50% | 70%+ | GA4 Scroll Event |
| **Return Visitor Rate** | 20% | 30%+ | GA4 New vs Returning |

### Conversions

| KPI | Target (V1) | Excellent | Measurement |
|-----|-------------|-----------|-------------|
| **Calculations Performed** | 5K/month | 15K+ | GA4 Custom Event |
| **Calculator Completion Rate** | 60% | 80%+ | GA4 Funnel |
| **Related Content Clicks** | 30% of users | 50%+ | GA4 Event |
| **Internal Link CTR** | 5% | 10%+ | GA4 Event |

### Performance

| KPI | Target (V1) | Excellent | Measurement |
|-----|-------------|-----------|-------------|
| **Lighthouse Performance** | 90 | 95+ | Lighthouse CI |
| **LCP** | <1.5s | <1.0s | GA4 Web Vitals |
| **CLS** | <0.1 | <0.05 | GA4 Web Vitals |
| **Core Web Vitals Pass Rate** | 90% | 100% | GSC CWV Report |

---

## Dashboard 1: Executive Summary

**Audience:** CEO, Product Manager
**Update Frequency:** Daily
**Platform:** Looker Studio (Google Data Studio)

### Metrics

**Top Row (Hero Metrics):**
- Monthly Organic Visitors (current month vs previous)
- Calculations Performed (MTD vs last month)
- Keywords Ranking Top 10 (current vs last week)
- Avg Session Duration (7-day rolling avg)

**Traffic Sources (Pie Chart):**
- Organic Search
- Direct
- Referral
- Social
- Other

**Growth Trends (Line Chart, Last 90 Days):**
- Organic Visitors (daily)
- Calculations Performed (daily)

**Top Performing Pages (Table):**
- Page URL
- Page Views
- Avg Time on Page
- Bounce Rate
- Calculations (if calculator page)

**Recent Wins:**
- New keywords ranking top 10 (last 7 days)
- New referring domains (last 7 days)
- Performance improvements (LCP, CLS)

---

## Dashboard 2: SEO Performance

**Audience:** SEO Strategist, Content Lead
**Update Frequency:** Weekly
**Platform:** Ahrefs + Looker Studio

### Metrics

**Keyword Rankings:**
- Total keywords ranking
- Top 3 positions
- Top 10 positions
- Top 20 positions
- Position distribution (chart)

**Organic Traffic:**
- Monthly visitors (trend)
- Traffic by page type (calculator, guide, comparison, data)
- Traffic by keyword cluster (monetization, engagement, growth)

**SERP Features:**
- Featured snippets owned
- People Also Ask appearances
- Video carousels (if applicable)

**Backlinks:**
- Total referring domains
- New backlinks (last 30 days)
- Lost backlinks (last 30 days)
- Top linking pages

**Competitor Analysis:**
- Our traffic vs calculatecreator.com
- Our keywords vs competitors
- SERP visibility score

---

## Dashboard 3: Calculator Performance

**Audience:** Product Manager, Developers
**Update Frequency:** Daily
**Platform:** GA4 + Looker Studio

### Metrics

**Calculator Usage:**
- Calculations by calculator type (bar chart)
- Calculation completion rate (funnel)
- Avg time to complete calculation
- Unique users per calculator

**Input Analysis:**
- Most common input values (distribution)
- Avg follower count entered
- Avg engagement rate entered
- Niche selection (pie chart)

**Results Analysis:**
- Avg earnings estimate (Creator Fund)
- Avg engagement rate (Engagement calculator)
- Result interpretation distribution (above/avg/below)

**User Flow:**
- Calculator page → Related calculator (Sankey diagram)
- Calculator page → Related guide

---

## Dashboard 4: Content Performance

**Audience:** Content Lead, Writers
**Update Frequency:** Weekly
**Platform:** GA4 + Looker Studio

### Metrics

**Page Performance:**
- Page views by content type
- Avg time on page
- Scroll depth
- Internal link clicks

**Guide Analysis:**
- Top performing guides (views, time, engagement)
- Underperforming guides (candidates for refresh)
- FAQ expansion rate
- Table of contents click rate

**Content Gaps:**
- High-impression, low-CTR keywords (GSC)
- High-traffic, high-bounce pages
- Pages with no internal links

---

## Dashboard 5: Technical Performance

**Audience:** Tech Lead, DevOps
**Update Frequency:** Continuous (real-time)
**Platform:** Firebase Console + Lighthouse CI

### Metrics

**Core Web Vitals:**
- LCP (75th percentile)
- FID (75th percentile)
- CLS (75th percentile)
- Pass rate (% of page loads)

**Page Speed:**
- Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- Time to Interactive
- First Contentful Paint

**Errors:**
- JavaScript errors (count, type)
- 404 errors (GSC)
- Server errors (Firebase logs)

**Resource Usage:**
- Firebase Function invocations
- CDN bandwidth
- Build times

---

## Reporting Routines

### Daily Stand-Up (Async)

**Audience:** Full team
**Format:** Slack/email

**Metrics Shared:**
- Organic visitors (yesterday vs avg)
- Calculations performed (yesterday)
- New backlinks (yesterday)
- Performance alerts (if any)

### Weekly Review (Meeting)

**Audience:** Product, SEO, Content, Dev
**Duration:** 30 minutes
**Format:** Video call with dashboard screen share

**Agenda:**
1. Review weekly KPIs vs targets
2. Discuss wins (new rankings, traffic spikes)
3. Identify issues (drops, errors, underperformance)
4. Action items for next week

**Deliverable:** Weekly report email to stakeholders

### Monthly Business Review

**Audience:** Leadership, full team
**Duration:** 60 minutes
**Format:** Presentation

**Agenda:**
1. Executive summary (traffic, conversions, revenue if applicable)
2. Deep dive: One focus area (e.g., "Calculator engagement analysis")
3. Competitive landscape update
4. Roadmap progress review
5. Next month priorities

**Deliverable:** Slide deck + written summary

### Quarterly Strategy Review

**Audience:** Leadership
**Duration:** 90 minutes
**Format:** Working session

**Agenda:**
1. Review quarterly OKRs
2. Analyze vs original V1 goals
3. Competitive positioning assessment
4. Adjust roadmap based on data
5. Set next quarter OKRs

---

## Alert Thresholds

### Critical Alerts (Immediate Action)

**Traffic:**
- Organic traffic drops >30% day-over-day
- All traffic drops to near-zero (site down?)

**Performance:**
- Core Web Vitals pass rate <50%
- LCP >4s
- Lighthouse Performance score <60

**Errors:**
- JavaScript error rate >5%
- 404 error spike (>100/day)
- 5xx server errors

**Action:** Slack/email alert to dev team immediately

### Warning Alerts (Review Within 24h)

**Traffic:**
- Organic traffic drops 15–30% day-over-day
- Bounce rate increases >10% week-over-week

**Rankings:**
- Primary keyword drops >5 positions
- Lose featured snippet

**Performance:**
- Core Web Vitals pass rate 50–75%
- LCP 2.5–4s

**Action:** Email alert to responsible team member

### Info Alerts (Weekly Review)

**Traffic:**
- Organic traffic flat (0% growth) for 2+ weeks
- Referral traffic spike (potential backlink opportunity)

**Rankings:**
- New keyword enters top 20
- Competitor outranks us on target keyword

---

## Data Sources Integration

### GA4
- **API:** Google Analytics Data API
- **Refresh:** Real-time for dashboards
- **Retention:** 14 months (GA4 standard)

### Google Search Console
- **API:** Search Console API
- **Refresh:** Daily (GSC updates with 2-day lag)
- **Retention:** 16 months

### Ahrefs / Semrush
- **API:** Ahrefs API or CSV export
- **Refresh:** Weekly
- **Retention:** Historical data available

### Firebase
- **Console:** Firebase Console
- **Logs:** Cloud Logging
- **Refresh:** Real-time

### Lighthouse CI
- **Storage:** GitHub Actions artifacts
- **Refresh:** Every deploy
- **Retention:** 90 days

---

## Acceptance Criteria

✅ **KPIs Defined:** Clear targets for all primary metrics
✅ **Dashboards Specified:** 5 dashboards with metrics and audiences
✅ **Reporting Routines:** Daily, weekly, monthly, quarterly cadences
✅ **Alert Thresholds:** Critical, warning, info levels defined
✅ **Data Sources:** All integrations documented

---

## Handoff Checklist

- [ ] GA4 dashboards created in Looker Studio
- [ ] Ahrefs/Semrush API access configured
- [ ] Alert thresholds configured (email/Slack)
- [ ] Weekly report template created
- [ ] Monthly presentation template created
- [ ] Team trained on accessing dashboards
- [ ] Reporting routines scheduled (calendar invites)

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
