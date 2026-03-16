"use client";

import React from "react";

const IconPlaceholder = ({ d }: { d: string }) => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const services = [
  {
    title: "Counseling",
    path: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    title: "Student Loans",
    path: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Scholarships",
    path: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Pre-Departure",
    path: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
  },
];

export default function Study_Aboard() {
  return (
    <section className="py-24 bg-theme-bg-light">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-theme mb-4">
            Graduate Study <span className="text-theme-2">Abroad Center</span>
          </h2>
          <div className="h-1 w-24 bg-theme-2 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 border border-gray-200 rounded-2xl bg-white hover:border-theme-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Icon */}
              <div className="mb-6 p-3 bg-pink-50 w-fit rounded-xl text-theme-2 group-hover:bg-theme-2 group-hover:text-white transition-all duration-300">
                <IconPlaceholder d={service.path} />
              </div>

              <h3 className="text-xl font-bold text-theme mb-3 group-hover:text-theme-2 transition-colors">
                {service.title}
              </h3>

              <p className="text-body-text text-sm leading-relaxed">
                Expert guidance tailored for your engineering career path abroad.
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}