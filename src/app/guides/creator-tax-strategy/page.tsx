import type { Metadata} from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { XCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Creator Tax Strategy 2025: Deductions, Write-Offs, and Tax Planning',
  description: 'Complete tax guide for TikTok creators. Deductible expenses, quarterly estimated taxes, business structures, and how to minimize your tax bill legally.',
  keywords: ['creator tax guide', 'tiktok taxes', 'influencer tax deductions', 'self employment tax', 'creator tax strategy'],
};

export default function CreatorTaxStrategyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Creator Tax Strategy</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-analytics-640.avif 640w, /guides/guide-analytics-1024.avif 1024w, /guides/guide-analytics-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-analytics-640.webp 640w, /guides/guide-analytics-1024.webp 1024w, /guides/guide-analytics-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-analytics-1024.webp"
              alt="Featured image for TikTok Creator Tax Strategy 2025"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Creator Tax Strategy 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Deductions, write-offs, and legal tax minimization for content creators</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding Creator Income Taxes</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok creator income is <strong>self-employment income</strong>, not W-2 wages. This means:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">You Pay More Tax:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Self-employment tax: 15.3% (Social Security + Medicare)</li>
                <li>• Income tax: 10-37% (based on income bracket)</li>
                <li>• Total: 25-52% effective tax rate</li>
                <li>• Quarterly estimated tax payments required</li>
              </ul>
            </div>
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">But You Get Deductions:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Business expenses reduce taxable income</li>
                <li>• Home office deduction</li>
                <li>• Equipment depreciation</li>
                <li>• QBI deduction (20% of profit)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Top Creator Tax Deductions</h2>
          <div className="space-y-3">
            {[
              { category: 'Equipment & Gear', deductions: ['Phone, camera, microphone, lighting', 'Computer, laptop, tablet', 'Ring lights, tripods, stabilizers', 'Editing software subscriptions'], percentage: '100%' },
              { category: 'Home Office', deductions: ['Dedicated workspace (by square footage)', 'Internet and utilities (business %)', 'Rent/mortgage (home office %)'], percentage: '100% of business use' },
              { category: 'Content Production', deductions: ['Props and backgrounds', 'Wardrobe for videos', 'Makeup and styling', 'Travel for content creation'], percentage: '100%' },
              { category: 'Professional Services', deductions: ['Accountant/bookkeeper fees', 'Business coach or courses', 'Legal fees (contracts, LLC setup)', 'Social media management tools'], percentage: '100%' },
              { category: 'Marketing & Growth', deductions: ['Paid ads (TikTok, Instagram, etc.)', 'Email marketing tools', 'Website hosting and domain', 'Analytics and research tools'], percentage: '100%' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-neutral-900">{item.category}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{item.percentage} Deductible</span>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1 text-body-sm text-neutral-700">
                  {item.deductions.map((ded, dedIdx) => (
                    <li key={dedIdx}>• {ded}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Quarterly Estimated Tax Guide</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            If you expect to owe $1,000+ in taxes, you must make quarterly payments:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Quarter</th>
                  <th className="text-left py-3 px-4">Income Period</th>
                  <th className="text-left py-3 px-4">Payment Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q: 'Q1 2025', period: 'Jan 1 - Mar 31', due: 'April 15, 2025' },
                  { q: 'Q2 2025', period: 'Apr 1 - May 31', due: 'June 15, 2025' },
                  { q: 'Q3 2025', period: 'Jun 1 - Aug 31', due: 'September 15, 2025' },
                  { q: 'Q4 2025', period: 'Sep 1 - Dec 31', due: 'January 15, 2026' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.q}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.period}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>How Much to Pay:</strong> Set aside 25-30% of creator income for taxes. Pay quarterly based on earnings that quarter. Use IRS Form 1040-ES to calculate.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Business Structure Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Structure</th>
                  <th className="text-left py-3 px-4">Best For</th>
                  <th className="text-left py-3 px-4">Tax Benefits</th>
                  <th className="text-left py-3 px-4">Downsides</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { structure: 'Sole Proprietor', bestFor: 'Just starting, under $50K/year', benefits: 'Simple, no setup costs', downsides: 'No liability protection' },
                  { structure: 'LLC', bestFor: 'Earning $50K+, want protection', benefits: 'Liability protection, credibility', downsides: 'State fees, more paperwork' },
                  { structure: 'S-Corp', bestFor: 'Earning $100K+, ready for complexity', benefits: 'Save on self-employment tax', downsides: 'Requires payroll, accountant' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.structure}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.bestFor}</td>
                    <td className="py-3 px-4 text-green-700">{row.benefits}</td>
                    <td className="py-3 px-4 text-red-700">{row.downsides}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Advanced Tax Strategies</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Retirement Planning for Creators</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Self-employed creators have powerful retirement savings options that also reduce current taxes:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Solo 401(k)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Contribution Limits (2025):</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Employee: Up to $23,000</li>
                        <li>• Employer: Up to 25% of net profit</li>
                        <li>• Total max: $69,000 ($76,500 if 50+)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Tax Benefits:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Immediate tax deduction</li>
                        <li>• Tax-deferred growth</li>
                        <li>• Can borrow from account</li>
                        <li>• Best for high earners ($100K+)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">SEP IRA</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Details:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Contribute up to 25% of net profit</li>
                        <li>• Max contribution: $69,000 (2025)</li>
                        <li>• Easier setup than Solo 401(k)</li>
                        <li>• Flexible annual contributions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Best For:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Creators earning $50K-150K</li>
                        <li>• Variable income year-to-year</li>
                        <li>• Want simple administration</li>
                        <li>• Don't need loan provisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Health Insurance Deductions</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Self-employed creators can deduct health insurance premiums, a significant tax benefit:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">What's Deductible</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Medical insurance premiums (100% deductible)</li>
                    <li>• Dental insurance premiums</li>
                    <li>• Vision insurance premiums</li>
                    <li>• Long-term care insurance (with limits)</li>
                    <li>• Coverage for spouse and dependents</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Requirements and Limitations</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Must have net profit from self-employment</li>
                    <li>• Cannot be eligible for employer-sponsored plan</li>
                    <li>• Deduction limited to net self-employment income</li>
                    <li>• Taken as "above the line" deduction (reduces AGI)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Vehicle and Travel Deductions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Vehicle Expense Methods:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded">
                      <p className="font-semibold text-neutral-700 mb-1">Standard Mileage Rate:</p>
                      <p className="text-body-sm text-neutral-600">$0.67 per business mile (2025)</p>
                      <p className="text-xs text-neutral-500 mt-1">Simpler, good for high mileage</p>
                    </div>
                    <div className="p-3 bg-white rounded">
                      <p className="font-semibold text-neutral-700 mb-1">Actual Expense Method:</p>
                      <p className="text-body-sm text-neutral-600">Gas, insurance, repairs × business %</p>
                      <p className="text-xs text-neutral-500 mt-1">Better for expensive vehicles</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Travel Deductions:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Content Creation Travel:</strong> Flights, hotels, meals (50%)</li>
                    <li><strong>Conference/Events:</strong> Registration, travel, lodging</li>
                    <li><strong>Brand Meeting Travel:</strong> All business-related expenses</li>
                    <li><strong>Location Scouting:</strong> Trips to find filming locations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Record Keeping and Documentation</h2>
          <div className="space-y-6">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Essential Documentation Systems</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Income Tracking</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Save all 1099 forms from platforms (TikTok, brands, affiliates)</li>
                    <li>• Track cash/PayPal payments from brand deals</li>
                    <li>• Document gift and product values received</li>
                    <li>• Keep records of all revenue streams separately</li>
                    <li>• Use accounting software to categorize income</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Expense Documentation</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Take photos of all receipts immediately</li>
                    <li>• Use expense tracking apps (Expensify, Receipt Bank)</li>
                    <li>• Note business purpose on each receipt</li>
                    <li>• Keep credit card statements showing business purchases</li>
                    <li>• Maintain mileage log for vehicle deductions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Recommended Tools and Software</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">Accounting Software</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>QuickBooks Self-Employed:</strong> $15/mo, comprehensive</li>
                    <li>• <strong>Wave:</strong> Free, basic features</li>
                    <li>• <strong>FreshBooks:</strong> $17/mo, invoicing focused</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">Receipt Management</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>Expensify:</strong> Photo receipts, auto-categorize</li>
                    <li>• <strong>Shoeboxed:</strong> Mail receipts, they scan</li>
                    <li>• <strong>Evernote:</strong> Free, manual organization</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">Mileage Tracking</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>MileIQ:</strong> Auto-tracking, $6/mo</li>
                    <li>• <strong>Everlance:</strong> Free tier available</li>
                    <li>• <strong>TripLog:</strong> Detailed reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tax Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Don't:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Ignore quarterly estimated payments</li>
                <li>• Mix personal and business expenses</li>
                <li>• Skip tracking receipts and invoices</li>
                <li>• Deduct 100% personal items (car, phone)</li>
                <li>• Wait until April to think about taxes</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Do:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Open separate business bank account</li>
                <li>• Track ALL expenses (apps: QuickBooks, Wave)</li>
                <li>• Save receipts digitally</li>
                <li>• Work with creator-focused accountant</li>
                <li>• Review taxes quarterly, not yearly</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">State and Local Tax Considerations</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">State Income Tax Strategies</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">High-Tax States</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">States with highest income tax rates for creators:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>California:</strong> Up to 13.3% state tax (highest in US)</li>
                    <li>• <strong>New York:</strong> Up to 10.9% (plus NYC tax)</li>
                    <li>• <strong>New Jersey:</strong> Up to 10.75%</li>
                    <li>• <strong>Hawaii:</strong> Up to 11%</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">No State Income Tax States</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Consider relocating to save 5-13% on state taxes:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Florida, Texas, Nevada (popular with creators)</li>
                    <li>• Tennessee, Wyoming, South Dakota</li>
                    <li>• Washington, Alaska, New Hampshire</li>
                    <li>• <strong>Savings Example:</strong> $100K income in CA vs FL = $9,300 saved</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Sales Tax and TikTok Shop</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                If you sell products through TikTok Shop, you may have sales tax obligations:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Economic Nexus Rules</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Must collect sales tax in states where you exceed thresholds</li>
                    <li>• Typical threshold: $100,000 in sales OR 200 transactions</li>
                    <li>• TikTok Shop may handle this automatically (check settings)</li>
                    <li>• Register for sales tax permit in applicable states</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Marketplace Facilitator Laws</h4>
                  <p className="text-body-sm text-neutral-700">Most states require platforms like TikTok Shop to collect and remit sales tax on your behalf. Verify your state's requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Working with Tax Professionals</h2>
          <div className="space-y-6">
            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">When to Hire an Accountant</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">DIY Tax Filing (Under $30K/year):</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Use TurboTax Self-Employed or H&R Block</li>
                    <li>• Track expenses with simple spreadsheet</li>
                    <li>• File Schedule C with personal return</li>
                    <li>• Cost: $100-200 for software</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Hire Professional ($30K+ or complex):</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Multiple income streams or business entities</li>
                    <li>• Considering S-Corp election</li>
                    <li>• Significant equipment purchases (depreciation)</li>
                    <li>• Cost: $500-2,000 annually (worth it)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Questions to Ask Potential Accountants</h3>
              <div className="space-y-2">
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <p className="text-body-sm text-neutral-700">• "Do you have experience with content creators or influencers?"</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <p className="text-body-sm text-neutral-700">• "What deductions do you typically find for creators that they miss?"</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <p className="text-body-sm text-neutral-700">• "Do you provide quarterly tax planning, or just annual filing?"</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <p className="text-body-sm text-neutral-700">• "At what income level would you recommend forming an LLC or S-Corp?"</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <p className="text-body-sm text-neutral-700">• "What's your fee structure and what services are included?"</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Year-End Tax Planning Checklist</h2>
          <div className="space-y-6">
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Q4 Tax Optimization Actions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Before December 31:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>□ Make equipment purchases to deduct this year</li>
                    <li>□ Pay outstanding business expenses</li>
                    <li>□ Max out retirement contributions</li>
                    <li>□ Prepay January expenses if beneficial</li>
                    <li>□ Review and adjust estimated tax payments</li>
                    <li>□ Consider income deferral strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">January-April Planning:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>□ Gather all 1099 forms (due by Jan 31)</li>
                    <li>□ Organize receipts and expense records</li>
                    <li>□ Calculate total income and expenses</li>
                    <li>□ Review deduction opportunities</li>
                    <li>□ File by April 15 (or extension)</li>
                    <li>□ Plan Q1 estimated tax payment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
