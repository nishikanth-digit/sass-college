'use client';

import React from 'react';

export default function AboutLibrary() {
  const content = {
    body: "The college library serves as a central academic hub, providing students with essential resources and specialized spaces to support their learning journey. It offers Quiet Study Zones, which are silent, distraction-free environments specifically designed for deep individual focus and intensive reading.For research needs, the Digital Commons provides high-speed access to premium academic databases, e-journals, and peer-reviewed articles necessary for high-level coursework. To support group work, Collaboration Suitesoffer soundproofed meeting spaces equipped with whiteboards and digital displays for team projects and brainstorming.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
       College Library
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}