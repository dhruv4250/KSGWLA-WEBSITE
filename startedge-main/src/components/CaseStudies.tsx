"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    id: 1,
    category: "Business Strategy",
    title: "Business Strategy Transformation",
    description: "Architecting a high-growth roadmap for a regional enterprise, resulting in 40% increased market penetration and streamlined operations within 18 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Leadership Strategy",
    title: "Leadership Development Programs",
    description: "Deploying an executive-level capability building framework that transformed middle managers into strategic leaders for a leading corporation.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Institutional Growth",
    title: "Corporate Capability Building",
    description: "Designing end-to-end skill enhancement workshops that propelled organizational agility and fostered a future-ready workforce.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-executiveGold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Transforming Organizations Through Strategy
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
        
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden mb-6 rounded">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-500" />
              </div>
              
              <span className="text-executiveGold text-sm font-semibold tracking-wider uppercase block mb-3">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-executiveGold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
