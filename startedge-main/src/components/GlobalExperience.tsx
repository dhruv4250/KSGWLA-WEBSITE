"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "International Conferences",
    span: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Corporate Workshops",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Awards & Recognitions",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Business Mentoring",
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
];

export default function GlobalExperience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brandBlue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Reach
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Global Exposure & Engagements
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-auto md:h-[600px] auto-rows-[200px]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded ${exp.span}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${exp.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl md:text-2xl font-heading font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {exp.title}
                </h3>
                <div className="w-12 h-1 bg-executiveGold mt-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
