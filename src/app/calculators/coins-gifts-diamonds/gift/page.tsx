'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Gift, Coins, Gem, DollarSign } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';

const giftData = [
  { name: 'Rose', coins: 1, diamonds: 0.5, usd: 0.0025 },
  { name: 'TikTok', coins: 1, diamonds: 0.5, usd: 0.0025 },
  { name: 'Ice Cream Cone', coins: 5, diamonds: 2.5, usd: 0.0125 },
  { name: 'Finger Heart', coins: 5, diamonds: 2.5, usd: 0.0125 },
  { name: 'Perfume', coins: 20, diamonds: 10, usd: 0.05 },
  { name: 'Doughnut', coins: 30, diamonds: 15, usd: 0.075 },
  { name: 'Sign Language', coins: 49, diamonds: 24.5, usd: 0.1225 },
  { name: 'Confetti', coins: 100, diamonds: 50, usd: 0.25 },
  { name: 'Drama Queen', coins: 199, diamonds: 99.5, usd: 0.4975 },
  { name: 'Cap', coins: 299, diamonds: 149.5, usd: 0.7475 },
  { name: 'Love Bang', coins: 599, diamonds: 299.5, usd: 1.4975 },
  { name: 'Sun Cream', coins: 899, diamonds: 449.5, usd: 2.2475 },
  { name: 'Falcon', coins: 999, diamonds: 499.5, usd: 2.4975 },
  { name: 'Gold Mine', coins: 1000, diamonds: 500, usd: 2.50 },
  { name: 'Leon the Kitten', coins: 2150, diamonds: 1075, usd: 5.375 },
  { name: 'Whale', coins: 2150, diamonds: 1075, usd: 5.375 },
  { name: 'Interstellar', coins: 4888, diamonds: 2444, usd: 12.22 },
  { name: 'Lion', coins: 29999, diamonds: 14999.5, usd: 74.9975 },
  { name: 'Universe', coins: 44999, diamonds: 22499.5, usd: 112.4975 },
];

export default function GiftCalculatorPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedGift, setSelectedGift] = useState(giftData[0]);

  const totalCoins = selectedGift.coins * quantity;
  const totalDiamonds = selectedGift.diamonds * quantity;
  const totalUsd = selectedGift.usd * quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Calculators', href: '/calculators' },
          { label: 'Coins, Gifts & Diamonds', href: '/calculators/coins-gifts-diamonds' },
          { label: 'Gift Calculator', href: '/calculators/coins-gifts-diamonds/gift' }
        ]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-500 text-white mb-6">
            <Gift size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Gift Value Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate the real value of TikTok LIVE gifts in coins, diamonds, and USD for creators.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-6">Calculate Gift Value</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Select Gift</label>
                <select
                  value={selectedGift.name}
                  onChange={(e) => setSelectedGift(giftData.find(g => g.name === e.target.value) || giftData[0])}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {giftData.map((gift) => (
                    <option key={gift.name} value={gift.name}>
                      {gift.name} ({gift.coins} coins)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
                <div className="text-center p-4 bg-warning-50 rounded-lg">
                  <Coins className="w-8 h-8 text-warning-600 mx-auto mb-2" />
                  <div className="text-heading-md font-bold text-neutral-900">{totalCoins.toLocaleString()}</div>
                  <div className="text-body-sm text-neutral-600">Total Coins</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Gem className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-heading-md font-bold text-neutral-900">{totalDiamonds.toLocaleString()}</div>
                  <div className="text-body-sm text-neutral-600">Creator Diamonds</div>
                </div>
                <div className="text-center p-4 bg-success-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-success-600 mx-auto mb-2" />
                  <div className="text-heading-md font-bold text-neutral-900">${totalUsd.toFixed(2)}</div>
                  <div className="text-body-sm text-neutral-600">Creator Earnings</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Gift Value Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4">Gift Name</th>
                    <th className="text-right py-3 px-4">Coins</th>
                    <th className="text-right py-3 px-4">Creator Diamonds</th>
                    <th className="text-right py-3 px-4">Creator USD</th>
                  </tr>
                </thead>
                <tbody>
                  {giftData.map((gift) => (
                    <tr key={gift.name} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4 font-medium">{gift.name}</td>
                      <td className="text-right py-3 px-4">{gift.coins.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">{gift.diamonds.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">${gift.usd.toFixed(4)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
