"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Business Strategy",
    title: "Scaling Business in Competitive Markets",
    date: "March 12, 2026",
    readTime: "5 min read",
    image: "/images/gallery/photo1.jpg"
  },
  {
    id: 2,
    category: "Leadership Strategy",
    title: "Leadership Skills for Future Organizations",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "/images/gallery/photo3.jpg"
  },
  {
    id: 3,
    category: "Entrepreneurship",
    title: "Strategic Thinking for Modern Entrepreneurs",
    date: "February 15, 2026",
    readTime: "6 min read",
    image: "/images/gallery/photo5.jpg"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-brandBlue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Knowledge Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Insights & Thought Leadership
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
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer border border-gray-100 bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brandBlue text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-navy mb-4 group-hover:text-executiveGold transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-gray-200 mt-auto">
                  <span>{article.date}</span>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
