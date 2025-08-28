import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    company: "Gymstory",
    name: "Diana Loreza",
    position: "Director of GYMSTORY",
    headline: "Stratex Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
    feedback:
      "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    company: "FitWorld",
    name: "Alex Morgan",
    position: "CEO of FitWorld",
    headline: "Stratex is the Amazing Team and Top-Notch Results!",
    feedback:
      "Working with Ideapeel was a game-changer for our online presence. Their professionalism and expertise delivered beyond our expectations. Highly recommend them to anyone!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { company, name, position, headline, feedback, image } =
    testimonials[currentIndex];

  return (
    <section className="py-10 bg-white text-center">
      <div className="max-w-3xl mx-auto mb-12">
        <p className="uppercase text-sm text-gray-500 tracking-wide">Testimonial</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Customer is Our Top Priority
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          We survey all of our clients, the results of which go directly to our CEO.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="bg-[#dec827] border border-gray-200 rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div className="text-left space-y-4">
            <h3 className="text-lg text-gray-900 font-semibold">{company}</h3>
            <h4 className="text-xl text-gray-700 font-bold leading-snug">{headline}</h4>
            <p className="text-gray-500">{feedback}</p>
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm font-semibold text-gray-500">{position}</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt={name}
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-[-20px] lg:left-[-80px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-[-20px] lg:right-[-80px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
