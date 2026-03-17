import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle,
  Clock3,
  DollarSign,
  Eye,
  Globe,
  History,
  Users,
  Video,
} from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT, getPersonAuthorForSchema } from '@/lib/eeat/page-eeat';
import { CreatorFundCalculatorWidget } from '@/components/calculators/tiktok-creator-fund/CalculatorWidget';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';

export const metadata: Metadata = {
  title: 'TikTok Creator Fund Calculator (Legacy Estimate)',
  description: 'Estimate historical Creator Fund payouts using the legacy RPM range and compare that older program with current TikTok monetization options.',
  keywords: [
    'tiktok creator fund calculator',
    'creator fund earnings',
    'legacy creator fund',
    'tiktok rpm calculator',
    'creator rewards program',
  ],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/tiktok-creator-fund/',
  },
};

const faqData = [
  {
    question: 'Is the TikTok Creator Fund still available?',
    answer:
      'No. As of March 15, 2026, TikTok support says the Creator Fund is no longer available. TikTok now directs eligible creators to the Creator Rewards Program.',
  },
  {
    question: 'What does this calculator estimate now?',
    answer:
      'This tool estimates legacy Creator Fund payouts using the historical RPM range that many creators associated with the old fund. It is useful for benchmarking past earnings or comparing the older program with newer monetization options.',
  },
  {
    question: 'How much did the Creator Fund pay per 1,000 views?',
    answer:
      'This legacy model uses a historical range of about $0.02-$0.04 per 1,000 views, then adjusts that range by engagement rate and niche. Actual payouts varied by time period, geography, and creator performance.',
  },
  {
    question: 'What are the current Creator Rewards requirements?',
    answer:
      'TikTok support lists 10,000 followers, 100,000 views in the last 30 days, an account in good standing, and original public videos longer than 1 minute among the key Creator Rewards requirements in supported regions.',
  },
  {
    question: 'Should I still use a Creator Fund calculator?',
    answer:
      'Use it for historical comparisons, archive content, or to understand how little the legacy fund paid relative to other creator income streams. For current planning, use the TikTok Money Calculator and Creator Rewards guidance instead.',
  },
  {
    question: 'What should creators focus on instead of the old Fund?',
    answer:
      'Focus on Creator Rewards if you are eligible, plus broader monetization channels like brand deals, LIVE gifts, TikTok Shop, and diversified revenue planning through the TikTok Money Calculator.',
  },
];

