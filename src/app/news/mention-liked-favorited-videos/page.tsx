import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Tv, GraduationCap, MessageSquare, Award } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'TikTok Adds Mention Features for Liked and Favorited Videos | TikTok News',
  description: 'Users can now mention "Liked" and "Favorited" videos in their content, expanding cross-referencing capabilities on the platform.',
  keywords: ['tiktok mentions', 'liked videos', 'favorited videos', 'tiktok features', 'content referencing'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/mention-liked-favorited-videos/',
  },
};

export default function MentionLikedFavoritedVideosPage() {
  return (
    <>
      <NewsArticleSchema
        headline="TikTok Adds Mention Features for Liked and Favorited Videos | TikTok News"
        description="Users can now mention 'Liked' and 'Favorited' videos in their content, expanding cross-referencing capabilities on the platform."
        url="https://calculatecreator.com/news/mention-liked-favorited-videos/"
        datePublished="2026-11-01"
        dateModified="2026-11-01"
        image="https://calculatecreator.com/news/news-features-1024.webp"
        keywords={['tiktok mentions', 'liked videos', 'favorited videos', 'tiktok features', 'content referencing']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'News', url: 'https://calculatecreator.com/news' },
          { name: 'Mention Liked & Favorited Videos', url: 'https://calculatecreator.com/news/mention-liked-favorited-videos' },
        ]}
      />
      <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Mention Liked & Favorited Videos</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/news/news-features-640.avif 640w, /news/news-features-1024.avif 1024w, /news/news-features-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-features-640.webp 640w, /news/news-features-1024.webp 1024w, /news/news-features-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-features-1024.webp"
              alt="Featured image for TikTok Adds Mention Features for Liked and Favorited Videos"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-teal-600">
              NEW FEATURE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Content Tools
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2026</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Adds Mention Features for Liked and Favorited Videos
          </h1>
          <p className="text-heading-md text-white/90">
            New cross-referencing capabilities make it easier to share and reference saved content
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-teal-50 border-2 border-teal-200">
          <h2 className="text-heading-lg font-semibold text-teal-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-teal-800">
            TikTok's new mention feature allows users to directly reference videos from their Liked and Favorited collections within their own content. This creates new opportunities for reaction videos, recommendations, compilations, and community building through content curation.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's New?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Previously, creators could stitch or duet with videos they encountered, but there was no easy way to reference specific videos they had saved. The new mention feature solves this by allowing users to tag videos from their Liked and Favorited collections directly.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-teal-900 mb-3">
              How It Works
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Create Your Video</p>
                  <p className="text-body-sm text-neutral-700">Start creating content as usual in the TikTok editor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Add Video Mention</p>
                  <p className="text-body-sm text-neutral-700">Tap the mention button and select "Liked Videos" or "Favorited Videos"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Choose Specific Video</p>
                  <p className="text-body-sm text-neutral-700">Browse your saved collection and select the video to mention</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Viewers Can Click Through</p>
                  <p className="text-body-sm text-neutral-700">The mention appears as a clickable link that takes viewers directly to the referenced video</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Creative Use Cases
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Tv className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-purple-900">Video Recommendations & Reviews</h3>
              </div>
              <p className="text-body-sm text-purple-800">
                Create "Top 10" or recommendation videos where viewers can instantly access each mentioned video. Perfect for "Best TikToks of the Week" compilations or niche content curation.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-blue-900">Tutorial References</h3>
              </div>
              <p className="text-body-sm text-blue-800">
                Reference previous tutorials or related content you've saved. Example: "Building on the technique from [mentioned video], here's an advanced version..."
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-green-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-green-900">Reaction & Commentary Series</h3>
              </div>
              <p className="text-body-sm text-green-800">
                Create reaction series where you discuss multiple videos you've saved, with viewers able to watch the originals directly from your mentions.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-amber-900">Creator Spotlights</h3>
              </div>
              <p className="text-body-sm text-amber-800">
                Highlight favorite creators by mentioning their best work from your Liked collection, driving traffic to fellow creators you appreciate.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Benefits for Creators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">Enhanced Storytelling</h3>
              <p className="text-body-sm text-blue-800">
                Build richer narratives by referencing specific videos as evidence or examples
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">Community Building</h3>
              <p className="text-body-sm text-green-800">
                Drive traffic to creators you admire, fostering collaboration and mutual support
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">Curation Content Type</h3>
              <p className="text-body-sm text-purple-800">
                Develop a new content vertical based on curating and recommending videos
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">Easier Referencing</h3>
              <p className="text-body-sm text-amber-800">
                No more "I'll link in comments"—direct mentions provide instant access
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-blue-50">
          <h2 className="text-heading-lg font-semibold text-blue-900 mb-4">
            How to Use This Feature
          </h2>
          <ol className="space-y-3 text-body-md text-blue-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>Start creating a new video in the TikTok app</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>In the editing screen, look for the @ mention icon</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>Select either "Liked Videos" or "Favorited Videos" from the menu</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>Browse your collection and tap the video you want to mention</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">5.</span>
              <span>The mention will appear as a clickable link in your video</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">6.</span>
              <span>Publish your video—mentions will be active immediately</span>
            </li>
          </ol>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Grow Your TikTok Presence
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Use new features to expand your reach and calculate your growth:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/engagement-rate"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Engagement Rate Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/follower-growth"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Follower Growth Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Strategic Applications for Different Creator Types
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Educational Creators</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Use mentions to build comprehensive learning pathways and reference material:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Course-Style Content Series</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Create "Part 2" videos that mention "Part 1" from your Liked collection</li>
                    <li>• Build progressive learning paths: "Before watching this, check out [mentioned video]"</li>
                    <li>• Reference prerequisite concepts from previous videos</li>
                    <li>• Create master class compilations mentioning all related tutorials</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Resource Libraries</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• "Top 10 videos every [niche] creator should watch" with direct mentions</li>
                    <li>• Curated playlists for different skill levels (beginner, intermediate, advanced)</li>
                    <li>• "Best of" compilations from your favorite educational creators</li>
                    <li>• Reference videos that inspired your content or methodology</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Entertainment & Commentary Creators</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Leverage mentions to create engaging reaction and commentary content:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Reaction Content Ideas:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• "Reacting to my top 5 favorited videos this month"</li>
                    <li>• "Videos that changed my perspective" compilation</li>
                    <li>• "TikToks that made me laugh this week" roundup</li>
                    <li>• "Most controversial takes I've saved" discussion</li>
                    <li>• "Hidden gems you need to see" curation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Commentary Series:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Weekly "TikTok Review" mentioning standout content</li>
                    <li>• Trend analysis referencing multiple examples</li>
                    <li>• "What we can learn from [mentioned video]" breakdowns</li>
                    <li>• Comparison videos analyzing different approaches</li>
                    <li>• "Creator spotlight" series featuring others' work</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Business & Professional Creators</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Case Study Development</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Reference successful campaigns or strategies from other creators</li>
                    <li>• Build "what works" compilations with direct video mentions</li>
                    <li>• Create industry analysis videos citing specific examples</li>
                    <li>• Develop comparative studies between different approaches</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Authority Building</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Curate "essential viewing" lists for your industry</li>
                    <li>• Reference thought leaders and their best content</li>
                    <li>• Create "required watching" guides for newcomers to your niche</li>
                    <li>• Build credibility by associating with established voices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Best Practices and Optimization
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Organizing Your Liked and Favorited Collections</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                To make the most of this feature, organize your saved content strategically:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Liked Videos Strategy</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Use "Liked" for general inspiration and content you enjoy</li>
                    <li>• Regularly review and unlike outdated or irrelevant content</li>
                    <li>• Like videos you might want to reference in future content</li>
                    <li>• Consider your Liked collection as your public-facing taste</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Favorited Videos Strategy</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Use "Favorites" for high-value content you want to reference</li>
                    <li>• Organize favorites by topic or content type (if possible)</li>
                    <li>• Favorite videos that align with your content strategy</li>
                    <li>• Keep favorites curated and relevant to your niche</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Engagement Optimization with Mentions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Driving Viewer Action</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Maximize engagement when using video mentions:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>Clear Instructions:</strong> "Tap the mention to watch the full video"</li>
                    <li>• <strong>Create Curiosity:</strong> "You won't believe what happens in this video"</li>
                    <li>• <strong>Build Anticipation:</strong> "Watch this first, then come back for my take"</li>
                    <li>• <strong>Ask Questions:</strong> "What do you think about this? Watch and tell me"</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Timing and Placement</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Mention videos early to set context for your content</li>
                    <li>• Use mentions as proof points for your arguments</li>
                    <li>• Place mentions at natural transition points in your video</li>
                    <li>• End with a mention to encourage continued viewing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Community and Collaboration Benefits
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Building Creator Networks</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                The mention feature facilitates stronger creator communities and collaboration opportunities:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-teal-800 mb-3">Mutual Support:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Spotlight smaller creators by mentioning their best work</li>
                    <li>• Create "creator of the week" features</li>
                    <li>• Build reciprocal mention relationships</li>
                    <li>• Support niche communities through curation</li>
                    <li>• Drive traffic to creators you admire</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-3">Collaboration Opportunities:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Reach out to mentioned creators for future collabs</li>
                    <li>• Build relationships through thoughtful mentions</li>
                    <li>• Create cross-promotional content series</li>
                    <li>• Develop niche-specific creator networks</li>
                    <li>• Organize community challenges with mentions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Audience Value Creation</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Curation as Content Strategy</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Position yourself as a trusted curator in your niche:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Weekly "must-watch" roundups with 5-10 mentions</li>
                    <li>• Monthly "best of" compilations for your niche</li>
                    <li>• Seasonal content recommendations</li>
                    <li>• Beginner resource guides with essential viewing</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Value-Add Commentary</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Don't just mention—add your unique perspective:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Explain why each mentioned video is valuable</li>
                    <li>• Provide context or background information</li>
                    <li>• Share your personal takeaways or lessons learned</li>
                    <li>• Connect mentioned videos to broader themes or trends</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Technical Considerations and Limitations
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Feature Limitations to Be Aware Of</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-2">Current Restrictions:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Can only mention videos from your own Liked/Favorited collections</li>
                    <li>• Cannot mention videos that have been deleted or made private</li>
                    <li>• Limited number of mentions per video (typically 5-10)</li>
                    <li>• Mentions must be added during video creation, not after posting</li>
                    <li>• No analytics on mention click-through rates (yet)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-2">Workarounds and Solutions:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Like/favorite videos in advance that you plan to mention</li>
                    <li>• Keep your collections organized and up-to-date</li>
                    <li>• Plan mention-heavy content in advance</li>
                    <li>• Use captions to provide additional context for mentions</li>
                    <li>• Combine mentions with other engagement tactics (duets, stitches)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Privacy and Etiquette Considerations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Best Practices for Mentioning Others' Content</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Always provide positive or constructive commentary</li>
                    <li>• Credit the original creator verbally in your video</li>
                    <li>• Don't use mentions to criticize or mock other creators</li>
                    <li>• Consider reaching out to creators before featuring their work</li>
                    <li>• Respect content creators' wishes if they ask for removal</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Community Guidelines</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Don't spam mentions or over-reference content</li>
                    <li>• Ensure mentioned content aligns with your brand values</li>
                    <li>• Be mindful of copyright and fair use principles</li>
                    <li>• Avoid mentioning controversial or problematic content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Monetization Opportunities with Mentions
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Revenue-Generating Content Formats</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Product Review Compilations</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Create comprehensive product roundups:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• "Best [product category] reviews" mentioning top product videos</li>
                    <li>• Add your own affiliate links in the caption</li>
                    <li>• Provide comparison analysis across mentioned products</li>
                    <li>• Update monthly with new mentions for fresh content</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Sponsored Mention Opportunities</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Potential new brand partnership formats:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Brands may pay for inclusion in curated "best of" mentions</li>
                    <li>• Create sponsored roundup content featuring brand videos</li>
                    <li>• Develop "featured creator" series with brand sponsorship</li>
                    <li>• Offer mention placement as part of brand deal packages</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Content Series Ideas for Consistent Revenue</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Weekly Series Formats:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>"Monday Motivation":</strong> Mention inspiring content to start the week</li>
                    <li><strong>"Tutorial Tuesday":</strong> Curate best educational videos</li>
                    <li><strong>"Friday Favorites":</strong> Top 5 videos of the week</li>
                    <li><strong>"Sunday Study":</strong> Deep-dive learning resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Monthly Themes:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>"Month in Review":</strong> Best content from past 30 days</li>
                    <li><strong>"Creator Spotlight":</strong> Feature one creator's best work</li>
                    <li><strong>"Trend Analysis":</strong> Mention examples of trending content</li>
                    <li><strong>"Hidden Gems":</strong> Underrated videos worth watching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Future Potential Enhancements
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Expected Feature Developments</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Based on TikTok's development patterns, these enhancements are likely coming:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Short-term (3-6 months):</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Analytics for mention click-through rates</li>
                    <li>• Ability to create mention playlists or collections</li>
                    <li>• Enhanced search within Liked/Favorited videos</li>
                    <li>• Notification when mentioned videos are deleted</li>
                    <li>• Mention suggestions based on video content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Long-term (6-12 months):</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Ability to mention any public video (not just saved)</li>
                    <li>• Collaborative mention features with other creators</li>
                    <li>• Mention-based content discovery algorithms</li>
                    <li>• Monetization options for highly-mentioned content</li>
                    <li>• Integration with TikTok Shop for product mentions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://socialbee.com/blog/tiktok-updates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                SocialBee: Latest TikTok Updates →
              </a>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>TikTok Creator Portal:</strong> Official documentation on new features and how to use them effectively.
              </p>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>TikTok Community Guidelines:</strong> Best practices for mentioning and referencing other creators' content.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </>
  );
}
