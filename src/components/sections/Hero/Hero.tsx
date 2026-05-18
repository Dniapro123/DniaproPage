import type { Language } from "../../../App";
import styles from "./Hero.module.css";

type HeroProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Junior / Full-stack Developer",
    title:
      "Buduję aplikacje webowe i usługi backendowe.",
    description:
      "Tworzę projekty z użyciem React, Angular, TypeScript, Java Spring Boot, API i innych technologi. Skupiam się na czytelnym kodzie, strukturze aplikacji i praktycznym rozwiązywaniu problemów.",
    projects: "Zobacz projekty",
    contact: "Skontaktuj się",
    direction: "Kierunek",
    stack: "Stack",
    goal: "Dostępność",
    directionValue: "Frontend + Backend",
    stackValue: "React, TypeScript, API, Java, Spring Boot",
    goalValue: "Otwarty na oferty Junior Developer",
  },
  en: {
    eyebrow: "Junior / Full-stack Developer",
    title:
      "I build web applications and backend services.",
    description:
      "I create projects using React, Angular, TypeScript, Java Spring Boot, API and other technologies. I focus on clean code, application structure and practical problem solving.",
    projects: "See projects",
    contact: "Get in touch",
    direction: "Direction",
    stack: "Stack",
    goal: "Availability",
    directionValue: "Frontend + Backend",
    stackValue: "React, TypeScript, API, Java, Spring Boot",
    goalValue: "Open to Junior Developer roles",
  },
} as const;

function Hero({ language }: HeroProps) {
  const copy = content[language];

  return (
      <section id="hero" className="section-shell">
      <div className="panel">
        <div className={styles.hero}>
          <div className={styles.content}>
            <p className={`${styles.eyebrow} muted-text`}>
              {copy.eyebrow}
            </p>

            <h1 className={styles.title}>
              {copy.title}
            </h1>

            <p className={`${styles.description} muted-text`}>
              {copy.description}
            </p>

            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryButton}>
                {copy.projects}
              </a>

              <a href="#contact" className={styles.secondaryButton}>
                {copy.contact}
              </a>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <p className={`${styles.infoLabel} muted-text`}>
                {copy.direction}
              </p>
              <p className={styles.infoValue}>
                {copy.directionValue}
              </p>
            </article>

            <article className={styles.infoCard}>
              <p className={`${styles.infoLabel} muted-text`}>
                {copy.stack}
              </p>
              <p className={styles.infoValue}>
                {copy.stackValue}
              </p>
            </article>

            <article className={styles.infoCard}>
              <p className={`${styles.infoLabel} muted-text`}>
                {copy.goal}
              </p>
              <p className={styles.infoValue}>
                {copy.goalValue}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
