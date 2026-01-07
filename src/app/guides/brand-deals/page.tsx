import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Sparkles, Palette, DollarSign, Laptop, Dumbbell, UtensilsCrossed, AlertTriangle, Smile } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok Brand Deals: How to Get Sponsored & What to Charge 2026',
  description: 'Complete guide to TikTok brand deals: how to get sponsored, rate negotiation, TikTok Creator Marketplace, media kits, and maximizing sponsorship income.',
  keywords: ['tiktok brand deals', 'tiktok sponsorships', 'how much to charge for tiktok', 'tiktok creator marketplace', 'influencer marketing rates'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/brand-deals/',
  },
};

export default function BrandDealsGuidePage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/guides" className="text-neutral-600 hover:text-primary-600">Guides</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">TikTok Brand Deals Guide</span>
        </nav>

        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
          TikTok Brand Deals: How to Get Sponsored & What to Charge
        </h1>
        <p className="text-body-lg text-neutral-600 mb-4">
          The complete guide to TikTok brand deals: negotiating rates, finding brands, creating media kits, and maximizing your sponsorship income in 2025. Brand deals are the highest-earning income stream in our <Link href="/guides/how-to-make-money-on-tiktok" className="text-primary-600 hover:text-primary-700 underline font-medium">complete TikTok monetization guide</Link>.
        </p>
        <div className="flex items-center space-x-4 text-body-sm text-neutral-600 mb-12">
          <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> 28 min read</span>
          <span>•</span>
          <span>Last updated: November 13, 2025</span>
        </div>

        {/* Quick Stats */}
        <Card className="mb-12 bg-accent-50 border border-accent-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Brand Deal Quick Stats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-accent-600">$1,000</p>
              <p className="text-body-sm text-neutral-700">Average deal (50K followers)</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-600">5-10×</p>
              <p className="text-body-sm text-neutral-700">More than Creator Fund</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-600">$0.10-$2</p>
              <p className="text-body-sm text-neutral-700">Per follower (rate range)</p>
            </div>
          </div>
        </Card>

        {/* What Are Brand Deals */}
        <section id="what-are-brand-deals" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">What Are TikTok Brand Deals?</h2>
          <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
            Brand deals (also called sponsorships or partnerships) are agreements where companies pay you to feature their products or services in your TikTok videos. Unlike Creator Fund's passive income, brand deals are active income requiring negotiation and content creation.
          </p>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Why Brands Work with TikTok Creators</h3>
            <div className="space-y-3">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="font-semibold text-neutral-900">Authentic Endorsements</p>
                <p className="text-body-sm text-neutral-700">Creator content feels more genuine than traditional ads, leading to higher conversion rates</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="font-semibold text-neutral-900">Targeted Reach</p>
                <p className="text-body-sm text-neutral-700">Creators have loyal, niche audiences that brands want to access</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="font-semibold text-neutral-900">Content Creation</p>
                <p className="text-body-sm text-neutral-700">Brands get professional UGC (user-generated content) they can repurpose</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Rate Benchmarks */}
        <section id="rates" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">How Much to Charge for Brand Deals</h2>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Standard Rate Benchmarks by Follower Count</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold">Tier</th>
                    <th className="text-left py-3 px-4 font-semibold">Followers</th>
                    <th className="text-left py-3 px-4 font-semibold">Rate Per Post</th>
                    <th className="text-left py-3 px-4 font-semibold">Rate Per Follower</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">Nano</td>
                    <td className="py-3 px-4">1K-10K</td>
                    <td className="py-3 px-4">$50-$200</td>
                    <td className="py-3 px-4">$0.05-$0.10</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">Micro</td>
                    <td className="py-3 px-4">10K-50K</td>
                    <td className="py-3 px-4">$200-$1,000</td>
                    <td className="py-3 px-4">$0.10-$0.20</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">Mid-Tier</td>
                    <td className="py-3 px-4">50K-500K</td>
                    <td className="py-3 px-4">$1,000-$10,000</td>
                    <td className="py-3 px-4">$0.15-$0.50</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">Macro</td>
                    <td className="py-3 px-4">500K-1M</td>
                    <td className="py-3 px-4">$10,000-$50,000</td>
                    <td className="py-3 px-4">$0.50-$1.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Mega</td>
                    <td className="py-3 px-4">1M+</td>
                    <td className="py-3 px-4">$50,000-$200,000+</td>
                    <td className="py-3 px-4">$1.00-$2.00+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Rate Multipliers by Niche</h3>
            <p className="text-body-md text-neutral-700 mb-4">
              Some niches command premium rates due to higher brand budgets and audience purchasing power. Check our <Link href="/data/brand-deal-rates-by-followers" className="text-primary-600 hover:text-primary-700 underline font-medium">complete brand deal rates data by follower count</Link> for detailed benchmarks:
            </p>
            <div className="space-y-2">
              {nicheMultipliers.map((niche) => (
                <div key={niche.name} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-neutral-700">{niche.icon}</span>
                    <span className="font-medium text-neutral-900">{niche.name}</span>
                  </div>
                  <span className="text-neutral-700 font-semibold">{niche.multiplier}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="p-6 bg-accent-50 rounded-xl border border-accent-200">
            <p className="text-body-md text-neutral-800 mb-4">
              <strong>Calculate your exact brand deal rate:</strong>
            </p>
            <Link href="/calculators/brand-deal-rate" className="btn btn-primary btn-md">
              Use Brand Deal Calculator →
            </Link>
          </div>
        </section>

        {/* How to Get Brand Deals */}
        <section id="how-to-get" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">How to Get Brand Deals on TikTok</h2>

          <div className="space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Join TikTok Creator Marketplace</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    The official TikTok platform for brand-creator partnerships. Brands can browse creators, view analytics, and send collaboration requests directly.
                  </p>
                  <div className="p-4 bg-neutral-50 rounded-lg mb-3">
                    <p className="text-body-sm text-neutral-800 mb-2"><strong>Requirements:</strong></p>
                    <ul className="space-y-1 text-body-sm text-neutral-700">
                      <li>• 10,000+ followers</li>
                      <li>• 100,000+ views (last 28 days)</li>
                      <li>• 18+ years old</li>
                      <li>• Account in good standing</li>
                    </ul>
                  </div>
                  <p className="text-body-sm text-neutral-600">
                    <strong>How to apply:</strong> Settings → Creator tools → TikTok Creator Marketplace → Apply
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Create a Media Kit</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    A media kit is a professional PDF showcasing your stats, demographics, engagement rate, and previous partnerships. Essential for pitching brands.
                  </p>
                  <div className="p-4 bg-info-light rounded-lg mb-3">
                    <p className="text-body-sm text-neutral-800 mb-2"><strong>What to include:</strong></p>
                    <ul className="space-y-1 text-body-sm text-neutral-700">
                      <li>• Profile photo & bio</li>
                      <li>• Follower count & engagement rate</li>
                      <li>• Audience demographics (age, gender, location)</li>
                      <li>• Top-performing videos (3-5 examples)</li>
                      <li>• Previous brand partnerships</li>
                      <li>• Rate card or contact info</li>
                    </ul>
                  </div>
                  <p className="text-body-sm text-neutral-600">
                    <strong>Tools:</strong> Canva (free templates), Adobe Express, or hire a designer on Fiverr ($20-$50)
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Use Influencer Platforms</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    Third-party platforms connect creators with brands actively seeking partnerships:
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <p className="font-semibold text-neutral-900">AspireIQ</p>
                      <p className="text-body-sm text-neutral-700">Best for micro-influencers (10K-100K)</p>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <p className="font-semibold text-neutral-900">CreatorIQ</p>
                      <p className="text-body-sm text-neutral-700">Enterprise brands, higher minimums (50K+)</p>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <p className="font-semibold text-neutral-900">Hashtag Paid</p>
                      <p className="text-body-sm text-neutral-700">Good for nano/micro creators (1K+)</p>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <p className="font-semibold text-neutral-900">Fohr</p>
                      <p className="text-body-sm text-neutral-700">Free media kit tool + brand matching</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Direct Brand Outreach</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    Email brands you genuinely love with a personalized pitch. Works best for nano/micro creators (1K-50K) targeting smaller brands.
                  </p>
                  <div className="p-4 bg-success-light rounded-lg">
                    <p className="text-body-sm text-neutral-800 mb-2"><strong>Email Template:</strong></p>
                    <div className="text-body-sm text-neutral-700 space-y-2">
                      <p><strong>Subject:</strong> Partnership Opportunity - [Your Name] x [Brand]</p>
                      <p><strong>Body:</strong></p>
                      <p>Hi [Brand Team],</p>
                      <p>I'm [Name], a [niche] creator with [X] followers on TikTok. I've been using [Product] for [timeframe] and my audience loves seeing authentic product recommendations.</p>
                      <p>I'd love to collaborate on a sponsored video showcasing [Product]. My audience demographics are [X], and my recent videos average [Y] views with [Z]% engagement.</p>
                      <p>I've attached my media kit. Would you be open to discussing a partnership?</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Negotiation Strategies */}
        <section id="negotiation" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Negotiation Strategies</h2>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">8 Rules for Successful Negotiation</h3>
            <div className="space-y-4">
              {negotiationRules.map((rule, index) => (
                <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">{index + 1}. {rule.title}</p>
                  <p className="text-body-sm text-neutral-700">{rule.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Red Flags to Watch For</h3>
            <div className="space-y-3">
              {redFlags.map((flag, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-error-light rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-error-DEFAULT flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">{flag.title}</p>
                    <p className="text-body-sm text-neutral-700">{flag.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <p className="text-body-md text-neutral-600 italic text-center py-8">
          Full guide continues with sections on deliverable types, FTC compliance, case studies, and contract templates...
        </p>

        {/* FAQ */}
        <FAQSection
          pageName="TikTok Brand Deals Guide"
          faqs={[
            {
              question: 'How many followers do you need for brand deals on TikTok?',
              answer: 'You can start getting brand deals with as few as 1,000 followers as a "nano-influencer" ($50-$200/post). However, most creators see consistent deal flow around 10,000-25,000 followers. At 50K+, you\'ll have multiple brands reaching out monthly.',
            },
            {
              question: 'How do brands find you on TikTok?',
              answer: 'Brands find creators through: (1) TikTok Creator Marketplace (official platform), (2) Influencer marketing platforms (AspireIQ, CreatorIQ), (3) Hashtag searches (#ad, #sponsored, niche tags), (4) Manual discovery of viral videos, or (5) Referrals from other creators or agencies.',
            },
            {
              question: 'Should you charge per follower or per video?',
              answer: 'Charge per video/deliverable, not per follower. Use follower count to calculate your rate (e.g., $0.10-$0.20 per follower), but quote a flat per-video price. This protects you if followers drop and gives brands a clear, predictable cost.',
            },
            {
              question: 'What percentage does TikTok take from brand deals?',
              answer: 'TikTok takes 0% from direct brand deals you negotiate yourself. If you use TikTok Creator Marketplace, they don\'t take a commission either—you receive 100% of the negotiated rate. This is unlike YouTube which takes 45% of ad revenue.',
            },
            {
              question: 'How do you avoid getting scammed by fake brand deals?',
              answer: 'Red flags: (1) Brands asking for payment/product purchase upfront, (2) Too-good-to-be-true rates ($5,000 for 5K followers), (3) Generic emails (not personalized), (4) No contract/vague terms, (5) Requests to move communication off-platform immediately. Always verify the brand is legitimate (check their official website/social media).',
            },
          ]}
        />

        {/* Related Guides */}
        <div className="mt-12 p-6 bg-neutral-100 rounded-xl">
          <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Essential Brand Deal Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-get-brand-deals-complete" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Get Brand Deals (Complete)</h4>
              <p className="text-body-sm text-neutral-600">From zero followers to landing your first sponsorship</p>
            </Link>
            <Link href="/guides/how-to-negotiate-brand-deals" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Negotiate Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Advanced negotiation tactics to maximize rates</p>
            </Link>
            <Link href="/guides/how-to-price-brand-deals" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Price Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Set profitable rates based on your metrics</p>
            </Link>
            <Link href="/guides/tiktok-creator-marketplace" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok Creator Marketplace Guide</h4>
              <p className="text-body-sm text-neutral-600">Get discovered by brands on the official platform</p>
            </Link>
            <Link href="/guides/spark-ads-for-creators" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">Spark Ads for Creators</h4>
              <p className="text-body-sm text-neutral-600">Earn extra from brands promoting your content</p>
            </Link>
            <Link href="/compliance/sponsorship-disclosure" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">FTC Sponsorship Disclosure Rules</h4>
              <p className="text-body-sm text-neutral-600">Stay compliant with sponsorship requirements</p>
            </Link>
          </div>
        </div>

        {/* Comparison Pages */}
        <div className="mt-8 p-6 bg-accent-50 rounded-xl border border-accent-200">
          <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Compare Income Streams</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/comparisons/creator-fund-vs-brand-deals" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">Brand Deals vs Creator Fund</h4>
              <p className="text-body-sm text-neutral-600">Which monetization stream pays more?</p>
            </Link>
            <Link href="/comparisons/tiktok-vs-instagram-income" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok vs Instagram Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Compare sponsorship rates across platforms</p>
            </Link>
          </div>
        </div>

        {/* Calculators */}
        <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200">
          <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Brand Deal Calculators</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/brand-deal-rate" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2"><DollarSign className="w-5 h-5" /> Brand Deal Rate Calculator</h4>
              <p className="text-body-sm text-neutral-600">Calculate what you should charge</p>
            </Link>
            <Link href="/calculators/engagement-rate" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5" /> Engagement Rate Calculator</h4>
              <p className="text-body-sm text-neutral-600">Boost your negotiation power</p>
            </Link>
            <Link href="/calculators/sponsorship-roi" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-primary-600 mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5" /> Sponsorship ROI Calculator</h4>
              <p className="text-body-sm text-neutral-600">Show brands their potential return</p>
            </Link>
          </div>
        </div>

        {/* Back to Main Guide */}
        <div className="mt-8 text-center">
          <Link href="/guides/how-to-make-money-on-tiktok" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            ← Back to Complete TikTok Monetization Guide
          </Link>
        </div>
      </div>
    </div>
  );
}

const nicheMultipliers = [
  { name: 'Beauty & Fashion', multiplier: '+30-40%', icon: <Palette className="w-5 h-5" /> },
  { name: 'Finance & Business', multiplier: '+20-30%', icon: <DollarSign className="w-5 h-5" /> },
  { name: 'Technology', multiplier: '+20-30%', icon: <Laptop className="w-5 h-5" /> },
  { name: 'Fitness & Health', multiplier: '+15-25%', icon: <Dumbbell className="w-5 h-5" /> },
  { name: 'Food & Cooking', multiplier: '+10-15%', icon: <UtensilsCrossed className="w-5 h-5" /> },
  { name: 'Lifestyle', multiplier: 'Baseline', icon: <Sparkles className="w-5 h-5" /> },
  { name: 'Comedy/Entertainment', multiplier: '-10-20%', icon: <Smile className="w-5 h-5" /> },
];

const negotiationRules = [
  { title: 'Always start 20-30% higher', description: 'Brands expect negotiation. Your first quote should have room to come down while still hitting your target rate.' },
  { title: 'Never accept the first offer', description: 'Even if it seems fair, counter with +15-20%. Brands have budget flexibility they won\'t reveal upfront.' },
  { title: 'Showcase your engagement rate', description: 'If you have 5%+ engagement, lead with this. High engagement justifies premium rates.' },
  { title: 'Bundle for discounts', description: 'Offer package deals: 3 videos for 2.5× your single-video rate. Brands love volume discounts.' },
  { title: 'Charge extra for usage rights', description: 'Standard rate = 30-90 days. Extended rights (6 months+) or paid ad usage should cost 50-100% more.' },
  { title: 'Get everything in writing', description: 'Verbal agreements aren\'t enforceable. Use a contract or at minimum, detailed email confirmation.' },
  { title: 'Ask for 50% upfront', description: 'Professional standard: 50% deposit before work starts, 50% upon delivery. Protects both parties.' },
  { title: 'Know your walk-away rate', description: 'Set a minimum you won\'t go below. If brand won\'t meet it, politely decline—there will be other opportunities.' },
];

const redFlags = [
  { title: 'Payment Required Upfront', description: 'Legitimate brands never ask you to buy products or pay fees. This is a scam.' },
  { title: 'Unrealistic Rates', description: '$10,000 for 5K followers? Too good to be true. Verify the brand is real before proceeding.' },
  { title: 'No Contract', description: 'Professional brands use contracts. Vague terms or "we\'ll figure it out" are red flags.' },
  { title: 'Excessive Revisions', description: 'More than 2 rounds of revisions should be additional charges. Unlimited revisions = scope creep.' },
  { title: 'Long Payment Terms', description: 'Standard is Net 30 (payment within 30 days). Net 60-90 is acceptable for large brands. Anything longer is a red flag.' },
];
