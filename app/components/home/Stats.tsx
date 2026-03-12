"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Users,
  UserCheck,
  Briefcase,
} from "lucide-react";

type StatType = {
  number: number;
  suffix?: string;
  label: string;
  icon: any;
  color: string;
};

export default function Stats() {
  const stats: StatType[] = [
 
    {
      number: 5000,
      suffix: "+",
      label: "Students",
      icon: Users,
      color: "text-[var(--theme-blue)]",
    },
    {
      number: 120,
      suffix: "+",
      label: "Faculty Members",
      icon: UserCheck,
      color: "text-[var(--theme-green)]",
    },
    {
      number: 95,
      suffix: "%",
      label: "Placement Rate",
      icon: Briefcase,
      color: "text-[var(--theme-color2)]",
    },
  ];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
     
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4 text-center"
            >
              <Icon size={28} className={`mx-auto mb-2 ${item.color}`} />

              <Counter
                target={item.number}
                suffix={item.suffix}
                start={startCount}
              />

              <p className="text-[var(--body-text-color)] text-[14px]">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

type CounterProps = {
  target: number;
  suffix?: string;
  start: boolean;
};

function Counter({ target, suffix = "", start }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, target]);

  return (
    <h2 className="text-[18px] font-bold text-[var(--theme-color)]">
      {count}
      {suffix}
    </h2>
  );
}