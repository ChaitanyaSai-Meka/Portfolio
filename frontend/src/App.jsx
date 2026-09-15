import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Moon,
  Sun,
  X,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'EdgeBeat',
    kicker: 'Native macOS / SwiftUI',
    description: 'A music visualizer that turns the edge of your screen into an album-colored, beat-synced light field.',
    detail: 'EdgeBeat listens to the currently playing track, samples its artwork, and renders a calm, reactive ambient layer around the display. The result feels like a tiny concert stage that stays out of the way.',
    image: '/edge_beat.webp', tags: ['SwiftUI', 'Core Audio', 'macOS'], year: '2025', number: '01', accent: 'lime',
    live: 'https://edgebeat.vercel.app/', code: 'https://github.com/ChaitanyaSai-Meka/EdgeBeat',
  },
  {
    title: 'Devledger',
    kicker: 'Developer tooling / Go',
    description: 'A local-first CLI for splitting shared development infrastructure costs without a spreadsheet.',
    detail: 'Devledger keeps the whole workflow close to the developer: import usage, define a fair split, and produce an auditable report from the terminal. It is intentionally boring in the best way.',
    image: '/devledger.webp', tags: ['Go', 'CLI', 'SQLite'], year: '2025', number: '02', accent: 'coral',
    live: 'https://github.com/ChaitanyaSai-Meka/devledger#readme', code: 'https://github.com/ChaitanyaSai-Meka/devledger',
  },
  {
    title: 'Univa',
    kicker: 'AI search / Product',
    description: 'A document intelligence workspace for semantic search and grounded Q&A over PDF libraries.',
    detail: 'Univa turns a folder of dense documents into a searchable working set. Embeddings, retrieval, and concise citations make the useful answer feel close to the source.',
    image: '/univa.webp', tags: ['Python', 'FastAPI', 'RAG'], year: '2024', number: '03', accent: 'blue',
    live: 'https://univa-ten.vercel.app/', code: 'https://github.com/ChaitanyaSai-Meka/UNIVA',
  },
  {
    title: 'RamForze',
    kicker: 'Distributed systems / In progress',
    description: 'A LAN task dispatcher that turns idle Macs into a small, resource-aware compute cluster.',
    detail: 'RamForze explores secure peer discovery, task handoff, and crash-safe recovery across a local network. The goal is a tool that makes spare compute feel immediate and dependable.',
    image: '/black_page.webp', tags: ['Go', 'SwiftUI', 'Networking'], year: 'Now', number: '04', accent: 'yellow',
    live: '', code: 'https://github.com/ChaitanyaSai-Meka/RamForze', status: 'Building in public',
  },
];

const archive = [
  ['THE-VAULT', 'Private PDF search + RAG', '/the-vault.webp', 'https://the-vault-smoky.vercel.app/'],
  ['Credit Risk System', 'Predictive analytics + agent', '/credit_risk.webp', 'https://credit-risk-system6.streamlit.app/'],
  ['Cyberfiction', 'Motion-led web experiment', '/cyberfiction.webp', 'https://chaitanyasai-meka.github.io/CYBERFICTION/'],
  ['Akira', 'Real-time voice agent', '/akira_voice_agent.webp', 'https://github.com/ChaitanyaSai-Meka/Akira'],
  ['Mepa', 'Metro route finder', '/mepa.webp', 'https://github.com/ChaitanyaSai-Meka/mepa'],
  ['Movies', 'Live API explorer', '/Movies.webp', 'https://github.com/ChaitanyaSai-Meka/MoviesWeb_Project'],
];

