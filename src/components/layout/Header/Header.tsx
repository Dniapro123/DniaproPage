import type { Language, Theme } from "../../../App";
import styles from "./Header.module.css";

type HeaderProps = {
  language: Language;
  theme: Theme;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
};



const labels = {
  pl: {
    hero: "Hero",
    about: "O mnie",
    technologies: "Technologie",
    projects: "Projekty",
    contact: "Kontakt"
  },
  en: {
    hero: "Hero",
    about: "About",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact"
  }
};

function Header({
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}: HeaderProps) {
  const copy = labels[language];

  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo}>
        UB
      </a>

      <nav className={styles.nav}>
         <a href="#hero">{copy.hero}</a>
        <a href="#about">{copy.about}</a>
        <a href="#technologies">{copy.technologies}</a>
        <a href="#projects">{copy.projects}</a>
        <a href="#contact">{copy.contact}</a>
      </nav>

      <div className={styles.actions}>
        <button type="button" onClick={onToggleLanguage}>
          {language === "pl" ? "EN" : "PL"}
        </button>

        <button type="button" onClick={onToggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;