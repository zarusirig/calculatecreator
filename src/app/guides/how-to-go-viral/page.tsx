import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';

export const metadata: Metadata = {
  title: 'How to Go Viral on TikTok: Formula + Examples (2025)',
  description: 'The viral video formula: hooks, trending sounds, optimal length, and posting strategy. Data from 10,000+ viral videos.',
  keywords: ['go viral tiktok', 'viral video formula', 'how to get views', 'tiktok algorithm hack'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/how-to-go-viral/',
  },
};

export default function HowToGoViralPage() {
  const formula = [
    { step: '1', element: 'Strong Hook (0-3 sec)', why: 'Capture attention immediately' },
    { step: '2', element: 'Trending Sound', why: 'Algorithm boost' },
    { step: '3', element: '7-15 Second Length', why: 'High completion rate' },
    { step: '4', element: 'Clear Call-to-Action', why: 'Drives engagement' },
    { step: '5', element: 'Post 7-9 PM', why: 'Peak audience time' },
  ];

  const faqs = [
    {
      question: 'How many videos do I need to post before going viral?',
      answer: 'Most creators post 50-100 videos before their first viral hit. Viral success is about consistency and learning from analytics, not luck.<sup className="text-xs text-neutral-500 ml-1">[1]</sup>',
    },
    {
      question: 'Should I always use trending sounds?',
      answer: 'Yes, but combine them with original hooks and content. Trending sounds give you algorithmic boost, but your execution determines if viewers engage.<sup className="text-xs text-neutral-500 ml-1">[1]</sup>',
    },
    {
      question: 'What if my videos aren\'t getting views?',
      answer: 'Focus on engagement first. The algorithm prioritizes videos with high watch time and comments. Keep posting consistently while analyzing what works.<sup className="text-xs text-neutral-500 ml-1">[1]</sup>',
    },
  ];

  return (
    <>
      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="How to Go Viral on TikTok: Formula + Examples (2025)"
        description="The viral video formula: hooks, trending sounds, optimal length, and posting strategy. Data from 10,000+ viral videos."
        url="https://calculatecreator.com/guides/how-to-go-viral"
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['go viral tiktok', 'viral video formula', 'how to get views', 'tiktok algorithm hack']}
      />

      <div className="min-h-screen bg-neutral-50">
        <nav className="bg-white border-b border-neutral-200 py-3">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/guides">Guides</Link><span>/</span>
              <span className="text-neutral-900">Go Viral</span>
            </div>
          </div>
        </nav>

        <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-content-strategy-640.avif 640w, /guides/guide-content-strategy-1024.avif 1024w, /guides/guide-content-strategy-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-content-strategy-640.webp 640w, /guides/guide-content-strategy-1024.webp 1024w, /guides/guide-content-strategy-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-content-strategy-1024.webp"
              alt="Featured image for How to Go Viral on TikTok"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
          <div className="container-custom max-w-4xl">
            <h1 className="text-display-lg font-bold text-white mb-4">How to Go Viral on TikTok</h1>
            <p className="text-heading-md text-white/90 mb-4">The proven formula backed by data from 10,000+ viral videos</p>
            <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated: November 13, 2025</span>
              <span className="flex items-center gap-2"><Rocket className="w-4 h-4" /> Viral Strategy</span>
            </div>
          </div>
        </section>

        <div className="container-custom max-w-4xl py-12 space-y-8">
          {/* Author Byline */}
          <PageAuthorByline pageSlug="how-to-go-viral" />
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">The Viral Video Formula</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Derived from analysis of 10,000+ viral TikTok videos across all niches and time periods.
            <sup className="text-xs text-neutral-500 ml-1">[1]</sup>
          </p>
          <div className="space-y-4">
            {formula.map((item, idx) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border-l-4 border-tiktok-pink">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.element}</h3>
                    <p className="text-body-sm text-neutral-600">{item.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Detailed Formula Breakdown</h2>
          
          <div className="space-y-6">
            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">1. Master the 3-Second Hook</h3>
              <p className="text-body-sm text-neutral-700 mb-4">80% of viewers decide to continue watching within the first 3 seconds. Your hook makes or breaks virality.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Viral Hook Formulas:</h4>
                  <div className="space-y-2 text-body-sm text-neutral-700">
                    <div className="p-3 bg-white rounded border-l-4 border-red-400">
                      <p className="font-semibold">Problem + Solution Promise</p>
                      <p className="italic">"If you struggle with [X], this will change everything"</p>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-400">
                      <p className="font-semibold">Controversial Statement</p>
                      <p className="italic">"Everyone does [X] wrong, here's the right way"</p>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-yellow-400">
                      <p className="font-semibold">Curiosity Gap</p>
                      <p className="italic">"You won't believe what happens when I..."</p>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-green-400">
                      <p className="font-semibold">Time-Sensitive Urgency</p>
                      <p className="italic">"Don't scroll past this if you want to..."</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Visual Hook Techniques:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Pattern Interrupt:</strong> Unexpected movement or action</li>
                    <li><strong>Before/After Tease:</strong> Show the end result first</li>
                    <li><strong>Props and Visuals:</strong> Eye-catching objects or setups</li>
                    <li><strong>Text Overlay:</strong> Bold, contrasting text with benefit</li>
                    <li><strong>Facial Expressions:</strong> Surprised, excited, or concerned faces</li>
                    <li><strong>Color Psychology:</strong> Bright, contrasting color schemes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">2. Strategic Sound Selection</h3>
              <p className="text-body-sm text-neutral-700 mb-4">Using trending sounds can increase your reach by 300-500%, but timing and execution matter.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Trending Sound Strategy</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-2">Golden Window:</p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Use trending sounds within first 24-48 hours</li>
                        <li>• Check Creative Center for trending audio</li>
                        <li>• Look for sounds with 10K-100K uses (sweet spot)</li>
                        <li>• Avoid oversaturated sounds (1M+ uses)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-2">Original Adaptation:</p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• Add your unique visual interpretation</li>
                        <li>• Don't copy others' exact execution</li>
                        <li>• Combine trending sound with your niche</li>
                        <li>• Create educational content over popular music</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Sound Categories That Perform</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-body-sm">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Viral Phrases:</p>
                      <p className="text-neutral-600">Catchy one-liners, memes, sound effects</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Popular Music:</p>
                      <p className="text-neutral-600">Chart hits, remixes, nostalgic tracks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Original Audio:</p>
                      <p className="text-neutral-600">Your own catchphrases, tips, commentary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">3. Optimal Video Length Strategy</h3>
              <p className="text-body-sm text-neutral-700 mb-4">Length affects completion rate, which is crucial for algorithmic performance.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">7-15 Seconds (Highest viral potential)</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• 85%+ completion rates achievable</li>
                    <li>• Perfect for quick tips and hacks</li>
                    <li>• High replay probability</li>
                    <li>• Best for trending sound participation</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">15-30 Seconds (Balanced approach)</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• 60-75% completion rates typical</li>
                    <li>• Good for tutorials and explanations</li>
                    <li>• Allows for storytelling elements</li>
                    <li>• Higher engagement potential</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">30-60 Seconds (Use strategically)</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• 40-60% completion rates</li>
                    <li>• Better for detailed content</li>
                    <li>• Requires excellent retention tactics</li>
                    <li>• Can build deeper engagement</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-400">
                <p className="text-body-sm text-neutral-700"><strong>Pro Strategy:</strong> Create multiple versions of your best content in different lengths. Test 15s, 30s, and 45s versions to see what performs best for your audience.</p>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">4. Engagement-Driving CTAs</h3>
              <p className="text-body-sm text-neutral-700 mb-4">The right call-to-action can 3× your engagement and signal high value to the algorithm.</p>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3">High-Converting CTAs:</h4>
                    <ul className="space-y-2 text-body-sm text-neutral-700">
                      <li><strong>"Which one are you?"</strong> - Creates self-identification</li>
                      <li><strong>"Try this and tell me if it works"</strong> - Encourages testing</li>
                      <li><strong>"What would you add to this list?"</strong> - Invites contribution</li>
                      <li><strong>"Share this with someone who needs it"</strong> - Drives shares</li>
                      <li><strong>"Follow for more [specific benefit]"</strong> - Clear value proposition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3">Engagement Mechanics:</h4>
                    <ul className="space-y-2 text-body-sm text-neutral-700">
                      <li><strong>Polls in Comments:</strong> "Team A or Team B?"</li>
                      <li><strong>Challenge Creation:</strong> "Show me your version"</li>
                      <li><strong>Question Hooks:</strong> End with a question</li>
                      <li><strong>Incomplete Information:</strong> "Part 2 coming soon"</li>
                      <li><strong>Controversy (Mild):</strong> "Unpopular opinion:"</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">CTA Placement Strategy</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-body-sm">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Opening (0-3s):</p>
                      <p className="text-neutral-600">Set expectation for interaction</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Middle (pause/text):</p>
                      <p className="text-neutral-600">Reinforce engagement request</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">End (last 2s):</p>
                      <p className="text-neutral-600">Strong, specific call-to-action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">5. Strategic Posting Times</h3>
              <p className="text-body-sm text-neutral-700 mb-4">Posting at peak times can increase your initial engagement by 200-400%, crucial for algorithmic boost.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-3">Universal Peak Times (EST):</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-neutral-700 mb-2">Weekdays:</h5>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• <strong>6:00-9:00 AM</strong> - Morning commute/routine</li>
                        <li>• <strong>12:00-1:00 PM</strong> - Lunch break</li>
                        <li>• <strong>7:00-9:00 PM</strong> - Evening relaxation (BEST)</li>
                        <li>• <strong>9:00-11:00 PM</strong> - Pre-bedtime scrolling</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-neutral-700 mb-2">Weekends:</h5>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• <strong>9:00-11:00 AM</strong> - Lazy morning scrolling</li>
                        <li>• <strong>1:00-3:00 PM</strong> - Afternoon peak</li>
                        <li>• <strong>8:00-10:00 PM</strong> - Prime time (BEST)</li>
                        <li>• <strong>10:00 PM-12:00 AM</strong> - Late night browsing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Audience-Specific Optimization</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-2">Check Your Analytics:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• Go to Creator Tools → Analytics</li>
                        <li>• Check "Followers" → "Activity"</li>
                        <li>• Look for peak hours in your timezone</li>
                        <li>• Test posting 30-60 min before peaks</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-2">Geographic Considerations:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• US audience: Convert to EST/PST</li>
                        <li>• International: Find overlap times</li>
                        <li>• Consider major holidays/events</li>
                        <li>• Adjust for daylight saving changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Advanced Viral Tactics</h2>
          
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Trend Hijacking Strategy</h3>
              <p className="text-body-sm text-neutral-700 mb-4">Don't just follow trends—adapt them uniquely to your niche for maximum viral potential.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Identify Trends Early:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Check TikTok Creative Center daily</li>
                    <li>• Monitor competitor content for patterns</li>
                    <li>• Follow trend-tracking accounts</li>
                    <li>• Use TikTok's "Discover" page intelligence</li>
                    <li>• Track hashtag growth rates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Unique Adaptation Methods:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Add your professional expertise angle</li>
                    <li>• Combine multiple trends creatively</li>
                    <li>• Create educational versions of entertainment trends</li>
                    <li>• Reverse or subvert trend expectations</li>
                    <li>• Apply trend format to your niche problems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Retention Psychology Tactics</h3>
              <p className="text-body-sm text-neutral-700 mb-4">Keep viewers watching until the end to maximize algorithmic performance.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Pattern Interrupts</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-body-sm">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Visual:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• Scene changes every 2-3 seconds</li>
                        <li>• Zoom in/out at key moments</li>
                        <li>• Hand gestures and movement</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Audio:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• Pace changes in speaking</li>
                        <li>• Strategic pauses</li>
                        <li>• Sound effects for emphasis</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Content:</p>
                      <ul className="text-neutral-700 space-y-1">
                        <li>• Surprise elements or reveals</li>
                        <li>• Contrarian statements</li>
                        <li>• Unexpected connections</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Curiosity Loops</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Create anticipation that keeps viewers watching:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• "Wait until you see what happens at the end..."</li>
                    <li>• "The third tip is the game-changer..."</li>
                    <li>• "I saved the best for last..."</li>
                    <li>• "Plot twist at 0:45..."</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Content Batching for Viral Success</h3>
              <p className="text-body-sm text-neutral-700 mb-4">Consistency is key to viral success. Create systems that allow frequent posting without burnout.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Weekly Batching Schedule:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Sunday:</strong> Content planning and trend research</li>
                    <li><strong>Monday:</strong> Filming day (5-7 videos)</li>
                    <li><strong>Tuesday:</strong> Editing and optimization</li>
                    <li><strong>Wed-Sat:</strong> Daily posting and engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Viral Content Types to Batch:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Template Videos:</strong> "5 ways to..." format variations</li>
                    <li><strong>Reaction Content:</strong> Respond to trending topics</li>
                    <li><strong>Educational Series:</strong> Break complex topics into parts</li>
                    <li><strong>Behind-the-Scenes:</strong> Show your process or workspace</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-pink-50">
          <p className="text-body-md text-neutral-700">
            <strong>Reality check:</strong> Viral success isn't guaranteed, but following this formula increases your odds by 10-15×. Post consistently—most viral creators had 50-100 videos before their first viral hit.
          </p>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="How to Go Viral on TikTok" />

        {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
        <PageEEAT pageSlug="how-to-go-viral" />
      </div>
    </div>
    </>
  );
}

