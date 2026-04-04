"use client";

import React, { useState } from "react";

const JointKineticWheel = () => (
  <div className="absolute -top-20 -right-20 opacity-[0.06] pointer-events-none select-none text-[var(--color-theme)]">
    <svg width="400" height="400" viewBox="0 0 100 100">
      <style>{`
        .outline-crawl {
          stroke-dasharray: 5;
          animation: clockwise-crawl 15s linear infinite;
        }
        @keyframes clockwise-crawl {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .slow-rotation {
          transform-origin: center;
          animation: rotate-box 40s linear infinite;
        }
        @keyframes rotate-box {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <g className="slow-rotation">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="2,2"/>
        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.6" className="outline-crawl"/>
        <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.8" className="outline-crawl"/>
        <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1,4"/>
      </g>
    </svg>
  </div>
);

interface Leader {
  id: string;
  role: string;
  name: string;
  message: string[];
  image: string;
}

const leadershipData: Leader[] = [
  {
    id: 'principal',
    role: 'Principal',
    name: 'Dr. Elena Vance',
    message: [
      "At GDigit Engineering College, our academic philosophy is built upon the twin pillars of extreme rigor and relentless innovation. We have carefully curated an environment where every student's latent potential is not just recognized, but systematically nurtured through personalized mentorship and access to global research standards.",
      "Our commitment extends far beyond the traditional classroom walls. We are dedicated to ensuring our graduates emerge as technically proficient architects of change, equipped with the ethical grounding required to navigate and lead within the complex, rapidly shifting global technological landscape.",
      "We believe in building not just engineers, but leaders who will define the next century of progress. Through our interdisciplinary approach, we ensure that every student is prepared for the challenges of tomorrow."
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'president',
    role: 'President',
    name: 'Dr. Arthur Sterling',
    message: [
      "As the President of GDigit, my vision is to redefine the traditional boundaries of technical education. We are not just building an institution; we are architecting an ecosystem where theoretical brilliance meets industrial grit. Our mission is to empower a generation that creates jobs through innovation.",
      "We have invested heavily in sustainable infrastructure and global research labs, ensuring that our students are working on solutions for the next century. My door is always open to ideas that challenge the status quo and push GDigit toward becoming a global beacon of excellence.",
      "The synergy between our board of governors and the student body is what makes us unique. We lead with empathy, transparency, and a relentless pursuit of perfection in everything we do."
    ],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'councillor',
    role: 'Councillor',
    name: 'Sarah Jenkins',
    message: [
      "In my capacity as Councillor, my primary focus is the holistic development and welfare of our student community. I believe that a student's success is not just measured by their GPA, but by their ability to lead, collaborate, and contribute ethically to society.",
      "We are committed to maintaining a transparent bridge between the administration and the students. Every policy we draft and every initiative we launch is designed to ensure that the student voice acts as the primary driver of institutional change.",
      "Our council works tirelessly to bring in diverse perspectives, fostering a campus culture where innovation is born out of inclusion and mutual respect."
    ],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'pro-councillor',
    role: 'Pro Councillor',
    name: 'Marcus Chen',
    message: [
      "Leadership at GDigit is about service and action. As Pro Councillor, I work closely with the student body to transform academic challenges into opportunities for growth. My focus is on decentralizing innovation—making sure every student has the tools to launch a project.",
      "We are currently rolling out new mentorship frameworks that pair senior students with industry veterans. This ensures that the transition from campus life to professional reality is seamless and impactful.",
      "My goal is to ensure that every student's journey at GDigit is marked by discovery, resilience, and a sense of belonging to a community of world-changers."
    ],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'executive',
    role: 'Executive Member',
    name: 'Dr. Robert Hales',
    message: [
      "The Executive Committee is the strategic engine of GDigit. My role involves overseeing the long-term growth and global placement strategies of our institution. We are constantly analyzing global tech trends to ensure our curriculum stays ahead.",
      "We focus on 'Strategic Partnerships'—linking our labs with international research centers and tech giants. This gives our students access to high-stakes projects providing them with a massive competitive edge.",
      "By maintaining a lean and forward-thinking executive structure, we ensure that GDigit remains agile and responsive to the needs of the modern technological era."
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'board',
    role: 'Board Member',
    name: 'Prof. Linda Wu',
    message: [
      "As a member of the Board, I am tasked with upholding the academic sanctity and institutional integrity of GDigit. We serve as the guardians of the college’s mission, ensuring that every decision aligns with our core values of excellence.",
      "Our board is comprised of thinkers and doers from diverse backgrounds, providing the oversight necessary to maintain our status as a premier engineering hub. We focus on faculty excellence and institutional growth.",
      "We take pride in the legacy we are building here. Every course offered is a testament to our commitment to shaping the future of engineering education."
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
  }

];

const Management = () => {
  const [activeTab, setActiveTab] = useState<Leader>(leadershipData[0]);

  return (
    <section className="bg-[var(--theme-bg-light)] py-16 flex justify-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-4 flex flex-col space-y-6">

          <div>
            <h2 className="text-[var(--color-theme-2)] font-bold tracking-[0.25em] uppercase text-xs mb-2">
              Leadership Messages
            </h2>

            <h1 className="text-4xl font-extrabold text-[var(--color-theme)] leading-tight">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-theme-2)] to-[var(--color-purple)]">
                Leadership Team
              </span>
            </h1>
          </div>   <div className="flex flex-col space-y-3">
            {leadershipData.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveTab(member)}
                className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 border
                ${
                  activeTab.id === member.id
                    ? "bg-white border-[var(--color-theme-2)] shadow-md text-[var(--color-theme)]"
                    : "bg-white/60 border-gray-200 text-[var(--color-body-text)] hover:bg-white"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">
                  {member.role}
                </span>

                <div
                  className={`w-2 h-2 rounded-full ${
                    activeTab.id === member.id
                      ? "bg-[var(--color-theme-2)]"
                      : "bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8 relative">

          <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-xl min-h-[520px]">

            <JointKineticWheel />

            <div key={activeTab.id} className="relative z-10">

              <div className="flex flex-col md:flex-row items-center gap-10 mb-8 pb-8 border-b border-gray-200">

                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--color-theme-2)] to-[var(--color-purple)] rounded-xl blur opacity-20" />

                  <img
                    src={activeTab.image}
                    alt={activeTab.name}
                    className="relative w-40 h-52 object-cover rounded-lg border border-gray-200 shadow-lg"
                  />
                </div>

                <div className="space-y-3">

                  <div className="inline-block px-3 py-1 bg-[var(--color-theme-2)]/10 border border-[var(--color-theme-2)]/30 rounded-md">
                    <p className="text-[var(--color-theme-2)] font-bold uppercase tracking-widest text-xs">
                      {activeTab.role}
                    </p>
                  </div>

                  <h3 className="text-3xl font-bold text-[var(--color-theme)]">
                    {activeTab.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-[var(--color-theme-2)]/60" />
                    <p className="text-[var(--color-body-text)] text-xs uppercase tracking-widest">
                      Institutional Authority
                    </p>
                  </div>

                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-5">
                {activeTab.message.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[var(--color-body-text)] text-[15px] leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Management;