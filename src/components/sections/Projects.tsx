import type { Language } from "../../App";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";

type ProjectsProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Projekty",
    title: "Miejsce na projekty, ktore beda rosnac razem z Twoim doswiadczeniem.",
    description:
      "Sekcja jest juz gotowa pod pozniejsze podlaczenie realnych danych i linkow do repozytoriow lub deployow.",
  },
  en: {
    eyebrow: "Projects",
    title: "A place for projects that will grow together with your experience.",
    description:
      "This section is ready for future real data, repository links, and live deployments.",
  },
} as const;

function Projects({ language }: ProjectsProps) {
  const copy = content[language];

  return (
    <section id="projects" className="section-shell">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-3xl border border-[var(--color-border)] p-6 transition hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.24em] muted-text">
                {project.category[language]}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title[language]}</h3>
              <p className="mt-4 leading-7 muted-text">{project.description[language]}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
