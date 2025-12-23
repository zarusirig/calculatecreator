'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateCreatorTax,
  validateCreatorTaxInput,
} from '@/lib/calculators/creator-tax';
import type {
  CreatorTaxInput,
  CreatorTaxResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Banknote, Camera, Scale } from 'lucide-react';

export default function CreatorTaxCalculatorPage() {
  const [inputs, setInputs] = useState<CreatorTaxInput>({
    annualIncome: 75000,
    state: 'medium',
    filingStatus: 'single',
    businessExpenses: 10000,
  });

  const [results, setResults] = useState<CreatorTaxResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof CreatorTaxInput,
    value: any
  ) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateCreatorTaxInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCreatorTax(inputs);
      setResults(result);

      trackCalculation(
        'creator-tax',
        { ...inputs },
        { totalTax: result.totalTax, effectiveTaxRate: result.effectiveTaxRate }
      );

      setIsCalculating(false);
    }, 500);
  };

  const stateOptions = [
    { value: 'no-state-tax', label: 'No State Tax (AK, FL, NV, SD, TN, TX, WA, WY)' },
    { value: 'low', label: 'Low State Tax (3%)' },
    { value: 'medium', label: 'Medium State Tax (5%)' },
    { value: 'high', label: 'High State Tax (8%)' },
    { value: 'very-high', label: 'Very High State Tax (10%+)' },
  ];

  const filingOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married Filing Jointly' },
    { value: 'head-of-household', label: 'Head of Household' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Creator Tax Calculator',
              href: '/calculators/creator-tax',
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
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate your tax obligations as a content creator. Plan for federal,
            state, and self-employment taxes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Tax Obligations
            </h2>

            <InputField
              id="annualIncome"
              label="Annual Income ($)"
              type="number"
              value={inputs.annualIncome}
              onChange={(value) => handleInputChange('annualIncome', value)}
              placeholder="e.g., 75000"
              helperText="Total annual creator income"
              error={errors.annualIncome}
              min={0}
              required
            />

            <SelectField
              id="state"
              label="State Tax Level"
              value={inputs.state}
              onChange={(value) => handleInputChange('state', value)}
              options={stateOptions}
              helperText="Your state's income tax rate"
              error={errors.state}
              required
            />

            <SelectField
              id="filingStatus"
              label="Filing Status"
              value={inputs.filingStatus}
              onChange={(value) => handleInputChange('filingStatus', value)}
              options={filingOptions}
              helperText="Your tax filing status"
              error={errors.filingStatus}
              required
            />

            <InputField
              id="businessExpenses"
              label="Business Expenses ($)"
              type="number"
              value={inputs.businessExpenses}
              onChange={(value) => handleInputChange('businessExpenses', value)}
              placeholder="e.g., 10000"
              helperText="Deductible business expenses"
              error={errors.businessExpenses}
              min={0}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Tax
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="currency"
                  title="Total Tax Owed"
                  subtitle={`${results.effectiveTaxRate.toFixed(1)}% effective tax rate`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Tax Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Federal Tax
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.federalTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        State Tax
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.stateTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Self-Employment Tax
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.selfEmploymentTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">
                        Net Income (After Tax)
                      </span>
                      <span className="text-body-sm font-semibold text-success-DEFAULT">
                        ${results.netIncome.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

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
                  As a self-employed content creator, you're responsible for three types of taxes: federal income tax, state income tax (if applicable), and self-employment tax. Understanding how each is calculated helps you plan your finances and avoid surprises.
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
                    A flat 15.3% on your net earnings (after business expenses), consisting of 12.4% for Social Security and 2.9% for Medicare. This applies to the first $160,200 of net income in 2024. Unlike W-2 employees whose employers pay half, self-employed creators pay the full amount - but you can deduct half of it from your taxable income.
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

          <MethodologySection
            calculatorName="creator-tax"
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
                  'This calculator provides a reasonable estimate based on 2024 tax brackets and standard deduction. However, it\'s a simplified model that doesn\'t account for all deductions, credits, or special situations (dependents, retirement contributions, itemized deductions, etc.). Use it for planning purposes, but work with a CPA for exact calculations, especially if you earn over $50,000 or have complex finances.',
              },
              {
                question: 'Why is my effective tax rate different from my tax bracket?',
                answer:
                  'Your tax bracket is the highest rate applied to your income (marginal rate), but your effective tax rate is the average rate you pay on all income. Because federal taxes use progressive brackets, you pay 10% on the first portion of income, 12% on the next portion, etc. For example, someone in the 22% bracket might have an effective rate of only 15% when all brackets are averaged.',
              },
              {
                question: 'How much should I set aside for taxes?',
                answer:
                  'General rule: Set aside 25-35% of gross income. If you\'re in a high-tax state or making $100K+, aim for 35-40%. Better to over-save than face penalties. Open a separate savings account and transfer tax money immediately when paid. Use this calculator quarterly to adjust your savings rate based on year-to-date earnings.',
              },
              {
                question: 'What business expenses should I include in the calculator?',
                answer:
                  'Include all ordinary and necessary business expenses: equipment purchases, software subscriptions, internet/phone (business portion), home office costs, props/supplies, education, professional services, advertising, and travel. Track everything throughout the year. The more legitimate deductions you have, the lower your taxable income and tax owed.',
              },
              {
                question: 'Do I need to pay quarterly taxes?',
                answer:
                  'Yes! If you expect to owe $1,000+ in taxes, you must make quarterly estimated payments (April 15, June 16, September 15, January 15). Failing to pay quarterly results in penalties. Use this calculator to estimate your annual tax, then divide by 4 for quarterly payments. Adjust each quarter based on actual income. Use IRS Form 1040-ES or work with a CPA.',
              },
              {
                question: 'Should I form an LLC or S-Corp?',
                answer:
                  'LLC: Simple, protects personal assets, pass-through taxation. S-Corp: Can save on self-employment taxes if making $60K+, but requires payroll and more paperwork. Consult a CPA - generally LLC for beginners, consider S-Corp when consistently making $75K+ annually. This calculator assumes sole proprietorship; S-Corp calculations differ significantly.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="creator-tax"
            calculators={[
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description:
                  'Estimate total earnings to plan tax obligations',
                icon: Banknote,
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Track deductible business expenses',
                icon: Camera,
              },
              {
                name: 'Break Even Calculator',
                slug: 'break-even',
                description: 'Factor taxes into profitability analysis',
                icon: Scale,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
