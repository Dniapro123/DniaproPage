import { useEffect, useState } from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

type Theme = "light" | "dark";
export type Language = "pl" | "en";

const labels = {
  pl: {
    about: "O mnie",
    technologies: "Technologie",
    projects: "Projekty",
    contact: "Kontakt",
    lightMode: "Tryb dzienny",
    darkMode: "Tryb nocny",
  },
  en: {
    about: "About",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    lightMode: "Light mode",
    darkMode: "Dark mode",
  },
} as const;

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("pl");

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.lang = language;
  }, [theme, language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:var(--color-surface-muted)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em]">
            Dniapro
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm md:gap-6">
            <a href="#about" className="transition-opacity hover:opacity-70">
              {labels[language].about}
            </a>
            <a href="#technologies" className="transition-opacity hover:opacity-70">
              {labels[language].technologies}
            </a>
            <a href="#projects" className="transition-opacity hover:opacity-70">
              {labels[language].projects}
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-70">
              {labels[language].contact}
            </a>
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
              <button
                type="button"
                onClick={() => setLanguage("pl")}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  language === "pl" ? "bg-[var(--color-text)] text-[var(--color-bg)]" : "text-[var(--color-text)]"
                }`}
              >
                PL
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  language === "en" ? "bg-[var(--color-text)] text-[var(--color-bg)]" : "text-[var(--color-text)]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm transition hover:bg-[var(--color-surface)]"
            >
              {theme === "dark" ? labels[language].lightMode : labels[language].darkMode}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero language={language} />
        <About language={language} />
        <Technologies language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
