import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Shop vs Amazon Associates: Affiliate Earnings Comparison 2025',
  description: 'Compare TikTok Shop vs Amazon Associates affiliate programs. Commission rates, requirements, earning potential, and which platform is better for creators.',
  keywords: ['tiktok shop vs amazon', 'affiliate comparison', 'commission rates', 'creator affiliate programs'],
};

export default function TikTokShopVsAmazonPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/data">Data & Insights</Link><span>/</span>
            <span className="text-neutral-900">TikTok Shop vs Amazon</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop vs Amazon Associates: 2025 Comparison
          </h1>
          <p className="text-heading-md text-white/90 mb-6">Which affiliate program pays creators more?</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <p className="text-body-lg text-neutral-700 mb-4">
            Affiliate marketing is a major income source for content creators, but choosing between TikTok Shop and Amazon Associates can dramatically impact your earnings. TikTok Shop offers 2-5x higher commission rates with native in-app checkout, while Amazon provides access to millions of products and trusted brand recognition. This comprehensive comparison helps you decide which affiliate program maximizes your creator income in 2025.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Commission Rate Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">TikTok Shop</th>
                  <th className="text-left py-3 px-4">Amazon Associates</th>
                  <th className="text-left py-3 px-4">Winner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: 'Beauty & Personal Care', tiktok: '8-20%', amazon: '1-4.5%', winner: 'TikTok' },
                  { category: 'Fashion & Accessories', tiktok: '10-15%', amazon: '1-4%', winner: 'TikTok' },
                  { category: 'Electronics', tiktok: '2-8%', amazon: '1-2.5%', winner: 'TikTok' },
                  { category: 'Home & Kitchen', tiktok: '5-12%', amazon: '1-4%', winner: 'TikTok' },
                  { category: 'Toys & Games', tiktok: '8-15%', amazon: '1-3%', winner: 'TikTok' },
                  { category: 'Books', tiktok: '4-10%', amazon: '3-4.5%', winner: 'Tie' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.category}</td>
                    <td className={`py-3 px-4 ${row.winner === 'TikTok' ? 'bg-tiktok-pink/10 font-semibold' : ''}`}>{row.tiktok}</td>
                    <td className={`py-3 px-4 ${row.winner === 'Amazon' ? 'bg-orange-50 font-semibold' : ''}`}>{row.amazon}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Overall Winner: TikTok Shop</strong> - TikTok Shop pays 2-5x higher commission rates than Amazon Associates across most categories.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Factor</th>
                  <th className="text-left py-3 px-4">TikTok Shop</th>
                  <th className="text-left py-3 px-4">Amazon Associates</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Requirements', tiktok: '0-5K followers (varies by region)', amazon: 'None (anyone can join)' },
                  { factor: 'Product Selection', tiktok: 'Limited (growing catalog)', amazon: 'Massive (millions of products)' },
                  { factor: 'Cookie Duration', tiktok: '7-30 days', amazon: '24 hours' },
                  { factor: 'Minimum Payout', tiktok: '$50', amazon: '$10 (or Amazon gift card)' },
                  { factor: 'Integration', tiktok: 'Native in-app (seamless)', amazon: 'External link (friction)' },
                  { factor: 'Conversion Rate', tiktok: '5-15% (in-app checkout)', amazon: '1-3% (external site)' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.factor}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.tiktok}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.amazon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Detailed Analysis */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Deep Dive: How Each Program Works</h2>

          <div className="space-y-6">
            <div className="border-2 border-pink-200 bg-pink-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-pink-900 mb-4">TikTok Shop Affiliate Program</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">How It Works</h4>
                <p className="text-body-md text-neutral-700 mb-3">
                  Browse TikTok Shop catalog, add products to your showcase, create videos featuring products, tag them in videos. When viewers purchase through your link, you earn commission. Checkout happens entirely in-app for seamless conversions.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-neutral-900 mb-2">Example Calculation:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Beauty product: $50 (15% commission)</li>
                    <li>You earn: $7.50 per sale</li>
                    <li>10 sales/week = $75/week = $300/month</li>
                    <li>Typical cookie: 7-30 days</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Why Commission Rates Are Higher</h4>
                <ul className="text-body-sm text-neutral-700 space-y-2">
                  <li><strong>Direct-to-consumer:</strong> Brands save on Amazon's fees (15-45%) and pass savings to affiliates</li>
                  <li><strong>Better conversion:</strong> In-app checkout (5-15% CVR) vs external link (1-3% CVR)</li>
                  <li><strong>Growth incentives:</strong> TikTok subsidizes commissions to grow Shop ecosystem</li>
                  <li><strong>Exclusive products:</strong> Many brands offer higher commissions for TikTok-exclusive items</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-orange-900 mb-4">Amazon Associates Program</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">How It Works</h4>
                <p className="text-body-md text-neutral-700 mb-3">
                  Search Amazon's catalog, generate affiliate links for any product, share links across platforms. When someone clicks your link and purchases within 24 hours, you earn commission on entire cart.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-neutral-900 mb-2">Example Calculation:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Electronics product: $100 (2% commission)</li>
                    <li>You earn: $2 per sale</li>
                    <li>But: Earn on entire cart, not just linked item</li>
                    <li>Cookie: Only 24 hours</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Why Use Despite Lower Rates</h4>
                <ul className="text-body-sm text-neutral-700 space-y-2">
                  <li><strong>Massive catalog:</strong> Access to 350+ million products vs TikTok Shop's limited selection</li>
                  <li><strong>Trusted brand:</strong> 200M+ Prime members already have accounts and payment info</li>
                  <li><strong>Cart bonuses:</strong> Earn commission on entire purchase, not just product you linked</li>
                  <li><strong>Multi-platform:</strong> Use same links across blog, YouTube, email, social media</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Pros and Cons */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Pros and Cons Analysis</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-pink-200 bg-pink-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-pink-900 mb-4">TikTok Shop</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-green-700 mb-2">Pros</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> 2-5x higher commission rates (8-20%)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> In-app checkout = 3-5x better conversion</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Native integration in TikTok videos</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> 7-30 day cookie vs Amazon's 24hr</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Lower barriers (0-5K followers in most regions)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-red-700 mb-2">Cons</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Limited product selection (growing but small)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Only works on TikTok platform</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Quality concerns with some sellers</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Slower shipping vs Amazon Prime</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Less brand recognition/trust from buyers</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-orange-900 mb-4">Amazon Associates</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-green-700 mb-2">Pros</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Access to 350M+ products</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> No follower requirements (anyone can join)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Multi-platform (works everywhere)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Trusted brand (high buyer confidence)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Earn on entire cart, not just linked item</li>
                </ul>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-red-700 mb-2">Cons</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Low commission rates (1-4.5%)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Only 24-hour cookie window</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> External link friction (leaves platform)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Lower conversion rates (1-3% typical)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Can get banned easily (strict TOS)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* When to Choose Each */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">When to Choose Each Platform</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-pink-500 bg-pink-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-pink-900 mb-3">Choose TikTok Shop When:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-800">
                <li><strong>Product is available in Shop:</strong> Always check TikTok Shop first for higher commission potential.</li>
                <li><strong>Creating TikTok-native content:</strong> In-app checkout converts 3-5x better than external links.</li>
                <li><strong>Fashion/beauty/lifestyle products:</strong> These categories have best selection and highest commissions (10-20%).</li>
                <li><strong>Targeting Gen Z audience:</strong> Younger users prefer in-app purchasing over leaving to Amazon.</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-orange-900 mb-3">Choose Amazon Associates When:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-800">
                <li><strong>Product not in TikTok Shop:</strong> Electronics, books, tech accessories have limited Shop availability.</li>
                <li><strong>Multi-platform creator:</strong> Use same links across YouTube, blog, Instagram, email list.</li>
                <li><strong>Older audience (30+):</strong> These demographics trust Amazon more and likely have Prime accounts.</li>
                <li><strong>High-ticket items:</strong> Even 2% of a $500 purchase = $10 commission (more than 15% of $50).</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Real Earnings Comparison */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Real Creator Earnings Examples</h2>

          <div className="space-y-4">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900 mb-2">Beauty Creator (50K followers)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <p className="font-medium text-pink-600 mb-2">TikTok Shop: $2,500-4,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Skincare products: 15-20% commission</li>
                    <li>Average order: $60</li>
                    <li>150-200 orders/month via videos</li>
                    <li>In-app checkout = high conversion</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-orange-600 mb-2">Amazon: $500-800/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Beauty products: 3-4% commission</li>
                    <li>Average order: $70</li>
                    <li>200-300 clicks, 2% convert</li>
                    <li>External link friction hurts</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm font-semibold text-green-600">Winner: TikTok Shop (5-8x more earnings for beauty niche)</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900 mb-2">Tech Reviewer (75K followers)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <p className="font-medium text-pink-600 mb-2">TikTok Shop: $300-600/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Phone accessories: 5-8% commission</li>
                    <li>Average order: $35</li>
                    <li>Limited high-quality tech products</li>
                    <li>Smaller catalog is limitation</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-orange-600 mb-2">Amazon: $1,500-2,500/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Electronics: 1-2.5% commission</li>
                    <li>High-ticket items ($200-800)</li>
                    <li>Cart bonuses add 30-50% more</li>
                    <li>Massive product selection wins</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm font-semibold text-green-600">Winner: Amazon (better for tech despite lower commission rates)</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900 mb-2">Fashion Creator (150K followers)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <p className="font-medium text-pink-600 mb-2">TikTok Shop: $5,000-10,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Clothing/accessories: 10-15% commission</li>
                    <li>Average order: $75</li>
                    <li>400-600 orders/month</li>
                    <li>Try-on videos convert exceptionally well</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-orange-600 mb-2">Amazon: $1,200-2,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Apparel: 1-4% commission</li>
                    <li>Average order: $80</li>
                    <li>Higher traffic but lower conversion</li>
                    <li>Returns are easier (impacts earnings)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm font-semibold text-green-600">Winner: TikTok Shop (4-8x more for fashion content)</p>
            </div>
          </div>
        </Card>

        {/* Expert Recommendation */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Expert Recommendation</h2>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Target className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Our Data-Backed Verdict: Use Both Strategically</h3>
                <p className="text-body-md text-neutral-800 mb-4">
                  For <strong>beauty, fashion, and lifestyle creators, TikTok Shop delivers 2-5x higher earnings</strong> due to superior commission rates (10-20%) and in-app checkout. However, <strong>tech, books, and niche products perform better on Amazon</strong> despite lower rates (1-4%) due to massive product selection.
                </p>
                <p className="text-body-md text-neutral-800 mb-4">
                  The optimal strategy: Check TikTok Shop availability first for every product. If available with good commission (8%+), use TikTok Shop. If not available or commission is low (&lt;5%), default to Amazon. Successful creators use both platforms earning $3,000-8,000/month from TikTok Shop plus $500-1,500/month from Amazon.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Recommended Strategy:</p>
                  <ol className="list-decimal list-inside space-y-1 text-body-sm text-neutral-700">
                    <li>Apply to TikTok Shop at 5K followers (or lower in some regions)</li>
                    <li>Join Amazon Associates immediately (no requirements)</li>
                    <li>For each product: Check TikTok Shop commission first</li>
                    <li>Use TikTok Shop if 8%+ commission and in stock</li>
                    <li>Fall back to Amazon for unavailable products</li>
                    <li>Track which platform converts better for your niche</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Can I use both TikTok Shop and Amazon Associates simultaneously?</h3>
              <p className="text-body-sm text-neutral-700">Yes! Most successful creators use both. Promote TikTok Shop products when available (higher commissions) and Amazon for products not in TikTok Shop catalog.</p>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Which has better conversion rates?</h3>
              <p className="text-body-sm text-neutral-700">TikTok Shop converts 3-5x better (5-15% CVR) than Amazon (1-3% CVR) because checkout happens in-app without leaving TikTok. No friction = higher sales.</p>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">How do cookie durations compare?</h3>
              <p className="text-body-sm text-neutral-700">TikTok Shop: 7-30 days (varies by product). Amazon: Only 24 hours. TikTok's longer window means you earn even if viewer purchases days later.</p>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">What about payout minimums?</h3>
              <p className="text-body-sm text-neutral-700">TikTok Shop: $50 minimum (faster payouts, 2-3 weeks). Amazon: $10 minimum (monthly payments on NET-60 schedule). TikTok pays faster but higher threshold.</p>
            </div>

            <div className="pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Which program is easier to get approved for?</h3>
              <p className="text-body-sm text-neutral-700">Amazon has no requirements (instant approval). TikTok Shop typically requires 5K followers (or lower in some regions). Start with Amazon, add TikTok Shop as you grow.</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Strategy: Use Both</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-tiktok-pink/10 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Promote on TikTok Shop When:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Product available in TikTok Shop catalog</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Creating native TikTok content (in-feed videos)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Want higher commission rates (2-5x more)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Audience is primarily on TikTok</li>
              </ul>
            </div>
            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Promote on Amazon When:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Product not available on TikTok Shop</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Multi-platform content (blog, YouTube, IG)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Audience prefers Amazon (trust, Prime shipping)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Need access to massive product catalog</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/calculators/shop-commission" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Shop Commission Calculator</h4>
              <p className="text-body-sm text-neutral-700">Calculate your TikTok Shop earnings</p>
            </Link>
            <Link href="/guides/tiktok-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok Shop Affiliate Guide</h4>
              <p className="text-body-sm text-neutral-700">Complete setup and strategy</p>
            </Link>
            <Link href="/reference/shop-commission-rates" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Commission Rates Reference</h4>
              <p className="text-body-sm text-neutral-700">All product category rates</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
