import React from 'react';
import { motion } from 'framer-motion';
import { useMagnet } from '../../hooks/useMagnet';
import { cn } from '../../utils/cn';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]',
  secondary:
    'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md hover:scale-[1.02]',
  outline:
    'border-2 border-violet-500 text-violet-600 dark:text-violet-400 hover:bg-violet-500/10',
  ghost:
    'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  as = 'button',
  href,
  target,
  rel,
  className,
  ...props
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnet(0.25);

  const classes = cn(
    'relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onMouseMove={handleMouseMove as never}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.96 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={classes}
      onMouseMove={handleMouseMove as never}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
