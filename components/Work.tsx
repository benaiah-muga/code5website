import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const MotionSpan = motion.span as any;
const MotionH2 = motion.h2 as any;
const MotionDiv = motion.div as any;

export const Work: React.FC = () => {
  return (
    <section id="work" className="bg-primary py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <MotionSpan 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-mono text-accent text-sm tracking-widest uppercase mb-4 block"
                >
                    Founding Clients
                </MotionSpan>
                <MotionH2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-display font-bold text-white max-w-2xl"
                >
                    CRAFTING THE <br />NEXT GENERATION
                </MotionH2>
            </div>
            <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Button variant="outline" withArrow>VIEW ALL PROJECTS</Button>
            </MotionDiv>
        </div>

        {/* Project "Slots" or Early Work Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => (
                <MotionDiv 
                    key={item}
                    className="group relative h-[400px] bg-neutral border border-white/5 rounded-lg overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    {/* Placeholder content for "Founding Clients" if no portfolio exists yet, or actual projects */}
                    <div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-500">
                        {/* Abstract background pattern */}
                        <div className="absolute inset-0 opacity-20" style={{ 
                            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                            backgroundSize: '20px 20px' 
                        }}></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                             {i === 0 && <span className="text-6xl text-white/5 font-display font-bold group-hover:text-white/10 transition-colors">MEDIA</span>}
                             {i === 1 && <span className="text-6xl text-white/5 font-display font-bold group-hover:text-white/10 transition-colors">NET</span>}
                             {i === 2 && <span className="text-6xl text-white/5 font-display font-bold group-hover:text-white/10 transition-colors">DEV</span>}
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col gap-2">
                            <span className="text-accent text-xs font-mono uppercase tracking-wider">
                                {i === 0 ? 'Event Production' : i === 1 ? 'Infrastructure' : 'Web Application'}
                            </span>
                            <h3 className="text-2xl font-display font-bold text-white">
                                {i === 0 ? 'Neon Horizon Festival' : i === 1 ? 'SecureCore Systems' : 'FinTech Dashboard'}
                            </h3>
                            <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                {i === 0 
                                    ? 'Full scale LED wall implementation and live content management.' 
                                    : i === 1 
                                    ? 'Complete server installation and security grid setup.' 
                                    : 'React-based high performance trading interface.'}
                            </p>
                        </div>
                    </div>
                </MotionDiv>
            ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-neutral border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Accepting New Projects for Q4 2024</h3>
                <p className="text-neutral-400">We are selective with our partnerships to ensure maximum quality.</p>
            </div>
            <Button className="whitespace-nowrap">APPLY FOR A SLOT</Button>
        </div>
      </div>
    </section>
  );
};