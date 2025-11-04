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
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Chaitanya Sai Meka, a passionate and driven developer with a strong foundation in software engineering and a keen interest in building impactful digital solutions. I thrive at the intersection of technology and creativity, with hands-on experience in full-stack development, UI/UX design, and collaborative team projects.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Currently pursuing my academic journey while actively working on personal and open-source projects, I continuously seek opportunities to learn and grow in real-world environments. I have a strong grasp of modern web technologies, especially React, and I enjoy solving complex problems with clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm also exploring the early stages of a tech startup idea called <strong>Xeon</strong>, where I'm experimenting with innovative solutions and learning to translate abstract ideas into structured plans. This journey is helping me build my entrepreneurial mindset and sharpen my skills in product thinking, strategy, and leadership—even as the concept evolves through ideation and feedback.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to work on challenging projects, learn from experienced mentors, and make meaningful contributions to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;