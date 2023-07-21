import { Section } from "@/app/containers";

export interface LanguagesProps {
  languages: {
    name: string;
    proficiency: string;
  }[];
}

const Languages = ({ languages }: LanguagesProps) => (
  <Section title="Languages">
    <ul className="flex flex-wrap gap-12">
      {languages.map(({ name, proficiency }) => (
        <li key={name}>
          <span className="font-bold">{name}</span> · {proficiency}
        </li>
      ))}
    </ul>
  </Section>
);

export default Languages;
