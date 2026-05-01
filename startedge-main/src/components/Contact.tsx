"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Clock, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    lines: ["startedgeglobalpvtltd@gmail.com"],
    href: "mailto:startedgeglobalpvtltd@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 81559 42323"],
    href: "tel:+918155942323",
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["Rajkot, Gujarat  •  Indore, M.P.", "India"],
    href: null,
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM (IST)"],
    href: null,
  },
];

const stats = [
  { value: "< 24 hrs", label: "Response Time" },
  { value: "Free", label: "First Consultation" },
  { value: "26+", label: "Years Experience" },
  { value: "50+", label: "Businesses Served" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 bg-[#f0f4f8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-[#2563eb] rounded-full text-sm font-semibold mb-5 shadow-sm border border-blue-100">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4 tracking-tight">
            Let&apos;s Start a{" "}
            <span className="text-executiveGold">Conversation</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Ready to unlock your organization&apos;s full potential? Reach out and
            let&apos;s explore how we can drive your success together.
          </p>
        </motion.div>

        {/* Main dark card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
          style={{ background: "linear-gradient(135deg, #0d1b2a 60%, #1a2e46 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }} />

          <div className="relative z-10 p-6 md:p-14">
            {/* Company name */}
            <p className="text-executiveGold text-sm font-semibold tracking-widest uppercase mb-2">
              Startedge Global Pvt. Ltd.
            </p>
            <h3 className="text-white text-xl md:text-3xl font-heading font-bold mb-6 md:mb-10">
              Contact Information
            </h3>

            {/* Grid of contact items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactItems.map(({ icon: Icon, label, lines, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon box */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-executiveGold"
                    style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-1">
                      {label}
                    </p>
                    {lines.map((line, j) => (
                      href && j === 0 ? (
                        <a
                          key={j}
                          href={href}
                          className="text-white text-sm font-medium leading-snug hover:text-executiveGold transition-colors flex items-start sm:items-center gap-1 group-hover:gap-2 duration-200 w-full"
                        >
                          <span className="break-all">{line}</span>
                          <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5 sm:mt-0" />
                        </a>
                      ) : (
                        <p key={j} className="text-gray-300 text-sm leading-snug break-words mt-0.5">
                          {line}
                        </p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-12 border-t border-white/10 pt-8 flex flex-wrap gap-6 items-center justify-between">
              <p className="text-gray-400 text-sm">
                We typically respond within <span className="text-white font-semibold">24 hours</span>.
              </p>
              <a
                href="mailto:startedgeglobalpvtltd@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-navy bg-executiveGold hover:brightness-110 transition-all shadow-lg shadow-executiveGold/20"
              >
                Send Us an Email
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="text-navy font-bold text-xl mb-0.5">{value}</p>
              <p className="text-gray-500 text-xs font-medium">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
