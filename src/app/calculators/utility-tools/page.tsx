import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Receipt, Wallet, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Utility Tools | TikTok Creator Calculators',
  description: 'Essential utility calculators for TikTok creators. Calculate taxes, payouts, and check monetization eligibility.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/utility-tools/',
  },
};

const calculators = [
  {
    name: 'Tax Calculator',
    slug: 'tax',
    description: 'Estimate your tax obligations including federal, state, and self-employment taxes.',
    icon: Receipt,
  },
  {
    name: 'Payout Calculator',
    slug: 'payout',
    description: 'Calculate your expected payout after platform fees and payment processing.',
    icon: Wallet,
  },
  {
    name: 'Eligibility Checker',
    slug: 'eligibility',
    description: 'Check if you meet the requirements for TikTok monetization programs.',
    icon: CheckCircle,
  },
];

const faqs = [
  {
    question: 'Do I need to pay taxes on TikTok earnings?',
    answer: 'Yes, all TikTok earnings are taxable income in most countries. In the US, you must report earnings from Creator Fund, brand deals, LIVE gifts, and TikTok Shop as self-employment income. You\'ll owe federal income tax (10-37% based on bracket), state income tax (0-13% depending on state), and self-employment tax (15.3% on net earnings). Set aside 25-35% of gross income for taxes and make quarterly estimated payments if you expect to owe $1,000+ annually.',
  },
  {
    question: 'What are the requirements to monetize on TikTok?',
    answer: 'Creator Fund requires 10K+ followers, 100K+ video views in last 30 days, age 18+, and living in an eligible country. LIVE Gifts requires 1K+ followers and age 18+ (or 16+ with lower threshold in some regions). TikTok Shop affiliate requires no minimum followers but you must be approved. Creator Marketplace for brand deals typically requires 100K+ followers, though brands may work with smaller creators directly.',
  },
  {
    question: 'How long does it take to get paid by TikTok?',
    answer: 'Creator Fund pays monthly around the 15th-20th for the previous month\'s earnings, with a $50 minimum (some regions $10). LIVE gift diamonds can be withdrawn once you reach $50 (10,000 diamonds), processing in 5-10 business days via PayPal or bank transfer. TikTok Shop affiliate commissions are paid 14-30 days after the return period ends. Brand deal payments depend on your negotiated terms, typically Net-30 or Net-60.',
  },
  {
    question: 'What platform fees does TikTok charge creators?',
    answer: 'TikTok takes 50% commission on LIVE gifts (creators keep 50% as diamonds). Creator Fund has no fees, you keep 100% of the RPM earned. TikTok Shop charges sellers 2-8% transaction fee depending on category, but affiliates earn their full commission rate (1-20%). Brand deals through Creator Marketplace have no TikTok fees if negotiated directly, but platform takes a cut if facilitated through their system.',
  },
];

export default function UtilityToolsPage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Creator Utility Tools"
        description="Essential utility calculators for TikTok creators to manage taxes, calculate payouts after fees, and check monetization eligibility requirements."
        url="https://calculatecreator.com/calculators/utility-tools"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Utility Tools', url: 'https://calculatecreator.com/calculators/utility-tools' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Utility Tools', href: '/calculators/utility-tools' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Utility Tools
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Essential business management tools for TikTok creators. Calculate tax obligations including self-employment tax (15.3%) and income tax (10-37% federal + state), estimate actual payouts after TikTok's platform fees and payment processing charges, and verify your eligibility for monetization programs including Creator Fund (10K+ followers required), LIVE Gifts (1K+ followers), and TikTok Shop affiliate programs. Professional tools to manage your creator business finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/utility-tools/${calc.slug}`}
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
                <p className="text-body-sm text-neutral-700">Calculate total earnings across all monetization streams</p>
              </Link>
              <Link href="/calculators/coins-gifts-diamonds/diamonds" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Diamonds Calculator</h4>
                <p className="text-body-sm text-neutral-700">Convert TikTok diamonds to cash payouts</p>
              </Link>
              <Link href="/guides/creator-tax-strategy" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Creator Tax Strategy</h4>
                <p className="text-body-sm text-neutral-700">Advanced tax planning for content creators</p>
              </Link>
              <Link href="/guides/how-to-join-creator-fund-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Complete Guide</h4>
                <p className="text-body-sm text-neutral-700">Everything you need to know about joining the Creator Fund</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Utility Tools" />
        </div>
      </div>
    </div>
    </>
  );
}
