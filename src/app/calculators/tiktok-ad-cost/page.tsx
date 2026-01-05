import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { DollarSign, RotateCcw, TrendingUp, Users, BarChart2, Target, Tag, ShoppingCart, Lightbulb } from 'lucide-react';
import { TikTokAdCostCalculatorWidget } from '@/components/calculators/tiktok-ad-cost/CalculatorWidget';

export default function TikTokAdCostCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
        <div className="container-custom">
          <Breadcrumb items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'TikTok Ad Cost Calculator', href: '/calculators/tiktok-ad-cost' }
          ]} />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-DEFAULT text-white mb-6">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Ad Cost Calculator 2025</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Calculate TikTok advertising costs, CPM, CPV rates, and measure campaign ROI for effective TikTok marketing. Updated with 2025 benchmarks and industry insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Updated November 2025
              </span>
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                15+ Ad Cost Keywords
              </span>
              <span className="flex items-center gap-1">
                <Lightbulb className="w-4 h-4" />
                Industry Benchmarks
              </span>
              <span className="flex items-center gap-1">
                <BarChart2 className="w-4 h-4" />
                ROI Calculator
              </span>
            </div>
          </div>

          {/* Author Byline with Expert Review Badge */}
          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="tiktok-ad-cost" />
          </div>

          {/* Industry Insights Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  2025 TikTok Ad Trends
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• CPM increased 25% YoY</li>
                  <li>• CPC up 18% for competitive niches</li>
                  <li>• Gen Z targeting costs rising</li>
                  <li>• Video ads gaining traction</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Best Performing Formats
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• In-Feed Ads: 40% of spend</li>
                  <li>• Branded Hashtag: 28% CTR boost</li>
                  <li>• Spark Ads: 35% lower CPM</li>
                  <li>• Shopping Ads: 120% ROAS</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  Cost Efficiency Tips
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Test during off-peak hours</li>
                  <li>• Use audience expansion</li>
                  <li>• Optimize creative frequency</li>
                  <li>• Leverage retargeting</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <TikTokAdCostCalculatorWidget />
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <MethodologySection
              calculatorName="TikTok Ad Cost Calculator"
              formula="CPM = (Total Ad Spend ÷ Impressions) × 1,000"
              assumptions={[
                { label: 'Auction-Based Pricing', value: 'TikTok uses real-time bidding for ad placements' },
                { label: 'Performance Optimization', value: 'Algorithm favors ads likely to drive engagement' },
                { label: 'Regional Variations', value: 'Costs differ by market maturity and competition' },
                { label: 'Creative Quality', value: 'Better ads get lower costs and better placements' },
                { label: 'Seasonal Trends', value: 'Holiday periods increase costs significantly' },
                { label: 'Account History', value: 'Proven advertisers get better rates over time' }
              ]}
              dataSources={['TikTok Ads Manager Data', 'Q4 2025 Industry Reports', 'TikTok Official Benchmarks']}
              limitations="Costs fluctuate based on real-time auction dynamics and seasonal trends. Actual performance may vary based on creative quality and audience targeting."
              lastUpdated="November 2025"
            />

            <FAQSection
              pageName="TikTok Ad Cost Calculator"
              faqs={[
                {
                  question: "What's a good CPM for TikTok ads?",
                  answer: "A good CPM is typically under $10. Premium targeting and high-competition niches like beauty and fashion can reach $15-20 CPM. Average CPM across industries is $7.50 (2025 data)."
                },
                {
                  question: "How much do TikTok ads cost to start?",
                  answer: "You can start with as little as $1-5 per day, but $20-50 daily budget is recommended for meaningful results. Minimum campaign budget is $50-200 depending on your region."
                },
                {
                  question: "What's the difference between CPM and CPV?",
                  answer: "CPM charges per 1,000 ad impressions (views), while CPV charges per actual video view completion. CPV is often more cost-effective for video-heavy campaigns."
                },
                {
                  question: "How do I reduce TikTok ad costs?",
                  answer: "Improve targeting precision, create engaging creative content, test different ad formats, optimize for specific objectives, run campaigns during off-peak hours, and build account performance history."
                },
                {
                  question: "What's TikTok's ad budget recommendation?",
                  answer: "TikTok recommends $200-500 minimum for testing campaigns, and $1,000+ for serious campaigns to gather sufficient performance data. Enterprise accounts may require higher minimums."
                },
                {
                  question: "Are TikTok ad costs worth it?",
                  answer: "TikTok advertising can be highly cost-effective for reaching Gen Z and millennial audiences. Average ROAS across industries is 3.2x, with e-commerce achieving up to 8x ROAS in 2025."
                },
                {
                  question: "How do TikTok ad costs compare to other platforms?",
                  answer: "TikTok CPM is typically 30-50% lower than Instagram and Facebook. CPC can be 20-40% lower for video-heavy campaigns. CPV is often the most cost-effective model on TikTok."
                },
                {
                  question: "What factors affect TikTok ad costs?",
                  answer: "Competition level, targeting precision, creative quality, audience demographics, seasonality, ad format, bidding strategy, and account performance history all impact costs."
                },
                {
                  question: "Can I get better rates as a TikTok advertiser?",
                  answer: "Yes, proven advertisers with high-performing campaigns often receive better rates through TikTok's advertiser tier system. Build account history and maintain good performance to access premium rates."
                },
                {
                  question: "How often do TikTok ad costs change?",
                  answer: "Costs fluctuate daily based on real-time auction dynamics, seasonal trends, and market competition. Major updates occur quarterly with TikTok's algorithm and platform changes."
                }
              ]}
            />

            <RelatedCalculators
              currentCalculator="tiktok-ad-cost"
              calculators={[
                { name: 'Campaign ROI Calculator', slug: 'campaign-roi', description: 'Measure overall campaign profitability', icon: 'TrendingUp' },
                { name: 'CPM/CPV Calculator', slug: 'cpm-cpv', description: 'Compare different ad pricing models', icon: 'DollarSign' },
                { name: 'Customer Acquisition Cost', slug: 'customer-acquisition-cost', description: 'Calculate CAC for TikTok traffic', icon: 'Users' },
                { name: 'Lifetime Value Calculator', slug: 'lifetime-value', description: 'Measure customer lifetime value', icon: 'RotateCcw' },
              ]}
            />
          </div>

          {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
          <div className="mt-12">
            <PageEEAT pageSlug="tiktok-ad-cost" variant="full" />
          </div>
        </div>
      </div>
  );
}
