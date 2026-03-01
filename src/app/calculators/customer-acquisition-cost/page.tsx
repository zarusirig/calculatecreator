import type { Metadata } from 'next';
import { DollarSign, ShoppingCart, Shirt, Smartphone, Briefcase } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { CustomerAcquisitionCostCalculatorWidget } from '@/components/calculators/customer-acquisition-cost/CalculatorWidget';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { InputsExplained } from '@/components/calculator/InputsExplained';

export const metadata: Metadata = {
  title: "TikTok Customer Acquisition Cost Calculator — CAC Estimator",
  description: "Calculate your TikTok customer acquisition cost (CAC). Estimate how much it costs to acquire each customer through TikTok ads, content, and Shop campaigns.",
  keywords: ['customer acquisition cost', 'cac calculator', 'tiktok marketing cost', 'ltv cac ratio', 'acquisition cost calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/customer-acquisition-cost/',
  },
};

const faqs = [
  {
    question: 'What is a good Customer Acquisition Cost (CAC) for TikTok?',
    answer: 'A good CAC depends on your Customer Lifetime Value (LTV). The golden ratio is LTV:CAC of 3:1 or higher. For TikTok specifically: E-commerce typically sees $15-$50 CAC, SaaS/Apps see $30-$150 CAC, Services see $50-$200 CAC. Lower CAC is better, but only if you maintain quality customers with good retention.',
  },
  {
    question: 'How do I calculate CAC from TikTok ads?',
    answer: 'CAC = Total Marketing Spend / Number of New Customers Acquired. Include all costs: ad spend, content creation, influencer fees, agency costs, and software tools. Track new customers using UTM parameters, promo codes, or TikTok pixel. Only count customers who made their first purchase in the period, not repeat customers.',
  },
  {
    question: 'Why is my TikTok CAC so high?',
    answer: 'Common reasons for high CAC: (1) Targeting too narrow—limiting reach increases costs, (2) Low conversion rate on landing page, (3) Poor product-market fit for TikTok audience, (4) Weak creative that doesn\'t stop the scroll, (5) High competition in your niche, (6) Not enough time for algorithm to optimize (run campaigns 7+ days). Test broader targeting and improve ad creative first.',
  },
  {
    question: 'What\'s the difference between CAC and CPA?',
    answer: 'CAC (Customer Acquisition Cost) measures cost to acquire a new customer specifically. CPA (Cost Per Acquisition) measures cost for any conversion (signup, download, purchase). For subscription businesses, someone who signs up for a trial (CPA) may not become a paying customer (CAC). CAC is always equal to or higher than CPA.',
  },
  {
    question: 'How can I lower my TikTok CAC?',
    answer: 'To reduce CAC: (1) Improve conversion rate—a 1% increase can cut CAC by 20-30%, (2) Create more engaging organic content to build trust before running ads, (3) Use retargeting for website visitors (typically 50-70% lower CAC), (4) Test lookalike audiences based on your best customers, (5) Optimize landing pages for mobile, (6) Use user-generated content in ads (3-5× more effective than polished ads).',
  },
  {
    question: 'How long should I run campaigns before evaluating CAC?',
    answer: 'Run TikTok campaigns for at least 7-14 days before making CAC decisions. The algorithm needs time to optimize (learning phase). Early CAC data is often inflated—give it time to stabilize. Aim for at least 50-100 conversions before calculating your true CAC for statistical significance.',
  },
];

export default function CustomerAcquisitionCostCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Customer Acquisition Cost (CAC) Calculator"
        description="Calculate how much it costs to acquire a new customer through your TikTok marketing campaigns."
        url="https://calculatecreator.com/calculators/customer-acquisition-cost/"
        datePublished="2024-01-15"
        dateModified="2026-03-01"
        keywords={['customer acquisition cost', 'cac calculator', 'tiktok cac', 'cost per customer']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'Customer Acquisition Cost Calculator', url: 'https://calculatecreator.com/calculators/customer-acquisition-cost/' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators/' },
              { label: 'Customer Acquisition Cost Calculator', href: '/calculators/customer-acquisition-cost/' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <DollarSign size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Customer Acquisition Cost (CAC) Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how much it costs to acquire a new customer through your TikTok marketing campaigns by dividing total marketing spend by new customers acquired. This calculator helps you measure CAC and compare it against customer lifetime value for healthy business unit economics. The ideal LTV:CAC ratio is 3:1 or higher for sustainable profitability. Essential for e-commerce brands, SaaS businesses, and service providers running TikTok ads.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <PageAuthorByline pageSlug="customer-acquisition-cost" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <CustomerAcquisitionCostCalculatorWidget />

            <InputsExplained
              inputs={[
                { name: 'Total Marketing Spend', description: 'All costs for the campaign period', example: '$5,000', required: true },
                { name: 'New Customers Acquired', description: 'Number of new customers gained', example: '100', required: true },
              ]}
              note="Compare CAC to customer lifetime value (LTV). Healthy ratio is LTV:CAC of 3:1 or higher."
            />
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                CAC Benchmarks by Industry
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Typical Customer Acquisition Cost on TikTok by business type:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <ShoppingCart size={16} className="text-primary-600" /> E-commerce (Low Ticket)
                    </span>
                    <span className="text-neutral-600">$15-$50</span>
                  </div>
                  <p className="text-neutral-600">Products under $100, impulse purchases</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Shirt size={16} className="text-primary-600" /> Fashion & Beauty
                    </span>
                    <span className="text-neutral-600">$20-$60</span>
                  </div>
                  <p className="text-neutral-600">High TikTok audience fit, strong conversion</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Smartphone size={16} className="text-primary-600" /> Apps & Software (SaaS)
                    </span>
                    <span className="text-neutral-600">$30-$150</span>
                  </div>
                  <p className="text-neutral-600">Subscription models, higher LTV justifies cost</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Briefcase size={16} className="text-primary-600" /> B2B Services
                    </span>
                    <span className="text-neutral-600">$50-$200+</span>
                  </div>
                  <p className="text-neutral-600">Longer sales cycles, higher contract values</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                The LTV:CAC Ratio Rule
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Your business health depends on this critical ratio:
              </p>
              <div className="space-y-3">
                {[
                  { ratio: '3:1 or Higher', label: 'Healthy', desc: 'Sustainable, profitable growth', color: 'bg-success-100 border-success-300 text-success-700' },
                  { ratio: '2:1 to 3:1', label: 'Acceptable', desc: 'Viable but watch margins closely', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { ratio: '1:1 to 2:1', label: 'Risky', desc: 'Barely profitable, needs optimization', color: 'bg-warning-100 border-warning-300 text-warning-700' },
                  { ratio: 'Below 1:1', label: 'Unsustainable', desc: 'Losing money on each customer', color: 'bg-error-100 border-error-300 text-error-700' },
                ].map((item) => (
                  <div key={item.ratio} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm font-mono">{item.ratio}</span>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Example:</strong> If your CAC is $50, your LTV should be at least $150 for a healthy 3:1 ratio. Use our Lifetime Value Calculator to determine your LTV.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Reduce Your CAC
              </h2>
              <div className="space-y-3">
                {[
                  'Improve landing page conversion rate—1% increase = 10-20% CAC reduction',
                  'Build organic following first to warm up cold traffic with retargeting',
                  'Use lookalike audiences based on your best customers',
                  'Test user-generated content (UGC) ads—often 3-5× more effective',
                  'Optimize for "Purchase" instead of "Traffic" in TikTok Ads Manager',
                  'Run retargeting campaigns for website visitors (50-70% lower CAC)',
                  'A/B test ad creative weekly—winning ads can drop CAC by 30-50%',
                  'Bundle products or increase order value to improve efficiency',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-sm text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                When High CAC is Acceptable
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Sometimes a higher CAC makes business sense:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Subscription Businesses</h3>
                  <p className="text-body-sm text-neutral-700">
                    SaaS and subscription boxes can afford $100-$200 CAC because LTV over 12-36 months is $500-$2,000+. Focus on retention and reducing churn rather than lowering CAC.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">High Repeat Purchase Rate</h3>
                  <p className="text-body-sm text-neutral-700">
                    Beauty, supplements, and consumables with 60-80% repurchase rate justify higher initial CAC. A customer acquired for $60 who buys 5× over 2 years is extremely profitable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Market Penetration Strategy</h3>
                  <p className="text-body-sm text-neutral-700">
                    When entering a new market, accepting a 2:1 or even 1.5:1 LTV:CAC ratio to gain market share can be strategic—if you have funding and a plan to improve unit economics.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <ToolExplanationSection
            whatItDoes="This calculator computes your Customer Acquisition Cost (CAC) by dividing total marketing spend by the number of new customers acquired. It also shows how many customers you can acquire per $1,000 and recommends a minimum Customer Lifetime Value (LTV) needed for a healthy 3:1 LTV:CAC ratio."
            howToUse={[
              'Enter your total marketing spend for the campaign period, including ad spend, content creation costs, influencer fees, agency costs, and software tools.',
              'Enter the number of new first-time customers acquired during that same period (do not count repeat purchases from existing customers).',
              'Review your CAC, customers-per-$1K metric, and the recommended minimum LTV target to ensure your unit economics are sustainable.',
            ]}
            examples={[
              { scenario: 'E-commerce fashion brand', input: '$5,000 total spend, 100 new customers', output: '$50 CAC, 20 customers per $1K, recommended LTV of $150+' },
              { scenario: 'SaaS app promotion', input: '$10,000 total spend, 80 new subscribers', output: '$125 CAC, 8 customers per $1K, recommended LTV of $375+' },
              { scenario: 'Low-ticket impulse product', input: '$2,000 total spend, 200 new buyers', output: '$10 CAC, 100 customers per $1K, recommended LTV of $30+' },
            ]}
            limitations={[
              'CAC calculations are only accurate when all marketing costs are included -- ad spend alone underestimates true acquisition cost by 30-50%.',
              'Does not account for organic or word-of-mouth customers who would have converted without paid campaigns.',
              'Seasonal factors such as holiday shopping or back-to-school periods can temporarily inflate or deflate CAC by 20-50%, making short-term snapshots unreliable.',
            ]}
            relatedContent={[
              { title: 'Lifetime Value Calculator', href: '/calculators/lifetime-value/' },
              { title: 'Conversion Rate Calculator', href: '/calculators/conversion-rate/' },
              { title: 'Content Value Calculator', href: '/calculators/content-value/' },
            ]}
          />

          <MethodologySection
            calculatorName="customer-acquisition-cost"
            formula={`Customer Acquisition Cost (CAC) = Total Marketing Spend / New Customers Acquired

Customers per $1,000 = (1,000 / CAC) or (New Customers / Marketing Spend) × 1,000

Recommended Minimum LTV = CAC × 3 (for healthy 3:1 LTV:CAC ratio)

Example:
Marketing Spend: $5,000
New Customers: 100

CAC = $5,000 / 100 = $50.00
Customers per $1K = 1,000 / 50 = 20
Recommended LTV = $50 × 3 = $150+`}
            assumptions={[
              { label: 'Total Marketing Costs', value: 'Include all costs: ad spend, content creation, tools, agency fees (not just ad spend)' },
              { label: 'New Customers Only', value: 'Count only first-time customers, not repeat purchases from existing customers' },
              { label: 'Attribution Window', value: 'Typically 7-30 days from ad click to purchase; longer for high-consideration products' },
              { label: 'Healthy Ratio', value: 'LTV should be 3× CAC or higher for sustainable, profitable growth' },
            ]}
            dataSources={[
              'TikTok Ads Manager conversion data and reporting',
              'E-commerce CAC benchmarks from Shopify and BigCommerce',
              'SaaS metrics from ChartMogul and ProfitWell (2024)',
              'Analysis of 400+ TikTok-driven customer acquisition campaigns',
            ]}
            limitations="CAC varies significantly by industry, product price point, and marketing maturity. Early-stage businesses typically have higher CAC that improves over time. Seasonal factors (Q4 holidays) can temporarily increase CAC by 20-50%. Include all marketing costs for accurate CAC, not just ad spend."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Customer Acquisition Cost Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="customer-acquisition-cost"
            calculators={[
              {
                name: 'Lifetime Value Calculator',
                slug: 'lifetime-value',
                description: 'Calculate customer LTV to compare against your CAC',
                icon: 'Gem',
              },
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Measure overall profitability of your campaigns',
                icon: 'TrendingUp',
              },
              {
                name: 'Conversion Rate Calculator',
                slug: 'conversion-rate',
                description: 'Optimize conversion rate to reduce CAC',
                icon: 'Target',
              },
            ]}
          />

          <div className="mt-12">
            <PageEEAT pageSlug="customer-acquisition-cost" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
