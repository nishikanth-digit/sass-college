'use client';

import React from 'react';

export default function AboutAdmission() {
  const content = {
    body: "Begin your journey at Digit College, where academic excellence meets real-world innovation. Our admissions process is designed to identify passionate individuals who are ready to challenge the status quo and excel in their chosen fields. We offer a wide range of undergraduate and postgraduate programs, supported by world-class faculty and state-of-the-art facilities. Whether you are looking to specialize in technology, business, or the arts, we provide a streamlined enrollment path and dedicated counseling to help you make the best choice for your future career. Join a community that values curiosity, diversity, and leadership.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
        Admissions 2026-27
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}