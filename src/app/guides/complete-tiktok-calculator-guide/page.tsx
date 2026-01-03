import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { DollarSign, BarChart3, TrendingUp, Target, Handshake, ChartBar, Rocket, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to TikTok Calculators 2025 | 9 Free Tools for Creators',
  description: 'Master TikTok success with our comprehensive guide to 9 calculators. From earnings and engagement to business ROI - everything you need.',
  keywords: ['tiktok calculators', 'creator tools', 'tiktok earnings calculator', 'engagement calculator', 'brand deal calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/complete-tiktok-calculator-guide/',
  },
};

export default function CompleteTikTokCalculatorGuidePage() {
  const calculatorCategories = [
    {
      name: 'Earnings & Revenue Calculators',
      description: 'Calculate your potential income from every TikTok monetization stream',
      icon: 'DollarSign',
      calculators: [
        { name: 'Creator Fund Calculator', href: '/calculators/tiktok-creator-fund', description: 'Estimate earnings from TikTok Creator Fund based on views, engagement, and audience location' },
        { name: 'Brand Deal Rate Calculator', href: '/calculators/brand-deal-rate', description: 'Determine your fair market value for sponsored content and partnerships' },
        { name: 'LIVE Gifts Calculator', href: '/calculators/live-gifts', description: 'Project income from virtual gifts during live streams' },
        { name: 'Shop Commission Calculator', href: '/calculators/shop-commission', description: 'Calculate affiliate earnings from TikTok Shop product promotions' },
        { name: 'RPM Calculator', href: '/calculators/rpm', description: 'Analyze your revenue per thousand views for optimization' },
      ]
    },
    {
      name: 'Engagement & Growth Calculators',
      description: 'Measure and optimize your content performance metrics',
      icon: 'BarChart3',
      calculators: [
        { name: 'Engagement Rate Calculator', href: '/calculators/engagement-rate', description: 'Calculate your true engagement rate across all interactions' },
        { name: 'Follower Growth Calculator', href: '/calculators/follower-growth', description: 'Project follower growth and set realistic milestones' },
        { name: 'Hashtag Performance Analyzer', href: '/calculators/hashtag-performance', description: 'Evaluate hashtag effectiveness for reach optimization' },
      ]
    },
    {
      name: 'Business & ROI Calculators',
      description: 'Make data-driven decisions for marketing investments',
      icon: 'TrendingUp',
      calculators: [
        { name: 'Cost Per Result Calculator', href: '/calculators/cost-per-result', description: 'Track efficiency of advertising spend' },
      ]
    },
  ];

  const whyUseCalculators = [
    {
      title: 'Make Data-Driven Decisions',
      description: 'Replace guesswork with concrete numbers. Our calculators use real industry data and creator surveys to provide accurate estimates for every aspect of your TikTok business.',
      icon: 'Target'
    },
    {
      title: 'Negotiate Better Deals',
      description: 'Know your worth before brand negotiations. Our calculators help you understand fair market rates based on your actual metrics, ensuring you never undersell your influence.',
      icon: 'Handshake'
    },
    {
      title: 'Track Progress Over Time',
      description: 'Benchmark your performance against industry standards and track improvement. Understanding metrics like engagement rate and RPM helps you optimize your content strategy.',
      icon: 'ChartBar'
    },
    {
      title: 'Plan for Growth',
      description: 'Set realistic goals with projection calculators. Whether you are aiming for monetization thresholds or planning revenue targets, data helps you create achievable roadmaps.',
      icon: 'Rocket'
    },
  ];

  const howToUseEffectively = [
    {
      step: 1,
      title: 'Start with Engagement Rate',
      description: 'Your engagement rate is the foundation metric that influences everything else. Calculate it first to understand your baseline performance and how you compare to industry benchmarks.',
      tip: 'Good engagement rates on TikTok range from 4-8%. If yours is below 4%, focus on content quality before worrying about monetization.'
    },
    {
      step: 2,
      title: 'Assess Your Earning Potential',
      description: 'Use the Creator Fund, Brand Deal, and LIVE calculators to understand your total earning potential across all revenue streams. This helps you prioritize which monetization methods deserve your attention.',
      tip: 'Most creators earn more from brand deals than Creator Fund once they hit 10K+ followers.'
    },
    {
      step: 3,
      title: 'Optimize Content Strategy',
      description: 'Use the Best Time to Post and Video Length calculators to optimize when and how you post. Small improvements in timing can significantly impact your reach and engagement.',
      tip: 'Test posting at different times for 2-4 weeks and track results before making permanent changes.'
    },
    {
      step: 4,
      title: 'Track ROI on Efforts',
      description: 'For businesses and serious creators, use ROI and cost calculators to ensure your TikTok efforts are profitable. Track which content types and partnerships deliver the best returns.',
      tip: 'Calculate ROI monthly to identify trends and adjust strategy accordingly.'
    },
  ];

  const calculatorMistakes = [
    {
      mistake: 'Using only one calculator',
      why: 'TikTok success requires understanding multiple metrics working together. Engagement affects earnings, timing affects engagement, content quality affects everything.',
      fix: 'Use calculators holistically - check 3-4 related metrics to get the full picture.'
    },
    {
      mistake: 'Ignoring benchmarks',
      why: 'Raw numbers mean nothing without context. 100K views might be amazing for some niches but below average for others.',
      fix: 'Always compare your results to the benchmark ranges provided for your follower tier and niche.'
    },
    {
      mistake: 'Calculating once and forgetting',
      why: 'TikTok metrics fluctuate constantly. What was true last month might not apply today.',
      fix: 'Recalculate key metrics monthly to track trends and catch issues early.'
    },
    {
      mistake: 'Focusing only on earnings',
      why: 'Chasing money without building engagement leads to burnout and stagnant growth.',
      fix: 'Balance earnings calculators with growth and engagement tools for sustainable success.'
    },
  ];

  const creatorJourneyStages = [
    {
      stage: 'Beginner (0-1K followers)',
      focus: 'Building Foundation',
      recommendedCalculators: ['Engagement Rate', 'Hashtag Performance'],
      goal: 'Focus on content quality and consistency. Use engagement calculator to track improvement and timing tools to maximize reach.',
      monthlyChecklist: ['Calculate engagement rate weekly', 'Analyze top 5 hashtag combinations']
    },
    {
      stage: 'Growing (1K-10K followers)',
      focus: 'Monetization Preparation',
      recommendedCalculators: ['Engagement Rate', 'Creator Fund', 'Follower Growth'],
      goal: 'Prepare for monetization while maintaining growth momentum. Start understanding earning potential.',
      monthlyChecklist: ['Track follower growth velocity', 'Project Creator Fund earnings', 'Benchmark engagement against peers']
    },
    {
      stage: 'Established (10K-100K followers)',
      focus: 'Revenue Optimization',
      recommendedCalculators: ['Brand Deal Rate', 'RPM', 'LIVE Gifts', 'Shop Commission'],
      goal: 'Maximize earnings across all revenue streams. Use rate calculators for brand negotiations.',
      monthlyChecklist: ['Update brand deal rate card', 'Compare RPM across content types', 'Test LIVE streaming for gifts']
    },
    {
      stage: 'Professional (100K+ followers)',
      focus: 'Business Scaling',
      recommendedCalculators: ['All earnings calculators'],
      goal: 'Run TikTok as a business. Track ROI, plan campaigns, and optimize for sustainable income.',
      monthlyChecklist: ['Full revenue breakdown by source', 'Quarterly earning projections']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-primary-600">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Complete Calculator Guide</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 py-16">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-monetization-640.avif 640w, /guides/guide-monetization-1024.avif 1024w, /guides/guide-monetization-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-monetization-640.webp 640w, /guides/guide-monetization-1024.webp 1024w, /guides/guide-monetization-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-monetization-1024.webp"
              alt="Featured image for Complete Guide to TikTok Calculators 2025"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
            9 Free Tools for TikTok Success
          </span>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Complete Guide to TikTok Calculators 2025
          </h1>
          <p className="text-heading-md text-white/90 mb-8 max-w-2xl mx-auto">
            Master every aspect of TikTok success with data-driven insights. From earnings estimation to engagement optimization, these calculators help creators make smarter decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/calculators" className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
              Browse All Calculators
            </Link>
            <Link href="#how-to-use" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors">
              Learn How to Use
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-12">
        {/* Why Use Calculators */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Why Use TikTok Calculators?
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              In the competitive world of TikTok content creation, success is not just about going viral - it is about making informed decisions that compound over time. Our suite of 34 calculators transforms complex metrics into actionable insights, helping you understand exactly where you stand and what steps to take next.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyUseCalculators.map((reason, idx) => {
                const IconComponent = reason.icon === 'Target' ? Target : reason.icon === 'Handshake' ? Handshake : reason.icon === 'ChartBar' ? ChartBar : Rocket;
                return (
                  <div key={idx} className="p-6 bg-neutral-50 rounded-xl">
                    <IconComponent className="w-10 h-10 mb-4 text-primary-600" />
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">{reason.title}</h3>
                    <p className="text-body-md text-neutral-700">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        {/* Calculator Categories */}
        <section>
          <h2 className="text-heading-xl font-bold text-neutral-900 mb-8 text-center">
            All 9 Calculators by Category
          </h2>
          <div className="space-y-8">
            {calculatorCategories.map((category, idx) => {
              const CategoryIcon = category.icon === 'DollarSign' ? DollarSign : category.icon === 'BarChart3' ? BarChart3 : TrendingUp;
              return (
                <Card key={idx}>
                  <div className="flex items-start gap-4 mb-6">
                    <CategoryIcon className="w-10 h-10 text-primary-600" />
                    <div>
                      <h3 className="text-heading-lg font-bold text-neutral-900">{category.name}</h3>
                      <p className="text-body-md text-neutral-600">{category.description}</p>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.calculators.map((calc, calcIdx) => (
                    <Link
                      key={calcIdx}
                      href={calc.href}
                      className="p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors border border-neutral-200 hover:border-primary-200"
                    >
                      <h4 className="font-semibold text-neutral-900 mb-1">{calc.name}</h4>
                      <p className="text-body-sm text-neutral-600">{calc.description}</p>
                      <span className="text-primary-600 text-sm font-medium mt-2 inline-block">Use Calculator →</span>
                    </Link>
                  ))}
                </div>
              </Card>
              );
            })}
          </div>
        </section>

        {/* How to Use Effectively */}
        <section id="how-to-use">
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              How to Use These Calculators Effectively
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Getting the most value from our calculators requires a strategic approach. Follow this four-step framework to transform raw data into growth strategies that actually work.
            </p>
            <div className="space-y-6">
              {howToUseEffectively.map((step) => (
                <div key={step.step} className="flex gap-6 p-6 bg-neutral-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-body-md text-neutral-700 mb-3">{step.description}</p>
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <p className="text-body-sm text-neutral-800">
                        <span className="font-semibold">Pro Tip:</span> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Creator Journey Stages */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Calculators for Every Stage of Your Journey
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Different growth stages require different focuses. Here is which calculators to prioritize based on where you are in your TikTok journey.
            </p>
            <div className="space-y-6">
              {creatorJourneyStages.map((stage, idx) => (
                <div key={idx} className="p-6 bg-neutral-50 rounded-xl border-l-4 border-primary-500">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-heading-md font-bold text-neutral-900">{stage.stage}</h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {stage.focus}
                    </span>
                  </div>
                  <p className="text-body-md text-neutral-700 mb-4">{stage.goal}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-label-md font-semibold text-neutral-900 mb-2">Recommended Calculators:</h4>
                      <ul className="space-y-1">
                        {stage.recommendedCalculators.map((calc, calcIdx) => (
                          <li key={calcIdx} className="text-body-sm text-neutral-700 flex items-center gap-2">
                            <span className="text-primary-600">•</span> {calc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-label-md font-semibold text-neutral-900 mb-2">Monthly Checklist:</h4>
                      <ul className="space-y-1">
                        {stage.monthlyChecklist.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-body-sm text-neutral-700 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Common Mistakes */}
        <section>
          <Card className="bg-warning-50 border-warning-200">
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Common Calculator Mistakes to Avoid
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Even with the best tools, many creators fall into these traps. Learn from others mistakes to maximize the value you get from our calculators.
            </p>
            <div className="space-y-4">
              {calculatorMistakes.map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-lg">
                  <h3 className="text-heading-md font-semibold text-error-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> {item.mistake}
                  </h3>
                  <p className="text-body-md text-neutral-700 mb-2">
                    <span className="font-medium">Why it matters:</span> {item.why}
                  </p>
                  <p className="text-body-md text-neutral-700 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-700 mt-0.5 flex-shrink-0" />
                    <span><span className="font-medium text-success-700">The fix:</span> {item.fix}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Quick Start CTA */}
        <section>
          <Card className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
            <div className="text-center">
              <h2 className="text-heading-xl font-bold mb-4">Ready to Start Calculating?</h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Begin with our most popular calculator - the Engagement Rate Calculator - to establish your baseline, then explore earnings calculators to understand your monetization potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators/engagement-rate" className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
                  Start with Engagement Rate
                </Link>
                <Link href="/calculators" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors">
                  View All 9 Calculators
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Related Guides & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/guides/tiktok-monetization-requirements" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-2">Monetization Requirements</h3>
                <p className="text-body-sm text-neutral-600">Learn what you need to start earning on TikTok</p>
              </Link>
              <Link href="/guides/how-to-negotiate-brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-2">Brand Deal Negotiation</h3>
                <p className="text-body-sm text-neutral-600">Get the rates you deserve with proven strategies</p>
              </Link>
              <Link href="/data/engagement-rates-by-niche" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-2">Engagement Rate Benchmarks</h3>
                <p className="text-body-sm text-neutral-600">See how you compare to your niche</p>
              </Link>
            </div>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="p-4 bg-neutral-100 rounded-lg border border-neutral-200">
          <p className="text-body-sm text-neutral-600">
            <span className="font-semibold">Disclaimer:</span> All calculator results are estimates based on industry data, creator surveys, and platform documentation. Actual results vary based on content quality, audience demographics, algorithm changes, and market conditions. Use these tools for planning and benchmarking, not as guaranteed outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
