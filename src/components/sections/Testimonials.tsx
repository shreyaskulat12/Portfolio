import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import type { Testimonial } from '../../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const go = (dir: number) => {
    setDirection(dir);
    setActiveIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What People Say" subtitle="Testimonials" accentWord="People" />

        <div className="relative">
          {/* Large quote decoration */}
          <div className="absolute -top-6 -left-4 text-violet-200 dark:text-violet-900 pointer-events-none">
            <Quote size={80} />
          </div>

          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed italic mb-8 pl-4">
                  "{active.content}"
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                      {active.avatarUrl ? (
                        <img src={active.avatarUrl} alt={active.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-violet-500 font-bold">{active.name[0]}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{active.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{active.role} @ {active.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-violet-500' : 'w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-violet-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                onClick={() => go(-1)}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-violet-400 hover:text-violet-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={() => go(1)}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-violet-400 hover:text-violet-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
