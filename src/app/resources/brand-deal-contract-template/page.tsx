import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import { ArticleSchema } from '@/components/seo/ArticleSchema';

export const metadata: Metadata = {
  title: "TikTok Brand Deal Contract Template for Creator Earnings",
  description: "Explore TikTok brand deal contract template content with creator earnings context, engagement benchmarks, monetization guidance, and clear next-step",
  keywords: ['brand deal contract template', 'tiktok sponsorship agreement', 'influencer contract template', 'tiktok brand deal contract', 'creator contract'],
  alternates: {
    canonical: 'https://calculatecreator.com/resources/brand-deal-contract-template/',
  },
};

export default function BrandDealContractTemplatePage() {
  const faqs = [
    {
      question: 'Do I need a contract for a $200 brand deal?',
      answer: 'Ideally yes, but at minimum get email confirmation of: deliverables, payment amount, due date, and usage rights. Email exchanges can serve as a contract.',
    },
    {
      question: 'What if the brand has their own contract?',
      answer: 'Read it carefully! Brands often include creator-unfavorable terms. Negotiate or counter with your own contract. Larger brands may not budge-decide if deal is worth it.',
    },
    {
      question: 'Can I send this contract as a freelancer, or do I need an LLC?',
      answer: 'You can use this as an individual (sole proprietor). LLC is beneficial for liability protection and taxes but not required for contract validity.',
    },
    {
      question: 'What if brand refuses to sign a contract?',
      answer: 'Red flag. Professional brands always use contracts. For small deals (<$500), email confirmation is minimum. For larger deals, insist on written agreement or walk away.',
    },
    {
      question: 'Should I send this before or after negotiating rate?',
      answer: 'After. Once you\'ve agreed on rate, deliverables, and timeline verbally/via email, send contract to formalize.',
    },
    {
      question: 'Do both parties need to sign for it to be valid?',
      answer: 'Technically, acceptance can be shown through action (e.g., brand pays you = acceptance). But signed contract is much stronger legally.',
    },
  ];

  const redFlags = [
    {
      clause: '"Payment contingent on video reaching X views"',
      why: 'You can\'t control algorithm-too risky',
      counter: 'Guaranteed payment + optional performance bonus',
    },
    {
      clause: '"Brand owns all rights to content in perpetuity"',
      why: 'You lose portfolio piece and can\'t repost',
      counter: 'Non-exclusive license for 90 days-1 year',
    },
    {
      clause: '"Brand may use content for any purpose, including sublicensing to third parties"',
      why: 'Your content could be sold or used in ways you don\'t approve',
      counter: 'Define specific permitted uses',
    },
    {
      clause: '"Creator may not work with any other brands for 12 months"',
      why: 'Full exclusivity for extended period kills your income',
      counter: 'Category exclusivity for 30-90 days max, or charge 10× rate',
    },
    {
      clause: '"Brand may request unlimited revisions"',
      why: 'Endless work loop with no end',
      counter: '2 rounds of reasonable revisions',
    },
    {
      clause: '"Creator may not disclose payment amount under any circumstances"',
      why: 'Prevents you from discussing deals with accountant, lawyer',
      counter: 'Can\'t disclose publicly, but can for business/legal purposes',
    },
    {
      clause: '"Payment within 90 days of posting"',
      why: 'Too long to wait (cash flow issues)',
      counter: 'Payment within 15-30 days',
    },
    {
      clause: '"Brand may terminate at any time without compensation"',
      why: 'Brand can cancel after you\'ve done work and not pay',
      counter: 'If brand cancels after work begins, pays 50-100%',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticleSchema
        title="TikTok Brand Deal Contract Template (Free Download)"
        description="Free brand deal contract template for TikTok creators. Includes complete agreement, clause explanations, red flags to avoid, and how to protect yourself."
        url="https://calculatecreator.com/resources/brand-deal-contract-template/"
        category="Resources"
      />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides/" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Brand Deal Contract Template</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Brand Deal Contract Template
          </h1>
          <p className="text-heading-md text-white/90 mb-6">TikTok creators: 
            Free contract template to protect yourself in brand partnerships
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Updated: November 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min read
            </span>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Free Template
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Introduction */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Introduction</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            A solid contract protects both you and the brand in a sponsorship deal. Whether you're negotiating your first $500 deal or a $10,000 campaign, having clear written terms prevents misunderstandings, ensures you get paid, and defines expectations for both parties.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-neutral-900 mb-2">What's included:</h3>
            <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
              <li>Complete contract template (customizable)</li>
              <li>Clause-by-clause explanations</li>
              <li>Red flags to watch for</li>
              <li>When to use this vs lawyer-drafted contract</li>
              <li>How to send and sign digitally</li>
            </ul>
          </div>
        </Card>

        {/* When to Use a Contract */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">When to Use a Contract</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                Always Use Written Agreement For:
              </h3>
              <ul className="text-body-sm text-green-800 space-y-1 ml-4 list-disc">
                <li>Any payment over $200</li>
                <li>Multi-video campaigns</li>
                <li>Exclusive partnerships</li>
                <li>Usage rights beyond 90 days</li>
                <li>Cross-platform content requirements</li>
                <li>Campaigns with strict deadlines</li>
              </ul>
            </div>
            <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-600" />
                You Might Skip Formal Contract For:
              </h3>
              <ul className="text-body-sm text-yellow-800 space-y-1 ml-4 list-disc">
                <li>Gifted product under $100 (email confirmation sufficient)</li>
                <li>One-time posts under $200 with trusted brands (but still get email confirmation)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-body-sm text-blue-900">
              <strong>Best practice:</strong> Even small deals benefit from written terms. An email exchange confirming deliverables, rate, and timeline counts as a contract.
            </p>
          </div>
        </Card>

        {/* Contract Template */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Brand Deal Contract Template</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Copy and customize the template below for your brand deals.
          </p>
          <div className="p-6 bg-neutral-900 rounded-lg text-neutral-100 font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
{`INFLUENCER MARKETING AGREEMENT

This Influencer Marketing Agreement ("Agreement") is entered into as of [DATE]
between [BRAND NAME] ("Brand") and [YOUR LEGAL NAME] ("Creator").

---

1. SERVICES

Creator agrees to create and publish the following content ("Deliverables"):

  • [NUMBER] TikTok in-feed video(s), each approximately [DURATION] seconds
  • [Optional: NUMBER] Instagram Reels/Stories
  • [Optional: TikTok LIVE mention of approximately X minutes]

Content will promote [PRODUCT/SERVICE] and include:
  • [Specific messaging points, hashtags, or CTAs]
  • Product demonstration/unboxing/usage as appropriate
  • Creator's authentic opinion and style (subject to Brand approval)

---

2. POSTING SCHEDULE

  • Draft for Brand review by: [DATE]
  • Brand feedback provided by: [DATE]
  • Final content posted by: [DATE and TIME, including timezone]

If Brand does not provide feedback within [X] business days, Creator may proceed.

---

3. COMPENSATION

Brand agrees to pay Creator $[AMOUNT] USD for the Deliverables.

Payment structure:
  • [OPTION A: 100% upon completion and posting]
  • [OPTION B: 50% upon contract signing, 50% upon posting]

Payment method: [PayPal / Bank transfer / Other]
Payment due: [Within X days of invoice / Upon posting]
Late payments: Payments not received within [15] days will incur a [5%] late fee.

---

4. USAGE RIGHTS AND LICENSE

Creator grants Brand a [NON-EXCLUSIVE / EXCLUSIVE] license to use content:

Permitted uses:
  • Organic reposting on Brand's social media accounts
  • [Optional: Paid advertising (Spark Ads, other platforms)]
  • [Optional: Use on Brand website, email marketing]

Duration: Brand may use content for [90 DAYS / 1 YEAR / IN PERPETUITY].
Credit: Brand agrees to credit Creator as @[YOUR TIKTOK HANDLE].
Creator retains: Full ownership and rights to post content on own channels.

---

5. EXCLUSIVITY

[OPTION A: No exclusivity]
Creator is free to work with competing brands.

[OPTION B: Category exclusivity]
Creator agrees not to promote competing brands in [CATEGORY] for [X DAYS]
before and [X DAYS] after posting.

---

6. CREATIVE CONTROL AND APPROVALS

Creator maintains creative control, subject to Brand's reasonable approval.

Approval process:
  • Creator submits draft for review
  • Brand provides feedback within [X] business days
  • Creator implements reasonable feedback
  • Brand may not withhold approval unreasonably

If parties cannot agree after [2] rounds of revisions, either party may terminate.

---

7. FTC DISCLOSURE AND COMPLIANCE

Creator agrees to clearly disclose the paid partnership:
  • Enable TikTok's "Branded Content" toggle
  • Include "#ad" at the beginning of the caption
  • Verbally disclose the partnership in the video

---

8. CONTENT STANDARDS

Creator agrees that content will:
  • Comply with TikTok Community Guidelines
  • Not include false, misleading, or unsubstantiated claims
  • Not include illegal, defamatory, or offensive material
  • Not violate third-party intellectual property rights

---

9. PERFORMANCE METRICS (OPTIONAL)

[OPTION A: No performance guarantees]
Payment is for content creation, not results.

[OPTION B: Reporting only]
Creator agrees to provide performance metrics within [X] days of posting.
Payment is not contingent on performance.

---

10. TERMINATION

Either party may terminate this agreement:

Before content creation begins: With written notice, no penalty.

After content creation begins:
  • If terminating without cause, terminating party pays [50%] of total fee
  • If terminating for cause (breach), no payment owed to breaching party

---

11. GENERAL TERMS

Entire Agreement: This constitutes the entire understanding between parties.
Amendments: Any changes must be in writing and signed by both parties.
Governing Law: Governed by the laws of [STATE/COUNTRY].

---

SIGNATURES

BRAND:
Signature: _______________________
Name: [BRAND REPRESENTATIVE NAME]
Title: [TITLE]
Date: _______________________


CREATOR:
Signature: _______________________
Name: [YOUR LEGAL NAME]
Date: _______________________`}
            </pre>
          </div>
        </Card>

        {/* Key Clauses Explanation */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Key Clauses Explained</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Section 3: Compensation</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Best payment structure:</strong> 50% upfront, 50% upon posting (protects creators)</p>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Avoid:</strong> Payment contingent on views/engagement (you can't control algorithm)</p>
              <p className="text-body-sm text-neutral-700"><strong>Late payment clause:</strong> Always include-motivates timely payment</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Section 4: Usage Rights</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Non-exclusive (recommended):</strong> Brand can use your content, you can still repost</p>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Duration options:</strong></p>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>90 days: Fair for most campaigns</li>
                <li>1 year: Charge +25-50% more</li>
                <li>Perpetuity: Charge +100-200% more (or avoid)</li>
              </ul>
              <p className="text-body-sm text-neutral-700"><strong>Spark Ads:</strong> If brand can use as paid ads, charge +30-50% extra</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Section 5: Exclusivity</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>No exclusivity (most common):</strong> You can work with any brands anytime</p>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Category exclusivity:</strong> Can't promote competing brands for X days-charge +25-50% more</p>
              <p className="text-body-sm text-neutral-700"><strong>Pro tip:</strong> Define "competing brands" explicitly to avoid confusion</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Section 6: Creative Control</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Balance:</strong> Creator needs authenticity, brand needs messaging alignment</p>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Fair terms:</strong> 2 rounds of revision, brand can't demand unlimited changes</p>
              <p className="text-body-sm text-neutral-700"><strong>Allow termination:</strong> If can't agree after 2 rounds, either party can exit without penalty</p>
            </div>

            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Section 7: FTC Disclosure</h3>
              <p className="text-body-sm text-red-800 mb-2"><strong>Non-negotiable:</strong> You must disclose sponsorships per FTC rules</p>
              <p className="text-body-sm text-red-800"><strong>If brand asks you to hide sponsorship:</strong> Refuse-it's illegal and puts you at risk</p>
            </div>
          </div>
        </Card>

        {/* Red Flags */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">🚩 Red Flags in Brand Contracts</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Avoid these clauses or negotiate better terms:
          </p>
          <div className="space-y-4">
            {redFlags.map((flag, idx) => (
              <div key={idx} className="p-5 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200 shadow-sm">
                <h3 className="font-semibold text-red-900 mb-2">{flag.clause}</h3>
                <div className="space-y-2 text-body-sm">
                  <p className="text-red-800"><strong>Why it's bad:</strong> {flag.why}</p>
                  <p className="text-green-800"><strong>Counter with:</strong> {flag.counter}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
            <p className="text-body-md font-semibold text-yellow-900">
              If you see these: Negotiate or walk away.
            </p>
          </div>
        </Card>

        {/* How to Send and Sign */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Send and Sign Contracts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">Digital Signature Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="font-semibold text-neutral-900 mb-2">Free Options:</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                    <li>Google Docs (share doc, both parties sign, download PDF)</li>
                    <li>PandaDoc (free tier for basic contracts)</li>
                    <li>HelloSign (3 free signatures/month)</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="font-semibold text-neutral-900 mb-2">Paid Options:</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                    <li>DocuSign (industry standard, $10-40/month)</li>
                    <li>HelloSign Pro ($15/month)</li>
                    <li>Adobe Sign ($12.99/month)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">Process</h3>
              <ol className="text-body-sm text-blue-800 space-y-2 ml-4 list-decimal">
                <li><strong>Fill in template</strong> with deal-specific details</li>
                <li><strong>Send to brand</strong> for review (PDF or shared Google Doc)</li>
                <li><strong>Negotiate</strong> any changes (see red flags above)</li>
                <li><strong>Both parties sign</strong> digitally or physically</li>
                <li><strong>Save signed copy</strong> (both parties keep a copy)</li>
                <li><strong>Send invoice</strong> when payment is due per contract</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* When to Hire a Lawyer */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">When to Hire a Lawyer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                Use This Template For:
              </h3>
              <ul className="text-body-sm text-green-800 space-y-1 ml-4 list-disc">
                <li>Deals under $10,000</li>
                <li>Single-video campaigns</li>
                <li>Standard brand partnerships</li>
                <li>Brands you've worked with before</li>
              </ul>
            </div>
            <div className="p-5 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 flex-shrink-0 text-orange-600" />
                Hire a Lawyer For:
              </h3>
              <ul className="text-body-sm text-orange-800 space-y-1 ml-4 list-disc">
                <li>Deals over $10,000</li>
                <li>Multi-year ambassador contracts</li>
                <li>Exclusivity agreements</li>
                <li>Complex IP licensing</li>
                <li>International brand deals</li>
                <li>Any time you're unsure or uncomfortable</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-body-sm text-blue-900">
              <strong>Cost:</strong> Entertainment lawyers charge $200-500/hour. Contract review: 1-2 hours ($200-1,000 typically).
              Worth it when deal is large enough that legal fees are &lt;10% of deal value.
            </p>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="Brand Deal Contract Template" />

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Before your next brand deal:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-decimal">
                <li>Download and customize this template</li>
                <li>Save as your standard contract</li>
                <li>Adjust based on deal specifics (deliverables, rate, exclusivity)</li>
                <li>Send to brand for review and signature</li>
                <li>Keep signed copy in organized folder (by brand name and date)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Learn more:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li><Link href="/guides/how-to-get-brand-deals/" className="text-blue-600 hover:underline">How to Get Brand Deals on TikTok</Link> - Find partnership opportunities</li>
                <li><Link href="/calculators/brand-deal-rate/" className="text-blue-600 hover:underline">TikTok Brand Deal Rate Calculator</Link> - Price your services</li>
                <li><Link href="/compliance/sponsorship-disclosure/" className="text-blue-600 hover:underline">Sponsorship Disclosure Guidelines</Link> - FTC compliance</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Disclaimer */}
        <Card>
          <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-600" />
              Disclaimer
            </h3>
            <p className="text-body-sm text-yellow-800">
              This template is provided for informational purposes and is not legal advice. While this contract covers standard brand deal terms, you should consult with a licensed attorney for deals over $10,000, exclusive partnerships, or any complex legal situations.
            </p>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/brand-deal-rate/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Brand Deal Rate Calculator</h3>
              <p className="text-body-sm text-neutral-600">Calculate your worth</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Get Brand Deals</h3>
              <p className="text-body-sm text-neutral-600">Find opportunities</p>
            </Link>
            <Link href="/compliance/sponsorship-disclosure/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Sponsorship Disclosure Guidelines</h3>
              <p className="text-body-sm text-neutral-600">Stay compliant with FTC</p>
            </Link>
            <Link href="/advanced/creator-tax-deductions-guide/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Creator Tax Deductions Guide</h3>
              <p className="text-body-sm text-neutral-600">Maximize tax savings</p>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
}
