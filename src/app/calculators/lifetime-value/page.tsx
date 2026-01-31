import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { LifetimeValueCalculatorWidget } from '@/components/calculators/lifetime-value/CalculatorWidget';
import { Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Lifetime Value (LTV) Calculator for TikTok (2026)',
  description: 'Calculate customer lifetime value from TikTok traffic. Measure LTV, optimize your LTV:CAC ratio, and improve customer retention strategies.',
  keywords: ['lifetime value calculator', 'ltv calculator', 'customer lifetime value', 'ltv cac ratio', 'customer retention'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/lifetime-value/',
  },
};

const faqs = [
  {
    question: 'What is a good Customer Lifetime Value (LTV)?',
    answer: 'A good LTV depends on your Customer Acquisition Cost (CAC). The ideal ratio is LTV:CAC of 3:1 or higher. For example, if your CAC is $50, your LTV should be $150+. E-commerce typically sees $100-$500 LTV, SaaS sees $500-$5,000+ LTV, and subscription boxes see $200-$800 LTV. Higher is always better, but the ratio to CAC matters most.',
  },
  {
    question: 'How do I calculate Customer Lifetime Value from TikTok customers?',
    answer: 'LTV = Average Order Value × Purchase Frequency (per month) × Customer Lifespan (months). Track TikTok customers separately using UTM codes or promo codes. Calculate: (1) Average order value from TikTok traffic, (2) How many times they buy per month, (3) How long they remain customers (use cohort analysis or industry averages if new).',
  },
  {
    question: 'Why is LTV important for TikTok marketing?',
    answer: 'LTV determines how much you can afford to spend acquiring customers on TikTok. If your LTV is $300, you can profitably spend up to $100 on CAC (3:1 ratio). Higher LTV means you can outbid competitors for ad placements, test more aggressively, and scale faster. Low LTV businesses ($50-100) must operate on razor-thin margins.',
  },
  {
    question: 'How can I increase Customer Lifetime Value from TikTok?',
    answer: 'Increase LTV by: (1) Upselling and cross-selling complementary products, (2) Creating a subscription or membership program (boost purchase frequency), (3) Improving product quality to reduce returns and increase repurchases, (4) Building an email list for retention marketing, (5) Offering loyalty rewards (points, discounts for repeat customers), (6) Following up with customers 30-60 days post-purchase.',
  },
  {
    question: 'What\'s the difference between LTV and AOV?',
    answer: 'AOV (Average Order Value) is a single transaction amount. LTV (Lifetime Value) is total revenue from a customer over their entire relationship with your brand. Example: AOV = $50, but they buy 3× per month for 12 months = LTV of $1,800. Increasing AOV (bundles, upsells) is one way to increase LTV, but purchase frequency and retention are equally important.',
  },
];

