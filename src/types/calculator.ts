/**
 * Calculator Type Definitions
 * Defines all calculator types, inputs, outputs, and configuration
 */

// Calculator Type Enum
export type CalculatorType =
  | 'creator-fund'
  | 'engagement-rate'
  | 'brand-deal-rate'
  | 'live-gifts'
  | 'coins'
  | 'rpm'
  | 'diamond-converter'
  | 'tiktok-ad-cost'
  | 'cpm-cpv'
  | 'affiliate-commission'
  | 'conversion-rate'
  | 'customer-acquisition-cost'
  | 'lifetime-value'
  | 'campaign-roi'
  | 'shop-commission'
  | 'money'
  | 'follower-growth'
  | 'video-performance'
  | 'watch-time'
  | 'completion-rate'
  | 'viral-potential'
  | 'sponsorship-roi'
  | 'content-value'
  | 'break-even'
  | 'creator-tax'
  | 'multi-platform-earnings'
  | 'share-ratio'
  | 'save-rate'
  | 'comment-rate'
  | 'profile-visit-rate'
  | 'hashtag-performance'
  | 'posting-time'
  | 'production-cost'
  | 'niche-profitability'
  | 'content-calendar-roi'
  | 'follower-conversion'
  | 'ad-revenue'
  | 'posting-frequency'
  | 'milestone-tracker';

// Content Niches
export type ContentNiche =
  | 'lifestyle'
  | 'beauty-fashion'
  | 'fitness'
  | 'finance'
  | 'gaming'
  | 'food'
  | 'comedy'
  | 'education'
  | 'entertainment'
  | 'tech'
  | 'other';

// Follower Tiers
export type FollowerTier =
  | 'nano'       // < 10K
  | 'micro'      // 10K-50K
  | 'mid'        // 50K-500K
  | 'macro'      // 500K-1M
  | 'mega';      // 1M+

// Input Field Types
export type InputFieldType = 'number' | 'select' | 'range' | 'text';

