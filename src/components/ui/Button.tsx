"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-brand-500] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
    
    const variants = {
      primary: "bg-[--color-brand-600] text-white hover:bg-[--color-brand-700] shadow-[--shadow-premium-soft] hover:shadow-[--shadow-premium-hover]",
      secondary: "bg-[--color-brand-100] text-[--color-brand-800] hover:bg-[--color-brand-200]",
      outline: "border border-[--color-brand-200] bg-transparent hover:bg-[--color-brand-50] text-[--color-brand-700]",
      ghost: "bg-transparent hover:bg-[--color-surface-100] text-[--color-text-secondary] hover:text-[--color-text-primary]",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ translateY: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
