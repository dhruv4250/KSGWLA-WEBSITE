"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, GraduationCap, Map, Users } from "lucide-react";

export default function Expertise() {  const expertises = [
    {
      title: "Strategic Business Consulting",
      description: "Helping organizations achieve growth and long-term sustainability through effective business strategies, operational excellence, and performance optimization.",
      icon: TrendingUp,
      delay: 0.1,
      bullets: [
        "Market-driven insights to enhance competitiveness and profitability.",
        "Customized solutions for operational efficiency and long-term sustainability.",
        "Business transformation support through innovation and strategic planning."
      ]
    },
    {
      title: "Leadership & Institutional Development",
      description: "Building strong leadership pipelines and enhancing institutional effectiveness with structured development programs and best practices.",
      icon: Users,
      delay: 0.2,
      bullets: [
        "Comprehensive leadership development programs for future-ready leaders.",
        "Institutional growth frameworks to build strong and sustainable organizations.",
        "Executive coaching and mentoring to enhance decision-making and performance.",
        "Best practices and structured interventions for organizational excellence."
      ]
    },
    {
      title: "Skill Development & Career Guidance",
      description: "Supporting students and professionals with industry-relevant skills, career counselling, and future-ready guidance to excel in a competitive world. Till date, more than 1 Lac students have been guided.",
      icon: Map,
      delay: 0.3,
      bullets: [
        "Personalized career mapping aligned with individual strengths and goals.",
        "Mentorship and guidance to prepare students and professionals for industry demands.",
        "Training in essential employability and soft skills for career success.",
        "Career counselling and skill enhancement workshops to boost opportunities."
      ]
    },
    {
      title: "Corporate Training & Mentoring",
      description: "Delivering customized corporate training programs and one-on-one mentoring to enhance workforce capabilities, productivity, and leadership effectiveness.",
      icon: GraduationCap,
      delay: 0.4,
      bullets: [
        "Customized corporate workshops to upskill employees across all levels.",
        "Leadership and team-building programs to drive organizational growth.",
        "Mentorship initiatives to strengthen professional development and retention.",
        "Practical, industry-relevant training designed to improve productivity and performance."
      ]
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-brandBlue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Competencies
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy">
              Our Strategic Expertise
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg max-w-md">
              We provide comprehensive consulting solutions that drive measurable business outcomes and exponential growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group border border-gray-200 hover:border-executiveGold bg-gray-50 hover:bg-navy transition-colors duration-300 p-6 md:p-10 flex flex-col h-full"
            >
              <item.icon className="h-10 w-10 md:h-12 md:w-12 text-brandBlue group-hover:text-executiveGold mb-6 md:mb-8 transition-colors shrink-0" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-bold font-heading text-navy group-hover:text-white mb-3 md:mb-4 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                {item.description}
              </p>
              <ul className="space-y-3">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex flex-row items-start text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    <span className="text-executiveGold mr-3 mt-0.5">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
