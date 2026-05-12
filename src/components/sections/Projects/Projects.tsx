import type { Language } from "../../../App";
import SectionTitle from "../../ui/SectionTitle";
import { projects } from "../../../data/projects";
import style from "./Projects.module.css";

type ProjectsProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Projekty",
    title: "Moje projekty.",
    description:
      "Proszę zobaczyć moje projekty na GitHubie lub za pomocą Live Demo.",
  },
  en: {
    eyebrow: "Projects",
    title: "My projects.",
    description:
      "Please take a look at my projects on GitHub or through the Live Demo.",
  },
} as const;

function Projects({ language }: ProjectsProps) {
  const copy = content[language];

  return (
    <section id="projects" className="section-shell">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className={style.projectsGrid}>
          {projects.map((project) => (
            <article key={project.slug} className={style.projectCard}>
              <p className={`${style.category} muted-text`}>
                {project.category[language]}
              </p>

              <h3 className={style.title}>
                {project.title[language]}
              </h3>

              <p className={`${style.description} muted-text`}>
                {project.description[language]}
              </p>

              <div className={style.stackList}>
                {project.stack.map((item) => (
                  <span key={item} className={style.stackItem}>
                    {item}
                  </span>
                ))}
              </div>

              <div className={style.links}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${style.link} ${style.primaryLink}`}
                  >
                    Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
