'use client';

import React from 'react';

const CareerGuidancePage = () => {
  const services = [
    {
      title: "Resume Analysis",
      desc: "Expert feedback to create ATS-friendly and industry ready resumes."
    },
    {
      title: "Mock Interviews",
      desc: "Real interview simulations to improve communication and technical articulation."
    },
    {
      title: "Personality Analysis",
      desc: "Career mapping assessments to identify strengths and professional direction."
    }
  ];

  const workshops = [
    "Soft Skills Development",
    "GATE Preparation",
    "Alumni Mentorship"
  ];

  return (
    <div className="min-h-screen bg-theme-bg-light font-sans text-theme">

      {/* Hero Section */}
      <section className="py-20 text-center relative">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            Career Guidance
          </h1>

          <p className="text-lg text-body-text leading-relaxed">
            DIGIT College of Engineering supports students with structured
            career mentoring, interview preparation, and industry readiness
            programs to ensure successful professional growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <main className="max-w-7xl mx-auto px-4 pb-20">

        <section className="grid md:grid-cols-3 gap-8 mb-16">

          {services.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-theme-2 transition-colors">
                {item.title}
              </h3>

              <p className="text-body-text leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </section>

        {/* Workshops Section */}
        <section className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">

          <h2 className="text-3xl font-bold mb-8">
            Workshops & <span className="text-theme-2">Mentorship</span>
          </h2>

          <ul className="space-y-5">
            {workshops.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 text-lg text-body-text"
              >
                <span className="w-3 h-3 rounded-full bg-theme-2"></span>
                {item}
              </li>
            ))}
          </ul>

        </section>

      </main>
    </div>
  );
};

export default CareerGuidancePage;