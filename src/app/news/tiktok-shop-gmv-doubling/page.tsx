import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Globe, Smartphone, Briefcase, Users, DollarSign, Gift, Rocket } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: "TikTok Shop Gmv Doubling News and Creator Update",
  description: "Follow this TikTok shop gmv doubling update for creator earnings implications, platform changes, monetization context, and actionable next steps.",
  keywords: ['tiktok shop gmv', 'social commerce growth', 'tiktok sales', 'e-commerce projections'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/tiktok-shop-gmv-doubling/',
  },
};

export default function TikTokShopGMVDoublingPage() {
  return (
    <>
      <NewsArticleSchema
        headline="TikTok Shop Projected to Double GMV by End of 2026"
        description="Industry projections indicate TikTok Shop's global gross merchandise value could double by the end of 2026, outpacing competitors in social commerce."
        url="https://calculatecreator.com/news/tiktok-shop-gmv-doubling/"
        datePublished="2026-01-05"
        dateModified="2026-01-05"
        image="https://calculatecreator.com/news/news-shop-1024.webp"
        keywords={['tiktok shop gmv', 'social commerce growth', 'tiktok sales', 'e-commerce projections']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'News', url: 'https://calculatecreator.com/news/' },
          { name: 'TikTok Shop GMV Growth', url: 'https://calculatecreator.com/news/tiktok-shop-gmv-doubling/' },
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
            <span className="text-neutral-900">TikTok Shop GMV Growth</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 py-12">

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
              alt="Featured image for TikTok Shop GMV Projected to Double by End of 2026"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-green-600">
              MARKET ANALYSIS
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Financial Growth
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2026</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop GMV Projected to Double by End of 2026
          </h1>
          <p className="text-heading-md text-white/90">TikTok creators: 
            Industry analysts forecast explosive growth outpacing traditional social commerce competitors
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-green-50 border-2 border-green-200">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-green-800">
            TikTok Shop's projected doubling of GMV represents unprecedented opportunity for creators. As transaction volume grows, so do commission pools, brand partnership budgets, and creator incentive programs. Getting established now positions you for maximum earnings as the platform scales.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            The Numbers Behind the Growth
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-label-sm text-neutral-600 mb-1">2024 GMV (Actual)</p>
                <p className="text-display-md font-bold text-green-600">$20B</p>
              </div>
              <div>
                <p className="text-label-sm text-neutral-600 mb-1">2026 Projected GMV</p>
                <p className="text-display-md font-bold text-emerald-600">$40B+</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-heading-sm font-semibold text-neutral-900 mb-2">Growth Rate: +100%</p>
              <p className="text-body-sm text-neutral-700">This growth rate significantly outpaces Amazon's early years and positions TikTok Shop as the fastest-growing social commerce platform in history.</p>
            </div>
          </div>
          <p className="text-body-md text-neutral-700">
            According to industry analysts and leaked internal projections, TikTok Shop's global gross merchandise value (GMV) is on track to reach $40+ billion by December 2026, effectively doubling from the $20 billion recorded in 2024.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's Driving This Explosive Growth?
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <Globe size={20} className="text-blue-900" />
                <h3 className="text-heading-sm font-semibold text-blue-900">Geographic Expansion</h3>
              </div>
              <p className="text-body-sm text-blue-800">
                TikTok Shop launched in France, Germany, Italy, and other new markets in 2025, dramatically expanding the addressable customer base.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone size={20} className="text-purple-900" />
                <h3 className="text-heading-sm font-semibold text-purple-900">Improved User Experience</h3>
              </div>
              <p className="text-body-sm text-purple-800">
                Streamlined checkout, better product discovery, and enhanced seller tools have reduced friction and increased conversion rates.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={20} className="text-green-900" />
                <h3 className="text-heading-sm font-semibold text-green-900">Brand Adoption</h3>
              </div>
              <p className="text-body-sm text-green-800">
                Major retailers and consumer brands are now treating TikTok Shop as a primary sales channel, not just an experimental platform.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} className="text-amber-900" />
                <h3 className="text-heading-sm font-semibold text-amber-900">Creator Ecosystem</h3>
              </div>
              <p className="text-body-sm text-amber-800">
                More creators are earning significant income through TikTok Shop, creating a virtuous cycle of content creation and product promotion.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What Doubling GMV Means for Creators
          </h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={20} className="text-emerald-900" />
                  <h3 className="text-heading-sm font-semibold text-emerald-900">Higher Commission Pools</h3>
                </div>
                <p className="text-body-md text-emerald-800">
                  More sales = more commission revenue. If you're earning $500/month now, doubling GMV could mean $1,000+/month with the same effort.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Gift size={20} className="text-teal-900" />
                  <h3 className="text-heading-sm font-semibold text-teal-900">Increased Brand Budgets</h3>
                </div>
                <p className="text-body-md text-teal-800">
                  As ROI proves out, brands are allocating larger budgets to TikTok Shop campaigns, meaning higher rates for sponsored content.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket size={20} className="text-cyan-900" />
                  <h3 className="text-heading-sm font-semibold text-cyan-900">Platform Investment</h3>
                </div>
                <p className="text-body-md text-cyan-800">
                  TikTok is reinvesting revenue into creator incentives, better tools, and promotional programs to sustain growth momentum.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's Fueling the GMV Explosion?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok Shop's projected 100% GMV growth isn't happening by accident. Multiple strategic initiatives and market factors are converging:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">Improved User Experience</h3>
              <p className="text-body-sm text-blue-800">
                TikTok has streamlined checkout, added one-click purchasing, integrated Shop tabs directly into creator profiles, and improved product discovery algorithms. Cart abandonment rates dropped 35% in 2025.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">Creator Ecosystem Expansion</h3>
              <p className="text-body-sm text-purple-800">
                Over 200,000 creators joined TikTok Shop affiliate programs in 2025. As creator participation grows, so does product promotion and sales velocity across the platform.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">Trust & Credibility Building</h3>
              <p className="text-body-sm text-green-800">
                Consumer confidence surveys show 68% of TikTok users now trust Shop purchases (up from 42% in 2024), driven by better seller vetting, buyer protection policies, and positive experiences.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Regional Breakdown of Projected GMV
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="p-3 text-left text-heading-sm font-semibold">Region</th>
                  <th className="p-3 text-left text-heading-sm font-semibold">2024 GMV</th>
                  <th className="p-3 text-left text-heading-sm font-semibold">2026 Projected GMV</th>
                  <th className="p-3 text-left text-heading-sm font-semibold">Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">United States</td>
                  <td className="p-3">$12B</td>
                  <td className="p-3 text-green-800">$25B</td>
                  <td className="p-3 text-green-800">+108%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">United Kingdom</td>
                  <td className="p-3">$3.5B</td>
                  <td className="p-3 text-green-800">$7B</td>
                  <td className="p-3 text-green-800">+100%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Southeast Asia</td>
                  <td className="p-3">$3B</td>
                  <td className="p-3 text-green-800">$5B</td>
                  <td className="p-3 text-green-800">+67%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Europe (New Markets)</td>
                  <td className="p-3">$1.5B</td>
                  <td className="p-3 text-green-800">$3B+</td>
                  <td className="p-3 text-green-800">+100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Market Analysis: Understanding the Growth Trends
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            The United States remains the dominant market, accounting for 62.5% of projected 2026 GMV. This concentration reflects both market maturity and higher average order values ($85-$95 vs. $45-$65 in emerging markets). European markets are experiencing explosive growth following their 2025 launches, with France and Germany leading adoption rates at 73% and 68% respectively among active TikTok users.
          </p>
          <p className="text-body-md text-neutral-700">
            Southeast Asia's comparatively slower growth reflects market saturation from established competitors like Shopee and Lazada. However, TikTok's unique advantage lies in entertainment-driven purchasing, which is converting younger demographics (18-24) at rates 40% higher than traditional e-commerce platforms. Industry analysts project the platform will capture 15-20% of social commerce market share globally by end of 2026, up from 8% in 2024.
          </p>
        </Card>

        <Card className="bg-indigo-50">
          <h2 className="text-heading-lg font-semibold text-indigo-900 mb-4">
            What This Means for Sellers
          </h2>
          <p className="text-body-md text-indigo-800 mb-3">
            For brands and merchants, doubling GMV creates unprecedented opportunity but also increased competition. Sellers who establish strong creator partnerships now will benefit from network effects as the platform scales. Conversion rates are stabilizing at 2.8-3.5% for established shops, significantly higher than traditional social media advertising (0.9-1.2%).
          </p>
          <p className="text-body-md text-indigo-800">
            Early data suggests sellers investing in creator collaborations see 4-6x higher customer lifetime value compared to paid advertising alone. The key differentiator is authentic product storytelling—consumers trust creator recommendations over brand messaging, making affiliate partnerships the fastest path to sustainable growth on the platform.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Earnings Scenarios: What 100% GMV Growth Means for You
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            As GMV doubles, creator earning potential doubles proportionally—assuming you maintain consistent content quality and posting frequency:
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-heading-sm font-semibold text-neutral-900 mb-2">Scenario: Nano Creator (5K followers)</p>
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>2024 Monthly Earnings:</strong> $150-$300<br/>
                  <strong>2026 Projected Earnings:</strong> $300-$600<br/>
                  <strong>Annual Increase:</strong> $1,800-$3,600 more per year
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-heading-sm font-semibold text-neutral-900 mb-2">Scenario: Micro Creator (25K followers)</p>
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>2024 Monthly Earnings:</strong> $1,000-$2,000<br/>
                  <strong>2026 Projected Earnings:</strong> $2,000-$4,000<br/>
                  <strong>Annual Increase:</strong> $12,000-$24,000 more per year
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-heading-sm font-semibold text-neutral-900 mb-2">Scenario: Mid-Tier Creator (200K followers)</p>
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>2024 Monthly Earnings:</strong> $5,000-$10,000<br/>
                  <strong>2026 Projected Earnings:</strong> $10,000-$20,000<br/>
                  <strong>Annual Increase:</strong> $60,000-$120,000 more per year
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            Action Plan: Position Yourself for Maximum Growth
          </h2>
          <p className="text-body-md text-amber-800 mb-4">
            Don't let this wave of growth pass you by. Here's your step-by-step action plan:
          </p>
          <ol className="space-y-3 text-body-md text-amber-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <div>
                <p className="font-semibold">Join the Affiliate Program Now</p>
                <p className="text-body-sm">Early adopters often receive better commission rates and promotional support. Apply today if you have 1,000+ followers.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <div>
                <p className="font-semibold">Create Shop-Focused Content Strategy</p>
                <p className="text-body-sm">Develop expertise in product reviews, unboxings, and recommendations. Post 3-5x weekly with Shop tags.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <div>
                <p className="font-semibold">Build Your Product Niche Authority</p>
                <p className="text-body-sm">Become the go-to creator for a specific product category (beauty, tech, home goods, fashion). Niche focus increases conversion rates 2-3x.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <div>
                <p className="font-semibold">Master LIVE Shopping Streams</p>
                <p className="text-body-sm">Live streams convert at 10x higher rates. Start with weekly 30-minute sessions, build to 2-3x per week.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">5.</span>
              <div>
                <p className="font-semibold">Track Performance & Double Down</p>
                <p className="text-body-sm">Use TikTok Shop Analytics to identify your best-performing products and content formats. Replicate what works.</p>
              </div>
            </li>
          </ol>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Will doubling GMV mean doubling my earnings automatically?</h3>
              <p className="text-body-sm text-neutral-700">
                Not automatically, but proportionally. If you maintain consistent content quality and posting frequency, your earnings should scale with GMV growth. Creators who increase posting frequency can see even higher growth.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">What product categories will see the most growth?</h3>
              <p className="text-body-sm text-neutral-700">
                Beauty, fashion, electronics, and home goods are projected to lead. However, niche categories like pet products, fitness equipment, and hobby supplies are seeing explosive growth from smaller bases.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">How does TikTok Shop GMV compare to Amazon?</h3>
              <p className="text-body-sm text-neutral-700">
                Amazon's 2024 GMV was $600B+, so TikTok Shop at $40B represents about 6.5% of Amazon's size. However, TikTok's growth rate is 8-10x faster, suggesting it could reach $100B+ by 2027.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Do I need a large following to benefit from GMV growth?</h3>
              <p className="text-body-sm text-neutral-700">
                No. Nano creators (1K-10K followers) often see higher conversion rates due to stronger audience trust. Many nano creators are earning $200-$500/month with focused product niches and consistent posting.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">When is the best time to join TikTok Shop as a creator?</h3>
              <p className="text-body-sm text-neutral-700">
                Now. Early adopters benefit from lower competition, higher commission rates during promotional periods, and algorithm favorability as TikTok incentivizes Shop content. The platform prioritizes creators who started early when distributing future opportunities.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Will commission rates decrease as GMV grows?</h3>
              <p className="text-body-sm text-neutral-700">
                Commission structures may adjust, but total earnings potential increases with volume. Even if rates compress from 10% to 8%, doubling GMV means 60% higher total commission pools. Focus on building audience and product authority.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">How sustainable is this 100% growth rate?</h3>
              <p className="text-body-sm text-neutral-700">
                Analysts expect 50-70% annual growth through 2027 before moderating. The platform is still in early adoption phase with significant runway. Comparable platforms like Instagram Shopping took 5-7 years to reach maturity.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">What metrics should I track to capitalize on growth?</h3>
              <p className="text-body-sm text-neutral-700">
                Focus on conversion rate (target 2.5%+), average order value ($60+), and click-through rate on product links (5%+). These metrics matter more than follower count for long-term Shop earnings.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
          <h2 className="text-heading-lg font-semibold text-purple-900 mb-4">
            2026 Projections: Looking Ahead
          </h2>
          <p className="text-body-md text-purple-800 mb-3">
            Beyond the immediate doubling of GMV, industry forecasts suggest TikTok Shop will reach $70-80 billion GMV by end of 2027, with continued geographic expansion into Latin America and additional European markets. The platform's unique combination of entertainment and commerce positions it to capture 25-30% of the social commerce market globally.
          </p>
          <p className="text-body-md text-purple-800">
            For creators, this means the current growth phase represents a once-in-a-decade opportunity. Those who establish authority, build loyal audiences, and master Shop mechanics now will be positioned as category leaders as the platform matures. The creator middle class on TikTok Shop—those earning $2,000-$10,000 monthly—is projected to grow from 15,000 creators in 2025 to over 75,000 by late 2027.
          </p>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your TikTok Shop Earnings
          </h2>
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
            <Link href="/news/tiktok-shop-third-fastest-growing/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">TikTok Shop Third-Fastest Growing Brand</h4>
              <p className="text-body-xs text-neutral-600">Morning Consult data shows 145% YoY growth in consumer favorability</p>
            </Link>
            <Link href="/news/tiktok-shop-europe-expansion/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">TikTok Shop Expands to Europe</h4>
              <p className="text-body-xs text-neutral-600">Launch in France, Germany, and Italy brings 83M new users</p>
            </Link>
            <Link href="/news/tiktok-shop-holiday-campaign/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">TikTok Shop Holiday Campaign</h4>
              <p className="text-body-xs text-neutral-600">Biggest holiday season ever with 2x commission rates</p>
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
                href="https://www.webpronews.com/tiktok-shops-explosive-ascent-reshaping-retail-in-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                WebProNews: TikTok Shop's Explosive Growth →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </>
  );
}
