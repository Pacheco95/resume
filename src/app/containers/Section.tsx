import React from "react";

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ children, title }: SectionProps) => {
  return (
    <section className="text-gray-700">
      <h2 className="text-primary text-xl font-bold pb-2 border-b-2 border-primary inline-block mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;