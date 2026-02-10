import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  withArrow = false,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium tracking-wide transition-all duration-300 transform group";
  
  const variants = {
    primary: "bg-accent text-primary hover:bg-white hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]",
    outline: "border border-neutral text-white hover:border-accent hover:text-accent bg-transparent hover:bg-neutral/30",
    ghost: "text-muted hover:text-accent bg-transparent hover:translate-x-1"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
};