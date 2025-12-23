/**
 * Regional Multipliers for TikTok Calculators
 * Different regions have varying CPM rates, brand deal budgets, and earning potential
 */

export type Region = 'us' | 'uk' | 'eu' | 'ca' | 'au' | 'latam' | 'asia' | 'mena' | 'africa';

export interface RegionalData {
  code: Region;
  name: string;
  flag: string;
  rpmMultiplier: number; // Multiplier for Creator Fund RPM
  brandDealMultiplier: number; // Multiplier for brand deal rates
  description: string;
  avgRPM: { min: number; max: number };
  topNiches: string[];
  notes: string;
}

/**
 * Regional multipliers based on CPM rates and market data
 */
export const REGIONAL_DATA: Record<Region, RegionalData> = {
  us: {
    code: 'us',
    name: 'United States',
    flag: 'US',
    rpmMultiplier: 1.0,
    brandDealMultiplier: 1.0,
    description: 'Highest CPM rates globally. Premium market for both Creator Fund and brand deals.',
    avgRPM: { min: 0.02, max: 0.05 },
    topNiches: ['Finance', 'Tech', 'Business', 'Real Estate', 'SaaS'],
    notes: 'Baseline for all calculations. Expect $0.02-$0.05 RPM depending on niche and engagement.',
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    flag: 'UK',
    rpmMultiplier: 0.9,
    brandDealMultiplier: 0.85,
    description: 'Strong market with slightly lower CPM than US. Robust brand deal ecosystem.',
    avgRPM: { min: 0.018, max: 0.045 },
    topNiches: ['Fashion', 'Beauty', 'Lifestyle', 'Finance', 'Gaming'],
    notes: 'UK audience is valuable but CPM is 10% lower than US. Brand deals pay 15% less on average.',
  },
  eu: {
    code: 'eu',
    name: 'European Union',
    flag: 'EU',
    rpmMultiplier: 0.75,
    brandDealMultiplier: 0.7,
    description: 'Varies by country. Western EU (Germany, France) higher than Eastern EU.',
    avgRPM: { min: 0.015, max: 0.038 },
    topNiches: ['Fashion', 'Travel', 'Food', 'Lifestyle', 'Fitness'],
    notes: 'Average across EU. Germany/France pay more, Eastern Europe pays less. GDPR affects ad targeting.',
  },
  ca: {
    code: 'ca',
    name: 'Canada',
    flag: 'CA',
    rpmMultiplier: 0.85,
    brandDealMultiplier: 0.8,
    description: 'Similar to US but smaller market. Good brand deal opportunities.',
    avgRPM: { min: 0.017, max: 0.043 },
    topNiches: ['Tech', 'Finance', 'Outdoor', 'Fitness', 'Real Estate'],
    notes: 'English and French language markets. CPM 15% lower than US due to smaller advertiser pool.',
  },
  au: {
    code: 'au',
    name: 'Australia & NZ',
    flag: 'AU',
    rpmMultiplier: 0.8,
    brandDealMultiplier: 0.75,
    description: 'Developed market but smaller population. Moderate brand deal rates.',
    avgRPM: { min: 0.016, max: 0.04 },
    topNiches: ['Lifestyle', 'Fitness', 'Travel', 'Outdoor', 'Beauty'],
    notes: 'High quality audience but limited market size affects both CPM and brand deal budgets.',
  },
  latam: {
    code: 'latam',
    name: 'Latin America',
    flag: 'LATAM',
    rpmMultiplier: 0.5,
    brandDealMultiplier: 0.4,
    description: 'Growing market with lower CPM. Brand deals increasing but budgets limited.',
    avgRPM: { min: 0.01, max: 0.025 },
    topNiches: ['Entertainment', 'Music', 'Dance', 'Comedy', 'Lifestyle'],
    notes: 'Mexico, Brazil, Argentina lead. Fast-growing creator economy but lower purchasing power affects rates.',
  },
  asia: {
    code: 'asia',
    name: 'Asia Pacific',
    flag: 'APAC',
    rpmMultiplier: 0.6,
    brandDealMultiplier: 0.5,
    description: 'Varies widely. Japan/S. Korea higher, Southeast Asia lower. Massive audience.',
    avgRPM: { min: 0.012, max: 0.03 },
    topNiches: ['Gaming', 'Beauty', 'Tech', 'Food', 'Fashion'],
    notes: 'Japan/S. Korea pay 0.8x US rates. Southeast Asia pays 0.4-0.6x. India pays 0.2-0.3x US rates.',
  },
  mena: {
    code: 'mena',
    name: 'Middle East & North Africa',
    flag: 'MENA',
    rpmMultiplier: 0.55,
    brandDealMultiplier: 0.6,
    description: 'Growing market. UAE/Saudi higher, North Africa lower. Luxury brands active.',
    avgRPM: { min: 0.011, max: 0.028 },
    topNiches: ['Luxury', 'Fashion', 'Beauty', 'Travel', 'Food'],
    notes: 'Gulf states (UAE, Saudi, Qatar) pay premium. Egypt, Morocco pay less. Brand deals can be high for luxury products.',
  },
  africa: {
    code: 'africa',
    name: 'Sub-Saharan Africa',
    flag: 'Africa',
    rpmMultiplier: 0.3,
    brandDealMultiplier: 0.25,
    description: 'Emerging market with lowest CPM. Creator Fund earnings limited but growing.',
    avgRPM: { min: 0.006, max: 0.015 },
    topNiches: ['Entertainment', 'Music', 'Comedy', 'Education', 'Lifestyle'],
    notes: 'South Africa, Nigeria, Kenya lead. Limited advertiser budgets but massive growth potential. Focus on brand deals with local companies.',
  },
};

