
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/assets/images';

const Home: React.FC = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="relative pt-6 md:pt-10 pb-20">
      {/* Background Marquee - Optimized for mobile */}
      <div className="absolute top-32 md:top-40 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] dark:opacity-[0.07] z-0">
        <div className="flex whitespace-nowrap animate-marquee text-[12vw] md:text-[20vw] font-display font-black leading-none uppercase">
          Craft • Logic • Mobile • &nbsp;
          Craft • Logic • Mobile • &nbsp;
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        {/* Centered Avatar Frame - Responsive Sizing */}
        <div 
          ref={addToRefs}
          className="relative mb-10 md:mb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="relative w-32 h-32 md:w-56 md:h-56 brutal-card bg-white dark:bg-zinc-900 overflow-hidden flex items-center justify-center p-1.5 md:p-2">
            <div className="absolute top-1.5 md:top-2 left-1.5 md:left-2 text-[8px] md:text-[10px] font-bold text-amber-500 uppercase tracking-widest">Live_Feed_01</div>
            <div className="absolute bottom-1.5 md:bottom-2 right-1.5 md:right-2 text-[8px] md:text-[10px] font-bold text-slate-400 uppercase">REC [•]</div>
            
            <img 
              src= {IMAGES.avatar.portrait}
              alt="Portrait" 
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          {/* Corner accents - Adjusted for mobile */}
          <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-amber-500"></div>
          <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-amber-500"></div>
        </div>

        <div className="text-center w-full max-w-4xl">
          <h1 
            ref={addToRefs}
            className="text-5xl sm:text-7xl md:text-[10rem] font-display font-extrabold tracking-tighter leading-[0.9] md:leading-[0.8] mb-6 md:mb-8 opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out"
          >
            CRAFT <br />
            <span className="text-amber-500">LOGIC</span> <br />
            MOBILE
          </h1>
          
          <div 
            ref={addToRefs}
            className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000 delay-400 ease-out"
          >
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-12 max-w-xl font-medium leading-tight italic px-2">
              Independent Flutter Developer and UI/UX Designer specialized in high-performance mobile systems.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <Link to="/projects" className="brutal-card w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-amber-500 text-black font-black uppercase tracking-tighter hover:bg-black hover:text-amber-500 text-center">
                View Systems
              </Link>
              <Link to="/contact" className="brutal-card w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white dark:bg-transparent text-black dark:text-white font-black uppercase tracking-tighter text-center">
                Initiate Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Grid - Responsive Stack */}
        <div 
          ref={addToRefs}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-20 md:mt-32 w-full opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out"
        >
          <div className="brutal-card p-6 md:p-10 bg-white dark:bg-zinc-900 group">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-3 md:mb-4 block">01_Concept</span>
            <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter mb-4 md:mb-6 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform">Architecture first, <br/> Aesthetics second.</h3>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 md:mb-10">I don't just make things look pretty. I build scalable digital infrastructures that last.</p>
            <div className="h-[1px] md:h-[2px] w-full bg-slate-200 dark:bg-zinc-800"></div>
          </div>

          <div className="brutal-card p-6 md:p-10 bg-amber-500 text-black group shadow-brutal hover:shadow-none translate-x-[-4px] translate-y-[-4px] md:translate-x-[-4px] md:translate-y-[-4px]">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-3 md:mb-4 block opacity-60">02_Status</span>
            <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter mb-4 md:mb-6">Currently scaling <br/> digital products.</h3>
            <p className="text-sm md:text-base mb-6 md:mb-10 font-medium">Available for select projects that challenge the status quo of user interaction.</p>
            <div className="h-[1px] md:h-[2px] w-full bg-black/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
