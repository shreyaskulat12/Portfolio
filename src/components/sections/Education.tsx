import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Star } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { education } from '../../data/education';

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="education-heading">
      <div className="container-max">
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Academic"
          titleAccent="Background"
          description="My formal education and ongoing learning that laid the foundation for my engineering career."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.article
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-7 hover-lift relative overflow-hidden"
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500" />

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium text-sm">{edu.field}</p>
                </div>
              </div>

              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{edu.institution}</p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {edu.location}
                </span>
                <span className="font-mono">{edu.startDate} — {edu.endDate}</span>
                {edu.gpa && (
                  <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" /> GPA: {edu.gpa}
                  </span>
                )}
              </div>

              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
