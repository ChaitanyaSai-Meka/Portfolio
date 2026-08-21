import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Chaitanya Sai Meka | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Learn more about Chaitanya Sai Meka, a passionate full-stack developer with expertise in React, Node.js, AI/ML, UI/UX design, and entrepreneurial ventures. Discover my journey and goals." />
        <link rel="canonical" href="https://chaitanya-sai-meka.vercel.app/about" />
        <meta property="og:title" content="About Chaitanya Sai Meka | Full Stack Developer" />
        <meta property="og:description" content="Get to know Chaitanya Sai Meka's background, skills, projects, and entrepreneurial aspirations in full-stack development and AI/ML." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://chaitanya-sai-meka.vercel.app/about" />
        <meta property="og:image" content="https://chaitanya-sai-meka.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Chaitanya Sai Meka's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@IAMCHAITANYASAI" />
        <meta name="twitter:title" content="About Chaitanya Sai Meka | Full Stack Developer" />
        <meta name="twitter:description" content="Discover Chaitanya Sai Meka's passion for coding, full-stack development, AI, and building impactful digital solutions." />
        <meta name="twitter:image" content="https://chaitanya-sai-meka.vercel.app/profile_pic.png" />
      </Helmet>
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
        <BlurImage
          src="/profile_pic.png"
          blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
          alt="Chaitanya Sai Meka, Computer Science and AI student"
          className="w-full h-full"
        />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Chaitanya Sai Meka, a Computer Science and AI student focused on backend engineering, distributed systems, and data-heavy products. During my Software Engineer internship at Vizal AI, I independently architected Kriya’s backend in FastAPI and built the PostgreSQL pipelines and async data collectors powering Kivo Money’s GenAI platform, cutting batch processing time by 75%.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My stack runs deep on both ends. I work with Python, Go, TypeScript, JavaScript, SQL, Node.js, FastAPI, React, Next.js, and React Native. I’ve built RAG pipelines with LangChain and Supabase that achieved sub-100ms AI inference, shipped an AI-powered React Native product as a freelancer while leading a three-person team, and solved 420+ LeetCode problems, including 28 Hard problems, with a contest rating of 1654.
          </p>

          <p className="text-lg leading-relaxed">
            I’m also building RamForze, a Go and SwiftUI LAN task dispatcher that explores resource-aware execution, secure task communication, BLE peer discovery, and crash-safe recovery. Outside of shipping code, I was the R&D Lead of my college’s Space Club and a former core member of the Cybersecurity Club. I care about systems that hold up in production, code that someone else can maintain, and interfaces that people actually enjoy using.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
