import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Award } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Award, label: 'Experience' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

function DockIcon({ link, mouseX, activeSection }) {
  const ref = useRef(null);
  
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 72, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const [hovered, setHovered] = useState(false);

  const isActive = activeSection === link.id;

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(link.id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="absolute -top-12 left-1/2 rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-white border border-white/10 whitespace-nowrap"
          >
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        ref={ref}
        style={{ width, height: width }}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-center rounded-full transition-colors duration-200 relative",
          isActive ? "bg-white/15" : "hover:bg-white/10 text-white/70 hover:text-white"
        )}
        aria-label={link.label}
      >
        <link.icon className="w-5 h-5 relative z-10" />
      </motion.button>
      {isActive && (
        <motion.div
          layoutId="active-dot"
          className="absolute -bottom-2 w-1 h-1 rounded-full bg-white"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}

export default function Navbar() {
  const mouseX = useMotionValue(Infinity);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let currentSection = links[0].id;
      
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          if (scrollY >= element.offsetTop) {
            currentSection = link.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 h-16 flex items-end pb-2 px-4 gap-4 bg-neutral-900/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {links.map((link) => (
        <DockIcon key={link.id} link={link} mouseX={mouseX} activeSection={activeSection} />
      ))}
    </motion.div>
  );
}
