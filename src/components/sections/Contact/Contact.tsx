import type { Language } from "../../../App";
import SectionTitle from "../../ui/SectionTitle";
import styles from "./Contact.module.css";

type ContactProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o współpracy.",
    description:
      "Jestem otwarty na oferty stażu, stanowiska junior developera oraz projekty, w których mogę rozwijać umiejętności frontendowe i backendowe.",
    email: "u.budziankou@outlook.com",
    github: "https://github.com/Dniapro123",
    linkedin: "*Czasowo w trakcie weryfikacji",
  },
  en: {
    eyebrow: "Contact",
    title: "Let’s talk about working together.",
    description:
      "I am open to internship opportunities, junior developer roles, and projects where I can grow my frontend and backend skills.",
    email: "u.budziankou@outlook.com",
    github: "https://github.com/Dniapro123",
    linkedin: "*Temporarily under verification",
  },
} as const;

function Contact({ language }: ContactProps) {
  const copy = content[language];

  return (
    <section id="contact" className="section-shell">
      <div className="panel">
        <SectionTitle
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className={styles.contactGrid}>
          <a
            href={`mailto:${copy.email}?subject=Kontakt%20z%20portfolio`}
            className={styles.contactCard}
          >
            <p className={styles.label}>Email</p>
            <p className={`${styles.value} muted-text`}>{copy.email}</p>
          </a>

          <a
            href={copy.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <p className={styles.label}>GitHub</p>
            <p className={`${styles.value} muted-text`}>{copy.github}</p>
          </a>

          <div className={styles.contactCard}>
            <p className={styles.label}>LinkedIn</p>
            <p className={`${styles.value} muted-text`}>{copy.linkedin}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;