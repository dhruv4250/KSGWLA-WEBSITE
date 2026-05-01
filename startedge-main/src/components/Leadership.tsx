"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook } from "lucide-react";

const leaders = [
  {
    id: 1,
    name: "Dr. Vishal Khasgiwala",
    role: "Founder & Director, Startedge Global Pvt. Ltd. | Academic Leader",
    credentials: "Ph.D., MBA (Marketing), MCA, ADCA, FDP (IIM-I)",
    bio: "Dr. Vishal Khasgiwala is a seasoned management consultant, academic leader, and business strategist with over 26 years of experience across academia and industry. He is the Founder & Director of Startedge Global Pvt. Ltd. (Indore & Rajkot) and currently serves as Dean & Professor at Atmiya University, Rajkot.",
    image: "/images/dr-vishal-khasgiwala.jpeg",
    imagePosition: "70% top", // Shifts the image left to center the face
    linkedin: "https://www.linkedin.com/in/vishal-khasgiwala-698800214",
    facebook: "https://www.facebook.com/share/1RRKddJyjJ/"
  },
  {
    id: 2,
    name: "Mrs. Vaishali Khasgiwala",
    role: "Management Graduate | Creative Strategist | Counsellor",
    credentials: "",
    bio: "Vaishali Khasgiwala is a management graduate with a strong background in people management and behavioral understanding. She brings a creative and analytical approach to solving organizational and individual challenges. With expertise in counselling and human dynamics, she focuses on enhancing performance, mind-set transformation, and personal growth. Her work reflects a balance of strategic thinking and empathy, helping individuals and teams align their goals with organizational vision.",
    image: "/images/ms-vaishali-khasgiwala.jpeg",
    imagePosition: "75% 15%", // Native CSS background focal point, keeps the face centered near the top on mobile.
    imageWrapperClass: "",
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brandBlue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy">
              Guiding Transformation
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="w-full md:w-2/5 h-[350px] sm:h-[450px] md:h-auto relative overflow-hidden shrink-0">
                <div className={`absolute inset-0 ${leader.imageWrapperClass || ''}`}>
                  <div
                    className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${leader.image}')`,
                      backgroundPosition: leader.imagePosition || "top"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
              </div>

              <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-heading text-navy flex items-center justify-between mb-1">
                  {leader.name}
                  <div className="flex items-center gap-3">
                    {leader.facebook && (
                      <a href={leader.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brandBlue transition-colors">
                        <Facebook size={20} />
                      </a>
                    )}
                    {leader.linkedin && (
                      <a href={leader.linkedin} target={leader.linkedin === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="text-gray-400 hover:text-brandBlue transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                </h3>
                <p className="text-executiveGold font-semibold text-sm tracking-wide uppercase mb-1">
                  {leader.role}
                </p>
                {leader.credentials && (
                  <p className="text-gray-500 text-xs mb-4 font-mono">
                    {leader.credentials}
                  </p>
                )}
                <div className="h-px w-12 bg-gray-200 mb-4" />
                <p className="text-gray-600 leading-relaxed text-sm">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Dr. Vishal Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded border border-gray-200 shadow-sm p-6 md:p-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-executiveGold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-navy mb-4 md:mb-6">Director's Professional Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>A former CEO of Poojara Telecom Pvt. Ltd. and Dean at Symbiosis University of Applied Science, Indore, Dr. Vishal Khasgiwala has successfully guided several organizations in business development, system and process establishment, franchise expansion, marketing strategy, and leadership mentoring. His consulting portfolio includes Poojara Telecom Pvt. Ltd, The Yellow Think Pvt. Ltd., Vasundhara Enterprises, Top India Elevators Pvt. Ltd., Solgen Enterprises etc.</p>
              <p>Dr. Khasgiwala has conducted numerous MDPs for CEOs and business leaders on topics like Scaling Up Business and Becoming a Successful CEO. He is an editorial board member of reputed international journals and the recipient of the Torch Bearer Award (by Educators – The Open Page) and National Builder’s Award (by Rotary Club of Rajkot Prime). A prolific author and case writer, his work has been published in The Case Centre (UK) and books forwarded by Philip Kotler.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-gray-100">
            <div>
              <h4 className="text-lg font-bold font-heading text-navy mb-5 flex items-center">
                <span className="w-8 h-px bg-brandBlue mr-3" />
                Core Expertise
              </h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Business Strategy & Organizational Development</li>
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Leadership & Change Management</li>
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Marketing & Sales Strategy</li>
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Financial & Operational Efficiency</li>
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Team Building & Human Resource Development</li>
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Digital Transformation & Technology Integration</li>
                <li className="flex items-start"><span className="text-brandBlue font-bold mr-2">✓</span> Higher Education Management & Accreditation (NAAC)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold font-heading text-navy mb-5 flex items-center">
                <span className="w-8 h-px bg-executiveGold mr-3" />
                Key Achievements
              </h4>
              <ul className="space-y-3 text-gray-600 text-sm bg-gray-50/50 p-4 rounded-lg border border-gray-100">
                <li className="flex items-start"><span className="text-executiveGold mr-2">•</span> Successfully led organizations as CEO, driving profitability and sustainable growth.</li>
                <li className="flex items-start"><span className="text-executiveGold mr-2">•</span> Delivered result-oriented consulting with a strong focus on measurable business outcomes.</li>
                <li className="flex items-start"><span className="text-executiveGold mr-2">•</span> Actively mentors start-ups and entrepreneurs in achieving scalability and market presence.</li>
                <li className="flex items-start"><span className="text-executiveGold mr-2">•</span> Spearheaded multiple accreditation and quality assurance processes at the university level.</li>
                <li className="flex items-start"><span className="text-executiveGold mr-2">•</span> Recognized for bridging industry and academia to foster innovation, employability, and leadership development.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
