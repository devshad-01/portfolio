import { Briefcase, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAbout, useContact } from '../../hooks/usePortfolioData';
import { urlFor } from '../../config/sanity';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { data: about } = useAbout();
  const { data: contact } = useContact();
  const [mounted, setMounted] = useState(false);
  
  const avatarUrl = about?.avatar ? urlFor(about.avatar)?.url() : null;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
           style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
             backgroundSize: '64px 64px'
           }} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8" data-aos="fade-up">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-200 dark:border-emerald-800">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {contact?.availability || 'Available for opportunities'}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                {about?.name || 'Shadrack Mutinda'}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300">
                {about?.title || 'Senior Software Engineer'}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {about?.intro || 'Experienced full-stack developer specializing in scalable web applications, cloud architecture, and enterprise solutions.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 group"
              >
                <Briefcase className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: Github, href: contact?.github, label: 'GitHub' },
                { icon: Linkedin, href: contact?.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: contact?.email ? `mailto:${contact.email}` : '', label: 'Email' }
              ].map((social) => (
                social.href && (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Avatar */}
          {avatarUrl && (
            <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-full max-w-md">
                {/* Subtle glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl blur-2xl opacity-20" />
                
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl">
                  <img
                    src={avatarUrl}
                    alt={about?.name || 'Profile'}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>

                {/* Stats badges */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">8+ Years</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Full-Stack</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Developer</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;