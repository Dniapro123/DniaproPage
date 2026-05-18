import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "lumos-lib",
    title: {
      pl: "LumosLib",
      en: "LumosLib",
    },
   description: {
      pl: "Aplikacja webowa do wyszukiwania książek, przeglądania szczegółów i pracy z katalogiem. Projekt wykorzystuje Angular, Express oraz Google Books API.",
      en: "A web app for searching books, browsing details and working with a catalogue. The project uses Angular, Express and Google Books API.",
    },
    category: {
      pl: "Projekt w trakcie wdrażania",
      en: "Deployment in progress",
    },
    stack: ["Angular", "TypeScript", "Node.js", "Express"],
    status: "completed",
    githubUrl: "https://github.com/Dniapro123/Lumos-Lib",
    // liveUrl: "https://tutaj-bedzie-link-do-demo",
  },
  {
  slug: "claims-api",
  title: {
    pl: "Claims API",
    en: "Claims API",
  },
  description: {
    pl: "Backendowy projekt w Spring Boot symulujący moduł obsługi roszczeń ubezpieczeniowych. Zawiera relacyjną bazę PostgreSQL, migracje Flyway, workflow statusów, historię zmian, walidację, filtrowanie, dokumentację OpenAPI i testy.",
    en: "A Spring Boot backend project simulating an insurance claims module. It includes PostgreSQL, Flyway migrations, status workflow, change history, validation, filtering, OpenAPI documentation and tests.",
  },
  category: {
    pl: "Java / Spring Boot / Backend",
    en: "Java / Spring Boot / Backend",
  },
  stack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Flyway", "Docker", "OpenAPI"],
  status: "in-progress",
  githubUrl: "https://github.com/Dniapro123/claims-api",
  liveUrl: "https://claims-api-production-29fa.up.railway.app/swagger-ui/index.html",
},
  {
  slug: "shield-version",
  title: {
    pl: "ShieldVersion — gra multiplayer w Unity",
    en: "ShieldVersion — Unity Multiplayer Game",
  },
  description: {
    pl: "Projekt pracy inżynierskiej: asymetryczna gra 2D Builder vs Attacker z architekturą klient-serwer, fazami rozgrywki, walidacją akcji po stronie serwera, systemem walki, pułapkami oraz prostym AI botów.",
    en: "Engineering thesis project: an asymmetric 2D Builder vs Attacker game with client-server architecture, phase-based gameplay, server-side action validation, combat system, traps and simplified bot AI.",
  },
  category: {
    pl: "Unity / C# / Multiplayer",
    en: "Unity / C# / Multiplayer",
  },
  stack: ["Unity", "C#", "Mirror Networking", "URP 2D", "Client-Server", "FSM AI"],
  status: "completed",
  githubUrl: "https://github.com/Dniapro123/ShieldVersion",
},

  // {
  //   slug: "angular-api-app",
  //   title: {
  //     pl: "Angular API App",
  //     en: "Angular API App",
  //   },
  //   description: {
  //     pl: "Aplikacja zbudowana w Angularze z naciskiem na komponenty i integrację z API.",
  //     en: "An Angular application focused on components and API integration.",
  //   },
  //   category: {
  //     pl: "Planowany projekt",
  //     en: "Planned project",
  //   },
  //   stack: ["Angular", "TypeScript", "API"],
  //   githubUrl: "https://github.com/Dniapro123/Lumos-Lib",
  // },
 {
  slug: "fitness-app",
  title: {
    pl: "FitnessApp — platforma do odkrywania siłowni",
    en: "FitnessApp — Gym Discovery Platform",
  },
  description: {
    pl: "Full-stackowa aplikacja webowa do wyszukiwania, dodawania i oceniania siłowni z autoryzacją użytkowników, CRUD-em obiektów, recenzjami, przesyłaniem zdjęć, interaktywną mapą oraz zabezpieczeniami formularzy i tras.",
    en: "A full-stack web application for discovering, creating and reviewing gyms with user authentication, gym CRUD, reviews, image uploads, interactive maps, and secured forms and routes.",
  },
  category: {
    pl: "Node.js / Express / PostgreSQL",
    en: "Node.js / Express / PostgreSQL",
  },
  stack: [
    "Node.js",
    "Express.js",
    "EJS",
    "PostgreSQL",
    "Sequelize",
    "Passport.js",
    "Bootstrap 5",
    "MapTiler",
    "Cloudinary",
    "Helmet",
    "Joi",
  ],
  status: "completed",
  githubUrl: "https://github.com/Dniapro123/FitnessApp",
},
  // {
  //   slug: "springboot-plsql-api",
  //   title: {
  //     pl: "Java Spring Boot REST API + PL/SQL",
  //     en: "Java Spring Boot REST API + PL/SQL",
  //   },
  //   description: {
  //     pl: "Backendowy projekt pokazujący pracę z Java, Spring Boot, bazą danych i logiką SQL.",
  //     en: "A backend project presenting work with Java, Spring Boot, a database, and SQL logic.",
  //   },
  //   category: {
  //     pl: "Planowany projekt",
  //     en: "Planned project",
  //   },
  //   stack: ["Java", "Spring Boot", "REST API", "PL/SQL"],
  // },
  // {
  //   slug: "django-app",
  //   title: {
  //     pl: "Python Django App",
  //     en: "Python Django App",
  //   },
  //   description: {
  //     pl: "Projekt webowy w Django pokazujący backend, routing i strukturę aplikacji.",
  //     en: "A Django web project presenting backend work, routing, and application structure.",
  //   },
  //   category: {
  //     pl: "Planowany projekt",
  //     en: "Planned project",
  //   },
  //   stack: ["Python", "Django"],
  // },
];