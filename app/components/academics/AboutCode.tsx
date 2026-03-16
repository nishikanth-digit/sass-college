'use client';

import React from 'react';

export default function AboutCode() {
  const content = {
    body: "DIGIT College is dedicated to maintaining an environment where discipline and academic integrity are paramount. Our Code of Conduct serves as the foundation for a respectful and professional campus culture. All students are expected to uphold the highest standards of personal behavior, including punctuality, regular attendance, and respect for both peers and faculty. Any form of academic dishonesty, damage to institutional property, or disruptive behavior is strictly prohibited. By adhering to these guidelines, students contribute to a harmonious learning atmosphere that prepares them for the ethical demands of their future careers.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
       Student Code of Conduct
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}