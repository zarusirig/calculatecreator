import React from 'react';
import type { Metadata } from 'next';
import { Handshake, XCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { BrandDealRateCalculatorWidget } from '@/components/calculators/brand-deal-rate/CalculatorWidget';

export const metadata: Metadata = {
  title: 'TikTok Brand Deal Rate Calculator: How Much to Charge (2026)',
  description: 'Calculate your TikTok brand deal rates based on followers, engagement, and niche. Know your worth and charge the right price for sponsorships.',
  keywords: ['brand deal calculator', 'tiktok sponsorship rates', 'influencer rate calculator', 'how much to charge brand deals', 'creator pricing'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/brand-deal-rate/',
  },
};

const faqData = [
  {
    question: 'How much should I charge for a TikTok brand deal?',
    answer: 'Brand deal rates vary by follower count and engagement. A general rule: charge $100-$150 per 10K followers for accounts with 5%+ engagement. For 50K followers with 5% engagement, expect $500-$750 per post. High-engagement accounts (8%+) can charge 50-100% more.'
  },
  {
    question: 'What factors affect brand deal pricing?',
    answer: 'Five key factors: (1) Follower count, (2) Engagement rate (most important), (3) Content niche (finance/tech pay more), (4) Deliverable type (Spark Ads cost 30-50% more), (5) Content rights (exclusivity increases price 25-50%).'
  },
  {
    question: 'Should I charge differently for different niches?',
    answer: 'Yes. Finance, tech, and B2B niches typically pay 30-50% more than entertainment or lifestyle. Beauty and fashion pay well for product-focused content. Gaming and comedy often have lower rates due to market saturation.'
  },
  {
    question: 'What is a Spark Ad and why does it cost more?',
    answer: 'A Spark Ad allows brands to run your organic post as a paid advertisement using your account. It costs 30-50% more because: (1) the brand gets advertising capabilities, (2) your audience sees it as a sponsored ad, (3) it provides brands with detailed analytics.'
  },
  {
    question: 'How do I negotiate brand deals as a small creator?',
    answer: 'Start with your rate calculator result, then: (1) Ask for their budget first, (2) Emphasize your engagement rate over follower count, (3) Offer package deals (3 posts for 20% discount), (4) Be willing to trade services for portfolio building, (5) Always get contracts in writing.'
  },
];

export default function BrandDealRateCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-accent-50 py-8">
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Brand Deal Rate Calculator', href: '/calculators/brand-deal-rate' },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white mb-6">
            <Handshake size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Brand Deal Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how much you should charge brands for sponsored content based on your follower count, engagement rate, niche, and deliverable type.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <BrandDealRateCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Brand Deal Rate Guidelines
              </h2>
              <div className="space-y-3">
                {[
                  { tier: 'Nano (< 10K)', range: '$50-$200', note: 'Entry-level rates' },
                  { tier: 'Micro (10K-50K)', range: '$200-$1,000', note: 'Growing influence' },
                  { tier: 'Mid (50K-500K)', range: '$1,000-$10,000', note: 'Established creators' },
                  { tier: 'Macro (500K-1M)', range: '$10,000-$50,000', note: 'Major influence' },
                  { tier: 'Mega (1M+)', range: '$50,000-$200,000+', note: 'Celebrity tier' },
                ].map((item) => (
                  <div key={item.tier} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-neutral-900">{item.tier}</p>
                      <p className="text-body-sm text-neutral-600">{item.note}</p>
                    </div>
                    <span className="font-semibold text-primary-600">{item.range}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Understanding Brand Deal Pricing
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Brand deal pricing is both an art and a science. While follower count provides a baseline, several factors significantly impact what you can charge:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">Engagement Rate (Most Important)</h3>
                    <p className="text-body-sm">
                      A creator with 50K followers and 8% engagement (4,000 engaged users) is more valuable than someone with 100K followers and 2% engagement (2,000 engaged users). Brands pay for attention, not just reach. High engagement typically commands 30-100% premium rates.
                    </p>
                  </div>
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">Content Niche</h3>
                    <p className="text-body-sm">
                      Finance and B2B creators charge 40-80% more than entertainment creators because business products have higher margins. A 100K finance creator might charge $5,000 per post while a 100K comedy creator charges $2,500 for the same deliverable.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">Audience Demographics</h3>
                    <p className="text-body-sm">
                      Creators with audiences in high-income countries (US, UK, Canada, Australia) command premium rates. An audience of 25-45 year olds with purchasing power is worth more than teenagers. Share audience insights to justify higher rates.
                    </p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">Usage Rights & Exclusivity</h3>
                    <p className="text-body-sm">
                      Standard rates cover 30-90 day usage rights. Charge 25-50% more for extended usage (6-12 months), 50-100% more for paid ad whitelisting, and 100-200% more for full exclusivity clauses preventing competitor partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Negotiation Tips
              </h2>
              <div className="space-y-3">
                {[
                  'Start 20-30% higher than your target rate to leave room for negotiation',
                  'Showcase your engagement rate if it\'s above 5%',
                  'Provide case studies or testimonials from past brand partnerships',
                  'Offer package deals for multiple videos at a discounted rate',
                  'Never accept less than your minimum—know your worth',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-md text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Step-by-Step Guide: Calculating Your Brand Deal Rate
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Follow this proven formula to determine what you should charge for sponsored content:
              </p>
              <ol className="list-decimal list-inside space-y-4 ml-4">
                <li>
                  <strong>Find Your Follower Tier:</strong> Identify your tier (Nano: &lt;10K, Micro: 10K-50K, Mid: 50K-500K, Macro: 500K-1M, Mega: 1M+). This gives you a baseline rate range.
                </li>
                <li>
                  <strong>Calculate Your Engagement Rate:</strong> Go to TikTok Analytics and calculate: (Likes + Comments + Shares) / Followers × 100. An engagement rate above 5% is excellent and justifies premium pricing.
                </li>
                <li>
                  <strong>Apply Niche Multiplier:</strong> High-value niches (finance, tech, B2B) multiply your rate by 1.3-1.5×. Mass-market niches (entertainment, comedy) use 1.0×. Beauty and fashion fall in between at 1.2-1.4×.
                </li>
                <li>
                  <strong>Factor in Deliverable Type:</strong> Standard in-feed videos are your base rate. Spark Ads cost 30-50% more. Product showcases add 20%. LIVE mentions typically cost 30% less due to lower production value.
                </li>
                <li>
                  <strong>Add Usage Rights Premium:</strong> 30-90 days standard. 6+ months adds 25-50%. Paid advertising rights add 50-100%. Full exclusivity (no competitors for 6-12 months) doubles or triples your rate.
                </li>
                <li>
                  <strong>Calculate Range:</strong> Your minimum rate is your baseline × all multipliers. Your maximum is 1.5-2× your minimum. This gives you negotiation room while protecting your floor.
                </li>
              </ol>
              <div className="p-4 bg-success-50 border border-success-200 rounded-lg mt-4">
                <p className="text-body-sm">
                  <strong>Example Calculation:</strong> 75K followers (baseline: $1,500), 7% engagement (1.3× multiplier), beauty niche (1.3×), Spark Ad (1.4×) = $1,500 × 1.3 × 1.3 × 1.4 = $3,542 minimum, $7,084 maximum.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Brand Deal Calculation Examples
            </h2>
            <div className="space-y-4">
              {[
                {
                  profile: 'Micro Fitness Creator',
                  stats: '25K followers, 6.5% engagement, fitness niche',
                  deliverable: 'In-feed workout video with product',
                  calculation: 'Base: $500 × Engagement (1.2) × Niche (1.2) = $720',
                  result: 'Rate Range: $720 - $1,080',
                  notes: 'Could charge $900-$1,000 for Spark Ad rights'
                },
                {
                  profile: 'Mid-Tier Finance Creator',
                  stats: '150K followers, 4.2% engagement, finance niche',
                  deliverable: 'Educational video about financial product',
                  calculation: 'Base: $3,000 × Engagement (1.1) × Niche (1.5) = $4,950',
                  result: 'Rate Range: $4,950 - $9,900',
                  notes: 'Finance niche premium justifies high-end pricing'
                },
                {
                  profile: 'Nano Beauty Influencer',
                  stats: '8K followers, 9.2% engagement, beauty niche',
                  deliverable: 'Makeup tutorial featuring brand products',
                  calculation: 'Base: $100 × Engagement (1.5) × Niche (1.4) = $210',
                  result: 'Rate Range: $210 - $315',
                  notes: 'High engagement compensates for smaller audience'
                },
                {
                  profile: 'Macro Lifestyle Creator',
                  stats: '750K followers, 3.8% engagement, lifestyle niche',
                  deliverable: 'Product showcase with 6-month usage rights',
                  calculation: 'Base: $20,000 × Engagement (1.0) × Extended Rights (1.4) = $28,000',
                  result: 'Rate Range: $28,000 - $42,000',
                  notes: 'Extended usage rights significantly increase value'
                }
              ].map((example, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-neutral-50 to-accent-50 border border-neutral-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-lg">{example.profile}</h3>
                      <p className="text-body-sm text-neutral-600">{example.stats}</p>
                    </div>
                    <span className="text-heading-md font-bold text-primary-600">{example.result.split(': ')[1]}</span>
                  </div>
                  <div className="space-y-1 text-body-sm">
                    <p className="text-neutral-700"><strong>Deliverable:</strong> {example.deliverable}</p>
                    <p className="text-neutral-700"><strong>Calculation:</strong> {example.calculation}</p>
                    <p className="text-info-700"><strong>Note:</strong> {example.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Advanced Negotiation Strategies for Brand Deals
            </h2>
            <div className="space-y-4">
              {[
                {
                  strategy: 'Always Ask for Their Budget First',
                  explanation: 'When brands reach out, ask "What\'s your budget for this campaign?" before sharing your rate. If they say $5,000 and you were going to charge $2,000, you just increased your earnings by 150%. If their budget is too low, you can decline early without wasting time.',
                  tier: 'All Creators'
                },
                {
                  strategy: 'Create Tiered Packages',
                  explanation: 'Offer Bronze ($X for 1 video), Silver ($2.5X for 3 videos), Gold ($4X for 5 videos + Story mentions). Brands love options, and package deals increase your total contract value even with per-video discounts.',
                  tier: 'Micro+'
                },
                {
                  strategy: 'Charge Per Deliverable, Not Per Campaign',
                  explanation: 'If a brand wants 3 TikToks, 2 Instagram Reels, and 5 Stories, price each separately. This prevents scope creep ("Can you also do a YouTube Short?") and ensures fair compensation for all work.',
                  tier: 'All Creators'
                },
                {
                  strategy: 'Itemize Usage Rights',
                  explanation: 'Base rate = 30 days organic use only. Extended timeline (+25%), paid ads (+75%), website use (+25%), full exclusivity (+150%). Present as add-ons so brands see the value of each right.',
                  tier: 'Mid-Tier+'
                },
                {
                  strategy: 'Use Performance Bonuses',
                  explanation: 'Negotiate bonus payments for exceeding benchmarks: Base rate + 20% if video hits 100K views, + 40% if it hits 500K. This shows confidence in your content and can significantly boost earnings.',
                  tier: 'Established Creators'
                },
                {
                  strategy: 'Offer Affiliate Commission Alternative',
                  explanation: 'For hesitant brands: "How about $1,000 upfront + 10% commission on sales?" This lowers their risk and can earn you more if the product converts well. Get a unique tracking code.',
                  tier: 'Nano/Micro'
                },
                {
                  strategy: 'Leverage Competing Offers',
                  explanation: 'If you have multiple brand inquiries, mention it (without specifics): "I have another offer for next week, but I prefer your brand. Can we finalize by Friday?" Creates urgency and strengthens your position.',
                  tier: 'All Creators'
                },
                {
                  strategy: 'Build a Media Kit',
                  explanation: 'Professional PDF with your stats, past collaborations, audience demographics, average views, and rate sheet. Brands take you more seriously, and you can charge 20-30% more than creators without one.',
                  tier: 'All Creators'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-accent-500">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-neutral-900">{item.strategy}</h3>
                    <span className="text-label-sm text-accent-600 bg-accent-100 px-2 py-1 rounded">{item.tier}</span>
                  </div>
                  <p className="text-body-sm text-neutral-700">{item.explanation}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Common Brand Deal Mistakes and How to Avoid Them
            </h2>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Undercharging Out of Fear',
                  consequence: 'You train brands to lowball creators and undervalue your own work',
                  solution: 'Use this calculator as backup. Say "Industry standard for my metrics is $X" with confidence. If they decline, that brand wasn\'t right anyway.'
                },
                {
                  mistake: 'Accepting Exposure as Payment',
                  consequence: 'You can\'t pay rent with exposure. Brands with real budgets pay real money.',
                  solution: 'Response to "exposure" offers: "I appreciate the opportunity, but I only accept paid partnerships at this time." No exceptions.'
                },
                {
                  mistake: 'Not Having a Written Contract',
                  consequence: 'Scope creep, delayed payments, ownership disputes, and no legal recourse',
                  solution: 'Use a simple contract template covering deliverables, timeline, payment terms, usage rights, and revision limits. No contract = no content.'
                },
                {
                  mistake: 'Giving Unlimited Revisions',
                  consequence: 'Brands request 5-10 revisions, eating your time and profit margin',
                  solution: 'Include "2 rounds of reasonable revisions" in your contract. Charge 20-30% of original fee for additional revision rounds.'
                },
                {
                  mistake: 'Promoting Products You Don\'t Believe In',
                  consequence: 'Audience trust erodes, engagement drops, long-term earning potential decreases',
                  solution: 'Turn down deals that don\'t align with your values or that promote low-quality products. Your reputation is worth more than one paycheck.'
                },
                {
                  mistake: 'Accepting 90+ Day Payment Terms',
                  consequence: 'You\'re essentially giving brands an interest-free loan while you wait for payment',
                  solution: 'Negotiate 50% upfront, 50% upon content approval, or maximum 30-day payment terms. Established creators can demand payment before posting.'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900 mb-1">{item.mistake}</p>
                      <p className="text-body-sm text-neutral-700 mb-2">
                        <strong>Consequence:</strong> {item.consequence}
                      </p>
                      <p className="text-body-sm text-success-700">
                        <strong>Solution:</strong> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Deliverable Types and Pricing Adjustments
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 font-semibold text-neutral-900">Deliverable Type</th>
                    <th className="py-3 px-4 font-semibold text-neutral-900">Pricing Multiplier</th>
                    <th className="py-3 px-4 font-semibold text-neutral-900">Why It Costs More/Less</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'In-Feed Video (Standard)', multiplier: '1.0×', reason: 'Baseline deliverable with standard effort' },
                    { type: 'Spark Ad Authorization', multiplier: '1.3-1.5×', reason: 'Brand gets paid ad capabilities using your account' },
                    { type: 'Product Showcase Video', multiplier: '1.2×', reason: 'Requires product demonstration and multiple angles' },
                    { type: 'LIVE Stream Mention', multiplier: '0.7×', reason: 'Lower production value, less evergreen content' },
                    { type: 'Dedicated LIVE Shopping', multiplier: '1.5-2.0×', reason: 'Extended time commitment (1-2 hours)' },
                    { type: 'Series (3+ videos)', multiplier: '0.8× each', reason: 'Volume discount but higher total contract value' },
                    { type: 'Tutorial/How-To', multiplier: '1.3×', reason: 'Higher production effort and educational value' },
                    { type: 'Brand Takeover (Stories)', multiplier: '1.5×', reason: 'Full day commitment with multiple posts' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium text-neutral-900">{row.type}</td>
                      <td className="py-3 px-4 text-neutral-700 font-semibold">{row.multiplier}</td>
                      <td className="py-3 px-4 text-neutral-600 text-body-xs">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Important Legal and Financial Disclaimer
            </h2>
            <div className="space-y-3 text-body-sm text-neutral-700">
              <p>
                This Brand Deal Rate Calculator provides estimated rate ranges based on industry averages, publicly available data, and reported creator earnings. Actual rates vary significantly based on numerous factors including but not limited to: content quality, niche authority, audience demographics, brand budget, campaign complexity, and negotiation skills.
              </p>
              <p>
                <strong>Not Guaranteed Earnings:</strong> Calculator results are suggestions, not guarantees. Some creators charge more, some less. Use these estimates as a starting point for rate discussions, not as definitive pricing.
              </p>
              <p>
                <strong>Tax and Legal Obligations:</strong> Brand deal income is taxable. Creators are typically classified as independent contractors responsible for their own taxes. Consult with a tax professional regarding quarterly estimated taxes, deductions, and business entity structures. Always use written contracts for brand partnerships.
              </p>
              <p>
                <strong>FTC Disclosure Requirements:</strong> United States creators must clearly disclose sponsored content using hashtags like #ad, #sponsored, or TikTok's "Paid Partnership" label. Failure to disclose can result in FTC fines up to $43,792 per violation. Check your country's advertising disclosure laws.
              </p>
              <p>
                <strong>Platform Policy Compliance:</strong> Ensure all sponsored content complies with TikTok's Community Guidelines and Branded Content Policies. Violations can result in video removal, account restrictions, or permanent bans.
              </p>
              <p>
                <strong>No Professional Advice:</strong> This tool provides general information only and should not be considered legal, financial, or professional advice. Consult qualified professionals for specific business guidance.
              </p>
            </div>
          </Card>

          <MethodologySection
            calculatorName="brand-deal-rate"
            formula={`Brand Deal Rate = Base Rate × Engagement Multiplier × Niche Multiplier × Deliverable Multiplier

Base Rates by Tier:
- Nano (< 10K): $50-$200
- Micro (10K-50K): $200-$1,000
- Mid (50K-500K): $1,000-$10,000
- Macro (500K-1M): $10,000-$50,000
- Mega (1M+): $50,000-$200,000+

Multipliers:
- Engagement: 1.5 (10%+), 1.2 (5-10%), 1.0 (2-5%), 0.7 (<2%)
- Niche: Beauty/Fashion (1.4), Finance (1.3), Tech (1.3), etc.
- Deliverable: Spark Ad (1.3), Product Showcase (1.2), In-Feed (1.0), LIVE (0.7)`}
            assumptions={[
              { label: 'Base Rates', value: 'Industry averages from 1,000+ verified brand deals (2024)' },
              { label: 'Engagement Premium', value: 'High engagement (5%+) commands 20-50% premium' },
              { label: 'Niche Variance', value: 'Beauty/fashion and finance niches pay 30-40% more' },
              { label: 'Deliverable Types', value: 'Spark Ads worth 30% more than standard in-feed' },
            ]}
            dataSources={[
              'Influencer Marketing Hub Brand Deal Rate Study 2024',
              'CreatorIQ Rate Card Database',
              'AspireIQ Creator Compensation Report',
              'Survey of 500+ creators and brand managers',
            ]}
            limitations="Rates vary significantly based on brand budget, campaign goals, usage rights, exclusivity, and creator-brand fit. These are starting points for negotiation, not guaranteed rates."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Brand Deal Rate Calculator"
            faqs={[
              {
                question: 'How much should I charge for a TikTok sponsorship?',
                answer: 'Brand deal rates vary by follower count: 10K–50K followers: $200–$1,000, 50K–500K followers: $1,000–$10,000, 500K+ followers: $10,000–$50,000+. Your exact rate depends on engagement rate, niche, and deliverable type.',
              },
              {
                question: 'Should I charge per post or per campaign?',
                answer: 'Most creators charge per deliverable (per post, per story, per LIVE mention). For multi-deliverable campaigns, offer package pricing with a 10-20% discount for bulk deals.',
              },
              {
                question: 'What should I include in my rate?',
                answer: 'Your base rate should include: content creation time, filming/editing, 1 round of revisions, and standard usage rights (30-90 days). Charge extra for: additional revisions, extended usage rights, exclusivity, whitelisting/paid ads.',
              },
              {
                question: 'How do I negotiate higher rates?',
                answer: 'Negotiation tactics: (1) Start 20-30% higher than target, (2) Show engagement rate if above 5%, (3) Provide past campaign performance data, (4) Highlight niche expertise, (5) Bundle multiple deliverables for higher total value.',
              },
              {
                question: 'When should I turn down a brand deal?',
                answer: 'Red flags to decline: (1) Rate below your minimum, (2) Brand conflicts with your values, (3) Excessive revisions or unclear deliverables, (4) Unlimited usage rights without premium pay, (5) Payment terms longer than 60 days.',
              },
              {
                question: 'How do brands find TikTok creators for partnerships?',
                answer: 'Brands find creators through: (1) Creator marketplaces (AspireIQ, CreatorIQ, #paid), (2) Direct outreach via email/DM after discovering your content, (3) Influencer marketing agencies, (4) TikTok Creator Marketplace (official platform), (5) Your professional outreach with media kit. Optimize your bio with business email to attract opportunities.',
              },
              {
                question: 'Do I need a certain follower count to get brand deals?',
                answer: 'No minimum required. Nano influencers (1K-10K followers) regularly secure $50-$200 deals from small brands. However, reaching 10K followers significantly increases opportunities as more brands have 10K+ requirements. Focus on engagement rate over follower count—3K followers with 10% engagement is more valuable than 20K with 1% engagement.',
              },
              {
                question: 'What is whitelisting and why does it cost more?',
                answer: 'Whitelisting (also called "spark ads" on TikTok) allows brands to run your organic content as paid ads through your account. It costs 50-100% more because: (1) your account name/handle appears on ads to millions, (2) brands get advanced analytics, (3) it feels more authentic than standard ads. Always time-limit whitelisting access (30-90 days) and charge accordingly.',
              },
              {
                question: 'How long does it take to get paid for brand deals?',
                answer: 'Payment terms vary: Small brands: 0-30 days, Mid-size brands: 30-60 days, Large corporations: 60-90 days (sometimes 120 days). New creators often accept these terms. Established creators negotiate 50% upfront, 50% on delivery, or payment before posting. Always specify payment terms in your contract and follow up immediately if payment is late.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="brand-deal-rate"
            calculators={[
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Calculate your engagement rate to justify premium rates',
                icon: 'BarChart3',
              },
              {
                name: 'Creator Fund Calculator',
                slug: 'tiktok-creator-fund',
                description: 'Compare brand deal income to Creator Fund earnings',
                icon: 'DollarSign',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'See total earnings with brand deals included',
                icon: 'Banknote',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
