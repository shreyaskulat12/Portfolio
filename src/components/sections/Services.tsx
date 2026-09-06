import { motion } from 'framer-motion';
import { Monitor, Layers, Zap, Code2, Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import type { Service } from '../../types';

interface ServicesProps {
  services: Service[];
}

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={28} />,
  layers: <Layers size={28} />,
  zap: <Zap size={28} />,
  'code-2': <Code2 size={28} />,
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Services I Offer" subtitle="What I Do" accentWord="Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon] || <Code2 size={28} />}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Check size={14} className="text-violet-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  {service.startingPrice && (
                    <p className="text-xs text-gray-400 mb-1">Starting from</p>
                  )}
                  {service.startingPrice && (
                    <p className="text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{service.startingPrice}</p>
                  )}
                  {service.turnaround && (
                    <p className="text-xs text-gray-400 mt-0.5">⏱ {service.turnaround}</p>
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
