import type { Language } from "../../App";
import SectionTitle from "../ui/SectionTitle";

type ContactProps = {
  language: Language;
};

const content = {
  pl: {
    eyebrow: "Kontakt",
    title: "Proszę się zkontaktować przez.",
    description:
      "Proszę sie zkontaktować ze mną za pomocą jednej z poniższych metod.",
    email: "u.budziankou@outlook.com",
    github: "https://github.com/Dniapro123",
    linkedin: "*Czasowo w trakcie weryfikacji",
  },
  en: {
    eyebrow: "Contact",
    title: "Please contact me via the methods below.",
    description:
      "Please feel free to reach out to me.",
    email: "u.budziankou@outlook.com",
    github: "https://github.com/Dniapro123",
    linkedin: "*Temporary under verification",
  },
} as const;

function Contact({ language }: ContactProps) {
  const copy = content[language];

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="panel">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

       <div className="grid gap-5 md:grid-cols-3">
          <a
            href={`mailto:${copy.email}`}
            className="block rounded-2xl border border-[var(--color-border)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg"
          >
            <p className="mt-2 text-lg font-semibold">Mail:</p>
            <p className="text-sm muted-text">{copy.email}</p>
          </a>

          <a
            href={copy.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-[var(--color-border)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg"
          >
            <p className="mt-2 text-lg font-semibold">GitHub:</p>
            <p className="text-sm muted-text">{copy.github}</p>
          </a>

          <a
            href={copy.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-[var(--color-border)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg"
          >
            <p className="mt-2 text-lg font-semibold">LinkedIn:</p>
            <p className="text-sm muted-text">{copy.linkedin}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
