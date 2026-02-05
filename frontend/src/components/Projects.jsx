import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 
import { FaGithub } from 'react-icons/fa';
import Lenis from 'lenis';
import { useEffect,useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectImage from "./utils/ProjectImage";

const projects = [
    {
    title: "Akira",
    description:
      "Akira — A sleek voice-agent that listens, understands, and responds in real time.",
    link: "https://akira-gray.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/Akira",
    image: "/akira_voice_agent.png",
    blurhash:"L02~TTwJ4mbIeRtBRzf5DzWT%Pj]"
  },
  {
    title: "THE-VALUT",
    description: "Architected a RAG system to enable real-time semantic search and Q&A over private PDF documents.",
    link: "https://the-vault-smoky.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/THE-VAULT",
    image: "/the-vault.png",
     blurhash:"L1TI,a?bWA_3IVofM{%M00t7Rjxu"
  },
  {
    title: "Univa",
    description:
      "UNIVA — Document Search Platform",
    link: "https://univa-ten.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/UNIVA",
    image: "/univa.png",
    blurhash:"L1SPX|xvtn~q00t7_2Io00oe-pM|"
  },
  {
    title: "Mepa",
    description:
      "Mepa - Metro Route Finder",
    link: "https://mepa.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/mepa",
    image: "/mepa.png",
    blurhash:"L2SF;N%M_4-;00WBRjj[00WB9Eaz"
  },
  {
    title: "Apple Website Clone",
    description:
      "A modern, animated clone of the official Apple website made with smooth scroll and transitions.",
    link: "https://apple-website-ecru-xi.vercel.app/",
    code: "https://github.com/ChaitanyaSai-Meka/Apple_Website",
    image: "/Apple_website.png",
    blurhash:"L02$Hd9Z00~pneofp0WB00?a~V01"
  },
  {
    title: "Movies Website",
    description:
      "Movie explorer website with sleek UI and live API integration.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/MoviesWeb_Project",
    image: "/Movies.png",
    blurhash:"LACZ35PqnOi_T0X9a|WA00+FIpkW"
  },
  {
    title: "CYBERFICTION",
    description: "Features smooth scrolling and logo animation using HTML, CSS, JS, Lenis, and GSAP. ",
    link: "https://chaitanyasai-meka.github.io/CYBERFICTION/",
    code: "https://github.com/ChaitanyaSai-Meka/CYBERFICTION",
    image: "/cyberfiction.png",
     blurhash:"LbOzMcWB_NxuR*t7RjRjogWBM{fk"
  },
  {
    title: "Capstone Project (HTML/CSS)",
    description:
      "Final capstone web project showcasing HTML and CSS skills.",
    link: "",
    code: "https://github.com/ChaitanyaSai-Meka/Capstone_Project",
    image: "/Capstone.png",
    blurhash:"LhLz?TRk~qoe-=azM{ay?cs.MxbH"
  },
  {
    title: "Healthy Middle-Class India",
    description: "Healthy Middle-Class India: Tackles obesity and lifestyle diseases with systemic solutions.",
    link: "https://fste-chi.vercel.app",
    code: "https://github.com/ChaitanyaSai-Meka/FSTE",
    image: "/fste.png",
    blurhash:"L1NAoU3}MZPp004N019c00UDI89H"
  },
  {
    title: "Coming Soon",
    description:
      "Still in the oven. Can’t wait to serve it hot!",
    link: "",
    code: "",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ"
  },
];


const Projects = () => {

  const scrollLineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true, 
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollLineRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      ></div>

      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Section Title */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Things I've been building 
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Exploring ideas, solving problems, and having fun with code — here’s what I’ve built so far.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <ProjectImage
                  image={project.image}
                  blurhash={project.blurhash}
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center gap-3 mt-6">
                {project.code ? (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-bold hover:bg-white/10"
                  >
                    Code →
                  </CardItem>
                ) : null}
                {project.link ? (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    Live →
                  </CardItem>
                ) : project.code ? (
                  <span className="text-[11px] text-neutral-400 text-right max-w-[220px]">
                    Live demo offline. You can run it locally.
                  </span>
                ) : null}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div>
      <a 
      href="https://github.com/ChaitanyaSai-Meka"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10 ">
          <span>
            For More
          </span>
          <FaGithub className="h-6 w-6 text-white" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </a>
      </div>
    </div>
  );
};

export default Projects;
