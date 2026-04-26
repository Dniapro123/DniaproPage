import type { Language } from "../../App";
import SectionTitle from "../ui/SectionTitle";

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Angular",
  "Java",
  "Spring Boot",
  "PL/SQL",
  "Python",
  "Django",
  "REST API",
  "Git",
];

type TechnologiesProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Technologie",
    title: "Technologie, na ktorych chce budowac swoje portfolio.",
    description:
      "To zestaw narzedzi, ktore juz poznaje albo planuje mocniej pokazac w najblizszych projektach.",
  },
  en: {
    eyebrow: "Technologies",
    title: "Technologies I want to build my portfolio with.",
    description:
      "This is the set of tools I am already learning or planning to highlight in upcoming projects.",
  },
} as const;

function Technologies({ language }: TechnologiesProps) {
  const copy = content[language];

  return (
    <section id="technologies" className="section-shell">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
