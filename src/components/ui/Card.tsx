"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverLift?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverLift = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverLift ? { translateY: -4 } : {}}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "bg-white rounded-xl border border-[--color-surface-200] shadow-[--shadow-premium-soft]",
          hoverLift && "hover:shadow-[--shadow-premium-hover]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';
