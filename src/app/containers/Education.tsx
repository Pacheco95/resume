import { Section } from "@/app/containers";

export interface EducationProps {
  education: {
    institution: {
      name: string;
      url: string;
    };
    grade: string;
    year: number;
    country: string;
  }[];
}

const Education = ({ education }: EducationProps) => (
  <Section title="Education">
    <ul className="flex gap-y-4 gap-x-12 flex-wrap">
      {education.map((ed) => (
        <li key={ed.grade}>
          <p>{ed.year}</p>
          <p className="font-bold">{ed.grade}</p>
          <p>
            <a href={ed.institution.url} target="_blank" className="underline">
              {ed.institution.name}
            </a>
            , {ed.country}
          </p>
        </li>
      ))}
    </ul>
  </Section>
);

export default Education;
