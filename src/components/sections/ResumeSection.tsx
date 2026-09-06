import { motion } from 'framer-motion';
import { Download, FileText, Mail, Phone, MapPin, Award, CheckCircle2, GraduationCap, Code, Globe, User } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="resume-heading">
      <div className="container-max">
        <SectionHeading
          id="resume-heading"
          eyebrow="Curriculum Vitae"
          title="Official"
          titleAccent="Resume"
          description="Detailed breakdown of my academic record, technical competencies, projects, and certifications."
        />

        {/* Action bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
            <FileText className="w-4 h-4 text-violet-500" />
            <span>Official Resume Document • Shreyas Kulat</span>
          </div>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" /> Download / Print PDF Resume
          </a>
        </div>

        {/* Paper Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto border border-gray-200/80 dark:border-gray-700/80 shadow-2xl relative overflow-hidden"
        >
          {/* Top Decorative Banner */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500" />

          {/* Resume Header */}
          <div className="border-b border-gray-200 dark:border-gray-700/60 pb-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-0.5 bg-gradient-to-br from-violet-500 to-cyan-500 shadow-md flex-shrink-0">
                  <img
                    src="/shreyas.jpg"
                    alt="Shreyas Kulat"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Shreyas Kulat
                  </h2>
                  <p className="text-violet-600 dark:text-violet-400 font-semibold text-base sm:text-lg mt-1">
                    Computer Science Engineering Student • Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>

              {/* Contact Pill Badges */}
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <a href="mailto:shreyash.kulat241@sanjivani.edu.in" className="flex items-center gap-2 hover:text-violet-500 transition-colors">
                  <Mail className="w-4 h-4 text-violet-500 flex-shrink-0" />
                  <span>shreyash.kulat241@sanjivani.edu.in</span>
                </a>
                <a href="tel:+919011925342" className="flex items-center gap-2 hover:text-violet-500 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span>+91 9011925342</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Karwadi, Ahmednagar / Sanjivani University</span>
                </span>
                <div className="flex items-center gap-4 mt-1">
                  <a href="https://github.com/shreyaskulat12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-violet-500 transition-colors">
                    <GithubIcon className="w-4 h-4" /> github.com/shreyaskulat12
                  </a>
                  <a href="https://www.linkedin.com/in/shreyas-kulat-789a6332b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-violet-500 transition-colors">
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column — 4 cols (Education, Skills, Certifications, Languages) */}
            <div className="lg:col-span-5 space-y-8 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700/60 lg:pr-6 pb-8 lg:pb-0">
              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 text-violet-600 dark:text-violet-400">
                  <GraduationCap className="w-5 h-5" /> Education
                </h3>
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/30">
                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                      B.Tech — CSE (AIML)
                    </div>
                    <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-0.5">
                      F-Y CGPA: 8.25
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Sanjivani University (2024 — 2028)
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                      12th HSC (61.33%)
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                      Madhyamik V Uccha Madhyamik Vidyalay, Karwadi Ahmednagar (2022 — 2023)
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                      10th SSC (80.80%)
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                      Madhyamik V Uccha Madhyamik Vidyalay, Karwadi Ahmednagar (2020 — 2021)
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 text-cyan-600 dark:text-cyan-400">
                  <Code className="w-5 h-5" /> Technical Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['C++', 'Python', 'R', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP', 'UI/UX Design', 'Figma', 'Prototyping'].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" /> Certifications
                </h3>
                <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Introduction to Python</strong> — IBM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Digital 101 Journey</strong> — NASSCOM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Fundamental of AI & GenAI</strong> — LearnTube</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Exploratory Data Analysis</strong> — NASSCOM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Process Mining Fundamentals</strong> — Celonis</span>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2 text-amber-600 dark:text-amber-400">
                  <Globe className="w-5 h-5" /> Languages
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">English</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">Hindi</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">Marathi</span>
                </div>
              </div>
            </div>

            {/* Right Column — 7 cols (Objective & Key Projects) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Objective */}
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 text-violet-600 dark:text-violet-400">
                  <User className="w-5 h-5" /> Professional Objective
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-200/60 dark:border-gray-700/60">
                  A highly motivated and results-driven Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, eager to apply theoretical knowledge in practical, innovative solutions. Passionate about leveraging AI/ML algorithms to solve complex real-world problems, enhance user experiences, and drive technological advancement. Seeking an internship or entry-level opportunity to collaborate with a dynamic team, further develop technical skills, and contribute to cutting-edge AI-driven projects.
                </p>
              </div>

              {/* Featured Projects */}
              <div>
                <h3 className="font-display text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 text-cyan-600 dark:text-cyan-400">
                  Key Projects
                </h3>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-gray-900 dark:text-white text-base">
                        AI Assistance Refrigerator
                      </h4>
                      <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded">
                        AI / ML & IoT
                      </span>
                    </div>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-300 list-disc list-inside">
                      <li><strong>Cameras & Sensors:</strong> Monitors fridge contents, recognizes items, tracks freshness/expiration dates.</li>
                      <li><strong>Machine Learning:</strong> Analyzes usage patterns, predicts inventory needs, suggests recipes.</li>
                      <li><strong>Voice Assistants:</strong> Integration with Amazon Alexa & Google Assistant for voice reminders.</li>
                      <li><strong>Smartphone Control:</strong> Remote control for fridge settings, shopping list management.</li>
                      <li><strong>Temperature Control:</strong> Optimizes temperature for food types & energy efficiency.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-gray-900 dark:text-white text-base">
                        Contact Manager & Payment Application
                      </h4>
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold bg-cyan-50 dark:bg-cyan-900/30 px-2 py-0.5 rounded">
                        Python & GUI
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      A Python desktop application allowing users to store and manage contact information, categorize contacts, add notes, and process secure payments with integrated UPI payment workflows.
                    </p>
                  </div>

                  {/* Project 3 & 4 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                        Amazon & Zomato Clones
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Front-end web development replicas built with HTML and CSS to recreate e-commerce and food delivery interfaces.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                        Figma UI/UX & Prototyping
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        User interface designs, wireframing, interactive prototyping, and user flow transitions for web and mobile apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
