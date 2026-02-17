import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "TikTok Glossary for Creator Earnings and Growth Guide",
  description: "Explore TikTok glossary content with creator earnings context, engagement benchmarks, monetization guidance, and clear next-step recommendations.",
  alternates: {
    canonical: 'https://calculatecreator.com/glossary/',
  },
};

type GlossaryTerm = {
  term: string;
  definition: string;
  relatedHref: string;
  relatedLabel: string;
};

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Ad Revenue',
    definition:
      'Ad revenue is income generated when ads run against your content or traffic. In creator businesses, ad revenue can come directly from platform programs or indirectly through distribution channels. It often varies by geography, seasonality, and advertiser demand rather than just raw view volume.',
    relatedHref: '/calculators/ad-revenue/',
    relatedLabel: 'Ad Revenue Calculator',
  },
  {
    term: 'Algorithm',
    definition:
      'The algorithm is the recommendation system that decides how widely content is shown and to which audiences. It evaluates interaction signals like watch time, completion behavior, engagement quality, and viewer history. Algorithm shifts can change results quickly even when your posting cadence stays the same.',
    relatedHref: '/guides/tiktok-growth-hub/',
    relatedLabel: 'Growth Hub Guide',
  },
  {
    term: 'Audience Demographics',
    definition:
      'Audience demographics describe who is watching, including age ranges, location clusters, language preferences, and consumption patterns. These segments affect monetization potential because advertiser value differs by market and audience profile. Demographic fit also influences brand-deal pricing and campaign conversion quality.',
    relatedHref: '/benchmarks/',
    relatedLabel: 'Benchmarks Hub',
  },
  {
    term: 'Average Watch Time',
    definition:
      'Average watch time measures how long viewers stay with a piece of content on average. Higher watch time usually indicates stronger content fit and can improve distribution opportunities. It is most useful when compared with video length and completion rate instead of viewed in isolation.',
    relatedHref: '/calculators/watch-time/',
    relatedLabel: 'Watch Time Calculator',
  },
  {
    term: 'Brand Deal',
    definition:
      'A brand deal is a paid collaboration where a creator produces or distributes sponsored content. Pricing can vary widely based on audience quality, deliverables, exclusivity, usage rights, and timing. Good deal analysis balances immediate payout with long-term audience trust and opportunity cost.',
    relatedHref: '/calculators/engagement-influence/influencer-pricing/',
    relatedLabel: 'Brand Deal Rate Calculator',
  },
  {
    term: 'Click-Through Rate',
    definition:
      'Click-through rate (CTR) is the percentage of impressions that result in a click. CTR helps evaluate whether creative, hook, and targeting are aligned with audience intent. A high CTR with poor conversion can indicate weak landing-page quality, while low CTR can indicate message mismatch.',
    relatedHref: '/calculators/conversion-rate/',
    relatedLabel: 'Conversion Rate Calculator',
  },
  {
    term: 'Coins',
    definition:
      'Coins are virtual units viewers purchase to send gifts during live experiences. The creator payout pathway is not one-to-one with purchase value because platform economics and conversion rules apply. Understanding coins helps creators estimate live-stream monetization outcomes more realistically.',
    relatedHref: '/calculators/coins-gifts-diamonds/coins/',
    relatedLabel: 'Coins Calculator',
  },
  {
    term: 'Commission Rate',
    definition:
      'Commission rate is the percentage of a sale paid to a creator or affiliate partner. Rate quality must be evaluated together with conversion rate, refund behavior, and product price. A high commission percentage is less meaningful if conversion quality or buyer intent is weak.',
    relatedHref: '/calculators/affiliate-commission/',
    relatedLabel: 'Affiliate Commission Calculator',
  },
  {
    term: 'Completion Rate',
    definition:
      'Completion rate is the percentage of viewers who watch through to the end of a video. It is a strong signal of content relevance and pacing quality. Completion trends often improve when creators tighten structure, improve opening hooks, and match content length to audience expectations.',
    relatedHref: '/calculators/completion-rate/',
    relatedLabel: 'Completion Rate Calculator',
  },
  {
    term: 'Content Pillar',
    definition:
      'A content pillar is a recurring theme that organizes what you publish and why your audience follows you. Pillars improve consistency and make performance analysis easier across formats. Strong pillars help creators avoid random posting that inflates output but weakens strategic growth.',
    relatedHref: '/guides/tiktok-growth-hub/',
    relatedLabel: 'Growth Strategy Guide',
  },
  {
    term: 'Conversion Rate',
    definition:
      'Conversion rate is the percentage of users who complete a target action such as purchase, sign-up, or lead submission. It is one of the most practical business metrics because it ties attention to outcomes. Conversion rate should be measured by segment to avoid misleading blended averages.',
    relatedHref: '/calculators/conversion-rate/',
    relatedLabel: 'Conversion Rate Calculator',
  },
  {
    term: 'CPM',
    definition:
      'CPM (cost per mille) is the advertiser-side cost for 1,000 impressions. It reflects market demand, audience quality, and placement context. Creators monitor CPM-related concepts to understand ad market conditions, but they should not confuse CPM with direct creator payout metrics.',
    relatedHref: '/calculators/commerce-ads/rpm-cpm/',
    relatedLabel: 'RPM and CPM Tool',
  },
  {
    term: 'Creator Fund',
    definition:
      'Creator Fund is a platform monetization model that pays creators based on qualifying performance and policy criteria. Payout rates can fluctuate based on region, program rules, and traffic conditions. Planning should use ranges rather than fixed assumptions because program economics can change.',
    relatedHref: '/calculators/earnings-revenue/creator-fund/',
    relatedLabel: 'Creator Fund Calculator',
  },
  {
    term: 'Creator Marketplace',
    definition:
      'Creator Marketplace refers to platform-managed environments where brands and creators connect for collaborations. It can reduce discovery friction but does not guarantee fair pricing. Creators still need clear rate logic, deliverable definitions, and negotiation standards before accepting campaigns.',
    relatedHref: '/guides/tiktok-series-monetization/',
    relatedLabel: 'Monetization Guide',
  },
  {
    term: 'Creator Rewards Program',
    definition:
      'Creator Rewards Program is a payout framework that can replace or supplement older monetization models in some regions. Program requirements and payout behavior may differ from legacy structures. Creators should validate eligibility rules and content constraints before relying on projections.',
    relatedHref: '/calculators/earnings-revenue/creator-fund/',
    relatedLabel: 'Creator Program Estimator',
  },
  {
    term: 'Diamonds',
    definition:
      'Diamonds are a converted value creators receive from supported gifting systems. They represent a payout intermediary, not necessarily the original purchase value of viewer transactions. Understanding diamond conversion helps creators evaluate net live-stream income more accurately.',
    relatedHref: '/calculators/coins-gifts-diamonds/diamonds/',
    relatedLabel: 'Diamonds Converter',
  },
  {
    term: 'Engagement Rate',
    definition:
      'Engagement rate expresses interactions relative to reach, views, or followers, depending on methodology. It is useful for benchmarking content resonance and evaluating campaign quality. Always specify formula choice because engagement rate can look very different under different denominators.',
    relatedHref: '/calculators/engagement-influence/engagement/',
    relatedLabel: 'Engagement Rate Calculator',
  },
  {
    term: 'EPM',
    definition:
      'EPM commonly means earnings per mille in creator operations and is conceptually similar to RPM in many contexts. Teams use EPM-style metrics to compare income efficiency across formats or channels. Clear definition is important because organizations sometimes use EPM and RPM with different scope rules.',
    relatedHref: '/calculators/commerce-ads/rpm-cpm/',
    relatedLabel: 'RPM Benchmarks Tool',
  },
  {
    term: 'FYP',
    definition:
      'FYP stands for "For You Page," the primary recommendation feed where discovery occurs for many short-form creators. Visibility in this feed can drive rapid view growth when content matches audience behavior patterns. FYP performance is highly dynamic and cannot be guaranteed by any single tactic.',
    relatedHref: '/guides/tiktok-growth-hub/',
    relatedLabel: 'FYP Strategy Guide',
  },
  {
    term: 'Gifts',
    definition:
      'Gifts are virtual items sent by viewers during eligible live sessions or features. Gift value is mediated by platform rules and conversion structures before creator payout. Sustainable gift revenue typically depends on community trust, session quality, and repeat audience participation.',
    relatedHref: '/calculators/live-gifts/',
    relatedLabel: 'Live Gifts Calculator',
  },
  {
    term: 'GMV',
    definition:
      'GMV (gross merchandise value) is total sales value before deductions such as returns, discounts, or fees. It is useful for top-line commerce analysis but should not be confused with net creator earnings. For practical decisions, creators should compare GMV with margin, commission, and conversion quality.',
    relatedHref: '/calculators/commerce-ads/shop-profit/',
    relatedLabel: 'Shop Profit Calculator',
  },
  {
    term: 'Hashtag Challenge',
    definition:
      'A hashtag challenge is a campaign structure where creators and audiences publish around a shared topic marker. It can improve discoverability and participation when the concept is clear and culturally relevant. Performance depends on execution quality, not hashtag usage alone.',
    relatedHref: '/calculators/hashtag-performance/',
    relatedLabel: 'Hashtag Performance Calculator',
  },
  {
    term: 'Impressions',
    definition:
      'Impressions count how many times content is displayed, regardless of whether users engage deeply. Impressions are useful for awareness analysis but do not guarantee meaningful outcomes. Pair impressions with watch, click, or conversion metrics for better decision quality.',
    relatedHref: '/benchmarks/',
    relatedLabel: 'Benchmark Ranges',
  },
  {
    term: 'Influencer',
    definition:
      'An influencer is a creator whose audience trust can shape attention, preference, or buying behavior. Influence quality is determined by audience fit and credibility, not follower count alone. Campaign success typically depends on relevance, creative quality, and measurable outcomes.',
    relatedHref: '/guides/monetization-calculator-hub/',
    relatedLabel: 'Influencer Monetization Guide',
  },
  {
    term: 'Live Gifts',
    definition:
      'Live gifts are monetization events where audience members send paid virtual items during real-time sessions. Revenue can be volatile and is influenced by session length, audience retention, and community depth. Forecasting works best with ranges and conservative assumptions.',
    relatedHref: '/calculators/live-gifts/',
    relatedLabel: 'Live Gifts Estimator',
  },
  {
    term: 'Micro-Influencer',
    definition:
      'A micro-influencer usually refers to a creator with a smaller but focused audience segment. These creators often deliver stronger niche relevance and community trust than broad-reach accounts. Pricing should account for conversion quality, not only audience size.',
    relatedHref: '/calculators/engagement-influence/influencer-pricing/',
    relatedLabel: 'Influencer Pricing Tool',
  },
  {
    term: 'Monetization',
    definition:
      'Monetization is the process of turning attention, influence, or distribution into revenue. For creators, common channels include ads, sponsorships, commissions, product sales, and subscriptions. Healthy monetization balances near-term earnings with audience trust and long-term brand value.',
    relatedHref: '/calculators/earnings-revenue/money/',
    relatedLabel: 'Total Earnings Calculator',
  },
  {
    term: 'Niche',
    definition:
      'A niche is the specific subject area and audience context a creator serves. Niche choice affects RPM ranges, sponsorship pricing, conversion potential, and content competition. Strategic niche positioning helps creators improve consistency and attract better-fit partnerships.',
    relatedHref: '/calculators/niche-profitability/',
    relatedLabel: 'Niche Profitability Calculator',
  },
  {
    term: 'Pay Per View',
    definition:
      'Pay per view generally describes payout models where revenue is tied to view volume. In creator ecosystems, pure pay-per-view assumptions are often modified by eligibility rules and quality thresholds. Treat per-view models as approximate planning tools, not guaranteed unit economics.',
    relatedHref: '/calculators/rpm/',
    relatedLabel: 'RPM Calculator',
  },
  {
    term: 'Reach',
    definition:
      'Reach refers to the number of unique users exposed to your content during a period. It differs from impressions, which can count repeated exposures. Reach is useful for audience expansion analysis but should be paired with engagement and conversion to assess quality.',
    relatedHref: '/calculators/video-performance/',
    relatedLabel: 'Video Performance Calculator',
  },
  {
    term: 'Retention Rate',
    definition:
      'Retention rate measures how well viewers continue watching across a video timeline or across repeated sessions. Strong retention signals audience fit and can improve distribution quality over time. Retention is often improved by clearer structure, stronger hooks, and better pacing discipline.',
    relatedHref: '/calculators/watch-time/',
    relatedLabel: 'Retention and Watch Time Tool',
  },
  {
    term: 'RPM',
    definition:
      'RPM (revenue per mille) estimates earnings per 1,000 views or comparable units depending on the model. It is one of the most practical efficiency metrics for creators because it links distribution to income potential. RPM should always be interpreted with context about geography, niche, and seasonality.',
    relatedHref: '/calculators/rpm/',
    relatedLabel: 'RPM Calculator',
  },
  {
    term: 'Shadowban',
    definition:
      'Shadowban is a community term for a perceived drop in visibility without explicit enforcement messaging. In many cases, performance drops are caused by content fit or demand shifts rather than hidden penalties. Diagnosis should start with data review before assuming suppression.',
    relatedHref: '/guides/tiktok-growth-hub/',
    relatedLabel: 'Distribution Diagnostics Guide',
  },
  {
    term: 'Spark Ads',
    definition:
      'Spark Ads are ad formats that boost existing creator posts rather than publishing fully separate creative assets. They can preserve social proof while adding paid distribution. Campaign evaluation should include both paid outcomes and long-term audience trust effects.',
    relatedHref: '/calculators/campaign-roi/',
    relatedLabel: 'Campaign ROI Calculator',
  },
  {
    term: 'Sponsorship',
    definition:
      'Sponsorship is a commercial partnership where a brand compensates a creator for specific deliverables or campaign participation. Agreement quality depends on rights, revision scope, exclusivity, usage terms, and performance expectations. Clear contract structure is as important as headline rate.',
    relatedHref: '/calculators/sponsorship-roi/',
    relatedLabel: 'Sponsorship ROI Calculator',
  },
  {
    term: 'TikTok Series',
    definition:
      'TikTok Series refers to structured content collections or paid-access formats where creators package related content for deeper audience value. Series strategies often prioritize depth over virality and can support recurring revenue patterns. Planning should include completion behavior and perceived content value.',
    relatedHref: '/guides/tiktok-series-monetization/',
    relatedLabel: 'Series Monetization Guide',
  },
  {
    term: 'TikTok Shop',
    definition:
      'TikTok Shop is a commerce environment where creators can promote or sell products and earn commission or margin. Success is driven by product-market fit, creative demonstration quality, and conversion funnel health. Commerce outcomes are rarely stable without ongoing testing.',
    relatedHref: '/calculators/commerce-ads/shop-profit/',
    relatedLabel: 'Shop Commission Calculator',
  },
  {
    term: 'Trending',
    definition:
      'Trending describes topics, sounds, or formats currently receiving above-baseline audience attention. Trend participation can accelerate reach when creative execution is timely and relevant. Blind trend chasing without strategic fit often produces low-quality traffic and weak conversion.',
    relatedHref: '/calculators/viral-potential/',
    relatedLabel: 'Viral Potential Calculator',
  },
  {
    term: 'UGC',
    definition:
      'UGC (user-generated content) refers to creator-produced content that often feels native to audience behavior rather than brand-produced ad creative. Brands use UGC approaches to improve authenticity and conversion performance. Compensation structures vary by rights, usage duration, and distribution scope.',
    relatedHref: '/calculators/content-value/',
    relatedLabel: 'Content Value Calculator',
  },
  {
    term: 'Views',
    definition:
      'Views represent counted playback events under platform-defined measurement rules. View totals are useful for top-line distribution analysis but do not reveal monetization quality on their own. Pair views with RPM, retention, and conversion metrics to evaluate business impact.',
    relatedHref: '/calculators/rpm/',
    relatedLabel: 'Views to RPM Analysis',
  },
  {
    term: 'Viral',
    definition:
      'Viral usually means growth that accelerates rapidly through recommendation and sharing loops. Viral outcomes can produce short-term spikes but are difficult to sustain without repeatable content systems. Sustainable creator businesses rely on consistency, not only breakout events.',
    relatedHref: '/calculators/viral-potential/',
    relatedLabel: 'Viral Potential Tool',
  },
  {
    term: 'Watch Time',
    definition:
      'Watch time is the cumulative amount of time viewers spend consuming your content. It is a core quality signal for recommendation systems and campaign value assessments. Watch time trends are most informative when broken down by format, audience segment, and content pillar.',
    relatedHref: '/calculators/watch-time/',
    relatedLabel: 'Watch Time Calculator',
  },
];

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'CalculateCreator Creator Economy Glossary',
  description:
    'Alphabetical glossary of creator monetization, analytics, and platform terms used throughout calculatecreator.com.',
  url: 'https://calculatecreator.com/glossary/',
  hasDefinedTerm: glossaryTerms.map((term) => ({
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    url: `https://calculatecreator.com/glossary/#${term.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-5xl">
          <h1 className="text-display-sm font-bold text-neutral-900">Creator Glossary</h1>
          <p className="mt-4 max-w-3xl text-body-md text-neutral-700">TikTok creators: 
            This glossary defines key monetization, analytics, and creator-business terms used
            across CalculateCreator. Each definition links to at least one related calculator or
            guide so you can move from concept to action.
          </p>

          <div className="mt-8 space-y-4">
            {glossaryTerms.map((item) => {
              const anchor = item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <article id={anchor} key={item.term} className="card p-6">
                  <h2 className="text-heading-sm font-semibold text-neutral-900">{item.term}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.definition}</p>
                  <p className="mt-3 text-sm text-neutral-600">
                    Related: <Link href={item.relatedHref} className="link">{item.relatedLabel}</Link>
                  </p>
                </article>
              );
            })}
          </div>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related resources</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <Link href="/tools/" className="link">
                  Tools Directory
                </Link>{' '}
                for calculator workflows.
              </li>
              <li>
                <Link href="/guides/" className="link">
                  Guides
                </Link>{' '}
                for long-form explanations and examples.
              </li>
              <li>
                <Link href="/methodology/" className="link">
                  Methodology
                </Link>{' '}
                for assumption transparency.
              </li>
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
