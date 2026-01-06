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
    <section className="relative bg-nb-blue overflow-hidden py-section">
      {/* Brutalist background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-nb-pink rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-nb-orange rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-nb-cyan rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between gap-12 lg:gap-16">
          
          {/* Content */}
          <div className="space-y-8 max-w-2xl" data-aos="fade-up">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-4 border-nb-black rounded-full shadow-brutal">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-black text-nb-black uppercase">
                {contact?.availability || 'Available for opportunities'}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
                {about?.name || 'Shadrack Mutinda'}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-black text-[#b5ff6d]">
                {about?.title || 'Senior Software Engineer'}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl font-bold text-white leading-relaxed max-w-xl">
              {about?.intro || 'Experienced full-stack developer specializing in scalable web applications, cloud architecture, and enterprise solutions.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-nb-black text-white font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
              >
                <Briefcase className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-nb-black font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
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
                    className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-nb-black" />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Avatar */}
          {avatarUrl && (
            <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-full max-w-md">
                {/* Image */}
                <div className="relative border-4 border-nb-black rounded-2xl overflow-hidden bg-white shadow-brutal">
                  <img
                    src={avatarUrl}
                    alt={about?.name || 'Profile'}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
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