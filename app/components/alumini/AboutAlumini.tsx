'use client';

import React from 'react';

export default function AboutAlumini() {
  const content = {
    body: "The strength of our institute lies in the enduring bond between our campus and its graduates. With a network spanning across continents and industries, our alumni represent the pinnacle of professional achievement and academic rigor."
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
     About Alumini
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}