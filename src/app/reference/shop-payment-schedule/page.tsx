import type { Metadata} from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Calendar, Clock, DollarSign, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Shop Payment Schedule: When Do You Get Paid? (2026)',
  description: 'Complete TikTok Shop payout schedule, processing times, minimum thresholds, payment methods, and troubleshooting for delayed payments.',
  keywords: ['tiktok shop payment', 'shop payout schedule', 'when paid tiktok shop', 'commission payout', 'tiktok shop seller payment'],
  alternates: {
    canonical: 'https://calculatecreator.com/reference/shop-payment-schedule/',
  },
};

export default function ShopPaymentSchedulePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Shop Payment Schedule</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Shop Payment Schedule 2026</h1>
          <p className="text-heading-md text-white/90 mb-6">Complete guide to when and how you get paid as a TikTok Shop seller or affiliate</p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated: November 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Bi-Weekly Payments</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $10 Minimum</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding TikTok Shop Payment Cycles</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok Shop operates on a bi-weekly payment schedule for both sellers and affiliates. Unlike monthly payment systems, you receive payments twice per month, which improves cash flow for growing businesses and creators. This guide covers the complete payment process, timing, and what to do if payments are delayed.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Quick Summary</h3>
            <ul className="text-body-sm text-blue-800 space-y-1 ml-4 list-disc">
              <li>Payment frequency: Every 14 days (bi-weekly)</li>
              <li>Minimum payout: $10 (or local currency equivalent)</li>
              <li>Processing time: 5-7 business days after payout initiation</li>
              <li>Payment methods: Bank transfer (ACH/wire), PayPal</li>
            </ul>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Bi-Weekly Payment Schedule Breakdown</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Payment Cycle 1: 1st-14th of Month</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Sales Period:</strong> Day 1-14 of current month</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Processing:</strong> Day 15-17 (TikTok calculates final amounts, deducts returns/refunds)</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Payment Initiated:</strong> Day 18 (appears in payment dashboard as "Processing")</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Funds Arrive:</strong> Day 20-25 (PayPal faster, bank transfer slower)</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Payment Cycle 2: 15th-End of Month</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Sales Period:</strong> Day 15-Last day of current month</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Processing:</strong> 1st-3rd of following month</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Payment Initiated:</strong> 4th of following month</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-sm text-neutral-700"><strong>Funds Arrive:</strong> 6th-11th of following month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Important Note
            </h4>
            <p className="text-body-sm text-yellow-800">
              Exact dates may shift by 1-2 days depending on weekends, holidays, and time zones. TikTok doesn't process payments on weekends or major holidays, so payments falling on Saturday/Sunday process on the following Monday.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Payout Frequency</h3>
              <p className="text-body-md text-neutral-700 mb-2">Every 14 days (bi-weekly)</p>
              <p className="text-body-sm text-neutral-600">You receive 2 payments per month: one for sales from 1st-14th, another for 15th-end of month. This provides better cash flow than monthly payment systems.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Minimum Threshold</h3>
              <p className="text-body-md text-neutral-700 mb-2">$10 minimum balance required (US)</p>
              <p className="text-body-sm text-neutral-600">Other regions: £10 (UK), €10 (EU), $5-10 equivalent (Southeast Asia). If you don't meet minimum in a cycle, balance rolls over to next payment period.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Processing Time</h3>
              <p className="text-body-md text-neutral-700 mb-2">5-7 business days after payout initiated</p>
              <p className="text-body-sm text-neutral-600">PayPal: 3-5 business days. Bank transfer: 5-7 business days (US), 7-12 days (international). Processing starts when TikTok initiates payment, not when you request it.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Payment Methods</h3>
              <p className="text-body-md text-neutral-700 mb-2">Bank transfer, PayPal (varies by region)</p>
              <p className="text-body-sm text-neutral-600">PayPal recommended for faster payments and lower international transfer fees. Bank transfer available in most countries but slower. Set up payment method in TikTok Shop Seller Center → Settings → Payments.</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Example Payment Timeline</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-teal-50 to-white rounded-lg border border-teal-200">
              <h3 className="font-semibold text-neutral-900 mb-3">Scenario: January Sales</h3>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p><strong>Jan 1-14:</strong> You make $150 in sales (minus returns: $140 net)</p>
                <p><strong>Jan 15-17:</strong> TikTok processes and calculates final amount</p>
                <p><strong>Jan 18:</strong> Payment initiated ($140 shows as "Processing" in dashboard)</p>
                <p><strong>Jan 20-22:</strong> If using PayPal, funds arrive in your account</p>
                <p><strong>Jan 23-25:</strong> If using bank transfer, funds arrive</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-neutral-900 mb-3">Scenario: Mid-Month to End of Month Sales</h3>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p><strong>Jan 15-31:</strong> You make $280 in sales (minus returns: $265 net)</p>
                <p><strong>Feb 1-3:</strong> TikTok processes and calculates final amount</p>
                <p><strong>Feb 4:</strong> Payment initiated ($265 shows as "Processing")</p>
                <p><strong>Feb 6-8:</strong> PayPal funds arrive</p>
                <p><strong>Feb 9-11:</strong> Bank transfer funds arrive</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Payment Issues and Solutions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Issue 1: Payment Below Minimum Threshold</h3>
              <p className="text-body-sm text-red-800 mb-2"><strong>Symptom:</strong> No payment received despite having sales</p>
              <p className="text-body-sm text-red-800 mb-2"><strong>Cause:</strong> Net earnings (after returns/refunds) below $10 minimum</p>
              <p className="text-body-sm text-red-800"><strong>Solution:</strong> Balance automatically rolls over to next payment cycle. Once combined total exceeds $10, payment processes. Check "Pending Balance" in dashboard.</p>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Issue 2: Payment Method Verification Pending</h3>
              <p className="text-body-sm text-orange-800 mb-2"><strong>Symptom:</strong> Dashboard shows "Action Required" or "Verification Needed"</p>
              <p className="text-body-sm text-orange-800 mb-2"><strong>Cause:</strong> PayPal email or bank account not verified</p>
              <p className="text-body-sm text-orange-800"><strong>Solution:</strong> Check email for verification link from TikTok. Complete verification process. Payment will process in next cycle once verified.</p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Issue 3: High Return Rate Reducing Payment</h3>
              <p className="text-body-sm text-yellow-800 mb-2"><strong>Symptom:</strong> Payment much lower than expected based on sales volume</p>
              <p className="text-body-sm text-yellow-800 mb-2"><strong>Cause:</strong> Customer returns deducted from gross sales. High return rates (15%+) significantly impact net earnings</p>
              <p className="text-body-sm text-yellow-800"><strong>Solution:</strong> Review "Returns" section in dashboard. Improve product descriptions, sizing guides, and quality control to reduce return rates.</p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Issue 4: Bank Account or PayPal Details Incorrect</h3>
              <p className="text-body-sm text-blue-800 mb-2"><strong>Symptom:</strong> Payment shows "Failed" status</p>
              <p className="text-body-sm text-blue-800 mb-2"><strong>Cause:</strong> Bank account number, routing number, or PayPal email incorrect</p>
              <p className="text-body-sm text-blue-800"><strong>Solution:</strong> Update payment details in Seller Center → Settings → Payments. Contact TikTok Support to reissue failed payment. Verify name on payment account matches TikTok Shop legal name.</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">International Payment Considerations</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Currency Conversion</h3>
              <p className="text-body-sm text-neutral-700">
                Non-US sellers receive payments in local currency. Conversion happens at mid-market rates at time of payment processing. Exchange rate fluctuations mean final amount may differ slightly from dashboard estimates.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Extended Processing for International Transfers</h3>
              <p className="text-body-sm text-neutral-700">
                International bank transfers can take 7-12 business days (vs 5-7 for US) due to SWIFT and intermediary banking. PayPal significantly faster for international sellers (3-5 days globally).
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Banking Fees</h3>
              <p className="text-body-sm text-neutral-700">
                Some international banks charge receiving fees for incoming transfers ($10-25 per transaction). PayPal generally has lower fees. Check with your bank before choosing payment method.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tax Implications</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok Shop payments are taxable income. Understanding your tax obligations helps you avoid surprises:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">United States</h3>
              <ul className="text-body-sm text-yellow-800 space-y-1 ml-4 list-disc">
                <li>TikTok issues 1099-K if you process 200+ transactions OR $20,000+ in sales annually</li>
                <li>Self-employment tax (15.3%) applies to net profit</li>
                <li>Quarterly estimated taxes required if earning $1,000+ annually</li>
                <li>Deductible expenses: inventory, shipping, packaging, advertising, TikTok fees</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">International Sellers</h3>
              <ul className="text-body-sm text-blue-800 space-y-1 ml-4 list-disc">
                <li>UK: Report as business income on Self Assessment. VAT registration may be required</li>
                <li>EU: Income tax + VAT obligations vary by country</li>
                <li>Southeast Asia: Income tax rates and reporting requirements vary significantly by country</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/advanced/creator-tax-deductions-guide" className="text-teal-600 font-semibold hover:underline">
              Complete Tax Guide for TikTok Creators and Sellers →
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/calculators/shop-commission" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok Shop Commission Calculator</h4>
              <p className="text-body-sm text-neutral-700">Calculate your affiliate earnings</p>
            </Link>
            <Link href="/reference/shop-commission-rates" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Shop Commission Rates</h4>
              <p className="text-body-sm text-neutral-700">Commission rates by category</p>
            </Link>
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Become Shop Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Join TikTok Shop program</p>
            </Link>
            <Link href="/advanced/creator-tax-deductions-guide" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Tax Deductions Guide</h4>
              <p className="text-body-sm text-neutral-700">Maximize your tax savings</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

