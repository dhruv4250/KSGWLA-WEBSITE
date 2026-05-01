"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Dr. Vishal Khasgiwala, a leading business consultant in Gujarat, helped us strengthen our channel distribution strategy and successfully position Whattup in the market. His guidance enabled a clear shift towards a service-oriented business model, improving customer value and scalability.",
    name: "Mr. Utsav Doshi",
    role: "Joint Director, Rajoo Engineering Ltd. & Founder, Whattup",
    company: "Rajkot (Gujarat)",
  },
  {
    id: 2,
    quote:
      "With the support of Startedge, we improved our go-to-market strategy and built a strong distribution network. The focus on service-driven growth and customer engagement contributed to better brand positioning and business expansion.",
    name: "Ms. Karishma Doshi",
    role: "Director",
    company: "The Think Yellow Pvt. Ltd. Rajkot, (Gujarat)",
  },
  {
    id: 3,
    quote:
      "The consultancy support helped us scale operations, enhance new product development, and establish a structured business ecosystem. This resulted in improved efficiency and long-term growth planning.",
    name: "Mr. Himal Solanki",
    role: "MD",
    company: "Vasundhara Enterprises, Rajkot, (Gujarat)",
  },
  {
    id: 4,
    quote:
      "Dr. Vishal Khasgiwala supported us in developing sales and HR SOPs, leading to better lead generation, conversion rates, and customer retention. The training improved team productivity and overall business performance.",
    name: "Mr. Bhavin Chande",
    role: "Founder",
    company: "Physiofit, Rajkot, (Gujarat)",
  },
  {
    id: 5,
    quote:
      "Dr. Vishal expertise in HR policy development and business strategy consulting helped us build a stronger sales process and business development model, resulting in measurable business growth.",
    name: "Mr. Vimal Dholakia",
    role: "MD",
    company: "Top India Elevator Pvt. Ltd., Rajkot, (Gujarat)",
  },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[index, direction], setSlide] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const go = (dir: number) => {
    setSlide(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  // Auto-advance every 8 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => go(1), 8000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const t = testimonials[index];
  const initials = t.name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(-2)
    .map((w) => w[0])
    .join("");

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brandBlue font-semibold tracking-wider uppercase text-sm mb-3 block">
            Client Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy">
            What Clients Say
          </h2>
        </motion.div>

        {/* Card */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-6 md:p-14 shadow-md border border-gray-100 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Large decorative quote */}
              <Quote className="absolute top-8 right-10 h-16 w-16 text-gray-100" />

       
              {/* Quote */}
              <p className="text-gray-600 text-base md:text-xl leading-relaxed italic mb-6 md:mb-10 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-white font-bold font-heading text-lg flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy text-lg leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-sm text-brandBlue font-medium mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide mt-0.5 uppercase">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-navy hover:text-navy transition-colors shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-navy hover:text-navy transition-colors shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide([i, i > index ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-navy w-6"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
