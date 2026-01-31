import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Gift, Banknote, DollarSign } from 'lucide-react';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'Earnings & Revenue Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok earnings from LIVE gifts, Creator Fund, and total revenue. Free tools to estimate your creator income.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/earnings-revenue/',
  },
};

const calculators = [
  {
    name: 'LIVE Earnings Calculator',
    slug: 'live-earnings',
    description: 'Estimate earnings from TikTok LIVE streaming based on viewers, duration, and gifting rate.',
    icon: Gift,
  },
  {
    name: 'Money Calculator',
    slug: 'money',
    description: 'Calculate total earnings from all monetization streams: Creator Fund, brand deals, and LIVE gifts.',
    icon: Banknote,
  },
  {
    name: 'Creator Fund Calculator',
    slug: 'creator-fund',
    description: 'Estimate monthly and annual earnings from the TikTok Creator Fund based on views and engagement.',
    icon: DollarSign,
  },
];

const faqs = [
  {
    question: 'How much can I earn from TikTok as a creator?',
    answer: 'TikTok earnings vary widely based on follower count and monetization strategy. Micro-influencers (10K-50K followers) typically earn $160-$750/month, mid-tier creators (50K-500K) earn $1,200-$12,000/month, and large creators (500K+) can earn $11,000-$50,000+ monthly when combining Creator Fund, brand deals, and LIVE gifts.',
  },
  {
    question: 'What is the TikTok Creator Fund and how much does it pay?',
    answer: 'The Creator Fund pays $0.02-$0.04 per 1,000 views (average $0.03). To qualify, you need 10K+ followers, 100K+ views in the last 30 days, be 18+, and live in an eligible country. While payments are low compared to YouTube, it provides passive income while you focus on brand deals and LIVE streaming.',
  },
  {
    question: 'How do TikTok LIVE gifts work?',
    answer: 'Viewers purchase coins and send virtual gifts during your LIVE streams. Gifts convert to diamonds at roughly 2 coins = 1 diamond. TikTok takes 50%, so you keep about $0.005 per diamond. A streamer with 100 viewers can earn $50-$200 per hour depending on engagement and audience loyalty.',
  },
  {
    question: 'Which TikTok revenue stream pays the most?',
    answer: 'Brand deals generate the highest income for most creators, typically 10-50× more than Creator Fund for the same audience size. A creator with 100K followers earning $30/month from Creator Fund can charge $1,000-$3,000 per brand deal. However, LIVE gifts can be most lucrative for highly engaging personalities.',
  },
];

export default function EarningsRevenuePage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Earnings & Revenue Calculators"
        description="Free calculators to estimate TikTok creator earnings from LIVE gifts, Creator Fund, brand deals, and total revenue across all monetization streams."
        url="https://calculatecreator.com/calculators/earnings-revenue"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Earnings & Revenue', url: 'https://calculatecreator.com/calculators/earnings-revenue' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Earnings & Revenue', href: '/calculators/earnings-revenue' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Earnings & Revenue Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your TikTok earnings from all revenue streams including Creator Fund ($0.02-$0.04/1K views), LIVE gifts (50% payout), brand deals ($10-$30/1K followers), and TikTok Shop commissions. These tools help creators estimate monthly and annual income potential based on real-world benchmarks, allowing you to understand which monetization method offers the best return on your time and effort investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/earnings-revenue/${calc.slug}`}
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
              <Link href="/calculators/engagement-influence/influencer-pricing" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Influencer Pricing Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate brand deal rates based on followers and engagement</p>
              </Link>
              <Link href="/calculators/coins-gifts-diamonds/diamonds" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Diamonds Calculator</h4>
                <p className="text-body-sm text-neutral-700">Convert diamonds from LIVE gifts to real money</p>
              </Link>
              <Link href="/calculators/utility-tools/payout" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Payout Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate net earnings after platform fees</p>
              </Link>
              <Link href="/guides/how-to-make-money-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Monetization Guide</h4>
                <p className="text-body-sm text-neutral-700">Complete guide to earning money on TikTok</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Earnings & Revenue Calculators" />
        </div>
      </div>
    </div>
    </>
  );
}
