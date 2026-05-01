"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroAuthority() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-navy pt-32 lg:pt-40 pb-16 lg:pb-20">
      {/* Background Image / Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/gallery/photo4.jpg')"
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Strategic Leadership for <span className="text-executiveGold">Business Transformation</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              Startedge Global Pvt. Ltd. partners with visionary leaders and organizations to build scalable strategies, transform leadership capability, and unlock sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded bg-executiveGold text-navy hover:bg-yellow-400 transition-colors shadow-lg group"
            >
              Book Strategic Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#expertise"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Explore Expertise
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-gray-400 text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-executiveGold to-transparent"
        />
      </motion.div>
    </section>
  );
}
