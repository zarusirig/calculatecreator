import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Gift, ShoppingBag, Smartphone, Video, FileVideo, Package, DollarSign } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'TikTok Shop Kicks Off Biggest Holiday Season Ever | TikTok News',
  description: 'TikTok Shop announces its largest holiday shopping campaign in November 2026, combining creator storytelling with in-app purchasing.',
  keywords: ['tiktok shop', 'holiday shopping', 'social commerce', 'tiktok sales', 'creator economy'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/tiktok-shop-holiday-campaign/',
  },
};

export default function TikTokShopHolidayCampaignPage() {
  return (
    <>
      <NewsArticleSchema
        headline="TikTok Shop Kicks Off Biggest Holiday Season Ever"
        description="TikTok Shop announces its largest holiday shopping campaign in November 2026, combining creator storytelling with in-app purchasing."
        url="https://calculatecreator.com/news/tiktok-shop-holiday-campaign/"
        datePublished="2026-11-01"
        dateModified="2026-11-01"
        image="https://calculatecreator.com/news/news-shop-1024.webp"
        keywords={['tiktok shop', 'holiday shopping', 'social commerce', 'tiktok sales', 'creator economy']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'News', url: 'https://calculatecreator.com/news/' },
          { name: 'Holiday Campaign', url: 'https://calculatecreator.com/news/tiktok-shop-holiday-campaign/' },
        ]}
      />
      <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news/" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop Holiday Campaign</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-rose-500 to-pink-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/news/news-shop-640.avif 640w, /news/news-shop-1024.avif 1024w, /news/news-shop-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-shop-640.webp 640w, /news/news-shop-1024.webp 1024w, /news/news-shop-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-shop-1024.webp"
              alt="Featured image for TikTok Shop Kicks Off Biggest Holiday Season Ever"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-red-600">
              MAJOR ANNOUNCEMENT
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              TikTok Shop
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2026</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Kicks Off Biggest Holiday Season Ever
          </h1>
          <p className="text-heading-md text-white/90">
            Platform launches largest holiday shopping campaign, combining creator storytelling with seamless in-app purchasing
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-red-50 border-2 border-red-200">
          <h2 className="text-heading-lg font-semibold text-red-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-red-800">
            TikTok Shop's biggest-ever holiday campaign represents a massive opportunity for creators to earn through product reviews, unboxing videos, and affiliate commissions. With enhanced discovery features and promotional support, this holiday season could be the most lucrative yet for TikTok Shop affiliates and sellers.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's Launching for the Holidays?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            In November 2026, TikTok Shop announced an unprecedented holiday shopping campaign that leverages the platform's unique blend of entertainment and commerce. The initiative includes special creator incentives, enhanced shopping features, and dedicated promotional support.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-red-900 mb-4">
              Holiday Campaign Highlights
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Gift size={24} className="text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Special Creator Incentives</p>
                  <p className="text-body-sm text-neutral-700">Bonus commission rates and performance rewards for top-selling creators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShoppingBag size={24} className="text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Exclusive Holiday Deals</p>
                  <p className="text-body-sm text-neutral-700">Flash sales, limited-time offers, and creator-curated gift guides</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone size={24} className="text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Enhanced Shopping Features</p>
                  <p className="text-body-sm text-neutral-700">Improved product discovery, gift recommendations, and one-click checkout</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Video size={24} className="text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Shoppable LIVE Events</p>
                  <p className="text-body-sm text-neutral-700">Interactive live shopping streams with exclusive product launches</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How Creators Can Maximize Holiday Earnings
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <FileVideo size={20} className="text-green-900" />
                <h3 className="text-heading-sm font-semibold text-green-900">
                  Create Gift Guide Content
                </h3>
              </div>
              <p className="text-body-sm text-green-800">
                Produce "Top 10 Gifts for [Audience]" videos featuring TikTok Shop products. Tag products directly for seamless purchasing.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <Package size={20} className="text-blue-900" />
                <h3 className="text-heading-sm font-semibold text-blue-900">
                  Unboxing & Reviews
                </h3>
              </div>
              <p className="text-body-sm text-blue-800">
                Partner with brands for sponsored unboxing videos. Authentic reviews perform exceptionally well during holiday shopping season.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Video size={20} className="text-purple-900" />
                <h3 className="text-heading-sm font-semibold text-purple-900">
                  Host LIVE Shopping Events
                </h3>
              </div>
              <p className="text-body-sm text-purple-800">
                Go LIVE with product demonstrations, Q&As, and exclusive discount codes. LIVE shoppers convert at 10x higher rates.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={20} className="text-amber-900" />
                <h3 className="text-heading-sm font-semibold text-amber-900">
                  Leverage Affiliate Links
                </h3>
              </div>
              <p className="text-body-sm text-amber-800">
                Join TikTok Shop's affiliate program to earn commissions on every sale. Holiday season offers bonus commission rates.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why This Holiday Season Is Different
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok Shop's 2026 holiday campaign represents the platform's largest-ever investment in social commerce. With enhanced features, bigger creator incentives, and unprecedented promotional support, this season positions TikTok Shop as a legitimate competitor to Amazon and traditional retail.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-purple-900 mb-4">Campaign Scale</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-display-md font-bold text-purple-600 mb-1">$500M+</p>
                <p className="text-label-sm text-neutral-700">Marketing budget for holiday season</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-display-md font-bold text-pink-600 mb-1">10M+</p>
                <p className="text-label-sm text-neutral-700">Products available for holiday shopping</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-display-md font-bold text-red-600 mb-1">50K+</p>
                <p className="text-label-sm text-neutral-700">Creators participating in campaigns</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-display-md font-bold text-rose-600 mb-1">2x</p>
                <p className="text-label-sm text-neutral-700">Bonus commission rates during peak periods</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Special Holiday Creator Incentives
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok is offering unprecedented bonuses and incentives to drive creator participation during the holiday season:
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                Double Commission Days
              </h3>
              <p className="text-body-md text-green-800 mb-2">
                On Black Friday and Cyber Monday, qualifying creators earn 2x commission rates on all sales. Standard 10% commission becomes 20%, dramatically boosting earnings potential.
              </p>
              <p className="text-body-sm text-green-700">
                <strong>Potential:</strong> A creator earning $1,000 on normal days could earn $2,000+ during double commission periods.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                Performance Bonuses ($50K Prize Pool)
              </h3>
              <p className="text-body-md text-blue-800 mb-2">
                Top-performing creators during the holiday season share a $50,000 bonus pool. Rankings based on total GMV generated, with top creator receiving $10,000 bonus.
              </p>
              <p className="text-body-sm text-blue-700">
                Leaderboard updated daily in TikTok Shop Creator Center.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                Priority Product Access
              </h3>
              <p className="text-body-md text-purple-800">
                Early access to exclusive products and limited-edition holiday items for featured creators. First to promote means first to earn commissions.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Top-Selling Holiday Categories
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Based on 2024 holiday performance and early 2026 trends, these categories are expected to dominate:
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-heading-sm font-semibold text-red-900">Tech & Electronics</h3>
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-label-sm font-semibold">#1</span>
              </div>
              <p className="text-body-sm text-red-800 mb-2">
                Gadgets, smart home devices, headphones, and accessories are perennial holiday favorites.
              </p>
              <p className="text-body-sm text-red-700">
                <strong>Avg Commission:</strong> 5-8% | <strong>Price Range:</strong> $20-$200
              </p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-heading-sm font-semibold text-pink-900">Beauty & Personal Care</h3>
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-label-sm font-semibold">#2</span>
              </div>
              <p className="text-body-sm text-pink-800 mb-2">
                Gift sets, skincare, makeup palettes, and fragrance sets dominate beauty sales.
              </p>
              <p className="text-body-sm text-pink-700">
                <strong>Avg Commission:</strong> 10-15% | <strong>Price Range:</strong> $15-$100
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-heading-sm font-semibold text-purple-900">Fashion & Accessories</h3>
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-label-sm font-semibold">#3</span>
              </div>
              <p className="text-body-sm text-purple-800 mb-2">
                Winter clothing, jewelry, handbags, and holiday party outfits see massive demand.
              </p>
              <p className="text-body-sm text-purple-700">
                <strong>Avg Commission:</strong> 8-12% | <strong>Price Range:</strong> $25-$150
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-heading-sm font-semibold text-blue-900">Home & Kitchen</h3>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-label-sm font-semibold">#4</span>
              </div>
              <p className="text-body-sm text-blue-800 mb-2">
                Air fryers, coffee makers, organization products, and holiday decor fly off shelves.
              </p>
              <p className="text-body-sm text-blue-700">
                <strong>Avg Commission:</strong> 6-10% | <strong>Price Range:</strong> $30-$200
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Content Strategy for Maximum Holiday Sales
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-indigo-900 mb-3">Week 1 (Pre-Black Friday)</h3>
              <ul className="space-y-2 text-body-sm text-indigo-800 list-disc list-inside ml-4">
                <li>Post "Ultimate Gift Guide" videos showcasing multiple products</li>
                <li>Create anticipation: "These go on sale Friday!" teasers</li>
                <li>Build affiliate link library for quick posting during sales</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-3">Week 2 (Black Friday/Cyber Monday)</h3>
              <ul className="space-y-2 text-body-sm text-green-800 list-disc list-inside ml-4">
                <li>Post 3-5 times daily highlighting flash deals and time-limited offers</li>
                <li>Host LIVE shopping sessions during peak traffic hours (6-9pm)</li>
                <li>Create urgency: "Only 50 left!" or "Sale ends in 2 hours!"</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-3">Week 3-4 (December Rush)</h3>
              <ul className="space-y-2 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li>Focus on "last-minute gift ideas" and "ships before Christmas"</li>
                <li>Highlight fast shipping options and delivery guarantees</li>
                <li>Create stocking stuffer and under-$25 gift compilations</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            Key Holiday Shopping Dates
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <div>
                <span className="font-semibold text-neutral-900 block">Black Friday</span>
                <span className="text-body-sm text-neutral-600">2x commission rates!</span>
              </div>
              <span className="text-amber-600 font-semibold">November 29, 2026</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <div>
                <span className="font-semibold text-neutral-900 block">Cyber Monday</span>
                <span className="text-body-sm text-neutral-600">2x commission rates!</span>
              </div>
              <span className="text-amber-600 font-semibold">December 2, 2026</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <div>
                <span className="font-semibold text-neutral-900 block">Free Shipping Day</span>
                <span className="text-body-sm text-neutral-600">Emphasize free shipping</span>
              </div>
              <span className="text-amber-600 font-semibold">December 15, 2026</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <div>
                <span className="font-semibold text-neutral-900 block">Last Day for Standard Shipping</span>
                <span className="text-body-sm text-neutral-600">Create urgency</span>
              </div>
              <span className="text-amber-600 font-semibold">December 18, 2026</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <div>
                <span className="font-semibold text-neutral-900 block">Christmas</span>
                <span className="text-body-sm text-neutral-600">Post-holiday sales begin</span>
              </div>
              <span className="text-amber-600 font-semibold">December 25, 2026</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            LIVE Shopping Best Practices for Holidays
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            LIVE streams convert at 10x higher rates during the holiday season due to real-time interaction and urgency. Here's how to maximize earnings:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
              <Gift className="w-6 h-6 flex-shrink-0 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Schedule During Peak Hours</p>
                <p className="text-body-sm text-neutral-700">6-9pm EST on weekdays, 2-9pm on weekends. Black Friday noon-midnight is prime time.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
              <DollarSign className="w-6 h-6 flex-shrink-0 text-purple-600 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Offer Exclusive LIVE-Only Deals</p>
                <p className="text-body-sm text-neutral-700">Work with brands to provide discount codes valid only during your live stream to drive urgency.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
              <Gift className="w-6 h-6 flex-shrink-0 text-green-600 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Create Countdown Timers</p>
                <p className="text-body-sm text-neutral-700">"Flash sale in 5 minutes!" keeps viewers engaged and creates FOMO (fear of missing out).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
              <Package className="w-6 h-6 flex-shrink-0 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Unbox Products Live</p>
                <p className="text-body-sm text-neutral-700">Show products in action, demonstrate features, and answer questions in real-time to build trust.</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Expected Holiday Earnings by Creator Tier
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="p-3 text-left text-heading-sm font-semibold">Creator Tier</th>
                  <th className="p-3 text-left text-heading-sm font-semibold">Followers</th>
                  <th className="p-3 text-left text-heading-sm font-semibold">Potential November Earnings</th>
                  <th className="p-3 text-left text-heading-sm font-semibold">Potential December Earnings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Nano</td>
                  <td className="p-3">1K - 10K</td>
                  <td className="p-3 text-green-800">$200 - $800</td>
                  <td className="p-3 text-green-800">$300 - $1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Micro</td>
                  <td className="p-3">10K - 50K</td>
                  <td className="p-3 text-green-800">$800 - $3,000</td>
                  <td className="p-3 text-green-800">$1,200 - $5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Mid-Tier</td>
                  <td className="p-3">50K - 500K</td>
                  <td className="p-3 text-green-800">$3,000 - $15,000</td>
                  <td className="p-3 text-green-800">$5,000 - $25,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Macro+</td>
                  <td className="p-3">500K+</td>
                  <td className="p-3 text-green-800">$15,000 - $100,000+</td>
                  <td className="p-3 text-green-800">$25,000 - $150,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-body-sm text-neutral-600 mt-4 italic">
            Note: Earnings based on active promotion of holiday products, 10% average commission rate, and typical holiday shopping behavior. Actual earnings vary by niche, engagement rate, and content quality.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Do I need to apply for double commission rates?</h3>
              <p className="text-body-sm text-neutral-700">
                No. All eligible TikTok Shop affiliates automatically receive 2x commission on Black Friday and Cyber Monday. Check your Creator Center for details.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">When do holiday earnings get paid out?</h3>
              <p className="text-body-sm text-neutral-700">
                November earnings (including Black Friday) are paid around December 15. December earnings (including holiday rush) are paid in mid-January.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Can I promote any products during the holiday campaign?</h3>
              <p className="text-body-sm text-neutral-700">
                You can promote any products you're approved for as an affiliate. However, products marked with "Holiday Campaign" badges offer enhanced commission rates and promotional support.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your TikTok Shop Earnings
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Estimate your potential holiday season earnings:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/commerce-ads/shop-profit/"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Shop Profit Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/affiliate-commission/"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Affiliate Commission Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related News</h3>
          <div className="space-y-3">
            <Link href="/news/tiktok-shop-gmv-doubling/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">TikTok Shop GMV Projected to Double</h4>
              <p className="text-body-xs text-neutral-600">Industry projections indicate GMV could reach $40B+ by end of 2026</p>
            </Link>
            <Link href="/news/tiktok-shop-third-fastest-growing/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">TikTok Shop Third-Fastest Growing Brand</h4>
              <p className="text-body-xs text-neutral-600">Morning Consult data shows 145% YoY growth in consumer favorability</p>
            </Link>
            <Link href="/news/product-subscriptions-feature/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">Product Subscriptions Feature</h4>
              <p className="text-body-xs text-neutral-600">New recurring revenue model for consumable products</p>
            </Link>
          </div>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://newsroom.tiktok.com/en-us/tiktok-shop-kicks-off-our-biggest-holiday-season-ever"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                TikTok Newsroom: TikTok Shop Holiday Season Announcement →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </>
  );
}
