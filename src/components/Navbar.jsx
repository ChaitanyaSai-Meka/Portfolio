// import React, { useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const toggleMusic = () => {
  //   if (!audioRef.current) return;
  //   isPlaying ? audioRef.current.pause() : audioRef.current.play();
  //   setIsPlaying(!isPlaying);
  // };

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav id="nav-overall">
      <div id="nav-div">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-a
              md:inline
              ${location.pathname === link.path ? "hidden md:inline" : ""}
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Music toggle button */}
      {/* <div 
        style={{ marginLeft: 'auto' }} 
        onClick={toggleMusic}
        className="relative hidden md:flex items-center justify-center"
      >
        <div 
          className={`w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300
            ${isPlaying 
              ? 'animate-spin-slow' 
              : 'shadow-[0_0_10px_rgba(210,181,181,0.7)]'}`}
        >
          <FaMusic 
            className={`text-white text-xl ${isPlaying ? 'animate-spin-slow' : ''} hover:text-indigo-300 transition duration-300 z-10`}
          />
          {isPlaying && (
            <div 
              className="absolute inset-0 rounded-full border-t border-[rgba(210,181,181,0.7)] animate-[spin_4.5s_linear_infinite]"
              style={{ top: '-3px', left: '-3px', right: '-3px', bottom: '-3px' }}
            />
          )}
        </div>
      </div> */}

      {/* <audio ref={audioRef} loop preload="auto">
        <source src="/suzume.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> */}
      <div 
        style={{ marginLeft: 'auto' }}
        className="relative hidden md:flex items-center justify-center" 
      >
        <a
          href="/logbook"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Logbook</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
