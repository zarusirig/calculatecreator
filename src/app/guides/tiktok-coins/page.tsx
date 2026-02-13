import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import Link from 'next/link';
import { CircleDollarSign, BookOpen, RefreshCw, CheckCircle, Lightbulb, DollarSign, Globe, ShieldCheck, AlertTriangle, Smartphone, Monitor, CreditCard, Gift, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Coins Guide 2026 | Pricing, Recharge & Web Savings',
  description: 'Complete guide to TikTok Coins in 2026. Compare coin packages, save 25-43% buying on web vs app, learn recharge methods, conversion rates, and refund policies.',
  keywords: ['tiktok coins', 'tiktok coin price', 'tiktok recharge', 'buy tiktok coins', 'tiktok coins to usd', 'tiktok web vs app'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/tiktok-coins/',
  },
  openGraph: {
    title: 'TikTok Coins Guide 2026 | Pricing, Recharge & Web Savings',
    description: 'Complete guide to TikTok Coins. Save 25-43% buying on web vs app, learn recharge methods, conversion rates, and refund policies.',
    type: 'article',
    url: 'https://calculatecreator.com/guides/tiktok-coins/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Coins Guide 2026 | Pricing & Web Savings',
    description: 'Complete guide to TikTok Coins with pricing comparison and money-saving strategies.',
  },
};

const tableOfContents = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'What Are TikTok Coins & How They Work', id: 'coins-fundamentals' },
  { title: 'Coin Packages & Pricing', id: 'coin-pricing' },
  { title: 'Web vs App: Save 25-43%', id: 'web-vs-app' },
  { title: 'How to Recharge Coins', id: 'recharge-methods' },
  { title: 'Discounts, Promos & Gift Cards', id: 'discounts-promos' },
  { title: 'Coins to Dollars Conversion', id: 'coins-conversion' },
  { title: 'Coin Safety: Avoiding Scams', id: 'coin-safety' },
  { title: 'Refund Policy & Expiration Rules', id: 'refund-expiration' },
  { title: 'FAQs', id: 'faqs' },
];

