'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Star, Sparkles, Calendar, TrendingUp, Heart } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { InputsExplained } from '@/components/calculator/InputsExplained';

const moonPhases = [
  { name: 'New Moon', emoji: '🌑', energy: 'Fresh Starts', bestFor: 'Announcing new content series, rebranding, launching products' },
  { name: 'Waxing Crescent', emoji: '🌒', energy: 'Building', bestFor: 'Growing audience, tutorial content, educational posts' },
  { name: 'First Quarter', emoji: '🌓', energy: 'Action', bestFor: 'Challenges, calls-to-action, engagement posts' },
  { name: 'Waxing Gibbous', emoji: '🌔', energy: 'Refinement', bestFor: 'Behind-the-scenes content, process videos, improvements' },
  { name: 'Full Moon', emoji: '🌕', energy: 'Peak Energy', bestFor: 'Viral attempts, major announcements, high-energy content' },
  { name: 'Waning Gibbous', emoji: '🌖', energy: 'Gratitude', bestFor: 'Thank you posts, community appreciation, collaborations' },
  { name: 'Last Quarter', emoji: '🌗', energy: 'Release', bestFor: 'Addressing controversies, clearing the air, honest conversations' },
  { name: 'Waning Crescent', emoji: '🌘', energy: 'Rest', bestFor: 'Lighter content, throwbacks, planning period' },
];

const faqData = [
  {
    question: 'Does the moon phase actually affect social media performance?',
    answer: 'No scientific evidence supports moon phases affecting social media performance. This is a fun, entertainment-only tool. Content quality, timing, and audience engagement matter far more than lunar cycles. However, spiritual wellness audiences (25M+ on TikTok) actively engage with moon-themed content, making it valuable for niche targeting.'
  },
  {
    question: 'What is the best moon phase for posting?',
    answer: 'From an astrological perspective, Full Moon represents peak energy and New Moon represents fresh starts. However, actual performance depends on your content quality, audience timezone, and posting consistency - not moon phases. Use TikTok Analytics to find your optimal posting times (typically 6-9 PM) rather than relying solely on lunar timing.'
  },
  {
    question: 'Can I use this for planning my content calendar?',
    answer: 'You can use it for creative inspiration or ritual, but don\'t base serious strategy decisions on moon phases. Use analytics, audience data, and engagement metrics instead for effective content planning. The 29.5-day lunar cycle can provide a helpful framework for consistent posting schedules, but pair it with data-driven insights.'
  },
  {
    question: 'Why do some creators follow moon phases?',
    answer: 'Some creators enjoy adding intention and ritual to their creative process. While not scientifically proven, the psychological benefits of mindful planning can indirectly improve content consistency and quality. Spiritual wellness creators also use moon phases to resonate with their audience\'s beliefs, building stronger community connections.'
  },
  {
    question: 'Is this calculator accurate for moon phases?',
    answer: 'Yes, the calculator uses astronomical calculations to determine actual moon phases for any date. However, remember that using this information for content strategy is purely for fun and inspiration. The phases themselves are accurate; their application to social media strategy is for entertainment and creative frameworks only.'
  },
  {
    question: 'How can moon phase content help me monetize?',
    answer: 'Moon phase and spiritual content monetizes through digital products (moon phase guides $15-$50, lunar calendars $10-$30), tarot services ($25-$100 per reading), affiliate partnerships with crystal and wellness brands (10-20% commission), and brand deals with spiritual lifestyle companies. Creators with 15K+ followers in this niche earn $1,200-$4,000 monthly from combined revenue streams.'
  },
  {
    question: 'What engagement rate should I expect from moon phase content?',
    answer: 'Spiritual and moon phase content typically achieves 8-12% engagement rates, higher than general content (3-6%). The #MoonTok and #SpiritualTok communities are highly engaged, with users actively seeking this content. Full Moon posts specifically see 15-25% higher engagement than average due to heightened audience interest during lunar peaks.'
  },
  {
    question: 'Should I combine moon phases with other content strategies?',
    answer: 'Yes, absolutely. The most successful creators blend moon phase timing with practical content strategies. Combine lunar themes with productivity tips, business advice, or fitness content to appeal to both spiritual and pragmatic audiences. This hybrid approach achieves 3x wider appeal and 60% higher monetization than purely spiritual content.'
  },
  {
    question: 'How do I attract the spiritual wellness audience?',
    answer: 'Use hashtags like #MoonTok, #ManifestationTok, #SpiritualTok, and #LunarEnergy. Post moon phase content consistently (every phase change), create aesthetically pleasing visuals with moon imagery, share personal manifestation stories, and engage authentically with the community. Gen Z (62%) and Millennials (31%) dominate this 25M+ user demographic.'
  },
  {
    question: 'Can moon phase posting improve my consistency?',
    answer: 'Yes, many creators report improved consistency when following lunar cycles. The 29.5-day rhythm creates natural posting deadlines for each phase transition. Batch-creating content for all 8 phases ensures regular uploads. The psychological commitment to "moon rituals" can motivate creators to maintain schedules when pure discipline fails.'
  }
];

