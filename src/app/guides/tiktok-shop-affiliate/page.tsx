import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ShoppingBag, Users, Cake, CheckCircle, Eye, Video, Globe, Package, Sparkles, Scale, BookOpen, Radio, Music, CheckSquare, XCircle, Calculator, Target, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Shop Affiliate Program Guide 2026: Complete Earnings Strategy',
  description: 'Master TikTok Shop affiliate marketing with our comprehensive guide. Learn commission rates, best-selling categories, content strategies, and how to earn $500-$5,000+/month.',
  keywords: ['tiktok shop affiliate', 'tiktok shop commission', 'affiliate marketing tiktok', 'tiktok shop earnings'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/tiktok-shop-affiliate/',
  },
};

const commissionRates = [
  { category: 'Beauty & Skincare', rate: '10-20%', avgOrder: '$35', potential: 'Very High' },
  { category: 'Fashion & Accessories', rate: '10-15%', avgOrder: '$45', potential: 'Very High' },
  { category: 'Health & Wellness', rate: '8-15%', avgOrder: '$40', potential: 'High' },
  { category: 'Home & Kitchen', rate: '8-12%', avgOrder: '$55', potential: 'High' },
  { category: 'Electronics & Gadgets', rate: '5-10%', avgOrder: '$75', potential: 'Medium' },
  { category: 'Pet Supplies', rate: '8-12%', avgOrder: '$30', potential: 'Medium' },
  { category: 'Sports & Outdoors', rate: '8-12%', avgOrder: '$50', potential: 'Medium' },
  { category: 'Baby & Kids', rate: '8-12%', avgOrder: '$35', potential: 'High' },
];

const earningsTiers = [
  { followers: '1K-10K', monthlyViews: '50K-200K', earnings: '$50-$300', deals: '5-15 sales/week' },
  { followers: '10K-50K', monthlyViews: '200K-1M', earnings: '$300-$1,500', deals: '20-50 sales/week' },
  { followers: '50K-100K', monthlyViews: '1M-3M', earnings: '$1,500-$5,000', deals: '50-150 sales/week' },
  { followers: '100K-500K', monthlyViews: '3M-10M', earnings: '$5,000-$20,000', deals: '150-500 sales/week' },
  { followers: '500K+', monthlyViews: '10M+', earnings: '$20,000+', deals: '500+ sales/week' },
];

