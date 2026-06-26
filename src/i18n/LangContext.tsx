import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

// All UI translations
const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { en: "About", fr: "À propos" },
  "nav.skills": { en: "Skills", fr: "Compétences" },
  "nav.projects": { en: "Projects", fr: "Projets" },
  "nav.experience": { en: "Experience", fr: "Expérience" },
  "nav.education": { en: "Education", fr: "Formation" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.hire": { en: "Hire Me", fr: "Me contacter" },

  // Hero
  "hero.greeting": { en: "Hi, I'm", fr: "Bonjour, je suis" },
  "hero.available": {
    en: "Available for freelance & developer positions",
    fr: "Disponible en freelance & postes développeur",
  },
  "hero.viewProjects": { en: "View My Projects", fr: "Voir mes projets" },
  "hero.letsTalk": { en: "Let's Talk", fr: "Discutons" },
  "hero.scroll": { en: "Scroll", fr: "Défiler" },
  "hero.tagline": {
    en: "I build modern web and mobile products that connect clean code, user experience, and real business needs.",
    fr: "Je crée des produits web et mobile modernes qui allient code propre, expérience utilisateur et besoins métier réels.",
  },

  // Hero typing words
  "hero.type.1": { en: "Web Developer", fr: "Développeur Web" },
  "hero.type.2": { en: "Mobile Developer", fr: "Développeur Mobile" },
  "hero.type.3": { en: "UI/UX Thinker", fr: "Penseur UI/UX" },
  "hero.type.4": { en: "Product Builder", fr: "Créateur de Produits" },

  // Hero CV button
  "hero.downloadCV": { en: "Download CV", fr: "Télécharger CV" },

  // About
  "about.label": { en: "01. About", fr: "01. À propos" },
  "about.title": { en: "Who I Am", fr: "Qui je suis" },
  "about.bio.1": {
    en: "I am a developer in professional transition with hands-on experience across web, mobile, data, and CMS projects. My background combines product thinking, technical development, UX awareness, and a strong understanding of user needs.",
    fr: "Je suis un développeur en transition professionnelle avec une expérience concrète dans le web, le mobile, la data et le CMS. Mon parcours combine pensée produit, développement technique, sensibilité UX et une forte compréhension des besoins utilisateurs.",
  },
  "about.bio.2": {
    en: "I enjoy building useful digital products, not just interfaces. Whether it is a React web app, an iOS prototype, a WordPress website, or a Python data dashboard, my goal is always the same: create something clear, functional, and valuable for the end user.",
    fr: "J'aime construire des produits numériques utiles, pas seulement des interfaces. Qu'il s'agisse d'une application React, d'un prototype iOS, d'un site WordPress ou d'un tableau de bord Python, mon objectif est toujours le même : créer quelque chose de clair, fonctionnel et précieux pour l'utilisateur final.",
  },
  "about.bio.3": {
    en: "I am currently looking for opportunities in web/mobile development, either through freelance missions or a developer position/alternance where I can keep growing while contributing to real projects.",
    fr: "Je suis actuellement à la recherche d'opportunités en développement web/mobile, que ce soit en freelance ou en poste développeur/alternance où je peux continuer à progresser tout en contribuant à des projets réels.",
  },
  "about.yearsLearning": { en: "Years Learning", fr: "Ans d'apprentissage" },
  "about.projectsBuilt": { en: "Projects Built", fr: "Projets réalisés" },
  "about.pillar.web.title": { en: "Web Development", fr: "Développement Web" },
  "about.pillar.mobile.title": { en: "Mobile Development", fr: "Développement Mobile" },
  "about.pillar.data.title": { en: "Data & Backend", fr: "Data & Backend" },
  "about.pillar.product.title": { en: "Product & UX", fr: "Produit & UX" },
  "about.pillar.web.desc": { en: "React, Next.js, JavaScript, Tailwind CSS", fr: "React, Next.js, JavaScript, Tailwind CSS" },
  "about.pillar.mobile.desc": { en: "Swift, SwiftUI, iOS prototyping", fr: "Swift, SwiftUI, prototypage iOS" },
  "about.pillar.data.desc": { en: "Python, Pandas, Plotly, SQL, SQLite", fr: "Python, Pandas, Plotly, SQL, SQLite" },
  "about.pillar.product.desc": { en: "Figma, UX research, CMS, product thinking", fr: "Figma, recherche UX, CMS, pensée produit" },
  "about.viewGithub": { en: "View GitHub", fr: "Voir GitHub" },

  // Skills
  "skills.label": { en: "02. Skills", fr: "02. Compétences" },
  "skills.title": { en: "Tech Stack & Expertise", fr: "Stack technique & Expertise" },
  "skills.all": { en: "All", fr: "Tout" },
  "skills.stat.tech": { en: "Technologies", fr: "Technologies" },
  "skills.stat.projects": { en: "Projects Built", fr: "Projets réalisés" },
  "skills.stat.domains": { en: "Tech Domains", fr: "Domaines tech" },
  "skills.stat.join": { en: "Looking to Join", fr: "Prêt à rejoindre" },

  // Projects
  "projects.label": { en: "03. Projects", fr: "03. Projets" },
  "projects.title": { en: "Things I've Built", fr: "Ce que j'ai construit" },
  "projects.viewGithub": { en: "View More on GitHub", fr: "Voir plus sur GitHub" },

  // Project subtitles & descriptions
  "project.1.subtitle": { en: "iOS Safety App Prototype", fr: "Prototype d'app iOS de sécurité" },
  "project.1.description": {
    en: "An iOS prototype designed to help users identify safer and less safe areas, receive alerts, and make better decisions when moving around a city.",
    fr: "Un prototype iOS conçu pour aider les utilisateurs à identifier les zones sûres et moins sûres, recevoir des alertes et prendre de meilleures décisions lors de leurs déplacements en ville.",
  },
  "project.1.highlight": {
    en: "Connecting a real user safety problem with a simple and accessible mobile experience.",
    fr: "Relier un vrai problème de sécurité utilisateur à une expérience mobile simple et accessible.",
  },
  "project.2.subtitle": { en: "iOS Recommendation App", fr: "App iOS de recommandation" },
  "project.2.description": {
    en: "A SwiftUI app that recommends small outdoor activities based on the user's time, energy, weather, and recent activity history.",
    fr: "Une app SwiftUI qui recommande des petites activités en plein air selon le temps, l'énergie, la météo et l'historique d'activité de l'utilisateur.",
  },
  "project.2.highlight": {
    en: "A recommendation engine that adapts suggestions to the user's context instead of showing generic activities.",
    fr: "Un moteur de recommandation qui adapte les suggestions au contexte de l'utilisateur au lieu d'afficher des activités génériques.",
  },
  "project.3.subtitle": { en: "Modern Web Weather Interface", fr: "Interface météo web moderne" },
  "project.3.description": {
    en: "A modern weather web app that displays current weather and forecasts using external weather data. The interface adapts visually depending on the weather conditions.",
    fr: "Une application météo web moderne qui affiche la météo actuelle et les prévisions. L'interface s'adapte visuellement selon les conditions météorologiques.",
  },
  "project.3.highlight": {
    en: "Clean, responsive, and practical user experience with real API data from Open-Meteo.",
    fr: "Expérience utilisateur propre, responsive et pratique avec de vraies données API Open-Meteo.",
  },
  "project.4.subtitle": { en: "Python & SQL Data Project", fr: "Projet Data Python & SQL" },
  "project.4.description": {
    en: "A data analysis project based on a small sales dataset. The goal was to query, analyze, and visualize sales performance by product and region.",
    fr: "Un projet d'analyse de données basé sur un petit jeu de données de ventes. L'objectif était d'interroger, analyser et visualiser les performances commerciales par produit et par région.",
  },
  "project.4.highlight": {
    en: "Transformed raw sales data into clear visual insights including revenue by product and regional performance.",
    fr: "Transformation de données brutes de ventes en insights visuels clairs incluant le chiffre d'affaires par produit et la performance régionale.",
  },
  "project.5.subtitle": { en: "WordPress Fitness Website", fr: "Site WordPress fitness" },
  "project.5.description": {
    en: "A showcase website for a fitness club, designed to present services, attract users, and encourage visitors to book a free trial session.",
    fr: "Un site vitrine pour un club de fitness, conçu pour présenter les services, attirer les utilisateurs et encourager les visiteurs à réserver une séance d'essai gratuite.",
  },
  "project.5.highlight": {
    en: "Combines sport industry knowledge with web development skills — making it especially aligned with my profile.",
    fr: "Combine la connaissance du secteur sportif avec les compétences en développement web — ce qui le rend particulièrement aligné avec mon profil.",
  },
  "project.6.subtitle": { en: "UX & Web Contribution", fr: "Contribution UX & Web" },
  "project.6.description": {
    en: "A collaborative project where I contributed to UX thinking, interface structure, and product organization during a volunteer experience with TryioLab.",
    fr: "Un projet collaboratif où j'ai contribué à la réflexion UX, la structure d'interface et l'organisation produit lors d'une expérience bénévole avec TryioLab.",
  },
  "project.6.highlight": {
    en: "Worked in a team environment and connected design decisions directly with user needs.",
    fr: "Travail en équipe et connexion directe des décisions de design avec les besoins utilisateurs.",
  },

  // Experience
  "experience.label": { en: "04. Experience", fr: "04. Expérience" },
  "experience.title": { en: "Where I've Worked", fr: "Où j'ai travaillé" },
  "exp.1.role": { en: "Freelance Full Stack Developer", fr: "Développeur Full Stack Freelance" },
  "exp.1.company": { en: "Self-Employed", fr: "Indépendant" },
  "exp.1.period": { en: "2025 – Present", fr: "2025 – Présent" },
  "exp.1.bullet.1": {
    en: "Built and improved web projects using modern front-end tools and CMS solutions.",
    fr: "Création et amélioration de projets web avec des outils front-end modernes et des solutions CMS.",
  },
  "exp.1.bullet.2": {
    en: "Worked on practical digital products combining UX, development, and business goals.",
    fr: "Travail sur des produits numériques pratiques combinant UX, développement et objectifs business.",
  },
  "exp.2.role": { en: "Volunteer UX / Product Contributor", fr: "Contributeur UX / Produit bénévole" },
  "exp.2.company": { en: "TryioLab", fr: "TryioLab" },
  "exp.2.period": { en: "2025", fr: "2025" },
  "exp.2.bullet.1": {
    en: "Contributed to product design, UX structure, and collaborative project organization.",
    fr: "Contribution au design produit, à la structure UX et à l'organisation collaborative de projets.",
  },
  "exp.2.bullet.2": {
    en: "Used tools such as Figma, Jira, Slack, and Notion in a team environment.",
    fr: "Utilisation d'outils comme Figma, Jira, Slack et Notion dans un environnement d'équipe.",
  },
  "exp.3.role": { en: "Developer Training & Projects", fr: "Formation & Projets développeur" },
  "exp.3.company": { en: "Self-Directed", fr: "Autoformation" },
  "exp.3.period": { en: "2024 – 2026", fr: "2024 – 2026" },
  "exp.3.bullet.1": {
    en: "Completed several web, mobile, CMS, and data projects using React, Swift, Python, SQL, and WordPress.",
    fr: "Réalisation de plusieurs projets web, mobile, CMS et data avec React, Swift, Python, SQL et WordPress.",
  },
  "exp.3.bullet.2": {
    en: "Built portfolio-ready projects focused on practical use cases and real user needs.",
    fr: "Construction de projets portfolio axés sur des cas d'usage pratiques et des besoins utilisateurs réels.",
  },

  // Education
  "education.label": { en: "05. Education", fr: "05. Formation" },
  "education.title": { en: "Where I've Learned", fr: "Où j'ai appris" },
  "edu.1.degree": { en: "Application Designer & Developer (CDA)", fr: "Concepteur Développeur d'Applications (CDA)" },
  "edu.1.description": {
    en: "Application design and development, modern front-end, back-end basics, databases, REST APIs, security, and deployment.",
    fr: "Conception et développement d'applications, front-end moderne, bases du back-end, bases de données, API REST, sécurité et déploiement.",
  },
  "edu.2.degree": { en: "Apple Foundation Program", fr: "Apple Foundation Program" },
  "edu.2.description": {
    en: "iOS development, Swift, SwiftUI, prototyping, accessibility, and product thinking.",
    fr: "Développement iOS, Swift, SwiftUI, prototypage, accessibilité et pensée produit.",
  },
  "edu.3.degree": { en: "WordPress Development", fr: "Développement WordPress" },
  "edu.3.description": {
    en: "Professional training in WordPress development and CMS project structure.",
    fr: "Formation professionnelle en développement WordPress et structuration de projets CMS.",
  },
  "education.quote": {
    en: "\"I don't just learn technologies — I build products with them. Every course, every project, every prototype brings me closer to creating things that truly matter to users.\"",
    fr: "\"Je ne me contente pas d'apprendre des technologies — je construis des produits avec. Chaque formation, chaque projet, chaque prototype me rapproche de la création de choses qui comptent vraiment pour les utilisateurs.\"",
  },

  // Contact
  "contact.label": { en: "06. Contact", fr: "06. Contact" },
  "contact.title": { en: "Let's Work Together", fr: "Travaillons ensemble" },
  "contact.cta": {
    en: "Let's build useful, modern, and user-centered digital products together.",
    fr: "Construisons ensemble des produits numériques utiles, modernes et centrés sur l'utilisateur.",
  },
  "contact.description": {
    en: "I'm currently open to freelance projects, developer positions, and alternance opportunities. If you have a project in mind or want to chat, drop me a message!",
    fr: "Je suis actuellement ouvert aux projets freelance, postes développeur et opportunités d'alternance. Si vous avez un projet en tête ou souhaitez discuter, envoyez-moi un message !",
  },
  "contact.email": { en: "Email", fr: "E-mail" },
  "contact.location": { en: "Location", fr: "Localisation" },
  "contact.findMe": { en: "Find me online", fr: "Retrouvez-moi en ligne" },
  "contact.formTitle": { en: "Send a Message", fr: "Envoyer un message" },
  "contact.name": { en: "Name *", fr: "Nom *" },
  "contact.namePlaceholder": { en: "Your name", fr: "Votre nom" },
  "contact.emailLabel": { en: "Email *", fr: "E-mail *" },
  "contact.emailPlaceholder": { en: "your@email.com", fr: "votre@email.com" },
  "contact.subject": { en: "Subject", fr: "Objet" },
  "contact.subjectPlaceholder": { en: "What's this about?", fr: "De quoi s'agit-il ?" },
  "contact.message": { en: "Message *", fr: "Message *" },
  "contact.messagePlaceholder": {
    en: "Tell me about your project or opportunity...",
    fr: "Parlez-moi de votre projet ou opportunité...",
  },
  "contact.send": { en: "Send Message", fr: "Envoyer" },
  "contact.sent": { en: "Opening Email Client…", fr: "Ouverture du client mail…" },

  // Footer
  "footer.builtWith": { en: "Built with", fr: "Construit avec" },
  "footer.using": { en: "using React & Tailwind CSS", fr: "avec React & Tailwind CSS" },
  "footer.backToTop": { en: "Back to top ↑", fr: "Retour en haut ↑" },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
