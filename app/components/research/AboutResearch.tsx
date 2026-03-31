'use client';

import React from 'react';

export default function AboutResearch() {
  const content = {
    body: "The Research and Development (R&D) Cell at Digit College of Engineering serves as the backbone of innovation, bridging the gap between theoretical academic concepts and real-world industrial applications. It is a dedicated hub designed to foster a culture of inquiry among both faculty and students, providing the necessary infrastructure, mentorship, and funding pathways to transform creative ideas into tangible solutions. By encouraging interdisciplinary collaboration, the cell focuses on high-impact areas such as sustainable technology, artificial intelligence, and advanced manufacturing. Through its robust network of industry partnerships and government-funded projects, the R&D Cell not only enhances the institution’s intellectual property portfolio through patents and publications but also equips students with the critical thinking and technical expertise required to excel in the global engineering",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
      Research & Development Cell
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}