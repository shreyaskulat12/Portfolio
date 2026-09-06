import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  accentWord?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, align = 'center', accentWord, className = '' }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const alignClass = { left: 'items-start text-left', center: 'items-center text-center', right: 'items-end text-right' }[align];

  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} mb-12 ${className}`}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">{subtitle}</span>
        </motion.div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">{renderTitle()}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ${align === 'left' ? 'origin-left' : align === 'right' ? 'origin-right' : 'origin-center'}`}
      />
    </motion.div>
  );
}
