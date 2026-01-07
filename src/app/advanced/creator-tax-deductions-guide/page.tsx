import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, DollarSign, AlertTriangle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creator Tax Deductions Guide: What TikTok Creators Can Write Off 2026',
  description: 'Complete guide to tax deductions for TikTok creators. Learn what you can write off, how to track expenses, and tax strategies to reduce your tax bill.',
  keywords: ['creator tax deductions', 'tiktok creator taxes', 'influencer tax write offs', 'content creator tax deductions', 'what can creators deduct'],
  alternates: {
    canonical: 'https://calculatecreator.com/advanced/creator-tax-deductions-guide/',
  },
};

export default function CreatorTaxDeductionsGuidePage() {
  const faqs = [
    {
      question: 'Do I need to report income under $600?',
      answer: 'Yes. All income is taxable, regardless of whether you receive a 1099.',
    },
    {
      question: 'Can I deduct my phone if I also use it personally?',
      answer: 'Yes, but only the business-use percentage (e.g., 60% business = deduct 60% of cost).',
    },
    {
      question: 'What if I get audited?',
      answer: 'Keep receipts and documentation for all deductions. Audit risk is low if deductions are legitimate and well-documented.',
    },
    {
      question: 'Can I write off my entire apartment as home office?',
      answer: 'No. Only the space used exclusively for business (e.g., 1 room used as office/filming space).',
    },
    {
      question: 'Do I need a separate business bank account?',
      answer: 'Not required for sole proprietors, but highly recommended for tracking expenses and audit protection.',
    },
  ];

  const deductions = [
    {
      category: 'Equipment & Gear',
      deductible: [
        'Phone or camera',
        'Ring light, softbox lighting',
        'Tripod, gimbal',
        'Microphone',
        'Laptop/computer',
        'Editing software subscriptions',
      ],
      howMuch: '100% if used exclusively for business. If personal + business use, deduct business percentage.',
      example: 'Phone costs $1,000, used 60% for TikTok = Deduct $600',
    },
    {
      category: 'Software & Subscriptions',
      deductible: [
        'Video editing apps (Adobe, CapCut Pro, Final Cut)',
        'Design tools (Canva Pro, Adobe Creative Cloud)',
        'Music licensing (Epidemic Sound, Artlist)',
        'Analytics tools',
        'Project management (Notion, Asana)',
      ],
      howMuch: 'Annual cost: $500–$2,000 typically deductible',
      example: null,
    },
    {
      category: 'Internet & Phone',
      deductible: [
        'Business-use percentage of monthly bills',
      ],
      howMuch: 'Deduct business percentage only',
      example: 'Internet: $80/month, 70% business use = Deduct $672/year. Phone: $100/month, 60% business use = Deduct $720/year',
    },
    {
      category: 'Home Office',
      deductible: [
        'Dedicated space for content creation',
      ],
      howMuch: 'Two methods: (1) Simplified: $5 per sq ft (max 300 sq ft = $1,500/year), (2) Actual expenses: Percentage of rent, utilities, insurance',
      example: '100 sq ft office in 1,000 sq ft apartment = 10% of rent deductible',
    },
    {
      category: 'Props & Supplies',
      deductible: [
        'Clothing worn exclusively in videos (costumes, branded apparel)',
        'Props for content',
        'Backdrops',
        'Office supplies',
      ],
      howMuch: '100% if exclusively for business',
      example: 'Note: Regular clothing worn off-camera is NOT deductible',
    },
    {
      category: 'Education & Training',
      deductible: [
        'Online courses (video editing, content strategy)',
        'Books on social media marketing',
        'Conference tickets (VidCon, creator events)',
        'Coaching or consulting fees',
      ],
      howMuch: '100% deductible',
      example: null,
    },
    {
      category: 'Professional Services',
      deductible: [
        'Accountant/CPA fees',
        'Lawyer fees (contract review)',
        'Website hosting and design',
        'Virtual assistant',
        'Video editor',
      ],
      howMuch: '100% deductible',
      example: null,
    },
    {
      category: 'Advertising & Promotion',
      deductible: [
        'TikTok ads (if you run them)',
        'Instagram/Facebook ads',
        'Website ads',
        'Promotional giveaways',
      ],
      howMuch: '100% deductible',
      example: null,
    },
    {
      category: 'Travel (If Business Purpose)',
      deductible: [
        'Transportation (flights, mileage, Uber)',
        'Lodging',
        'Meals (50% deductible)',
      ],
      howMuch: 'Requirements: Primary purpose must be business, document business activities',
      example: 'Travel to VidCon: Deductible. Vacation in Hawaii with 1 TikTok: NOT deductible',
    },
    {
      category: 'Content Costs',
      deductible: [
        'Products purchased for review videos',
        'Ingredients for cooking content',
        'Materials for DIY/craft content',
      ],
      howMuch: 'May not be fully deductible if you keep/consume the item personally',
      example: null,
    },
  ];

  const nonDeductible = [
    'Personal clothing (unless costume/uniform)',
    'Personal meals (only business meals 50% deductible)',
    'Entertainment (concerts, sporting events) even if you film',
    'Gym membership (unless you\'re fitness creator creating content AT gym)',
    'Personal grooming (haircuts, makeup) unless for specific shoot',
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Creator Tax Deductions Guide</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Creator Tax Deductions Guide
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            What TikTok creators can write off to reduce their tax bill
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Updated: November 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Tax Strategy Guide
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Disclaimer */}
        <Card>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-600" />
              Disclaimer
            </h3>
            <p className="text-body-sm text-yellow-800">
              This is educational information, not tax advice. Consult a CPA or tax professional for your specific situation.
            </p>
          </div>
        </Card>

        {/* Are You a Business */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Are You a Business?</h2>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
            <h3 className="font-semibold text-green-900 mb-2">Yes, if:</h3>
            <ul className="text-body-sm text-green-800 space-y-1 ml-4 list-disc">
              <li>You earn money from TikTok (Creator Fund, brand deals, affiliate, etc.)</li>
              <li>You intend to make a profit</li>
              <li>You operate in a business-like manner</li>
            </ul>
          </div>
          <div className="space-y-2 text-body-sm text-neutral-700">
            <p><strong>Tax classification:</strong> Most creators are <strong>sole proprietors</strong> (report on Schedule C).</p>
            <p><strong>When to form LLC:</strong> If earning $50,000+ annually or want liability protection.</p>
          </div>
        </Card>

        {/* Top Tax Deductions */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Top Tax Deductions for TikTok Creators</h2>
          <div className="space-y-6">
            {deductions.map((deduction, idx) => (
              <div key={idx} className="p-5 bg-gradient-to-br from-neutral-50 to-white rounded-lg border border-neutral-200 shadow-sm">
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">{idx + 1}. {deduction.category}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">Deductible:</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                    {deduction.deductible.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg mb-3">
                  <p className="text-body-sm text-blue-900"><strong>How much:</strong> {deduction.howMuch}</p>
                </div>
                {deduction.example && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-body-sm text-green-900"><strong>Example:</strong> {deduction.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* What You CANNOT Deduct */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What You CANNOT Deduct</h2>
          <div className="p-5 bg-red-50 border border-red-200 rounded-lg">
            <ul className="text-body-md text-red-900 space-y-2">
              {nonDeductible.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* How to Track Expenses */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Track Expenses</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Method 1: Expense Tracking App</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Recommended apps:</strong></p>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>QuickBooks Self-Employed ($15/month)</li>
                <li>Wave (free)</li>
                <li>Expensify ($5/month)</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Method 2: Spreadsheet</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Track:</strong></p>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Date</li>
                <li>Vendor</li>
                <li>Amount</li>
                <li>Category (equipment, software, etc.)</li>
                <li>Business purpose</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Method 3: Shoebox Method (Not Recommended)</h3>
              <p className="text-body-sm text-yellow-800">Save all receipts in folder, sort at tax time. Time-consuming, higher error risk.</p>
            </div>
          </div>
        </Card>

        {/* Estimated Quarterly Taxes */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Estimated Quarterly Taxes</h2>
          <div className="p-5 bg-orange-50 border border-orange-200 rounded-lg mb-4">
            <h3 className="font-semibold text-orange-900 mb-2">If you expect to owe $1,000+ in taxes:</h3>
            <ul className="text-body-sm text-orange-800 space-y-1 ml-4 list-disc">
              <li>Pay estimated taxes quarterly</li>
              <li>Due dates: Apr 15, Jun 15, Sep 15, Jan 15</li>
              <li>Avoid underpayment penalties</li>
            </ul>
          </div>
          <p className="text-body-sm text-neutral-700"><strong>How much to pay:</strong> 25–30% of your net income each quarter (consult CPA)</p>
        </Card>

        {/* Self-Employment Tax */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Self-Employment Tax</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <p className="text-body-sm text-neutral-700 mb-2"><strong>What it is:</strong> Social Security + Medicare tax (15.3%)</p>
              <p className="text-body-sm text-neutral-700"><strong>How it works:</strong> Applies to your net profit (income minus expenses). In addition to income tax. Half is deductible (reduces taxable income).</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Example:</h3>
              <ul className="text-body-sm text-green-800 space-y-1">
                <li>Net profit: $30,000</li>
                <li>Self-employment tax: $4,590 (15.3% of $30,000)</li>
                <li>Deduct half ($2,295) from taxable income</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How Much Can You Save */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How Much Can You Save?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-3">Without deductions:</h3>
              <ul className="text-body-sm text-red-800 space-y-2">
                <li>Gross income: $50,000</li>
                <li>Self-employment tax: $7,065</li>
                <li>Income tax (25% bracket): $12,500</li>
                <li className="font-bold text-heading-md">Total tax: $19,565</li>
              </ul>
            </div>
            <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3">With $15,000 in deductions:</h3>
              <ul className="text-body-sm text-green-800 space-y-2">
                <li>Net income: $35,000</li>
                <li>Self-employment tax: $4,946</li>
                <li>Income tax (25%): $8,750</li>
                <li className="font-bold text-heading-md">Total tax: $13,696</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-heading-lg font-bold text-blue-900">Tax savings: $5,869</p>
          </div>
        </Card>

        {/* Tax Forms */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tax Forms You'll Receive</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">1099-NEC:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>From Creator Fund, brand deals (if over $600/year)</li>
                <li>Reports your income</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">1099-K:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>From payment processors (PayPal, Stripe) if over $5,000/year</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-body-sm text-yellow-800"><strong>Important:</strong> You must report ALL income, even if you don't receive 1099.</p>
            </div>
          </div>
        </Card>

        {/* When to Hire a CPA */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">When to Hire a CPA</h2>
          <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-900 mb-2">Hire a professional if:</h3>
            <ul className="text-body-sm text-blue-800 space-y-1 ml-4 list-disc">
              <li>Earning $20,000+ annually</li>
              <li>Formed an LLC or S-Corp</li>
              <li>Have complex deductions (travel, home office)</li>
              <li>Want to minimize audit risk</li>
              <li>Have questions about what's deductible</li>
            </ul>
          </div>
          <p className="text-body-sm text-neutral-700"><strong>Cost:</strong> $300–$1,500 for tax preparation (often pays for itself in savings)</p>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="Creator Tax Deductions Guide" />

        {/* Red Flags to Avoid */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Red Flags That Trigger IRS Audits</h2>
          <div className="space-y-4">
            <p className="text-body-md text-neutral-700">
              While the IRS audit rate for small businesses is relatively low (less than 1%), certain deductions raise red flags. Avoid these common mistakes:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  Claiming 100% business use on shared items
                </h3>
                <p className="text-body-sm text-red-800">
                  Claiming your phone, internet, or vehicle is 100% business when you also use it personally. The IRS expects personal use percentages. Be honest and reasonable - 60-80% business use is typical and defensible.
                </p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  Excessive meal and entertainment deductions
                </h3>
                <p className="text-body-sm text-red-800">
                  Deducting every restaurant meal without documentation. Keep receipts and note the business purpose and who attended. Only 50% of business meals are deductible.
                </p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  Disproportionate home office deduction
                </h3>
                <p className="text-body-sm text-red-800">
                  Claiming 50% of your home as office space when you live in a 1-bedroom apartment. Be accurate with square footage measurements and ensure the space is used exclusively for business.
                </p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  Consecutive years of losses
                </h3>
                <p className="text-body-sm text-red-800">
                  Showing losses for 3+ consecutive years. The IRS may classify your creator business as a hobby, disallowing all deductions. Demonstrate profit intent by maintaining business records, seeking profit, and spending time on the business.
                </p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  Round numbers for everything
                </h3>
                <p className="text-body-sm text-red-800">
                  Every expense is exactly $100, $500, or $1,000. The IRS knows real expenses have cents. Use actual amounts from receipts, not estimates.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Year-End Tax Planning */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Year-End Tax Planning Strategies</h2>
          <div className="space-y-4">
            <p className="text-body-md text-neutral-700">
              Tax planning shouldn't happen only in April. Strategic moves before December 31 can significantly reduce your tax bill:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Accelerate Expenses</h3>
                <p className="text-body-sm text-green-800">
                  Purchase equipment, software, or supplies you'll need anyway before year-end. This moves the deduction into the current tax year, reducing this year's taxable income.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Defer Income</h3>
                <p className="text-body-sm text-green-800">
                  If possible, delay invoicing or receiving payments until January. This pushes income (and the associated tax) to next year, giving you more time to prepare.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Contribute to Retirement</h3>
                <p className="text-body-sm text-green-800">
                  Max out SEP IRA or Solo 401(k) contributions before year-end (or by tax deadline for SEP). These contributions are fully deductible and can save thousands in taxes while building retirement savings.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Review Estimated Payments</h3>
                <p className="text-body-sm text-green-800">
                  Calculate your actual tax liability in December and make a final estimated payment if needed to avoid underpayment penalties. You can make your Q4 payment any time before January 15.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Get organized:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Open business bank account (or track personal expenses carefully)</li>
                <li>Download expense tracking app</li>
                <li>Set aside 25–30% of income for taxes</li>
                <li>Consult CPA if earning $20K+ annually</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Calculate taxes:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Use <Link href="/calculators/creator-tax" className="text-blue-600 hover:underline">Creator Tax Calculator</Link> to estimate quarterly payments</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/creator-tax" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Creator Tax Calculator</h3>
              <p className="text-body-sm text-neutral-600">Estimate quarterly tax payments</p>
            </Link>
            <Link href="/reference/tiktok-shop-payment-schedule" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Shop Payment Schedule</h3>
              <p className="text-body-sm text-neutral-600">Track income for taxes</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Get Brand Deals</h3>
              <p className="text-body-sm text-neutral-600">Increase your income</p>
            </Link>
            <Link href="/calculators/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Creator Fund Calculator</h3>
              <p className="text-body-sm text-neutral-600">Calculate taxable income</p>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
}
