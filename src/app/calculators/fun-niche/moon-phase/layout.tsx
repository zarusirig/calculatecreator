import type { Metadata } from 'next';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: "TikTok Moon Phase Calculator",
  description: "Use this TikTok moon phase calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next",
  keywords: ['moon phase posting', 'lunar content calendar', 'tiktok astrology', 'cosmic timing', 'content planning'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/fun-niche/moon-phase/',
  },
};

const faqs = [
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
    answer: "You can use it for creative inspiration or ritual, but don't base serious strategy decisions on moon phases. Use analytics, audience data, and engagement metrics instead for effective content planning."
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

export default function MoonPhaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CalculatorSchema
        name="Moon Phase Posting Guide"
        description="Align your TikTok content with lunar energy. A fun tool for creators who believe in cosmic timing."
        url="https://calculatecreator.com/calculators/fun-niche/moon-phase/"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'Fun & Niche', url: 'https://calculatecreator.com/calculators/fun-niche/' },
          { name: 'Moon Phase', url: 'https://calculatecreator.com/calculators/fun-niche/moon-phase/' }
        ]}
      />
      {children}
    </>
  );
}
