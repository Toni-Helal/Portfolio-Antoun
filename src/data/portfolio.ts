export const personalInfo = {
  name: "Antoun Helal",
  title: "Product-Oriented Web & Mobile Developer",
  tagline:
    "I build modern web and mobile products that connect clean code, user experience, and real business needs.",
  bio: "I am a developer in professional transition with hands-on experience across web, mobile, data, and CMS projects. My background combines product thinking, technical development, UX awareness, and a strong understanding of user needs.\n\nI enjoy building useful digital products, not just interfaces. Whether it is a React web app, an iOS prototype, a WordPress website, or a Python data dashboard, my goal is always the same: create something clear, functional, and valuable for the end user.\n\nI am currently looking for opportunities in web/mobile development, either through freelance missions or a developer position/alternance where I can keep growing while contributing to real projects.",
  cta: "Let's build useful, modern, and user-centered digital products together.",
  email: "pixel.forge.palace@gmail.com",
  github: "https://github.com/Toni-Helal",
  linkedin: "https://www.linkedin.com/in/antoun-helal",
  website: null,
};

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Swift", category: "Mobile" },
  { name: "SwiftUI", category: "Mobile" },
  { name: "Python", category: "Data & Backend" },
  { name: "Pandas", category: "Data & Backend" },
  { name: "Plotly", category: "Data & Backend" },
  { name: "SQL / SQLite", category: "Data & Backend" },
  { name: "WordPress / CMS", category: "CMS" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Figma", category: "Design" },
  { name: "UX/UI Design", category: "Design" },
  { name: "API Integration", category: "Tools" },
  { name: "Data Visualization", category: "Data & Backend" },
  { name: "Product Thinking", category: "Product" },
];

export const skillCategories = [
  "All",
  "Frontend",
  "Mobile",
  "Data & Backend",
  "CMS",
  "Design",
  "Tools",
  "Product",
];

export const projects = [
  {
    id: 1,
    title: "Securitea",
    subtitle: "iOS Safety App Prototype",
    description:
      "An iOS prototype designed to help users identify safer and less safe areas, receive alerts, and make better decisions when moving around a city.",
    highlight:
      "Connecting a real user safety problem with a simple and accessible mobile experience.",
    tech: ["Swift", "SwiftUI", "Map UI", "UX Research", "Prototyping"],
    liveLink: null,
    githubLink: null,
    category: "Mobile",
    icon: "🛡️",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "MicroAdventures",
    subtitle: "iOS Recommendation App",
    description:
      "A SwiftUI app that recommends small outdoor activities based on the user's time, energy, weather, and recent activity history.",
    highlight:
      "A recommendation engine that adapts suggestions to the user's context instead of showing generic activities.",
    tech: ["Swift", "SwiftUI", "JSON", "MVVM", "Recommendation Logic"],
    liveLink: null,
    githubLink: null,
    category: "Mobile",
    icon: "🧭",
    gradient: "from-violet-600 to-blue-500",
  },
  {
    id: 3,
    title: "Weather App",
    subtitle: "Modern Web Weather Interface",
    description:
      "A modern weather web app that displays current weather and forecasts using external weather data. The interface adapts visually depending on the weather conditions.",
    highlight:
      "Clean, responsive, and practical user experience with real API data from Open-Meteo.",
    tech: ["React", "Next.js", "JavaScript", "Open-Meteo API", "Responsive Design"],
    liveLink: null,
    githubLink: null,
    category: "Web",
    icon: "🌤️",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    id: 4,
    title: "Sales Dashboard",
    subtitle: "Python & SQL Data Project",
    description:
      "A data analysis project based on a small sales dataset. The goal was to query, analyze, and visualize sales performance by product and region.",
    highlight:
      "Transformed raw sales data into clear visual insights including revenue by product and regional performance.",
    tech: ["Python", "Pandas", "Plotly", "SQL", "SQLite"],
    liveLink: null,
    githubLink: null,
    category: "Data",
    icon: "📊",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: 5,
    title: "Gymtonic",
    subtitle: "WordPress Fitness Website",
    description:
      "A showcase website for a fitness club, designed to present services, attract users, and encourage visitors to book a free trial session.",
    highlight:
      "Combines sport industry knowledge with web development skills — making it especially aligned with my profile.",
    tech: ["WordPress", "Astra", "UX Strategy", "Responsive Design", "CMS"],
    liveLink: null,
    githubLink: null,
    category: "Web",
    icon: "💪",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: 6,
    title: "SkillsPro",
    subtitle: "UX & Web Contribution",
    description:
      "A collaborative project where I contributed to UX thinking, interface structure, and product organization during a volunteer experience with TryioLab.",
    highlight:
      "Worked in a team environment and connected design decisions directly with user needs.",
    tech: ["Figma", "UX Design", "Jira", "Slack", "Product Thinking"],
    liveLink: null,
    githubLink: null,
    category: "Product",
    icon: "🎯",
    gradient: "from-pink-500 to-rose-400",
  },
];

export const experience = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2025 – Present",
    bullets: [
      "Built and improved web projects using modern front-end tools and CMS solutions.",
      "Worked on practical digital products combining UX, development, and business goals.",
    ],
  },
  {
    role: "Volunteer UX / Product Contributor",
    company: "TryioLab",
    period: "2025",
    bullets: [
      "Contributed to product design, UX structure, and collaborative project organization.",
      "Used tools such as Figma, Jira, Slack, and Notion in a team environment.",
    ],
  },
  {
    role: "Developer Training & Projects",
    company: "Self-Directed",
    period: "2024 – 2026",
    bullets: [
      "Completed several web, mobile, CMS, and data projects using React, Swift, Python, SQL, and WordPress.",
      "Built portfolio-ready projects focused on practical use cases and real user needs.",
    ],
  },
];

export const education = [
  {
    degree: "Concepteur Développeur d'Applications (CDA)",
    school: "Wild Code School",
    period: "2024 – 2026",
    description:
      "Application design and development, modern front-end, back-end basics, databases, REST APIs, security, and deployment.",
    icon: "🎓",
  },
  {
    degree: "Apple Foundation Program",
    school: "Apple",
    period: "2024",
    description:
      "iOS development, Swift, SwiftUI, prototyping, accessibility, and product thinking.",
    icon: "🍎",
  },
  {
    degree: "WordPress Development",
    school: "OpenClassrooms",
    period: "2024",
    description:
      "Professional training in WordPress development and CMS project structure.",
    icon: "📚",
  },
];
