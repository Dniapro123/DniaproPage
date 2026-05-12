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
    githubUrl: "https://github.com/Dniapro123/Lumos-Lib",
    // liveUrl: "https://tutaj-bedzie-link-do-demo",
  },
  {
    slug: "react-api-app",
    title: {
      pl: "React API App",
      en: "React API App",
    },
    description: {
      pl: "Projekt frontendowy oparty o React i komunikację z zewnętrznym API.",
      en: "A frontend project based on React and communication with an external API.",
    },
    category: {
      pl: "Planowany projekt",
      en: "Planned project",
    },
    stack: ["React", "TypeScript", "REST API"],
  },
  {
    slug: "angular-api-app",
    title: {
      pl: "Angular API App",
      en: "Angular API App",
    },
    description: {
      pl: "Aplikacja zbudowana w Angularze z naciskiem na komponenty i integrację z API.",
      en: "An Angular application focused on components and API integration.",
    },
    category: {
      pl: "Planowany projekt",
      en: "Planned project",
    },
    stack: ["Angular", "TypeScript", "API"],
    githubUrl: "https://github.com/Dniapro123/Lumos-Lib",
  },
  {
    slug: "springboot-plsql-api",
    title: {
      pl: "Java Spring Boot REST API + PL/SQL",
      en: "Java Spring Boot REST API + PL/SQL",
    },
    description: {
      pl: "Backendowy projekt pokazujący pracę z Java, Spring Boot, bazą danych i logiką SQL.",
      en: "A backend project presenting work with Java, Spring Boot, a database, and SQL logic.",
    },
    category: {
      pl: "Planowany projekt",
      en: "Planned project",
    },
    stack: ["Java", "Spring Boot", "REST API", "PL/SQL"],
  },
  {
    slug: "django-app",
    title: {
      pl: "Python Django App",
      en: "Python Django App",
    },
    description: {
      pl: "Projekt webowy w Django pokazujący backend, routing i strukturę aplikacji.",
      en: "A Django web project presenting backend work, routing, and application structure.",
    },
    category: {
      pl: "Planowany projekt",
      en: "Planned project",
    },
    stack: ["Python", "Django"],
  },
];