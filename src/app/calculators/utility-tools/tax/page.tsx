import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { CreatorTaxCalculatorWidget } from '@/components/calculators/creator-tax/CalculatorWidget';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';

export const metadata: Metadata = {
  title: "TikTok Creator Tax Calculator 2026",
  description: "Estimate your TikTok creator taxes including self-employment tax, quarterly payments, and deductible expenses. Built for US-based content creators.",
  keywords: ['creator tax calculator', 'tiktok taxes', 'self employment tax', 'influencer taxes', 'quarterly tax calculator'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/utility-tools/tax/',
  },
};

const faqData = [
  {
    question: 'How accurate is this tax calculator?',
    answer: '**This calculator provides a reasonable estimate based on 2024 tax brackets and the standard deduction.** It is a simplified model. It does not account for all deductions, credits, or special situations (dependents, retirement contributions, itemized deductions). Use it for planning purposes. Work with a Certified Public Accountant (CPA) for exact calculations, especially if you earn over $50,000 or have complex finances.',
  },
  {
    question: 'How much should I set aside for taxes?',
    answer: '**Set aside 25% to 35% of gross income as a general rule.** In a high-tax state or making $100K+, aim for 35% to 40%. It is better to over-save than face penalties. Open a separate savings account and transfer tax money immediately after payment. Use this calculator quarterly to adjust your savings rate based on year-to-date earnings.',
  },
  {
    question: 'Do I need to pay quarterly taxes?',
    answer: '**Yes. Make quarterly estimated payments if you expect to owe $1,000+ in taxes.** Deadlines are April 15, June 16, September 15, and January 15. Failing to pay quarterly results in penalties. Use this calculator to estimate your annual tax, then divide by 4 for quarterly payments. Adjust each quarter based on actual income. Use IRS Form 1040-ES or work with a CPA.',
  },
  {
    question: 'Should I form an LLC or S-Corp?',
    answer: '**A Limited Liability Company (LLC) is simple, protects personal assets, and offers pass-through taxation.** An S-Corporation (S-Corp) saves on self-employment taxes for creators making $60K+. It requires payroll and more paperwork. Consult a CPA. Generally choose an LLC for beginners. Consider an S-Corp when consistently making $75K+ annually. This calculator assumes sole proprietorship. S-Corp calculations differ significantly.',
  },
];

