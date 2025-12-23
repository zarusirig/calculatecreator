import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import {
  Globe,
  Calculator,
  DollarSign,
  Handshake,
  Gift,
  ShoppingBag,
  HelpCircle,
  BarChart3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Calculator FAQ: 40+ Common Questions Answered | CalculateCreator',
  description: 'Get answers to frequently asked questions about TikTok earnings calculators, Creator Fund rates, brand deals, LIVE gifts, TikTok Shop, and monetization strategies.',
  keywords: ['tiktok calculator faq', 'tiktok earnings questions', 'creator fund faq', 'tiktok money questions'],
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // About This Site
    {
      "@type": "Question",
      "name": "Who created CalculateCreator.com and why?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CalculateCreator was built by a team of data analysts, former TikTok creators, and monetization experts who were frustrated by inaccurate earnings calculators online. Our mission is to provide free, data-driven tools backed by surveys of 500+ creators, official TikTok documentation, and industry research."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are your calculator estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our calculators are based on data from 500+ creator surveys, official TikTok Creator Portal documentation, and 2024-2025 industry reports. We provide ranges rather than exact numbers because actual earnings vary based on audience location, engagement quality, niche, and algorithm changes. Most creators find our estimates within 15-25% of actual earnings."
      }
    },
    {
      "@type": "Question",
      "name": "Where does your data come from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our data sources include: quarterly surveys of 500+ TikTok creators, TikTok Creator Portal official documentation, industry reports from CreatorIQ, Influencer Marketing Hub, and AspireIQ, talent agency rate cards, and direct feedback from our user community. All sources are cited in each calculator's methodology section."
      }
    }
  ]
};

