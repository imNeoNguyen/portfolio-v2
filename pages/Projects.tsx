
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { YearCategory } from '../types';

const Projects: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<YearCategory | 'All'>('All');
  const years: (YearCategory | 'All')[] = ['All', 2025, 2024, 2023];
  const filteredProjects = selectedYear === 'All' ? PROJECTS : PROJECTS.filter(p => p.year === selectedYear);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-32 overflow-x-hidden">
      {/* Refined Header Section */}
      <div className="mb-16 md:mb-24 border-b-4 border-black dark:border-white pb-10 md:pb-12">
        <div className="flex flex-col gap-6">
          {/* Top Row: Info & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 order-2 lg:order-1">
            <div className="max-w-md border-l-4 border-amber-500 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-amber-500 text-black px-1.5 py-0.5 font-mono text-[8px] font-black uppercase">STATUS: ARCHIVE_SYNCED</span>
              </div>
              <p className="text-[10px] md:text-xs font-mono font-bold uppercase opacity-60 leading-relaxed">
                A comprehensive archive of mobile architectures, UI systems, and high-stakes product engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 shrink-0">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`group relative px-3 py-1.5 md:px-4 md:py-2 border-2 border-black dark:border-white text-[9px] md:text-[10px] font-mono font-bold uppercase transition-all overflow-hidden ${
                    selectedYear === year 
                    ? 'bg-black text-white dark:bg-amber-500 dark:text-black shadow-brutal-amber' 
                    : 'bg-transparent hover:translate-x-1 hover:-translate-y-1'
                  }`}
                >
                  <span className="relative z-10">[{year}]</span>
                  {selectedYear !== year && <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Title */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[9px] font-black uppercase text-amber-500 tracking-widest">DIR: PROJECTS_v4.2</span>
              <div className="h-[1px] flex-grow bg-black/10 dark:bg-white/10"></div>
            </div>
            <h2 className="text-[12vw] sm:text-[10vw] md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] break-words pointer-events-none select-none">
              PORT<span className="text-amber-500 italic">FOLIO.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Compact Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-24">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="relative group">
            {/* Project "Folder Tab" - Smaller scale */}
            <div className="absolute -top-7 left-0 flex items-end max-w-full z-30">
              <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 font-mono text-[8px] font-black uppercase tracking-widest truncate">
                FILE_00{project.id}
              </div>
              <div className="w-6 h-7 border-t-2 border-r-2 border-black dark:border-white transform -skew-x-[45deg] origin-bottom-left -ml-[1px] bg-slate-50 dark:bg-obsidian"></div>
            </div>

            <div className="flex flex-col border-2 border-black dark:border-white bg-white dark:bg-zinc-950 shadow-brutal dark:shadow-brutal-white transition-all group-hover:shadow-brutal-amber overflow-hidden relative z-20 h-full">
              
              {/* Image Section - Scaled Down */}
              <div className="border-b-2 border-black dark:border-white overflow-hidden relative shrink-0">
                <div className="aspect-[16/9] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 relative z-10"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-[scan_2s_ease-in-out_infinite]"></div>
                    <div className="absolute inset-0 border-[8px] border-black/5 dark:border-white/5"></div>
                  </div>
                </div>
              </div>

              {/* Content Section - Compact Padding */}
              <div className="p-5 md:p-6 flex flex-col flex-grow overflow-hidden">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
                    <span className="font-mono text-[8px] font-black uppercase tracking-tighter">Active</span>
                  </div>
                  <span className="font-mono text-[8px] font-bold opacity-40 italic">FY_{project.year}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-4 break-words group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm font-medium leading-tight text-slate-700 dark:text-slate-300 border-l-2 border-amber-500 pl-4 mb-6 line-clamp-3">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                   <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[8px] font-mono font-bold uppercase border border-black/5 dark:border-white/5 truncate">ROLE: {project.role}</span>
                </div>

                {/* Compact Links */}
                {project.links && (
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.links.android && (
                      <a href={project.links.android} target="_blank" rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black transition-all font-mono text-[8px] font-black uppercase">
                        Android
                      </a>
                    )}
                    {project.links.ios && (
                      <a href={project.links.ios} target="_blank" rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black transition-all font-mono text-[8px] font-black uppercase">
                         iOS
                      </a>
                    )}
                    {project.links.web && (
                      <a href={project.links.web} target="_blank" rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black transition-all font-mono text-[8px] font-black uppercase">
                         Web
                      </a>
                    )}
                  </div>
                )}

                {/* Compact Spec Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/10 dark:border-white/10 shrink-0">
                  <div className="min-w-0">
                    <h4 className="font-mono text-[7px] font-black uppercase text-amber-500 mb-1 truncate">// STACK</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[7px] font-mono font-bold uppercase opacity-60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-mono text-[7px] font-black uppercase text-amber-500 mb-1 truncate">// KEY_RESULTS</h4>
                    <div className="space-y-0.5">
                      {project.outcomes.slice(0, 2).map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-[7px] font-mono font-bold uppercase truncate opacity-60">
                          <span className="text-amber-500">»</span> {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default Projects;