export default function TikTokCoinsPage() {
  const readingTime = '18 min read';
  const lastUpdated = 'February 13, 2026';

  return (
    <>
      <ArticleSchema
        headline="TikTok Coins Guide 2026: Pricing, Recharge & Web Savings"
        description="Complete guide to TikTok Coins covering coin packages, pricing comparison, recharge methods, web vs app savings, conversion rates, refund policies, and safety tips to avoid scams."
        url="https://calculatecreator.com/guides/tiktok-coins/"
        datePublished="2026-02-13"
        dateModified="2026-02-13"
        keywords={['tiktok coins', 'tiktok coin price', 'tiktok recharge', 'buy tiktok coins', 'tiktok coins to usd', 'tiktok web vs app']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Guides', url: 'https://calculatecreator.com/guides/' },
          { name: 'TikTok Coins Guide', url: 'https://calculatecreator.com/guides/tiktok-coins/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides/' },
              { label: 'TikTok Coins Guide', href: '/guides/tiktok-coins/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white mb-6">
              <CircleDollarSign className="w-12 h-12" />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Coins Guide 2026
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto mb-6">
              The complete resource for TikTok&apos;s virtual currency system. Learn how to buy coins at the best prices, save up to 43% buying on web vs app, understand conversion rates, and support your favorite creators while avoiding scams.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {readingTime}
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Updated: {lastUpdated}
              </span>
            </div>
          </div>

          {/* Introduction */}
          <section className="py-8 bg-white -mx-4 px-4 mb-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                TikTok Coins are the platform&apos;s virtual currency system that enables viewers to support creators through virtual gifts during LIVE streams and on regular videos. In 2026, TikTok&apos;s gifting economy has grown into a multi-billion dollar ecosystem where fans spend real money on coins, convert those coins into gifts, and creators convert received gifts into diamonds that cash out as real money. However, many users overpay for coins because they don&apos;t understand the significant price differences between purchasing on iOS, Android, and web platforms. By purchasing coins through the web browser instead of the mobile app, you can save between 25% and 43% on every transaction—savings that add up quickly for regular supporters. This comprehensive guide covers everything from coin package pricing across platforms, to recharge methods, conversion rates, refund policies, and critical safety information to protect yourself from scams. Whether you&apos;re a viewer wanting to maximize your support budget or a creator helping your community understand the gifting system, this hub provides all the information you need.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <Card className="max-w-4xl mx-auto mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Table of Contents</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <span className="text-primary-600 group-hover:text-primary-700">&rarr;</span>
                  <span className="text-body-md text-neutral-700 group-hover:text-neutral-900">
                    {item.title}
                  </span>
                </a>
              ))}
            </nav>
          </Card>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1: Introduction */}
            <section id="introduction">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Introduction: TikTok&apos;s Virtual Currency System
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    TikTok Coins are the platform&apos;s virtual currency that powers its creator economy. Users purchase coins with real money, then use those coins to purchase virtual gifts that they send to creators during LIVE streams or on videos. Creators receive these gifts as Diamonds, which convert to real cash. This system has become a major monetization channel, with top creators earning thousands of dollars per LIVE stream purely from gifts. In 2026, TikTok&apos;s gifting economy continues to expand globally, with more gift options, regional pricing variations, and improved creator payout systems.
                  </p>

                  <p>
                    The flow works like this: Real Money → Coins → Gifts → Diamonds → Cash. TikTok takes approximately 50% through the conversion chain (the exact rate varies by region and gift type). This means when you spend $100 on coins and send all those coins as gifts, the creator receives roughly $50 in diamond value. Understanding this conversion chain is essential for both viewers who want to maximize their support impact and creators who need to set realistic LIVE earnings expectations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <h3 className="font-semibold text-neutral-900 mb-2">For Viewers/Fans</h3>
                      <ul className="text-sm space-y-1">
                        <li>&bull; Support favorite creators during LIVE streams</li>
                        <li>&bull; Send gifts on regular videos to show appreciation</li>
                        <li>&bull; Save 25-43% by buying coins on web vs iOS app</li>
                        <li>&bull; Coins never expire once purchased</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <h3 className="font-semibold text-neutral-900 mb-2">For Creators</h3>
                      <ul className="text-sm space-y-1">
                        <li>&bull; Understand coin economics to maximize LIVE earnings</li>
                        <li>&bull; Educate your audience about coin purchasing</li>
                        <li>&bull; Approximately 50% of coin value becomes your diamonds</li>
                        <li>&bull; Optimize LIVE strategy around gifting peaks</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-300 mt-6">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-600" /> Key Insight: Web Saves You Money</h3>
                    <p className="text-sm text-neutral-700">
                      Buying coins on web (tiktok.com) saves 25-43% vs the iOS app due to Apple&apos;s 30% commission. A $100 coin purchase on iPhone costs you $100 but delivers fewer coins. The same package on web costs $56-$75 and delivers the same number of coins. Android is slightly cheaper than iOS but still more expensive than web. Always buy coins on web for maximum value.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: What Are Coins & How They Work */}
            <section id="coins-fundamentals">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 1: What Are TikTok Coins & How They Work
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    TikTok Coins are a virtual currency purchased with real money that can only be used within the TikTok platform. They serve a single purpose: purchasing virtual gifts to send to creators. Here&apos;s everything you need to know about how coins function.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Coin Characteristics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <CircleDollarSign className="w-6 h-6 text-yellow-600" />
                          <h4 className="font-semibold text-neutral-900">Virtual Currency</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Coins are purchased with real money through TikTok&apos;s payment system. They have no value outside of TikTok and cannot be exchanged for cash or transferred to other platforms.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Gift className="w-6 h-6 text-amber-600" />
                          <h4 className="font-semibold text-neutral-900">Gift Purchases Only</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Coins can only be used to buy virtual gifts for creators. You cannot use coins for ads, promotions, or any other TikTok features.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-6 h-6 text-green-600" />
                          <h4 className="font-semibold text-neutral-900">Never Expire</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Once purchased, coins remain in your account indefinitely with no expiration date. You can use them whenever you want.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldCheck className="w-6 h-6 text-blue-600" />
                          <h4 className="font-semibold text-neutral-900">Non-Transferable</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Coins cannot be transferred between accounts, sold, or traded. They are locked to the account that purchased them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Coin-to-Cash Flow</h3>
                    <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">1</div>
                          <div>
                            <h4 className="font-semibold text-neutral-900">Purchase Coins</h4>
                            <p className="text-sm text-neutral-700">Viewer buys coins with real money (credit card, PayPal, etc.)</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">2</div>
                          <div>
                            <h4 className="font-semibold text-neutral-900">Send Gifts</h4>
                            <p className="text-sm text-neutral-700">Viewer uses coins to buy and send virtual gifts to creators</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">3</div>
                          <div>
                            <h4 className="font-semibold text-neutral-900">Creator Receives Diamonds</h4>
                            <p className="text-sm text-neutral-700">Gifts convert to Diamonds in creator&apos;s account (~50% of coin value)</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">4</div>
                          <div>
                            <h4 className="font-semibold text-neutral-900">Cash Out</h4>
                            <p className="text-sm text-neutral-700">Creator converts Diamonds to real money (minimum threshold applies)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 3: Coin Packages & Pricing */}
            <section id="coin-pricing">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 2: Coin Packages & Pricing
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    TikTok offers multiple coin packages at different price points. Importantly, prices vary significantly depending on where you purchase: iOS app, Android app, or web browser. Larger packages offer better per-coin rates, and web purchases always deliver the best value.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">US Pricing: App vs Web Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Package</th>
                            <th className="p-3 text-left font-semibold">App Price</th>
                            <th className="p-3 text-left font-semibold">Web Price</th>
                            <th className="p-3 text-left font-semibold">Savings</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">65 coins</td>
                            <td className="p-3">$0.99</td>
                            <td className="p-3 text-neutral-500">N/A</td>
                            <td className="p-3 text-neutral-500">-</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">330 coins</td>
                            <td className="p-3">$4.99</td>
                            <td className="p-3 font-semibold text-green-600">$3.81</td>
                            <td className="p-3 font-semibold text-green-600">24%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">660 coins</td>
                            <td className="p-3">$9.99</td>
                            <td className="p-3 font-semibold text-green-600">$6.98</td>
                            <td className="p-3 font-semibold text-green-600">30%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">1,321 coins</td>
                            <td className="p-3">$19.99</td>
                            <td className="p-3 font-semibold text-green-600">$13.05</td>
                            <td className="p-3 font-semibold text-green-600">35%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">3,303 coins</td>
                            <td className="p-3">$49.99</td>
                            <td className="p-3 font-semibold text-green-600">$29.90</td>
                            <td className="p-3 font-semibold text-green-600">40%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">6,607 coins</td>
                            <td className="p-3">$99.99</td>
                            <td className="p-3 font-semibold text-green-600">$56.90</td>
                            <td className="p-3 font-semibold text-green-600">43%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">16,500 coins</td>
                            <td className="p-3">$249.99</td>
                            <td className="p-3 font-semibold text-green-600">$142.50</td>
                            <td className="p-3 font-semibold text-green-600">43%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-neutral-700">
                        <strong>Note:</strong> App prices shown are iOS prices, which include Apple&apos;s 30% commission. Android prices are slightly lower than iOS but still higher than web. Prices may vary slightly by region and are subject to change.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">UK Pricing Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Package</th>
                            <th className="p-3 text-left font-semibold">App Price</th>
                            <th className="p-3 text-left font-semibold">Web Price</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">65 coins</td>
                            <td className="p-3">£0.99</td>
                            <td className="p-3 text-neutral-500">N/A</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">330 coins</td>
                            <td className="p-3">£4.49</td>
                            <td className="p-3 font-semibold text-green-600">£3.42</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">1,321 coins</td>
                            <td className="p-3">£17.49</td>
                            <td className="p-3 font-semibold text-green-600">£11.75</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-neutral-700">
                        Regional pricing varies based on local currencies and payment processing fees. The web vs app savings principle applies globally, though the exact percentages may differ slightly by region.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 4: Web vs App Savings */}
            <section id="web-vs-app">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 3: Web vs App: Save 25-43%
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    The platform you use to purchase coins dramatically affects the price. iOS app purchases are most expensive due to Apple&apos;s 30% commission, Android is slightly cheaper, and web browser purchases offer the best value. Understanding this can save you hundreds of dollars per year.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Price Differences Exist</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-red-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Smartphone className="w-8 h-8 text-red-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">iOS App</h4>
                        <p className="text-sm text-neutral-700 mb-2">
                          Apple charges 30% commission on all in-app purchases, which TikTok passes to consumers through higher coin prices.
                        </p>
                        <span className="text-xs font-semibold text-red-600">Most Expensive</span>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Smartphone className="w-8 h-8 text-orange-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Android App</h4>
                        <p className="text-sm text-neutral-700 mb-2">
                          Google Play also takes a cut (typically 15-30%), making Android cheaper than iOS but still more than web.
                        </p>
                        <span className="text-xs font-semibold text-orange-600">Mid-Range</span>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Monitor className="w-8 h-8 text-green-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Web Browser</h4>
                        <p className="text-sm text-neutral-700 mb-2">
                          Direct purchases on tiktok.com avoid app store commissions, passing savings directly to users. Save 25-43%.
                        </p>
                        <span className="text-xs font-semibold text-green-600">Best Value</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Buy Coins on Web</h3>
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                      <ol className="space-y-3 text-sm text-neutral-700">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">1</span>
                          <div>
                            <strong>Go to tiktok.com:</strong> Open your web browser (Chrome, Safari, Firefox, etc.) and navigate to tiktok.com
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">2</span>
                          <div>
                            <strong>Log into your account:</strong> Use the same account credentials you use on mobile
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">3</span>
                          <div>
                            <strong>Click profile → Get Coins:</strong> Access the coin purchase page from your profile menu
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">4</span>
                          <div>
                            <strong>Select package and pay:</strong> Choose your coin package and complete payment
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">5</span>
                          <div>
                            <strong>Coins appear immediately:</strong> Your purchased coins are instantly available in both web and mobile app
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> Warning: Avoid Third-Party Sites</h4>
                    <p className="text-sm text-neutral-700">
                      Never buy coins from third-party websites claiming to offer discounts or &quot;cheap coins.&quot; These are scams that can result in account bans, stolen payment information, or coins that never arrive. Only purchase coins directly from TikTok through official channels (app or tiktok.com).
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 5: How to Recharge Coins */}
            <section id="recharge-methods">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 4: How to Recharge Coins
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    TikTok offers multiple methods to recharge (purchase) coins, with different payment options depending on your platform and region. Here&apos;s everything you need to know about buying coins.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Recharge Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Smartphone className="w-5 h-5 text-blue-600" /> In-App Method (iOS/Android)</h4>
                        <ol className="space-y-2 text-sm text-neutral-700">
                          <li>1. Open TikTok app</li>
                          <li>2. Go to Profile → Settings and privacy</li>
                          <li>3. Tap Balance → Recharge</li>
                          <li>4. Select coin package</li>
                          <li>5. Complete payment through app store</li>
                        </ol>
                        <p className="mt-3 text-xs text-neutral-600">
                          <strong>Note:</strong> Remember this method costs 25-43% more than web. Only use for small emergency purchases.
                        </p>
                      </div>

                      <div className="p-5 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Monitor className="w-5 h-5 text-green-600" /> Web Method (Recommended)</h4>
                        <ol className="space-y-2 text-sm text-neutral-700">
                          <li>1. Go to tiktok.com in browser</li>
                          <li>2. Log into your account</li>
                          <li>3. Click Profile → Get Coins</li>
                          <li>4. Select coin package</li>
                          <li>5. Complete payment directly</li>
                        </ol>
                        <p className="mt-3 text-xs text-green-700 font-semibold">
                          <strong>Best value:</strong> Save 25-43% compared to iOS app purchases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Payment Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <CreditCard className="w-6 h-6 text-purple-600" />
                          <h4 className="font-semibold text-neutral-900">Credit/Debit Cards</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Visa, Mastercard, American Express, and Discover accepted. Most common payment method across all platforms.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-6 h-6 text-blue-600" />
                          <h4 className="font-semibold text-neutral-900">PayPal</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Available on web and some mobile platforms. Provides additional buyer protection and payment flexibility.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Smartphone className="w-6 h-6 text-green-600" />
                          <h4 className="font-semibold text-neutral-900">Apple Pay (iOS)</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Quick checkout on iPhone/iPad using saved payment methods. Subject to Apple&apos;s 30% commission.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Smartphone className="w-6 h-6 text-orange-600" />
                          <h4 className="font-semibold text-neutral-900">Google Pay (Android)</h4>
                        </div>
                        <p className="text-sm text-neutral-700">
                          Fast payment on Android devices. Subject to Google Play commission structure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Auto-Recharge & Parental Controls</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Auto-Recharge Option</h4>
                        <p className="text-sm text-neutral-700 mb-2">
                          Set up automatic coin recharge when your balance falls below a threshold. Available on some platforms.
                        </p>
                        <p className="text-xs text-neutral-600">
                          <strong>Caution:</strong> Monitor auto-recharge closely to avoid unexpected charges, especially if minors use your account.
                        </p>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Parental Controls: Family Pairing</h4>
                        <p className="text-sm text-neutral-700 mb-2">
                          Parents can use TikTok&apos;s Family Pairing feature to restrict or disable coin purchases on minor accounts.
                        </p>
                        <p className="text-xs text-neutral-600">
                          <strong>Recommended:</strong> Enable spending limits or purchase approval requirements for underage users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 6: Discounts, Promos & Gift Cards */}
            <section id="discounts-promos">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 5: Discounts, Promos & Gift Cards
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    While TikTok doesn&apos;t frequently offer coin promotions, there are occasional opportunities to get bonus coins or save money. Here&apos;s what&apos;s legitimate and what to avoid.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Legitimate Coin Promotions</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">TikTok Coin Bonuses (10-20% Extra)</h4>
                          <p className="text-sm text-neutral-700">
                            TikTok occasionally offers bonus coins on larger packages. Typically promoted directly in-app or on tiktok.com. Watch for notifications during promotional periods.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Holiday Promotions</h4>
                          <p className="text-sm text-neutral-700">
                            Black Friday, Cyber Monday, Christmas, and regional holidays sometimes feature coin bundle deals with extra coins or discounted prices.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">First-Time Buyer Discounts</h4>
                          <p className="text-sm text-neutral-700">
                            New accounts may receive special offers on their first coin purchase. These appear automatically when accessing the coin recharge page.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg flex items-start gap-3">
                        <Gift className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Gift Cards (Select Regions)</h4>
                          <p className="text-sm text-neutral-700">
                            TikTok gift cards are available in some regions at retailers. Check local availability. Gift cards can sometimes be found at a discount through retailer promotions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> Scams to Avoid</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">&times;</span>
                        <div>
                          <strong>No legitimate third-party discount codes exist.</strong> Websites or social media posts claiming to offer discount codes for coins are scams.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">&times;</span>
                        <div>
                          <strong>&quot;Free coins&quot; generators are fake.</strong> Any website or app claiming to generate free TikTok coins is attempting to steal your account credentials or payment information.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">&times;</span>
                        <div>
                          <strong>Phishing &quot;coin bonus&quot; emails.</strong> TikTok will never email you asking you to log in to claim free coins. These are phishing attempts.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">&times;</span>
                        <div>
                          <strong>Third-party coin sellers.</strong> Buying coins from unauthorized resellers violates TikTok&apos;s terms and can result in account ban.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Best savings strategy:</strong> The biggest &quot;discount&quot; is buying on web instead of iOS app (25-43% savings). This is always available and doesn&apos;t require waiting for promotions.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 7: Coins to Dollars Conversion */}
            <section id="coins-conversion">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 6: Coins to Dollars Conversion
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Understanding the coin-to-dollar conversion rate helps you budget your creator support and compare package value. The rate varies based on package size and purchase platform, with larger packages offering better per-coin rates.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Approximate Conversion Rates</h3>
                    <div className="p-4 bg-blue-50 rounded-lg mb-4">
                      <p className="text-sm text-neutral-700">
                        <strong>General rate:</strong> 1 TikTok Coin ≈ $0.0105-$0.0150 depending on package size and platform. Larger packages provide better per-coin value.
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Coins</th>
                            <th className="p-3 text-left font-semibold">Approximate USD (Web)</th>
                            <th className="p-3 text-left font-semibold">Approximate USD (App)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">100 coins</td>
                            <td className="p-3 text-green-600 font-semibold">$1.05</td>
                            <td className="p-3">$1.29-$1.52</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">1,000 coins</td>
                            <td className="p-3 text-green-600 font-semibold">$9.88</td>
                            <td className="p-3">$15.15</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">5,000 coins</td>
                            <td className="p-3 text-green-600 font-semibold">$45.20</td>
                            <td className="p-3">$75.75</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">10,000 coins</td>
                            <td className="p-3 text-green-600 font-semibold">$86.10</td>
                            <td className="p-3">$151.50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4">
                      <Link href="/calculators/coins-to-usd/">
                        <Button variant="primary">Calculate Exact Coin Values</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Remember:</strong> These conversions show what you pay for coins. When creators receive gifts purchased with coins, they receive approximately 50% of the coin value as Diamonds. Use our <Link href="/calculators/gift-value/" className="text-primary-600 underline">Gift Value Calculator</Link> to understand creator earnings from gifts.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 8: Coin Safety */}
            <section id="coin-safety">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 7: Coin Safety: Avoiding Scams
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    TikTok coin scams are prevalent, targeting users with promises of free or discounted coins. Protecting yourself requires understanding common scam tactics and following security best practices.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Security Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold text-neutral-900">DO: Official Channels Only</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Buy from TikTok app or tiktok.com only</li>
                          <li>&bull; Use official payment methods</li>
                          <li>&bull; Verify URL is exactly tiktok.com</li>
                          <li>&bull; Keep purchase receipts</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <h4 className="font-semibold text-neutral-900">DON&apos;T: Risk Your Account</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Never buy from third-party sites</li>
                          <li>&bull; Never share account credentials</li>
                          <li>&bull; Never click suspicious &quot;free coins&quot; links</li>
                          <li>&bull; Never use coin generator tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Account Security Measures</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-600" /> Enable 2-Factor Authentication</h4>
                        <p className="text-sm text-neutral-700">
                          Add an extra layer of security to prevent unauthorized access. Go to Settings → Security → 2-Step Verification.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2"><DollarSign className="w-5 h-5 text-purple-600" /> Set Spending Limits</h4>
                        <p className="text-sm text-neutral-700">
                          Especially important for accounts used by minors. Use parental controls or payment method limits to cap monthly coin spending.
                        </p>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-orange-600" /> Report Suspicious Offers</h4>
                        <p className="text-sm text-neutral-700">
                          If you encounter suspicious coin offers in comments, DMs, or external websites, report them to TikTok immediately through the app&apos;s reporting feature.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Scam Tactics</h3>
                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <ul className="space-y-3 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold flex-shrink-0">&times;</span>
                          <div>
                            <strong>Fake generators:</strong> Websites claiming to generate free coins by entering your username. These collect account data for hacking.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold flex-shrink-0">&times;</span>
                          <div>
                            <strong>Phishing links:</strong> DMs or comments with links to &quot;claim free coins.&quot; These steal login credentials or install malware.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold flex-shrink-0">&times;</span>
                          <div>
                            <strong>&quot;Coin glitches&quot;:</strong> Social media posts about supposed bugs that give free coins. These are fake and designed to steal information.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold flex-shrink-0">&times;</span>
                          <div>
                            <strong>Third-party sellers:</strong> Websites offering coins at steep discounts. Even if coins arrive, your account can be banned for violating terms of service.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold flex-shrink-0">&times;</span>
                          <div>
                            <strong>Account sharing schemes:</strong> Offers to &quot;log in and add coins&quot; to your account. This gives scammers full account access.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 9: Refund Policy & Expiration */}
            <section id="refund-expiration">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 8: Refund Policy & Expiration Rules
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Understanding TikTok&apos;s refund policy and coin expiration rules protects your investment. Here&apos;s what you need to know about getting refunds and how long coins remain valid.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Coin Expiration Policy</h3>
                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2"><Clock className="w-5 h-5 text-green-600" /> Coins Never Expire</h4>
                      <p className="text-sm text-neutral-700">
                        Once purchased, TikTok Coins remain in your account indefinitely with no expiration date. You can use them at any time, whether that&apos;s immediately or months later. There is no time pressure to spend purchased coins.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Refund Policy</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">14-Day Refund Window</h4>
                        <p className="text-sm text-neutral-700 mb-2">
                          TikTok offers a 14-day refund window for unused coins in most regions. Policies may vary by country and local consumer protection laws.
                        </p>
                        <ul className="text-sm text-neutral-700 space-y-1">
                          <li>&bull; Coins must be unused (not spent on gifts)</li>
                          <li>&bull; Request within 14 days of purchase</li>
                          <li>&bull; Regional variations may apply</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">No Refunds for Used Coins</h4>
                        <p className="text-sm text-neutral-700">
                          Once coins are spent on gifts, they cannot be refunded. Gifts sent to creators are final transactions. Make sure you intend to send a gift before confirming the transaction.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">How to Request a Refund</h4>
                        <ol className="text-sm text-neutral-700 space-y-1">
                          <li>1. Go to Settings → Report a Problem</li>
                          <li>2. Select Purchase Issues</li>
                          <li>3. Choose the coin purchase to refund</li>
                          <li>4. Submit refund request with reason</li>
                          <li>5. Wait for TikTok review (typically 5-10 business days)</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform-Specific Refund Notes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">iOS App Purchases</h4>
                        <p className="text-sm text-neutral-700">
                          Refunds for in-app purchases may be processed directly through Apple. You can request refunds via Apple&apos;s website (reportaproblem.apple.com) or through TikTok support.
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Android App Purchases</h4>
                        <p className="text-sm text-neutral-700">
                          Google Play purchases can be refunded through Google Play support or TikTok directly. Google typically offers a 48-hour window for automated refunds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> Chargeback Warning</h4>
                    <p className="text-sm text-neutral-700">
                      Filing a chargeback with your bank or credit card company instead of requesting a refund through official channels can result in negative coin balance or account ban. Always attempt to resolve purchase issues through TikTok support first before initiating a chargeback.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200">
              <div className="text-center py-8">
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-4">
                  Calculate Your Coin Value
                </h2>
                <p className="text-body-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
                  Use our calculators to convert coins to USD, understand gift value for creators, and plan your TikTok support budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/calculators/coins-to-usd/">
                    <Button variant="primary" size="lg">
                      Coins to USD Calculator
                    </Button>
                  </Link>
                  <Link href="/calculators/gift-value/">
                    <Button variant="secondary" size="lg">
                      Gift Value Calculator
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Related Guides */}
            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/tiktok-gifts/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Gifts Hub</h4>
                  <p className="text-body-sm text-neutral-700">Complete guide to TikTok&apos;s virtual gift system</p>
                </Link>
                <Link href="/guides/tiktok-diamonds/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Diamonds Hub</h4>
                  <p className="text-body-sm text-neutral-700">Creator guide to diamonds and cash-out process</p>
                </Link>
                <Link href="/guides/complete-tiktok-diamond-guide/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">Complete TikTok Diamond Guide</h4>
                  <p className="text-body-sm text-neutral-700">Everything creators need to know about earning diamonds</p>
                </Link>
                <Link href="/guides/tiktok-coin-converter-complete-guide/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Coin Converter Complete Guide</h4>
                  <p className="text-body-sm text-neutral-700">Master coin conversions and maximize value</p>
                </Link>
                <Link href="/guides/live-gift-earnings-optimization/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">LIVE Gift Earnings Optimization</h4>
                  <p className="text-body-sm text-neutral-700">Strategies to maximize LIVE gifting revenue</p>
                </Link>
                <Link href="/guides/tiktok-live-earnings-guide/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok LIVE Earnings Guide</h4>
                  <p className="text-body-sm text-neutral-700">Complete monetization guide for LIVE streaming</p>
                </Link>
              </div>
            </Card>

            {/* FAQ Section */}
            <section id="faqs">
              <FAQSection
                pageName="TikTok Coins Guide"
                faqs={[
                  {
                    question: 'How much is 1 TikTok coin worth?',
                    answer: 'Approximately $0.0105-$0.0150 depending on the package size and platform you purchase from. Web purchases offer the best per-coin rate, while iOS app purchases have the highest cost per coin due to Apple\'s 30% commission. Larger packages provide better per-coin value than smaller packages.',
                  },
                  {
                    question: 'What is the cheapest way to buy TikTok coins?',
                    answer: 'Buy coins on web (tiktok.com) instead of the mobile app to save 25-43% vs iOS app purchases. The web platform avoids Apple and Google\'s in-app purchase commissions, passing the savings directly to users. For example, 6,607 coins cost $99.99 on iOS app but only $56.90 on web—a 43% savings.',
                  },
                  {
                    question: 'Do TikTok coins expire?',
                    answer: 'No, TikTok coins never expire once purchased. They remain in your account indefinitely until you use them to purchase gifts. You can buy coins and use them weeks, months, or even years later without any time pressure.',
                  },
                  {
                    question: 'Can I get a refund on TikTok coins?',
                    answer: 'Yes, within 14 days for unused coins in most regions. Coins that have already been spent on gifts cannot be refunded. To request a refund, go to Settings → Report a Problem → Purchase Issues and submit your request. For iOS purchases, you may also request refunds directly through Apple. Processing typically takes 5-10 business days.',
                  },
                  {
                    question: 'How much is 1,000 TikTok coins?',
                    answer: 'Approximately $9.88 when purchased on web, or around $15.15 when purchased through the iOS app. The exact price depends on which package you buy (larger packages offer better rates) and your platform. Android falls between web and iOS pricing.',
                  },
                  {
                    question: 'Can I transfer coins to another account?',
                    answer: 'No, TikTok coins are non-transferable between accounts. Once purchased, coins are permanently tied to the account that bought them. You cannot sell, trade, or gift coins to other users. The only way to share value is by using your coins to send gifts to creators.',
                  },
                  {
                    question: 'Why are coins more expensive on iPhone?',
                    answer: 'Apple charges a 30% commission on all in-app purchases made through the iOS App Store. TikTok passes this cost to consumers, making coins significantly more expensive on iPhone compared to web purchases. This is standard across all apps on iOS—not specific to TikTok. Android also has commissions but typically lower than Apple\'s rate.',
                  },
                  {
                    question: 'Are third-party coin sellers legitimate?',
                    answer: 'No, third-party coin sellers are scams that violate TikTok\'s terms of service and can result in account bans. Only purchase coins directly from TikTok through the official app or tiktok.com website. Third-party sellers may steal your payment information, deliver no coins, or provide coins obtained through fraudulent means that trigger account penalties.',
                  },
                  {
                    question: 'How do I check my coin balance?',
                    answer: 'Go to your Profile → Settings and privacy → Balance. This shows your current coin balance and provides access to recharge (purchase more coins). Your balance is displayed in the app and on web, and updates immediately after purchases or when you send gifts.',
                  },
                  {
                    question: 'Can parents control coin purchases?',
                    answer: 'Yes, through TikTok\'s Family Pairing settings. Parents can link their account to their child\'s account and restrict or disable coin purchases, set spending limits, or require approval for transactions. Additionally, payment method controls (like credit card spending limits or parental controls on Apple/Google accounts) provide additional protection.',
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
