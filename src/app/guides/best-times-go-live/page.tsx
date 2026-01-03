import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Gamepad2, Music, Dumbbell, ChefHat, GraduationCap, Moon, Smile, BarChart3, FlaskConical, Globe, Calendar, Sunrise, Clock, Sun, Star, XCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Times to Go LIVE on TikTok: Data-Backed Schedule (2025)',
  description: 'Optimal TikTok LIVE streaming times by timezone, niche, and audience. Data-backed scheduling guide to maximize viewership and gift earnings.',
  keywords: ['best time tiktok live', 'when to go live', 'tiktok streaming schedule', 'peak live hours', 'tiktok live best time'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/best-times-go-live/',
  },
};

export default function BestTimesGoLivePage() {
  const peakTimesByTimezone = [
    {
      timezone: 'EST (Eastern)',
      peak: '7-11 PM',
      secondary: '12-2 PM',
      morning: '6-9 AM',
      notes: 'Largest US timezone population. Prime time dominates.',
      bestDays: 'Tuesday, Thursday, Saturday'
    },
    {
      timezone: 'PST (Pacific)',
      peak: '6-10 PM',
      secondary: '11 AM-1 PM',
      morning: '7-9 AM',
      notes: 'Tech and entertainment hubs. Later evening works well.',
      bestDays: 'Wednesday, Friday, Sunday'
    },
    {
      timezone: 'GMT (UK)',
      peak: '7-10 PM',
      secondary: '12-2 PM',
      morning: '7-9 AM',
      notes: 'Overlaps with EST evening for multi-region reach.',
      bestDays: 'Monday, Wednesday, Saturday'
    },
    {
      timezone: 'CET (Europe)',
      peak: '8-11 PM',
      secondary: '12-2 PM',
      morning: '7-9 AM',
      notes: 'Multiple countries, diverse audience.',
      bestDays: 'Tuesday, Thursday, Saturday'
    },
    {
      timezone: 'AEST (Australia)',
      peak: '7-10 PM',
      secondary: '12-2 PM',
      morning: '6-8 AM',
      notes: 'Evening prime time, weekend mornings strong.',
      bestDays: 'Thursday, Saturday, Sunday'
    },
  ];

  const nicheSpecificTimes = [
    {
      niche: 'Gaming',
      bestTimes: '8 PM - 1 AM',
      reasoning: 'Core gaming audience is online after work/school. Late night sessions have dedicated viewers.',
      giftPotential: 'Very High',
      avgStreamLength: '2-4 hours',
      icon: 'Gamepad2'
    },
    {
      niche: 'Beauty & Makeup',
      bestTimes: '6-9 PM',
      reasoning: 'Get ready with me content. Viewers applying makeup for evening events.',
      giftPotential: 'High',
      avgStreamLength: '45 min - 1.5 hours',
      icon: 'Smile'
    },
    {
      niche: 'Fitness',
      bestTimes: '6-8 AM, 5-7 PM',
      reasoning: 'Morning workout warriors and post-work exercise crowd.',
      giftPotential: 'Medium',
      avgStreamLength: '30 min - 1 hour',
      icon: 'Dumbbell'
    },
    {
      niche: 'Cooking & Food',
      bestTimes: '5-8 PM',
      reasoning: 'Dinner prep time. Viewers cooking along or getting inspired.',
      giftPotential: 'Medium-High',
      avgStreamLength: '1-2 hours',
      icon: 'ChefHat'
    },
    {
      niche: 'Music & Performances',
      bestTimes: '8-11 PM',
      reasoning: 'Evening entertainment time. Concert-like atmosphere.',
      giftPotential: 'Very High',
      avgStreamLength: '1-3 hours',
      icon: 'Music'
    },
    {
      niche: 'Educational/Business',
      bestTimes: '12-2 PM, 7-9 PM',
      reasoning: 'Lunch break learning and evening professional development.',
      giftPotential: 'Medium',
      avgStreamLength: '30 min - 1 hour',
      icon: 'GraduationCap'
    },
    {
      niche: 'ASMR & Relaxation',
      bestTimes: '9 PM - 12 AM',
      reasoning: 'Bedtime relaxation content. Wind-down audience.',
      giftPotential: 'High',
      avgStreamLength: '1-3 hours',
      icon: 'Moon'
    },
    {
      niche: 'Comedy & Entertainment',
      bestTimes: '7-11 PM',
      reasoning: 'Evening entertainment seekers. Weekend afternoons also strong.',
      giftPotential: 'High',
      avgStreamLength: '1-2 hours',
      icon: 'Smile'
    },
  ];

  const dayOfWeekData = [
    { day: 'Monday', rating: 3, viewership: 'Medium', notes: 'Slower start to week. Good for building habits.' },
    { day: 'Tuesday', rating: 4, viewership: 'High', notes: 'Strong engagement. Less competition than weekend.' },
    { day: 'Wednesday', rating: 4, viewership: 'High', notes: 'Mid-week peak. Excellent for regular scheduling.' },
    { day: 'Thursday', rating: 5, viewership: 'Very High', notes: 'Best weekday. Pre-weekend energy.' },
    { day: 'Friday', rating: 3, viewership: 'Medium', notes: 'Varies. Early evening good, late competition.' },
    { day: 'Saturday', rating: 5, viewership: 'Very High', notes: 'Peak day overall. More competition but larger audience.' },
    { day: 'Sunday', rating: 4, viewership: 'High', notes: 'Strong early/mid day. Drops late evening.' },
  ];

  const optimizationStrategies = [
    {
      strategy: 'Analyze Your Analytics First',
      description: 'Before following generic advice, check your own TikTok analytics. Go to Creator Tools → Analytics → LIVE to see when YOUR specific audience is most active.',
      actionItems: [
        'Review last 28 days of LIVE data',
        'Note peak concurrent viewer times',
        'Identify patterns in gift-giving times',
        'Compare weekday vs weekend performance'
      ],
      icon: 'BarChart3'
    },
    {
      strategy: 'Test Different Time Slots',
      description: 'Run a 4-week experiment streaming at different times. Track metrics for each slot before committing to a schedule.',
      actionItems: [
        'Week 1: Morning slot (6-9 AM)',
        'Week 2: Lunch slot (12-2 PM)',
        'Week 3: Early evening (5-7 PM)',
        'Week 4: Prime time (8-10 PM)'
      ],
      icon: 'FlaskConical'
    },
    {
      strategy: 'Consider Multi-Timezone Strategy',
      description: 'If your audience spans multiple timezones, schedule streams that overlap peak times. 7 PM EST hits both East Coast evening and West Coast afternoon.',
      actionItems: [
        'Map your audience geography',
        'Find overlapping peak windows',
        'Alternate times to serve different regions',
        'Use analytics to track regional engagement'
      ],
      icon: 'Globe'
    },
    {
      strategy: 'Build a Consistent Schedule',
      description: 'Consistency beats optimization. Viewers remember and plan for regular stream times. A Tuesday 8 PM regular stream builds loyal viewers.',
      actionItems: [
        'Pick 2-3 consistent weekly slots',
        'Announce schedule in bio and videos',
        'Set reminders and notifications',
        'Stick to schedule for at least 8 weeks'
      ],
      icon: 'Calendar'
    },
  ];

  const viewerBehaviorInsights = [
    {
      insight: 'Gift Giving Peaks at Stream Start',
      detail: 'The first 15-20 minutes of a stream sees the highest gift activity. Regular viewers often send welcome gifts. Start strong with engaging content.',
      recommendation: 'Open with something interactive or exciting, not setup/small talk.'
    },
    {
      insight: 'Longer Streams Earn More',
      detail: 'Streams over 60 minutes earn 3-4x more in gifts than 30-minute streams. Viewers need time to settle in and feel connected.',
      recommendation: 'Aim for minimum 45 minutes. 60-90 minutes is optimal for most niches.'
    },
    {
      insight: 'Weekend Afternoon Competition',
      detail: 'Saturday/Sunday afternoons have high viewership but also high streamer competition. Your visibility depends on your ranking.',
      recommendation: 'If under 10K followers, weekday evenings may yield better per-viewer engagement.'
    },
    {
      insight: 'Late Night Loyalty',
      detail: 'Streams after 10 PM have fewer total viewers but higher engagement per viewer. Night owl audiences are loyal and generous.',
      recommendation: 'Consider one late-night stream weekly for superfan engagement.'
    },
    {
      insight: 'Notification Impact Timing',
      detail: 'Going LIVE sends push notifications to followers. Too early (before 9 AM) or too late (after 11 PM) notifications may be ignored or annoying.',
      recommendation: 'Sweet spot is 11 AM - 10 PM for notification-friendly streaming.'
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Only streaming when you feel like it',
      impact: 'Irregular schedules kill viewer habits. Followers forget about you.',
      fix: 'Set 2-3 fixed weekly times and stick to them for 2+ months.'
    },
    {
      mistake: 'Copying other creators times exactly',
      impact: 'Their audience is not your audience. What works for them may flop for you.',
      fix: 'Use generic times as starting points but let YOUR data guide decisions.'
    },
    {
      mistake: 'Streaming too short',
      impact: 'Streams under 30 minutes never gain momentum. Algorithm does not promote them.',
      fix: 'Minimum 45 minutes. Build stamina gradually if new to streaming.'
    },
    {
      mistake: 'Ignoring timezone differences',
      impact: 'You might be streaming at 3 AM for your core audience without realizing.',
      fix: 'Check analytics for audience location. Adjust times accordingly.'
    },
    {
      mistake: 'Never streaming on weekdays',
      impact: 'Missing consistent habit-building with core fans who are free evenings.',
      fix: 'Tuesday or Thursday evening streams build loyal weekly viewers.'
    },
  ];

  const monthlyCalendarTemplate = {
    week1: [
      { day: 'Tuesday', time: '8 PM EST', type: 'Regular Stream', duration: '60 min' },
      { day: 'Saturday', time: '3 PM EST', type: 'Special Event', duration: '90 min' },
    ],
    week2: [
      { day: 'Tuesday', time: '8 PM EST', type: 'Regular Stream', duration: '60 min' },
      { day: 'Thursday', time: '8 PM EST', type: 'Bonus Stream', duration: '45 min' },
      { day: 'Sunday', time: '2 PM EST', type: 'Weekend Chill', duration: '60 min' },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-primary-600">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Best Times to Go LIVE</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-16">

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
              alt="Featured image for Best Times to Go LIVE on TikTok"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
            Data-Backed 2025 Guide
          </span>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Best Times to Go LIVE on TikTok
          </h1>
          <p className="text-heading-md text-white/90 mb-8 max-w-2xl mx-auto">
            Maximize your LIVE stream viewership and gift earnings with optimal scheduling. Data from thousands of streams reveals when audiences are most active and generous.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/20 rounded-full text-white">7-11 PM Peak Hours</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white">Thursday Best Weekday</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white">60+ Min Optimal</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-12">
        {/* Quick Reference */}
        <section>
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Quick Reference: Universal Peak Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl text-center">
                <Sunrise className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                <h3 className="text-heading-md font-bold text-neutral-900">Morning</h3>
                <p className="text-display-sm font-bold text-orange-600">6-9 AM</p>
                <p className="text-body-sm text-neutral-600 mt-2">Commuters and early risers. Lower competition.</p>
              </div>
              <div className="p-6 bg-white rounded-xl text-center border-2 border-orange-300">
                <Clock className="w-12 h-12 mx-auto mb-3 text-red-600" />
                <h3 className="text-heading-md font-bold text-neutral-900">Prime Time</h3>
                <p className="text-display-sm font-bold text-red-600">7-11 PM</p>
                <p className="text-body-sm text-neutral-600 mt-2">Highest viewership. Best for most niches.</p>
                <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">RECOMMENDED</span>
              </div>
              <div className="p-6 bg-white rounded-xl text-center">
                <Sun className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                <h3 className="text-heading-md font-bold text-neutral-900">Lunch</h3>
                <p className="text-display-sm font-bold text-orange-600">12-2 PM</p>
                <p className="text-body-sm text-neutral-600 mt-2">Break-time browsers. Good secondary slot.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Peak Times by Timezone */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Peak Times by Timezone
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Optimal streaming times vary by where your audience is located. If your analytics show a specific region dominates, prioritize those times.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Timezone</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Peak Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Secondary</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Best Days</th>
                  </tr>
                </thead>
                <tbody>
                  {peakTimesByTimezone.map((tz, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4 font-medium text-neutral-900">{tz.timezone}</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">{tz.peak}</td>
                      <td className="py-3 px-4 text-neutral-700">{tz.secondary}</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">{tz.bestDays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Niche-Specific Times */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Best Times by Niche
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Different content types attract audiences with different schedules. A fitness stream at 6 AM makes sense; a gaming stream at 6 AM does not. Match your timing to your niche.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nicheSpecificTimes.map((niche, idx) => {
                const IconComponent = niche.icon === 'Gamepad2' ? Gamepad2 :
                                       niche.icon === 'Smile' ? Smile :
                                       niche.icon === 'Dumbbell' ? Dumbbell :
                                       niche.icon === 'ChefHat' ? ChefHat :
                                       niche.icon === 'Music' ? Music :
                                       niche.icon === 'GraduationCap' ? GraduationCap :
                                       Moon;
                return (
                  <div key={idx} className="p-5 bg-neutral-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-8 h-8 flex-shrink-0 text-purple-600" />
                      <div>
                        <h3 className="text-heading-md font-bold text-neutral-900">{niche.niche}</h3>
                        <p className="text-primary-600 font-semibold">{niche.bestTimes}</p>
                      </div>
                    </div>
                    <p className="text-body-sm text-neutral-700 mb-3">{niche.reasoning}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        Gift Potential: {niche.giftPotential}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        Optimal Length: {niche.avgStreamLength}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        {/* Day of Week Analysis */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Best Days to Stream
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Not all days are created equal. Thursday and Saturday consistently outperform, while Monday tends to be slower.
            </p>
            <div className="space-y-3">
              {dayOfWeekData.map((day, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-neutral-900 w-24">{day.day}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: day.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-medium ${day.viewership === 'Very High' ? 'text-green-600' : day.viewership === 'High' ? 'text-blue-600' : 'text-neutral-700'}`}>
                      {day.viewership}
                    </span>
                    <p className="text-body-sm text-neutral-600">{day.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Optimization Strategies */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              How to Find YOUR Optimal Time
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Generic best times are a starting point, not a destination. Your specific audience may have different patterns. Here is how to find your optimal schedule.
            </p>
            <div className="space-y-6">
              {optimizationStrategies.map((strategy, idx) => {
                const IconComponent = strategy.icon === 'BarChart3' ? BarChart3 :
                                       strategy.icon === 'FlaskConical' ? FlaskConical :
                                       strategy.icon === 'Globe' ? Globe :
                                       Calendar;
                return (
                  <div key={idx} className="p-6 bg-neutral-50 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <IconComponent className="w-8 h-8 flex-shrink-0 text-blue-600 mt-1" />
                      <div>
                        <h3 className="text-heading-md font-bold text-neutral-900">{strategy.strategy}</h3>
                        <p className="text-body-md text-neutral-700">{strategy.description}</p>
                      </div>
                    </div>
                    <div className="ml-14">
                      <h4 className="text-label-md font-semibold text-neutral-900 mb-2">Action Items:</h4>
                      <ul className="space-y-1">
                        {strategy.actionItems.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-body-sm text-neutral-700 flex items-center gap-2">
                            <span className="text-primary-600">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        {/* Viewer Behavior Insights */}
        <section>
          <Card className="bg-blue-50 border-blue-200">
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Viewer Behavior Insights
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Understanding how viewers behave during streams helps you optimize not just when to stream, but how to structure your streams.
            </p>
            <div className="space-y-4">
              {viewerBehaviorInsights.map((insight, idx) => (
                <div key={idx} className="p-5 bg-white rounded-lg">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">{insight.insight}</h3>
                  <p className="text-body-md text-neutral-700 mb-3">{insight.detail}</p>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <p className="text-body-sm text-neutral-800">
                      <span className="font-semibold">Recommendation:</span> {insight.recommendation}
                    </p>
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
              Common Scheduling Mistakes
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-lg">
                  <h3 className="text-heading-md font-semibold text-error-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0" /> {item.mistake}
                  </h3>
                  <p className="text-body-md text-neutral-700 mb-2">
                    <span className="font-medium">Impact:</span> {item.impact}
                  </p>
                  <p className="text-body-md text-neutral-700 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
                    <span><span className="font-medium text-green-600">Fix:</span> {item.fix}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Sample Schedule */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Sample Weekly Schedule Template
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Here is a proven schedule template for building consistent LIVE streaming habits. Adjust times based on your analytics and audience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-neutral-50 rounded-lg">
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Standard Week</h3>
                {monthlyCalendarTemplate.week1.map((stream, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-0">
                    <div>
                      <span className="font-medium text-neutral-900">{stream.day}</span>
                      <span className="text-body-sm text-neutral-600 ml-2">{stream.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-primary-600 font-medium">{stream.time}</span>
                      <span className="text-body-sm text-neutral-500 ml-2">({stream.duration})</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-neutral-50 rounded-lg">
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Growth Week</h3>
                {monthlyCalendarTemplate.week2.map((stream, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-0">
                    <div>
                      <span className="font-medium text-neutral-900">{stream.day}</span>
                      <span className="text-body-sm text-neutral-600 ml-2">{stream.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-primary-600 font-medium">{stream.time}</span>
                      <span className="text-body-sm text-neutral-500 ml-2">({stream.duration})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section>
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="text-center">
              <h2 className="text-heading-xl font-bold mb-4">Calculate Your LIVE Earnings Potential</h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Now that you know when to stream, find out how much you could earn. Use our LIVE Gifts Calculator to estimate your income potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators/live-gifts" className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
                  LIVE Gifts Calculator
                </Link>
                <Link href="/guides/tiktok-live-earnings-guide" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors">
                  LIVE Earnings Guide
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="p-4 bg-neutral-100 rounded-lg border border-neutral-200">
          <p className="text-body-sm text-neutral-600">
            <span className="font-semibold">Disclaimer:</span> Optimal streaming times are based on aggregate data from creator surveys and platform analytics. Your specific audience may have different patterns. Always verify recommendations against your own TikTok analytics data. Results vary based on niche, audience demographics, and content quality.
          </p>
        </div>
      </div>
    </div>
  );
}
