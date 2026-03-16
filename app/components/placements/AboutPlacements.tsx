'use client';

import React from "react";

export default function AboutPlacements() {
  const content = {
    body: "The Digit College Placement Cell plays a vital role in shaping students’ professional journeys by acting as a strong bridge between academic learning and industry opportunities. It actively collaborates with leading organizations to organize campus recruitment drives, career guidance sessions, and industry interaction programs that expose students to real-world professional environments. Through continuous training initiatives such as resume-building workshops, aptitude preparation, communication skill development, and mock interviews, the Placement Cell ensures that students are well-prepared to confidently participate in modern recruitment processes. By fostering strong relationships with companies across various sectors, the Placement Cell consistently creates meaningful career opportunities, enabling students to launch successful and rewarding careers in their chosen fields.",
  };

  return (
    <section className="w-full py-16 bg-theme-bg-light">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-theme mb-8 relative inline-block">
          About Placement Cell
          <span className="absolute -bottom-2 left-0 w-20 h-1 bg-theme-2 rounded-full"></span>
        </h2>

        {/* Content */}
        <div className="max-w-4xl">
          <p className="text-body-text leading-relaxed text-[15px] lg:text-base text-justify">
            {content.body}
          </p>
        </div>

      </div>
    </section>
  );
}