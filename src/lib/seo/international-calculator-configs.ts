interface FAQ {
  question: string;
  answer: string;
}

interface CalculatorConfig {
  locale: string;
  languageCode: string;
  countryName: string;
  title: string;
  description: string;
  url: string;
  currency: string;
  rpmMin: string;
  rpmMax: string;
  guideTitle: string;
  faqs: FAQ[];
}

export const calculatorConfigs: Record<string, CalculatorConfig> = {
  de: {
    locale: 'de_DE',
    languageCode: 'de',
    countryName: 'Germany',
    title: 'TikTok Rechner: Einnahmen & Verdienstmöglichkeiten berechnen',
    description: 'Berechnen Sie Ihr Verdienstpotenzial auf TikTok: Creator Fund, Markendeals und LIVE Geschenke. Speziell optimiert für den deutschen Markt mit aktuellen RPM-Raten.',
    url: 'https://tiktokcalculator.net/calculator/de/',
    currency: 'EUR',
    rpmMin: '€0.030',
    rpmMax: '€0.048',
    guideTitle: 'Umfassender Leitfaden zur TikTok-Monetarisierung in Deutschland',
    faqs: [
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
    ],
  },
  es: {
    locale: 'es_ES',
    languageCode: 'es',
    countryName: 'Spain',
    title: 'Calculadora TikTok: Calcula tus Ganancias 2026',
    description: 'Calcula tu potencial de ganancias en TikTok: Creator Fund, patrocinios y regalos LIVE. Optimizado para el mercado español con tasas RPM actualizadas.',
    url: 'https://tiktokcalculator.net/calculator/es/',
    currency: 'EUR',
    rpmMin: '€0.025',
    rpmMax: '€0.038',
    guideTitle: 'Guía Completa de Monetización de TikTok en España',
    faqs: [
      {
        question: '¿Qué tan precisa es esta calculadora de TikTok?',
        answer: 'Nuestra calculadora utiliza datos actuales de más de 2.500 creadores verificados y estadísticas oficiales del Creator Fund de TikTok. Los resultados muestran estimaciones realistas basadas en datos de mercado actuales. Los ingresos reales pueden variar según el nicho, la audiencia y el engagement.',
      },
      {
        question: '¿Está disponible el Creator Fund de TikTok en España?',
        answer: 'Sí, el Creator Fund de TikTok está disponible en España. Los creadores españoles ganan en promedio €0.025-€0.038 por cada 1.000 visualizaciones. España también ofrece un mercado fuerte para acuerdos con marcas.',
      },
      {
        question: '¿Cuántos seguidores necesito para ganar dinero en TikTok?',
        answer: 'Para el Creator Fund necesitas 10.000 seguidores y 100.000 visualizaciones de video en los últimos 30 días. Sin embargo, los acuerdos con marcas son posibles desde 5.000-10.000 seguidores comprometidos, especialmente en nichos específicos.',
      },
      {
        question: '¿Qué opciones de monetización existen en España?',
        answer: 'Los creadores de TikTok en España pueden ganar a través de: Creator Fund (€0.025-€0.038/1K vistas), patrocinios de marcas (€100-€10.000+ por acuerdo según seguidores), regalos LIVE, comisiones de TikTok Shop y Spark Ads.',
      },
      {
        question: '¿Cómo se tributan los ingresos de TikTok en España?',
        answer: 'Los ingresos de TikTok deben declararse como ingresos. Como autónomo debes pagar IRPF y posiblemente darte de alta en el régimen de autónomos. Recomendamos consultar con un asesor fiscal para orientación personalizada.',
      },
    ],
  },
  fr: {
    locale: 'fr_FR',
    languageCode: 'fr',
    countryName: 'France',
    title: 'Calculateur TikTok: Calculez vos Revenus 2026',
    description: 'Calculez votre potentiel de gains sur TikTok: Creator Fund, partenariats de marque et cadeaux LIVE. Optimisé pour le marché français avec des taux RPM actualisés.',
    url: 'https://tiktokcalculator.net/calculator/fr/',
    currency: 'EUR',
    rpmMin: '€0.028',
    rpmMax: '€0.045',
    guideTitle: 'Guide Complet de Monétisation TikTok en France',
    faqs: [
      {
        question: 'Quelle est la précision de ce calculateur TikTok?',
        answer: 'Notre calculateur utilise des données actuelles de plus de 2.500 créateurs vérifiés et des statistiques officielles du Creator Fund TikTok. Les résultats montrent des estimations réalistes basées sur les données de marché actuelles. Les revenus réels peuvent varier selon la niche, l\'audience et l\'engagement.',
      },
      {
        question: 'Le Creator Fund TikTok est-il disponible en France?',
        answer: 'Oui, le Creator Fund TikTok est disponible en France. Les créateurs français gagnent en moyenne €0.028-€0.045 pour 1.000 vues, ce qui fait partie des meilleurs taux en Europe. La France offre également un marché solide pour les partenariats de marque.',
      },
      {
        question: 'Combien d\'abonnés faut-il pour gagner de l\'argent sur TikTok?',
        answer: 'Pour le Creator Fund, vous avez besoin de 10.000 abonnés et 100.000 vues de vidéo au cours des 30 derniers jours. Cependant, les partenariats de marque sont possibles dès 5.000-10.000 abonnés engagés, surtout dans des niches spécifiques.',
      },
      {
        question: 'Quelles sont les options de monétisation en France?',
        answer: 'Les créateurs TikTok en France peuvent gagner via: Creator Fund (€0.028-€0.045/1K vues), partenariats de marque (€100-€10.000+ par deal selon les abonnés), cadeaux LIVE, commissions TikTok Shop et Spark Ads.',
      },
      {
        question: 'Comment les revenus TikTok sont-ils imposés en France?',
        answer: 'Les revenus TikTok doivent être déclarés comme revenus. En tant qu\'auto-entrepreneur ou micro-entreprise, vous devez payer des impôts sur le revenu et cotisations sociales. Nous recommandons de consulter un expert-comptable pour des conseils personnalisés.',
      },
    ],
  },
  it: {
    locale: 'it_IT',
    languageCode: 'it',
    countryName: 'Italy',
    title: 'Calcolatore TikTok: Calcola i tuoi Guadagni 2026',
    description: 'Calcola il tuo potenziale di guadagno su TikTok: Creator Fund, sponsorizzazioni e regali LIVE. Ottimizzato per il mercato italiano con tassi RPM aggiornati.',
    url: 'https://tiktokcalculator.net/calculator/it/',
    currency: 'EUR',
    rpmMin: '€0.025',
    rpmMax: '€0.040',
    guideTitle: 'Guida Completa alla Monetizzazione TikTok in Italia',
    faqs: [
      {
        question: 'Quanto è preciso questo calcolatore TikTok?',
        answer: 'Il nostro calcolatore utilizza dati attuali da oltre 2.500 creatori verificati e statistiche ufficiali del Creator Fund TikTok. I risultati mostrano stime realistiche basate sui dati di mercato attuali. I guadagni effettivi possono variare in base alla nicchia, al pubblico e all\'engagement.',
      },
      {
        question: 'Il Creator Fund TikTok è disponibile in Italia?',
        answer: 'Sì, il Creator Fund TikTok è disponibile in Italia. I creatori italiani guadagnano in media €0.025-€0.040 per 1.000 visualizzazioni. L\'Italia offre anche un mercato forte per le sponsorizzazioni con i brand.',
      },
      {
        question: 'Quanti follower servono per guadagnare su TikTok?',
        answer: 'Per il Creator Fund servono 10.000 follower e 100.000 visualizzazioni video negli ultimi 30 giorni. Tuttavia, le sponsorizzazioni sono possibili già da 5.000-10.000 follower coinvolti, specialmente in nicchie specifiche.',
      },
      {
        question: 'Quali opzioni di monetizzazione esistono in Italia?',
        answer: 'I creatori TikTok in Italia possono guadagnare tramite: Creator Fund (€0.025-€0.040/1K views), sponsorizzazioni brand (€100-€10.000+ per deal in base ai follower), regali LIVE, commissioni TikTok Shop e Spark Ads.',
      },
      {
        question: 'Come vengono tassati i guadagni TikTok in Italia?',
        answer: 'I guadagni TikTok devono essere dichiarati come reddito. Come libero professionista o partita IVA, devi pagare IRPEF e contributi previdenziali. Raccomandiamo di consultare un commercialista per una consulenza personalizzata.',
      },
    ],
  },
  'pt-br': {
    locale: 'pt_BR',
    languageCode: 'pt',
    countryName: 'Brazil',
    title: 'Calculadora TikTok: Calcule seus Ganhos 2026',
    description: 'Calcule seu potencial de ganhos no TikTok: Creator Fund, parcerias com marcas e presentes LIVE. Otimizado para o mercado brasileiro com taxas RPM atualizadas.',
    url: 'https://tiktokcalculator.net/calculator/pt-br/',
    currency: 'BRL',
    rpmMin: 'R$0.09',
    rpmMax: 'R$0.15',
    guideTitle: 'Guia Completo de Monetização do TikTok no Brasil',
    faqs: [
      {
        question: 'Qual é a precisão desta calculadora TikTok?',
        answer: 'Nossa calculadora utiliza dados atuais de mais de 2.500 criadores verificados e estatísticas oficiais do Creator Fund TikTok. Os resultados mostram estimativas realistas baseadas em dados de mercado atuais. Os ganhos reais podem variar de acordo com o nicho, público e engajamento.',
      },
      {
        question: 'O Creator Fund do TikTok está disponível no Brasil?',
        answer: 'Sim, o Creator Fund do TikTok está disponível no Brasil. Criadores brasileiros ganham em média R$0.09-R$0.15 por 1.000 visualizações. O Brasil também oferece um mercado forte para parcerias com marcas.',
      },
      {
        question: 'Quantos seguidores preciso para ganhar dinheiro no TikTok?',
        answer: 'Para o Creator Fund você precisa de 10.000 seguidores e 100.000 visualizações de vídeo nos últimos 30 dias. No entanto, parcerias com marcas são possíveis a partir de 5.000-10.000 seguidores engajados, especialmente em nichos específicos.',
      },
      {
        question: 'Quais opções de monetização existem no Brasil?',
        answer: 'Criadores TikTok no Brasil podem ganhar através de: Creator Fund (R$0.09-R$0.15/1K views), parcerias com marcas (R$500-R$50.000+ por acordo conforme seguidores), presentes LIVE, comissões TikTok Shop e Spark Ads.',
      },
      {
        question: 'Como os ganhos do TikTok são tributados no Brasil?',
        answer: 'Os ganhos do TikTok devem ser declarados como renda. Como MEI ou autônomo, você deve pagar imposto de renda e contribuições. Recomendamos consultar um contador para orientação personalizada.',
      },
    ],
  },
  my: {
    locale: 'ms_MY',
    languageCode: 'ms',
    countryName: 'Malaysia',
    title: 'Kalkulator TikTok: Kira Pendapatan Anda 2026',
    description: 'Kira potensi pendapatan anda di TikTok: Creator Fund, tawaran jenama dan hadiah LIVE. Dioptimumkan untuk pasaran Malaysia dengan kadar RPM terkini.',
    url: 'https://tiktokcalculator.net/calculator/my/',
    currency: 'MYR',
    rpmMin: 'RM0.08',
    rpmMax: 'RM0.13',
    guideTitle: 'Panduan Lengkap Monetisasi TikTok di Malaysia',
    faqs: [
      {
        question: 'Sejauh mana ketepatan kalkulator TikTok ini?',
        answer: 'Kalkulator kami menggunakan data semasa daripada lebih 2,500 pencipta yang disahkan dan statistik rasmi TikTok Creator Fund. Keputusan menunjukkan anggaran realistik berdasarkan data pasaran semasa. Pendapatan sebenar boleh berbeza mengikut niche, penonton dan engagement.',
      },
      {
        question: 'Adakah TikTok Creator Fund tersedia di Malaysia?',
        answer: 'Ya, TikTok Creator Fund tersedia di Malaysia. Pencipta Malaysia memperoleh purata RM0.08-RM0.13 setiap 1,000 tontonan. Malaysia juga menawarkan pasaran yang kukuh untuk tawaran jenama.',
      },
      {
        question: 'Berapa ramai pengikut yang diperlukan untuk menjana wang di TikTok?',
        answer: 'Untuk Creator Fund anda memerlukan 10,000 pengikut dan 100,000 tontonan video dalam 30 hari lepas. Walau bagaimanapun, tawaran jenama boleh didapati daripada 5,000-10,000 pengikut yang aktif, terutamanya dalam niche tertentu.',
      },
      {
        question: 'Apakah pilihan monetisasi yang wujud di Malaysia?',
        answer: 'Pencipta TikTok di Malaysia boleh menjana pendapatan melalui: Creator Fund (RM0.08-RM0.13/1K tontonan), tawaran jenama (RM500-RM50,000+ setiap perjanjian mengikut pengikut), hadiah LIVE, komisen TikTok Shop dan Spark Ads.',
      },
      {
        question: 'Bagaimana pendapatan TikTok dikenakan cukai di Malaysia?',
        answer: 'Pendapatan TikTok mesti diisytiharkan sebagai pendapatan. Sebagai peniaga tunggal atau freelancer, anda perlu membayar cukai pendapatan. Kami mengesyorkan berunding dengan akauntan bertauliah untuk nasihat peribadi.',
      },
    ],
  },
};

export function getCalculatorConfig(lang: string): CalculatorConfig | undefined {
  return calculatorConfigs[lang];
}
