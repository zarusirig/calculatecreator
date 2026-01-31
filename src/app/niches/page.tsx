import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CollectionSchema } from '@/components/seo/CollectionSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Sparkles, DollarSign, TrendingUp, Dumbbell, PiggyBank, Target, Users, BarChart3, Lightbulb, TrendingDown, ArrowRightLeft, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'TikTok Niche Earnings Guides: Income by Content Category 2026 | CalculateCreator',
  },
  description: 'Explore TikTok earnings by niche. Real income data for beauty, finance, fitness creators with brand deal rates and monetization strategies.',
  alternates: {
    canonical: 'https://calculatecreator.com/niches/',
  },
};

export default function NichesPage() {
  const niches = [
    {
      title: 'Beauty Creator Earnings',
      slug: 'beauty-earnings',
      description: 'Complete earnings guide for beauty creators on TikTok. Income by follower tier, brand deal rates, affiliate commissions, and monetization strategies.',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-500',
      highlights: ['High brand demand', '10-20% affiliate commissions', 'Strong PR package opportunities'],
    },
    {
      title: 'Finance Creator Earnings (FinTok)',
      slug: 'finance-earnings',
      description: 'TikTok finance creator income guide. FinTok earns 3-5x more per view than average niches due to high advertiser demand.',
      icon: PiggyBank,
      color: 'from-green-500 to-emerald-500',
      highlights: ['Highest RPM rates', 'Premium brand deals', 'Affiliate finance products'],
    },
    {
      title: 'Fitness Creator Earnings',
      slug: 'fitness-earnings',
      description: 'Fitness creator monetization guide with earnings data. Supplement deals, coaching programs, and brand partnership rates.',
      icon: Dumbbell,
      color: 'from-orange-500 to-red-500',
      highlights: ['Supplement sponsorships', 'Coaching upsells', 'Apparel partnerships'],
    },
  ];

  const schemaItems = niches.map(item => ({
    name: item.title,
    description: item.description,
    url: `https://calculatecreator.com/niches/${item.slug}/`,
    category: 'Niche Earnings',
  }));

  const faqs = [
    {
      question: 'Which TikTok niche pays the most in 2026?',
      answer: 'Finance (FinTok) consistently pays the highest, with RPM rates 3-5x above average and brand deals 2-3x higher than entertainment niches. This is because finance advertisers have high customer lifetime values ($500-$5,000+) and are willing to pay premium rates. B2B and professional education niches also command premium rates.',
    },
    {
      question: 'Can I switch niches to earn more?',
      answer: 'Yes, but it\'s often better to blend niches. For example, a comedy creator can add "personal finance comedy" content to tap into higher-paying advertisers while keeping their existing audience. Pure niche pivots risk losing 30-50% of followers. Test new content types gradually before fully pivoting.',
    },
    {
      question: 'Do smaller niches pay more per follower?',
      answer: 'Often yes. Specialized niches (finance, B2B, professional education) have higher per-follower brand deal rates because their audiences are more targeted and valuable to specific advertisers. A 50K finance creator might out-earn a 200K entertainment creator due to audience quality and advertiser demand.',
    },
    {
      question: 'How accurate is this niche earnings data?',
      answer: 'Our data is based on surveys of 1,000+ creators, publicly disclosed earnings, and industry reports from 2025-2026. These are median ranges—your actual earnings depend on engagement rate, audience location, and negotiation skills. Use these as benchmarks, not guarantees.',
    },
    {
      question: 'What are sub-niches and why do they matter?',
      answer: 'Sub-niches are specialized segments within broader categories. For example, "credit card optimization" within finance or "skincare for acne" within beauty. Sub-niches often have less competition, higher engagement rates, and more targeted brand partnerships. They can command premium rates despite smaller audiences.',
    },
    {
      question: 'How long does it take to establish authority in a new niche?',
      answer: 'Typically 3-6 months of consistent posting (3-5 times per week) to build credibility and attract niche-specific brand partnerships. Finance and education niches may take longer (6-9 months) because trust-building is critical. Entertainment and lifestyle niches can monetize faster (2-4 months).',
    },
    {
      question: 'Should I focus on one niche or multiple niches?',
      answer: 'For beginners, focus on one niche until you reach 10K followers and establish monetization. Multi-niche content dilutes your audience targeting and reduces brand deal rates. Once established, you can blend adjacent niches (e.g., fitness + nutrition) but avoid completely unrelated content.',
    },
    {
      question: 'What if my niche has low brand deal demand?',
      answer: 'Pivot to monetization models that don\'t rely on brands: digital products, courses, coaching, affiliate marketing, or TikTok Shop. Gaming creators often earn more from affiliate links than sponsorships. Comedy creators monetize through live gifts and Creator Fund. Adapt your strategy to your niche\'s strengths.',
    },
  ];

  return (
    <>
      <CollectionSchema
        title="TikTok Niche Earnings Guides: Income by Content Category 2026"
        description="Explore TikTok earnings by niche. Real income data for beauty, finance, fitness creators with brand deal rates and monetization strategies."
        url="https://calculatecreator.com/niches/"
        items={schemaItems}
        collectionType="Guides"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Niche Earnings', href: '/niches' },
            ]}
            includeHome={true}
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Niche Earnings Guides
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Discover how much TikTok creators earn in different content niches. Real income data, brand deal rates, and monetization strategies.
            </p>
            <p className="text-body-md text-neutral-600 max-w-3xl mx-auto">
              Your niche dramatically affects your earning potential. Finance creators earn 3-5x more per view than entertainment. Beauty creators get the most brand deal opportunities. Use these guides to understand your niche's earning potential.
            </p>
          </div>

          {/* Niche Cards */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {niches.map((niche) => (
                <Link
                  key={niche.slug}
                  href={`/niches/${niche.slug}/`}
                  className="card p-0 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`bg-gradient-to-br ${niche.color} p-6 text-white`}>
                    <niche.icon className="w-10 h-10 mb-3" />
                    <h2 className="text-heading-lg font-bold mb-2">{niche.title}</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-body-sm text-neutral-600 mb-4">
                      {niche.description}
                    </p>
                    <ul className="space-y-2">
                      {niche.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-body-sm text-neutral-700">
                          <span className="text-green-600">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <span className="text-primary-600 font-semibold text-body-sm">
                        View Earnings Guide →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Niche Selection Matters */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">
                Why Niche Selection Matters for Creator Earnings
              </h2>
              <div className="mb-6 text-center max-w-3xl mx-auto">
                <p className="text-body-md text-neutral-700">
                  Your niche is the single biggest factor in your earning potential beyond follower count. Two creators with identical follower counts can earn vastly different amounts based solely on their content category. Understanding niche economics helps you make strategic decisions about content direction and monetization approach.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <DollarSign className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">RPM Varies 5-10x by Niche</h3>
                  <p className="text-body-sm text-neutral-700">
                    Finance niches earn $0.05-$0.07 per 1K views vs $0.01 for entertainment. This means a finance creator with 1M views earns $50-$70 while an entertainment creator earns just $10 from the Creator Fund.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <TrendingUp className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Brand Deal Rate Premiums</h3>
                  <p className="text-body-sm text-neutral-700">
                    Specialized niches command 2-3x higher sponsorship rates per follower. A 100K finance creator charges $3,000-$5,000 per post while a 100K entertainment creator gets $1,000-$1,500.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Sparkles className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Audience Monetization Potential</h3>
                  <p className="text-body-sm text-neutral-700">
                    Beauty and finance niches have the best affiliate commission structures (10-30%) and highest conversion rates. Audiences in these niches actively seek product recommendations and make purchases.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Niche Earnings Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">
              2026 TikTok Niche Earnings Comparison
            </h2>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="pb-3 pr-4 font-semibold text-neutral-900">Niche</th>
                      <th className="pb-3 pr-4 font-semibold text-neutral-900">Avg RPM</th>
                      <th className="pb-3 pr-4 font-semibold text-neutral-900">Brand Deal Rate (100K)</th>
                      <th className="pb-3 pr-4 font-semibold text-neutral-900">Top Revenue Stream</th>
                      <th className="pb-3 font-semibold text-neutral-900">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="py-4 pr-4 font-medium text-neutral-900">Finance (FinTok)</td>
                      <td className="py-4 pr-4 text-neutral-700">$0.05-$0.07</td>
                      <td className="py-4 pr-4 text-neutral-700">$3,000-$5,000</td>
                      <td className="py-4 pr-4 text-neutral-700">Affiliate + Brand Deals</td>
                      <td className="py-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">High</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-neutral-900">Fitness</td>
                      <td className="py-4 pr-4 text-neutral-700">$0.03-$0.05</td>
                      <td className="py-4 pr-4 text-neutral-700">$2,000-$4,000</td>
                      <td className="py-4 pr-4 text-neutral-700">Supplements + Coaching</td>
                      <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-neutral-900">Beauty</td>
                      <td className="py-4 pr-4 text-neutral-700">$0.02-$0.04</td>
                      <td className="py-4 pr-4 text-neutral-700">$1,500-$3,500</td>
                      <td className="py-4 pr-4 text-neutral-700">PR Packages + Affiliate</td>
                      <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-neutral-900">Education</td>
                      <td className="py-4 pr-4 text-neutral-700">$0.03-$0.06</td>
                      <td className="py-4 pr-4 text-neutral-700">$2,500-$4,500</td>
                      <td className="py-4 pr-4 text-neutral-700">Courses + Consulting</td>
                      <td className="py-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">High</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-neutral-900">Gaming</td>
                      <td className="py-4 pr-4 text-neutral-700">$0.015-$0.025</td>
                      <td className="py-4 pr-4 text-neutral-700">$1,000-$2,000</td>
                      <td className="py-4 pr-4 text-neutral-700">Game Affiliate Links</td>
                      <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Low</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-neutral-900">Entertainment</td>
                      <td className="py-4 pr-4 text-neutral-700">$0.01-$0.02</td>
                      <td className="py-4 pr-4 text-neutral-700">$800-$1,500</td>
                      <td className="py-4 pr-4 text-neutral-700">Creator Fund + Gifts</td>
                      <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Low</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-body-sm text-neutral-600 mt-4 italic">
                Data based on median creator earnings, 2025-2026. Actual rates vary by engagement, audience location, and creator reputation.
              </p>
            </Card>
          </div>

          {/* 2026 High-Value Niches */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">
              2026 High-Value Niches: Where to Focus for Maximum Earnings
            </h2>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <div className="mb-6">
                <p className="text-body-md text-neutral-700 mb-4">
                  Not all niches are created equal. In 2026, certain content categories dramatically outperform others due to advertiser demand, audience purchasing power, and monetization opportunities. Here's what makes a niche "high-value":
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    Top Performing Niches 2026
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-body-sm text-neutral-700"><strong>Finance (FinTok):</strong> Highest RPM and brand deal rates. Credit cards, investment apps, and finance courses pay premium rates ($50-$200 CPM for sponsored content).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-body-sm text-neutral-700"><strong>B2B/Professional Education:</strong> SaaS companies and professional development brands pay 3-5x more than consumer brands due to high customer lifetime values.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-body-sm text-neutral-700"><strong>Health Tech:</strong> Medical devices, supplements, and wellness apps have massive advertising budgets and strong affiliate programs (20-30% commissions).</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    Why These Niches Command Premium Rates
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-body-sm text-neutral-700"><strong>High Customer LTV:</strong> Finance customers are worth $500-$5,000+ to advertisers, justifying premium creator payouts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-body-sm text-neutral-700"><strong>Targeted Audiences:</strong> Niche-specific followers convert 3-5x better than broad entertainment audiences.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-body-sm text-neutral-700"><strong>Multiple Revenue Streams:</strong> Top niches monetize through ads, affiliates, digital products, coaching, and consulting simultaneously.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-body-sm text-neutral-700"><strong>Less Competition:</strong> Specialized content requires expertise, reducing creator saturation compared to entertainment.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-body-sm text-neutral-700">
                  <strong>Important Note:</strong> High-value niches often have higher barriers to entry. Finance requires credibility and regulatory awareness. B2B needs industry expertise. Don't jump into a niche purely for money—authenticity and knowledge are essential for long-term success.
                </p>
              </div>
            </Card>
          </div>

          {/* How to Choose Your Niche */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">
              How to Choose Your TikTok Niche Strategically
            </h2>
            <p className="text-body-md text-neutral-600 text-center mb-8 max-w-3xl mx-auto">
              The right niche balances your interests, expertise, and earning potential. Consider these four critical factors when selecting or pivoting your content category:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Target className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Match Skills to Market Demand</h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Choose a niche where you have genuine expertise or credibility. Finance creators need financial literacy. Fitness creators need training knowledge. Audiences spot fakes quickly, especially in high-value niches where trust drives conversions.
                    </p>
                    <p className="text-body-sm text-neutral-700">
                      <strong>Action Step:</strong> List your professional skills, hobbies, and passions. Cross-reference with high-paying niches to find overlaps.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-10 h-10 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Analyze Audience Demographics</h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      High-earning niches attract audiences with disposable income and buying intent. Finance followers are typically 25-45 with jobs. Beauty skews 18-35 with spending power. Gaming skews younger with lower purchasing capacity but high engagement.
                    </p>
                    <p className="text-body-sm text-neutral-700">
                      <strong>Action Step:</strong> Research competitor audience demographics using TikTok analytics or SocialBlade data before committing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Layers className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Consider Content Sustainability</h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Can you create content consistently for 12+ months? Finance and education require constant research to stay current. Beauty benefits from product launches for fresh content. Entertainment relies on creativity that can burn out quickly.
                    </p>
                    <p className="text-body-sm text-neutral-700">
                      <strong>Action Step:</strong> Test your niche with 10-15 videos before fully committing. If ideas dry up early, it's not sustainable.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="w-10 h-10 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Evaluate Monetization Diversity</h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Best niches offer multiple income streams: Creator Fund, brand deals, affiliates, digital products, coaching, and TikTok Shop. Relying on a single revenue source is risky. Finance and fitness excel here with 5+ monetization options.
                    </p>
                    <p className="text-body-sm text-neutral-700">
                      <strong>Action Step:</strong> Map out 3-4 potential revenue streams for your chosen niche before launching content.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Related Resources */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/data/rpm-rates-by-niche/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">RPM Rates by Niche</h3>
                  <p className="text-body-sm text-neutral-700">Complete Creator Fund RPM data across 20+ niches</p>
                </Link>
                <Link href="/data/brand-deal-rates-by-niche/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">Brand Deal Rates by Niche</h3>
                  <p className="text-body-sm text-neutral-700">Sponsorship pricing benchmarks by content category</p>
                </Link>
                <Link href="/guides/niche-selection/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">Niche Selection Guide</h3>
                  <p className="text-body-sm text-neutral-700">How to choose the right niche for your goals</p>
                </Link>
                <Link href="/calculators/tiktok-creator-fund/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">Earnings Calculator</h3>
                  <p className="text-body-sm text-neutral-700">Calculate your earnings based on your niche</p>
                </Link>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <FAQSection
              pageName="Niche Earnings"
              faqs={faqs}
            />
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-tiktok-pink/5 to-tiktok-blue/5 text-center p-8">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Calculate Your Niche Earnings
              </h2>
              <p className="text-body-md text-neutral-700 mb-6">
                Use our calculators to estimate your earnings potential in your niche:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators/tiktok-creator-fund/" className="btn btn-primary btn-md">
                  Creator Fund Calculator
                </Link>
                <Link href="/calculators/brand-deal-rate/" className="btn btn-outline btn-md">
                  Brand Deal Calculator
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
