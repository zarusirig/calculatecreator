import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brand Deal Contract Template for TikTok Creators (2025)',
  description: 'Free brand partnership contract template. Essential clauses, payment terms, usage rights, and legal protection for creators.',
  keywords: ['brand deal contract', 'influencer agreement template', 'sponsorship contract', 'creator legal'],
  alternates: {
    canonical: 'https://calculatecreator.com/resources/brand-deal-contract/',
  },
};

export default function BrandDealContractPage() {
  const essentialClauses = [
    { clause: 'Deliverables', description: 'Specific content requirements (number of videos, length, format)' },
    { clause: 'Payment Terms', description: '50% upfront, 50% on completion. Total amount and due dates.' },
    { clause: 'Usage Rights', description: 'How long brand can use your content (6-12 months recommended)' },
    { clause: 'Exclusivity', description: 'Can\'t work with competitors for X months (charge 20-40% premium)' },
    { clause: 'Revision Limits', description: 'Maximum 2-3 revision rounds' },
    { clause: 'Kill Fee', description: 'Payment if brand cancels (usually 50% of total)' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Brand Deal Contract</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Brand Deal Contract Template</h1>
          <p className="text-heading-md text-white/90">Essential clauses for creator protection</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-red-50 border-red-200">
          <p className="text-body-md text-neutral-900 mb-2 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-600 mt-0.5" />
            <span><strong>Legal Disclaimer:</strong> This is educational information only, not legal advice. Consult a qualified attorney for your specific situation. Contract law varies by jurisdiction.</span>
          </p>
        </Card>

        {/* Introduction */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Why You Need a Written Contract for Every Brand Deal</h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              As a TikTok creator, brand partnerships can be your most lucrative revenue stream - often earning 10-50x more than the Creator Fund. However, without proper legal protection, a promising collaboration can quickly turn into unpaid work, scope creep, or rights disputes.
            </p>
            <p>
              A well-structured contract protects both you and the brand by clearly defining expectations, deliverables, payment terms, and usage rights. Even if a brand provides their standard agreement, understanding essential contract clauses empowers you to negotiate favorable terms and avoid exploitative deals.
            </p>
            <p>
              This guide covers the critical elements every creator should include in brand partnership agreements, common red flags to avoid, negotiation strategies, and payment structures that protect your interests while maintaining positive brand relationships.
            </p>
          </div>
        </Card>

        {/* Essential Contract Clauses */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Essential Contract Clauses Every Creator Needs</h2>
          <div className="space-y-4">
            {essentialClauses.map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{item.clause}</h3>
                <p className="text-body-sm text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Detailed Clause Breakdown */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Detailed Clause Breakdown: What to Include</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">1. Parties & Effective Date</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>What to include:</strong> Full legal names (or business entities), addresses, and the contract start date. If using a business entity (LLC), ensure contracts are in the business name, not your personal name.
                </p>
                <p className="text-body-xs text-neutral-600 italic">
                  Example: "This Agreement is entered into as of [DATE] between [CREATOR NAME/LLC] ("Creator") with address at [ADDRESS] and [BRAND NAME] ("Brand") with address at [ADDRESS]."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">2. Scope of Work & Deliverables</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  <strong>Be extremely specific:</strong> Vague language like "social media posts" leads to scope creep. Define exactly what you're creating.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Specify:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Number of videos (e.g., "Three (3) TikTok videos")</li>
                    <li>Video length (e.g., "60-90 seconds each")</li>
                    <li>Content format (e.g., "product review," "tutorial," "unboxing")</li>
                    <li>Posting schedule (e.g., "one video per week for 3 weeks")</li>
                    <li>Platform(s) (e.g., "TikTok only" vs "TikTok + Instagram Reels")</li>
                    <li>Caption requirements (e.g., "Include #ad and #BrandName")</li>
                    <li>Story/grid posts if applicable</li>
                  </ul>
                </div>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-body-xs text-red-700">
                  <strong>Red Flag:</strong> Contracts stating "up to 5 posts" give brands wiggle room to demand maximum deliverables while paying minimum rates. Use exact numbers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">3. Payment Terms</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  <strong>Standard creator payment structure:</strong> 50% upfront deposit (before work begins) + 50% upon completion and approval. This protects you from non-payment.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Include:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Total compensation amount (e.g., "$2,500 USD")</li>
                    <li>Payment schedule (50/50 split is industry standard)</li>
                    <li>Payment method (wire transfer, PayPal, check, etc.)</li>
                    <li>Invoice terms (e.g., "Net 15" = payment due within 15 days)</li>
                    <li>Late payment penalties (e.g., "1.5% monthly interest on overdue invoices")</li>
                    <li>Who covers transaction fees (typically brand covers)</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <p className="text-body-xs font-semibold text-success-900 mb-1">Good Example:</p>
                  <p className="text-body-xs text-neutral-700">"Creator will be paid $3,000 total: $1,500 upon contract signing, $1,500 within 15 days of final deliverable approval."</p>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-body-xs font-semibold text-red-900 mb-1">Bad Example:</p>
                  <p className="text-body-xs text-neutral-700">"Payment upon completion" (no upfront deposit, undefined timeline)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">4. Usage Rights & Licensing</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  <strong>This is where creators lose the most money.</strong> Your content has value beyond the initial post. Brands want to repurpose your videos for ads, websites, and other marketing. Charge accordingly.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-900 mb-2">Organic Rights (Standard)</p>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      Brand can repost your content on their own social channels. This is typically included in base pricing.
                    </p>
                    <p className="text-body-xs text-neutral-600">
                      Duration: 6-12 months | Add to base rate: Included
                    </p>
                  </div>
                  <div className="p-3 bg-warning-50 border border-warning-200 rounded">
                    <p className="text-body-sm font-semibold text-neutral-900 mb-2">Paid Media Rights (License Fee)</p>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      Brand uses your content as paid advertising (Facebook Ads, TikTok Ads, etc.). This should cost 50-100% of your base rate PER PLATFORM, PER YEAR.
                    </p>
                    <p className="text-body-xs text-neutral-600">
                      Example: $2,000 base rate + $1,500 (75%) for 12-month paid social rights = $3,500 total
                    </p>
                  </div>
                  <div className="p-3 bg-danger-50 border border-danger-200 rounded">
                    <p className="text-body-sm font-semibold text-neutral-900 mb-2">Exclusivity (Premium Add-On)</p>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      You cannot work with competitors in the same category for a defined period. Charge 20-40% more for exclusivity clauses.
                    </p>
                    <p className="text-body-xs text-neutral-600">
                      Example: 6-month category exclusivity adds $600 to a $2,000 deal (30% premium)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">5. Revision & Approval Process</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  Unlimited revisions = unlimited unpaid work. Cap revision rounds and define approval timelines to prevent projects from dragging on indefinitely.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Standard terms:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>2-3 revision rounds maximum</li>
                    <li>Brand has 3-5 business days to provide feedback</li>
                    <li>Additional revisions cost 15-25% of base rate</li>
                    <li>If brand doesn't respond within 7 days, content is deemed approved</li>
                    <li>Define what counts as a "revision" (major edits only, not typo fixes)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">6. Creative Control & Approval Rights</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  Balance brand guidelines with your authentic voice. Your audience trusts you - scripted content that doesn't sound like you will underperform.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Negotiate for:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Right to use your own speaking style and creative approach</li>
                    <li>Approval of scripts (not dictation of exact wording)</li>
                    <li>Ability to refuse content that doesn't align with your values</li>
                    <li>Protection from last-minute major changes</li>
                  </ul>
                </div>
              </div>
              <div className="p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-body-xs text-neutral-700">
                  <strong>Sample language:</strong> "Creator retains creative control over content format, delivery, and tone while incorporating Brand's key messaging points and product features as outlined in brief."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">7. Cancellation & Kill Fee</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  If a brand cancels mid-project, you've already invested time and turned down other opportunities. A kill fee compensates you for this.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Standard kill fee structure:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Cancellation before work begins: 25% of total fee</li>
                    <li>Cancellation after concept/script approved: 50% of total fee</li>
                    <li>Cancellation after content created: 75-100% of total fee</li>
                    <li>Both parties must provide 48 hours written notice for cancellation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">8. Disclosure & FTC Compliance</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  Both you and the brand are legally required to follow FTC guidelines for sponsored content disclosure. Include this clause to protect yourself from brand requests to hide sponsorship.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Required disclosure practices:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Use #ad or #sponsored in caption (TikTok requires this)</li>
                    <li>Toggle on TikTok's "Branded Content" feature</li>
                    <li>Verbal disclosure in video (e.g., "Thanks to [Brand] for sponsoring this video")</li>
                    <li>Disclosure must be clear, prominent, and unavoidable</li>
                  </ul>
                </div>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-body-xs text-red-700">
                  <strong>Warning:</strong> If a brand asks you to hide the sponsorship relationship, this is illegal under FTC rules. You can face fines up to $43,280 per violation. Always disclose.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">9. Performance Guarantees (What to Avoid)</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  <strong>Never guarantee views, engagement, or sales.</strong> You control the content quality, not the algorithm. Payment should be for content creation, not algorithmic performance.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Safe language:</strong></p>
                  <p className="italic">"Creator will produce high-quality content aligned with Brand guidelines. Creator makes no guarantees regarding views, engagement rate, or conversion metrics, as these depend on platform algorithms and audience behavior beyond Creator's control."</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">10. Intellectual Property & Content Ownership</h3>
              <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                <p className="text-body-sm text-neutral-700 mb-3">
                  <strong>You should retain copyright ownership.</strong> Brands get a license to use your content (as defined in usage rights section), but you own the underlying intellectual property.
                </p>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Standard IP clause:</strong></p>
                  <p className="italic">"Creator retains all intellectual property rights, copyright, and ownership of content. Brand receives a non-exclusive, limited license to use content as specified in Section [Usage Rights] for the agreed-upon duration."</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Brand Deal Pricing Guide */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Brand Deal Pricing Guide for TikTok Creators</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Understanding how to price your content is crucial. Here's a breakdown of typical rates by follower count and deliverable type:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Follower Range</th>
                  <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Per TikTok Video</th>
                  <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">3-Video Package</th>
                  <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Rate Multiplier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">10K - 25K</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$100 - $250</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$250 - $650</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$10 per 1K followers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">25K - 50K</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$250 - $500</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$650 - $1,350</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$10 per 1K followers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">50K - 100K</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$500 - $1,200</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$1,350 - $3,200</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$10-$12 per 1K followers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">100K - 250K</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$1,200 - $3,000</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$3,200 - $8,000</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$12 per 1K followers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">250K - 500K</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$3,000 - $6,000</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$8,000 - $16,000</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$12-$15 per 1K followers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">500K - 1M</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$6,000 - $12,000</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$16,000 - $32,000</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$12-$15 per 1K followers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">1M+</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-900">$12,000 - $25,000+</td>
                  <td className="py-3 px-4 text-body-sm text-neutral-700">$32,000 - $65,000+</td>
                  <td className="py-3 px-4 text-body-xs text-neutral-600">$12-$25+ per 1K followers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-3">
            <div className="p-4 bg-success-50 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">Premium Rates (Add 50-100%)</p>
              <p className="text-body-sm text-neutral-700">High engagement (8%+), niche audiences (finance, B2B), or exclusive category rights justify premium pricing.</p>
            </div>
            <div className="p-4 bg-warning-50 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">Discounted Rates (Reduce 20-40%)</p>
              <p className="text-body-sm text-neutral-700">Low engagement (under 3%), gifted product only (no cash payment), or long-term partnerships with volume discounts.</p>
            </div>
          </div>
        </Card>

        {/* Payment Structure Options */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Payment Structure Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-3">Flat Fee (Most Common)</h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                You receive a fixed payment regardless of video performance. Best for most creators as it guarantees payment.
              </p>
              <p className="text-body-xs text-success-700 font-medium">Pros: Predictable income, no performance risk</p>
              <p className="text-body-xs text-danger-700 font-medium mt-1">Cons: May miss out on bonus if content performs extremely well</p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-3">Flat Fee + Performance Bonus</h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Base payment + bonus if video hits certain metrics (e.g., +$500 if video exceeds 100K views in 7 days).
              </p>
              <p className="text-body-xs text-success-700 font-medium">Pros: Upside potential, brands like shared risk</p>
              <p className="text-body-xs text-danger-700 font-medium mt-1">Cons: Bonus depends on algorithm, not just content quality</p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-3">Product Gifting Only</h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                No cash payment - you receive free products in exchange for content. Only accept if product value exceeds $300 OR you genuinely want the product.
              </p>
              <p className="text-body-xs text-success-700 font-medium">Pros: Easy to secure, no tax complexity</p>
              <p className="text-body-xs text-danger-700 font-medium mt-1">Cons: No cash flow, brands may not value your work</p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-3">Affiliate Commission</h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                You earn a percentage (10-30%) of sales generated from your unique link or code. Only viable for highly engaged audiences.
              </p>
              <p className="text-body-xs text-success-700 font-medium">Pros: Unlimited earning potential</p>
              <p className="text-body-xs text-danger-700 font-medium mt-1">Cons: Zero guaranteed income, tracking can be unreliable</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
            <p className="text-body-sm text-neutral-900">
              <strong>Recommended for new creators:</strong> Always negotiate for at least a small flat fee ($200-500 minimum) even in affiliate or gifted deals. This ensures you're compensated for your time regardless of external factors.
            </p>
          </div>
        </Card>

        {/* Red Flags to Avoid */}
        <Card className="bg-purple-50 border-purple-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Major Red Flags in Brand Contracts</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ No Written Contract</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Verbal agreements or DM conversations are not enforceable. If a brand refuses to provide a written contract, walk away.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Risk: No legal recourse if brand doesn't pay or misuses your content</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Payment Based on Performance Metrics</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                "We'll pay you based on engagement" or "payment upon reaching X views" means the brand controls whether you get paid by manipulating what "success" looks like.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Counter: "I charge for content creation, not algorithmic performance. Payment is due upon delivery."</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Perpetual or Lifetime Usage Rights</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Brands want to use your content forever without additional payment. This severely undervalues your work.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Counter: Limit usage rights to 6-12 months, then renegotiate if brand wants to extend</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Unlimited Revisions</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                This allows brands to request endless changes without additional payment, turning a quick project into weeks of work.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Counter: Cap at 2-3 revision rounds, charge 20% of base rate for additional revisions</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Broad Exclusivity Without Premium Pay</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                "You can't work with any other brands for 6 months" without paying 30-50% more is exploitative. Exclusivity blocks your income - charge accordingly.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Counter: Narrow exclusivity to direct competitors only, limit to 3-6 months, add 30-40% fee</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Brand Can Terminate Anytime Without Penalty</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Contracts allowing brands to cancel without payment (no kill fee) leave you with zero income after investing time.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Counter: Include kill fee clause (50% minimum if work has begun)</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Requirement to Purchase Product Upfront</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Legitimate brands send you the product for free. If they ask you to buy it first and "reimburse you later," it's likely a scam.
              </p>
              <p className="text-body-xs text-neutral-600 italic">Red flag: This is a common scam tactic. Never pay out of pocket.</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-2">❌ Overly Complex Legal Language</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                If you can't understand the contract, it may contain hidden clauses that put you at risk (automatic renewals, liability for brand's mistakes, etc.).
              </p>
              <p className="text-body-xs text-neutral-600 italic">Counter: Always have a lawyer review contracts over $2,000 or with complex terms</p>
            </div>
          </div>
        </Card>

        {/* Negotiation Tips */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">How to Negotiate Better Brand Deal Terms</h2>
          <div className="space-y-6">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">1. Always Counter the First Offer</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Brands expect negotiation. Their first offer is typically 30-50% below what they're willing to pay. Counter with 20-30% higher than their initial offer.
              </p>
              <p className="text-body-xs text-neutral-600 italic">
                Example: Brand offers $500 → Counter with $700-750 → Likely settle at $600-650
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">2. Unbundle Services to Increase Transparency</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Instead of one lump sum, break down pricing: $1,500 (base content) + $500 (12-month usage rights) + $300 (6-month exclusivity) = $2,300 total.
              </p>
              <p className="text-body-xs text-neutral-600">This makes it easier to negotiate individual components rather than overall price.</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">3. Ask for Usage Data Access</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                If brand wants to use your content in paid ads, request access to performance data. This helps you justify higher rates in future deals.
              </p>
              <p className="text-body-xs text-neutral-600">Add clause: "Brand will provide monthly performance reports for content used in paid advertising."</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">4. Leverage Multiple Offers</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                If you have multiple brand opportunities, mention this (tactfully): "I have another offer I'm considering. If you can match [X amount], I'd love to prioritize this partnership."
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">5. Offer Package Discounts for Volume</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                If brand wants multiple videos, offer a small discount (10-15% off) for packages: Single video $1,000 → 3-video package $2,700 (10% discount).
              </p>
              <p className="text-body-xs text-neutral-600">This incentivizes larger deals while maintaining healthy margins.</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">6. Request 50% Upfront for New Brands</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                For first-time brand partnerships, always require 50% deposit before starting work. This protects you from non-payment and signals professionalism.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">7. Don't Be Afraid to Walk Away</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                If a brand won't meet your minimum rate, has exploitative terms, or disrespects your time, politely decline. Bad deals damage your brand more than no deal.
              </p>
              <p className="text-body-xs text-neutral-600 italic">
                Response template: "Thank you for the opportunity. Unfortunately, this doesn't align with my rates at this time. I'd love to revisit if your budget increases in the future."
              </p>
            </div>
          </div>
        </Card>

        {/* Contract Template Sample */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Sample Contract Structure (Simplified)</h2>
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 font-mono text-sm space-y-4">
            <div>
              <p className="font-semibold text-neutral-900 mb-2">INFLUENCER MARKETING AGREEMENT</p>
              <p className="text-neutral-700 text-xs">This Agreement made as of [DATE] between:</p>
              <p className="text-neutral-700 text-xs ml-4">[CREATOR NAME/LLC] ("Creator")</p>
              <p className="text-neutral-700 text-xs ml-4">[BRAND NAME] ("Brand")</p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900 mb-2">1. DELIVERABLES</p>
              <p className="text-neutral-700 text-xs ml-4">Creator will produce and publish:</p>
              <p className="text-neutral-700 text-xs ml-8">• Three (3) TikTok videos, 60-90 seconds each</p>
              <p className="text-neutral-700 text-xs ml-8">• Featuring [PRODUCT NAME] with key messaging per creative brief</p>
              <p className="text-neutral-700 text-xs ml-8">• Posted [SCHEDULE] on Creator's TikTok account @[USERNAME]</p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900 mb-2">2. COMPENSATION</p>
              <p className="text-neutral-700 text-xs ml-4">Brand will pay Creator $[AMOUNT] USD total:</p>
              <p className="text-neutral-700 text-xs ml-8">• $[50% AMOUNT] due upon contract signing</p>
              <p className="text-neutral-700 text-xs ml-8">• $[50% AMOUNT] due within 15 days of final content approval</p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900 mb-2">3. USAGE RIGHTS</p>
              <p className="text-neutral-700 text-xs ml-4">Brand receives non-exclusive license to:</p>
              <p className="text-neutral-700 text-xs ml-8">• Repost content on Brand's organic social channels for 12 months</p>
              <p className="text-neutral-700 text-xs ml-8">• [OPTIONAL: Use in paid advertising for 12 months (+$[AMOUNT])]</p>
              <p className="text-neutral-700 text-xs ml-4 mt-2">Creator retains all copyright and IP ownership.</p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900 mb-2">4. REVISIONS</p>
              <p className="text-neutral-700 text-xs ml-4">Up to two (2) rounds of revisions included. Additional revisions: $[AMOUNT] each.</p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900 mb-2">5. EXCLUSIVITY</p>
              <p className="text-neutral-700 text-xs ml-4">[IF APPLICABLE: Creator agrees not to promote competing [CATEGORY] brands for [X] months.]</p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900 mb-2">6. CANCELLATION</p>
              <p className="text-neutral-700 text-xs ml-4">Kill fee if Brand cancels: [50% after work begins, 100% after content delivered]</p>
            </div>

            <div>
              <p className="text-neutral-700 text-xs mt-8">________________________</p>
              <p className="text-neutral-700 text-xs">Creator Signature / Date</p>
              <p className="text-neutral-700 text-xs mt-4">________________________</p>
              <p className="text-neutral-700 text-xs">Brand Representative / Date</p>
            </div>
          </div>
          <p className="text-body-xs text-neutral-600 mt-4 italic">
            Note: This is a simplified example for educational purposes. Actual contracts should be more comprehensive and reviewed by legal counsel.
          </p>
        </Card>

        {/* Tools and Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Tools & Resources for Contract Management</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Contract Templates</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Use platforms like Honeybook, Dubsado, or Bonsai for professional contract templates designed for creators. Cost: $16-40/month.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">E-Signature Solutions</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                DocuSign, HelloSign, or Adobe Sign for legally binding electronic signatures. Free tiers available for occasional use.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Invoicing Software</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Wave (free), FreshBooks, or QuickBooks for professional invoicing with payment tracking and automated reminders.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Legal Review</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                For contracts over $5,000 or complex terms, invest in legal review ($200-500). LegalZoom or local entertainment lawyers specializing in influencer marketing.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Do I need a business entity (LLC) for brand deals?</h3>
              <p className="text-body-sm text-neutral-700">
                Not required, but recommended once you're earning $10K+/year from brand deals. An LLC provides liability protection and tax benefits. Cost: $50-500 depending on state. Consult a CPA and attorney for your specific situation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Should I accept gifted products instead of payment?</h3>
              <p className="text-body-sm text-neutral-700">
                Only if: (1) Product value exceeds $300, (2) You genuinely need/want the product, or (3) The brand is prestigious and builds your portfolio. Otherwise, always negotiate for cash payment. Your time and influence have monetary value.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">What if a brand refuses to negotiate or provide a written contract?</h3>
              <p className="text-body-sm text-neutral-700">
                Walk away. Legitimate brands understand the importance of written agreements. If they won't put terms in writing, they're not planning to honor them. This is a major red flag indicating potential non-payment or exploitation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">How do I handle taxes on brand deal income?</h3>
              <p className="text-body-sm text-neutral-700">
                In the US, brand deal income is self-employment income. Set aside 25-30% for taxes, track all expenses (equipment, props, software), and file quarterly estimated taxes if earning over $1,000/year. Consult a CPA familiar with creator tax situations. Consider using Bench or Keeper Tax for bookkeeping.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">What if a brand doesn't pay on time?</h3>
              <p className="text-body-sm text-neutral-700">
                Send a friendly reminder email on the due date. If no response in 7 days, send formal notice referencing the contract's late payment clause. If still no payment after 14 days past due, consult a lawyer about small claims court (for amounts under $5K-10K depending on state) or collection agency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Can I reuse content from a brand deal?</h3>
              <p className="text-body-sm text-neutral-700">
                Depends on your contract's usage rights section. If you retained copyright and only licensed content to the brand for specific uses, you can typically keep the video live and reference it in your portfolio. However, creating similar content for a competing brand during an exclusivity period would violate most contracts. Always check your specific agreement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">How long should usage rights last?</h3>
              <p className="text-body-sm text-neutral-700">
                Industry standard is 6-12 months for organic usage rights, 12 months for paid advertising rights. Longer durations (24+ months or perpetual) should cost significantly more (50-100% premium). Never agree to perpetual rights at standard rates - your content continues providing value to the brand long after the initial campaign.
              </p>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="space-y-3">
            <Link href="/guides/how-to-get-brand-deals-complete" className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <h3 className="text-body-md font-semibold text-primary-700 mb-1">How to Get Brand Deals Guide →</h3>
              <p className="text-body-sm text-neutral-600">Complete step-by-step guide to landing your first (and 100th) brand partnership</p>
            </Link>
            <Link href="/calculators/brand-deal-rate" className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <h3 className="text-body-md font-semibold text-primary-700 mb-1">Brand Deal Rate Calculator →</h3>
              <p className="text-body-sm text-neutral-600">Calculate fair pricing for your brand partnerships based on followers and engagement</p>
            </Link>
          </div>
        </Card>

        {/* Final Disclaimer */}
        <Card className="bg-neutral-100 border-neutral-300">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">Legal Disclaimer</h2>
          <p className="text-body-sm text-neutral-700 mb-3">
            The information provided on this page is for educational purposes only and does not constitute legal advice. Contract law, intellectual property rights, and tax regulations vary significantly by jurisdiction and individual circumstances.
          </p>
          <p className="text-body-sm text-neutral-700 mb-3">
            For contracts involving significant sums (typically $5,000+), complex usage rights, exclusivity clauses, or unfamiliar terms, we strongly recommend consulting with a qualified attorney specializing in influencer marketing, entertainment law, or intellectual property. The cost of legal review ($200-800) is a worthwhile investment to protect potentially thousands of dollars in earnings.
          </p>
          <p className="text-body-sm text-neutral-700 mb-3">
            Tax obligations for self-employment income vary by country, state, and individual tax situation. Consult with a certified public accountant (CPA) or tax professional familiar with creator economy taxation to ensure compliance and maximize deductions.
          </p>
          <p className="text-body-sm text-neutral-700">
            This resource is independent and not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, or any brand partnership platforms. Contract templates and sample language should be customized to your specific situation and reviewed by legal counsel before use.
          </p>
        </Card>
      </div>
    </div>
  );
}

