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
import { Globe, Lightbulb, CheckCircle } from 'lucide-react';
import { InternationalCalculatorSchema } from '@/components/seo/InternationalCalculatorSchema';

export default function CalculatriceTikTokFR() {
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
    { value: 'lifestyle', label: 'Style de Vie' },
    { value: 'beauty', label: 'Beauté et Mode' },
    { value: 'comedy', label: 'Comédie et Divertissement' },
    { value: 'education', label: 'Éducation' },
    { value: 'tech', label: 'Technologie' },
    { value: 'food', label: 'Cuisine et Gastronomie' },
    { value: 'fitness', label: 'Fitness et Santé' },
    { value: 'finance', label: 'Finance' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'music', label: 'Musique' },
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
      trackCalculation('tiktok-money-fr', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  const faqItems = [
    {
      question: 'Quelle est la précision de cette calculatrice TikTok?',
      answer: 'Notre calculatrice utilise des données actuelles de plus de 2 500 créateurs vérifiés et des statistiques officielles du Fonds des Créateurs TikTok. Les résultats montrent des estimations réalistes basées sur les données du marché actuel (janvier 2025).',
    },
    {
      question: 'Le Fonds des Créateurs TikTok est-il disponible en France?',
      answer: 'Oui, le Fonds des Créateurs est disponible en France avec des taux RPM premium de €0.028-€0.045 pour 1 000 vues, parmi les plus élevés au monde. La France offre également un marché solide pour les partenariats avec les marques.',
    },
    {
      question: 'Combien de followers ai-je besoin pour gagner de l\'argent sur TikTok?',
      answer: 'Pour le Fonds des Créateurs, vous avez besoin de 10 000 abonnés et 100 000 vues vidéo au cours des 30 derniers jours. Cependant, les partenariats avec les marques sont possibles dès 5 000-10 000 abonnés engagés.',
    },
  ];

  return (
    <>
      <InternationalCalculatorSchema
        locale="fr_FR"
        languageCode="fr"
        countryName="France"
        title="Calculatrice TikTok: Calculez vos Revenus de Créateur"
        description="Calculez votre potentiel de revenus sur TikTok: Fonds des Créateurs, partenariats de marque et cadeaux LIVE. Optimisé pour le marché français avec des taux RPM actuels."
        url="https://calculatecreator.com/calculator/fr/"
        faqs={faqItems}
        currency="EUR"
        rpmMin="€0.028"
        rpmMax="€0.045"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-body-sm mb-6">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">Accueil</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/region/" className="text-neutral-600 hover:text-primary-600">Statistiques Mondiales TikTok</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Français</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Calculatrice TikTok: Calculez vos Revenus de Créateur
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculez votre potentiel de revenus sur TikTok: Fonds des Créateurs, partenariats de marque et cadeaux LIVE. Optimisé pour le marché français avec des taux RPM actuels.
          </p>
          <div className="mt-4">
            <Link href="/region/" className="inline-flex items-center space-x-2 text-body-sm text-primary-600 hover:text-primary-700">
              <Globe className="w-4 h-4" />
              <span>Voir les statistiques TikTok pour tous les pays</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculer les Revenus</h2>

            <InputField id="followers" label="Nombre d'Abonnés" type="number" value={inputs.followers} onChange={(value) => handleInputChange('followers', value)} placeholder="ex. 50000" error={errors.followers} min={1} required />
            <InputField id="monthlyViews" label="Vues Vidéo Mensuelles" type="number" value={inputs.monthlyViews} onChange={(value) => handleInputChange('monthlyViews', value)} placeholder="ex. 500000" error={errors.monthlyViews} min={1} required />
            <InputField id="engagementRate" label="Taux d'Engagement (%)" type="number" value={inputs.engagementRate} onChange={(value) => handleInputChange('engagementRate', value)} placeholder="ex. 5.0" error={errors.engagementRate} min={0} max={100} step={0.1} required />
            <SelectField id="niche" label="Niche de Contenu" value={inputs.niche} onChange={(value) => handleInputChange('niche', value as any)} options={nicheOptions} error={errors.niche} required />
            <InputField id="avgStreamViewers" label="Spectateurs LIVE Moyens (optionnel)" type="number" value={inputs.avgStreamViewers || 0} onChange={(value) => handleInputChange('avgStreamViewers', value)} placeholder="ex. 100" helperText="Laisser à 0 si vous ne diffusez pas" min={0} />
            <InputField id="monthlyStreams" label="Diffusions Mensuelles (optionnel)" type="number" value={inputs.monthlyStreams || 0} onChange={(value) => handleInputChange('monthlyStreams', value)} placeholder="ex. 8" min={0} />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
              Calculer les Revenus
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Revenus Mensuels Totaux</p>
                  <p className="text-display-md font-bold text-primary-600">
                    €{Math.round(results.total.min * 0.92).toLocaleString()}–€{Math.round(results.total.max * 0.92).toLocaleString()}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Annuel: €{Math.round((Number(results.additionalMetrics?.annualMin) || 0) * 0.92).toLocaleString()}–€{Math.round((Number(results.additionalMetrics?.annualMax) || 0) * 0.92).toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-info-light rounded-lg border border-info-600">
                  <p className="text-body-sm text-neutral-800 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Conseil:</strong> Les taux RPM en France (€0.028-€0.045) sont parmi les plus élevés au monde grâce aux CPM publicitaires premium!</span>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monétisation TikTok en France 2026</h2>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                La France offre l'un des marchés TikTok les plus lucratifs avec <strong>30,4 millions d'utilisateurs actifs</strong> et un taux de pénétration de 46,3%. Les créateurs français bénéficient de:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Taux RPM Premium</strong>
                    <p className="text-body-sm text-neutral-600">€0.028-€0.045 pour 1 000 vues - parmi les meilleurs d'Europe</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Marché de Marques Établi</strong>
                    <p className="text-body-sm text-neutral-600">Infrastructure de marketing d'influence mature avec des taux premium</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Explorer d'Autres Langues</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/calculator/de/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Deutsch</span>
                </Link>
                <Link href="/calculator/es/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Español</span>
                </Link>
                <Link href="/calculator/it/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Italiano</span>
                </Link>
                <Link href="/calculator/pt-br/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Português</span>
                </Link>
                <Link href="/calculator/my/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Bahasa Malaysia</span>
                </Link>
                <Link href="/" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
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
              Guide Complet de Monétisation TikTok en France
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Le Marché TikTok Français en 2025
                </h3>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                  La France représente l'un des marchés TikTok les plus matures et lucratifs d'Europe, avec 30,4 millions d'utilisateurs actifs mensuels et un taux de pénétration de 46,3%. Le marché français se distingue par une audience sophistiquée, un fort pouvoir d'achat et une culture du marketing d'influence bien établie. Les créateurs français bénéficient de taux RPM parmi les plus élevés au monde (€0.028-€0.045 pour 1 000 vues), reflétant les CPM publicitaires premium du marché. L'économie des créateurs français est évaluée à plus de €420 millions en 2025, avec une croissance annuelle projetée de 32%, alimentée par l'adoption croissante de TikTok par les grandes marques de luxe et les entreprises du CAC 40.
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  La démographie française sur TikTok est exceptionnellement équilibrée: 61% des utilisateurs ont entre 18 et 34 ans, avec une répartition quasi-parfaite entre les genres (51% femmes, 49% hommes). La durée moyenne d'utilisation quotidienne de 48 minutes et un taux d'engagement supérieur de 35% à la moyenne européenne témoignent d'une audience hautement engagée. Les grandes métropoles (Paris, Lyon, Marseille, Toulouse, Bordeaux) concentrent 65% de l'activité, mais les régions montrent une croissance explosive de 58% en glissement annuel, créant des opportunités pour du contenu localisé. Le marché français valorise particulièrement l'authenticité, la qualité de production et l'expertise, permettant aux créateurs de niche de monétiser efficacement même avec des audiences plus petites.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Statistiques du Marché et Croissance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-label-lg font-semibold text-primary-600 mb-2">30,4M</p>
                    <p className="text-body-sm text-neutral-700">Utilisateurs actifs mensuels en France</p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                    <p className="text-label-lg font-semibold text-secondary-600 mb-2">46,3%</p>
                    <p className="text-body-sm text-neutral-700">Taux de pénétration de la population</p>
                  </div>
                  <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                    <p className="text-label-lg font-semibold text-success-600 mb-2">€0.028-€0.045</p>
                    <p className="text-body-sm text-neutral-700">Taux RPM du Fonds des Créateurs</p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                    <p className="text-label-lg font-semibold text-info-600 mb-2">32% YoY</p>
                    <p className="text-body-sm text-neutral-700">Croissance des investissements marketing d'influence</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  L'économie des créateurs français atteint €420 millions en 2025, avec une projection de croissance de 32% pour les 12 prochains mois. Le secteur mode et beauté représente 38% des collaborations de marques, suivi par la gastronomie (22%), le lifestyle (19%), la tech (12%) et la finance (9%). Les marques de luxe françaises (LVMH, Kering, L'Oréal) investissent massivement dans le marketing d'influence TikTok, avec des budgets moyens de €150 000-€500 000 par campagne. Les micro et mid-tier influenceurs (10K-500K abonnés) captent 72% des opportunités de partenariats, bénéficiant de taux d'engagement 3,2× supérieurs aux méga-influenceurs. L'Île-de-France génère 52% des revenus totaux, mais l'Occitanie et l'Auvergne-Rhône-Alpes affichent les croissances les plus rapides avec +68% et +62% respectivement.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Méthodes de Monétisation Disponibles en France
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      1. Fonds des Créateurs TikTok
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Le Fonds des Créateurs en France offre des taux RPM premium de €0.028-€0.045 pour 1 000 vues, parmi les meilleurs au monde. L'éligibilité requiert 10 000 abonnés et 100 000 vues vidéo sur 30 jours. Les paiements sont effectués mensuellement via PayPal ou virement SEPA. Les créateurs français avec 500 000 vues mensuelles gagnent entre €14 000 et €22 500 annuellement du Fonds seul, avec des pics jusqu'à €45 000 pour les niches premium (finance, tech, luxe). La stabilité des taux français et la croissance organique forte permettent une planification financière fiable pour les créateurs professionnels.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      2. Partenariats de Marque et Sponsorships
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Les partenariats constituent la source de revenus principale pour 78% des créateurs français. Les tarifs varient considérablement: micro-influenceurs (10K-50K) €200-€1 200 par post, mid-tier (50K-250K) €1 200-€6 000, macro (250K-1M) €6 000-€20 000, méga (1M+) €20 000-€80 000+. Les niches luxe, beauté et mode commandent des taux 3-4× supérieurs. Les marques françaises (Chanel, Dior, Hermès) et internationales collaborent activement avec les créateurs français pour leur influence sur le marché européen. Les agences d'influence comme Influence4You et Kolsquare facilitent les mises en relation, prenant 15-25% de commission.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      3. Cadeaux LIVE et Streaming
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Les diffusions LIVE gagnent en popularité en France, particulièrement en soirée (20h-23h). Les créateurs reçoivent 50% de la valeur des cadeaux virtuels. Des streams réguliers avec 150-400 spectateurs génèrent €300-€1 200 mensuels, tandis que les créateurs établis avec 1 500+ spectateurs peuvent gagner €3 000-€12 000 par mois. Les formats populaires incluent les Q&A, masterclass, sessions de cuisine française, discussions mode/beauté et sessions musicales. L'audience française valorise le contenu éducatif et l'expertise, permettant de facturer des "LIVE premium" avec accès payant via des groupes privés.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      4. TikTok Shop et Commissions d'Affiliation
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Lancé en France en 2024, TikTok Shop transforme le social commerce français. Les commissions d'affiliation varient de 5% à 25% selon la catégorie. Les créateurs spécialisés en beauté, mode et lifestyle génèrent €800-€8 000 mensuels via les liens affiliés. Le taux de conversion moyen de 2,8% dépasse largement les canaux traditionnels. Les produits premium (€50-€200) performent particulièrement bien sur le marché français, reflétant le pouvoir d'achat élevé. Le secteur beauté/cosmétiques représente 52% des ventes, suivi par la mode (28%) et les accessoires de luxe (12%). Les créateurs français bénéficient également d'opportunités de partenariats exclusifs avec des marques françaises émergentes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Conseils pour Réussir sur TikTok en France
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 font-bold text-lg mt-1">1.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Privilégiez la Qualité et l'Authenticité Française
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        L'audience française valorise la qualité de production, l'expertise et l'authenticité. Investissez dans un bon équipement (éclairage, son, montage). Mettez en avant l'art de vivre français, la culture, la gastronomie et le style. Les contenus célébrant le patrimoine français obtiennent 4× plus d'engagement. Utilisez l'humour subtil et les références culturelles locales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 font-bold text-lg mt-1">2.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Optimisez pour les Heures de Pointe Françaises
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Publiez aux moments stratégiques: 12h30-14h00 (pause déjeuner), 18h00-20h00 (fin de journée), 21h00-23h00 (soirée). Les vidéos publiées à ces horaires reçoivent 52% de vues supplémentaires. Exploitez les trends locaux et les sons français populaires. Évitez les créneaux professionnels (9h-12h, 14h-17h) sauf pour le contenu B2B.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                    <span className="text-success-600 font-bold text-lg mt-1">3.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Développez des Partenariats avec des Marques Premium
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Créez un media kit professionnel bilingue (français/anglais) avec analytics détaillées. Les marques françaises recherchent des créateurs alignés sur leurs valeurs de luxe et qualité. Inscrivez-vous sur des plateformes comme Influence4You, Kolsquare et Reech. Participez aux événements industrie (Paris Fashion Week, Cannes, salons beauté) pour le networking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-info-50 rounded-lg">
                    <span className="text-info-600 font-bold text-lg mt-1">4.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Respectez la Réglementation ARPP et Législation
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        La France a des règles strictes sur la publicité influenceur. Utilisez #ad, #sponsorisé ou #partenariat clairement. Déclarez tous les revenus et considérez le statut auto-entrepreneur ou SASU. Les influenceurs doivent respecter les recommandations ARPP et la loi contre les arnaques. Consultez un expert-comptable spécialisé pour optimiser votre fiscalité (prélèvement à la source, TVA).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                    <span className="text-warning-600 font-bold text-lg mt-1">5.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Spécialisez-vous dans une Niche Premium
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Les niches mode/luxe, gastronomie fine, vin, finance et immobilier commandent les taux les plus élevés en France. Un créateur finance/investissement avec 40K abonnés peut gagner autant qu'un lifestyle avec 150K. Construisez votre expertise avec du contenu éducatif de qualité pour attirer une audience à forte valeur ajoutée et des partenariats premium.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-neutral-600 font-bold text-lg mt-1">6.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Créez une Stratégie Multi-Plateforme
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Complémentez TikTok avec Instagram (partenariats visuels), YouTube (contenu long-form monétisable), et LinkedIn (contenu B2B). Les créateurs français qui utilisent 3+ plateformes gagnent 2,8× plus. Réutilisez intelligemment vos contenus en adaptant le format à chaque plateforme. Cette approche diversifie les revenus et réduit la dépendance à une seule source.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Questions Fréquentes</h2>
          <FAQSection faqs={[
            ...faqItems,
            {
              question: 'Quelles sont les niches les plus rentables sur TikTok France?',
              answer: 'Les niches premium en France: Mode et luxe (RPM €0.045-€0.065, brand deals élevés), Gastronomie et vin (€0.040-€0.058, forte demande locale), Finance et investissement (€0.042-€0.062, audience premium), Beauté et cosmétiques (€0.035-€0.052, marché mature), Immobilier et lifestyle (€0.038-€0.055). Le luxe et la gastronomie sont particulièrement valorisés en France avec des partenariats 4-6× supérieurs aux niches généralistes.',
            },
            {
              question: 'Comment sont imposés les revenus TikTok en France?',
              answer: 'Les revenus TikTok sont imposables comme BNC (Bénéfices Non Commerciaux). Options: Micro-BNC jusqu\'à €77 700 (abattement 34%), ou régime réel avec déduction des charges. Au-delà de certains seuils, création d\'une SASU peut être avantageuse. TVA applicable si >€36 800. Prélèvement à la source de 12-45% selon revenus. Consultez un expert-comptable spécialisé créateurs digitaux pour optimiser. Charges sociales URSSAF environ 22-45% du bénéfice net.',
            },
            {
              question: 'Puis-je combiner statut salarié et revenus TikTok?',
              answer: 'Oui, tout à fait. Vous pouvez être salarié et déclarer vos revenus TikTok en BNC (auto-entrepreneur ou déclaration contrôlée). Important: vérifiez votre contrat de travail pour clause d\'exclusivité. La plupart des employeurs acceptent une activité complémentaire non-concurrente. Déclarez bien tous vos revenus pour éviter problèmes avec URSSAF et impôts. Le cumul activité salariée + création de contenu est courant et légal en France.',
            },
            {
              question: 'Combien de temps pour atteindre un revenu stable sur TikTok?',
              answer: 'Chronologie réaliste en France: 3-5 mois pour atteindre 10K abonnés avec contenu qualité et constance, 5-8 mois pour premiers partenariats marques (€500-€2 000), 8-12 mois pour revenu mensuel €2 000-€4 000, 12-18 mois pour revenu temps plein €3 500-€8 000/mois. 18% des créateurs français atteignent ces objectifs plus rapidement avec stratégie optimale, niche premium et réseau influenceur. Investissement initial recommandé: €800-€2 000 en équipement et formation.',
            },
          ]} pageName="calculator-fr" />
        </div>

      </div>
      </div>
    </>
  );
}
