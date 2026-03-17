import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { Scale, ClipboardList, Camera, Gem } from 'lucide-react';
import { ProductionCostCalculatorWidget } from '@/components/calculators/production-cost/CalculatorWidget';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';

export const metadata: Metadata = {
  title: "TikTok Production Cost Calculator — Budget Your Content",
  description: "Calculate your TikTok content production costs. Factor in equipment, editing time, props, and labor to understand your true cost per video.",
  keywords: ['production cost calculator', 'content creation cost', 'video production budget', 'creator expenses', 'content cost analysis'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/production-cost/',
  },
};

const faqData = [
  {
    question: 'What should my hourly rate be?',
    answer: '**Base your hourly rate on 3 factors (your opportunity cost, market rates for video editors, and your experience level).** Market rates for video editors range from $25 to $100 per hour. Beginners: $20 to $40 per hour. Experienced: $50 to $100 per hour. Professionals: $100 to $200 per hour.',
  },
  {
    question: 'How can I reduce production costs?',
    answer: '**Use 6 strategies to reduce production costs.** Batch film by shooting 5 to 10 videos in one session. Use templates. Improve efficiency with practice. Outsource editing at $10 to $30 per video. Use a phone instead of an expensive camera. Leverage free tools like CapCut and the free Canva plan.',
  },
  {
    question: 'Are production costs tax deductible?',
    answer: '**Yes, production costs are tax deductible.** As a content creator, equipment, software, props, home office, and internet are deductible business expenses. Keep receipts and consult a Certified Public Accountant (CPA) for specific guidance. Deductions reduce your taxable income.',
  },
  {
    question: 'When should I upgrade equipment?',
    answer: '**Upgrade when 4 conditions are met.** Current equipment limits quality or creativity. You justify ROI by earning enough to cover costs in 3 to 6 months. The tax deduction makes sense. Clients and brands expect higher production value. Do not upgrade just to upgrade.',
  },
];

