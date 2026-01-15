
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center text-black font-black text-xs">A</div>
          <span className="text-sm font-bold text-slate-800 dark:text-white">NEODEV.UI</span>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} — Designed and coded with passion.
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-amber-500">Twitter</a>
          <a href="#" className="hover:text-amber-500">Instagram</a>
          <a href="#" className="hover:text-amber-500">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
