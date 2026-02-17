import type { Metadata } from 'next';
import Link from 'next/link';
import { ToolPageTemplate } from '@/components/tools/ToolPageTemplate';
import { RpmToolExperience } from '@/components/tools/RpmToolExperience';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: "TikTok Rpm Calculator and Earnings Tool Guide 2026",
  description: "Use this TikTok rpm calculator to estimate earnings, engagement, and monetization outcomes with practical creator benchmarks and actionable next steps.",
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/rpm/',
  },
};

const faqItems = [
  {
    question: 'What does RPM mean for creators?',
    answer:
      'RPM means revenue per 1,000 views in this calculator context. It helps you compare monetization efficiency across different periods and content strategies.',
  },
  {
    question: 'Is RPM the same as CPM?',
    answer:
      'No. CPM is usually advertiser-side cost per 1,000 impressions. RPM is creator-side estimated revenue per 1,000 views.',
  },
  {
    question: 'Are RPM results guaranteed?',
    answer:
      'No. This tool provides directional estimates. Actual payouts vary by niche, geography, seasonality, and platform policy changes.',
  },
  {
    question: 'Do you store my input values?',
    answer:
      'Inputs are used to calculate your result in-browser and are not intended to be stored as account-level user profiles.',
  },
];

export default function RpmToolPage() {
  return (
    <>
      <FAQPageSchema
        faqs={faqItems}
        title="RPM Calculator FAQs"
        description="Common questions about RPM calculation and interpretation on CalculateCreator."
        url="https://calculatecreator.com/calculators/rpm/"
      />

      <ToolPageTemplate
        breadcrumbs={[
          { label: 'Tools', href: '/tools/' },
          { label: 'TikTok', href: '/tools/' },
          { label: 'RPM Calculator' },
        ]}
        title="RPM Calculator"
        description="This TikTok RPM calculator estimates how much you can earn per 1,000 views. Enter views and earnings to compare performance and optimize monetization."
        updatedAt="February 17, 2026"
        methodologyHref="/methodology/"
        inputAndResult={<RpmToolExperience />}
        howTo={
          <div className="card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">How to use this tool</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-neutral-700">
              <li>
                Enter total views for the same period as your earnings figure. Keep time windows
                aligned (for example, both monthly) to avoid distorted results.
              </li>
              <li>
                Enter your earnings for that period. If you are mixing multiple revenue streams,
                note that combined figures may produce a broader estimate rather than a pure
                program-level RPM.
              </li>
              <li>
                Run the estimate and review the interpretation block. Use RPM directionally to
                compare content batches, posting windows, and audience mixes.
              </li>
              <li>
                Adjust assumptions and rerun the calculation when your niche, geography, or season
                changes. RPM is not static and should be monitored over time.
              </li>
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">TikTok creators: 
              Used only to calculate this result. Your inputs stay in your browser.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Interpreting RPM requires context. A lower RPM does not automatically mean weak
              content quality. It can also reflect audience geography, advertiser demand, creator
              program eligibility, or seasonal shifts in spend. Compare your RPM trend over time and
              pair it with engagement metrics before changing strategy.
            </p>
          </div>
        }
        examples={
          <div className="card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Examples</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
              <li>
                <strong>$3 from 100,000 views:</strong> RPM = $0.030. This is a common baseline
                range in lower-value monetization contexts.
              </li>
              <li>
                <strong>$50 from 1,000,000 views:</strong> RPM = $0.050. This can indicate stronger
                audience value or more favorable monetization conditions.
              </li>
              <li>
                <strong>$120 from 2,000,000 views:</strong> RPM = $0.060. This suggests improved
                efficiency, but still requires checking content mix and regional distribution before
                assuming it will persist.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              These are directional examples. Use your own records for planning and compare trends
              over time instead of relying on one snapshot.
            </p>
          </div>
        }
        relatedTools={
          <div className="card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related tools</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/calculators/earnings-revenue/money/" className="btn btn-secondary btn-sm">
                Money Calculator
              </Link>
              <Link href="/calculators/engagement-influence/engagement/" className="btn btn-secondary btn-sm">
                Engagement Rate
              </Link>
              <Link href="/calculators/engagement-influence/influencer-pricing/" className="btn btn-secondary btn-sm">
                Brand Deal Rate
              </Link>
            </div>
          </div>
        }
        faqs={
          <div className="card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">FAQs</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-700">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <p className="font-semibold text-neutral-900">{item.question}</p>
                  <p className="mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        }
        relatedGuides={
          <div className="card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related guides</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              For deeper planning, pair this estimate with the monetization and growth hubs so you
              can compare RPM movement with engagement trends and revenue-mix strategy.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If you are evaluating campaign-level performance, run scenarios with conservative and
              optimistic assumptions and note the break-even zone where production effort still makes
              economic sense for your channel.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/guides/monetization-calculator-hub/" className="btn btn-secondary btn-sm">
                Monetization guide
              </Link>
              <Link href="/guides/tiktok-growth-hub/" className="btn btn-secondary btn-sm">
                Growth guide
              </Link>
            </div>
          </div>
        }
      />
    </>
  );
}
