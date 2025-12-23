'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateProductionCost,
  validateProductionCostInput,
} from '@/lib/calculators/production-cost';
import type {
  ProductionCostInput,
  ProductionCostResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Scale, ClipboardList, Camera, Gem } from 'lucide-react';

export default function ProductionCostCalculatorPage() {
  const [inputs, setInputs] = useState<ProductionCostInput>({
    equipmentCost: 2000,
    softwareCost: 50,
    timePerVideo: 120,
    hourlyRate: 50,
    videosPerMonth: 20,
  });

  const [results, setResults] = useState<ProductionCostResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ProductionCostInput,
    value: any
  ) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateProductionCostInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateProductionCost(inputs);
      setResults(result);

      trackCalculation(
        'production-cost',
        { ...inputs },
        { costPerVideo: result.costPerVideo, monthlyCost: result.monthlyCost }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Production Cost Calculator',
              href: '/calculators/production-cost',
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
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your true cost per video including equipment, software, and
            time investment. Essential for pricing and profitability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Production Costs
            </h2>

            <InputField
              id="equipmentCost"
              label="Equipment Cost ($)"
              type="number"
              value={inputs.equipmentCost}
              onChange={(value) => handleInputChange('equipmentCost', value)}
              placeholder="e.g., 2000"
              helperText="One-time equipment investment"
              error={errors.equipmentCost}
              min={0}
              required
            />

            <InputField
              id="softwareCost"
              label="Monthly Software Cost ($)"
              type="number"
              value={inputs.softwareCost}
              onChange={(value) => handleInputChange('softwareCost', value)}
              placeholder="e.g., 50"
              helperText="Subscriptions and software"
              error={errors.softwareCost}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="timePerVideo"
              label="Time per Video (minutes)"
              type="number"
              value={inputs.timePerVideo}
              onChange={(value) => handleInputChange('timePerVideo', value)}
              placeholder="e.g., 120"
              helperText="Total production time per video"
              error={errors.timePerVideo}
              min={1}
              required
            />

            <InputField
              id="hourlyRate"
              label="Your Hourly Rate ($)"
              type="number"
              value={inputs.hourlyRate}
              onChange={(value) => handleInputChange('hourlyRate', value)}
              placeholder="e.g., 50"
              helperText="Value of your time per hour"
              error={errors.hourlyRate}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="videosPerMonth"
              label="Videos per Month"
              type="number"
              value={inputs.videosPerMonth}
              onChange={(value) => handleInputChange('videosPerMonth', value)}
              placeholder="e.g., 20"
              helperText="Monthly video output"
              error={errors.videosPerMonth}
              min={1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Costs
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="currency"
                  title="Cost per Video"
                  subtitle={`$${results.monthlyCost.toLocaleString()} monthly`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Cost Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Annual Cost
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.annualCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Break-Even Views/Video
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.breakEvenViews.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

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
                answer: 'Base it on: (1) Your opportunity cost (what else you could earn), (2) Market rates for video editors ($25-100/hr), (3) Your experience level. Beginners: $20-40/hr, Experienced: $50-100/hr, Professionals: $100-200/hr.',
              },
              {
                question: 'How can I reduce production costs?',
                answer: 'Batch filming (shoot 5-10 videos in one session), use templates, improve efficiency with practice, outsource editing ($10-30/video), use phone instead of expensive camera, leverage free tools (CapCut, Canva free plan).',
              },
              {
                question: 'Are production costs tax deductible?',
                answer: 'Yes! As a content creator, equipment, software, props, home office, and internet are typically deductible business expenses. Keep receipts and consult a CPA for specific guidance. Deductions reduce your taxable income.',
              },
              {
                question: 'When should I upgrade equipment?',
                answer: 'Upgrade when: (1) Current equipment limits quality/creativity, (2) You can justify ROI (earning enough to cover costs in 3-6 months), (3) Tax deduction makes sense, (4) Clients/brands expect higher production value. Don\'t upgrade just to upgrade.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="production-cost"
            calculators={[
              { name: 'Break Even Calculator', slug: 'break-even', description: 'Calculate profitability including costs', icon: Scale },
              { name: 'Creator Tax Calculator', slug: 'creator-tax', description: 'Estimate tax deductions from expenses', icon: ClipboardList },
              { name: 'Content Value Calculator', slug: 'content-value', description: 'Compare costs vs content value', icon: Gem },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
