"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg",
  "/images/gallery/photo3.jpg",
  "/images/gallery/photo4.jpg",
  "/images/gallery/photo5.jpg",
  "/images/gallery/photo6.jpg",
  "/images/gallery/photo7.jpg",
  "/images/gallery/photo8.jpeg",
  "/images/gallery/photo9.jpeg",
  "/images/gallery/photo10.jpeg",
  "/images/gallery/photo11.jpeg",
  "/images/gallery/photo12.jpeg",
  "/images/gallery/photo13.jpeg",
];

// Duplicate for seamless loop
const doubled = [...images, ...images];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  // total width calculation
  // Each card width = 450px + 24px gap = 474px
  const totalWidth = 474 * images.length;

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-brandBlue font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Reach
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
            Global Exposure & Engagements
          </h2>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        <motion.div
          ref={trackRef}
          className="flex will-change-transform"
          animate={{ x: [0, -totalWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: images.length * 5, // Keep speed constant regardless of gallery size
              ease: "linear",
            },
          }}
          style={{ width: `${totalWidth * 2}px` }}
        >
          {doubled.map((src, i) => {
            const isPortrait = src.includes("photo2.jpg") || src.includes("photo6.jpg");
            return (
              <div
                key={`${src}-${i}`}
                className="w-[450px] h-[300px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden mx-3 shadow-md group border border-gray-200"
              >
                <div
                  className={`w-full h-full bg-no-repeat transition-transform duration-700 group-hover:scale-105 ${
                    isPortrait ? "bg-contain bg-top" : "bg-cover bg-center"
                  }`}
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
