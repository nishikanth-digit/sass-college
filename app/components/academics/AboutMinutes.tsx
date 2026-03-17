'use client';

import React from 'react';

export default function AboutMinutes() {
  const content = {
    body: "Minutes of Meeting at Digit College of Engineering serve as an official record of technical deliberations and administrative decisions. They ensure that complex engineering projects and academic goals are tracked through clearly defined action items and assigned responsibilities. This documentation fosters a culture of transparency and accountability among faculty, staff, and students alike. Ultimately, these records provide a reliable roadmap for the institution’s progress toward its strategic and technological milestones.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
          Minutes of Meeting
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}