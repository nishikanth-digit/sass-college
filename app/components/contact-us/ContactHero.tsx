import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="relative w-full h-[40vh] flex items-center overflow-hidden bg-theme">
      {/* Background Image */}
      <Image
        src="/contact/contact.jpg"
        alt="Customer Support Office"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-theme via-theme/85 to-transparent" />

      {/* Content Area */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-4">
          {/* Smaller Accent Line */}
          <div className="w-8 h-1 bg-theme-2 mb-4 rounded-full" />
          
          {/* Reduced Heading Size */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Get In <span className="text-theme-2">Touch</span>
          </h1>
          
          {/* Compact Paragraph */}
          <p className="text-body-text text-base md:text-lg leading-snug max-w-md font-light">
            Our team is online and ready to help. Reach out for support 
            or project collaborations.
          </p>
        </div>
      </div>
      
      {/* Bottom Blend */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-theme to-transparent z-20" />
    </section>
  );
};

export default ContactHero;