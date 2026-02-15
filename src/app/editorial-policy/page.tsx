import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy | TikTok Creator Calculator',
  description:
    'Our commitment to accuracy, transparency, and editorial independence. Explore how we research, fact-check, and maintain the highest standards for TikTok creator economy content.',
  alternates: {
    canonical: 'https://calculatecreator.com/editorial-policy/',
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <WebPageSchema
        title="Editorial Policy | TikTok Creator Calculator"
        description="Our commitment to accuracy, transparency, and editorial independence. Explore how we research, fact-check, and maintain the highest standards for TikTok creator economy content."
        url="https://calculatecreator.com/editorial-policy/"
      />
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center space-x-3 mb-8">
            <img
              src="/images/calculate-creator-transparent-v2.png"
              alt="CalculateCreator logo - Editorial Policy"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-display-md font-bold text-neutral-900">
                Editorial Policy
              </h1>
            </div>
          </div>
          <p className="text-body-md text-neutral-600 mb-8">
            Last Updated: February 8, 2026
          </p>

          <div className="space-y-6">
            {/* Section 1: Our Editorial Standards */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Our Editorial Standards
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  At TikTok Creator Calculator, we hold ourselves to the highest
                  editorial standards. Every piece of content we publish,
                  whether it is a calculator, guide, benchmark, or data point,
                  is built on 3 core principles (accuracy, transparency, and
                  independence).
                </p>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Accuracy
                  </h3>
                  <p className="leading-relaxed">
                    We provide the most accurate and up-to-date information
                    available in the TikTok creator economy. Our calculator
                    formulas are built from aggregated data across thousands
                    of creator accounts. We verify them against multiple
                    independent sources and update them regularly to reflect
                    platform changes. We clearly present ranges and estimates
                    with appropriate context when exact figures are unavailable.
                    This helps creators make informed decisions instead of
                    relying on guesswork.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Transparency
                  </h3>
                  <p className="leading-relaxed">
                    Creators deserve to know exactly how we derive our numbers.
                    Every calculator includes a methodology section that
                    explains the formulas, data sources, and assumptions
                    behind the results. We disclose limitations openly when
                    our estimates carry them. We never obscure our methods or
                    present estimates as guaranteed outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Independence
                  </h3>
                  <p className="leading-relaxed">
                    We produce our editorial content independently. Advertisers,
                    sponsors, affiliates, and external parties do not influence
                    it. We maintain a strict separation between our editorial
                    operations and our business operations. Research and analysis
                    drive the recommendations and data we present, never
                    commercial relationships.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 2: Content Creation Process */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Content Creation Process
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  Every piece of content published on TikTok Creator Calculator
                  goes through a rigorous multi-step process before it reaches
                  our audience. This ensures consistency, accuracy, and
                  relevance across all of our resources.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Step 1: Research and Data Collection
                  </h3>
                  <p className="leading-relaxed">
                    Content begins with thorough research. Our team gathers data
                    from official TikTok documentation, creator surveys, public
                    earnings disclosures, industry reports from agencies and
                    analytics firms, and aggregated performance metrics across
                    thousands of accounts. For calculators, we collect
                    benchmarking data across multiple niches, follower tiers, and
                    geographic regions to ensure our models reflect the diversity
                    of the creator ecosystem.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Step 2: Writing and Development
                  </h3>
                  <p className="leading-relaxed">
                    Team members with direct expertise in the relevant subject
                    area draft content. Our CPA, Emily Thompson, writes
                    creator economy taxation articles. Our data analyst,
                    Michael Chen, develops calculator formulas. LIVE streaming
                    guides draw on the experience of Jessica Rodriguez, who
                    earned over $250K from TikTok LIVE gifts. This ensures
                    every piece is grounded in real-world experience and
                    domain-specific knowledge.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Step 3: Fact-Checking and Verification
                  </h3>
                  <p className="leading-relaxed">
                    All content undergoes an independent fact-checking review
                    before publication. We verify data points against their
                    original sources. We test calculator outputs against known
                    creator earnings to validate accuracy within acceptable
                    margins. We cross-reference claims about platform features,
                    policies, and rates with official TikTok documentation and
                    multiple third-party sources.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Step 4: Editorial Review
                  </h3>
                  <p className="leading-relaxed">
                    A senior team member who did not author the content performs
                    a final editorial review. This review evaluates clarity,
                    accuracy, completeness, and adherence to our editorial
                    standards. The reviewer checks that claims are properly
                    sourced, that language is fair and unbiased, and that the
                    content genuinely serves the creator community.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Step 5: Publication and Monitoring
                  </h3>
                  <p className="leading-relaxed">
                    Content enters our ongoing monitoring cycle after passing
                    editorial review. We track user feedback, check for platform
                    changes that affect accuracy, and schedule regular reviews to
                    ensure content remains current. Published content is never
                    considered &quot;final&quot; but rather a living resource
                    that evolves alongside the creator economy.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 3: Fact-Checking Methodology */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Fact-Checking Methodology
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  Accurate data is the foundation of everything we do. Our
                  fact-checking methodology is designed to catch errors before
                  they reach our audience and to ensure that every number,
                  claim, and recommendation is substantiated.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Multi-Source Verification
                  </h3>
                  <p className="leading-relaxed">
                    We never publish a data point based on a single source.
                    We require cross-referencing from at least 2 independent
                    sources before presenting a figure as fact. For critical
                    metrics (Creator Fund RPM rates, brand deal benchmarks, and
                    platform commission structures), we use 3 or more
                    independent data sources. We present the range of reported
                    values with context about why estimates differ when sources
                    conflict.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Calculator Validation
                  </h3>
                  <p className="leading-relaxed">
                    Our calculator formulas undergo a specific validation
                    process. After initial development, we test calculator
                    outputs against real-world earnings data from creators who
                    have publicly shared their metrics. We compare results
                    against competing tools and industry benchmarks. If a
                    calculator consistently deviates more than 20% from verified
                    earnings data, we recalibrate the underlying formula and
                    data inputs until accuracy improves.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Distinguishing Facts from Estimates
                  </h3>
                  <p className="leading-relaxed">
                    We are careful to distinguish between verified facts and
                    estimates. When we state that TikTok&apos;s Creator Fund
                    pays between $0.02 and $0.04 per 1,000 views, we label it
                    as an estimated range based on creator reports, not an
                    official figure from TikTok. Our content uses language like
                    &quot;estimated,&quot; &quot;approximately,&quot; and
                    &quot;based on available data&quot; when appropriate to set
                    proper expectations for our audience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Ongoing Accuracy Monitoring
                  </h3>
                  <p className="leading-relaxed">
                    Fact-checking does not end at publication. We actively
                    monitor for changes that may invalidate previously published
                    data, including TikTok platform updates, Creator Fund policy
                    changes, shifts in brand deal market rates, and new industry
                    research. When we identify outdated information, we update
                    it promptly and note the change where appropriate.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 4: Correction Policy */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Correction Policy
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  Despite our rigorous editorial process, errors can occur. When
                  they do, we are committed to correcting them promptly and
                  transparently. We view corrections not as failures but as
                  evidence of our commitment to accuracy.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    How We Handle Errors
                  </h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Minor corrections</strong> (typographical errors,
                      formatting issues, minor phrasing adjustments) are fixed
                      immediately without a formal correction notice.
                    </li>
                    <li>
                      <strong>Substantive corrections</strong> (incorrect data
                      points, erroneous calculator formulas, misleading claims)
                      are fixed as soon as the error is confirmed, and the
                      content is updated with a note indicating the date and
                      nature of the correction.
                    </li>
                    <li>
                      <strong>Material errors</strong> (errors that could lead
                      to significantly incorrect financial decisions or
                      misrepresentation of earnings potential) trigger an
                      immediate review. The affected content is corrected or
                      temporarily removed while the correction is being
                      prepared, and a prominent correction notice is added.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Reporting Errors
                  </h3>
                  <p className="leading-relaxed">
                    We encourage our audience to report potential errors. If you
                    believe any content on our site contains inaccurate
                    information, please contact our editorial team at{' '}
                    <a
                      href="mailto:editorial@calculatecreator.com"
                      className="text-primary-600 hover:underline"
                    >
                      editorial@calculatecreator.com
                    </a>
                    . Include the specific page URL, the information you believe
                    is incorrect, and any supporting evidence or sources. We
                    review all error reports within 48 hours and will respond
                    with the outcome of our investigation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Transparency About Past Corrections
                  </h3>
                  <p className="leading-relaxed">
                    We maintain a record of substantive corrections and are open
                    about our track record. Transparency about mistakes builds
                    trust. If a calculator formula was previously overestimating
                    or underestimating earnings, we disclose that correction so
                    creators who used the earlier version can recalibrate their
                    expectations.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 5: Editorial Independence */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Editorial Independence
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  Editorial independence is non-negotiable. Our content
                  decisions, recommendations, and data presentations are made
                  entirely by our editorial team based on research, analysis,
                  and what best serves our audience of TikTok creators.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Separation from Advertising
                  </h3>
                  <p className="leading-relaxed">
                    Advertisers have no influence over our editorial content.
                    Advertising revenue supports our operations and allows us to
                    keep our tools free, but it does not shape what we write,
                    which products we recommend, or how we present data. Our
                    advertising team operates independently from our editorial
                    team, and advertisers are never given advance access to
                    editorial content or the ability to request changes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Affiliate Integrity
                  </h3>
                  <p className="leading-relaxed">
                    When we include affiliate links in our content, the
                    editorial decision to mention a product or service is made
                    independently of any affiliate relationship. We evaluate
                    tools and services based on their genuine value to creators,
                    not on the commission rates they offer us. Products are
                    included in our content because our editorial team believes
                    they are useful; the affiliate relationship is a secondary
                    consideration. All affiliate relationships are clearly
                    disclosed in accordance with FTC guidelines and our own{' '}
                    <Link
                      href="/compliance/sponsorship-disclosure/"
                      className="text-primary-600 hover:underline"
                    >
                      sponsorship disclosure policy
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    No Pay-for-Play
                  </h3>
                  <p className="leading-relaxed">
                    We do not accept payment in exchange for favorable coverage,
                    positive reviews, inflated calculator estimates, or
                    preferential placement in our guides. Any company, tool, or
                    platform that appears in our content earned its inclusion
                    through editorial merit alone. We are not a pay-to-play
                    platform.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Platform Neutrality
                  </h3>
                  <p className="leading-relaxed">
                    Although our primary focus is TikTok, we strive for platform
                    neutrality in our analysis. If TikTok&apos;s Creator Fund
                    rates are lower than competing platforms, we report that
                    honestly. We are not advocates for TikTok as a platform; we
                    are advocates for creators who use TikTok, and that means
                    giving them unvarnished data even when it reflects
                    unfavorably on the platform.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 6: Advertising Disclosure */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Advertising Disclosure
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  We believe in complete transparency about how our site is
                  funded and how advertising appears alongside our editorial
                  content. Our commitment to honesty extends to every aspect of
                  our operations, including monetization.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Clear Separation of Content and Advertising
                  </h3>
                  <p className="leading-relaxed">
                    All advertising on TikTok Creator Calculator is clearly
                    distinguished from editorial content. Display advertisements
                    served through Google AdSense are visually separated from
                    our calculators, guides, and analysis. We never disguise
                    advertising as editorial content or blend sponsored material
                    into our guides without clear disclosure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Affiliate Links
                  </h3>
                  <p className="leading-relaxed">
                    Some links on our site are affiliate links, meaning we may
                    earn a commission if you make a purchase through them. These
                    links are always disclosed. The presence of an affiliate
                    link never influences our editorial judgment about whether a
                    product or service deserves mention. We recommend tools and
                    services that we believe genuinely help creators, regardless
                    of whether an affiliate program exists.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    How Advertising Supports Our Mission
                  </h3>
                  <p className="leading-relaxed">
                    Revenue from advertising and affiliate partnerships allows
                    us to keep all of our calculators and educational resources
                    completely free for creators. Without advertising revenue,
                    we would need to charge for access or limit our tools behind
                    paywalls. We view ethical, transparent advertising as the
                    best way to sustain our mission of making creator economy
                    education accessible to everyone.
                  </p>
                </div>

                <p className="leading-relaxed">
                  For our complete advertising and sponsorship disclosure, please
                  visit our{' '}
                  <Link
                    href="/compliance/sponsorship-disclosure/"
                    className="text-primary-600 hover:underline"
                  >
                    Sponsorship Disclosure
                  </Link>{' '}
                  page.
                </p>
              </div>
            </Card>

            {/* Section 7: Author Qualifications */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Author Qualifications
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  Content quality starts with the people who create it. Our
                  editorial team brings together diverse expertise spanning
                  data analysis, creator monetization, tax and finance, content
                  strategy, and platform-specific knowledge. Every team member
                  contributes real-world experience, not just theoretical
                  understanding.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Data Analysts
                  </h3>
                  <p className="leading-relaxed">
                    Our data team includes members with advanced degrees in data
                    science and years of experience analyzing creator economy
                    trends. They are responsible for building and validating the
                    formulas behind our calculators, conducting benchmark
                    analyses, and tracking platform rate changes. Their published
                    research on social media monetization informs every
                    data-driven piece of content we produce.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Experienced Creators
                  </h3>
                  <p className="leading-relaxed">
                    Our team includes creators with a combined following of
                    millions across platforms. They have secured hundreds of
                    brand partnerships, earned significant revenue through
                    TikTok LIVE gifts, and built thriving creator businesses.
                    Their firsthand experience ensures our content reflects the
                    realities of building a career on TikTok, not just
                    theoretical scenarios.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Financial and Tax Professionals
                  </h3>
                  <p className="leading-relaxed">
                    Our tax and finance content is authored and reviewed by a
                    Certified Public Accountant (CPA) who specializes in creator
                    economy taxation. With over eight years of tax accounting
                    experience and having advised hundreds of influencers on tax
                    strategy, our CPA ensures that financial guidance on our
                    site is accurate, legally sound, and practically useful for
                    creators at all income levels.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    E-commerce and Monetization Specialists
                  </h3>
                  <p className="leading-relaxed">
                    Our coverage of TikTok Shop, affiliate marketing, and
                    product-based monetization is guided by specialists with
                    MBA-level e-commerce education and direct experience
                    generating over $1 million in sales through TikTok Shop.
                    Their expertise ensures our monetization calculators and
                    guides reflect the real-world dynamics of selling through
                    social commerce.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Algorithm and Growth Experts
                  </h3>
                  <p className="leading-relaxed">
                    Our growth and algorithm content is developed by team members
                    with computer science backgrounds and years of hands-on
                    experience growing accounts to significant follower
                    milestones. Their analytical approach to understanding
                    platform algorithms ensures our growth-related tools and
                    guides are grounded in observable patterns rather than
                    speculation.
                  </p>
                </div>

                <p className="leading-relaxed mt-4">
                  Learn more about our individual team members and their
                  credentials on our{' '}
                  <Link
                    href="/about/"
                    className="text-primary-600 hover:underline"
                  >
                    About page
                  </Link>
                  .
                </p>
              </div>
            </Card>

            {/* Section 8: Data Sources */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Data Sources
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  Transparency about where our data comes from is essential to
                  building trust. Below is an overview of the primary data
                  sources that inform our calculators, guides, and benchmarks.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    TikTok Official Documentation
                  </h3>
                  <p className="leading-relaxed">
                    We monitor TikTok&apos;s official Creator Portal, help
                    center documentation, policy announcements, and press
                    releases for authoritative information about Creator Fund
                    policies, eligibility requirements, platform features, and
                    commission structures. Official documentation serves as our
                    primary source for platform-specific rules and policies.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Creator Surveys and Self-Reported Data
                  </h3>
                  <p className="leading-relaxed">
                    We aggregate self-reported earnings, engagement metrics, and
                    monetization data from thousands of TikTok creators. This
                    data comes from anonymous surveys we conduct, public
                    earnings disclosures on social media and forums, creator
                    community feedback, and partnership with creator networks.
                    Self-reported data is always cross-referenced against other
                    sources to identify and account for potential biases.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Industry Research and Reports
                  </h3>
                  <p className="leading-relaxed">
                    We reference published research from social media marketing
                    agencies, influencer marketing platforms (such as CreatorIQ,
                    AspireIQ, and Grin), analytics firms, and academic
                    researchers studying the creator economy. These reports
                    provide industry-level context and validation for our
                    creator-level data points.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Public Earnings Disclosures
                  </h3>
                  <p className="leading-relaxed">
                    Many creators publicly share their earnings breakdowns on
                    YouTube, Twitter/X, Reddit, and other platforms. We collect
                    and analyze these public disclosures as an additional data
                    source for validating our earnings models. We always respect
                    the context in which this data was shared and never
                    attribute specific earnings to individual creators without
                    their public disclosure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Brand Partnership Market Data
                  </h3>
                  <p className="leading-relaxed">
                    Our brand deal pricing data is informed by aggregated rate
                    cards from influencer marketing platforms, brand partnership
                    agencies, and direct feedback from creators and marketing
                    professionals. This market data helps us calibrate our brand
                    deal calculators to reflect current market rates across
                    different follower tiers, niches, and content formats.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-neutral-100 rounded">
                  <p className="text-body-sm">
                    <strong>Note on Data Limitations:</strong> The creator
                    economy is inherently variable, and no data source can
                    perfectly predict individual outcomes. We acknowledge these
                    limitations in our methodology sections and present ranges
                    rather than single-point estimates wherever possible. Our
                    goal is not to promise specific earnings but to provide the
                    best available data for informed decision-making.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 9: Content Updates */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Content Updates
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  The creator economy evolves rapidly. Platform policies change,
                  market rates fluctuate, new features launch, and algorithm
                  updates shift the landscape. We maintain a structured update
                  cycle to ensure our content keeps pace with these changes.
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Quarterly Data Updates
                  </h3>
                  <p className="leading-relaxed">
                    Every quarter, we conduct a comprehensive review of the data
                    underlying our calculators and benchmarks. This includes
                    refreshing Creator Fund RPM rates, updating brand deal
                    pricing benchmarks, recalibrating engagement rate averages
                    across niches, and incorporating the latest industry
                    research. Quarterly updates ensure that our core tools
                    remain aligned with current market conditions even during
                    periods of gradual change.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Immediate Platform Change Updates
                  </h3>
                  <p className="leading-relaxed">
                    When TikTok announces significant changes, such as Creator
                    Fund policy modifications, new monetization features, or
                    commission structure adjustments, we update affected content
                    within 48 hours. Major platform changes trigger an
                    expedited review of all related calculators and guides to
                    ensure creators have access to accurate information as
                    quickly as possible.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Annual Content Audits
                  </h3>
                  <p className="leading-relaxed">
                    Once per year, we perform a full-site content audit. Every
                    calculator, guide, and resource is reviewed for accuracy,
                    relevance, and completeness. Content that is no longer
                    accurate or relevant is either updated or retired with a
                    clear notice. This audit ensures that no outdated content
                    lingers on our site and that our entire library meets our
                    current editorial standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Community-Driven Updates
                  </h3>
                  <p className="leading-relaxed">
                    Our audience is one of our most valuable sources of
                    information about when content needs updating. When creators
                    report that a calculator output seems off, that a platform
                    feature has changed, or that a guide no longer reflects
                    current best practices, we investigate promptly and update
                    accordingly. We welcome and actively encourage this feedback
                    through our editorial contact email.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Update Transparency
                  </h3>
                  <p className="leading-relaxed">
                    When content is significantly updated, we revise the
                    &quot;Last Updated&quot; date displayed on the page. For
                    major revisions that change conclusions, recommendations, or
                    key data points, we add an update note explaining what
                    changed and why. This allows returning visitors to quickly
                    identify what is new since their last visit.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 10: Contact */}
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Contact Our Editorial Team
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="leading-relaxed">
                  We welcome questions, feedback, and concerns about our
                  editorial content. Whether you have spotted an error, want to
                  suggest a topic, or have questions about our methodology, we
                  want to hear from you.
                </p>

                <div className="p-4 bg-neutral-100 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Editorial Inquiries
                  </h3>
                  <p className="mb-3">
                    For questions or concerns related to our editorial content,
                    accuracy, methodology, or this editorial policy:
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:editorial@calculatecreator.com"
                      className="text-primary-600 hover:underline"
                    >
                      editorial@calculatecreator.com
                    </a>
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Response time: We aim to respond to all editorial inquiries
                    within 48 hours on business days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    What to Include in Your Message
                  </h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      The specific page URL where you found the issue or have a
                      question
                    </li>
                    <li>
                      A clear description of the concern, error, or suggestion
                    </li>
                    <li>
                      Any supporting evidence or alternative sources, if
                      reporting an accuracy issue
                    </li>
                    <li>
                      Your preferred contact information for follow-up
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Other Contact Channels
                  </h3>
                  <p className="leading-relaxed">
                    For non-editorial inquiries such as general support, bug
                    reports, feature requests, or business partnerships, please
                    visit our{' '}
                    <Link
                      href="/contact/"
                      className="text-primary-600 hover:underline"
                    >
                      Contact page
                    </Link>{' '}
                    for the appropriate contact information.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-primary-50 border border-primary-200 rounded">
                  <p className="font-semibold mb-2">Our Promise</p>
                  <p className="text-body-sm">
                    We take every editorial inquiry seriously. Our goal is to be
                    a trusted resource for the creator community, and your
                    feedback is essential to achieving that goal. When you raise
                    a concern, we investigate it thoroughly and respond honestly,
                    even if the answer is that we made a mistake. Trust is
                    earned through accountability, and we are committed to
                    earning yours.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
