import React from 'react';
import Image from 'next/image';

const Sports = () => {
  const sportsData = [
    {
      title: "Volleyball & Outdoor Sports Arena",
      content: [
        "Our professional-grade volleyball courts feature international standard synthetic surfaces and are fully floodlit, allowing for high-intensity matches and practice sessions well into the evening.",
        "Beyond volleyball, our expansive outdoor sports complex supports a wide range of activities including athletics, football, and basketball. The infrastructure is meticulously maintained to provide optimal grip, safety, and performance for competitive inter-college tournaments and daily recreational play."
      ],
      img: "/facilities/ground.jpg"
    },
    {
      title: "Indoor Games & Fitness Hub",
      content: [
        "Escape the elements and sharpen your strategic skills in our modern Indoor Sports Complex. We offer dedicated arenas for table tennis, badminton, and specialized zones for chess and carrom, providing a perfect balance of leisure and professional training.",
        "Equipped with the latest fitness technology, our indoor facilities cater to both team sports and individual conditioning. Whether you are aiming for gold in an intramural championship or just looking to unwind after lectures, our climate-controlled environment ensures year-round comfort and access to premium gaming infrastructure."
      ],
      img: "/facilities/indoor.jpg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 relative z-10 py-16 space-y-20 bg-white">
      {sportsData.map((item, index) => (
        <div 
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group"
        >
          {/* Logic: On mobile (grid-cols-1) they stack. 
              On desktop (md:grid-cols-2) they sit side-by-side.
              We use 'order' classes to handle the alternating layout.
          */}
          
          {/* Image Container */}
          <div className={`relative h-96 w-full overflow-hidden rounded-2xl ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
            <Image 
              src={item.img} 
              alt={item.title} 
              fill 
              className="object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content Container */}
          <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
            <h2 className="text-4xl font-extrabold text-[var(--color-theme-2)] mb-6">
              {item.title}
            </h2>

            {item.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg text-gray-600 leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Sports;