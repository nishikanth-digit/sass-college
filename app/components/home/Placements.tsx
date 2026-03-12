"use client"
import React from 'react';
import Image from 'next/image';
import { Briefcase } from "lucide-react";

interface CompanyLogo {
  name: string;
  src: string;
}

const alumniLogos: CompanyLogo[] = [
  { name: "TCS", src: "/home/placements/company-logos/tcs_logo.png" },
  { name: "Kiyo Solutions", src: "/home/placements/companynewlogos/kiyo-solutions-UMD9r4ID.png" },
  { name: "Norm Software", src: "/home/placements/companynewlogos/normsoftware.png" },
  { name: "ARCOT", src: "/home/placements/company-logos/arcot.webp" },
  { name: "Submit Tech", src: "/home/placements/company-logos/Submit-tech-logo.png" },
  { name: "Accenture", src: "/home/placements/company-logos/bookdemo-accenture-logo.png" },
  { name: "Infosys", src: "/home/placements/company-logos/infosys.png" },
  { name: "Cognizant", src: "/home/placements/company-logos/cognizant-logo.svg" },
  { name: "EPAM", src: "/home/placements/company-logos/epam-logo.svg" },
  { name: "CGI", src: "/home/placements/company-logos/cgi.png" },
  { name: "DXC Technology", src: "/home/placements/company-logos/dxc_logo.png" },
  { name: "Solix", src: "/home/placements/company-logos/solix-logo.svg" },
];

const Placements = () => {

  const half = Math.ceil(alumniLogos.length / 2);
  const row1Logos = alumniLogos.slice(0, half);
  const row2Logos = alumniLogos.slice(half);

  const getSeamlessContent = (logos: CompanyLogo[]) => {
    return [...logos, ...logos, ...logos, ...logos];
  };

  const row1Content = getSeamlessContent(row1Logos);
  const row2Content = getSeamlessContent(row2Logos);

  return (
    <section className="w-full bg-theme py-16 relative overflow-hidden">

      <style jsx>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }
        .animate-scroll-left {
          animation: scrollLeft 35s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4 text-theme-2 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-theme-2">
              Career Opportunities
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Students Placed In Leading Companies
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We take pride in our strong placement record. Our students are recruited
            by top multinational companies and industry leaders across various sectors.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative w-full border-t border-gray-600">

      
          {/* Row 1 → Right */}
          <div className="relative w-full overflow-hidden border-b border-gray-600 flex">
            <div className="flex animate-scroll-right w-max">
              {row1Content.map((company, index) => (
                <LogoCard key={`r1-${index}`} company={company} />
              ))}
            </div>
          </div>

          {/* Row 2 → Left */}
          <div className="relative w-full overflow-hidden border-b border-gray-600 flex">
            <div className="flex animate-scroll-left w-max">
              {row2Content.map((company, index) => (
                <LogoCard key={`r2-${index}`} company={company} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const LogoCard = ({ company }: { company: CompanyLogo }) => {
  return (
    <div 
      className="group relative h-24 w-50 sm:w-60 shrink-0 
                 border-r border-gray-600 
                 flex items-center justify-center overflow-hidden 
                 transition-colors duration-300 
                 "
    >
      {/* Brand Accent Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 
                      bg-theme-2 
                      translate-x-[-100%] 
                      group-hover:translate-x-0 
                      transition-transform duration-500" />

      <div className="relative w-[55%] h-[50%] transition-transform duration-300 group-hover:scale-110">
        <Image
          src={company.src}
          alt={`${company.name} Logo`}
          fill
          sizes="200px"
          className="object-contain opacity-80 group-hover:opacity-100 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Placements;