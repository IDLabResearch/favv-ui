export const LANGUAGES = ['nl', 'fr', 'de', 'en'] as const

export type Language = (typeof LANGUAGES)[number]

type LocalizedText = Record<Language, string>

type PropertyLabels = {
  province: string
  postcode: string
  city: string
  activity: string
  activityDescription: string
  productDescription: string
  certificationDescription: string
  certificationForm: string
  certificationStartDate: string
  lastUpdated: string
}

type TabLabels = {
  ariaLabel: string
  search: string
  changes: string
}

type StreamLabels = {
  title: string
  subtitle: string
  liveHint: string
  loadingTitle: string
  loadingHint: string
  entity: string
  field: string
  from: string
  to: string
  actions: Record<'created' | 'updated' | 'removed', string>
}

export type UiLocale = {
  eyebrow: string
  heading: string
  introCopy: string
  searchLabel: string
  searchPlaceholder: string
  resultsFound: (n: number) => string
  noResults: string
  noResultsHint: string
  expandLabel: string
  collapseLabel: string
  tabs: TabLabels
  stream: StreamLabels
  props: PropertyLabels
}

export const ui: Record<Language, UiLocale> = {
  en: {
    eyebrow: 'FAVV Lookup',
    heading: 'Find FAVV certified providers',
    introCopy: 'Search by provider name, certificate number, city, or activity.',
    searchLabel: 'Search providers',
    searchPlaceholder: 'Try: Zelzate, meals, or AER/WVL/044783',
    resultsFound: (n) => `${n} provider(s) found`,
    noResults: 'No providers match your search',
    noResultsHint: 'Try a broader term or search by certificate number.',
    expandLabel: 'Expand details',
    collapseLabel: 'Collapse details',
    tabs: {
      ariaLabel: 'Feature tabs',
      search: 'Search Providers',
      changes: 'Latest Changes',
    },
    stream: {
      title: 'Latest Entity Changes',
      subtitle:
        'Switch to the changes stream to monitor recent entity updates in real time.',
      liveHint: 'This mocked stream simulates incoming API updates every few seconds.',
      loadingTitle: 'Starting stream',
      loadingHint: 'Fetching the latest mocked entity changes...',
      entity: 'Entity',
      field: 'Field',
      from: 'From',
      to: 'To',
      actions: {
        created: 'Created',
        updated: 'Updated',
        removed: 'Removed',
      },
    },
    props: {
      province: 'Province',
      postcode: 'Postcode',
      city: 'City',
      activity: 'Activity',
      activityDescription: 'Activity Description',
      productDescription: 'Product Description',
      certificationDescription: 'Certification Description',
      certificationForm: 'Certification Form',
      certificationStartDate: 'Certification Start Date',
      lastUpdated: 'Last Updated',
    },
  },
  nl: {
    eyebrow: 'FAVV Opzoeking',
    heading: 'Zoek FAVV erkende aanbieders',
    introCopy: 'Zoek op naam, erkenningsnummer, gemeente of activiteit.',
    searchLabel: 'Zoek aanbieders',
    searchPlaceholder: 'Probeer: Zelzate, maaltijden of AER/WVL/044783',
    resultsFound: (n) => `${n} aanbieder(s) gevonden`,
    noResults: 'Geen aanbieders gevonden',
    noResultsHint: 'Probeer een algemenere zoekterm of een erkenningsnummer.',
    expandLabel: 'Details uitklappen',
    collapseLabel: 'Details inklappen',
    tabs: {
      ariaLabel: 'Functietabs',
      search: 'Zoek aanbieders',
      changes: 'Laatste wijzigingen',
    },
    stream: {
      title: 'Laatste entiteitswijzigingen',
      subtitle:
        'Schakel naar de wijzigingenstroom om recente entiteitsupdates live te volgen.',
      liveHint:
        'Deze gemockte stroom simuleert API-updates die elke paar seconden binnenkomen.',
      loadingTitle: 'Stroom wordt gestart',
      loadingHint: 'De nieuwste gemockte wijzigingen worden opgehaald...',
      entity: 'Entiteit',
      field: 'Veld',
      from: 'Van',
      to: 'Naar',
      actions: {
        created: 'Aangemaakt',
        updated: 'Bijgewerkt',
        removed: 'Verwijderd',
      },
    },
    props: {
      province: 'Provincie',
      postcode: 'Postcode',
      city: 'Gemeente',
      activity: 'Activiteit',
      activityDescription: 'Activiteitsomschrijving',
      productDescription: 'Productomschrijving',
      certificationDescription: 'Erkenningsomschrijving',
      certificationForm: 'Erkenningsvorm',
      certificationStartDate: 'Begindatum erkenning',
      lastUpdated: 'Laatste update',
    },
  },
  fr: {
    eyebrow: 'Recherche AFSCA',
    heading: 'Trouver des prestataires certifies AFSCA',
    introCopy: 'Recherchez par nom, numero de certificat, ville ou activite.',
    searchLabel: 'Rechercher des prestataires',
    searchPlaceholder: 'Essayez : Zelzate, repas ou AER/WVL/044783',
    resultsFound: (n) => `${n} prestataire(s) trouve(s)`,
    noResults: 'Aucun prestataire ne correspond a votre recherche',
    noResultsHint: 'Essayez un terme plus general ou un numero de certificat.',
    expandLabel: 'Afficher les details',
    collapseLabel: 'Masquer les details',
    tabs: {
      ariaLabel: 'Onglets de fonctionnalites',
      search: 'Rechercher',
      changes: 'Derniers changements',
    },
    stream: {
      title: 'Derniers changements d entites',
      subtitle:
        'Passez au flux de changements pour suivre les mises a jour recentes en temps reel.',
      liveHint:
        'Ce flux simule des mises a jour API qui arrivent toutes les quelques secondes.',
      loadingTitle: 'Demarrage du flux',
      loadingHint: 'Recuperation des derniers changements simules...',
      entity: 'Entite',
      field: 'Champ',
      from: 'Ancienne valeur',
      to: 'Nouvelle valeur',
      actions: {
        created: 'Cree',
        updated: 'Mis a jour',
        removed: 'Supprime',
      },
    },
    props: {
      province: 'Province',
      postcode: 'Code postal',
      city: 'Ville',
      activity: 'Activite',
      activityDescription: "Description de l'activite",
      productDescription: 'Description du produit',
      certificationDescription: 'Description de la certification',
      certificationForm: 'Forme de certification',
      certificationStartDate: 'Date de debut de certification',
      lastUpdated: 'Derniere mise a jour',
    },
  },
  de: {
    eyebrow: 'FAVV Suche',
    heading: 'FAVV-zertifizierte Anbieter finden',
    introCopy:
      'Suchen Sie nach Name, Zertifikatsnummer, Stadt oder Tatigkeit.',
    searchLabel: 'Anbieter suchen',
    searchPlaceholder: 'Versuchen Sie: Zelzate, Mahlzeiten oder AER/WVL/044783',
    resultsFound: (n) => `${n} Anbieter gefunden`,
    noResults: 'Keine Anbieter gefunden',
    noResultsHint:
      'Versuchen Sie einen allgemeineren Begriff oder eine Zertifikatsnummer.',
    expandLabel: 'Details einblenden',
    collapseLabel: 'Details ausblenden',
    tabs: {
      ariaLabel: 'Funktions-Tabs',
      search: 'Anbieter suchen',
      changes: 'Neueste Anderungen',
    },
    stream: {
      title: 'Neueste Entitatsanderungen',
      subtitle:
        'Wechseln Sie zum Anderungs-Stream, um aktuelle Entitatsupdates live zu sehen.',
      liveHint:
        'Dieser Mock-Stream simuliert API-Updates, die alle paar Sekunden eintreffen.',
      loadingTitle: 'Stream wird gestartet',
      loadingHint: 'Die neuesten simulierten Anderungen werden geladen...',
      entity: 'Entitat',
      field: 'Feld',
      from: 'Von',
      to: 'Nach',
      actions: {
        created: 'Erstellt',
        updated: 'Aktualisiert',
        removed: 'Entfernt',
      },
    },
    props: {
      province: 'Provinz',
      postcode: 'Postleitzahl',
      city: 'Stadt',
      activity: 'Tatigkeit',
      activityDescription: 'Tatigkeitsbeschreibung',
      productDescription: 'Produktbeschreibung',
      certificationDescription: 'Zertifizierungsbeschreibung',
      certificationForm: 'Zertifizierungsform',
      certificationStartDate: 'Zertifizierungsbeginn',
      lastUpdated: 'Zuletzt aktualisiert',
    },
  },
}

