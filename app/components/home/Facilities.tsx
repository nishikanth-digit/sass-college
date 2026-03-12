"use client";

import {
  BookOpen,
  MonitorSmartphone,
  FlaskConical,
  Wifi,
  Bus,
  Building,
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Central Library",
      icon: BookOpen,
      description:
        "Extensive collection of books, journals and digital resources supporting academic excellence and research development.",
    },
    {
      title: "Smart Classrooms",
      icon: MonitorSmartphone,
      description:
        "Digitally enabled classrooms equipped with interactive teaching systems and modern presentation tools.",
    },
    {
      title: "Advanced Laboratories",
      icon: FlaskConical,
      description:
        "Fully equipped laboratories providing hands-on practical exposure for science and technology programs.",
    },
    {
      title: "Campus Wi-Fi",
      icon: Wifi,
      description:
        "High-speed internet connectivity available across the entire campus for students and faculty.",
    },
    {
      title: "Transportation",
      icon: Bus,
      description:
        "Safe and reliable transportation facilities connecting major city locations.",
    },
    {
      title: "Hostel & Infrastructure",
      icon: Building,
      description:
        "Comfortable hostel accommodations with modern infrastructure ensuring a safe living environment.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Left Side - Big Heading */}
          <div className="lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-theme)]">
              Campus <br /> Facilities
            </h2>

            <p className="mt-8 text-[var(--body-text-color)] leading-relaxed">
              We provide a modern campus environment designed to enhance
              learning, innovation, and student well-being.
            </p>
          </div>

          {/* Right Side - Facility List */}
          <div className="lg:col-span-2 space-y-14">
             <div className="space-y-20">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <div
                key={index}
                className="group relative border-b border-gray-200 pb-16 
                           transition-all duration-500 hover:translate-x-4"
              >
                {/* Large Background Number */}
                <span className="absolute -top-10 left-0 text-[120px] font-extrabold 
                                 text-gray-50 select-none pointer-events-none 
                                 transition-all duration-500 
                                 group-hover:text-gray-200">
                  {`0${index + 1}`}
                </span>

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                  {/* Left Content */}
                  <div className="flex items-start gap-6 max-w-2xl">

                    <div className="text-[var(--theme-color2)] 
                                    transition-all duration-500 
                                    group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={40} />
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold 
                                     text-[var(--theme-color)] 
                                     transition-colors duration-500 
                                     group-hover:text-[var(--theme-color2)]">
                        {facility.title}
                      </h3>

                      <p className="mt-5 text-[var(--body-text-color)] leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Accent Line */}
                  <div className="h-[2px] w-24 bg-[var(--theme-color2)] 
                                  transition-all duration-500 
                                  group-hover:w-40">
                  </div>

                </div>
              </div>
            );
          })}
        </div>
          </div>

        </div>
      </div>
    </section>
  );
}