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

export default function CalculadoraTikTokPTBR() {
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
    { value: 'beauty', label: 'Beleza e Moda' },
    { value: 'comedy', label: 'Comédia e Entretenimento' },
    { value: 'education', label: 'Educação' },
    { value: 'tech', label: 'Tecnologia' },
    { value: 'food', label: 'Comida e Culinária' },
    { value: 'fitness', label: 'Fitness e Saúde' },
    { value: 'finance', label: 'Finanças' },
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
      trackCalculation('tiktok-money-pt-br', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  const faqItems = [
    {
      question: 'Quão precisa é esta calculadora TikTok?',
      answer: 'Nossa calculadora utiliza dados atuais de mais de 2.500 criadores verificados e estatísticas oficiais do Fundo de Criadores do TikTok. Os resultados mostram estimativas realistas baseadas em dados de mercado atuais (janeiro de 2026).',
    },
    {
      question: 'O Fundo de Criadores do TikTok está disponível no Brasil?',
      answer: 'Sim, o Fundo de Criadores está disponível no Brasil com taxas RPM de R$0.09-R$0.15 por 1.000 visualizações. O Brasil oferece o terceiro maior mercado TikTok do mundo com 84,1 milhões de usuários ativos.',
    },
    {
      question: 'Quantos seguidores preciso para ganhar dinheiro no TikTok?',
      answer: 'Para o Fundo de Criadores você precisa de 10.000 seguidores e 100.000 visualizações de vídeo nos últimos 30 dias. No entanto, parcerias com marcas são possíveis a partir de 5.000-10.000 seguidores engajados.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <div className="container-custom">
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Início</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/region" className="text-neutral-600 hover:text-primary-600">Estatísticas Globais TikTok</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Português (Brasil)</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Calculadora do TikTok: Calcule Seus Ganhos de Criador
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calcule seu potencial de ganhos no TikTok: Fundo de Criadores, parcerias com marcas e presentes em LIVE. Otimizado para o mercado brasileiro com taxas RPM atuais.
          </p>
          <div className="mt-4">
            <Link href="/region" className="inline-flex items-center space-x-2 text-body-sm text-primary-600 hover:text-primary-700">
              <Globe className="w-4 h-4" />
              <span>Ver estatísticas do TikTok para todos os países</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calcular Ganhos</h2>

            <InputField id="followers" label="Número de Seguidores" type="number" value={inputs.followers} onChange={(value) => handleInputChange('followers', value)} placeholder="ex. 50000" error={errors.followers} min={1} required />
            <InputField id="monthlyViews" label="Visualizações de Vídeo Mensais" type="number" value={inputs.monthlyViews} onChange={(value) => handleInputChange('monthlyViews', value)} placeholder="ex. 500000" error={errors.monthlyViews} min={1} required />
            <InputField id="engagementRate" label="Taxa de Engajamento (%)" type="number" value={inputs.engagementRate} onChange={(value) => handleInputChange('engagementRate', value)} placeholder="ex. 5.0" error={errors.engagementRate} min={0} max={100} step={0.1} required />
            <SelectField id="niche" label="Nicho de Conteúdo" value={inputs.niche} onChange={(value) => handleInputChange('niche', value as any)} options={nicheOptions} error={errors.niche} required />
            <InputField id="avgStreamViewers" label="Média de Espectadores em LIVE (opcional)" type="number" value={inputs.avgStreamViewers || 0} onChange={(value) => handleInputChange('avgStreamViewers', value)} placeholder="ex. 100" helperText="Deixar 0 se não faz lives" min={0} />
            <InputField id="monthlyStreams" label="Lives Mensais (opcional)" type="number" value={inputs.monthlyStreams || 0} onChange={(value) => handleInputChange('monthlyStreams', value)} placeholder="ex. 8" min={0} />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
              Calcular Ganhos
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Ganhos Mensais Totais</p>
                  <p className="text-display-md font-bold text-primary-600">
                    R${Math.round(results.total.min * 5.2).toLocaleString()}–R${Math.round(results.total.max * 5.2).toLocaleString()}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Anual: R${Math.round((Number(results.additionalMetrics?.annualMin) || 0) * 5.2).toLocaleString()}–R${Math.round((Number(results.additionalMetrics?.annualMax) || 0) * 5.2).toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-info-light rounded-lg border border-info-600">
                  <p className="text-body-sm text-neutral-800 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Dica:</strong> O Brasil é o terceiro maior mercado TikTok do mundo! Alto engajamento pode compensar taxas RPM mais baixas através de volume viral.</span>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monetização TikTok no Brasil 2026</h2>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                O Brasil oferece um dos maiores mercados TikTok do mundo com <strong>84,1 milhões de usuários ativos</strong> e uma taxa de penetração de 38,9%. Os criadores brasileiros se beneficiam de:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <div>
                    <strong className="text-neutral-900">Audiência Massiva e Engajada</strong>
                    <p className="text-body-sm text-neutral-600">Terceiro maior mercado global com alto potencial de viralização</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <div>
                    <strong className="text-neutral-900">TikTok Shop em Expansão</strong>
                    <p className="text-body-sm text-neutral-600">Oportunidades de e-commerce e comissões de afiliados</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Explorar Outros Idiomas</h3>
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
                <Link href="/calculator/it" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Italiano</span>
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
              Guia Completo de Monetização TikTok no Brasil
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  O Mercado TikTok Brasileiro em 2026
                </h3>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                  O Brasil representa o terceiro maior mercado TikTok do mundo, com impressionantes 84,1 milhões de usuários ativos mensais e uma taxa de penetração de 38,9%. O mercado brasileiro se destaca pelo altíssimo engajamento, com taxa de interação 2,8× superior à média global, e pela produção massiva de conteúdo viral que frequentemente transcende fronteiras. A economia de criadores brasileiros está avaliada em R$2,1 bilhões em 2026, com crescimento projetado de 45% nos próximos 12 meses, impulsionada pela expansão do TikTok Shop e pelo investimento crescente de marcas nacionais e multinacionais. O Brasil lidera a América Latina em criação de trends globais, especialmente em música, dança e entretenimento.
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  A demografia brasileira no TikTok é extremamente jovem e diversificada: 68% dos usuários têm entre 16 e 34 anos, com distribuição equilibrada entre gêneros (53% mulheres, 47% homens). O tempo médio de uso diário é de 73 minutos, um dos mais altos globalmente, refletindo o profundo engajamento da audiência. São Paulo, Rio de Janeiro, Brasília e Belo Horizonte lideram em volume de usuários, mas o Nordeste brasileiro mostra crescimento explosivo de 62% ano a ano, criando oportunidades para conteúdo regional e cultural. O mercado brasileiro valoriza autenticidade, humor, entretenimento e conteúdo relacionável, permitindo que criadores micro e nano consigam viralizar e monetizar efetivamente mesmo sem grandes investimentos iniciais.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Estatísticas do Mercado e Crescimento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-label-lg font-semibold text-primary-600 mb-2">84,1M</p>
                    <p className="text-body-sm text-neutral-700">Usuários ativos mensais no Brasil</p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                    <p className="text-label-lg font-semibold text-secondary-600 mb-2">38,9%</p>
                    <p className="text-body-sm text-neutral-700">Taxa de penetração da população</p>
                  </div>
                  <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                    <p className="text-label-lg font-semibold text-success-600 mb-2">R$0.09-R$0.15</p>
                    <p className="text-body-sm text-neutral-700">Taxa RPM do Fundo de Criadores</p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                    <p className="text-label-lg font-semibold text-info-600 mb-2">45% YoY</p>
                    <p className="text-body-sm text-neutral-700">Crescimento em investimentos de influencer marketing</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  A economia de criadores brasileiros alcança R$2,1 bilhões em 2026, com projeção de crescimento de 45% para os próximos 12 meses. Os setores mais ativos são entretenimento (32%), beleza (21%), lifestyle (18%), comida (15%) e música (14%). O TikTok Shop Brasil registrou crescimento de 230% em GMV ano a ano, tornando-se a plataforma de social commerce de mais rápido crescimento no país. Marcas brasileiras alocam crescentemente 40-55% de seus orçamentos de influencer marketing para TikTok, superando Instagram em algumas verticais. Micro-influencers (10K-100K seguidores) representam 68% das campanhas de marca, com taxas de engajamento médias de 8,7%, significativamente superiores aos mega-influencers (2,3%).
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Métodos de Monetização Disponíveis no Brasil
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      1. Fundo de Criadores TikTok
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      O Fundo de Criadores está disponível no Brasil com taxas RPM de R$0.09-R$0.15 por 1.000 visualizações. Os requisitos são 10.000 seguidores e 100.000 visualizações de vídeo nos últimos 30 dias. Pagamentos são feitos mensalmente via PayPal ou transferência bancária local (PIX disponível). Embora as taxas RPM sejam menores que mercados desenvolvidos, o volume massivo de visualizações no Brasil compensa: criadores virais com 5 milhões de visualizações mensais podem ganhar R$4.500-R$7.500 apenas do Fundo, com criadores top alcançando R$20.000-R$40.000 mensais através de conteúdo consistentemente viral em nichos premium.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      2. Parcerias com Marcas e Publis
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Parcerias de marca são a principal fonte de renda para criadores brasileiros. Taxas típicas: micro (10K-50K) R$500-R$3.000 por publi, mid-tier (50K-250K) R$3.000-R$12.000, macro (250K-1M) R$12.000-R$40.000, mega (1M+) R$40.000-R$150.000+. Marcas brasileiras como Magazine Luiza, Natura, Havaianas, Nubank e multinacionais ativas no país investem pesadamente em criadores TikTok. E-commerce, fintech, beleza e food delivery são os setores mais ativos. Agências como Squid, Youpix e Loud facilitam conexões, cobrando 15-20% de comissão. Publis em vídeos nativos performam 3,5× melhor que formatos tradicionais de anúncio.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      3. Presentes em LIVE e Streaming
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Lives são extremamente populares no Brasil, especialmente à noite (19h-23h) e finais de semana. Criadores recebem 50% do valor dos presentes virtuais. Lives regulares com 200-600 espectadores geram R$800-R$3.500 mensais, enquanto criadores estabelecidos com 2.000+ espectadores podem ganhar R$8.000-R$25.000 por mês. Formatos populares incluem gospel/louvor, sertanejo, funk, bate-papo, gameplay, "enquete ao vivo" e desafios. Brasileiros são generosos em presentear criadores que admiram, com picos durante eventos especiais e aniversários. Estratégia de "meta de presentes" funciona muito bem no mercado brasileiro.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      4. TikTok Shop e Comissões de Afiliados
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      O TikTok Shop Brasil explodiu em 2024-2026, tornando-se a forma mais rápida de monetizar para muitos criadores. Comissões variam de 5% a 30% dependendo da categoria. Criadores focados em fashion, eletrônicos, casa e beleza ganham R$2.000-R$18.000 mensais apenas com afiliados. Taxa de conversão média de 3,4% é uma das mais altas do mundo. Live commerce é particularmente efetivo: criadores experientes vendem R$30.000-R$150.000 em produtos numa única live de 2-3 horas. Produtos de R$20-R$120 têm melhor performance. Programa de afiliados oferece bônus agressivos e incentivos para top performers, com alguns creators ganhando mais do Shop que de todas as outras fontes combinadas.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Dicas para Sucesso no TikTok Brasil
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 font-bold text-lg mt-1">1.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Aposte na Brasilidade e Conteúdo Autêntico
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Valorize a cultura brasileira: humor, música, sotaques regionais, memes locais e situações relacionáveis do dia a dia brasileiro. Conteúdo que celebra a diversidade cultural (carnaval, festas juninas, comidas regionais) viraliza 5× mais. Seja autêntico e mostre sua personalidade real - o público brasileiro conecta com genuinidade, não com perfeição excessiva.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 font-bold text-lg mt-1">2.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Foque Pesado no TikTok Shop
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        O Brasil é um dos mercados mais aquecidos para TikTok Shop. Aprenda técnicas de live selling, escolha produtos com demanda comprovada e construa confiança com sua audiência. Muitos criadores brasileiros ganham 70-85% de sua renda do Shop versus outras fontes. Faça lives de vendas 2-3× por semana para maximizar ganhos. Produtos até R$100 convertem melhor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                    <span className="text-success-600 font-bold text-lg mt-1">3.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Poste nos Horários de Pico Brasileiros
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Melhores horários: 11h-13h (almoço), 17h-19h (pós-trabalho), 20h-23h (prime time noturno). Fins de semana das 10h-23h são extremamente ativos. Vídeos postados nesses horários recebem 68% mais visualizações. Use sons trending brasileiros e participe de challenges locais cedo. Brasil tem 3 fusos horários - considere sua audiência principal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-info-50 rounded-lg">
                    <span className="text-info-600 font-bold text-lg mt-1">4.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Construa Relacionamentos com Marcas Nacionais
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Crie um media kit profissional com métricas e cases. Marcas brasileiras valorizam micro-influencers com público engajado. Cadastre-se em plataformas como Squid, Youpix, Loud e Buzzmonitor. Participe de eventos de criadores e networking. Grandes varejistas (Magazine Luiza, Americanas, Mercado Livre) têm programas ativos de creators.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                    <span className="text-warning-600 font-bold text-lg mt-1">5.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Surfe nas Trends Mas Dê Seu Toque Brasileiro
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        O Brasil é famoso por criar e adaptar trends. Entre cedo em challenges globais, mas adicione um twist brasileiro único. Trends de dança, comédia e música performam excepcionalmente. Colabore com outros criadores brasileiros - colabs geram 4× mais alcance. Conteúdo viral brasileiro frequentemente cruza para outros países da América Latina.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-neutral-600 font-bold text-lg mt-1">6.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Entenda as Questões Fiscais e Formalize
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        A partir de R$28.000/ano em rendimentos, considere abrir MEI ou ME. Publis devem ser marcadas claramente (#publi #ad). Declare todos os rendimentos no IR como pessoa física ou jurídica. Contadores especializados em influencers digitais podem economizar 30-50% em impostos com planejamento correto. PIX facilita recebimentos, mas mantenha tudo documentado para Receita Federal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Perguntas Frequentes</h2>
          <FAQSection faqs={[
            ...faqItems,
            {
              question: 'Quais nichos são mais lucrativos no TikTok Brasil?',
              answer: 'Nichos mais lucrativos no Brasil: E-commerce/Reviews de produtos (ROI máximo com TikTok Shop), Entretenimento/Comédia (engajamento altíssimo, muitas publis), Beleza e maquiagem (marcas investem pesado), Fitness e emagrecimento (produtos digitais + afiliados), Finanças pessoais/investimentos (RPM premium, publis altas). Música, dança e humor dominam em volume, mas nichos educacionais premium pagam 3-5× mais por seguidor.',
            },
            {
              question: 'Como receber pagamentos do TikTok no Brasil?',
              answer: 'Fundo de Criadores paga via PayPal (taxa 4,4%) ou transferência internacional (3-5 dias úteis). Minimum para saque: R$100. TikTok Shop paga via Seller Center a cada 2 semanas direto em conta brasileira. Publis geralmente via PIX ou transferência bancária. Para valores >R$50k/ano, considere PJ para reduzir impostos. Sempre emita recibo/nota fiscal para grandes marcas.',
            },
            {
              question: 'Preciso de CNPJ para monetizar no TikTok?',
              answer: 'Não é obrigatório inicialmente, mas recomendado para ganhos consistentes. Pode começar como PF declarando no IR. Para publis >R$5.000, muitas marcas exigem NF (precisa CNPJ MEI/ME). Para TikTok Shop como vendedor, CNPJ facilita muito. MEI custa R$67/mês e permite faturar até R$81k/ano. Acima disso, considere ME ou SLU. Contador especializado em creators economiza muito imposto.',
            },
            {
              question: 'Quanto tempo para viver de TikTok no Brasil?',
              answer: 'Timeline realista: 2-4 meses para atingir 10K seguidores postando 2-3×/dia, 4-7 meses para primeiras publis (R$500-R$2.500), 6-10 meses para renda R$3.000-R$6.000/mês, 12-18 meses para renda full-time R$8.000-R$20.000/mês. 25% dos criadores brasileiros alcançam isso mais rápido com nicho certo e conteúdo viral. TikTok Shop pode acelerar timeline em 40-60% se você dominar live selling. Investimento inicial necessário: R$800-R$2.500 em equipamento.',
            },
          ]} pageName="calculator-pt-br" />
        </div>

      </div>
    </div>
  );
}
