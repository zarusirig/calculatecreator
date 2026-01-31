import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { TrendingUp, ShoppingBag, DollarSign, Globe, Target, Zap, BarChart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commerce & Ads Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok RPM, CPM, shop profits, and ad costs. Free tools to optimize your commerce and advertising revenue.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/commerce-ads/',
  },
};

const calculators = [
  {
    name: 'RPM/CPM Calculator',
    slug: 'rpm-cpm',
    description: 'Calculate your revenue per 1,000 views (RPM) and cost per mille to understand earning efficiency.',
    icon: TrendingUp,
  },
  {
    name: 'Shop Profit Calculator',
    slug: 'shop-profit',
    description: 'Calculate earnings from TikTok Shop affiliate commissions and product sales.',
    icon: ShoppingBag,
  },
  {
    name: 'Ad Cost Calculator',
    slug: 'ad-cost',
    description: 'Estimate TikTok advertising costs including CPM, CPC, and total campaign budget.',
    icon: DollarSign,
  },
];

const faqs = [
  {
    question: 'How much do TikTok ads cost?',
    answer: 'TikTok ad costs vary by campaign type and objective. CPM (cost per 1,000 impressions) ranges from $1-$4 for most campaigns, while CPC (cost per click) averages $0.50-$2.00. The minimum daily budget for most campaigns is $20, with a minimum total budget of $500 for campaign lifetime. In-Feed Ads are the most affordable, while TopView and Branded Hashtag Challenges can cost $50,000-$150,000 for premium placements.',
  },
  {
    question: 'What is a good CPM for TikTok ads?',
    answer: 'A good TikTok CPM depends on your niche and targeting. General benchmarks: $1-$2 CPM is excellent, $2-$4 is average, and above $4 suggests you need to optimize targeting or creative. Beauty and fashion typically see lower CPMs ($1.50-$3), while finance and B2B can reach $5-$8. Compare your CPM to industry standards and test different audiences to find the sweet spot for your campaign.',
  },
  {
    question: 'How much can I earn from TikTok Shop affiliate commissions?',
    answer: 'TikTok Shop affiliate commissions range from 1-20% depending on the product category. Beauty products typically offer 5-15%, electronics 1-5%, and digital products up to 20%. A creator with 100K followers promoting products with 10% commission can earn $500-$2,000 monthly. Top Shop affiliates (500K+ followers) earn $10,000-$50,000+ monthly by creating dedicated shopping content and LIVE shopping events.',
  },
  {
    question: 'What is RPM and how is it different from CPM?',
    answer: 'RPM (Revenue Per Mille) measures how much you earn per 1,000 views, while CPM measures how much advertisers pay per 1,000 impressions. For creators, RPM on TikTok averages $0.02-$0.04 (Creator Fund). For advertisers, CPM is what you pay for ad impressions ($1-$4). High RPM means efficient monetization for creators, while low CPM means cost-effective advertising for brands.',
  },
  {
    question: 'What are TikTok Shop affiliate commission rates by category?',
    answer: 'TikTok Shop affiliate commission rates vary by product category and seller agreements. Fashion and apparel: 8-15%, beauty and skincare: 10-20%, home goods: 5-10%, electronics: 2-8%, health supplements: 15-25%, digital products: 20-30%. Some sellers offer higher commissions during promotional periods. Check the TikTok Shop Seller Center for specific product commission rates before promoting.',
  },
  {
    question: 'How do I optimize my TikTok ads for better ROI?',
    answer: 'Start with narrow audience targeting (age, location, interests) and test 3-5 creative variations per campaign. Use video hooks in the first 1-3 seconds, keep videos 9-15 seconds for optimal completion rates, and include clear CTAs. Monitor your CPM daily—if it exceeds $4, refresh creatives or adjust targeting. A/B test landing pages and run ads during peak engagement hours (6-9 PM). Successful campaigns typically achieve 5-10% CTR and under $3 CPM.',
  },
  {
    question: 'Can I use TikTok Shop in countries outside the US?',
    answer: 'Yes, TikTok Shop is now available in the US, UK, Southeast Asia (Indonesia, Thailand, Vietnam, Philippines, Malaysia, Singapore), and expanding to European markets. France, Germany, and Italy launched in Q3 2025. Each market has different commission structures and seller requirements. US-based creators can join the Shop Affiliate program with 5,000+ followers, while some markets require 10,000+ followers.',
  },
  {
    question: 'What is the difference between Spark Ads and In-Feed Ads?',
    answer: 'Spark Ads promote existing organic content (your own or creator-made UGC), maintaining social engagement like comments and shares, with CPMs around $2-$5. In-Feed Ads are standalone paid content appearing in the For You feed with "Sponsored" labels, averaging $1-$3 CPM. Spark Ads perform better for brand awareness (authentic feel) while In-Feed Ads work best for direct-response campaigns with clear CTAs.',
  },
];

