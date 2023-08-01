import { forwardRef, type JSX } from "react";
import { cn } from "@/classnames";

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
        {children}
      </a>
    );
  },
);

export default ExternalLink;
