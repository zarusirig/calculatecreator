/**
 * TikTok Creator Tax Calculator
 * Estimates tax obligations for content creators (US-based)
 */

import type {
  CreatorTaxInput,
  CreatorTaxResult,
} from '@/types/calculator';

// 2024 Federal Tax Brackets (simplified)
const FEDERAL_TAX_BRACKETS = {
  single: [
    { max: 11600, rate: 0.10 },
    { max: 47150, rate: 0.12 },
    { max: 100525, rate: 0.22 },
    { max: 191950, rate: 0.24 },
    { max: 243725, rate: 0.32 },
    { max: 609350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
  married: [
    { max: 23200, rate: 0.10 },
    { max: 94300, rate: 0.12 },
    { max: 201050, rate: 0.22 },
    { max: 383900, rate: 0.24 },
    { max: 487450, rate: 0.32 },
    { max: 731200, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
  'head-of-household': [
    { max: 16550, rate: 0.10 },
    { max: 63100, rate: 0.12 },
    { max: 100500, rate: 0.22 },
    { max: 191950, rate: 0.24 },
    { max: 243700, rate: 0.32 },
    { max: 609350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
};

// State tax rates (simplified average)
const STATE_TAX_RATES: Record<string, number> = {
  'no-state-tax': 0,
  'low': 0.03,
  'medium': 0.05,
  'high': 0.08,
  'very-high': 0.10,
};

// Self-employment tax rate
const SELF_EMPLOYMENT_TAX_RATE = 0.153; // 15.3% (Social Security + Medicare)
const SE_TAX_INCOME_LIMIT = 160200; // 2024 Social Security wage base

/**
 * Calculate federal tax using brackets
 */
function calculateFederalTax(income: number, filingStatus: string): number {
  const brackets = FEDERAL_TAX_BRACKETS[filingStatus as keyof typeof FEDERAL_TAX_BRACKETS];
  let tax = 0;
  let previousMax = 0;

  for (const bracket of brackets) {
    if (income <= previousMax) break;

    const taxableInBracket = Math.min(income, bracket.max) - previousMax;
    tax += taxableInBracket * bracket.rate;

    previousMax = bracket.max;
  }

  return tax;
}

/**
 * Calculate creator tax obligations
 */
export function calculateCreatorTax(
  input: CreatorTaxInput
): CreatorTaxResult {
  const { annualIncome, state, filingStatus, businessExpenses } = input;

  // Calculate net income after business expenses
  const netIncome = annualIncome - businessExpenses;

  // Calculate self-employment tax (on 92.35% of net income)
  const seIncome = netIncome * 0.9235;
  const selfEmploymentTax = Math.min(seIncome, SE_TAX_INCOME_LIMIT) * SELF_EMPLOYMENT_TAX_RATE;

  // Deduct 50% of SE tax from income for federal tax calculation
  const adjustedGrossIncome = netIncome - (selfEmploymentTax * 0.5);

  // Calculate federal tax
  const federalTax = calculateFederalTax(adjustedGrossIncome, filingStatus);

  // Calculate state tax
  const stateRate = STATE_TAX_RATES[state] || 0.05;
  const stateTax = netIncome * stateRate;

  // Calculate totals
  const totalTax = federalTax + stateTax + selfEmploymentTax;
  const effectiveTaxRate = (totalTax / annualIncome) * 100;
  const netIncomeAfterTax = annualIncome - totalTax;

  // Generate interpretation
  let interpretation = '';
  if (effectiveTaxRate >= 35) {
    interpretation = `**High tax burden.** Your ${effectiveTaxRate.toFixed(1)}% effective tax rate means $${totalTax.toLocaleString()} in taxes on $${annualIncome.toLocaleString()} income. Net income: $${netIncomeAfterTax.toLocaleString()}. Breakdown: Federal $${federalTax.toLocaleString()}, State $${stateTax.toLocaleString()}, Self-Employment $${selfEmploymentTax.toLocaleString()}. Consider maximizing business deductions and working with a tax professional.`;
  } else if (effectiveTaxRate >= 25) {
    interpretation = `**Moderate tax burden.** Your ${effectiveTaxRate.toFixed(1)}% effective rate means $${totalTax.toLocaleString()} in taxes. After $${businessExpenses.toLocaleString()} in deductions, your net is $${netIncomeAfterTax.toLocaleString()}. Breakdown: Federal $${federalTax.toLocaleString()}, State $${stateTax.toLocaleString()}, SE Tax $${selfEmploymentTax.toLocaleString()}.`;
  } else {
    interpretation = `**Manageable tax burden.** ${effectiveTaxRate.toFixed(1)}% effective rate equals $${totalTax.toLocaleString()} in taxes. Your $${businessExpenses.toLocaleString()} in business expenses help reduce your tax burden. Net income: $${netIncomeAfterTax.toLocaleString()}. Remember to make quarterly estimated tax payments.`;
  }

  return {
    federalTax: Math.round(federalTax * 100) / 100,
    stateTax: Math.round(stateTax * 100) / 100,
    selfEmploymentTax: Math.round(selfEmploymentTax * 100) / 100,
    totalTax: Math.round(totalTax * 100) / 100,
    effectiveTaxRate: Math.round(effectiveTaxRate * 100) / 100,
    netIncome: Math.round(netIncomeAfterTax * 100) / 100,
    interpretation,
    value: totalTax,
  };
}

/**
 * Validate creator tax input
 */
export function validateCreatorTaxInput(input: Partial<CreatorTaxInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.annualIncome || input.annualIncome <= 0) {
    errors.annualIncome = 'Annual income must be greater than $0';
  }

  if (!input.state) {
    errors.state = 'Please select a state tax category';
  }

  if (!input.filingStatus) {
    errors.filingStatus = 'Please select a filing status';
  }

  if (!input.businessExpenses || input.businessExpenses < 0) {
    errors.businessExpenses = 'Business expenses must be at least $0';
  }

  if (input.businessExpenses && input.annualIncome && input.businessExpenses >= input.annualIncome) {
    errors.businessExpenses = 'Business expenses cannot exceed annual income';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
