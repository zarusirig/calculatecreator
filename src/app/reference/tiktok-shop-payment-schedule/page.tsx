import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, DollarSign } from 'lucide-react';
import { ReferenceSchema } from '@/components/seo/ReferenceSchema';

export const metadata: Metadata = {
  title: "TikTok Shop Payment Schedule Data and Benchmark",
  description: "Review TikTok shop payment schedule data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  keywords: ['tiktok shop payment schedule', 'when does tiktok shop pay', 'tiktok affiliate payment timeline', 'tiktok shop payout date', 'tiktok shop payment processing'],
  alternates: {
    canonical: 'https://calculatecreator.com/reference/tiktok-shop-payment-schedule/',
  },
};

export default function TikTokShopPaymentSchedulePage() {
  const faqs = [
    {
      question: 'When do I get my first payment?',
      answer: '**You receive your first payment after your first full month of earning commissions.** Starting mid-month means those earnings count for that month and are paid the following month. Example: Start affiliate January 15; January 15 to 31 earnings paid mid-February.',
    },
    {
      question: 'Can I change my payment method?',
      answer: '**Yes, change your payment method at any time.** Changes take effect for the next payment cycle. Changing mid-cycle sends that payment to the previous method.',
    },
    {
      question: 'What if I don\'t receive payment on time?',
      answer: '**Wait 5 business days past the expected date.** Then follow these steps: firstly, check the dashboard for payment status; secondly, verify the payment method is correct; thirdly, check PayPal or your bank for incoming payment. Contact TikTok Support if the payment is still missing.',
    },
    {
      question: 'Do I get paid for clicks or only sales?',
      answer: '**You earn from sales only, not clicks.** You earn commission when a customer purchases a product through your affiliate link. Clicks alone do not generate income.',
    },
    {
      question: 'Can I request early payment or withdraw before end of month?',
      answer: '**No, TikTok Shop operates on a fixed monthly schedule.** Early withdrawal is not available.',
    },
    {
      question: 'Are there any payment limits (maximum)?',
      answer: '**No, there is no maximum limit.** Earning $10,000 in a month means you receive $10,000 (minus any returns or refunds).',
    },
    {
      question: 'What happens if my account is suspended?',
      answer: '**Pending payments are held until the issue is resolved.** TikTok forfeits payments for permanently banned accounts. Check the TikTok Shop terms for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ReferenceSchema
        title="TikTok Shop Payment Schedule: When You Get Paid 2026"
        description="Complete guide to TikTok Shop payment schedule, processing times, minimum thresholds, payment methods, and troubleshooting delayed payments."
        url="https://calculatecreator.com/reference/tiktok-shop-payment-schedule/"
        datePublished="2024-02-01"
        dateModified="2026-03-01"
        hasTable={true}
      />
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides/" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop Payment Schedule</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Payment Schedule
          </h1>
          <p className="text-heading-md text-white/90 mb-6">TikTok creators: 
            Complete guide to payment timing, processing, thresholds, and troubleshooting
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated: November 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Payment Reference</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Quick Answer */}
        <Card>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Quick Answer</h3>
            <p className="text-body-md text-green-800">
              TikTok Shop affiliate commissions are paid monthly, mid-month for the sales of the previous month, with a 7 to 10 day processing time.
            </p>
          </div>
        </Card>

        {/* Monthly Payment Cycle */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Shop Affiliate Payment Schedule</h2>
          <h3 className="font-semibold text-neutral-900 mb-3">Monthly Payment Cycle</h3>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">How it works:</h4>
              <ol className="text-body-sm text-neutral-700 space-y-2 ml-4 list-decimal">
                <li><strong>Sales period:</strong> Full calendar month (e.g., January 1–31)</li>
                <li><strong>Processing period:</strong> First 10–15 days of following month</li>
                <li><strong>Payment date:</strong> Mid-month (typically 10th–20th)</li>
                <li><strong>Deposit received:</strong> 1–10 days after payment date (depending on method)</li>
              </ol>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Example timeline:</h4>
              <ul className="text-body-sm text-blue-800 space-y-1 ml-4 list-disc">
                <li><strong>January 1–31:</strong> You earn $250 in commissions</li>
                <li><strong>February 1–10:</strong> TikTok calculates and processes payments</li>
                <li><strong>February 15:</strong> Payment initiated to your account</li>
                <li><strong>February 16–20:</strong> Funds appear in PayPal/bank (PayPal faster)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Minimum Payout Threshold */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Minimum Payout Threshold</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">United States</h3>
              <p className="text-heading-lg font-bold text-green-600">$10</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">United Kingdom</h3>
              <p className="text-heading-lg font-bold text-green-600">£10</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">Southeast Asia</h3>
              <p className="text-heading-lg font-bold text-green-600">$5–$10</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-yellow-800">
              <strong>Note:</strong> If you earn less than the minimum in a month, balance rolls over to next month. Example: Month 1: Earn $8 → No payout (below $10). Month 2: Earn $15 → Total $23 → Payout $23.
            </p>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Payment Methods and Processing Times</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">PayPal (Recommended)</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Processing Time</p>
                  <p className="text-body-sm font-semibold text-neutral-900">1–3 business days</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Fees</p>
                  <p className="text-body-sm font-semibold text-neutral-900">None from TikTok</p>
                </div>
              </div>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p><strong>Pros:</strong> Fastest method, easy to set up, widely available</p>
                <p><strong>Setup:</strong> Affiliate Dashboard → Payment Settings → Select PayPal → Enter PayPal email → Verify</p>
                <p className="text-red-600"><strong>Important:</strong> PayPal email must match your TikTok account legal name.</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Bank Transfer (ACH)</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Processing Time</p>
                  <p className="text-body-sm font-semibold text-neutral-900">5–7 business days</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Fees</p>
                  <p className="text-body-sm font-semibold text-neutral-900">None from TikTok</p>
                </div>
              </div>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p><strong>Pros:</strong> Direct to bank account, no intermediary fees</p>
                <p><strong>Cons:</strong> Slower than PayPal, more setup steps</p>
                <p><strong>Setup:</strong> Affiliate Dashboard → Payment Settings → Select Bank Transfer → Enter bank details → Verify (test deposit takes 3–5 days)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Payment Timeline */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Detailed Payment Timeline</h2>
          <div className="space-y-3">
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-neutral-900 mb-1">January (Sales Month)</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Jan 1–31: Sales occur, commissions accumulate</li>
                <li>Real-time tracking in Affiliate Dashboard (estimated earnings)</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-neutral-900 mb-1">February (Processing Month)</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Feb 1–10: TikTok calculates final commissions (deducts returns/refunds, applies adjustments)</li>
                <li>Feb 15: Payment initiated (status changes to "Paid", you receive email confirmation)</li>
                <li>Feb 16–18 (PayPal): Funds arrive</li>
                <li>Feb 20–25 (Bank): Funds arrive</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-neutral-900 mb-1">March</h3>
              <p className="text-body-sm text-neutral-700">Process repeats for February's earnings</p>
            </div>
          </div>
        </Card>

        {/* What Affects Payment Amount */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What Affects Your Payment Amount</h2>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Deductions from Gross Commissions</h3>
              <ul className="text-body-sm text-red-800 space-y-1 ml-4 list-disc">
                <li><strong>Returns and Refunds:</strong> If customer returns product, commission is deducted</li>
                <li><strong>Cancelled Orders:</strong> Orders cancelled before shipment = no commission earned</li>
                <li><strong>Payment Processing Fees:</strong> TikTok covers fees (PayPal/bank may charge separate withdrawal fees)</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Taxes</h3>
              <p className="text-body-sm text-yellow-800">
                Payments are pre-tax (you're responsible for reporting income). US creators: Receive 1099 form if earnings exceed $600/year.
              </p>
            </div>
          </div>
        </Card>

        {/* Common Payment Delays */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Payment Delays and Solutions</h2>
          <div className="space-y-4">
            {[
              {
                delay: 'Payment Method Not Verified',
                symptom: 'Payment status shows "Action Required"',
                cause: 'PayPal email or bank account not verified',
                solution: 'Check email for verification request from TikTok → Click verification link → Follow steps → Payment will process in next cycle if missed',
              },
              {
                delay: 'Payment Below Minimum Threshold',
                symptom: 'No payment received, but you had earnings',
                cause: 'Earnings below $10 (US) minimum',
                solution: 'Balance shows as "Pending" and rolls over to next month. Once combined total exceeds $10, payment will process.',
              },
              {
                delay: 'Bank/PayPal Account Issues',
                symptom: 'Payment shows "Failed" in dashboard',
                cause: 'PayPal email incorrect/account closed, bank account number incorrect, or account name doesn\'t match TikTok legal name',
                solution: 'Verify payment method details → Update if needed → Contact TikTok Support to reissue payment',
              },
              {
                delay: 'Large Volume of Returns',
                symptom: 'Payment significantly lower than expected',
                cause: 'High return rate on products you promoted',
                solution: 'Check "Returns" section in dashboard → Consider promoting higher-quality products with lower return rates',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Delay {idx + 1}: {item.delay}</h3>
                <div className="space-y-1 text-body-sm text-neutral-700">
                  <p><strong>Symptom:</strong> {item.symptom}</p>
                  <p><strong>Cause:</strong> {item.cause}</p>
                  <p><strong>Solution:</strong> {item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* How to Track Payments */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Track Your Payments</h2>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">In TikTok Affiliate Dashboard</h3>
            <p className="text-body-sm text-blue-800 mb-3"><strong>Navigate to:</strong> Affiliate Dashboard → Earnings → Payment History</p>
            <div className="space-y-2 text-body-sm text-blue-800">
              <p><strong>You'll see:</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong>Pending earnings:</strong> Current month's accumulated commissions (not yet paid)</li>
                <li><strong>Processing:</strong> Last month's earnings being calculated</li>
                <li><strong>Paid:</strong> Previous payments with dates and amounts</li>
                <li><strong>Failed:</strong> Any failed payments (with reason)</li>
              </ul>
              <p className="mt-3"><strong>CSV export:</strong> Download payment history for accounting/tax purposes</p>
            </div>
          </div>
        </Card>

        {/* International Payment Considerations */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">International Payment Considerations</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok Shop payment processing varies by region. Here is what international affiliates need to know.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Currency Conversion for Non-US Creators</h3>
              <p className="text-body-sm text-neutral-700">
                Payments automatically convert from USD to your local currency at the time of processing. Exchange rates fluctuate daily. Your final amount differs slightly from dashboard estimates. TikTok uses mid-market exchange rates (similar to those on Google Finance).
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Extended Processing Times for International Bank Transfers</h3>
              <p className="text-body-sm text-neutral-700">
                International bank transfers take 7 to 12 business days (vs 5 to 7 days for US transfers) due to intermediary banking systems. PayPal is faster for international creators, processing in 2 to 5 business days regardless of country.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Regional Minimum Thresholds</h3>
              <p className="text-body-sm text-neutral-700">
                Minimum payout thresholds adjust for currency: US ($10), UK (£10), Southeast Asia ($5-10 equivalent), EU (€10). These thresholds reflect local purchasing power and banking norms.
              </p>
            </div>
          </div>
        </Card>

        {/* Tax Implications */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tax Implications of TikTok Shop Payments</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Tax obligations help you avoid surprises during tax season.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">United States Tax Treatment</h3>
              <ul className="text-body-sm text-yellow-800 space-y-2 ml-4 list-disc">
                <li><strong>1099-NEC Form:</strong> TikTok issues 1099 if you earn $600+ annually. You'll receive it by January 31st for previous year's earnings.</li>
                <li><strong>Self-Employment Tax:</strong> You owe 15.3% self-employment tax plus regular income tax on net earnings (after deductible expenses).</li>
                <li><strong>Quarterly Estimated Taxes:</strong> If earning $1,000+ annually, you must file quarterly estimated taxes (April, June, September, January).</li>
                <li><strong>Deductible Expenses:</strong> Phone, internet, equipment, editing software, props - all potentially deductible. Track every business expense.</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">International Tax Considerations</h3>
              <ul className="text-body-sm text-blue-800 space-y-2 ml-4 list-disc">
                <li><strong>UK:</strong> Report TikTok Shop income on Self Assessment tax return. Register as self-employed if earning £1,000+ annually.</li>
                <li><strong>EU:</strong> Income tax applies. VAT registration may be required if crossing country-specific thresholds (varies by country).</li>
                <li><strong>Southeast Asia:</strong> Tax treatment varies significantly. Philippines: 8-32% income tax. Indonesia: 5-30%. Consult local tax advisor.</li>
                <li><strong>General Rule:</strong> Most countries treat affiliate income as self-employment/business income, not hobby income.</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Tax Planning Tips</h3>
              <ul className="text-body-sm text-green-800 space-y-1 ml-4 list-disc">
                <li>Set aside 25-30% of each payment for taxes (higher if in high tax bracket)</li>
                <li>Use separate bank account for TikTok income to simplify tracking</li>
                <li>Download payment history CSV monthly from dashboard for tax records</li>
                <li>Consult tax professional if earning $5,000+ annually - deductions can save significant money</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/advanced/creator-tax-deductions-guide/" className="text-blue-600 font-semibold hover:underline">
              Complete Creator Tax Deductions Guide →
            </Link>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="TikTok Shop Payment Schedule" />

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Track your earnings:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Log in to TikTok Affiliate Dashboard</li>
                <li>Check "Pending Earnings" (current month)</li>
                <li>Check "Payment History" (past payments)</li>
                <li>Set calendar reminder: Check dashboard on 15th of each month for payment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Optimize payments:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Use <Link href="/calculators/commerce-ads/shop-profit/" className="text-blue-600 hover:underline">TikTok Shop Commission Calculator</Link> to project monthly earnings</li>
                <li>Learn <Link href="/guides/how-to-become-shop-affiliate/" className="text-blue-600 hover:underline">How to Become TikTok Shop Affiliate</Link> if not yet enrolled</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Prepare for taxes:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Download payment history CSV monthly</li>
                <li>Track all TikTok-related expenses (deductible)</li>
                <li>Consult tax professional if earning $5,000+ annually</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/commerce-ads/shop-profit/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Shop Commission Calculator</h3>
              <p className="text-body-sm text-neutral-600">Project your earnings</p>
            </Link>
            <Link href="/guides/how-to-become-shop-affiliate/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Become TikTok Shop Affiliate</h3>
              <p className="text-body-sm text-neutral-600">Get started with TikTok Shop</p>
            </Link>
            <Link href="/advanced/creator-tax-deductions-guide/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Creator Tax Deductions Guide</h3>
              <p className="text-body-sm text-neutral-600">Maximize your tax savings</p>
            </Link>
            <Link href="/calculators/affiliate-commission/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Affiliate Earnings Calculator</h3>
              <p className="text-body-sm text-neutral-600">Calculate potential income</p>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
}
