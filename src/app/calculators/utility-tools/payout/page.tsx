'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Wallet, DollarSign, Percent, Calculator, TrendingUp, Clock, Shield, Target } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { InputsExplained } from '@/components/calculator/InputsExplained';

const faqData = [
  {
    question: 'Why does TikTok take 50% of LIVE gifts?',
    answer: 'The 50% platform fee covers operational costs, payment processing, content moderation, platform development, and infrastructure. This is comparable to other platforms - Twitch takes 50% of subscriptions, YouTube takes 30% of Super Chat.'
  },
  {
    question: 'What payment method has the lowest fees?',
    answer: 'Bank transfer (0% fee) has the lowest processing cost. Payoneer is second (2% fee). PayPal has the highest fee (2.9%). For large payouts, bank transfer saves significant money over time.'
  },
  {
    question: 'Can I negotiate lower platform fees with TikTok?',
    answer: 'No, TikTok\'s platform fees are fixed and non-negotiable. All creators pay the same percentage regardless of follower count or earnings. The only way to "reduce" fees is choosing lower-cost payment methods.'
  },
  {
    question: 'Are payouts taxable income?',
    answer: 'Yes! All creator payouts are taxable income in most countries. US creators receive 1099 forms if earning $600+ annually. Set aside 25-35% for taxes. Consult a tax professional for your specific situation.'
  },
  {
    question: 'How long does it take to receive payouts?',
    answer: 'Processing times: PayPal (7-14 days), Bank transfer (14-30 days), Payoneer (7-21 days). Times vary by region. Factor in payment processing when planning your cash flow.'
  },
  {
    question: 'What is the minimum payout threshold for TikTok earnings?',
    answer: 'TikTok Creator Fund and Creator Rewards have a $50 minimum withdrawal (some regions $10). LIVE gift diamonds require 10,000 diamonds ($50 USD equivalent) before withdrawal. TikTok Shop affiliate commissions vary by seller but typically $50-$100 minimum. If you don\'t meet the threshold, earnings roll over to the next payment period.'
  },
  {
    question: 'Do international creators pay higher payment processing fees?',
    answer: 'Yes. International bank transfers cost $15-$40 per transaction plus 2-4% currency conversion fees. PayPal charges 3.9% + fixed fee for cross-border payments (vs 2.9% domestic). Payoneer has flat 2% regardless of location. For creators outside the US, Payoneer is usually the most cost-effective option despite the 2% fee.'
  },
  {
    question: 'How do platform fees compare to YouTube and Instagram?',
    answer: 'TikTok LIVE gifts (50% fee) matches Twitch subscriptions. YouTube takes 30% of Super Chat/Stickers, 30% of channel memberships, and 45% of ad revenue (creators get 55%). Instagram takes 0% of creator earnings but only pays through Meta\'s Ads on Reels program. TikTok Shop (2-8%) is lower than Amazon Associates (1-10%). For direct monetization, YouTube\'s 55% ad revenue share is most generous, but TikTok Shop offers better e-commerce rates.'
  },
  {
    question: 'What happens if my payout fails or gets rejected?',
    answer: 'Payment failures occur due to incorrect bank details, closed accounts, or verification issues. TikTok holds the funds and notifies you via email. Update your payment information in settings and resubmit. Failed PayPal transfers return in 3-5 days. Failed bank transfers take 10-15 days. Multiple failed attempts may freeze your account until verification is complete. Always verify payment details before withdrawal.'
  },
  {
    question: 'Should I withdraw earnings immediately or accumulate them?',
    answer: 'For creators earning under $500/month, accumulate earnings to minimize payment processing frequency and avoid percentage fees on small amounts. PayPal\'s $0.30 fixed fee represents 6% of a $5 withdrawal but only 0.3% of $100. However, don\'t delay if you need cash flow for taxes or business expenses. Large creators ($5,000+ monthly) should withdraw regularly to avoid having significant funds locked in TikTok\'s system.'
  }
];

