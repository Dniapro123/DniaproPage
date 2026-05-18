import type { Language } from "../../../App";
import SectionTitle from "../../ui/SectionTitle";
import styles from "./About.module.css";

type AboutProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "O mnie",
    title:
      "Junior Web Developer z wykształceniem inżynierskim i doświadczeniem komercyjnym w GlobalLogic.",
    description:
      "Ukończyłem Informatykę na Politechnice Wrocławskiej, uzyskując tytuł inżyniera w lutym 2026 roku. Rozwijam się jako full-stack developer, łącząc frontend, integrację z REST API, backend oraz pracę z relacyjnymi bazami danych.",

    frontendTitle: "Frontend",
    frontendText:
      "Tworzę responsywne interfejsy z użyciem JavaScript ES6+, TypeScript, React, Angular, HTML5 i CSS3. Skupiam się na czytelnej strukturze komponentów, integracji z API oraz dobrym doświadczeniu użytkownika.",

    backendTitle: "Backend i bazy danych",
    backendText:
      "Mam doświadczenie z Node.js, Express.js, Java, Spring Boot oraz REST API. Pracuję również z PostgreSQL, Oracle SQL, PL/SQL i H2, projektując logikę aplikacji oraz struktury danych potrzebne w pełnym przepływie aplikacji.",

    experienceTitle: "Doświadczenie — GlobalLogic",
    experienceText:
      "Podczas stażu w GlobalLogic pracowałem nad Project Coordination System — wewnętrznym systemem wspierającym project managerów i team leadów w koordynowaniu pracy zespołów, zarządzaniu zadaniami oraz monitorowaniu postępów. W projekcie rozwijałem funkcjonalności full-stack, tworzyłem komponenty UI, integrowałem aplikację z REST API, pracowałem z logiką backendową, schematami relacyjnej bazy danych oraz wdrożeniem w Azure w środowisku Agile/SCRUM.",

    languagesTitle: "Języki",
    languagesText:
      "Polski — C1, angielski — B2, białoruski — ojczysty, rosyjski — ojczysty, ukraiński — C1. Aktualnie rozwijam również znajomość języka niemieckiego z celem osiągnięcia poziomu B1.",
  },

  en: {
    eyebrow: "About",
    title:
      "Junior Web Developer with an engineering degree and commercial experience at GlobalLogic.",
    description:
      "I graduated in Computer Science from Wrocław University of Science and Technology, earning my Bachelor of Engineering degree in February 2026. I am developing as a full-stack developer, combining frontend development, REST API integration, backend logic and relational databases.",

    frontendTitle: "Frontend",
    frontendText:
      "I build responsive interfaces using JavaScript ES6+, TypeScript, React, Angular, HTML5 and CSS3. I focus on clean component structure, API integration and a smooth user experience.",

    backendTitle: "Backend and databases",
    backendText:
      "I have experience with Node.js, Express.js, Java, Spring Boot and REST APIs. I also work with PostgreSQL, Oracle SQL, PL/SQL and H2, designing application logic and data structures for full application flows.",

    experienceTitle: "Experience — GlobalLogic",
    experienceText:
      "During my internship at GlobalLogic, I worked on a Project Coordination System — an internal platform designed to support project managers and team leads in coordinating team work, managing tasks and monitoring progress. I developed full-stack features, created UI components, integrated the application with REST APIs, worked with backend logic, relational database schemas and Azure deployment in an Agile/SCRUM environment.",

    languagesTitle: "Languages",
    languagesText:
      "Polish — C1, English — B2, Belarusian — native, Russian — native, Ukrainian — C1. I am also currently learning German with the goal of reaching B1 level.",
  },
} as const;

function About({ language }: AboutProps) {
  const copy = content[language];

  return (
    <section id="about" className="section-shell">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className={styles.cardsGrid}>

          <article className={`${styles.card} ${styles.cardWide}`}>
            <h3 className={styles.cardTitle}>{copy.experienceTitle}</h3>
            <p className={styles.cardText}>{copy.experienceText}</p>
          </article>
          
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.frontendTitle}</h3>
            <p className={styles.cardText}>{copy.frontendText}</p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.backendTitle}</h3>
            <p className={styles.cardText}>{copy.backendText}</p>
          </article>

          {/* <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.growthTitle}</h3>
            <p className={styles.cardText}>{copy.growthText}</p>
          </article> */}
          {/* <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.experienceTitle}</h3>
            <p className={styles.cardText}>{copy.experienceText}</p>
          </article> */}

          

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.languagesTitle}</h3>
            <p className={styles.cardText}>{copy.languagesText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
