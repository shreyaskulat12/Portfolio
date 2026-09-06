import { motion } from 'framer-motion';

const blobs = [
  { x: '10%', y: '20%', size: 400, color: 'from-violet-600/20 to-purple-600/10', delay: 0, duration: 18 },
  { x: '70%', y: '10%', size: 350, color: 'from-cyan-500/15 to-blue-600/10', delay: 2, duration: 22 },
  { x: '50%', y: '60%', size: 500, color: 'from-purple-600/10 to-violet-400/15', delay: 4, duration: 20 },
  { x: '80%', y: '70%', size: 300, color: 'from-cyan-400/10 to-teal-500/10', delay: 1, duration: 25 },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-radial ${blob.color} blur-3xl`}
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, var(--tw-gradient-stops))`,
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
