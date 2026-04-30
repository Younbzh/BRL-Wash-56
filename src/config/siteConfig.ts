export const siteConfig = {
  companyName: "BRL Wash 56",
  tagline: "Nettoyage automobile & mobilier à domicile",
  slogan: "Votre véhicule propre, sans vous déplacer",
  city: "Vannes",
  region: "Morbihan, Bretagne",

  hero: {
    title: "BRL Wash 56",
    subtitle: "Nettoyage automobile à domicile — Vannes & Morbihan",
    tagline: "Votre spécialiste du nettoyage auto à domicile",
    description: "Jean-Damien intervient directement chez vous avec son matériel professionnel entièrement autonome. Voiture, canapés, matelas — partout en Morbihan.",
    cta: "Demander un devis"
  },

  about: {
    title: "La passion du nettoyage, à votre porte",
    story: "À 18 ans, Jean-Damien Barle a créé BRL Wash 56 avec une idée simple : vous apporter un service de qualité professionnelle, directement chez vous. Né en Polynésie et vannetais depuis l'âge de 3 ans, il s'est équipé de matériel professionnel pour proposer un service à domicile de premier niveau.",
    mission: "Fourgon utilitaire aménagé, groupe électrogène, compresseur, aspirateur extracteur, nettoyeur haute pression : Jean-Damien est 100% autonome. Il intervient même en appartement, sans accès à l'eau ni à l'électricité.",
    values: "La passion des voitures depuis tout petit, la rigueur d'un lycéen en Bac Pro Métiers de la Relation Client, et l'investissement d'un entrepreneur déterminé : voilà BRL Wash 56.",
    expertise: "Nettoyage intérieur voiture (3 formules dès 55€), nettoyage mobilier à domicile (canapés, matelas dès 30€), intervention chez vous ou sur votre lieu de travail."
  },

  formules: [
    {
      name: "Élégance",
      price: "55€",
      badge: null,
      deplacement: null,
      color: "border-cyan-500/30 hover:border-cyan-500",
      items: [
        "Aspiration complète des tapis & moquettes en profondeur",
        "Nettoyage soigné des plastiques",
        "Dégraissage & brillance des vitres intérieures",
        "Nettoyage du coffre"
      ]
    },
    {
      name: "Signature",
      price: "85€",
      badge: "Populaire",
      deplacement: "Déplacement inclus jusqu'à 8 km",
      color: "border-cyan-400/30 hover:border-cyan-400",
      items: [
        "Aspiration complète des tapis et moquettes",
        "Nettoyage et protection des plastiques",
        "Nettoyage des vitres et du coffre",
        "Détail des contours de porte",
        "Rénovation plastique pour raviver les surfaces ternies",
        "Nettoyage soigné du volant"
      ]
    },
    {
      name: "Excellence",
      price: "125€",
      badge: "Premium",
      deplacement: "Déplacement inclus jusqu'à 15 km",
      color: "border-sky-400/30 hover:border-sky-400",
      items: [
        "Aspiration et nettoyage en profondeur des moquettes et tapis",
        "Nettoyage complet du coffre",
        "Détail et nettoyage des contours et joints de porte",
        "Rénovation des surfaces plastiques et cuirs",
        "Nettoyage vapeur",
        "Shampooing moquettes et tapis",
        "Entretien complet des sièges en cuir",
        "Nettoyage et soin du volant"
      ]
    }
  ],

  mobilier: {
    title: "Nettoyage Mobilier",
    subtitle: "Canapés & matelas — à votre domicile",
    tarifs: [
      { label: "Canapé 1 place", price: "30€" },
      { label: "Canapé 2 places", price: "40€" },
      { label: "Canapé 3 places", price: "55€" },
      { label: "Canapé 4 places", price: "70€" },
      { label: "Canapé 5-6 places / angle", price: "110€" },
      { label: "Grand canapé 7-10 places", price: "130€" }
    ],
    note: "*Les tarifs peuvent varier en fonction de l'état & du gabarit des différents mobiliers"
  },

  paiement: "Un acompte au début & le reste au résultat",

  process: {
    title: "Comment ça marche ?",
    steps: [
      {
        number: "01",
        title: "Contact",
        description: "Appelez ou envoyez un message pour un devis rapide"
      },
      {
        number: "02",
        title: "Devis",
        description: "Devis personnalisé adapté à votre véhicule et vos besoins"
      },
      {
        number: "03",
        title: "Rendez-vous",
        description: "Je me déplace chez vous, à l'heure convenue"
      },
      {
        number: "04",
        title: "Intervention",
        description: "Nettoyage professionnel avec mon matériel autonome"
      },
      {
        number: "05",
        title: "Résultat",
        description: "Votre voiture ou mobilier comme neuf !"
      }
    ]
  },

  zone: {
    title: "Zone d'intervention",
    center: "Vannes (56)",
    mainCities: [
      "Vannes",
      "Auray",
      "Lorient",
      "Pontivy",
      "Ploërmel",
      "Muzillac",
      "Questembert",
      "Elven",
      "Theix-Noyalo",
      "Baden",
      "Plescop",
      "Saint-Avé",
      "Séné",
      "Arradon",
      "Larmor-Baden"
    ]
  },

  contact: {
    title: "Me contacter",
    phone: "06 73 66 52 98",
    email: "brlwash56@gmail.com",
    city: "Vannes (56), Morbihan",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61584741573814",
      instagram: "https://www.instagram.com/brlwash56",
      tiktok: "https://www.tiktok.com/@brl.wash.56",
      handle: "@brlwash56"
    },
    schedule: {
      title: "Disponibilité",
      hours: [
        { day: "Lundi", hours: "Sur rendez-vous" },
        { day: "Mardi", hours: "Sur rendez-vous" },
        { day: "Mercredi", hours: "Sur rendez-vous" },
        { day: "Jeudi", hours: "Sur rendez-vous" },
        { day: "Vendredi", hours: "Sur rendez-vous" },
        { day: "Samedi", hours: "Sur rendez-vous" },
        { day: "Dimanche", hours: "Fermé" }
      ],
      note: "Service à domicile — Sur rendez-vous uniquement"
    }
  },

  values: [
    { text: "À domicile", icon: "🏠" },
    { text: "100% autonome", icon: "⚡" },
    { text: "Produits professionnels", icon: "🧴" },
    { text: "Particuliers & Pros", icon: "👔" },
    { text: "Passion voiture", icon: "❤️" },
    { text: "Satisfaction garantie", icon: "😊" }
  ],

  faq: [
    {
      question: "Vous intervenez vraiment à domicile ?",
      answer: "Oui, c'est notre point fort ! Je me déplace directement chez vous avec mon fourgon équipé, mon groupe électrogène et tout le matériel nécessaire. Vous n'avez pas besoin de vous déplacer."
    },
    {
      question: "Puis-je bénéficier du service en appartement ?",
      answer: "Absolument ! Grâce à mon groupe électrogène, je suis totalement autonome en électricité. Je peux intervenir même si vous habitez dans un appartement en étage, sans accès à l'eau ni à une prise."
    },
    {
      question: "Quelle formule choisir ?",
      answer: "La formule Élégance (55€) convient pour un entretien régulier. La Signature (85€) est notre formule populaire avec plus de détails (déplacement inclus jusqu'à 8 km). L'Excellence (125€) est le nettoyage complet avec vapeur et soin du cuir (déplacement inclus jusqu'à 15 km)."
    },
    {
      question: "Faites-vous aussi les canapés et matelas ?",
      answer: "Oui ! Je propose un service de nettoyage de mobilier à domicile : canapés et matelas. Les tarifs vont de 30€ (canapé 1 place) à 130€ (grand canapé 7-10 places). Devis personnalisé sur demande."
    },
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Le paiement se fait en deux temps : un acompte au début de la prestation, et le solde une fois le travail terminé et validé par vous. Aucune mauvaise surprise."
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Appelez ou envoyez un message au 06 73 66 52 98, ou contactez-moi sur Instagram ou TikTok (@brlwash56). Je vous réponds rapidement avec un devis personnalisé."
    },
    {
      question: "Intervenez-vous hors de Vannes ?",
      answer: "Oui ! J'interviens dans tout le Morbihan. Pour les formules Signature et Excellence, le déplacement est inclus jusqu'à 8 ou 15 km. Au-delà, un supplément kilométrique peut s'appliquer."
    }
  ],

  seo: {
    title: "BRL Wash 56 - Nettoyage Automobile À Domicile Vannes (56)",
    description: "BRL Wash 56 : nettoyage automobile et mobilier à domicile à Vannes et dans le Morbihan. 3 formules dès 55€. Nettoyage canapés dès 30€. 100% autonome, intervient en appartement. ☎️ 06 73 66 52 98",
    keywords: "nettoyage auto domicile Vannes, lavage voiture Morbihan, BRL Wash 56, nettoyage canapé domicile, aspirateur extracteur Vannes, nettoyage intérieur voiture 56, nettoyage mobilier Morbihan"
  },

  theme: {
    primary: "cyan",
    mode: "dark"
  }
};
