"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech – Computer Science",
    text: "The college provided excellent academic guidance and well-equipped labs. The supportive faculty and practical learning environment helped me strengthen my technical knowledge and confidence.",
  },
  {
    name: "Sneha Patel",
    course: "MBA – Marketing",
    text: "Studying here helped me understand real business concepts through practical exposure and faculty mentorship. The learning atmosphere encouraged creativity and professional development.",
  },
  {
    name: "Arjun Reddy",
    course: "B.Tech – Mechanical Engineering",
    text: "The campus offers great opportunities for learning beyond the classroom. Technical workshops, projects, and supportive professors helped me grow both academically and personally.",
  },
  {
    name: "Priya Nair",
    course: "B.Tech – Information Technology",
    text: "The college focuses on skill development along with academics. Regular seminars, training programs, and industry interactions helped me prepare for real career challenges.",
  },
  {
    name: "Vikram Singh",
    course: "MBA – Finance",
    text: "The structured curriculum and experienced faculty made learning very engaging. The college environment motivates students to develop leadership skills and professional discipline.",
  },
  {
    name: "Ananya Das",
    course: "B.Tech – Electronics & Communication",
    text: "My experience at the college has been very enriching. The academic support, modern facilities, and collaborative learning culture helped me achieve my academic goals.",
  },
];

export default function StudentTestimonials() {
  return (
    <section className="py-20 bg-theme-bg-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            What Our Students Say
          </h2>

          <p className="mt-4 text-body-text max-w-2xl mx-auto">
            Hear from our students about their learning experience,
            campus life, and opportunities at our institution.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex">
              <div className="bg-white border min-h-[312px] border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex flex-col h-full">

                {/* Student */}
                <div className="flex items-center gap-4 mb-6">
                  {/* <Image
                    src="/student-placeholder.png"
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  /> */}

                  <div>
                    <h4 className="font-semibold text-theme">
                      {item.name}
                    </h4>

                    <p className="text-sm text-body-text">
                      {item.course}
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-body-text leading-relaxed flex-grow">
                  "{item.text}"
                </p>

                {/* Accent line */}
                <div className="mt-6 h-1 w-12 bg-theme-2 rounded"></div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}