"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  button1: string;
  button2: string;
  link1: string;
  link2: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/home/slider1.jpg",
    subtitle: "DIGIT College of Engineering",
    title: "Admissions Open 2026",
    description:
      "Begin your journey towards academic excellence. Explore our undergraduate and postgraduate programs designed to shape future innovators and leaders.",
    button1: "Apply Now",
    button2: "View Courses",
    link1: "/admissions",
    link2: "/courses",
  },
  {
    id: 2,
    image: "/home/slider2.jpg",
    subtitle: "DIGIT College of Engineering",
    title: "Top Placements & Career Success",
    description:
      "Our dedicated placement cell connects students with leading companies, ensuring outstanding career opportunities and industry exposure.",
    button1: "Placement Stats",
    button2: "Our Recruiters",
    link1: "/placements",
    link2: "/recruiters",
  },
  {
    id: 3,
    image: "/home/slider3.jpg",
    subtitle: "DIGIT College of Engineering",
    title: "Examinations & Academic Excellence",
    description:
      "Transparent evaluation, structured assessments, and continuous academic monitoring to help students achieve consistent performance.",
    button1: "Exam Schedule",
    button2: "Results",
    link1: "/examinations",
    link2: "/results",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay using theme color */}
          <div className="absolute inset-0 bg-[var(--theme-color)]/70" />

          {/* Content */}
          <div className="relative z-30 container mx-auto h-full flex items-center px-6">
            <div className="max-w-2xl text-white">
              {/* Subtitle */}
              <h6 className="text-white uppercase tracking-[4px] font-bold mb-2 text-lg relative inline-block">
                {slide.subtitle}
                <span className="block w-18 h-[3px] bg-[var(--theme-color2)] mt-2"></span>
              </h6>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold my-2 leading-tight">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-[var(--color-footer-text)] text-lg leading-7 mb-8">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Link
                  href={slide.link1}
                  className="bg-[var(--theme-color2)] hover:bg-white hover:text-[var(--theme-color)] text-white px-6 pt-3 pb-0 rounded-full transition duration-300 font-semibold"
                >
                  {slide.button1}
                </Link>

                <Link
                  href={slide.link2}
                  className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-[var(--theme-color)] transition duration-300 font-semibold"
                >
                  {slide.button2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-[var(--theme-color)] w-12 h-12 rounded-full flex items-center justify-center transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-[var(--theme-color)] w-12 h-12 rounded-full flex items-center justify-center transition"
      >
        ❯
      </button>

      
    </section>
  );
}