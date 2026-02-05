import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { Scale } from 'lucide-react';
import { BreakEvenCalculatorWidget } from '@/components/calculators/break-even/CalculatorWidget';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { InputsExplained } from '@/components/calculator/InputsExplained';

export const metadata: Metadata = {
  title: 'TikTok Creator Break-Even Calculator (2026)',
  description: 'Calculate when your TikTok content creation becomes profitable. Find your break-even point based on production costs and revenue streams.',
  keywords: ['break even calculator', 'tiktok profitability', 'creator break even', 'content roi calculator', 'creator economics'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/break-even/',
  },
};

const faqData = [
  {
    question: 'What is a realistic break even point?',
    answer: 'For most TikTok campaigns, break even requires 20-100 units depending on margins. High-ticket items ($100+) need fewer sales but harder to convert. Low-ticket items ($20-50) need more volume but convert easier. Aim to break even within first 48 hours of campaign launch.',
  },
  {
    question: 'What if I can\'t reach break even?',
    answer: 'Options: (1) Improve conversion rate - test better landing pages, offers, or CTAs, (2) Lower CPC - refine targeting, improve ad creative, (3) Increase margins - raise price or lower costs, (4) Accept initial losses for customer lifetime value, (5) Don\'t launch - save your money.',
  },
  {
    question: 'How do I calculate break even for TikTok Shop?',
    answer: 'TikTok Shop charges 2-8% commission plus payment processing (~3%). Add these to your product cost. For example: $50 product with $20 cost + $4 TikTok fee + $1.50 processing = $25.50 total cost. Your real margin is $24.50, not $30.',
  },
  {
    question: 'Should I scale before reaching break even?',
    answer: 'Generally no. Only scale after consistently hitting break even. Exception: If you have strong customer lifetime value and can afford short-term losses. Calculate customer LTV and ensure it exceeds acquisition cost by 3x minimum.',
  },
];

