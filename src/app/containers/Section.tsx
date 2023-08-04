import React, { forwardRef, JSX } from "react";
import { cn } from "@/classnames";

type Section = JSX.IntrinsicElements["section"];
export interface SectionProps extends Section {
  title: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  function ExternalLinkForwardRef(
    { children, className, title, ...sectionProps },
    ref,
  ) {
    return (
      <section
        ref={ref}
        {...sectionProps}
        className={cn("text-gray-700 break-inside-avoid", className)}
      >
        <h2 className="text-primary text-xl font-bold border-b-2 border-primary inline-block mb-2">
          {title}
        </h2>
        {children}
      </section>
    );
  },
);

export default Section;
