
import React from 'react';
// Added missing import for Link
import { Link } from 'react-router-dom';

const Skills: React.FC = () => {
  const skillSets = [
    {
      id: "SPEC_01",
      title: "Mobile Core",
      description: "Building resilient cross-platform apps with performance-first principles.",
      skills: ["Flutter", "Dart", "SwiftUI", "Firebase", "Bloc", "Riverpod"],
      size: "large"
    },
    {
      id: "SPEC_02",
      title: "UX Logic",
      description: "Interaction engineering.",
      skills: ["Research", "User Flows"],
      size: "small"
    },
    {
      id: "SPEC_03",
      title: "Visuals",
      description: "Technical graphics.",
      skills: ["Figma", "Design Systems"],
      size: "small"
    },
    {
      id: "SPEC_04",
      title: "Data Systems",
      description: "Ensuring data integrity and high-speed retrieval across the stack.",
      skills: ["PostgreSQL", "Node.js", "GraphQL", "Redis"],
      size: "medium"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500"></div>
          <span className="text-xs font-black uppercase tracking-[0.5em] text-amber-500">System_Capabilities</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase mb-6 leading-none">The <span className="text-amber-500 italic">Specs.</span></h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">
          A breakdown of the technological foundation used to construct high-impact digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {skillSets.map((set, idx) => (
          <div 
            key={idx} 
            className={`brutal-card relative p-8 bg-white dark:bg-zinc-900 overflow-hidden flex flex-col justify-between 
              ${set.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${set.size === 'medium' ? 'md:col-span-2' : ''}
              ${set.size === 'small' ? 'md:col-span-1' : ''}
            `}
          >
            <div className="absolute top-4 right-4 text-[10px] font-black text-slate-300 dark:text-zinc-800">{set.id}</div>
            
            <div className="relative z-10">
              <h3 className={`font-display font-black uppercase tracking-tighter mb-4 ${set.size === 'large' ? 'text-5xl' : 'text-2xl'}`}>
                {set.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 max-w-[200px]">
                {set.description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {set.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 border-2 border-slate-900 dark:border-white/20 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-amber-500 hover:text-black hover:border-black cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="md:col-span-4 brutal-card bg-amber-500 p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 shadow-brutal hover:shadow-none translate-x-[-4px] translate-y-[-4px]">
          <div>
            <h3 className="text-4xl font-display font-black uppercase tracking-tighter text-black">Need a custom build?</h3>
            <p className="text-black/60 font-bold uppercase text-xs tracking-widest mt-2">Consultation available for 2026</p>
          </div>
          {/* Link component used here */}
          <Link to="/contact" className="px-10 py-5 bg-black text-amber-500 font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-colors">
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
