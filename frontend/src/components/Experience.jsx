import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Vizal AI",
    period: "Dec 2025 – Jan 2026",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Audited the full REST API surface of Plane (open-source Django PM tool), identified authorization bypass vectors and exploitable endpoint patterns, and used findings to architect Kriya's backend independently in FastAPI.",
      "Reverse-engineered proprietary financial data APIs from platforms like Morningstar by intercepting browser network traffic, extracting undocumented endpoints and live schema structures without official access.",
      "Built automated Python + aiohttp scripts that continuously poll external financial sources and ingest normalized datasets into PostgreSQL, replacing manual refresh cycles with a near-real-time data pipeline.",
      "Designed PostgreSQL schemas and ingestion pipelines to store and process high-volume financial datasets for Kivo Money's GenAI backend.",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "FlipZ",
    period: "June 2025 – Aug 2025",
    location: "Remote",
    type: "Freelance",
    bullets: [
      "Built an AI-powered flashcard app in React Native targeting student exam prep, supporting three generation modes: manual input, camera-based OCR-to-AI text extraction, and topic-prompted AI generation.",
      "Implemented save/discard flashcard flows, a study activity heatmap, and multi-language UI support using Firebase Auth and Firestore for real-time sync.",
      "Mentored 2 junior students in React Native during active development, guiding them through component architecture and Firebase integration.",
    ],
  },
];

const leadership = [
  {
    role: "Head of R&D",
    org: "Space Club (SAST), Newton School of Technology",
    period: "Jan 2025 – Dec 2025",
    description: "Driving active research initiatives including a LAN rover currently in prototyping, coordinating astronomical observation events, and maintaining technical research documentation across club projects.",
  },
  {
    role: "Core Member",
    org: "CyberSecurity Club (SOCS), Newton School of Technology",
    period: "Jan 2025 – Sep 2025",
    description: "Conducted hands-on workshops covering network fundamentals, VM setup, and OSINT techniques for club members.",
  },
];

const education = {
  degree: "B.Tech in Computer Science & Artificial Intelligence",
  school: "Rishihood University (Newton School of Technology)",
  period: "Aug 2024 – May 2028",
  location: "Delhi NCR",
  highlights: [
    "LeetCode — 420+ solved (28 Hard), Contest Rating 1654",
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-[#050505] relative px-4 sm:px-8 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Experience.
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-neutral-800 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex gap-8 group"
              >
                <div className="hidden md:flex flex-col items-center pt-2">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-neutral-800 transition-all duration-300">
                    <Briefcase className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="flex-1 bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-8 hover:bg-neutral-900/50 hover:border-neutral-700/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-neutral-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:text-right">
                      <span className="text-xs text-neutral-500 font-medium tracking-wider uppercase whitespace-nowrap">{exp.period}</span>
                      <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-white/5 text-neutral-300 border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  {exp.location && (
                    <p className="text-xs text-neutral-500 mb-4">{exp.location}</p>
                  )}

                  <ul className="space-y-3 mt-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                        <ArrowUpRight className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Leadership & Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 hover:bg-neutral-900/50 hover:border-neutral-700/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white">{item.role}</h4>
                <p className="text-sm text-neutral-400 font-medium mb-1">{item.org}</p>
                <p className="text-xs text-neutral-500 mb-4">{item.period}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-8 group mt-8"
        >
          <div className="hidden md:flex flex-col items-center pt-2">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-neutral-800 transition-all duration-300">
              <GraduationCap className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          <div className="flex-1 bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-8 hover:bg-neutral-900/50 hover:border-neutral-700/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
              <div>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-neutral-400 font-medium">{education.school}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 font-medium tracking-wider uppercase">{education.period}</span>
                <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Current
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mb-4">{education.location}</p>
            <ul className="space-y-2 mt-4">
              {education.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
