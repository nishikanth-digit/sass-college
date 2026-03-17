'use client';

import React from 'react';

export default function AboutCafeteria() {
  const content = {
    body: "The DIGIT College Cafeteria is more than just a place to eat—it's the social hub of our campus. We offer a diverse range of nutritious, hygienically prepared meals that cater to various palates and dietary preferences. From quick snacks between lectures to hearty traditional meals, our facility ensures students stay fueled and energized. With its modern seating, vibrant ambiance, and focus on health and cleanliness, the cafeteria provides the perfect setting for students to unwind, brainstorm ideas, and build lasting friendships over great food.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
   Campus Cafeteria
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}