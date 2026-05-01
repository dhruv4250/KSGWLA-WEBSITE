"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-brandBlue relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/10 -skew-x-12 transform origin-top-right z-0 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-executiveGold/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Ready to Elevate Your Business Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
              Partner with Startedge Global to transform your organization&apos;s trajectory and unlock unparalleled, sustainable growth.
            </p>
            
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
