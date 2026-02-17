import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { BookOpen, DollarSign, Globe, Gift, ShoppingBag, Calendar, CreditCard, FileText, CheckCircle, Clock, ArrowRight, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "TikTok Reference Data and Benchmark Insights Guide",
  description: "Review TikTok reference data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  keywords: ['tiktok reference', 'creator fund countries', 'tiktok payment schedule', 'live gift values', 'shop commission rates', 'tiktok payout'],
  alternates: {
    canonical: 'https://calculatecreator.com/reference/',
  },
  openGraph: {
    title: 'TikTok Reference Data & Official Rates | 2026',
    description: 'Complete reference library for TikTok creators with official rates, payment schedules, eligible countries, and commission structures.',
    url: 'https://calculatecreator.com/reference/',
    type: 'website',
  },
};

const references = [
  {
    name: 'Creator Fund Eligible Countries',
    slug: 'creator-fund-countries',
    description: 'Full list of countries where the TikTok Creator Fund is available, with eligibility requirements.',
    icon: Globe,
    category: 'Eligibility',
  },
  {
    name: 'Creator Fund Countries (Detailed)',
    slug: 'creator-fund-eligible-countries',
    description: 'In-depth guide to the Creator Fund availability by region, with application requirements and alternatives.',
    icon: FileText,
    category: 'Eligibility',
  },
  {
    name: 'Creator Fund Payment Schedule',
    slug: 'creator-fund-payment-schedule',
    description: 'Learn how TikTok pays Creator Fund earnings, including processing times and payment methods.',
    icon: Calendar,
    category: 'Payments',
  },
  {
    name: 'LIVE Gifts Value Chart',
    slug: 'live-gifts-value-chart',
    description: 'Full chart of TikTok LIVE gift values in coins, diamonds, and USD, with creator payout amounts.',
    icon: Gift,
    category: 'LIVE',
  },
  {
    name: 'Shop Commission Rates',
    slug: 'shop-commission-rates',
    description: 'TikTok Shop commission rates by product category for sellers and affiliate creators.',
    icon: ShoppingBag,
    category: 'Shop',
  },
  {
    name: 'Shop Payment Schedule',
    slug: 'shop-payment-schedule',
    description: 'TikTok Shop payout timeline for sellers and affiliates, including settlement periods and withdrawal options.',
    icon: CreditCard,
    category: 'Payments',
  },
  {
    name: 'TikTok Shop Payment Schedule',
    slug: 'tiktok-shop-payment-schedule',
    description: 'Detailed breakdown of TikTok Shop payment processing, bi-weekly payouts, and fund availability.',
    icon: DollarSign,
    category: 'Payments',
  },
];

const faqs = [
  {
    question: 'How often does TikTok update their official rates and policies?',
    answer: '**TikTok updates policies quarterly, with major changes announced 30 days in advance.** Creator Fund Revenue Per Mille (RPM) rates fluctuate monthly based on the fund pool and total eligible views. Shop commission rates remain stable but change during promotional periods. We update our reference data within 24 to 48 hours of any official TikTok announcement.',
  },
  {
    question: 'Which countries have TikTok Creator Fund?',
    answer: '**As of 2026, the TikTok Creator Fund (now Creator Rewards) is available in 7 countries: the US, UK, Germany, France, Italy, Spain, and Brazil.** Each country has specific eligibility requirements. These include minimum follower counts (10K), view thresholds (100K views in 30 days), and age requirements (18+). Some regions offer alternative programs like the Creativity Program.',
  },
  {
    question: 'When does TikTok pay creators?',
    answer: '**Creator Fund and Rewards payments are processed monthly, 30 to 45 days after the earning period.** LIVE gift diamond withdrawals require a $50 minimum, with payouts processed within 7 to 14 business days. TikTok Shop pays on a bi-weekly schedule. Funds become available 7 to 14 days after the settlement period ends.',
  },
  {
    question: 'What percentage does TikTok take from LIVE gifts?',
    answer: '**TikTok takes about 50% of the LIVE gift value.** Viewers purchase coins and send gifts. Creators receive about half the coin value as diamonds. For example, a gift costing 100 coins ($1.50) gives the creator roughly 50 diamonds ($0.25). The exact percentage varies slightly by region.',
  },
  {
    question: 'What are TikTok Shop commission rates?',
    answer: '**TikTok Shop commission rates vary by product category.** Electronics pay 2 to 4%, Fashion 5 to 10%, Beauty 8 to 12%, Home and Garden 6 to 10%, and Food and Beverages 10 to 15%. Affiliate creators earn 5 to 20% commission on referred sales. Rates increase during promotional campaigns or for top-performing sellers.',
  },
  {
    question: 'How do I know if reference data is accurate?',
    answer: '**We source our reference data directly from the official TikTok Creator Portal, the Seller Center, and press releases.** We cross-reference with creator community reports and update within 48 hours of any changes. Each reference page includes a "Last Updated" date so you know the information is current.',
  },
];

