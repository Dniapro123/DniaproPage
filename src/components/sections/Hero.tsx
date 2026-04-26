import type { Language } from "../../App";

type HeroProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Junior / Full-stack Developer",
    title:
      "Buduje nowoczesne aplikacje webowe z naciskiem na czytelny kod i rozwoj krok po kroku.",
    description:
      "To portfolio bedzie miejscem, w ktorym pokaze swoje projekty frontendowe i backendowe: React, Angular, Spring Boot, PL/SQL oraz Django.",
    projects: "Zobacz projekty",
    contact: "Skontaktuj sie",
    direction: "Kierunek",
    stack: "Stack",
    goal: "Cel",
    directionValue: "Frontend + Backend",
    stackValue: "React, TypeScript, API",
    goalValue: "Pierwsza mocna praca w IT",
  },
  en: {
    eyebrow: "Junior / Full-stack Developer",
    title:
      "I build modern web applications with a strong focus on readable code and steady growth.",
    description:
      "This portfolio will showcase my frontend and backend projects: React, Angular, Spring Boot, PL/SQL, and Django.",
    projects: "See projects",
    contact: "Get in touch",
    direction: "Direction",
    stack: "Stack",
    goal: "Goal",
    directionValue: "Frontend + Backend",
    stackValue: "React, TypeScript, API",
    goalValue: "First strong role in IT",
  },
} as const;

function Hero({ language }: HeroProps) {
  const copy = content[language];

  return (
    <section id="hero" className="section-shell pt-16 md:pt-24">
      <div className="panel overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] muted-text">{copy.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {copy.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 muted-text">{copy.description}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="primary-button rounded-full px-6 py-3 text-center text-sm font-medium transition hover:opacity-85"
              >
                {copy.projects}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--color-border)] px-6 py-3 text-center text-sm font-medium transition hover:bg-[var(--color-surface-muted)]"
              >
                {copy.contact}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <article className="rounded-2xl border border-[var(--color-border)] p-5">
              <p className="text-sm muted-text">{copy.direction}</p>
              <p className="mt-2 text-xl font-semibold">{copy.directionValue}</p>
            </article>
            <article className="rounded-2xl border border-[var(--color-border)] p-5">
              <p className="text-sm muted-text">{copy.stack}</p>
              <p className="mt-2 text-xl font-semibold">{copy.stackValue}</p>
            </article>
            <article className="rounded-2xl border border-[var(--color-border)] p-5">
              <p className="text-sm muted-text">{copy.goal}</p>
              <p className="mt-2 text-xl font-semibold">{copy.goalValue}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
