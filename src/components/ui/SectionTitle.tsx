type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] muted-text">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 muted-text">{description}</p>
    </div>
  );
}

export default SectionTitle;
