interface FAQ {
  question: string;
  answer: string;
}

interface CollectionItem {
  name: string;
  description: string;
  url: string;
  category?: string;
}

interface HubPageSchemaConfig {
  title: string;
  description: string;
  url: string;
  collectionType: 'Calculators' | 'Guides' | 'News' | 'Reference' | 'Niches' | 'Comparisons' | 'Metrics' | 'Blog';
  items?: CollectionItem[];
  faqs: FAQ[];
  datePublished?: string;
  dateModified?: string;
}

export function generateHubPageSchemas(config: HubPageSchemaConfig) {
  const {
    title,
    description,
    url,
    collectionType,
    items = [],
    faqs,
    datePublished = '2025-01-01',
    dateModified = '2026-02-01',
  } = config;

  // Schema 1: CollectionPage
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://calculatecreator.com/#website',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
    },
    about: {
      '@type': 'Thing',
      name: `TikTok Creator ${collectionType}`,
      description: `Collection of ${collectionType.toLowerCase()} for TikTok creators.`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/logo.png',
      },
    },
    datePublished,
    dateModified,
  };

  // Schema 2: ItemList (only if items provided)
  const itemListSchema = items.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    name: title,
    description: description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': collectionType === 'Calculators' ? 'SoftwareApplication' : 'Article',
        name: item.name,
        description: item.description,
        url: item.url,
        ...(collectionType === 'Calculators' && {
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }),
        ...(item.category && {
          articleSection: item.category,
        }),
      },
    })),
  } : null;

  // Schema 3: BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://calculatecreator.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title.split(':')[0].trim(),
        item: url,
      },
    ],
  };

  // Schema 4: FAQPage
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Schema 5: WebPage
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://calculatecreator.com/#website',
    },
    about: {
      '@type': 'Thing',
      name: `TikTok ${collectionType}`,
    },
    datePublished,
    dateModified,
    inLanguage: 'en-US',
  };

  return {
    collectionPageSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    webPageSchema,
  };
}

