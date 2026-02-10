import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Button } from './ui/Button';

const MotionDiv = motion.div as any;
const MotionP = motion.p as any;

const TechFiveVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="w-full h-[50vh] md:h-full flex items-center justify-center relative perspective-1000 overflow-hidden md:overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <MotionDiv
        className="relative w-64 h-80 md:w-80 md:h-96 preserve-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Back Grid Layer - Networks */}
        <div className="absolute inset-0 border border-neutral/40 bg-neutral/10 backdrop-blur-sm transform -translate-z-12 rounded-xl grid grid-cols-4 grid-rows-4 gap-4 p-4 shadow-2xl">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-muted rounded-full opacity-50" />
          ))}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <svg className="w-full h-full" viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="0.5" />
                <line x1="90" y1="10" x2="10" y2="90" stroke="white" strokeWidth="0.5" />
             </svg>
          </div>
        </div>

        {/* Middle Layer - Media (Pixels) */}
        <div className="absolute inset-0 flex items-center justify-center transform translate-z-0">
          <div className="text-[12rem] md:text-[16rem] font-display font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-transparent opacity-50 select-none">
            5
          </div>
        </div>

        {/* Front Layer - Dev (Brackets & Code) */}
        <div className="absolute inset-0 transform translate-z-12 flex items-center justify-center pointer-events-none">
          <MotionDiv 
            className="text-[10rem] md:text-[14rem] font-display font-bold text-transparent select-none relative z-10"
            style={{ WebkitTextStroke: "2px #00FF88" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            5
          </MotionDiv>
          
          {/* Floating Elements */}
          <MotionDiv 
            className="absolute -top-10 -right-10 w-24 h-24 border border-accent rounded-full opacity-60"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <MotionDiv 
            className="absolute bottom-10 -left-10 bg-neutral/80 backdrop-blur border border-white/10 p-2 rounded text-xs font-mono text-accent"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {'<div_vision />'}
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row pt-24 md:pt-0 overflow-hidden bg-primary">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Content (60%) */}
      <div className="relative z-10 w-full md:w-[60%] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 order-2 md:order-1 h-full min-h-[50vh] md:min-h-screen">
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-muted text-xs md:text-sm tracking-[0.2em] mb-6 md:mb-8"
        >
          TECHNOLOGY COLLECTIVE
        </MotionDiv>

        <div className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[0.95] text-white mb-8 overflow-hidden">
          <MotionDiv 
            className="block"
            initial={{ y: 100 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            WE BUILD THE
          </MotionDiv>
          <MotionDiv 
            className="block text-white"
            initial={{ y: 100 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            INFRASTRUCTURE
          </MotionDiv>
          <MotionDiv 
             className="block text-neutral-500"
             initial={{ y: 100 }} 
             animate={{ y: 0 }} 
             transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            BEHIND YOUR VISION
          </MotionDiv>
        </div>

        <MotionP 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-muted text-base md:text-xl max-w-xl leading-relaxed mb-10 md:mb-12 font-light"
        >
          Three divisions. One mission. From LED walls at your event 
          to the server running your business — Code 5 delivers.
        </MotionP>

        <MotionDiv 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button variant="primary" onClick={() => document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' })}>
            EXPLORE DIVISIONS
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            SEE OUR WORK
          </Button>
        </MotionDiv>
      </div>

      {/* Right Content (40%) - Visual */}
      <div className="relative w-full md:w-[40%] h-[50vh] md:h-screen bg-neutral/5 md:bg-transparent order-1 md:order-2">
        <TechFiveVisual />
      </div>
    </section>
  );
};