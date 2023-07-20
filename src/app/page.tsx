import Header from "@/app/containers/Header";
import { NextPage } from "next";

const Home: NextPage = () => (
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
);

export default Home;
