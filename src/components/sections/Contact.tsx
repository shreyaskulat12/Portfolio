import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Send, Copy, Check, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '../../utils/cn';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const EMAIL = 'shreyash.kulat241@sanjivani.edu.in';
const PERSONAL_EMAIL = 'shreyas.kulat1101@gmail.com';
const PHONE = '+91 9011925342';

const contactInfo = [
  { icon: Mail, label: 'Official University Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Mail, label: 'Personal Email', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
  { icon: Phone, label: 'Phone', value: PHONE, href: `tel:${PHONE}` },
  { icon: MapPin, label: 'Location', value: 'Karwadi, Ahmednagar / Sanjivani University, Maharashtra', href: null },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/shreyaskulat12', label: 'GitHub — shreyaskulat12' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shreyas-kulat-789a6332b', label: 'LinkedIn — Shreyas Kulat' },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (_data: FormData) => {
    // Integrate EmailJS or your preferred API here
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
      hasError
        ? 'border-red-400 dark:border-red-500'
        : 'border-gray-200 dark:border-gray-700 hover:border-violet-400 dark:hover:border-violet-500',
    );

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="contact-heading">
      <div className="container-max">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's"
          titleAccent="Connect"
          description="Have a project idea, collaboration opportunity, internship enquiry, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Get in touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm currently a <strong className="text-gray-900 dark:text-white">3rd year B.Tech student</strong> and open to{' '}
              <strong className="text-gray-900 dark:text-white">internship opportunities, collaborations</strong> and interesting conversations about technology.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                  <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{value}</span>
                    )}
                  </div>
                  {label === 'Email' && (
                    <button
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="ml-auto p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-400 hover:text-violet-500"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl glass-card border border-gray-200 dark:border-gray-700 hover:border-violet-500 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Philosophy */}
            <div className="p-4 glass-card rounded-2xl border-l-4 border-cyan-500">
              <p className="text-sm italic text-gray-600 dark:text-gray-400">
                "Learn. Build. Experiment. Improve."
              </p>
              <p className="text-xs text-gray-400 mt-1">— My engineering philosophy</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-7">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-2">Message sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out — I'll get back to you as soon as I can.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        className={inputClass(!!errors.name)}
                        {...register('name')}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        className={inputClass(!!errors.email)}
                        {...register('email')}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Internship opportunity / Project collaboration / Say hello"
                      className={inputClass(!!errors.subject)}
                      {...register('subject')}
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your project, opportunity or idea..."
                      className={cn(inputClass(!!errors.message), 'resize-none')}
                      {...register('message')}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
