import { Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAbout, useContact } from '../../hooks/usePortfolioData';

const Hero = () => {
  const { data: about } = useAbout();
  const { data: contact } = useContact();
  
  return (
    <section className="bg-accent-primary dark:bg-dark-bg py-12 md:py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute left-8 top-16 w-40 h-40 bg-nb-pink/30 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute right-8 top-12 w-48 h-48 bg-nb-orange/30 rounded-full blur-3xl hidden lg:block" />
      
      <div className="max-w-narrow mx-auto px-6 relative z-10 text-center">
        {/* Status badge */}
        <div className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-4 border-nb-black rounded-full shadow-brutal-sm dark:shadow-brutal-sm-dark">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-black uppercase tracking-wide text-nb-black">
              {contact?.availability || 'Open to Opportunities'}
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-hero-mobile md:text-hero font-black text-white mb-4">
          {about?.name || 'Shadrack Mutinda'}
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-black text-white/90 mb-6">
          {about?.title || 'Senior Software Engineer'}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {about?.intro || 'Experienced full-stack developer specializing in scalable web applications, cloud architecture, and enterprise solutions.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-nb-black text-white font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <Briefcase className="w-5 h-5" />
            View Work
          </Link>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-nb-black font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {contact?.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
            >
              <Github className="w-6 h-6 text-nb-black" />
            </a>
          )}
          {contact?.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-nb-black" />
            </a>
          )}
          {contact?.email && (
            <a
              href={`mailto:${contact.email}`}
              className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-nb-black" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
