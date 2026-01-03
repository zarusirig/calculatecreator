import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Commission Rates by Category 2025: Complete Reference',
  description: 'Complete breakdown of TikTok Shop affiliate commission rates by product category. Find the most profitable categories and optimize your earnings.',
  keywords: ['tiktok shop commission rates', 'affiliate commission', 'shop rates by category', 'tiktok shop earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/reference/shop-commission-rates/',
  },
};

export default function ShopCommissionRatesPage() {
  const categories = [
    { category: 'Beauty & Personal Care', commission: '8% - 20%', avg: '12%', notes: 'Highest rates for premium skincare and makeup' },
    { category: 'Fashion & Accessories', commission: '10% - 15%', avg: '12%', notes: 'Jewelry and designer items pay more' },
    { category: 'Health & Wellness', commission: '10% - 18%', avg: '14%', notes: 'Supplements and fitness gear' },
    { category: 'Home & Kitchen', commission: '5% - 12%', avg: '8%', notes: 'Higher for small appliances' },
    { category: 'Toys & Games', commission: '8% - 15%', avg: '10%', notes: 'Educational toys pay more' },
    { category: 'Sports & Outdoors', commission: '6% - 12%', avg: '9%', notes: 'Activewear has better rates' },
    { category: 'Electronics & Gadgets', commission: '2% - 8%', avg: '5%', notes: 'Low margin category' },
    { category: 'Pet Supplies', commission: '8% - 15%', avg: '11%', notes: 'Premium pet products pay well' },
    { category: 'Baby & Kids', commission: '8% - 14%', avg: '10%', notes: 'Safety products higher commission' },
    { category: 'Books & Media', commission: '4% - 10%', avg: '6%', notes: 'Educational content better' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Shop Commission Rates</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Commission Rates 2025
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete breakdown of affiliate commission rates by product category
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding TikTok Shop Affiliate Commissions</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok Shop affiliate commissions are percentage-based payments you earn when customers purchase products through your affiliate links. Unlike fixed-rate programs, TikTok Shop commission rates vary significantly by product category, brand, and individual product settings. Understanding these variations is crucial for maximizing your earnings as a TikTok Shop affiliate.
          </p>
          <p className="text-body-md text-neutral-700 mb-4">
            Commission rates typically range from 2% to 20%, with beauty and personal care products offering the highest rates and electronics offering the lowest. These rates are set by sellers and can change based on promotional campaigns, inventory levels, and seasonal demand. Premium brands often offer lower commission rates but higher product prices, while smaller brands may offer higher commissions to incentivize promotion.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Commission Rates by Category</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Commission Range</th>
                  <th className="text-left py-3 px-4">Average</th>
                  <th className="text-left py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{cat.category}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{cat.commission}</td>
                    <td className="py-3 px-4 text-neutral-900">{cat.avg}</td>
                    <td className="py-3 px-4 text-neutral-700 text-xs">{cat.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Earnings Calculator Example</h2>
          <div className="space-y-4">
            {[
              { sales: '$1,000', commission: '10%', earnings: '$100' },
              { sales: '$5,000', commission: '12%', earnings: '$600' },
              { sales: '$10,000', commission: '15%', earnings: '$1,500' },
            ].map((ex, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg flex justify-between items-center">
                <div><span className="font-semibold text-neutral-900">{ex.sales}</span> in sales</div>
                <div className="text-neutral-600">@{ex.commission}</div>
                <div className="text-tiktok-pink font-bold text-heading-sm">{ex.earnings}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/calculators/shop-commission" className="inline-block px-6 py-3 bg-tiktok-pink text-white font-semibold rounded-lg hover:bg-tiktok-pink/90">
              Calculate Your Earnings →
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Category Deep Dives: Top 3 Most Profitable Categories</h2>

          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-pink-50 to-white rounded-lg border border-pink-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">1. Beauty & Personal Care (8% - 20%)</h3>
              <p className="text-body-md text-neutral-700 mb-4">
                The most lucrative category for TikTok Shop affiliates. Premium skincare brands like serums, anti-aging creams, and luxury cosmetics regularly offer 15-20% commission rates. Korean beauty products (K-beauty), makeup palettes, and trending viral beauty items perform exceptionally well.
              </p>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">Best Products to Promote:</h4>
                <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                  <li>Viral skincare serums and treatments (18-20% commission)</li>
                  <li>Makeup palettes and lip products (12-15% commission)</li>
                  <li>Hair care bundles and styling tools (10-15% commission)</li>
                  <li>Beauty subscription boxes (15-18% commission)</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">2. Health & Wellness (10% - 18%)</h3>
              <p className="text-body-md text-neutral-700 mb-4">
                Health supplements, fitness equipment, and wellness products consistently deliver strong commission rates. This category benefits from high customer trust in influencer recommendations and repeat purchases. Protein powders, vitamins, and fitness gadgets are top performers.
              </p>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">Best Products to Promote:</h4>
                <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                  <li>Nutritional supplements and vitamins (14-18% commission)</li>
                  <li>Fitness equipment and resistance bands (12-15% commission)</li>
                  <li>Wellness devices and health monitors (10-14% commission)</li>
                  <li>Protein powders and meal replacements (12-16% commission)</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">3. Fashion & Accessories (10% - 15%)</h3>
              <p className="text-body-md text-neutral-700 mb-4">
                Fashion items offer solid mid-range commissions with high conversion rates. Jewelry, watches, designer accessories, and trending fashion pieces move quickly on TikTok. The key is promoting items that photograph well and have strong visual appeal in short-form video.
              </p>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">Best Products to Promote:</h4>
                <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                  <li>Jewelry and watches (13-15% commission)</li>
                  <li>Designer handbags and accessories (12-14% commission)</li>
                  <li>Trending fashion pieces and outfits (10-12% commission)</li>
                  <li>Sunglasses and eyewear (11-13% commission)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Maximize Your Commission Earnings</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Choosing the right category is just the first step. Successful TikTok Shop affiliates employ specific strategies to maximize commission earnings within each category.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">1. Focus on High-Commission Categories First</h3>
              <p className="text-body-sm text-neutral-700">
                Start with Beauty & Personal Care or Health & Wellness categories (12-20% average) rather than Electronics (2-8%). Even if electronics products have higher prices, the commission difference means you need to sell 3-5× more to match beauty product earnings.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">2. Promote Products with High Average Order Value (AOV)</h3>
              <p className="text-body-sm text-neutral-700">
                A $100 skincare product at 15% commission earns you $15. A $10 product at the same rate earns $1.50. Look for premium products within high-commission categories to multiply your earnings per sale.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">3. Target Products with Bundle Opportunities</h3>
              <p className="text-body-sm text-neutral-700">
                Skincare sets, fitness bundles, and fashion outfit combinations increase total cart value. When customers buy $200 in bundled products instead of a single $50 item, your commission quadruples.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">4. Check for Promotional Commission Boosts</h3>
              <p className="text-body-sm text-neutral-700">
                Many sellers temporarily increase commission rates during product launches or seasonal campaigns. In TikTok Shop Seller Center, look for products with "Boosted Commission" badges - rates can spike from 12% to 25% during promotions.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">5. Analyze Your Niche-Category Fit</h3>
              <p className="text-body-sm text-neutral-700">
                If you're a fitness creator, promoting Health & Wellness products (14% avg) will convert better than Beauty products (even at 18%), because your audience trusts your recommendations in that category. Higher conversion rates often outweigh higher commission percentages.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Commission Negotiation: How Top Affiliates Get Higher Rates</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Once you've established yourself as a successful TikTok Shop affiliate, you can negotiate higher commission rates directly with sellers. Here's how top affiliates secure premium rates:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">When You Can Negotiate</h3>
              <ul className="text-body-sm text-blue-800 space-y-1 ml-4 list-disc">
                <li>After generating $1,000+ in sales for a specific seller</li>
                <li>When you have 50,000+ engaged followers in the seller's target niche</li>
                <li>If you can demonstrate 5%+ conversion rates on previous promotions</li>
                <li>During major promotional events when sellers need extra promotion</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">How to Approach Sellers</h3>
              <ol className="text-body-sm text-green-800 space-y-1 ml-4 list-decimal">
                <li>Prepare your performance data (sales volume, conversion rate, traffic generated)</li>
                <li>Contact seller via TikTok Shop Affiliate Dashboard messaging</li>
                <li>Propose mutual benefit: "I'll create 5 dedicated videos for 20% commission instead of standard 12%"</li>
                <li>Start with a limited trial period (30 days) to prove increased sales</li>
              </ol>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Realistic Expectations</h3>
              <p className="text-body-sm text-yellow-800">
                Most successful negotiations result in 2-5% commission increases (e.g., 12% → 15%), not doubling rates. Sellers have profit margins to protect. Focus on volume discounts and exclusive product access rather than massive rate increases.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Can commission rates change after I promote a product?</h3>
              <p className="text-body-sm text-neutral-700">
                Yes. Sellers can modify commission rates at any time. The rate locked when a customer clicks your link is the rate you earn, but future sales may have different rates. Check commission rates weekly to avoid promoting products with reduced commissions.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Do higher-priced products always mean higher commissions?</h3>
              <p className="text-body-sm text-neutral-700">
                No. A $500 electronics item at 3% commission earns $15. A $100 beauty product at 18% commission earns $18. Always calculate actual dollar commission (price × rate) rather than assuming expensive = better.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Are commission rates the same globally?</h3>
              <p className="text-body-sm text-neutral-700">
                No. Rates vary by region. US TikTok Shop generally offers 8-20% commissions, while Southeast Asian markets (Indonesia, Thailand) may offer 5-15%. Regional competition and market maturity affect commission structures.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">What happens if commission rates drop mid-campaign?</h3>
              <p className="text-body-sm text-neutral-700">
                Sales generated before the rate change earn the old commission. New sales after the change earn the new (lower) rate. If a product's commission drops significantly, pause promotion and find alternative products with better rates.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">How do I find products with the highest commission rates?</h3>
              <p className="text-body-sm text-neutral-700">
                In TikTok Shop Affiliate Dashboard: Go to "Product Gallery" → Sort by "Commission Rate (High to Low)". Filter by category to find top-paying products in your niche. Bookmark high-commission products for quick access.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Become Shop Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Join TikTok Shop program</p>
            </Link>
            <Link href="/calculators/shop-commission" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Commission Calculator</h4>
              <p className="text-body-sm text-neutral-700">Calculate your potential earnings</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
