export const LANGUAGES = ['nl', 'fr', 'de', 'en']

// ---------------------------------------------------------------------------
// UI strings
// ---------------------------------------------------------------------------
export const ui = {
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
    props: {
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
    props: {
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
    heading: 'Trouver des prestataires certifiés AFSCA',
    introCopy: 'Recherchez par nom, numéro de certificat, ville ou activité.',
    searchLabel: 'Rechercher des prestataires',
    searchPlaceholder: 'Essayez : Zelzate, repas ou AER/WVL/044783',
    resultsFound: (n) => `${n} prestataire(s) trouvé(s)`,
    noResults: 'Aucun prestataire ne correspond à votre recherche',
    noResultsHint: 'Essayez un terme plus général ou un numéro de certificat.',
    expandLabel: 'Afficher les détails',
    collapseLabel: 'Masquer les détails',
    props: {
      city: 'Ville',
      activity: 'Activité',
      activityDescription: "Description de l'activité",
      productDescription: 'Description du produit',
      certificationDescription: 'Description de la certification',
      certificationForm: 'Forme de certification',
      certificationStartDate: 'Date de début de certification',
      lastUpdated: 'Dernière mise à jour',
    },
  },
  de: {
    eyebrow: 'FAVV Suche',
    heading: 'FAVV-zertifizierte Anbieter finden',
    introCopy:
      'Suchen Sie nach Name, Zertifikatsnummer, Stadt oder Tätigkeit.',
    searchLabel: 'Anbieter suchen',
    searchPlaceholder: 'Versuchen Sie: Zelzate, Mahlzeiten oder AER/WVL/044783',
    resultsFound: (n) => `${n} Anbieter gefunden`,
    noResults: 'Keine Anbieter gefunden',
    noResultsHint:
      'Versuchen Sie einen allgemeineren Begriff oder eine Zertifikatsnummer.',
    expandLabel: 'Details einblenden',
    collapseLabel: 'Details ausblenden',
    props: {
      city: 'Stadt',
      activity: 'Tätigkeit',
      activityDescription: 'Tätigkeitsbeschreibung',
      productDescription: 'Produktbeschreibung',
      certificationDescription: 'Zertifizierungsbeschreibung',
      certificationForm: 'Zertifizierungsform',
      certificationStartDate: 'Zertifizierungsbeginn',
      lastUpdated: 'Zuletzt aktualisiert',
    },
  },
}

// ---------------------------------------------------------------------------
// Provider data per language
// Values that are proper names (city, certificationNumber) are not translated.
// ---------------------------------------------------------------------------
const base = [
  {
    id: 'AER/BRU/028965',
    certificationNumber: 'AER/BRU/028965',
    city: 'Sint-Lambrechts-Woluwe',
    certificationStartDate: '2018/03/06',
    certificationForm: { en: 'Authorisation', nl: 'Toelating', fr: 'Autorisation', de: 'Zulassung' },
    name: { en: 'Caterer', nl: 'Traiteur', fr: 'Traiteur', de: 'Partyservice' },
    activity: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    activityDescription: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    productDescription: { en: 'Meals', nl: 'Maaltijden', fr: 'Repas', de: 'Mahlzeiten' },
    certificationDescription: { en: 'Retail food trade', nl: 'Detailhandel in levensmiddelen', fr: 'Commerce de détail en denrées alimentaires', de: 'Lebensmitteleinzelhandel' },
  },
  {
    id: 'UD1098-H',
    certificationNumber: 'UD1098-H',
    city: 'Oostrozebeke',
    certificationStartDate: '1999/01/01',
    certificationForm: { en: 'Approval', nl: 'Erkenning', fr: 'Agrément', de: 'Zulassung' },
    name: { en: 'Mechanically separated meat manufacturer', nl: 'Fabrikant separatorvlees', fr: 'Fabricant de viande séparée mécaniquement', de: 'Hersteller von mechanisch getrenntem Fleisch' },
    activity: { en: 'Manufacturing or (re)immediate packaging', nl: 'Vervaardiging of (opnieuw) onmiddellijk verpakken', fr: 'Fabrication ou (ré)emballage immédiat', de: 'Herstellung oder (Wieder-)Sofortverpackung' },
    activityDescription: { en: 'Manufacturing or (re)immediate packaging', nl: 'Vervaardiging of (opnieuw) onmiddellijk verpakken', fr: 'Fabrication ou (ré)emballage immédiat', de: 'Herstellung oder (Wieder-)Sofortverpackung' },
    productDescription: { en: 'Mechanically separated meat', nl: 'Separatorvlees', fr: 'Viande séparée mécaniquement', de: 'Separatorenfleisch' },
    certificationDescription: { en: 'Establishment for manufacturing minced meat, meat preparations and mechanically separated meat', nl: 'Inrichting voor de vervaardiging van gehakt vlees, vleesbereidingen en separatorvlees', fr: "Établissement pour la fabrication de viande hachée, de préparations de viande et de viande séparée mécaniquement", de: 'Betrieb zur Herstellung von Hackfleisch, Fleischzubereitungen und maschinell separiertem Fleisch' },
  },
  {
    id: 'KF1098',
    certificationNumber: 'KF1098',
    city: 'Oostrozebeke',
    certificationStartDate: '2006/01/01',
    certificationForm: { en: 'Approval', nl: 'Erkenning', fr: 'Agrément', de: 'Zulassung' },
    name: { en: 'Chilled meat storage', nl: 'Gekoelde opslag vlees', fr: 'Stockage réfrigéré de viande', de: 'Gekühlte Fleischlagerung' },
    activity: { en: 'Deep-frozen or chilled storage outside retail', nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel', fr: 'Stockage surgelé ou réfrigéré hors commerce de détail', de: 'Tiefkühl- oder Kühllagerung außerhalb des Einzelhandels' },
    activityDescription: { en: 'Deep-frozen or chilled storage outside retail', nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel', fr: 'Stockage surgelé ou réfrigéré hors commerce de détail', de: 'Tiefkühl- oder Kühllagerung außerhalb des Einzelhandels' },
    productDescription: { en: 'Meat', nl: 'Vlees', fr: 'Viande', de: 'Fleisch' },
    certificationDescription: { en: 'Cold stores and freezer warehouses', nl: 'Koel-en vrieshuizen', fr: 'Entrepôts frigorifiques et surgélateurs', de: 'Kühl- und Gefrierlagerhäuser' },
  },
  {
    id: 'KF105253-gekoeld',
    certificationNumber: 'KF105253',
    city: 'Zelzate',
    certificationStartDate: '2022/12/05',
    certificationForm: { en: 'Approval', nl: 'Erkenning', fr: 'Agrément', de: 'Zulassung' },
    name: { en: 'Chilled meat storage', nl: 'Gekoelde opslag vlees', fr: 'Stockage réfrigéré de viande', de: 'Gekühlte Fleischlagerung' },
    activity: { en: 'Deep-frozen or chilled storage outside retail', nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel', fr: 'Stockage surgelé ou réfrigéré hors commerce de détail', de: 'Tiefkühl- oder Kühllagerung außerhalb des Einzelhandels' },
    activityDescription: { en: 'Deep-frozen or chilled storage outside retail', nl: 'Diepgevroren of gekoelde opslag buiten de detailhandel', fr: 'Stockage surgelé ou réfrigéré hors commerce de détail', de: 'Tiefkühl- oder Kühllagerung außerhalb des Einzelhandels' },
    productDescription: { en: 'Meat', nl: 'Vlees', fr: 'Viande', de: 'Fleisch' },
    certificationDescription: { en: 'Cold stores and freezer warehouses', nl: 'Koel-en vrieshuizen', fr: 'Entrepôts frigorifiques et surgélateurs', de: 'Kühl- und Gefrierlagerhäuser' },
  },
  {
    id: 'KF105253-herverpak',
    certificationNumber: 'KF105253',
    city: 'Zelzate',
    certificationStartDate: '2022/12/05',
    certificationForm: { en: 'Approval', nl: 'Erkenning', fr: 'Agrément', de: 'Zulassung' },
    name: { en: 'Meat repacking centre', nl: 'Herverpakkingscentrum (vlees)', fr: 'Centre de reconditionnement (viande)', de: 'Umverpackungszentrum (Fleisch)' },
    activity: { en: 'Re-assembly and/or repackaging', nl: 'Opnieuw bijeenbrengen en/of opnieuw verpakken', fr: 'Réassemblage et/ou réemballage', de: 'Neuzusammenstellung und/oder Neuverpackung' },
    activityDescription: { en: 'Re-assembly and/or repackaging', nl: 'Opnieuw bijeenbrengen en/of opnieuw verpakken', fr: 'Réassemblage et/ou réemballage', de: 'Neuzusammenstellung und/oder Neuverpackung' },
    productDescription: { en: 'Meat', nl: 'Vlees', fr: 'Viande', de: 'Fleisch' },
    certificationDescription: { en: 'Repacking centres', nl: 'Herverpakkingscentra', fr: 'Centres de reconditionnement', de: 'Umverpackungszentren' },
  },
  {
    id: 'AER/WVL/044783',
    certificationNumber: 'AER/WVL/044783',
    city: 'Zwevegem',
    certificationStartDate: '2021/02/23',
    certificationForm: { en: 'Authorisation', nl: 'Toelating', fr: 'Autorisation', de: 'Zulassung' },
    name: { en: 'Eating establishment', nl: 'Eetgelegenheid', fr: 'Restaurant', de: 'Gaststätte' },
    activity: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    activityDescription: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    productDescription: { en: 'Meals', nl: 'Maaltijden', fr: 'Repas', de: 'Mahlzeiten' },
    certificationDescription: { en: 'Retail food trade', nl: 'Detailhandel in levensmiddelen', fr: 'Commerce de détail en denrées alimentaires', de: 'Lebensmitteleinzelhandel' },
  },
  {
    id: 'AER/ANT/023331',
    certificationNumber: 'AER/ANT/023331',
    city: 'Lint',
    certificationStartDate: '2006/01/01',
    certificationForm: { en: 'Authorisation', nl: 'Toelating', fr: 'Autorisation', de: 'Zulassung' },
    name: { en: 'Eating establishment', nl: 'Eetgelegenheid', fr: 'Restaurant', de: 'Gaststätte' },
    activity: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    activityDescription: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    productDescription: { en: 'Meals', nl: 'Maaltijden', fr: 'Repas', de: 'Mahlzeiten' },
    certificationDescription: { en: 'Retail food trade', nl: 'Detailhandel in levensmiddelen', fr: 'Commerce de détail en denrées alimentaires', de: 'Lebensmitteleinzelhandel' },
  },
  {
    id: 'AER/HAI/032263',
    certificationNumber: 'AER/HAI/032263',
    city: "Mont-de-l'Enclus",
    certificationStartDate: '2021/05/01',
    certificationForm: { en: 'Authorisation', nl: 'Toelating', fr: 'Autorisation', de: 'Zulassung' },
    name: { en: 'Eating establishment', nl: 'Eetgelegenheid', fr: 'Restaurant', de: 'Gaststätte' },
    activity: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    activityDescription: { en: 'Production and distribution', nl: 'Productie en distributie', fr: 'Production et distribution', de: 'Produktion und Vertrieb' },
    productDescription: { en: 'Meals', nl: 'Maaltijden', fr: 'Repas', de: 'Mahlzeiten' },
    certificationDescription: { en: 'Retail food trade', nl: 'Detailhandel in levensmiddelen', fr: 'Commerce de détail en denrées alimentaires', de: 'Lebensmitteleinzelhandel' },
  },
  {
    id: 'AER/HAI/010935',
    certificationNumber: 'AER/HAI/010935',
    city: 'Châtelet',
    certificationStartDate: '2018/10/10',
    certificationForm: { en: 'Authorisation', nl: 'Toelating', fr: 'Autorisation', de: 'Zulassung' },
    name: { en: 'Itinerant retail trade', nl: 'Ambulante detailhandel', fr: 'Commerce de détail ambulant', de: 'Ambulanter Einzelhandel' },
    activity: { en: 'Itinerant retail trade', nl: 'Ambulante detailhandel', fr: 'Commerce de détail ambulant', de: 'Ambulanter Einzelhandel' },
    activityDescription: { en: 'Itinerant retail trade', nl: 'Ambulante detailhandel', fr: 'Commerce de détail ambulant', de: 'Ambulanter Einzelhandel' },
    productDescription: { en: 'Food products', nl: 'Levensmiddelen', fr: 'Denrées alimentaires', de: 'Lebensmittel' },
    certificationDescription: { en: 'Retail food trade', nl: 'Detailhandel in levensmiddelen', fr: 'Commerce de détail en denrées alimentaires', de: 'Lebensmitteleinzelhandel' },
  },
]

const TRANSLATED_FIELDS = [
  'name',
  'activity',
  'activityDescription',
  'productDescription',
  'certificationDescription',
  'certificationForm',
]

/**
 * Returns the providers array with all translatable fields resolved to the
 * requested language string.
 */
export function getProviders(lang) {
  return base.map((p) => {
    const resolved = { ...p }
    for (const field of TRANSLATED_FIELDS) {
      resolved[field] = p[field][lang] ?? p[field].en
    }
    return resolved
  })
}