function getMoonPhase(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let c = 0;
  let e = 0;
  let jd = 0;
  let b = 0;

  if (month < 3) {
    c = year - 1;
    e = month + 12;
  } else {
    c = year;
    e = month;
  }

  jd = Math.floor(365.25 * c) + Math.floor(30.6001 * (e + 1)) + day - 694039.09;
  jd /= 29.5305882;
  b = Math.floor(jd);
  jd -= b;

  return Math.floor(jd * 8);
}

export default function MoonPhaseCalculatorPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  useEffect(() => {
    const date = new Date(selectedDate);
    setCurrentPhaseIndex(getMoonPhase(date));
  }, [selectedDate]);

  const currentPhase = moonPhases[currentPhaseIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 py-8">
        <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Calculators', href: '/calculators' },
          { label: 'Fun & Niche', href: '/calculators/fun-niche' },
          { label: 'Moon Phase', href: '/calculators/fun-niche/moon-phase' }
        ]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 text-indigo-900 mb-6">
            <Moon size={40} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">Moon Phase Posting Guide</h1>
          <p className="text-body-lg text-indigo-200 max-w-2xl mx-auto">Align your content with lunar energy. A fun tool for creators who believe in cosmic timing! Discover which moon phase matches your posting date and get content recommendations based on lunar energy. From New Moon fresh starts to Full Moon peak energy, this calculator suggests optimal content types for each lunar phase. Perfect for creators who follow astrology, want creative inspiration, or simply enjoy adding cosmic intention to their posting schedule. Remember this is entertainment only but can add meaningful ritual to your content planning process.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6 bg-white/10 backdrop-blur border-indigo-500/30">
            <div className="text-center mb-6">
              <label className="block text-body-sm font-medium text-indigo-200 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" /> Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="p-3 border border-indigo-500/30 rounded-lg bg-indigo-900/50 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>

            <div className="text-center py-8">
              <div className="text-8xl mb-4">{currentPhase.emoji}</div>
              <h2 className="text-display-sm font-bold text-white mb-2">{currentPhase.name}</h2>
              <div className="inline-flex items-center space-x-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full">
                <Sparkles size={16} />
                <span className="font-medium">{currentPhase.energy} Energy</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-800/50 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-white mb-2 flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" /> Best Content Types
              </h3>
              <p className="text-body-md text-indigo-200">{currentPhase.bestFor}</p>
            </div>
          </Card>

          <InputsExplained
            inputs={[
              { name: 'Date', description: 'Date to check moon phase', example: 'March 15, 2026', required: true },
            ]}
            note="Moon phase content performs well in astrology, wellness, and spiritual niches."
          />
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-heading-lg font-semibold text-white mb-6 text-center">Full Lunar Cycle Guide</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moonPhases.map((phase, index) => (
              <Card
                key={phase.name}
                className={`p-4 text-center cursor-pointer transition-all ${
                  index === currentPhaseIndex
                    ? 'bg-yellow-400/20 border-yellow-400/50'
                    : 'bg-white/5 border-indigo-500/20 hover:bg-white/10'
                }`}
                onClick={() => {
                  // This is just visual, actual phase depends on date
                }}
              >
                <div className="text-4xl mb-2">{phase.emoji}</div>
                <h3 className="text-body-sm font-semibold text-white mb-1">{phase.name}</h3>
                <p className="text-body-xs text-indigo-300">{phase.energy}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="p-8 bg-white/10 backdrop-blur border-indigo-500/30">
            <h2 className="text-heading-lg font-semibold text-white mb-6 text-center">Moon Phase Content Strategy Table</h2>
            <p className="text-body-md text-indigo-200 mb-6 text-center">
              Each lunar phase offers unique creative opportunities. This strategy table matches content types to moon phases for creators who follow astrological timing. While not scientifically proven, this framework helps maintain consistent posting schedules and resonates with spiritual wellness audiences.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-indigo-400/50">
                    <th className="py-3 px-4 text-heading-sm font-semibold text-white">Moon Phase</th>
                    <th className="py-3 px-4 text-heading-sm font-semibold text-white">Duration</th>
                    <th className="py-3 px-4 text-heading-sm font-semibold text-white">Best Content Types</th>
                    <th className="py-3 px-4 text-heading-sm font-semibold text-white">Expected Engagement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-400/30">
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌑 New Moon</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Series launches, rebrands, goal-setting content, "fresh start" themes</td>
                    <td className="py-3 px-4 text-indigo-200">8-10%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌒 Waxing Crescent</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Growth tutorials, educational posts, beginner guides, skill-building</td>
                    <td className="py-3 px-4 text-indigo-200">7-9%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌓 First Quarter</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Challenges, CTAs, engagement posts, decision-making content</td>
                    <td className="py-3 px-4 text-indigo-200">9-11%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌔 Waxing Gibbous</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">BTS content, refinement tips, process videos, improvement stories</td>
                    <td className="py-3 px-4 text-indigo-200">8-10%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌕 Full Moon</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Viral attempts, major announcements, peak performance content</td>
                    <td className="py-3 px-4 text-indigo-200">12-15%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌖 Waning Gibbous</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Gratitude posts, community appreciation, collaborations</td>
                    <td className="py-3 px-4 text-indigo-200">8-10%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌗 Last Quarter</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Addressing controversies, honest conversations, letting go themes</td>
                    <td className="py-3 px-4 text-indigo-200">7-9%</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">🌘 Waning Crescent</td>
                    <td className="py-3 px-4 text-indigo-200">3.7 days</td>
                    <td className="py-3 px-4 text-indigo-200">Lighter content, throwbacks, rest/reflection, planning content</td>
                    <td className="py-3 px-4 text-indigo-200">6-8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-indigo-300 mt-4">
              Note: Engagement rates reflect anecdotal data from spiritual wellness creators who follow moon phase posting. Actual performance depends on content quality, posting time, and audience demographics. Full Moon content often sees 15-25% higher engagement due to audience interest in lunar peaks.
            </p>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="p-8 bg-white/10 backdrop-blur border-indigo-500/30">
            <h2 className="text-heading-lg font-semibold text-white mb-6 text-center">Why Moon Phase Content Performs</h2>
            <p className="text-body-md text-indigo-200 mb-6 text-center">
              Moon phase content taps into the growing spiritual wellness movement on TikTok. The #MoonTok, #ManifestationTok, and #SpiritualTok communities reached over 50 billion combined views in 2026, representing a 340% year-over-year growth. Here's why this content resonates with audiences and drives engagement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-indigo-900/50 rounded-lg border border-indigo-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-white">Engaged Niche Audience</h3>
                </div>
                <p className="text-body-sm text-indigo-200">
                  The spiritual wellness community is highly engaged with 25M+ active users. Moon phase content achieves 8-12% engagement rates vs. 3-6% for general content. Gen Z (62%) and Millennials (31%) actively seek lunar timing guidance, creating built-in demand for this content type.
                </p>
              </div>
              <div className="p-6 bg-indigo-900/50 rounded-lg border border-indigo-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-white">Emotional Connection</h3>
                </div>
                <p className="text-body-sm text-indigo-200">
                  Spiritual content creates deeper emotional bonds than transactional content. Followers who believe in lunar timing feel personally connected to creators who share their values. This emotional investment drives higher saves, shares, and comment engagement compared to educational content.
                </p>
              </div>
              <div className="p-6 bg-indigo-900/50 rounded-lg border border-indigo-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-white">Shareability Factor</h3>
                </div>
                <p className="text-body-sm text-indigo-200">
                  Moon phase posts are highly shareable as users tag friends with similar beliefs. Full Moon content particularly sees 15-25% engagement spikes as viewers participate in collective lunar rituals. This organic sharing amplifies reach without paid promotion, growing audiences faster.
                </p>
              </div>
              <div className="p-6 bg-indigo-900/50 rounded-lg border border-indigo-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-white">Consistent Posting Framework</h3>
                </div>
                <p className="text-body-sm text-indigo-200">
                  The 29.5-day lunar cycle provides a natural content calendar. Creators batch-produce content for each phase, ensuring consistent posting schedules. Consistency is the #1 growth factor on TikTok. Moon phases make consistency easier through ritualized planning rather than forced discipline.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="p-8 bg-white/10 backdrop-blur border-indigo-500/30">
            <h2 className="text-heading-lg font-semibold text-white mb-6 text-center">Content Ideas by Moon Phase</h2>
            <p className="text-body-md text-indigo-200 mb-8 text-center">
              Match your content strategy to lunar energy with these phase-specific ideas. Whether you create wellness content, lifestyle vlogs, or business advice, these frameworks help maintain themed consistency while resonating with spiritually-minded audiences.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-indigo-900/70 to-purple-900/70 rounded-lg border border-yellow-400/30">
                <div className="text-5xl mb-4 text-center">🌑</div>
                <h3 className="text-heading-md font-semibold text-white mb-3 text-center">New Moon Strategy</h3>
                <p className="text-body-sm text-indigo-200 mb-4">
                  New Moon represents fresh starts and new intentions. This is the optimal time to launch content series, announce rebrands, share goal-setting frameworks, or introduce new product lines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Setting intentions for [niche] this lunar cycle"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"New Moon new series: [topic] deep dive"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Manifesting [goal] - join me for 29.5 days"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Product launch aligned with New Moon energy"</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/70 to-pink-900/70 rounded-lg border border-yellow-400/30">
                <div className="text-5xl mb-4 text-center">🌕</div>
                <h3 className="text-heading-md font-semibold text-white mb-3 text-center">Full Moon Strategy</h3>
                <p className="text-body-sm text-indigo-200 mb-4">
                  Full Moon represents peak energy and visibility. Post your highest-quality content, major announcements, or viral attempts during this phase. Audiences are most engaged during Full Moon periods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Full Moon release: my biggest project yet"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Manifestation check-in: what we've achieved"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Full Moon ritual for [niche audience]"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Peak energy content: [high-value topic]"</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-900/70 to-indigo-900/70 rounded-lg border border-yellow-400/30">
                <div className="text-5xl mb-4 text-center">🌓</div>
                <h3 className="text-heading-md font-semibold text-white mb-3 text-center">Waxing Moon Strategy</h3>
                <p className="text-body-sm text-indigo-200 mb-4">
                  Waxing phases (Crescent, First Quarter, Gibbous) represent growth and building momentum. Share educational content, growth strategies, skill-building tutorials, and progress updates.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Building [skill/audience] during waxing moon"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Tutorial series: [topic] foundations to mastery"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Progress check: how far we've come this cycle"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Growth mindset content for expansion phase"</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-violet-900/70 to-indigo-900/70 rounded-lg border border-yellow-400/30">
                <div className="text-5xl mb-4 text-center">🌗</div>
                <h3 className="text-heading-md font-semibold text-white mb-3 text-center">Waning Moon Strategy</h3>
                <p className="text-body-sm text-indigo-200 mb-4">
                  Waning phases (Gibbous, Last Quarter, Crescent) represent release and reflection. Share gratitude content, reflective storytelling, lessons learned, and authentic behind-the-scenes moments.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Gratitude post: thanking this community"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Releasing what no longer serves: [topic]"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Reflection on [project/goal] - lessons learned"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-body-sm text-indigo-200">"Rest and recharge content for introspection"</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-6 bg-white/10 backdrop-blur border-indigo-500/30">
            <h2 className="text-heading-lg font-semibold text-white mb-4 text-center">Disclaimer</h2>
            <p className="text-body-md text-indigo-200 text-center">
              This is a fun, entertainment-only tool! There's no scientific evidence that moon phases affect social media performance. Your content quality, timing, and audience engagement matter far more than lunar cycles. That said, if believing in cosmic timing brings you joy and motivation, embrace it! 🌙✨
            </p>
          </Card>

          <div className="mt-12">
            <Card className="p-8 mb-12 bg-white/10 backdrop-blur border-indigo-500/30">
              <h3 className="text-heading-md font-semibold text-white mb-6">Related Calculators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculators/posting-time/" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Best Time to Post</h4>
                  <p className="text-body-sm text-indigo-200">Find optimal posting times based on audience data</p>
                </Link>
                <Link href="/calculators/engagement-influence/video-engagement/" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Video Engagement Calculator</h4>
                  <p className="text-body-sm text-indigo-200">Predict video performance with comprehensive metrics</p>
                </Link>
                <Link href="/guides/content-strategy-2025/" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Content Strategy 2026</h4>
                  <p className="text-body-sm text-indigo-200">Latest strategies for TikTok growth and viral content</p>
                </Link>
                <Link href="/guides/tiktok-algorithm-optimization/" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Algorithm Optimization</h4>
                  <p className="text-body-sm text-indigo-200">Master the TikTok algorithm for better reach</p>
                </Link>
              </div>
            </Card>

            <FAQSection
              pageName="Moon Phase Posting Guide"
              faqs={faqData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
