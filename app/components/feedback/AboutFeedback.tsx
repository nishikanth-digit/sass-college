'use client';

import React from 'react';

export default function AboutFeedback() {
  const content = {
    body: "Students in the IT department frequently praise the college for its proactive placement cell, noting that high-value packages (some reaching 16.30 LPA) are achievable for those with strong technical skills. Feedback often highlights the modern pedagogy and the availability of specialized labs for emerging fields like IoT and AIML, which help students stay industry-ready. However, some students have expressed that the academic workload can be intense, requiring significant self-study and the use of external resources like YouTube to supplement classroom learning.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
      Students Feedback
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}