import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '../lib/utils';
import { FaPython, FaNodeJs, FaDocker, FaDatabase, FaReact } from 'react-icons/fa';
import { SiGo, SiFastapi, SiPostgresql, SiMysql, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const SpotlightCard = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120,119,198,0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const SkillPill = ({ icon: Icon, name, color }) => (
  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-black border border-white/10 rounded-xl text-neutral-300 text-sm font-medium hover:-translate-y-1 hover:border-white/20 transition-all duration-300">
    {Icon && <Icon style={{ color }} className="text-lg" />}
    <span>{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-[#050505] py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4"
          >
            Engineering Arsenal.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl"
          >
            The tools, languages, and frameworks I use to build scalable systems and robust products.
          </motion.p>
        </div>

        {/* Row 1: Backend (wide) + AI/ML (narrow) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <SpotlightCard className="p-8 h-full relative overflow-hidden">
              <SiGo className="absolute -bottom-8 -right-8 text-[180px] text-white/[0.03] z-0" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Backend & Systems</h3>
                <p className="text-neutral-500 text-sm mb-6">Architecting high-performance, scalable distributed systems.</p>
                <div className="flex flex-wrap gap-3">
                  <SkillPill icon={SiGo} name="Go" color="#00ADD8" />
                  <SkillPill icon={FaPython} name="Python" color="#3776AB" />
                  <SkillPill icon={SiFastapi} name="FastAPI" color="#009688" />
                  <SkillPill icon={FaNodeJs} name="Node.js" color="#339933" />
                  <SkillPill icon={FaDocker} name="Docker" color="#2496ED" />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <SpotlightCard className="p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-1">AI & ML</h3>
              <p className="text-neutral-500 text-sm mb-6">Building intelligent products and data pipelines.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-neutral-300 font-medium text-sm">LangChain & RAG</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-neutral-300 font-medium text-sm">Vector Databases</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-neutral-300 font-medium text-sm">Predictive Analytics</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Row 2: Databases (narrow) + Frontend (wide) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <SpotlightCard className="p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-1">Databases</h3>
              <p className="text-neutral-500 text-sm mb-6">Data modeling and storage.</p>
              <div className="flex flex-col gap-3">
                <SkillPill icon={SiPostgresql} name="PostgreSQL" color="#4169E1" />
                <SkillPill icon={SiMysql} name="MySQL" color="#4479A1" />
                <SkillPill icon={FaDatabase} name="Supabase" color="#3ECF8E" />
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <SpotlightCard className="p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-1">Frontend & Mobile</h3>
              <p className="text-neutral-500 text-sm mb-6">Crafting performant and intuitive user interfaces.</p>
              <div className="flex flex-wrap gap-3">
                <SkillPill icon={SiTypescript} name="TypeScript" color="#3178C6" />
                <SkillPill icon={FaReact} name="React" color="#61DAFB" />
                <SkillPill icon={SiNextdotjs} name="Next.js" color="#ffffff" />
                <SkillPill icon={FaReact} name="React Native" color="#61DAFB" />
                <SkillPill icon={SiTailwindcss} name="Tailwind CSS" color="#06B6D4" />
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
