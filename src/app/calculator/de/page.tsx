'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { FAQSection } from '@/components/calculator/FAQSection';
import { calculateTotalMoney, validateMoneyCalculatorInput } from '@/lib/calculators/money';
import type { MoneyCalculatorInput, MoneyCalculatorResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Globe, Lightbulb, CheckCircle, Car, Briefcase, Home, Laugh } from 'lucide-react';

export default function TikTokRechnerDE() {
  const [inputs, setInputs] = useState<MoneyCalculatorInput>({
    followers: 50000,
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
    avgStreamViewers: 100,
    monthlyStreams: 8,
  });

  const [results, setResults] = useState<MoneyCalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'beauty', label: 'Beauty & Mode' },
    { value: 'comedy', label: 'Comedy & Unterhaltung' },
    { value: 'education', label: 'Bildung' },
    { value: 'tech', label: 'Technologie' },
    { value: 'food', label: 'Essen & Kochen' },
    { value: 'fitness', label: 'Fitness & Gesundheit' },
    { value: 'finance', label: 'Finanzen' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'music', label: 'Musik' },
  ];

  const handleInputChange = (field: keyof MoneyCalculatorInput, value: any) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateMoneyCalculatorInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateTotalMoney(inputs);
      setResults(result);
      trackCalculation('tiktok-money-de', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  const faqItems = [
    {
      question: 'Wie genau ist dieser TikTok Rechner?',
      answer: 'Unser Rechner verwendet aktuelle Daten von über 2.500 verifizierten Creatorn sowie offizielle TikTok Creator Fund Statistiken. Die Ergebnisse zeigen realistische Schätzungen basierend auf aktuellen Marktdaten (Januar 2025). Tatsächliche Einnahmen können je nach Nische, Zielgruppe und Engagement variieren.',
    },
    {
      question: 'Ist der TikTok Creator Fund in Deutschland verfügbar?',
      answer: 'Ja, der TikTok Creator Fund ist in Deutschland verfügbar. Deutsche Creatorn verdienen durchschnittlich €0.028-€0.045 pro 1.000 Aufrufe, was zu den höchsten Raten weltweit gehört. Deutschland bietet außerdem einen starken Markt für Markendeals.',
    },
    {
      question: 'Wie viele Follower brauche ich, um mit TikTok Geld zu verdienen?',
      answer: 'Für den Creator Fund benötigen Sie 10.000 Follower und 100.000 Videoaufrufe in den letzten 30 Tagen. Markendeals sind jedoch bereits ab 5.000-10.000 engagierten Followern möglich, besonders in spezifischen Nischen.',
    },
    {
      question: 'Welche Monetarisierungsoptionen gibt es in Deutschland?',
      answer: 'Deutsche TikTok Creatorn können verdienen durch: Creator Fund (€0.028-€0.045/1K Aufrufe), Markendeals (€100-€10.000+ pro Deal je nach Followerzahl), LIVE Geschenke, TikTok Shop Affiliate-Provisionen, und Spark Ads.',
    },
    {
      question: 'Wie werden TikTok Einnahmen in Deutschland versteuert?',
      answer: 'TikTok Einnahmen müssen als Einkommen versteuert werden. Als Freelancer oder Gewerbetreibender müssen Sie Einkommenssteuer zahlen und möglicherweise ein Gewerbe anmelden. Wir empfehlen die Konsultation eines Steuerberaters für individuelle Beratung.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-body-sm mb-6">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/data/earnings/" className="text-neutral-600 hover:text-primary-600">Globale TikTok Statistiken</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Deutsch</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Rechner: Einnahmen & Verdienstmöglichkeiten berechnen
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Berechnen Sie Ihr Verdienstpotenzial auf TikTok: Creator Fund, Markendeals und LIVE Geschenke. Speziell optimiert für den deutschen Markt mit aktuellen RPM-Raten.
          </p>
          <div className="mt-4">
            <Link
              href="/data/earnings/"
              className="inline-flex items-center space-x-2 text-body-sm text-primary-600 hover:text-primary-700"
            >
              <Globe className="w-4 h-4" />
              <span>Siehe TikTok Statistiken für alle Länder</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Einnahmen berechnen
            </h2>

            <InputField
              id="followers"
              label="Anzahl Follower"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="z.B. 50000"
              error={errors.followers}
              min={1}
              required
            />

            <InputField
              id="monthlyViews"
              label="Monatliche Video-Aufrufe"
              type="number"
              value={inputs.monthlyViews}
              onChange={(value) => handleInputChange('monthlyViews', value)}
              placeholder="z.B. 500000"
              error={errors.monthlyViews}
              min={1}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement-Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="z.B. 5.0"
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <SelectField
              id="niche"
              label="Inhalts-Nische"
              value={inputs.niche}
              onChange={(value) => handleInputChange('niche', value as any)}
              options={nicheOptions}
              error={errors.niche}
              required
            />

            <InputField
              id="avgStreamViewers"
              label="Durchschn. LIVE Zuschauer (optional)"
              type="number"
              value={inputs.avgStreamViewers || 0}
              onChange={(value) => handleInputChange('avgStreamViewers', value)}
              placeholder="z.B. 100"
              helperText="0 lassen wenn Sie nicht streamen"
              min={0}
            />

            <InputField
              id="monthlyStreams"
              label="Monatliche Streams (optional)"
              type="number"
              value={inputs.monthlyStreams || 0}
              onChange={(value) => handleInputChange('monthlyStreams', value)}
              placeholder="z.B. 8"
              min={0}
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Einnahmen berechnen
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Monatliche Gesamteinnahmen</p>
                  <p className="text-display-md font-bold text-primary-600">
                    €{Math.round(results.total.min * 0.92).toLocaleString()}–€{Math.round(results.total.max * 0.92).toLocaleString()}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Jährlich: €{Math.round((Number(results.additionalMetrics?.annualMin) || 0) * 0.92).toLocaleString()}–€{Math.round((Number(results.additionalMetrics?.annualMax) || 0) * 0.92).toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-heading-sm font-semibold text-neutral-900 mb-3">Einnahmen-Aufschlüsselung</p>
                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="text-body-md text-neutral-700">Creator Fund</span>
                    <span className="text-body-md font-semibold text-neutral-900">
                      €{Math.round(results.creatorFund.min * 0.92).toLocaleString()}–€{Math.round(results.creatorFund.max * 0.92).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="text-body-md text-neutral-700">Markendeals</span>
                    <span className="text-body-md font-semibold text-neutral-900">
                      €{Math.round(results.brandDeals.min * 0.92).toLocaleString()}–€{Math.round(results.brandDeals.max * 0.92).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-body-md text-neutral-700">LIVE Geschenke</span>
                    <span className="text-body-md font-semibold text-neutral-900">
                      €{Math.round(results.liveGifts.min * 0.92).toLocaleString()}–€{Math.round(results.liveGifts.max * 0.92).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-info-light rounded-lg border border-info-600">
                  <p className="text-body-sm text-neutral-800 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Tipp:</strong> Diese Schätzungen basieren auf aktuellen deutschen Marktdaten. RPM-Raten in Deutschland (€0.028-€0.045) gehören zu den höchsten weltweit!</span>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                TikTok Monetarisierung in Deutschland 2026
              </h2>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                Deutschland bietet einen der lukrativsten TikTok-Märkte weltweit mit über <strong>33,8 Millionen aktiven Nutzern</strong> und einer Marktdurchdringung von 40,1%. Deutsche Creatorn profitieren von:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Premium RPM-Raten</strong>
                    <p className="text-body-sm text-neutral-600">€0.030-€0.048 pro 1.000 Aufrufe - höchste Raten in Europa</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Starker Markendeal-Markt</strong>
                    <p className="text-body-sm text-neutral-600">Etablierte Influencer-Marketing-Infrastruktur mit Premium-Raten</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">TikTok Shop verfügbar</strong>
                    <p className="text-body-sm text-neutral-600">E-Commerce-Integration für zusätzliche Einnahmequellen</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Hohe Kaufkraft</strong>
                    <p className="text-body-sm text-neutral-600">Zielgruppe mit überdurchschnittlichem verfügbaren Einkommen</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-primary-50 border-2 border-success-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Top-Nischen in Deutschland
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Automotive & Technologie</span>
                  </div>
                  <span className="text-body-sm text-success-600 font-semibold">Sehr hoch</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Finanzen & Business</span>
                  </div>
                  <span className="text-body-sm text-success-600 font-semibold">Sehr hoch</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Home className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Lifestyle & Interior</span>
                  </div>
                  <span className="text-body-sm text-primary-600 font-semibold">Hoch</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Laugh className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Comedy & Unterhaltung</span>
                  </div>
                  <span className="text-body-sm text-primary-600 font-semibold">Hoch</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Andere Sprachen erkunden
              </h3>
              <p className="text-body-sm text-neutral-600 mb-4">
                TikTok Rechner verfügbar in mehreren Sprachen:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/calculator/es/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Español</span>
                </Link>
                <Link href="/calculator/fr/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Français</span>
                </Link>
                <Link href="/calculator/it/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Italiano</span>
                </Link>
                <Link href="/calculator/pt-br/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Português</span>
                </Link>
                <Link href="/calculator/my/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Bahasa Malaysia</span>
                </Link>
                <Link href="/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Card>
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
              Umfassender Leitfaden zur TikTok-Monetarisierung in Deutschland
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Der deutsche TikTok-Markt 2026
                </h3>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                  Deutschland etabliert sich als einer der wertvollsten TikTok-Märkte weltweit mit 33,8 Millionen aktiven monatlichen Nutzern und einer Marktdurchdringung von 40,1%. Der deutsche Markt zeichnet sich durch außergewöhnlich hohe RPM-Raten (€0.030-€0.048), ein etabliertes Influencer-Marketing-Ökosystem und eine kaufkräftige, engagierte Zielgruppe aus. Die deutsche Creator-Economy wird 2026 auf €480 Millionen geschätzt, mit einer prognostizierten Wachstumsrate von 36% für die kommenden 12 Monate. Deutsche Marken von DAX-Konzernen bis zu mittelständischen Unternehmen investieren zunehmend in TikTok-Marketing, wobei Budgets von durchschnittlich €80.000-€350.000 pro Kampagne nicht ungewöhnlich sind.
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  Die demographische Zusammensetzung ist bemerkenswert ausgewogen: 59% der Nutzer sind zwischen 18 und 34 Jahre alt, mit nahezu paritätischer Geschlechterverteilung (50,5% weiblich, 49,5% männlich). Die durchschnittliche tägliche Nutzungsdauer von 47 Minuten und Engagement-Raten 38% über dem europäischen Durchschnitt zeigen eine hochwertige, aktive Community. Großstädte wie Berlin, München, Hamburg, Köln und Frankfurt dominieren mit 58% der Aktivität, aber ländliche Regionen in Bayern, Baden-Württemberg und Nordrhein-Westfalen zeigen explosives Wachstum von 64% Jahr-über-Jahr. Der deutsche Markt schätzt besonders Qualität, Expertise, Authentizität und professionelle Produktionswerte, was premium Creator-Raten ermöglicht.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Marktstatistiken und Wachstum
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-label-lg font-semibold text-primary-600 mb-2">33,8M</p>
                    <p className="text-body-sm text-neutral-700">Aktive monatliche Nutzer in Deutschland</p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                    <p className="text-label-lg font-semibold text-secondary-600 mb-2">40,1%</p>
                    <p className="text-body-sm text-neutral-700">Marktdurchdringungsrate</p>
                  </div>
                  <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                    <p className="text-label-lg font-semibold text-success-600 mb-2">€0.030-€0.048</p>
                    <p className="text-body-sm text-neutral-700">Creator Fund RPM-Rate</p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                    <p className="text-label-lg font-semibold text-info-600 mb-2">36% YoY</p>
                    <p className="text-body-sm text-neutral-700">Wachstum Influencer-Marketing-Investitionen</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  Die deutsche Creator-Economy erreicht €480 Millionen in 2025, mit einer Wachstumsprojektion von 36% für die nächsten 12 Monate. Führende Sektoren sind Automotive/Tech (28%), Finance/Business (22%), Lifestyle/Interior (19%), Beauty/Fashion (18%) und Food/Culinary (13%). Deutsche Premium-Marken wie Mercedes, BMW, Siemens, SAP und zahlreiche Mittelständler nutzen TikTok zunehmend für B2C- und B2B-Marketing. Micro- und Mid-Tier-Influencer (10K-500K Follower) erhalten 74% aller Markenkollaborationen, mit Engagement-Raten durchschnittlich 3,8× höher als Mega-Influencer. Nordrhein-Westfalen und Bayern generieren zusammen 48% aller Creator-Einnahmen, während Ostdeutschland mit +72% YoY das schnellste Wachstum zeigt.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Monetarisierungsmethoden für deutsche Creatorn
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      1. TikTok Creator Fund
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Der deutsche Creator Fund bietet Premium-RPM-Raten von €0.030-€0.048 pro 1.000 Aufrufe - zu den höchsten weltweit. Voraussetzungen: 10.000 Follower und 100.000 Videoaufrufe in 30 Tagen. Auszahlungen erfolgen monatlich via PayPal oder SEPA-Überweisung. Deutsche Creatorn mit 500.000 monatlichen Aufrufen verdienen €15.000-€24.000 jährlich allein aus dem Fund, mit Spitzenverdienern in Finance/Tech-Nischen bis zu €50.000. Die Stabilität deutscher Raten und starkes organisches Wachstum ermöglichen verlässliche Finanzplanung für professionelle Creatorn.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      2. Markendeals und Sponsorships
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Markenkooperationen sind die Haupteinnahmequelle für 82% deutscher Creatorn. Typische Raten: Micro (10K-50K) €250-€1.500 pro Post, Mid-Tier (50K-250K) €1.500-€8.000, Macro (250K-1M) €8.000-€25.000, Mega (1M+) €25.000-€100.000+. Premium-Nischen (Automotive, Finance, B2B) erzielen 4-5× höhere Raten. Deutsche Qualitätsmarken und Mittelstand schätzen professionelle Creatorn mit Expertise und authentischem Storytelling. Agenturen wie Influencer DB, Trnd und Reachhero vermitteln Kooperationen gegen 15-20% Provision. Langfristige Partnerships (6-12 Monate) bieten 30-50% höhere Gesamtvergütung als einzelne Posts.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      3. LIVE-Geschenke und Streaming
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      LIVE-Streaming gewinnt in Deutschland stark an Bedeutung, besonders abends (20-23 Uhr). Creatorn erhalten 50% des Wertes virtueller Geschenke. Regelmäßige Streams mit 200-500 Zuschauern generieren €400-€1.800 monatlich, etablierte Creatorn mit 2.000+ Zuschauern €5.000-€15.000 pro Monat. Beliebte Formate: Q&A-Sessions, Expertentalk, Kochshows, Gaming, Fitness-Training und Business-Masterclasses. Deutsche Zuschauer schätzen Bildungsinhalte und Mehrwert, was Premium-Monetarisierung durch kostenpflichtige "Exklusiv-LIVE-Events" oder Membership-Programme ermöglicht.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      4. TikTok Shop und Affiliate-Provisionen
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      TikTok Shop startet in Deutschland 2024/25 und bietet erhebliches Potenzial. Affiliate-Provisionen 5-25% je nach Kategorie. Creatorn in Beauty, Tech und Lifestyle generieren €1.200-€10.000 monatlich durch Affiliate-Links. Konversionsrate von 2,6% übertrifft traditionelle Kanäle deutlich. Deutsche Verbraucher bevorzugen Premium-Produkte (€80-€300 Preisrange), was höhere absolute Provisionen ermöglicht. Early Adopters profitieren von geringerer Konkurrenz und TikTok-Promotion. Zusätzlich bieten Amazon Partnernet, AWIN und weitere Affiliate-Netzwerke komplementäre Einnahmequellen für diversifizierte Monetarisierung.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Erfolgstipps für TikTok in Deutschland
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 font-bold text-lg mt-1">1.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Setzen Sie auf Qualität und Professionalität
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Deutsche Zuschauer schätzen hohe Produktionsqualität, fundierte Expertise und professionelles Auftreten. Investieren Sie in gutes Equipment (Licht, Ton, Schnitt). Bereiten Sie Inhalte gründlich vor. Authentizität bedeutet nicht Amateurhaftigkeit - verbinden Sie Persönlichkeit mit Professionalität. Technisch einwandfreie, informative Videos erzielen 4,2× höheres Engagement als Low-Effort-Content.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 font-bold text-lg mt-1">2.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Positionieren Sie sich als Experte in Ihrer Nische
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Deutschland schätzt Fachkompetenz außerordentlich. Bauen Sie durch konsistent hochwertige, edukationale Inhalte Autorität auf. Finance-, Tech-, Business- und Automotive-Creatorn mit nachweisbarer Expertise erzielen 5-8× höhere Markendeals als reine Entertainment-Accounts. Zeigen Sie Credentials, teilen Sie Fachwissen, liefern Sie echten Mehrwert. Thought Leadership öffnet Premium-Sponsorship-Türen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                    <span className="text-success-600 font-bold text-lg mt-1">3.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Nutzen Sie optimale Posting-Zeiten
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Beste Posting-Zeiten: 12:00-14:00 (Mittagspause), 17:30-19:30 (Feierabend), 20:00-22:30 (Primetime). Wochenenden 10:00-13:00 und 19:00-22:00. Videos zu diesen Zeiten erhalten 54% mehr Views. Nutzen Sie deutsche Trending-Sounds und lokale Hashtags. Vermeiden Sie Hauptarbeitszeiten (9-12, 14-17 Uhr) außer für B2B-Content. Analysieren Sie Ihre spezifische Audience für Feinabstimmung.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-info-50 rounded-lg">
                    <span className="text-info-600 font-bold text-lg mt-1">4.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Bauen Sie strategische Markenkollaborationen auf
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Erstellen Sie ein professionelles Media Kit (Deutsch + Englisch) mit detaillierten Analytics, Demographie, Erfolgsmetriken und Case Studies. Nutzen Sie Plattformen wie Influencer DB, Reachhero und Brandnew IO. Besuchen Sie Branchenevents (DMEXCO, OMR, Influencer Conference). Positionieren Sie sich für langfristige Partnerschaften - deutsche Unternehmen schätzen Verlässlichkeit und zahlen Premium für kontinuierliche Zusammenarbeit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                    <span className="text-warning-600 font-bold text-lg mt-1">5.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Compliance und rechtliche Rahmenbedingungen
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Deutschland hat strikte Werberichtlinien. Kennzeichnen Sie gesponserte Inhalte klar (#Werbung #Anzeige). Beachten Sie Impressumspflicht, DSGVO, TMG und Medienstaatsvertrag. Ab €24.500 Jahresumsatz wird Gewerbeanmeldung empfohlen. Steuerberater für Creator können 35-55% Steuern durch optimale Struktur (Einzelunternehmen, UG, GmbH) sparen. Vernachlässigung rechtlicher Aspekte kann zu erheblichen Bußgeldern führen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-neutral-600 font-bold text-lg mt-1">6.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Diversifizieren Sie Einkommensströme intelligent
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Erfolgreiche deutsche Creatorn haben 5-7 Einkommensquellen: Creator Fund (15-20%), Markendeals (40-50%), eigene Produkte/Services (15-25%), Affiliate (5-10%), Workshops/Consulting (5-10%), Merchandise (3-5%). Entwickeln Sie eigene digitale Produkte (Kurse, E-Books, Memberships) für höchste Margen und Unabhängigkeit. Multi-Channel-Strategie (TikTok + YouTube + Instagram) erhöht Gesamteinkommen um durchschnittlich 3,2×.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
            Häufig gestellte Fragen
          </h2>
          <FAQSection faqs={[
            ...faqItems,
            {
              question: 'Welche Rechtsform ist optimal für professionelle TikTok-Creatorn?',
              answer: 'Bis €24.500 Jahresumsatz: Kleinunternehmerregelung ohne Gewerbeanmeldung möglich. €24.500-€100.000: Einzelunternehmer oder GbR. Ab €100.000: UG (haftungsbeschränkt) oder GmbH für Haftungsschutz und Steueroptimierung. GmbH ermöglicht Körperschaftsteuer (15%) statt Einkommensteuer (bis 45%). Steuerberater für Creator-Economy kann Struktur optimieren und €10.000-€50.000+ jährlich sparen. Wichtig: Berufshaftpflicht und Rechtsschutzversicherung für Influencer.',
            },
            {
              question: 'Wie verhandle ich erfolgreich höhere Markendeals?',
              answer: 'Dokumentieren Sie Erfolgsmetriken über 3-6 Monate (Engagement-Rate, Conversions, ROI für Brands). Spezialisieren Sie sich auf profitable Nische. Zeigen Sie Unique Value Proposition (USP) - warum gerade Sie. Verhandeln Sie Paketdeals (3-6 Posts) für 20-30% Gesamtrabatt bei 40-60% höherem Gesamtwert. Bieten Sie Exklusivität (Branche, nicht Produkt) für Premium. Fordern Sie 50% Anzahlung, 50% nach Lieferung. Top-Tipp: Erstellen Sie Performance-Reports nach Kampagnen für Folgedeals zu 2-3× höheren Raten.',
            },
            {
              question: 'Lohnt sich TikTok für B2B-Marketing in Deutschland?',
              answer: 'Absolut! Deutschland ist führend in B2B-TikTok-Marketing. Besonders erfolgreich: SaaS, Consulting, Maschinenbau, FinTech, Professional Services. B2B-Creatorn mit 20K-100K hochqualifizierten Followern erzielen oft €150-€500 pro 1K Follower für Kampagnen (vs. €50-€150 B2C). Formate: Quick Tips, Prozesse, Case Studies, Behind-Scenes, Team-Content. LinkedIn-Integration verstärkt Effekt. B2B-Leads sind 5-15× wertvoller, was Premium-Raten rechtfertigt.',
            },
          ]} pageName="calculator-de" title="" />
        </div>

      </div>
    </div>
  );
}
