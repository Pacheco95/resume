import { Section } from "@/app/containers";
import ExternalLink from "@/components/ExternalLink";
import { dot } from "@/separators";
import { type ReactNode } from "react";
import { formatRange } from "@/date-utils";

export interface ExperienceProps {
  experiences: {
    company: {
      name: string;
      url: string;
    };
    tags: string[];
    detail: ReactNode;
    start: Date;
    end: Date;
    skills: string[];
    achievements?: string[];
  }[];
}

const Experience = ({ experiences }: ExperienceProps) => (
  <Section title="Experience">
    <ul className="flex gap-y-4 gap-x-12 flex-wrap">
      {experiences.map((xp) => (
        <li key={xp.company.name}>
          <p>
            <ExternalLink href={xp.company.url} className="font-bold">
              {xp.company.name}
            </ExternalLink>
            {` ${dot} `}
            {xp.tags.join(` ${dot} `)}
          </p>
          <p>{formatRange(xp.start, xp.end)}</p>
          <p className="mt-1">{xp.detail}</p>
          <p className="font-bold mt-1">Achievements</p>
          <ul>
            {xp.achievements?.map((achievement, index) => (
              <li key={index}>
                Reduced client onboarding duration from months to minutes.
              </li>
            ))}
          </ul>
          <p className="font-bold mt-1">Skills</p>
          <ul className="flex gap-1 text-white flex-wrap">
            {xp.skills.map((skill) => (
              <li className="rounded bg-primary px-1" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </Section>
);

export default Experience;
