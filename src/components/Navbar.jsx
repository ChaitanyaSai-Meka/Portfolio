import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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

      {/* Logbook Link */}
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