// Input Field Configuration
export interface InputFieldConfig {
  id: string;
  label: string;
  type: InputFieldType;
  placeholder?: string;
  helperText?: string;
  tooltip?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string;
  options?: { value: string; label: string }[];
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

// Result Display Configuration
export interface ResultConfig {
  type: 'range' | 'single' | 'multiple';
  format: 'currency' | 'percentage' | 'number';
  interpretation?: {
    excellent?: { threshold: number; message: string };
    good?: { threshold: number; message: string };
    average?: { threshold: number; message: string };
    belowAverage?: { message: string };
  };
}

// Calculator Result
export interface CalculatorResult {
  min?: number;
  max?: number;
  value?: number;
  interpretation?: string;
  tier?: FollowerTier;
  additionalMetrics?: Record<string, number | string>;
}

// Calculator Configuration
export interface CalculatorConfig {
  id: string;
  type: CalculatorType;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: 'earnings' | 'engagement' | 'conversion' | 'utility';
  inputs: InputFieldConfig[];
  results: ResultConfig;
  methodology: {
    title: string;
    formula: string;
    assumptions: { label: string; value: string }[];
    dataSources: string[];
    limitations: string;
    lastUpdated: string;
  };
  relatedCalculators: string[];
  faq: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

// Creator Fund Input
export interface CreatorFundInput {
  monthlyViews: number;
  engagementRate: number;
  niche: ContentNiche;
}

// Creator Fund Result
export interface CreatorFundResult extends CalculatorResult {
  minMonthly: number;
  maxMonthly: number;
  minAnnual: number;
  maxAnnual: number;
  avgRPM: number;
}

// Engagement Rate Input
export interface EngagementRateInput {
  followers: number;
  avgLikes: number;
  avgComments: number;
  avgShares: number;
}

// Engagement Rate Result
export interface EngagementRateResult extends CalculatorResult {
  rate: number;
  rating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Brand Deal Input
export interface BrandDealInput {
  followers: number;
  engagementRate: number;
  niche: ContentNiche;
  deliverableType: 'in-feed' | 'spark-ad' | 'live-mention' | 'product-showcase';
}

// Brand Deal Result
export interface BrandDealResult extends CalculatorResult {
  minRate: number;
  maxRate: number;
  tier: FollowerTier;
}

// LIVE Gifts Input
export interface LiveGiftsInput {
  avgViewers: number;
  avgStreamDuration: number;
  giftsPerViewer: number;
}

// LIVE Gifts Result
export interface LiveGiftsResult extends CalculatorResult {
  diamondsEarned: number;
  usdEarnings: number;
  monthlyPotential: number;
}

// Coins Input
export interface CoinsInput {
  coins: number;
}

// Coins Result
export interface CoinsResult extends CalculatorResult {
  usdValue: number;
  diamonds: number;
}

// RPM Input
export interface RPMInput {
  views: number;
  earnings: number;
}

// RPM Result
export interface RPMResult extends CalculatorResult {
  rpm: number;
  benchmark: 'above' | 'average' | 'below';
}

// Diamond Converter Input
export interface DiamondConverterInput {
  diamonds: number;
  currency: string;
}

// Diamond Converter Result
export interface DiamondConverterResult extends CalculatorResult {
  usdValue: number;
  convertedValue: number;
  currency: string;
  currencySymbol: string;
  equivalentCoins: number;
}

// TikTok Ad Cost Input
export interface TikTokAdCostInput {
  budget: number;
  impressions: number;
  views: number;
  clicks: number;
  conversions: number;
  conversionValue: number;
}

// TikTok Ad Cost Result
export interface TikTokAdCostResult extends CalculatorResult {
  cpm: number;
  cpv: number;
  cpc: number;
  cpa: number;
  roas: number;
  profit: number;
  interpretation: string;
  recommendation: string;
}

// Shop Commission Input
export interface ShopCommissionInput {
  productPrice: number;
  commissionRate: number;
  monthlySales: number;
}

// Shop Commission Result
export interface ShopCommissionResult extends CalculatorResult {
  commissionPerSale: number;
  monthlyCommission: number;
  annualProjection: number;
}

// Money Calculator Input (comprehensive)
export interface MoneyCalculatorInput {
  followers: number;
  monthlyViews: number;
  engagementRate: number;
  niche: ContentNiche;
  avgStreamViewers?: number;
  monthlyStreams?: number;
}

// Money Calculator Result (all streams combined)
export interface MoneyCalculatorResult extends CalculatorResult {
  creatorFund: { min: number; max: number };
  brandDeals: { min: number; max: number };
  liveGifts: { min: number; max: number };
  total: { min: number; max: number };
  breakdown: {
    label: string;
    value: number;
    percentage: number;
  }[];
}

// Follower Growth Input
export interface FollowerGrowthInput {
  currentFollowers: number;
  dailyGrowthRate: number;
  projectionDays: number;
}

// Follower Growth Result
export interface FollowerGrowthResult extends CalculatorResult {
  projectedFollowers: number;
  totalGrowth: number;
  growthPercentage: number;
  dailyAverage: number;
}

// Video Performance Input
export interface VideoPerformanceInput {
  avgViews: number;
  avgLikes: number;
  avgComments: number;
  avgShares: number;
  followers: number;
}

// Video Performance Result
export interface VideoPerformanceResult extends CalculatorResult {
  performanceScore: number;
  rating: 'excellent' | 'good' | 'average' | 'below-average';
  viewToFollowerRatio: number;
}

// Watch Time Input
export interface WatchTimeInput {
  videoDuration: number;
  avgWatchTime: number;
  views: number;
}

// Watch Time Result
export interface WatchTimeResult extends CalculatorResult {
  retentionRate: number;
  totalWatchHours: number;
  rating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Completion Rate Input
export interface CompletionRateInput {
  videoDuration: number;
  avgWatchTime: number;
}

// Completion Rate Result
export interface CompletionRateResult extends CalculatorResult {
  completionRate: number;
  rating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Viral Potential Input
export interface ViralPotentialInput {
  followers: number;
  engagementRate: number;
  shareRate: number;
  saveRate: number;
  completionRate: number;
}

// Viral Potential Result
export interface ViralPotentialResult extends CalculatorResult {
  viralScore: number;
  viralChance: 'very-high' | 'high' | 'medium' | 'low';
  factors: { label: string; score: number }[];
}

// Sponsorship ROI Input
export interface SponsorshipROIInput {
  sponsorshipFee: number;
  productionCost: number;
  expectedReach: number;
  conversionRate: number;
  avgOrderValue: number;
}

// Sponsorship ROI Result
export interface SponsorshipROIResult extends CalculatorResult {
  totalRevenue: number;
  totalCost: number;
  roi: number;
  roiPercentage: number;
  breakEvenUnits: number;
}

// Content Value Input
export interface ContentValueInput {
  totalVideos: number;
  avgViewsPerVideo: number;
  engagementRate: number;
  niche: ContentNiche;
}

// Content Value Result
export interface ContentValueResult extends CalculatorResult {
  estimatedValue: number;
  valuePerVideo: number;
  totalReach: number;
}

// Break Even Input
export interface BreakEvenInput {
  adSpend: number;
  costPerClick: number;
  conversionRate: number;
  productPrice: number;
  productCost: number;
}

// Break Even Result
export interface BreakEvenResult extends CalculatorResult {
  breakEvenUnits: number;
  breakEvenRevenue: number;
  requiredClicks: number;
  requiredConversions: number;
}

// Creator Tax Input
export interface CreatorTaxInput {
  annualIncome: number;
  state: string;
  filingStatus: 'single' | 'married' | 'head-of-household';
  businessExpenses: number;
}

// Creator Tax Result
export interface CreatorTaxResult extends CalculatorResult {
  federalTax: number;
  stateTax: number;
  selfEmploymentTax: number;
  totalTax: number;
  effectiveTaxRate: number;
  netIncome: number;
}

// Multi-Platform Earnings Input
export interface MultiPlatformEarningsInput {
  tiktokFollowers: number;
  youtubeSubscribers: number;
  instagramFollowers: number;
  monthlyViews: { tiktok: number; youtube: number; instagram: number };
}

// Multi-Platform Earnings Result
export interface MultiPlatformEarningsResult extends CalculatorResult {
  tiktokEarnings: { min: number; max: number };
  youtubeEarnings: { min: number; max: number };
  instagramEarnings: { min: number; max: number };
  totalEarnings: { min: number; max: number };
  bestPlatform: 'tiktok' | 'youtube' | 'instagram';
}

// Share Ratio Input
export interface ShareRatioInput {
  views: number;
  shares: number;
}

// Share Ratio Result
export interface ShareRatioResult extends CalculatorResult {
  shareRatio: number;
  viralityRating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Save Rate Input
export interface SaveRateInput {
  views: number;
  saves: number;
}

// Save Rate Result
export interface SaveRateResult extends CalculatorResult {
  saveRate: number;
  contentValueRating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Comment Rate Input
export interface CommentRateInput {
  views: number;
  comments: number;
}

// Comment Rate Result
export interface CommentRateResult extends CalculatorResult {
  commentRate: number;
  engagementRating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Profile Visit Rate Input
export interface ProfileVisitRateInput {
  views: number;
  profileVisits: number;
  followers: number;
}

// Profile Visit Rate Result
export interface ProfileVisitRateResult extends CalculatorResult {
  visitRate: number;
  conversionRate: number;
  rating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Hashtag Performance Input
export interface HashtagPerformanceInput {
  baselineViews: number;
  hashtagViews: number;
  hashtagEngagement: number;
  baselineEngagement: number;
}

// Hashtag Performance Result
export interface HashtagPerformanceResult extends CalculatorResult {
  viewLift: number;
  engagementLift: number;
  effectivenessScore: number;
  rating: 'highly-effective' | 'effective' | 'neutral' | 'ineffective';
}

// Posting Time Input
export interface PostingTimeInput {
  timezone: string;
  audienceRegion: string;
  contentType: 'entertainment' | 'educational' | 'promotional' | 'inspirational';
}

// Posting Time Result
export interface PostingTimeResult extends CalculatorResult {
  optimalTimes: { time: string; score: number; reason: string }[];
  worstTimes: { time: string; reason: string }[];
}

// Production Cost Input
export interface ProductionCostInput {
  equipmentCost: number;
  softwareCost: number;
  timePerVideo: number;
  hourlyRate: number;
  videosPerMonth: number;
}

// Production Cost Result
export interface ProductionCostResult extends CalculatorResult {
  costPerVideo: number;
  monthlyCost: number;
  annualCost: number;
  breakEvenViews: number;
}

// Niche Profitability Input
export interface NicheProfitabilityInput {
  niche: ContentNiche;
  followers: number;
  monthlyViews: number;
  engagementRate: number;
}

// Niche Profitability Result
export interface NicheProfitabilityResult extends CalculatorResult {
  estimatedMonthlyEarnings: { min: number; max: number };
  nicheMultiplier: number;
  nichRanking: number;
  recommendation: string;
}

// Content Calendar ROI Input
export interface ContentCalendarROIInput {
  hoursSpentPlanning: number;
  hourlyRate: number;
  videosPlanned: number;
  avgPerformanceIncrease: number;
  avgRevenuePerVideo: number;
}

// Content Calendar ROI Result
export interface ContentCalendarROIResult extends CalculatorResult {
  planningCost: number;
  additionalRevenue: number;
  roi: number;
  roiPercentage: number;
}

// Follower Conversion Input
export interface FollowerConversionInput {
  followers: number;
  websiteClicks: number;
  purchases: number;
  avgOrderValue: number;
}

// Follower Conversion Result
export interface FollowerConversionResult extends CalculatorResult {
  clickThroughRate: number;
  conversionRate: number;
  overallConversionRate: number;
  revenue: number;
  revenuePerFollower: number;
}

// Ad Revenue Input
export interface AdRevenueInput {
  monthlyViews: number;
  cpm: number;
  adFrequency: number;
}

// Ad Revenue Result
export interface AdRevenueResult extends CalculatorResult {
  monthlyRevenue: number;
  annualRevenue: number;
  revenuePerVideo: number;
}

// CPM/CPV Input
export interface CPMCPVInput {
  adSpend: number;
  impressions: number;
}

// CPM/CPV Result
export interface CPMCPVResult extends CalculatorResult {
  cpm: number;
  cpv: number;
  benchmark: 'excellent' | 'good' | 'average' | 'expensive';
}

// Affiliate Commission Input
export interface AffiliateCommissionInput {
  productPrice: number;
  commissionRate: number;
  monthlyClicks: number;
  conversionRate: number;
}

// Affiliate Commission Result
export interface AffiliateCommissionResult extends CalculatorResult {
  commissionPerSale: number;
  expectedSales: number;
  monthlyEarnings: number;
  annualProjection: number;
  clickValue: number;
}

// Conversion Rate Input
export interface ConversionRateInput {
  visitors: number;
  conversions: number;
  timeframe: 'day' | 'week' | 'month';
}

// Conversion Rate Result
export interface ConversionRateResult extends CalculatorResult {
  conversionRate: number;
  rating: 'excellent' | 'good' | 'average' | 'poor';
}

// Customer Acquisition Cost Input
export interface CACInput {
  marketingSpend: number;
  newCustomers: number;
  timeframe: 'month' | 'quarter' | 'year';
}

// Customer Acquisition Cost Result
export interface CACResult extends CalculatorResult {
  cac: number;
  benchmark: 'excellent' | 'good' | 'acceptable' | 'high';
}

// Lifetime Value Input
export interface LTVInput {
  avgOrderValue: number;
  purchaseFrequency: number;
  customerLifespan: number;
}

// Lifetime Value Result
export interface LTVResult extends CalculatorResult {
  ltv: number;
  monthlyValue: number;
  totalRevenue: number;
}

// Campaign ROI Input
export interface CampaignROIInput {
  campaignCost: number;
  revenue: number;
  additionalMetrics?: {
    impressions?: number;
    clicks?: number;
    conversions?: number;
  };
}

// Campaign ROI Result
export interface CampaignROIResult extends CalculatorResult {
  roi: number;
  roiPercentage: number;
  profit: number;
  roas: number;
  rating: 'excellent' | 'good' | 'break-even' | 'loss';
}

// Posting Frequency Input
export interface PostingFrequencyInput {
  currentPosts: number;
  availableHours: number;
  contentQuality: 'high' | 'medium' | 'low';
  growthGoal: 'viral' | 'aggressive' | 'steady' | 'moderate';
}

// Posting Frequency Result
export interface PostingFrequencyResult extends CalculatorResult {
  recommendedDaily: number;
  postsPerWeek: number;
  hoursPerWeek: number;
  consistencyScore: number;
  improvement: number;
}

// Milestone Tracker Input
export interface MilestoneTrackerInput {
  currentFollowers: number;
  targetMilestone: number;
  dailyGrowthRate: number;
}

// Milestone Tracker Result
export interface MilestoneTrackerResult extends CalculatorResult {
  followersNeeded: number;
  progressPercentage: number;
  daysToMilestone: number;
  estimatedDate: string;
  milestoneName: string;
  nextMilestone: number;
}
