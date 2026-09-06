import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Copy, Check, Code2, Briefcase, MessageCircle, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import type { PersonalInfo } from '../../types';

interface ContactProps {
  info: PersonalInfo;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact({ info }: ContactProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1500)); // Simulate API call
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const InputField = ({ id, label, type = 'text', value, onChange, error, placeholder, textarea = false }: {
    id: keyof FormState; label: string; type?: string; value: string;
    onChange: (v: string) => void; error?: string; placeholder?: string; textarea?: boolean;
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{label}</label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => { onChange(e.target.value); if (errors[id]) setErrors(p => ({ ...p, [id]: undefined })); }}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${error ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'} text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none text-sm`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => { onChange(e.target.value); if (errors[id]) setErrors(p => ({ ...p, [id]: undefined })); }}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${error ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'} text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm`}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );

  const socialMap = [
    { platform: 'github', icon: <Code2 size={18} />, label: 'GitHub' },
    { platform: 'linkedin', icon: <Briefcase size={18} />, label: 'LinkedIn' },
    { platform: 'twitter', icon: <MessageCircle size={18} />, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Contact" accentWord="Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Let's work together</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a href={`mailto:${info.email}`} className="text-sm text-violet-600 dark:text-violet-400 hover:underline">{info.email}</a>
                    <button onClick={handleCopyEmail} className="text-gray-400 hover:text-violet-500 transition-colors" aria-label="Copy email">
                      {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{info.location}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Timezone</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`w-2 h-2 rounded-full ${info.availableForWork ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.timezone} · {info.availableForWork ? 'Available now' : 'Currently busy'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Find me on</p>
              <div className="flex gap-3">
                {socialMap.map(({ platform, icon, label }) => {
                  const link = info.socialLinks.find(s => s.platform === platform);
                  if (!link) return null;
                  return (
                    <motion.a
                      key={platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center p-12 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <Check size={32} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <Button variant="outline" size="sm" onClick={() => setSent(false)}>Send Another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField id="name" label="Your Name" value={form.name} onChange={(v) => setForm(p => ({ ...p, name: v }))} error={errors.name} placeholder="Alex Morgan" />
                  <InputField id="email" label="Email Address" type="email" value={form.email} onChange={(v) => setForm(p => ({ ...p, email: v }))} error={errors.email} placeholder="you@example.com" />
                </div>
                <InputField id="subject" label="Subject" value={form.subject} onChange={(v) => setForm(p => ({ ...p, subject: v }))} error={errors.subject} placeholder="Project inquiry / Collaboration" />
                <InputField id="message" label="Message" value={form.message} onChange={(v) => setForm(p => ({ ...p, message: v }))} error={errors.message} placeholder="Tell me about your project..." textarea />
                <Button variant="primary" size="lg" fullWidth loading={sending} type="submit" icon={<Send size={16} />} iconPosition="right">
                  {sending ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
