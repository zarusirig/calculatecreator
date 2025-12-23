import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, Briefcase, Target, BarChart3, Sparkles, TrendingUp, Scale, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Get Brand Deals on TikTok: Complete Guide for Creators',
  description: 'Learn how to land your first brand deal on TikTok. Step-by-step strategies for nano, micro, and mid-tier creators to attract sponsors and negotiate rates.',
  keywords: ['tiktok brand deals', 'how to get sponsored on tiktok', 'brand partnerships', 'tiktok sponsorships', 'influencer marketing'],
};

export default function HowToGetBrandDealsPage() {
  const faqs = [
    {
      question: 'How many followers do I need to get brand deals?',
      answer: 'You can start getting brand deals with as few as 1,000-5,000 followers if you have high engagement (5%+) and a clear niche. Nano influencers (1K-10K) can earn $50-$200 per post. However, most brands prefer creators with 10K+ followers for more consistent reach.',
    },
    {
      question: 'How much should I charge for a brand deal?',
      answer: 'Standard rate: $0.10-$0.20 per follower for a single video. Example: 25K followers = $2,500-$5,000. Adjust based on engagement rate (add 20-30% if you have 5%+ engagement), niche (beauty/fashion pay 30-40% more), and deliverables (more videos = lower per-video rate). Use our Brand Deal Calculator to estimate your rate.',
    },
    {
      question: 'Should I work with brands for free products only?',
      answer: 'Only if: (1) You\'re under 5K followers and building your portfolio, (2) The product is genuinely valuable ($200+), or (3) It\'s a long-term partnership opportunity. Otherwise, always negotiate cash payment. Free products don\'t pay bills. If a brand can afford to ship products, they can afford to pay you.',
    },
    {
      question: 'What\'s the TikTok Creator Marketplace and should I join?',
      answer: 'TikTok Creator Marketplace is TikTok\'s official platform connecting creators with brands. You need 10K+ followers and 100K+ views (last 28 days) to apply. Benefits: access to vetted brands, built-in contracts, and TikTok support. Drawback: TikTok takes a percentage of deals. Still recommended as one of multiple outreach channels.',
    },
    {
      question: 'How do I know if a brand deal offer is legitimate or a scam?',
      answer: 'Red flags: (1) They ask YOU to pay for products or shipping, (2) No contract or formal agreement, (3) They want your bank login or sensitive info, (4) Too-good-to-be-true rates ($10K for 5K followers), or (5) Pressure to decide immediately. Always research the company, ask for a contract, and use secure payment methods (PayPal Business, invoices).',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">How to Get Brand Deals</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-brand-deals-640.avif 640w, /guides/guide-brand-deals-1024.avif 1024w, /guides/guide-brand-deals-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-brand-deals-640.webp 640w, /guides/guide-brand-deals-1024.webp 1024w, /guides/guide-brand-deals-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-brand-deals-1024.webp"
              alt="Featured image for How to Get Brand Deals on TikTok"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How to Get Brand Deals on TikTok
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete playbook to land your first (and next) sponsorship—from 1K to 100K followers
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Last updated: January 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
            <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> For All Creator Tiers</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Prerequisites */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What You Need Before Pitching Brands</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Before reaching out to brands, ensure you have these fundamentals:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Target,
                title: 'Clear Niche',
                description: 'Brands want specialists. "Fitness for busy moms" beats "general lifestyle". Pick one topic.',
                check: 'Your last 10 videos should be 80% in one category.',
              },
              {
                icon: BarChart3,
                title: 'Consistent Engagement',
                description: 'Aim for 3-5%+ engagement rate (likes + comments ÷ followers). Low engagement = fake followers.',
                check: 'Calculate: (Total likes on last 10 videos ÷ followers) × 10. Should be 30+.',
              },
              {
                icon: Sparkles,
                title: 'Professional Profile',
                description: 'High-quality profile pic, clear bio with niche + CTA, business email in bio.',
                check: 'Add "Brand partnerships: youremail@gmail.com" to bio.',
              },
              {
                icon: TrendingUp,
                title: 'Content Quality',
                description: 'Good lighting, clear audio, editing (even simple jump cuts). Brands won\'t sponsor low-quality content.',
                check: 'Can your videos compete with other creators in your niche? Be honest.',
              },
              {
                icon: Briefcase,
                title: 'Media Kit',
                description: 'One-page PDF with stats, demographics, past partnerships, and rates. Looks professional.',
                check: 'Include: follower count, engagement rate, top videos, audience age/location.',
              },
              {
                icon: Scale,
                title: 'Understanding FTC Rules',
                description: 'You MUST disclose sponsored content (#ad, #sponsored). This is law in US/UK/EU.',
                check: 'Learn FTC guidelines—violations can result in fines and platform bans.',
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <IconComponent className="w-6 h-6 text-tiktok-pink flex-shrink-0" />
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  </div>
                  <p className="text-body-sm text-neutral-700 mb-2">{item.description}</p>
                  <p className="text-body-xs text-neutral-600 italic flex items-start gap-1"><CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" /> {item.check}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 4 Methods to Get Brand Deals */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">4 Methods to Get Brand Deals</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Use all four methods simultaneously to maximize opportunities:
          </p>

          <div className="space-y-8">
            {/* Method 1 */}
            <div className="border-l-4 border-tiktok-pink pl-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Method 1: TikTok Creator Marketplace
              </h3>
              <p className="text-body-md text-neutral-700 mb-3">
                TikTok's official platform for brand-creator partnerships. Brands browse creators and send collaboration invites.
              </p>

              <div className="mb-4 p-4 bg-tiktok-pink/5 border border-tiktok-pink/20 rounded-lg">
                <p className="font-semibold text-neutral-900 mb-2">Requirements:</p>
                <ul className="list-disc list-inside space-y-1 text-body-sm text-neutral-700">
                  <li>10,000+ followers</li>
                  <li>100,000+ video views (last 28 days)</li>
                  <li>18+ years old</li>
                  <li>Account in good standing (no violations)</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-neutral-900 mb-2">How to apply:</p>
                <ol className="list-decimal list-inside space-y-1 text-body-sm text-neutral-700 ml-4">
                  <li>Go to TikTok app → Profile → Three lines (☰) → Creator Tools</li>
                  <li>Select "Creator Marketplace" → "Apply"</li>
                  <li>Complete your creator profile (add portfolio, niche, demographics)</li>
                  <li>Wait 7-14 days for review</li>
                  <li>Once approved, brands can discover and message you directly</li>
                </ol>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> Vetted brands, built-in contracts, TikTok handles disputes, consistent deal flow<br />
                  <strong>Cons:</strong> TikTok takes a percentage, high competition, requires 10K followers
                </p>
              </div>
            </div>

            {/* Method 2 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Method 2: Influencer Marketing Platforms
              </h3>
              <p className="text-body-md text-neutral-700 mb-3">
                Third-party platforms connecting creators with brands. Great for finding multiple opportunities.
              </p>

              <div className="mb-4">
                <p className="font-semibold text-neutral-900 mb-2">Top platforms for TikTok creators:</p>
                <div className="space-y-3">
                  {[
                    { name: 'AspireIQ (Aspire)', minFollowers: '1K+', focus: 'Beauty, fashion, lifestyle', note: 'Best for micro-influencers' },
                    { name: 'Grin', minFollowers: '5K+', focus: 'E-commerce brands', note: 'Direct-to-consumer brands' },
                    { name: 'Creator.co', minFollowers: '1K+', focus: 'All niches', note: 'Easy application process' },
                    { name: 'Influencer.com', minFollowers: '10K+', focus: 'All niches', note: 'Higher-paying campaigns' },
                    { name: 'BrandConnect', minFollowers: '5K+', focus: 'Tech, SaaS, finance', note: 'Higher RPMs for business niches' },
                  ].map((platform, idx) => (
                    <div key={idx} className="p-3 bg-neutral-50 rounded-lg text-body-sm">
                      <p className="font-semibold text-neutral-900">{platform.name}</p>
                      <p className="text-neutral-700">
                        Min: {platform.minFollowers} • Focus: {platform.focus} • {platform.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> Lower follower requirements, multiple platforms = more opportunities, some offer free products + cash<br />
                  <strong>Cons:</strong> Platform takes 15-25% cut, varying quality of brands, may require exclusivity
                </p>
              </div>
            </div>

            {/* Method 3 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Method 3: Direct Outreach (Cold Pitching)
              </h3>
              <p className="text-body-md text-neutral-700 mb-3">
                The highest-paying method: pitch brands directly, no middleman. Requires hustle but keeps 100% of earnings.
              </p>

              <div className="mb-4">
                <p className="font-semibold text-neutral-900 mb-2">Step-by-step outreach process:</p>
                <ol className="list-decimal list-inside space-y-2 text-body-sm text-neutral-700 ml-4">
                  <li><strong>Build target list:</strong> Make a spreadsheet with 20-50 brands in your niche. Include contact info (marketing email, LinkedIn profile of CMO).</li>
                  <li><strong>Research each brand:</strong> Check their social presence. Are they already working with influencers? What content style do they like?</li>
                  <li><strong>Create custom pitch:</strong> No templates. Explain WHY you're a fit (your audience aligns with their customers). Include 1-2 content ideas specific to their products.</li>
                  <li><strong>Find decision-maker:</strong> Don't email info@brand.com. Find the marketing manager or social media director on LinkedIn. Use tools like Hunter.io to find emails.</li>
                  <li><strong>Send short pitch:</strong> 5-7 sentences max. Subject line: "Partnership idea: [Your Niche] content for [Brand]". Attach media kit PDF.</li>
                  <li><strong>Follow up:</strong> If no response in 5 days, send a polite follow-up. If still no response, move on after 2 follow-ups.</li>
                </ol>
              </div>

              <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="font-semibold text-neutral-900 mb-2">Email Template Example:</p>
                <div className="text-body-sm text-neutral-700 font-mono bg-white p-3 rounded border border-neutral-200 whitespace-pre-wrap">
{`Subject: Partnership idea: Fitness content for [Brand]

Hi [Name],

I'm [Your Name], a fitness creator on TikTok with 35K engaged followers (4.5% engagement rate). My audience is primarily 18-34 year old women interested in at-home workouts and healthy eating.

I love [Brand's specific product] and think it would resonate with my audience. I have two content ideas:
1. "5-minute morning routine using [product]" (trending format)
2. Before/after results video (authentic testimonial)

I've attached my media kit with stats and past partnerships. Would you be open to a collaboration?

Looking forward to hearing from you!
[Your Name]
[TikTok handle]
[Email]`}
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> No platform fees (keep 100%), higher rates, build direct relationships, creative freedom<br />
                  <strong>Cons:</strong> Time-consuming, low response rate (2-5%), requires negotiation skills, you handle contracts
                </p>
              </div>
            </div>

            {/* Method 4 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Method 4: Let Brands Come to You (Inbound)
              </h3>
              <p className="text-body-md text-neutral-700 mb-3">
                The dream: brands reach out to you. This happens when you optimize your profile for discoverability.
              </p>

              <div className="mb-4">
                <p className="font-semibold text-neutral-900 mb-2">How to attract inbound deals:</p>
                <ul className="list-disc list-inside space-y-2 text-body-sm text-neutral-700 ml-4">
                  <li><strong>Add business email to bio:</strong> "Collabs: yourname@gmail.com" or "Business: email@domain.com"</li>
                  <li><strong>Switch to Business Account:</strong> Settings → Manage Account → Switch to Business Account. This adds "Contact" button to your profile.</li>
                  <li><strong>Create "portfolio" content:</strong> Occasionally create videos reviewing products (even unpaid). Brands search for creators already talking about their category.</li>
                  <li><strong>Use branded hashtags:</strong> If you love a brand, tag them and use their hashtags. They monitor these for potential partners.</li>
                  <li><strong>Engage with brand accounts:</strong> Comment on their TikToks, duet their content. Get on their radar organically.</li>
                  <li><strong>Post media kit as pinned video:</strong> Create a "Work with me!" video showcasing your stats. Pin it to profile.</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> Passive income stream, brands that reach out often have bigger budgets, less competition<br />
                  <strong>Cons:</strong> Unpredictable, requires larger following (usually 25K+), takes time to build reputation
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Creating Your Media Kit */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Create a Media Kit (Free Template)</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            A media kit is your professional resume for brands. It should be a 1-page PDF with these sections:
          </p>
          <div className="space-y-4">
            {[
              {
                section: 'Header',
                content: 'Your name, TikTok handle, profile picture, and contact email. Make it visually clean (use Canva free templates).',
              },
              {
                section: 'About You',
                content: '2-3 sentences about your niche and audience. Example: "Fitness creator helping busy moms stay healthy. My audience is 85% female, 25-45 years old, interested in at-home workouts and meal prep."',
              },
              {
                section: 'Stats',
                content: 'Followers, average views per video, engagement rate (calculate: total engagements ÷ total views), audience demographics (age, gender, location).',
              },
              {
                section: 'Top Content',
                content: 'Screenshots of 3-4 best-performing videos with view counts. Shows your creative style and reach.',
              },
              {
                section: 'Past Partnerships',
                content: 'If you have them, list 2-3 brands you\'ve worked with (even if unpaid/gifted). If none, skip this section or say "Open to first partnership".',
              },
              {
                section: 'Services & Rates',
                content: 'What you offer: "Single video: $X, Video series (3 videos): $X, Exclusive partnership: Contact for pricing." Use our Brand Deal Calculator to determine rates.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-neutral-900 mb-1">{idx + 1}. {item.section}</h4>
                <p className="text-body-sm text-neutral-700">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink/20 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>Pro Tip:</strong> Use Canva (free) to create a professional media kit. Search "influencer media kit" in Canva templates and customize with your info. Export as PDF.
            </p>
          </div>
        </Card>

        {/* Common Mistakes */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">5 Common Mistakes (And How to Avoid Them)</h2>
          <div className="space-y-4">
            {[
              {
                mistake: 'Pitching Too Early',
                explanation: 'Reaching out to brands when you have 800 followers and inconsistent content. Brands want proof of reach.',
                fix: 'Wait until you have: 1K+ followers, 3-5% engagement, and 10+ recent videos in one consistent niche. Build first, then pitch.',
              },
              {
                mistake: 'Not Disclosing Sponsorships',
                explanation: 'Hiding that content is sponsored. This violates FTC regulations and can get you fined or banned.',
                fix: 'ALWAYS disclose. Use #ad or #sponsored in caption, say "sponsored by [Brand]" in video, and enable "Paid Partnership" label on TikTok.',
              },
              {
                mistake: 'Undercharging',
                explanation: 'Accepting $50 for a video when you should charge $500+. Brands will lowball if you let them.',
                fix: 'Research rates for your follower tier. Use our Brand Deal Calculator. Start 20-30% higher than your minimum—you can negotiate down but never up.',
              },
              {
                mistake: 'No Contract',
                explanation: 'Agreeing to deals via DMs without written terms. Leads to scope creep, unpaid work, and disputes.',
                fix: 'ALWAYS get a contract (even simple email agreement). Include: deliverables, payment amount, due date, revision limit, usage rights, and payment schedule.',
              },
              {
                mistake: 'Promoting Bad Products',
                explanation: 'Saying yes to every brand for money, even if product is low-quality or doesn\'t fit your niche. Loses audience trust.',
                fix: 'Only promote products you\'d genuinely use. Your reputation is worth more than a $200 deal. If a product sucks, decline or negotiate gifted review (no payment = honest review).',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-1 flex items-center gap-2"><span className="text-red-600">✗</span> Mistake {idx + 1}: {item.mistake}</h4>
                <p className="text-body-sm text-neutral-700 mb-2">{item.explanation}</p>
                <p className="text-body-sm text-neutral-900">
                  <strong>Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Calculator CTA */}
        <Card>
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your Brand Deal Rate
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our free calculator to see what you should charge brands based on your followers, engagement, and niche.
            </p>
            <Link
              href="/calculators/brand-deal-rate"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-colors"
            >
              Calculate Your Rate →
            </Link>
          </div>
        </Card>

        {/* FAQ Section */}
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection
          pageName="FAQ"
          faqs={faqs}
        />

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><Briefcase className="w-5 h-5 text-tiktok-pink" /> TikTok Brand Deals Complete Guide</h4>
              <p className="text-body-sm text-neutral-700">Rate benchmarks, negotiation strategies, and contract templates</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-tiktok-pink" /> How to Make Money on TikTok</h4>
              <p className="text-body-sm text-neutral-700">All monetization methods: Creator Fund, brand deals, LIVE, Shop</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
