'use client';

import React from 'react';

export default function AboutRagging() {
  const content = {
    body: "DIGIT College maintains a strict zero-tolerance policy toward ragging in any form. We are committed to providing a safe, respectful, and inclusive environment where every student can pursue their education without fear or intimidation. In compliance with statutory regulations, our campus is monitored by a dedicated Anti-Ragging Committee and Vigilance Squad. Any act of indiscipline, whether physical, verbal, or psychological, is met with immediate and stringent disciplinary action. We believe that a healthy campus culture is built on mutual respect, and we empower our students to report any grievances through our 24/7 confidential helpline.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
            Anti-Ragging Policy
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}