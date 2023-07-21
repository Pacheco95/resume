import { AnchorHTMLAttributes } from "react";

import cn from "classnames";

interface ExternalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target"> {}

const ExternalLink = ({ className, children, ...props }: ExternalLinkProps) => (
  <a {...props} target="_blank" className={cn("underline", className)}>
    {children}
  </a>
);

export default ExternalLink;
