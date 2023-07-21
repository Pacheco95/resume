import ExternalLink from "@/components/ExternalLink";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { Section } from "@/app/containers";

export interface ContactProps {}

const contacts = [
  {
    href: "mailto:mdpgd95@gmail.com",
    icon: SiGmail,
    text: "mdpgd95@gmail.com",
  },
  {
    href: "https://wa.me/5531993662423",
    icon: SiWhatsapp,
    text: "+55 (31) 99366-2423",
  },
  {
    href: "https://linkedin.com/in/michaelpacheco95",
    icon: SiLinkedin,
    text: "michaelpacheco95",
  },
  {
    href: "https://michael-pacheco.vercel.app",
    icon: TbWorldWww,
    text: "Online portfolio",
  },
];

const Contact = ({}: ContactProps) => (
  <Section title="Contact">
    <ul className="grid-1-2-4">
      {contacts.map(({ icon: Icon, href, text }) => (
        <li key={href}>
          <ExternalLink href={href}>
            <Icon className="inline-block mr-4 text-xl" />
            {text}
          </ExternalLink>
        </li>
      ))}
    </ul>
  </Section>
);

export default Contact;
