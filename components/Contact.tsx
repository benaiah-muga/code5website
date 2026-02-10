import React from 'react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-primary py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                HAVE A PROJECT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">IN MIND?</span>
            </h2>
            <p className="text-xl text-neutral-400">
                Let's talk about how Code 5 can help build your vision.
            </p>
        </div>

        <div className="max-w-2xl mx-auto bg-neutral border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl">
            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-mono text-white/70">NAME</label>
                        <input type="text" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-mono text-white/70">EMAIL</label>
                        <input type="email" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-mono text-white/70">DIVISION OF INTEREST</label>
                    <div className="grid grid-cols-3 gap-3">
                        {['MEDIA', 'NETWORKS', 'DEV'].map(opt => (
                            <label key={opt} className="cursor-pointer">
                                <input type="radio" name="division" className="peer hidden" />
                                <div className="text-center py-3 rounded border border-white/10 text-white/50 text-sm font-medium hover:bg-white/5 peer-checked:border-accent peer-checked:text-accent peer-checked:bg-accent/10 transition-all">
                                    {opt}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-mono text-white/70">TELL US ABOUT IT</label>
                    <textarea rows={4} className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Brief description of your project needs..."></textarea>
                </div>

                <Button className="w-full mt-4" withArrow>SEND MESSAGE</Button>
            </form>
        </div>
      </div>
    </section>
  );
};