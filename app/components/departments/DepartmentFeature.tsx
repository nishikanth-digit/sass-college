import React from 'react';

interface Department {
  id: string;
  name: string;
  image: string;
  hoverColorClass: string; // Dynamic border accent color on hover
}

const featuredDepartments: Department[] = [
  {
    id: '1',
    name: 'Computer Science & Engineering',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    hoverColorClass: 'hover:border-blue',
  },
  {
    id: '2',
    name: 'Core Engineering',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    hoverColorClass: 'hover:border-teal',
  },
  {
    id: '3',
    name: 'Master of Business Administration (MBA)',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    hoverColorClass: 'hover:border-purple',
  },
  {
    id: '4',
    name: 'Agricultural Sciences',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
    hoverColorClass: 'hover:border-green',
  },
];

export default function DepartmentsFeature() {
  return (
    <section className="bg-theme-bg-light py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-sm font-semibold tracking-wider text-theme-2 uppercase">
            Our Streams
          </span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-theme sm:text-4xl">
            Featured Departments
          </h2>
        </div>

        {/* Neatly Styled Slider Wrapper */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth">
          {featuredDepartments.map((dept) => (
            <article 
              key={dept.id}
              className={`min-w-[280px] sm:min-w-[320px] md:min-w-[28%] flex-1 snap-start bg-white rounded-2xl border-2 border-transparent shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer ${dept.hoverColorClass}`}
            >
              {/* Card Image with Beautiful Corner Radius Overlays */}
              <div className="relative h-60 w-full overflow-hidden bg-white">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark branding gradient overlay for crisp image contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-theme/20 to-transparent" />
              </div>

              {/* Card Heading Area */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-theme tracking-tight leading-snug transition-colors group-hover:text-theme-2">
                  {dept.name}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}