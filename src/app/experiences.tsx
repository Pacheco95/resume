import ExternalLink from "@/components/ExternalLink";
import { dash } from "@/separators";
import type { ReactNode } from "react";

export interface WorkExperience {
  company: {
    name: string;
    linkedinUrl?: string;
  };
  role: string;
  tags: string[];
  detail: ReactNode;
  start: Date;
  end?: Date;
  skills: string[];
  achievements?: ReactNode[];
}

const HighlightLink = ({ children }: { children: string }) => (
  <span className="font-bold">
    <ExternalLink href="https://www.linkedin.com/company/luizalabs">
      {children}
    </ExternalLink>
  </span>
);

const experiences: WorkExperience[] = [
  {
    company: {
      name: "Stilingue",
      linkedinUrl: "https://www.linkedin.com/company/10796074",
    },
    role: "Back-end Developer",
    start: new Date("2019-02-04T00:00-03:00"),
    end: new Date("2020-09-01T00:00-03:00"),
    detail: (
      <p>
        Worked on a social listening product called WarRoom. Broke parts of a
        monolith into multiple monitored micro-services. Tested business logic
        with automated tests. Worked in an IT support team automating manual
        time consuming tasks and writing scripts for data correction and
        normalization. Maintained containerized applications. Developed a
        backoffice front-end application to be used by the call center.
      </p>
    ),
    achievements: [
      "Reduced client onboarding duration from months to minutes.",
    ],
    skills: [
      "Java",
      "Tomcat",
      "Spring Boot",
      "JUnit",
      "MongoDB",
      "GCE",
      "GKE",
      "Prometheus",
      "Grafana",
      "Kibana",
      "Vue",
      "CI/CD",
    ],
    tags: ["Full-time", "Hybrid"],
  },
  {
    company: {
      name: "Freelancer",
    },
    role: "Full-Stack Developer",
    start: new Date("2020-05-15T00:00-03:00"),
    end: new Date("2021-02-04T00:00-03:00"),
    detail: (
      <p>
        Worked part-time as a freelancer. Developed the back-end for front-end
        (BFF) for an{" "}
        <ExternalLink href="https://www.heroiscovid.com.br">
          online memorial
        </ExternalLink>{" "}
        board of healthcare professionals that died of COVID-19.
        <br />
        Developed the front-end and back-end for a dashboard for a selective
        waste collection mobile app called{" "}
        <ExternalLink href="https://www.cataki.org/">Cataki</ExternalLink>.
      </p>
    ),
    skills: [
      "Express",
      "Adonis",
      "Heroku",
      "MongoDB",
      "JavaScript",
      "React",
      "Node",
      "TypeScript",
      "Postgres",
      "Material UI",
      "Styled-Components",
    ],
    tags: ["Part-Time", "Remote"],
  },
  {
    company: {
      name: "Usemobile",
      linkedinUrl: "https://www.linkedin.com/company/usemobile",
    },
    role: "Back-end Developer",
    start: new Date("2020-10-06T00:00-03:00"),
    end: new Date("2021-05-31T00:00-03:00"),
    detail: (
      <>
        Developed managing dashboards for three different smartphone apps:
        <ul className="list-disc list-inside">
          <li>
            <ExternalLink href="https://appmeuspa.com.br">
              appmeuspa.com.br
            </ExternalLink>
            {` ${dash} `}
            Developed the back-end with Node and Express framework. Developed
            the front-end with React and JavaScript
          </li>
          <li>
            <ExternalLink href="https://sempatrao.com.br">
              sempatrao.com.br
            </ExternalLink>
            {` ${dash} `}
            Developed the back-end with Node and Nest framework. Developed the
            front-end with React and Typescript
          </li>
          <li>
            <ExternalLink href="https://evacard.com.br">
              evacard.com.br
            </ExternalLink>
            {` ${dash} `}
            Developed the front-end with Vue, Nuxt, and Typescript
          </li>
        </ul>
      </>
    ),
    skills: [
      "Node",
      "Express",
      "Nest",
      "React",
      "Vue",
      "Nuxt",
      "Typescript",
      "Javascript",
      "MongoDB",
      "Amazon EKS",
      "Amazon S3",
    ],
    tags: ["Full Time", "Remote", "Software house"],
  },
  {
    company: {
      name: "PISOMTECH",
      linkedinUrl: "https://www.linkedin.com/company/pisomtech",
    },
    role: "Full-Stack Developer",
    start: new Date("2021-05-25T00:00-03:00"),
    end: new Date("2021-09-30T23:59-03:00"),
    detail: (
      <p>
        Allocated to{" "}
        <span className="font-bold">
          <ExternalLink href="https://www.linkedin.com/company/yandeh">
            Yandeh
          </ExternalLink>
        </span>{" "}
        by PISOMTECH (indirect contract). I worked on a full-stack project to
        manage retail product stocks. Very often, I was requested to create
        database scripts to normalize product data from different retailers. I
        was also responsible for creating automated use case tests for existing
        and new features.
      </p>
    ),
    skills: [
      "Java",
      "Javascript",
      "Typescript",
      "React",
      "PostgreSQL",
      "PL/pgSQL",
      "AWS | S3 | SQS | SNS | Lambda",
    ],
    tags: ["Indirect Contract", "Remote"],
  },
  {
    company: {
      name: "PISOMTECH",
      linkedinUrl: "https://www.linkedin.com/company/pisomtech",
    },
    role: "Senior Full-Stack Engineer",
    start: new Date("2021-10-01T00:00-03:00"),
    detail: (
      <p>
        Allocated to <HighlightLink>Luizalabs</HighlightLink> , the technology
        sector of{" "}
        <ExternalLink href="https://www.magazineluiza.com.br">
          MagazineLuiza
        </ExternalLink>{" "}
        marketplace, by PISOMTECH (indirect contract). As a holding retail
        company, Magazine Luiza has acquired a large set of e-commerces and
        marketplaces. It's very challenging to manage the entire ecosystem, so I
        was responsible to help in both architecting and development of an API
        to unify it in a single service. Developed a payment split API to
        replace an existing, and expensive, 3rd party paid software. Trained
        other developers helping them to grow both technically and personally.
        Currently working on an internal API collection migration from a legacy
        APIs product to another new ones. This migration involves multiple
        stacks using Java, Node, Python and React. Also working on private APIs
        exposure at <ExternalLink href={"https://developers.magalu.com"} />
      </p>
    ),
    achievements: [
      <em key={1}>Reduced costs by approximately R$ 10 million a year.</em>,
    ],
    skills: [
      "Python",
      "Java",
      "Javascript",
      "Typescript",
      "Node",
      "Kubernetes",
      "FastAPI",
      "Flask",
      "GCP",
      "GKE",
      "GCE",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Prometheus",
      "Grafana",
    ],
    tags: ["Indirect Contract", "Remote"],
  },
];

export default experiences;
