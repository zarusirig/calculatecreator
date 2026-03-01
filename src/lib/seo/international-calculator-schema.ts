interface FAQ {
  question: string;
  answer: string;
}

interface InternationalCalculatorSchemaConfig {
  locale: string;
  languageCode: string;
  countryName: string;
  title: string;
  description: string;
  url: string;
  faqs: FAQ[];
  currency?: string;
  rpmMin?: string;
  rpmMax?: string;
  guideTitle?: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateInternationalCalculatorSchemas(config: InternationalCalculatorSchemaConfig) {
  const {
    locale,
    languageCode,
    countryName,
    title,
    description,
    url,
    faqs,
    currency = 'USD',
    rpmMin,
    rpmMax,
    guideTitle,
    datePublished = '2025-01-15',
    dateModified = '2026-03-01',
  } = config;

  // Schema 1: WebApplication
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    description: description,
    url: url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currency,
    },
    featureList: [
      'Creator Fund earnings calculator',
      'Brand deal rate estimator',
      'LIVE gifts revenue calculator',
      'TikTok Shop commission calculator',
      'RPM/CPM analyzer',
      'Engagement rate calculator',
    ],
    inLanguage: languageCode,
    availableLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Deutsch', alternateName: 'de' },
      { '@type': 'Language', name: 'Español', alternateName: 'es' },
      { '@type': 'Language', name: 'Français', alternateName: 'fr' },
      { '@type': 'Language', name: 'Italiano', alternateName: 'it' },
      { '@type': 'Language', name: 'Português', alternateName: 'pt' },
      { '@type': 'Language', name: 'Bahasa Malaysia', alternateName: 'ms' },
    ],
    provider: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
    },
  };

  // Schema 2: WebPage
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: languageCode,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
    },
    about: {
      '@type': 'Thing',
      name: `TikTok monetization in ${countryName}`,
      description: `Calculator and guide for TikTok creators in ${countryName} to estimate earnings from Creator Fund, brand deals, and LIVE gifts.`,
    },
    ...(rpmMin &&
      rpmMax && {
        mainEntity: {
          '@type': 'FinancialProduct',
          name: `TikTok Creator Fund - ${countryName}`,
          description: `Estimated RPM rates: ${rpmMin}-${rpmMax} per 1,000 views`,
        },
      }),
  };

  // Schema 3: FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    inLanguage: languageCode,
  };

  // Schema 4: BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://calculatecreator.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Global TikTok Statistics',
        item: 'https://calculatecreator.com/region/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: countryName,
        item: url,
      },
    ],
  };

  // Schema 5: HowTo (NEW)
  const howToSteps: Record<string, { name: string; text: string }[]> = {
    de: [
      { name: 'Follower eingeben', text: 'Geben Sie Ihre aktuelle Follower-Anzahl in das Feld ein.' },
      { name: 'Monatliche Aufrufe eingeben', text: 'Tragen Sie Ihre durchschnittlichen monatlichen Videoaufrufe ein.' },
      { name: 'Engagement-Rate angeben', text: 'Geben Sie Ihre Engagement-Rate in Prozent an (Likes + Kommentare / Aufrufe × 100).' },
      { name: 'Nische auswählen', text: 'Wählen Sie Ihre Content-Nische aus dem Dropdown-Menü.' },
      { name: 'LIVE-Daten hinzufügen (optional)', text: 'Falls Sie streamen, geben Sie durchschnittliche Zuschauerzahl und monatliche Streams an.' },
      { name: 'Berechnen klicken', text: 'Klicken Sie auf "Einnahmen berechnen" um Ihre geschätzten Einnahmen zu sehen.' },
    ],
    es: [
      { name: 'Ingresa seguidores', text: 'Introduce tu número actual de seguidores en el campo.' },
      { name: 'Ingresa vistas mensuales', text: 'Introduce tu promedio de vistas mensuales de videos.' },
      { name: 'Indica tasa de engagement', text: 'Indica tu tasa de engagement en porcentaje (likes + comentarios / vistas × 100).' },
      { name: 'Selecciona nicho', text: 'Selecciona tu nicho de contenido del menú desplegable.' },
      { name: 'Añade datos LIVE (opcional)', text: 'Si transmites en vivo, indica espectadores promedio y streams mensuales.' },
      { name: 'Haz clic en calcular', text: 'Haz clic en "Calcular ganancias" para ver tus ingresos estimados.' },
    ],
    fr: [
      { name: 'Entrez vos abonnés', text: 'Saisissez votre nombre actuel d\'abonnés dans le champ.' },
      { name: 'Entrez les vues mensuelles', text: 'Indiquez votre moyenne de vues mensuelles de vidéos.' },
      { name: 'Indiquez le taux d\'engagement', text: 'Entrez votre taux d\'engagement en pourcentage (likes + commentaires / vues × 100).' },
      { name: 'Sélectionnez la niche', text: 'Choisissez votre niche de contenu dans le menu déroulant.' },
      { name: 'Ajoutez les données LIVE (optionnel)', text: 'Si vous faites des lives, indiquez les spectateurs moyens et streams mensuels.' },
      { name: 'Cliquez sur calculer', text: 'Cliquez sur "Calculer les revenus" pour voir vos gains estimés.' },
    ],
    it: [
      { name: 'Inserisci i follower', text: 'Inserisci il tuo numero attuale di follower nel campo.' },
      { name: 'Inserisci le visualizzazioni mensili', text: 'Inserisci la media delle tue visualizzazioni video mensili.' },
      { name: 'Indica il tasso di engagement', text: 'Inserisci il tuo tasso di engagement in percentuale (like + commenti / visualizzazioni × 100).' },
      { name: 'Seleziona la nicchia', text: 'Seleziona la tua nicchia di contenuto dal menu a discesa.' },
      { name: 'Aggiungi dati LIVE (opzionale)', text: 'Se fai streaming, indica spettatori medi e stream mensili.' },
      { name: 'Clicca su calcola', text: 'Clicca su "Calcola guadagni" per vedere i tuoi guadagni stimati.' },
    ],
    pt: [
      { name: 'Digite os seguidores', text: 'Insira o seu número atual de seguidores no campo.' },
      { name: 'Digite as visualizações mensais', text: 'Insira a média de visualizações mensais dos seus vídeos.' },
      { name: 'Indique a taxa de engajamento', text: 'Informe sua taxa de engajamento em porcentagem (curtidas + comentários / visualizações × 100).' },
      { name: 'Selecione o nicho', text: 'Selecione seu nicho de conteúdo no menu suspenso.' },
      { name: 'Adicione dados LIVE (opcional)', text: 'Se você faz lives, indique espectadores médios e streams mensais.' },
      { name: 'Clique em calcular', text: 'Clique em "Calcular ganhos" para ver seus ganhos estimados.' },
    ],
    ms: [
      { name: 'Masukkan pengikut', text: 'Masukkan jumlah pengikut semasa anda dalam medan.' },
      { name: 'Masukkan tontonan bulanan', text: 'Masukkan purata tontonan video bulanan anda.' },
      { name: 'Nyatakan kadar penglibatan', text: 'Nyatakan kadar penglibatan dalam peratus (suka + komen / tontonan × 100).' },
      { name: 'Pilih niche', text: 'Pilih niche kandungan anda dari menu lungsur.' },
      { name: 'Tambah data LIVE (pilihan)', text: 'Jika anda streaming, nyatakan penonton purata dan stream bulanan.' },
      { name: 'Klik kira', text: 'Klik "Kira pendapatan" untuk melihat anggaran pendapatan anda.' },
    ],
    en: [
      { name: 'Enter followers', text: 'Enter your current follower count in the field.' },
      { name: 'Enter monthly views', text: 'Enter your average monthly video views.' },
      { name: 'Set engagement rate', text: 'Enter your engagement rate as a percentage (likes + comments / views × 100).' },
      { name: 'Select niche', text: 'Select your content niche from the dropdown menu.' },
      { name: 'Add LIVE data (optional)', text: 'If you stream, enter average viewers and monthly streams.' },
      { name: 'Click calculate', text: 'Click "Calculate Earnings" to see your estimated earnings.' },
    ],
  };

  const howToNames: Record<string, string> = {
    de: 'So berechnen Sie TikTok-Einnahmen in Deutschland',
    es: 'Cómo calcular ganancias de TikTok en España',
    fr: 'Comment calculer les revenus TikTok en France',
    it: 'Come calcolare i guadagni TikTok in Italia',
    pt: 'Como calcular ganhos do TikTok no Brasil',
    ms: 'Cara mengira pendapatan TikTok di Malaysia',
    en: 'How to Calculate TikTok Earnings',
  };

  const steps = howToSteps[languageCode] || howToSteps.en;
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToNames[languageCode] || howToNames.en,
    description: description,
    totalTime: 'PT2M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    tool: {
      '@type': 'HowToTool',
      name: 'TikTok Money Calculator',
    },
  };

  // Schema 6: Article (NEW)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guideTitle || title,
    description: description,
    image: 'https://calculatecreator.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/logo.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: locale,
    about: {
      '@type': 'Thing',
      name: `TikTok monetization in ${countryName}`,
    },
  };

  return {
    softwareApplicationSchema,
    webPageSchema,
    faqSchema,
    breadcrumbSchema,
    howToSchema,
    articleSchema,
  };
}

export function generateSchemaScripts(config: InternationalCalculatorSchemaConfig): string {
  const schemas = generateInternationalCalculatorSchemas(config);

  return Object.values(schemas)
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join('\n');
}
