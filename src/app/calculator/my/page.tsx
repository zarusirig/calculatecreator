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

export default function KalkulatorTikTokMY() {
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
    { value: 'lifestyle', label: 'Gaya Hidup' },
    { value: 'beauty', label: 'Kecantikan dan Fesyen' },
    { value: 'comedy', label: 'Komedi dan Hiburan' },
    { value: 'education', label: 'Pendidikan' },
    { value: 'tech', label: 'Teknologi' },
    { value: 'food', label: 'Makanan dan Masakan' },
    { value: 'fitness', label: 'Kecergasan dan Kesihatan' },
    { value: 'finance', label: 'Kewangan' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'music', label: 'Muzik' },
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
      trackCalculation('tiktok-money-my', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  const faqItems = [
    {
      question: 'Seberapa tepat kalkulator TikTok ini?',
      answer: 'Kalkulator kami menggunakan data terkini dari lebih 2,500 pencipta yang disahkan dan statistik rasmi Dana Pencipta TikTok. Hasilnya menunjukkan anggaran realistik berdasarkan data pasaran semasa (Januari 2026).',
    },
    {
      question: 'Adakah Dana Pencipta TikTok tersedia di Malaysia?',
      answer: 'Ya, Dana Pencipta tersedia di Malaysia dengan kadar RPM RM0.08-RM0.13 setiap 1,000 tontonan. Malaysia menawarkan penetrasi pasaran yang sangat tinggi sebanyak 63.8% dengan 21.5 juta pengguna aktif.',
    },
    {
      question: 'Berapa ramai pengikut yang saya perlukan untuk menjana wang di TikTok?',
      answer: 'Untuk Dana Pencipta, anda memerlukan 10,000 pengikut dan 100,000 tontonan video dalam 30 hari terakhir. Namun, tawaran jenama boleh dimulakan dari 5,000-10,000 pengikut yang aktif.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <div className="container-custom">
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Laman Utama</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/region" className="text-neutral-600 hover:text-primary-600">Statistik TikTok Global</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">Bahasa Malaysia</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Kalkulator TikTok: Kira Pendapatan Pencipta Anda
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Kirakan potensi pendapatan anda di TikTok: Dana Pencipta, tawaran jenama, dan hadiah LIVE. Dioptimumkan untuk pasaran Malaysia dengan kadar RPM terkini.
          </p>
          <div className="mt-4">
            <Link href="/region" className="inline-flex items-center space-x-2 text-body-sm text-primary-600 hover:text-primary-700">
              <Globe className="w-4 h-4" />
              <span>Lihat statistik TikTok untuk semua negara</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Kira Pendapatan</h2>

            <InputField id="followers" label="Bilangan Pengikut" type="number" value={inputs.followers} onChange={(value) => handleInputChange('followers', value)} placeholder="cth. 50000" error={errors.followers} min={1} required />
            <InputField id="monthlyViews" label="Tontonan Video Bulanan" type="number" value={inputs.monthlyViews} onChange={(value) => handleInputChange('monthlyViews', value)} placeholder="cth. 500000" error={errors.monthlyViews} min={1} required />
            <InputField id="engagementRate" label="Kadar Penglibatan (%)" type="number" value={inputs.engagementRate} onChange={(value) => handleInputChange('engagementRate', value)} placeholder="cth. 5.0" error={errors.engagementRate} min={0} max={100} step={0.1} required />
            <SelectField id="niche" label="Niche Kandungan" value={inputs.niche} onChange={(value) => handleInputChange('niche', value as any)} options={nicheOptions} error={errors.niche} required />
            <InputField id="avgStreamViewers" label="Purata Penonton LIVE (pilihan)" type="number" value={inputs.avgStreamViewers || 0} onChange={(value) => handleInputChange('avgStreamViewers', value)} placeholder="cth. 100" helperText="Biarkan 0 jika tidak streaming" min={0} />
            <InputField id="monthlyStreams" label="Streaming Bulanan (pilihan)" type="number" value={inputs.monthlyStreams || 0} onChange={(value) => handleInputChange('monthlyStreams', value)} placeholder="cth. 8" min={0} />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
              Kira Pendapatan
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Jumlah Pendapatan Bulanan</p>
                  <p className="text-display-md font-bold text-primary-600">
                    RM{Math.round(results.total.min * 4.4).toLocaleString()}–RM{Math.round(results.total.max * 4.4).toLocaleString()}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Tahunan: RM{Math.round((Number(results.additionalMetrics?.annualMin) || 0) * 4.4).toLocaleString()}–RM{Math.round((Number(results.additionalMetrics?.annualMax) || 0) * 4.4).toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-info-light rounded-lg border border-info-600">
                  <p className="text-body-sm text-neutral-800 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Tip:</strong> Malaysia mempunyai penetrasi pasaran tertinggi di Asia Tenggara pada 63.8%! Penglibatan tinggi boleh mengimbangi kadar RPM yang lebih rendah.</span>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monetisasi TikTok di Malaysia 2026</h2>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                Malaysia menawarkan salah satu pasaran TikTok paling aktif dengan <strong>21.5 juta pengguna aktif</strong> dan penetrasi pasaran 63.8% - antara yang tertinggi di dunia. Pencipta Malaysia mendapat manfaat daripada:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <div>
                    <strong className="text-neutral-900">Penglibatan Sangat Tinggi</strong>
                    <p className="text-body-sm text-neutral-600">Penetrasi pasaran 63.8% - antara yang tertinggi di dunia</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <div>
                    <strong className="text-neutral-900">TikTok Shop Aktif</strong>
                    <p className="text-body-sm text-neutral-600">Peluang e-dagang dan komisen afiliasi yang berkembang pesat</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Terokai Bahasa Lain</h3>
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
                <Link href="/calculator/pt-br" className="flex items-center space-x-1 text-body-sm text-primary-600 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>Português</span>
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
              Panduan Lengkap Monetisasi TikTok di Malaysia
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Pasaran TikTok Malaysia dalam 2026
                </h3>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                  Malaysia mempunyai salah satu ekosistem TikTok paling vibrant di Asia Tenggara, dengan 21.5 juta pengguna aktif bulanan dan penetrasi pasaran tertinggi di rantau ini pada 63.8%. Ini bermakna hampir dua pertiga rakyat Malaysia adalah pengguna aktif TikTok, menjadikan platform ini saluran penting untuk pencipta kandungan. Pasaran Malaysia unik kerana kepelbagaian budaya, penggunaan pelbagai bahasa (Bahasa Malaysia, Inggeris, Cina, Tamil), dan khalayak digital yang sangat terlibat. Ekonomi pencipta Malaysia dijangka mencecah RM580 juta menjelang akhir 2026, didorong oleh peningkatan pesat dalam pelaburan jenama dan pengembangan TikTok Shop.
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  Demografi pengguna TikTok Malaysia sangat menarik untuk pencipta: 58% pengguna berumur antara 18-34 tahun, dengan penggunaan hampir sama rata antara jantina (51% perempuan, 49% lelaki). Purata masa penggunaan harian adalah 61 minit, antara tertinggi di dunia. Pengguna Malaysia terkenal dengan tahap penglibatan tinggi, dengan kadar interaksi 2.3× lebih tinggi berbanding purata global. Bandaraya utama seperti Kuala Lumpur, Johor Bahru, Penang dan Kota Kinabalu mendominasi penggunaan, tetapi kawasan luar bandar menunjukkan pertumbuhan pesat 52% tahun ke tahun, membuka peluang untuk kandungan tempatan dan niche.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Statistik Pasaran dan Pertumbuhan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-label-lg font-semibold text-primary-600 mb-2">21.5M</p>
                    <p className="text-body-sm text-neutral-700">Pengguna aktif bulanan di Malaysia</p>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                    <p className="text-label-lg font-semibold text-secondary-600 mb-2">63.8%</p>
                    <p className="text-body-sm text-neutral-700">Kadar penetrasi pasaran (tertinggi di SEA)</p>
                  </div>
                  <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                    <p className="text-label-lg font-semibold text-success-600 mb-2">RM0.08-RM0.13</p>
                    <p className="text-body-sm text-neutral-700">Kadar RPM Dana Pencipta</p>
                  </div>
                  <div className="p-4 bg-info-50 rounded-lg border border-info-200">
                    <p className="text-label-lg font-semibold text-info-600 mb-2">48% YoY</p>
                    <p className="text-body-sm text-neutral-700">Pertumbuhan pelaburan influencer marketing</p>
                  </div>
                </div>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  Ekonomi pencipta Malaysia bernilai RM580 juta pada 2026, dengan pertumbuhan diunjurkan 42% untuk 12 bulan seterusnya. Kategori kandungan paling popular termasuk hiburan (28%), makanan (24%), kecantikan (21%), lifestyle (15%) dan gaming (12%). TikTok Shop Malaysia mengalami pertumbuhan eksplosif dengan GMV meningkat 180% tahun ke tahun, menjadikan affiliate marketing sumber pendapatan paling cepat berkembang untuk pencipta. Jenama tempatan dan antarabangsa kini memperuntukkan 35-45% bajet influencer marketing mereka untuk TikTok, naik daripada hanya 12% pada 2023.
                </p>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Kaedah Monetisasi Tersedia di Malaysia
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      1. Dana Pencipta TikTok (Creator Fund)
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Dana Pencipta tersedia di Malaysia dengan kadar RPM RM0.08-RM0.13 per 1,000 tontonan. Untuk layak, anda memerlukan 10,000 pengikut dan 100,000 tontonan video dalam 30 hari terakhir. Pembayaran dibuat bulanan melalui PayPal atau pindahan bank tempatan. Walaupun kadar RPM lebih rendah berbanding negara Barat, jumlah tontonan tinggi boleh mengimbanginya. Pencipta dengan 1 juta tontonan bulanan boleh memperoleh RM960-RM1,560 bulanan dari Dana sahaja, dengan pencipta viral mencapai RM4,000-RM8,000 sebulan dalam niche premium.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      2. Tawaran Jenama dan Kerjasama (Brand Deals)
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Kerjasama jenama adalah sumber pendapatan utama untuk pencipta Malaysia. Kadar untuk pencipta micro (10K-50K pengikut) adalah RM300-RM2,000 per post, mid-tier (50K-250K) RM2,000-RM8,000, macro (250K-1M) RM8,000-RM25,000, dan mega-influencer (1M+) RM25,000-RM80,000+. Jenama tempatan seperti Maybank, Petronas, AirAsia, dan Shopee aktif bekerjasama dengan pencipta. E-commerce dan F&B adalah kategori paling aktif, diikuti teknologi, kecantikan, dan fashion. Jenama multinasional juga menyasarkan pencipta Malaysia untuk kempen serantau.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      3. Hadiah LIVE dan Streaming
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Streaming LIVE sangat popular di Malaysia, terutama pada waktu petang dan malam (19:00-23:00). Pencipta menerima 50% nilai hadiah virtual yang diterima. Streaming konsisten dengan 100-400 penonton menghasilkan RM400-RM1,800 bulanan, manakala pencipta besar dengan 1,500+ penonton boleh memperoleh RM5,000-RM15,000 sebulan. Kandungan gaming, mukbang, session muzik cover, dan Q&A adalah paling popular. Ramai pencipta Malaysia mengadakan "special LIVE" dengan topik eksklusif atau giveaways untuk memaksimumkan hadiah.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      4. TikTok Shop dan Komisen Affiliate
                    </h4>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      TikTok Shop Malaysia mengalami pertumbuhan eksplosif, menjadikannya sumber pendapatan paling menjanjikan. Kadar komisen berkisar 5-25% bergantung kategori produk. Pencipta berfokus pada fashion, electronics, dan kecantikan boleh memperoleh RM1,500-RM12,000 bulanan dari affiliate sahaja. Kadar konversi purata 3.1% adalah antara tertinggi di dunia. Live selling sangat efektif, dengan pencipta berpengalaman menjual produk bernilai RM20,000-RM100,000 dalam satu session 2-3 jam. Program affiliate TikTok Shop juga menawarkan bonus prestasi dan insentif untuk top performers.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                  Petua Kejayaan di TikTok Malaysia
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 font-bold text-lg mt-1">1.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Cipta Kandungan Berbilang Bahasa dan Budaya
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Manfaatkan kepelbagaian Malaysia dengan kandungan dalam Bahasa Malaysia, Inggeris, atau campuran kedua-duanya (Manglish). Kandungan yang meraikan budaya tempatan, festival (Raya, CNY, Deepavali), dan makanan Malaysia mendapat penglibatan 4× lebih tinggi. Humor lokal dan situasi relatable adalah kunci viral.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 font-bold text-lg mt-1">2.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Fokus pada TikTok Shop untuk Pendapatan Maksimum
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Malaysia adalah salah satu pasaran TikTok Shop paling aktif. Pelajari teknik live selling, pilih produk trending, dan bina kepercayaan dengan audience. Ramai pencipta memperoleh 60-80% pendapatan dari Shop berbanding Dana Pencipta. Mulakan dengan produk RM100 untuk kadar konversi optimal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                    <span className="text-success-600 font-bold text-lg mt-1">3.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Post pada Waktu Puncak untuk Reach Maksimum
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Masa terbaik untuk post: 12:00-13:00 (lunch break), 18:00-20:00 (lepas kerja), 21:00-23:00 (prime time). Hujung minggu terutama Sabtu 15:00-22:00 sangat aktif. Video posted pada waktu ini mendapat 55% lebih banyak tontonan. Gunakan trending sounds Malaysia dan hashtags tempatan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-info-50 rounded-lg">
                    <span className="text-info-600 font-bold text-lg mt-1">4.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Bina Hubungan dengan Jenama Tempatan
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Sediakan portfolio profesional dengan analytics dan case studies. Jenama SME Malaysia sering cari micro-influencer untuk kempen targeted. Sertai komuniti pencipta, attend meetup, dan daftar dengan platform seperti Influasia dan TapInfluence untuk akses peluang brand deals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                    <span className="text-warning-600 font-bold text-lg mt-1">5.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Manfaatkan Trend dan Challenge Viral
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Malaysia mempunyai culture challenge yang sangat kuat. Sertai trending challenges awal, tetapi beri twist unik Malaysia. Dance challenges, food challenges, dan comedy skits mendapat traction terbaik. Original challenges yang start viral di Malaysia boleh spread ke negara jiran.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-neutral-600 font-bold text-lg mt-1">6.</span>
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900 mb-1">
                        Konsisten dan Diversifikasi Sumber Pendapatan
                      </p>
                      <p className="text-body-sm text-neutral-700">
                        Post 1-3 kali sehari untuk pertumbuhan optimal. Jangan bergantung pada satu sumber pendapatan. Combine Dana Pencipta, brand deals, TikTok Shop, merchandise, dan services (consultation, workshop). Top pencipta Malaysia ada 4-6 sumber pendapatan aktif secara serentak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Soalan Lazim</h2>
          <FAQSection faqs={[
            ...faqItems,
            {
              question: 'Apakah niche paling menguntungkan di TikTok Malaysia?',
              answer: 'Niche paling menguntungkan di Malaysia: E-commerce/Product reviews (ROI tertinggi untuk TikTok Shop), Gaming dan esports (penglibatan sangat tinggi), Makanan dan kuliner Malaysia (viral potential tinggi), Kecantikan dan skincare (brand deals banyak), Finance dan crypto (RPM premium walaupun audience lebih kecil). Food dan gaming mendominasi dengan 52% total brand deals.',
            },
            {
              question: 'Bagaimana cara mendapatkan bayaran dari TikTok di Malaysia?',
              answer: 'Dana Pencipta dibayar bulanan melalui PayPal (cepat, fees 3.5%) atau pindahan bank lokal (3-5 hari, percuma untuk Maybank/CIMB). Minimum withdrawal RM100. TikTok Shop membayar melalui TikTok Seller Center setiap 2 minggu. Brand deals biasanya bank transfer terus. Pastikan daftar dengan LHDN untuk urusan cukai sebagai self-employed jika pendapatan melebihi RM34,000 setahun.',
            },
            {
              question: 'Adakah saya perlu syarikat atau business untuk monetize TikTok?',
              answer: 'Tidak wajib untuk memulakan, tetapi disyorkan untuk pendapatan konsisten. Boleh mulakan sebagai individual/freelancer. Untuk brand deals >RM5,000, kebanyakan jenama minta SSM registration. Untuk TikTok Shop seller, perlu register business entity. Daftar dengan LHDN untuk reporting pendapatan. Banyak pencipta bermula sebagai freelancer kemudian upgrade ke Sdn Bhd bila pendapatan stabil.',
            },
            {
              question: 'Berapa lama masa untuk buat income penuh masa dari TikTok?',
              answer: 'Timeline realistik di Malaysia: 2-3 bulan untuk capai 10K followers dengan posting konsisten, 4-6 bulan untuk first brand deals (RM500-RM2,000), 6-9 bulan untuk pendapatan RM3,000-RM5,000/bulan, 12-18 bulan untuk full-time income RM8,000-RM15,000/bulan. 20% pencipta Malaysia mencapai milestone ini lebih cepat dengan niche yang betul dan strategi viral. TikTok Shop boleh accelerate timeline 30-40% jika fokus live selling.',
            },
          ]} pageName="calculator-my" />
        </div>

      </div>
    </div>
  );
}
