import { Section } from "@/app/containers";
import { dot } from "@/separators";
import ExternalLink from "@/components/ExternalLink";

export interface CertificationsProps {
  certifications: {
    title: string;
    url: string;
    year: number;
  }[];
}

const Certifications = ({ certifications }: CertificationsProps) => (
  <Section title="Certifications">
    <ul className="flex flex-wrap gap-x-12 gap-y-1 text-left">
      {certifications.map(({ title, url, year }) => (
        <li key={title}>
          <ExternalLink href={url} className="font-bold">
            {title}
          </ExternalLink>{" "}
          {dot} {year}
        </li>
      ))}
    </ul>
  </Section>
);

export default Certifications;
