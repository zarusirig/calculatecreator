import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export const metadata: Metadata = {
  title: 'Privacy Policy | TikTok Creator Calculator',
  description: 'Your privacy matters. We don\'t collect personal data or sell information. Learn about our privacy-first approach to TikTok earnings calculators.',
  alternates: {
    canonical: 'https://calculatecreator.com/privacy/',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <WebPageSchema
        title="Privacy Policy | TikTok Creator Calculator"
        description="Your privacy matters. We don't collect personal data or sell information. Learn about our privacy-first approach to TikTok earnings calculators."
        url="https://calculatecreator.com/privacy/"
      />
      <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="/images/calculate-creator-transparent-v2.png"
            alt="TikTok Creator Calculator"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-display-md font-bold text-neutral-900">Privacy Policy</h1>
          </div>
        </div>
        <p className="text-body-md text-neutral-600 mb-8">Last Updated: November 13, 2025</p>

        <div className="space-y-6">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Commitment</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TikTok Creator Calculator is committed to protecting your privacy. We believe in transparency and minimal data collection. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data We Collect</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Calculator Inputs (Not Stored)</h3>
                <p>When you use our calculators, you enter data like follower counts, engagement rates, etc. <strong>We do NOT collect, store, or transmit these inputs.</strong> All calculations happen in your browser.</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Analytics Data (Anonymous)</h3>
                <p>We use Google Analytics 4 to collect anonymous usage statistics:</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>Pages visited</li>
                  <li>Calculator usage (which calculators are used, but not the values entered)</li>
                  <li>Browser type and device information</li>
                  <li>Approximate location (city level, for regional content optimization)</li>
                </ul>
                <p className="mt-2">This data is anonymized and aggregated. We cannot identify individual users.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How We Use Data</h2>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Improve calculator accuracy and user experience</li>
              <li>Understand which tools are most valuable to creators</li>
              <li>Fix technical issues and bugs</li>
              <li>Generate aggregated statistics (e.g., "10,000 calculations performed this month")</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data We DON'T Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Personal information (name, email, phone)</li>
              <li>Calculator input values (follower counts, earnings, etc.)</li>
              <li>TikTok account information</li>
              <li>Financial information</li>
              <li>Precise location data</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Cookies</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We use cookies for Google Analytics. These cookies help us understand how visitors use our site. You can disable cookies in your browser settings without affecting calculator functionality.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Third-Party Services</h2>
            <p className="text-body-md text-neutral-700 mb-4">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li><strong>Google Analytics:</strong> Website analytics (subject to Google's privacy policy)</li>
              <li><strong>Firebase Hosting:</strong> Website hosting (no additional data collection)</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Your Rights</h2>
            <p className="text-body-md text-neutral-700 mb-4">Since we don't collect personal data, there's nothing to access, delete, or export. If you have concerns:</p>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Disable cookies in your browser</li>
              <li>Use browser privacy mode</li>
              <li>Contact us at privacy@calculatecreator.com</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Children's Privacy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              Our service is not directed at children under 13. We do not knowingly collect data from children. TikTok's Creator Fund requires users to be 18+, which is our primary audience.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Changes to This Policy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We may update this policy occasionally. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the site constitutes acceptance of changes.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">International Users</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                TikTok Creator Calculator is accessible worldwide. Our services comply with major privacy regulations including GDPR (European Union), CCPA (California), and other international privacy laws.
              </p>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">GDPR Compliance (EU Users)</h3>
                <p className="mb-2">Under GDPR, you have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Access any personal data we hold (which is none, as we don't collect it)</li>
                  <li>Request deletion of data (not applicable as we don't store personal data)</li>
                  <li>Object to processing (our analytics are anonymous and cannot identify individuals)</li>
                  <li>Data portability (not applicable as we don't collect personal data)</li>
                  <li>Withdraw consent at any time by disabling cookies in your browser</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">CCPA Compliance (California Users)</h3>
                <p className="mb-2">California residents have specific rights under CCPA. However, since we:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Do not sell personal information</li>
                  <li>Do not collect personal information beyond anonymous analytics</li>
                  <li>Do not share data with third parties for monetary gain</li>
                  <li>Cannot identify individual users from our data</li>
                </ul>
                <p className="mt-2">Most CCPA provisions do not apply to our service. You can still opt out of analytics tracking by disabling cookies.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data Security Measures</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                While we don't collect sensitive personal information, we still implement industry-standard security practices to protect our infrastructure and ensure service reliability:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>HTTPS Encryption:</strong> All traffic to our website uses TLS/SSL encryption to prevent interception</li>
                <li><strong>Client-Side Processing:</strong> Calculator inputs never leave your browser, eliminating server-side data exposure risks</li>
                <li><strong>No User Accounts:</strong> Without login systems, there's no password database to breach or account information to compromise</li>
                <li><strong>Regular Updates:</strong> We maintain our hosting platform and dependencies with the latest security patches</li>
                <li><strong>Minimal Third-Party Code:</strong> We limit external dependencies to reduce potential vulnerability vectors</li>
              </ul>
              <p className="mt-4">
                Our privacy-first architecture means the best data protection is built into our core design: we simply don't have your data to protect.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <h3 className="font-semibold text-neutral-900 mb-2">Types of Cookies We Use</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Analytics Cookies (Google Analytics)</p>
                  <p>These cookies help us understand how visitors interact with our website. They collect information about pages visited, time spent, and navigation patterns. This data is anonymized and aggregated.</p>
                  <p className="mt-1 text-body-sm text-neutral-600">Examples: _ga, _gid, _gat</p>
                </div>
                <div>
                  <p className="font-semibold">Functional Cookies</p>
                  <p>These cookies remember your preferences like display settings or calculator inputs (stored locally only). They enhance user experience but aren't strictly necessary.</p>
                </div>
              </div>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-6">Managing Cookie Preferences</h3>
              <p>You have several options to control cookies:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing ones. Check your browser's help documentation for instructions.</li>
                <li><strong>Google Analytics Opt-Out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Private/Incognito Mode:</strong> Use your browser's private browsing mode to prevent cookie storage</li>
                <li><strong>Ad Blockers:</strong> Many ad blockers also block analytics trackers</li>
              </ul>
              <p className="mt-4 bg-neutral-100 p-4 rounded">
                <strong>Note:</strong> Blocking cookies won't affect calculator functionality since all calculations happen in your browser without requiring any stored data.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How We Use Analytics Data</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>The anonymous analytics data we collect helps us improve the service in specific ways:</p>

              <div className="space-y-3 mt-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Understanding Calculator Usage</h3>
                  <p>We track which calculators are most popular to prioritize improvements and ensure our most-used tools remain accurate. For example, if the Engagement Rate Calculator sees heavy traffic, we'll verify its algorithm more frequently.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Identifying Technical Issues</h3>
                  <p>Analytics help us spot bugs and performance problems. If users consistently leave a page quickly or encounter errors, we investigate and fix the issue.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Optimizing User Experience</h3>
                  <p>We analyze navigation patterns to make frequently-used calculators easier to find and improve our site structure based on how creators actually use our tools.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Content Development</h3>
                  <p>By understanding which topics interest our audience, we create relevant guides, add new calculators, and update existing content to address real creator needs.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Regional Customization</h3>
                  <p>City-level location data helps us understand regional differences. For instance, TikTok monetization varies by country, so knowing our audience geography helps us provide region-appropriate estimates.</p>
                </div>
              </div>

              <p className="mt-4 p-4 bg-primary-50 rounded border border-primary-200">
                <strong>Important:</strong> We never see individual calculator inputs. If you enter "50,000 followers" into a calculator, we don't know that number. We only know "someone used the Engagement Rate Calculator."
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data Retention</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Since we don't collect personal data, there's minimal information to retain. Here's our retention policy for the limited data we do collect:
              </p>

              <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                <li><strong>Analytics Data:</strong> Google Analytics retains data for 26 months by default. After this period, older data is automatically deleted from Google's servers.</li>
                <li><strong>Server Logs:</strong> Basic server logs (IP addresses, timestamps, requested pages) are retained for 90 days for security monitoring and troubleshooting, then automatically deleted.</li>
                <li><strong>Calculator Inputs:</strong> Never stored on our servers, immediately discarded after calculation. Your browser may cache results locally, which you can clear at any time.</li>
                <li><strong>Contact Inquiries:</strong> If you email us with questions, we retain correspondence for 2 years for reference purposes.</li>
              </ul>

              <p className="mt-4">
                Our minimal data collection philosophy means there's simply less data to manage, reducing privacy risks and simplifying compliance with data protection regulations.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Third-Party Links and Services</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Our website may contain links to external resources, guides, and TikTok's official documentation. When you click these links, you leave our site and are subject to the privacy policies of those third-party services.
              </p>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Third-Party Services We Use</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Google Analytics</p>
                  <p>Provides anonymous usage analytics. Review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google's Privacy Policy</a> for details on how they process data.</p>
                </div>

                <div>
                  <p className="font-semibold">Firebase Hosting</p>
                  <p>Hosts our website infrastructure. Firebase (owned by Google) does not collect additional user data beyond standard hosting metrics. Review <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Firebase Privacy Policy</a>.</p>
                </div>
              </div>

              <p className="mt-4 bg-neutral-100 p-4 rounded">
                <strong>We do not:</strong> Share your data with affiliate networks, advertising platforms, data brokers, or marketing services. We don't sell data, rent email lists, or participate in cross-site tracking networks.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Privacy for Different User Types</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Individual Creators</h3>
                <p>When you use our calculators for personal TikTok earnings estimates, we don't collect your account information, follower counts, or any metrics you enter. Your financial projections and business data remain completely private.</p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Brands and Agencies</h3>
                <p>Marketing professionals using our tools for influencer vetting or campaign planning benefit from the same privacy protections. We don't track which creators you're researching or your budget calculations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Educators and Students</h3>
                <p>Academic users studying the creator economy can use our tools without institutional tracking or data sharing requirements. Research data and course materials remain private.</p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Job Seekers and Career Planners</h3>
                <p>Individuals exploring creator careers can research earning potential without creating a digital footprint that might be discoverable by current employers or linked to their professional profile.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Your Privacy Rights Summary</h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <p className="font-semibold text-neutral-900">You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Use all calculators without providing personal information</li>
                <li>Disable analytics cookies without losing functionality</li>
                <li>Access our site anonymously through VPNs or privacy browsers</li>
                <li>Request information about data practices (contact us anytime)</li>
                <li>Lodge complaints with data protection authorities if you believe your privacy rights have been violated</li>
              </ul>

              <p className="mt-4 p-4 bg-primary-50 border border-primary-200 rounded">
                <strong>Bottom Line:</strong> We've designed TikTok Creator Calculator with privacy as the foundation, not an afterthought. No personal data collection means no data breaches, no targeted advertising, and no privacy violations.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Updates and Notifications</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                When we update this Privacy Policy, we'll post the new version on this page with a revised "Last Updated" date at the top. We'll notify users of material changes through:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>A notice banner on the website homepage for 30 days</li>
                <li>Updated metadata and clear indication of policy changes</li>
              </ul>
              <p className="mt-3">
                We encourage you to review this policy periodically. Continued use of TikTok Creator Calculator after changes indicates acceptance of the updated policy.
              </p>
              <p className="mt-3">
                <strong>Major changes requiring re-consent:</strong> If we ever decide to collect personal information (which is not currently planned), we'll implement a clear opt-in consent mechanism and prominently notify all users.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Contact Us</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Questions, concerns, or requests regarding this Privacy Policy? We're here to help.
              </p>

              <div className="mt-4 space-y-3">
                <p><strong>Email:</strong> <a href="mailto:privacy@calculatecreator.com" className="text-primary-600 hover:underline">privacy@calculatecreator.com</a></p>
                <p><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours (business days).</p>
              </div>

              <div className="mt-6 p-4 bg-neutral-100 rounded">
                <p className="font-semibold mb-2">For Privacy Complaints or Concerns:</p>
                <p className="text-body-sm">
                  If you believe we've mishandled your data or violated privacy regulations, please contact us first so we can address your concerns. If you're unsatisfied with our response, you may file a complaint with your local data protection authority.
                </p>
              </div>

              <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded">
                <p className="font-semibold mb-2">Transparency Commitment</p>
                <p className="text-body-sm">
                  We believe in radical transparency about data practices. If you have questions about how our calculators work, what data flows where, or technical details about our privacy architecture, we're happy to explain. Privacy shouldn't require a law degree to understand.
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
