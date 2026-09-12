import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { SiX } from 'react-icons/si';

const Particles = () => {
  const pointsRef = useRef();

  const particleCount = 2000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 5 + Math.random() * 2; // radius between 5 and 7

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Monochromatic / subtle cool tones for particles
      const mix = Math.random();
      color.setHSL(0.6 + mix * 0.1, 0.4, 0.5 + mix * 0.5);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;

    // Gentle wave animation for positions
    const positions = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];
      
      // We could mutate positions here, but simple rotation is often enough. 
      // If wave is requested:
      // positions[i3 + 1] += Math.sin(time + x) * 0.002;
    }
    // pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full bg-[#050505] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            dpr={[1, 2]}
            style={{ position: 'absolute', inset: 0 }}
            onCreated={({ scene }) => {
              scene.fog = new THREE.FogExp2('#050505', 0.08);
            }}
          >
            <Suspense fallback={null}>
              <Particles />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Overlay Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col justify-between py-12"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center pt-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-medium"
          >
            Software Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs tracking-wider uppercase text-neutral-400">Open to Work</span>
          </motion.div>
        </div>

        {/* Center Text */}
        <div className="flex flex-col justify-center flex-1 mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[14vw] sm:text-[11vw] leading-[0.85] font-bold tracking-tighter text-white"
          >
            CHAITANYA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[14vw] sm:text-[11vw] leading-[0.85] font-bold tracking-tighter bg-gradient-to-b from-white/60 to-white/5 bg-clip-text text-transparent"
          >
            SAI MEKA
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 pb-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-neutral-500 max-w-sm"
          >
            I architect robust backend infrastructure and AI-driven systems. Translating extreme complexity into seamless, highly-performant software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-6"
          >
            <a 
              href="https://github.com/ChaitanyaSai-Meka" 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/chaitanya-sai-meka/" 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/IAMCHAITANYASAI" 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <SiX className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