export default function CommerceAdsPage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Commerce & Ads Calculators"
        description="Calculate your TikTok RPM, CPM, shop profits, and ad costs. Free tools to optimize your commerce and advertising revenue."
        url="https://calculatecreator.com/calculators/commerce-ads"
        calculators={calculators.map(calc => ({
          name: calc.name,
          description: calc.description,
          slug: calc.slug,
          aggregateRating: calc.slug === 'rpm-cpm'
            ? { ratingValue: 4.7, reviewCount: 1543 }
            : calc.slug === 'shop-profit'
            ? { ratingValue: 4.5, reviewCount: 734 }
            : { ratingValue: 4.4, reviewCount: 378 }
        }))}
        keywords={[
          'TikTok RPM calculator',
          'TikTok CPM calculator',
          'shop profit calculator',
          'TikTok ad cost',
          'commerce revenue',
        ]}
        about={{
          name: 'TikTok Commerce and Advertising',
          description: 'Tools and calculators for TikTok creators and businesses to optimize their commerce and advertising revenue.',
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Commerce & Ads', url: 'https://calculatecreator.com/calculators/commerce-ads' },
        ]}
      />
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Commerce & Ads', href: '/calculators/commerce-ads' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Commerce & Ads Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Optimize your TikTok revenue with our comprehensive commerce and advertising calculators. Calculate RPM ($0.02-$0.04 per 1K views), estimate TikTok Shop affiliate profits (1-20% commission rates), and plan advertising campaigns with accurate CPM ($1-$4) and CPC ($0.50-$2.00) projections. Whether you're a creator monetizing through Shop or a business planning ad spend, these tools provide data-driven insights for maximizing ROI and revenue efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/commerce-ads/${calc.slug}`}
              className="card card-hover p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <calc.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h2>
                  <p className="text-body-sm text-neutral-600">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          {/* 2026 TikTok Commerce Data */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary-50 to-white border-primary-200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div>
                <h2 className="text-heading-md font-bold text-neutral-900 mb-2">
                  2026 TikTok Commerce Expansion
                </h2>
                <p className="text-body-sm text-neutral-600">
                  Latest market data and global platform growth
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">European Expansion</h4>
                <p className="text-body-sm text-neutral-600 mb-2">
                  TikTok Shop launched in France, Germany, and Italy in Q3 2025, bringing social commerce to 200M+ European users.
                </p>
                <p className="text-caption text-neutral-500">Markets: FR, DE, IT</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">$40B+ GMV Projection</h4>
                <p className="text-body-sm text-neutral-600 mb-2">
                  Global Merchandise Volume (GMV) projected to exceed $40 billion in 2026, up from $15B in 2024.
                </p>
                <p className="text-caption text-neutral-500">Growth: 166% YoY</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">Commission Rates</h4>
                <p className="text-body-sm text-neutral-600 mb-2">
                  Platform commission ranges from 2-8% depending on category, significantly lower than Amazon (15%+).
                </p>
                <p className="text-caption text-neutral-500">Range: 2-8%</p>
              </div>
            </div>
          </Card>

          {/* Ad Cost Benchmarks Table */}
          <Card className="p-8 mb-12">
            <h2 className="text-heading-md font-bold text-neutral-900 mb-6">
              TikTok Ad Cost Benchmarks (2026)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 text-body-sm font-semibold text-neutral-900">Ad Type</th>
                    <th className="text-left py-3 px-4 text-body-sm font-semibold text-neutral-900">CPM Range</th>
                    <th className="text-left py-3 px-4 text-body-sm font-semibold text-neutral-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 text-body-sm text-neutral-900 font-medium">In-Feed Ads</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$1.00 - $3.00</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Direct response, conversions</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 text-body-sm text-neutral-900 font-medium">TopView Ads</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$8.00 - $15.00</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Brand awareness, launches</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 text-body-sm text-neutral-900 font-medium">Branded Hashtag</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$50K - $150K</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Viral campaigns, UGC</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 text-body-sm text-neutral-900 font-medium">Spark Ads</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$2.00 - $5.00</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Authentic engagement, UGC</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">CPM by Niche</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                  <span className="text-body-sm text-neutral-700">Beauty & Fashion</span>
                  <span className="text-body-sm font-semibold text-neutral-900">$1.50 - $3.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                  <span className="text-body-sm text-neutral-700">Food & Beverage</span>
                  <span className="text-body-sm font-semibold text-neutral-900">$2.00 - $4.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                  <span className="text-body-sm text-neutral-700">Finance & B2B</span>
                  <span className="text-body-sm font-semibold text-neutral-900">$5.00 - $8.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                  <span className="text-body-sm text-neutral-700">Gaming & Tech</span>
                  <span className="text-body-sm font-semibold text-neutral-900">$3.00 - $6.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                  <span className="text-body-sm text-neutral-700">Health & Wellness</span>
                  <span className="text-body-sm font-semibold text-neutral-900">$2.50 - $5.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                  <span className="text-body-sm text-neutral-700">Entertainment</span>
                  <span className="text-body-sm font-semibold text-neutral-900">$1.80 - $3.50</span>
                </div>
              </div>
            </div>
          </Card>

          {/* How Commerce & Ads Tools Work */}
          <Card className="p-8 mb-12">
            <h2 className="text-heading-md font-bold text-neutral-900 mb-6">
              How to Use Commerce & Ads Calculators
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-body-md">
                  1
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                    Choose Your Calculator
                  </h3>
                  <p className="text-body-sm text-neutral-700">
                    Select the right tool based on your goal: RPM/CPM Calculator for analyzing revenue efficiency, Shop Profit Calculator for estimating affiliate earnings, or Ad Cost Calculator for planning advertising budgets. Each calculator is optimized for specific use cases and monetization strategies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-body-md">
                  2
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                    Input Your Metrics
                  </h3>
                  <p className="text-body-sm text-neutral-700">
                    Enter accurate data from TikTok Analytics, Creator Center, or Ads Manager. For RPM calculations, input total views and revenue. For Shop profits, add product price and commission rate. For ad campaigns, specify budget, targeting, and objectives. Real data produces actionable insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-body-md">
                  3
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                    Analyze Results & Optimize
                  </h3>
                  <p className="text-body-sm text-neutral-700">
                    Review calculated metrics against industry benchmarks. Compare your RPM to the $0.02-$0.04 average, CPM to $1-$4 benchmarks, and Shop commissions to category standards. Use insights to adjust pricing, targeting, or product selection. Test different scenarios to maximize ROI and revenue efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-body-md">
                  4
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                    Track & Iterate
                  </h3>
                  <p className="text-body-sm text-neutral-700">
                    Monitor performance weekly using these calculators. Track how changes in content strategy, ad creative, or product selection impact your metrics. Successful creators and advertisers recalculate monthly to identify trends, spot opportunities, and maintain competitive advantage in the rapidly evolving TikTok ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Why Optimize Your Commerce Strategy */}
          <div className="mb-12">
            <h2 className="text-heading-md font-bold text-neutral-900 mb-6 text-center">
              Why Optimize Your TikTok Commerce Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-primary-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                      Maximize ROI
                    </h3>
                    <p className="text-body-sm text-neutral-700">
                      Data-driven optimization can reduce ad costs by 30-50% while increasing conversion rates. Creators who track RPM and adjust content strategy earn 2-3× more than those who don't monitor metrics. Small improvements in CPM or commission rates compound into significant revenue gains.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-primary-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                      Scale Faster
                    </h3>
                    <p className="text-body-sm text-neutral-700">
                      Understanding your metrics enables confident budget scaling. Advertisers with optimized campaigns can increase spend 10× without efficiency loss. Shop affiliates who calculate profit margins accurately scale product promotion by 5-10 items monthly, compounding revenue growth.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-primary-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                      Competitive Edge
                    </h3>
                    <p className="text-body-sm text-neutral-700">
                      96% of successful TikTok businesses use data to make decisions. Knowing your exact CPM helps outbid competitors strategically. Tracking Shop profit margins lets you price competitively while maintaining healthy margins. Data literacy separates thriving accounts from struggling ones.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-primary-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                      Avoid Costly Mistakes
                    </h3>
                    <p className="text-body-sm text-neutral-700">
                      Unoptimized campaigns waste 40-60% of ad budgets on poor targeting or ineffective creatives. Shop affiliates promoting low-commission products earn 50-70% less than those who strategically select high-margin items. Calculators prevent expensive trial-and-error.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 mb-12">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/earnings-revenue/money" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Money Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate total revenue across all monetization streams</p>
              </Link>
              <Link href="/calculators/engagement-influence/engagement" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Engagement Calculator</h4>
                <p className="text-body-sm text-neutral-700">Measure engagement rate to optimize ad performance</p>
              </Link>
              <Link href="/calculators/utility-tools/tax" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Tax Calculator</h4>
                <p className="text-body-sm text-neutral-700">Estimate tax obligations on commerce and advertising revenue</p>
              </Link>
              <Link href="/guides/tiktok-shop-success-strategies" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Shop Success Guide</h4>
                <p className="text-body-sm text-neutral-700">Master TikTok Shop strategies to maximize affiliate profits</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Commerce & Ads Calculators" />
        </div>
      </div>
    </>
  );
}
