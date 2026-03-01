import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, DollarSign, BarChart3, TrendingUp, Users, Zap, Globe, Eye, ShoppingBag, Calculator } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { TikTokAdCostCalculatorWidget } from '@/components/calculators/tiktok-ad-cost/CalculatorWidget';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';

export const metadata: Metadata = {
  title: "TikTok Ad Cost Calculator — Estimate Advertising Costs 2026",
  description: "Estimate TikTok advertising costs for your business. Calculate budgets for in-feed ads, branded hashtags, TopView, and Spark Ads with 2026 pricing data.",
  keywords: ['tiktok ad cost calculator', 'tiktok advertising cost', 'tiktok cpm', 'tiktok ads budget', 'tiktok marketing cost', 'tiktok campaign calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/tiktok-ad-cost/',
  },
};

const faqData = [
  {
    question: 'How much does TikTok advertising cost?',
    answer: 'TikTok ads typically cost $10-$15 CPM (cost per 1,000 impressions) and $0.50-$2.00 CPC (cost per click). Minimum daily budget is $20 for campaigns and $5 for ad groups. Total costs depend on your targeting, format, and competition.',
  },
  {
    question: 'What is the minimum budget for TikTok ads?',
    answer: 'TikTok requires a minimum of $50 per campaign, $20 per day at the campaign level, and $5 per day at the ad group level. For effective testing, most advertisers recommend starting with $500-$1,000 to gather meaningful data.',
  },
  {
    question: 'What is the average CPM on TikTok?',
    answer: 'Average TikTok CPM ranges from $10-$15 in 2026, though it varies by targeting and competition. Broad targeting may achieve $6-$10 CPM while highly targeted campaigns can reach $15-$25 CPM. US audiences typically cost more than other regions.',
  },
  {
    question: 'How much does a TikTok CPC cost?',
    answer: 'Average TikTok CPC (cost per click) is $0.50-$2.00. Factors affecting CPC include ad creative quality, audience targeting, bidding strategy, and competition in your niche. Well-optimized campaigns can achieve under $0.50 CPC.',
  },
  {
    question: 'What is the best TikTok ad format?',
    answer: 'In-Feed Ads are most popular and cost-effective ($10-$15 CPM). TopView ads offer premium placement but cost more ($65K+ per day). Spark Ads boost organic content and often see 30-50% better engagement than standard ads.',
  },
  {
    question: 'How much should I budget for TikTok ads?',
    answer: 'Budget recommendations: Testing phase: $500-$2,000. Small business: $1,000-$5,000/month. Growing brand: $5,000-$20,000/month. Established brand: $20,000-$100,000+/month. Start small and scale based on ROAS.',
  },
  {
    question: 'Are TikTok ads cheaper than Facebook or Instagram?',
    answer: 'TikTok CPM ($10-$15) is competitive with Facebook ($8-$14) and Instagram ($10-$16). However, TikTok often delivers better engagement and lower CPE (cost per engagement). Younger demographics are typically cheaper to reach on TikTok.',
  },
  {
    question: 'How do I reduce TikTok ad costs?',
    answer: 'Cost reduction strategies: Use Spark Ads to boost high-performing organic content, create native-feeling content, test multiple creatives, use automatic bidding initially, target broader audiences first, and optimize based on data after 3-7 days.',
  },
  {
    question: 'What affects TikTok ad costs the most?',
    answer: 'Key cost factors: Audience targeting (narrow = expensive), ad format (TopView > In-Feed), competition in your niche, seasonality (Q4 is most expensive), creative quality (better CTR = lower costs), and bidding strategy.',
  },
  {
    question: 'How do I calculate TikTok ad ROI?',
    answer: 'ROAS = Revenue from ads ÷ Ad spend. Aim for 3x-5x ROAS for most businesses. Track conversions with TikTok Pixel. Calculate CAC (Customer Acquisition Cost) = Total ad spend ÷ New customers. Compare to customer lifetime value.',
  },
  {
    question: 'What is TikTok Spark Ads?',
    answer: 'Spark Ads let you boost existing organic TikTok posts (yours or creators with permission) as paid ads. They maintain engagement metrics, appear more native, and typically see 30-50% better performance than standard In-Feed Ads at similar costs.',
  },
  {
    question: 'How long should I run TikTok ads?',
    answer: 'Run campaigns minimum 7 days for the algorithm to optimize. Testing phase: 2-4 weeks. Most successful campaigns run continuously with ongoing optimization. Allow 3-4 days of learning before making major changes.',
  },
];

