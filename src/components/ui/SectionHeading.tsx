import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  titleAccent,
  description,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16', center && 'text-center', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}{' '}
        {titleAccent && <span className="gradient-text">{titleAccent}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
