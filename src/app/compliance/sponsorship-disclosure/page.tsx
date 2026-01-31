import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Scale, CheckCircle, Calendar, XCircle, Shield, Users } from 'lucide-react';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export const metadata: Metadata = {
  title: 'TikTok Sponsorship Disclosure Guidelines: FTC Compliance 2026',
  description: 'Complete FTC compliance guide for TikTok creators. How to properly disclose sponsored content, legal requirements, and avoid violations.',
  keywords: ['tiktok ftc compliance', 'sponsorship disclosure', 'how to disclose sponsored content', 'tiktok ad disclosure'],
  alternates: {
    canonical: 'https://calculatecreator.com/compliance/sponsorship-disclosure/',
  },
};

export default function SponsorshipDisclosurePage() {
  const faqs = [
    {
      question: 'Do I need to disclose in every video if I\'m a long-term ambassador?',
      answer: 'Yes. Even if followers "know" you\'re an ambassador, each video must disclose the relationship. New viewers may not know.',
    },
    {
      question: 'Can I just say "gifted" instead of "ad"?',
      answer: 'Legally yes, but #ad is clearer and safer. "Gifted" can be ambiguous (gift from a friend vs brand).',
    },
    {
      question: 'What if I genuinely love the product—do I still disclose?',
      answer: 'Yes! Disclosure isn\'t about whether you like the product; it\'s about whether you received value (payment, free product) from the brand.',
    },
  ];

  return (
    <>
      <WebPageSchema
        title="TikTok Sponsorship Disclosure Guidelines: FTC Compliance 2026"
        description="Complete FTC compliance guide for TikTok creators. How to properly disclose sponsored content, legal requirements, and avoid violations."
        url="https://calculatecreator.com/compliance/sponsorship-disclosure/"
        breadcrumbs={[{ name: 'Compliance', url: 'https://calculatecreator.com/compliance/' }]}
      />
      <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides/">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Sponsorship Disclosure</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Sponsorship Disclosure Guidelines
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete FTC compliance guide: How to properly disclose sponsored content
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 flex-shrink-0" />
              Legal Requirements
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              FTC Compliant
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              Updated: November 2025
            </span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-red-50 border-red-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Disclosure Matters</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Scale className="w-5 h-5 flex-shrink-0 text-blue-600" />
                Legal Requirements (FTC)
              </h3>
              <p className="text-body-md text-neutral-700">
                The Federal Trade Commission requires clear disclosure of any "material connection" between creator and brand.
                If you received anything of value (money, free products, affiliate commissions), you must disclose it.
              </p>
              <p className="text-body-sm text-red-700 mt-2">
                <strong>Penalties:</strong> $10,000–$43,280 per violation
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 flex-shrink-0 text-blue-600" />
                Ethical Reasons
              </h3>
              <p className="text-body-md text-neutral-700">
                Beyond legal compliance: maintains audience trust, preserves your credibility, protects you legally, and sets industry standards.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">The Triple Disclosure Method (Best Practice)</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            For maximum compliance and transparency, use all three disclosure methods:
          </p>
          <div className="space-y-4">
            {disclosureMethods.map((method, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-2">{method.title}</h3>
                    <p className="text-body-md text-neutral-700 mb-2">{method.description}</p>
                    <div className="p-3 bg-white rounded border border-green-300">
                      <p className="text-body-sm text-neutral-600"><strong>Example:</strong></p>
                      <p className="text-body-sm text-neutral-800">{method.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What Content Requires Disclosure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                Always Disclose
              </h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                {requiresDisclosure.map((item, idx) => (
                  <li key={idx} className="p-2 bg-green-50 rounded">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                No Disclosure Needed
              </h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                {noDisclosureNeeded.map((item, idx) => (
                  <li key={idx} className="p-2 bg-neutral-50 rounded">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Disclosure Mistakes</h2>
          <div className="space-y-3">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  {mistake.title}
                </h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Problem:</strong> {mistake.problem}</p>
                <p className="text-body-sm text-green-800"><strong>Fix:</strong> {mistake.fix}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">International Disclosure Requirements</h2>
          <div className="space-y-3">
            {internationalRules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{rule.country}</h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Standard:</strong> {rule.standard}</p>
                <p className="text-body-sm text-neutral-600"><strong>Acceptable:</strong> {rule.acceptable}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Consequences of Not Disclosing</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">FTC Enforcement</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Warning letter (first offense)</li>
                <li>• Fines: $43,280 per violation (maximum)</li>
                <li>• Required training on endorsement guidelines</li>
                <li>• Public record of violation</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">TikTok Enforcement</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Content removal</li>
                <li>• Account suspension or ban</li>
                <li>• Loss of Creator Marketplace access</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection pageName="Sponsorship Disclosure" faqs={faqs} />

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Advanced Disclosure Scenarios</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Complex Partnership Situations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Long-Term Brand Ambassadorships</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Situation:</strong> You're a 6-month brand ambassador posting regularly about the brand</p>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Disclosure Required:</strong> Yes, every single video must include disclosure</p>
                  <p className="text-body-sm text-green-700"><strong>Best Practice:</strong> Use TikTok's Branded Content toggle + #brandambassador or #ad in caption</p>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Affiliate Links</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Situation:</strong> You earn commission when viewers purchase through your link</p>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Disclosure Required:</strong> Yes, affiliate relationships must be disclosed</p>
                  <p className="text-body-sm text-green-700"><strong>Best Practice:</strong> Use #affiliate or #ad + mention "I earn commission" verbally</p>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Gifted Products</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Situation:</strong> Brand sent free product with no payment or posting requirement</p>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Disclosure Required:</strong> Yes if product value is significant ($50+)</p>
                  <p className="text-body-sm text-green-700"><strong>Best Practice:</strong> Use #gifted or #ad to be safe</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Employee and Ownership Disclosures</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Promoting Your Own Business</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Situation:</strong> You own the company/product you're promoting</p>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Disclosure Required:</strong> Yes, viewers need to know you have financial interest</p>
                  <p className="text-body-sm text-green-700"><strong>Example:</strong> "I'm the founder of [Company]" or "This is my product"</p>
                </div>
                
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Employee Promoting Employer</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Situation:</strong> You work for the company and create content about it</p>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Disclosure Required:</strong> Yes, material connection exists</p>
                  <p className="text-body-sm text-green-700"><strong>Example:</strong> "I work at [Company]" or "As a [Company] employee..."</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform-Specific Disclosure Tools</h2>
          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok's Branded Content Features</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">How to Enable Branded Content Toggle</h4>
                  <ol className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>1.</strong> Create your video as normal</li>
                    <li><strong>2.</strong> Before posting, tap "More options"</li>
                    <li><strong>3.</strong> Toggle on "Brand content"</li>
                    <li><strong>4.</strong> Search and add the brand's TikTok account</li>
                    <li><strong>5.</strong> Post - viewers will see "Paid partnership with [Brand]" label</li>
                  </ol>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Benefits of Using Official Toggle</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Clear, standardized disclosure format</li>
                    <li>• Brands can track performance through TikTok analytics</li>
                    <li>• Demonstrates professionalism to brands</li>
                    <li>• Reduces risk of FTC violations</li>
                    <li>• Required for TikTok Creator Marketplace deals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Cross-Platform Disclosure Consistency</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                If you post the same sponsored content across multiple platforms, ensure proper disclosure on each:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-body-sm">
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">TikTok:</h4>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Branded Content toggle</li>
                    <li>• #ad in caption</li>
                    <li>• Verbal disclosure</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">Instagram:</h4>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• "Paid partnership" tag</li>
                    <li>• #ad in caption</li>
                    <li>• Story sticker disclosure</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">YouTube:</h4>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Check "Paid promotion" box</li>
                    <li>• Verbal disclosure in video</li>
                    <li>• Written disclosure in description</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Brand Contract Disclosure Clauses</h2>
          <div className="space-y-6">
            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">What to Include in Your Contracts</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Protect yourself legally by including clear disclosure requirements in brand contracts:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Standard Disclosure Clause</h4>
                  <p className="text-body-sm text-neutral-700 italic mb-2">
                    "Creator agrees to clearly and conspicuously disclose the material connection with Brand in accordance with FTC guidelines. Disclosure will include: (1) TikTok's Branded Content toggle, (2) #ad or #sponsored hashtag at beginning of caption, and (3) verbal disclosure in video content."
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Liability Protection Clause</h4>
                  <p className="text-body-sm text-neutral-700 italic mb-2">
                    "Brand acknowledges that Creator will comply with all applicable advertising disclosure laws and regulations. Creator is not liable for FTC violations if Brand requests Creator to hide or minimize disclosures."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Red Flags: When Brands Ask You to Violate Rules</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-red-400">
                  <p className="text-body-sm text-neutral-700"><strong>If a brand says:</strong> "Don't use #ad, just say you love it"</p>
                  <p className="text-body-sm text-red-700"><strong>Your response:</strong> "I'm legally required to disclose. I can use #ad or we can't proceed."</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-red-400">
                  <p className="text-body-sm text-neutral-700"><strong>If a brand says:</strong> "Put disclosure at the end of caption"</p>
                  <p className="text-body-sm text-red-700"><strong>Your response:</strong> "FTC requires disclosure at the beginning where it's immediately visible."</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-red-400">
                  <p className="text-body-sm text-neutral-700"><strong>If a brand says:</strong> "Don't mention it's sponsored"</p>
                  <p className="text-body-sm text-red-700"><strong>Your response:</strong> Walk away. This violates federal law and puts YOU at legal risk.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Disclosure Best Practices by Content Type</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Product Reviews and Unboxings</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-teal-400">
                  <h4 className="font-semibold text-teal-800 mb-1">Sponsored Review</h4>
                  <p className="text-body-sm text-neutral-700">Start video: "Thanks to [Brand] for sponsoring today's review" + #ad in caption + Branded Content toggle</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-1">Gifted Product</h4>
                  <p className="text-body-sm text-neutral-700">Mention: "[Brand] sent me this to try" + #gifted or #ad in caption (safer to use #ad)</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-1">Affiliate Link</h4>
                  <p className="text-body-sm text-neutral-700">Say: "I earn commission if you use my link" + #affiliate or #ad in caption + link in bio</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Tutorial and Educational Content</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-1">Sponsored Tutorial</h4>
                  <p className="text-body-sm text-neutral-700">Disclose upfront: "In partnership with [Brand], here's how to..." + #ad + Branded Content toggle</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-pink-400">
                  <h4 className="font-semibold text-pink-800 mb-1">Product Integration in Tutorial</h4>
                  <p className="text-body-sm text-neutral-700">If brand paid for product placement: "Using [Brand] products (sponsored)" + #ad</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monitoring and Enforcement</h2>
          <div className="space-y-6">
            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">How the FTC Monitors Compliance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Enforcement Methods</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>Consumer Complaints:</strong> FTC investigates reports from viewers</li>
                    <li>• <strong>Automated Monitoring:</strong> AI tools scan for undisclosed sponsorships</li>
                    <li>• <strong>Industry Sweeps:</strong> Periodic reviews of high-profile creators</li>
                    <li>• <strong>Competitor Reports:</strong> Other creators may report violations</li>
                    <li>• <strong>Brand Audits:</strong> Brands may be investigated, leading to creator review</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Recent FTC Actions</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">The FTC has increased enforcement in recent years:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• 2023-2024: Multiple warning letters to influencers</li>
                    <li>• Fines issued to creators with repeated violations</li>
                    <li>• Brands held accountable for influencer non-compliance</li>
                    <li>• Increased focus on TikTok and short-form content</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Self-Audit Checklist</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Review your content monthly to ensure compliance:
              </p>
              
              <div className="space-y-2">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">□ All sponsored content has #ad or #sponsored at beginning of caption</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">□ Branded Content toggle enabled for all paid partnerships</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">□ Verbal disclosures included in videos</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">□ Affiliate relationships clearly stated</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">□ Gifted products marked appropriately</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">□ No ambiguous terms like #collab without additional disclosure</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-get-brand-deals/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                <Users className="w-4 h-4 flex-shrink-0 text-blue-600" />
                How to Get Brand Deals
              </h4>
              <p className="text-body-sm text-neutral-700">Complete guide to TikTok sponsorships</p>
            </Link>
            <Link href="/resources/brand-deal-contract/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                <Shield className="w-4 h-4 flex-shrink-0 text-blue-600" />
                Brand Deal Contract Template
              </h4>
              <p className="text-body-sm text-neutral-700">Free customizable contract with disclosure clause</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}

const disclosureMethods = [
  {
    title: 'TikTok\'s "Branded Content" Toggle',
    description: 'Use TikTok\'s official branded content feature. Before posting, enable "Brand Content" toggle and add brand name.',
    example: 'Viewers see: "Paid partnership with [Brand]" label at top of video',
  },
  {
    title: '#ad or #sponsored in Caption',
    description: 'Include #ad or #sponsored at the BEGINNING of your caption (not buried at end).',
    example: '#ad Loving this new skincare routine from @BrandName! Here\'s why it works…',
  },
  {
    title: 'Verbal Disclosure in Video',
    description: 'Say out loud in the video that content is sponsored.',
    example: '"Thanks to [Brand] for sponsoring today\'s video!" or "This video is in partnership with [Brand]."',
  },
];

const requiresDisclosure = [
  'Paid sponsorships (brand pays you money)',
  'Free products/services worth over ~$50',
  'Affiliate links (you earn commission)',
  'Brand partnerships/ambassadorships',
  'Gifted products you choose to promote',
  'Employee promoting own brand',
];

const noDisclosureNeeded = [
  'Products you purchased yourself',
  'General education (no specific brand)',
  'Unsponsored comparisons',
  'Unsolicited gift under $50 (not promoted)',
];

const commonMistakes = [
  {
    title: 'Disclosure Buried in Caption',
    problem: 'Disclosure too far down; viewers may not see it without clicking "more"',
    fix: 'Put #ad at the very beginning of caption',
  },
  {
    title: 'Using Vague Terms',
    problem: '#partner or #collab could mean unpaid collaboration',
    fix: 'Use #ad or #sponsored explicitly',
  },
  {
    title: 'Not Disclosing Gifted Products',
    problem: 'Thinking free products don\'t require disclosure',
    fix: 'Disclose with #gifted or #ad (safer)',
  },
];

const internationalRules = [
  {
    country: 'United States (FTC)',
    standard: '"Clear and conspicuous" disclosure',
    acceptable: '#ad, #sponsored, "Paid partnership" label, Verbal disclosure',
  },
  {
    country: 'United Kingdom (ASA)',
    standard: '#Ad or "Ad" label required',
    acceptable: '#Ad (capital A), "Ad" written out, TikTok Branded Content toggle',
  },
  {
    country: 'European Union',
    standard: 'Varies by country, disclosure must be clear',
    acceptable: 'Local language (#Werbung in Germany), most use #ad',
  },
];
