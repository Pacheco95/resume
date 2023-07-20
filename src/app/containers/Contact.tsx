import ExternalLink from "@/components/ExternalLink/ExternalLink";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

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
  <section className="text-gray-700">
    <h2 className="text-primary text-xl font-bold pb-2 border-b-2 border-primary inline-block mb-4">
      Contact
    </h2>
    <ul className="flex flex-wrap gap-y-4 gap-x-8">
      {contacts.map(({ icon: Icon, href, text }) => (
        <li key={href}>
          <ExternalLink href={href}>
            <Icon className="inline-block mr-4 text-xl" />
            {text}
          </ExternalLink>
        </li>
      ))}
    </ul>
  </section>
);

export default Contact;
