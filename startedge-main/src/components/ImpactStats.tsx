"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, Globe2 } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "26+",
    label: "Years Leadership Experience",
    icon: Award,
  },
  {
    id: 2,
    value: "100+",
    label: "Corporate Business Leaders Trained",
    icon: Briefcase,
  },
  {
    id: 3,
    value: "1,00,000+",
    label: "Students Guided",
    icon: Users,
  },
  {
    id: 4,
    value: "Trusted",
    label: "by leading corporates",
    icon: Globe2,
  },
];

export default function ImpactStats() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-executiveGold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Measurable Credibility
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              Driving Transformation Across Businesses and Institutions
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group"
            >
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 text-brandBlue rounded-full mb-6 group-hover:bg-brandBlue group-hover:text-white transition-colors">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-bold font-heading text-navy mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
