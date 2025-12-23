import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, Dumbbell, Trophy, Activity, Smartphone, BookOpen, Zap, Target, Gift, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fitness Creators TikTok Earnings Guide (2025)',
  description: 'Complete guide to fitness creator earnings on TikTok. See how much workout, gym, and health creators earn by follower tier with real 2025 data.',
  keywords: ['fitness creators tiktok earnings', 'workout creator income', 'gym influencer earnings', 'fitness niche monetization', 'tiktok fitness earnings'],
};

export default function FitnessCreatorsEarningsPage() {
  const faqs = [
    {
      question: 'Do I need to show my body to succeed in fitness?',
      answer: 'No. Many successful creators focus on technique demonstrations, animations, or voiceover-only content. What matters most is providing value through workout knowledge and motivation.',
    },
    {
      question: 'What commission rates do fitness affiliates earn?',
      answer: 'Supplements: 15–30%, Equipment: 10–20%, Apps: $5–$50 per conversion. Fitness brands pay premium rates because they know the audience converts well.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Fitness Creators Earnings</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 py-12">

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
              alt="Featured image for Fitness Creators TikTok Earnings Guide (2025)"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Fitness Creators TikTok Earnings Guide (2025)
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete guide to fitness creator earnings on TikTok with real 2025 data. See how much workout, gym, and health creators earn by follower tier.
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated: November 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
            <span className="flex items-center gap-1"><Dumbbell className="w-4 h-4" /> Fitness Creator Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <p className="text-body-lg text-neutral-700 mb-4">
            Fitness is a <strong>top-earning niche on TikTok</strong>, with creators monetizing through brand deals, affiliate programs, digital products, and coaching services.
            This guide provides realistic 2025 earnings data for fitness creators at every level.
          </p>
        </Card>

        {/* Earnings by Follower Tier */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-green-50 to-green-100">
              <h3 className="text-heading-md font-semibold text-green-900 mb-4 flex items-center gap-2"><Activity className="w-5 h-5" /> 5K–10K Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-green-800">
                  <strong>Monthly earnings: $100–$500</strong>
                </div>
                <ul className="text-body-sm text-green-700 space-y-1">
                  <li>Brand deals: $100–$300/post (1–2/month)</li>
                  <li>Affiliate: $50–$150 (supplements, equipment)</li>
                  <li>Digital products: $50–$100 (workout guides)</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <h3 className="text-heading-md font-semibold text-blue-900 mb-4 flex items-center gap-2"><Activity className="w-5 h-5" /> 10K–50K Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-blue-800">
                  <strong>Monthly earnings: $500–$3,000</strong>
                </div>
                <ul className="text-body-sm text-blue-700 space-y-1">
                  <li>Brand deals: $300–$1,500/post (2–3/month)</li>
                  <li>Affiliate: $200–$800</li>
                  <li>Coaching/Programs: $300–$1,000</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-4 flex items-center gap-2"><Activity className="w-5 h-5" /> 50K–100K Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-purple-800">
                  <strong>Monthly earnings: $3,000–$15,000</strong>
                </div>
                <ul className="text-body-sm text-purple-700 space-y-1">
                  <li>Brand deals: $1,500–$5,000/post (3–4/month)</li>
                  <li>Affiliate: $800–$3,000</li>
                  <li>Digital products/Courses: $1,000–$5,000</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-orange-50 to-orange-100">
              <h3 className="text-heading-md font-semibold text-orange-900 mb-4 flex items-center gap-2"><Trophy className="w-5 h-5" /> 100K+ Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-orange-800">
                  <strong>Monthly earnings: $15,000–$100,000+</strong>
                </div>
                <ul className="text-body-sm text-orange-700 space-y-1">
                  <li>Brand deals: $5,000–$30,000/post</li>
                  <li>Affiliate: $3,000–$20,000</li>
                  <li>Programs/Coaching: $5,000–$50,000</li>
                  <li>Sponsorships: $10,000–$50,000/month</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Earning Opportunities */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Top Earning Opportunities</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4 flex items-center gap-2"><Trophy className="w-6 h-6 text-primary-600" /> Supplement Sponsorships</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p><strong>High-paying niche:</strong> Supplement brands pay premium rates</p>
                <ul className="space-y-1 ml-4">
                  <li>Rates: $1,000–$10,000 per sponsored post</li>
                  <li>Recurring partnerships common</li>
                  <li>Affiliate commissions: 15–30%</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4 flex items-center gap-2"><Dumbbell className="w-6 h-6 text-primary-600" /> Fitness Equipment Brands</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p>Resistance bands, dumbbells, workout gear</p>
                <ul className="space-y-1 ml-4">
                  <li>$500–$5,000 per post</li>
                  <li>Affiliate: 10–20% commission</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4 flex items-center gap-2"><Smartphone className="w-6 h-6 text-primary-600" /> Fitness App Partnerships</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p>Apps pay for user acquisitions</p>
                <ul className="space-y-1 ml-4">
                  <li>$2,000–$20,000 for app promotion campaigns</li>
                  <li>Performance bonuses (per download)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary-600" /> Workout Programs/Ebooks</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p><strong>Sell your own products:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>Workout PDFs: $10–$50 each</li>
                  <li>30-day challenges: $30–$100</li>
                  <li>Active creators with 20K followers: $500–$5,000/month</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="text-heading-sm font-semibold text-green-900 mb-2 flex items-center gap-2"><Dumbbell className="w-5 h-5" /> Online Coaching</h4>
            <ul className="text-body-sm text-green-800 space-y-1">
              <li><strong>1-on-1 or group coaching:</strong> $100–$500/client/month</li>
              <li><strong>10 clients = $1,000–$5,000/month additional income</strong></li>
            </ul>
          </div>
        </Card>

        {/* Fitness Niche Advantages */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Fitness Niche Advantages</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-heading-md font-semibold text-green-900 mb-4">Why fitness earns well:</h3>
            <ul className="space-y-2 text-body-sm text-green-800">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>High purchase intent:</strong> Viewers want results and are willing to invest</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Transformation content performs well:</strong> Before/after videos drive engagement</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Strong affiliate markets:</strong> Supplements, equipment, apps all pay well</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Recurring revenue:</strong> Coaching, memberships, program sales</span></li>
            </ul>
            <p className="text-green-900 font-medium mt-4">
              <strong>Engagement rates:</strong> Fitness averages 6–9% (above platform average of 4–6%)
            </p>
          </div>
        </Card>

        {/* Best Monetization Strategies */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Best Monetization Strategies</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-primary-600" /> Build Transformation Portfolio</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>Document your own journey</li>
                <li>Share client transformations (with permission)</li>
                <li>Proof = higher rates from brands</li>
              </ul>
            </div>

            <div className="border border-neutral-200 rounded-lg p-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Zap className="w-5 h-5 text-primary-600" /> Niche Down</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>General fitness is saturated</li>
                <li>Specialize: "Home workouts for busy moms"</li>
                <li>Specialists earn 30–50% more</li>
              </ul>
            </div>

            <div className="border border-neutral-200 rounded-lg p-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Gift className="w-5 h-5 text-primary-600" /> Create Lead Magnets</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>Free workout guide in exchange for email</li>
                <li>Sell premium programs to email list</li>
                <li>Additional $500–$5,000/month</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="Fitness Creators TikTok Earnings" />

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Detailed Revenue Breakdown by Income Stream</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Brand Partnership Opportunities</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Fitness creators have access to some of the highest-paying brand partnerships on TikTok:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Supplement Brands (Highest Paying)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Typical Rates:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• 10K-50K followers: $500-2,000/post</li>
                        <li>• 50K-100K followers: $2,000-5,000/post</li>
                        <li>• 100K+ followers: $5,000-20,000/post</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Partnership Types:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• One-time sponsored posts</li>
                        <li>• 3-6 month ambassador programs</li>
                        <li>• Affiliate + sponsored hybrid deals</li>
                        <li>• Performance-based bonuses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Fitness Equipment and Apparel</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Product Categories:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Resistance bands and equipment</li>
                        <li>• Workout apparel and shoes</li>
                        <li>• Smart fitness devices</li>
                        <li>• Recovery tools (foam rollers, etc.)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Commission Rates:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Equipment: 10-20% commission</li>
                        <li>• Apparel: 8-15% commission</li>
                        <li>• Tech devices: 5-12% commission</li>
                        <li>• Average order value: $50-150</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Digital Product Revenue</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Workout Programs and Guides</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-body-sm">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Beginner Level:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• PDF workout plans: $10-30</li>
                        <li>• 7-day challenges: $15-40</li>
                        <li>• Typical sales: 10-50/month</li>
                        <li>• Monthly revenue: $200-1,500</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Intermediate Level:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• Video course programs: $50-150</li>
                        <li>• 30-day transformations: $75-200</li>
                        <li>• Typical sales: 20-100/month</li>
                        <li>• Monthly revenue: $1,500-10,000</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Advanced Level:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• Comprehensive programs: $200-500</li>
                        <li>• Membership sites: $20-50/month</li>
                        <li>• Typical sales: 50-200/month</li>
                        <li>• Monthly revenue: $5,000-50,000+</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Coaching and Personal Training</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>1-on-1 Coaching:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Rates: $100-500/month per client</li>
                        <li>• Typical client load: 5-20 clients</li>
                        <li>• Monthly revenue: $500-10,000</li>
                        <li>• High-touch, premium service</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Group Coaching:</strong></p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Rates: $30-100/month per member</li>
                        <li>• Group size: 20-100 members</li>
                        <li>• Monthly revenue: $600-10,000</li>
                        <li>• More scalable model</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Content Strategy for Maximum Earnings</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">High-Performing Fitness Content Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Educational Content:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Form Corrections:</strong> "Stop doing [exercise] like this" - high engagement</li>
                    <li><strong>Quick Workouts:</strong> "5-minute abs" or "10-minute HIIT" - saves-worthy</li>
                    <li><strong>Myth-Busting:</strong> "This fitness myth is costing you gains" - shareable</li>
                    <li><strong>Exercise Variations:</strong> "3 ways to do push-ups" - educational value</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Transformation Content:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Before/After:</strong> Personal or client transformations - highly viral</li>
                    <li><strong>Progress Updates:</strong> "Day 1 vs Day 30" - builds following</li>
                    <li><strong>Challenge Documentation:</strong> "I did 100 push-ups for 30 days" - engaging</li>
                    <li><strong>Body Recomposition:</strong> Same weight, different body - educational</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Monetization Content Strategy</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">The 80/20 Content Rule</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>80% Value Content:</strong> Free workouts, tips, education, motivation</li>
                    <li>• <strong>20% Promotional:</strong> Product reviews, sponsored content, program sales</li>
                    <li>• This ratio maintains trust while enabling monetization</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Product Integration Best Practices</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Show products in use during actual workouts (authentic)</li>
                    <li>• Explain why you personally use the product</li>
                    <li>• Demonstrate specific benefits or features</li>
                    <li>• Always disclose sponsored content (#ad #sponsored)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Building a Sustainable Fitness Creator Business</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Diversified Income Strategy</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Successful fitness creators don't rely on a single income stream. Here's the ideal revenue mix:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Passive Income (40%)</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Affiliate commissions</li>
                    <li>• Digital product sales</li>
                    <li>• Creator Rewards/Fund</li>
                    <li>• Ad revenue (YouTube)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Active Income (40%)</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Brand partnerships</li>
                    <li>• Sponsored content</li>
                    <li>• 1-on-1 coaching</li>
                    <li>• Speaking engagements</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Recurring (20%)</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Membership programs</li>
                    <li>• Group coaching</li>
                    <li>• Patreon/subscriptions</li>
                    <li>• Monthly challenges</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Growth Milestones and Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">M1-3</div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Foundation Phase (Months 1-3)</h4>
                    <p className="text-body-sm text-neutral-700 mb-1"><strong>Focus:</strong> Content creation, finding your voice, building initial audience</p>
                    <p className="text-body-sm text-neutral-600">Expected earnings: $0-500/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">M4-6</div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Growth Phase (Months 4-6)</h4>
                    <p className="text-body-sm text-neutral-700 mb-1"><strong>Focus:</strong> Consistency, engagement, first brand partnerships</p>
                    <p className="text-body-sm text-neutral-600">Expected earnings: $500-2,000/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">M7-12</div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Monetization Phase (Months 7-12)</h4>
                    <p className="text-body-sm text-neutral-700 mb-1"><strong>Focus:</strong> Multiple income streams, digital products, coaching</p>
                    <p className="text-body-sm text-neutral-600">Expected earnings: $2,000-10,000/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">Y2+</div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Scale Phase (Year 2+)</h4>
                    <p className="text-body-sm text-neutral-700 mb-1"><strong>Focus:</strong> Premium partnerships, own product lines, team building</p>
                    <p className="text-body-sm text-neutral-600">Expected earnings: $10,000-100,000+/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Fitness Sub-Niches and Specializations</h2>
          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">High-Earning Specializations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Premium Niches (Higher Rates):</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Bodybuilding/Physique:</strong> Supplement brands pay premium</li>
                    <li><strong>Athletic Performance:</strong> High-value audience (athletes, coaches)</li>
                    <li><strong>Corrective Exercise:</strong> Professional credibility commands higher rates</li>
                    <li><strong>Nutrition Coaching:</strong> Recurring revenue potential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Accessible Niches (Easier Entry):</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Home Workouts:</strong> Broad appeal, no gym required</li>
                    <li><strong>Beginner Fitness:</strong> Large underserved audience</li>
                    <li><strong>Fitness for Specific Groups:</strong> Seniors, postpartum, etc.</li>
                    <li><strong>Bodyweight Training:</strong> No equipment needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Demographic-Specific Opportunities</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-1">Women's Fitness</h4>
                  <p className="text-body-sm text-neutral-700">Largest audience segment, high engagement, strong community building potential</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-1">Men's Fitness</h4>
                  <p className="text-body-sm text-neutral-700">Supplement partnerships, equipment deals, strength-focused content</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-1">Age-Specific Fitness</h4>
                  <p className="text-body-sm text-neutral-700">Underserved markets: 40+, 50+, 60+ fitness with unique needs and higher purchasing power</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Common Challenges and Solutions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2"><XCircle className="w-5 h-5" /> Challenge: Oversaturated Fitness Niche</h3>
              <p className="text-body-sm text-neutral-700 mb-1"><strong>Problem:</strong> Millions of fitness creators make it hard to stand out</p>
              <p className="text-body-sm text-green-700 flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> <span><strong>Solution:</strong> Specialize in a micro-niche (e.g., "desk exercises for remote workers" instead of "general fitness")</span></p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2"><XCircle className="w-5 h-5" /> Challenge: Body Image Concerns</h3>
              <p className="text-body-sm text-neutral-700 mb-1"><strong>Problem:</strong> Feeling pressure to show physique or transformation</p>
              <p className="text-body-sm text-green-700 flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> <span><strong>Solution:</strong> Focus on technique, education, or voiceover content. Many successful creators never show their body.</span></p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2"><XCircle className="w-5 h-5" /> Challenge: Credibility Without Certifications</h3>
              <p className="text-body-sm text-neutral-700 mb-1"><strong>Problem:</strong> Competing with certified trainers</p>
              <p className="text-body-sm text-green-700 flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> <span><strong>Solution:</strong> Get certified (ACE, NASM, ISSA) or focus on personal experience and results. Certifications increase brand deal rates by 30-50%.</span></p>
            </div>
          </div>
        </Card>

        {/* Related Content */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides/beauty-creators-earnings" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Beauty Creators Earnings</h4>
              <p className="text-body-sm text-neutral-600">Makeup and skincare earnings</p>
            </Link>
            <Link href="/calculators/brand-deal-rate" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Brand Deal Calculator</h4>
              <p className="text-body-sm text-neutral-600">Calculate sponsorship rates</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals-complete" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Find sponsorship opportunities</p>
            </Link>
            <Link href="/guides/how-to-increase-engagement" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Increase Engagement</h4>
              <p className="text-body-sm text-neutral-600">Boost your TikTok performance</p>
            </Link>
            <Link href="/guides/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Creator Fund Guide</h4>
              <p className="text-body-sm text-neutral-600">TikTok's RPM program</p>
            </Link>
            <Link href="/comparisons/creator-fund-vs-brand-deals" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Creator Fund vs Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Which monetization method pays more?</p>
            </Link>
            <Link href="/comparisons/tiktok-vs-instagram" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">TikTok vs Instagram</h4>
              <p className="text-body-sm text-neutral-600">Platform comparison for creators</p>
            </Link>
            <Link href="/guides/how-to-go-viral" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">How to Go Viral</h4>
              <p className="text-body-sm text-neutral-600">Viral content strategies</p>
            </Link>
            <Link href="/guides/best-times-go-live" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Best Times to Go Live</h4>
              <p className="text-body-sm text-neutral-600">Optimize your live streaming schedule</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
