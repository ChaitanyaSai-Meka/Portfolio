import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";

const socials = [
  { label: "github", href: "https://github.com/ChaitanyaSai-Meka" },
  { label: "linkedin", href: "https://www.linkedin.com/in/chaitanya-sai-meka/" },
  { label: "x.com", href: "https://x.com/IAMCHAITANYASAI" },
  { label: "leetcode", href: "https://leetcode.com/u/chaitanyasai_meka/" },
  { label: "instagram", href: "https://www.instagram.com/chaitanyasai_meka/" },
];

const now = [
  { label: "rishihood university", href: null, note: "b.tech cs & ai · 2024–2028" },
  { label: "ramforze", href: "https://github.com/ChaitanyaSai-Meka/RamForze", note: "building · go · swiftui · distributed systems" },
  { label: "open to work", href: null, note: "swe / backend / ai roles" },
];

const previously = [
  { label: "vizal ai", href: null, note: "software engineer intern · dec '25 – jan '26" },
  { label: "flipz", href: null, note: "freelance · react native · ai flashcards" },
  { label: "space club (sast)", href: null, note: "head of r&d" },
  { label: "cybersecurity club (socs)", href: null, note: "core member" },
];

const projects = [
  { label: "devledger", href: "https://github.com/ChaitanyaSai-Meka/devledger", note: "go · cli · cost splitting" },
  { label: "edgebeat", href: "https://edgebeat.vercel.app/", note: "swift · macos music visualizer" },
  { label: "univa", href: "https://univa-ten.vercel.app/", note: "rag · vector search" },
  { label: "credit risk system", href: "https://credit-risk-system6.streamlit.app/", note: "ml · predictive analytics" },
  { label: "the-vault", href: "https://the-vault-smoky.vercel.app/", note: "rag · pdf q&a" },
  { label: "apple website clone", href: "https://apple-website-ecru-xi.vercel.app/", note: "react · gsap · three.js" },
  { label: "cyberfiction", href: "https://chaitanyasai-meka.github.io/CYBERFICTION/", note: "gsap · lenis" },
  { label: "akira", href: "https://github.com/ChaitanyaSai-Meka/Akira", note: "voice agent · nlp" },
];

const LinkItem = ({ label, href, note, external = true }) => {
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-baseline gap-2 py-1.5 text-neutral-400 hover:text-white transition-colors duration-200"
      >
        <span className="underline decoration-neutral-700 underline-offset-4 group-hover:decoration-neutral-400 transition-colors">{label}</span>
        {note && <span className="text-neutral-600 text-xs">· {note}</span>}
        {external && <span className="text-neutral-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>}
      </a>
    );
  }
  return (
    <div className="flex items-baseline gap-2 py-1.5">
      <span className="text-neutral-300">{label}</span>
      {note && <span className="text-neutral-600 text-xs">· {note}</span>}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-12">
    <p className="text-neutral-600 text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">{title}</p>
    <div className="flex flex-col">{children}</div>
  </div>
);

function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen selection:bg-white/15 flex items-center justify-center px-6 py-20">
      {/* Subtle dot grid background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Soft radial fade overlay */}
      <div className="fixed inset-0 z-0 bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]" />

      <main className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm mb-3">hey, i'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-3">
            chaitanya sai meka
          </h1>
          <p className="text-neutral-500 text-sm">software engineer</p>
        </div>

        {/* Now */}
        <Section title="now">
          {now.map((item) => (
            <LinkItem key={item.label} {...item} />
          ))}
        </Section>

        {/* Previously */}
        <Section title="previously">
          {previously.map((item) => (
            <LinkItem key={item.label} {...item} />
          ))}
        </Section>

        {/* Projects */}
        <Section title="projects">
          {projects.map((item) => (
            <LinkItem key={item.label} {...item} />
          ))}
        </Section>

        {/* Elsewhere */}
        <Section title="elsewhere">
          {socials.map((item) => (
            <LinkItem key={item.label} {...item} />
          ))}
        </Section>

        {/* Resume */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <a
            href="/resume.pdf"
            download="Chaitanya_Sai_Meka_Resume.pdf"
            className="text-neutral-500 hover:text-white text-sm underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-400 transition-colors"
          >
            download resume ↓
          </a>
        </div>
      </main>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
