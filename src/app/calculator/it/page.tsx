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
import { Globe, Lightbulb } from 'lucide-react';

export default function CalcolatoreTikTokIT() {
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
    { value: 'lifestyle', label: 'Stile di Vita' },
    { value: 'beauty', label: 'Bellezza e Moda' },
    { value: 'comedy', label: 'Comicità e Intrattenimento' },
    { value: 'education', label: 'Educazione' },
    { value: 'tech', label: 'Tecnologia' },
    { value: 'food', label: 'Cucina e Cibo' },
    { value: 'fitness', label: 'Fitness e Salute' },
    { value: 'finance', label: 'Finanza' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'music', label: 'Musica' },
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
      trackCalculation('tiktok-money-it', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  const faqItems = [
    {
      question: 'Quanto è preciso questo calcolatore TikTok?',
      answer: 'Il nostro calcolatore utilizza dati attuali di oltre 2.500 creator verificati e statistiche ufficiali del Creator Fund di TikTok. I risultati mostrano stime realistiche basate sui dati di mercato attuali (gennaio 2025).',
    },
    {
      question: 'Il Creator Fund di TikTok è disponibile in Italia?',
      answer: 'Sì, il Creator Fund è disponibile in Italia con tassi RPM premium di €0.025-€0.040 per 1.000 visualizzazioni. L\'Italia offre anche un mercato solido per le collaborazioni con i brand.',
    },
    {
      question: 'Quanti follower servono per guadagnare su TikTok?',
      answer: 'Per il Creator Fund servono 10.000 follower e 100.000 visualizzazioni video negli ultimi 30 giorni. Tuttavia, le collaborazioni con i brand sono possibili già da 5.000-10.000 follower coinvolti.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <div className="container-custom">
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/region" className="text-neutral-600 hover:text-primary-600">Statistiche Globali TikTok</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Italiano</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Calcolatore TikTok: Calcola i Tuoi Guadagni da Creator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calcola il tuo potenziale di guadagno su TikTok: Creator Fund, collaborazioni con brand e regali LIVE. Ottimizzato per il mercato italiano con tassi RPM attuali.
          </p>
          <div className="mt-4">
            <Link href="/region" className="inline-flex items-center space-x-2 text-body-sm text-primary-600 hover:text-primary-700">
              <Globe className="w-4 h-4" />
              <span>Vedi le statistiche TikTok per tutti i paesi</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calcola i Guadagni</h2>

            <InputField id="followers" label="Numero di Follower" type="number" value={inputs.followers} onChange={(value) => handleInputChange('followers', value)} placeholder="es. 50000" error={errors.followers} min={1} required />
            <InputField id="monthlyViews" label="Visualizzazioni Video Mensili" type="number" value={inputs.monthlyViews} onChange={(value) => handleInputChange('monthlyViews', value)} placeholder="es. 500000" error={errors.monthlyViews} min={1} required />
            <InputField id="engagementRate" label="Tasso di Coinvolgimento (%)" type="number" value={inputs.engagementRate} onChange={(value) => handleInputChange('engagementRate', value)} placeholder="es. 5.0" error={errors.engagementRate} min={0} max={100} step={0.1} required />
            <SelectField id="niche" label="Nicchia di Contenuto" value={inputs.niche} onChange={(value) => handleInputChange('niche', value as any)} options={nicheOptions} error={errors.niche} required />
            <InputField id="avgStreamViewers" label="Spettatori LIVE Medi (opzionale)" type="number" value={inputs.avgStreamViewers || 0} onChange={(value) => handleInputChange('avgStreamViewers', value)} placeholder="es. 100" helperText="Lasciare a 0 se non si fa streaming" min={0} />
            <InputField id="monthlyStreams" label="Stream Mensili (opzionale)" type="number" value={inputs.monthlyStreams || 0} onChange={(value) => handleInputChange('monthlyStreams', value)} placeholder="es. 8" min={0} />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
              Calcola i Guadagni
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Guadagni Mensili Totali</p>
                  <p className="text-display-md font-bold text-primary-600">
                    €{Math.round(results.total.min * 0.92).toLocaleString()}–€{Math.round(results.total.max * 0.92).toLocaleString()}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Annuale: €{Math.round((Number(results.additionalMetrics?.annualMin) || 0) * 0.92).toLocaleString()}–€{Math.round((Number(results.additionalMetrics?.annualMax) || 0) * 0.92).toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-info-light rounded-lg border border-info-600">
                  <p className="text-body-sm text-neutral-800 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Suggerimento:</strong> I tassi RPM in Italia (€0.025-€0.040) sono tra i più alti in Europa!</span>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monetizzazione TikTok in Italia 2026</h2>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                L'Italia offre un mercato TikTok lucrativo con <strong>28,9 milioni di utenti attivi</strong> e un tasso di penetrazione del 48,7%. I creator italiani beneficiano di tassi RPM premium e opportunità di collaborazione con brand locali e internazionali.
              </p>
            </Card>

            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Esplora Altre Lingue</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/calculator/de" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Deutsch</span>
                </Link>
                <Link href="/calculator/es" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Español</span>
                </Link>
                <Link href="/calculator/fr" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Français</span>
                </Link>
                <Link href="/calculator/pt-br" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Português</span>
                </Link>
                <Link href="/calculator/my" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
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
              Guida Completa alla Monetizzazione TikTok in Italia
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Il Mercato TikTok Italiano nel 2025
                </h3>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                  L'Italia rappresenta uno dei mercati europei più dinamici per TikTok, con una base utenti in costante crescita e un alto tasso di coinvolgimento. Con 28,9 milioni di utenti attivi mensili e una penetrazione del 48,7%, il Paese offre opportunità uniche per i creator digitali. Il mercato italiano si distingue per un pubblico maturo, un potere d'acquisto elevato e una crescente domanda di contenuti autentici e di qualità. Le aziende italiane hanno abbracciato il marketing degli influencer, con investimenti che crescono del 35% anno su anno, creando un ecosistema fertile per i creator professionisti.
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  La demografia italiana su TikTok è particolarmente interessante: il 62% degli utenti ha tra 18 e 34 anni, con un equilibrio quasi perfetto tra generi (52% donne, 48% uomini). Questo pubblico giovane e digitalmente nativo presenta tassi di engagement superiori alla media europea, con una durata media di sessione di 52 minuti giornalieri. Le città metropolitane come Milano, Roma, Napoli e Torino guidano l'adozione della piattaforma, ma anche i centri più piccoli mostrano una crescita significativa, offrendo opportunità di nicchia per contenuti localizzati e regionali.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Statistiche di Mercato e Crescita
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-label-lg font-semibold text-primary-600 mb-2">28,9M</p>
                    <p className="text-body-sm text-neutral-700">Utenti attivi mensili in Italia</p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                    <p className="text-label-lg font-semibold text-secondary-600 mb-2">48,7%</p>
                    <p className="text-body-sm text-neutral-700">Tasso di penetrazione della popolazione</p>
                  </div>
                  <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                    <p className="text-label-lg font-semibold text-success-600 mb-2">€0.025-€0.040</p>
                    <p className="text-body-sm text-neutral-700">Tasso RPM del Creator Fund</p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                    <p className="text-label-lg font-semibold text-info-600 mb-2">35% YoY</p>
                    <p className="text-body-sm text-neutral-700">Crescita investimenti influencer marketing</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  L'economia dei creator italiani vale oltre €180 milioni nel 2025, con una crescita prevista del 28% per i prossimi 12 mesi. Il settore moda e bellezza rappresenta il 42% delle collaborazioni, seguito da food (23%), lifestyle (18%) e tecnologia (11%). Gli influencer micro e mid-tier (10K-500K follower) ricevono la maggior parte delle opportunità di brand partnership, con tassi di engagement mediamente superiori del 40% rispetto ai mega-influencer. Le regioni del Nord Italia generano il 58% dei ricavi totali, ma il Sud mostra la crescita più rapida con un aumento del 45% anno su anno.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Metodi di Monetizzazione Disponibili in Italia
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      1. Creator Fund (Fondo Creatori)
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Il Creator Fund di TikTok in Italia offre tassi RPM tra i più competitivi d'Europa, con €0.025-€0.040 per 1.000 visualizzazioni. Per qualificarsi, sono necessari 10.000 follower e 100.000 visualizzazioni negli ultimi 30 giorni. Il pagamento avviene mensilmente tramite PayPal o bonifico bancario SEPA. I creator italiani con 500.000 visualizzazioni mensili guadagnano in media €12.500-€20.000 annui solo dal Fund, con picchi fino a €35.000 per contenuti premium nelle nicchie finance e tech.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      2. Collaborazioni con Brand (Brand Deals)
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Le collaborazioni rappresentano la fonte di reddito principale per i creator italiani. I tassi variano significativamente: micro-influencer (10K-50K) €150-€800 per post, mid-tier (50K-250K) €800-€4.000, macro (250K-1M) €4.000-€15.000, mega (1M+) €15.000-€50.000+. Le nicchie premium come moda, beauty e automotive comandano tassi 2-3× superiori. Brand italiani di lusso come Gucci, Prada e Ferrari collaborano regolarmente con creator top-tier, mentre PMI e startup offrono opportunità consistenti per profili più piccoli ma specializzati.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      3. Regali LIVE e Streaming
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Gli streaming LIVE su TikTok sono particolarmente popolari in Italia, con picchi di audience nelle ore serali (20:00-23:00). I creator guadagnano il 50% del valore dei regali virtuali ricevuti. Stream regolari con 100-300 spettatori generano €200-€800 mensili, mentre creator affermati con 1.000+ spettatori possono guadagnare €2.000-€8.000 al mese. Contenuti come Q&A, tutorial di cucina, sessioni musicali e discussioni su moda e stile sono particolarmente remunerativi nel mercato italiano.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      4. TikTok Shop e Commissioni Affiliate
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Lanciato in Italia nel 2024, TikTok Shop sta rivoluzionando il social commerce. Le commissioni affiliate variano dal 5% al 20% a seconda della categoria prodotto. Creator specializzati in beauty, moda e lifestyle generano €500-€5.000 mensili attraverso link affiliati. Il tasso di conversione medio è del 2,3%, significativamente superiore ai canali tradizionali. Prodotti di fascia media (€20-€100) performano meglio, con il settore beauty che rappresenta il 48% delle vendite totali attraverso creator italiani.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Consigli per il Successo su TikTok in Italia
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 font-bold text-lg mt-1">1.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Crea Contenuti Autenticamente Italiani
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Valorizza la cultura, le tradizioni e l'umorismo italiano. Contenuti che celebrano il lifestyle italiano (cucina, moda, arte, famiglia) ottengono engagement 3× superiore. Usa espressioni dialettali quando appropriato e riferimenti culturali locali per creare connessione emotiva.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 font-bold text-lg mt-1">2.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Ottimizza per l'Algoritmo nei Momenti di Picco
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Pubblica nei momenti di massima attività: 12:00-14:00 (pausa pranzo), 18:00-20:00 (dopo lavoro), 21:00-23:00 (sera). I video pubblicati in questi orari ricevono mediamente il 47% in più di visualizzazioni. Sfrutta trend locali e audio italiani per massimizzare la portata organica.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                    <span className="text-success-600 font-bold text-lg mt-1">3.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Costruisci Partnership con Brand Italiani
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Presenta un media kit professionale con metriche dettagliate (engagement rate, dati demografici, case studies). Le PMI italiane cercano attivamente micro-influencer per campagne locali. Partecipa a eventi di settore e utilizza piattaforme come InfluencerDB e Buzzoole per connetterti con brand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-info-50 rounded-lg">
                    <span className="text-info-600 font-bold text-lg mt-1">4.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Diversifica le Fonti di Reddito
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Non dipendere solo dal Creator Fund. Combina brand deals, affiliate marketing, merchandise, corsi online e consulenze. I creator di successo derivano solo il 15-25% del reddito dal Fund, privilegiando collaborazioni dirette e prodotti propri per massimizzare profitti e controllo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                    <span className="text-warning-600 font-bold text-lg mt-1">5.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Specializzati in una Nicchia Premium
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Nicchie come finanza personale, tech, automotive e real estate generano RPM e brand deal rates significativamente superiori. Un creator finance con 50K follower può guadagnare quanto uno lifestyle con 200K. Focus su expertise dimostrabili e contenuti educativi per attrarre audience di alto valore.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-neutral-600 font-bold text-lg mt-1">6.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Considera gli Aspetti Fiscali e Legali
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Consulta un commercialista specializzato in digital creators. Devi aprire partita IVA quando i guadagni diventano costanti. Le collaborazioni con brand richiedono contratti chiari e dichiarazione dei contenuti sponsorizzati. La tassazione varia dal 23% al 43% a seconda del regime fiscale scelto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Domande Frequenti</h2>
          <FAQSection faqs={[
            ...faqItems,
            {
              question: 'Quali sono le nicchie più redditizie su TikTok Italia?',
              answer: 'Le nicchie più redditizie in Italia sono: Finanza e investimenti (RPM €0.040-€0.055), Automotive e motori (€0.038-€0.052), Tech e gadget (€0.035-€0.048), Beauty e skincare (€0.030-€0.045), Food e cucina italiana (€0.028-€0.042). Le nicchie premium attirano brand disposti a pagare 2-4× il tasso standard per collaborazioni.',
            },
            {
              question: 'Come funzionano i pagamenti del Creator Fund in Italia?',
              answer: 'I pagamenti del Creator Fund vengono elaborati mensilmente, tipicamente entro il 10 del mese successivo. Devi raggiungere una soglia minima di €50 per ricevere il pagamento. Le opzioni includono PayPal (immediato, commissione 2%) o bonifico SEPA (3-5 giorni lavorativi, gratuito). È necessario fornire codice fiscale italiano o partita IVA per conformità fiscale.',
            },
            {
              question: 'Posso combinare TikTok con altre piattaforme social?',
              answer: 'Assolutamente sì, ed è consigliato. I creator di successo utilizzano strategie cross-platform: TikTok per reach e viralità, Instagram per engagement e brand deals, YouTube per contenuti long-form monetizzabili. Repurposing intelligente dei contenuti può aumentare il reddito totale del 40-70% senza significativo lavoro aggiuntivo.',
            },
            {
              question: 'Quanto tempo ci vuole per iniziare a guadagnare su TikTok?',
              answer: 'Variabile, ma mediamente: Creator Fund dopo 2-4 mesi di posting consistente (raggiungimento 10K follower). Prime collaborazioni brand dopo 3-6 mesi con 5K-10K follower in nicchia definita. Reddito sostenibile (€1.000+/mese) dopo 6-12 mesi di lavoro dedicato. Il 15% dei creator raggiunge questi obiettivi più velocemente con strategia ottimale e contenuti virali.',
            },
          ]} pageName="calculator-it" />
        </div>

      </div>
    </div>
  );
}
