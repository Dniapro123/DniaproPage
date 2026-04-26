import type { Language } from "../../App";
import SectionTitle from "../ui/SectionTitle";

type ContactProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Kontakt",
    title: "Sekcja kontaktowa gotowa do podpiecia maila, LinkedIna i GitHuba.",
    description:
      "Na tym etapie zostawiamy prosty uklad, ktory pozniej mozesz rozwinac o formularz lub linki spolecznosciowe.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  en: {
    eyebrow: "Contact",
    title: "Contact section ready for your email, LinkedIn, and GitHub.",
    description:
      "At this stage we keep a simple layout that you can later expand with a form or social links.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
} as const;

function Contact({ language }: ContactProps) {
  const copy = content[language];

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--color-border)] p-6">
            <p className="text-sm muted-text">{copy.email}</p>
            <p className="mt-2 text-lg font-semibold">twoj@email.com</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] p-6">
            <p className="text-sm muted-text">{copy.github}</p>
            <p className="mt-2 text-lg font-semibold">github.com/twojprofil</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] p-6">
            <p className="text-sm muted-text">{copy.linkedin}</p>
            <p className="mt-2 text-lg font-semibold">linkedin.com/in/twojprofil</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
