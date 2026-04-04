"use client";

import React from 'react';

interface FacultyProps {
  name: string;
  designation: string;
  subject: string;
  imageUrl: string;
}

const Faculty = ({ name, designation, subject, imageUrl }: FacultyProps) => {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-gray-900 shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-cyan-500/20">
      
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-2"
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Floating Content Card */}
      <div className="absolute bottom-4 left-4 right-4 translate-y-8 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:bg-white/20">
        
        {/* Designation Tag */}
        <span className="mb-2 inline-block rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
          {designation}
        </span>

        {/* Faculty Name */}
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {name}
        </h3>

        {/* Subject Reveal Section */}
        <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-3 group-hover:max-h-20">
          <p className="text-sm leading-relaxed text-gray-200">
            <span className="font-semibold text-cyan-400">Department:</span> {subject}
          </p>
          
          {/* Social Icons Placeholder */}
          <div className="mt-4 flex gap-3">
            <div className="h-2 w-2 rounded-full bg-white/50" />
            <div className="h-2 w-2 rounded-full bg-white/50" />
            <div className="h-2 w-2 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;