export default function CreatorTaxCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Creator Tax Calculator"
        description="Calculate estimated taxes on your TikTok creator income. Understand self-employment tax, quarterly payments, and deductions with our free calculator."
        url="https://tiktokcalculator.net/calculators/utility-tools/tax/"
        datePublished="2024-01-20"
        dateModified="2026-03-01"
        keywords={['creator tax calculator', 'tiktok taxes', 'self employment tax', 'influencer taxes', 'quarterly tax calculator']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net/' },
          { name: 'Calculators', url: 'https://tiktokcalculator.net/calculators/' },
          { name: 'Creator Tax Calculator', url: 'https://tiktokcalculator.net/calculators/utility-tools/tax/' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators/' },
            {
              label: 'Creator Tax Calculator',
              href: '/calculators/utility-tools/tax/',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🧾
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Tax Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">TikTok creators: 
            Estimate your tax obligations as a content creator. Plan for 3 tax types (federal, state, and self-employment) with accurate calculations based on 2026 tax brackets. This calculator helps creators set aside appropriate amounts for quarterly tax payments, understand deductions, and avoid penalties.

            Calculate your effective tax rate including self-employment tax obligations. See how business expense deductions reduce your tax burden. Get quarterly payment estimates to avoid Internal Revenue Service (IRS) penalties. Understand the true after-tax value of your creator earnings.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <PageAuthorByline pageSlug="utility-tools/tax" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <CreatorTaxCalculatorWidget />

            <InputsExplained
              inputs={[
                { name: 'Gross Income', description: 'Total creator income before taxes', example: '$50,000', required: true },
                { name: 'Business Expenses', description: 'Deductible expenses (equipment, software)', example: '$10,000' },
                { name: 'Tax Bracket', description: 'Your estimated tax bracket', example: '22%' },
              ]}
              note="Self-employed creators pay ~15.3% self-employment tax plus income tax. Consult a tax professional."
            />
          </div>

          <div className="space-y-8">
            <Card className="bg-yellow-50 border-yellow-200">
              <p className="text-body-sm text-neutral-900">
                <strong>Disclaimer:</strong> This is educational information only, not tax advice. Consult a CPA for your specific situation.
              </p>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How Tax Calculation Works for Creators
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  As a self-employed content creator, you are responsible for 3 types of taxes (federal income tax, state income tax if applicable, and self-employment tax). Understanding how each is calculated helps you plan your finances and avoid surprises.
                </p>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Federal Income Tax</h3>
                  <p className="text-body-sm text-blue-800">
                    Calculated using progressive tax brackets ranging from 10% to 37%. The 2024 brackets for single filers are: 10% up to $11,000; 12% from $11,001-$44,725; 22% from $44,726-$95,375; 24% from $95,376-$182,100; and higher rates above that. You only pay the higher rate on income within each bracket.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">Self-Employment Tax</h3>
                  <p className="text-body-sm text-green-800">
                    A flat 15.3% on your net earnings (after business expenses). This consists of 12.4% for Social Security and 2.9% for Medicare. It applies to the first $160,200 of net income in 2024. W-2 employees have their employers pay half. Self-employed creators pay the full amount. You deduct half of it from your taxable income.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">State Income Tax</h3>
                  <p className="text-body-sm text-purple-800">
                    Varies by state from 0% (Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming) to over 10% (California 13.3%, New York 10.9%). Most states have progressive brackets similar to federal taxes.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Deduction Strategies to Maximize Savings
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Every dollar you legitimately deduct reduces your taxable income, saving you roughly 25-40 cents in taxes depending on your bracket. Strategic deduction tracking can save creators $3,000-$15,000 annually.
                </p>

                <div className="space-y-3 text-body-sm">
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <strong className="text-neutral-900">Equipment Deductions:</strong>
                    <p className="text-neutral-700 mt-1">
                      For purchases under $2,500, deduct the full amount in the year purchased using Section 179 or bonus depreciation. For larger equipment, you can either expense it all at once (up to $1 million annually) or depreciate over 5-7 years. Most creators benefit from immediate expensing.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <strong className="text-neutral-900">Home Office Deduction:</strong>
                    <p className="text-neutral-700 mt-1">
                      The simplified method ($5 per square foot, max 300 sq ft) is easiest and typically better for renters. The regular method (actual expenses percentage) can yield higher deductions for homeowners with mortgages. Calculate both to see which benefits you more.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <strong className="text-neutral-900">Vehicle Expenses:</strong>
                    <p className="text-neutral-700 mt-1">
                      If you drive to shoots, meetings, or events, track business mileage. 2024 standard rate is 67 cents per mile. For a vehicle used 50% for business driving 10,000 miles, that's $3,350 deduction. Keep a mileage log or use apps like MileIQ.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <strong className="text-neutral-900">Qualified Business Income Deduction:</strong>
                    <p className="text-neutral-700 mt-1">
                      Section 199A allows many creators to deduct 20% of qualified business income, reducing taxable income significantly. This phases out at higher incomes but can save $3,000-$10,000+ for mid-level creators.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <strong className="text-neutral-900">Retirement Contributions:</strong>
                    <p className="text-neutral-700 mt-1">
                      Solo 401(k) or SEP IRA contributions are fully deductible and reduce your taxable income. You can contribute up to $66,000 in 2024 (or 25% of net self-employment income, whichever is less), significantly reducing your tax burden while building retirement savings.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                State Tax Considerations
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  State income tax rates vary dramatically and can significantly impact your total tax burden. If you're location-independent, this is worth considering when choosing where to live.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-body-sm">
                  <div className="p-3 bg-green-50 rounded border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-1">No State Income Tax (0%)</h3>
                    <p className="text-green-800">Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming</p>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                    <h3 className="font-semibold text-yellow-900 mb-1">Low Tax States (1-3%)</h3>
                    <p className="text-yellow-800">North Dakota, Pennsylvania, Indiana, Arizona</p>
                  </div>

                  <div className="p-3 bg-orange-50 rounded border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-1">Medium Tax States (4-6%)</h3>
                    <p className="text-orange-800">Colorado, Illinois, Michigan, Utah, North Carolina</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-1">High Tax States (9%+)</h3>
                    <p className="text-red-800">California (13.3%), New York (10.9%), Hawaii (11%), New Jersey (10.75%)</p>
                  </div>
                </div>

                <p className="text-body-sm text-neutral-600 mt-4">
                  Note: If you earn income while traveling or working remotely in other states, you may owe taxes to multiple states. Consult a CPA for multi-state tax situations.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Common Deductions by Category
              </h2>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Equipment:</strong> Camera, mic, lighting, computer, phone (business use percentage)
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Software:</strong> Editing tools, analytics, scheduling apps, cloud storage
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Services:</strong> Internet, phone, accountant fees, legal fees, VA services
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Home Office:</strong> Portion of rent/mortgage, utilities, insurance (if exclusive space)
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Education:</strong> Courses, conferences, coaching, industry books
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Marketing:</strong> Ads, promotional giveaways, website costs, email services
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Understanding Creator Tax Obligations
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                The Creator Tax Calculator estimates your total tax burden as a self-employed content creator. Unlike traditional employees who have taxes automatically withheld, creators must calculate and pay taxes themselves - federal income tax, state income tax (in most states), and crucially, self-employment tax covering Social Security and Medicare. Most new creators underestimate their tax obligations, leading to painful surprises at tax time.
              </p>
              <p>
                Self-employment tax alone is 15.3% of net income - double what traditional employees pay because you're covering both the employee and employer portions. This catches many creators off-guard. A creator earning $60K after expenses owes ~$9,200 in self-employment tax, plus federal income tax (~$7,000), plus state tax ($0-6,000 depending on state). Total tax burden: $16,200-22,200 (27-37% effective rate). Many creators spend their earnings without setting aside for taxes, then face IRS penalties.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Example: Tax Optimization Case Study
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Creator Profile:</strong> Lifestyle/finance creator in California (high-tax state), $120K gross income
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                <p className="font-bold text-neutral-900">Without Tax Strategy (Year 1):</p>
                <p>Gross Income: $120,000</p>
                <p>Business Expenses: $8,000 (undertracked)</p>
                <p>Net Income: $112,000</p>
                <p>Self-Employment Tax: $17,136</p>
                <p>Federal Income Tax: $18,200</p>
                <p>California State Tax: $9,520</p>
                <p className="text-lg font-bold border-t pt-2 mt-2">Total Tax: $44,856 (40% effective rate)</p>
                <p className="text-lg font-bold">Take-Home: $75,144</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2 mt-4">
                <p className="font-bold text-neutral-900">With Tax Strategy (Year 2, same $120K gross):</p>
                <p>Gross Income: $120,000</p>
                <p>Business Expenses: $25,000 (proper tracking: equipment, home office, software, meals, education)</p>
                <p>Solo 401(k) Contribution: $30,000</p>
                <p>Taxable Net Income: $65,000</p>
                <p>Self-Employment Tax: $9,945 (S-Corp saved $4,000)</p>
                <p>Federal Income Tax: $8,200</p>
                <p>California State Tax: $3,900</p>
                <p className="text-lg font-bold border-t pt-2 mt-2">Total Tax: $22,045 (18% effective rate)</p>
                <p className="text-lg font-bold">Take-Home: $67,955 + $30K in retirement = $97,955 effective</p>
              </div>
              <p className="pt-4">
                <strong>Results:</strong> Tax optimization saved $22,811 in current taxes ($44,856 vs $22,045) while building $30K retirement savings. Effective take-home improved by $22,811 (30% increase) through proper deduction tracking, retirement contributions, and S-Corp election. CPA fee: $2,500. Net benefit: $20,311. This compounds annually as strategies remain in place.
              </p>
            </div>
          </Card>

          <ToolExplanationSection
            whatItDoes="The Creator Tax Calculator estimates your total tax obligations as a self-employed content creator, including federal income tax, state income tax, and the often-overlooked self-employment tax (15.3%). It calculates your effective tax rate, shows how business expense deductions reduce your taxable income, and generates quarterly estimated payment amounts so you can avoid IRS underpayment penalties. Designed specifically for creators who earn income from TikTok, YouTube, brand deals, and other content monetization."
            howToUse={[
              'Enter your total annual gross creator income from all sources (TikTok, brand deals, Shop, etc.)',
              'Input your total business expenses (equipment, software, home office, internet, education)',
              'Select your state to apply the correct state income tax rate (or 0% for no-income-tax states)',
              'Review the breakdown showing federal tax, state tax, self-employment tax, and total tax burden',
              'Check the quarterly payment estimate to know how much to set aside every three months',
              'Experiment with different expense amounts to see how deductions reduce your tax bill',
            ]}
            examples={[
              {
                scenario: 'Part-time creator with modest income',
                input: '$25,000 gross income, $5,000 business expenses, Texas (0% state tax)',
                output: 'Estimated total tax: ~$4,700 (SE tax: $3,060, Federal: $1,640, State: $0). Quarterly payment: ~$1,175',
              },
              {
                scenario: 'Full-time creator with significant deductions',
                input: '$75,000 gross income, $15,000 business expenses, New York (6.5% effective state rate)',
                output: 'Estimated total tax: ~$18,500 (SE tax: $9,180, Federal: $5,420, State: $3,900). Quarterly payment: ~$4,625',
              },
              {
                scenario: 'High-earning creator in high-tax state',
                input: '$150,000 gross income, $30,000 business expenses, California (9.3% effective state rate)',
                output: 'Estimated total tax: ~$40,000 (SE tax: $18,360, Federal: $13,500, State: $11,160). Quarterly payment: ~$10,000',
              },
            ]}
            limitations={[
              'This is a simplified estimate and does not replace professional tax advice from a CPA',
              'Does not account for retirement contributions (Solo 401k, SEP IRA) which significantly reduce taxable income',
              'Health insurance premiums, dependent credits, and other deductions are not included',
              'S-Corp election can reduce self-employment tax but requires separate calculation',
              'State tax calculations use simplified average rates rather than progressive state brackets',
            ]}
            relatedContent={[
              { title: 'Payout Calculator', href: '/calculators/utility-tools/payout/' },
              { title: 'TikTok Money Calculator', href: '/calculators/tiktok-money/' },
              { title: 'Eligibility Checker', href: '/calculators/utility-tools/eligibility/' },
            ]}
          />

          <MethodologySection
            calculatorName="utility-tools/tax"
            formula={`Net Income = Annual Income - Business Expenses
Federal Tax = Progressive tax brackets (10-37%)
State Tax = Net Income × State Rate (0-10%)
Self-Employment Tax = Net Income × 15.3%
Total Tax = Federal + State + SE Tax

Example:
Income: $75,000
Expenses: $10,000
Net: $65,000
Federal: ~$8,500 (13.1%)
State (5%): $3,250
SE Tax: $9,945
Total Tax: $21,695 (33.4% effective rate)`}
            assumptions={[
              {
                label: 'Tax Brackets',
                value:
                  'Based on 2024 federal tax brackets and standard deduction',
              },
              {
                label: 'State Tax',
                value: 'Simplified average rates - check your state for exact rates',
              },
              {
                label: 'Self-Employment',
                value: '15.3% on first $160,200 of net income',
              },
            ]}
            dataSources={[
              'IRS 2024 Tax Brackets',
              'Self-Employment Tax Guidelines',
              'State Income Tax Comparison 2024',
            ]}
            limitations="This is an estimate for planning purposes only. Consult a tax professional for accurate calculations. Does not include additional deductions (health insurance, retirement contributions) or credits."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Creator Tax Calculator"
            faqs={[
              {
                question: 'How accurate is this tax calculator?',
                answer:
                  '**This calculator provides a reasonable estimate based on 2024 tax brackets and the standard deduction.** It is a simplified model. It does not account for all deductions, credits, or special situations (dependents, retirement contributions, itemized deductions). Use it for planning purposes. Work with a Certified Public Accountant (CPA) for exact calculations, especially if you earn over $50,000 or have complex finances.',
              },
              {
                question: 'Why is my effective tax rate different from my tax bracket?',
                answer:
                  '**Your tax bracket is the highest rate applied to your income (marginal rate). Your effective tax rate is the average rate you pay on all income.** Federal taxes use progressive brackets. You pay 10% on the first portion of income, 12% on the next portion, and so on. For example, someone in the 22% bracket has an effective rate of only 15% after averaging all brackets.',
              },
              {
                question: 'How much should I set aside for taxes?',
                answer:
                  '**Set aside 25% to 35% of gross income as a general rule.** In a high-tax state or making $100K+, aim for 35% to 40%. It is better to over-save than face penalties. Open a separate savings account and transfer tax money immediately after payment. Use this calculator quarterly to adjust your savings rate based on year-to-date earnings.',
              },
              {
                question: 'What business expenses should I include in the calculator?',
                answer:
                  'Include all ordinary and necessary business expenses: equipment purchases, software subscriptions, internet/phone (business portion), home office costs, props/supplies, education, professional services, advertising, and travel. Track everything throughout the year. The more legitimate deductions you have, the lower your taxable income and tax owed.',
              },
              {
                question: 'Do I need to pay quarterly taxes?',
                answer:
                  '**Yes. Make quarterly estimated payments if you expect to owe $1,000+ in taxes.** Deadlines are April 15, June 16, September 15, and January 15. Failing to pay quarterly results in penalties. Use this calculator to estimate your annual tax, then divide by 4 for quarterly payments. Adjust each quarter based on actual income. Use IRS Form 1040-ES or work with a CPA.',
              },
              {
                question: 'Should I form an LLC or S-Corp?',
                answer:
                  '**A Limited Liability Company (LLC) is simple, protects personal assets, and offers pass-through taxation.** An S-Corporation (S-Corp) saves on self-employment taxes for creators making $60K+. It requires payroll and more paperwork. Consult a CPA. Generally choose an LLC for beginners. Consider an S-Corp when consistently making $75K+ annually. This calculator assumes sole proprietorship. S-Corp calculations differ significantly.',
              },
            ]}
          />

          <div className="mt-12">
            <PageEEAT pageSlug="utility-tools/tax" variant="full" />
          </div>

          <RelatedCalculators
            currentCalculator="utility-tools/tax"
            calculators={[
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description:
                  'Estimate total earnings to plan tax obligations',
                icon: 'Banknote',
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Track deductible business expenses',
                icon: 'Camera',
              },
              {
                name: 'Break Even Calculator',
                slug: 'break-even',
                description: 'Factor taxes into profitability analysis',
                icon: 'Scale',
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