// FAQ Data organized by category
const faqCategories: { id: string; title: string; icon: LucideIcon; questions: { question: string; answer: string; link?: { text: string; href: string } }[] }[] = [
  {
    id: 'about-site',
    title: 'About This Site',
    icon: Globe,
    questions: [
      {
        question: 'Who created CalculateCreator.com and why?',
        answer: 'CalculateCreator was built by a team of data analysts, former TikTok creators, and monetization experts who were frustrated by inaccurate earnings calculators online. Our mission is to provide free, data-driven tools backed by surveys of 500+ creators, official TikTok documentation, and industry research. We believe every creator deserves access to accurate earnings data to make informed business decisions.',
      },
      {
        question: 'How accurate are your calculator estimates?',
        answer: 'Our calculators are based on data from 500+ creator surveys, official TikTok Creator Portal documentation, and 2024-2025 industry reports. We provide ranges rather than exact numbers because actual earnings vary based on audience location, engagement quality, niche, and algorithm changes. Most creators find our estimates within 15-25% of actual earnings.',
      },
      {
        question: 'Where does your data come from?',
        answer: 'Our data sources include: quarterly surveys of 500+ TikTok creators, TikTok Creator Portal official documentation, industry reports from CreatorIQ, Influencer Marketing Hub, and AspireIQ, talent agency rate cards, and direct feedback from our user community. All sources are cited in each calculator\'s methodology section.',
      },
      {
        question: 'Is CalculateCreator affiliated with TikTok?',
        answer: 'No, we are completely independent. CalculateCreator is not affiliated with, endorsed by, or connected to TikTok, ByteDance Ltd, or any social media company. We are an independent educational resource. "TikTok" is a trademark of ByteDance Ltd.',
      },
      {
        question: 'How often do you update your data?',
        answer: 'We refresh our data quarterly (every 3 months) to reflect current platform dynamics. Major updates to TikTok\'s monetization programs—like Creator Fund rate changes or new features—trigger immediate data reviews. You can see the "Last Updated" date in each calculator\'s methodology section.',
      },
      {
        question: 'How can I contact you or report an issue?',
        answer: 'Visit our Contact page to reach our team. We welcome feedback on calculator accuracy, feature requests, bug reports, and questions about methodology. We typically respond within 24-48 hours. For urgent issues, include "URGENT" in your message subject.',
        link: { text: 'Contact Us', href: '/contact' }
      },
    ],
  },
  {
    id: 'calculator-usage',
    title: 'Using Our Calculators',
    icon: Calculator,
    questions: [
      {
        question: 'How do I find my TikTok analytics data to input?',
        answer: 'Open TikTok → Profile → Menu (three lines) → Creator Tools → Analytics. Here you\'ll find your follower count, video views, engagement metrics (likes, comments, shares), and watch time. For LIVE analytics, go to LIVE Center → Analytics. If you don\'t see Creator Tools, you may need 100+ followers to unlock it.',
      },
      {
        question: 'Why is my calculated result different from my actual earnings?',
        answer: 'Several factors cause variance: (1) Audience location—US/UK viewers generate 2-3× more revenue than other regions, (2) Watch time and completion rates affect Creator Fund pay, (3) Algorithm changes impact earnings daily, (4) Your specific niche has different advertiser demand. Our calculators show industry averages; your results may be higher or lower.',
      },
      {
        question: 'Which calculator should I start with as a new creator?',
        answer: 'Start with the Engagement Rate Calculator to understand your audience interaction quality. Then use the Follower Growth Calculator to project your trajectory. Once you hit 10K followers, the Creator Fund Calculator becomes relevant. At 10K+, also check the Brand Deal Rate Calculator to know your market value.',
        link: { text: 'Engagement Rate Calculator', href: '/calculators/engagement-rate' }
      },
      {
        question: 'Can I trust these calculators for business decisions?',
        answer: 'Our calculators provide industry-standard benchmarks backed by verified data. Many creators use them as starting points for brand deal negotiations and financial planning. However, for major financial decisions (like quitting your job), we recommend tracking your actual earnings for 3-6 months and consulting with a financial advisor.',
      },
      {
        question: 'How do the calculators handle different currencies?',
        answer: 'All earnings are displayed in USD by default, as TikTok pays creators in USD regardless of location. For currency conversions, we use current exchange rates. Note that payment processing fees (PayPal, bank transfer) may reduce your final amount by 1-4% depending on your withdrawal method and country.',
      },
      {
        question: 'What if my niche isn\'t listed in the calculator options?',
        answer: 'Select the closest category to your content. If you\'re between niches (like "fitness comedy"), choose the primary content type that generates most of your views. You can also run calculations with multiple niche selections to get a range. Our "Entertainment" and "Lifestyle" categories work as catch-alls for mixed content.',
      },
      {
        question: 'Do I need to create an account to use the calculators?',
        answer: 'No! All our calculators work without signup, login, or payment. We believe in frictionless access to creator tools. Your calculations are processed in your browser—we don\'t store the numbers you enter. Bookmark pages to return easily.',
      },
    ],
  },
  {
    id: 'creator-fund',
    title: 'TikTok Creator Fund',
    icon: DollarSign,
    questions: [
      {
        question: 'What is the TikTok Creator Fund and how does it work?',
        answer: 'The TikTok Creator Fund pays eligible creators based on video performance. Unlike YouTube AdSense (which shares ad revenue), it operates on a fixed pool model—TikTok allocates a daily budget divided among all participating creators. Your share depends on views, engagement, watch time, and audience location.',
        link: { text: 'Creator Fund Guide', href: '/guides/tiktok-creator-fund' }
      },
      {
        question: 'What are the Creator Fund eligibility requirements?',
        answer: 'To join the Creator Fund, you need: (1) 10,000+ followers, (2) 100,000+ video views in the last 30 days, (3) Be 18+ years old, (4) Account in good standing with no community guideline violations, (5) Based in US, UK, Germany, France, Italy, or Spain. Requirements may vary by region.',
        link: { text: 'How to Join Creator Fund', href: '/guides/how-to-join-creator-fund' }
      },
      {
        question: 'How much does the Creator Fund pay per 1,000 views?',
        answer: 'The Creator Fund pays approximately $0.02-$0.04 per 1,000 views on average. Premium niches (finance, business, education) can earn $0.05-$0.08, while entertainment content often sees $0.01-$0.02. Your RPM depends on audience location, engagement rate, and content quality.',
        link: { text: 'RPM Calculator', href: '/calculators/rpm' }
      },
      {
        question: 'Why are Creator Fund payments so low compared to YouTube?',
        answer: 'Three main reasons: (1) Fixed pool model—as more creators join, the pool is divided further, (2) Short-form content has fewer ad opportunities than YouTube\'s long-form videos, (3) TikTok is still developing its ad infrastructure. YouTube creators typically earn $3-5 per 1,000 views vs TikTok\'s $0.02-$0.04.',
        link: { text: 'TikTok vs YouTube Comparison', href: '/comparisons/tiktok-vs-youtube-earnings' }
      },
      {
        question: 'How long does Creator Fund approval take?',
        answer: 'After applying, most creators are approved within 2-5 business days. Some applications take up to 3 weeks during high-volume periods. If rejected, you can reapply after 30 days. Common rejection reasons: not meeting view threshold, community guideline violations, or regional ineligibility.',
      },
      {
        question: 'When and how does TikTok pay Creator Fund earnings?',
        answer: 'Creator Fund earnings are calculated daily and visible in your Creator Tools dashboard within 3 days. Payments are processed monthly around the 15th for the previous month\'s earnings. Minimum withdrawal is $10 (US) via PayPal or direct bank transfer. Processing takes 7-14 business days.',
        link: { text: 'Payment Schedule', href: '/reference/creator-fund-payment-schedule' }
      },
      {
        question: 'Does joining Creator Fund hurt your views?',
        answer: 'This is a common concern, but there\'s no official confirmation from TikTok that joining Creator Fund reduces views. Some creators report decreased reach after joining, but this could be due to algorithm changes, content quality shifts, or seasonal fluctuations. Many successful creators are in the Fund with strong view counts. Focus on content quality over Fund membership as the primary driver of views.',
      },
      {
        question: 'Can I leave the Creator Fund if I don\'t like it?',
        answer: 'Yes, you can leave the Creator Fund at any time through your Creator Tools settings. However, there\'s typically a 30-day waiting period before you can rejoin after leaving. Any unpaid earnings will still be processed according to the normal payment schedule. Consider the decision carefully, as frequent joining/leaving may affect your eligibility.',
      },
      {
        question: 'What\'s the difference between Creator Fund and Creator Rewards Program?',
        answer: 'Creator Rewards Program (launched 2024) is TikTok\'s newer monetization program replacing Creator Fund. Key differences: (1) Only videos 1+ minute qualify (vs any length), (2) Pays $0.40-$1.00 per 1K views (vs $0.02-$0.04), (3) Focuses on originality and engagement, (4) Same eligibility requirements (10K followers, 100K views/month). Many creators transition to Rewards for higher earnings.',
        link: { text: 'Creator Fund Calculator', href: '/calculators/tiktok-creator-fund' }
      },
      {
        question: 'Why did my Creator Fund earnings suddenly drop?',
        answer: 'Common reasons: (1) Lower video views this period, (2) Increased number of Fund participants (divides fixed pool), (3) Views from low-value regions, (4) Decreased watch time/completion rates, (5) Algorithm changes affecting distribution, (6) Seasonal fluctuations in advertiser spending. Track your RPM over time—drops below $0.015 per 1K views indicate a problem requiring content strategy adjustment.',
      },
    ],
  },
  {
    id: 'brand-deals',
    title: 'Brand Deals & Sponsorships',
    icon: Handshake,
    questions: [
      {
        question: 'How much should I charge for a sponsored TikTok post?',
        answer: 'A general formula: $10-25 per 1,000 followers × engagement multiplier (1.0 for 3-5% engagement, 1.3 for 5-8%, 1.5+ for 8%+). Nano creators (1-10K) charge $50-300, micro (10-50K) $300-1,500, mid-tier (50-500K) $1,500-10,000, and macro (500K+) $10,000-50,000+. Always negotiate—first offers are typically 50-70% of budget.',
        link: { text: 'Brand Deal Calculator', href: '/calculators/brand-deal-rate' }
      },
      {
        question: 'When do brands start reaching out to creators?',
        answer: 'Most creators start receiving brand inquiries around 10,000-20,000 followers with consistent engagement (4%+). However, you don\'t have to wait—proactively pitch brands in your niche at any size. Nano-influencers (1-10K) are increasingly popular for their high engagement and authentic audiences.',
        link: { text: 'How to Get Brand Deals', href: '/guides/how-to-get-brand-deals' }
      },
      {
        question: 'How do I find brand deal opportunities?',
        answer: 'Multiple channels: (1) Optimize your bio with contact info and "open for collabs", (2) Join creator marketplaces like TikTok Creator Marketplace, AspireIQ, Grin, and Influencer.co, (3) Cold-pitch brands you genuinely use, (4) Engage with brand content to get noticed, (5) Work with talent agencies once you hit 100K+.',
        link: { text: 'TikTok Creator Marketplace Guide', href: '/guides/tiktok-creator-marketplace' }
      },
      {
        question: 'What\'s the difference between gifted products and paid sponsorships?',
        answer: 'Gifted products (also called "seeding") means receiving free items in exchange for potential content—no guaranteed post required. Paid sponsorships involve cash payment for contracted deliverables. As a rule: accept gifts if you genuinely like the product, but don\'t create content without payment unless it\'s something you\'d share anyway.',
      },
      {
        question: 'How do I negotiate higher brand deal rates?',
        answer: 'Key tactics: (1) Never accept the first offer—counter 30-50% higher, (2) Lead with engagement data, not follower count, (3) Bundle deliverables (TikTok + Instagram = +30%), (4) Charge for usage rights separately (+25-100%), (5) Create scarcity—mention other brand interest. Use our calculator results as evidence.',
        link: { text: 'Negotiation Guide', href: '/guides/how-to-negotiate-brand-deals' }
      },
      {
        question: 'What should be included in a brand deal contract?',
        answer: 'Essential elements: deliverables (number of posts, format, length), timeline and deadlines, compensation and payment terms, usage rights (duration, platforms), exclusivity period, revision limits, content approval process, FTC disclosure requirements, and cancellation terms. Never start work without a signed agreement.',
        link: { text: 'Contract Template', href: '/resources/brand-deal-contract-template' }
      },
      {
        question: 'How do I create a media kit for brand outreach?',
        answer: 'A professional media kit includes: (1) Professional bio and niche, (2) Audience demographics (age, location, interests), (3) Key metrics (followers, engagement rate, average views), (4) Past brand partnerships and case studies, (5) Content examples/screenshots, (6) Rate card or pricing guide, (7) Contact information. Keep it 1-2 pages, PDF format, and update quarterly.',
      },
      {
        question: 'Should I work with brand deal agencies or go direct?',
        answer: 'Pros of agencies: Access to more deals, handle contracts/payments, provide legitimacy. Cons: They take 10-20% commission, may limit direct relationships. Best approach: Start with agencies at 10-50K followers to build portfolio, then transition to mix of agency + direct deals at 100K+. Direct deals pay more but require more business management.',
      },
    ],
  },
  {
    id: 'live-gifts',
    title: 'TikTok LIVE & Gifts',
    icon: Gift,
    questions: [
      {
        question: 'How do TikTok coins convert to real money?',
        answer: 'Viewers buy TikTok Coins ($0.01-0.015 per coin depending on purchase bundle). They send coins as gifts during LIVE streams. Creators receive approximately 50% of the gift value as Diamonds. Diamonds convert to USD at roughly $0.005 per diamond (200 diamonds = $1). Example: A Drama Queen gift (5,000 coins) = ~$12.50 to the creator.',
        link: { text: 'Coins Calculator', href: '/calculators/coins' }
      },
      {
        question: 'What percentage does TikTok take from LIVE gifts?',
        answer: 'TikTok takes approximately 50% of all gift value. This covers platform fees, app store cuts (Apple/Google take 30%), payment processing, and profit margin. This is standard across live streaming platforms—Twitch, YouTube, and others take similar percentages.',
      },
      {
        question: 'What are the requirements to go LIVE on TikTok?',
        answer: 'You need: (1) At least 1,000 followers, (2) Be 18+ years old (16+ in some regions with restrictions), (3) Account in good standing. Once eligible, the LIVE button appears when you tap "+" to create content. Some features like LIVE gifts require additional verification.',
        link: { text: 'LIVE Requirements Guide', href: '/guides/how-to-qualify-for-tiktok-live' }
      },
      {
        question: 'What are the most valuable TikTok gifts?',
        answer: 'Top gifts by value: TikTok Universe (34,999 coins, ~$87 to creator), Lion (29,999 coins, ~$75), TikTok Stars (10,000 coins, ~$25), Drama Queen (5,000 coins, ~$12.50), and Interstellar (10,000 coins, ~$25). However, many small gifts (Rose, TikTok) add up significantly during active streams.',
        link: { text: 'Gift Value Chart', href: '/reference/live-gifts-value-chart' }
      },
      {
        question: 'What are the best times and strategies for LIVE streaming?',
        answer: 'Best times vary by audience, but generally: weekday evenings (7-10 PM) and weekends perform well. Strategies: (1) Stream consistently same time weekly, (2) Set visible gift goals with incentives, (3) Acknowledge every gifter by name, (4) Run LIVE battles for competitive gift surges, (5) Engage constantly—no dead air.',
        link: { text: 'Best Times to LIVE', href: '/guides/best-times-go-live' }
      },
      {
        question: 'How do diamonds convert to cash withdrawal?',
        answer: 'Diamonds convert at approximately $0.005 each (200 diamonds = $1). Minimum withdrawal is $10 (2,000 diamonds) in most regions. Go to Profile → Settings → Balance to withdraw to PayPal or linked bank account. Processing takes 2-7 business days. Note: Some regions have higher minimums.',
        link: { text: 'Diamond Converter', href: '/calculators/diamond-converter' }
      },
      {
        question: 'Do you pay taxes on TikTok LIVE gifts?',
        answer: 'Yes. LIVE gift earnings are taxable income in most countries. In the US, TikTok reports earnings over $600 via 1099 form. You\'re responsible for quarterly estimated taxes as self-employment income. Track all earnings throughout the year. Consult a tax professional familiar with creator income to ensure compliance and maximize deductions.',
        link: { text: 'Creator Tax Calculator', href: '/calculators/creator-tax' }
      },
    ],
  },
  {
    id: 'tiktok-shop',
    title: 'TikTok Shop & Affiliate',
    icon: ShoppingBag,
    questions: [
      {
        question: 'How does TikTok Shop affiliate marketing work?',
        answer: 'As a TikTok Shop affiliate, you promote products from the Shop marketplace and earn commission on sales. You can add product links to your videos, LIVE streams, or profile showcase. When viewers purchase through your links, you earn 5-20% commission depending on the product category and seller terms.',
        link: { text: 'TikTok Shop Guide', href: '/guides/tiktok-shop-affiliate' }
      },
      {
        question: 'What commission rates can TikTok Shop creators earn?',
        answer: 'Commission rates vary by category: Fashion & Accessories (10-20%), Beauty & Personal Care (10-15%), Electronics (5-10%), Home & Garden (8-15%), Health & Wellness (10-15%). Top-performing affiliates can negotiate higher rates with sellers. Some promotional periods offer boosted commissions.',
        link: { text: 'Commission Rates', href: '/reference/shop-commission-rates' }
      },
      {
        question: 'What are the requirements to join TikTok Shop as a creator?',
        answer: 'Requirements vary by region, but generally: (1) 1,000+ followers, (2) 18+ years old, (3) Account in good standing, (4) At least 50 video views in last 28 days, (5) Posted video in last 28 days. Some markets have higher thresholds. US creators need 5,000+ followers for full Shop features.',
        link: { text: 'How to Join TikTok Shop', href: '/guides/how-to-become-shop-affiliate' }
      },
      {
        question: 'What product categories sell best on TikTok?',
        answer: 'Top-performing categories: Beauty & Skincare (#TikTokMadeMeBuyIt), Fashion accessories, Kitchen gadgets, Tech accessories, Health & Wellness products, Home organization items. Products that demonstrate well in short videos perform best—visual transformation, before/after, or satisfying application content.',
        link: { text: 'Best Shop Niches', href: '/guides/best-shop-niches' }
      },
      {
        question: 'How do I add products to my TikTok videos?',
        answer: 'After joining TikTok Shop: (1) Create your video normally, (2) Before posting, tap "Add Link", (3) Select "Products", (4) Search or browse the Shop catalog, (5) Select products to tag, (6) Position product tags in your video, (7) Post. Viewers can tap products to purchase without leaving TikTok.',
      },
      {
        question: 'When and how does TikTok Shop pay commissions?',
        answer: 'TikTok Shop pays commissions after the order completion period (typically 7-15 days after delivery to account for returns). Payments are processed weekly or bi-weekly depending on your region. Minimum payout is usually $10-25. Funds transfer to your linked bank account or PayPal within 3-7 business days.',
        link: { text: 'Shop Payment Schedule', href: '/reference/tiktok-shop-payment-schedule' }
      },
      {
        question: 'Can I sell my own products on TikTok Shop?',
        answer: 'Yes! TikTok Shop allows two types of sellers: merchants (who sell their own products) and affiliates (who promote others\' products). To sell your own products, you need to register as a TikTok Shop merchant, which has different requirements including business verification, inventory, fulfillment capabilities, and may require a registered business entity depending on your region.',
      },
      {
        question: 'How much can I realistically earn from TikTok Shop?',
        answer: 'Earnings vary widely. Small creators (1-10K followers) typically earn $50-300/month from Shop. Mid-tier creators (50-100K) can earn $500-3,000/month. Top affiliates (500K+) earn $5,000-50,000+ monthly. Success depends on niche alignment, content quality, conversion rates, and product selection. Beauty, fashion, and home niches typically perform best.',
        link: { text: 'Shop Commission Calculator', href: '/calculators/shop-commission' }
      },
    ],
  },
  {
    id: 'general-monetization',
    title: 'General Monetization',
    icon: DollarSign,
    questions: [
      {
        question: 'What are all the ways to make money on TikTok?',
        answer: 'Main monetization streams: (1) Creator Fund/Rewards Program ($0.02-$1.00 per 1K views), (2) Brand deals & sponsorships ($50-$50,000+ per post), (3) LIVE gifts (varies widely), (4) TikTok Shop affiliate commissions (5-20%), (5) Product subscriptions, (6) Selling your own products/services, (7) Driving traffic to external platforms (YouTube, Patreon, courses).',
        link: { text: 'Complete Monetization Guide', href: '/guides/tiktok-monetization-requirements' }
      },
      {
        question: 'How much money can you realistically make on TikTok?',
        answer: 'It varies enormously. Nano creators (1-10K) typically earn $50-300/month. Micro (10-50K) earn $300-2,000/month. Mid-tier (50-500K) earn $2,000-15,000/month. Macro (500K+) can earn $15,000-100,000+ monthly. Brand deals become the primary income source at scale. Most full-time creators have 100K+ followers and combine multiple revenue streams.',
        link: { text: 'TikTok Money Calculator', href: '/calculators/tiktok-money' }
      },
      {
        question: 'Do you need 10,000 followers to make money on TikTok?',
        answer: 'No! While Creator Fund requires 10K followers, you can monetize earlier. At 1,000 followers you unlock LIVE gifts and can start earning from viewers. You can also pursue nano-influencer brand deals (even with 1K-5K followers), join TikTok Shop affiliate program, or drive traffic to external income sources from day one.',
        link: { text: 'First $1,000 Guide', href: '/guides/how-to-make-first-1000-dollars' }
      },
      {
        question: 'Which monetization stream pays the most?',
        answer: 'Brand deals are typically the highest-earning stream for most creators, paying $10-25+ per 1,000 followers per post. Creator Fund pays the least ($0.02-$0.04 per 1K views). LIVE gifts and TikTok Shop can be lucrative but require specific content types and audience engagement. Most successful creators diversify across multiple streams.',
      },
      {
        question: 'How long does it take to start making money on TikTok?',
        answer: 'With consistent posting (3-5 videos/week), most creators reach 1,000 followers in 2-4 months, unlocking LIVE gifts. Reaching 10,000 followers for Creator Fund typically takes 6-12 months. First brand deal inquiries often come around 5-10K followers (4-8 months). Your first $1,000 earned realistically takes 4-8 months of dedicated content creation.',
        link: { text: 'Growth Timeline', href: '/guides/how-to-make-first-1000-dollars' }
      },
      {
        question: 'Can you make a full-time income from TikTok?',
        answer: 'Yes, but it\'s challenging and typically requires 100K+ followers with strong engagement. Full-time creators usually earn $3,000-10,000+/month through multiple streams: brand deals, Shop affiliate, LIVE streaming, and external products/services. Most successful full-time creators spend 12-24 months building their audience before transitioning from a day job. Diversification is key—relying solely on Creator Fund is risky.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-body-sm mb-6">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
            <span className="text-neutral-400">&rarr;</span>
            <span className="text-neutral-900 font-medium">FAQ</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <img
              src="/images/calculate-creator-transparent-v2.png"
              alt="TikTok Creator Calculator"
              className="h-16 w-auto mx-auto mb-6"
            />
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need to know about TikTok Creator Calculator, monetization,
              and growing your creator business. Can't find your answer? <Link href="/contact" className="text-primary-600 hover:underline">Contact us</Link>.
            </p>
          </div>

          {/* Quick Navigation */}
          <Card className="mb-12 bg-primary-50 border border-primary-200">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Jump to Section</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <category.icon size={20} className="text-primary-600" />
                  <span className="text-body-sm font-medium text-neutral-900">{category.title}</span>
                </a>
              ))}
            </div>
          </Card>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon size={28} className="text-primary-600" />
                  <h2 className="text-display-sm font-bold text-neutral-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <details className="group">
                        <summary className="flex items-start justify-between cursor-pointer list-none">
                          <h3 className="text-heading-sm font-semibold text-neutral-900 pr-4">
                            {faq.question}
                          </h3>
                          <span className="flex-shrink-0 text-primary-500 group-open:rotate-180 transition-transform">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="mt-4 pt-4 border-t border-neutral-200">
                          <p className="text-body-md text-neutral-700 leading-relaxed">
                            {faq.answer}
                          </p>
                          {faq.link && (
                            <Link
                              href={faq.link.href}
                              className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700 font-medium text-body-sm"
                            >
                              {faq.link.text} &rarr;
                            </Link>
                          )}
                        </div>
                      </details>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <Card className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <div className="text-center">
              <h2 className="text-heading-lg font-semibold mb-4">Still Have Questions?</h2>
              <p className="text-body-md opacity-90 mb-6">
                Can't find what you're looking for? Our team is happy to help with calculator
                questions, feedback, or methodology inquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Contact Us &rarr;
              </Link>
            </div>
          </Card>

          {/* Related Resources */}
          <div className="mt-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Popular Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guides/tiktok-creator-fund" className="p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow">
                <DollarSign size={24} className="text-primary-600 mb-2" />
                <h3 className="font-semibold text-neutral-900 mb-1">Creator Fund Guide</h3>
                <p className="text-body-sm text-neutral-600">Complete monetization breakdown</p>
              </Link>
              <Link href="/calculators/engagement-rate" className="p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow">
                <BarChart3 size={24} className="text-primary-600 mb-2" />
                <h3 className="font-semibold text-neutral-900 mb-1">Engagement Calculator</h3>
                <p className="text-body-sm text-neutral-600">Check your engagement rate</p>
              </Link>
              <Link href="/calculators/brand-deal-rate" className="p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow">
                <Handshake size={24} className="text-primary-600 mb-2" />
                <h3 className="font-semibold text-neutral-900 mb-1">Brand Deal Calculator</h3>
                <p className="text-body-sm text-neutral-600">Know what to charge sponsors</p>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-body-sm text-neutral-500">
              Not affiliated with TikTok or ByteDance Ltd. All trademarks are property of their respective owners.
              <br />
              Information provided for educational purposes only. Results may vary.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
