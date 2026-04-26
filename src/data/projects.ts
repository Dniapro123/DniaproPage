import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "react-api-app",
    title: {
      pl: "React API App",
      en: "React API App",
    },
    description: {
      pl: "Projekt frontendowy oparty o React i komunikacje z zewnetrznym API.",
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
      pl: "Aplikacja zbudowana w Angularze z naciskiem na komponenty i integracje z API.",
      en: "An Angular application focused on components and API integration.",
    },
    category: {
      pl: "Planowany projekt",
      en: "Planned project",
    },
    stack: ["Angular", "TypeScript", "API"],
  },
  {
    slug: "springboot-plsql-api",
    title: {
      pl: "Java Spring Boot REST API + PL/SQL",
      en: "Java Spring Boot REST API + PL/SQL",
    },
    description: {
      pl: "Backendowy projekt pokazujacy prace z Java, Spring Boot, baza danych i logika SQL.",
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
      pl: "Projekt webowy w Django pokazujacy backend, routing i strukture aplikacji.",
      en: "A Django web project presenting backend work, routing, and application structure.",
    },
    category: {
      pl: "Planowany projekt",
      en: "Planned project",
    },
    stack: ["Python", "Django"],
  },
];
