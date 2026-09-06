import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import type { Education } from '../../types';

interface EducationProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationProps) {
  const formatDate = (d: string) => {
    const [y, m] = d.split('-');
    return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m)-1]} ${y}`;
  };

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" subtitle="Academic Background" accentWord="Education" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree} in {edu.field}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {edu.institutionUrl ? (
                          <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer"
                            className="text-violet-600 dark:text-violet-400 font-semibold hover:underline flex items-center gap-1">
                            {edu.institution} <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-violet-600 dark:text-violet-400 font-semibold">{edu.institution}</span>
                        )}
                        {edu.honors && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium">{edu.honors}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(edu.startDate)} — {edu.endDate ? formatDate(edu.endDate) : 'Present'}</span>
                    </div>
                  </div>

                  {edu.gpa && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">GPA: <strong>{edu.gpa}</strong></p>
                  )}

                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Relevant Courses</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((c) => (
                          <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.activities && edu.activities.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Activities</p>
                      <ul className="space-y-1">
                        {edu.activities.map((act, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
