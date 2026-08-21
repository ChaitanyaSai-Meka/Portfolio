import React, { useRef } from "react";
import { cn } from "../lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  const skills = [
    // --- Core language ---
    { key: "GOLANG_LOGO", color: "#00ADD8", icon: <img src="/golang.png" alt="GOLANG" className="w-13 h-13 px-0.5 pb-0.5 object-contain" /> },
    { key: "Java_Logo", color: "#ED8B00", icon: <img src="/Java_Logo.png" alt="Java" className="w-13 h-14 px-1 pb-1 object-contain" /> },
    { key: "python", color: "#3776AB", icon: <FaPython className="text-xl" /> },

    // --- Infra / DevOps ---
    { key: "Docker_Logo", color: "#2496ED", icon: <img src="/docker_logo.png" alt="Docker" className="w-10 h-10 px-1 pb-1 object-contain" /> },
    { key: "postgresql", color: "#4169E1", icon: <img src="/postgresql.png" alt="Postgresql" className="w-9 h-9 p-1 object-contain" /> },
    { key: "MySQL", color: "#00758F", icon: <img src="/mysql_logo.png" alt="Mysql" className="w-15 h-15 p-1 object-contain" /> },

    // --- Backend frameworks ---
    { key: "NodeJS_logo", color: "#339933", icon: <img src="/NodeJS_Logo.png" alt="NodeJS" className="w-13 h-12 p-1 object-contain" /> },
    { key: "ExpressJS_logo", color: "#EDEDED", icon: <img src="/ExpressJS_Logo.png" alt="ExpressJS" className="w-16 h-11 p-1 object-contain" /> },
    { key: "Fast_API_Logo", color: "#009688", icon: <img src="/FastAPI.svg" alt="FastAPI" className="w-11 h-11 px-1 pb-1 object-contain" /> },
    { key: "Postman_Logo", color: "#FF6C37", icon: <img src="/Postman_Logo.png" alt="Postman" className="w-15 h-15 p-1 object-contain" /> },

    // --- Fullstack / Frontend ---
    { key: "tailwind", color: "#06B6D4", icon: <img src="/tailwind.png" alt="Tailwind" className="w-9 h-9 p-1 object-contain" /> },
    { key: "react", color: "#61DAFB", icon: <FaReact className="text-xl" /> },
    { key: "js", color: "#F7DF1E", icon: <FaJs className="text-xl" /> },
    { key: "ts", color: "#3178C6", icon: <SiTypescript className="text-xl" /> },
    { key: "next-js-logo", color: "#F5F5F5", icon: <img src="/next.png" alt="Next.js" className="w-15 h-15 p-1 object-contain" /> },
    { key: "motion_logo", color: "#F24E1E", icon: <img src="/motion_logo().png" alt="motion" className="w-15 h-15 p-1 object-contain" /> },

    // --- Other ---
    { key: "html", color: "#E34F26", icon: <FaHtml5 className="text-xl" /> },
    { key: "css", color: "#1572B6", icon: <FaCss3Alt className="text-xl" /> },
    { key: "gsap", color: "#88CE02", icon: <img src="/Gsap.png" alt="Gsap" className="w-9 h-9 p-1 object-contain" /> },
    { key: "figma_logo", color: "#F24E1E", icon: <img src="/figma_logo.png" alt="figma" className="w-13 h-12 p-1 object-contain" /> },
    { key: "React_Native_Logo", color: "#61DAFB", icon: <img src="/react_native_logo.png" alt="React_Native" className="w-11 h-12 px-1 pb-1 object-contain" /> },
  ];

  const audioSources = [
    "/e6-piano.mp3",
    "/d6-piano.mp3",
    "/b6-piano.mp3",
    "/g6-piano.mp3",
    "/f6-piano.mp3",
    "/a6-piano.mp3",
    "/c6-piano.mp3",
    "/d6-piano.mp3",
    "/e6-piano.mp3", 
    "/a6-piano.mp3",
    "/c6-piano.mp3",
    "/g6-piano.mp3",
    "/f6-piano.mp3",
    "/a6-piano.mp3",
    "/f6-piano.mp3",
    "/g6-piano.mp3",
    "/b6-piano.mp3",
    "/e6-piano.mp3",
    "/d6-piano.mp3",
    "/b6-piano.mp3",
    "/g6-piano.mp3",
    "/d6-piano.mp3",
    "/a6-piano.mp3",
  ];

  const audioRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const audio = new Audio(audioSources[index]);
    audioRefs.current[index] = audio;
    audio.play();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4 sm:mb-6">
        Tools in My Arsenal
      </h2>

      {/* Prompts */}
      <div className="z-20 mb-6 text-lg font-semibold text-center">
        {/* Mobile: Tap Prompt */}
        <p className="block sm:hidden bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Try tapping on the icons 🎵
        </p>

        {/* Desktop/Tablet: Hover Prompt */}
        <p className="hidden sm:block bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Hover over the icons to hear a sound 🎵
        </p>
      </div>

      {/* Icon Cards */}
      <div className="relative z-20 flex justify-center gap-3 flex-wrap max-w-5xl w-full">
      {skills.map(({ key, icon, color }, index) => (
        <CardSpotlight
          key={key}
          className="h-18 w-18 rounded-full flex items-center justify-center bg-black"
          color={color}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleMouseEnter(index)}
        >
          <div className="relative z-20" style={{ color }}>
            {icon}
          </div>
        </CardSpotlight>
      ))}
      </div>
    </div>
  );
};

export default Skills;
