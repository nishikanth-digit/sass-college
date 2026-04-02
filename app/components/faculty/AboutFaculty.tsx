'use client';

import React from 'react';

export default function AboutFaculty() {
  const content = {
    body: "Our Faculty of Digital Engineering stands at the intersection of physical systems and virtual innovation. Comprised of industry veterans and pioneering researchers, our team is dedicated to redefining how products are designed, simulated, and manufactured. By leveraging advanced data analytics, Internet of Things (IoT) frameworks, and digital twin technology, our professors empower students to solve complex industrial challenges in real-time. We don't just teach engineering; we cultivate the digital architects of tomorrow who are ready to lead the fourth industrial revolution.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
     Our Faculties
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}