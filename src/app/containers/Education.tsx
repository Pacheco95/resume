import { Section } from "@/app/containers";
import ExternalLink from "@/components/ExternalLink";

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
            <ExternalLink href={ed.institution.url}>
              {ed.institution.name}
            </ExternalLink>
            , {ed.country}
          </p>
        </li>
      ))}
    </ul>
  </Section>
);

export default Education;
