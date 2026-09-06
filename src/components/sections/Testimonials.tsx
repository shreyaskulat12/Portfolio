import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  if (testimonials.length === 0) return null;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
    startTimer();
  };

  const testimonial = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-heading">
      <div className="container-max">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="What People"
          titleAccent="Say"
          description="Kind words from colleagues, managers and clients I've had the pleasure of working with."
        />

        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <div className="relative glass-card rounded-3xl p-8 md:p-12 mb-8 overflow-hidden min-h-[280px] flex flex-col justify-between">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-violet-500/20">
              <Quote className="w-20 h-20" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500/30"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-violet-600 dark:text-violet-400">
                      {testimonial.role} — {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-violet-500'
                      : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-violet-300'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl glass-card border border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:text-violet-600 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl glass-card border border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:text-violet-600 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
