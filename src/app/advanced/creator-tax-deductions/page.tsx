import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Creator Tax Deductions Guide: What You Can Write Off (2025)',
  description: 'Complete tax deduction guide for TikTok creators. Equipment, software, home office, and business expense writeoffs.',
  keywords: ['creator tax deductions', 'influencer taxes', 'tiktok business expenses', 'content creator writeoffs'],
  openGraph: {
    title: 'TikTok Creator Tax Deductions Guide: What You Can Write Off (2025)',
    description: 'Complete tax deduction guide for TikTok creators. Equipment, software, home office, and business expense writeoffs.',
    type: 'article',
    url: 'https://calculatecreator.com/advanced/creator-tax-deductions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Creator Tax Deductions Guide: What You Can Write Off (2025)',
    description: 'Complete tax deduction guide for TikTok creators. Equipment, software, home office, and business expense writeoffs.',
  },
};

export default function CreatorTaxDeductionsPage() {
  const deductions = [
    {
      category: 'Equipment',
      examples: 'Camera, ring light, tripod, microphone, backdrop',
      savings: '$500-$3,000',
      details: 'Cameras ($800-$2,500), ring lights ($50-$300), tripods ($30-$200), microphones ($100-$500). Must be used for business purposes.',
      irsRules: '100% deductible if used exclusively for business. If mixed personal/business use, only deduct business percentage.',
      documentation: 'Keep purchase receipts, track business use percentage, maintain equipment log.',
    },
    {
      category: 'Software',
      examples: 'CapCut Pro, Adobe Suite, editing apps',
      savings: '$200-$800/year',
      details: 'Adobe Creative Cloud ($54.99/mo), CapCut Pro ($9.99/mo), Canva Pro ($12.99/mo), analytics tools ($20-$50/mo).',
      irsRules: 'Fully deductible as ordinary and necessary business expenses. Subscribe annually for better rates.',
      documentation: 'Keep subscription receipts, credit card statements, and software invoices.',
    },
    {
      category: 'Home Office',
      examples: 'Portion of rent, utilities, internet',
      savings: '$1,000-$5,000/year',
      details: 'Simplified method: $5/sq ft up to 300 sq ft ($1,500 max). Regular method: Calculate percentage of home used for business.',
      irsRules: 'Space must be used regularly and exclusively for business. Cannot be dual-purpose (bedroom + office).',
      documentation: 'Measure square footage, photograph workspace, keep rent/mortgage statements, utility bills.',
    },
    {
      category: 'Props & Supplies',
      examples: 'Makeup, clothing for videos, backgrounds',
      savings: '$300-$2,000',
      details: 'Stage props ($50-$500), backdrops ($30-$300), costumes ($100-$800). Note: Regular clothing is NOT deductible.',
      irsRules: 'Only deductible if not suitable for everyday wear (costumes, branded apparel, stage makeup).',
      documentation: 'Keep receipts, note which videos used each prop, maintain inventory list.',
    },
    {
      category: 'Education',
      examples: 'Courses, coaching, conferences',
      savings: '$500-$3,000',
      details: 'Online courses ($200-$1,000), coaching programs ($500-$3,000), conference tickets ($300-$1,500), books ($20-$100).',
      irsRules: 'Must maintain or improve skills for current business. Cannot be for qualifying for new trade.',
      documentation: 'Keep course receipts, conference tickets, book invoices, certification documents.',
    },
    {
      category: 'Phone & Internet',
      examples: 'Business use percentage',
      savings: '$500-$1,500/year',
      details: 'Internet ($50-$100/mo), phone plan ($50-$100/mo). Deduct business use percentage only (typically 50-70%).',
      irsRules: 'Track business vs personal use for 30 days to establish reasonable percentage.',
      documentation: 'Keep monthly bills, document business use percentage calculation method.',
    },
  ];

  const faqs = [
    {
      question: 'Can I deduct my entire rent/mortgage as a home office expense?',
      answer: 'No. You can only deduct the portion of your home used exclusively and regularly for business. For example, if you use a 100 sq ft room in a 1,000 sq ft apartment, you can deduct 10% of your rent, utilities, and home insurance. The simplified method allows $5 per square foot up to 300 sq ft ($1,500 maximum annual deduction).',
    },
    {
      question: 'Are my regular clothes tax-deductible if I wear them in videos?',
      answer: 'No. The IRS only allows deductions for clothing that is not suitable for everyday wear, such as costumes, uniforms, or branded apparel worn exclusively for content creation. Regular streetwear, even if filmed, is not deductible because it has personal use.',
    },
    {
      question: 'How do I prove my expenses are legitimate if audited?',
      answer: 'Keep detailed records including receipts, bank statements, and credit card statements. Document the business purpose of each expense. Maintain a mileage log for vehicle expenses. Take photos of your home office setup. The more documentation you have, the better protected you are in an audit.',
    },
    {
      question: 'Can I deduct meals and entertainment?',
      answer: 'Meals are 50% deductible if they are ordinary, necessary, and directly related to your business (client meetings, content collaborations). Entertainment expenses (concerts, sporting events) are generally NOT deductible, even if you create content there, unless it is the primary subject of your content business.',
    },
    {
      question: 'What is the difference between a deduction and a tax credit?',
      answer: 'A tax deduction reduces your taxable income (saving you your marginal tax rate on that amount), while a tax credit reduces your actual tax owed dollar-for-dollar. For example, a $1,000 deduction saves you $250 in taxes if you\'re in the 25% bracket, but a $1,000 tax credit saves you $1,000 in taxes.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Tax Deductions</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-600 via-teal-500 to-blue-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Creator Tax Deductions Guide</h1>
          <p className="text-heading-md text-white/90">Comprehensive guide to legitimate business deductions for TikTok creators</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-yellow-50 border-yellow-200">
          <p className="text-body-md text-neutral-900 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-600 mt-0.5" />
            <span><strong>Disclaimer:</strong> This is educational information only, not tax advice. Consult a CPA or tax professional for your specific situation.</span>
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Why Tax Planning Matters for Creators</h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              As a content creator, you're running a business - and like any business owner, you're entitled to deduct ordinary and necessary expenses from your taxable income. Proper tax planning isn't about avoiding taxes; it's about paying exactly what you owe, not a penny more.
            </p>
            <p>
              Without strategic deductions, creators often overpay by thousands of dollars annually. The difference between a creator who tracks deductions and one who doesn't can be $3,000-$15,000 in annual tax savings. Those savings can be reinvested into better equipment, education, or simply building your financial security.
            </p>
            <p>
              The key is understanding what's legitimately deductible, maintaining proper documentation, and tracking expenses throughout the year - not scrambling at tax time. This guide will show you exactly how to do that while staying fully compliant with IRS regulations.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Deductible Expenses by Category</h2>
          <div className="space-y-6">
            {deductions.map((item, idx) => (
              <div key={idx} className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-heading-md font-semibold text-neutral-900">{item.category}</h3>
                  <span className="text-body-sm font-semibold text-green-600 whitespace-nowrap ml-4">{item.savings}</span>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">{item.examples}</p>

                <div className="space-y-3 mt-4">
                  <div className="p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-body-sm text-neutral-900">
                      <strong className="text-blue-900">Typical Costs:</strong> {item.details}
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50 rounded border border-purple-200">
                    <p className="text-body-sm text-neutral-900">
                      <strong className="text-purple-900">IRS Rules:</strong> {item.irsRules}
                    </p>
                  </div>

                  <div className="p-3 bg-orange-50 rounded border border-orange-200">
                    <p className="text-body-sm text-neutral-900">
                      <strong className="text-orange-900">Documentation:</strong> {item.documentation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-green-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Potential Total Savings</h3>
          <p className="text-heading-lg font-bold text-green-600 mb-2">$3,000-$15,000/year</p>
          <p className="text-body-sm text-neutral-600">
            At 25% tax rate, these deductions could save you thousands in taxes annually
          </p>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Important Rules</h3>
          <ul className="space-y-2">
            <li className="text-body-md text-neutral-700 flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span>Keep all receipts and documentation</span>
            </li>
            <li className="text-body-md text-neutral-700 flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span>Expenses must be "ordinary and necessary" for your business</span>
            </li>
            <li className="text-body-md text-neutral-700 flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span>You must show profit intent (not just a hobby)</span>
            </li>
            <li className="text-body-md text-neutral-700 flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span>Track business vs personal use percentages</span>
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Record Keeping Best Practices</h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              Proper record keeping is your best defense in an audit and makes tax preparation infinitely easier. The IRS requires you to keep records for at least 3 years from the date you filed your return (7 years is safer).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Recommended Apps</h3>
                <ul className="text-body-sm text-blue-800 space-y-1">
                  <li>• QuickBooks Self-Employed ($15/mo)</li>
                  <li>• FreshBooks ($15-50/mo)</li>
                  <li>• Wave Accounting (Free)</li>
                  <li>• Expensify ($5/mo)</li>
                  <li>• Keeper Tax ($16/mo)</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">What to Track</h3>
                <ul className="text-body-sm text-green-800 space-y-1">
                  <li>• Date of purchase</li>
                  <li>• Vendor name</li>
                  <li>• Amount paid</li>
                  <li>• Business purpose</li>
                  <li>• Category (equipment, software, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 mt-4">
              <h3 className="font-semibold text-orange-900 mb-2">Documents to Keep</h3>
              <p className="text-body-sm text-orange-800">
                Receipts, invoices, bank statements, credit card statements, canceled checks, mileage logs, home office measurements, equipment purchase documentation, subscription confirmations, and any 1099 forms received.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Quarterly Estimated Tax Payments</h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              Unlike W-2 employees who have taxes withheld from each paycheck, self-employed creators must pay estimated taxes quarterly. If you expect to owe $1,000 or more in taxes for the year, you're required to make quarterly payments to avoid penalties.
            </p>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">2025 Quarterly Tax Deadlines</h3>
              <ul className="text-body-sm text-red-800 space-y-1">
                <li>• Q1 (Jan 1 - Mar 31): Due April 15, 2025</li>
                <li>• Q2 (Apr 1 - May 31): Due June 16, 2025</li>
                <li>• Q3 (Jun 1 - Aug 31): Due September 15, 2025</li>
                <li>• Q4 (Sep 1 - Dec 31): Due January 15, 2026</li>
              </ul>
            </div>

            <p>
              A general rule of thumb: Set aside 25-30% of your gross income for taxes. Use Form 1040-ES to calculate your quarterly payment amount, or work with a CPA to determine the right amount based on your projected annual income.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">When to Hire a CPA</h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              While you can file your own taxes using software like TurboTax or FreeTaxUSA, there are situations where hiring a certified public accountant (CPA) pays for itself in tax savings and peace of mind.
            </p>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Hire a CPA if you:</h3>
              <ul className="text-body-sm text-purple-800 space-y-1">
                <li>• Earn $20,000+ annually from content creation</li>
                <li>• Have complex deductions (home office, travel, vehicle)</li>
                <li>• Formed an LLC or S-Corporation</li>
                <li>• Operate in multiple states</li>
                <li>• Received a notice from the IRS</li>
                <li>• Want to minimize audit risk</li>
                <li>• Don't have time to learn tax law</li>
              </ul>
            </div>

            <p>
              <strong>Cost expectation:</strong> Tax preparation for creators typically costs $300-$1,500 depending on complexity. Many CPAs offer monthly packages ($100-$300/mo) that include bookkeeping, quarterly tax prep, and annual filing - often worth it for creators earning $50,000+.
            </p>
          </div>
        </Card>

        <FAQSection faqs={faqs} pageName="Creator Tax Deductions" />

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/creator-tax" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Creator Tax Calculator</h3>
              <p className="text-body-sm text-neutral-600">Estimate your quarterly tax obligations</p>
            </Link>
            <Link href="/advanced/creator-tax-deductions-guide" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Complete Tax Deductions Guide</h3>
              <p className="text-body-sm text-neutral-600">In-depth guide with examples</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

