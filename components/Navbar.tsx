import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Divisions', href: '#divisions' },
    { name: 'Work', href: '#work' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-primary/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative group">
          <div className="flex items-center gap-1 font-display font-bold text-2xl tracking-tighter">
            CODE
            <span className="text-accent group-hover:rotate-12 transition-transform duration-300 inline-block">5</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button variant="outline" className="!py-2 !px-4 text-xs">
            GET IN TOUCH
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-display font-medium text-white/80 hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4">GET IN TOUCH</Button>
        </div>
      )}
    </nav>
  );
};