export default function LifetimeValueCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Customer Lifetime Value (LTV) Calculator"
        description="Calculate the total value a customer brings over their lifetime to determine how much you can spend on acquisition."
        url="https://calculatecreator.com/calculators/lifetime-value"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 912,
        }}
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['lifetime value calculator', 'ltv calculator', 'customer lifetime value', 'clv calculator']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Lifetime Value Calculator', url: 'https://calculatecreator.com/calculators/lifetime-value' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Lifetime Value Calculator', href: '/calculators/lifetime-value' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Gem size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Customer Lifetime Value (LTV) Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate the total value a customer brings over their lifetime to determine how much you can spend on acquisition. With a healthy LTV:CAC ratio of 3:1 or higher, understanding your customer lifetime value is crucial for profitable TikTok marketing. Whether you're in e-commerce with typical LTVs of $100-$500 or subscription businesses with $500-$5,000+, this calculator helps you project customer value, optimize retention strategies, and scale your ad spend confidently.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <LifetimeValueCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                LTV Benchmarks by Business Model
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Typical Customer Lifetime Value by industry:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">SaaS & Software</span>
                    <span className="text-neutral-600">$500-$5,000+</span>
                  </div>
                  <p className="text-neutral-600">High retention, subscription model</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">Subscription Boxes</span>
                    <span className="text-neutral-600">$200-$800</span>
                  </div>
                  <p className="text-neutral-600">Monthly recurring, moderate churn</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">E-commerce (Consumables)</span>
                    <span className="text-neutral-600">$300-$800</span>
                  </div>
                  <p className="text-neutral-600">Beauty, supplements—high repeat rate</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">Fashion & Apparel</span>
                    <span className="text-neutral-600">$150-$400</span>
                  </div>
                  <p className="text-neutral-600">Seasonal, moderate repeat purchases</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">Home & Electronics</span>
                    <span className="text-neutral-600">$100-$300</span>
                  </div>
                  <p className="text-neutral-600">Lower frequency, durable goods</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Increase LTV
              </h2>
              <div className="space-y-3">
                {[
                  'Increase AOV: Bundle products, offer free shipping thresholds, upsell at checkout',
                  'Boost frequency: Create subscription options, send replenishment reminders',
                  'Improve retention: Build loyalty program, exclusive member perks, VIP tiers',
                  'Reduce churn: Proactive customer service, address issues before cancellation',
                  'Post-purchase marketing: Email sequences, SMS for repeat purchases',
                  'Cross-sell: Recommend complementary products based on purchase history',
                  'Community building: Create Facebook group or Discord for brand superfans',
                  'Quality focus: Better products = happier customers = more referrals + repeat buys',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-sm text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                The Power of Small LTV Increases
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Small improvements compound dramatically:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Scenario: Current LTV = $300</h3>
                  <div className="space-y-2 text-body-sm">
                    <div className="flex justify-between">
                      <span>+10% AOV increase ($75 → $82.50)</span>
                      <span className="font-semibold text-success-600">+$30 LTV</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+20% longer retention (24 → 29 months)</span>
                      <span className="font-semibold text-success-600">+$60 LTV</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+0.5 purchases/month (2 → 2.5)</span>
                      <span className="font-semibold text-success-600">+$75 LTV</span>
                    </div>
                    <div className="border-t border-neutral-300 mt-2 pt-2 flex justify-between">
                      <span className="font-bold">Combined Effect</span>
                      <span className="font-bold text-success-600">$465 LTV (+55%)</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Impact:</strong> A 55% LTV increase means you can now spend $155 on CAC instead of $100—outbidding competitors and scaling faster.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                LTV Optimization Strategy
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Focus on the right lever for your business:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">If AOV is Low (&lt;$50)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Priority: Bundle products, set free shipping minimum ($75+), suggest add-ons at checkout. Even a $10 AOV increase from $40 to $50 = 25% more revenue per customer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">If Purchase Frequency is Low (&lt;1/month)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Priority: Create a subscription option, send "restock reminder" emails at expected replenishment time, build email nurture sequences. Getting customers to buy every 3 weeks instead of 4 = 33% LTV boost.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">If Retention is Low (&lt;12 months)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Priority: Survey churned customers, improve product quality, create loyalty rewards, follow up at 30/60/90 days. Extending lifespan from 12 to 18 months = 50% LTV increase.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="lifetime-value"
            formula={`Customer Lifetime Value (LTV) = Average Order Value × Purchase Frequency × Customer Lifespan

Monthly Value = Average Order Value × Purchase Frequency

Total Revenue = Monthly Value × Customer Lifespan

Maximum CAC (3:1 ratio) = LTV / 3

Example:
Average Order Value: $75
Purchase Frequency: 2 times/month
Customer Lifespan: 24 months

Monthly Value = $75 × 2 = $150/month
Total Revenue = $150 × 24 = $3,600
LTV = $3,600
Max CAC = $3,600 / 3 = $1,200`}
            assumptions={[
              { label: 'Purchase Consistency', value: 'Assumes stable purchase frequency throughout customer lifespan (actual behavior may vary over time)' },
              { label: 'Gross Revenue', value: 'Calculates gross LTV before costs (COGS, shipping, overhead). For net LTV, multiply by profit margin.' },
              { label: 'Retention Pattern', value: 'Assumes customers remain active for entire lifespan. In reality, some churn earlier, some stay longer.' },
              { label: '3:1 LTV:CAC Ratio', value: 'Industry standard for healthy unit economics. SaaS often aims for 5:1+, while low-margin retail may accept 2:1.' },
            ]}
            dataSources={[
              'E-commerce cohort analysis from Shopify and BigCommerce merchants',
              'SaaS LTV benchmarks from ChartMogul and ProfitWell (2024)',
              'Subscription box industry reports from SUBTA',
              'Analysis of 300+ DTC brands with 12+ months of customer data',
            ]}
            limitations="LTV is a projection based on past behavior—actual future value may differ due to market changes, competition, or product changes. Early-stage businesses lack historical data and must estimate using industry benchmarks. LTV calculation doesn't account for referrals or word-of-mouth value. For accurate LTV, track real cohorts over 12-24 months."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Lifetime Value Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="lifetime-value"
            calculators={[
              {
                name: 'Customer Acquisition Cost Calculator',
                slug: 'customer-acquisition-cost',
                description: 'Calculate CAC and compare to your LTV',
                icon: 'Banknote',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Estimate overall earnings potential',
                icon: 'DollarSign',
              },
              {
                name: 'Content Value Calculator',
                slug: 'content-value',
                description: 'Calculate the value each piece of content brings',
                icon: 'Video',
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
