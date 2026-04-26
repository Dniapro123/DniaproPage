import type { Language } from "../../App";
import SectionTitle from "../ui/SectionTitle";

type AboutProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "O mnie",
    title: "Rozwijam sie jako developer, ktory chce rozumiec caly przeplyw aplikacji.",
    description:
      "Interesuje mnie budowanie pelnych rozwiazan: od interfejsu uzytkownika, przez logike aplikacji, po komunikacje z baza danych i API.",
    frontendTitle: "Frontend",
    frontendText:
      "Chce tworzyc czytelne, responsywne interfejsy i rozwijac dobre nawyki pracy z komponentami.",
    backendTitle: "Backend",
    backendText:
      "Zalezy mi na rozumieniu API, baz danych, autoryzacji i organizacji logiki po stronie serwera.",
    growthTitle: "Rozwoj",
    growthText:
      "Buduje portfolio, ktore ma pokazac nie tylko efekt koncowy, ale tez swiadome podejscie do nauki i architektury.",
  },
  en: {
    eyebrow: "About",
    title: "I am growing as a developer who wants to understand the full flow of an application.",
    description:
      "I am interested in building complete solutions: from the user interface, through application logic, to database and API communication.",
    frontendTitle: "Frontend",
    frontendText:
      "I want to create clear, responsive interfaces and build strong habits around component-based development.",
    backendTitle: "Backend",
    backendText:
      "I care about understanding APIs, databases, authorization, and backend application structure.",
    growthTitle: "Growth",
    growthText:
      "I am building a portfolio that shows not only the final result, but also a thoughtful approach to learning and architecture.",
  },
} as const;

function About({ language }: AboutProps) {
  const copy = content[language];

  return (
    <section id="about" className="section-shell">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-semibold">{copy.frontendTitle}</h3>
            <p className="mt-3 leading-7 muted-text">{copy.frontendText}</p>
          </article>

          <article className="rounded-2xl border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-semibold">{copy.backendTitle}</h3>
            <p className="mt-3 leading-7 muted-text">{copy.backendText}</p>
          </article>

          <article className="rounded-2xl border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-semibold">{copy.growthTitle}</h3>
            <p className="mt-3 leading-7 muted-text">{copy.growthText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
