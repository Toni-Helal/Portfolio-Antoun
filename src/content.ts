// Tout le texte du site, en français (par défaut) et en anglais.
// Pour changer un texte : modifier ici, rien d'autre.

export type Lang = "fr" | "en";

export const config = {
  name: "Antoun Helal",
  email: "info@antounhelal.fr",
  // Numéro WhatsApp au format international, sans + ni espaces (ex. 33612345678).
  // Vide = les boutons WhatsApp renvoient vers le formulaire de contact.
  whatsapp: "",
  github: "https://github.com/Toni-Helal",
  linkedin: "https://www.linkedin.com/in/antoun-helal",
  cv: "cv-antoun-helal.pdf",
  siteUrl: "https://portfolioantoun.netlify.app/",
};

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  need: string;
  done: string;
  stack: string[];
  link?: { href: string; label: string };
  image?: { src: string; alt: string };
  diagram?: boolean;
};

export type TechProject = {
  name: string;
  desc: string;
  link?: string;
};

const fr = {
  meta: {
    title: "Antoun Helal · Sites web pour coachs, studios et commerces à Paris",
  },
  nav: {
    work: "Réalisations",
    offers: "Offres",
    process: "Méthode",
    contact: "Contact",
    whatsapp: "WhatsApp",
    switchLang: "Read in English",
  },
  hero: {
    badge: "Paris · Sites en français, anglais et arabe",
    title: "Des sites web clairs pour les coachs, les studios et les commerces de Paris",
    subtitle:
      "Coach sportif diplômé (BPJEPS) et développeur web, je crée des sites simples à utiliser, sur ordinateur comme sur mobile : vos services, vos avis Google, le paiement en ligne et un contact en un clic.",
    ctaWhatsapp: "Parler de mon projet sur WhatsApp",
    ctaWork: "Voir des exemples",
    note: "Premier échange de 15 minutes offert",
  },
  why: {
    label: "Pourquoi moi",
    title: "Un coach qui construit des sites",
    intro:
      "Je m'appelle Antoun. Je suis coach sportif à Paris et je crée des sites web. Je sais ce qu'un client regarde avant de réserver, parce que je le vis avec mes propres clients.",
    photoAlt: "Antoun Helal, coach sportif et développeur web à Paris",
    cards: [
      {
        title: "Je connais votre métier",
        text: "Coach sportif en activité à Paris, j'utilise mon propre site pour présenter mes séances et vendre des cartes cadeaux.",
      },
      {
        title: "Un site dans la langue de vos clients",
        text: "Français, anglais et arabe (lecture de droite à gauche), lisible sur téléphone.",
      },
      {
        title: "Moins de tâches répétitives",
        text: "Paiement en ligne, avis Google, demandes clients rangées automatiquement dans un tableau.",
      },
    ],
  },
  work: {
    label: "Réalisations",
    title: "Des sites en ligne, utilisés par de vrais clients",
    needLabel: "Le besoin",
    doneLabel: "Ce que j'ai fait",
    cases: [
      {
        id: "taskhome",
        tag: "Client",
        title: "Task Home",
        subtitle: "Site d'un service de montage de meubles et de cuisines à Hambourg",
        need: "Recevoir des demandes de devis claires, en allemand et en anglais, pour des montages de meubles et de cuisines.",
        done: "Site WordPress bilingue avec prix « à partir de » par service, formulaire de demande de devis, avis Google intégrés et bouton WhatsApp.",
        stack: ["WordPress", "Allemand / anglais", "Avis Google", "WhatsApp"],
        link: { href: "https://taskhome.de", label: "Voir le site" },
        image: { src: "images/taskhome.webp", alt: "Page d'accueil du site Task Home" },
      },
      {
        id: "antounhelal",
        tag: "Mon activité",
        title: "antounhelal.fr",
        subtitle: "Mon site de coach sportif à Paris",
        need: "Présenter coaching, BlazePod et massage en trois langues, et vendre des cartes cadeaux sans intermédiaire.",
        done: "Site rapide en HTML, CSS et JavaScript, version arabe de droite à gauche, paiement Stripe des cartes cadeaux, avis Google, hébergement Netlify.",
        stack: ["HTML / CSS / JS", "Français / anglais / arabe", "Stripe", "Netlify"],
        link: { href: "https://antounhelal.fr", label: "Voir le site" },
        image: { src: "images/antounhelal.webp", alt: "Page d'accueil du site antounhelal.fr" },
      },
      {
        id: "blazepod",
        tag: "Interactif",
        title: "Simulateur BlazePod",
        subtitle: "Un mini-jeu de réflexes pour donner envie d'essayer",
        need: "Faire comprendre en 30 secondes ce qu'est une séance BlazePod, avant de réserver.",
        done: "6 capteurs lumineux à toucher, 3 modes de jeu, 3 niveaux, score et record. En trois langues, au doigt sur mobile.",
        stack: ["JavaScript", "Mobile", "Français / anglais / arabe"],
        link: { href: "https://antounhelal.fr/blazepod-paris.html#simulateur", label: "Essayer le simulateur" },
        image: { src: "images/blazepod-sim.webp", alt: "Simulateur BlazePod en cours de partie" },
      },
      {
        id: "make",
        tag: "Automatisation",
        title: "Demandes clients automatiques",
        subtitle: "Les e-mails de demandes triés et rangés tout seuls",
        need: "Ne plus trier à la main les e-mails de demandes.",
        done: "Toutes les 15 minutes, chaque e-mail reçu est classé par une IA, un brouillon de réponse est préparé et la demande est ajoutée dans Google Sheets.",
        stack: ["Make", "Gmail", "IA", "Google Sheets"],
        diagram: true,
      },
    ] as CaseStudy[],
    diagram: {
      every: "Toutes les 15 minutes",
      steps: ["E-mail reçu", "Tri par une IA", "Brouillon de réponse", "Ligne dans Google Sheets"],
      tools: ["Gmail", "IA", "Gmail", "Sheets"],
    },
  },
  offers: {
    label: "Offres",
    title: "Ce que je propose",
    intro: "Chaque projet a un prix fixe, annoncé par écrit avant de commencer.",
    priceFixed: "Prix fixe annoncé avant de commencer",
    priceQuote: "Sur devis",
    items: [
      {
        title: "Site une page",
        text: "Présentation, services, avis Google, bouton WhatsApp et fiche Google Business.",
        quote: false,
      },
      {
        title: "Site complet",
        text: "Jusqu'à 5 pages, prise de rendez-vous, avis, plusieurs langues.",
        quote: false,
      },
      {
        title: "Suivi mensuel",
        text: "Mises à jour, petites modifications et sauvegardes.",
        quote: false,
      },
      {
        title: "Automatisation",
        text: "Demandes clients, paiements, tableaux de suivi.",
        quote: true,
      },
    ],
  },
  process: {
    label: "Méthode",
    title: "Comment ça se passe",
    steps: [
      {
        title: "On échange 15 minutes, offertes",
        text: "Par WhatsApp ou par téléphone, sur votre activité et vos besoins.",
      },
      {
        title: "Proposition écrite à prix fixe",
        text: "Vous savez ce que vous aurez et combien ça coûte avant de commencer.",
      },
      {
        title: "Je construis, vous validez",
        text: "Vous voyez le site avancer et vous validez chaque étape.",
      },
      {
        title: "Mise en ligne et prise en main",
        text: "Je mets le site en ligne et je vous montre comment modifier vos textes.",
      },
    ],
  },
  tech: {
    label: "Projets techniques",
    title: "Pour les curieux : mes projets de formation",
    github: "Tout voir sur GitHub",
    codeLabel: "Code",
    items: [
      { name: "Weather App", desc: "Application météo web en React et Next.js, données Open-Meteo.", link: "https://github.com/Toni-Helal/weather-app" },
      { name: "MicroAdventures", desc: "Application iOS en SwiftUI qui propose de petites sorties selon le temps et l'énergie.", link: "https://github.com/Toni-Helal/MicroAdventures" },
      { name: "Analyse des ventes d'une PME", desc: "Python, Pandas, Plotly et SQL : chiffre d'affaires par produit et par région.", link: "https://github.com/Toni-Helal/Analyser-les-ventes-d-une-PME" },
      { name: "Gymtonic", desc: "Site WordPress pour un club de fitness, réalisé en formation." },
      { name: "Securitea", desc: "Prototype d'application iOS pour se déplacer plus sereinement en ville." },
      { name: "SkillsPro", desc: "Maquettes Figma et travail UX en équipe, au sein d'une association." },
    ] as TechProject[],
  },
  contact: {
    label: "Contact",
    title: "Parlons de votre projet",
    text: "Dites-moi en deux lignes ce que vous faites et ce dont vous avez besoin. Le premier échange de 15 minutes est offert.",
    whatsapp: "Écrire sur WhatsApp",
    whatsappMessage: "Bonjour Antoun, j'ai un projet de site pour mon activité : ",
    email: "Écrire un e-mail",
    form: {
      name: "Nom",
      business: "Activité",
      businessPlaceholder: "Coach, studio, restaurant, boutique…",
      contact: "Téléphone ou e-mail",
      message: "Votre message",
      messagePlaceholder: "Ce que vous faites, ce dont vous avez besoin…",
      send: "Envoyer",
      sending: "Envoi…",
      success: "Merci, votre message est bien parti. Je vous réponds rapidement.",
      error: "Le message n'est pas parti. Écrivez-moi sur WhatsApp ou par e-mail.",
      privacy: "Vos coordonnées servent uniquement à vous répondre.",
      required: "obligatoire",
    },
  },
  footer: {
    rights: "Paris",
    cv: "CV développeur (PDF)",
    top: "Haut de page",
  },
};

