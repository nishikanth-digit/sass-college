'use client';

import React from 'react';

export default function AboutRules() {
  const content = {
    body: "The Examination Cell at DIGIT College is committed to conducting fair, transparent, and rigorous assessments. Students are strictly required to carry their valid College ID and Hall Ticket for every session. Entry to the examination hall is prohibited 15 minutes after the commencement of the exam. All electronic gadgets, including smartphones and smartwatches, are strictly banned inside the hall. Any student found engaging in malpractice, carrying unauthorized material, or disrupting the silence of the examination environment will face immediate disciplinary action as per university regulations. We expect every candidate to maintain the sanctity of the evaluation process to ensure a merit-based academic outcome.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
     Examination Cell 
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}