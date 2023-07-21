import Section from "@/app/containers/Section";

export interface AboutProps {}

const About = ({}: AboutProps) => (
  <Section title="About">
    <p>
      Studying programming since 2008 and working professionally since 2019.
      Observant and detail-oriented. Enthusiast of new technologies. Loves to
      write beautiful code and follow good coding practices. Miguel's father (3
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
