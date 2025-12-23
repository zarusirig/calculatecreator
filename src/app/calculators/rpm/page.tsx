'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, DollarSign, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { calculateRPM, validateRPMInput } from '@/lib/calculators/rpm';
import type { RPMInput, RPMResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function RPMCalculatorPage() {
  const [inputs, setInputs] = useState<RPMInput>({ views: 100000, earnings: 3.00 });
  const [results, setResults] = useState<RPMResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  // FAQ data for schema markup
  const faqData = [
    {
      question: 'What is a good RPM on TikTok?',
      answer: 'TikTok Creator Fund RPM ranges from $0.02-$0.04 per 1K views ($20-$40 per million views). RPM above $0.035 is considered good, while $0.045+ is excellent. Finance and tech niches often see higher RPM ($0.05-$0.08), while entertainment sees lower ($0.015-$0.025).'
    },
    {
      question: 'Why is TikTok RPM so low compared to YouTube?',
      answer: 'TikTok RPM is 10-20× lower than YouTube because: (1) Shorter videos = less ad inventory, (2) Younger audience with lower purchasing power, (3) Less advertiser demand, (4) Different monetization model (Creator Fund vs direct ads). YouTube RPM: $2-$10, TikTok RPM: $0.02-$0.04.'
    },
    {
      question: 'How can I increase my TikTok RPM?',
      answer: 'Strategies to boost RPM: (1) Target high-CPM niches (finance, tech, business), (2) Attract US/UK/Canada viewers (higher ad rates), (3) Create longer videos (60+ seconds when possible), (4) Post during peak hours for premium ad inventory, (5) Maintain high watch time (algorithmic boost).'
    },
    {
      question: 'Is RPM the same as CPM?',
      answer: 'No. RPM (Revenue Per Mille) = YOUR earnings per 1K views. CPM (Cost Per Mille) = what ADVERTISERS pay per 1K impressions. TikTok keeps 50-70% as platform fees, so creator RPM is much lower than advertiser CPM. If CPM is $5, creator RPM might be $2.'
    },
  ];

  const handleInputChange = (field: keyof RPMInput, value: any) => {
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
    const validation = validateRPMInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateRPM(inputs);
      setResults(result);
      trackCalculation('rpm', { ...inputs }, { rpm: result.rpm, benchmark: result.benchmark });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'RPM Calculator', href: '/calculators/rpm' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-DEFAULT text-white mb-6">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok RPM Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">Calculate your revenue per 1,000 views (RPM) to understand your earning efficiency and compare to industry benchmarks.</p>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
            Calculate your <Link href="/calculators/tiktok-creator-fund" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">TikTok Creator Fund earnings</Link> or learn <Link href="/guides/maximize-creator-fund-rpm" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">how to maximize your TikTok RPM rate</Link> for higher payouts.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Your RPM</h2>

            <InputField id="views" label="Total Views" type="number" value={inputs.views} onChange={(value) => handleInputChange('views', value)} placeholder="e.g., 100000" helperText="Total video views for the period" error={errors.views} min={1000} required />

            <InputField id="earnings" label="Total Earnings ($)" type="number" value={inputs.earnings} onChange={(value) => handleInputChange('earnings', value)} placeholder="e.g., 3.00" helperText="Total earnings from those views" error={errors.earnings} min={0} step={0.01} required />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">Calculate RPM</Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay results={results} type="single" format="currency" title="Your RPM" subtitle={`${results.benchmark.toUpperCase()} benchmark`} />
                {results.additionalMetrics && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <p className="text-label-md text-neutral-600 mb-1">Earnings/View</p>
                      <p className="text-heading-md font-semibold text-neutral-900">${results.additionalMetrics.earningsPerView}</p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <p className="text-label-md text-neutral-600 mb-1">Views for $100</p>
                      <p className="text-heading-md font-semibold text-neutral-900">{(results.additionalMetrics.viewsNeededFor100 as number).toLocaleString()}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          {/* Understanding RPM Section */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Understanding TikTok RPM (Revenue Per Mille)</h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-body-md text-neutral-700 mb-4">
                RPM, or Revenue Per Mille (Latin for "thousand"), is one of the most critical metrics for content creators on TikTok. It represents how much money you earn for every 1,000 views your content receives. Unlike raw view counts, RPM gives you a clear picture of your earning efficiency and helps you understand the true value of your content.
              </p>
              <p className="text-body-md text-neutral-700 mb-4">
                For TikTok creators, RPM is particularly important because it accounts for the platform's unique monetization structure. While YouTube creators enjoy higher RPMs due to direct ad placements, TikTok's Creator Fund operates differently, resulting in significantly lower RPM rates. Understanding your RPM helps you make informed decisions about content strategy, niche selection, and whether additional revenue streams like brand deals are necessary.
              </p>
              <p className="text-body-md text-neutral-700">
                The RPM calculation is straightforward: divide your total earnings by your total views, then multiply by 1,000. However, interpreting this number and optimizing it requires understanding various factors including content niche, audience demographics, video length, engagement rates, and posting times.
              </p>
            </div>
          </Card>

          {/* RPM Benchmarks by Niche */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">TikTok RPM Benchmarks by Niche (2025)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Content Niche</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Average RPM</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Annual Earnings/1M Views</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Finance & Investing</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.05 - $0.08</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$50 - $80</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-success-light text-success-dark rounded">Excellent</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Tech & Business</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.045 - $0.07</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$45 - $70</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-success-light text-success-dark rounded">Excellent</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Education & Tutorials</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.035 - $0.055</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$35 - $55</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-primary-light text-primary-dark rounded">Good</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Lifestyle & Vlogs</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.025 - $0.04</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$25 - $40</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-warning-light text-warning-dark rounded">Average</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Comedy & Entertainment</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.02 - $0.035</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$20 - $35</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-warning-light text-warning-dark rounded">Average</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Dance & Music</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.015 - $0.03</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$15 - $30</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-danger-light text-danger-dark rounded">Below Average</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Gaming</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">$0.018 - $0.032</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$18 - $32</td>
                    <td className="py-3 px-4"><span className="inline-flex px-2 py-1 text-xs font-medium bg-warning-light text-warning-dark rounded">Average</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-neutral-600 mt-4 italic">
              Data compiled from creator surveys, industry reports, and TikTok Creator Fund analytics from January-November 2025. Individual results may vary based on audience demographics, engagement rates, and content quality.
            </p>
          </Card>

          {/* RPM vs CPM Comparison */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">RPM vs CPM: Understanding the Difference</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-primary-light rounded-lg border border-primary-200">
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">CPM (Cost Per Mille)</h3>
                <p className="text-body-sm text-neutral-700 mb-4">
                  CPM represents what advertisers pay to TikTok per 1,000 ad impressions. This is the gross revenue before TikTok takes its platform fee.
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Advertiser perspective</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Higher than RPM (typically $3-$10)</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>TikTok's gross revenue</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Not visible to creators</span></li>
                </ul>
              </div>
              <div className="p-6 bg-success-light rounded-lg border border-success-200">
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">RPM (Revenue Per Mille)</h3>
                <p className="text-body-sm text-neutral-700 mb-4">
                  RPM represents what creators actually earn per 1,000 views after TikTok takes its platform fee (typically 50-70%).
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Creator perspective</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Lower than CPM ($0.02-$0.08)</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Your actual earnings</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Visible in analytics</span></li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm text-neutral-700">
                <strong>Example:</strong> If an advertiser pays TikTok a CPM of $5.00, and TikTok keeps 60% as platform fees, the creator receives $2.00 per 1,000 impressions (RPM of $2.00). On TikTok Creator Fund, the revenue share is even less favorable, with creators typically earning $0.02-$0.04 per 1,000 views.
              </p>
            </div>
          </Card>

          {/* Geographic RPM Differences */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">RPM by Geographic Location</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Your audience's location significantly impacts your RPM. Advertisers pay premium rates for audiences in countries with higher purchasing power and more competitive ad markets.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Region/Country</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">RPM Multiplier</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Estimated RPM Range</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Ad Market</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">United States</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">1.5x - 2.0x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.045 - $0.08</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Premium</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Canada, UK, Australia</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">1.3x - 1.7x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.039 - $0.068</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">High</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Western Europe (FR, DE, NL)</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">1.2x - 1.5x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.036 - $0.06</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">High</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Global Average (Baseline)</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">1.0x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.02 - $0.04</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Standard</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Latin America</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">0.5x - 0.8x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.01 - $0.032</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Developing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">Southeast Asia</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">0.4x - 0.7x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.008 - $0.028</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Developing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">India, Africa</td>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">0.3x - 0.5x</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.006 - $0.02</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Emerging</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* 10 Proven Strategies to Increase RPM */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">10 Proven Strategies to Increase Your TikTok RPM</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-success-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">1. Target High-CPM Niches</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Content about finance, investing, real estate, business, and technology attracts advertisers willing to pay premium rates. A finance creator can earn 3-4x more per view than an entertainment creator.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 50-200%</p>
              </div>

              <div className="border-l-4 border-success-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">2. Optimize for Premium Geographic Audiences</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Create content that appeals to audiences in the US, Canada, UK, and Australia. Use English language, reference local events, and post during peak hours in these time zones (6-10 PM EST/PST).
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 30-100%</p>
              </div>

              <div className="border-l-4 border-success-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">3. Create Longer-Form Content</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  While TikTok started as a short-form platform, videos over 60 seconds (especially 1-3 minutes) now have more ad placement opportunities and higher RPM. The algorithm also favors watch time, not just completion rate.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 20-50%</p>
              </div>

              <div className="border-l-4 border-primary-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">4. Maximize Average View Duration</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Use hooks in the first 3 seconds, pattern interrupts every 5-7 seconds, and cliffhangers to keep viewers watching. Higher retention signals quality content to the algorithm, leading to better ad placements.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 15-40%</p>
              </div>

              <div className="border-l-4 border-primary-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">5. Post During Peak Advertiser Hours</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Advertisers bid more aggressively during business hours and early evening (9 AM - 11 PM local time, especially Tuesday-Thursday). Your RPM can be 25-50% higher than posting at 3 AM.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 25-50%</p>
              </div>

              <div className="border-l-4 border-primary-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">6. Focus on Older Demographics</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Content targeting 25-45 year-olds (millennials with disposable income) commands higher RPM than Gen-Z focused content. Advertisers pay more for audiences with purchasing power.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 30-70%</p>
              </div>

              <div className="border-l-4 border-warning-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">7. Increase Engagement Rates</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Videos with high comment rates, shares, and saves signal valuable content. Ask questions, create controversial (but appropriate) takes, and encourage saves with educational content.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 10-30%</p>
              </div>

              <div className="border-l-4 border-warning-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">8. Maintain Consistent Upload Schedule</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Accounts that post consistently (daily or 3-5x/week) receive better treatment from the algorithm and more stable RPM. Sporadic posting leads to unpredictable earnings.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 15-25%</p>
              </div>

              <div className="border-l-4 border-warning-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">9. Avoid Controversial Content That Limits Ads</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Content about politics, alcohol, gambling, or sensitive topics may be demonetized or show fewer ads. Brand-safe content receives full ad inventory and maximum RPM.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 20-60% (if currently limited)</p>
              </div>

              <div className="border-l-4 border-warning-DEFAULT pl-4">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">10. Build a Loyal, Returning Audience</h3>
                <p className="text-body-sm text-neutral-700 mb-2">
                  Create series content, consistent branding, and encourage follows. Returning viewers have higher watch time and engagement, both of which boost RPM. Aim for 40%+ of views from followers.
                </p>
                <p className="text-body-sm text-neutral-600 italic">Expected RPM increase: 10-20%</p>
              </div>
            </div>
          </Card>

          {/* Common Mistakes That Lower RPM */}
          <Card className="bg-danger-light border-danger-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Common Mistakes That Tank Your RPM</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                  <X className="mr-2 text-danger-DEFAULT" size={20} />
                  Using Copyrighted Music Extensively
                </h3>
                <p className="text-body-sm text-neutral-700">
                  While TikTok allows copyrighted music, it can limit ad placements and reduce your RPM by 30-50%. Original audio or royalty-free music maximizes monetization.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                  <X className="mr-2 text-danger-DEFAULT" size={20} />
                  Chasing Viral Trends Without Niche Focus
                </h3>
                <p className="text-body-sm text-neutral-700">
                  Viral videos attract low-intent viewers who don't engage with ads. A focused niche with engaged followers delivers better RPM than random viral hits.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                  <X className="mr-2 text-danger-DEFAULT" size={20} />
                  Posting Only Short 7-15 Second Videos
                </h3>
                <p className="text-body-sm text-neutral-700">
                  These videos have minimal ad inventory and lower RPM. Mix in 45-90 second videos for better monetization while maintaining engagement.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                  <X className="mr-2 text-danger-DEFAULT" size={20} />
                  Ignoring Analytics and Audience Demographics
                </h3>
                <p className="text-body-sm text-neutral-700">
                  Not knowing where your audience is located or what they engage with means you can't optimize for higher RPM markets or content types.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                  <X className="mr-2 text-danger-DEFAULT" size={20} />
                  Buying Fake Views or Engagement
                </h3>
                <p className="text-body-sm text-neutral-700">
                  Fake traffic doesn't convert for advertisers, leading to severely reduced RPM (often drops to $0.005-$0.01). TikTok's algorithm can detect and penalize this.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                  <X className="mr-2 text-danger-DEFAULT" size={20} />
                  Creating Clickbait with Poor Watch Time
                </h3>
                <p className="text-body-sm text-neutral-700">
                  Misleading thumbnails or hooks cause viewers to leave quickly. Low average view duration (below 25%) can reduce your RPM by 40-60%.
                </p>
              </div>
            </div>
          </Card>

          {/* TikTok vs Other Platforms RPM Comparison */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">TikTok RPM vs Other Platforms (2025)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Platform</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Average RPM</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Earnings per 1M Views</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Monetization Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">YouTube (Long-form)</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$2.00 - $10.00</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$2,000 - $10,000</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Direct ads (55% rev share)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">YouTube Shorts</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.05 - $0.15</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$50 - $150</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Shorts Fund (pooled)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">Instagram Reels</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.03 - $0.10</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$30 - $100</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Reels Bonus (varies)</td>
                  </tr>
                  <tr className="bg-primary-light">
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">TikTok Creator Fund</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.02 - $0.04</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$20 - $40</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Creator Fund (pooled)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">Facebook Videos</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$1.00 - $5.00</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$1,000 - $5,000</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">In-stream ads</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-medium text-neutral-900">Snapchat Spotlight</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$0.01 - $0.05</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-700">$10 - $50</td>
                    <td className="py-3 px-4 text-body-sm text-neutral-600">Spotlight Fund</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-neutral-600 mt-4">
              <strong>Key Takeaway:</strong> TikTok's RPM is 50-250x lower than YouTube long-form content but comparable to other short-form platforms. This is why successful TikTok creators typically rely on brand deals, merchandise, and other revenue streams beyond the Creator Fund.
            </p>
          </Card>

          {/* Understanding RPM Fluctuations */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Why Does My RPM Fluctuate?</h2>
            <div className="space-y-4">
              <p className="text-body-md text-neutral-700">
                Many creators notice their RPM varies significantly from day to day or month to month. This is normal and caused by several factors:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Seasonal Advertiser Demand</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    RPM is highest in Q4 (October-December) due to holiday shopping. Expect 30-50% higher RPM in November-December compared to January-February.
                  </p>
                  <p className="text-body-xs text-neutral-600">Peak: Nov-Dec | Low: Jan-Feb</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Audience Demographics Shifts</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    A viral video might attract different demographics than your usual audience, temporarily changing your RPM up or down by 20-40%.
                  </p>
                  <p className="text-body-xs text-neutral-600">Impact: -40% to +40%</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Creator Fund Pool Changes</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    TikTok's Creator Fund has a limited pool. When more creators join or total views increase, individual RPM decreases. This is why RPM has gradually declined since 2021.
                  </p>
                  <p className="text-body-xs text-neutral-600">Trend: Declining over time</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Content Performance Variance</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Higher watch time, better engagement, and longer videos naturally earn higher RPM. Your RPM fluctuates based on how well individual videos perform.
                  </p>
                  <p className="text-body-xs text-neutral-600">Impact: -30% to +50%</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Geographic View Distribution</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    If one video gets more views from high-RPM countries (US, UK) while another trends in low-RPM regions (India, Southeast Asia), your average RPM will fluctuate.
                  </p>
                  <p className="text-body-xs text-neutral-600">Impact: -50% to +100%</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Ad Inventory Availability</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    During economic downturns or advertiser budget cuts, overall ad spending decreases, leading to lower RPM across all creators.
                  </p>
                  <p className="text-body-xs text-neutral-600">External factor</p>
                </div>
              </div>

              <div className="p-4 bg-primary-light rounded-lg border border-primary-200 mt-4">
                <p className="text-body-sm text-neutral-900">
                  <strong>Pro Tip:</strong> Track your RPM over 30-90 day periods rather than daily. This smooths out fluctuations and gives you a more accurate picture of your earning potential.
                </p>
              </div>
            </div>
          </Card>

          {/* Advanced RPM Optimization Techniques */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Advanced RPM Optimization Techniques</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">A/B Testing Content Formats</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Test different video lengths, editing styles, and content angles to identify what generates the highest RPM for your niche. Track not just views, but earnings per video.
                </p>
                <div className="p-3 bg-neutral-50 rounded text-body-xs text-neutral-600">
                  Example: A finance creator tested 30-second vs 90-second videos on the same topic. The 90-second videos had 40% fewer views but 2.1x higher total earnings due to 3x higher RPM.
                </div>
              </div>

              <div>
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Strategic Cross-Posting</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  While you should post on TikTok first for maximum algorithmic reach, repurposing your best content to YouTube Shorts (higher RPM) and Instagram Reels can significantly increase overall revenue per piece of content.
                </p>
                <div className="p-3 bg-neutral-50 rounded text-body-xs text-neutral-600">
                  Strategy: Post to TikTok → Wait 48 hours → Post to YouTube Shorts and IG Reels. This maximizes revenue without cannibalizing TikTok performance.
                </div>
              </div>

              <div>
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Audience Segmentation</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Create separate content series targeting different audience segments. Your "101" beginner content will likely have lower RPM than advanced, niche-specific content targeting experienced viewers.
                </p>
                <div className="p-3 bg-neutral-50 rounded text-body-xs text-neutral-600">
                  Example split: 60% content targeting premium demographics (higher RPM but smaller reach) + 40% beginner content (lower RPM but builds follower base).
                </div>
              </div>

              <div>
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Seasonal Content Planning</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Plan content calendars around high-RPM periods. Create more premium content in Q4 (October-December) when advertiser spending peaks, and use Q1 (January-March) for experimentation and audience building.
                </p>
                <div className="p-3 bg-neutral-50 rounded text-body-xs text-neutral-600">
                  Q4 Strategy: Post 5-7x/week with longer, higher-quality videos. Q1-Q3: Post 3-5x/week, test new formats, focus on follower growth over immediate monetization.
                </div>
              </div>

              <div>
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Strategic Collaboration</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Partner with creators who have audiences in high-RPM markets or niches. A lifestyle creator collaborating with a finance creator can temporarily boost their RPM by exposing content to a higher-value audience.
                </p>
                <div className="p-3 bg-neutral-50 rounded text-body-xs text-neutral-600">
                  Best matches: Collaborate with creators in similar or complementary niches who have slightly more premium audiences than yours.
                </div>
              </div>
            </div>
          </Card>

          {/* When RPM Doesn't Matter */}
          <Card className="bg-warning-light border-warning-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">When RPM Doesn't Matter (And What Does)</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              While optimizing RPM is important, many successful TikTok creators don't rely primarily on Creator Fund earnings. Here's when to focus on other metrics:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">For Brand Deal Focused Creators</h3>
                <p className="text-body-sm text-neutral-700">
                  Focus on: Follower count, engagement rate, audience demographics. A creator with $50/month Creator Fund earnings but 100K engaged followers can earn $5,000-$20,000/month from brand deals.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">For Product/Service Sellers</h3>
                <p className="text-body-sm text-neutral-700">
                  Focus on: Click-through rates, conversion rates, and sales attribution. Creator Fund earnings become a bonus, not the primary revenue source.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">For Small/Growing Accounts</h3>
                <p className="text-body-sm text-neutral-700">
                  Focus on: Growth rate, follower quality, and content consistency. Don't obsess over RPM until you're earning $100+/month from Creator Fund. Early stage = audience building.
                </p>
              </div>
            </div>
          </Card>

          <MethodologySection calculatorName="rpm" formula={`RPM = (Total Earnings / Total Views) × 1000

Example:
Views: 100,000
Earnings: $3.00
RPM: ($3.00 / 100,000) × 1000 = $0.030`} assumptions={[{ label: 'Benchmarks', value: 'Excellent: $0.04+, Good: $0.03-0.04, Average: $0.02-0.03, Below: <$0.02' }]} dataSources={['Creator Fund data', 'Industry averages 2024']} limitations="RPM varies by niche, audience location, and engagement." lastUpdated="December 5, 2025" />

          <FAQSection pageName="RPM Calculator" faqs={faqData} />

          <RelatedCalculators currentCalculator="rpm" calculators={[{ name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Estimate Creator Fund earnings', icon: DollarSign }]} />

          {/* Disclaimer */}
          <Card className="bg-neutral-100 border-neutral-300">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">Professional Disclaimer</h2>
            <p className="text-body-sm text-neutral-700 mb-3">
              The RPM benchmarks, strategies, and earnings estimates provided on this page are for educational purposes only and based on aggregated industry data, creator surveys, and publicly available information as of December 2025. Individual results will vary significantly based on content niche, audience demographics, geographic location, video performance, seasonal factors, and TikTok's evolving algorithms and policies.
            </p>
            <p className="text-body-sm text-neutral-700 mb-3">
              TikTok does not publicly disclose detailed Creator Fund payment formulas or guarantee specific RPM rates. The platform reserves the right to modify Creator Fund terms, eligibility requirements, and payment structures at any time. Past performance and benchmarks do not guarantee future earnings.
            </p>
            <p className="text-body-sm text-neutral-700">
              This calculator and guide are independent resources not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, or any of their subsidiaries. Always refer to TikTok's official Creator Fund documentation and terms of service for authoritative information about monetization policies.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
