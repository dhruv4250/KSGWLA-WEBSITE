"use client";

import { motion } from "framer-motion";

export default function AboutFirm() {
  return (
    <section id="about" className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="100,0 20,100 100,100" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-executiveGold font-semibold tracking-wider uppercase text-sm mb-4 block">
              The Firm
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 md:mb-8 leading-tight">
              About Startedge Global
            </h2>
            
            <div className="space-y-8 text-gray-300 text-base md:text-lg font-light leading-relaxed">
              <p>
                At Startedge Global Pvt. Ltd., our focus is on quality, innovation, and measurable outcomes. With deep industry expertise and a strategic approach, we act as a trusted partner in driving business transformation, leadership growth, and professional success.
              </p>
              
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">Vision</h3>
                <p>
                  To empower businesses and leaders to achieve breakthrough growth through strategic innovation, leadership excellence, and transformative execution.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">Mission</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Our mission is to help startups and businesses achieve clear, measurable growth through practical
strategies and strong execution. We work with leaders and teams to improve performance, adapt to
change, and build sustainable business systems that deliver long-term results.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded text-center overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl">
              {/* Using a placeholder for executive environment */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 text-left">
                <p className="text-2xl font-heading font-bold text-white mb-2">Transforming Vision</p>
                <p className="text-executiveGold font-medium">Into Measurable Impact</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-executiveGold rounded-sm -z-10 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
