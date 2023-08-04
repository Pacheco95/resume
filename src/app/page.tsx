import { NextPage } from "next";
import { About, Contact, Header } from "@/app/containers";
import Languages from "@/app/containers/Languages";
import Education from "@/app/containers/Education";
import Experience, { type WorkExperience } from "@/app/containers/Experience";
import { dash } from "@/separators";
import ExternalLink from "@/components/ExternalLink";
import Certifications from "@/app/containers/Certifications";
import DownloadButton from "@/components/DownloadButton";

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
        Worked part-time as a freelancer. Developed the backend for frontend
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
            {`${dash}`}
            Developed the back end with Node and Express framework. Developed
            the front end with React and JavaScript
          </li>
          <li>
            <ExternalLink href="https://sempatrao.com.br">
              sempatrao.com.br
            </ExternalLink>
            {`${dash}`}
            Developed the back end with Node and Nest framework. Developed the
            front end with React and Typescript
          </li>
          <li>
            <ExternalLink href="https://evacard.com.br">
              evacard.com.br
            </ExternalLink>
            {`${dash}`}
            Developed the front end with Vue, Nuxt, and Typescript
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
        by PISOMTECH as an independent contractor. I worked on a full-stack
        project to manage retail product stocks. Very often, I was requested to
        create database scripts to normalize product data from different
        retailers. I was also responsible for creating automated use case tests
        for existing and new features.
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
    // start: new Date("2021-10-18T00:00-03:00"),
    start: new Date("2021-10-01T00:00-03:00"),
    detail: (
      <p>
        Allocated to{" "}
        <span className="font-bold">
          <ExternalLink href="https://www.linkedin.com/company/luizalabs">
            Luizalabs
          </ExternalLink>
        </span>{" "}
        by PISOMTECH as an independent contractor. As a holding retail company,
        Magazine Luiza has acquired a large set of e-commerces and marketplaces.
        It's very challenging to manage the entire ecosystem, so I was
        responsible to help in both architecting and development of an API to
        unify it in a single service. I also developed a payment split API to
        replace an existing, and expensive, 3rd party paid software. I have
        trained other developers helping them to grow technically and
        personally.
      </p>
    ),
    achievements: [
      <em key={1}>Reduced costs by approximately R$ 10 million a year.</em>,
    ],
    skills: [
      "Python",
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

const Home: NextPage = () => (
  <>
    <Header name="Michael Pacheco" role="Senior Full-Stack Engineer" />
    <main className="m-auto flex flex-col gap-y-6 align-center p-8 text-justify max-w-lg lg:max-w-5xl print:max-w-2xl">
      <Contact />
      <About />
      <Languages
        languages={[
          { name: "Portuguese", proficiency: "Native" },
          { name: "English", proficiency: "Advanced" },
        ]}
      />
      <Education
        education={[
          {
            year: 2019,
            grade: `Bachelor ${dash} Computer Science`,
            institution: {
              name: "Federal University of Ouro Preto",
              url: "https://ufop.br/",
            },
            country: "Brazil",
          },
          {
            year: 2023,
            grade: `MBA ${dash} Investments & Asset Allocation`,
            institution: {
              name: "UniBTA",
              url: "https://unibta.edu.br/",
            },
            country: "Brazil",
          },
        ]}
      />
      <Experience experiences={experiences} />
      <Certifications
        certifications={[
          {
            title: "Ethereum and Solidity: The Complete Developer's Guide",
            url: "https://www.udemy.com/certificate/UC-280228e5-ae76-4926-a8fa-8b23c59ac1b1",
            year: 2022,
          },
        ]}
      />
    </main>
    <DownloadButton />
  </>
);

export default Home;