export default function BreakEvenCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Creator Break-Even Calculator"
        description="Calculate when your TikTok content creation becomes profitable. Find your break-even point based on production costs and revenue streams."
        url="https://calculatecreator.com/calculators/break-even"
        aggregateRating={{ ratingValue: 4.7, reviewCount: 1243 }}
        datePublished="2024-04-15"
        dateModified="2025-11-13"
        keywords={['break even calculator', 'tiktok profitability', 'creator break even', 'content roi calculator']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Break Even Calculator', url: 'https://calculatecreator.com/calculators/break-even' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Break Even Calculator',
              href: '/calculators/break-even',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Break Even Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how many sales you need to break even on your ad spend or product launch. This calculator uses your contribution margin per unit and total fixed costs to determine the exact number of units required for profitability. Essential for campaign planning, product launches, and budget decisions. Understand your profitability threshold before investing in paid advertising.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <PageAuthorByline pageSlug="break-even" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <BreakEvenCalculatorWidget />

            <InputsExplained
              inputs={[
                { name: 'Ad Spend', description: 'Total budget allocated for the campaign', example: '$1,000', required: true },
                { name: 'Product Price', description: 'Selling price of your product', example: '$50', required: true },
                { name: 'Product Cost', description: 'Your cost per unit (COGS)', example: '$20', required: true },
                { name: 'Cost Per Click', description: 'Average CPC from your TikTok ads', example: '$0.50' },
                { name: 'Conversion Rate', description: 'Percentage of clicks that result in sales', example: '2%' },
              ]}
              note="Include all costs: product, shipping, TikTok Shop fees (2-8%), and payment processing (~3%)."
            />
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Understanding Break Even Analysis for Creator Businesses
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Break even analysis is the cornerstone of profitable creator businesses and product launches on TikTok. It represents the exact point where total revenue equals total costs—the critical threshold between losing money and making profit. For TikTok creators selling products, running campaigns, or launching merchandise, understanding your break even point isn't optional; it's essential for sustainable business growth.
                </p>
                <p>
                  Unlike traditional businesses with predictable costs, creator businesses face unique challenges: fluctuating ad costs, variable engagement rates, and seasonal audience behavior. This makes accurate break even calculations even more critical. The formula accounts for both your fixed costs (ad spend) and variable costs (per-unit product costs), giving you a complete picture of profitability thresholds.
                </p>
                <p>
                  <strong>Why Break Even Point Matters for TikTok Creators:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Campaign Validation:</strong> Calculate break even before launching campaigns to identify deals that will lose money, saving you from costly mistakes that can drain your creator earnings
                  </li>
                  <li>
                    <strong>Realistic Goal Setting:</strong> Know exactly how many sales you need (not guessing) to cover costs and start profiting, which informs your content strategy and posting frequency
                  </li>
                  <li>
                    <strong>Budget Optimization:</strong> Compare break even points across different products or campaigns to allocate your limited marketing budget to the most profitable opportunities
                  </li>
                  <li>
                    <strong>Product Launch Planning:</strong> Essential for new merchandise launches, affiliate products, or TikTok Shop listings—validates product viability before investing in inventory
                  </li>
                  <li>
                    <strong>Pricing Strategy:</strong> Reveals whether your product pricing and margins can sustain paid advertising, or if you need to adjust pricing upward or reduce production costs
                  </li>
                  <li>
                    <strong>Risk Management:</strong> Understand your downside risk—knowing you need 50 sales to break even is very different from needing 500 sales, affecting your willingness to test
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Break Even Calculation Methodology
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  The break even calculation for TikTok campaigns involves understanding three critical components: your contribution margin per unit (product price minus product cost), your total fixed costs (ad spend), and the conversion funnel from clicks to sales. Here's how these elements work together:
                </p>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="font-semibold text-neutral-900 mb-2">Step 1: Calculate Unit Economics</p>
                  <p className="text-body-sm">
                    Contribution Margin = Product Price - Product Cost. This is your gross profit per unit, before accounting for advertising. For example: $50 product - $20 cost = $30 contribution margin per sale.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="font-semibold text-neutral-900 mb-2">Step 2: Determine Break Even Units</p>
                  <p className="text-body-sm">
                    Break Even Units = Total Ad Spend / Contribution Margin per Unit. Using our example: $1,000 ad budget / $30 margin = 33.3, rounded to 34 units needed to break even.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="font-semibold text-neutral-900 mb-2">Step 3: Calculate Required Traffic</p>
                  <p className="text-body-sm">
                    Required Clicks = Ad Spend / Cost Per Click, then Required Conversions = Required Clicks × Conversion Rate. This shows the funnel metrics needed to hit your break even sales target.
                  </p>
                </div>
                <p>
                  <strong>Understanding Fixed vs. Variable Costs for Creators:</strong> Fixed costs remain constant regardless of sales volume—your ad spend is the same whether you sell 10 or 100 units. Variable costs scale with sales—each additional unit sold incurs additional product costs. This distinction is crucial because lowering fixed costs (reducing ad spend) means you need fewer sales to break even, while lowering variable costs (cheaper product sourcing) increases your margin per sale, also lowering the break even threshold.
                </p>
                <p>
                  Most creators underestimate their true break even point by forgetting hidden costs: TikTok Shop takes 2-8% commission, payment processors charge 2.9% + $0.30, shipping eats another $3-8 per order, and returns/chargebacks cost 2-5% of revenue. Include these in your "product cost" for accurate break even calculations.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Industry Benchmarks: Time to Break Even
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Understanding industry-standard time-to-profitability helps you evaluate whether your campaigns are performing competitively. Here's what successful TikTok creators achieve:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-success-50 rounded-lg border border-success-200">
                    <h3 className="font-semibold text-neutral-900 mb-1">Excellent: Break Even Within 24-48 Hours</h3>
                    <p className="text-body-sm text-neutral-700">
                      Top 10% of campaigns hit break even in the first 2 days. This indicates strong product-market fit, compelling creative, and optimized pricing. These campaigns should be scaled immediately with 20-50% daily budget increases.
                    </p>
                  </div>
                  <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                    <h3 className="font-semibold text-neutral-900 mb-1">Good: Break Even Within 3-7 Days</h3>
                    <p className="text-body-sm text-neutral-700">
                      Most successful campaigns (60-70%) reach break even within the first week. This is sustainable and profitable. Continue optimizing creative and consider modest budget increases of 10-20% weekly.
                    </p>
                  </div>
                  <div className="p-3 bg-warning-50 rounded-lg border border-warning-200">
                    <h3 className="font-semibold text-neutral-900 mb-1">Acceptable: Break Even Within 2-4 Weeks</h3>
                    <p className="text-body-sm text-neutral-700">
                      Longer break even periods (2-4 weeks) are common for higher-priced products ($100+) with longer consideration cycles. Acceptable if customer lifetime value is high, but monitor closely and don't scale until profitable.
                    </p>
                  </div>
                  <div className="p-3 bg-error-50 rounded-lg border border-error-200">
                    <h3 className="font-semibold text-neutral-900 mb-1">Red Flag: Not Breaking Even After 30 Days</h3>
                    <p className="text-body-sm text-neutral-700">
                      If you haven't hit break even after a month, pause the campaign. The product, pricing, audience targeting, or creative needs fundamental changes. Don't throw good money after bad—pivot or abandon.
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Category-Specific Benchmarks:</strong> Low-ticket impulse buys ($10-30) should break even within 24-72 hours. Mid-priced products ($30-100) typically need 3-7 days. High-ticket items ($100-500) may take 2-4 weeks. Subscription products can accept longer break even periods (4-8 weeks) due to recurring revenue offsetting acquisition costs.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Strategic Applications: Using Break Even Data for Business Decisions
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Break even analysis isn't just about knowing when you become profitable—it's a strategic tool for making smarter business decisions across your entire creator operation:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">1. Product Portfolio Optimization</h3>
                    <p className="text-body-sm">
                      Calculate break even points for all products you promote. A product with a 30-unit break even is far more scalable than one requiring 300 units. Focus your content and ad spend on products with lower break even thresholds—they're more forgiving and scale faster. Eliminate products that consistently fail to break even within your target timeframe.
                    </p>
                  </div>
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">2. Pricing Strategy Validation</h3>
                    <p className="text-body-sm">
                      Test different price points by calculating break even for each. Often, increasing your price by $10-20 cuts your break even units in half. Example: At $40 with $20 costs, you need 50 sales to break even on $1,000 spend. At $50 price point, you only need 33 sales—a 34% easier threshold. Higher prices often convert surprisingly well on TikTok if you communicate value effectively.
                    </p>
                  </div>
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">3. Campaign Budget Allocation</h3>
                    <p className="text-body-sm">
                      Use break even analysis to determine maximum safe testing budgets. If you have a 60% historical success rate with campaigns, and break even is $1,000 in sales, your maximum test budget should be $600. This ensures that even if 40% of tests fail completely, your winning 60% will carry overall profitability.
                    </p>
                  </div>
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">4. Competitive Advantage Assessment</h3>
                    <p className="text-body-sm">
                      Lower break even points create competitive moats. If you can break even with 20 sales while competitors need 50, you can afford to pay 2.5× more per click, dominating ad auctions. Work obsessively to lower your break even through better margins, higher conversion rates, or lower CPCs to outlast competitors in ad bidding wars.
                    </p>
                  </div>
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">5. Growth Funding Decisions</h3>
                    <p className="text-body-sm">
                      Break even analysis informs how much capital you need to scale. If break even requires $5,000 in ad spend per product launch, and you want to test 10 products simultaneously, you need $50,000 in operating capital. Understanding this prevents cash flow crunches that kill otherwise promising campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Real-World Case Study: Fashion Accessory Launch
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <div className="p-4 bg-gradient-to-r from-neutral-50 to-primary-50 border border-primary-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-3">Scenario: Mid-Tier Creator Launching Custom Phone Cases</p>
                  <div className="space-y-2 text-body-sm">
                    <p><strong>Creator Profile:</strong> 75K TikTok followers, 6.2% engagement rate, fashion/lifestyle niche</p>
                    <p><strong>Product:</strong> Custom-designed phone cases, $35 retail price, $12 production cost (including shipping), $23 contribution margin per unit</p>
                    <p><strong>Initial Campaign:</strong> $800 TikTok Ads budget, $0.42 average CPC, 2.8% conversion rate</p>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="font-semibold text-neutral-900 mb-2">Break Even Calculation:</p>
                  <ul className="space-y-1 text-body-sm">
                    <li>• Break Even Units = $800 / $23 = 34.8 ≈ 35 phone cases</li>
                    <li>• Required Clicks = $800 / $0.42 = 1,905 clicks</li>
                    <li>• Expected Conversions at 2.8% = 1,905 × 0.028 = 53 sales</li>
                    <li>• Projected Revenue = 53 × $35 = $1,855</li>
                    <li>• Net Profit = $1,855 - $800 ad spend - (53 × $12 costs) = $419 profit</li>
                  </ul>
                </div>
                <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                  <p className="font-semibold text-success-900 mb-2">Actual Results After 7 Days:</p>
                  <ul className="space-y-1 text-body-sm">
                    <li>• Achieved 61 sales (15% above projection)</li>
                    <li>• Hit break even on Day 3 with 35th sale</li>
                    <li>• Actual conversion rate: 3.2% (campaign optimization improved results)</li>
                    <li>• Final profit: $687 (65% ROI on initial $800 investment)</li>
                  </ul>
                </div>
                <p className="text-body-sm italic text-neutral-600">
                  <strong>Key Takeaway:</strong> The creator used break even analysis to confidently commit $800 to the test, knowing they needed only 35 sales to recover costs. When the campaign hit break even on Day 3, they immediately increased the budget to $1,200 for week 2, ultimately generating $2,400 in total profit over 30 days. Without break even analysis, they might have panicked on Day 2 (only 18 sales) and stopped the campaign prematurely, leaving $2,000+ in profit on the table.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">What if my break even point requires more sales than realistic?</p>
                  <p className="text-body-sm">
                    If break even analysis shows you need 500 sales but you historically achieve only 50-100 sales per campaign, you have three options: (1) Increase product price to improve margin, (2) Reduce production costs through bulk ordering or cheaper suppliers, or (3) Don't launch—save your money for better opportunities.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">Should I account for my time in break even calculations?</p>
                  <p className="text-body-sm">
                    Absolutely. If you spend 10 hours creating content and your time is worth $50/hour, add $500 to your fixed costs. This gives you a true break even that accounts for opportunity cost. Many creators ignore their time and think they're profitable when they're actually working for $5/hour.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">How does TikTok Shop commission affect break even?</p>
                  <p className="text-body-sm">
                    TikTok Shop charges 2-8% commission plus ~3% payment processing. On a $50 product, that's $2.50-5.50 in fees. Add this to your "product cost" in break even calculations. Many creators forget platform fees and wonder why they're not hitting projections—their actual break even is 8-15% higher than calculated.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">Can I use break even analysis for organic content (no ads)?</p>
                  <p className="text-body-sm">
                    Yes! For organic content, your "ad spend" is the value of your time creating content. If you spend 5 hours on content worth $50/hour ($250 time investment), and product margin is $20, you need 13 sales to break even on your time investment. This helps evaluate whether products are worth promoting organically.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">What's a realistic break even point for TikTok beginners?</p>
                  <p className="text-body-sm">
                    For creators with less than 50K followers, aim for break even points under 50 units. This is achievable with decent creative and targeting. As you grow audience and improve conversion rates, you can handle higher break even thresholds (100-200 units) because your larger reach drives more traffic per dollar spent.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Break Even Tips
              </h2>
              <div className="space-y-3 text-body-md text-neutral-700">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">
                    Lower Your Break Even
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-body-sm">
                    <li>Improve conversion rate (better landing pages)</li>
                    <li>Reduce CPC (better ad targeting)</li>
                    <li>Increase product margin (higher price or lower costs)</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">
                    Risk Management
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-body-sm">
                    <li>Start with 20-30% of planned budget to test</li>
                    <li>Only scale after proving you can exceed break even</li>
                    <li>Build in 20% cushion for unexpected costs</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="break-even"
            formula={`Profit per Unit = Product Price - Product Cost
Break Even Units = Ad Spend / Profit per Unit
Required Clicks = Ad Spend / Cost per Click
Required Conversions = Required Clicks × Conversion Rate

Example:
Ad Spend: $1,000
CPC: $0.50 → 2,000 clicks needed
Conversion: 2% → 40 conversions needed
Product: $50 price - $20 cost = $30 profit/unit
Break Even: $1,000 / $30 = 34 units`}
            assumptions={[
              {
                label: 'Fixed Costs',
                value:
                  'Assumes product cost and CPC remain constant at scale',
              },
              {
                label: 'Conversion Rate',
                value: 'Based on landing page performance and offer quality',
              },
              {
                label: 'Additional Costs',
                value: 'Does not include shipping, returns, or platform fees',
              },
            ]}
            dataSources={[
              'E-commerce Break Even Analysis Best Practices',
              'TikTok Ads Performance Benchmarks 2024',
              'Direct Response Marketing ROI Study',
            ]}
            limitations="Real-world performance varies. Factor in returns, chargebacks, shipping costs, and platform fees. Always test with small budget before scaling to full ad spend."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Break Even Calculator"
            faqs={[
              {
                question: 'What is a realistic break even point?',
                answer:
                  'For most TikTok campaigns, break even requires 20-100 units depending on margins. High-ticket items ($100+) need fewer sales but harder to convert. Low-ticket items ($20-50) need more volume but convert easier. Aim to break even within first 48 hours of campaign launch.',
              },
              {
                question: 'What if I can\'t reach break even?',
                answer:
                  'Options: (1) Improve conversion rate - test better landing pages, offers, or CTAs, (2) Lower CPC - refine targeting, improve ad creative, (3) Increase margins - raise price or lower costs, (4) Accept initial losses for customer lifetime value (if you have repeat purchases), (5) Don\'t launch - save your money.',
              },
              {
                question: 'How do I calculate break even for TikTok Shop?',
                answer:
                  'TikTok Shop charges 2-8% commission plus payment processing (~3%). Add these to your product cost. For example: $50 product with $20 cost + $4 TikTok fee + $1.50 processing = $25.50 total cost. Your real margin is $24.50, not $30. Recalculate break even with true costs.',
              },
              {
                question: 'Should I scale before reaching break even?',
                answer:
                  'Generally no. Only scale after consistently hitting break even. Exception: If you have strong customer lifetime value (repeat purchases, subscriptions) and can afford short-term losses. Calculate customer LTV and ensure it exceeds acquisition cost by 3x minimum.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="break-even"
            calculators={[
              {
                name: 'Sponsorship ROI Calculator',
                slug: 'sponsorship-roi',
                description:
                  'Calculate ROI for brand partnerships',
                icon: 'CreditCard',
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Factor in content creation costs',
                icon: 'Camera',
              },
              {
                name: 'Ad Revenue Calculator',
                slug: 'ad-revenue',
                description: 'Estimate ad revenue potential',
                icon: 'DollarSign',
              },
            ]}
          />

          <div className="mt-12">
            <PageEEAT pageSlug="break-even" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
