import { NextPage } from "next";
import { About, Contact, Header } from "@/app/containers";

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
    </main>
  </>
);

export default Home;
