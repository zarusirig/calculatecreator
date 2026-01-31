import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ArticleSchema } from '@/components/seo/CalculatorSchema';
import { Handshake, BarChart3, DollarSign, Target, XCircle, CheckCircle, AlertTriangle, Calculator, TrendingUp, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Negotiate TikTok Brand Deals: Expert Pricing Strategies 2026',
  description: 'Master brand deal negotiations with proven strategies. Learn how to price your content, counter offers, and secure rates 30-50% higher than initial offers.',
  keywords: ['negotiate brand deals', 'tiktok sponsorship rates', 'influencer negotiation', 'brand deal pricing'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/how-to-negotiate-brand-deals/',
  },
};

const negotiationPhrases = [
  {
    situation: 'Initial Response to Low Offer',
    badResponse: '"That\'s too low, I need more."',
    goodResponse: '"Thank you for the offer! Based on my engagement metrics and similar campaigns I\'ve run, my rate for this type of content is [X]. I\'d love to find a way to work together that fits both our budgets."'
  },
  {
    situation: 'When They Push Back',
    badResponse: '"Take it or leave it."',
    goodResponse: '"I understand budget constraints. Could we explore a package deal—perhaps 2 posts over 2 months at a slightly reduced per-post rate? This gives you more exposure and allows me to offer a volume discount."'
  },
  {
    situation: 'Justifying Your Rate',
    badResponse: '"Other creators charge this much."',
    goodResponse: '"My [X]% engagement rate is [Y]x the industry average, which typically translates to [Z] expected conversions based on my previous campaigns. Here\'s a case study from a similar brand..."'
  },
  {
    situation: 'When Asked for Usage Rights',
    badResponse: '"Sure, you can use it wherever."',
    goodResponse: '"The base rate covers organic posting on my TikTok. Usage rights for paid ads, website, and other platforms are an additional [25-100%]. What specific usage do you need?"'
  },
];

const commonMistakes = [
  {
    mistake: 'Accepting the first offer',
    why: 'First offers are typically 50-70% of the available budget',
    fix: 'Always counter with your rate, backed by data'
  },
  {
    mistake: 'Not asking about budget',
    why: 'You might be underselling or wasting time with mismatched budgets',
    fix: 'Ask early: "What budget range are you working with for this campaign?"'
  },
  {
    mistake: 'Giving rates without understanding scope',
    why: 'You can\'t price accurately without knowing deliverables',
    fix: 'Get full brief first: number of posts, revisions, exclusivity, timeline, usage'
  },
  {
    mistake: 'Not charging for usage rights separately',
    why: 'Ads running your content can generate millions in value',
    fix: 'Base rate = organic only. Paid media usage = +25-100%'
  },
  {
    mistake: 'Ignoring exclusivity clauses',
    why: 'Exclusivity prevents you from working with competitors',
    fix: 'Charge 25-50% premium for exclusivity, or negotiate shorter periods'
  },
  {
    mistake: 'Not getting everything in writing',
    why: 'Verbal agreements lead to disputes and non-payment',
    fix: 'Use contracts with clear deliverables, timelines, and payment terms'
  },
];

const successMetrics = [
  {
    metric: 'Rate Increase',
    target: '20-40% above first offer',
    howToMeasure: 'Compare final agreed rate to initial offer. Track across multiple deals to see improvement over time.',
    goodSign: 'Consistently negotiating 25%+ increases from initial offers',
    redFlag: 'Accepting first offer on every deal'
  },
  {
    metric: 'Deal Close Rate',
    target: '40-60% of pitches',
    howToMeasure: 'Number of successful deals ÷ total brands pitched. Track in a spreadsheet.',
    goodSign: 'Converting 1 in 2-3 pitches after negotiation phase',
    redFlag: 'Less than 1 in 5 conversations converting to paid work'
  },
  {
    metric: 'Repeat Client Rate',
    target: '30%+ of clients book again',
    howToMeasure: 'Track how many brands work with you multiple times within 12 months.',
    goodSign: 'Brands returning for 2-3 campaigns per year',
    redFlag: 'Zero repeat business (may indicate pricing too high or poor delivery)'
  },
  {
    metric: 'Payment Terms',
    target: '50% upfront, Net-30 or better',
    howToMeasure: 'Review payment terms in contracts. Net-30 = payment within 30 days.',
    goodSign: 'Most deals offer 50% deposit upfront, remainder upon delivery',
    redFlag: '100% payment after delivery or Net-60/90 terms'
  },
  {
    metric: 'Revenue Per Brand',
    target: 'Growing 15-25% year-over-year',
    howToMeasure: 'Total earnings from brand deals ÷ number of deals. Track annually.',
    goodSign: 'Average deal value increasing as your skills and following grow',
    redFlag: 'Flat or declining average deal value over 12 months'
  },
];

