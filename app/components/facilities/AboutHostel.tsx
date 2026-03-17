'use client';

import React from 'react';

export default function AboutHostel() {
  const content = {
    body: "At DIGIT College of Engineering, we prioritize your comfort and academic success by providing separate, secure, and modern hostel facilities for men and women. Our campus residences are designed to foster a vibrant community atmosphere while ensuring a tranquil environment conducive to focused study and personal growth. Equipped with essential amenities and round-the-clock security, our hostels serve as a true home away from home for every student. Experience a seamless balance of convenience and camaraderie as you embark on your engineering journey with us.",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
      Campus Hostel
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}