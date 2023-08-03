import { Section } from "@/app/containers";
import ExternalLink from "@/components/ExternalLink";
import { dot } from "@/separators";
import { type ReactNode } from "react";
import { formatRange } from "@/date-utils";

export interface ExperienceProps {
  experiences: {
    company: {
      name: string;
      linkedinUrl: string;
    };
    role: string;
    tags: string[];
    detail: ReactNode;
    start: Date;
    end?: Date;
    skills: string[];
    achievements?: ReactNode[];
  }[];
}

const Experience = ({ experiences }: ExperienceProps) => (
  <Section title="Experience">
    <ul className="flex gap-y-4 gap-x-12 flex-wrap">
      {experiences.map((xp) => (
        <li
          key={xp.start.getTime()}
          className="after:w-1/5 after:mt-6 after:rounded after:h-0.5 after:block after:bg-gray-300 after:m-auto last:after:hidden"
        >
          <p className="text-left">
            <ExternalLink href={xp.company.linkedinUrl} className="font-bold">
              {xp.company.name}
            </ExternalLink>
            {` ${dot} `}
            {[xp.role, ...xp.tags].join(` ${dot} `)}
            <br />
            {formatRange(xp.start, xp.end)}
          </p>
          <div className="mt-1">{xp.detail}</div>
          {xp.achievements && (
            <>
              <p className="font-bold mt-1">Achievements</p>
              <ul>
                {xp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </>
          )}
          <p className="font-bold mt-1">Skills</p>
          <ul className="flex gap-1 text-white flex-wrap">
            {xp.skills.map((skill) => (
              <li className="rounded bg-primary px-1.5" key={skill}>
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
