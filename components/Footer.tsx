import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand */}
            <div className="md:col-span-4 flex flex-col items-start gap-6">
                 <a href="#" className="flex items-center gap-1 font-display font-bold text-2xl tracking-tighter text-white">
                    CODE
                    <span className="text-accent">5</span>
                </a>
                <p className="text-neutral-400 max-w-xs">
                    Technology that moves you forward. Building the infrastructure behind your vision.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                        <Github size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>

            {/* Links */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-mono text-sm text-white font-bold tracking-wider mb-6">DIVISIONS</h4>
                    <ul className="flex flex-col gap-4 text-neutral-400">
                        <li><a href="#" className="hover:text-accent transition-colors">Media</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Networks</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Dev</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-sm text-white font-bold tracking-wider mb-6">COMPANY</h4>
                    <ul className="flex flex-col gap-4 text-neutral-400">
                        <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-sm text-white font-bold tracking-wider mb-6">CONTACT</h4>
                    <ul className="flex flex-col gap-4 text-neutral-400">
                        <li><a href="mailto:stuartdonsms@gmail.com" className="hover:text-accent transition-colors break-words">stuartdonsms@gmail.com</a></li>
                        <li><a href="tel:+256700000000" className="hover:text-accent transition-colors">+256 700 000 000</a></li>
                        <li className="text-white/30">Kampala, Uganda</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
                © 2026 Code 5. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};