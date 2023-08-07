import { Section } from "@/app/containers";
import { differenceInYears } from "date-fns";

export interface AboutProps {}

const getMiguelAge = () =>
  differenceInYears(new Date(), new Date("2019-08-20"));
const About = ({}: AboutProps) => (
  <Section title="About">
    <p>
      Have been programming since 2008. Delivering highly scalable, secure and
      maintainable software since 2019. Has customer centric mindset. Observant
      and detail-oriented. Enthusiast of new technologies. Loves to write
      beautiful code following good coding practices. Miguel's father (
      {getMiguelAge()} years old). Obsessed with finance-related subjects,
      especially investments. Have worked for several companies in
      multidisciplinary teams. Has great communication skills. Responsible for
      key projects as the principal engineer. Motivated by inspiration and
      challenges.
    </p>
    <p>
      <em>Looking for positions in USA or Canada.</em>
    </p>
  </Section>
);

export default About;
