import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { MessageCircle, Bug, Lightbulb, BarChart3, Users, FileText, CheckCircle, XCircle } from 'lucide-react';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export const metadata: Metadata = {
  title: 'Contact TikTok Creator Calculator | Support',
  description: 'Have questions about our calculators? Need help optimizing your TikTok earnings? Contact us for support, feedback, or partnership inquiries.',
  alternates: {
    canonical: 'https://calculatecreator.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        title="Contact TikTok Creator Calculator | Support"
        description="Have questions about our calculators? Need help optimizing your TikTok earnings? Contact us for support, feedback, or partnership inquiries."
        url="https://calculatecreator.com/contact/"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-8">
          <img
            src="/images/calculate-creator-transparent-v2.png"
            alt="TikTok Creator Calculator"
            className="h-12 w-auto mx-auto mb-4"
          />
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6">
            Contact Us
          </h1>
        </div>
        <p className="text-body-lg text-neutral-600 text-center mb-12">
          We'd love to hear from you. Whether you have questions, feedback, or ideas for improvement, our team is here to help TikTok creators succeed.
        </p>

        <div className="space-y-6">
          {/* About Our Mission */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">About TikTok Creator Calculator</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                TikTok Creator Calculator was built by creators, for creators. We understand the challenges of navigating TikTok monetization, estimating earnings potential, and negotiating fair brand deal rates. Our mission is to provide accurate, data-driven tools that empower creators to make informed decisions about their content careers.
              </p>
              <p>
                Since launching in 2023, we've helped over 500,000 creators calculate their potential earnings, understand RPM benchmarks, and negotiate better brand partnerships. Our calculators are updated regularly with the latest industry data to ensure accuracy and relevance in the ever-evolving creator economy.
              </p>
              <p>
                We're committed to transparency, accuracy, and creator education. Every metric, formula, and benchmark on our site is backed by industry research, creator surveys, and publicly available data sources.
              </p>
            </div>
          </Card>

          {/* Main Contact Section */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Have feedback, found a bug, or have suggestions for new features? We're here to help. Choose the appropriate contact method below based on your inquiry type.
              </p>

              <div className="space-y-4 mt-6">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 flex-shrink-0 text-blue-600" />
                    General Inquiries
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-3">
                    Questions about our calculators, methodology, how to use specific features, or general support
                  </p>
                  <p className="text-body-md text-primary-600 font-medium">
                    contact@calculatecreator.com
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Response time: 24-48 hours
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <Bug className="w-5 h-5 flex-shrink-0 text-red-600" />
                    Bug Reports & Technical Issues
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-3">
                    Found something not working correctly? Calculator errors, display issues, or functionality problems
                  </p>
                  <p className="text-body-md text-primary-600 font-medium">
                    bugs@calculatecreator.com
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Response time: 12-24 hours | Priority: High
                  </p>
                  <div className="mt-3 p-3 bg-white rounded border border-neutral-200">
                    <p className="text-body-xs text-neutral-700 font-semibold mb-1">When reporting bugs, please include:</p>
                    <ul className="text-body-xs text-neutral-600 space-y-1 ml-4 list-disc">
                      <li>Which calculator or page you were using</li>
                      <li>What you expected to happen vs what actually happened</li>
                      <li>Steps to reproduce the issue</li>
                      <li>Browser and device information (Chrome/Safari, Desktop/Mobile)</li>
                      <li>Screenshots if applicable</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 flex-shrink-0 text-yellow-500" />
                    Feature Requests & Suggestions
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-3">
                    Have an idea for a new calculator, feature, or improvement? We'd love to hear it!
                  </p>
                  <p className="text-body-md text-primary-600 font-medium">
                    features@calculatecreator.com
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Response time: 48-72 hours
                  </p>
                  <div className="mt-3 p-3 bg-success-50 rounded border border-success-200">
                    <p className="text-body-xs text-neutral-700">
                      <strong>Top requested features we're working on:</strong> Instagram Reels calculator, YouTube Shorts earnings estimator, engagement rate benchmarks by niche, brand outreach email templates
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 flex-shrink-0 text-blue-600" />
                    Data Questions & Methodology
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-3">
                    Questions about our data sources, calculation formulas, benchmark accuracy, or how we determine rates
                  </p>
                  <p className="text-body-md text-primary-600 font-medium">
                    data@calculatecreator.com
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Response time: 48-72 hours
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Note: All calculators include detailed methodology sections explaining our formulas and data sources.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 flex-shrink-0 text-blue-600" />
                    Business & Partnership Inquiries
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-3">
                    Interested in partnerships, sponsorships, advertising opportunities, or media inquiries
                  </p>
                  <p className="text-body-md text-primary-600 font-medium">
                    business@calculatecreator.com
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Response time: 3-5 business days
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 flex-shrink-0 text-blue-600" />
                    Press & Media
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-3">
                    Journalists, bloggers, or content creators looking for expert insights, data for articles, or interviews
                  </p>
                  <p className="text-body-md text-primary-600 font-medium">
                    press@calculatecreator.com
                  </p>
                  <p className="text-body-xs text-neutral-600 mt-2">
                    Response time: 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Response Time & Expectations */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Response Times & Expectations</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                We strive to respond to all inquiries promptly and professionally. Here's what you can expect when you contact us:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Standard Response Times</h3>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Urgent/Bug Reports:</strong> 12-24 hours (Monday-Friday)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>General Inquiries:</strong> 24-48 hours (Monday-Friday)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Feature Requests & Data Questions:</strong> 48-72 hours (Monday-Friday)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Business Inquiries:</strong> 3-5 business days</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Operating Hours</h3>
                  <p className="text-body-sm text-neutral-700">
                    Our support team operates Monday through Friday, 9 AM - 6 PM EST. Emails received outside business hours or on weekends will be addressed on the next business day.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">For Urgent Issues</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    If you have a critical bug report or time-sensitive inquiry, please include [URGENT] in your email subject line. We prioritize these messages and aim to respond within 12 hours during business days.
                  </p>
                  <p className="text-body-xs text-neutral-600 italic">
                    Examples of urgent issues: Calculator producing incorrect results, payment processing errors, security concerns
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Before You Contact Us - FAQ */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Before You Contact Us: Check Our FAQs</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                You might find answers faster by checking our comprehensive FAQ sections and resources. Here's where to look:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">Calculator-Specific FAQs</h3>
                  <p className="text-body-sm text-neutral-700">
                    Every calculator page includes a detailed FAQ section addressing the most common questions about that specific tool. Scroll to the bottom of any calculator page to find answers about formulas, benchmarks, and usage.
                  </p>
                </div>

                <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">Methodology Sections</h3>
                  <p className="text-body-sm text-neutral-700">
                    Each calculator has a "How We Calculate This" methodology section explaining our formulas, data sources, assumptions, and limitations. This answers most questions about accuracy and calculation methods.
                  </p>
                </div>

                <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">Comprehensive Guides</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    We've created in-depth guides covering various topics in the creator economy. Check our resources section for guides on brand deals, maximizing RPM, Creator Fund eligibility, and more.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Common Questions */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">How accurate are your calculators?</h3>
                <p className="text-body-sm text-neutral-700">
                  Our calculators are based on aggregated industry data, creator surveys, and publicly available information from thousands of TikTok accounts. While we strive for accuracy, individual results will vary based on factors like niche, audience demographics, engagement rates, and TikTok's evolving algorithms. Our estimates typically fall within 15-25% of actual earnings for most creators. We update our data quarterly to maintain accuracy.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Where do you get your data?</h3>
                <p className="text-body-sm text-neutral-700">
                  We compile data from multiple sources: (1) Anonymous creator surveys and earnings reports, (2) Industry research reports from social media marketing agencies, (3) Publicly shared creator earnings on forums and social media, (4) TikTok's official Creator Fund documentation, (5) Brand partnership platforms like AspireIQ, CreatorIQ, and Grin. All data sources are cited in our methodology sections.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Are your tools free to use?</h3>
                <p className="text-body-sm text-neutral-700">
                  Yes! All our calculators and resources are completely free with no hidden fees, registration requirements, or premium tiers. We're funded through ethical advertising and affiliate partnerships (clearly disclosed). Our mission is to make creator education accessible to everyone, regardless of budget.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Do you collect or store my data?</h3>
                <p className="text-body-sm text-neutral-700">
                  We do not store any data you enter into our calculators. All calculations happen in your browser, and inputs are never sent to our servers or third parties. We use privacy-friendly analytics (Google Analytics) to track aggregate usage patterns (like which calculators are most popular) but never collect personal information or calculation inputs. See our Privacy Policy for full details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Can you help me negotiate a brand deal?</h3>
                <p className="text-body-sm text-neutral-700">
                  While we can't provide individual consulting or negotiation services, our Brand Deal Calculator and contract template resources give you the tools to confidently negotiate fair rates. We recommend our comprehensive brand deal guide for step-by-step negotiation strategies and pricing frameworks based on follower count and engagement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Why don't you have a calculator for [platform/feature]?</h3>
                <p className="text-body-sm text-neutral-700">
                  We're constantly expanding our calculator library based on creator demand and data availability. If you'd like to see a specific calculator (Instagram Reels, YouTube Shorts, etc.), please email features@calculatecreator.com. We prioritize new calculators based on community requests and data reliability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Are you affiliated with TikTok?</h3>
                <p className="text-body-sm text-neutral-700">
                  No. TikTok Creator Calculator is an independent resource not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, or any social media platform. We're a third-party educational resource built by and for creators. All our data is compiled from public sources, not provided directly by TikTok.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Can I embed your calculators on my website?</h3>
                <p className="text-body-sm text-neutral-700">
                  Currently, we don't offer embeddable calculator widgets. However, you're welcome to link to our calculators from your website, blog, or social media. If you're interested in a partnership or custom embedding solution, contact business@calculatecreator.com.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">How can I support your work?</h3>
                <p className="text-body-sm text-neutral-700">
                  The best way to support us is to share our calculators with other creators who might find them helpful! You can also follow us on social media, provide feedback to help us improve, or consider our affiliate partners when relevant. We don't accept donations, as our goal is sustainability through ethical advertising rather than dependence on user contributions.
                </p>
              </div>
            </div>
          </Card>

          {/* Social Media & Community */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Connect With Our Community</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Join thousands of creators using our tools to grow their content careers. Stay updated on new calculators, industry insights, and creator economy trends.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Newsletter (Coming Soon)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Monthly creator economy insights, calculator updates, and monetization tips delivered to your inbox.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Creator Resources</h3>
                  <p className="text-body-sm text-neutral-700">
                    Browse our library of guides, templates, and educational content to level up your creator business.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Service Level Commitment */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Commitment to You</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                When you contact us, you can expect:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Respectful, professional communication</strong> - Every inquiry is treated with care and respect, whether you're a creator with 1,000 or 1,000,000 followers.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Transparent, honest answers</strong> - We'll never make promises we can't keep or provide misleading information. If we don't know something, we'll tell you.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Actionable guidance</strong> - We aim to provide specific, practical advice that helps you make informed decisions about your creator career.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Privacy protection</strong> - Your inquiries and any information shared with us remain confidential and are never shared with third parties.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Continuous improvement</strong> - We take your feedback seriously and use it to improve our calculators, fix bugs, and develop new features.
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          {/* What We Cannot Help With */}
          <Card className="bg-warning-light border-warning-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What We Cannot Assist With</h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <p>
                To set proper expectations, here are topics we're unable to help with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span><strong>TikTok account issues</strong> - Banned accounts, shadowbans, verification, or technical platform problems (contact TikTok Support directly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span><strong>Creator Fund enrollment</strong> - Eligibility questions or payment issues (contact TikTok's Creator Fund support)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span><strong>Legal advice</strong> - Contract reviews, tax guidance, or legal disputes (consult qualified attorneys/CPAs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span><strong>Content strategy consulting</strong> - We provide tools and education, not personalized content consulting services</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span><strong>Brand introductions</strong> - We don't connect creators with brands or facilitate brand partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span><strong>Growth hacks or bot services</strong> - We don't promote or support inauthentic growth tactics</span>
                </li>
              </ul>
              <p className="text-body-sm text-neutral-600 italic mt-4">
                For these topics, we recommend reaching out to the appropriate platform support teams, legal professionals, or specialized service providers.
              </p>
            </div>
          </Card>

          {/* Final CTA */}
          <Card className="bg-primary-light border-primary-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Ready to Reach Out?</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Choose the appropriate email address above based on your inquiry type, and we'll get back to you as soon as possible. We read every email personally and appreciate you taking the time to reach out.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded text-center">
                <p className="text-body-sm font-semibold text-neutral-900">General Support</p>
                <p className="text-body-xs text-primary-600 mt-1">contact@calculatecreator.com</p>
              </div>
              <div className="p-3 bg-white rounded text-center">
                <p className="text-body-sm font-semibold text-neutral-900">Bug Reports</p>
                <p className="text-body-xs text-primary-600 mt-1">bugs@calculatecreator.com</p>
              </div>
              <div className="p-3 bg-white rounded text-center">
                <p className="text-body-sm font-semibold text-neutral-900">Feature Ideas</p>
                <p className="text-body-xs text-primary-600 mt-1">features@calculatecreator.com</p>
              </div>
            </div>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-neutral-100 border-neutral-300">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">Disclaimer</h2>
            <p className="text-body-sm text-neutral-700">
              TikTok Creator Calculator is an independent educational resource and is not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, Meta, YouTube, or any social media platform. All calculator results are estimates based on industry data and should not be considered guaranteed earnings predictions. Individual results will vary based on numerous factors including content quality, audience demographics, engagement rates, niche, and platform algorithm changes.
            </p>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
