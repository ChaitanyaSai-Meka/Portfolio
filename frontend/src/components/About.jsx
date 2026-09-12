import React from 'react';
import { motion } from 'framer-motion';
import BlurImage from './utils/BlurImage';
import { cn } from '../lib/utils';

const About = () => {
  return (
    <section id="about" className="relative bg-[#050505] min-h-screen flex items-center justify-center py-32 px-4 sm:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 relative z-10">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-72 h-72 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl bg-neutral-900"
        >
          <BlurImage 
            src="/profile_pic.jpg" 
            blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC" 
            alt="Chaitanya Sai Meka" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white mb-8">
            The Engineer.
          </h2>
          
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              I'm Chaitanya Sai Meka, a Computer Science & AI student focused on building complex backend architectures, distributed systems, and AI-driven products. At my core, I care about performance, scalability, and code that engineers actually want to maintain.
            </p>
            
            <p>
              During my SWE internship at <span className="text-neutral-200 font-medium">Vizal AI</span>, I architected Kriya's backend in FastAPI and built heavy PostgreSQL data pipelines for Kivo Money's GenAI platform—successfully cutting batch processing time by 75%.
            </p>
            
            <p>
              I run deep on both ends of the stack. I build RAG pipelines with <span className="text-neutral-200 font-medium">LangChain and Supabase</span> that achieve sub-100ms inference. I'm also building <span className="text-neutral-200 font-medium">RamForze</span>, a local distributed task dispatcher for macOS to harness idle LAN compute nodes.
            </p>
            
            <p>
              Beyond the code, I was the R&D Lead of my college's Space Club and a core member of the Cybersecurity Club. I have solved 420+ LeetCode problems (28 Hard) with a contest rating of 1654.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
