import type { Language } from "../../../App";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  language: Language;
};

const labels = {
  pl: {
    navigation: "Nawigacja",
    hero: "Start",
    about: "O mnie",
    technologies: "Technologie",
    projects: "Projekty",
    contact: "Kontakt",
  },
  en: {
    navigation: "Navigation",
    hero: "Start",
    about: "About",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
  },
} as const;

function Sidebar({ language }: SidebarProps) {
  const copy = labels[language];

  return (
    <aside className={styles.sidebar}>
      <p className={styles.label}>{copy.navigation}</p>

      <nav className={styles.nav}>
        <a href="#hero">{copy.hero}</a>
        <a href="#about">{copy.about}</a>
        <a href="#technologies">{copy.technologies}</a>
        <a href="#projects">{copy.projects}</a>
        <a href="#contact">{copy.contact}</a>
      </nav>
    </aside>
  );
}

export default Sidebar;