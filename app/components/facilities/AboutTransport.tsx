'use client';

import React from 'react';

export default function AboutTransport() {
  const content = {
    body: "The college transport system serves as a central mobility hub, providing students with essential connectivity and specialized transit options to support their daily commute.It offers Express Shuttle Zones, which are efficient, high-frequency transit points specifically designed for rapid inter-campus travel and timely arrival at lectures. For regional needs, the Commuter Network provides wide-reaching access to premium bus routes, rail links, and park-and-ride facilities necessary for students living off-campus. To support sustainable travel, Eco-Mobility Hubs offer secure bike-sharing stations equipped with maintenance tools and electric charging points for low-carbon transit and active commuting..",
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-left bg-[var(--background)]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-theme)]">
       College Transport
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-body-text)]">
        {content.body}
      </p>
    </section>
  );
}