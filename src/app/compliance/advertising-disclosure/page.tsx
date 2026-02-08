import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export const metadata: Metadata = {
  title: 'Advertising Disclosure | CalculateCreator',
  description:
    'Transparency about how advertising works on CalculateCreator.com. Learn about our ad practices, revenue usage, editorial independence, and FTC compliance.',
  alternates: {
    canonical: 'https://calculatecreator.com/compliance/advertising-disclosure/',
  },
};

export default function AdvertisingDisclosurePage() {
  return (
    <>
      <WebPageSchema
        title="Advertising Disclosure | CalculateCreator"
        description="Transparency about how advertising works on CalculateCreator.com. Learn about our ad practices, revenue usage, editorial independence, and FTC compliance."
        url="https://calculatecreator.com/compliance/advertising-disclosure/"
        breadcrumbs={[
          { name: 'Compliance', url: 'https://calculatecreator.com/compliance/' },
        ]}
      />
      <div className="min-h-screen bg-neutral-50">
        <nav className="bg-white border-b border-neutral-200 py-3">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/compliance/">Compliance</Link>
              <span>/</span>
              <span className="text-neutral-900">Advertising Disclosure</span>
            </div>
          </div>
        </nav>

        <div className="py-12">
          <div className="container-custom max-w-4xl">
            <div className="mb-8">
              <h1 className="text-display-md font-bold text-neutral-900 mb-2">
                Advertising Disclosure
              </h1>
              <p className="text-body-md text-neutral-600">
                Last Updated: February 8, 2026
              </p>
            </div>

            <div className="space-y-6">
              {/* Section 1: Advertising Disclosure Statement */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Advertising Disclosure Statement
                </h2>
                <div className="space-y-4 text-body-md text-neutral-700">
                  <p className="leading-relaxed">
                    CalculateCreator.com is a free resource dedicated to helping TikTok
                    creators understand their earning potential, grow their audiences, and
                    make informed decisions about their creative careers. To keep our
                    calculators, guides, and tools freely accessible to everyone, we
                    generate revenue through advertising displayed on our website.
                  </p>
                  <p className="leading-relaxed">
                    We believe in full transparency regarding how advertising operates on
                    our platform. This disclosure explains the types of advertising we
                    use, how advertising revenue supports our mission, and the strict
                    boundaries we maintain between our editorial content and advertising
                    interests.
                  </p>
                  <p className="leading-relaxed">
                    Our commitment is straightforward: advertising funds the tools you
                    use, but it never compromises the accuracy or integrity of the
                    information we provide.
                  </p>
                </div>
              </Card>

              {/* Section 2: Types of Advertising */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Types of Advertising
                </h2>
                <div className="space-y-6 text-body-md text-neutral-700">
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Display Advertising (Google AdSense)
                    </h3>
                    <p className="leading-relaxed mb-3">
                      We use Google AdSense to display advertisements throughout our
                      website. These ads may appear as banner ads, in-content ads, or
                      sidebar placements. Google AdSense uses cookies and similar
                      technologies to serve ads that may be relevant to your interests
                      based on your browsing history.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Ads are clearly distinguishable from editorial content
                      </li>
                      <li>
                        Ad placements are managed by Google and follow their advertising
                        policies
                      </li>
                      <li>
                        We do not control which specific ads appear on our pages
                      </li>
                      <li>
                        Ads may be personalized or non-personalized depending on your
                        consent preferences and region
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Affiliate Links
                    </h3>
                    <p className="leading-relaxed mb-3">
                      Some pages on our site may contain affiliate links to products,
                      services, or tools relevant to content creators. When you click an
                      affiliate link and make a purchase, we may earn a small commission
                      at no additional cost to you.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Affiliate links are always clearly identified with appropriate
                        disclosures
                      </li>
                      <li>
                        We only recommend products and services we believe provide
                        genuine value to creators
                      </li>
                      <li>
                        Affiliate relationships never influence our calculator results or
                        data analysis
                      </li>
                      <li>
                        Commission rates do not affect which products we mention or how
                        prominently we feature them
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Sponsored Content Policy
                    </h3>
                    <p className="leading-relaxed">
                      At this time, CalculateCreator.com does not publish sponsored
                      articles, paid reviews, or advertiser-written content. If we ever
                      introduce sponsored content in the future, it will be clearly
                      labeled as such and will be subject to the same editorial standards
                      as our independently produced material. Any sponsored content will
                      include a prominent disclosure at the top of the page indicating
                      the nature of the sponsorship.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Section 3: How Advertising Revenue Is Used */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  How Advertising Revenue Is Used
                </h2>
                <div className="space-y-4 text-body-md text-neutral-700">
                  <p className="leading-relaxed">
                    Revenue generated from advertising directly supports the operation
                    and improvement of CalculateCreator.com. Here is how advertising
                    income is allocated:
                  </p>

                  <div className="space-y-4 mt-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Keeping Our Tools Free
                      </h3>
                      <p>
                        Advertising revenue is the primary reason we can offer all of our
                        calculators, guides, and resources at no cost. Without ad
                        support, we would need to charge subscription fees or limit
                        access to premium features.
                      </p>
                    </div>

                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Server and Infrastructure Costs
                      </h3>
                      <p>
                        Running a fast, reliable website requires hosting, content
                        delivery networks, and ongoing infrastructure maintenance. Ad
                        revenue covers these operational expenses so our tools remain
                        available around the clock.
                      </p>
                    </div>

                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Data Research and Accuracy
                      </h3>
                      <p>
                        Our calculators are only as valuable as the data behind them. Ad
                        revenue funds ongoing research into TikTok monetization rates,
                        creator fund payouts, engagement benchmarks, and platform
                        algorithm changes so our estimates stay current and reliable.
                      </p>
                    </div>

                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Content Creation and Development
                      </h3>
                      <p>
                        Developing new calculators, writing comprehensive guides, and
                        keeping existing content up to date requires significant time and
                        effort. Advertising income allows us to invest in creating high-quality
                        educational resources for the creator community.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Section 4: Separation of Editorial and Advertising */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Separation of Editorial and Advertising
                </h2>
                <div className="space-y-4 text-body-md text-neutral-700">
                  <p className="leading-relaxed">
                    We maintain a strict separation between our editorial content and
                    advertising interests. This is a foundational principle of
                    CalculateCreator.com that we take very seriously.
                  </p>

                  <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-3">
                      Our Editorial Independence Guarantees
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>
                        <strong>Calculator Results Are Never Influenced by Advertisers.</strong>{' '}
                        Our calculator algorithms are based on publicly available data,
                        industry research, and verified creator reports. No advertiser
                        has any input into how our calculators generate results.
                      </li>
                      <li>
                        <strong>Editorial Decisions Are Made Independently.</strong>{' '}
                        The topics we cover, the guides we write, and the tools we build
                        are determined solely by what we believe is most useful and
                        accurate for creators. Advertisers cannot request, influence, or
                        veto our editorial choices.
                      </li>
                      <li>
                        <strong>Data Presentation Is Objective.</strong>{' '}
                        When we present statistics, benchmarks, or earnings estimates,
                        the data is presented as-is. We do not inflate or deflate numbers
                        to favor any advertiser, platform, or third party.
                      </li>
                      <li>
                        <strong>Ad Placement Does Not Dictate Content Structure.</strong>{' '}
                        We design our pages for the best possible user experience first.
                        Ad placements are integrated in a way that respects readability
                        and does not interfere with the usability of our tools.
                      </li>
                    </ul>
                  </div>

                  <p className="leading-relaxed mt-4">
                    If you ever believe that advertising is improperly influencing our
                    content, we encourage you to contact us immediately. We take every
                    such concern seriously and will investigate promptly.
                  </p>
                </div>
              </Card>

              {/* Section 5: FTC Compliance */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  FTC Compliance
                </h2>
                <div className="space-y-4 text-body-md text-neutral-700">
                  <p className="leading-relaxed">
                    CalculateCreator.com is committed to full compliance with the Federal
                    Trade Commission&apos;s guidelines on advertising disclosures and
                    endorsements. Here is how we adhere to FTC requirements:
                  </p>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Clear and Conspicuous Disclosure
                    </h3>
                    <p className="leading-relaxed">
                      Any material connection between CalculateCreator.com and a
                      product, service, or brand is disclosed clearly and prominently.
                      Disclosures appear near the relevant content, in a size and format
                      that is easy to notice and understand. We do not bury disclosures
                      in footnotes, behind links, or in hard-to-read text.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Affiliate Link Identification
                    </h3>
                    <p className="leading-relaxed">
                      When a page contains affiliate links, we provide a clear
                      disclosure statement indicating that we may earn commissions from
                      qualifying purchases. This disclosure appears before or adjacent to
                      the affiliate links so that readers are aware of the relationship
                      before clicking.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Honest Representations
                    </h3>
                    <p className="leading-relaxed">
                      We do not make exaggerated or misleading claims about products or
                      services. Any product or tool we mention is described accurately
                      based on our genuine assessment. If we have not personally tested a
                      product, we clearly state that our information is based on publicly
                      available details rather than firsthand experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Compliance Monitoring
                    </h3>
                    <p className="leading-relaxed">
                      We regularly audit our content to ensure all advertising
                      disclosures remain current, visible, and compliant with evolving
                      FTC guidelines. When the FTC updates its endorsement guides or
                      advertising rules, we review and update our practices accordingly.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Section 6: Your Ad Experience */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Your Ad Experience
                </h2>
                <div className="space-y-4 text-body-md text-neutral-700">
                  <p className="leading-relaxed">
                    We understand that advertising can sometimes affect your browsing
                    experience. Here is how you can manage and customize the ads you see
                    on our website:
                  </p>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Managing Ad Preferences
                    </h3>
                    <p className="leading-relaxed">
                      Google AdSense may serve personalized ads based on your browsing
                      history and interests, or non-personalized ads based on the content
                      of the page. You can control which type of ads you see:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                      <li>
                        Visit{' '}
                        <a
                          href="https://www.google.com/settings/ads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Google Ads Settings
                        </a>{' '}
                        to manage your ad personalization preferences
                      </li>
                      <li>
                        Visit{' '}
                        <a
                          href="https://optout.aboutads.info/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          aboutads.info
                        </a>{' '}
                        to opt out of interest-based advertising from participating
                        companies
                      </li>
                      <li>
                        Adjust your browser&apos;s cookie and privacy settings to limit
                        ad tracking
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Our Stance on Ad Blockers
                    </h3>
                    <p className="leading-relaxed">
                      We respect your right to use ad blocking software. While
                      advertising revenue is essential to keeping our tools free, we will
                      never prevent you from accessing our calculators or content if you
                      choose to use an ad blocker. We believe the value of our tools
                      should speak for itself. If you find our resources helpful, we
                      simply ask that you consider allowing ads on our site to support
                      continued development.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Ad Quality and Safety
                    </h3>
                    <p className="leading-relaxed">
                      While we do not directly choose which ads appear on our site, we
                      work within Google AdSense&apos;s framework to block ad categories
                      that we consider inappropriate for our audience. If you encounter
                      an ad that seems misleading, offensive, or irrelevant, please let
                      us know so we can take steps to block that advertiser or category.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Section 7: Questions About Our Advertising */}
              <Card>
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Questions About Our Advertising
                </h2>
                <div className="space-y-4 text-body-md text-neutral-700">
                  <p className="leading-relaxed">
                    We welcome questions, feedback, and concerns about our advertising
                    practices. Transparency is a core value, and we are happy to explain
                    any aspect of how advertising works on CalculateCreator.com.
                  </p>

                  <div className="mt-4 space-y-3">
                    <p>
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:advertising@calculatecreator.com"
                        className="text-primary-600 hover:underline"
                      >
                        advertising@calculatecreator.com
                      </a>
                    </p>
                    <p>
                      <strong>Response Time:</strong> We aim to respond to all
                      advertising-related inquiries within 48 hours on business days.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-neutral-100 rounded">
                    <p className="font-semibold mb-2">You can contact us about:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-body-sm">
                      <li>Questions about specific ads displayed on our site</li>
                      <li>Concerns about inappropriate or misleading advertisements</li>
                      <li>Inquiries about our affiliate partnerships</li>
                      <li>Requests for clarification on any advertising disclosure</li>
                      <li>General feedback about your ad experience</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded">
                    <p className="font-semibold mb-2">Related Policies</p>
                    <p className="text-body-sm mb-3">
                      For more information about how we handle your data and protect
                      your privacy in relation to advertising, please review our other
                      policies:
                    </p>
                    <ul className="space-y-2 text-body-sm">
                      <li>
                        <Link
                          href="/privacy/"
                          className="text-primary-600 hover:underline"
                        >
                          Privacy Policy
                        </Link>{' '}
                        — Details on data collection, cookies, and your privacy rights
                      </li>
                      <li>
                        <Link
                          href="/compliance/sponsorship-disclosure/"
                          className="text-primary-600 hover:underline"
                        >
                          Sponsorship Disclosure Guidelines
                        </Link>{' '}
                        — FTC compliance guide for TikTok creators
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