type Content = typeof fr;

const en: Content = {
  meta: {
    title: "Antoun Helal · Websites for coaches, studios and local shops in Paris",
  },
  nav: {
    work: "Work",
    offers: "Services",
    process: "Process",
    contact: "Contact",
    whatsapp: "WhatsApp",
    switchLang: "Lire en français",
  },
  hero: {
    badge: "Paris · Websites in French, English and Arabic",
    title: "Clear websites for coaches, studios and local shops in Paris",
    subtitle:
      "Certified fitness coach (BPJEPS) and web developer, I build websites that are easy to use on desktop and mobile: your services, your Google reviews, online payment and one-click contact.",
    ctaWhatsapp: "Talk about my project on WhatsApp",
    ctaWork: "See examples",
    note: "First 15-minute call is free",
  },
  why: {
    label: "Why me",
    title: "A coach who builds websites",
    intro:
      "I'm Antoun. I'm a fitness coach in Paris and I build websites. I know what a client looks at before booking, because I see it with my own clients.",
    photoAlt: "Antoun Helal, fitness coach and web developer in Paris",
    cards: [
      {
        title: "I know your trade",
        text: "As a working coach in Paris, I use my own website to present my sessions and sell gift cards.",
      },
      {
        title: "A site in your clients' language",
        text: "French, English and Arabic (right-to-left), easy to read on a phone.",
      },
      {
        title: "Fewer repetitive tasks",
        text: "Online payment, Google reviews, client requests sorted automatically into a spreadsheet.",
      },
    ],
  },
  work: {
    label: "Work",
    title: "Live websites, used by real clients",
    needLabel: "The need",
    doneLabel: "What I did",
    cases: [
      {
        id: "taskhome",
        tag: "Client",
        title: "Task Home",
        subtitle: "Website for a furniture and kitchen assembly service in Hamburg",
        need: "Get clear quote requests, in German and English, for furniture and kitchen assembly.",
        done: "Bilingual WordPress site with “from” prices per service, a quote request form, Google reviews and a WhatsApp button.",
        stack: ["WordPress", "German / English", "Google reviews", "WhatsApp"],
        link: { href: "https://taskhome.de", label: "Visit the site" },
        image: { src: "images/taskhome.webp", alt: "Task Home website homepage" },
      },
      {
        id: "antounhelal",
        tag: "My business",
        title: "antounhelal.fr",
        subtitle: "My fitness coaching website in Paris",
        need: "Present coaching, BlazePod and massage in three languages, and sell gift cards directly.",
        done: "Fast site in HTML, CSS and JavaScript, right-to-left Arabic version, Stripe payment for gift cards, Google reviews, hosted on Netlify.",
        stack: ["HTML / CSS / JS", "French / English / Arabic", "Stripe", "Netlify"],
        link: { href: "https://antounhelal.fr", label: "Visit the site" },
        image: { src: "images/antounhelal.webp", alt: "antounhelal.fr homepage" },
      },
      {
        id: "blazepod",
        tag: "Interactive",
        title: "BlazePod simulator",
        subtitle: "A reflex mini-game that makes people want to try",
        need: "Explain in 30 seconds what a BlazePod session is, before booking.",
        done: "6 light pods to tap, 3 game modes, 3 levels, score and best time. In three languages, touch-friendly.",
        stack: ["JavaScript", "Mobile", "French / English / Arabic"],
        link: { href: "https://antounhelal.fr/blazepod-paris.html#simulateur", label: "Try the simulator" },
        image: { src: "images/blazepod-sim.webp", alt: "BlazePod simulator during a game" },
      },
      {
        id: "make",
        tag: "Automation",
        title: "Automatic client requests",
        subtitle: "Request emails sorted and filed on their own",
        need: "Stop sorting request emails by hand.",
        done: "Every 15 minutes, each new email is classified by an AI, a reply draft is prepared and the request is added to Google Sheets.",
        stack: ["Make", "Gmail", "AI", "Google Sheets"],
        diagram: true,
      },
    ],
    diagram: {
      every: "Every 15 minutes",
      steps: ["Email received", "Sorted by an AI", "Reply draft", "Row in Google Sheets"],
      tools: ["Gmail", "AI", "Gmail", "Sheets"],
    },
  },
  offers: {
    label: "Services",
    title: "What I offer",
    intro: "Every project has a fixed price, given in writing before we start.",
    priceFixed: "Fixed price given before we start",
    priceQuote: "On quote",
    items: [
      { title: "One-page site", text: "Presentation, services, Google reviews, WhatsApp button and Google Business profile.", quote: false },
      { title: "Full website", text: "Up to 5 pages, booking, reviews, several languages.", quote: false },
      { title: "Monthly care", text: "Updates, small changes and backups.", quote: false },
      { title: "Automation", text: "Client requests, payments, tracking spreadsheets.", quote: true },
    ],
  },
  process: {
    label: "Process",
    title: "How it works",
    steps: [
      { title: "A free 15-minute call", text: "On WhatsApp or by phone, about your business and your needs." },
      { title: "A written, fixed-price proposal", text: "You know what you get and what it costs before we start." },
      { title: "I build, you approve", text: "You see the site take shape and approve each step." },
      { title: "Launch and handover", text: "I put the site online and show you how to edit your texts." },
    ],
  },
  tech: {
    label: "Technical projects",
    title: "For the curious: my training projects",
    github: "See everything on GitHub",
    codeLabel: "Code",
    items: [
      { name: "Weather App", desc: "Weather web app in React and Next.js, Open-Meteo data.", link: "https://github.com/Toni-Helal/weather-app" },
      { name: "MicroAdventures", desc: "SwiftUI iOS app suggesting small outings based on weather and energy.", link: "https://github.com/Toni-Helal/MicroAdventures" },
      { name: "Small business sales analysis", desc: "Python, Pandas, Plotly and SQL: revenue by product and region.", link: "https://github.com/Toni-Helal/Analyser-les-ventes-d-une-PME" },
      { name: "Gymtonic", desc: "WordPress site for a fitness club, built during training." },
      { name: "Securitea", desc: "iOS app prototype to move around the city with more peace of mind." },
      { name: "SkillsPro", desc: "Figma mock-ups and UX teamwork within a non-profit." },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk about your project",
    text: "Tell me in two lines what you do and what you need. The first 15-minute call is free.",
    whatsapp: "Message on WhatsApp",
    whatsappMessage: "Hello Antoun, I have a website project for my business: ",
    email: "Send an email",
    form: {
      name: "Name",
      business: "Business",
      businessPlaceholder: "Coach, studio, restaurant, shop…",
      contact: "Phone or email",
      message: "Your message",
      messagePlaceholder: "What you do, what you need…",
      send: "Send",
      sending: "Sending…",
      success: "Thank you, your message has been sent. I'll get back to you quickly.",
      error: "The message was not sent. Please write to me on WhatsApp or by email.",
      privacy: "Your details are only used to reply to you.",
      required: "required",
    },
  },
  footer: {
    rights: "Paris",
    cv: "Developer CV (PDF)",
    top: "Back to top",
  },
};

export const content: Record<Lang, Content> = { fr, en };
export type { Content };
