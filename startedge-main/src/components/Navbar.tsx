"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-white/40 shadow-sm"
          : "bg-white shadow-sm border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-center justify-center group">
              <img src="/images/logo.png" alt="Startedge Logo" className="h-16 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
              <span className="text-[10px] leading-none font-medium text-black-500 uppercase tracking-[0.2em] mt-1 group-hover:text-executiveGold transition-colors duration-300">
                Global Pvt. Ltd.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold transition-colors text-gray-800 hover:text-executiveGold group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-executiveGold transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 bg-navy text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-brandBlue transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-executiveGold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-executiveGold hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-navy text-white px-5 py-3 rounded-md text-base font-medium hover:bg-brandBlue transition-colors"
            >
              Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