const proTips = [
  {
    tip: 'Create Rate Tiers, Not Single Prices',
    description: 'Never quote just one price. Offer Good/Better/Best packages at different price points. This anchors high and gives brands options while protecting your minimum rate.',
    example: 'Basic ($500): 1 video, 2 revisions, 30-day exclusivity. Premium ($1,200): 3 videos, unlimited revisions, 90-day exclusivity + story posts.',
    impact: '35% higher average deal value vs. single pricing'
  },
  {
    tip: 'Use Silence as a Negotiation Tool',
    description: 'After presenting your rate, stop talking. Let them respond first. The person who speaks first after a price often loses ground. Embrace the awkward pause.',
    example: 'You: "My rate for this campaign is $2,500." [PAUSE. Count to 10 in your head. Let them speak first.]',
    impact: 'Forces brands to respond to your anchor, not the other way around'
  },
  {
    tip: 'Negotiate for Long-Term Value, Not Just Money',
    description: 'Sometimes a slightly lower rate is worth it for: case study rights, testimonial, referrals, or long-term retainer potential. Think strategically.',
    example: '"I could do $1,800 instead of $2,500 if you\'re open to providing a testimonial for my media kit and introducing me to your marketing team for future campaigns."',
    impact: 'One strategic deal can lead to 3-5 future high-paying opportunities'
  },
  {
    tip: 'Document Everything in Email',
    description: 'After verbal agreements (calls, DMs), immediately send a follow-up email summarizing terms. "Per our conversation, confirming..." This prevents scope creep and disputes.',
    example: 'Email after call: "Thanks for the chat! Confirming: 2 TikTok videos ($2,000 total), 3 rounds of revisions, 60-day exclusivity, deliverables by March 15, 50% upfront. Contract to follow."',
    impact: 'Prevents 90% of payment and scope disputes'
  },
  {
    tip: 'Track Every Negotiation Outcome',
    description: 'Keep a spreadsheet: Brand, initial offer, final rate, how many counters it took, add-ons negotiated. Patterns emerge that improve your future negotiations.',
    example: 'After 10 deals, you realize brands that initially lowball always have more budget—counter aggressively. Brands that start fair rarely budge—negotiate add-ons instead.',
    impact: 'Data-driven negotiation improves win rate by 20-30%'
  },
  {
    tip: 'Build a "No" List',
    description: 'Pre-decide which deal terms you\'ll NEVER accept: free work, Net-90 payment, unlimited revisions, perpetual usage rights. Non-negotiables save time and protect your value.',
    example: 'Your "No" list: (1) Free/product-only deals, (2) More than 3 revision rounds, (3) Payment terms longer than Net-45, (4) Exclusive contracts over 90 days without premium.',
    impact: 'Protects you from bad deals that damage your business and reputation'
  },
];

