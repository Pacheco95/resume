import { NextPage } from "next";
import { About, Contact, Header } from "@/app/containers";
import Languages from "@/app/containers/Languages";
import Education from "@/app/containers/Education";
import Experience from "@/app/containers/Experience";
import Certifications from "@/app/containers/Certifications";
import DownloadButton from "@/components/DownloadButton";
import experiences from "@/app/experiences";

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
            grade: `Bachelor's Degree in Computer Science`,
            institution: {
              name: "Federal University of Ouro Preto",
              url: "https://ufop.br/",
            },
            country: "Brazil",
          },
          {
            year: 2023,
            grade: `MBA in Investments & Asset Allocation`,
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
