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
      "Rozwijam się jako full-stack developer z technicznym wykształceniem i doświadczeniem stażowym.",
    description:
      "W 2026 roku ukończyłem Politechnikę Wrocławską na kierunku Informatyka Techniczna, specjalność Systemy i Sieci Komputerowe. Mam również roczne doświadczenie stażowe zdobyte w firmie GlobalLogic. Buduję projekty frontendowe i backendowe, aby rozwijać praktyczne umiejętności w pracy z aplikacjami webowymi, API, bazami danych i wdrażaniem projektów.",
    frontendTitle: "Frontend",
    frontendText:
      "Pracuję z React, Angular, TypeScript, HTML i CSS. Skupiam się na budowaniu czytelnych, responsywnych interfejsów oraz dobrym podziale aplikacji na komponenty.",
    backendTitle: "Backend",
    backendText:
      "Rozwijam umiejętności backendowe w Java, Spring Boot, REST API, Python, Django oraz SQL. Interesuje mnie pełny przepływ danych: od interfejsu użytkownika, przez logikę aplikacji, aż po bazę danych.",
    growthTitle: "Języki i rozwój",
    growthText:
      "Znam język polski, angielski, rosyjski, białoruski i ukraiński. Aktualnie rozwijam portfolio projektów oraz uczę się niemieckiego z celem osiągnięcia poziomu B1.",
  },
 en: {
    eyebrow: "About",
    title:
      "I am developing as a full-stack developer with a technical background and internship experience.",
    description:
      "In 2026, I graduated from Wrocław University of Science and Technology in Technical Computer Science, specializing in Computer Systems and Networks. I also gained one year of internship experience at GlobalLogic. I build frontend and backend projects to develop practical skills in web applications, APIs, databases, and deployment.",
    frontendTitle: "Frontend",
    frontendText:
      "I work with React, Angular, TypeScript, HTML, and CSS. I focus on building readable, responsive interfaces and organizing applications into clear components.",
    backendTitle: "Backend",
    backendText:
      "I develop backend skills using Java, Spring Boot, REST API, Python, Django, and SQL. I am interested in the full data flow: from the user interface, through application logic, to the database.",
    growthTitle: "Languages and growth",
    growthText:
      "I speak Polish, English, Russian, Belarusian, and Ukrainian. I am currently expanding my project portfolio and learning German with the goal of reaching B1 level.",
  },
} as const;

function About({ language }: AboutProps) {
  const copy = content[language];

  return (
    <section id="about" className="section-shell">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.frontendTitle}</h3>
            <p className={styles.cardText}>{copy.frontendText}</p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.backendTitle}</h3>
            <p className={styles.cardText}>{copy.backendText}</p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{copy.growthTitle}</h3>
            <p className={styles.cardText}>{copy.growthText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