export default function TikTokShopAffiliatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/guides" className="text-neutral-600 hover:text-primary-600">Guides</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">TikTok Shop Affiliate</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white mb-6">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Shop Affiliate Program Guide 2026
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            The complete guide to earning passive income through TikTok Shop affiliate marketing. Learn commission structures, winning strategies, and how top creators earn $5,000-$50,000+ monthly.
          </p>
        </div>

        {/* Quick Stats */}
        <Card className="mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-display-sm font-bold text-primary-600">5-20%</p>
              <p className="text-body-sm text-neutral-600">Commission Rate</p>
            </div>
            <div>
              <p className="text-display-sm font-bold text-primary-600">1,000</p>
              <p className="text-body-sm text-neutral-600">Min Followers</p>
            </div>
            <div>
              <p className="text-display-sm font-bold text-primary-600">$10</p>
              <p className="text-body-sm text-neutral-600">Min Payout</p>
            </div>
            <div>
              <p className="text-display-sm font-bold text-primary-600">Weekly</p>
              <p className="text-body-sm text-neutral-600">Payment Cycle</p>
            </div>
          </div>
        </Card>

        {/* What is TikTok Shop Affiliate */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What is TikTok Shop Affiliate Marketing?
          </h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              TikTok Shop Affiliate is a revenue-sharing program where creators earn commissions by promoting products from the TikTok Shop marketplace. Unlike traditional affiliate programs that redirect users to external sites, TikTok Shop allows seamless in-app purchases, dramatically increasing conversion rates.
            </p>
            <p>
              When you join as an affiliate, you can add product links to your videos, LIVE streams, and profile showcase. Every time a viewer purchases through your link, you earn a percentage of the sale—typically 5-20% depending on the product category and seller terms.
            </p>
            <p>
              The program has exploded in popularity because of its unique advantages: viewers never leave the TikTok app to purchase, the algorithm favors content with Shop products, and creators can earn from both organic content and LIVE shopping events.
            </p>
          </div>
        </Card>

        {/* Eligibility Requirements */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            TikTok Shop Affiliate Requirements
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            To join the TikTok Shop affiliate program, you must meet these eligibility criteria:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { req: '1,000+ followers (5,000 for US creators)', icon: <Users className="w-6 h-6" />, note: 'Account follower count' },
              { req: '18+ years old', icon: <Cake className="w-6 h-6" />, note: 'Age verification required' },
              { req: 'Account in good standing', icon: <CheckCircle className="w-6 h-6" />, note: 'No community guideline violations' },
              { req: 'At least 50 video views (28 days)', icon: <Eye className="w-6 h-6" />, note: 'Recent activity required' },
              { req: 'Posted video in last 28 days', icon: <Video className="w-6 h-6" />, note: 'Active posting history' },
              { req: 'Located in eligible country', icon: <Globe className="w-6 h-6" />, note: 'US, UK, ID, MY, PH, SG, TH, VN' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="text-primary-600">{item.icon}</span>
                <div>
                  <p className="font-semibold text-neutral-900">{item.req}</p>
                  <p className="text-body-sm text-neutral-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Commission Rates by Category */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Commission Rates by Product Category
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Commission rates vary significantly by category. Here's what you can expect to earn:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Category</th>
                  <th className="text-center py-3 px-4 font-semibold text-neutral-900">Commission</th>
                  <th className="text-center py-3 px-4 font-semibold text-neutral-900">Avg Order</th>
                  <th className="text-center py-3 px-4 font-semibold text-neutral-900">Potential</th>
                </tr>
              </thead>
              <tbody>
                {commissionRates.map((item, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="py-3 px-4 text-neutral-900">{item.category}</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary-600">{item.rate}</td>
                    <td className="py-3 px-4 text-center text-neutral-700">{item.avgOrder}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.potential === 'Very High' ? 'bg-success-100 text-success-700' :
                        item.potential === 'High' ? 'bg-primary-100 text-primary-700' :
                        'bg-neutral-100 text-neutral-700'
                      }`}>
                        {item.potential}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-body-sm text-neutral-600 italic">
            Note: Some sellers offer boosted commissions during promotions, which can increase rates by 5-10%.
          </p>
        </Card>

        {/* Earnings Potential */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Realistic Earnings by Follower Count
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Your TikTok Shop affiliate earnings depend on followers, engagement, and content quality. Here's what creators typically earn:
          </p>
          <div className="space-y-4">
            {earningsTiers.map((tier, index) => (
              <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-neutral-900">{tier.followers} Followers</p>
                    <p className="text-body-sm text-neutral-600">{tier.monthlyViews} monthly views</p>
                  </div>
                  <div className="text-right">
                    <p className="text-heading-md font-bold text-primary-600">{tier.earnings}/mo</p>
                    <p className="text-body-sm text-neutral-600">{tier.deals}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* How to Join */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Join TikTok Shop Affiliate Program
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Access TikTok Shop Seller Center',
                desc: 'Open TikTok → Profile → Menu (☰) → Creator Tools → TikTok Shop. If you don\'t see this option, your account may not be eligible yet.'
              },
              {
                step: 2,
                title: 'Apply as Creator Affiliate',
                desc: 'Select "Become an Affiliate" and complete the application. You\'ll need to verify your identity and agree to program terms.'
              },
              {
                step: 3,
                title: 'Wait for Approval',
                desc: 'Applications typically take 1-3 business days. You\'ll receive a notification when approved.'
              },
              {
                step: 4,
                title: 'Connect Payment Method',
                desc: 'Link your bank account or PayPal to receive commission payments. Payments process weekly with a $10 minimum.'
              },
              {
                step: 5,
                title: 'Browse and Select Products',
                desc: 'Explore the product marketplace, request samples from sellers, and add products to your showcase.'
              },
              {
                step: 6,
                title: 'Start Creating Content',
                desc: 'Add product links to your videos and LIVE streams. Focus on authentic demonstrations and reviews.'
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-body-sm text-neutral-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Content Strategies */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Winning Content Strategies for TikTok Shop
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Success on TikTok Shop requires content that converts. Here are proven strategies from top affiliate earners:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Unboxing & First Impressions',
                desc: 'Create genuine unboxing videos showing your authentic reaction. Viewers trust real first impressions over scripted reviews.',
                icon: <Package className="w-6 h-6" />
              },
              {
                title: 'Before/After Transformations',
                desc: 'Show the product in action with clear before and after results. Works especially well for beauty and home products.',
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                title: 'Product Comparisons',
                desc: 'Compare TikTok Shop products to popular alternatives. "TikTok made me buy it" vs. expensive brand videos perform well.',
                icon: <Scale className="w-6 h-6" />
              },
              {
                title: 'Tutorial & How-To Content',
                desc: 'Teach viewers how to use the product effectively. Educational content builds trust and increases purchase intent.',
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: 'LIVE Shopping Events',
                desc: 'Host dedicated shopping streams with exclusive deals. LIVE conversion rates are 3-5x higher than regular videos.',
                icon: <Radio className="w-6 h-6" />
              },
              {
                title: 'Trend Integration',
                desc: 'Incorporate trending sounds and formats while showcasing products naturally. Don\'t make it feel like an ad.',
                icon: <Music className="w-6 h-6" />
              },
            ].map((strategy, index) => (
              <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-primary-600">{strategy.icon}</span>
                  <h3 className="font-semibold text-neutral-900">{strategy.title}</h3>
                </div>
                <p className="text-body-sm text-neutral-700">{strategy.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Best Practices for Maximizing Commissions
          </h2>
          <div className="space-y-4">
            {[
              'Request product samples before promoting—never promote what you haven\'t tested',
              'Focus on products with high commission rates AND strong reviews (4.5+ stars)',
              'Create multiple videos per product to maximize exposure',
              'Use the "yellow basket" feature prominently in your videos',
              'Respond to comments asking about products with your affiliate link',
              'Track which products convert best and double down on winners',
              'Build relationships with sellers for exclusive commission rates',
              'Time your content around shopping events (flash sales, holidays)',
              'Create product collections/favorites to drive repeat purchases',
              'Disclose affiliate relationships to maintain audience trust',
            ].map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
                  <CheckSquare className="w-4 h-4" />
                </span>
                <p className="text-body-sm text-neutral-700">{tip}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {[
              { mistake: 'Promoting too many products at once', fix: 'Focus on 3-5 products per month to build authority' },
              { mistake: 'Ignoring product quality', fix: 'Only promote products with 4.5+ stars and good reviews' },
              { mistake: 'Being too salesy', fix: 'Focus on value and entertainment first, sales second' },
              { mistake: 'Not testing products yourself', fix: 'Request samples and give honest reviews' },
              { mistake: 'Neglecting LIVE shopping', fix: 'LIVE streams convert 3-5x better than regular videos' },
              { mistake: 'Poor product-audience fit', fix: 'Only promote products your specific audience needs' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-error-50 rounded-lg border border-error-200">
                <p className="font-semibold text-error-700 mb-1 flex items-center gap-2"><XCircle className="w-5 h-5" /> {item.mistake}</p>
                <p className="text-body-sm text-neutral-700 flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-600 flex-shrink-0 mt-0.5" /> <span>Fix: {item.fix}</span></p>
              </div>
            ))}
          </div>
        </Card>

        {/* Payment Information */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Payment Schedule & Withdrawal
          </h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              TikTok Shop processes affiliate commissions on a weekly basis. Here's how payments work:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Commission Timeline</h3>
                <ul className="space-y-2 text-body-sm">
                  <li>• Sale completed → Commission pending</li>
                  <li>• 7-15 day hold period (for returns)</li>
                  <li>• Commission becomes available</li>
                  <li>• Weekly payout processing</li>
                </ul>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Withdrawal Details</h3>
                <ul className="space-y-2 text-body-sm">
                  <li>• Minimum withdrawal: $10</li>
                  <li>• Payment methods: Bank, PayPal</li>
                  <li>• Processing time: 3-7 business days</li>
                  <li>• No withdrawal fees</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card className="mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <h2 className="text-heading-lg font-semibold mb-4">Related Tools & Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/shop-commission" className="p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Calculator className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Shop Commission Calculator</h3>
              <p className="text-body-sm opacity-90">Estimate your earnings</p>
            </Link>
            <Link href="/guides/best-shop-niches" className="p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Target className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Best Shop Niches</h3>
              <p className="text-body-sm opacity-90">Top converting categories</p>
            </Link>
            <Link href="/reference/shop-commission-rates" className="p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <BarChart3 className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Commission Rate Chart</h3>
              <p className="text-body-sm opacity-90">Full rate breakdown</p>
            </Link>
          </div>
        </Card>

        {/* Disclaimer */}
        <div className="p-4 bg-neutral-100 rounded-lg text-center">
          <p className="text-body-sm text-neutral-600">
            Commission rates and program terms are subject to change. Always verify current rates in TikTok Shop Seller Center.
            <br />
            Last updated: December 2025
          </p>
        </div>
      </div>
    </div>
  );
}
