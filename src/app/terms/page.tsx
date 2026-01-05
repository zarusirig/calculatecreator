import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Service | TikTok Creator Calculator',
  description: 'Usage guidelines, disclaimers, and terms for TikTok Creator Calculator. Free tools provided as-is for informational purposes.',
  alternates: {
    canonical: 'https://calculatecreator.com/terms/',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="/images/calculate-creator-transparent-v2.png"
            alt="TikTok Creator Calculator"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-display-md font-bold text-neutral-900">Terms of Service</h1>
          </div>
        </div>
        <p className="text-body-md text-neutral-600 mb-8">Last Updated: November 13, 2026</p>

        <div className="space-y-6">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Acceptance of Terms</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              By accessing and using TikTok Creator Calculator, you agree to these Terms of Service. If you disagree with any part, please discontinue use.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Use of Service</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p><strong>Permitted Use:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Personal estimation of TikTok earnings</li>
                <li>Research and planning for content strategy</li>
                <li>Educational purposes</li>
                <li>Benchmarking and negotiation preparation</li>
              </ul>
              <p className="mt-4"><strong>Prohibited Use:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Commercial redistribution of calculator code or data</li>
                <li>Scraping or automated data extraction</li>
                <li>Misrepresentation of calculator outputs as guarantees</li>
                <li>Any illegal or fraudulent activity</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Disclaimers</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p><strong>Estimates Only:</strong> Our calculators provide estimates based on industry averages and reported creator earnings. Actual earnings may vary significantly.</p>
              <p><strong>No Guarantees:</strong> We do not guarantee any specific earnings. TikTok earnings depend on factors we cannot predict: algorithm changes, audience behavior, content quality, and more.</p>
              <p><strong>Not Financial Advice:</strong> Our tools are educational. We are not financial advisors. Consult a professional for financial planning.</p>
              <p><strong>No TikTok Affiliation:</strong> We are not affiliated with, endorsed by, or connected to TikTok, ByteDance Ltd, or any social media platform.</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data Accuracy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We strive for accuracy using verified data sources. However, TikTok's monetization programs change frequently. We update data quarterly but cannot guarantee real-time accuracy. Always verify with official TikTok sources.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Limitation of Liability</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, TIKTOK CREATOR CALCULATOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF OUR SERVICE, INCLUDING BUT NOT LIMITED TO LOST EARNINGS, BUSINESS DECISIONS BASED ON CALCULATOR OUTPUTS, OR TECHNICAL ERRORS.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Intellectual Property</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              All content on this site (text, calculators, formulas, design) is owned by TikTok Creator Calculator and protected by copyright.
            </p>
            <p className="text-body-md text-neutral-700">
              <strong>You may:</strong> Use calculators for personal purposes, share links to our site<br />
              <strong>You may not:</strong> Copy calculator code, republish our content, or create derivative works without permission
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Changes to Service</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice. We may also update calculators, change methodologies, or adjust data sources to maintain accuracy.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">User Conduct</h2>
            <p className="text-body-md text-neutral-700 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Attempt to hack, disrupt, or overload our servers</li>
              <li>Use bots or automated tools to access the service</li>
              <li>Misrepresent yourself or impersonate others</li>
              <li>Submit false or misleading information</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Governing Law</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              These Terms are governed by the laws of the United States. Any disputes shall be resolved in accordance with applicable law.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Specific Calculator Terms</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Earnings Calculators</h3>
                <p>
                  All earnings estimates (Creator Fund, brand deals, LIVE gifts, TikTok Shop) are projections based on industry averages and historical data. Actual earnings depend on numerous factors including but not limited to: content quality, audience engagement, niche competitiveness, geographic location, platform algorithm changes, advertiser demand, and economic conditions. We do not guarantee any level of earnings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Tax Calculator</h3>
                <p>
                  The Creator Tax Calculator provides estimates for educational purposes only. Tax obligations vary based on individual circumstances, state laws, deductions, credits, and other factors we cannot account for in a general calculator. Always consult a qualified tax professional or CPA for personalized tax advice. We are not responsible for tax filing errors or penalties resulting from use of our calculator.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Growth and Performance Calculators</h3>
                <p>
                  Projections for follower growth, viral potential, and performance metrics are based on historical patterns and statistical modeling. Social media algorithms change frequently, and past performance does not guarantee future results. Use these projections as guidance for planning, not as promises of specific outcomes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">ROI and Business Calculators</h3>
                <p>
                  Business calculators (production costs, break-even analysis, sponsorship ROI) use standard financial formulas but cannot account for your unique business circumstances. These tools are for preliminary planning; professional financial advisors should review significant business decisions.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Platform Changes</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                TikTok frequently updates its Creator Fund payments, algorithm, monetization requirements, and platform policies. We strive to keep our calculators current with these changes, but there may be delays between TikTok announcements and our updates.
              </p>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Known Variables</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Creator Fund Rates:</strong> TikTok's payment rates fluctuate based on advertiser revenue, view counts, and regional factors. Our calculator uses current averages but cannot predict rate changes.</li>
                <li><strong>Monetization Thresholds:</strong> Minimum follower counts, age requirements, and eligibility criteria may change. Verify current requirements on TikTok's official creator portal.</li>
                <li><strong>Regional Availability:</strong> TikTok features and monetization programs vary by country. Our calculators include region-specific data where available, but some features may not be available in your location.</li>
                <li><strong>New Features:</strong> TikTok regularly launches new monetization features (e.g., Creativity Program, Effect Creator Rewards). We add calculators for new features after sufficient data becomes available to ensure accuracy.</li>
              </ul>

              <p className="mt-4">
                We recommend checking TikTok's official documentation and creator resources for the most current platform information.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Warranty Disclaimer</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p className="uppercase font-semibold">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>

              <p>We specifically disclaim:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Accuracy Warranties:</strong> While we strive for accuracy, we do not warrant that calculator results are error-free or current</li>
                <li><strong>Availability Warranties:</strong> We do not guarantee uninterrupted or error-free service. The website may be down for maintenance or technical issues</li>
                <li><strong>Fitness for Purpose:</strong> We do not warrant that our calculators are suitable for your specific business needs or decisions</li>
                <li><strong>Merchantability:</strong> No warranty that the service meets commercial quality standards for any particular purpose</li>
                <li><strong>Non-Infringement:</strong> While we respect intellectual property, we do not warrant our service is completely free from potential third-party claims</li>
              </ul>

              <p className="mt-4">
                Some jurisdictions do not allow disclaimer of implied warranties, so portions of this disclaimer may not apply to you. You may have additional consumer rights under local law.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Indemnification</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                You agree to indemnify, defend, and hold harmless TikTok Creator Calculator, its owners, operators, employees, and affiliates from any claims, losses, damages, liabilities, including legal fees, arising out of:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                <li>Your use or misuse of the service</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
                <li>Any business or financial decisions made based on calculator results</li>
                <li>Any dispute between you and a third party related to use of our service</li>
              </ul>

              <p className="mt-4">
                This indemnification obligation survives termination of your use of the service and these Terms.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Limitation of Liability - Detailed</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p className="uppercase font-semibold">
                IN NO EVENT SHALL TIKTOK CREATOR CALCULATOR BE LIABLE FOR:
              </p>

              <div className="space-y-3 mt-4">
                <div>
                  <p className="font-semibold">Financial Losses</p>
                  <p>Lost earnings, business opportunities, or revenue based on calculator projections or business decisions informed by our tools.</p>
                </div>

                <div>
                  <p className="font-semibold">Tax Liabilities</p>
                  <p>Underpayment penalties, interest, or audit costs arising from use of our tax calculator. Always consult a tax professional.</p>
                </div>

                <div>
                  <p className="font-semibold">Brand Deal Disputes</p>
                  <p>Pricing disputes, contract issues, or payment problems related to sponsorships negotiated using our Brand Deal Rate Calculator.</p>
                </div>

                <div>
                  <p className="font-semibold">Account Issues</p>
                  <p>TikTok account suspensions, monetization denials, or violations of TikTok's policies related to actions taken based on our calculators.</p>
                </div>

                <div>
                  <p className="font-semibold">Data Loss</p>
                  <p>Loss of calculator inputs or results. We do not store your data, and you are responsible for saving any information you wish to retain.</p>
                </div>

                <div>
                  <p className="font-semibold">Consequential Damages</p>
                  <p>Any indirect, incidental, special, punitive, or consequential damages, including but not limited to lost profits, lost data, business interruption, or reputational harm.</p>
                </div>
              </div>

              <p className="mt-4 p-4 bg-neutral-100 rounded">
                <strong>Maximum Liability:</strong> If, despite these limitations, we are found liable for any damages, our total liability shall not exceed $100 USD or the amount you paid to use our service (which is $0, as we are free), whichever is greater.
              </p>

              <p className="mt-3 text-body-sm">
                Some jurisdictions do not allow limitation of liability for consequential damages, so this limitation may not fully apply to you.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Dispute Resolution and Arbitration</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <h3 className="font-semibold text-neutral-900 mb-2">Informal Resolution</h3>
              <p>
                Before filing any formal dispute, you agree to contact us at legal@calculatecreator.com and attempt to resolve the issue informally. Most disputes can be resolved quickly through direct communication.
              </p>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Binding Arbitration</h3>
              <p>
                If informal resolution fails, any dispute arising from these Terms or use of our service shall be resolved through binding arbitration rather than in court, except that:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Either party may seek injunctive relief in court for intellectual property violations</li>
                <li>Small claims court disputes under the jurisdictional limit may be filed in small claims court</li>
              </ul>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Class Action Waiver</h3>
              <p>
                You agree to resolve disputes individually. You waive the right to participate in class actions, class arbitrations, or representative actions. Any dispute must be filed individually.
              </p>

              <p className="mt-4 text-body-sm italic">
                Note: Some jurisdictions do not allow arbitration agreements or class action waivers. If you reside in such a jurisdiction, this section may not apply to you.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Service Modifications and Termination</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of TikTok Creator Calculator at any time, with or without notice, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                <li>Adding, removing, or modifying calculators</li>
                <li>Changing calculation methodologies or formulas</li>
                <li>Updating design, features, or functionality</li>
                <li>Implementing usage limits or access restrictions</li>
                <li>Discontinuing the entire service</li>
              </ul>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Termination Rights</h3>
              <p>We may terminate or restrict your access to the service if:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>You violate these Terms of Service</li>
                <li>You engage in prohibited activities (scraping, hacking, abuse)</li>
                <li>Your use threatens service stability or other users</li>
                <li>Required by law or legal process</li>
              </ul>

              <p className="mt-4">
                You may stop using the service at any time. Since we don't require accounts, simply discontinue accessing the website.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Copyright and DMCA</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                All content on TikTok Creator Calculator - including text, graphics, calculators, formulas, code, and documentation - is protected by copyright and owned by TikTok Creator Calculator or licensed to us.
              </p>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Copyright Infringement Claims</h3>
              <p>
                If you believe content on our site infringes your copyright, submit a DMCA notice to legal@calculatecreator.com with:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Identification of the infringing material and its location on our site</li>
                <li>Your contact information (address, phone, email)</li>
                <li>A statement that you have a good faith belief the use is unauthorized</li>
                <li>A statement of accuracy under penalty of perjury</li>
                <li>Physical or electronic signature of the copyright owner or authorized agent</li>
              </ul>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Trademark Notice</h3>
              <p>
                "TikTok" is a trademark of ByteDance Ltd. We are not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. Our use of "TikTok" is purely descriptive to indicate the subject matter of our calculators.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Acceptable Use Policy</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Beyond the prohibited uses listed earlier, you specifically agree not to:
              </p>

              <div className="space-y-3 mt-4">
                <div>
                  <p className="font-semibold">Technical Abuse</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Overload servers with excessive requests</li>
                    <li>Reverse engineer calculator algorithms or code</li>
                    <li>Probe, scan, or test system vulnerabilities</li>
                    <li>Bypass rate limiting or access controls</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Content Misuse</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Copy or republish our content without permission</li>
                    <li>Create derivative tools or competitive services using our calculators</li>
                    <li>Remove copyright notices or attribution</li>
                    <li>Frame or embed our content on other websites without authorization</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Harmful Activities</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Introduce malware, viruses, or malicious code</li>
                    <li>Phishing or attempting to collect other users' information</li>
                    <li>Impersonate our service or employees</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <strong>Enforcement:</strong> Violations may result in immediate termination of access, legal action, and cooperation with law enforcement if criminal activity is suspected.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Third-Party Resources and Links</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Our website may link to third-party websites, resources, or services (including TikTok's official documentation, creator resources, and educational content). These links are provided for convenience only.
              </p>

              <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                <li>We do not endorse or make representations about third-party sites</li>
                <li>We are not responsible for third-party content, accuracy, or policies</li>
                <li>Third-party sites have their own terms and privacy policies</li>
                <li>We are not liable for damages from your use of third-party services</li>
              </ul>

              <p className="mt-4">
                You acknowledge that when you click external links, you leave our site and these Terms no longer apply. Review the terms and privacy policies of any third-party site you visit.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Severability and Waiver</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <h3 className="font-semibold text-neutral-900 mb-2">Severability</h3>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid by a court of law, that provision shall be modified to the minimum extent necessary to make it enforceable, or if that's not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.
              </p>

              <h3 className="font-semibold text-neutral-900 mb-2 mt-4">Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision. No waiver shall be effective unless in writing and signed by an authorized representative of TikTok Creator Calculator.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Entire Agreement</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and TikTok Creator Calculator regarding use of our service. They supersede all prior or contemporaneous communications, proposals, or agreements, whether oral or written.
              </p>

              <p className="mt-3">
                Any amendments or modifications to these Terms must be in writing and posted on this page. We will update the "Last Updated" date when changes are made.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Assignment</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                You may not assign, transfer, or delegate your rights or obligations under these Terms without our prior written consent. We may freely assign these Terms or any rights under them to any third party without restriction, including in connection with a merger, acquisition, reorganization, or sale of assets.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Force Majeure</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, fuel, energy, labor, or materials.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Contact</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Questions, concerns, or notices regarding these Terms of Service should be sent to:
              </p>

              <div className="mt-4 space-y-3">
                <p><strong>Email:</strong> <a href="mailto:legal@calculatecreator.com" className="text-primary-600 hover:underline">legal@calculatecreator.com</a></p>
                <p><strong>Subject Line:</strong> Include "Terms of Service" for faster routing</p>
                <p><strong>Response Time:</strong> We aim to respond to legal inquiries within 5 business days</p>
              </div>

              <div className="mt-6 p-4 bg-neutral-100 rounded">
                <p className="font-semibold mb-2">For Specific Issues:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-body-sm">
                  <li>Privacy questions: privacy@calculatecreator.com</li>
                  <li>Copyright claims: legal@calculatecreator.com (DMCA notices)</li>
                  <li>Technical support: Use our contact form or general inquiries email</li>
                  <li>Business inquiries: business@calculatecreator.com</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
            <p className="text-body-sm text-neutral-600 italic mb-4">
              By using TikTok Creator Calculator, you acknowledge that you have read, understood, and agree to these Terms of Service and our Privacy Policy.
            </p>
            <p className="text-body-sm text-neutral-600">
              <strong>Effective Date:</strong> These Terms are effective as of the "Last Updated" date shown at the top of this page. Continued use after updates constitutes acceptance of modified Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
