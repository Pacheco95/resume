import { forwardRef, type JSX } from "react";
import { cn } from "@/classnames";
import { removeUrlPrefix } from "@/string-utils";

type Anchor = JSX.IntrinsicElements["a"];

interface ExternalLinkProps extends Omit<Anchor, "target"> {
  href: string;
}

const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  function ExternalLinkForwardRef({ className, children, ...props }, ref) {
    return (
      <a
        ref={ref}
        {...props}
        target="_blank"
        className={cn("underline", className)}
      >
        {children || removeUrlPrefix(props.href)}
      </a>
    );
  },
);

export default ExternalLink;
