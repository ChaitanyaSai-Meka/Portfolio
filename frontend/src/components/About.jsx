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
          alt="Profile"
          className="w-full h-full"
        />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Chaitanya Sai Meka. I build backend systems, ship full-stack products, and spend a lot of time thinking about how software scales. Most recently, I interned at Vizal AI where I led the backend for Kivo, a client AI platform, designing PostgreSQL pipelines, engineering async scrapers that cut batch processing time by 75%, and co-architecting microservices for their Kriya product.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My stack runs deep on both ends. I'm fluent in Python, TypeScript, JavaScript, and SQL, and I work regularly with Node.js, FastAPI, React, Next.js, and React Native. I've built RAG pipelines with LangChain and Supabase achieving sub-100ms AI inference, freelanced on a full-stack React Native product while leading a three-person team end-to-end, and I carry a LeetCode rating of 1635+ with 400+ problems solved.
          </p>

          <p className="text-lg leading-relaxed">
            Outside of shipping code, I was the R&D Lead at my college's Space Club and I'm a core member of the Cybersecurity Club. I care about systems that hold up in production, code that someone else can maintain, and interfaces that people actually enjoy using.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;