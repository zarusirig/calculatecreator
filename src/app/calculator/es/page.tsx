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
import { Globe, Lightbulb, CheckCircle, Music, Laugh, Sparkles, UtensilsCrossed } from 'lucide-react';
import { InternationalCalculatorSchema } from '@/components/seo/InternationalCalculatorSchema';

export default function CalculadoraTikTokES() {
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
    { value: 'lifestyle', label: 'Estilo de Vida' },
    { value: 'beauty', label: 'Belleza y Moda' },
    { value: 'comedy', label: 'Comedia y Entretenimiento' },
    { value: 'education', label: 'Educación' },
    { value: 'tech', label: 'Tecnología' },
    { value: 'food', label: 'Comida y Cocina' },
    { value: 'fitness', label: 'Fitness y Salud' },
    { value: 'finance', label: 'Finanzas' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'music', label: 'Música' },
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
      trackCalculation('tiktok-money-es', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  const faqItems = [
    {
      question: '¿Qué tan precisa es esta calculadora de TikTok?',
      answer: 'Nuestra calculadora utiliza datos actuales de más de 2,500 creadores verificados y estadísticas oficiales del Fondo de Creadores de TikTok. Los resultados muestran estimaciones realistas basadas en datos de mercado actuales (enero 2025). Las ganancias reales pueden variar según el nicho, la audiencia y el compromiso.',
    },
    {
      question: '¿El Fondo de Creadores de TikTok está disponible en España y México?',
      answer: 'Sí, el Fondo de Creadores está disponible en España (€0.025-€0.038 por 1,000 vistas) y México ($0.020-$0.032 por 1,000 vistas). Ambos mercados también ofrecen excelentes oportunidades para acuerdos con marcas.',
    },
    {
      question: '¿Cuántos seguidores necesito para ganar dinero en TikTok?',
      answer: 'Para el Fondo de Creadores necesitas 10,000 seguidores y 100,000 vistas de video en los últimos 30 días. Sin embargo, los acuerdos con marcas son posibles desde 5,000-10,000 seguidores comprometidos, especialmente en nichos específicos.',
    },
    {
      question: '¿Cuáles son las mejores formas de monetizar TikTok en español?',
      answer: 'Los creadores hispanohablantes pueden ganar a través de: Fondo de Creadores, acuerdos con marcas ($100-$10,000+ por publicación), regalos en LIVE, comisiones de afiliados de TikTok Shop, y Spark Ads. Los acuerdos con marcas generalmente son la fuente más lucrativa.',
    },
    {
      question: '¿Qué nichos son más rentables en mercados hispanohablantes?',
      answer: 'Música y baile, comedia, belleza, comida, y deportes tienen alto compromiso. En mercados premium como España, finanzas y tecnología también son muy rentables. México destaca en entretenimiento y estilo de vida.',
    },
  ];

  return (
    <>
      <InternationalCalculatorSchema
        locale="es_ES"
        languageCode="es"
        countryName="Spain"
        title="Calculadora de TikTok: Ganancias y Monetización"
        description="Calcula tu potencial de ingresos en TikTok: Fondo de Creadores, acuerdos con marcas y regalos en LIVE. Optimizado para mercados hispanohablantes con tasas RPM actuales."
        url="https://calculatecreator.com/calculator/es/"
        faqs={faqItems}
        currency="EUR"
        rpmMin="€0.025"
        rpmMax="€0.038"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-body-sm mb-6">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">Inicio</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/region" className="text-neutral-600 hover:text-primary-600">Estadísticas Globales de TikTok</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Español</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Calculadora de TikTok: Calcula tus Ganancias de Creator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calcula tu potencial de ganancias en TikTok: Fondo de Creadores, acuerdos con marcas y regalos en LIVE. Optimizado para mercados hispanohablantes con tasas RPM actuales.
          </p>
          <div className="mt-4">
            <Link
              href="/region"
              className="inline-flex items-center space-x-2 text-body-sm text-primary-600 hover:text-primary-700"
            >
              <Globe className="w-4 h-4" />
              <span>Ver estadísticas de TikTok para todos los países</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calcular Ganancias
            </h2>

            <InputField
              id="followers"
              label="Número de Seguidores"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="ej. 50000"
              error={errors.followers}
              min={1}
              required
            />

            <InputField
              id="monthlyViews"
              label="Vistas de Video Mensuales"
              type="number"
              value={inputs.monthlyViews}
              onChange={(value) => handleInputChange('monthlyViews', value)}
              placeholder="ej. 500000"
              error={errors.monthlyViews}
              min={1}
              required
            />

            <InputField
              id="engagementRate"
              label="Tasa de Compromiso (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="ej. 5.0"
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <SelectField
              id="niche"
              label="Nicho de Contenido"
              value={inputs.niche}
              onChange={(value) => handleInputChange('niche', value as any)}
              options={nicheOptions}
              error={errors.niche}
              required
            />

            <InputField
              id="avgStreamViewers"
              label="Promedio de Espectadores en LIVE (opcional)"
              type="number"
              value={inputs.avgStreamViewers || 0}
              onChange={(value) => handleInputChange('avgStreamViewers', value)}
              placeholder="ej. 100"
              helperText="Dejar en 0 si no haces streams"
              min={0}
            />

            <InputField
              id="monthlyStreams"
              label="Streams Mensuales (opcional)"
              type="number"
              value={inputs.monthlyStreams || 0}
              onChange={(value) => handleInputChange('monthlyStreams', value)}
              placeholder="ej. 8"
              min={0}
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calcular Ganancias
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Ganancias Mensuales Totales</p>
                  <p className="text-display-md font-bold text-primary-600">
                    ${results.total.min.toLocaleString()}–${results.total.max.toLocaleString()}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Anual: ${results.additionalMetrics?.annualMin.toLocaleString()}–${results.additionalMetrics?.annualMax.toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-heading-sm font-semibold text-neutral-900 mb-3">Desglose de Ingresos</p>
                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="text-body-md text-neutral-700">Fondo de Creadores</span>
                    <span className="text-body-md font-semibold text-neutral-900">
                      ${results.creatorFund.min.toLocaleString()}–${results.creatorFund.max.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="text-body-md text-neutral-700">Acuerdos con Marcas</span>
                    <span className="text-body-md font-semibold text-neutral-900">
                      ${results.brandDeals.min.toLocaleString()}–${results.brandDeals.max.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-body-md text-neutral-700">Regalos LIVE</span>
                    <span className="text-body-md font-semibold text-neutral-900">
                      ${results.liveGifts.min.toLocaleString()}–${results.liveGifts.max.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-info-light rounded-lg border border-info-600">
                  <p className="text-body-sm text-neutral-800 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Consejo:</strong> Estas estimaciones se basan en datos actuales del mercado hispanohablante. Los acuerdos con marcas generalmente generan 5-10× más ingresos que el Fondo de Creadores.</span>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Monetización de TikTok en Español 2026
              </h2>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                Los mercados hispanohablantes ofrecen enormes oportunidades con <strong>más de 190 millones de usuarios activos</strong> en España, México, Argentina y Colombia combinados. Los creadores se benefician de:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Audiencia Masiva y Comprometida</strong>
                    <p className="text-body-sm text-neutral-600">Alto engagement especialmente en música, baile y entretenimiento</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Mercado de Marcas en Crecimiento</strong>
                    <p className="text-body-sm text-neutral-600">Oportunidades emergentes para acuerdos con marcas locales e internacionales</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">TikTok Shop Disponible</strong>
                    <p className="text-body-sm text-neutral-600">Integración de comercio electrónico para ingresos adicionales</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Contenido Viral</strong>
                    <p className="text-body-sm text-neutral-600">Alto potencial de viralidad en toda la región hispanohablante</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-primary-50 border-2 border-success-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Nichos Principales en Español
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Music className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Música y Baile</span>
                  </div>
                  <span className="text-body-sm text-success-600 font-semibold">Muy alto</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Laugh className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Comedia y Entretenimiento</span>
                  </div>
                  <span className="text-body-sm text-success-600 font-semibold">Muy alto</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Belleza y Moda</span>
                  </div>
                  <span className="text-body-sm text-primary-600 font-semibold">Alto</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <UtensilsCrossed className="w-5 h-5 text-neutral-700" />
                    <span className="text-body-md text-neutral-900">Comida y Recetas</span>
                  </div>
                  <span className="text-body-sm text-primary-600 font-semibold">Alto</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Explorar Otros Idiomas
              </h3>
              <p className="text-body-sm text-neutral-600 mb-4">
                Calculadora de TikTok disponible en varios idiomas:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/calculator/de" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Deutsch</span>
                </Link>
                <Link href="/calculator/fr" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Français</span>
                </Link>
                <Link href="/calculator/it" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Italiano</span>
                </Link>
                <Link href="/calculator/pt-br" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Português</span>
                </Link>
                <Link href="/calculator/my" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:text-primary-700 hover:underline">
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
              Guía Completa de Monetización TikTok en Español
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  El Mercado TikTok Hispanohablante en 2025
                </h3>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                  El mercado hispanohablante representa uno de los ecosistemas TikTok más vibrantes y prometedores globalmente, con más de 190 millones de usuarios activos en España, México, Argentina, Colombia y otros países de habla hispana. España lidera con 25,8 millones de usuarios (54,8% penetración) y RPM premium de €0.025-€0.038, mientras México domina en volumen con 72 millones de usuarios. La economía de creadores hispanohablantes alcanza los €1.8 mil millones en 2025, con un crecimiento proyectado del 42% para los próximos 12 meses. El mercado se caracteriza por contenido altamente viral, especialmente en música, baile, comedia y entretenimiento, que frecuentemente trasciende fronteras lingüísticas y se vuelve global.
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  La demografía hispanohablante en TikTok es excepcionalmente joven y comprometida: 67% de usuarios tienen entre 16-34 años, con distribución equilibrada de género (52% mujeres, 48% hombres). El tiempo promedio de uso diario es de 68 minutos, reflejando audiencias altamente enganchadas. Ciudades como Madrid, Barcelona, Ciudad de México, Buenos Aires, Bogotá y Lima concentran el 55% de la actividad, pero regiones secundarias muestran crecimiento explosivo de 58% interanual. El mercado hispanohablante valora autenticidad, humor, entretenimiento y conexión emocional, permitiendo que creadores con recursos limitados puedan volverse virales y monetizar efectivamente a través de engagement genuino y contenido relatable.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Estadísticas de Mercado y Crecimiento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-label-lg font-semibold text-primary-600 mb-2">190M+</p>
                    <p className="text-body-sm text-neutral-700">Usuarios activos en mercados hispanohablantes</p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                    <p className="text-label-lg font-semibold text-secondary-600 mb-2">45-55%</p>
                    <p className="text-body-sm text-neutral-700">Tasa de penetración promedio</p>
                  </div>
                  <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                    <p className="text-label-lg font-semibold text-success-600 mb-2">$0.020-$0.038</p>
                    <p className="text-body-sm text-neutral-700">Rango de tasas RPM del Fondo de Creadores</p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                    <p className="text-label-lg font-semibold text-info-600 mb-2">42% YoY</p>
                    <p className="text-body-sm text-neutral-700">Crecimiento en inversiones de marketing de influencers</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  La economía de creadores hispanohablantes alcanza €1.8 mil millones en 2025, con proyección de crecimiento del 42% para los siguientes 12 meses. Los sectores más activos son entretenimiento/comedia (35%), música y baile (22%), belleza y moda (18%), comida (15%) y lifestyle (10%). Marcas tanto locales como multinacionales invierten agresivamente en TikTok, con presupuestos que han crecido 180% desde 2023. España lidera en tasas RPM y valor por seguidor, mientras que México, Colombia y Argentina dominan en volumen y potencial viral. Los micro-influencers (10K-100K seguidores) capturan 71% de todas las colaboraciones de marca, con tasas de engagement de 7.8%, significativamente superiores a mega-influencers (2.1%).
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Métodos de Monetización Disponibles en Español
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      1. Fondo de Creadores TikTok
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      El Fondo de Creadores está disponible en mercados hispanohablantes con tasas que varían según el país: España €0.025-€0.038/1K vistas, México $0.020-$0.032, Argentina $0.018-$0.028, Colombia $0.019-$0.030. Requisitos: 10,000 seguidores y 100,000 vistas en 30 días. Pagos mensuales vía PayPal o transferencia. Aunque las tasas son moderadas, el alto potencial viral compensa: creadores con 2-3 millones de vistas mensuales ganan $400-$1,140 del Fondo, con top performers en nichos premium alcanzando $3,000-$8,000 mensuales combinando alto volumen con contenido especializado.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      2. Acuerdos con Marcas y Colaboraciones
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Los acuerdos de marca son la principal fuente de ingresos para creadores hispanohablantes. Tasas varían por mercado y tier: Micro (10K-50K) $200-$1,500/post en España, $150-$900 en México; Mid-tier (50K-250K) $1,500-$6,000 España, $900-$3,500 México; Macro (250K-1M) $6,000-$20,000 España, $3,500-$12,000 México; Mega (1M+) $20,000-$80,000+ en mercados premium. Marcas locales (Zara, Banco Santander, Mercado Libre, Rappi) y multinacionales colaboran activamente. Sectores más activos: e-commerce, fintech, belleza, food delivery, telecomunicaciones. Agencias como Samy Alliance, Influencity y Socialpubli facilitan conexiones.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      3. Regalos en LIVE y Streaming
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Los LIVE streams son extremadamente populares en el mercado hispanohablante, especialmente por la noche (20:00-24:00) y fines de semana. Creadores reciben 50% del valor de regalos virtuales. Streams regulares con 300-800 espectadores generan $500-$2,500 mensuales, mientras creadores establecidos con 2,500+ espectadores ganan $6,000-$20,000 por mes. Formatos populares: música en vivo, karaoke, comedia, challenges, Q&A, tutoriales de baile y gaming. Las audiencias hispanohablantes son especialmente generosas con creadores que conectan emocionalmente. "Metas de regalos" y eventos especiales multiplican ingresos por 3-5×.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      4. TikTok Shop y Comisiones de Afiliados
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      TikTok Shop ha lanzado o está expandiéndose en mercados hispanohablantes, transformando el social commerce. Comisiones de afiliado 5-30% según categoría. Creadores enfocados en fashion, tech, beauty y home generan $800-$8,000 mensuales de afiliados. Tasa de conversión promedio 2,9% supera canales tradicionales. Live selling es particularmente efectivo en español: creadores experimentados venden $15,000-$80,000 en productos en una sola live de 2-4 horas. Productos $10-$80 tienen mejor performance. Early adopters en nuevos mercados capturan share desproporcionado. Programas de afiliados también de Amazon, AliExpress y marketplaces locales complementan ingresos.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Consejos para el Éxito en TikTok Hispanohablante
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 font-bold text-lg mt-1">1.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Abraza la Cultura y el Humor Latino
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Crea contenido que celebre la cultura hispana: humor, música, tradiciones, jerga local y situaciones relacionables. El contenido que conecta emocionalmente viraliza 6× más. No temas usar expresiones coloquiales, referencias culturales y mostrar personalidad auténtica. Regionaliza para mercados específicos cuando sea posible - lo que funciona en España puede necesitar adaptación para México o Colombia, pero el contenido pan-hispano también funciona excelente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 font-bold text-lg mt-1">2.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Aprovecha el Potencial Viral de Música y Baile
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        El mercado hispanohablante domina trends musicales en TikTok globalmente. Reggaeton, trap latino, cumbia, salsa y pop español crean trends masivos. Participa en challenges de baile temprano, crea tus propios challenges con música trending. Colabora con otros creadores para amplificar alcance. El contenido musical hispanohablante frecuentemente cruza a audiencias no hispanohablantes, multiplicando potencial de crecimiento y monetización.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                    <span className="text-success-600 font-bold text-lg mt-1">3.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Optimiza Horarios de Publicación por Región
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Mejores horarios generales: 12:00-14:00 (almuerzo), 18:00-21:00 (tarde/noche), 21:00-24:00 (prime time). Ajusta según tu mercado principal: España +6h vs México para simultaneidad. Fines de semana 11:00-02:00 son extremadamente activos. Videos publicados en horarios óptimos reciben 62% más visualizaciones. Considera múltiples zonas horarias si tu audiencia es pan-hispana - programa 2-3 posts diarios en diferentes horas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-info-50 rounded-lg">
                    <span className="text-info-600 font-bold text-lg mt-1">4.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Construye Relaciones con Marcas Locales y Regionales
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Crea media kit profesional con analytics y demographics. Marcas hispanohablantes buscan micro-influencers con engagement real. Regístrate en plataformas como Influencity, Socialpubli, Influencer.in. Asiste a eventos de creators y networking local. Grandes retailers, fintechs y D2C brands están invirtiendo fuertemente en creators. Ofrece paquetes multi-plataforma (TikTok + Instagram + YouTube) para deals 2-3× más grandes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                    <span className="text-warning-600 font-bold text-lg mt-1">5.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Colabora y Crea Comunidad con Otros Creadores
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        La comunidad de creadores hispanohablantes es especialmente colaborativa. Colabs, duetos y trends grupales generan 4,5× más alcance que contenido solo. Únete a grupos de WhatsApp/Telegram de creators locales. Participa en meetups y eventos. Cross-promote con creadores de tamaño similar o complementario. Las "casas de creadores" y colectivos son populares - considera formar o unirte a uno para acelerar crecimiento exponencialmente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-neutral-600 font-bold text-lg mt-1">6.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Entiende Aspectos Fiscales y Legaliza tu Actividad
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Requisitos varían por país. España: alta como autónomo a partir de ciertos ingresos. México: SAT y RFC necesarios para ingresos consistentes. Argentina: monotributo o responsable inscripto. Marca contenido patrocinado claramente (#ad #publi #colaboración). Consulta contador/asesor especializado en influencers digitales para optimizar estructura fiscal - puede ahorrar 30-50% en impuestos con planificación correcta. Mantén registros detallados de ingresos y gastos deducibles.
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
            Preguntas Frecuentes
          </h2>
          <FAQSection faqs={[
            ...faqItems,
            {
              question: '¿Puedo monetizar TikTok si vivo en Latinoamérica?',
              answer: 'Absolutamente. El Fondo de Creadores está disponible en México, Brasil, Argentina, Colombia y más países. Aunque las tasas RPM son menores que Europa/USA, el alto volumen de visualizaciones compensa. Brand deals son abundantes - marcas locales y multinacionales buscan activamente creadores latinos. TikTok Shop en expansión ofrece oportunidades masivas. Live gifts funcionan excelente en LATAM. Muchos creadores latinos ganan $2,000-$15,000+/mes combinando múltiples fuentes de ingresos.',
            },
            {
              question: '¿Cómo puedo hacer que mi contenido sea viral en español?',
              answer: 'Claves para viralidad en español: 1) Usa música trending latina (reggaeton, trap, regional mexicano), 2) Participa temprano en challenges, 3) Contenido emocional y relatable, 4) Humor y comedia funcionan excelente, 5) Cuenta historias que conecten, 6) Usa jerga y expresiones locales, 7) Duetos y stitches con creadores populares, 8) Posting consistente 2-3×/día, 9) Aprovecha eventos culturales (Día de Muertos, Navidad latina, etc), 10) Hashtags estratégicos mixtos (locales + trending).',
            },
            {
              question: '¿Qué países hispanohablantes ofrecen mejores oportunidades?',
              answer: 'Por CPM/RPM: España (€0.025-€0.038) > Chile ($0.024-$0.035) > México ($0.020-$0.032) > Argentina/Colombia ($0.018-$0.030). Por volumen y viralidad: México lidera, seguido de España, Colombia y Argentina. Para brand deals: España ofrece tasas más altas, México mayor volumen. Para TikTok Shop: México y España son mercados prioritarios. Estrategia óptima: crear contenido pan-hispano para capturar todos los mercados simultáneamente - acento neutro o subtítulos expanden alcance 3-5×.',
            },
            {
              question: '¿Cuánto tiempo toma vivir de TikTok en español?',
              answer: 'Timeline realista para mercados hispanohablantes: 2-4 meses alcanzar 10K seguidores con posting consistente y contenido viral, 4-7 meses primeras colaboraciones pagadas ($300-$2,000), 7-11 meses ingresos regulares $1,500-$4,000/mes, 12-20 meses ingresos full-time $4,000-$12,000+/mes. 22% de creadores hispanohablantes alcanzan estos hitos más rápido con niche correcto, contenido altamente viral y enfoque en TikTok Shop. Live selling puede acelerar monetización 40-70%. Inversión inicial necesaria: $400-$1,800 en equipo básico.',
            },
          ]} pageName="calculator-es" />
        </div>

      </div>
      </div>
    </>
  );
}
