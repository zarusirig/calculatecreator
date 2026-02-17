import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Receipt, Wallet, CheckCircle, AlertCircle, DollarSign, Shield, TrendingUp, Calendar, Percent, FileText, Users, Target, Gift, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: "TikTok Utility Tools Calculator and Earnings Tool Guide",
  description: "Use this TikTok utility tools calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/utility-tools/',
  },
};

const calculators = [
  {
    name: 'Tax Calculator',
    slug: 'tax',
    description: 'Estimate tax obligations for federal, state, and self-employment taxes.',
    icon: Receipt,
  },
  {
    name: 'Payout Calculator',
    slug: 'payout',
    description: 'Calculate expected payouts after platform fees and payment processing charges.',
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
    answer: 'Yes, all TikTok earnings are taxable income in most countries. In the US, report earnings from Creator Fund, brand deals, LIVE gifts, and TikTok Shop as self-employment income. You owe federal income tax (10% to 37% based on bracket), state income tax (0% to 13% depending on state), and self-employment tax (15.3% on net earnings). Set aside 25% to 35% of gross income for taxes. Make quarterly estimated payments if you expect to owe $1,000 or more annually.',
  },
  {
    question: 'What are the requirements to monetize on TikTok?',
    answer: 'Creator Fund requires 10,000 or more followers, 100,000 or more video views in the last 30 days, age 18 or older, and residence in an eligible country. LIVE Gifts requires 1,000 or more followers and age 18 or older (16 or older with lower threshold in some regions). TikTok Shop affiliate has no minimum follower count but requires approval. Creator Marketplace for brand deals typically requires 100,000 or more followers. Brands sometimes work with smaller creators directly.',
  },
  {
    question: 'How long does it take to get paid by TikTok?',
    answer: 'Creator Fund pays monthly around the 15th to 20th for the previous month, with a $50 minimum ($10 in some regions). LIVE gift diamonds become available for withdrawal at $50 (10,000 diamonds). Processing takes 5 to 10 business days via PayPal or bank transfer. TikTok Shop affiliate commissions are paid 14 to 30 days after the return period ends. Brand deal payments depend on negotiated terms, typically Net-30 or Net-60.',
  },
  {
    question: 'What platform fees does TikTok charge creators?',
    answer: 'TikTok takes 50% commission on LIVE gifts. Creators keep 50% as diamonds. Creator Fund charges no fees, so you keep 100% of the Revenue Per Mille (RPM) earned. TikTok Shop charges sellers 2% to 8% transaction fee depending on category. Affiliates earn their full commission rate (1% to 20%). Brand deals through Creator Marketplace have no TikTok fees if negotiated directly. The platform takes a cut if deals are facilitated through their system.',
  },
  {
    question: 'When do I need to make quarterly tax payments?',
    answer: 'In the US, quarterly estimated tax payments are due April 15, June 15, September 15, and January 15. These apply if you expect to owe $1,000 or more in taxes annually. Calculate 25% to 30% of your previous quarter gross TikTok income as a safe estimate. Pay via IRS Direct Pay, EFTPS, or mail Form 1040-ES. Missing quarterly payments results in underpayment penalties at 8% annual interest. Track income monthly and adjust estimates if earnings spike or drop.',
  },
  {
    question: 'What business expenses can I deduct as a TikTok creator?',
    answer: 'Deduct ordinary and necessary business expenses on Schedule C. These include equipment (cameras, lighting, microphones, computers), software subscriptions (editing tools, analytics platforms), home office space (percentage of rent or utilities based on square footage), internet and phone (business portion), props and costumes, mileage for content shoots, professional services (accountants, lawyers, managers), and education (courses, conferences). Keep detailed records and receipts. Self-employment tax is calculated on net profit after deductions. This saves 15.3% on every dollar deducted.',
  },
  {
    question: 'What\'s the difference between Creator Fund and Creator Rewards?',
    answer: 'Creator Fund launched in 2020. It pays based on views and engagement with average RPM of $0.02 to $0.04, requires 10,000 or more followers and 100,000 or more views in 30 days, and is being phased out in many regions. Creator Rewards (Beta) launched in 2023. It pays up to 20 times more, rewards videos over 1 minute with completion rate bonuses, requires Creator Fund eligibility plus an invitation, and focuses on original content. Creator Rewards is the future monetization model with better Cost Per Mille (CPM) rates but stricter content quality requirements.',
  },
  {
    question: 'How do payment processing fees affect my TikTok payouts?',
    answer: 'TikTok deducts platform fees before payout (50% on LIVE gifts, 2% to 8% on Shop transactions). Payment processing fees also apply when withdrawing funds. PayPal charges 2.9% plus $0.30 per transaction for US accounts. Bank transfers (ACH) are typically free for US creators but take 3 to 5 business days. International wire transfers cost $15 to $40 and include currency conversion fees (2% to 4%). To minimize fees, accumulate larger balances before withdrawing. Use bank transfer over PayPal when possible. Consider the $50 minimum threshold to avoid high fee ratios on small transactions.',
  },
  {
    question: 'Should I form an LLC or S-Corp as a TikTok creator?',
    answer: 'For creators earning under $40,000 per year, a sole proprietorship (Schedule C) is sufficient and simplest. Creators consistently earning $50,000 to $75,000 or more benefit from an S-Corp. This structure saves 5% to 10% in self-employment taxes by splitting income between salary (subject to 15.3% SE tax) and distributions (not subject to SE tax). LLCs provide liability protection but do not save taxes unless you elect S-Corp status. Consult a Certified Public Accountant (CPA) to analyze your specific situation. S-Corps require payroll processing, quarterly filings, and compliance costs that sometimes outweigh tax savings for smaller creators. Most creators earning $100,000 or more benefit from S-Corp election.',
  },
  {
    question: 'What happens if I miss a quarterly tax payment?',
    answer: 'The IRS charges underpayment penalties at 8% annual interest (varies quarterly based on federal short-term rate plus 3%). A missed $3,000 quarterly payment accrues roughly $60 in penalties ($3,000 times 8% divided by 4 quarters). Penalties compound if multiple quarters are missed. To avoid penalties, ensure total quarterly payments equal at least 90% of current year tax liability or 100% of prior year tax (110% if Adjusted Gross Income (AGI) was $150,000 or more). Increase Q2 to Q4 payments proportionally if you missed Q1. IRS Form 2210 calculates exact penalty amounts. Use the Tax Calculator to estimate quarterly payments and stay compliant.',
  },
];

