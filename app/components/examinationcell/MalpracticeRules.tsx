'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Optional: Install lucide-react or use the SVG below

export default function MalpracticeRules() {
  const content = {
    intro: "Malpractice isn't just about cheating; it covers any action that compromises the fairness of the assessment.",
    rules: [
      {
        title: "Unauthorized Materials",
        description: "Bringing in any printed or written matter, bits of paper, or unauthorized notes. This includes writing on hands, clothing, or desk surfaces."
      },
      {
        title: "Electronic Gadgets",
        description: "Possession of smartphones, smartwatches, programmable calculators, or Bluetooth devices—even if they are switched off."
      },
      {
        title: "Impersonation",
        description: "Having someone else sit for your exam or appearing in place of another candidate."
      },
      {
        title: "Communication",
        description: "Any form of talking, signaling, or exchanging materials (pens, erasers, etc.) with other students once the session has started."
      },
      {
        title: "Disruption",
        description: "Shouting, creating a disturbance, or refusing to follow the instructions of the invigilator."
      }
    ]
  };

  return (
    <section className="py-20 text-center relative">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-4 animate-fade-in-up ">
        Malpractice Instructions
      </h2>

      {/* Intro Paragraph */}
      <p className="text-sm md:text-base mb-6 leading-relaxed text-[var(--color-body-text)] opacity-80 italic">
        {content.intro}
      </p>

     {/* Rules Box */}
<div className="mx-auto max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 md:p-10 px-8 md:px-16">
  <ul className="space-y-6 text-left"> 
    {/* Added text-left to ensure the list content stays readable while the section is centered */}
    {content.rules.map((rule, index) => (
      <li key={index} className="flex items-start gap-4 text-[var(--color-body-text)]">
        {/* Custom Tick Icon */}
        <div className="mt-1 flex-shrink-0">
          <svg 
            className="w-5 h-5 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <p className="text-sm md:text-base leading-snug">
          <strong className="text-[var(--color-theme)] font-semibold">{rule.title}:</strong>{" "}
          <span className="opacity-90">{rule.description}</span>
        </p>
      </li>
    ))}
  </ul>
</div>
    </section>
  );
}