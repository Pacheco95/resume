import { NextPage } from "next";
import { About, Contact, Header } from "@/app/containers";
import Languages from "@/app/containers/Languages";
import Education from "@/app/containers/Education";
import Experience from "@/app/containers/Experience";
import { dash } from "@/separators";
import ExternalLink from "@/components/ExternalLink";

const Home: NextPage = () => (
  <>
    <Header
      name="Michael Pacheco"
      role="Senior Software Engineer"
      imageProps={{
        width: 144,
        height: 144,
        src: "https://placekitten.com/800/800",
        alt: "Michael Pacheco's picture",
        priority: true,
      }}
    />
    <main className="m-auto flex flex-col gap-y-6 align-center p-8 text-justify max-w-lg lg:max-w-5xl">
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

      <Experience
        experiences={[
          {
            company: {
              name: "Stilingue",
              linkedinUrl: "https://www.linkedin.com/company/10796074",
            },
            role: "Backend Developer",
            start: new Date("2019-02-04"),
            end: new Date("2020-09-01"),
            detail: (
              <p>
                Worked on a social listening product called WarRoom. Broke parts
                of a monolith into multiple monitored micro-services. Tested
                business logic with automated tests. Worked in an IT support
                team automating manual time consuming tasks and writing scripts
                for data correction and normalization. Maintained containerized
                applications. Developed a backoffice frontend application to be
                used by the call center.
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
              name: "Usemobile",
              linkedinUrl: "https://www.linkedin.com/company/usemobile",
            },
            role: "Backend Developer",
            start: new Date("2020-10-06"),
            end: new Date("2021-05-31"),
            detail: (
              <>
                Developed managing dashboards for three different smartphone
                apps:
                <ul className="list-disc list-inside">
                  <li>
                    <ExternalLink href="https://appmeuspa.com.br">
                      appmeuspa.com.br
                    </ExternalLink>
                    {`${dash}`}
                    Developed the back end with Node and Express framework.
                    Developed the front end with React and JavaScript
                  </li>
                  <li>
                    <ExternalLink href="https://sempatrao.com.br">
                      sempatrao.com.br
                    </ExternalLink>
                    {`${dash}`}
                    Developed the back end with Node and Nest framework.
                    Developed the front end with React and Typescript
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
              "Amazon EKS",
              "Amazon S3",
            ],
            tags: ["Full Time", "Remote", "Software house"],
          },
        ]}
      />
    </main>
  </>
);

export default Home;