export default function TikTokCreatorFundCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Creator Fund Calculator (Legacy Estimate)"
        description="Estimate historical Creator Fund earnings based on views, engagement rate, and content niche, then compare the old model with current TikTok monetization paths."
        url="https://tiktokcalculator.net/calculators/tiktok-creator-fund/"
        datePublished="2024-01-15"
        dateModified="2026-03-15"
        keywords={['tiktok creator fund calculator', 'creator fund earnings', 'legacy creator fund', 'creator rewards program']}
        personAuthor={getPersonAuthorForSchema('tiktok-creator-fund')}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net' },
          { name: 'Calculators', url: 'https://tiktokcalculator.net/calculators/' },
          { name: 'Creator Fund Calculator', url: 'https://tiktokcalculator.net/calculators/tiktok-creator-fund/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators/' },
              { label: 'Creator Fund Calculator', href: '/calculators/tiktok-creator-fund/' },
            ]}
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-6">
              <DollarSign size={32} />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-warning-50 px-4 py-2 text-sm font-medium text-warning-800 mb-6">
              <AlertTriangle size={16} />
              Legacy estimator only
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Creator Fund Calculator (Legacy Estimate)
            </h1>
            <p className="text-lg font-medium text-neutral-800 max-w-3xl mx-auto mb-3">
              The TikTok Creator Fund paid approximately $0.02–$0.04 per 1,000 views before it was discontinued. This legacy calculator estimates what the old Fund would have paid based on your views, engagement, and niche.
            </p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-4">
              The Creator Fund is no longer available. This page now preserves a historical payout model so you can estimate legacy Fund earnings, compare the old program with current options, and understand why most creators moved on to broader monetization strategies.
            </p>
            <p className="text-body-md text-neutral-600 max-w-3xl mx-auto">
              For current planning, start with the{' '}
              <Link href="/guides/creator-rewards-program/" className="text-primary-600 hover:text-primary-700 underline">
                Creator Rewards Program guide
              </Link>{' '}
              and the{' '}
              <Link href="/calculators/tiktok-money/" className="text-primary-600 hover:text-primary-700 underline">
                TikTok Money Calculator
              </Link>
              .
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="tiktok-creator-fund" />
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <History size={20} className="text-primary-600" />
                  Program status
                </h2>
                <p className="text-body-sm text-neutral-700">
                  The Creator Fund is discontinued. This page models the legacy payout structure rather than an active program.
                </p>
              </Card>
              <Card className="p-6">
                <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <DollarSign size={20} className="text-success-600" />
                  Historical payout model
                </h2>
                <p className="text-body-sm text-neutral-700">
                  This estimator uses a historical RPM range of roughly $0.02-$0.04 per 1,000 views, then adjusts it by engagement and niche.
                </p>
              </Card>
              <Card className="p-6">
                <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Video size={20} className="text-info-600" />
                  Current replacement
                </h2>
                <p className="text-body-sm text-neutral-700">
                  Creator Rewards is the current program in supported regions and requires original public videos longer than 1 minute.
                </p>
              </Card>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <CreatorFundCalculatorWidget />
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <InputsExplained
              inputs={[
                {
                  name: 'Monthly Views',
                  description: 'Estimated monthly views across the content you want to benchmark against the legacy Fund model',
                  example: '500000',
                  required: true,
                  validRange: '100,000+',
                },
                {
                  name: 'Engagement Rate',
                  description: 'Used to adjust the historical RPM range up or down',
                  example: '5',
                  required: true,
                  validRange: '0-100%',
                },
                {
                  name: 'Content Niche',
                  description: 'Applies the legacy niche multiplier used in the estimator',
                  example: 'Finance',
                  required: true,
                },
              ]}
              note="This tool models the discontinued Creator Fund only. It does not calculate live Creator Rewards payouts."
            />
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircle size={22} className="text-success-600" />
                Historical Fund thresholds
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                These are the legacy thresholds creators commonly associated with the Fund in supported markets:
              </p>
              <div className="space-y-3">
                {[
                  { req: '10,000+ followers', Icon: Users },
                  { req: '100,000+ views in the last 30 days', Icon: Eye },
                  { req: '18+ years old', Icon: CheckCircle },
                  { req: 'Account in good standing', Icon: CheckCircle },
                  { req: 'Eligible country or region', Icon: Globe },
                  { req: 'Original content', Icon: Video },
                ].map((item) => (
                  <div key={item.req} className="flex items-center gap-3 rounded-lg bg-neutral-50 p-3">
                    <item.Icon size={20} className="text-primary-600" />
                    <span className="text-body-sm text-neutral-700">{item.req}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Clock3 size={22} className="text-primary-600" />
                Current Creator Rewards requirements
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                TikTok now directs eligible creators to Creator Rewards instead of the Fund:
              </p>
              <div className="space-y-3">
                {[
                  { req: '10,000+ followers', Icon: Users },
                  { req: '100,000+ views in the last 30 days', Icon: Eye },
                  { req: 'Original public videos longer than 1 minute', Icon: Video },
                  { req: 'Account in good standing', Icon: CheckCircle },
                  { req: 'Available in supported regions only', Icon: Globe },
                ].map((item) => (
                  <div key={item.req} className="flex items-center gap-3 rounded-lg bg-primary-50 p-3">
                    <item.Icon size={20} className="text-primary-700" />
                    <span className="text-body-sm text-neutral-700">{item.req}</span>
                  </div>
                ))}
              </div>
              <p className="text-body-sm text-neutral-600 mt-4">
                Read the full{' '}
                <Link href="/guides/creator-rewards-program/" className="text-primary-600 hover:text-primary-700 underline">
                  Creator Rewards Program guide
                </Link>{' '}
                for the current workflow.
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <ToolExplanationSection
              whatItDoes="This tool estimates what the discontinued Creator Fund would have paid using a historical RPM range and simple multiplier model. It is intended for archive lookups, legacy comparisons, and understanding how limited the old Fund payouts were."
              howToUse={[
                'Enter your estimated monthly views from the period you want to benchmark.',
                'Select your engagement rate and content niche so the tool can apply the legacy multipliers.',
                'Review the monthly and annual estimate as a historical comparison, not a live payout forecast.',
                'Compare the result with broader monetization planning using the TikTok Money Calculator and Creator Rewards guidance.',
              ]}
              examples={[
                {
                  scenario: 'Mid-tier creator benchmarking old payouts',
                  input: '500,000 monthly views, 5% engagement, lifestyle niche',
                  output: 'Legacy Creator Fund estimate of about $10-$20 per month.',
                },
                {
                  scenario: 'Higher-engagement finance creator',
                  input: '1,000,000 monthly views, 8% engagement, finance niche',
                  output: 'A higher legacy estimate than lifestyle content, but still far below most sponsorship income.',
                },
              ]}
              limitations={[
                'The Creator Fund is discontinued, so this is not a live program calculator.',
                'Historical payouts varied by geography, time period, and creator performance.',
                'This estimator does not predict current Creator Rewards income.',
                'The legacy model is directional and should be used for comparison, not accounting.',
              ]}
              relatedContent={[
                { title: 'Creator Rewards Program Guide', href: '/guides/creator-rewards-program/' },
                { title: 'TikTok Money Calculator', href: '/calculators/tiktok-money/' },
                { title: 'Brand Deal Rate Calculator', href: '/calculators/brand-deal-rate/' },
                { title: 'RPM Calculator', href: '/calculators/rpm/' },
              ]}
            />

            <MethodologySection
              calculatorName="TikTok Creator Fund Calculator"
              formula={`Legacy Creator Fund estimate = (Monthly Views / 1,000) x RPM

RPM = Base RPM x Engagement Multiplier x Niche Multiplier

Base RPM range used in this model: $0.02-$0.04 per 1,000 views

Engagement multipliers:
- Excellent (10%+): 1.5x
- Good (5-10%): 1.2x
- Average (2-5%): 1.0x
- Below average (<2%): 0.7x`}
              calculationExample={{
                steps: [
                  {
                    step: 'Convert monthly views into view-thousands',
                    formula: 'View-thousands = Monthly Views / 1,000',
                    values: '500,000 / 1,000',
                    result: '500 view-thousands',
                  },
                  {
                    step: 'Apply the base RPM and multipliers',
                    formula: 'Adjusted RPM = Base RPM x Engagement Multiplier x Niche Multiplier',
                    values: '$0.03 x 1.2 x 1.0',
                    result: '$0.036 adjusted RPM',
                  },
                  {
                    step: 'Estimate monthly earnings',
                    formula: 'Monthly estimate = View-thousands x Adjusted RPM',
                    values: '500 x $0.036',
                    result: '$18.00 estimated monthly payout',
                  },
                ],
                finalResult: '$18.00 monthly legacy estimate for 500,000 monthly views at 5% engagement',
              }}
              assumptions={[
                { label: 'Legacy RPM range', value: 'The calculator uses a historical $0.02-$0.04 RPM band associated with the old Creator Fund.' },
                { label: 'Engagement impact', value: 'Higher engagement shifts the modeled RPM upward within the legacy range.' },
                { label: 'Niche impact', value: 'Certain niches receive higher multipliers inside the estimator.' },
                { label: 'Current program separation', value: 'Creator Rewards is treated as a different program and is not modeled here.' },
              ]}
              dataSources={[
                'TikTok Support page stating that the Creator Fund is no longer available',
                'TikTok Support page describing Creator Rewards Program eligibility and qualified-view rules',
                'TT Calculator historical RPM model for the legacy Fund estimator',
              ]}
              limitations="This is a historical comparison tool. It does not represent a current offer from TikTok and should not be treated as live earnings guidance."
              lastUpdated="March 15, 2026"
            />

            <FAQSection pageName="TikTok Creator Fund Calculator" faqs={faqData} />

            <RelatedCalculators
              currentCalculator="tiktok-creator-fund"
              calculators={[
                { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Estimate total creator earnings across multiple income streams', icon: 'Banknote' },
                { name: 'Brand Deal Rate Calculator', slug: 'brand-deal-rate', description: 'See what sponsorships may be worth for your audience size and niche', icon: 'Handshake' },
                { name: 'RPM Calculator', slug: 'rpm', description: 'Benchmark revenue per 1,000 views across monetization models', icon: 'TrendingUp' },
                { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Measure the engagement signal that influences monetization quality', icon: 'BarChart3' },
              ]}
            />
          </div>

          <div className="mt-12">
            <PageEEAT pageSlug="tiktok-creator-fund" variant="full" />
          </div>
        </div>
      </div>
    </>
  );
}
