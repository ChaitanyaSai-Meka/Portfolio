import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import ProjectImage from "./utils/ProjectImage";
import { cn } from "../lib/utils";

const projects = [
  {
    title: "Devledger",
    description: "Local-first CLI for splitting shared dev infra costs.",
    link: "https://github.com/ChaitanyaSai-Meka/devledger#readme",
    linkLabel: "README →",
    code: "https://github.com/ChaitanyaSai-Meka/devledger.git",
    image: "/devledger.webp",
    blurhash: "L56b13~q%LWBNaNaS2bbIoWVoffk",
    category: "Backend",
    tech: ["Go", "SQLite", "Chi"],
  },
  {
    title: "EdgeBeat",
    description: "A native macOS music visualizer that turns your screen edges into a beat-synced, album-colored ambient light.",
    link: "https://edgebeat.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/EdgeBeat",
    image: "/edge_beat.webp",
    blurhash: "L12~P;xu00D%j]RjRjxu00WB~qxu",
    category: "Systems",
    tech: ["Swift", "macOS"],
  },
  {
    title: "Univa",
    description: "A Document Search Platform leveraging vector databases and LLMs for semantic search and Q&A over PDFs.",
    link: "https://univa-ten.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/UNIVA",
    image: "/univa.webp",
    blurhash: "L1SPX|xvtn~q00t7_2Io00oe-pM|",
    category: "AI",
    tech: ["Python", "LangChain", "Supabase"],
  },
  {
    title: "Credit Risk System",
    description: "An end-to-end predictive analytics and autonomous AI agent for credit risk assessment.",
    link: "https://credit-risk-system6.streamlit.app/",
    code: "https://github.com/Dhanvin1520/Credit_Risk_RAGSystem",
    image: "/credit_risk.webp",
    blurhash: "LCQJl=?X~p-;^^IXIWV@-MN2IVfk",
    category: "AI",
    tech: ["Python", "ML", "Streamlit"],
  },
  {
    title: "THE-VAULT",
    description: "Architected a RAG system to enable real-time semantic search and Q&A over private PDF documents.",
    link: "https://the-vault-smoky.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/THE-VAULT",
    image: "/the-vault.webp",
    blurhash: "L1TI,a?bWA_3IVofM{%M00t7Rjxu",
    category: "AI",
    tech: ["Python", "RAG", "Vector DB"],
  },
  {
    title: "Apple Website Clone",
    description: "A modern, animated clone of the official Apple website made with smooth scroll and transitions.",
    link: "https://apple-website-ecru-xi.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/Apple_Website",
    image: "/Apple_website.webp",
    blurhash: "L02$Hd9Z00~pneofp0WB00?a~V01",
    category: "Frontend",
    tech: ["React", "GSAP", "Three.js"],
  },
  {
    title: "CYBERFICTION",
    description: "Features smooth scrolling and logo animation using HTML, CSS, JS, Lenis, and GSAP.",
    link: "https://chaitanyasai-meka.github.io/CYBERFICTION/",
    code: "https://github.com/ChaitanyaSai-Meka/CYBERFICTION",
    image: "/cyberfiction.webp",
    blurhash: "LbOzMcWB_NxuR*t7RjRjogWBM{fk",
    category: "Frontend",
    tech: ["JS", "GSAP", "Lenis"],
  },
  {
    title: "Akira",
    description: "A sleek voice-agent that listens, understands, and responds in real time.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/Akira",
    image: "/akira_voice_agent.webp",
    blurhash: "L02~TTwJ4mbIeRtBRzf5DzWT%Pj]",
    category: "AI",
    tech: ["Python", "NLP"],
  },
  {
    title: "Mepa",
    description: "Metro Route Finder web app with route optimization, and user-friendly interface.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/mepa",
    image: "/mepa.webp",
    blurhash: "L2SF;N%M_4-;00WBRjj[00WB9Eaz",
    category: "Frontend",
    tech: ["React", "Algorithms"],
  },
  {
    title: "Movies Website",
    description: "Movie explorer website with sleek UI and live API integration.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/MoviesWeb_Project",
    image: "/Movies.webp",
    blurhash: "LACZ35PqnOi_T0X9a|WA00+FIpkW",
    category: "Frontend",
    tech: ["JS", "REST API"],
  },
  {
    title: "Capstone Project",
    description: "Final capstone web project showcasing HTML and CSS skills.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/Capstone_Project",
    image: "/Capstone.webp",
    blurhash: "LhLz?TRk~qoe-=azM{ay?cs.MxbH",
    category: "Frontend",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Healthy Middle-Class India",
    description: "Tackles obesity and lifestyle diseases with systemic solutions.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/FSTE",
    image: "/fste.webp",
    blurhash: "L1NAoU3}MZPp004N019c00UDI89H",
    category: "Other",
    tech: ["Research"],
  },
  {
    title: "RamForze",
    description: "Local distributed task dispatcher for macOS that turns idle machines into LAN compute nodes.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/RamForze",
    image: "/black_page.webp",
    blurhash: "L00SvEayWAfQozfQayfQayfQf8fQ",
    status: "In Progress",
    category: "Systems",
    tech: ["Go", "SwiftUI", "BLE"],
  },
];

const categories = ["All", "AI", "Backend", "Systems", "Frontend", "Other"];

const StatusBadge = ({ status, link }) => {
  if (status === "In Progress") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400 ring-1 ring-inset ring-amber-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        In Progress
      </span>
    );
  }
  if (link && link.trim() !== "") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Online
      </span>
    );
  }
  return null;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-[#050505] relative px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Selected Works
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-neutral-800 to-transparent" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeFilter === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-neutral-400 border-white/10 hover:text-white hover:border-white/30"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-600/50 transition-all duration-500 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-neutral-900">
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <ProjectImage
                      image={project.image}
                      blurhash={project.blurhash}
                      alt={project.title}
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-5">
                    <div className="flex gap-3">
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <StatusBadge status={project.status} link={project.link} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed flex-grow mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-neutral-800/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-medium text-neutral-400 bg-white/5 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <a
            href="https://github.com/ChaitanyaSai-Meka"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
          >
            <FaGithub size={20} />
            <span>View All on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
