import { AnchorHTMLAttributes } from "react";

import cn from "classnames";
import { BiLinkExternal } from "react-icons/bi";

import styles from "./ExternalLink.module.css";

interface ExternalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target"> {}

const ExternalLink = ({ className, children, ...props }: ExternalLinkProps) => (
  <a
    {...props}
    target="_blank"
    className={cn(
      "underline",
      className,
      "_externalLink",
      styles._externalLink,
    )}
  >
    {children}
    <BiLinkExternal className="ml-1 inline opacity-0 transition-opacity duration-300 ease-out" />
  </a>
);

export default ExternalLink;
