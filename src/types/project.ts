type LocalizedText = {
  pl: string;
  en: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  category: LocalizedText;
  stack: string[];
};
