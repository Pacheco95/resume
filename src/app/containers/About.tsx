import { Section } from "@/app/containers";
import { differenceInYears } from "date-fns";

export interface AboutProps {}

const getMiguelAge = () =>
  differenceInYears(new Date(), new Date("2019-08-20"));
const About = ({}: AboutProps) => (
  <Section title="About">
    <p>
      Programming since 2008. Delivering highly scalable, secure maintainable
      software since 2019. Has customer centric mindset. Observant and
      detail-oriented. Enthusiast of new technologies. Loves to write beautiful
      code following good coding practices. Miguel's father ({getMiguelAge()}{" "}
      years old). Obsessed with finance-related subjects, especially
      investments. Worked for many companies with multidisciplinary teams. Has
      great communication skills. Responsible for key projects as the main
      engineer. Driven by inspiration and challenges.{" "}
      <em>
        Currently looking for leadership opportunities, but with hands on the
        code.
      </em>
    </p>
  </Section>
);

export default About;