// Hub page configurations
export const hubPageConfigs: Record<string, Omit<HubPageSchemaConfig, 'items'>> = {
  calculators: {
    title: 'TikTok Calculators: 28 Free Tools',
    description: 'Complete suite of TikTok calculators for earnings, engagement, growth, ROI & taxes. Free, data-driven tools used by 50,000+ creators.',
    url: 'https://calculatecreator.com/calculators/',
    collectionType: 'Calculators',
    faqs: [
      {
        question: 'How accurate are these TikTok calculators?',
        answer: 'Our calculators use verified data from thousands of TikTok accounts and official platform documentation. Earnings estimates are typically within 15-20% of actual results. For best accuracy, ensure you enter current metrics from your TikTok analytics.',
      },
      {
        question: 'Do I need to create an account to use the calculators?',
        answer: 'No account required. All 28 calculators are completely free and work instantly in your browser. Just enter your metrics and get immediate results. We do not store your data or require any signup.',
      },
      {
        question: 'Which calculator should I use first?',
        answer: 'Start with the Engagement Rate Calculator to understand your audience quality. Then use the TikTok Money Calculator for earnings estimates. From there, explore specific calculators based on your monetization goals (brand deals, LIVE gifts, Creator Fund, etc.).',
      },
      {
        question: 'Can brands and agencies use these calculators?',
        answer: 'Absolutely. Marketing agencies use our Brand Deal Rate Calculator to evaluate influencer pricing, and brands use our Engagement Rate Calculator to vet potential partnerships and identify creators with authentic engagement.',
      },
      {
        question: 'How often is the calculator data updated?',
        answer: 'We refresh our benchmark data quarterly to reflect current TikTok rates and industry standards. The latest update includes 2026 Creator Fund rates, brand deal pricing trends, and engagement benchmarks across all major niches.',
      },
      {
        question: 'What data sources do you use for calculations?',
        answer: 'We aggregate data from official TikTok documentation, verified creator earnings reports, industry surveys from over 50,000 creators, and real-time market data for brand deal rates and RPM values.',
      },
      {
        question: 'Are the calculators available in other languages?',
        answer: 'Yes! We offer localized calculators for German, Spanish, French, Italian, Portuguese (Brazil), and Malay markets with region-specific RPM rates and currency conversions.',
      },
      {
        question: 'Can I use calculator results for tax purposes?',
        answer: 'Our Creator Tax Calculator provides estimates for quarterly tax planning, but we recommend consulting a professional accountant for official tax filings. Calculator results are for guidance and planning only.',
      },
    ],
  },
  niches: {
    title: 'TikTok Niches: Find Your Most Profitable Content Category',
    description: 'Compare earnings potential across 15+ TikTok niches. Data-driven analysis of RPM rates, brand deal potential, and growth opportunities by content category.',
    url: 'https://calculatecreator.com/niches/',
    collectionType: 'Niches',
    faqs: [
      {
        question: 'Which TikTok niche pays the most?',
        answer: 'Finance and business niches typically have the highest RPM rates ($0.05-$0.08 per 1,000 views) and brand deal rates due to high-value advertisers. Tech, beauty, and education also command premium rates.',
      },
      {
        question: 'How do I choose the right niche for TikTok?',
        answer: 'Consider three factors: your expertise/passion (for consistent content), market demand (audience size), and monetization potential (RPM and brand deal rates). The best niche balances all three.',
      },
      {
        question: 'Can I be successful in a saturated niche?',
        answer: 'Yes, but you need differentiation. Find a sub-niche or unique angle. For example, instead of general "fitness," focus on "fitness for busy parents" or "desk worker exercises." Specificity helps you stand out.',
      },
      {
        question: 'Should I switch niches if mine isn\'t performing?',
        answer: 'Give your niche at least 3-6 months of consistent posting before pivoting. If engagement remains low despite quality content and optimal posting, consider pivoting to a related niche that leverages your existing skills.',
      },
      {
        question: 'How do niche RPM rates vary by country?',
        answer: 'RPM rates vary significantly. US/UK/Germany typically have the highest rates (2-3x global average), while developing markets may have lower RPM but faster growth potential and less competition.',
      },
    ],
  },
  guides: {
    title: 'TikTok Creator Guides: Expert Strategies for Growth & Monetization',
    description: 'Comprehensive guides covering TikTok monetization, growth strategies, content creation, and creator business management. Written by industry experts.',
    url: 'https://calculatecreator.com/guides/',
    collectionType: 'Guides',
    faqs: [
      {
        question: 'Are these guides free to access?',
        answer: 'Yes, all guides are completely free. We believe in making creator education accessible to everyone, whether you\'re just starting out or scaling to full-time creator status.',
      },
      {
        question: 'How often are guides updated?',
        answer: 'We update guides quarterly to reflect TikTok platform changes, new monetization features, and evolving best practices. Major algorithm or policy changes trigger immediate updates.',
      },
      {
        question: 'Who writes these guides?',
        answer: 'Our guides are written by experienced creators, social media managers, and industry analysts with verified track records. All information is fact-checked against official TikTok documentation.',
      },
      {
        question: 'Where should I start as a new creator?',
        answer: 'Start with our "How to Make Money on TikTok" comprehensive guide for an overview, then move to specific guides based on your goals (Creator Fund, brand deals, LIVE streaming, etc.).',
      },
      {
        question: 'Do you offer personalized consulting?',
        answer: 'Currently we provide free educational content only. For personalized strategy, we recommend using our calculators to benchmark your performance and following our guides for actionable steps.',
      },
    ],
  },
  reference: {
    title: 'TikTok Reference Data: Official Rates, Schedules & Requirements',
    description: 'Verified reference data for TikTok creators including Creator Fund rates, payment schedules, eligibility requirements, and commission structures.',
    url: 'https://calculatecreator.com/reference/',
    collectionType: 'Reference',
    faqs: [
      {
        question: 'How accurate is this reference data?',
        answer: 'All data comes from official TikTok documentation, verified creator reports, and direct platform announcements. We cross-reference multiple sources and update immediately when TikTok announces changes.',
      },
      {
        question: 'When was the data last updated?',
        answer: 'Reference data is updated in real-time when TikTok announces changes. Routine verification happens monthly. Check the "Last Updated" timestamp on each reference page for specifics.',
      },
      {
        question: 'Why do Creator Fund rates vary?',
        answer: 'TikTok adjusts Creator Fund payouts based on total fund size, number of eligible creators, and regional factors. Rates fluctuate monthly and vary significantly by country and content performance.',
      },
      {
        question: 'Where can I find TikTok Shop commission rates?',
        answer: 'Our TikTok Shop Commission Rates reference page lists current rates by product category, ranging from 1% to 8% depending on the category and your seller tier.',
      },
      {
        question: 'How do I verify my eligibility for monetization?',
        answer: 'Check our eligibility requirements pages for Creator Fund, LIVE gifts, and TikTok Shop. Requirements include follower counts, view thresholds, account age, and geographic restrictions.',
      },
    ],
  },
  news: {
    title: 'TikTok News: Latest Platform Updates & Creator Economy Trends',
    description: 'Stay updated with the latest TikTok news, algorithm changes, monetization updates, and creator economy trends affecting your earnings.',
    url: 'https://calculatecreator.com/news/',
    collectionType: 'News',
    faqs: [
      {
        question: 'How quickly do you report TikTok updates?',
        answer: 'We monitor official TikTok announcements, creator community reports, and industry news daily. Major updates are published within 24-48 hours with analysis of creator impact.',
      },
      {
        question: 'Are these official TikTok announcements?',
        answer: 'We report on official announcements and verified changes. Each article cites sources and distinguishes between confirmed updates, leaked information, and speculation.',
      },
      {
        question: 'How do algorithm changes affect my earnings?',
        answer: 'Algorithm changes can significantly impact reach and therefore earnings. We analyze each update\'s potential impact on Creator Fund payouts, brand deal opportunities, and growth rates.',
      },
      {
        question: 'Can I get email notifications for important updates?',
        answer: 'We don\'t currently offer email subscriptions, but you can bookmark our news page and check regularly. We prioritize high-impact updates that directly affect creator monetization.',
      },
      {
        question: 'Do you cover TikTok news globally?',
        answer: 'Yes, we cover global TikTok news with special attention to major markets (US, UK, EU, Brazil, Southeast Asia). Regional rollouts and country-specific features are tracked separately.',
      },
    ],
  },
  region: {
    title: 'TikTok Statistics by Country: Global Creator Fund & RPM Data',
    description: 'Comprehensive TikTok statistics by country including Creator Fund availability, RPM rates, user demographics, and monetization opportunities worldwide.',
    url: 'https://calculatecreator.com/region/',
    collectionType: 'Reference',
    faqs: [
      {
        question: 'Which countries have the highest TikTok RPM?',
        answer: 'The US, UK, Germany, and Australia typically have the highest RPM rates ($0.02-$0.05+ per 1,000 views). These markets have strong advertiser demand and higher cost-per-impression rates.',
      },
      {
        question: 'Is Creator Fund available in my country?',
        answer: 'Creator Fund is currently available in the US, UK, Germany, France, Spain, Italy, and select other markets. Check our country-specific pages for current eligibility and requirements.',
      },
      {
        question: 'Why do earnings vary so much by country?',
        answer: 'Earnings depend on advertiser spending in each market, cost of living, currency values, and TikTok\'s market maturity in that region. Developed markets with strong ad ecosystems pay more.',
      },
      {
        question: 'Can I target audiences in higher-paying countries?',
        answer: 'You can create content appealing to specific markets, but TikTok\'s algorithm primarily shows content to users who speak your language and share your interests, regardless of your location.',
      },
      {
        question: 'How reliable is the country-specific data?',
        answer: 'Data comes from official TikTok reports, verified creator surveys, and industry research. Sample sizes vary by country, with larger markets having more reliable averages.',
      },
    ],
  },
  comparisons: {
    title: 'Platform Comparisons: TikTok vs YouTube, Instagram & More',
    description: 'Compare TikTok monetization, growth potential, and features against YouTube, Instagram, and other platforms. Data-driven analysis for creators.',
    url: 'https://calculatecreator.com/comparisons/',
    collectionType: 'Comparisons',
    faqs: [
      {
        question: 'Which platform pays creators the most?',
        answer: 'YouTube generally offers the highest RPM ($3-$5+ for long-form content), but TikTok can generate more total earnings through volume, brand deals, and LIVE gifts for creators with high engagement.',
      },
      {
        question: 'Should I focus on one platform or multiple?',
        answer: 'Start with one platform to build a strong foundation, then expand. Many successful creators repurpose TikTok content to YouTube Shorts and Instagram Reels to maximize reach without much extra effort.',
      },
      {
        question: 'How do monetization thresholds compare?',
        answer: 'TikTok requires 10K followers for Creator Fund vs YouTube\'s 1K subscribers + 4K watch hours. TikTok has lower barriers but also lower per-view payouts.',
      },
      {
        question: 'Which platform is best for beginners?',
        answer: 'TikTok offers the fastest potential growth due to its algorithm favoring new creators. However, YouTube provides more stable, long-term earnings once established.',
      },
      {
        question: 'Do brand deal rates differ by platform?',
        answer: 'Yes, significantly. YouTube sponsors often pay 2-3x more per video than TikTok, but TikTok creators can do more deals due to shorter content. Instagram sits in between for most metrics.',
      },
    ],
  },
  metrics: {
    title: 'TikTok Metrics Guide: Understanding Your Analytics',
    description: 'Complete guide to TikTok analytics and metrics. Learn what each metric means, industry benchmarks, and how to improve your performance.',
    url: 'https://calculatecreator.com/metrics/',
    collectionType: 'Metrics',
    faqs: [
      {
        question: 'What is a good engagement rate on TikTok?',
        answer: 'Average TikTok engagement rate is 4-6%. Above 8% is excellent, indicating strong audience connection. Below 3% suggests content may need optimization or you may have follower quality issues.',
      },
      {
        question: 'Which metrics matter most for monetization?',
        answer: 'For Creator Fund: total views. For brand deals: engagement rate and follower demographics. For LIVE: average concurrent viewers and gifting rate. Focus on metrics aligned with your monetization goals.',
      },
      {
        question: 'How often should I check my analytics?',
        answer: 'Review post performance 24-48 hours after posting for initial insights. Do weekly reviews for trends and monthly deep-dives for strategy adjustments. Avoid obsessing over hourly changes.',
      },
      {
        question: 'What is watch time and why does it matter?',
        answer: 'Watch time is total minutes viewed. It\'s crucial because TikTok\'s algorithm prioritizes videos that keep users on the platform longer. Higher watch time = more algorithmic promotion.',
      },
      {
        question: 'How do I improve my completion rate?',
        answer: 'Hook viewers in the first 1-2 seconds, maintain pace throughout, use pattern interrupts (text, cuts, sounds), and keep videos as short as needed to deliver value. Test different lengths.',
      },
    ],
  },
  blog: {
    title: 'TikTok Creator Blog: Tips, Trends & Success Stories',
    description: 'Blog covering TikTok creator tips, industry trends, success stories, and insider insights for content creators at every level.',
    url: 'https://calculatecreator.com/blog/',
    collectionType: 'Blog',
    faqs: [
      {
        question: 'How often is new content published?',
        answer: 'We publish 2-4 new articles weekly covering trending topics, creator success stories, platform updates, and actionable tips for growing your TikTok presence.',
      },
      {
        question: 'Can I contribute or share my story?',
        answer: 'We welcome creator success stories and guest contributions. Reach out through our contact page with your pitch or story for consideration.',
      },
      {
        question: 'Are blog posts fact-checked?',
        answer: 'Yes, all statistics and claims are verified against official sources or credited to specific studies. We maintain editorial standards for accuracy and reliability.',
      },
      {
        question: 'How do I find articles relevant to my niche?',
        answer: 'Use our category filters and search function. We tag articles by topic (monetization, growth, content creation) and niche (beauty, gaming, education, etc.).',
      },
      {
        question: 'Do you accept sponsored content?',
        answer: 'We occasionally partner with relevant tools and services. All sponsored content is clearly labeled. We never accept payment for editorial coverage or reviews.',
      },
    ],
  },
};
