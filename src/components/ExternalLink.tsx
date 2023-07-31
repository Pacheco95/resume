import { forwardRef, type JSX } from "react";

type Anchor = JSX.IntrinsicElements["a"];

import { cn } from "@/utils";

interface ExternalLinkProps extends Omit<Anchor, "target"> {}

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
