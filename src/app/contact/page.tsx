import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { MessageCircle, Bug, Lightbulb, BarChart3, Users, FileText, CheckCircle, XCircle } from 'lucide-react';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export const metadata: Metadata = {
  title: 'Contact TikTok Creator Calculator | Support',
  description: 'Have questions about our calculators? Get help optimizing your TikTok earnings. Contact us for support, feedback, or partnership inquiries.',
  alternates: {
    canonical: 'https://calculatecreator.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        title="Contact TikTok Creator Calculator | Support"
        description="Have questions about our calculators? Get help optimizing your TikTok earnings. Contact us for support, feedback, or partnership inquiries."
        url="https://calculatecreator.com/contact/"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-8">
          <img
            src="/images/calculate-creator-transparent-v2.png"
            alt="CalculateCreator logo - Contact support"
            className="h-12 w-auto mx-auto mb-4"
          />
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6">
            Contact Us
          </h1>
        </div>
        <p className="text-body-lg text-neutral-600 text-center mb-12">
          We love hearing from you. Our team is here to help TikTok creators succeed, whether you have questions, feedback, or ideas for improvement.
        </p>

        <div className="space-y-6">
          {/* About Our Mission */}
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">About TikTok Creator Calculator</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Creators built TikTok Creator Calculator for creators. We understand the challenges of navigating TikTok monetization, estimating earnings potential, and negotiating fair brand deal rates. Our mission is to provide accurate, data-driven tools that empower creators to make informed decisions about their content careers.
              </p>
              <p>
                Since launching in 2023, we have helped over 500,000 creators calculate their potential earnings. They understand Revenue Per Mille (RPM) benchmarks and negotiate better brand partnerships. We update our calculators regularly with the latest industry data to ensure accuracy and relevance in the evolving creator economy.
              </p>
              <p>
                We commit to transparency, accuracy, and creator education. Industry research, creator surveys, and publicly available data sources back every metric, formula, and benchmark on our site.
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
                    Have an idea for a new calculator, feature, or improvement? We want to hear it.
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
                We respond to all inquiries promptly and professionally. Here is what to expect when you contact us.
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
                    Our support team operates Monday through Friday, 9 AM to 6 PM EST. We address emails received outside business hours or on weekends on the next business day.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">For Urgent Issues</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Include [URGENT] in your email subject line for critical bug reports or time-sensitive inquiries. We prioritize these messages and respond within 12 hours during business days.
                  </p>
                  <p className="text-body-xs text-neutral-600 italic">
                    Examples of urgent issues include calculators producing incorrect results, payment processing errors, and security concerns
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
                Find answers faster by checking our FAQ sections and resources. Here is where to look.
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
                  **Our calculators are based on aggregated industry data, creator surveys, and publicly available information from thousands of TikTok accounts.** Individual results vary based on factors like niche, audience demographics, engagement rates, and the evolving algorithms of TikTok. Our estimates typically fall within 15% to 25% of actual earnings for most creators. We update our data quarterly to maintain accuracy.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Where do you get your data?</h3>
                <p className="text-body-sm text-neutral-700">
                  **We compile data from 5 sources.** These are anonymous creator surveys and earnings reports; industry research reports from social media marketing agencies; publicly shared creator earnings on forums and social media; official Creator Fund documentation from TikTok; and brand partnership platforms like AspireIQ, CreatorIQ, and Grin. All data sources are cited in our methodology sections.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Are your tools free to use?</h3>
                <p className="text-body-sm text-neutral-700">
                  **Yes, all our calculators and resources are completely free with no hidden fees, registration requirements, or premium tiers.** Ethical advertising and affiliate partnerships (clearly disclosed) fund our work. Our mission is to make creator education accessible to everyone, regardless of budget.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Do you collect or store my data?</h3>
                <p className="text-body-sm text-neutral-700">
                  **We do not store any data you enter into our calculators.** All calculations happen in your browser. Inputs are never sent to our servers or third parties. We use privacy-friendly analytics (Google Analytics) to track aggregate usage patterns (like which calculators are most popular). We never collect personal information or calculation inputs. See our Privacy Policy for full details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Can you help me negotiate a brand deal?</h3>
                <p className="text-body-sm text-neutral-700">
                  **We do not provide individual consulting or negotiation services.** Our Brand Deal Calculator and contract template resources give you the tools to negotiate fair rates with confidence. Use our comprehensive brand deal guide for step-by-step negotiation strategies and pricing frameworks based on follower count and engagement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Why don't you have a calculator for [platform/feature]?</h3>
                <p className="text-body-sm text-neutral-700">
                  **We constantly expand our calculator library based on creator demand and data availability.** Email features@calculatecreator.com to request a specific calculator (Instagram Reels, YouTube Shorts, etc.). We prioritize new calculators based on community requests and data reliability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Are you affiliated with TikTok?</h3>
                <p className="text-body-sm text-neutral-700">
                  **No, TikTok Creator Calculator is an independent resource.** We are not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, or any social media platform. We are a third-party educational resource built by and for creators. We compile all our data from public sources, not directly from TikTok.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Can I embed your calculators on my website?</h3>
                <p className="text-body-sm text-neutral-700">
                  **We do not currently offer embeddable calculator widgets.** Link to our calculators from your website, blog, or social media. For a partnership or custom embedding solution, contact business@calculatecreator.com.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">How can I support your work?</h3>
                <p className="text-body-sm text-neutral-700">
                  **The best way to support us is to share our calculators with other creators who find them helpful.** Follow us on social media, provide feedback to help us improve, or consider our affiliate partners when relevant. We do not accept donations. Our goal is sustainability through ethical advertising rather than dependence on user contributions.
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
                Expect the following when you contact us.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Respectful, professional communication</strong> - We treat every inquiry with care and respect, whether you have 1,000 or 1,000,000 followers.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Transparent, honest answers</strong> - We never make promises we cannot keep or provide misleading information. We tell you directly when we do not know something.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Actionable guidance</strong> - We provide specific, practical advice that helps you make informed decisions about your creator career.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Privacy protection</strong> - Your inquiries and any information you share with us remain confidential. We never share them with third parties.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
                  <div>
                    <strong>Continuous improvement</strong> - We take your feedback seriously. We use it to improve our calculators, fix bugs, and develop new features.
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
                To set proper expectations, here are topics we do not assist with.
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

          {/* Quick Contact Form */}
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Send Us a Message</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Click the button below to open your email client with a pre-filled message. Just add your details and hit send.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="mailto:contact@calculatecreator.com?subject=General%20Inquiry%20-%20CalculateCreator&body=Hi%20CalculateCreator%20Team%2C%0A%0AI%20have%20a%20question%20about%3A%0A%0A%5BPlease%20describe%20your%20question%20here%5D%0A%0AThanks!"
                className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg border-2 border-primary-300 hover:border-primary-500 hover:shadow-md transition-all text-primary-700 font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                General Inquiry
              </a>
              <a
                href="mailto:bugs@calculatecreator.com?subject=Bug%20Report%20-%20CalculateCreator&body=Hi%20Team%2C%0A%0AI%20found%20a%20bug%3A%0A%0APage%3A%20%5Bwhich%20page%5D%0AExpected%3A%20%5Bwhat%20should%20happen%5D%0AActual%3A%20%5Bwhat%20happened%5D%0ABrowser%3A%20%5Byour%20browser%5D%0A%0AThanks!"
                className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg border-2 border-red-300 hover:border-red-500 hover:shadow-md transition-all text-red-700 font-semibold"
              >
                <Bug className="w-5 h-5" />
                Report a Bug
              </a>
              <a
                href="mailto:features@calculatecreator.com?subject=Feature%20Request%20-%20CalculateCreator&body=Hi%20Team%2C%0A%0AI%20have%20a%20feature%20idea%3A%0A%0A%5BDescribe%20your%20idea%5D%0A%0AWhy%20it%20would%20be%20useful%3A%0A%5BExplain%20the%20benefit%5D%0A%0AThanks!"
                className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg border-2 border-yellow-300 hover:border-yellow-500 hover:shadow-md transition-all text-yellow-700 font-semibold"
              >
                <Lightbulb className="w-5 h-5" />
                Suggest a Feature
              </a>
              <a
                href="mailto:business@calculatecreator.com?subject=Business%20Inquiry%20-%20CalculateCreator&body=Hi%20Team%2C%0A%0AI%27m%20reaching%20out%20regarding%3A%0A%0A%5BDescribe%20your%20business%20inquiry%5D%0A%0ACompany%3A%20%5Byour%20company%5D%0A%0AThanks!"
                className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg border-2 border-blue-300 hover:border-blue-500 hover:shadow-md transition-all text-blue-700 font-semibold"
              >
                <Users className="w-5 h-5" />
                Business Partnership
              </a>
            </div>
          </Card>

          {/* Final CTA */}
          <Card className="bg-primary-light border-primary-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Ready to Reach Out?</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Choose the appropriate email address above based on your inquiry type. We get back to you as soon as possible. We read every email personally and appreciate you taking the time to reach out.
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
              TikTok Creator Calculator is an independent educational resource. It is not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, Meta, YouTube, or any social media platform. All calculator results are estimates based on industry data and are not guaranteed earnings predictions. Individual results vary based on content quality, audience demographics, engagement rates, niche, and platform algorithm changes.
            </p>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