/**
 * Get regional data by region code
 */
export function getRegionalData(region: Region): RegionalData {
  return REGIONAL_DATA[region];
}

/**
 * Get all regions as options for select field
 */
export function getRegionOptions() {
  return Object.values(REGIONAL_DATA).map((region) => ({
    value: region.code,
    label: `${region.flag} ${region.name}`,
  }));
}

/**
 * Apply regional multiplier to base calculation
 */
export function applyRegionalMultiplier(
  baseValue: number,
  region: Region,
  multiplierType: 'rpm' | 'brandDeal'
): number {
  const regionalData = REGIONAL_DATA[region];
  const multiplier =
    multiplierType === 'rpm'
      ? regionalData.rpmMultiplier
      : regionalData.brandDealMultiplier;
  return baseValue * multiplier;
}

/**
 * Get regional RPM range
 */
export function getRegionalRPMRange(region: Region): { min: number; max: number } {
  return REGIONAL_DATA[region].avgRPM;
}

/**
 * Calculate region-adjusted Creator Fund earnings
 */
export function calculateRegionalCreatorFund(
  monthlyViews: number,
  region: Region,
  engagementMultiplier: number = 1.0,
  nicheMultiplier: number = 1.0
): { min: number; max: number } {
  const rpmRange = getRegionalRPMRange(region);

  const minEarnings = (monthlyViews / 1000) * rpmRange.min * engagementMultiplier * nicheMultiplier;
  const maxEarnings = (monthlyViews / 1000) * rpmRange.max * engagementMultiplier * nicheMultiplier;

  return {
    min: Math.round(minEarnings * 100) / 100,
    max: Math.round(maxEarnings * 100) / 100,
  };
}

/**
 * Calculate region-adjusted brand deal rate
 */
export function calculateRegionalBrandDealRate(
  baseRate: number,
  region: Region
): { min: number; max: number } {
  const multiplier = REGIONAL_DATA[region].brandDealMultiplier;

  return {
    min: Math.round(baseRate * 0.8 * multiplier),
    max: Math.round(baseRate * 1.2 * multiplier),
  };
}
