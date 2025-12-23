# Prompt 02: FAQ Page Creation (CRITICAL)

## Objective
Transform the empty FAQ page into a comprehensive resource with 35-40 answered questions. This is a critical AdSense blocker—currently the page shows only disclaimers.

## Priority
🔴 **CRITICAL** - Do this first. An empty FAQ page is an immediate rejection signal.

## Prompt

```
The FAQ page at /faq is currently empty (only shows disclaimers). This is causing AdSense rejection. 

Create a comprehensive FAQ page with 35-40 questions organized into these 6 categories:

## Category 1: About This Site (6 questions)
Create questions and detailed answers (50-100 words each) covering:
- Who created CalculateCreator.com and why
- How accurate are the calculator estimates
- Where does the data come from / methodology
- Is this site affiliated with TikTok (no - include disclaimer)
- How often is data updated
- How to contact the team / report issues

## Category 2: Using Our Calculators (6 questions)
- How do I find my TikTok analytics data to input
- Why is my calculated result different from actual earnings
- Which calculator should I use first as a new creator
- Can I trust these estimates for business decisions
- How do the calculators handle different currencies
- What if my niche isn't listed

## Category 3: TikTok Creator Fund (6 questions)
- What is the TikTok Creator Fund and how does it work
- What are the eligibility requirements (followers, views, age, region)
- How much does Creator Fund actually pay per 1,000 views
- Why are Creator Fund payments so low compared to YouTube
- How long does it take to get approved
- When and how does TikTok pay creators

## Category 4: Brand Deals & Sponsorships (6 questions)
- How much should I charge for a sponsored TikTok post
- When do brands start reaching out to creators
- How do I find brand deal opportunities
- What's the difference between gifted products and paid sponsorships
- How do I negotiate higher rates
- What should be in a brand deal contract

## Category 5: TikTok LIVE & Gifts (6 questions)
- How do TikTok coins convert to real money
- What percentage does TikTok take from gifts
- What are the requirements to go LIVE on TikTok
- What are the most valuable TikTok gifts
- Best times and strategies for LIVE streaming
- How do diamonds convert to cash withdrawal

## Category 6: TikTok Shop & Affiliate (5 questions)
- How does TikTok Shop affiliate work
- What commission rates can creators earn
- Requirements to join TikTok Shop as a creator
- Best product categories for TikTok sales
- How to add products to TikTok videos

## Technical Requirements
- Use existing page styling and components
- Implement accordion/collapsible FAQ sections
- Add FAQ schema markup (JSON-LD) for SEO
- Include internal links to relevant calculators and guides within answers
- Make it mobile responsive
- Add a search/filter function if feasible

## Content Guidelines
- Each answer should be 50-100 words
- Be specific with numbers (e.g., "$0.02-$0.04 per 1,000 views" not "a few cents")
- Link to relevant calculator or guide in each answer where applicable
- Use the same tone as existing guides (professional but approachable)
- Source facts from existing guide content for consistency

## Schema Markup Example
Include FAQ schema for Google rich results:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Question text here",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Answer text here"
    }
  }]
}
```

Please create the complete FAQ page matching the existing site architecture and styling.
```

## Expected Output
- Complete FAQ page component/file
- 35-40 questions with detailed answers
- FAQ schema markup implemented
- Styled to match existing site
- Internal links to relevant content

## Validation Checklist
- [ ] All 6 categories present
- [ ] 35-40 total questions
- [ ] Each answer is 50-100 words
- [ ] FAQ schema markup added
- [ ] Internal links included
- [ ] Mobile responsive
- [ ] Matches site styling

## Time Estimate
45-60 minutes

## Next Step
Proceed to Prompt 03 (Author Attribution Component)
