'use client';

import React from 'react';

export default function AboutRules() {
  const content = {
    body: "DIGIT College is committed to maintaining an orderly and productive educational environment through a comprehensive set of rules and regulations. All students are required to adhere to the prescribed dress code, maintain a minimum attendance of 75% in all subjects, and carry their valid institutional ID cards at all times. The use of mobile phones in classrooms and laboratories is strictly regulated to ensure an undistracted learning experience. Any violation of campus protocols, including damage to property or non-compliance with faculty instructions, will be subject to disciplinary review. These regulations are designed to instill a sense of responsibility and professionalism, ensuring that our campus remains a space of mutual respect and academic focus.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
       Rules & Regulations
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}