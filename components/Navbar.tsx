
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Projects', path: '/projects' },
    { name: 'Expertise', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white dark:bg-obsidian brutal-card px-8 py-4 shadow-brutal-dark dark:shadow-brutal">
        <Link to="/" className="text-2xl font-display font-black text-black dark:text-white flex items-center gap-1">
          <span className="text-amber-500">IM</span>
          <span className="tracking-tighter uppercase italic">NEO</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-amber-500 ${
                isActive(link.path) ? 'text-amber-500 underline underline-offset-8 decoration-2' : 'text-slate-900 dark:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-slate-900 dark:bg-white/20"></div>
          <button
            onClick={toggleTheme}
            className="text-[10px] font-black uppercase tracking-widest hover:text-amber-500 transition-colors"
          >
            {isDarkMode ? 'LIGHT_ON' : 'DARK_ON'}
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d={isOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-28 left-6 right-6 bg-white dark:bg-obsidian brutal-card p-10 shadow-brutal animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-display font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-amber-500' : 'text-slate-900 dark:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="mt-4 px-8 py-4 brutal-card bg-amber-500 text-black font-black uppercase text-xs tracking-widest">
              Switch_Mode
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
