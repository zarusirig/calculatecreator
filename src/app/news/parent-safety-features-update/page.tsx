import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { BarChart3, Lock, Clock, Shield, CheckCircle } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'TikTok Unveils New Safety Features for Parents | TikTok News',
  description: 'In July 2026, TikTok announced new safety measures giving parents more control over teens\' accounts, including greater visibility into account activity and customizable settings.',
  keywords: ['tiktok safety', 'parental controls', 'teen safety', 'family pairing', 'child safety'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/parent-safety-features-update/',
  },
};

export default function ParentSafetyFeaturesUpdatePage() {
  return (
    <>
      <NewsArticleSchema
        headline="TikTok Unveils New Safety Features for Parents | TikTok News"
        description="In July 2026, TikTok announced new safety measures giving parents more control over teens' accounts, including greater visibility into account activity and customizable settings."
        url="https://calculatecreator.com/news/parent-safety-features-update/"
        datePublished="2026-07-01"
        dateModified="2026-07-01"
        image="https://calculatecreator.com/news/news-safety-1024.webp"
        keywords={['tiktok safety', 'parental controls', 'teen safety', 'family pairing', 'child safety']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'News', url: 'https://calculatecreator.com/news/' },
          { name: 'Parent Safety Features', url: 'https://calculatecreator.com/news/parent-safety-features-update/' },
        ]}
      />
      <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news/" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Parent Safety Features</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/news/news-safety-640.avif 640w, /news/news-safety-1024.avif 1024w, /news/news-safety-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-safety-640.webp 640w, /news/news-safety-1024.webp 1024w, /news/news-safety-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-safety-1024.webp"
              alt="Featured image for TikTok Unveils New Safety Features for Parents"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-blue-600">
              SAFETY UPDATE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Parental Controls
            </span>
            <span className="text-white/80 text-label-sm">Published: July 2026</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Unveils New Safety Features for Parents
          </h1>
          <p className="text-heading-md text-white/90">
            Enhanced parental controls give families more visibility and customization options
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h2 className="text-heading-lg font-semibold text-blue-900 mb-3">
            Key Takeaway
          </h2>
          <p className="text-body-md text-blue-800">
            TikTok's July 2026 safety update introduces comprehensive parental controls that give families greater visibility into teen account activity and customizable safety settings. These features strengthen TikTok's Family Pairing system and address concerns about teen social media use.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            New Parental Control Features
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Enhanced Activity Dashboard
              </h3>
              <p className="text-body-sm text-blue-800 mb-2">
                Parents can now view comprehensive activity reports including:
              </p>
              <ul className="space-y-1 text-body-sm text-blue-800 list-disc list-inside ml-4">
                <li>Daily screen time summaries</li>
                <li>Most-watched content categories</li>
                <li>Account interactions and follows</li>
                <li>Search history overview</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Customizable Privacy Settings
              </h3>
              <p className="text-body-sm text-purple-800 mb-2">
                Granular controls for teen account privacy:
              </p>
              <ul className="space-y-1 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li>Who can comment on videos (Everyone, Friends, No One)</li>
                <li>Who can duet/stitch content</li>
                <li>Who can view liked videos</li>
                <li>Direct message permissions</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Advanced Screen Time Management
              </h3>
              <p className="text-body-sm text-green-800 mb-2">
                New time management tools include:
              </p>
              <ul className="space-y-1 text-body-sm text-green-800 list-disc list-inside ml-4">
                <li>Scheduled "quiet time" when app is restricted</li>
                <li>Daily time limit reminders</li>
                <li>Bedtime mode (restricts use during set hours)</li>
                <li>Break reminders every 30-60 minutes</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Content Filtering Options
              </h3>
              <p className="text-body-sm text-amber-800 mb-2">
                Parents can now filter content shown to teens:
              </p>
              <ul className="space-y-1 text-body-sm text-amber-800 list-disc list-inside ml-4">
                <li>Restricted Mode (filters mature content)</li>
                <li>Keyword filtering (block specific topics)</li>
                <li>Age-appropriate content preferences</li>
                <li>Reporting and blocking tools</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Set Up Family Pairing
          </h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">1</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Open TikTok Settings</p>
                  <p className="text-body-sm text-neutral-700">Both parent and teen open TikTok → Me → Menu (three lines) → Settings and Privacy</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">2</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Navigate to Family Pairing</p>
                  <p className="text-body-sm text-neutral-700">Tap "Family Pairing" under the Privacy section</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">3</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Link Accounts</p>
                  <p className="text-body-sm text-neutral-700">Parent selects "Parent," teen selects "Teen," then scan QR code to link accounts</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">4</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Customize Settings</p>
                  <p className="text-body-sm text-neutral-700">Parents can now adjust all safety and privacy settings for the linked teen account</p>
                </div>
              </li>
            </ol>
          </div>
        </Card>

        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-4">
            Best Practices for Families
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Start with Conversation</p>
                <p className="text-body-sm text-green-800">Discuss online safety before implementing controls</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Review Together Weekly</p>
                <p className="text-body-sm text-green-800">Check activity dashboard together and discuss any concerns</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Balance Safety and Privacy</p>
                <p className="text-body-sm text-green-800">Respect teen autonomy while maintaining appropriate oversight</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Adjust as Teens Mature</p>
                <p className="text-body-sm text-green-800">Gradually loosen restrictions as teens demonstrate responsible use</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Industry Context and Impact
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Regulatory Background</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                These updates come in response to increasing regulatory scrutiny around teen social media safety, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">US Regulatory Pressure:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• COPPA (Children's Online Privacy Protection Act) updates</li>
                    <li>• State-level social media legislation (California, Texas)</li>
                    <li>• Congressional hearings on teen mental health</li>
                    <li>• FTC investigations into data practices</li>
                    <li>• Proposed federal age verification requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">International Compliance:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• UK Online Safety Act requirements</li>
                    <li>• EU Digital Services Act compliance</li>
                    <li>• Australia Online Safety Act</li>
                    <li>• Canada's proposed Online Harms Act</li>
                    <li>• Global push for age-appropriate design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Comparison with Competitors</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                TikTok's enhanced parental controls position it competitively against other major platforms:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-body-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-300">
                      <th className="text-left py-3 px-4 font-semibold">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold">TikTok 2026</th>
                      <th className="text-left py-3 px-4 font-semibold">Instagram</th>
                      <th className="text-left py-3 px-4 font-semibold">YouTube</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">Screen Time Dashboard</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Comprehensive</td>
                      <td className="py-3 px-4 text-yellow-600">Basic</td>
                      <td className="py-3 px-4 text-yellow-600">Basic</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">Content Filtering</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Advanced</td>
                      <td className="py-3 px-4 text-yellow-600">Limited</td>
                      <td className="py-3 px-4 text-green-600">Robust</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">Bedtime Mode</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Full Control</td>
                      <td className="py-3 px-4 text-red-600">None</td>
                      <td className="py-3 px-4 text-yellow-600">Basic</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">Direct Message Control</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Granular</td>
                      <td className="py-3 px-4 text-yellow-600">Limited</td>
                      <td className="py-3 px-4 text-green-600">Good</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Search History Monitoring</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Available</td>
                      <td className="py-3 px-4 text-red-600">None</td>
                      <td className="py-3 px-4 text-yellow-600">Basic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Expert Opinions and Research</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">Child Safety Advocates' Response</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Organizations like the National Center for Missing & Exploited Children and Common Sense Media have generally praised TikTok's proactive approach, noting:
                  </p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Transparency in reporting activity data to parents</li>
                    <li>• Granular control options that respect teen development needs</li>
                    <li>• Implementation timeline that allows for family adjustment</li>
                    <li>• Commitment to ongoing safety feature development</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Research-Backed Design</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    TikTok collaborated with digital wellness researchers to ensure features align with adolescent development:
                  </p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• <strong>Graduated Controls:</strong> Settings that can evolve as teens mature</li>
                    <li>• <strong>Educational Components:</strong> Built-in explanations of digital citizenship</li>
                    <li>• <strong>Privacy by Design:</strong> Default settings prioritize teen safety</li>
                    <li>• <strong>Transparency Tools:</strong> Clear data about how time is spent on platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Implementation Timeline and Rollout
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Phased Rollout Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center">Q3</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phase 1: Core Safety Features (July-August 2026)</h4>
                    <p className="text-body-sm text-neutral-700">Enhanced activity dashboard, basic content filtering, improved Family Pairing interface</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center">Q4</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phase 2: Advanced Controls (September-November 2026)</h4>
                    <p className="text-body-sm text-neutral-700">Bedtime mode, advanced content filtering, search history monitoring, enhanced privacy settings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center">Q1</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phase 3: AI-Powered Features (Early 2026)</h4>
                    <p className="text-body-sm text-neutral-700">Intelligent content recommendations, predictive safety alerts, personalized digital wellness insights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Global Availability</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Initial Launch Markets:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• United States and Canada</li>
                    <li>• United Kingdom and Ireland</li>
                    <li>• Australia and New Zealand</li>
                    <li>• Germany, France, and Netherlands</li>
                    <li>• Nordic countries (Sweden, Norway, Denmark)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Expansion Timeline:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>August 2026:</strong> Additional EU markets</li>
                    <li>• <strong>October 2026:</strong> Asian markets (Japan, South Korea)</li>
                    <li>• <strong>December 2026:</strong> Latin America</li>
                    <li>• <strong>Early 2026:</strong> Remaining global markets</li>
                    <li>• Features adapted for local regulations and cultural norms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Creator and Business Impact
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Impact on Content Creators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Potential Challenges:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Stricter content filtering may affect reach to teen audiences</li>
                    <li>• Need to adapt content for age-appropriate guidelines</li>
                    <li>• Possible reduction in engagement from restricted accounts</li>
                    <li>• Additional compliance considerations for brand partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">New Opportunities:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Family-friendly content may receive algorithmic boost</li>
                    <li>• Educational content valued higher in filtered feeds</li>
                    <li>• Opportunity to build trust with parent demographics</li>
                    <li>• Premium positioning for responsible creators</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Advertiser and Brand Implications</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Enhanced Brand Safety</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Improved safety measures provide brands with:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Greater confidence in teen audience advertising</li>
                    <li>• Better compliance with brand safety standards</li>
                    <li>• Reduced risk of association with inappropriate content</li>
                    <li>• Improved metrics for family-oriented campaigns</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Targeting Adjustments</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Brands may need to adapt targeting strategies:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Broader age targeting to reach teens through family content</li>
                    <li>• Increased focus on educational and informational content</li>
                    <li>• Partnership with family-friendly creators</li>
                    <li>• Compliance with stricter advertising standards for minors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Long-term Platform Evolution</h3>
              <div className="space-y-3">
                <p className="text-body-sm text-neutral-700">
                  These safety updates signal TikTok's commitment to sustainable growth through responsible platform development:
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li><strong>Regulatory Compliance:</strong> Proactive approach to meeting evolving global safety standards</li>
                  <li><strong>User Trust:</strong> Building long-term credibility with families and safety advocates</li>
                  <li><strong>Market Leadership:</strong> Positioning as the most family-friendly short-form video platform</li>
                  <li><strong>Innovation Pipeline:</strong> Foundation for AI-powered safety features and digital wellness tools</li>
                  <li><strong>Global Expansion:</strong> Meeting requirements for operations in regulated markets</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Will these features affect content discovery for teens?</h4>
              <p className="text-body-sm text-neutral-700">
                Content filtering will prioritize age-appropriate content but won't eliminate teen access to relevant educational and entertainment content. The algorithm will adapt to show more family-friendly versions of trending content.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Can teens disable parental controls?</h4>
              <p className="text-body-sm text-neutral-700">
                Teens cannot independently disable Family Pairing controls once established. However, they can communicate with parents about adjusting settings, and some features include built-in flexibility as teens demonstrate responsible usage.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">How does TikTok verify parental consent?</h4>
              <p className="text-body-sm text-neutral-700">
                Family Pairing requires mutual account linking through QR code scanning, and certain advanced controls require additional verification steps including phone number confirmation and ID verification for parents.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Are there costs associated with parental controls?</h4>
              <p className="text-body-sm text-neutral-700">
                All parental control features are provided free of charge. TikTok has committed to keeping family safety features accessible to all users regardless of premium service subscriptions.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related News</h3>
          <div className="space-y-3">
            <Link href="/news/age-specific-privacy-features/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">Age-Specific Privacy Features Introduced</h4>
              <p className="text-body-xs text-neutral-600">Tiered privacy controls automatically adjust based on user age for enhanced safety</p>
            </Link>
            <Link href="/news/playback-settings-update/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">TikTok Playback Settings Update</h4>
              <p className="text-body-xs text-neutral-600">New options to disable HDR videos and display object tags</p>
            </Link>
          </div>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources and Further Reading
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/news/age-specific-privacy-features/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                TikTok Age-Specific Privacy Features →
              </a>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>TikTok Safety Center:</strong> Comprehensive resource for parents and teens on platform safety features and digital citizenship guidelines.
              </p>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>Family Pairing Guide:</strong> Step-by-step setup instructions and best practices for families implementing parental controls.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </>
  );
}
