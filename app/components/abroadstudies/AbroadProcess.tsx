"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, 
  Map, 
  GraduationCap, 
  FileText, 
  Languages, 
  MailCheck, 
  IdCard, 
  PlaneTakeoff 
} from "lucide-react";

interface TimelineStep {
  id: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: TimelineStep[] = [
  {
    id: 1,
    title: "Study Abroad Orientation",
    shortDesc: "Conducted every semester",
    detailedDesc: "Your official starting point. Attend the mandatory university session to understand global opportunities, baseline requirements, and general timelines available to you.",
    icon: Compass,
  },
  {
    id: 2,
    title: "Course Mapping & Eligibility",
    shortDesc: "Meet with your Coordinator",
    detailedDesc: "Sit down with your academic advisor to match credits. Ensure the courses you take abroad seamlessly transfer back to your home degree without delaying graduation.",
    icon: Map,
  },
  {
    id: 3,
    title: "Choose University & Program",
    shortDesc: "Select your destination",
    detailedDesc: "Filter through partner institutions based on your budget, culture preferences, and course availability. Finalize your top 3 target universities.",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Submit Application Documents",
    shortDesc: "Transcripts, SOP & LORs",
    detailedDesc: "Compile your academic portfolio. Write a compelling Statement of Purpose (SOP) and request Letters of Recommendation (LOR) from faculty members.",
    icon: FileText,
  },
  {
    id: 5,
    title: "English Proficiency Test",
    shortDesc: "IELTS / TOEFL / PTE / Duolingo",
    detailedDesc: "Book and clear your language proficiency test. Ensure your scores match or exceed the specific benchmarks required by your destination institution.",
    icon: Languages,
  },
  {
    id: 6,
    title: "Receive Offer Letter",
    shortDesc: "Securing your spot",
    detailedDesc: "The waiting game ends! Upon review, target universities will issue a conditional or unconditional Offer Letter. Review the terms and accept your spot.",
    icon: MailCheck,
  },
  {
    id: 7,
    title: "Apply for Student Visa",
    shortDesc: "Legal documentation & permits",
    detailedDesc: "Gather your offer letter, financial proofs, and medical clearances. Book an interview at the respective embassy or submit your visa application portal.",
    icon: IdCard,
  },
  {
    id: 8,
    title: "Pre-departure Briefing",
    shortDesc: "Orientation & Final Check",
    detailedDesc: "Final preparation phase. Learn about cultural adjustments, health insurance setup, housing coordination, and what crucial items to pack.",
    icon: PlaneTakeoff,
  },
];

const doubleSteps = [...steps, ...steps];

export default function StudyAbroadTimeline() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.6; 
    const totalHeight = container.scrollHeight / 2;

    const scrollUpdate = () => {
      if (!isHovered) {
        scrollPosRef.current += scrollSpeed;
        
        if (scrollPosRef.current >= totalHeight) {
          scrollPosRef.current = 0;
        }
        container.scrollTop = scrollPosRef.current;

        const children = Array.from(container.children) as HTMLElement[];
        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
          const distance = Math.abs((child.offsetTop - container.offsetTop) - container.scrollTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index % steps.length;
          }
        });

        setActiveTab(closestIndex);
      } else {
        scrollPosRef.current = container.scrollTop;
      }

      animationFrameRef.current = requestAnimationFrame(scrollUpdate);
    };

    animationFrameRef.current = requestAnimationFrame(scrollUpdate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHovered]);

  const handleManualSelect = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const normalizedIndex = index % steps.length;
    setActiveTab(normalizedIndex);

    const targetChild = container.children[normalizedIndex] as HTMLElement;
    if (targetChild) {
      scrollPosRef.current = targetChild.offsetTop - container.offsetTop - 12;
      container.scrollTo({
        top: scrollPosRef.current,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-theme-white text-body-text flex items-center justify-center px-6 py-12 md:py-24 selection:bg-theme-2/20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Fixed Heading Content */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 self-start">
          <span className="text-xs font-bold tracking-widest text-theme-2 uppercase bg-white px-3.5 py-1.5 rounded-full border border-theme-2/20 shadow-sm">
            Roadmap to Global Education
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-theme leading-tight">
            How to Apply – <br />Step by Step
          </h2>
          <p className="text-body-text text-base leading-relaxed max-w-md">
            Track your journey smoothly. Hover over the continuously scrolling timeline on the right side to freeze the motion instantly.
          </p>

          {/* Quick Line Indicators */}
          <div className="flex flex-wrap gap-2 pt-4">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualSelect(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeTab ? "w-10 bg-theme-2" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Jump to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Box Containers */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:col-span-7 h-[550px] overflow-y-scroll space-y-4 pr-2 scrollbar-none relative rounded-2xl  p-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doubleSteps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index % steps.length === activeTab;

            return (
              <div
                key={`${step.id}-${index}`}
                onClick={() => handleManualSelect(index)}
                className={`w-full p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative flex flex-col gap-3 select-none bg-theme border-theme/40 shadow-lg ${
                  isActive 
                    ? "shadow-theme-2/20 ring-2 ring-theme-2/50 scale-[1.01]" 
                    : "opacity-95 hover:opacity-100"
                }`}
              >
                {/* Structural Box Content */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Icon Container: Always uses Theme Pink Accent */}
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-theme-2 text-white shadow-md shadow-theme-2/30">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      {/* Step Number label */}
                      <span className="text-xs font-mono font-bold text-theme-2/90">
                        STEP 0{step.id}
                      </span>
                      {/* Card Title: Always White */}
                      <h3 className="text-lg font-bold tracking-wide text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  {/* Short Description Badge */}
                  <span className="text-xs px-2.5 py-1 rounded-md border font-medium bg-white/10 border-white/20 text-white">
                    {step.shortDesc}
                  </span>
                </div>

                {/* Detailed Description: Always light readable text */}
                <p className="text-sm leading-relaxed max-w-xl text-white/80">
                  {step.detailedDesc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}