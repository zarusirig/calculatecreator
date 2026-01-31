'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Star, Sparkles, Calendar } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

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
    answer: 'No scientific evidence supports moon phases affecting social media performance. This is a fun, entertainment-only tool. Content quality, timing, and audience engagement matter far more than lunar cycles.'
  },
  {
    question: 'What is the best moon phase for posting?',
    answer: 'From an astrological perspective, Full Moon represents peak energy and New Moon represents fresh starts. However, actual performance depends on your content quality, audience timezone, and posting consistency - not moon phases.'
  },
  {
    question: 'Can I use this for planning my content calendar?',
    answer: 'You can use it for creative inspiration or ritual, but don\'t base serious strategy decisions on moon phases. Use analytics, audience data, and engagement metrics instead for effective content planning.'
  },
  {
    question: 'Why do some creators follow moon phases?',
    answer: 'Some creators enjoy adding intention and ritual to their creative process. While not scientifically proven, the psychological benefits of mindful planning can indirectly improve content consistency and quality.'
  },
  {
    question: 'Is this calculator accurate for moon phases?',
    answer: 'Yes, the calculator uses astronomical calculations to determine actual moon phases for any date. However, remember that using this information for content strategy is purely for fun and inspiration.'
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

        <div className="max-w-3xl mx-auto">
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
                <Link href="/calculators/posting-time" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Best Time to Post</h4>
                  <p className="text-body-sm text-indigo-200">Find optimal posting times based on audience data</p>
                </Link>
                <Link href="/calculators/engagement-influence/video-engagement" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Video Engagement Calculator</h4>
                  <p className="text-body-sm text-indigo-200">Predict video performance with comprehensive metrics</p>
                </Link>
                <Link href="/guides/content-strategy-2025" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Content Strategy 2026</h4>
                  <p className="text-body-sm text-indigo-200">Latest strategies for TikTok growth and viral content</p>
                </Link>
                <Link href="/guides/tiktok-algorithm-optimization" className="p-4 bg-indigo-900/50 rounded-lg hover:bg-indigo-800/50 transition-colors">
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