const categoryColors: Record<string, string> = {
  'Eligibility': 'bg-blue-100 text-blue-700',
  'Payments': 'bg-green-100 text-green-700',
  'LIVE': 'bg-pink-100 text-pink-700',
  'Shop': 'bg-purple-100 text-purple-700',
};

export default function ReferencePage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Reference Data & Official Rates"
        description="Complete reference library for TikTok creators with official rates, payment schedules, eligible countries, gift values, and commission structures."
        url="https://calculatecreator.com/reference/"
        calculators={references.map(r => ({ name: r.name, description: r.description, slug: r.slug }))}
        keywords={['tiktok reference', 'creator fund', 'payment schedule', 'gift values', 'commission rates']}
        about={{
          name: 'TikTok Creator Reference',
          description: 'Official rates, schedules, and data for TikTok monetization programs',
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Reference', url: 'https://calculatecreator.com/reference/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Reference', href: '/reference/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6">
              <BookOpen size={32} />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Reference Data & Official Rates
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              This is your resource library for TikTok creator monetization. Access official data on Creator Fund eligibility, payment schedules, LIVE gift values, Shop commission rates, and payout timelines. We maintain accurate, up-to-date information sourced directly from the official TikTok documentation and creator portals. All data is updated within 48 hours of any policy changes.
            </p>
          </div>

          {/* Category Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All', 'Eligibility', 'Payments', 'LIVE', 'Shop'].map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-body-sm font-medium ${
                  cat === 'All' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Reference Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {references.map((ref) => (
              <Link
                key={ref.slug}
                href={`/reference/${ref.slug}`}
                className="card card-hover p-6 group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ref.icon size={24} />
                    </div>
                    <span className={`px-2 py-1 rounded text-label-sm font-medium ${categoryColors[ref.category]}`}>
                      {ref.category}
                    </span>
                  </div>
                  <h2 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {ref.name}
                  </h2>
                  <p className="text-body-sm text-neutral-600 flex-grow mb-4">
                    {ref.description}
                  </p>
                  <div className="flex items-center text-body-sm text-primary-600 font-medium">
                    <span>View Reference</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Why Reference Data Matters */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Why Accurate Reference Data Matters
            </h2>
            <div className="space-y-6 text-body-md text-neutral-700">
              <p>
                Misinformation about the monetization programs of TikTok is common online. Outdated blog posts, misleading YouTube videos, and incorrect social media claims lead creators to make poor decisions about their content strategy and income expectations.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle size={20} /> Accurate Planning
                  </h3>
                  <p className="text-body-sm text-green-800">
                    Know exactly when payments arrive, what rates to expect, and which programs you qualify for. Make informed decisions about content investment and revenue diversification.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Clock size={20} /> Cash Flow Management
                  </h3>
                  <p className="text-body-sm text-blue-800">
                    Payment schedules help you plan finances. The Creator Fund pays monthly with a 30 to 45 day delay. The Shop pays bi-weekly. Plan accordingly.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Globe size={20} /> Regional Awareness
                  </h3>
                  <p className="text-body-sm text-purple-800">
                    Monetization availability varies by country. Know which programs are available in your region. Learn what alternatives exist for ineligible countries.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <DollarSign size={20} /> Revenue Optimization
                  </h3>
                  <p className="text-body-sm text-amber-800">
                    Exact commission rates and gift values help you prioritize the right monetization methods for maximum earnings.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Sources */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Our Data Sources
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">TikTok Creator Portal</h3>
                <p className="text-body-sm text-neutral-700">
                  Official documentation from the TikTok Creator Portal includes Creator Fund rates, eligibility requirements, and payment schedules directly from the source.
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">TikTok Seller Center</h3>
                <p className="text-body-sm text-neutral-700">
                  Commission rates, payment timelines, and policy updates for TikTok Shop sellers and affiliate creators come from the Seller Center documentation.
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Official Press Releases</h3>
                <p className="text-body-sm text-neutral-700">
                  Major policy changes, new feature announcements, and program expansions come from the official TikTok newsroom and press releases.
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Creator Community Verification</h3>
                <p className="text-body-sm text-neutral-700">
                  We cross-reference official data with real creator experiences from verified accounts to ensure accuracy and to identify regional variations.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Reference Table */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Quick Reference: Key Numbers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b-2 border-neutral-300">
                    <th className="text-left py-3 px-4 font-semibold">Program</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Rate</th>
                    <th className="text-left py-3 px-4 font-semibold">Payment Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium">Creator Fund/Rewards</td>
                    <td className="py-3 px-4">$0.50-$1.00 per 1K views</td>
                    <td className="py-3 px-4">Monthly (30-45 day delay)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium">LIVE Gifts</td>
                    <td className="py-3 px-4">$0.005 per diamond (50% split)</td>
                    <td className="py-3 px-4">On-demand ($50 minimum)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium">TikTok Shop (Seller)</td>
                    <td className="py-3 px-4">2-8% platform fee</td>
                    <td className="py-3 px-4">Bi-weekly</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium">TikTok Shop (Affiliate)</td>
                    <td className="py-3 px-4">5-20% commission</td>
                    <td className="py-3 px-4">Bi-weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-neutral-500 mt-4">
              * Rates as of January 2026. See individual reference pages for detailed breakdowns and regional variations.
            </p>
          </Card>

          {/* Important Notes */}
          <Card className="max-w-4xl mx-auto mb-8 bg-amber-50 border border-amber-200">
            <h2 className="text-heading-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
              <AlertCircle size={24} /> Important Notes
            </h2>
            <ul className="space-y-3 text-body-md text-amber-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Rates and policies change without notice. Verify current information in the official TikTok portals before making major decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Regional variations exist. Payment methods, processing times, and available programs all differ by country.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>The Creator Fund RPM fluctuates based on the total fund pool and eligible views. Treat RPM figures as estimates, not guarantees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>This is an unofficial resource. We are not affiliated with TikTok. Consult official sources for definitive policy information.</span>
              </li>
            </ul>
          </Card>

          {/* Related Calculators */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Related Calculators
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/tiktok-creator-fund/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-1">Creator Fund Calculator</h3>
                <p className="text-body-sm text-neutral-600">Estimate your Creator Fund earnings</p>
              </Link>
              <Link href="/calculators/live-gifts/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-1">LIVE Gifts Calculator</h3>
                <p className="text-body-sm text-neutral-600">Calculate gift values and payouts</p>
              </Link>
              <Link href="/calculators/coins-gifts-diamonds/diamonds/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-1">Diamond Converter</h3>
                <p className="text-body-sm text-neutral-600">Convert diamonds to real money</p>
              </Link>
            </div>
          </Card>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <FAQSection
              pageName="TikTok Reference"
              faqs={faqs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
