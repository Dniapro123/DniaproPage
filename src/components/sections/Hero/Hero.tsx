import type { Language } from "../../../App";
import styles from "./Hero.module.css";
type HeroProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Junior / Full-stack Developer",
    title:
      "Buduję nowoczesne aplikacje webowe oraz backend ze skupieniem na czytelnym kodzie i stabilnym rozwoju.",
    description:
      "To portfolio jest miejscem, w ktorym przedstawiam swoje projekty frontendowe i backendowe.",
    projects: "Zobacz projekty",
    contact: "Skontaktuj się",
    direction: "Kierunek",
    stack: "Stack",
    goal: "Cel",
    directionValue: "Frontend + Backend",
    stackValue: "React, TypeScript, API",
    goalValue: "Rozwinąć silne umiejętności zawodowe",
  },
  en: {
    eyebrow: "Junior / Full-stack Developer",
    title:
      "I build modern web applications and backend services with a strong focus on readable code and steady growth.",
    description:
      "This portfolio is a showcase of my frontend and backend projects.",
    projects: "See projects",
    contact: "Get in touch",
    direction: "Direction",
    stack: "Stack",
    goal: "Goal",
    directionValue: "Frontend + Backend",
    stackValue: "React, TypeScript, API",
    goalValue: "To develope a strong professional skills",
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