export default function PayoutCalculatorPage() {
  const [grossEarnings, setGrossEarnings] = useState(1000);
  const [platformFee, setPlatformFee] = useState(50);
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const paymentFees: Record<string, number> = {
    paypal: 2.9,
    bank: 0,
    payoneer: 2,
  };

  const platformDeduction = grossEarnings * (platformFee / 100);
  const afterPlatform = grossEarnings - platformDeduction;
  const processingFee = afterPlatform * (paymentFees[paymentMethod] / 100);
  const netPayout = afterPlatform - processingFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Calculators', href: '/calculators' },
          { label: 'Utility Tools', href: '/calculators/utility-tools' },
          { label: 'Payout Calculator', href: '/calculators/utility-tools/payout' }
        ]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white mb-6">
            <Wallet size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">Creator Payout Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate your actual payout after platform fees and payment processing charges. This calculator shows what you'll really receive from TikTok earnings after all deductions are applied. Factor in TikTok's platform fees ranging from 20-50% depending on monetization method, plus payment processing fees from PayPal, Payoneer, or bank transfer. Essential for accurate income planning and understanding the true value of gross earnings. Compare different payment methods to maximize your take-home revenue and set realistic earnings expectations for all TikTok monetization streams.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-6">Calculate Your Payout</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Gross Earnings ($)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={grossEarnings}
                  onChange={(e) => setGrossEarnings(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Platform Fee (%)</label>
                <select
                  value={platformFee}
                  onChange={(e) => setPlatformFee(parseFloat(e.target.value))}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="50">50% - TikTok LIVE Gifts</option>
                  <option value="30">30% - TikTok Creator Rewards</option>
                  <option value="20">20% - TikTok Shop (typical)</option>
                  <option value="0">0% - Brand Deals (direct)</option>
                </select>
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="bank">Bank Transfer (0% fee)</option>
                  <option value="payoneer">Payoneer (2% fee)</option>
                  <option value="paypal">PayPal (2.9% fee)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="text-body-sm text-neutral-600">Gross Earnings</span>
                    <span className="font-semibold">${grossEarnings.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-error-50 rounded-lg">
                    <span className="text-body-sm text-neutral-600">Platform Fee ({platformFee}%)</span>
                    <span className="font-semibold text-error-600">-${platformDeduction.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-error-50 rounded-lg">
                    <span className="text-body-sm text-neutral-600">Processing Fee ({paymentFees[paymentMethod]}%)</span>
                    <span className="font-semibold text-error-600">-${processingFee.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-success-50 rounded-lg w-full">
                    <DollarSign className="w-10 h-10 text-success-600 mx-auto mb-2" />
                    <div className="text-display-sm font-bold text-success-700">${netPayout.toFixed(2)}</div>
                    <div className="text-body-sm text-neutral-600">Your Net Payout</div>
                    <div className="text-body-xs text-neutral-500 mt-1">
                      ({((netPayout / grossEarnings) * 100).toFixed(1)}% of gross)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <InputsExplained
            inputs={[
              { name: 'Pending Balance', description: 'Your current pending earnings', example: '$500', required: true },
              { name: 'Payment Method', description: 'How you receive payments', example: 'PayPal' },
            ]}
            note="Minimum payout is typically $50-$100. Processing takes 15-21 days after end of earning period."
          />
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform Fee Comparison: TikTok vs YouTube vs Instagram</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Different social platforms take varying cuts of creator earnings. Understanding these fee structures helps you diversify income streams strategically and maximize overall revenue across platforms.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Platform</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Revenue Type</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Platform Fee</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Creator Gets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">TikTok</td>
                    <td className="p-4 text-body-md text-neutral-700">LIVE Gifts</td>
                    <td className="p-4 text-body-md text-error-600 font-semibold">50%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">50%</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">TikTok</td>
                    <td className="p-4 text-body-md text-neutral-700">Creator Fund/Rewards</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">0%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">100%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">TikTok</td>
                    <td className="p-4 text-body-md text-neutral-700">Shop (Seller)</td>
                    <td className="p-4 text-body-md text-warning-600 font-semibold">2-8%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">92-98%</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">YouTube</td>
                    <td className="p-4 text-body-md text-neutral-700">Ad Revenue</td>
                    <td className="p-4 text-body-md text-error-600 font-semibold">45%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">55%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">YouTube</td>
                    <td className="p-4 text-body-md text-neutral-700">Super Chat/Stickers</td>
                    <td className="p-4 text-body-md text-warning-600 font-semibold">30%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">70%</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">YouTube</td>
                    <td className="p-4 text-body-md text-neutral-700">Channel Memberships</td>
                    <td className="p-4 text-body-md text-warning-600 font-semibold">30%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">70%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">Instagram</td>
                    <td className="p-4 text-body-md text-neutral-700">Reels Ads (Meta Bonus)</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">0%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">100%</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">Instagram</td>
                    <td className="p-4 text-body-md text-neutral-700">Badges (LIVE)</td>
                    <td className="p-4 text-body-md text-warning-600 font-semibold">30%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">70%</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-semibold">Twitch</td>
                    <td className="p-4 text-body-md text-neutral-700">Subscriptions</td>
                    <td className="p-4 text-body-md text-error-600 font-semibold">50%</td>
                    <td className="p-4 text-body-md text-success-600 font-semibold">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-body-sm text-neutral-800">
                <strong>Key Takeaway:</strong> TikTok's LIVE gift fee (50%) matches Twitch but is higher than YouTube (30%) and Instagram (30%). However, TikTok Creator Rewards and Shop have competitive rates. YouTube offers the best ad revenue split (55% to creators), making it ideal for long-form monetization. Multi-platform creators should diversify across TikTok (short viral content + Shop), YouTube (ad revenue + memberships), and Instagram (brand deals + bonuses).
              </p>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Maximizing Your Take-Home Pay</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Strategic decisions about payment methods, withdrawal timing, and revenue diversification can increase your actual take-home income by 5-15% without creating more content.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <DollarSign size={24} />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900">Choose Bank Transfer Over PayPal</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-3">
                  PayPal charges 2.9% + $0.30 per transaction. On a $1,000 payout, that's $29.30 in fees. Bank transfer (ACH) is free for US creators and most international regions.
                </p>
                <p className="text-body-sm text-success-700 font-semibold">
                  Potential savings: $290-$580 annually on $10K-$20K in earnings
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900">Accumulate Before Withdrawing</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-3">
                  For small LIVE gift earnings, wait until you have $200-$500 before withdrawing. PayPal's $0.30 fixed fee represents 6% of $5 but only 0.15% of $200.
                </p>
                <p className="text-body-sm text-blue-700 font-semibold">
                  Potential savings: 5-10% reduction in percentage-based fees
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900">Focus on Low-Fee Revenue Streams</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-3">
                  Prioritize Creator Rewards (0% platform fee) and TikTok Shop (2-8% fee) over LIVE gifts (50% fee). Shift content strategy toward 1+ minute videos for Rewards eligibility.
                </p>
                <p className="text-body-sm text-purple-700 font-semibold">
                  Potential increase: 42% higher take-home switching from LIVE gifts to Creator Rewards
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-neutral-900">Optimize for Tax Deductions</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-3">
                  Track business expenses (equipment, software, home office) to reduce taxable income. Every $1,000 in deductions saves $153 in self-employment tax (15.3%) plus income tax.
                </p>
                <p className="text-body-sm text-orange-700 font-semibold">
                  Potential savings: 25-35% effective tax rate reduction through proper deductions
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Payment Processing Timeline</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Understanding when you'll actually receive cash helps with budgeting and cash flow planning. Payment timelines vary significantly by revenue type and withdrawal method.
            </p>
            <div className="space-y-6">
              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">TikTok Creator Fund/Rewards</h3>
                    <p className="text-body-md text-neutral-700 mb-3">
                      <strong>Earning Period:</strong> Monthly (1st-end of month)<br/>
                      <strong>Payment Date:</strong> Around 15th-20th of following month<br/>
                      <strong>Processing Time:</strong> 7-14 days (PayPal), 14-30 days (bank transfer)<br/>
                      <strong>Total Timeline:</strong> 45-60 days from when you earn to cash in hand
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      Example: Views in January → Payment processed Feb 15-20 → Cash received March 1-5 (bank) or Feb 22-27 (PayPal)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">TikTok LIVE Gifts</h3>
                    <p className="text-body-md text-neutral-700 mb-3">
                      <strong>Minimum Threshold:</strong> 10,000 diamonds ($50 USD equivalent)<br/>
                      <strong>Withdrawal Request:</strong> Instant once threshold met<br/>
                      <strong>Processing Time:</strong> 5-10 business days (most methods)<br/>
                      <strong>Total Timeline:</strong> 5-10 days from withdrawal request to receipt
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      Example: Request withdrawal Monday → Cash received following Monday-Wednesday. Faster than Creator Fund due to on-demand processing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">TikTok Shop Affiliate Commissions</h3>
                    <p className="text-body-md text-neutral-700 mb-3">
                      <strong>Earning Lock Period:</strong> 14-30 days after delivery (return window)<br/>
                      <strong>Commission Release:</strong> After return period ends<br/>
                      <strong>Payment Schedule:</strong> Varies by seller (weekly, bi-weekly, monthly)<br/>
                      <strong>Total Timeline:</strong> 21-60 days from sale to payment
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      Example: Product sold Jan 1 → Delivered Jan 5 → Return window ends Feb 4 → Commission paid Feb 15-28. Longest timeline due to return protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Brand Deals (Direct)</h3>
                    <p className="text-body-md text-neutral-700 mb-3">
                      <strong>Payment Terms:</strong> Net-30 to Net-60 typical<br/>
                      <strong>Invoice Date:</strong> When content is delivered/posted<br/>
                      <strong>Payment Timeline:</strong> 30-60 days after invoice<br/>
                      <strong>Total Timeline:</strong> 30-90 days from content delivery to payment
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      Example: Post content Jan 10 → Invoice sent Jan 10 → Net-30 payment due Feb 9 → Actual payment received Feb 5-20. Negotiate shorter terms or deposits for better cash flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-body-sm text-neutral-800">
                <strong>Cash Flow Planning Tip:</strong> Most creator revenue has 30-60 day delays between earning and receiving payment. Maintain 2-3 months of operating expenses in reserves. For tax purposes, income is typically taxable when earned (accrual method) or received (cash method) - consult a CPA for your specific situation. Use our <Link href="/calculators/utility-tools/tax/" className="text-primary-600 hover:text-primary-700 underline">Tax Calculator</Link> to estimate quarterly obligations based on payment timing.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform Fee Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-neutral-200 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">TikTok LIVE Gifts (50%)</h3>
                <p className="text-body-sm text-neutral-600">TikTok takes 50% of all virtual gifts. Viewers buy coins, creators receive diamonds worth half the value.</p>
              </div>
              <div className="p-4 border border-neutral-200 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Creator Rewards (30%)</h3>
                <p className="text-body-sm text-neutral-600">The Creator Rewards Program has a 30% platform fee. You receive 70% of calculated earnings.</p>
              </div>
              <div className="p-4 border border-neutral-200 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">TikTok Shop (15-20%)</h3>
                <p className="text-body-sm text-neutral-600">Shop commissions vary by product category. Typical rates range from 15-20% platform fee.</p>
              </div>
              <div className="p-4 border border-neutral-200 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Brand Deals (0%)</h3>
                <p className="text-body-sm text-neutral-600">Direct brand partnerships don't have platform fees, though agencies may take 10-20%.</p>
              </div>
            </div>
          </Card>

          <div className="mt-12">
            <Card className="p-8 mb-12">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculators/coins-gifts-diamonds/diamonds/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Diamonds Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Convert TikTok diamonds to cash value</p>
                </Link>
                <Link href="/calculators/utility-tools/tax/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Tax Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Estimate tax obligations on creator earnings</p>
                </Link>
                <Link href="/calculators/earnings-revenue/money/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Money Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Calculate total earnings across all revenue streams</p>
                </Link>
                <Link href="/guides/creator-tax-strategy/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Creator Tax Strategy</h4>
                  <p className="text-body-sm text-neutral-700">Tax planning and deductions for content creators</p>
                </Link>
              </div>
            </Card>

            <FAQSection
              pageName="Payout Calculator"
              faqs={faqData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
