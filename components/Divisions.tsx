import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DivisionType } from '../types';

const MotionDiv = motion.div as any;
const MotionCircle = motion.circle as any;
const MotionG = motion.g as any;
const MotionSpan = motion.span as any;

// --- Visual Components ---

const MediaVisual = () => {
  // Ripple effect using CSS grid and hover states
  // Increased contrast: Black background, brighter green pixels, removed overall opacity blur
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-1 w-full h-full p-6 bg-black relative shadow-inner">
      {[...Array(144)].map((_, i) => (
        <MotionDiv 
          key={i}
          className="rounded-[1px] cursor-crosshair"
          style={{ backgroundColor: '#00FF88' }}
          initial={{ opacity: 0.1 }}
          whileHover={{ 
            scale: 1.5, 
            opacity: 1,
            boxShadow: "0 0 8px #00FF88",
            zIndex: 10,
            transition: { duration: 0.05 }
          }}
          animate={{ 
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{ 
            opacity: { duration: 3, delay: Math.random() * 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}
    </div>
  );
};

const NetworksVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black/40">
       <svg width="100%" height="100%" viewBox="0 0 400 400" className="overflow-visible">
         <defs>
           <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
             <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
             <feMerge>
               <feMergeNode in="coloredBlur"/>
               <feMergeNode in="SourceGraphic"/>
             </feMerge>
           </filter>
         </defs>
         
         {/* Connecting Lines */}
         <MotionG initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <line x1="200" y1="200" x2="100" y2="100" stroke="#00CCFF" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="200" y1="200" x2="300" y2="150" stroke="#00CCFF" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="200" y1="200" x2="250" y2="300" stroke="#00CCFF" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="300" y2="150" stroke="#00CCFF" strokeWidth="1" strokeOpacity="0.1" />
         </MotionG>

         {/* Pulsing Nodes */}
         {[...Array(6)].map((_, i) => {
             const cx = [200, 100, 300, 250, 150, 350][i];
             const cy = [200, 100, 150, 300, 250, 250][i];
             return (
               <g key={i}>
                 {/* Pulse Ring */}
                 <MotionCircle
                   cx={cx}
                   cy={cy}
                   r={20}
                   fill="none"
                   stroke="#00CCFF"
                   strokeWidth="1"
                   initial={{ scale: 0.5, opacity: 0.8 }}
                   animate={{ scale: 2, opacity: 0 }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                 />
                 {/* Core Node */}
                 <MotionCircle 
                    cx={cx} 
                    cy={cy} 
                    r={6} 
                    fill="#00CCFF" 
                    filter="url(#glow)"
                    animate={{ r: [6, 8, 6], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                 />
               </g>
             );
         })}
       </svg>
    </div>
  );
};

const DevVisual = () => {
  const codeSnippet = `class Solution {
  constructor() {
    this.vision = "Limitless";
  }

  optimize(future) {
    return future.scale();
  }
  
  render() {
    return <NextGen />;
  }
}`;

  const [displayCode, setDisplayCode] = useState('');
  
  useEffect(() => {
    let isActive = true;
    let i = 0;
    
    const type = () => {
      if (!isActive) return;
      if (i < codeSnippet.length) {
        setDisplayCode(codeSnippet.substring(0, i + 1));
        i++;
        setTimeout(type, Math.random() * 50 + 30); // Random typing speed
      } else {
        setTimeout(() => {
           if (isActive) {
             i = 0;
             setDisplayCode('');
             type();
           }
        }, 5000); // Wait before restarting
      }
    };
    
    type();
    return () => { isActive = false; };
  }, []);

  return (
    <div className="w-full h-full p-6 md:p-12 font-mono text-xs md:text-sm text-[#FF3366] bg-black/40 backdrop-blur-sm overflow-hidden leading-relaxed">
      <div className="flex gap-2 mb-4 opacity-50">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="whitespace-pre-wrap">
        <code>
          {displayCode}
          <MotionSpan 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-[#FF3366] ml-1 align-middle"
          />
        </code>
      </pre>
    </div>
  );
};

const divisions = [
  {
    id: DivisionType.MEDIA,
    number: "01",
    title: "MEDIA",
    tagline: "WE MAKE YOUR EVENTS UNFORGETTABLE",
    description: "LED walls that turn venues into experiences. Stage tech that makes moments memorable. From corporate conferences to music festivals — we bring the visual power.",
    services: ["LED Screen Rental", "Event Production", "Stage Design", "Live Support"],
    color: "#00FF88",
    VisualComponent: MediaVisual
  },
  {
    id: DivisionType.NETWORKS,
    number: "02",
    title: "NETWORKS",
    tagline: "THE BACKBONE YOU CAN RELY ON",
    description: "Server rooms for hotspot businesses. Surveillance systems that protect. Network infrastructure that never sleeps. We build the invisible that keeps you running.",
    services: ["Hotspot Deployment", "CCTV Systems", "Infrastructure", "Monitoring"],
    color: "#00CCFF",
    VisualComponent: NetworksVisual
  },
  {
    id: DivisionType.DEV,
    number: "03",
    title: "DEV",
    tagline: "CODE THAT SOLVES REAL PROBLEMS",
    description: "Websites that convert. Web apps that scale. We're developers who understand business — building digital solutions that matter.",
    services: ["Web Development", "Custom Apps", "E-commerce", "Maintenance"],
    color: "#FF3366",
    VisualComponent: DevVisual
  }
];

export const Divisions: React.FC = () => {
  return (
    <section id="divisions" className="bg-primary relative py-12 md:py-20">
      <div className="container mx-auto px-6 mb-8 md:mb-12">
        <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-2">Our Expertise</h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative flex flex-col gap-0">
        {divisions.map((division, index) => (
          <DivisionCard key={division.id} division={division} index={index} />
        ))}
      </div>
    </section>
  );
};

const DivisionCard: React.FC<{ division: typeof divisions[0], index: number }> = ({ division, index }) => {
  const isEven = index % 2 === 0;
  const Visual = division.VisualComponent;
  
  return (
    // Mobile: min-h-screen for snapping feel, py-8 for less padding. Desktop: Sticky for scroll effect.
    <div className="relative min-h-screen md:sticky md:top-0 flex items-center justify-center py-8 md:py-20 overflow-hidden bg-primary border-t border-white/5">
       <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-12 items-center h-full justify-center">
          
          {/* Visual - Mobile: Square aspect, sized appropriately. Desktop: Taller */}
          <MotionDiv 
            className={`w-full md:w-1/2 aspect-square md:aspect-auto md:h-[600px] bg-neutral/20 border border-white/5 rounded-2xl relative overflow-hidden order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />
             <Visual />
          </MotionDiv>

          {/* Content */}
          <MotionDiv 
            className={`w-full md:w-1/2 flex flex-col gap-4 md:gap-6 order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
             <div className="relative">
                <span className="text-6xl md:text-8xl font-display font-bold text-transparent opacity-10 absolute -top-8 -left-4 md:-top-12 md:-left-8 select-none" style={{ WebkitTextStroke: "1px white" }}>
                  {division.number}
                </span>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white relative z-10">
                  {division.title}
                </h3>
             </div>
             
             <h4 className="text-lg md:text-2xl font-medium" style={{ color: division.color }}>
               {division.tagline}
             </h4>
             
             <p className="text-neutral-400 text-sm md:text-lg leading-relaxed max-w-xl">
               {division.description}
             </p>

             <div className="mt-4 md:mt-8 grid grid-cols-2 gap-x-2 gap-y-3 md:gap-4">
               {division.services.map((service, i) => (
                 <div key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-white/80">
                   <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: division.color }} />
                   {service}
                 </div>
               ))}
             </div>
          </MotionDiv>

       </div>
    </div>
  );
};