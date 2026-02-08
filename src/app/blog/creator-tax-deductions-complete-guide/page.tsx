import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { BlogPostSchema } from '@/components/seo/BlogPostSchema';

export const metadata: Metadata = {
  title: 'Creator Tax Deductions: Complete Guide for Content Creators 2026',
  description: 'Discover every tax deduction available to content creators in 2026. From equipment and home office to travel and professional services, maximize your tax savings.',
  keywords: ['creator tax deductions', 'content creator taxes', 'influencer tax write offs', 'home office deduction creators', 'self employment tax creators', 'tiktok creator taxes 2026'],
  alternates: {
    canonical: 'https://calculatecreator.com/blog/creator-tax-deductions-complete-guide/',
  },
};

export default function CreatorTaxDeductionsGuidePage() {
  const faqs = [
    {
      question: 'Do I need to pay taxes on TikTok Creator Fund earnings?',
      answer: 'Yes, all Creator Fund, brand deal, LIVE gift, and TikTok Shop earnings are considered taxable income by the IRS. If you earn more than $400 from self-employment in a year, you must file a tax return and pay self-employment tax (15.3%) in addition to income tax. TikTok will issue a 1099 form if you earn over $600.',
    },
    {
      question: 'Can I deduct my phone as a business expense?',
      answer: 'Yes, but only the business-use portion. If you use your phone 70% for content creation (filming, editing, social media management, communication with brands) and 30% for personal use, you can deduct 70% of the phone purchase price and monthly service costs. Keep a log documenting your business usage.',
    },
    {
      question: 'Should content creators form an LLC for tax purposes?',
      answer: 'Forming an LLC can provide liability protection and tax flexibility. As a single-member LLC, you can elect S-corp taxation once your net profit exceeds roughly $40,000-$50,000 per year, which can save you thousands in self-employment taxes. Consult a tax professional for your specific situation.',
    },
    {
      question: 'What records do I need to keep for tax deductions?',
      answer: 'Keep receipts for all business expenses, bank and credit card statements, mileage logs for business travel, a home office measurement log, contracts from brand deals, 1099 forms from platforms, and invoices for any services you hire. Digital records are acceptable. Keep everything for at least 3 years, or 7 years to be safe.',
    },
    {
      question: 'Can I deduct clothing and beauty products?',
      answer: 'Clothing is generally not deductible unless it is a costume or uniform that you wouldn\u0027t wear outside of content creation. Beauty products and cosmetics used specifically and exclusively for on-camera content may be partially deductible. If a product is used both personally and for content, only the business-use portion qualifies.',
    },
  ];

  return (
    <>
      <BlogPostSchema
        title="Creator Tax Deductions: Complete Guide for Content Creators 2026"
        description="Discover every tax deduction available to content creators in 2026. From equipment and home office to travel and professional services, maximize your tax savings."
        url="https://calculatecreator.com/blog/creator-tax-deductions-complete-guide/"
        datePublished="2026-02-05"
        dateModified="2026-02-08"
        faqs={faqs}
        readTime="12 min"
      />
      <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-neutral-900 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-neutral-900">Creator Tax Deductions Guide</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-lime-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Creator Tax Deductions: Complete Guide for Content Creators 2026
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Every deduction, write-off, and tax strategy that content creators should know to keep more of their hard-earned income
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>Published: February 5, 2026</span>
            <span>|</span>
            <span>12 min read</span>
            <span>|</span>
            <span>Tax &amp; Finance Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <p className="text-body-lg text-neutral-700 mb-4">
            As a content creator, you&apos;re running a business, and that means you&apos;re entitled to deduct legitimate business expenses from your taxable income. Many creators leave thousands of dollars on the table every year simply because they don&apos;t know what qualifies as a deduction. In 2026, with the creator economy generating over $250 billion globally, the IRS is paying closer attention to creator income, making proper record-keeping and strategic deductions more important than ever.
          </p>
          <p className="text-body-md text-neutral-700">
            This guide covers every major tax deduction category for content creators, explains self-employment tax obligations, and provides practical record-keeping tips so you can minimize your tax burden legally and confidently.
          </p>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-body-sm text-amber-800">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute tax advice. Tax laws vary by location and individual circumstances. Always consult a qualified tax professional or CPA for personalized guidance.
            </p>
          </div>
        </Card>

        {/* Understanding Self-Employment Tax */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Understanding Creator Tax Obligations</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Most content creators are classified as self-employed sole proprietors. This means you&apos;re responsible for paying both income tax and self-employment tax on your creator earnings. Unlike traditional employees whose employers pay half of Social Security and Medicare taxes, self-employed individuals pay the full amount.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Tax Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Rate</th>
                  <th className="text-left py-3 px-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Self-Employment Tax</td>
                  <td className="py-3 px-4">15.3%</td>
                  <td className="py-3 px-4">12.4% Social Security + 2.9% Medicare on net earnings</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Federal Income Tax</td>
                  <td className="py-3 px-4">10-37%</td>
                  <td className="py-3 px-4">Progressive brackets based on total taxable income</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">State Income Tax</td>
                  <td className="py-3 px-4">0-13.3%</td>
                  <td className="py-3 px-4">Varies by state (some states have no income tax)</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Quarterly Estimated Payments</td>
                  <td className="py-3 px-4">Due 4x/year</td>
                  <td className="py-3 px-4">Required if you owe $1,000+ in taxes; avoid underpayment penalties</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-body-md text-neutral-700">
            The good news: every legitimate business deduction reduces both your income tax <em>and</em> your self-employment tax. A $1,000 deduction could save you $300-$500 depending on your tax bracket. Use our <Link href="/calculators/utility-tools/tax/" className="text-blue-600 underline font-medium">Creator Tax Calculator</Link> to estimate your tax obligations.
          </p>
        </Card>

        {/* Equipment & Technology */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">1. Equipment &amp; Technology Deductions</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Equipment is typically the largest deduction category for content creators. Under Section 179, you can deduct the full cost of qualifying equipment in the year you purchase it rather than depreciating it over several years.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Equipment Category</th>
                  <th className="text-left py-3 px-4 font-semibold">Common Items</th>
                  <th className="text-left py-3 px-4 font-semibold">Typical Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Camera &amp; Video</td>
                  <td className="py-3 px-4">Cameras, lenses, gimbals, tripods, drones</td>
                  <td className="py-3 px-4">$200 - $5,000+</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Lighting</td>
                  <td className="py-3 px-4">Ring lights, softboxes, LED panels, light stands</td>
                  <td className="py-3 px-4">$30 - $1,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Audio</td>
                  <td className="py-3 px-4">Microphones, audio interfaces, headphones</td>
                  <td className="py-3 px-4">$50 - $2,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Computer &amp; Storage</td>
                  <td className="py-3 px-4">Laptops, desktops, external drives, monitors</td>
                  <td className="py-3 px-4">$500 - $4,000+</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Mobile Devices</td>
                  <td className="py-3 px-4">Smartphones, tablets (business-use portion only)</td>
                  <td className="py-3 px-4">$300 - $1,500</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Backdrops &amp; Props</td>
                  <td className="py-3 px-4">Green screens, backgrounds, set decorations</td>
                  <td className="py-3 px-4">$20 - $500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-body-sm text-neutral-600">
            <strong>Tip:</strong> Keep all receipts and note the business purpose of each purchase. If an item is used for both personal and business purposes (like a smartphone), only the business-use percentage is deductible.
          </p>
        </Card>

        {/* Software & Subscriptions */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">2. Software &amp; Subscription Deductions</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Monthly and annual software subscriptions add up quickly. All business-related software is fully deductible. Common creator subscriptions include:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-body-sm text-neutral-700">
              <li><strong>Video editing:</strong> Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve Studio, CapCut Pro</li>
              <li><strong>Photo editing:</strong> Adobe Photoshop, Lightroom, Canva Pro</li>
              <li><strong>Music licensing:</strong> Epidemic Sound, Artlist, Musicbed</li>
              <li><strong>Cloud storage:</strong> Google One, iCloud+, Dropbox Business</li>
            </ul>
            <ul className="space-y-2 text-body-sm text-neutral-700">
              <li><strong>Social media tools:</strong> Later, Buffer, Hootsuite, TubeBuddy</li>
              <li><strong>Analytics tools:</strong> Social Blade Pro, Creator Studio subscriptions</li>
              <li><strong>Website hosting:</strong> Domain registration, hosting, email services</li>
              <li><strong>AI tools:</strong> ChatGPT Plus, Midjourney, AI video generators for content</li>
            </ul>
          </div>
        </Card>

        {/* Home Office Deduction */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">3. Home Office Deduction</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            If you use a dedicated space in your home regularly and exclusively for content creation, you qualify for the home office deduction. There are two calculation methods:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Simplified Method</h3>
              <p className="text-body-sm text-neutral-700 mb-2">$5 per square foot of dedicated office space, up to 300 sq ft maximum.</p>
              <p className="text-heading-md font-bold text-green-600 mb-2">Max deduction: $1,500/year</p>
              <p className="text-body-xs text-neutral-500">Easy to calculate, no detailed records needed for home expenses</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Regular Method</h3>
              <p className="text-body-sm text-neutral-700 mb-2">Calculate the percentage of your home used for business, then apply that percentage to actual expenses.</p>
              <p className="text-heading-md font-bold text-green-600 mb-2">Often $2,000-$6,000+/year</p>
              <p className="text-body-xs text-neutral-500">Includes rent/mortgage interest, utilities, insurance, repairs, depreciation</p>
            </div>
          </div>

          <p className="text-body-md text-neutral-700">
            <strong>Example:</strong> Your studio room is 200 sq ft in a 1,600 sq ft apartment (12.5%). Your annual rent is $24,000, utilities are $3,600, and renter&apos;s insurance is $300. Regular method deduction: 12.5% x $27,900 = $3,487.50. That&apos;s significantly more than the $1,000 simplified method ($5 x 200 sq ft).
          </p>
        </Card>

        {/* Travel & Transportation */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">4. Travel &amp; Transportation Deductions</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Travel expenses incurred for content creation, brand collaborations, creator events, and industry conferences are deductible. This includes:
          </p>
          <ul className="list-disc list-inside text-body-md text-neutral-700 mb-4 space-y-2">
            <li><strong>Transportation:</strong> Flights, trains, rideshares, rental cars for content-related travel</li>
            <li><strong>Lodging:</strong> Hotels and accommodations during business trips</li>
            <li><strong>Meals:</strong> 50% of meal costs during business travel (100% for 2026 if business-related at a restaurant)</li>
            <li><strong>Vehicle mileage:</strong> 67 cents per mile for business driving in 2026 (IRS standard rate)</li>
            <li><strong>Creator conferences:</strong> VidCon, TikTok creator summits, industry events (registration, travel, lodging)</li>
            <li><strong>Location shoots:</strong> Parking, tolls, and transportation to filming locations</li>
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h4 className="text-heading-sm font-semibold text-emerald-900 mb-2">Production Cost Calculator</h4>
            <p className="text-body-sm text-emerald-800">
              Track your production and travel expenses with our <Link href="/calculators/production-cost/" className="underline font-medium">Production Cost Calculator</Link> to understand the true cost of your content and ensure you&apos;re capturing every deduction.
            </p>
          </div>
        </Card>

        {/* Professional Services */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">5. Professional Services &amp; Education</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            The costs of professional services and business education that help you grow your creator business are deductible. These often-overlooked deductions can add up to significant savings:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Professional Services</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li><strong>Accountant / CPA:</strong> Tax preparation and bookkeeping fees</li>
                <li><strong>Attorney:</strong> Contract review, LLC formation, trademark filing</li>
                <li><strong>Talent manager:</strong> Management commissions (typically 15-20%)</li>
                <li><strong>Video editor:</strong> Freelance editing, thumbnail design</li>
                <li><strong>Virtual assistant:</strong> Admin, scheduling, email management</li>
                <li><strong>Photographer:</strong> Professional headshots, branding photos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Education &amp; Training</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li><strong>Online courses:</strong> Video production, marketing, SEO courses</li>
                <li><strong>Coaching:</strong> Creator coaching, business mentorship programs</li>
                <li><strong>Books &amp; resources:</strong> Business, marketing, and industry publications</li>
                <li><strong>Workshops:</strong> In-person or virtual skill-building workshops</li>
                <li><strong>Certifications:</strong> Relevant professional certifications</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Record Keeping Best Practices */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">6. Record-Keeping Best Practices</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Strong record-keeping is the foundation of maximizing your deductions and protecting yourself in case of an audit. Here&apos;s a system that works for content creators:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-emerald-900 mb-2">Separate Business &amp; Personal Finances</h3>
              <p className="text-body-sm text-neutral-800">
                Open a dedicated business bank account and credit card. Run all creator expenses through these accounts. This creates a clean paper trail and makes tax preparation dramatically easier. Most banks offer free business checking for sole proprietors.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">Use Accounting Software</h3>
              <p className="text-body-sm text-neutral-800">
                Tools like QuickBooks Self-Employed, Wave (free), or FreshBooks automatically categorize expenses and generate reports. Connect your business bank account for automated tracking. The subscription cost itself is tax-deductible.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">Save Quarterly for Taxes</h3>
              <p className="text-body-sm text-neutral-800">
                Set aside 25-30% of every payment you receive into a separate savings account for taxes. Pay quarterly estimated taxes (due April 15, June 15, September 15, and January 15) to avoid underpayment penalties. Use our <Link href="/calculators/utility-tools/tax/" className="underline font-medium">Tax Calculator</Link> to estimate your quarterly payments.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">Document Everything</h3>
              <p className="text-body-sm text-neutral-800">
                For each business expense, save the receipt and note the business purpose. Take photos of paper receipts immediately (they fade). Keep records for at least 3 years from the filing date, though 7 years is recommended. Digital backups in cloud storage provide extra protection.
              </p>
            </div>
          </div>
        </Card>

        {/* Deduction Summary Table */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Complete Deduction Checklist for Creators</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Use this checklist during tax preparation to ensure you&apos;re not missing any deductions. Every dollar you deduct reduces your taxable income.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-left py-3 px-4 font-semibold">Example Deductions</th>
                  <th className="text-left py-3 px-4 font-semibold">Avg. Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Equipment</td>
                  <td className="py-3 px-4">Camera, lights, microphone, computer</td>
                  <td className="py-3 px-4">$1,000 - $5,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Software</td>
                  <td className="py-3 px-4">Editing apps, analytics, cloud storage</td>
                  <td className="py-3 px-4">$500 - $2,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Home Office</td>
                  <td className="py-3 px-4">Dedicated studio/office space</td>
                  <td className="py-3 px-4">$1,500 - $6,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Travel</td>
                  <td className="py-3 px-4">Conferences, shoots, brand meetings</td>
                  <td className="py-3 px-4">$500 - $5,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Professional Services</td>
                  <td className="py-3 px-4">CPA, lawyer, editors, assistants</td>
                  <td className="py-3 px-4">$500 - $10,000+</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Internet &amp; Phone</td>
                  <td className="py-3 px-4">Business-use portion of service plans</td>
                  <td className="py-3 px-4">$600 - $1,500</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Education</td>
                  <td className="py-3 px-4">Courses, books, workshops, coaching</td>
                  <td className="py-3 px-4">$200 - $3,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Self-Employment Tax Deduction</td>
                  <td className="py-3 px-4">50% of SE tax is deductible from income</td>
                  <td className="py-3 px-4">Varies by income</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="Creator Tax Deductions Guide" />

        {/* Related Content */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/calculators/utility-tools/tax/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Creator Tax Calculator</h4>
              <p className="text-body-sm text-neutral-600">Estimate your tax obligations</p>
            </Link>
            <Link href="/calculators/production-cost/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Production Cost Calculator</h4>
              <p className="text-body-sm text-neutral-600">Track content creation expenses</p>
            </Link>
            <Link href="/blog/building-multiple-income-streams-tiktok/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Multiple Income Streams Guide</h4>
              <p className="text-body-sm text-neutral-600">Diversify and grow your creator income</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">How to Make Money on TikTok</h4>
              <p className="text-body-sm text-neutral-600">Complete monetization guide</p>
            </Link>
            <Link href="/blog/tiktok-vs-youtube-shorts-earnings-2026/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">TikTok vs YouTube Shorts</h4>
              <p className="text-body-sm text-neutral-600">Platform earnings comparison 2026</p>
            </Link>
            <Link href="/blog/tiktok-algorithm-changes-2026/" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">TikTok Algorithm Changes 2026</h4>
              <p className="text-body-sm text-neutral-600">Latest algorithm updates for creators</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}
