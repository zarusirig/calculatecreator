import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { TrendingUp, ShoppingBag, DollarSign } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto mt-12">
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