type ProviderSource = {
  id: string
  certificationNumber: string
  postcode: string
  city: string
  province: string
  certificationStartDate: string
  certificationForm: LocalizedText
  name: LocalizedText
  activity: LocalizedText
  activityDescription: LocalizedText
  productDescription: LocalizedText
  certificationDescription: LocalizedText
}

export type Provider = {
  id: string
  certificationNumber: string
  postcode: string
  city: string
  province: string
  certificationStartDate: string
  certificationForm: string
  name: string
  activity: string
  activityDescription: string
  productDescription: string
  certificationDescription: string
}

const base: ProviderSource[] = [
  {
    id: 'AER/BRU/028965',
    certificationNumber: 'AER/BRU/028965',
    postcode: '1200',
    city: 'Sint-Lambrechts-Woluwe',
    province: 'Brussels Hoofdstedelijk Gewest',
    certificationStartDate: '2018/03/06',
    certificationForm: {
      en: 'Authorized',
      nl: 'Toelating',
      fr: 'Autorise',
      de: 'Autorisiert',
    },
    name: { en: 'Caterer', nl: 'Traiteur', fr: 'Traiteur', de: 'Partyservice' },
    activity: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    activityDescription: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    productDescription: {
      en: 'Meals',
      nl: 'Maaltijden',
      fr: 'Repas',
      de: 'Mahlzeiten',
    },
    certificationDescription: {
      en: 'Retail food trade',
      nl: 'Detailhandel in levensmiddelen',
      fr: 'Commerce de detail en denrees alimentaires',
      de: 'Lebensmitteleinzelhandel',
    },
  },
  {
    id: 'UD1098-H',
    certificationNumber: 'UD1098-H',
    postcode: '8780',
    city: 'Oostrozebeke',
    province: 'West-Vlaanderen',
    certificationStartDate: '1999/01/01',
    certificationForm: {
      en: 'Recognized',
      nl: 'Erkenning',
      fr: 'Reconnu',
      de: 'Anerkannt',
    },
    name: {
      en: 'Mechanically separated meat manufacturer',
      nl: 'Fabrikant separatorvlees',
      fr: 'Fabricant de viande separee mecaniquement',
      de: 'Hersteller von mechanisch getrenntem Fleisch',
    },
    activity: {
      en: 'Manufacturing or (re)immediate packaging',
      nl: 'Vervaardiging of (opnieuw) onmiddellijk verpakken',
      fr: 'Fabrication ou (re)emballage immediat',
      de: 'Herstellung oder (Wieder-)Sofortverpackung',
    },
    activityDescription: {
      en: 'Manufacturing or (re)immediate packaging',
      nl: 'Vervaardiging of (opnieuw) onmiddellijk verpakken',
      fr: 'Fabrication ou (re)emballage immediat',
      de: 'Herstellung oder (Wieder-)Sofortverpackung',
    },
    productDescription: {
      en: 'Mechanically separated meat',
      nl: 'Separatorvlees',
      fr: 'Viande separee mecaniquement',
      de: 'Separatorenfleisch',
    },
    certificationDescription: {
      en: 'Establishment for manufacturing minced meat, meat preparations and mechanically separated meat',
      nl: 'Inrichting voor de vervaardiging van gehakt vlees, vleesbereidingen en separatorvlees',
      fr: 'Etablissement pour la fabrication de viande hachee, de preparations de viande et de viande separee mecaniquement',
      de: 'Betrieb zur Herstellung von Hackfleisch, Fleischzubereitungen und maschinell separiertem Fleisch',
    },
  },
  {
    id: 'KF1098',
    certificationNumber: 'KF1098',
    postcode: '8780',
    city: 'Oostrozebeke',
    province: 'West-Vlaanderen',
    certificationStartDate: '2006/01/01',
    certificationForm: {
      en: 'Recognized',
      nl: 'Erkenning',
      fr: 'Reconnu',
      de: 'Anerkannt',
    },
    name: {
      en: 'Chilled meat storage',
      nl: 'Gekoelde opslag vlees',
      fr: 'Stockage refrigere de viande',
      de: 'Gekuhlte Fleischlagerung',
    },
    activity: {
      en: 'Deep-frozen or chilled storage outside retail',
      nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel',
      fr: 'Stockage surgele ou refrigere hors commerce de detail',
      de: 'Tiefkuhl- oder Kuhllagerung au?erhalb des Einzelhandels',
    },
    activityDescription: {
      en: 'Deep-frozen or chilled storage outside retail',
      nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel',
      fr: 'Stockage surgele ou refrigere hors commerce de detail',
      de: 'Tiefkuhl- oder Kuhllagerung au?erhalb des Einzelhandels',
    },
    productDescription: {
      en: 'Meat',
      nl: 'Vlees',
      fr: 'Viande',
      de: 'Fleisch',
    },
    certificationDescription: {
      en: 'Cold stores and freezer warehouses',
      nl: 'Koel-en vrieshuizen',
      fr: 'Entrepots frigorifiques et surgelateurs',
      de: 'Kuhl- und Gefrierlagerhauser',
    },
  },
  {
    id: 'KF105253-gekoeld',
    certificationNumber: 'KF105253',
    postcode: '9060',
    city: 'Zelzate',
    province: 'Oost-Vlaanderen',
    certificationStartDate: '2022/12/05',
    certificationForm: {
      en: 'Recognized',
      nl: 'Erkenning',
      fr: 'Reconnu',
      de: 'Anerkannt',
    },
    name: {
      en: 'Chilled meat storage',
      nl: 'Gekoelde opslag vlees',
      fr: 'Stockage refrigere de viande',
      de: 'Gekuhlte Fleischlagerung',
    },
    activity: {
      en: 'Deep-frozen or chilled storage outside retail',
      nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel',
      fr: 'Stockage surgele ou refrigere hors commerce de detail',
      de: 'Tiefkuhl- oder Kuhllagerung au?erhalb des Einzelhandels',
    },
    activityDescription: {
      en: 'Deep-frozen or chilled storage outside retail',
      nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel',
      fr: 'Stockage surgele ou refrigere hors commerce de detail',
      de: 'Tiefkuhl- oder Kuhllagerung au?erhalb des Einzelhandels',
    },
    productDescription: {
      en: 'Meat',
      nl: 'Vlees',
      fr: 'Viande',
      de: 'Fleisch',
    },
    certificationDescription: {
      en: 'Cold stores and freezer warehouses',
      nl: 'Koel-en vrieshuizen',
      fr: 'Entrepots frigorifiques et surgelateurs',
      de: 'Kuhl- und Gefrierlagerhauser',
    },
  },
  {
    id: 'KF105253-herverpak',
    certificationNumber: 'KF105253',
    postcode: '9060',
    city: 'Zelzate',
    province: 'Oost-Vlaanderen',
    certificationStartDate: '2022/12/05',
    certificationForm: {
      en: 'Recognized',
      nl: 'Erkenning',
      fr: 'Reconnu',
      de: 'Anerkannt',
    },
    name: {
      en: 'Meat repacking centre',
      nl: 'Herverpakkingscentrum (vlees)',
      fr: 'Centre de reconditionnement (viande)',
      de: 'Umverpackungszentrum (Fleisch)',
    },
    activity: {
      en: 'Re-assembly and/or repackaging',
      nl: 'Opnieuw bijeenbrengen en/of opnieuw verpakken',
      fr: 'Reassemblage et/ou reemballage',
      de: 'Neuzusammenstellung und/oder Neuverpackung',
    },
    activityDescription: {
      en: 'Re-assembly and/or repackaging',
      nl: 'Opnieuw bijeenbrengen en/of opnieuw verpakken',
      fr: 'Reassemblage et/ou reemballage',
      de: 'Neuzusammenstellung und/oder Neuverpackung',
    },
    productDescription: {
      en: 'Meat',
      nl: 'Vlees',
      fr: 'Viande',
      de: 'Fleisch',
    },
    certificationDescription: {
      en: 'Repacking centres',
      nl: 'Herverpakkingscentra',
      fr: 'Centres de reconditionnement',
      de: 'Umverpackungszentren',
    },
  },
  {
    id: 'AER/WVL/044783',
    certificationNumber: 'AER/WVL/044783',
    postcode: '8550',
    city: 'Zwevegem',
    province: 'West-Vlaanderen',
    certificationStartDate: '2021/02/23',
    certificationForm: {
      en: 'Authorized',
      nl: 'Toelating',
      fr: 'Autorise',
      de: 'Autorisiert',
    },
    name: {
      en: 'Eating establishment',
      nl: 'Eetgelegenheid',
      fr: 'Restaurant',
      de: 'Gaststatte',
    },
    activity: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    activityDescription: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    productDescription: {
      en: 'Meals',
      nl: 'Maaltijden',
      fr: 'Repas',
      de: 'Mahlzeiten',
    },
    certificationDescription: {
      en: 'Retail food trade',
      nl: 'Detailhandel in levensmiddelen',
      fr: 'Commerce de detail en denrees alimentaires',
      de: 'Lebensmitteleinzelhandel',
    },
  },
  {
    id: 'AER/ANT/023331',
    certificationNumber: 'AER/ANT/023331',
    postcode: '2547',
    city: 'Lint',
    province: 'Antwerpen',
    certificationStartDate: '2006/01/01',
    certificationForm: {
      en: 'Authorized',
      nl: 'Toelating',
      fr: 'Autorise',
      de: 'Autorisiert',
    },
    name: {
      en: 'Eating establishment',
      nl: 'Eetgelegenheid',
      fr: 'Restaurant',
      de: 'Gaststatte',
    },
    activity: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    activityDescription: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    productDescription: {
      en: 'Meals',
      nl: 'Maaltijden',
      fr: 'Repas',
      de: 'Mahlzeiten',
    },
    certificationDescription: {
      en: 'Retail food trade',
      nl: 'Detailhandel in levensmiddelen',
      fr: 'Commerce de detail en denrees alimentaires',
      de: 'Lebensmitteleinzelhandel',
    },
  },
  {
    id: 'AER/HAI/032263',
    certificationNumber: 'AER/HAI/032263',
    postcode: '7750',
    city: "Mont-de-l'Enclus",
    province: 'Henegouwen',
    certificationStartDate: '2021/05/01',
    certificationForm: {
      en: 'Authorized',
      nl: 'Toelating',
      fr: 'Autorise',
      de: 'Autorisiert',
    },
    name: {
      en: 'Eating establishment',
      nl: 'Eetgelegenheid',
      fr: 'Restaurant',
      de: 'Gaststatte',
    },
    activity: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    activityDescription: {
      en: 'Production and distribution',
      nl: 'Productie en distributie',
      fr: 'Production et distribution',
      de: 'Produktion und Vertrieb',
    },
    productDescription: {
      en: 'Meals',
      nl: 'Maaltijden',
      fr: 'Repas',
      de: 'Mahlzeiten',
    },
    certificationDescription: {
      en: 'Retail food trade',
      nl: 'Detailhandel in levensmiddelen',
      fr: 'Commerce de detail en denrees alimentaires',
      de: 'Lebensmitteleinzelhandel',
    },
  },
  {
    id: 'AER/HAI/010935',
    certificationNumber: 'AER/HAI/010935',
    postcode: '6200',
    city: 'Châtelet',
    province: 'Henegouwen',
    certificationStartDate: '2018/10/10',
    certificationForm: {
      en: 'Authorized',
      nl: 'Toelating',
      fr: 'Autorise',
      de: 'Autorisiert',
    },
    name: {
      en: 'Itinerant retail trade',
      nl: 'Ambulante detailhandel',
      fr: 'Commerce de detail ambulant',
      de: 'Ambulanter Einzelhandel',
    },
    activity: {
      en: 'Itinerant retail trade',
      nl: 'Ambulante detailhandel',
      fr: 'Commerce de detail ambulant',
      de: 'Ambulanter Einzelhandel',
    },
    activityDescription: {
      en: 'Itinerant retail trade',
      nl: 'Ambulante detailhandel',
      fr: 'Commerce de detail ambulant',
      de: 'Ambulanter Einzelhandel',
    },
    productDescription: {
      en: 'Food products',
      nl: 'Levensmiddelen',
      fr: 'Denrees alimentaires',
      de: 'Lebensmittel',
    },
    certificationDescription: {
      en: 'Retail food trade',
      nl: 'Detailhandel in levensmiddelen',
      fr: 'Commerce de detail en denrees alimentaires',
      de: 'Lebensmitteleinzelhandel',
    },
  },
]

export function getProviders(lang: Language): Provider[] {
  return base.map((provider) => ({
    ...provider,
    name: provider.name[lang],
    activity: provider.activity[lang],
    activityDescription: provider.activityDescription[lang],
    productDescription: provider.productDescription[lang],
    certificationDescription: provider.certificationDescription[lang],
    certificationForm: provider.certificationForm[lang],
  }))
}
