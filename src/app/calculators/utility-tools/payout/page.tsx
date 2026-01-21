'use client';

import React, { useState } from 'react';
import { Wallet, DollarSign, Percent, Calculator } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';

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
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate your actual payout after platform fees and payment processing charges.</p>
        </div>

        <div className="max-w-3xl mx-auto">
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
        </div>

        <div className="max-w-5xl mx-auto mt-12">
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
        </div>
      </div>
    </div>
  );
}
