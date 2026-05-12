import { useState } from "react";
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
    hero: "Start",
    about: "O mnie",
    technologies: "Technologie",
    projects: "Projekty",
    contact: "Kontakt",
    menu: "Menu",
    close: "Zamknij",
    light: "Jasny",
    dark: "Ciemny",
  },
  en: {
    hero: "Hero",
    about: "About",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    light: "Light",
    dark: "Dark",
  },
} as const;

function Header({
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = labels[language];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo} onClick={closeMenu}>
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
          {theme === "dark" ? copy.light : copy.dark}
        </button>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? copy.close : copy.menu}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className={styles.mobileNav}>
          <a href="#hero" onClick={closeMenu}>
            {copy.hero}
          </a>
          <a href="#about" onClick={closeMenu}>
            {copy.about}
          </a>
          <a href="#technologies" onClick={closeMenu}>
            {copy.technologies}
          </a>
          <a href="#projects" onClick={closeMenu}>
            {copy.projects}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {copy.contact}
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;