const stack = [
  { group: 'Languages', items: 'Go / Python / TypeScript / JavaScript / SQL' },
  { group: 'Backend', items: 'FastAPI / Node.js / PostgreSQL / Redis / REST' },
  { group: 'Frontend', items: 'React / Next.js / React Native / Tailwind' },
  { group: 'Systems', items: 'Distributed jobs / RAG / Core Audio / SwiftUI' },
];

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let points = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 17000));
      points = Array.from({ length: count }, (_, index) => ({
        x: (index * 97) % window.innerWidth, y: (index * 53) % window.innerHeight,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points.forEach((point) => {
        if (!reducedMotion) {
          point.x += point.vx; point.y += point.vy;
          if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
          if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;
        }
        const distance = Math.hypot(point.x - mouse.x, point.y - mouse.y);
        const alpha = distance < 200 ? 0.5 : 0.18;
        context.fillStyle = `rgba(210, 255, 96, ${alpha})`;
        context.fillRect(point.x, point.y, 1.5, 1.5);
      });
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const updateMouse = (event) => { mouse = { x: event.clientX, y: event.clientY }; };
    resize(); draw(); window.addEventListener('resize', resize); window.addEventListener('pointermove', updateMouse);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', updateMouse); };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'dark');
  const navLinks = ['work', 'about', 'contact'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 28, opacity: 0, duration: 0.9, stagger: 0.09, ease: 'power3.out', delay: 0.1 });
      gsap.from('.hero-aside', { x: 24, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.35 });
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 84%', once: true } });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => { document.body.style.overflow = activeProject ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [activeProject]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const year = useMemo(() => new Date().getFullYear(), []);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('chaitanyasai.meka@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <ParticleField />
      <header className="site-nav">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Chaitanya Sai Meka home"><span className="wordmark-mark">CS</span><span>Chaitanya Sai Meka</span></a>
        <div className="nav-tools">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link} href={`#${link}`} onClick={closeMenu}>{link}</a>)}
          <a className="nav-resume" href="/resume.pdf" download="Chaitanya_Sai_Meka_Resume.pdf" onClick={closeMenu}>Resume <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> CS + AI student / builder</div>
            <h1>I build systems<br /><em>that feel like ideas.</em></h1>
            <p className="hero-lede">Backend engineer in training, product-minded by instinct. I turn complex data, thoughtful interfaces, and a little curiosity into software people want to use.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowDownRight size={17} /></a><button className="text-link" onClick={copyEmail}>{copied ? <><Check size={15} /> Email copied</> : <><Mail size={15} /> Say hello</>}</button></div>
            <div className="hero-meta"><span>Based in India</span><span className="meta-line" /><span>Open to thoughtful collaborations</span></div>
          </div>
          <div className="hero-aside"><div className="portrait-wrap"><div className="portrait-topline"><span>01 / 04</span><span>Current frame</span></div><img src="/profile_pic.jpg" alt="Chaitanya Sai Meka" className="portrait" /><div className="portrait-caption"><span>Chaitanya Sai Meka</span><span>© {year}</span></div></div><div className="hero-note"><span className="note-index">A / 01</span><p>Currently exploring resource-aware systems, ambient computing, and the quiet details that make digital products feel human.</p></div></div>
          <div className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
        </section>

        <section className="signal-strip" data-reveal><div><span className="signal-label">01</span><strong>75%</strong><span>faster batch processing<br />at Vizal AI</span></div><div><span className="signal-label">02</span><strong>420+</strong><span>problems solved<br />on LeetCode</span></div><div><span className="signal-label">03</span><strong>3</strong><span>people led while<br />shipping an AI product</span></div><div className="signal-status"><span className="pulse-dot" /> Available for the next good problem</div></section>

        <section className="work section-frame" id="work"><div className="section-heading" data-reveal><div><span className="section-index">01 — Selected work</span><h2>Things I’ve<br /><em>made real.</em></h2></div><p>Small experiments, serious systems, and the space in between. Each project starts with a question and ends with something you can touch.</p></div><div className="project-list">{projects.map((project) => <article className="project-row" key={project.title} data-reveal onClick={() => setActiveProject(project)}><div className={`project-thumb accent-${project.accent}`}><img src={project.image} alt="" loading="lazy" /><span className="project-number">{project.number}</span><span className="project-open"><MoveUpRight size={18} /></span></div><div className="project-info"><div className="project-topline"><span>{project.kicker}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ChevronRight className="row-chevron" size={22} /></article>)}</div><div className="archive-link" data-reveal><span>More experiments in the archive</span><a href="https://github.com/ChaitanyaSai-Meka" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15} /></a></div></section>

        <section className="about section-frame" id="about"><div className="section-heading" data-reveal><div><span className="section-index">02 — A little context</span><h2>Curious by<br /><em>default.</em></h2></div><p>I like the point where a useful idea meets a well-made machine. My work moves between backend architecture, applied AI, and interfaces with a pulse.</p></div><div className="about-grid" data-reveal><div className="about-copy"><p className="large-copy">I’m a Computer Science and AI student at Newton School of Technology, Rishihood University. At Vizal AI, I architected Kriya’s FastAPI backend and built the PostgreSQL pipelines powering Kivo Money’s GenAI platform.</p><p>I care about software that holds up under pressure and still feels considered when someone uses it for the first time. That means clear boundaries, fast feedback, and interfaces that respect attention.</p><a className="text-link" href="/resume.pdf" download="Chaitanya_Sai_Meka_Resume.pdf">Read the longer version <ArrowUpRight size={15} /></a></div><div className="principles"><div><span>01</span><strong>Make it legible</strong><p>Complexity belongs in the system, never in the experience.</p></div><div><span>02</span><strong>Stay close to reality</strong><p>Ship the useful slice, measure it, then make it better.</p></div><div><span>03</span><strong>Leave a trail</strong><p>Good work should teach the next person how to continue it.</p></div></div></div></section>

        <section className="stack section-frame" data-reveal><div className="stack-heading"><span className="section-index">03 — Working vocabulary</span><h2>The tools behind<br /><em>the thinking.</em></h2></div><div className="stack-list">{stack.map((item, index) => <div className="stack-row" key={item.group}><span className="stack-number">0{index + 1}</span><strong>{item.group}</strong><span>{item.items}</span><Code2 size={18} /></div>)}</div></section>

        <section className="archive section-frame" data-reveal><div className="archive-heading"><span className="section-index">04 — The archive</span><h2>A few more<br /><em>rabbit holes.</em></h2><p>Older builds, side quests, and proof that I rarely leave a blank canvas alone.</p></div><div className="archive-grid">{archive.map(([title, description, image, link]) => <a className="archive-card" href={link} target="_blank" rel="noreferrer" key={title}><img src={image} alt="" loading="lazy" /><div><span>{description}</span><strong>{title}</strong></div><ArrowUpRight size={16} /></a>)}</div></section>

        <section className="contact section-frame" id="contact" data-reveal><div className="contact-inner"><span className="section-index">05 — Start a conversation</span><h2>Have a hard problem<br /><em>worth solving?</em></h2><p>Tell me what you’re building, what feels stuck, or what you’re curious about. I’ll bring a notebook and a point of view.</p><div className="contact-actions"><a className="button button-primary" href="mailto:chaitanyasai.meka@gmail.com">chaitanyasai.meka@gmail.com <ArrowUpRight size={17} /></a><button className="button button-quiet" onClick={copyEmail}>{copied ? 'Copied to clipboard' : 'Copy email'}</button></div></div><div className="contact-mark" aria-hidden="true"><Globe2 size={190} strokeWidth={0.6} /></div></section>
      </main>

      <footer className="site-footer"><span>Chaitanya Sai Meka — engineer, student, perpetual tinkerer.</span><div className="footer-links"><a href="https://github.com/ChaitanyaSai-Meka" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/chaitanya-sai-meka/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:chaitanyasai.meka@gmail.com" aria-label="Email"><Mail size={17} /></a></div><span>© {year}</span></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && setActiveProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title"><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button><img src={activeProject.image} alt="" /><div className="modal-content"><div className="project-topline"><span>{activeProject.kicker}</span><span>{activeProject.year}</span></div><h2 id="project-title">{activeProject.title}</h2><p>{activeProject.detail}</p><div className="tag-row">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="modal-actions">{activeProject.live && <a className="button button-primary" href={activeProject.live} target="_blank" rel="noreferrer">Open project <ExternalLink size={15} /></a>}<a className="text-link" href={activeProject.code} target="_blank" rel="noreferrer">View source <Github size={15} /></a></div></div></div></div>}
    </div>
  );
}

export default App;