export default function ProductionCostCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Video Production Cost Calculator"
        description="Calculate content production costs for TikTok videos. Budget equipment, editing, and time costs to understand your true content investment."
        url="https://tiktokcalculator.net/calculators/production-cost/"
        datePublished="2024-05-20"
        dateModified="2026-03-01"
        keywords={['production cost calculator', 'content creation cost', 'video production budget', 'creator expenses']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net' },
          { name: 'Calculators', url: 'https://tiktokcalculator.net/calculators/' },
          { name: 'Production Cost Calculator', url: 'https://tiktokcalculator.net/calculators/production-cost/' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators/' },
            {
              label: 'Production Cost Calculator',
              href: '/calculators/production-cost/',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🎥
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Production Cost Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">TikTok creators: 
            Calculate your true cost per video by factoring in equipment amortization, software subscriptions, and most importantly your time value at appropriate hourly rates. Understand production costs to evaluate ROI, price services accurately, claim tax deductions, and identify efficiency improvements. Critical for determining whether your content creation is actually profitable after accounting for all expenses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <PageAuthorByline pageSlug="production-cost" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <ProductionCostCalculatorWidget />

            <InputsExplained
              inputs={[
                { name: 'Equipment Costs', description: 'Camera, lighting, audio equipment (amortized)', example: '$200/month' },
                { name: 'Software Subscriptions', description: 'Editing software, music licenses, etc.', example: '$50/month' },
                { name: 'Time Spent', description: 'Hours spent creating content', example: '10 hours', required: true },
                { name: 'Hourly Rate', description: 'Your target hourly rate for content creation', example: '$50/hour' },
                { name: 'Videos Per Month', description: 'Number of videos produced', example: '20 videos' },
              ]}
              note="Track cost per video to ensure your content is profitable against revenue generated."
            />
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Production Cost Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Understanding your true production costs helps price services,
                  evaluate ROI, and track business expenses for tax deductions.
                </p>
                <p>
                  <strong>What to include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Equipment (camera, mic, lighting) amortized over 2 years</li>
                  <li>Software subscriptions (editing, analytics, scheduling)</li>
                  <li>Your time (filming, editing, planning, posting)</li>
                  <li>Props, locations, and other per-video costs</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Reducing Production Costs
              </h2>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Efficiency:</strong> Batch filming multiple videos in one session
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Templates:</strong> Use editing templates to save time
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Free Tools:</strong> Use free software alternatives when starting
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Outsource:</strong> Hire editors for $10-30/video if time-constrained
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Why Tracking Production Costs Is Critical
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                The Production Cost Calculator reveals your true cost per video - a number most creators never calculate but absolutely should. Without knowing production costs, you can't determine profitability, can't price services accurately, can't identify efficiency improvements, and can't claim proper tax deductions. Many creators work hard creating content while unknowingly operating at a loss when accounting for their time value.
              </p>
              <p>
                Production costs include three categories: equipment (cameras, lighting, microphones amortized over their lifespan), software (editing tools, analytics platforms, scheduling apps), and most significantly, your labor time. Many creators undervalue their time, treating it as "free." However, time spent creating content has opportunity cost - you could be earning money elsewhere. A creator spending 3 hours per video who could earn $30/hour freelancing has a $90 labor cost per video, regardless of whether they "paid" themselves.
              </p>
              <p>
                Understanding production costs transforms how you approach content creation. You'll prioritize efficient workflows, batch similar content, invest in tools that save time, and critically evaluate whether certain content types are worth producing. A viral video that takes 8 hours to produce but generates $50 revenue is a terrible business decision - even if it feels like a "win" because of the views.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Production Cost Benchmarks by Creator Tier
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Beginner Creators (Phone + Free Software):</strong> Equipment: $500-1,500 (phone, basic lighting, cheap mic). Software: $0-20/month (free CapCut, basic apps). Labor: 2-4 hours per video. Total cost per video: $25-80 depending on hourly rate. At 4 videos/week, monthly costs: $400-1,280. Many beginners lose money initially but gain skills and audience.
              </p>
              <p>
                <strong>Intermediate Creators (Dedicated Equipment):</strong> Equipment: $2,000-5,000 (DSLR/mirrorless camera, quality mic, lighting kit, tripod). Software: $30-100/month (Adobe Creative Cloud, analytics tools, scheduling). Labor: 1.5-3 hours per video (improved efficiency). Cost per video: $50-120. At 5 videos/week, monthly costs: $1,000-2,400. More professional output justifies higher costs.
              </p>
              <p>
                <strong>Professional Creators (Premium Setup):</strong> Equipment: $5,000-15,000 (cinema camera, professional lighting, multiple mics, editing computer). Software: $100-300/month (full Adobe Suite, advanced analytics, premium tools). Labor: 1-2 hours per video (highly efficient workflow). Cost per video: $80-180. At 7 videos/week, monthly costs: $2,240-5,040. High production value commands premium brand deal rates.
              </p>
              <p>
                <strong>Top-Tier Creators (Outsourced Production):</strong> Equipment: $10,000-50,000+ (studio setup, multiple camera angles, professional gear). Software: $200-500/month. Labor: 30-60 mins per video (CEO-level content planning, team handles execution). Editors: $500-2,000/video outsourced. Cost per video: $550-2,200. At 10 videos/week, monthly costs: $22,000-88,000. Treated as media business with professional operations.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Hidden Production Costs Most Creators Miss
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Opportunity Cost of Time:</strong> The biggest hidden cost. If you spend 20 hours weekly creating content, that's 80+ hours monthly. At $50/hour opportunity cost (what you could earn freelancing or at a job), that's $4,000+ monthly in foregone income. Factor this into profitability calculations, especially when starting out.
              </p>
              <p>
                <strong>Space and Utilities:</strong> If filming at home, you're using space that could generate rental income. A dedicated filming area of 150 sq ft in a $2,000/month apartment costs ~$200/month allocated space cost. Add increased electricity for lighting, internet bandwidth for uploading, heating/cooling during filming sessions - easily $100-200/month in indirect costs.
              </p>
              <p>
                <strong>Props, Wardrobe, and Consumables:</strong> Beauty creators spend $200-1,000 monthly on products to review. Food creators burn $300-800 monthly on ingredients. Fashion creators buy $500-2,000 in clothing. Tech reviewers purchase $1,000-5,000 in gadgets (partially offset by resale). These are real business expenses that dramatically impact profitability.
              </p>
              <p>
                <strong>Learning and Development:</strong> Courses on content creation ($100-2,000), conferences and networking events ($500-5,000 annually), coaching or masterminds ($200-2,000 monthly). While these improve future earnings, they're current period expenses that reduce net profitability. However, they're also tax-deductible business expenses.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              8 Strategies to Reduce Production Costs
            </h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">1.</span>
                <div>
                  <strong>Master Batch Production:</strong> Film 5-10 videos in one 4-hour session rather than one video per session. This eliminates repeated setup/teardown time, wardrobe changes, location moves. Batch filming can reduce per-video time by 60-70%. A creator spending 2 hours per video can batch to 30-40 mins per video.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">2.</span>
                <div>
                  <strong>Create Reusable Templates:</strong> Build editing templates for recurring content formats. Your "weekly tips" format should have preset transitions, text styles, music. What takes 90 mins to edit from scratch takes 20 mins with templates. Invest 3-4 hours creating 5-6 templates, save hundreds of hours annually.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">3.</span>
                <div>
                  <strong>Outsource Low-Value Tasks:</strong> If your time is worth $50-100/hour, outsource editing at $15-30/video to Philippines-based editors. Your 90-minute edit becomes a 10-minute brief review. Net savings: $60-135 per video. Scale this to 20 videos monthly: $1,200-2,700 monthly time savings enabling higher-value activities.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">4.</span>
                <div>
                  <strong>Use Phone Instead of Camera Initially:</strong> Modern smartphones (iPhone 14+, Samsung S23+) produce 4K video quality sufficient for TikTok. Skip the $3,000 camera investment until you're earning $3,000+ monthly from content. Phone + $50 mic + $80 ring light = $130 professional setup versus $3,000+ traditional gear.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">5.</span>
                <div>
                  <strong>Leverage Free/Cheap Software:</strong> CapCut is free and handles 90% of TikTok editing needs. Canva free plan for thumbnails and graphics. Google Workspace ($6/month) for collaboration. Don't subscribe to Adobe Creative Cloud ($55/month) until you're making $2,000+/month and actually need advanced features.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">6.</span>
                <div>
                  <strong>Simplify Production Style:</strong> Simple talking-head videos often outperform elaborate productions. MrBeast started with basic setups. Many top creators use simple formats because they're replicable and consistent. Don't over-produce when audience cares more about content than cinematography.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">7.</span>
                <div>
                  <strong>Repurpose One Video Across Platforms:</strong> One video posted to TikTok, Instagram Reels, YouTube Shorts, and Pinterest multiplies value 4x without 4x cost. Filming time is identical. Upload time adds 5-10 minutes total. Effective cost per video per platform drops 75%.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">8.</span>
                <div>
                  <strong>Track All Costs for Tax Deductions:</strong> Every dollar spent on equipment, software, props, space, internet, education is tax-deductible. Save 25-40% on costs through deductions. Use Expensify or QuickBooks Self-Employed ($15/month) to track automatically. Most creators leave thousands in tax deductions unclaimed.
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Example: Production Cost Optimization Journey
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Creator Profile:</strong> Lifestyle content creator, started posting 3x/week, now posts 5x/week after optimization
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                <p className="font-bold text-neutral-900">Month 1-3 (Inefficient):</p>
                <p>• Equipment: $2,500 camera setup (amortized: $104/month)</p>
                <p>• Software: $65/month (Adobe + tools)</p>
                <p>• Time: 3 hours per video × $40/hour labor rate = $120/video</p>
                <p>• Videos per month: 12</p>
                <p><strong>Cost per video: $135</strong> | <strong>Monthly cost: $1,620</strong></p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2 mt-4">
                <p className="font-bold text-neutral-900">Month 6-12 (Optimized with Batch + Templates):</p>
                <p>• Equipment: Same setup (amortized: $104/month)</p>
                <p>• Software: $25/month (switched to CapCut + affordable tools)</p>
                <p>• Time: 1.2 hours per video × $40/hour = $48/video (batch filming + templates)</p>
                <p>• Videos per month: 20 (increased output)</p>
                <p><strong>Cost per video: $55</strong> | <strong>Monthly cost: $1,100</strong></p>
              </div>
              <p className="pt-4">
                <strong>Results:</strong> Reduced per-video cost by 59% ($135 → $55) while increasing output by 67% (12 → 20 videos). Monthly savings: $520 despite producing more content. Time saved: 24 hours monthly, reinvested in brand deal negotiations and strategy. This optimization enabled profitability - at $150/video average earnings, moved from $180/month profit to $2,900/month profit.
              </p>
            </div>
          </Card>

          <ToolExplanationSection
            whatItDoes="The Production Cost Calculator reveals your true cost per TikTok video by combining equipment amortization, software subscriptions, and your labor time valued at an appropriate hourly rate. It helps you understand whether your content creation is actually profitable after accounting for all expenses, not just the obvious ones."
            howToUse={[
              'Enter your total equipment costs (camera, lighting, microphone) -- these will be amortized over a 24-month lifespan.',
              'Add your monthly software subscriptions for editing tools, analytics platforms, and scheduling apps.',
              'Input the average hours you spend per video (filming, editing, planning, and posting) and your target hourly rate.',
              'Specify how many videos you produce per month to calculate the per-video cost breakdown.',
              'Compare your cost per video against your average revenue per video to determine profitability.',
            ]}
            examples={[
              { scenario: 'Beginner creator using phone and free software', input: '$500 equipment, $0/month software, 3 hours/video at $25/hr, 12 videos/month', output: 'Cost per video: $76.74 -- mostly labor cost, equipment adds only $1.74/video' },
              { scenario: 'Intermediate creator with dedicated gear and paid tools', input: '$3,000 equipment, $65/month software, 2 hours/video at $50/hr, 20 videos/month', output: 'Cost per video: $109.50 -- labor remains the largest component at $100/video' },
            ]}
            limitations={[
              'Does not include indirect costs such as internet, electricity, home office space, or rent allocation.',
              'Equipment amortization uses a fixed 24-month period, which may not match actual equipment lifespan for all gear.',
              'Your hourly rate is self-reported and may not accurately reflect true opportunity cost.',
              'Per-video costs assume uniform production effort; some videos may take significantly longer than others.',
            ]}
            relatedContent={[
              { title: 'Break Even Calculator', href: '/calculators/break-even/' },
              { title: 'Content Calendar ROI Calculator', href: '/calculators/content-calendar-roi/' },
              { title: 'Content Value Calculator', href: '/calculators/content-value/' },
            ]}
          />

          <MethodologySection
            calculatorName="production-cost"
            formula={`Labor Cost/Video = (Time in Hours) × Hourly Rate
Equipment Cost/Video = Total Equipment / 24 months / Videos/Month
Software Cost/Video = Monthly Software / Videos/Month
Total Cost/Video = Labor + Equipment + Software

Example:
Equipment: $2,000 → $2,000/24/20 = $4.17/video
Software: $50/month → $50/20 = $2.50/video
Labor: 2 hours × $50 = $100/video
Total: $106.67 per video`}
            assumptions={[
              { label: 'Equipment Lifespan', value: 'Equipment costs amortized over 24 months (2 years)' },
              { label: 'Time Value', value: 'Your hourly rate should reflect opportunity cost' },
              { label: 'Break-Even', value: 'Calculated at $0.03 RPM (typical Creator Fund rate)' },
            ]}
            dataSources={[
              'Creator Business Expense Study',
              'Content Production Benchmark Report',
              'Freelance Rate Guidelines 2024',
            ]}
            limitations="Does not include indirect costs (internet, electricity, space rental). Adjust hourly rate based on your market and opportunity cost."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Production Cost Calculator"
            faqs={[
              {
                question: 'What should my hourly rate be?',
                answer: '**Base your hourly rate on 3 factors (your opportunity cost, market rates for video editors, and your experience level).** Market rates for video editors range from $25 to $100 per hour. Beginners: $20 to $40 per hour. Experienced: $50 to $100 per hour. Professionals: $100 to $200 per hour.',
              },
              {
                question: 'How can I reduce production costs?',
                answer: '**Use 6 strategies to reduce production costs.** Batch film by shooting 5 to 10 videos in one session. Use templates. Improve efficiency with practice. Outsource editing at $10 to $30 per video. Use a phone instead of an expensive camera. Leverage free tools like CapCut and the free Canva plan.',
              },
              {
                question: 'Are production costs tax deductible?',
                answer: '**Yes, production costs are tax deductible.** As a content creator, equipment, software, props, home office, and internet are deductible business expenses. Keep receipts and consult a Certified Public Accountant (CPA) for specific guidance. Deductions reduce your taxable income.',
              },
              {
                question: 'When should I upgrade equipment?',
                answer: '**Upgrade when 4 conditions are met.** Current equipment limits quality or creativity. You justify ROI by earning enough to cover costs in 3 to 6 months. The tax deduction makes sense. Clients and brands expect higher production value. Do not upgrade just to upgrade.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="production-cost"
            calculators={[
              { name: 'Break Even Calculator', slug: 'break-even', description: 'Calculate profitability including costs', icon: 'Scale' },
              { name: 'Creator Tax Calculator', slug: 'utility-tools/tax', description: 'Estimate tax deductions from expenses', icon: 'ClipboardList' },
              { name: 'Content Value Calculator', slug: 'content-value', description: 'Compare costs vs content value', icon: 'Gem' },
            ]}
          />

          <div className="mt-12">
            <PageEEAT pageSlug="production-cost" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
