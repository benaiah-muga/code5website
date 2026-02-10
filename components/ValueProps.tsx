import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Globe, Lock } from 'lucide-react';

const MotionDiv = motion.div as any;

export const ValueProps: React.FC = () => {
  return (
    <section className="bg-primary py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                BUILT <span className="text-accent">DIFFERENT</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
                We don't just supply technology. We engineer the foundation of your success with a fresh, relentless approach.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Large Box */}
            <MotionDiv 
                className="col-span-1 md:col-span-6 lg:col-span-7 row-span-2 bg-neutral p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-4">End-to-End Solutions</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
                            Need LED screens at your launch event AND a website for registrations? One team. One vision. Seamless execution. We eliminate the friction of managing multiple vendors.
                        </p>
                    </div>
                    <div className="mt-8 flex gap-2">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/70">Unified</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/70">Efficient</span>
                    </div>
                </div>
            </MotionDiv>

            {/* Medium Box 1 */}
            <MotionDiv 
                className="col-span-1 md:col-span-6 lg:col-span-5 bg-neutral p-8 rounded-2xl border border-white/5 hover:border-accent-alt/30 transition-colors duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-white">Young & Hungry</h3>
                    <Users className="text-accent-alt" />
                </div>
                <p className="text-neutral-400">
                    We bring fresh perspectives, modern tech stacks, and relentless dedication to every project. We're not afraid to challenge the status quo to get better results.
                </p>
            </MotionDiv>

            {/* Medium Box 2 */}
            <MotionDiv 
                className="col-span-1 md:col-span-6 lg:col-span-5 bg-neutral p-8 rounded-2xl border border-white/5 hover:border-[#00CCFF]/30 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-white">Local First</h3>
                    <Globe className="text-[#00CCFF]" />
                </div>
                <p className="text-neutral-400">
                    Based in Kampala. We know the market. We're not outsourced support in a different time zone — we're your neighbors, ready to be on-site when you need us.
                </p>
            </MotionDiv>

             {/* Small Box 1 */}
             <MotionDiv 
                className="col-span-1 md:col-span-3 lg:col-span-4 bg-neutral p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                 <div className="flex flex-col h-full justify-between">
                    <Lock className="text-white mb-4" />
                    <div>
                        <h3 className="text-lg font-display font-bold text-white mb-2">Transparent</h3>
                        <p className="text-sm text-neutral-400">No hidden fees. Clear pricing structures.</p>
                    </div>
                 </div>
            </MotionDiv>

            {/* Small Box 2 */}
            <MotionDiv 
                className="col-span-1 md:col-span-3 lg:col-span-8 bg-neutral p-8 rounded-2xl border border-white/5 flex items-center justify-between group overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                 <div className="relative z-10">
                    <h3 className="text-xl font-display font-bold text-white mb-1">Ready to scale?</h3>
                    <p className="text-neutral-400 text-sm">Let's build something great together.</p>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                 </div>
                 <div className="absolute inset-0 bg-accent/5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </MotionDiv>

        </div>
      </div>
    </section>
  );
};