export default function UtilityToolsPage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Creator Utility Tools"
        description="Essential utility calculators for TikTok creators to manage taxes, calculate payouts after fees, and check monetization eligibility requirements."
        url="https://calculatecreator.com/calculators/utility-tools/"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'Utility Tools', url: 'https://calculatecreator.com/calculators/utility-tools/' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators/' },
            { label: 'Utility Tools', href: '/calculators/utility-tools/' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Utility Tools
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Access essential business management tools for TikTok creators. Calculate tax obligations including self-employment tax (15.3%) and income tax (10% to 37% federal plus state). Estimate actual payouts after platform fees and payment processing charges. Verify your eligibility for monetization programs including Creator Fund (10,000 or more followers required), LIVE Gifts (1,000 or more followers), and TikTok Shop affiliate programs.
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

        {/* Creator Operations Overview */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 text-center">Creator Operations Overview</h2>
            <p className="text-body-md text-neutral-700 mb-6 text-center max-w-2xl mx-auto">
              A successful TikTok creator business requires more than great content. Navigate tax obligations, understand platform payout structures, and meet specific eligibility requirements to unlock monetization streams. These utility tools help you manage the business side of content creation.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Receipt size={22} className="text-blue-600" />
                  <h3 className="font-semibold text-neutral-900">Tax Management</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Self-employed creators are responsible for federal income tax, self-employment tax (15.3%), and state taxes. No taxes are withheld from TikTok payments, unlike traditional employment.
                </p>
                <p className="text-body-sm text-neutral-600 italic">
                  Use the Tax Calculator to estimate quarterly payments and avoid underpayment penalties.
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Wallet size={22} className="text-blue-600" />
                  <h3 className="font-semibold text-neutral-900">Payout Processing</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  TikTok deducts platform fees before paying creators. LIVE gifts have a 50% fee. TikTok Shop charges 2% to 8%. Creator Fund has no fees. Payment processing adds another 0% to 3% when withdrawing.
                </p>
                <p className="text-body-sm text-neutral-600 italic">
                  Use the Payout Calculator to see actual take-home amounts after all fees.
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle size={22} className="text-blue-600" />
                  <h3 className="font-semibold text-neutral-900">Eligibility Requirements</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Each monetization program has specific thresholds. Creator Fund requires 10,000 or more followers. LIVE gifts need 1,000 or more. TikTok Shop has no minimum. Meeting these thresholds unlocks different revenue potential.
                </p>
                <p className="text-body-sm text-neutral-600 italic">
                  Use the Eligibility Checker to verify which programs you currently qualify for.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* 2026 Creator Tax Requirements */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <div>
                <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">2026 Creator Tax Requirements</h2>
                <p className="text-body-md text-neutral-700 mb-4">
                  Self-employed TikTok creators face 3 major tax obligations that traditional employees do not encounter. Understand these requirements to avoid penalties and budget income properly.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Percent size={18} className="text-amber-600" />
                      <h3 className="font-semibold text-neutral-900">Self-Employment Tax</h3>
                    </div>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      <strong>15.3%</strong> on net earnings covers Social Security (12.4%) and Medicare (2.9%). Creators pay the full amount. Employees split this cost with employers.
                    </p>
                    <p className="text-caption text-neutral-600">
                      Calculated on Schedule SE after business deductions
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={18} className="text-amber-600" />
                      <h3 className="font-semibold text-neutral-900">Quarterly Payments</h3>
                    </div>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      Due <strong>April 15, June 15, Sept 15, Jan 15</strong> if you expect to owe $1,000 or more annually. Failure to pay quarterly results in underpayment penalties.
                    </p>
                    <p className="text-caption text-neutral-600">
                      Use Form 1040-ES or IRS Direct Pay online
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText size={18} className="text-amber-600" />
                      <h3 className="font-semibold text-neutral-900">State Taxes</h3>
                    </div>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      <strong>0% to 13%</strong> depending on your state. California (13.3%), New York (10.9%), and Hawaii (11%) have the highest rates. 9 states have no income tax.
                    </p>
                    <p className="text-caption text-neutral-600">
                      Check your state's quarterly payment requirements
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                  <p className="text-body-sm text-neutral-800">
                    <strong>Recommended Tax Budget:</strong> Set aside 25% to 35% of gross TikTok income for taxes. A $50,000 income means roughly $7,650 in self-employment tax plus $5,000 to $10,000 in federal income tax plus state taxes. Total tax liability reaches $15,000 to $20,000. Use the Tax Calculator to estimate specific obligations based on income level and location.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Payout Fees Breakdown Table */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign size={28} className="text-primary-600" />
              <h2 className="text-heading-md font-semibold text-neutral-900">TikTok Payout Fees Breakdown</h2>
            </div>
            <p className="text-body-md text-neutral-700 mb-6">
              Platform fees from TikTok vary by revenue type. Understand these commission structures to calculate actual take-home pay and compare monetization strategies.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Revenue Type</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">TikTok Fee</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Creator Keeps</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">LIVE Gifts</td>
                    <td className="p-4 text-body-md text-red-600 font-semibold">50%</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">50%</td>
                    <td className="p-4 text-body-sm text-neutral-700">Highest platform fee. $100 in gifts = $50 payout</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">TikTok Shop (Seller)</td>
                    <td className="p-4 text-body-md text-orange-600 font-semibold">2-8%</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">92-98%</td>
                    <td className="p-4 text-body-sm text-neutral-700">Varies by product category. Electronics 2%, fashion 5-8%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Creator Fund</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">0%</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">100%</td>
                    <td className="p-4 text-body-sm text-neutral-700">No platform fees but low RPM ($0.02-$0.04)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Creator Rewards</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">0%</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">100%</td>
                    <td className="p-4 text-body-sm text-neutral-700">Replaces Creator Fund with 10-20x higher rates</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Shop Affiliate</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">0%</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">100%</td>
                    <td className="p-4 text-body-sm text-neutral-700">Keep full commission (1-20% of sale price)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Brand Deals (Direct)</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">0%</td>
                    <td className="p-4 text-body-md text-green-600 font-semibold">100%</td>
                    <td className="p-4 text-body-sm text-neutral-700">No TikTok fees if negotiated outside platform</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Creator Marketplace</td>
                    <td className="p-4 text-body-md text-orange-600 font-semibold">Varies</td>
                    <td className="p-4 text-body-md text-neutral-700">Depends on deal</td>
                    <td className="p-4 text-body-sm text-neutral-700">TikTok may take cut if facilitated through platform</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Payment Processing</td>
                    <td className="p-4 text-body-md text-orange-600 font-semibold">0-3%</td>
                    <td className="p-4 text-body-md text-neutral-700">Varies by method</td>
                    <td className="p-4 text-body-sm text-neutral-700">PayPal 2.9% + $0.30, bank transfer free (US)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-body-sm text-neutral-800">
                <strong>Fee Impact Example:</strong> A creator earning $10,000 total keeps different amounts by source. LIVE gifts yield $5,000 after 50% fee. Shop seller yields $9,200 to $9,800 after 2% to 8% fee. Creator Fund yields $10,000 with no fee but low RPM. Brand deals yield $10,000 with no fee. Calculate net income after fees when comparing monetization strategies.
              </p>
            </div>
          </Card>
        </div>

        {/* Monetization Eligibility Requirements */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield size={28} className="text-primary-600" />
              <h2 className="text-heading-md font-semibold text-neutral-900">Monetization Eligibility Requirements</h2>
            </div>
            <p className="text-body-md text-neutral-700 mb-6">
              Each TikTok monetization program has specific eligibility criteria. Meeting these thresholds unlocks different revenue streams with varying earning potential levels.
            </p>
            <div className="space-y-6">
              {/* Creator Fund */}
              <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">Creator Fund (Being Phased Out)</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <Users size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">10,000+ Followers</p>
                      <p className="text-body-sm text-neutral-700">Minimum follower count requirement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">100,000+ Video Views</p>
                      <p className="text-body-sm text-neutral-700">In the last 30 days across all videos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Age 18+</p>
                      <p className="text-body-sm text-neutral-700">Must be legal adult in your country</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Eligible Country</p>
                      <p className="text-body-sm text-neutral-700">US, UK, Germany, France, Spain, Italy (check current list)</p>
                    </div>
                  </div>
                </div>
                <p className="text-body-sm text-neutral-700"><strong>Earning Potential:</strong> $0.02 to $0.04 RPM average. 1 million views equals $20 to $40. Being replaced by Creator Rewards in most regions.</p>
              </div>

              {/* Creator Rewards */}
              <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">Creator Rewards (Beta - Invitation Only)</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <Users size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Creator Fund Eligibility</p>
                      <p className="text-body-sm text-neutral-700">Must first meet Creator Fund requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Videos 1+ Minute</p>
                      <p className="text-body-sm text-neutral-700">Rewards focus on longer-form content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Original Content</p>
                      <p className="text-body-sm text-neutral-700">High-quality, non-reposted videos only</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">TikTok Invitation</p>
                      <p className="text-body-sm text-neutral-700">Currently invite-only, rolling out gradually</p>
                    </div>
                  </div>
                </div>
                <p className="text-body-sm text-neutral-700"><strong>Earning Potential:</strong> 10 to 20 times higher than Creator Fund. Reports of $0.50 to $1.00 or higher RPM. Completion rate bonuses reward watch time.</p>
              </div>

              {/* LIVE Gifts */}
              <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">LIVE Gifts</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <Users size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">1,000+ Followers</p>
                      <p className="text-body-sm text-neutral-700">Lower threshold than Creator Fund</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Age 18+ (or 16+ with limits)</p>
                      <p className="text-body-sm text-neutral-700">Some regions allow 16+ with lower gift limits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">LIVE Access</p>
                      <p className="text-body-sm text-neutral-700">Account must have LIVE streaming enabled</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Community Guidelines</p>
                      <p className="text-body-sm text-neutral-700">No violations or restrictions on account</p>
                    </div>
                  </div>
                </div>
                <p className="text-body-sm text-neutral-700"><strong>Earning Potential:</strong> Highly variable. Small creators earn $10 to $50 per LIVE session. Mid-tier creators earn $100 to $500. Top creators earn $1,000 or more. A 50% platform fee applies.</p>
              </div>

              {/* TikTok Shop */}
              <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">TikTok Shop Affiliate</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <Users size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">No Follower Minimum</p>
                      <p className="text-body-sm text-neutral-700">Anyone can apply as Shop affiliate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Age 18+</p>
                      <p className="text-body-sm text-neutral-700">Must be legal adult</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Shop Availability</p>
                      <p className="text-body-sm text-neutral-700">TikTok Shop must be available in your region</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">Application Approval</p>
                      <p className="text-body-sm text-neutral-700">Must be accepted into affiliate program</p>
                    </div>
                  </div>
                </div>
                <p className="text-body-sm text-neutral-700"><strong>Earning Potential:</strong> 1% to 20% commission on sales. High-engagement niches (beauty, fashion) see $500 to $5,000 or more monthly. Commission varies by product.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* 2026 Platform Changes Affecting Payouts & Taxes */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <div>
                <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">2026 Platform Changes Affecting Payouts & Taxes</h2>
                <p className="text-body-md text-neutral-700 mb-4">
                  TikTok is implementing several major changes to monetization programs throughout 2026. These changes directly impact creator earnings and tax obligations. Understand these shifts for accurate financial planning and tax compliance.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                      <TrendingUp size={18} className="text-purple-600 mr-2" />
                      Creator Rewards Expansion (Q1-Q2 2026)
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      TikTok is rolling out Creator Rewards globally, replacing the traditional Creator Fund in most regions. This program pays 10 to 20 times higher rates ($0.50 to $1.00 or higher RPM vs $0.02 to $0.04). It focuses on videos over 1 minute with high completion rates. Creators currently earning $500 per month from Creator Fund see $5,000 to $10,000 per month potential.
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      <strong>Tax Impact:</strong> Higher income moves creators into higher tax brackets (22% or 24% federal vs 12%). Larger quarterly estimated payments are needed to avoid underpayment penalties.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                      <ShoppingBag size={18} className="text-purple-600 mr-2" />
                      TikTok Shop 1099-K Reporting Threshold
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      The IRS lowered the 1099-K reporting threshold to $600 in 2026 (down from $20,000 in previous years). TikTok Shop affiliates earning $50 per month ($600 per year) now receive tax forms and must report this income. Previously, many small affiliates did not receive 1099-Ks and some failed to report earnings.
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      <strong>Tax Impact:</strong> All affiliates, including micro-affiliates, must track Shop commissions and report on Schedule C. Failure to report income that TikTok reported to the IRS triggers audits.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                      <Gift size={18} className="text-purple-600 mr-2" />
                      LIVE Gifts Minimum Payout Increase
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      TikTok is testing a $100 minimum withdrawal threshold for LIVE gift diamonds in select markets (up from $50 or 10,000 diamonds). This reduces payment processing frequency and encourages creators to accumulate earnings before withdrawal. Smaller creators wait weeks or months between payouts instead of receiving monthly deposits.
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      <strong>Tax Impact:</strong> Delayed cash flow does not affect when income is taxable. You owe taxes when diamonds are earned, not when withdrawn. Track monthly earnings even if you do not hit the minimum threshold.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                      <Shield size={18} className="text-purple-600 mr-2" />
                      Enhanced Tax Documentation Requirements
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      TikTok now requires all creators to submit W-9 forms (US) or equivalent tax documentation before enabling any monetization features. This ensures accurate taxpayer information for 1099-NEC and 1099-MISC reporting. Creators who fail to submit forms have monetization frozen until compliance.
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      <strong>Tax Impact:</strong> Improved documentation means fewer discrepancies between creator-reported income and TikTok-reported payments. This reduces audit risk. Ensure your legal name matches your tax ID exactly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Why Use Utility Tools */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">Why These Tools Matter for Your Creator Business</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-primary-50 border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Receipt size={24} />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Avoid Tax Penalties & Underpayment</h3>
                  <p className="text-body-md text-neutral-700">
                    Failing to make quarterly estimated tax payments results in IRS underpayment penalties at 8% annual interest. The Tax Calculator helps you estimate federal income tax (10% to 37%), self-employment tax (15.3%), and state taxes accurately. Set aside the right percentage of income each month. Creators who do not track taxes properly face $5,000 to $15,000 or more in unexpected bills in April.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Calculate True Take-Home Income</h3>
                  <p className="text-body-md text-neutral-700">
                    Platform fees dramatically impact actual earnings. LIVE gifts have a 50% TikTok commission. Creator Fund takes 0% but pays low RPM. The Payout Calculator factors in platform fees (0% to 50%), payment processing fees (0% to 3%), and tax withholding to show real net income. Know exactly how much lands in your bank account before committing to income-dependent decisions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Verify Monetization Readiness</h3>
                  <p className="text-body-md text-neutral-700">
                    Avoid applying to programs you do not qualify for. The Eligibility Checker instantly verifies requirements for Creator Fund (10,000 or more followers, 100,000 or more views), Creator Rewards (invitation only), LIVE Gifts (1,000 or more followers), or TikTok Shop (no minimum). Track progress toward eligibility thresholds. Focus growth efforts on reaching the next monetization milestone.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Professional Financial Planning</h3>
                  <p className="text-body-md text-neutral-700">
                    Treat content creation as a business. Professional creators track every dollar of income and expenses. They calculate profit margins after fees and taxes and make data-driven decisions about monetization strategies. These utility tools provide the financial clarity needed for business loans, sponsorship negotiations, and long-term planning. Brand partners respect creators who understand their unit economics and discuss net profit margins confidently.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 mb-12">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/earnings-revenue/money/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Money Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate total earnings across all monetization streams</p>
              </Link>
              <Link href="/calculators/coins-gifts-diamonds/diamonds/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Diamonds Calculator</h4>
                <p className="text-body-sm text-neutral-700">Convert TikTok diamonds to cash payouts</p>
              </Link>
              <Link href="/guides/creator-tax-strategy/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Creator Tax Strategy</h4>
                <p className="text-body-sm text-neutral-700">Advanced tax planning for content creators</p>
              </Link>
              <Link href="/guides/how-to-join-creator-fund-complete/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
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