export default function NegotiateBrandDealsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <ArticleSchema
        headline="How to Negotiate TikTok Brand Deals: Expert Pricing Strategies 2026"
        description="Master brand deal negotiations with proven strategies. Learn how to price your content, counter offers, and secure rates 30-50% higher than initial offers."
        url="https://calculatecreator.com/guides/how-to-negotiate-brand-deals"
        datePublished="2025-11-13"
        dateModified="2026-01-30"
        keywords={['negotiate brand deals', 'tiktok sponsorship rates', 'influencer negotiation', 'brand deal pricing']}
      />
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/guides/" className="text-neutral-600 hover:text-primary-600">Guides</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Negotiate Brand Deals</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white mb-6">
            <Handshake className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            How to Negotiate TikTok Brand Deals
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-6">
            Expert negotiation strategies to secure rates 30-50% higher than initial offers. Learn exactly what to say, when to counter, and how to maximize every brand partnership.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-body-sm text-neutral-600">
            <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Data-Backed Strategies</span>
            <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> Proven Scripts</span>
            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> 20-40% Higher Rates</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Most Creators Leave Money on the Table</h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              Here is the truth about brand deal negotiations: <strong>most creators accept the first offer they receive.</strong> This single mistake costs creators thousands of dollars every month, leaving money on the table that brands fully expected to pay. Why does this happen? Because brands expect you to negotiate. Their initial offer is typically 50-70% of their actual budget—they are testing to see if you know your worth and whether you'll advocate for yourself. The difference between creators who earn $500 per deal and those who earn $2,000 for identical work with the same follower count often comes down to one skill: negotiation. Yet most creators are terrified to negotiate, worried they'll lose the deal entirely, offend the brand, or seem difficult to work with, so they eagerly accept whatever is offered just to get a "yes." This comprehensive guide reveals the exact strategies and word-for-word scripts that professional creators use to consistently secure rates 30-50% higher than initial offers, even when brands claim their budget is "fixed" or "non-negotiable." You'll learn how to calculate and justify your true value with data before any negotiation begins so you enter conversations from a position of confidence, master the five-step negotiation framework that protects your worth while building long-term brand relationships instead of burning bridges, discover how to use silence and strategic pauses as powerful negotiation tools that make brands reveal their real budget, understand how to price add-ons like usage rights, Spark Ads access, and exclusivity clauses to maximize your per-deal earnings without just lowering your base rate, learn the psychology of why negotiating actually makes brands respect you more not less, and recognize the red flags that signal when to walk away from deals that don't serve you financially or reputationally. Stop accepting lowball offers out of fear or desperation—this guide gives you the confidence and exact language to negotiate like a professional who knows their worth.
            </p>
            <p>
              In this comprehensive guide, you will learn the exact negotiation strategies used by six-figure creators to secure rates 30-50% higher than initial offers. Whether you are landing your first $200 deal or negotiating a $10,000 campaign, these principles apply.
            </p>
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="font-semibold text-neutral-900 mb-2">What You Will Learn:</h3>
              <ul className="space-y-1 text-body-sm">
                <li>• How to calculate and justify your rates before any negotiation</li>
                <li>• The 5-step negotiation process that professional creators use</li>
                <li>• Word-for-word scripts for common negotiation scenarios</li>
                <li>• How to price add-ons like usage rights and exclusivity (often worth 25-100% extra)</li>
                <li>• When to walk away from deals that do not serve you</li>
                <li>• Pro tips from creators who consistently earn $5K-$50K per month from brand deals</li>
              </ul>
            </div>
            <p>
              <strong>Who this guide is for:</strong> Creators with 1,000+ followers who are ready to land brand deals or currently negotiating sponsorships. If you are getting lowball offers or unsure how to respond when brands push back on your rates, this guide is your playbook.
            </p>
          </div>
        </Card>

        {/* Key Principle */}
        <Card className="mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <div className="text-center">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Golden Rule of Negotiation</h2>
            <p className="text-body-lg text-neutral-700 max-w-2xl mx-auto">
              <strong>Never accept the first offer.</strong> Brands expect negotiation. Their initial offer is typically 50-70% of their actual budget. By countering professionally, you're not being difficult—you're playing the game they expect.
            </p>
          </div>
        </Card>

        {/* Know Your Worth */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Step 1: Know Your Worth Before Negotiating
          </h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              You can't negotiate effectively without knowing your market value. Before any negotiation, calculate your baseline rate using these factors:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Your Key Metrics</h3>
                <ul className="space-y-2 text-body-sm">
                  <li>• Follower count (and growth rate)</li>
                  <li>• Engagement rate (use our <Link href="/calculators/engagement-rate/" className="text-primary-600 hover:underline">calculator</Link>)</li>
                  <li>• Average views per video</li>
                  <li>• Audience demographics</li>
                  <li>• Past campaign performance</li>
                </ul>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Market Rate Factors</h3>
                <ul className="space-y-2 text-body-sm">
                  <li>• Niche (finance pays 2-3x lifestyle)</li>
                  <li>• Content type (talking head vs production)</li>
                  <li>• Exclusivity requirements</li>
                  <li>• Usage rights needed</li>
                  <li>• Turnaround time</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-body-sm text-neutral-800">
                <strong>Calculate your rate:</strong> Use our <Link href="/calculators/brand-deal-rate/" className="text-primary-600 hover:underline">Brand Deal Rate Calculator</Link> to get a data-backed starting point for negotiations.
              </p>
            </div>
          </div>
        </Card>

        {/* The Negotiation Process */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Step 2: The Negotiation Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Get the Full Brief First',
                desc: 'Before discussing rates, understand exactly what they want: number of posts, format, timeline, revisions, exclusivity, and usage rights. You can\'t price accurately without this.',
                tip: 'Ask: "Could you send over the full campaign brief? I\'d love to understand the scope before discussing rates."'
              },
              {
                step: 2,
                title: 'Let Them Anchor First',
                desc: 'Try to get them to share their budget before you share your rate. This prevents you from underselling if they have a larger budget than expected.',
                tip: 'Ask: "What budget range are you working with for this campaign?" or "What have you paid similar creators?"'
              },
              {
                step: 3,
                title: 'Counter with Your Rate + Justification',
                desc: 'When you share your rate, immediately back it up with data: engagement rate, past results, audience quality. Make it a logical business decision, not just a number.',
                tip: 'Structure: "My rate for this scope is [X]. Based on my [Y]% engagement rate and similar campaigns with [Brand], I typically deliver [Z results]."'
              },
              {
                step: 4,
                title: 'Offer Alternatives if They Push Back',
                desc: 'If they can\'t meet your rate, offer value-based alternatives instead of just dropping your price. Maintain your value while finding compromise.',
                tip: 'Options: "I could do [reduced scope] for that budget" or "Could we do a package of 3 posts at a volume discount?"'
              },
              {
                step: 5,
                title: 'Get Everything in Writing',
                desc: 'Once agreed, document everything in a contract: deliverables, timeline, payment terms, revision limits, usage rights, and cancellation policy.',
                tip: 'Never start work without a signed agreement. 50% upfront is industry standard.'
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">{item.desc}</p>
                  <div className="p-3 bg-success-50 rounded border border-success-200">
                    <p className="text-body-xs text-neutral-700"><strong>Script:</strong> {item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* What to Say */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Exactly What to Say: Scripts for Common Situations
          </h2>
          <div className="space-y-6">
            {negotiationPhrases.map((phrase, index) => (
              <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-3">{phrase.situation}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-error-50 rounded border border-error-200">
                    <p className="text-label-sm text-error-700 mb-1 flex items-center gap-1"><XCircle className="w-4 h-4" /> Don't Say</p>
                    <p className="text-body-sm text-neutral-700 italic">{phrase.badResponse}</p>
                  </div>
                  <div className="p-3 bg-success-50 rounded border border-success-200">
                    <p className="text-label-sm text-success-700 mb-1 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Do Say</p>
                    <p className="text-body-sm text-neutral-700">{phrase.goodResponse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Pricing Add-Ons */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Pricing Add-Ons: Beyond the Base Rate
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Your base rate covers organic posting. Everything else should be priced separately:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Add-On</th>
                  <th className="text-center py-3 px-4 font-semibold text-neutral-900">Additional Fee</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { addon: 'Paid media usage rights', fee: '+25-50%', notes: 'For ads on TikTok/Meta/Google' },
                  { addon: 'Whitelisting/Spark Ads', fee: '+30-50%', notes: 'Brand runs ads from your account' },
                  { addon: 'Website/print usage', fee: '+25-100%', notes: 'Depends on reach and duration' },
                  { addon: 'Exclusivity (30 days)', fee: '+25-50%', notes: 'Blocks you from competitor work' },
                  { addon: 'Exclusivity (90+ days)', fee: '+50-100%', notes: 'Significant opportunity cost' },
                  { addon: 'Rush delivery (<48 hrs)', fee: '+25-50%', notes: 'Compensates for schedule disruption' },
                  { addon: 'Extra revision rounds', fee: '+$50-200 each', notes: 'After 2 included revisions' },
                  { addon: 'Raw footage delivery', fee: '+15-25%', notes: 'They get your original files' },
                  { addon: 'Cross-posting to IG/YT', fee: '+25-50% per platform', notes: 'Additional reach for brand' },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="py-3 px-4 text-neutral-900">{item.addon}</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary-600">{item.fee}</td>
                    <td className="py-3 px-4 text-neutral-600">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Common Negotiation Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-error-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900">{item.mistake}</h3>
                    <p className="text-body-sm text-neutral-600 mb-2">{item.why}</p>
                    <p className="text-body-sm text-success-700"><strong>Fix:</strong> {item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* When to Walk Away */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            When to Walk Away from a Deal
          </h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              Not every deal is worth taking. Walking away protects your value and reputation. Consider declining when:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Budget is below your minimum and they won\'t negotiate',
                'They want free content in exchange for "exposure"',
                'The product conflicts with your values or audience trust',
                'Exclusivity period blocks more valuable opportunities',
                'Contract terms are unreasonable (unlimited revisions, perpetual rights)',
                'Payment terms are risky (100% on completion, net 90)',
                'The timeline is impossible without sacrificing quality',
                'They refuse to sign a contract',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2 p-3 bg-warning-50 rounded">
                  <AlertTriangle className="w-5 h-5 text-warning-500 flex-shrink-0" />
                  <p className="text-body-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-body-sm text-neutral-800">
                <strong>Pro Tip:</strong> Walking away gracefully can lead to better offers. "I appreciate the opportunity, but this doesn't fit my current rates. Feel free to reach out for future campaigns." Sometimes they come back with a better offer.
              </p>
            </div>
          </div>
        </Card>

        {/* Pro Tips Section */}
        <Card className="mb-8 bg-gradient-to-br from-success-50 to-teal-50 border-success-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Pro Tips from Six-Figure Creators
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            These advanced strategies separate amateur negotiators from professionals who consistently secure top-tier rates:
          </p>
          <div className="space-y-6">
            {proTips.map((item, index) => (
              <div key={index} className="p-5 bg-white rounded-lg border border-success-200">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-success-600 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.tip}</h3>
                    <p className="text-body-sm text-success-700 font-medium mb-2">{item.impact}</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 mb-3">{item.description}</p>
                <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Example:</strong> {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Success Metrics */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Success Metrics: How to Know If You Are Negotiating Well
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Track these key metrics to measure your negotiation performance and identify areas for improvement:
          </p>
          <div className="space-y-4">
            {successMetrics.map((metric, index) => (
              <div key={index} className="p-5 bg-neutral-50 rounded-lg">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{metric.metric}</h3>
                    <p className="text-body-sm text-primary-600 font-medium">Target: {metric.target}</p>
                  </div>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  <strong>How to measure:</strong> {metric.howToMeasure}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-success-50 rounded border border-success-200">
                    <p className="text-body-xs text-success-700 flex items-start gap-1">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> <span><strong>Good Sign:</strong> {metric.goodSign}</span>
                    </p>
                  </div>
                  <div className="p-3 bg-error-50 rounded border border-error-200">
                    <p className="text-body-xs text-error-700 flex items-start gap-1">
                      <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> <span><strong>Red Flag:</strong> {metric.redFlag}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <p className="text-body-sm text-neutral-700">
              <strong>Pro Tip:</strong> Create a simple spreadsheet to track these metrics monthly. After 3-6 months, you will see clear patterns in what works and what needs improvement in your negotiation approach.
            </p>
          </div>
        </Card>

        {/* Building Long-term Relationships */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Building Long-Term Brand Relationships
          </h2>
          <div className="space-y-4 text-body-md text-neutral-700">
            <p>
              The best earning strategy is turning one-off deals into ongoing partnerships. Here's how:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Over-deliver on first campaign', desc: 'Go above expectations—better content, faster delivery, extra engagement. This leads to repeat bookings at higher rates.' },
                { title: 'Share performance data proactively', desc: 'Send them screenshots of views, engagement, and comments. Make it easy for them to justify booking you again.' },
                { title: 'Propose ongoing partnerships', desc: 'After a successful campaign, pitch a monthly or quarterly retainer. Brands love predictable content and creators love stable income.' },
                { title: 'Maintain communication', desc: 'Stay in touch between campaigns. Congratulate them on company news, share relevant content ideas, keep yourself top of mind.' },
                { title: 'Ask for referrals', desc: 'Happy brands refer you to other brands. Ask: "Do you know any colleagues who might be looking for creators?"' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">{item.title}</p>
                    <p className="text-body-sm text-neutral-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'What if the brand says their budget is fixed and cannot negotiate?',
                answer: 'This is a common negotiation tactic. Often there IS budget flexibility, but they are testing your response. Counter with: "I understand budget constraints. Could we explore adjusting the scope to fit your budget? For example, instead of 3 videos, we could do 2 videos at a higher quality level for the same budget." Or negotiate non-monetary value: faster payment terms, testimonial rights, or introduction to other brands.'
              },
              {
                question: 'How do I negotiate when I am desperate for the money?',
                answer: 'Never let brands sense desperation—it kills your negotiating power. If you truly need the deal, negotiate smaller wins instead of big rate increases: request 50% upfront (helps cash flow), negotiate out exclusivity clauses (allows you to work with competitors), or ask for a shorter delivery timeline (get paid faster). Even small improvements protect your value.'
              },
              {
                question: 'Should I ever work for free or product-only to build my portfolio?',
                answer: 'Only if: (1) You have under 5K followers and zero brand deal portfolio, (2) The product value is substantial ($200+), (3) You get full content rights to use in your media kit, and (4) The brand is well-known enough to add credibility. After your first 2-3 portfolio pieces, ALWAYS negotiate cash payment. Your time and skills have value.'
              },
              {
                question: 'What is a fair rate for my follower count?',
                answer: 'General formula: $0.10-$0.20 per follower for a single video. So 25K followers = $2,500-$5,000 per video. Adjust up 20-30% if you have 5%+ engagement rate, are in a high-value niche (finance, tech), or have proven campaign performance. Adjust down if you are new to brand deals. Use our Brand Deal Rate Calculator for precise estimates based on your metrics.'
              },
              {
                question: 'How many times should I counter before accepting or walking away?',
                answer: 'Typically 2-3 counter-offers is the sweet spot. First counter: Your ideal rate. Second counter (if they push back): Slightly lower rate OR same rate with added value. Third counter (if needed): Your absolute minimum. If they cannot meet your minimum after 3 rounds, politely decline and move on. Prolonged back-and-forth signals you are not aligned.'
              },
              {
                question: 'What should I do if a brand ghosts me after I send my rate?',
                answer: 'Send one polite follow-up after 5-7 days: "Hi [Name], following up on my proposal from last week. Are you still interested in moving forward, or should I assume this is not a good fit right now?" If no response, move on. Ghosting after seeing your rate usually means: (1) Your rate was too high for their budget, (2) They went with another creator, or (3) Budget got cut. Do not take it personally—focus energy on new opportunities.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-body-md text-neutral-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Related Resources */}
        <Card className="mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <h2 className="text-heading-lg font-semibold mb-4">Related Tools & Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/brand-deal-rate/" className="p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Calculator className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Brand Deal Calculator</h3>
              <p className="text-body-sm opacity-90">Know your rate</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals/" className="p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Target className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Get Brand Deals</h3>
              <p className="text-body-sm opacity-90">Find opportunities</p>
            </Link>
            <Link href="/resources/brand-deal-contract/" className="p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <FileText className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Contract Template</h3>
              <p className="text-body-sm opacity-90">Protect yourself</p>
            </Link>
          </div>
        </Card>

        {/* Disclaimer */}
        <div className="p-4 bg-neutral-100 rounded-lg text-center">
          <p className="text-body-sm text-neutral-600">
            Negotiation outcomes vary based on individual circumstances, brand budgets, and market conditions. Use these strategies as guidelines, not guarantees.
            <br />
            Last updated: December 2025
          </p>
        </div>
      </div>
    </div>
  );
}
