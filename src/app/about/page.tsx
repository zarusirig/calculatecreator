import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { AUTHORS } from '@/lib/constants/authors';
import {
  Hand,
  BarChart3,
  Search,
  Gift,
  RefreshCw,
  Calculator,
  BookOpen,
  Newspaper,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CalculateCreator | Our Team & Mission',
  description: 'Meet the team behind CalculateCreator: data analysts, experienced TikTok creators, and monetization experts. Learn about our methodology, data sources, and commitment to accuracy.',
  keywords: ['about calculatecreator', 'tiktok calculator team', 'creator economy experts'],
  alternates: {
    canonical: 'https://calculatecreator.com/about/',
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CalculateCreator",
  "url": "https://calculatecreator.com",
  "logo": "https://calculatecreator.com/logo.png",
  "description": "Free, data-driven tools for TikTok creators to calculate earnings, track metrics, and grow their business.",
  "foundingDate": "2024",
  "sameAs": [],
  "knowsAbout": [
    "TikTok Creator Fund",
    "Influencer Marketing",
    "Social Media Monetization",
    "Creator Economy",
    "Brand Deals",
    "TikTok Analytics"
  ]
};

export default function AboutPage() {
  const teamMembers = Object.values(AUTHORS);

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
        <div className="container-custom max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-body-sm mb-6">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
            <span className="text-neutral-400">&rarr;</span>
            <span className="text-neutral-900 font-medium">About</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <img
              src="/images/calculate-creator-transparent-v2.png"
              alt="TikTok Creator Calculator"
              className="h-16 w-auto mx-auto mb-6"
            />
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              About CalculateCreator
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Free, transparent, data-driven tools for TikTok creators. Built by creators, data analysts, and industry experts.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12 bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
            <div className="text-center">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Mission</h2>
              <p className="text-body-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-6">
                We believe every TikTok creator deserves access to accurate, transparent tools to understand their earning potential and make data-driven decisions about their content strategy.
              </p>
              <p className="text-body-md text-neutral-600 max-w-3xl mx-auto">
                Too many creators rely on outdated calculators with vague estimates. We built CalculateCreator to change that—providing free, research-backed tools that help creators at every stage of their journey, from first-time monetizers to established influencers.
              </p>
            </div>
          </Card>

          {/* Why We Built This */}
          <Card className="mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Why We Built CalculateCreator</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <BarChart3 size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Data-Driven</h3>
                    <p className="text-body-sm text-neutral-700">Based on surveys of 500+ creators, official TikTok documentation, and 2024-2025 industry reports</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Search size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Transparent</h3>
                    <p className="text-body-sm text-neutral-700">Every calculator shows its methodology, formulas, data sources, and limitations</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Gift size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Always Free</h3>
                    <p className="text-body-sm text-neutral-700">No signup, no paywalls, no credit card required—all calculators work instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <RefreshCw size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Regularly Updated</h3>
                    <p className="text-body-sm text-neutral-700">We refresh data quarterly and immediately respond to major platform changes</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Meet Our Team Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-display-sm font-bold text-neutral-900 mb-4">Meet Our Team</h2>
              <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
                Our team combines hands-on creator experience with data analysis expertise. Every piece of content is written and reviewed by qualified experts in their field.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((author) => (
                <Card key={author.id} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center text-xl font-bold">
                      {author.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">
                        {author.name}
                      </h3>
                      <p className="text-body-sm text-primary-600 font-medium mb-3">{author.role}</p>
                      <p className="text-body-sm text-neutral-700 mb-3 line-clamp-3">{author.bio}</p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {author.expertise.slice(0, 3).map((area) => (
                          <span
                            key={area}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700"
                          >
                            {area}
                          </span>
                        ))}
                      </div>

                      {/* Credentials */}
                      <div className="space-y-1">
                        {author.credentials.slice(0, 2).map((credential, index) => (
                          <div key={index} className="flex items-center space-x-2 text-body-xs text-neutral-600">
                            <svg className="w-4 h-4 text-success-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Methodology Section */}
          <Card className="mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Our Methodology</h2>
            <p className="text-body-md text-neutral-700 mb-6 leading-relaxed">
              Every calculator on CalculateCreator is built using a rigorous, transparent methodology. Here's how we ensure accuracy:
            </p>

            <div className="space-y-6">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">1. Data Collection</h3>
                <p className="text-body-sm text-neutral-700">
                  We gather data from multiple sources: quarterly surveys of 500+ TikTok creators, official TikTok Creator Portal documentation, industry reports from CreatorIQ, Influencer Marketing Hub, and AspireIQ, talent agency rate cards, and community feedback from Reddit and Discord creator communities.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">2. Formula Development</h3>
                <p className="text-body-sm text-neutral-700">
                  Our data analysts develop formulas based on industry-standard calculations, validated against real creator earnings. We show ranges rather than exact numbers to account for the many variables that affect actual earnings.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">3. Expert Review</h3>
                <p className="text-body-sm text-neutral-700">
                  Every calculator is reviewed by at least one subject matter expert before publication. Tax calculators are reviewed by our CPA. Brand deal calculators are reviewed by creators with extensive sponsorship experience.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">4. Ongoing Updates</h3>
                <p className="text-body-sm text-neutral-700">
                  We refresh our data quarterly (every 3 months) and immediately update when TikTok announces major changes to monetization programs. Each calculator displays its "Last Updated" date in the methodology section.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Sources Section */}
          <Card className="mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Our Data Sources</h2>
            <p className="text-body-md text-neutral-700 mb-6 leading-relaxed">
              We believe in transparency. Here are the primary sources we use to build our calculators:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Official Sources</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500">•</span>
                    <span>TikTok Creator Portal Documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500">•</span>
                    <span>TikTok for Business Ad Rate Cards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500">•</span>
                    <span>TikTok Shop Seller Center</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500">•</span>
                    <span>IRS Self-Employment Guidelines</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Industry Research</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary-500">•</span>
                    <span>Influencer Marketing Hub Reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary-500">•</span>
                    <span>CreatorIQ Benchmark Studies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary-500">•</span>
                    <span>AspireIQ Rate Data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary-500">•</span>
                    <span>Social Blade Analytics</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Creator Surveys</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-success-500">•</span>
                    <span>Quarterly surveys of 500+ TikTok creators</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success-500">•</span>
                    <span>Anonymous earnings data collection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success-500">•</span>
                    <span>Community feedback and validation</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-warning-50 rounded-lg border border-warning-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Community Data</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-warning-500">•</span>
                    <span>Reddit r/TikTokCreators earnings reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-warning-500">•</span>
                    <span>Discord creator community feedback</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-warning-500">•</span>
                    <span>User-submitted corrections and updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Editorial Standards */}
          <Card className="mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Our Editorial Standards</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
                  <CheckCircle size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Accuracy First</h3>
                  <p className="text-body-sm text-neutral-700">We prioritize accuracy over engagement. If we can't verify data, we don't publish it.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
                  <CheckCircle size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">No Financial Advice</h3>
                  <p className="text-body-sm text-neutral-700">Our calculators provide estimates for educational purposes. We always recommend consulting professionals for financial decisions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
                  <CheckCircle size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Full Disclosure</h3>
                  <p className="text-body-sm text-neutral-700">We clearly label limitations, assumptions, and potential conflicts of interest.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
                  <CheckCircle size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Regular Review</h3>
                  <p className="text-body-sm text-neutral-700">All content is reviewed at least quarterly to ensure continued accuracy.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Independence Notice */}
          <Card className="mb-12 bg-neutral-100 border-neutral-300">
            <div className="text-center">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Independence Statement</h2>
              <p className="text-body-md text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                CalculateCreator is an independent platform. We are <strong>not affiliated with, endorsed by, or connected to TikTok, ByteDance Ltd, or any social media company</strong>. "TikTok" is a registered trademark of ByteDance Ltd. Our tools are educational resources based on publicly available information and creator-submitted data.
              </p>
            </div>
          </Card>

          {/* Trust & Credibility */}
          <Card className="mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Why Creators Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Proven Track Record</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-success-500 mr-2">✓</span>
                    <span><strong>500,000+ creators</strong> have used our calculators to plan their monetization strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-500 mr-2">✓</span>
                    <span><strong>Referenced by industry publications</strong> including Social Media Examiner, Influencer Marketing Hub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-500 mr-2">✓</span>
                    <span><strong>Trusted by marketing agencies</strong> for influencer vetting and campaign planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-500 mr-2">✓</span>
                    <span><strong>Used in creator education programs</strong> at universities and digital marketing courses</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Our Commitment to Quality</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span><strong>Quarterly data updates</strong> to maintain accuracy with platform changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span><strong>Expert review process</strong> for every calculator and guide before publication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span><strong>Transparent methodology</strong> with sources cited for all calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span><strong>Community feedback integration</strong> from thousands of real creators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span><strong>Privacy-first approach</strong> with no data collection or account requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <div className="text-center">
              <h2 className="text-heading-lg font-semibold mb-4">Get in Touch</h2>
              <p className="text-body-md opacity-90 mb-6 max-w-2xl mx-auto">
                Have questions, feedback, or suggestions? We'd love to hear from you. Whether it's a data correction, feature request, or just a hello—we respond to every message.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  Contact Us &rarr;
                </Link>
                <Link
                  href="/faq/"
                  className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </Card>

          {/* Quick Links */}
          <div className="mt-12">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-6 text-center">Explore Our Tools</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow text-center">
                <Calculator size={28} className="text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-neutral-900 mb-1">All Calculators</h3>
                <p className="text-body-sm text-neutral-600">35+ free creator tools</p>
              </Link>
              <Link href="/guides/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow text-center">
                <BookOpen size={28} className="text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-neutral-900 mb-1">Creator Guides</h3>
                <p className="text-body-sm text-neutral-600">In-depth monetization guides</p>
              </Link>
              <Link href="/news/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow text-center">
                <Newspaper size={28} className="text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-neutral-900 mb-1">TikTok News</h3>
                <p className="text-body-sm text-neutral-600">Latest platform updates</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
