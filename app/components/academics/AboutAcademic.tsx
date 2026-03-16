'use client';

import React from 'react';

export default function AboutAdmission() {
  const content = {
    body: "The Academic Calendar at DIGIT College is meticulously structured to ensure a balanced approach to learning, assessment, and personal growth. Our academic year is divided into two primary semesters, each featuring dedicated periods for intensive lectures, mid-term evaluations, and final examinations. In addition to core curriculum timelines, the calendar highlights official institutional holidays, cultural fests, and technical symposiums. We encourage students to consult this schedule regularly to stay ahead of registration deadlines, project submissions, and preparatory breaks, ensuring a smooth and organized transition throughout their educational journey.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
       Academic Calendar & Schedules
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}