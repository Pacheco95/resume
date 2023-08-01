import { Section } from "@/app/containers";
import { dot } from "@/separators";

export interface LanguagesProps {
  languages: {
    name: string;
    proficiency: string;
  }[];
}

const Languages = ({ languages }: LanguagesProps) => (
  <Section title="Languages">
    <ul className="flex flex-wrap gap-x-12 gap-y-1">
      {languages.map(({ name, proficiency }) => (
        <li key={name}>
          <span className="font-bold">{name}</span> {dot} {proficiency}
        </li>
      ))}
    </ul>
  </Section>
);

export default Languages;