export default function TikTokAdCostCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Ad Cost Calculator"
        description="Estimate TikTok advertising costs based on your campaign goals, targeting, and ad format. Calculate CPM, CPC, and total budget."
        url="https://calculatecreator.com/calculators/tiktok-ad-cost/"
        datePublished="2024-01-15"
        dateModified="2026-03-01"
        keywords={['tiktok ad cost', 'tiktok advertising', 'tiktok cpm', 'tiktok marketing budget']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'TikTok Ad Cost Calculator', url: 'https://calculatecreator.com/calculators/tiktok-ad-cost/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-info-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators/' },
              { label: 'TikTok Ad Cost Calculator', href: '/calculators/tiktok-ad-cost/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-info-600 text-white mb-6">
              <Target size={32} />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Ad Cost Calculator 2026
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Estimate your TikTok advertising costs and plan campaign budgets with accurate 2026 pricing data. Our calculator helps you understand CPM, CPC, and total investment needed to reach your marketing goals on TikTok. Whether you are running In-Feed Ads, Spark Ads, or considering TopView placements, knowing your potential costs helps optimize budget allocation and maximize return on ad spend. TikTok advertising offers competitive rates compared to other platforms, especially for reaching younger demographics and driving engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1"><DollarSign size={16} /> 2026 CPM/CPC Data</span>
              <span className="flex items-center gap-1"><Target size={16} /> Budget Planning</span>
              <span className="flex items-center gap-1"><BarChart3 size={16} /> ROI Estimation</span>
              <span className="flex items-center gap-1"><TrendingUp size={16} /> Format Comparison</span>
            </div>
            <p className="text-body-md text-neutral-600 mt-4 max-w-2xl mx-auto">
              Learn more in our <Link href="/guides/tiktok-ad-budget-calculator-guide/" className="text-primary-600 hover:text-primary-700 underline">complete TikTok ad budget guide</Link> or explore <Link href="/guides/tiktok-shop-success-strategies/" className="text-primary-600 hover:text-primary-700 underline">TikTok Shop advertising strategies</Link>.
            </p>
          </div>

          {/* Author Byline */}
          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="tiktok-ad-cost" />
          </div>

          {/* Industry Insights Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <DollarSign size={20} className="text-success-600" /> 2026 Average Costs
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• CPM: $10-$15 average</li>
                  <li>• CPC: $0.50-$2.00 average</li>
                  <li>• CPE: $0.10-$0.30 average</li>
                  <li>• Min daily budget: $20</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Target size={20} className="text-info-600" /> Ad Format Costs
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• In-Feed: $10-$15 CPM</li>
                  <li>• Spark Ads: $8-$12 CPM</li>
                  <li>• TopView: $65K+/day</li>
                  <li>• Brand Takeover: $50K+/day</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Globe size={20} className="text-primary-600" /> Regional Variance
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• US: $12-$18 CPM</li>
                  <li>• UK/Europe: $10-$15 CPM</li>
                  <li>• SEA: $3-$8 CPM</li>
                  <li>• LATAM: $4-$10 CPM</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Calculator Widget */}
          <div className="max-w-5xl mx-auto mb-12">
            <TikTokAdCostCalculatorWidget />
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <InputsExplained
              inputs={[
                { name: 'Campaign Budget', description: 'Total ad spend budget for campaign', example: '$5,000', required: true },
                { name: 'Target Audience Size', description: 'Estimated reach of target demographics', example: '500,000', required: true },
                { name: 'Ad Format', description: 'Type of TikTok ad (In-Feed, Spark, TopView)', example: 'In-Feed' },
                { name: 'Campaign Duration', description: 'Length of ad campaign', example: '30 days' },
              ]}
              note="Minimum daily budget: $20. In-Feed ads average $10/CPM. Spark Ads often cost 20-30% less."
            />
          </div>

          {/* Educational Content Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Eye size={24} className="text-info-600" /> TikTok Ad Formats
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Available ad formats and their typical costs:
              </p>
              <div className="space-y-3">
                {[
                  { format: 'In-Feed Ads', cost: '$10-$15 CPM', desc: 'Native video ads in For You feed', popular: true },
                  { format: 'Spark Ads', cost: '$8-$12 CPM', desc: 'Boost existing organic content', popular: true },
                  { format: 'TopView', cost: '$65K+/day', desc: 'First ad users see when opening app', popular: false },
                  { format: 'Brand Takeover', cost: '$50K+/day', desc: 'Full-screen takeover on app open', popular: false },
                  { format: 'Branded Hashtag', cost: '$150K+/campaign', desc: 'Sponsored hashtag challenge', popular: false },
                  { format: 'Branded Effects', cost: '$80K+/campaign', desc: 'Custom AR filters and effects', popular: false },
                ].map((item) => (
                  <div key={item.format} className={`p-3 rounded-lg ${item.popular ? 'bg-info-50 border border-info-200' : 'bg-neutral-50'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-neutral-900">{item.format}</span>
                      <span className="text-sm font-mono text-info-600">{item.cost}</span>
                    </div>
                    <p className="text-body-xs text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Calculator size={24} className="text-success-600" /> Budget Recommendations
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Suggested monthly ad budgets by business size:
              </p>
              <div className="space-y-3">
                {[
                  { tier: 'Testing Phase', budget: '$500-$2,000', desc: 'Initial learning and optimization', color: 'bg-neutral-100 text-neutral-700' },
                  { tier: 'Small Business', budget: '$1,000-$5,000', desc: 'Consistent brand awareness', color: 'bg-primary-100 text-primary-700' },
                  { tier: 'Growing Brand', budget: '$5,000-$20,000', desc: 'Scaling successful campaigns', color: 'bg-primary-100 text-primary-700' },
                  { tier: 'Established Brand', budget: '$20,000-$50,000', desc: 'Multi-campaign strategy', color: 'bg-success-100 text-success-700' },
                  { tier: 'Enterprise', budget: '$50,000-$200,000+', desc: 'Full-funnel marketing', color: 'bg-success-100 text-success-700' },
                ].map((item) => (
                  <div key={item.tier} className={`p-3 rounded-lg ${item.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.tier}</span>
                      <span className="text-sm font-mono">{item.budget}/mo</span>
                    </div>
                    <p className="text-body-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-warning-600" /> Reduce Ad Costs
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Strategies to lower your TikTok advertising costs:
              </p>
              <div className="space-y-2 text-body-sm text-neutral-700">
                {[
                  'Use Spark Ads to boost high-performing organic content',
                  'Create native-feeling content that blends with organic feed',
                  'Test 3-5 creative variations to find top performers',
                  'Start with automatic bidding, then optimize manually',
                  'Use broader targeting initially, then narrow based on data',
                  'Optimize for the right objective (awareness vs conversion)',
                  'Allow 3-4 days learning before making major changes',
                  'Run campaigns during off-peak times when possible',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-neutral-50 rounded">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-warning-100 text-warning-600 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <ShoppingBag size={24} className="text-secondary-600" /> TikTok Shop Ads
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Advertising costs for TikTok Shop sellers:
              </p>
              <div className="space-y-4 text-body-sm">
                <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                  <h4 className="font-semibold text-secondary-800 mb-1">Product Shopping Ads</h4>
                  <p className="text-neutral-700">$8-$12 CPM, direct product links, shoppable format</p>
                </div>
                <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                  <h4 className="font-semibold text-info-800 mb-1">Video Shopping Ads</h4>
                  <p className="text-neutral-700">$10-$15 CPM, product tags in video content</p>
                </div>
                <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                  <h4 className="font-semibold text-success-800 mb-1">LIVE Shopping Ads</h4>
                  <p className="text-neutral-700">$5-$10 CPM, promote live shopping streams</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-1">Affiliate Promotion</h4>
                  <p className="text-neutral-700">Commission-based, lower upfront cost, 5-20% per sale</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Methodology and FAQ */}
          <div className="max-w-4xl mx-auto">
            <ToolExplanationSection
              whatItDoes="This calculator estimates your TikTok advertising costs based on campaign goals, ad format, targeting parameters, and budget. It computes CPM (cost per 1,000 impressions), CPC (cost per click), and total campaign budget so you can plan ad spend before launching."
              howToUse={[
                'Enter your total campaign budget or target number of impressions/clicks.',
                'Select your ad format (In-Feed, Spark Ads, TopView, etc.) and target audience region.',
                'Review the estimated CPM, CPC, total impressions, and projected reach breakdown.',
              ]}
              examples={[
                { scenario: 'Small business product launch', input: '$2,000 budget, In-Feed Ads, US audience', output: 'Estimated 133K-200K impressions at $10-$15 CPM, 1,000-4,000 clicks' },
                { scenario: 'App install campaign in Southeast Asia', input: '$5,000 budget, In-Feed Ads, SEA targeting', output: 'Estimated 625K-1.67M impressions at $3-$8 CPM with lower CPC' },
              ]}
              limitations={[
                'Actual CPM and CPC vary based on real-time auction competition and ad quality scores.',
                'Seasonal cost increases (especially Q4) can raise costs 30-50% above estimates.',
                'Premium formats like TopView and Brand Takeover require direct booking and are not calculated here.',
                'Creative quality and relevance score significantly affect actual costs but cannot be pre-calculated.',
              ]}
              relatedContent={[
                { title: 'TikTok Money Calculator', href: '/calculators/tiktok-money/' },
                { title: 'CPM/CPV Calculator', href: '/calculators/cpm-cpv/' },
                { title: 'Cost Per Result Calculator', href: '/calculators/cost-per-result/' },
                { title: 'TikTok Ad Budget Guide', href: '/guides/tiktok-ad-budget-calculator-guide/' },
              ]}
            />

            <MethodologySection
              calculatorName="TikTok Ad Cost Calculator"
              formula={`Total Budget = (Target Impressions / 1,000) × CPM
Or: Total Budget = Target Clicks × CPC

CPM Calculation:
CPM = (Total Ad Spend / Impressions) × 1,000

CPC Calculation:
CPC = Total Ad Spend / Total Clicks

ROAS Calculation:
ROAS = Revenue from Ads / Ad Spend

Example: 100,000 impressions goal at $12 CPM
Budget needed: (100,000 / 1,000) × $12 = $1,200`}
              assumptions={[
                { label: 'CPM Range', value: '$10-$15 average for In-Feed Ads in 2026' },
                { label: 'CPC Range', value: '$0.50-$2.00 depending on competition' },
                { label: 'Regional Variance', value: 'US costs 20-40% more than global average' },
                { label: 'Seasonal Impact', value: 'Q4 costs increase 30-50%' },
                { label: 'Learning Phase', value: 'First 3-4 days may have higher costs' },
              ]}
              dataSources={[
                'TikTok Ads Manager benchmarks (2026)',
                'Agency performance reports',
                'Advertiser survey data across industries',
                'Platform pricing documentation',
              ]}
              limitations="Actual costs vary significantly based on targeting, competition, creative quality, and optimization. These estimates are based on industry averages and may not reflect your specific campaign performance."
              lastUpdated="January 2026"
            />

            <FAQSection pageName="TikTok Ad Cost Calculator" faqs={faqData} />

            <RelatedCalculators
              currentCalculator="tiktok-ad-cost"
              calculators={[
                { name: 'RPM Calculator', slug: 'rpm', description: 'Calculate revenue per mille', icon: 'TrendingUp' },
                { name: 'Brand Deal Rate Calculator', slug: 'brand-deal-rate', description: 'Price influencer campaigns', icon: 'Handshake' },
                { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Estimate creator earnings', icon: 'Banknote' },
                { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Measure ad engagement', icon: 'BarChart3' },
              ]}
            />
          </div>

          {/* EEAT Section */}
          <div className="mt-12">
            <PageEEAT pageSlug="tiktok-ad-cost" variant="full" />
          </div>
        </div>
      </div>
    </>
  );
}
