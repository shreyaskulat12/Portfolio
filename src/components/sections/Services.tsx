import { motion } from 'framer-motion';
import React from 'react';
import { Monitor, Layers, Zap, GitBranch, Users, Mic, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { services } from '../../data/services';
import { cn } from '../../utils/cn';

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor, Layers, Zap, GitBranch, Users, Mic,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="services-heading">
      <div className="container-max">
        <SectionHeading
          id="services-heading"
          eyebrow="What I Do"
          title="Areas of"
          titleAccent="Focus"
          description="The technical areas I'm actively building skills in and applying through projects and experimentation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconComponents[service.icon] ?? Monitor;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-7 group relative overflow-hidden"
              >
                {/* Gradient shine on hover */}
                <div className={cn('absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-br', service.gradient)} />
                <div className="relative">
                  <div className={cn('inline-flex p-3 rounded-2xl text-white mb-5 shadow-lg bg-gradient-to-br', service.gradient)}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Interested in working together?</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
