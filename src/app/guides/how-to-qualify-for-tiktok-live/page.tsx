import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema } from '@/components/seo/CalculatorSchema';
import { Users, Cake, MapPin, CheckCircle, Smartphone, Lock, CheckSquare, XCircle, Calendar, Clock, Video, TrendingUp, BarChart3, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Qualify for TikTok LIVE Gifts: Requirements & Tips',
  description: 'Learn how to unlock TikTok LIVE and start earning from virtual gifts. Step-by-step guide to meeting requirements and getting approved quickly.',
  keywords: ['tiktok live requirements', 'how to go live on tiktok', 'tiktok live gifts', 'tiktok live monetization', 'unlock tiktok live'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/how-to-qualify-for-tiktok-live/',
  },
};

export default function QualifyForTikTokLivePage() {
  const faqs = [
    {
      question: 'Can I go LIVE with less than 1,000 followers?',
      answer: 'No. TikTok requires a minimum of 1,000 followers to unlock LIVE streaming. This is a hard requirement that cannot be bypassed. Focus on growing your audience first through consistent posting, trending sounds, and engaging content.',
    },
    {
      question: 'Why don\'t I see the LIVE button even though I have 1K followers?',
      answer: 'Common reasons: (1) You\'re under 18 (TikTok won\'t let you go LIVE), (2) Your account has a Community Guidelines violation, (3) You just hit 1K and TikTok needs 24-48 hours to update, or (4) You\'re in a country where LIVE isn\'t available. Check your account status in Settings.',
    },
    {
      question: 'How old do I need to be to receive gifts on TikTok LIVE?',
      answer: 'You must be 18+ to receive gifts and 18+ to send gifts. This is a strict policy. If you\'re 16-17, you can go LIVE but won\'t earn money from gifts. Wait until you turn 18 to monetize LIVE streams.',
    },
    {
      question: 'Can I use TikTok LIVE on desktop/computer?',
      answer: 'Yes, but only through TikTok LIVE Studio (desktop streaming software for PC/Mac). However, you still need 1,000 followers and must be 18+. LIVE Studio is great for gamers and creators who want to stream with OBS, overlays, and multi-camera setups.',
    },
    {
      question: 'Will TikTok notify my followers when I go LIVE?',
      answer: 'Yes, if your followers have notifications enabled for your account. When you start a LIVE, TikTok sends push notifications to active followers and surfaces your stream on the LIVE tab and FYP. The first 5 minutes are crucial—most viewers join in that window.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticleSchema
        headline="How to Qualify for TikTok LIVE Gifts: Requirements & Tips"
        description="Learn how to unlock TikTok LIVE and start earning from virtual gifts. Step-by-step guide to meeting requirements and getting approved quickly."
        url="https://calculatecreator.com/guides/how-to-qualify-for-tiktok-live"
        datePublished="2025-11-13"
        dateModified="2026-01-30"
        keywords={['tiktok live requirements', 'how to go live on tiktok', 'tiktok live gifts', 'tiktok live monetization', 'unlock tiktok live']}
      />
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides/" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Qualify for TikTok LIVE</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-tiktok-pink via-tiktok-red to-purple-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-live-streaming-640.avif 640w, /guides/guide-live-streaming-1024.avif 1024w, /guides/guide-live-streaming-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-live-streaming-640.webp 640w, /guides/guide-live-streaming-1024.webp 1024w, /guides/guide-live-streaming-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-live-streaming-1024.webp"
              alt="Featured image for How to Qualify for TikTok LIVE Gifts"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How to Qualify for TikTok LIVE Gifts
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete guide to unlocking LIVE streaming and earning from virtual gifts—requirements, tips, and troubleshooting
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Last updated: January 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 6 min read</span>
            <span className="flex items-center gap-2"><Video className="w-4 h-4" /> Get LIVE Access</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Unlock TikTok LIVE and Start Earning from Your Content</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok LIVE streaming transforms your content creation from a hobby into a direct monetization channel through virtual gifts that viewers send in real-time. Once you unlock LIVE access at 1,000 followers, you gain the ability to earn anywhere from $20 to $500+ per stream depending on your viewer count, engagement quality, and streaming strategy. However, many creators struggle to access LIVE features due to confusion about the exact requirements, unexpected eligibility issues, or technical problems that prevent the LIVE button from appearing. This comprehensive guide eliminates all the guesswork by providing a complete requirements checklist you can verify in minutes, country-by-country availability information for both LIVE streaming and gift monetization, proven strategies to reach 1,000 followers in 30-60 days if you're not there yet, step-by-step instructions for accessing and configuring your first LIVE stream, and detailed troubleshooting solutions for the most common problems creators face. Whether you're at 500 followers working toward the threshold, just hit 1,000 but can't find the LIVE button, or ready to go LIVE but unsure about the setup process, this guide provides everything you need to successfully qualify for and activate TikTok LIVE monetization. Stop leaving money on the table—unlock LIVE streaming and start earning from your engaged audience today.
          </p>
        </Card>

        {/* Requirements Checklist */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">LIVE Access Requirements: Quick Check</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            To unlock TikTok LIVE streaming, you must meet ALL these requirements:
          </p>
          <div className="space-y-3">
            {[
              { icon: <Users className="w-8 h-8 text-primary-600" />, requirement: 'At least 1,000 followers', status: 'Hard requirement (no exceptions)' },
              { icon: <Cake className="w-8 h-8 text-primary-600" />, requirement: '18 years or older', status: 'Must verify age with ID if prompted' },
              { icon: <MapPin className="w-8 h-8 text-primary-600" />, requirement: 'Available in your country', status: 'LIVE not available everywhere—check list below' },
              { icon: <CheckCircle className="w-8 h-8 text-primary-600" />, requirement: 'Account in good standing', status: 'No Community Guidelines violations in past 6 months' },
              { icon: <Smartphone className="w-8 h-8 text-primary-600" />, requirement: 'Updated TikTok app', status: 'Use latest version (older versions may not show LIVE button)' },
              { icon: <Lock className="w-8 h-8 text-primary-600" />, requirement: 'Public account', status: 'Private accounts cannot go LIVE' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">{item.requirement}</p>
                  <p className="text-body-sm text-neutral-700">{item.status}</p>
                </div>
                <CheckSquare className="w-6 h-6 text-green-600 flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink/20 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>Pro Tip:</strong> The 1,000 follower requirement is the biggest barrier. If you're not there yet, check out our <Link href="/guides/how-to-join-creator-fund/" className="text-tiktok-pink hover:underline">guide on reaching 10K followers</Link>—the same strategies work for getting to 1K.
            </p>
          </div>
        </Card>

        {/* Countries Where LIVE Is Available */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Is TikTok LIVE Available in Your Country?</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok LIVE is available in most countries, but with varying gift monetization support:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Full LIVE + Gift Monetization:</h4>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>• United States</li>
                <li>• United Kingdom</li>
                <li>• Canada</li>
                <li>• Germany, France, Italy, Spain</li>
                <li>• Australia, New Zealand</li>
                <li>• Brazil, Mexico</li>
                <li>• Japan, South Korea</li>
                <li>• Indonesia, Thailand, Vietnam</li>
                <li>• Philippines, Malaysia, Singapore</li>
                <li>• India (limited), Pakistan</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2"><XCircle className="w-5 h-5" /> LIVE Available, Gifts Restricted:</h4>
              <p className="text-body-sm text-neutral-700 mb-3">
                Some regions allow LIVE streaming but restrict gift sending/receiving due to local regulations:
              </p>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>• Turkey (LIVE yes, gifts no)</li>
                <li>• Russia (LIVE yes, gifts limited)</li>
                <li>• Some Middle Eastern countries</li>
              </ul>
              <p className="text-body-sm text-neutral-700 mt-3">
                Check your TikTok app: if you see a "Gifts" icon during LIVE, monetization is available.
              </p>
            </div>
          </div>
        </Card>

        {/* How to Reach 1,000 Followers */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Reach 1,000 Followers (Fast)</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Don't have 1K followers yet? Here are proven strategies to get there in 30-60 days:
          </p>
          <div className="space-y-6">
            {[
              {
                strategy: 'Niche Down Immediately',
                description: 'Pick ONE topic and stick to it. "Finance tips for Gen Z" beats "random lifestyle content."',
                action: 'Next 10 videos: 80%+ should be in ONE category (cooking, fitness, comedy, etc.)',
              },
              {
                strategy: 'Post 2-3 Times Daily',
                description: 'Consistency beats quality when growing. More content = more chances to go viral.',
                action: 'Batch-create content on weekends (film 10-15 videos), then post 2-3/day during the week.',
              },
              {
                strategy: 'Use Trending Sounds Within 48 Hours',
                description: 'Trending audio has 10-20x higher FYP reach. But you must act fast—trends die in 72 hours.',
                action: 'Check "Discover" tab every morning. When you see trending icon next to a sound, use it that same day.',
              },
              {
                strategy: 'Hook Viewers in First 2 Seconds',
                description: 'TikTok decides FYP reach based on first 3 seconds. Start with movement, text, or bold claim.',
                action: 'Test: "Wait for it…", "POV:", "This changed my life:", or controversial statement.',
              },
              {
                strategy: 'Engage in the First Hour',
                description: 'Reply to EVERY comment in first 60 minutes after posting. Boosts engagement rate → more FYP reach.',
                action: 'Set a timer. When you post, stay on TikTok for 1 hour responding to comments immediately.',
              },
              {
                strategy: 'Duet and Stitch Larger Creators',
                description: 'Piggybacking on viral videos exposes you to new audiences. Focus on creators with 10K-100K followers.',
                action: 'Find trending videos in your niche → Duet or Stitch with your unique take → Post.',
              },
              {
                strategy: 'Create "Part 1" Series',
                description: 'Cliffhangers encourage follows. "Part 1 of 3" makes viewers visit your profile for continuation.',
                action: 'Break longer content into 3 parts. Post Part 1, then Part 2 the next day, etc.',
              },
              {
                strategy: 'Optimize Your Profile',
                description: 'When people visit, they decide in 3 seconds to follow. Make it obvious what you post about.',
                action: 'Bio: "[Niche] | Daily [content type] | Follow for [benefit]". Pin your best video at top.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-tiktok-pink">
                <h4 className="font-semibold text-neutral-900 mb-1">{idx + 1}. {item.strategy}</h4>
                <p className="text-body-sm text-neutral-700 mb-2">{item.description}</p>
                <p className="text-body-sm text-neutral-900">
                  <strong>Action:</strong> {item.action}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>Realistic Timeline:</strong> With consistent posting (2-3x/day) and one viral video (100K+ views), you can reach 1,000 followers in 30-60 days. Some creators do it in 2 weeks with the right trend timing.
            </p>
          </div>
        </Card>

        {/* How to Access LIVE Once You Qualify */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Start Your First LIVE Stream</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Once you meet the requirements, here's how to go LIVE:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Open TikTok and Tap the "+" Button</h4>
                <p className="text-body-sm text-neutral-700">
                  At the bottom center of your screen, tap the create button (same button you use to record videos).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Swipe to "LIVE" Mode</h4>
                <p className="text-body-sm text-neutral-700">
                  At the bottom of the recording screen, swipe left past "Video", "Photo", "Text" until you see "LIVE". If you don't see it, you haven't met the requirements yet (check age, followers, violations).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Set Your LIVE Title</h4>
                <p className="text-body-sm text-neutral-700">
                  Write a compelling title (50 characters max). Good titles: "Q&A: Ask me anything!", "Trying viral food hacks", "Come hang out + chat". Avoid vague titles like "Live" or "Hi".
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Choose Your Cover Image</h4>
                <p className="text-body-sm text-neutral-700">
                  This is the thumbnail people see when browsing LIVE streams. Use a clear, bright image of your face or an attention-grabbing visual. Test your lighting first!
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Tap "Go LIVE"</h4>
                <p className="text-body-sm text-neutral-700">
                  When ready, hit the pink "Go LIVE" button. You're now streaming! Your followers will receive notifications (if enabled) and your stream appears in the LIVE tab + FYP.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>First LIVE Tips:</strong> Stream for at least 30 minutes (short streams hurt your algorithm ranking). Acknowledge viewers by name when they join. Set a goal (e.g., "Let's hit 50 viewers!") to encourage engagement. End with a follow CTA.
            </p>
          </div>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Troubleshooting: Why Can't I Go LIVE?</h2>
          <div className="space-y-4">
            {[
              {
                issue: 'I have 1K+ followers but don\'t see the LIVE button',
                causes: [
                  'You just hit 1,000 followers—wait 24-48 hours for TikTok to update',
                  'Your account is under 18 (TikTok blocks LIVE for minors)',
                  'You have a recent Community Guidelines violation',
                  'Your app is outdated—update to the latest version',
                ],
                fix: 'Check Settings → Report a Problem → Account Issue to see if there are any restrictions. If none, wait 48 hours after hitting 1K.',
              },
              {
                issue: 'LIVE button appears but immediately says "Not available"',
                causes: [
                  'Your account was recently restricted (shadowban or temporary ban)',
                  'You\'re trying to LIVE from a banned location (school, government building)',
                  'TikTok detected suspicious activity (VPN, multiple account switches)',
                ],
                fix: 'Avoid using VPNs. Check if your account has restrictions under Settings. If restricted, maintain clean activity for 7-14 days then try again.',
              },
              {
                issue: 'I can go LIVE but viewers can\'t send gifts',
                causes: [
                  'You\'re under 18 (can stream but can\'t receive gifts)',
                  'Your country doesn\'t support gift monetization',
                  'TikTok hasn\'t verified your age yet',
                ],
                fix: 'Verify your age: Settings → Privacy → Personalization and Data → Date of Birth. If prompted, upload government ID. Must be 18+ to receive gifts.',
              },
              {
                issue: 'My LIVE keeps getting interrupted or cut off',
                causes: [
                  'Weak internet connection (need 5+ Mbps upload speed)',
                  'Too many apps running in background draining resources',
                  'Overheating phone (LIVE is resource-intensive)',
                ],
                fix: 'Use Wi-Fi instead of mobile data. Close all background apps. Keep phone cool (don\'t cover camera). Restart TikTok app before going LIVE.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2"><XCircle className="w-5 h-5" /> {item.issue}</h4>
                <div className="mb-2">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">Possible causes:</p>
                  <ul className="list-disc list-inside text-body-sm text-neutral-700 ml-4 space-y-1">
                    {item.causes.map((cause, cIdx) => (
                      <li key={cIdx}>{cause}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-body-sm text-neutral-900">
                  <strong>Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* What Happens After You Unlock LIVE */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What Happens After You Unlock LIVE?</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Once you qualify and go LIVE, here's what to expect:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Immediate Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-body-sm text-neutral-700">
                <li>Earn real-time income from gifts</li>
                <li>Deeper engagement with your audience</li>
                <li>Increased follower loyalty (LIVE viewers are 3x more likely to follow)</li>
                <li>Algorithm boost (TikTok promotes active LIVE streamers)</li>
                <li>Opportunity for viral moments (LIVE clips can be saved and posted)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Earnings Potential:</h4>
              <p className="text-body-sm text-neutral-700 mb-2">Average earnings by viewer count:</p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• <strong>20-50 viewers:</strong> $2-$10 per stream</li>
                <li>• <strong>50-100 viewers:</strong> $10-$30 per stream</li>
                <li>• <strong>100-500 viewers:</strong> $30-$150 per stream</li>
                <li>• <strong>500-1000 viewers:</strong> $150-$500 per stream</li>
                <li>• <strong>1000+ viewers:</strong> $500-$2,000+ per stream</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-tiktok-pink/10 border border-tiktok-pink/20 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>Pro Tip:</strong> Use our <Link href="/calculators/live-gifts/" className="text-tiktok-pink hover:underline">TikTok LIVE Calculator</Link> to estimate your potential earnings based on your expected viewer count and engagement rate.
            </p>
          </div>
        </Card>

        {/* Calculator CTA */}
        <Card>
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your LIVE Earnings Potential
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Estimate how much you can earn per stream based on viewer count and gift rates.
            </p>
            <Link
              href="/calculators/live-gifts/"
              className="inline-block bg-tiktok-pink text-white px-8 py-3 rounded-lg font-semibold hover:bg-tiktok-red transition-colors"
            >
              Try LIVE Earnings Calculator →
            </Link>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection
          pageName="FAQ"
          faqs={faqs}
        />

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/tiktok-live/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><Video className="w-5 h-5 text-primary-600" /> TikTok LIVE Monetization Complete Guide</h4>
              <p className="text-body-sm text-neutral-700">Everything about LIVE gifts, earnings, and maximization strategies</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><DollarSign className="w-5 h-5 text-primary-600" /> How to Make Money on TikTok</h4>
              <p className="text-body-sm text-neutral-700">All monetization methods: Creator Fund, brand deals, LIVE, Shop</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
