import { NextPage } from "next";
import { About, Contact, Header } from "@/app/containers";
import Languages from "@/app/containers/Languages";
import Education from "@/app/containers/Education";

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
    <main className="m-auto flex flex-col gap-y-10 align-center p-8 text-justify max-w-lg lg:max-w-5xl">
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
            grade: "Bachelor of Computer Science",
            institution: {
              name: "Federal University of Ouro Preto",
              url: "https://ufop.br/",
            },
            country: "Brazil",
          },
          {
            year: 2023,
            grade: "MBA of Investments & Asset Allocation",
            institution: {
              name: "UniBTA",
              url: "https://unibta.edu.br/",
            },
            country: "Brazil",
          },
        ]}
      />
    </main>
  </>
);

export default Home;
