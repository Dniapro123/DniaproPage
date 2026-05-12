import type { Language } from "../../../App";
import SectionTitle from "../../ui/SectionTitle";
import styles from "./Technologies.module.css";

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Angular",
  "Java",
  "Spring Boot",
  "PL/SQL",
  "Python",
  "Django",
  "REST API",
  "Git",
  "Docker",
  "PostgreSQL", 
  "Oracle SQL",
];

type TechnologiesProps = {
  language: Language;
};

//Create a contetnt and discription
const content = {
  pl: {
    eyebrow: "Technologie",
    title: "Technologie, z którymi pracuję.",
    description:
      "Zestaw narzędzi i technologii, które używam w projektach frontendowych, backendowych oraz podczas pracy z API i bazami danych.",
  },
    en: {
    eyebrow: "Technologies",
    title: "Technologies I work with.",
    description:
      "A set of tools and technologies I use in frontend and backend projects, API integration, and database-related work.",
  },
} as const;

function Technologies({ language }: TechnologiesProps) {
  const copy = content[language];

  return (
    <section id="technologies" className="section-shell">
      <div className="panel">
        <SectionTitle
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className={styles.technologiesList}>
          {technologies.map((technology) => (
            <span key={technology} className={styles.technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
