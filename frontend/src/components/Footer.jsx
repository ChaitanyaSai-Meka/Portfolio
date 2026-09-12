import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 pb-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ChaitanyaSai-Meka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-sai-meka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/IAMCHAITANYASAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
            aria-label="X (Twitter)"
          >
            <SiX className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/chaitanyasai_meka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
        <div className="text-neutral-600 text-sm">
          © {currentYear} Chaitanya Sai Meka
        </div>
      </div>
    </footer>
  );
}
