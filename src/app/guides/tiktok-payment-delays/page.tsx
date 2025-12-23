import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/CalculatorSchema';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Understanding TikTok Payment Delays: Complete Guide (2025)',
  description: 'Complete guide to TikTok payment schedules and delays. Learn Creator Fund, LIVE Gifts, Shop, and brand deal payment timelines with troubleshooting tips.',
  keywords: ['tiktok payment delay', 'creator fund payment schedule', 'when does tiktok pay', 'tiktok payout timeline'],
};

const faqs = [
  {
    question: 'How long does TikTok Creator Fund take to pay?',
    answer: 'Creator Fund payments are calculated monthly but paid approximately 30-45 days after the month ends. For example, January earnings are typically paid in early to mid-March.',
  },
  {
    question: 'What is the minimum payout for TikTok Creator Fund?',
    answer: 'The minimum payout threshold is $10 in the United States. You must accumulate at least $10 in earnings before TikTok processes a payment. Some regions have different minimums.',
  },
  {
    question: 'Why hasn\'t my TikTok payment arrived yet?',
    answer: 'Common reasons include: minimum balance not met, payment method verification pending, missing tax documentation, account under review, or regional payment processing delays. Check your TikTok Creator Tools for specific issues.',
  },
  {
    question: 'How do I withdraw LIVE Gifts earnings?',
    answer: 'LIVE Gifts convert to Diamonds, which you can withdraw once you reach 1,500 Diamonds ($75). Withdrawals typically process within 5-10 business days to PayPal or other payment methods.',
  },
  {
    question: 'Can I speed up TikTok payments?',
    answer: 'No, TikTok payment schedules are fixed. However, ensure your account is fully verified, tax forms submitted, and payment method current to avoid additional delays.',
  },
  {
    question: 'Do TikTok Shop payments work differently?',
    answer: 'Yes, TikTok Shop has separate payment schedules. Affiliate commissions are paid 30 days after the return window closes. Own product sales typically pay 7-14 days after delivery confirmation.',
  },
];

export default function TikTokPaymentDelaysPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticleSchema
        headline="Understanding TikTok Payment Delays: Complete Guide"
        description="Complete guide to TikTok payment schedules, timelines, and troubleshooting payment delays across Creator Fund, LIVE Gifts, and TikTok Shop."
        url="https://calculatecreator.com/guides/tiktok-payment-delays"
        datePublished="2025-11-13"
        dateModified="2025-11-13"
        keywords={['tiktok payments', 'payment delays', 'creator fund payout', 'live gifts withdrawal']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Guides', url: 'https://calculatecreator.com/guides' },
          { name: 'TikTok Payment Delays', url: 'https://calculatecreator.com/guides/tiktok-payment-delays' },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Payment Delays</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-tools-640.avif 640w, /guides/guide-tools-1024.avif 1024w, /guides/guide-tools-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-tools-640.webp 640w, /guides/guide-tools-1024.webp 1024w, /guides/guide-tools-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-tools-1024.webp"
              alt="Featured image for Understanding TikTok Payment Delays"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Understanding TikTok Payment Delays
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete guide to payment schedules, timelines, and resolving delays
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated: November 13, 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 4 min read</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              How TikTok Payments Work
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              TikTok has multiple monetization streams, each with its own payment schedule and requirements.
              Understanding these timelines helps set proper expectations and identify when genuine delays occur.
            </p>
            <p className="text-body-md text-neutral-700">
              The most common source of confusion is that TikTok doesn't pay immediately. All monetization methods
              have built-in waiting periods for verification, fraud prevention, and processing.
            </p>
          </div>
        </Card>

        <Card className="bg-blue-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Calculate Expected Earnings
          </h3>
          <p className="text-body-sm text-neutral-700 mb-4">
            Estimate your earnings while waiting for payments to process.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/tiktok-creator-fund" className="btn btn-primary">
              Creator Fund Calculator →
            </Link>
            <Link href="/calculators/live-gifts" className="btn btn-secondary">
              LIVE Gifts Calculator
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Payment Schedule by Income Type
          </h2>

          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Creator Fund Payment Schedule
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">1</div>
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-900">Earnings Calculation</p>
                    <p className="text-body-sm text-neutral-700">Views from each month are calculated and finalized at month end (e.g., all January views finalized Feb 1)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">2</div>
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-900">Processing Period</p>
                    <p className="text-body-sm text-neutral-700">TikTok verifies views, removes invalid traffic, and calculates RPM (takes 15-30 days)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">3</div>
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-900">Minimum Threshold Check</p>
                    <p className="text-body-sm text-neutral-700">Payment processes only if balance exceeds $10 (US) minimum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">4</div>
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-900">Payment Issued</p>
                    <p className="text-body-sm text-neutral-700">Funds sent to payment method (typically 30-45 days after month end)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded">
                <p className="text-body-sm font-semibold text-neutral-900 mb-1">Example Timeline:</p>
                <p className="text-body-sm text-neutral-700">January earnings → Payment arrives early to mid-March</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                LIVE Gifts Withdrawal Timeline
              </h3>
              <ul className="space-y-3 text-body-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Gift Receipt:</strong> Gifts convert to Diamonds instantly during LIVE stream</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Minimum Threshold:</strong> Must accumulate 1,500 Diamonds (approximately $75 USD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Withdrawal Request:</strong> Initiated manually through Creator Tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Processing Time:</strong> 5-10 business days to PayPal, Venmo, or other payment methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Exchange Rate:</strong> 1 Diamond = $0.05 USD (200 Diamonds = $10)</span>
                </li>
              </ul>
              <Link href="/calculators/live-gifts" className="text-body-sm text-green-700 hover:underline inline-block mt-3">
                Calculate LIVE Gifts Earnings →
              </Link>
            </div>

            <div className="p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Brand Deal Payment Terms
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Brand deal payments vary by agreement but typically follow these patterns:
              </p>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-semibold">Small brands/Direct outreach:</span>
                  <span>50% upfront, 50% on completion</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-semibold">Agency deals:</span>
                  <span>Net 30 (30 days after invoice)</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-semibold">Large brands:</span>
                  <span>Net 60 (60 days after invoice)</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-semibold">Performance-based:</span>
                  <span>30-45 days after campaign ends</span>
                </div>
              </div>
              <p className="text-body-sm text-neutral-700 mt-3 italic">
                Pro tip: Always negotiate payment terms upfront. Request 50% upfront for projects over $1,000.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                TikTok Shop Payout Schedule
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Affiliate Commissions:</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700 list-disc list-inside ml-4">
                    <li>Commission earned when viewer purchases through your link</li>
                    <li>30-day waiting period after product delivery (for return window)</li>
                    <li>Payment processed on next payout cycle after waiting period</li>
                    <li>Typical total timeline: 45-60 days from sale to payment</li>
                  </ul>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Own Products:</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700 list-disc list-inside ml-4">
                    <li>Earnings released 7-14 days after delivery confirmation</li>
                    <li>Must meet minimum threshold ($25 typically)</li>
                    <li>Payouts occur bi-weekly or monthly depending on region</li>
                  </ul>
                </div>
              </div>
              <Link href="/calculators/shop-commission" className="text-body-sm text-blue-700 hover:underline inline-block mt-3">
                Calculate Shop Commission →
              </Link>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Common Reasons for Payment Delays
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">1. Minimum Balance Not Met</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                <strong>Issue:</strong> Your earnings haven't reached the minimum payout threshold ($10 Creator Fund, $75 LIVE Gifts).
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Solution:</strong> Earnings roll over to next payment period. Continue creating content until threshold is met.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">2. Account Verification Pending</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                <strong>Issue:</strong> TikTok requires additional verification for payment processing.
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Solution:</strong> Check Creator Tools for verification requests. Submit government-issued ID if requested.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">3. Tax Form Not Submitted</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                <strong>Issue:</strong> US creators must submit W-9 form. International creators may need W-8BEN.
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Solution:</strong> Go to Settings → Creator Tools → Tax Information. Complete required forms immediately.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">4. Payment Method Issues</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                <strong>Issue:</strong> PayPal email incorrect, account closed, or payment method not verified.
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Solution:</strong> Update payment method in settings. Ensure PayPal account is active and verified.
              </p>
            </div>

            <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">5. Account Flagged for Review</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                <strong>Issue:</strong> Unusual activity, violation investigation, or fraud prevention hold.
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Solution:</strong> Contact TikTok Creator Support. Review account for policy violations. May take 2-4 weeks to resolve.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">6. Regional Payment Processing Differences</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                <strong>Issue:</strong> Payment processors in some regions experience delays, especially during holidays.
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Solution:</strong> Add 5-10 business days buffer for international payments. Contact payment provider if delay exceeds 10 days.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Track and Resolve Payment Issues
          </h2>
          <div className="space-y-3 text-body-sm text-neutral-700">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
              <p><strong>Check Creator Tools Dashboard:</strong> View pending earnings, payment history, and any alerts</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
              <p><strong>Verify Account Status:</strong> Ensure account is in good standing with no violations</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
              <p><strong>Confirm Payment Method:</strong> Double-check PayPal email or payment details are current</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">4</span>
              <p><strong>Review Tax Documents:</strong> Ensure all required forms are submitted and approved</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">5</span>
              <p><strong>Contact Creator Support:</strong> If delay exceeds normal timeline by 10+ days, submit support ticket</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">6</span>
              <p><strong>Document Everything:</strong> Keep screenshots of earnings, payment dates, and support communications</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Related Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Creator Fund</h3>
              <p className="text-body-sm text-neutral-600">Estimate monthly earnings</p>
            </Link>
            <Link href="/calculators/live-gifts" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">LIVE Gifts</h3>
              <p className="text-body-sm text-neutral-600">Calculate diamond value</p>
            </Link>
            <Link href="/calculators/shop-commission" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Shop Commission</h3>
              <p className="text-body-sm text-neutral-600">Project affiliate earnings</p>
            </Link>
          </div>
        </Card>

        <FAQSection faqs={faqs} pageName="TikTok Payment Delays" />
      </div>
    </div>
  );
}
