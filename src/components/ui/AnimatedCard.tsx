import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'violet' | 'fuchsia' | 'blue' | 'cyan' | 'pink';
  tilt?: boolean;
  delay?: number;
  onClick?: () => void;
}

const borderGradients = {
  violet: 'from-violet-500 to-fuchsia-500',
  fuchsia: 'from-fuchsia-500 to-pink-500',
  blue: 'from-blue-500 to-cyan-500',
  cyan: 'from-cyan-500 to-teal-500',
  pink: 'from-pink-500 to-rose-500',
};

export default function AnimatedCard({ children, className = '', glowColor = 'violet', tilt = true, delay = 0, onClick }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      className={`relative group ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${borderGradients[glowColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
      <div className={`relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 ${className}`}>
        {children}
      </div>
    </motion.div>
  );
}
