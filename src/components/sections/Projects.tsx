import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { projects, allTags } from '../../data/projects';
import type { Project } from '../../types';
import { cn } from '../../utils/cn';

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {project.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow">
            Featured
          </span>
        )}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="View on GitHub"
              className="p-2 rounded-xl glass text-white hover:text-violet-300 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="View live site"
              className="p-2 rounded-xl glass text-white hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-gray-900 dark:text-white font-display text-lg leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-gray-400 font-mono flex-shrink-0">{project.year}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="violet" size="sm">{tag}</Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge size="sm">+{project.tags.length - 4}</Badge>
          )}
        </div>
        <div className="mt-4 flex items-center gap-1 text-violet-600 dark:text-violet-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          View details <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Modal isOpen onClose={onClose} size="xl">
      {/* Hero image */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
          <p className="text-gray-300 text-sm mt-1">{project.description}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl glass text-white hover:text-violet-300"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-6">{project.longDescription}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="violet" size="md">{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-600 transition-all"
            >
              <GithubIcon className="w-4 h-4" /> Source Code
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}

export function Projects() {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayed = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  const topTags = ['All', ...allTags.slice(0, 10)];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="projects-heading">
      <div className="container-max">
        <SectionHeading
          id="projects-heading"
          eyebrow="Portfolio"
          title="Featured"
          titleAccent="Projects"
          description="A selection of projects that showcase my engineering skills, creativity and product thinking."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 no-scrollbar overflow-x-auto">
          {topTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200',
                activeTag === tag
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400',
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {displayed.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-16">
            No projects found for this filter.
          </p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
